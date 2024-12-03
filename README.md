### **Project Description: Real-Time Live Video Moderation System**  

This project focuses on building a **real-time live video moderation platform** to identify and mitigate harmful visual content. The system ensures streams remain safe and compliant with platform policies, employing advanced AI techniques to detect prohibited objects, violence, explicit visuals, and aggressive behavior. It integrates a sleek, user-friendly dashboard for moderators to monitor and act on flagged streams instantly.

---

### **Core Features**  
1. **Prohibited Object Recognition**  
   Detect and flag the presence of weapons, drugs, or other banned items in live streams.  

2. **Violence Detection**  
   Identify violent actions such as physical altercations, blood, or aggressive movements.  

3. **Explicit Content Detection**  
   Instantly spot nudity, sexual content, or inappropriate visuals.  

4. **Emotion Analysis**  
   Analyze facial expressions and body language to detect aggression or distress.  

5. **Real-Time Alerts**  
   Notify moderators of flagged issues with a low-latency alert system.  

6. **Interactive Moderation Dashboard**  
   Display live streams with alerts, flagged content highlights, and controls for moderators.  

---

### **Tech Stack**

#### **Frontend**
- **Next.js**: For building a fast, scalable, and interactive UI for moderators.
- **ShadCN UI**: For elegant, accessible UI components, including dashboards and alerts.
- **WebSockets**: For real-time data transfer between server and client.

#### **Backend**
- **Node.js**: Handles server-side processing and API endpoints.  
- **Socket.IO**: Provides real-time communication for video feed monitoring and alerts.  
- **Express.js**: Lightweight framework for managing APIs and requests.  

#### **AI & ML Models**
- **Gemini AI**: For real-time detection of prohibited objects, violence, explicit content, and emotions.


#### **Video Processing**
- **FFmpeg**: For streaming and frame extraction from live video feeds.  
- **MediaPipe**: For advanced facial and object recognition.


#### **Deployment**
- **Vercel**: For deploying the Next.js frontend.  
