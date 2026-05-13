// Single source of truth for portfolio content.
// Edit GitHub URLs here once you have the per-project repos.

export const profile = {
  name: "Bharath Kesineni",
  title: "Software Developer",
  tagline: "Full Stack · AI/ML · Cybersecurity",
  email: "kesinenibharath159@gmail.com",
  phone: "+91 89199 27500",
  location: "Hyderabad, Telangana, India",
  github: "https://github.com/Kesinenibharath",
  linkedin: "https://linkedin.com/in/bharath-kesineni",
  available: "2026 Graduate · Open to Opportunities",
  summary:
    "Software developer and 2026 B.Tech graduate with hands-on experience across full-stack web, machine learning, and cybersecurity. I learn by building — shipping real, production-shaped projects from idea to deploy.",
};

export const facts = [
  { label: "Location", value: "Hyderabad, Telangana, India" },
  { label: "Focus", value: "Full Stack · AI/ML · Cybersecurity" },
  {
    label: "Coursework",
    value: "OOP · DBMS · Computer Networks · Data Structures · Software Engineering",
  },
  {
    label: "Strengths",
    value: "Analytical thinking · Quick learner · Effective communication · Adaptability",
  },
];

export type EducationItem = {
  year: string;
  level: string;
  institution: string;
  board?: string;
  score: string;
};

export const education: EducationItem[] = [
  {
    year: "2022 – 2026",
    level: "B.Tech · Information Technology",
    institution: "Vignan's Lara Institute of Technology and Science",
    score: "CGPA 8.5 / 10 · Recently Graduated",
  },
  {
    year: "2020 – 2022",
    level: "Intermediate (MPC)",
    institution: "Narayana Junior College",
    board: "Board of Intermediate Education, Andhra Pradesh",
    score: "90%",
  },
  {
    year: "2019 – 2020",
    level: "SSC / 10th Class",
    institution: "Paparao Public School",
    board: "Board of Secondary Education, Andhra Pradesh",
    score: "93%",
  },
];

export const skills = [
  { category: "Languages", items: ["Python", "C++", "Java"] },
  { category: "Frontend", items: ["HTML5", "CSS3", "JavaScript", "React.js"] },
  { category: "Backend", items: ["Node.js", "Express.js", "REST APIs"] },
  { category: "Databases", items: ["MySQL", "MongoDB"] },
  {
    category: "Cybersecurity",
    items: [
      "CIA Triad",
      "Log Analysis",
      "Threat Detection",
      "File Integrity Monitoring",
      "SIEM Fundamentals",
      "Incident Response Basics",
      "Network Security",
      "Phishing Awareness",
    ],
  },
  { category: "Tools", items: ["Git", "GitHub", "VS Code"] },
];

import certApscheAiml from "@/assets/certs/apsche-aiml.jpg";
import certApscheMern from "@/assets/certs/apsche-mern.jpg";
import certBrainwave from "@/assets/certs/brainwave-webdev.jpg";

export type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  location: string;
  bullets: string[];
  project?: string;
  stack: string[];
  cert?: string;
  certLabel?: string;
  projectGithub?: string;
};

export const experience: ExperienceItem[] = [
  {
    role: "AI & ML Intern",
    company: "SmartBridge × APSCHE × Google for Developers India",
    period: "Oct 2025 – Mar 2026",
    location: "Remote",
    bullets: [
      "Applied supervised and unsupervised ML for preprocessing, feature engineering, training, and evaluation using Python, Pandas, NumPy, and Scikit-learn.",
      "Built and deployed predictive models with documented performance metrics and analytical findings.",
      "Executed the complete ML pipeline: data collection, cleaning, hyperparameter tuning, validation, and result interpretation.",
    ],
    project: "Smart Sorting — image classification of fresh vs rotten produce.",
    stack: ["Python", "TensorFlow", "Keras", "OpenCV", "NumPy", "Pandas"],
    cert: certApscheAiml,
    certLabel: "APSCHE × SmartBridge — AI & ML Internship Certificate",
    projectGithub: "https://github.com/Kesinenibharath/Smart_sorting",
  },
  {
    role: "Full Stack Developer Intern (MERN)",
    company: "SmartBridge Educational Services",
    period: "Jul 2025 – Aug 2025",
    location: "Remote",
    bullets: [
      "Built full-stack web apps with React.js and Node.js/Express, integrating REST APIs.",
      "Designed MongoDB schemas and built responsive UIs against dynamic APIs.",
      "Worked through the full SDLC: requirements, development, debugging, testing, and deployment.",
    ],
    project: "Food Ordering Application — end-to-end menu, cart, and order management.",
    stack: ["MongoDB", "Express", "React", "Node.js"],
    cert: certApscheMern,
    certLabel: "APSCHE × SmartBridge — Full Stack (MERN) Internship Certificate",
    projectGithub: "https://github.com/Kesinenibharath/Food_Ordering_App",
  },
  {
    role: "Web Development Intern",
    company: "Brainwave Matrix Solutions",
    period: "Jul 2025 – Aug 2025",
    location: "Remote",
    bullets: [
      "Developed responsive, interactive web pages using modern frontend technologies.",
      "Strengthened UI design, accessibility, and frontend skills through real-world tasks.",
    ],
    project: "E-Commerce Website — responsive shopping experience with category navigation.",
    stack: ["HTML5", "CSS3", "JavaScript"],
    cert: certBrainwave,
    certLabel: "Brainwave Matrix Solutions — Web Development Internship Certificate",
    projectGithub: "https://github.com/Kesinenibharath/Ecommerce_Website",
  },
];

export type Project = {
  title: string;
  type: string;
  description: string;
  stack: string[];
  github: string;
  demo?: string;
  icon: string;
  tint: string;
};

export const projects: Project[] = [
  {
    title: "File Integrity Monitor",
    type: "Cybersecurity",
    description:
      "SHA-256 fingerprinting system that detects unauthorized file changes — modifications, deletions, additions — with timestamped audit logs for compliance and incident response.",
    stack: ["Python", "hashlib", "SHA-256", "JSON"],
    github: "https://github.com/Kesinenibharath/File_Integrity_Monitor",
    icon: "🔒",
    tint: "from-emerald-500/25 to-emerald-500/0",
  },
  {
    title: "Smart Campus Guidance System",
    type: "AI · RAG · LLM",
    description:
      "Conversational platform delivering real-time academic guidance using Retrieval-Augmented Generation, OCR, and Large Language Models.",
    stack: ["Python", "RAG", "LLMs", "OCR"],
    github: "https://github.com/Kesinenibharath/College_Chatbot",
    icon: "🤖",
    tint: "from-lime-500/25 to-lime-500/0",
  },
  {
    title: "House Hunt App",
    type: "Full Stack · MERN",
    description:
      "Real estate platform for browsing, searching, and filtering rental properties — React frontend, Express API, MongoDB persistence.",
    stack: ["React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/Kesinenibharath/HouseHunt_App",
    icon: "🏠",
    tint: "from-violet-500/25 to-violet-500/0",
  },
  {
    title: "Student Performance Analysis",
    type: "Machine Learning",
    description:
      "Predicts student academic performance using Linear Regression and Random Forest, with feature analysis and evaluation reports.",
    stack: ["Python", "Scikit-learn", "Pandas", "Matplotlib"],
    github: "https://github.com/Kesinenibharath/Student_Performance_Analysis",
    icon: "📊",
    tint: "from-sky-500/25 to-sky-500/0",
  },
  {
    title: "Personal Expense Tracker",
    type: "Flask Web App",
    description:
      "Track daily expenses, categorize transactions, and view monthly summaries for personal budgeting.",
    stack: ["Python", "Flask", "SQLite", "Bootstrap"],
    github: "https://github.com/Kesinenibharath/Personal_Expense_Tracker",
    icon: "💰",
    tint: "from-amber-500/25 to-amber-500/0",
  },
  {
    title: "Weather App",
    type: "React Application",
    description:
      "Responsive weather forecasting app showing real-time conditions and forecasts via external APIs.",
    stack: ["React", "JavaScript", "CSS", "Weather API"],
    github: "https://github.com/Kesinenibharath/Weather-App",
    icon: "⛅",
    tint: "from-cyan-500/25 to-cyan-500/0",
  },
  {
    title: "AI Smart Attendance System",
    type: "AI · Computer Vision",
    description:
      "Facial-recognition attendance tracking with automated check-in/out and a real-time reporting dashboard.",
    stack: ["Python", "OpenCV", "Flask", "face_recognition"],
    github: "https://github.com/Kesinenibharath/AI-Smart-Attendance-System",
    icon: "🧠",
    tint: "from-fuchsia-500/25 to-fuchsia-500/0",
  },
  {
    title: "Smart Sorting",
    type: "Deep Learning",
    description:
      "Transfer-learning model that classifies fresh vs rotten fruits and vegetables from images.",
    stack: ["Python", "TensorFlow", "Keras", "OpenCV"],
    github: "https://github.com/Kesinenibharath/Smart_sorting",
    icon: "🍎",
    tint: "from-rose-500/25 to-rose-500/0",
  },
  {
    title: "E-Commerce Website",
    type: "Web Development",
    description:
      "Responsive online shopping site featuring product listings, category navigation, and a clean UI.",
    stack: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Kesinenibharath/Ecommerce_Website",
    icon: "🛒",
    tint: "from-orange-500/25 to-orange-500/0",
  },
  {
    title: "Food Ordering App",
    type: "Full Stack · MERN",
    description:
      "Food ordering platform with menu browsing, cart, and order management end-to-end.",
    stack: ["MongoDB", "Express", "React", "Node.js"],
    github: "https://github.com/Kesinenibharath/Food_Ordering_App",
    icon: "🍔",
    tint: "from-yellow-500/25 to-yellow-500/0",
  },
  {
    title: "To-Do List",
    type: "Frontend",
    description:
      "Task manager with add/edit/complete/delete and a clean, responsive interface.",
    stack: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Kesinenibharath/To-Do-List",
    icon: "📝",
    tint: "from-teal-500/25 to-teal-500/0",
  },
];

export type Certification = {
  name: string;
  issuer: string;
  meta: string;
  // image: drop the cert image into src/assets/certs/ and import it here
  image?: string;
  verifyUrl?: string;
  initials?: string;
  brandTint?: string;
  logo?: string;
};

import certCiscoCyberEss from "@/assets/certs/cisco-cybersecurity-essentials.jpg";
import certCiscoThreat from "@/assets/certs/cisco-cyber-threat-management.jpg";
import certInfosysPython from "@/assets/certs/infosys-python-foundation.jpg";
import certNptelDbms from "@/assets/certs/nptel-dbms.jpg";
import certNptelJava from "@/assets/certs/nptel-java.jpg";
import certServiceNow from "@/assets/certs/servicenow-cis-df.jpg";
import certPcap from "@/assets/certs/pcap-python.jpg";
import certAws from "@/assets/certs/aws-cloud-practitioner.jpg";
import certUdemy from "@/assets/certs/udemy-fullstack.jpg";
import logoCisco from "@/assets/logos/cisco.png";
import logoInfosys from "@/assets/logos/infosys.png";
import logoNptel from "@/assets/logos/nptel.jpg";
import logoAws from "@/assets/logos/aws.png";
import logoUdemy from "@/assets/logos/udemy.png";
import logoServiceNow from "@/assets/logos/servicenow.png";

export const certifications: Certification[] = [
  {
    name: "Cybersecurity Essentials",
    issuer: "Cisco",
    meta: "Threats · Vulnerabilities · Cryptography · Access Control · Network Defense",
    image: certCiscoCyberEss,
    logo: logoCisco,
  },
  {
    name: "Cyber Threat Management",
    issuer: "Cisco Networking Academy",
    meta: "Governance · Risk Management · Threat Intelligence · Incident Response · SOC",
    image: certCiscoThreat,
    logo: logoCisco,
  },
  {
    name: "Python Foundation Certification",
    issuer: "Infosys Springboard",
    meta: "Python Basics · Data Types · Control Flow · Functions · OOP",
    image: certInfosysPython,
    logo: logoInfosys,
  },
  {
    name: "Database Management Systems",
    issuer: "NPTEL — IIT (Govt. of India)",
    meta: "ER Model · Relational Algebra · SQL · Normalization · Transactions · Indexing",
    image: certNptelDbms,
    logo: logoNptel,
  },
  {
    name: "Programming in Java",
    issuer: "NPTEL — IIT (Govt. of India)",
    meta: "OOP · Inheritance · Exception Handling · Collections · Multithreading · JDBC",
    image: certNptelJava,
    logo: logoNptel,
  },
  {
    name: "CIS-DF — Certified Implementation Specialist",
    issuer: "ServiceNow",
    meta: "CMDB · CSDM · Data Foundations · Service Mapping · Discovery",
    image: certServiceNow,
    logo: logoServiceNow,
  },
  {
    name: "PCAP: Programming Essentials in Python",
    issuer: "Cisco Networking Academy × OpenEDG",
    meta: "OOP · Modules · Packages · Exceptions · Iterators · Generators · File I/O",
    image: certPcap,
    logo: logoCisco,
  },
  {
    name: "AWS Cloud Practitioner Essentials",
    issuer: "Amazon Web Services",
    meta: "Cloud Concepts · EC2 · S3 · IAM · VPC · Pricing · Security · Architecture",
    image: certAws,
    logo: logoAws,
  },
  {
    name: "The Complete Full-Stack Web Development Bootcamp",
    issuer: "Udemy · Dr. Angela Yu",
    meta: "HTML · CSS · JavaScript · Node.js · React · Express · MongoDB · REST APIs",
    image: certUdemy,
    logo: logoUdemy,
  },
];
