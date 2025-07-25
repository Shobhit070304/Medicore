# Medicore

**Medicore** is an AI-powered medical information platform. It provides users with:
- Quick, reliable information about diseases and medicines
- An AI chatbot (Dr. MediCore) for general health guidance and light suggestions
- Secure user authentication and profile management

## Features
- **AI Chatbot:** Ask health-related questions and get concise, professional answers
- **Medicine Database:** Search and view details about common medicines
- **Disease Analysis:** Get AI-powered suggestions based on symptoms (text or image)
- **User Profiles:** Manage your health info securely

## Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- npm or yarn

### 1. Clone the repository
```bash
git clone <your-repo-url>
cd Medicore
```

### 2. Setup Environment Variables
Create a `.env` file in both `server/` and `client/` (if needed):

#### `server/.env` example:
```
PORT=4000
MONGO_URI=your_mongodb_uri
GEMINI_API_KEY=your_google_gemini_api_key
FIREBASE_PROJECT_ID=your_firebase_project_id
FIREBASE_PRIVATE_KEY=your_firebase_private_key
FIREBASE_CLIENT_EMAIL=your_firebase_client_email
```

#### `client/.env` example (if using Vite):
```
VITE_BASE_URL=http://localhost:4000/api
```

### 3. Install Dependencies
```bash
cd server && npm install
cd ../client && npm install
```

### 4. Run Locally
- **Backend:**
  ```bash
  cd server
  npm run dev
  ```
- **Frontend:**
  ```bash
  cd client
  npm run dev
  ```

### 5. Build for Production
- **Frontend:**
  ```bash
  cd client
  npm run build
  ```
- **Backend:** Deploy as a Node.js app (see below)

## Deployment Notes
- Serve the `client/dist` folder with a static server or connect it to your backend
- Set all environment variables in your production environment
- Use HTTPS in production
- Secure your API keys and database credentials

## Contact
For support or questions, contact [your-email@example.com]
