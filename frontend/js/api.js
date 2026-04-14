// js/api.js - Shared API utilities and auth helpers

const API_BASE = 'https://shoplux-hpvc.onrender.com/api'; // Change to your Render URL in production

// ===== AUTH HELPERS =====
const getToken = () => localStorage.getItem('token');
const getUser  = () => JSON.parse(localStorage.getItem('user') || 'null');
const isAdmin  = () => getUser()?.role === 'admin';
const isLoggedIn = () => !!getToken();

const saveAuth = (token, user) => {
  localStorage.setItem('token', token);
  localStorage.setItem('user', JSON.stringify(user));
};

const clearAuth = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
};

// ===== REDIRECT GUARDS =====
const requireLogin = () => {
  if (!isLoggedIn()) { window.location.href = 'login.html'; return false; }
  return true;
};

const requireAdmin = () => {
  if (!isLoggedIn()) { window.location.href = 'login.html'; return false; }
  if (!isAdmin()) { window.location.href = 'index.html'; return false; }
  return true;
};

const redirectIfLoggedIn = () => {
  if (isLoggedIn()) { window.location.href = 'index.html'; }
};

// ===== FETCH WRAPPER =====
const apiFetch = async (endpoint, options = {}) => {
  const token = getToken();
  const headers = { 'Content-Type': 'application/json', ...options.headers };
  if (token) headers['Authorization'] = `Bearer ${token}`;

  const res = await fetch(`${API_BASE}${endpoint}`, { ...options, headers });
  const data = await res.json();

  if (!res.ok) throw new Error(data.message || 'Request failed');
  return data;
};

// ===== TOAST NOTIFICATION =====
const showToast = (message, type = 'success') => {
  let toast = document.getElementById('toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast';
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.className = `show toast-${type}`;
  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => toast.classList.remove('show'), 3000);
};

// ===== FORMAT CURRENCY =====
const formatPrice = (amount) =>
  new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(amount);

// ===== FORMAT DATE =====
const formatDate = (dateStr) =>
  new Date(dateStr).toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' });

// ===== UPDATE NAVBAR =====
const updateNavbar = () => {
  const user = getUser();
  const logoutBtn   = document.getElementById('nav-logout');
  const adminLink   = document.getElementById('nav-admin');
  const loginLink   = document.getElementById('nav-login');
  const signupLink  = document.getElementById('nav-signup');
  const userGreet   = document.getElementById('nav-user');

  if (user) {
    if (logoutBtn)  logoutBtn.style.display  = 'inline-flex';
    if (userGreet)  { userGreet.style.display = 'inline'; userGreet.textContent = `Hi, ${user.name.split(' ')[0]}`; }
    if (adminLink)  adminLink.style.display  = user.role === 'admin' ? 'inline-flex' : 'none';
    if (loginLink)  loginLink.style.display  = 'none';
    if (signupLink) signupLink.style.display = 'none';
  } else {
    if (logoutBtn)  logoutBtn.style.display  = 'none';
    if (userGreet)  userGreet.style.display  = 'none';
    if (adminLink)  adminLink.style.display  = 'none';
    if (loginLink)  loginLink.style.display  = 'inline-flex';
    if (signupLink) signupLink.style.display = 'inline-flex';
  }

  // Logout handler
  logoutBtn?.addEventListener('click', () => {
    clearAuth();
    window.location.href = 'index.html';
  });
};
