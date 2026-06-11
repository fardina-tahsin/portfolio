import React from "react";

export const resume = {
  name: "Fardina Tahsin",
  contact: {
    phone: "+88 01995212292",
    email: "fardinatahsin@gmail.com",
    linkedin: "https://www.linkedin.com/in/fardina-tahsin-09229b2a2/",      
    github: "https://github.com/fardina-tahsin",       
    location: "Chittagong, Bangladesh",
  },

  education: [
    {
      institution: "East Delta University, Chittagong",
      degree: "BSc in Computer Science & Engineering",
      period: "May, 2022 - Present",
      details: [
        "CGPA: 3.82 out of 4",
        "Recipient of BoT Grant Scholarship",
      ],
    },
  ],

  experience: [
    {
      title: "Computer Club, East Delta University",
      role: "Sub-Executive",
      period: "October, 2023 - December, 2024",
      location: "Onsite",
      bullets: [
        "Participated in organizing and supporting university-level programming contests and workshops.",
        "Worked collaboratively in a team environment to assist with technical event coordination and club activities.",
      ],
    },
  ],

  projects: [
    {
      name: "KrishiRokkha (HarvestGuard)",
      githubUrl: "https://github.com/fardina-tahsin/krishi-rokkha.git",       
      bullets: [
        <>Developed a smart agriculture web app featuring AI-based crop disease detection, real time weather risk assessment and crop batch management.</>,
        <>Built a responsive frontend using machine learning model <strong className="font-serif font-semibold text-gray-700">HTML, CSS, JavaScript, Vite</strong> and <strong className="font-serif font-semibold text-gray-700">Three.js</strong>.</>,
        <>Implemented <strong className="font-serif font-semibold text-gray-700">Firebase authentication, OpenWeatherMap, Roboflow</strong> and <strong className="font-serif font-semibold text-gray-700">HuggingFace APIs</strong> for secure access and intelligent decision support, integrated Bangla localization and voice-based interaction to improve usability for farmers.</>,
      ],
    },
    {
      name: "JuiceBar E-commerce Web",
      githubUrl: "https://github.com/fardina-tahsin/JuiceBar-E-commerce-Website.git",     
      bullets: [
        <>Developed an e-commerce web application with user authentication, dynamic cart functionality and responsive UI.</>,
        <>Built frontend interfaces <strong className="font-serif font-semibold text-gray-700">(HTML, CSS</strong> and <strong className="font-serif font-semibold text-gray-700">Javascript)</strong> for signup, product listing, cart management and navigation, enabling interactive and real time updates for users.</>,
        <>Handled backend data storage, server routing and form submission using <strong className="font-serif font-semibold text-gray-700">Node.js, Express.js</strong> and <strong className="font-serif font-semibold text-gray-700">MongoDB Altas</strong>.</>,
        <>Containerized the application using <strong className="font-serif font-semibold text-gray-700">Docker</strong> with optimized image builds and secure deployments.</>,
      ],
    },
    {
      name: "Credit Card Fraud Detection",
      githubUrl: "https://github.com/fardina-tahsin/ML-project--Credit-Card-Fraud.git",     
      bullets: [
        <>Developed a machine learning model to detect fraud transactions happening in credit card.</>,
        <>Handled data preprocessing, class imbalance <strong className="font-serif font-semibold text-gray-700">(Undersampling</strong> and <strong className="font-serif font-semibold text-gray-700">SMOTE)</strong>, model training and evaluation.</>,
        <>Deployed the project using <strong className="font-serif font-semibold text-gray-700">Python, scikit-learn</strong> and <strong className="font-serif font-semibold text-gray-700"><strong className="font-serif font-semibold text-gray-700">Streamlit</strong></strong> for building and running real time predictions.</>,
      ],
    },
  ],

  skills: [
    {
      category: "Programming Languages",
      items: "C++ (Proficient), Python (Intermediate), TypeScript (Basic)",
    },
    {
      category: "Frontend Frameworks & Libraries",
      items: "React.js, Next.js, Flutter (Basic)",
    },
    {
      category: "Web Technologies & Styling",
      items: "HTML, CSS, JavaScript (Intermediate), Tailwind CSS, Streamlit (Basic)",
    },
    {
      category: "Backend Development",
      items: "Node.js, PHP, Firebase (Basic)",
    },
    {
      category: "Clouds & Databases",
      items: "MongoDB, MySQL, PostgreSQL (Basic)",
    },
    {
      category: "Tools & Environments",
      items: "Git, GitHub, Docker, VS Code, Jupyter Notebook (Basic)",
    },
    {
      category: "AI/ML",
      items: "Basics of Artificial Intelligence, Machine Learning, and Deep Learning",
    },
  ],


  achievements: [
    {
      bullets: [
        <>Solved <strong className="font-serif font-semibold text-gray-700">600+</strong> problems at various online judges and participated in <strong className="font-serif font-semibold text-gray-700">60+</strong> online and <strong className="font-serif font-semibold text-gray-700">5+</strong> onsite contests.</>,
      ],
    },
    {
      bullets: [
        <>Rated <strong className="font-serif font-semibold text-gray-700">Newbie</strong> on Codeforces with Max Rating <strong className="font-serif font-semibold text-gray-700">1079</strong> and Rated <strong className="font-serif font-semibold text-gray-700">1*</strong> on Codechef with Max Rating <strong className="font-serif font-semibold text-gray-700">1380</strong>.</>,
      ],
    },
    {
      bullets: [
        <>Participated in <strong className="font-serif font-semibold text-gray-700">EDU HackFest</strong> in 2025, <strong className="font-serif font-semibold text-gray-700">ICPC Dhaka Regional</strong> in 2023, 2024</>,
      ],
    },
    {
      bullets: [
        <><strong className="font-serif font-semibold text-gray-700">2nd Runner-Up</strong> - EDU Intra University Programming Contest, Summer 2023</>,
      ],
      position: "Team: Team_1",
    },
    {
      bullets: [
        "Vice Chancellor's List - East Delta University",
      ],
      position: "Perfect 4.0 CGPA",
    },
    {
      bullets: [
        "Dean's List - East Delta University",
      ],
      position: "CGPA >= 3.5",
    },
  ],
}
