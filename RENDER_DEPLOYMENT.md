# Render Deployment Guide for TIFO Web

This project consists of two parts:
1. **Frontend**: Vite + React SPA (`tifo_web` root)
2. **Backend**: Express + TypeScript API + MongoDB (`server/` directory)

---

## Option 1: Render Blueprint (Recommended 1-Click Setup)

1. Push your repository to GitHub / GitLab.
2. Log in to [Render Dashboard](https://dashboard.render.com/).
3. Click **New +** → **Blueprint**.
4. Connect your `tifo_web` repository.
5. Render will detect `render.yaml` and create two services:
   - `tifo-backend` (Node Web Service)
   - `tifo-frontend` (Static Site)
6. Set the Environment Variables when prompted:
   - For `tifo-backend`:
     - `MONGODB_URI`: `mongodb+srv://<username>:<password>@cluster.mongodb.net/dbname`
     - `CLIENT_URL`: `https://<your-tifo-frontend-url>.onrender.com`
   - For `tifo-frontend`:
     - `VITE_API_BASE`: `https://<your-tifo-backend-url>.onrender.com/api`

---

## Option 2: Manual Render Setup

### 1. Deploy the Backend (Web Service)
- **New +** → **Web Service**
- Connect your GitHub repo.
- **Root Directory**: `server`
- **Environment**: `Node`
- **Build Command**: `npm install && npm run build`
- **Start Command**: `npm start`
- **Environment Variables**:
  - `PORT`: `10000`
  - `MONGODB_URI`: `mongodb+srv://<username>:<password>@cluster.mongodb.net/dbname`
  - `CLIENT_URL`: `https://<your-frontend-static-site-name>.onrender.com`

### 2. Deploy the Frontend (Static Site)
- **New +** → **Static Site**
- Connect your GitHub repo.
- **Root Directory**: `.` (leave empty for repo root)
- **Build Command**: `npm install && npm run build`
- **Publish Directory**: `dist`
- **Redirects / Rewrite Rules**:
  - `Source`: `/*`
  - `Destination`: `/index.html`
  - `Action`: `Rewrite`
- **Environment Variables**:
  - `VITE_API_BASE`: `https://<your-backend-web-service-name>.onrender.com/api`

---

## Verified Features for Production
- ✅ **Single-Page Application (SPA) Routing**: Redirect rule (`public/_redirects`) ensures refreshing `/student-ambassador/register` direct URLs works smoothly without 404s.
- ✅ **CORS & Environment Variables**: Configured dynamically using `VITE_API_BASE` and `CLIENT_URL`.
- ✅ **Database Connection**: MongoDB Atlas connection handles SSL/TLS and DNS resolution.
