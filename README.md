<<<<<<< HEAD
# Student Portfolio - Practical 3: API Integration & Data Rendering in React

**Course:** ADVANCED WEB DEVELOPMENT FRAMEWORKS (ITUE301)  
**Institution:** CHAROTAR UNIVERSITY OF SCIENCE AND TECHNOLOGY (CHARUSAT)  
**Department:** Faculty of Technology and Engineering (B. Tech CSE / AIML / IT / CE)

---

## 📌 Overview

This project is updated for **Practical 3**, focusing on consuming a REST API (GitHub REST API) in React, handling asynchronous data fetching, and managing UI feedback through explicit **Loading**, **Error**, and **Success** states.

---

## 🏗️ Architecture & Component Hierarchy

```text
Projects.jsx
├── useState: repos ([]), loading (true), error (null), searchTerm ('')
├── useEffect() → triggers fetch on mount & username change
├── [loading state]  ──> <Spinner />
├── [error state]    ──> <ErrorMessage message={error} onRetry={fetchRepos} />
└── [success state]  ──> <RepoList repos={filteredRepos} />
```

---

## ✨ Features Implemented

1. **GitHub REST API Integration**:
   - Fetches public repositories from `https://api.github.com/users/<username>/repos`.
   - Uses `useEffect` with clean state updates for `repos`, `loading`, and `error`.
   - Ensures `setLoading(false)` is always reached using `.finally()`.

2. **Conditional State Rendering**:
   - `<Spinner />`: Displays animated loading spinner while fetching network data.
   - `<ErrorMessage />`: Displays clean error feedback banner with HTTP status code details.
   - `<RepoList />`: Displays repository name, URL, star count (`⭐`), language badge, and fork count (`🍴`).

3. **Supplementary Enhancements**:
   - **Retry Button**: Re-triggers data fetching on error state.
   - **Search / Filter Input**: Instant filtering of repository list by repository name or description.
   - **Repository Star Count**: Visual star badges for each repo.
   - **Error Simulation Toggle**: Test deliberate API failure paths (Lab Step 6) to verify error boundary rendering.

---

## 🚀 How to Run Locally

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Start Development Server**:
   ```bash
   npm run dev
   ```

3. Open your browser at `http://localhost:5173` and navigate to the **Projects** tab.

---

## 🧪 Testing Happy & Error Paths

- **Happy Path**: Navigate to `/projects`. The spinner will display while fetching, followed by the repository list.
- **Error Path**: Click the **"🧪 Break API URL"** toggle button on the Projects page. This simulates a broken endpoint and confirms the `<ErrorMessage />` component and retry button render as required.
=======
# React portfolio

this is minimal portfolio for web practical 1

Check out Offical [Portfolio](https://www.anshdhanani.is-a.dev/).
>>>>>>> 0d73fa9762071ab747ef486f0baf2e52d4bb4ae0
