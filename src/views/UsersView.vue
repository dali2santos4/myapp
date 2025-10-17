<template>
  <div class="users-management">
    <div class="header">
      <h2><i class="fas fa-users"></i> Users Management</h2>
    </div>

    <!-- Create User Button -->
    <div class="action-bar">
      <button @click="openAddUserModal" class="add-user-btn">
        <i class="fas fa-plus"></i> Create User
      </button>

      <div class="controls">
        <div class="search-box">
          <i class="fas fa-search"></i>
          <input 
            v-model="searchQuery" 
            placeholder="Search users..." 
            @input="filterUsers"
          >
        </div>
        <select v-model="roleFilter" @change="filterUsers" class="role-filter">
          <option value="">All Roles</option>
          <option v-for="role in availableRoles" :value="role" :key="role">
            {{ role }}
          </option>
        </select>
      </div>
    </div>

    <!-- User Table -->
    <div class="user-table-container">
      <table class="user-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users" :key="user.id">
            <td>{{ user.id }}</td>
            <td>{{ user.firstName }}</td>
            <td>{{ user.lastName }}</td>
            <td>{{ user.email }}</td>
            <td>
              <span :class="['role-badge', user.role.toLowerCase()]">
                {{ user.role }}
              </span>
            </td>
            <td>
              <span :class="['status-badge', user.active ? 'active' : 'inactive']">
                {{ user.active ? 'Active' : 'Inactive' }}
              </span>
            </td>
            <td class="actions">
              <button @click="editUser(user)" class="edit-btn">
                <i class="fas fa-edit"></i>
              </button>
              <button @click="confirmDelete(user)" class="delete-btn">
                <i class="fas fa-trash"></i>
              </button>
            </td>
          </tr>
        </tbody>
      </table>

      <div class="pagination" v-if="filteredUsers.length > itemsPerPage">
        <button 
          @click="currentPage--" 
          :disabled="currentPage === 1"
          class="page-btn"
        >
          <i class="fas fa-chevron-left"></i>
        </button>
        <span class="page-info">
          Page {{ currentPage }} of {{ totalPages }}
        </span>
        <button 
          @click="currentPage++" 
          :disabled="currentPage === totalPages"
          class="page-btn"
        >
          <i class="fas fa-chevron-right"></i>
        </button>
      </div>
    </div>

    <!-- Add/Edit User Modal -->
    <div v-if="showModal" class="modal-overlay">
      <div class="modal">
        <div class="modal-header">
          <h3>{{ editingUser ? 'Edit User' : 'Create New User' }}</h3>
          <button @click="closeModal" class="close-btn">
            <i class="fas fa-times"></i>
          </button>
        </div>
        <div class="modal-body">
          <form @submit.prevent="submitUser">
            <div class="form-row">
              <div class="form-group">
                <label>First Name*</label>
                <input v-model="formData.firstName" required>
              </div>
              <div class="form-group">
                <label>Last Name*</label>
                <input v-model="formData.lastName" required>
              </div>
            </div>
            <div class="form-group">
              <label>Email*</label>
              <input v-model="formData.email" type="email" required :readonly="editingUser !== null">
            </div>
            
            <!-- Password Fields -->
            <div class="form-row">
              <div class="form-group">
                <label>{{ editingUser ? 'New Password' : 'Password*' }}</label>
                <div class="password-input-container">
                  <input 
                    :type="showPassword ? 'text' : 'password'" 
                    v-model="formData.password" 
                    :required="!editingUser"
                    minlength="6"
                  >
                  <i 
                    :class="['password-toggle', 'fas', showPassword ? 'fa-eye-slash' : 'fa-eye']" 
                    @click="showPassword = !showPassword"
                  ></i>
                </div>
                <div class="password-requirements" v-if="!editingUser">
                  Must be at least 6 characters
                </div>
              </div>
              <div class="form-group">
                <label>{{ editingUser ? 'Confirm New Password' : 'Confirm Password*' }}</label>
                <div class="password-input-container">
                  <input 
                    :type="showConfirmPassword ? 'text' : 'password'" 
                    v-model="formData.confirmPassword" 
                    :required="!editingUser"
                  >
                  <i 
                    :class="['password-toggle', 'fas', showConfirmPassword ? 'fa-eye-slash' : 'fa-eye']" 
                    @click="showConfirmPassword = !showConfirmPassword"
                  ></i>
                </div>
              </div>
            </div>
            
            <div class="form-row">
              <div class="form-group">
                <label>Role*</label>
                <select v-model="formData.role" required>
                  <option v-for="role in availableRoles" :value="role" :key="role">
                    {{ role }}
                  </option>
                </select>
              </div>
              <div class="form-group">
                <label>Status</label>
                <div class="toggle-switch">
                  <input 
                    type="checkbox" 
                    id="status-toggle" 
                    v-model="formData.active"
                  >
                  <label for="status-toggle"></label>
                  <span>{{ formData.active ? 'Active' : 'Inactive' }}</span>
                </div>
              </div>
            </div>
            <div class="form-actions">
              <button type="button" @click="closeModal" class="cancel-btn">
                Cancel
              </button>
              <button type="submit" class="submit-btn">
                {{ editingUser ? 'Update User' : 'Create User' }}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>

    <!-- Delete Confirmation Modal -->
    <div v-if="showDeleteModal" class="modal-overlay">
      <div class="modal delete-modal">
        <h3>Confirm Deletion</h3>
        <p>Are you sure you want to delete user "{{ userToDelete?.value?.firstName }} {{ userToDelete?.value?.lastName }}"?</p>
        <div class="modal-actions">
          <button @click="showDeleteModal = false" class="cancel-btn">
            Cancel
          </button>
          <button @click="deleteUser" class="delete-confirm-btn">
            Delete
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import axios from 'axios';

const token = localStorage.getItem('token')

const api = axios.create({
  baseURL: 'http://localhost:5000/api',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  }
});

const users = ref([]);
const availableRoles = ['ADM', 'Manager', 'Staff', 'User'];
const searchQuery = ref('');
const roleFilter = ref('');
const filteredUsers = ref([]);
const currentPage = ref(1);
const itemsPerPage = 10;

// Modal controls
const showModal = ref(false);
const showDeleteModal = ref(false);
const editingUser = ref(null);
const userToDelete = ref(null);
const showPassword = ref(false);
const showConfirmPassword = ref(false);

const formData = ref({
  id: null,
  firstName: '',
  lastName: '',
  email: '',
  role: 'User',
  password: '',
  confirmPassword: '',
  active: true
});

// Computed properties
/*const paginatedUsers = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  return filteredUsers.value.slice(start, end);
});*/

const totalPages = computed(() => {
  return Math.ceil(filteredUsers.value.length / itemsPerPage);
});

// Methods
const fetchUsers = async () => {
  try {
    const response = await axios.get('http://localhost:5000/api/users', {
      headers: {
        'Accept': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    });
    console.log('Fetched users:', response.data);
    users.value = response.data;
    filteredUsers.value = response.data;
  } catch (error) {
    console.error('Full error:', {
      message: error.message,
      config: error.config,
      response: error.response
    });
    alert('Failed to load users. Check console for details.');
  }
};

const filterUsers = () => {
  //filteredUsers.value = users.value;
  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase();
    users.value = users.value.filter(user =>
      user.firstName?.toLowerCase().includes(query) ||
      user.lastName?.toLowerCase().includes(query) ||
      user.email?.toLowerCase().includes(query)
    );
  }else{
    users.value = filteredUsers.value;
  }
  currentPage.value = 1;
};

const openAddUserModal = () => {
  resetForm();
  editingUser.value = null;
  showModal.value = true;
};

const editUser = (user) => {
  formData.value = { 
    id: user._id,
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    password: '',
    confirmPassword: '',
    role: user.role,
    active: user.active
  };
  editingUser.value = user.email;
  showModal.value = true;
};

const confirmDelete = (user) => {
  userToDelete.value = user;
  console.log('User to delete:', userToDelete.value);
  showDeleteModal.value = true;
};

const deleteUser = async () => {
  try {
    await api.delete(`/users/${userToDelete.value.email}`);
    await fetchUsers();
    showDeleteModal.value = false;
  } catch (error) {
    console.error('Error deleting user:', error);
    alert('Failed to delete user');
  }
};

const submitUser = async () => {
  // Validate passwords if creating a new user
    if (!editingUser.value) {
        if (formData.value.password.length < 6) {
            alert('Password must be at least 6 characters long');
            return;
        }
        
        if (formData.value.password !== formData.value.confirmPassword) {
            alert('Passwords do not match');
            return;
        }
    }
  try {
    if (editingUser.value) {
      // Update existing user
      await api.put(`/users/${editingUser.value}`, formData.value);
    } else {
      // Add new user
      await api.post('/users', formData.value);
    }
    await fetchUsers();
    closeModal();
  } catch (error) {
    console.error('Error saving user:', error);
    alert(error.response?.data?.error || 'Failed to save user');
  }
};

const resetForm = () => {
  formData.value = {
    id: null,
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: 'User',
    active: true
  };
};

const closeModal = () => {
  showModal.value = false;
};

// Initialize
onMounted(() => {
  fetchUsers();
});
</script>

<style scoped>
.users-management {
    width: 100%;
  padding: 20px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  max-width: 1200px;
  margin-Top: 70px;
  align-items: center;
}

.header {
  margin-bottom: 20px;
}

.header h2 {
  margin: 0;
  color: #0a1f24;
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 1.5rem;
}

.action-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  flex-wrap: wrap;
  gap: 15px;
}

.add-user-btn {
  padding: 10px 20px;
  border-radius: 4px;
  background-color: #0a1f24;
  color: white;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 500;
  transition: background-color 0.3s;
}

.add-user-btn:hover {
  background-color: #1a3f44;
}

.controls {
  display: flex;
  gap: 15px;
  align-items: center;
}

.search-box {
  position: relative;
  display: flex;
  align-items: center;
}

.search-box i {
  position: absolute;
  left: 12px;
  color: #777;
}

.search-box input {
  padding: 8px 12px 8px 38px;
  border: 1px solid #ddd;
  border-radius: 4px;
  min-width: 250px;
  height: 38px;
}

.role-filter {
  padding: 8px 15px;
  border-radius: 4px;
  border: 1px solid #ddd;
  height: 38px;
}

.user-table-container {
  overflow-x: auto;
  width: 100%;
  margin-top: 20px;
}

.user-table {
  width: 100%;
  border-collapse: collapse;
  min-width: 900px;
}

.user-table th, .user-table td {
  padding: 14px 16px;
  text-align: left;
  border-bottom: 1px solid #eee;
}

.user-table th {
  background-color: #f5f5f5;
  font-weight: 600;
  color: #333;
  position: sticky;
  top: 0;
}

.user-table tr:hover {
  background-color: #f9f9f9;
}

/* Column Widths */
.user-table th:nth-child(1), 
.user-table td:nth-child(1) {
  width: 5%;
}

.user-table th:nth-child(2),
.user-table td:nth-child(2),
.user-table th:nth-child(3),
.user-table td:nth-child(3) {
  width: 15%;
}

.user-table th:nth-child(4),
.user-table td:nth-child(4) {
  width: 25%;
}

.user-table th:nth-child(5),
.user-table td:nth-child(5),
.user-table th:nth-child(6),
.user-table td:nth-child(6) {
  width: 10%;
}

.user-table th:nth-child(7),
.user-table td:nth-child(7) {
  width: 10%;
  text-align: center;
}

.role-badge {
  padding: 4px 10px;
  border-radius: 12px;
  font-size: 0.8em;
  font-weight: 500;
  display: inline-block;
  min-width: 60px;
  text-align: center;
}

.role-badge.adm {
  background-color: #d4edda;
  color: #155724;
}

.role-badge.manager {
  background-color: #cce5ff;
  color: #004085;
}

.role-badge.staff {
  background-color: #fff3cd;
  color: #856404;
}

.role-badge.user {
  background-color: #e2e3e5;
  color: #383d41;
}

.status-badge {
  padding: 4px 10px;
  border-radius: 12px;
  font-size: 0.8em;
  font-weight: 500;
  display: inline-block;
  min-width: 60px;
  text-align: center;
}

.status-badge.active {
  background-color: #d4edda;
  color: #155724;
}

.status-badge.inactive {
  background-color: #f8d7da;
  color: #721c24;
}

.actions {
  display: flex;
  width: 100% !important;
  gap:12px;
  justify-content: center;
  align-items: center;
}

.edit-btn, .delete-btn {
  padding: 6px 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
}

.edit-btn {
  background-color: #ffc107;
  color: #212529;
}

.edit-btn:hover {
  background-color: #e0a800;
}

.delete-btn {
  background-color: #dc3545;
  color: white;
}

.delete-btn:hover {
  background-color: #c82333;
}

.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  gap: 15px;
}

.page-btn {
  padding: 8px 12px;
  border: 1px solid #ddd;
  background-color: white;
  border-radius: 4px;
  cursor: pointer;
  min-width: 36px;
}

.page-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.page-info {
  font-size: 0.9em;
}

/* Modal Styles */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal {
  background-color: white;
  border-radius: 8px;
  width: 100%;
  max-width: 600px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  animation: modalFadeIn 0.3s;
}

.modal-header {
  padding: 16px 20px;
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.modal-header h3 {
  margin: 0;
  font-size: 1.25rem;
}

.close-btn {
  background: none;
  border: none;
  font-size: 1.2em;
  cursor: pointer;
  color: #777;
  padding: 4px;
}

.modal-body {
  padding: 20px;
}

.form-row {
  display: flex;
  gap: 20px;
  margin-bottom: 15px;
}

.form-row .form-group {
  flex: 1;
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  display: block;
  margin-bottom: 6px;
  font-weight: 500;
  color: #555;
}

.form-group input, .form-group select {
  width: 100%;
  padding: 10px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 0.95rem;
}

.form-group input:focus, .form-group select:focus {
  outline: none;
  border-color: #0a1f24;
  box-shadow: 0 0 0 2px rgba(10, 31, 36, 0.1);
}

.toggle-switch {
  display: flex;
  align-items: center;
  gap: 10px;
}

.toggle-switch input[type="checkbox"] {
  height: 0;
  width: 0;
  visibility: hidden;
}

.toggle-switch label {
  cursor: pointer;
  width: 50px;
  height: 25px;
  background: #ddd;
  display: block;
  border-radius: 25px;
  position: relative;
  transition: background 0.3s;
}

.toggle-switch label:after {
  content: '';
  position: absolute;
  top: 2.5px;
  left: 2.5px;
  width: 20px;
  height: 20px;
  background: #fff;
  border-radius: 20px;
  transition: 0.3s;
}

.toggle-switch input:checked + label {
  background: #0a1f24;
}

.toggle-switch input:checked + label:after {
  left: calc(100% - 2.5px);
  transform: translateX(-100%);
}

.form-actions, .modal-actions {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 25px;
  padding-top: 15px;
  border-top: 1px solid #eee;
}

.cancel-btn {
  padding: 10px 18px;
  background-color: #f8f9fa;
  border: 1px solid #ddd;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 500;
}

.submit-btn {
  padding: 10px 18px;
  background-color: #0a1f24;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 500;
}

.submit-btn:hover {
  background-color: #1a3f44;
}

.delete-confirm-btn {
  padding: 10px 18px;
  background-color: #dc3545;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 500;
}

.delete-confirm-btn:hover {
  background-color: #c82333;
}

.delete-modal {
  text-align: center;
  padding: 25px;
  max-width: 450px;
}

.delete-modal h3 {
  margin-top: 0;
  color: #dc3545;
}

.delete-modal p {
  margin: 20px 0;
  font-size: 1.05rem;
}

@keyframes modalFadeIn {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Responsive Adjustments */
@media (max-width: 768px) {
  .action-bar {
    flex-direction: column;
    align-items: flex-start;
  }
  
  .controls {
    width: 100%;
    flex-wrap: wrap;
  }
  
  .search-box input {
    width: 100%;
  }
  
  .form-row {
    flex-direction: column;
    gap: 15px;
  }
}

.password-input-container {
  position: relative;
}

.password-toggle {
  position: absolute;
  right: 12px;
  top: 38px;
  cursor: pointer;
  color: #777;
}

.password-requirements {
  font-size: 0.8rem;
  color: #666;
  margin-top: 4px;
}
</style>