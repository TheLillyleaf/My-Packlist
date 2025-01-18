# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# TODO

# 📌 MERN Packlist App - Worklist

## **1️⃣ Backend Setup (Express + MongoDB)**

### ✅ Tasks:

- [x] Set up `server.js` with Express
- [x] Install dependencies: `express`, `mongoose`, `dotenv`, `cors`, `jsonwebtoken`
- [ ] Configure **MongoDB Atlas** connection (`mongoose.connect`)
- [ ] Set up **authentication middleware** (JWT/Auth0 verification)
- [ ] Create Express **routes & controllers**:
  - [ ] `authRoutes.js` → Handle Auth0 token verification
  - [ ] `templateRoutes.js` → CRUD for packing templates
  - [ ] `packlistRoutes.js` → CRUD for user packlists

### ✅ Models (MongoDB Schema with Mongoose)

- [ ] **User** → `email`, `auth0Id`, `savedTemplates`
- [ ] **Template** → `name`, `categories`, `items[]`
- [ ] **Packlist** → `name`, `templates[]`, `items[]`

---

## **2️⃣ Frontend Setup (React + Material UI)**

### ✅ Tasks:

- [ ] Create React project: `npx create-react-app packlist-app`
- [ ] Install dependencies: `@mui/material`, `@mui/icons-material`, `axios`, `react-router-dom`, `auth0-react`
- [ ] Set up **Auth0 authentication** with `auth0-react`
- [ ] Configure Material UI **theme & styling**

### ✅ React Components:

- [ ] **AuthWrapper** → Handle login/logout with Auth0
- [ ] **Dashboard** → User home screen
- [ ] **PacklistPage** → View & edit a specific packing list
- [ ] **TemplateManager** → Create/manage templates
- [ ] **Navbar** → Navigation bar with login/logout

---

## **3️⃣ Backend API Integration (Connecting React & Express)**

### ✅ Tasks:

- [ ] Set up `axios` for API calls
- [ ] Implement **protected routes** (require Auth0 login)
- [ ] Fetch **user’s saved templates & packlists** on login
- [ ] Implement **CRUD operations** for:
  - [ ] **Templates** (Create, Read, Update, Delete)
  - [ ] **Packlists** (Create, Read, Update, Delete)

---

## **4️⃣ Features & Enhancements**

### ✅ Tasks:

- [ ] **Drag & Drop** (Reorder packlist items)
- [ ] **Checkboxes** (Mark items as packed)
- [ ] **Dark Mode Toggle**
- [ ] **Responsive Design** (Mobile-friendly UI)

---

## **5️⃣ Deployment & Final Steps**

### ✅ Tasks:

- [ ] **Frontend:** Deploy on **Vercel** or **Netlify**
- [ ] **Backend:** Deploy on **Render** or **Railway**
- [ ] **Environment Variables:** Store API keys securely
- [ ] **Testing & Bug Fixes**

---

✅ Keep ticking off tasks & enjoy building your app! 🚀
