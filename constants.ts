import { Project, Experience, Education, SkillCategory } from './types';

export const PERSONAL_INFO = {
  name: "Sandeep Kumar Amgothu",
  role: "Machine Learning Engineer",
  email: "sandeepkumaramgothu3@gmail.com",
  phone: "+1 (203) 997-4125",
  location: "Corpus Christi, USA",
  linkedin: "linkedin.com/in/sandeepkumaramgothu",
  github: "github.com/Sandeepkumaramgothu",
  portfolio: "#",
  scholar: "#"
};

export const SUMMARY = `Machine Learning Engineer with 5+ years building production-grade AI systems specializing in LLM security, computer vision, and scalable ML infrastructure. Expert in adversarial AI red-teaming, responsible AI governance, and MLOps automation. Proven ability to deploy models processing 15M+ records monthly while reducing latency by 40%. Published researcher bridging academic innovation and enterprise-grade ML deployment.`;

export const SKILLS: SkillCategory[] = [
  {
    category: "Machine Learning & AI",
    skills: ["PyTorch", "TensorFlow", "Scikit-learn", "Hugging Face", "LangChain", "OpenAI API", "Anthropic Claude"]
  },
  {
    category: "LLM & GenAI",
    skills: ["GPT-4/4o", "LLaMA-2/3", "BERT", "RAG Pipelines", "Prompt Engineering", "Fine-tuning (LoRA/QLoRA)"]
  },
  {
    category: "AI Safety & Security",
    skills: ["Adversarial Red-Teaming", "Jailbreak Detection", "Toxicity Evaluation", "Llama Guard", "Bias Mitigation"]
  },
  {
    category: "MLOps & Cloud",
    skills: ["MLflow", "Docker", "Kubernetes", "AWS (SageMaker, Bedrock, Lambda)", "Azure", "GCP", "Terraform"]
  },
  {
    category: "Data Engineering",
    skills: ["Python", "SQL", "Apache Airflow", "PySpark", "Snowflake", "Vector DBs (FAISS, Pinecone)"]
  }
];

export const EXPERIENCE: Experience[] = [
  {
    company: "Texas A&M University–Corpus Christi",
    role: "Graduate Research Assistant – AI/ML Research",
    location: "Corpus Christi, USA",
    period: "Jan 2024 – May 2025",
    points: [
      "Led development of production-ready adversarial AI testing framework processing 3,000+ LLM interactions.",
      "Architected end-to-end MLOps pipeline for audio-based UAV detection reducing computation time by 66%.",
      "Built production RAG systems integrating LangChain and FAISS enabling sub-200ms query latency.",
      "Designed and deployed automated LLM red-teaming infrastructure reducing attack success rates by 20–50%."
    ]
  },
  {
    company: "Tata Consultancy Services (TCS)",
    role: "Data Engineer",
    location: "Hyderabad, India",
    period: "Nov 2021 – Jul 2023",
    points: [
      "Architected cloud-native ETL pipelines on AWS processing 15M+ records/month with 40% latency reduction.",
      "Led AWS cloud migration for Fortune 500 client (Xerox), delivering 99.9% data availability SLA.",
      "Engineered Python-based intelligent web scrapers with NLP-powered content extraction.",
      "Collaborated with ML teams to build feature engineering pipelines improving model accuracy by 15%."
    ]
  },
  {
    company: "Accenture",
    role: "Associate Data Engineer",
    location: "Hyderabad, India",
    period: "Jun 2021 – Oct 2021",
    points: [
      "Automated recurring analytics workflows using Python, SQL, and Power BI, eliminating 25% of manual reporting.",
      "Developed production-grade Python scripts for data preprocessing across 500K+ records.",
      "Delivered 5+ client data analytics projects in cross-functional teams."
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    title: "Automated Taxonomy-Driven LLM Red-Teaming Framework",
    period: "Jul 2025 – Dec 2025",
    description: [
      "Architected enterprise-grade adversarial testing framework extending AdversaFlow.",
      "Engineered weighted ensemble scorer combining Llama Guard, DeBERTa, Detoxify.",
      "Achieved 20–50% reduction in attack success rates via safety fine-tuning."
    ],
    tags: ["LLM Security", "PyTorch", "MLOps", "Llama-3"],
    link: "#"
  },
  {
    title: "UAV Audio Detection using Deep Learning",
    period: "Jun 2024 – Jan 2025",
    description: [
      "Developed spectrogram-based classifiers (CNN, RNN, VGG19) achieving 97.2% F1-score.",
      "Engineered scalable data augmentation pipeline processing 50K+ audio samples.",
      "Optimized for edge deployment with <100ms inference latency."
    ],
    tags: ["Audio Processing", "Deep Learning", "CNN/RNN", "Edge AI"],
    link: "#"
  },
  {
    title: "Supply Chain Analytics Dashboards",
    period: "May 2024 – Aug 2024",
    description: [
      "Delivered enterprise BI solution integrating Power BI with SQL Server and Python.",
      "Reduced manual reporting by 30% for 200+ operational stakeholders."
    ],
    tags: ["Power BI", "SQL", "Python", "Data Visualization"]
  }
];

export const EDUCATION: Education[] = [
  {
    institution: "Texas A&M University–Corpus Christi",
    degree: "M.S., Computer Science",
    year: "Aug 2023 – May 2025",
    details: "GPA: 3.93/4.0 | Focus: ML, Deep Learning, AI Safety"
  },
  {
    institution: "Vasavi College of Engineering",
    degree: "B.E., Information Technology",
    year: "Aug 2017 – Aug 2021",
    details: "GPA: 3.64/4.0"
  }
];

export const CERTIFICATIONS = [
  "Microsoft Certified: Power BI Data Analyst Associate (2025-2026)",
  "Microsoft Certified: Azure Administrator Associate (2023-2026)",
  "ICUAS 2025: UAV Audio Detection Research Publication"
];
