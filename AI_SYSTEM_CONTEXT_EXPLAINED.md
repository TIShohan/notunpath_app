# 🤖 AI System Context - How the AI Understands Your Project

## Overview

The AI Chat Buddy in নতুনপথ (Notun Poth) uses a **System Prompt** to ensure all responses are tailored specifically for teen health education in Bangladesh.

---

## 🎯 What is a System Prompt?

A **system prompt** (also called system context) is a set of instructions given to the AI model **before** it sees any user questions. It tells the AI:
- **Who it is** (its role/identity)
- **What topics to focus on**
- **How to respond** (tone, style, length)
- **What values to follow** (cultural sensitivity, safety)

Think of it as the AI's "job description" and "training manual."

---

## 📋 Our System Context

Here's what we tell the AI in `SYSTEM_CONTEXT`:

### **Identity & Role:**
```
You are a friendly, supportive AI health buddy for the 
"নতুনপথ (Notun Poth)" app - a teen health awareness 
platform in Bangladesh.
```

**What this does:**
- AI knows it's specifically for **teen health education**
- AI understands it's for a **Bangladeshi audience**
- AI adopts a **friendly, supportive tone**

---

### **Core Responsibilities:**

1. **Provide accurate, age-appropriate information**
   - Focuses on adolescent health topics
   - Avoids overly technical medical jargon
   - Keeps language simple and understandable

2. **Be culturally sensitive to Bangladeshi context**
   - Respects cultural norms and values
   - Understands local context
   - Avoids culturally inappropriate content

3. **Use simple, friendly language**
   - Talks like a helpful friend, not a textbook
   - Easy for teenagers to understand
   - Encouraging and non-judgmental

4. **Encourage professional help when needed**
   - Recognizes when issues need expert attention
   - Suggests consulting doctors/psychologists for serious concerns
   - Doesn't try to replace professional medical advice

5. **Keep responses concise**
   - 2-4 sentences for simple questions
   - More detail when needed for complex topics
   - Avoids overwhelming users with too much text

---

### **Topic Focus Areas:**

The AI is specifically trained to help with:

✅ **Mental Health & Stress Management**
- Dealing with anxiety, depression, mood swings
- Coping with academic pressure
- Managing emotions

✅ **Puberty & Physical Changes**
- Understanding body changes
- Menstruation and reproductive health
- Growth and development

✅ **Healthy Relationships & Friendships**
- Building respectful relationships
- Understanding boundaries
- Communication skills

✅ **Social Media & Peer Pressure**
- Handling online bullying
- Making independent decisions
- Digital wellness

✅ **Self-Esteem & Body Image**
- Building confidence
- Accepting yourself
- Dealing with comparison

✅ **Gender Understanding & Respect**
- Understanding both genders
- Mutual respect
- Breaking stereotypes

---

## 🔄 How It Works in Practice

### **Example 1: User asks about puberty**

**User Question:** "What is puberty?"

**AI Process:**
1. Reads system context → Knows it's for teens in Bangladesh
2. Sees the question is about puberty (a core topic)
3. Responds in simple, friendly language
4. Keeps it age-appropriate
5. Stays culturally sensitive

**AI Response:**
> "Puberty is a natural stage when your body starts changing from a child to an adult. It usually happens between ages 10-14. Boys and girls go through different changes like growth spurts, voice changes, and developing new feelings. It's completely normal and everyone goes through it!"

---

### **Example 2: User asks about stress**

**User Question:** "I feel stressed about exams. What should I do?"

**AI Process:**
1. Recognizes mental health topic
2. Provides practical, age-appropriate advice
3. Stays supportive and non-judgmental
4. Suggests healthy coping strategies

**AI Response:**
> "Exam stress is very common! Try breaking your study into small chunks with breaks in between. Deep breathing exercises can help calm your mind. Talk to a parent, teacher, or friend about how you're feeling. Remember, your mental health is more important than perfect grades. If stress becomes overwhelming, consider talking to a school counselor."

---

### **Example 3: Serious concern**

**User Question:** "I feel sad all the time and don't want to do anything."

**AI Process:**
1. Recognizes potential depression symptoms
2. Provides supportive response
3. **Encourages professional help** (key responsibility!)
4. Doesn't try to diagnose or treat

**AI Response:**
> "I'm sorry you're feeling this way. Feeling sad for a long time can be a sign that you need support. Please talk to a trusted adult - a parent, teacher, or school counselor. They can help you connect with a mental health professional who can provide proper support. You don't have to go through this alone, and getting help is a sign of strength, not weakness."

---

## 🛡️ Safety & Boundaries

The system context ensures the AI:

❌ **Doesn't:**
- Give medical diagnoses
- Replace professional healthcare
- Provide inappropriate content
- Share harmful advice
- Use overly technical language

✅ **Does:**
- Provide general health education
- Encourage seeking professional help
- Stay age-appropriate
- Respect cultural values
- Maintain a supportive tone

---

## 🎓 For University Presentation

### **Key Points to Explain:**

**"Our AI Chat Buddy uses advanced prompt engineering to ensure culturally appropriate, age-specific responses."**

**What to highlight:**

1. **Customized System Prompt**
   - Not just a generic AI chatbot
   - Specifically designed for teen health in Bangladesh
   - Tailored responses for our target audience

2. **Safety First**
   - Encourages professional help when needed
   - Doesn't replace medical advice
   - Age-appropriate content only

3. **Cultural Sensitivity**
   - Respects Bangladeshi values
   - Understands local context
   - Appropriate for our audience

4. **Educational Focus**
   - Focuses on 6 core health topics
   - Simple, friendly language
   - Empowering teenagers with knowledge

---

## 📊 Technical Implementation

**Location:** `src/services/geminiService.js`

**Variable:** `SYSTEM_CONTEXT`

**How it's used:**
```javascript
const requestBody = {
    contents: [{
        parts: [{
            text: `${SYSTEM_CONTEXT}\n\nUser Question: ${userMessage}\n\nProvide a helpful, friendly response:`
        }]
    }]
};
```

**What happens:**
1. System context is prepended to every user question
2. AI reads the context first
3. Then processes the user's question
4. Generates response following the context guidelines

---

## 🔧 Customization

You can modify the system context to:
- Add more specific topics
- Change the tone (more formal/informal)
- Add specific cultural guidelines
- Include more safety instructions
- Adjust response length preferences

**To modify:** Edit the `SYSTEM_CONTEXT` variable in `src/services/geminiService.js`

---

## 💡 Why This Matters

### **Without System Context:**
- Generic AI responses
- May not be age-appropriate
- Could miss cultural nuances
- Might give inappropriate advice

### **With System Context:**
- Tailored for teen health
- Culturally sensitive
- Age-appropriate language
- Focused on education
- Encourages professional help

---

## 🎯 Impact on User Experience

**Users get:**
- ✅ Relevant, focused answers
- ✅ Culturally appropriate guidance
- ✅ Age-appropriate language
- ✅ Supportive, non-judgmental tone
- ✅ Encouragement to seek help when needed

**Result:**
- Better user trust
- More helpful responses
- Safer experience
- Educational value
- Professional guidance when needed

---

## 📝 Summary

The **System Context** is the "brain" behind our AI Chat Buddy. It ensures every response is:

1. **Relevant** - Focused on teen health topics
2. **Appropriate** - Age and culturally suitable
3. **Helpful** - Practical and educational
4. **Safe** - Encourages professional help
5. **Friendly** - Supportive and non-judgmental

This makes our AI Chat Buddy not just a chatbot, but a **specialized health education tool** designed specifically for Bangladeshi teenagers.

---

**This is what makes নতুনপথ's AI unique and valuable!** 🌟
