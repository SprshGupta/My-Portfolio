export const resumeData = {
  personal: {
    name: "Sparsh Gupta",
    role: "Data Scientist",
    tagline: "Building Intelligent Systems with NLP & Generative AI",
    location: "Gurugram, India",
    email: "sparsh2580@gmail.com",
    phone: "+91 7007998199",
    social: {
      github: "https://github.com/sparshgupta", // Placeholder
      linkedin: "https://linkedin.com/in/sparshgupta", // Placeholder
      portfolio: "#"
    }
  },
  about: "I am a Data Scientist specializing in Natural Language Processing (NLP), Deep Learning, and Generative AI. With a strong foundation in Computer Science and hands-on experience in building scalable AI pipelines, I focus on creating autonomous agents and fine-tuning LLMs to solve real-world problems.",
  experience: [
    {
      company: "Whilter.AI",
      role: "Data Scientist",
      period: "July 2024 - Present",
      description: "Engineered scalable data pipelines and fine-tuned machine learning models for text-to-speech conversion. Architected cloud-native solutions on AWS and GCP.",
      achievements: [
        "Improved processing efficiency by 30% through model optimization.",
        "Enhanced synthesized speech quality by 40% via specialized dataset retraining.",
        "Reduced deployment time by 25% using cloud-native solutions.",
        "Pioneered a production-ready conversational Voice AI ecosystem for airlines."
      ]
    }
  ],
  education: [
    {
      degree: "B.Tech in Computer Science and Engineering",
      institution: "Galgotias University",
      year: "2021–2025",
      score: "CGPA: 8.57/10.0"
    },
    {
      degree: "Senior Secondary Education (Science)",
      institution: "Ryan International School",
      year: "2020–2021",
      score: "81%"
    }
  ],
  skills: [
    { 
      category: "Languages", 
      items: ["Python", "Java", "SQL", "HTML/CSS", "C", "C++"] 
    },
    { 
      category: "Data Science & ML", 
      items: ["NLP", "Deep Learning", "Computer Vision", "Generative AI", "Model Fine-Tuning", "Clustering", "Feature Engineering", "Data Pipelines", "Statistical Analysis", "Hypothesis Testing", "Agentic AI", "LLMs"] 
    },
    { 
      category: "Data Analysis", 
      items: ["NumPy", "Pandas", "Matplotlib", "Seaborn", "Plotly", "Cufflinks", "Manim", "Excel", "Jupyter", "Power BI", "Statistics", "Mathematics"] 
    },
    { 
      category: "AI Frameworks", 
      items: ["LangChain", "LangGraph", "Pipecat", "Livekit", "Text-to-Speech", "RAG", "Autonomous Agents"] 
    },
    { 
      category: "ML Libraries & Tools", 
      items: ["Scikit-learn", "TensorFlow", "PyTorch", "OpenCV", "Flask", "FastAPI", "HuggingFace", "Transformers", "MLflow", "Pinecone", "FAISS", "Whisper", "BERT", "Git", "GitHub", "Docker", "Linux", "Azure", "AWS", "GCP"] 
    }
  ],
  projects: [
    {
      title: "AI-Powered Virtual Assistant for Airlines",
      description: "Designed and deployed an AI-powered voice bot for airline operations, building end-to-end pipelines for model hosting, agent development, and productionization. Implemented tool-call integrations for airline-specific queries and low-latency real-time transcription. Fine-tuned TTS and LLM models and adapted Whisper-based STT for language-specific accuracy. Optimized system latency to 600 ms, improving responsiveness, fault tolerance, observability, monitoring, and CI/CD-driven automated deployments across multilingual production environments and reduced call-handling errors while improving user satisfaction.",
      tech: ["Whisper", "LLMs", "TTS", "Python"],
      metrics: "600ms latency, reduced call-handling errors"
    },
    {
      title: "Professional Network Profile Analysis System",
      description: "Developed a Python-based data extraction and analysis tool for LinkedIn and Twitter profiles with 98% accuracy rate. Leveraged LangChain framework for advanced semantic information processing and integrated Pinecone vector database for high-performance similarity-based profile search and retrieval, enabling sub-second query response times.",
      tech: ["LangChain", "Pinecone", "Python"],
      metrics: "98% accuracy, sub-second query response"
    },
    {
      title: "Advanced Text-to-Speech Model Fine-Tuning",
      description: "Developed a state-of-the-art transformer-based TTS model trained on 100+ hours of curated speech data to achieve zero-shot voice synthesis capabilities. Implemented an end-to-end training and optimization pipeline encompassing audio preprocessing, model architecture customization, and inference optimization with very low latency with in 100 ms, resulting in significantly enhanced voice naturalness and multilingual capabilities.",
      tech: ["Transformers", "PyTorch", "Audio Processing"],
      metrics: "100ms latency, high voice naturalness"
    },
    {
      title: "AI-Driven Hyper-Personalized Engine",
      description: "Architected an AI-powered dynamic template and message generation system for hyper-personalized insurance renewal communications, improving customer response rates by 28%. Implemented automated image processing algorithms to overlay customer-specific data on branded creative templates, enhancing brand recall metrics and driving measurable increases in customer engagement.",
      tech: ["Image Processing", "AI", "Python"],
      metrics: "28% increase in customer response rates"
    }
  ]
};
