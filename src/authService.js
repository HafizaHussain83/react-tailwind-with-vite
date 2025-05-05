// src/authService.js

// Mock database using localStorage
const USERS_KEY = 'foodapp_users';

// Initialize users if not exists
if (!localStorage.getItem(USERS_KEY)) {
  localStorage.setItem(USERS_KEY, JSON.stringify([]));
}

export const signup = async (userData) => {
  const users = JSON.parse(localStorage.getItem(USERS_KEY));
  
  // Check if user already exists
  const existingUser = users.find(user => user.email === userData.email);
  if (existingUser) {
    throw new Error('User already exists');
  }
  
  // Create new user (in a real app, you'd hash the password!)
  const newUser = {
    id: Date.now().toString(),
    ...userData
  };
  
  users.push(newUser);
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
  
  return { success: true, user: newUser };
};

export const login = async (email, password) => {
  const users = JSON.parse(localStorage.getItem(USERS_KEY));
  const user = users.find(u => u.email === email && u.password === password);
  
  if (!user) {
    throw new Error('Invalid credentials');
  }
  
  // Store current user in localStorage (simulate session)
  localStorage.setItem('currentUser', JSON.stringify(user));
  
  return { success: true, user };
};

export const getCurrentUser = () => {
  const user = localStorage.getItem('currentUser');
  return user ? JSON.parse(user) : null;
};

export const logout = () => {
  localStorage.removeItem('currentUser');
};