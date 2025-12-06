# নতুনপথ (Notun Poth) - Digital Health Literacy Application

A comprehensive mobile-first web application for Bangladeshi adolescents and parents, providing health education, AI-powered support, and professional consultation.

---

## 🌟 Features

### ✅ **User Authentication & Profile**
- Secure Firebase Authentication
- User registration with profile data (name, email, phone, date of birth)
- Editable user profile page
- Session persistence
- Protected routes
- Age validation (12+ years)

### ✅ **Educational Modules**
6 comprehensive modules with detailed Bangla-English mixed content:
- **Mental Health** (মানসিক স্বাস্থ্য) - Emotions, stress management, seeking help
- **Reproductive Health** (প্রজনন স্বাস্থ্য) - Puberty, periods, hygiene
- **Relationships** (সম্পর্ক) - Healthy friendships, communication, boundaries
- **Social Media & Peer Pressure** - Digital wellbeing, cyberbullying
- **Self-Esteem & Body Image** - Confidence, body positivity, self-care
- **Gender & Respect** (লিঙ্গ ও সম্মান) - Equality, consent, stereotypes

### ✅ **Melo AI Chat Buddy** 🤗
- **Powered by Google Gemini 2.0 Flash**
- Context-aware with full app knowledge (modules, doctors, emergency contacts)
- Natural Bangla-English mixed responses
- Real-time chat interface with timestamps
- Recommends doctors and resources from the app
- Completely FREE (no credit card needed!)

### ✅ **Doctor Consultation** 👨‍⚕️
5 professional doctors available:
- **Dr. Fatima Rahman** - Adolescent Psychologist (12 years)
- **Dr. Kamal Hossain** - Pediatrician (15 years)
- **Dr. Nasrin Ahmed** - Gynecologist (10 years)
- **Dr. Rafiq Islam** - Mental Health Counselor (8 years)
- **Dr. Sultana Begum** - Nutritionist (9 years)

Each with specialty, availability, and booking system.

### ✅ **Anonymous Q&A Forum** 💬
- Ask questions anonymously
- Doctor-answered questions with detailed responses
- Category filtering (Mental Health, Reproductive Health, etc.)
- Upvote system (clickable once per user)
- Color-coded categories for easy navigation

### ✅ **Emergency Support** 🚨
Quick access to critical helplines:
- **999** - National Emergency (Police, Ambulance, Fire)
- **1098** - Child Helpline
- **109** - Violence Prevention (Women & Child)

### ✅ **Parents Section**
Comprehensive guidance for parents on:
- Starting conversations about sensitive topics
- Talking about body changes and puberty
- Creating safe spaces for teens
- Respecting privacy and boundaries
- When to seek professional help

### ✅ **Modern UI/UX**
- Mobile-first responsive design
- Beautiful gradient-based theme with glassmorphism
- Smooth animations and transitions
- Unique button styles (Melo AI, Urgent Help)
- Professional doctor avatars with initials
- Color-coded categories throughout
- Fixed mobile scroll issues
- Disabled zoom on mobile for consistent layout

---

## 🚀 Quick Start

### **Prerequisites**
- Node.js (v14 or higher)
- npm or yarn
- Google account (for free Gemini API key)
- Firebase account

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

5. **Firebase Configuration:**
   - Project already configured: `notunpath-3c848`
   - Config in `src/firebase/config.js`
   - Collections: `users` (uid, email, name, phone, dateOfBirth, age)

6. **Start the app:**
   ```bash
   npm start
   ```

7. **Open browser:**
   - Go to: http://localhost:3000
   - Register a new account (must be 12+ years old)
   - Start exploring!

---

## 📁 Project Structure

```
notunpath_app/
├── public/
│   ├── index.html          # Viewport config for mobile
│   └── assets/
├── src/
│   ├── Pages/
│   │   ├── Home.js         # Dashboard
│   │   ├── Login.js        # Auth with date input fix
│   │   ├── Profile.js      # User profile (view/edit)
│   │   ├── Modules.js      # Educational modules list
│   │   ├── ModuleDetails.js # Individual module content
│   │   ├── FAQ.js          # Melo AI Chat Buddy
│   │   ├── Forum.js        # Anonymous Q&A Forum
│   │   ├── Consultation.js # Doctor consultation
│   │   ├── Emergency.js    # Emergency contacts
│   │   ├── Parents.js      # Parents guidance
│   │   └── About.js        # About the app
│   ├── components/
│   │   └── PrivateRoute.js # Route protection
│   ├── context/
│   │   └── AuthContext.js  # Auth state management
│   ├── firebase/
│   │   └── config.js       # Firebase configuration
│   ├── services/
│   │   └── geminiService.js # AI integration with app context
│   ├── data/
│   │   ├── modules.json    # Educational content
│   │   ├── doctors.json    # Doctor information
│   │   ├── forum.json      # Q&A forum data
│   │   ├── parents.json    # Parents guidance
│   │   └── faq.json        # FAQ data
│   ├── App.js              # Main app with routing
│   ├── App.css             # App styles with Melo/SOS buttons
│   ├── index.css           # Global styles
│   ├── responsive.css      # Mobile-specific styles
│   └── fix-mobile-menu.css # Mobile menu fixes
├── .env                    # Your API keys (keep secret!)
├── .env.example
├── package.json
├── project_idea.md         # Project description
└── README.md
```

---

## 🔧 Tech Stack

- **Frontend:** React 18
- **Routing:** React Router DOM v7
- **Authentication:** Firebase Auth (Email/Password)
- **Database:** Cloud Firestore
- **AI:** Google Gemini 2.0 Flash (FREE)
- **State Management:** React Context API
- **Styling:** CSS with gradients, glassmorphism
- **Hosting:** Vercel/Firebase Hosting ready

---

## 🤖 Melo AI Chat Buddy

### **Features:**
- Full app context (knows about all modules, doctors, emergency contacts)
- Natural Bangla-English mixed responses
- Recommends appropriate doctors based on questions
- Directs to emergency contacts for urgent situations
- Guides users to relevant educational modules
- Culturally sensitive to Bangladeshi context

### **Setup:**
1. Get free API key: https://aistudio.google.com/app/apikey
2. Add to `.env` file: `REACT_APP_GEMINI_API_KEY=your_key`
3. Restart app
4. Navigate to "Melo" (purple gradient button)
5. Start chatting!

---

## 💬 Anonymous Q&A Forum

### **Features:**
- Ask questions completely anonymously
- 5 sample doctor-answered questions
- Category filtering with color-coded buttons
- Upvote system (one click per question)
- Expandable doctor answers
- Mock submission (shows confirmation alert)

### **Categories:**
- Mental Health (Green)
- Reproductive Health (Orange)
- Relationships (Red)
- Social Media (Cyan)
- Self-Esteem (Purple)

---

## 🔒 Security

- ✅ Firebase Authentication (password hashing)
- ✅ Protected routes (PrivateRoute component)
- ✅ API key in environment variables
- ✅ Content filtering (Gemini AI)
- ✅ `.env` in `.gitignore`
- ✅ Age validation (12+ years)
- ✅ Session persistence

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
- **Vercel** (Recommended - easiest)
- **Netlify**
- **Firebase Hosting**
- **GitHub Pages**

### **Environment Variables for Deployment:**
Add these to your hosting platform:
```
REACT_APP_GEMINI_API_KEY=your_api_key_here
```

### **Vercel Deployment:**
```bash
npm install -g vercel
vercel login
vercel
# Follow prompts and add environment variable
```

---

## 📊 Firebase Configuration

**Project:** notunpath-3c848

**Collections:**
- `users` - User profiles
  - Fields: uid, email, name, phone, dateOfBirth, age, createdAt

**Authentication:**
- Email/Password enabled
- Age validation (12+ years)

**Access Console:**
https://console.firebase.google.com/project/notunpath-3c848

---

## 🎓 For University Project

### **Key Highlights:**
1. **Production-ready authentication** (Firebase)
2. **AI integration** (Google Gemini with app context)
3. **Culturally relevant content** (Bangla-English mixed)
4. **Modern tech stack** (React, Firebase, AI)
5. **Completely free** (no costs!)
6. **Scalable architecture**
7. **Anonymous Q&A forum** (unique feature)
8. **Professional consultation system**
9. **Emergency support integration**
10. **Mobile-first responsive design**

### **Demo Checklist:**
- [x] User registration/login (with age validation)
- [x] User profile (view/edit)
- [x] Educational modules (6 detailed modules)
- [x] Melo AI Chat Buddy (context-aware responses)
- [x] Doctor consultation (5 doctors)
- [x] Anonymous Q&A Forum (with upvotes)
- [x] Emergency contacts (3 helplines)
- [x] Parents section
- [x] Responsive design (mobile-first)
- [x] Logout functionality

### **Unique Selling Points:**
- AI knows entire app context (modules, doctors, emergency)
- Anonymous forum for sensitive questions
- Professional doctor consultation
- Emergency helpline integration
- Culturally appropriate Bangla-English content

---

## 🐛 Troubleshooting

### **Melo AI not working?**
1. Check `.env` file has correct API key
2. Restart the app (`npm start`)
3. Check internet connection
4. Verify API key at: https://aistudio.google.com/app/apikey

### **Can't login?**
1. Check Firebase config in `src/firebase/config.js`
2. Verify internet connection
3. Ensure email/password auth is enabled in Firebase Console

### **Date input not working?**
- Fixed! Now supports both typing (DD/MM/YYYY) and calendar selection
- Click 📅 icon to open calendar
- Or type directly in DD/MM/YYYY format

### **Build errors?**
```bash
rm -rf node_modules package-lock.json
npm install
npm start
```

---

## 🎯 Project Objectives (Fulfilled)

1. ✅ **Spread Awareness** - 6 detailed educational modules
2. ✅ **Support Parents** - Comprehensive parents section
3. ✅ **Break Taboos** - Anonymous forum, culturally sensitive content
4. ✅ **Private Professional Aid** - Doctor consultation system
5. ✅ **AI Buddy** - Melo with full app context

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
- 100 simultaneous connections

---

## 📚 Features Summary

| Feature | Status | Description |
|---------|--------|-------------|
| Authentication | ✅ | Firebase Email/Password |
| User Profile | ✅ | View/Edit profile |
| Educational Modules | ✅ | 6 detailed modules |
| Melo AI | ✅ | Context-aware chat |
| Doctor Consultation | ✅ | 5 doctors with booking |
| Anonymous Forum | ✅ | Q&A with upvotes |
| Emergency Contacts | ✅ | 3 helplines |
| Parents Section | ✅ | Guidance for parents |
| Mobile Responsive | ✅ | Mobile-first design |
| Deployment Ready | ✅ | Vercel/Firebase ready |

---

## 👥 Team

**Project:** নতুনপথ (Notun Poth)  
**Purpose:** University Project - Teen Health Awareness  
**Target:** Bangladeshi Adolescents & Parents  
**Tech Stack:** React + Firebase + Gemini AI

---

## 🎉 Acknowledgments

- **Firebase** - Authentication & Database
- **Google Gemini** - AI Chat functionality
- **React** - Frontend framework
- **Create React App** - Project setup

---

## 📞 Support

**External Resources:**
- [React Docs](https://react.dev)
- [Firebase Docs](https://firebase.google.com/docs)
- [Gemini AI Docs](https://ai.google.dev/docs)

---

**Built with ❤️ for Bangladeshi teens and families**

**Status:** ✅ Production Ready  
**Cost:** 💰 $0 (Completely Free!)  
**Demo Ready:** 🎓 Yes!  
**Features:** 🚀 10+ Major Features

---

**Last Updated:** December 2025  
**Version:** 1.0.0  
**License:** Educational Use
