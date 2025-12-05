# নতুনপথ (Notun Poth) - Teen Health Awareness App

A mobile-first web application for Bangladeshi adolescents and parents, providing health education and AI-powered support.

---

## 🌟 Features

### ✅ **User Authentication**
- Secure Firebase Authentication
- User registration with profile data
- Session persistence
- Protected routes

### ✅ **Educational Modules**
6 comprehensive modules covering:
- Mental Health
- Reproductive Health
- Relationships
- Social Media & Peer Pressure
- Self-Esteem & Body Image
- Gender & Respect

### ✅ **AI Health Buddy** 🤖 NEW!
- **Powered by Google Gemini AI**
- Real-time chat interface
- Context-aware responses for teen health
- Chat history with timestamps
- Completely FREE (no credit card needed!)

### ✅ **Parents Section**
Guidance for parents on:
- Starting conversations
- Talking about body changes
- Creating safe spaces
- Respecting privacy
- When to seek help

### ✅ **Modern UI/UX**
- Mobile-first responsive design
- Beautiful gradient-based theme
- Smooth animations
- Chat bubble interface

---

## 🚀 Quick Start

### **Prerequisites**
- Node.js (v14 or higher)
- npm or yarn
- Google account (for free Gemini API key)

### **Installation**

1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   cd notunpath_app
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Get your FREE Gemini API key:**
   - Visit: https://aistudio.google.com/app/apikey
   - Sign in with Google
   - Click "Create API Key"
   - Copy the key

4. **Configure environment:**
   - Open `.env` file
   - Add your API key:
     ```
     REACT_APP_GEMINI_API_KEY=your_api_key_here
     ```

5. **Start the app:**
   ```bash
   npm start
   ```

6. **Open browser:**
   - Go to: http://localhost:3000
   - Register a new account
   - Start exploring!

---

## 📁 Project Structure

```
notunpath_app/
├── public/
│   ├── index.html
│   └── assets/
├── src/
│   ├── Pages/
│   │   ├── Home.js
│   │   ├── Login.js
│   │   ├── Modules.js
│   │   ├── ModuleDetails.js
│   │   ├── FAQ.js          # AI Chat Buddy
│   │   ├── Parents.js
│   │   └── About.js
│   ├── components/
│   │   └── PrivateRoute.js
│   ├── context/
│   │   └── AuthContext.js
│   ├── firebase/
│   │   └── config.js
│   ├── services/
│   │   └── geminiService.js  # NEW: AI Integration
│   ├── data/
│   │   ├── modules.json
│   │   ├── parents.json
│   │   └── faq.json
│   ├── App.js
│   ├── App.css
│   └── index.css
├── .env                    # Your API keys (keep secret!)
├── .env.example
├── package.json
└── README.md
```

---

## 🔧 Tech Stack

- **Frontend:** React 18
- **Routing:** React Router DOM v7
- **Authentication:** Firebase Auth
- **Database:** Cloud Firestore
- **AI:** Google Gemini 1.5 Flash (FREE)
- **State Management:** React Context API
- **Styling:** CSS with gradients

---

## 🤖 AI Chat Buddy Setup

### **Quick Setup (2 minutes):**

1. Get free API key: https://aistudio.google.com/app/apikey
2. Add to `.env` file
3. Restart app
4. Start chatting!

**Detailed guides:**
- [QUICK_API_SETUP.md](./QUICK_API_SETUP.md) - Quick start
- [AI_CHAT_SETUP.md](./AI_CHAT_SETUP.md) - Complete guide
- [AI_IMPLEMENTATION_SUMMARY.md](./AI_IMPLEMENTATION_SUMMARY.md) - Technical details

---

## 🔒 Security

- ✅ Firebase Authentication (password hashing)
- ✅ Protected routes
- ✅ API key in environment variables
- ✅ Content filtering (Gemini AI)
- ✅ `.env` in `.gitignore`

---

## 📱 Available Scripts

### **Development:**
```bash
npm start          # Start dev server (http://localhost:3000)
npm test           # Run tests
npm run build      # Build for production
```

### **Deployment:**
```bash
npm run build      # Create production build
# Deploy /build folder to your hosting platform
```

---

## 🌐 Deployment

### **Recommended Platforms (Free):**
- **Vercel** (Recommended)
- **Netlify**
- **Firebase Hosting**
- **GitHub Pages**

### **Environment Variables for Deployment:**
Add these to your hosting platform:
```
REACT_APP_GEMINI_API_KEY=your_api_key_here
```

---

## 📊 Firebase Configuration

**Project:** notunpath-3c848

**Collections:**
- `users` - User profiles (uid, email, name, phone, age)

**Authentication:**
- Email/Password

**Access Console:**
https://console.firebase.google.com/project/notunpath-3c848

---

## 🎓 For University Project

### **Key Highlights:**
1. **Production-ready authentication** (Firebase)
2. **AI integration** (Google Gemini)
3. **Culturally relevant content** (Bangladesh context)
4. **Modern tech stack** (React, Firebase, AI)
5. **Completely free** (no costs!)
6. **Scalable architecture**

### **Demo Checklist:**
- [ ] User registration/login
- [ ] Educational modules
- [ ] AI Chat Buddy (ask 3-4 questions)
- [ ] Parents section
- [ ] Responsive design
- [ ] Logout functionality

---

## 🐛 Troubleshooting

### **AI Chat not working?**
1. Check `.env` file has correct API key
2. Restart the app
3. Check internet connection
4. See [AI_CHAT_SETUP.md](./AI_CHAT_SETUP.md)

### **Can't login?**
1. Check Firebase config in `src/firebase/config.js`
2. Verify internet connection
3. See [AUTHENTICATION_GUIDE.md](./AUTHENTICATION_GUIDE.md)

### **Build errors?**
```bash
rm -rf node_modules package-lock.json
npm install
npm start
```

---

## 📚 Documentation

- [AUTHENTICATION_GUIDE.md](./AUTHENTICATION_GUIDE.md) - Auth system details
- [QUICK_START.md](./QUICK_START.md) - Getting started
- [AI_CHAT_SETUP.md](./AI_CHAT_SETUP.md) - AI setup guide
- [QUICK_API_SETUP.md](./QUICK_API_SETUP.md) - Quick API setup
- [questions_and_answers.md](./questions_and_answers.md) - Project Q&A

---

## 🎯 Project Objectives

1. **Spread Awareness** - Provide factual health information to teens
2. **Support Parents** - Guide parents on sensitive conversations
3. **Break Taboos** - Reduce stigma around health education
4. **Private Support** - AI buddy for anonymous questions
5. **Cultural Sensitivity** - Content relevant to Bangladesh

---

## 🆓 Free Tier Limits

### **Google Gemini:**
- 15 requests/minute
- 1,500 requests/day
- 1 million tokens/day
- **Perfect for university projects!**

### **Firebase:**
- 10K reads/day (free tier)
- 20K writes/day (free tier)
- 1GB storage (free tier)

---

## 🤝 Contributing

This is a university project. For questions or suggestions:
1. Check documentation files
2. Review code comments
3. Test locally before changes

---

## 📄 License

This project is created for educational purposes as a university project.

---

## 👥 Team

**Project:** নতুনপথ (Notun Poth)  
**Purpose:** University Project - Teen Health Awareness  
**Target:** Bangladeshi Adolescents & Parents

---

## 🎉 Acknowledgments

- **Firebase** - Authentication & Database
- **Google Gemini** - AI Chat functionality
- **React** - Frontend framework
- **Create React App** - Project setup

---

## 📞 Support

**Documentation:**
- Check the `/docs` folder
- Read setup guides
- Review code comments

**External Resources:**
- [React Docs](https://react.dev)
- [Firebase Docs](https://firebase.google.com/docs)
- [Gemini AI Docs](https://ai.google.dev/docs)

---

**Built with ❤️ for Bangladeshi teens and families**

**Status:** ✅ Production Ready  
**Cost:** 💰 $0 (Completely Free!)  
**Demo Ready:** 🎓 Yes!

---

**Last Updated:** December 2025  
**Version:** 1.0.0
