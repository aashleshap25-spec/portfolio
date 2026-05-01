export const navLinks = [
  { num: "01", label: "Home", href: "#home" },
  { num: "02", label: "About", href: "#about" },
  { num: "03", label: "Stack", href: "#stack" },
  { num: "04", label: "Projects", href: "#projects" },
  { num: "05", label: "Education", href: "#education" },
  { num: "06", label: "Contact", href: "#contact" },
];

export const techStack = [
  { name: "Java", category: "Language", icon: "☕" },
  { name: "HTML", category: "Frontend", icon: "📄" },
  { name: "CSS", category: "Frontend", icon: "🎨" },
  { name: "JavaScript", category: "Language", icon: "{}" },
  { name: "Python", category: "Language", icon: ">_" },
  { name: "React", category: "Frontend", icon: "⚛" },
  { name: "Node.js", category: "Backend", icon: "⬡" },
  { name: "Express", category: "Backend", icon: "⇄" },
  { name: "MongoDB", category: "Database", icon: "🗄" },
  { name: "SQL", category: "Database", icon: "⊞" },
];

export const projects = [
  {
    id: 1,
    num: "01 / 04",
    category: "Full-Stack + Real-Time",
    title: "ChatBot",
    subtitle: "Real-Time Chat Application",
    description:
      "A full-stack real-time chat application enabling secure one-to-one communication with live typing indicators and user presence tracking.",
    detail:
      "Implemented JWT-based authentication and real-time messaging using Socket.io. Added typing indicators, user presence tracking, and message persistence. Designed scalable backend APIs and optimized database operations.",
    highlights: [
      "JWT-based authentication",
      "Real-time messaging via Socket.io",
      "Typing indicators & presence",
      "Persistent message storage",
    ],
    tags: ["React", "Node.js", "MongoDB", "Socket.io", "JWT"],
    github: "https://github.com/aashleshap25-spec/chat-bot.git",
    year: "2025",
    featured: true,
    // Chat / messaging themed image
    image: "https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=900&q=80",
  },
  {
    id: 2,
    num: "02 / 04",
    category: "Full-Stack",
    title: "Local Link",
    subtitle: "Community Platform — MERN Stack",
    description:
      "A scalable community server application supporting group discussions and real-time interactions with role-based access control.",
    detail:
      "Implemented role-based authentication and access control for structured communication. Optimized backend performance and ensured efficient data handling across the platform.",
    highlights: [
      "Role-based auth & access control",
      "Group discussions & real-time chat",
      "Scalable MERN architecture",
      "Optimized backend performance",
    ],
    tags: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    github: "https://github.com/aashleshap25-spec/community-server-.git",
    year: "2025",
    featured: true,
    // Community / people collaboration image
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=900&q=80",
  },
  {
    id: 3,
    num: "03 / 04",
    category: "Machine Learning + NLP",
    title: "Newsletter Clustering",
    subtitle: "NLP-Based Content Categorization",
    description:
      "An NLP-based system to cluster and categorize large volumes of newsletter content, improving searchability and information retrieval efficiency.",
    detail:
      "Applied TF-IDF vectorization and clustering algorithms to organize content at scale. Enhanced searchability and information retrieval efficiency across large document sets.",
    highlights: [
      "TF-IDF vectorization",
      "Unsupervised clustering",
      "Improved content discoverability",
      "Large-scale NLP pipeline",
    ],
    tags: ["Python", "NLP", "TF-IDF", "scikit-learn", "Clustering"],
    github: "https://github.com/maansapoosa-bot/News-Article-Clustering",
    year: "2025",
    featured: false,
    // Data / NLP / text analysis image
    image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=900&q=80",
  },
  {
    id: 4,
    num: "04 / 04",
    category: "Full-Stack + ML",
    title: "IntelliDash",
    subtitle: "Educational Analytics Platform",
    description:
      "An analytics dashboard to visualize student performance and engagement metrics, enabling early identification of at-risk students.",
    detail:
      "Implemented machine learning models including Random Forest for dropout prediction and Linear Regression for performance forecasting. Supported data-driven decision-making for educators.",
    highlights: [
      "Random Forest dropout prediction",
      "Linear Regression forecasting",
      "Student engagement metrics",
      "Early at-risk identification",
    ],
    tags: ["React", "Python", "ML", "Random Forest", "Linear Regression"],
    github: "https://github.com/rehanxt5/ai-powered-student-insights.git",
    year: "2025",
    featured: true,
    // Dashboard / analytics image
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&q=80",
  },
];

export const education = [
  {
    icon: "🎓",
    period: "2025 — 2029",
    type: "Undergraduate",
    degree: "B.Tech — Computer Science Engineering (AI/ML)",
    institution: "Polaris School of Technology",
    description:
      "Specializing in Artificial Intelligence & Machine Learning. Focused on scalable systems, DSA, and hands-on full-stack + ML-integrated application development.",
    status: "Currently — Year 1",
    areas: [
      "Data Structures & Algorithms",
      "Artificial Intelligence & ML",
      "Full-Stack Web Development",
      "Database Design & Systems",
      "Object-Oriented Programming",
    ],
  },
  {
    icon: "🏫",
    period: "2023 — 2025",
    type: "Higher Secondary",
    degree: "Class XII — Science (PCM + CS)",
    institution: "Krishna Public School, Bhilai",
    description: "Scored 85% with Computer Science as an additional subject.",
    status: "Completed — 85%",
    areas: [],
  },
  {
    icon: "📚",
    period: "2021 — 2023",
    type: "Secondary",
    degree: "Class X",
    institution: "St. Thomas School, Ranchi",
    description: "Scored 91% in Class X board examinations.",
    status: "Completed — 91%",
    areas: [],
  },
];
