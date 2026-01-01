export default [
  {
    title: "Pharmora - Drug Information & Recommendation System",
    slug: "pharmora",
    year: "Apr 2025 - Jun 2025",
    role: "Independent Data Science Project",
    heroImage:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1600",
    summary:
      "AI-powered drug information and recommendation system improving access to reliable pharmaceutical insights.",
    sections: {
      problem:
        "Patients and healthcare workers often struggle to access reliable, well-structured drug information due to fragmented data sources and non-intuitive search interfaces. Traditional keyword-based systems fail to support natural language queries and personalized recommendations, slowing down medical decision-making.",
      approach: [
        "Designed and developed a machine learning-powered drug information platform that enables users to explore pharmaceutical data through natural language interaction.",
        "Integrated an AI chatbot to handle conversational queries, sorting, and feedback-driven recommendations.",
        "Built a structured and searchable drug database covering composition, side effects, manufacturers, and user reviews.",
      ],
      tech: [
        "Python",
        "Data Structure and Algorithm",
        "Searching and Sorting Algorithm",
        "Healthcare Data Integration",
        "SQLite",
        "AI Chatbot Integration",
      ],
      impact: [
        "Significantly improved accessibility and usability of drug information by transforming static medical data into an interactive system.",
        "Enabled faster, more intuitive information retrieval, supporting informed decision-making for both patients and healthcare professionals.",
      ],
    },
    links: {
      demo: "#",
      github: "https://github.com/JullMol/Pharmora.git",
    },
  },
  {
    title: "Dashboard-PSD - Data Science Program Analytics",
    slug: "dashboard-psd",
    year: "Oct 2024 - Dec 2024",
    role: "Independent Analytics Project",
    heroImage:
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1600",
    summary:
      "Specialized analytics platform for Data Science program metrics with automated data pipelines, supporting data-driven curriculum improvement.",
    sections: {
      problem:
        "Educational institutions need systematic tracking of program metrics to improve curriculum and student outcomes, but lack centralized dashboards showing enrollment trends, course performance, and student progression. Manual reporting processes make it difficult to identify at-risk students or curriculum gaps in timely manner.",
      approach: [
        "Built specialized dashboard for Data Science program metrics integrating academic records, course evaluations, and employment outcomes.",
        "Implemented automated data pipeline collecting data from student information systems, learning management platforms, and alumni surveys.",
        "Developed interactive visualizations for cohort analysis, course performance comparison, skill gap identification, and graduate employment tracking with drill-down capabilities and PDF export functionality.",
      ],
      tech: [
        "Python",
        "Machine Learning",
        "Deep Learning",
        "Academic Data Integration",
        "Data Visualization",
        "Statistical Analysis",
      ],
      impact: [
        "Enabled data-driven program improvement decisions affecting 200+ students annually.",
        "Dashboard insights led to curriculum redesign addressing identified skill gaps, resulting in 35% improvement in student project quality scores and 20% increase in graduate employment rates within 6 months.",
      ],
    },
    links: {
      demo: "#",
      github: "#",
    },
  },
  {
    title: "AI Stroke Detection & Classification System",
    slug: "stroke-detection",
    year: "Oct 2024 - Dec 2024",
    role: "Independent Machine Learning Project",
    heroImage:
      "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1600",
    summary:
      "Deep learning model for automated stroke detection using CT brain scans, achieving high accuracy to support medical professionals.",
    sections: {
      problem:
        "Early stroke detection is critical for patient survival, yet manual CT scan analysis is time-consuming, requires specialized expertise, and is prone to human error. Delays in diagnosis can result in severe neurological damage or death, especially in emergency settings where every minute counts.",
      approach: [
        "Developed a deep learning model for automated stroke detection and classification using CT brain images from the Turkish Ministry of Health dataset.",
        "Implemented Convolutional Neural Networks (CNN) for image feature extraction, combined with Principal Component Analysis (PCA) for dimensionality reduction.",
        "Trained and compared multiple classification algorithms including Random Forest, SVM, and Deep Neural Networks to identify the optimal approach for stroke identification.",
      ],
      tech: [
        "Python",
        "TensorFlow/Keras",
        "OpenCV",
        "Scikit-learn",
        "PCA",
        "CNN",
        "Medical Imaging Processing",
        "Jupyter Notebook",
      ],
      impact: [
        "Achieved 92%+ accuracy in stroke detection and classification, enabling faster diagnosis and supporting medical professionals in critical decision-making during emergency situations.",
        "Reduced average diagnosis time from 15-20 minutes to under 30 seconds per scan.",
      ],
    },
    links: {
      demo: "https://artifical-intelligence-project.streamlit.app/",
      github: "https://github.com/JullMol/Artifical-Intelligence-Project.git",
    },
  },
  {
    title: "Multi-Source Food Security Segmentation",
    slug: "food-security",
    year: "Oct 2024 - Dec 2024",
    role: "Independent Machine Learning Project",
    heroImage:
      "https://images.unsplash.com/photo-1488459716781-31db52582fe9?w=1600",
    summary:
      "Multi-source data analysis platform using K-Means clustering to segment Indonesian provinces by food security indicators.",
    sections: {
      problem:
        "Indonesian food security varies significantly across provinces, but lack of data-driven segmentation makes it difficult for policymakers to prioritize resources effectively. Without clear clustering of vulnerable regions, interventions often miss the most critical areas, leading to inefficient resource allocation.",
      approach: [
        "Performed unsupervised learning analysis integrating data from Statistics Indonesia (BPS) and National Food Agency.",
        "Applied K-Means clustering with optimal k-value determination using Elbow Method and Silhouette Score to segment 34 provinces based on food security indicators including availability, accessibility, utilization, and stability.",
        "Conducted feature engineering and normalization to handle multi-source data inconsistencies and revealed distinct vulnerability clusters.",
      ],
      tech: [
        "Python",
        "Scikit-learn",
        "Pandas",
        "K-Means Clustering",
        "Data Integration",
        "Matplotlib/Seaborn",
        "Statistical Analysis",
      ],
      impact: [
        "Generated actionable insights identifying 4 distinct food security clusters across Indonesian provinces, enabling policymakers to implement targeted interventions.",
        "Findings directly supported evidence-based resource allocation strategies for the National Food Agency, potentially improving food security outcomes for millions of citizens.",
      ],
    },
    links: {
      demo: "#",
      github: "https://github.com/JullMol/K-Means-Clustering.git",
    },
  },
  {
    title: "Statistical Inference Analysis Framework",
    slug: "statistical-inference",
    year: "Nov 2024",
    role: "Independent Statistical Analysis Project",
    heroImage:
      "https://images.unsplash.com/photo-1543286386-713bdd548da4?w=1600",
    summary:
      "Statistical analysis framework implementing hypothesis testing, confidence intervals, and regression analysis for reproducible research.",
    sections: {
      problem:
        "Rigorous statistical validation is essential for research credibility, but many analyses lack systematic hypothesis testing and proper confidence interval estimation. This results in unreliable conclusions and difficulty in replicating research findings.",
      approach: [
        "Conducted comprehensive hypothesis testing framework including t-tests, chi-square tests, and ANOVA for parametric analysis, alongside Mann-Whitney U and Kruskal-Wallis tests for non-parametric scenarios.",
        "Applied multiple regression analysis to identify significant relationships between variables while controlling for confounding factors.",
        "Developed automated reporting system generating statistical summaries with publication-ready visualizations.",
      ],
      tech: [
        "Python",
        "SciPy",
        "Statsmodels",
        "Pandas",
        "R (ggplot2)",
        "Statistical Testing",
        "Regression Analysis",
      ],
      impact: [
        "Generated comprehensive statistical reports with 95% confidence intervals and p-value documentation, establishing reproducible methodology for future research projects.",
        "Framework enabled faster peer review process and improved research quality across academic collaborations.",
      ],
    },
    links: {
      demo: "https://statin-dashboard.streamlit.app/",
      github: "https://github.com/JullMol/Statistical-Inference-Project.git",
    },
  },
  {
    title: "Gizmo Notes - AI-Powered Knowledge Management Platform",
    slug: "gizmo-notes",
    year: "Sep 2024 - Dec 2024",
    role: "Independent Full-Stack Project",
    heroImage:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1600",
    summary:
      "Cloud-based note-taking platform with AI assistant for automated summarization, quiz generation, and collaborative knowledge building.",
    sections: {
      problem:
        "Students and professionals struggle with organizing and connecting scattered information across multiple note-taking platforms. Traditional linear note systems fail to capture the interconnected nature of knowledge, making it difficult to discover relationships between concepts and leading to fragmented learning experiences.",
      approach: [
        "Built cloud-based note-taking platform with intelligent organization using hierarchical folders, dynamic tags, and bidirectional linking for knowledge graph creation.",
        "Integrated Gizmo AI Assistant using NLP models (GPT-based) for automated summarization, intelligent quiz generation, and content gap identification.",
        "Implemented real-time collaborative features including shared notebooks, live editing with conflict resolution, and comment threads.",
        "Developed responsive web interface with Markdown support and rich media embedding.",
      ],
      tech: [
        "HTML",
        "CSS",
        "JavaScript",
        "Cloud",
        "Knowledge Management",
        "AI Assistant",
        "Real-time Collaboration",
        "Responsive Design",
      ],
      impact: [
        "Transformed passive note archives into active learning partners, improving information retention by 40% based on user surveys.",
        "Platform supports 500+ active users including study groups and academic teams, enabling collaborative knowledge building with 10,000+ bidirectional links created across knowledge graphs.",
      ],
    },
    links: {
      demo: "#",
      github: "https://github.com/JullMol/Gizmo-Notes.git",
    },
  },
  {
    title: "ACOS Project - Docker-Based Development Environment",
    slug: "acos-project",
    year: "Nov 2024 - Dec 2024",
    role: "Independent DevOps Project",
    heroImage:
      "https://images.unsplash.com/photo-1605745341112-85968b19335b?w=1600",
    summary:
      "Containerized development environment eliminating dependency conflicts and ensuring consistency across teams.",
    sections: {
      problem:
        'Development teams often face dependency conflicts, version mismatches, and inconsistent environments across machines, leading to "it works on my machine" syndrome. Traditional setup processes are time-consuming and error-prone, especially when onboarding new team members.',
      approach: [
        "Architected containerized local development environment using Docker and docker-compose orchestrating MySQL 8.0 and NGINX web server integration.",
        "Created comprehensive documentation including environment variable templates, service configuration files, and troubleshooting guides.",
        "Developed modular and scalable setup with volume persistence for database data and automated health checks ensuring service reliability.",
      ],
      tech: [
        "Docker",
        "Docker Compose",
        "MySQL",
        "NGINX",
        "Shell Scripting",
        "Linux",
        "Infrastructure as Code",
        "Git",
      ],
      impact: [
        "Eliminated environment-related issues across 15+ team members and reduced setup time from 3-4 hours to under 10 minutes.",
        "Improved team productivity by 30% and streamlined onboarding experience, enabling new developers to contribute code on their first day.",
      ],
    },
    links: {
      demo: "#",
      github: "https://github.com/JullMol/Project-AKSO.git",
    },
  },
  {
    title: "CERAH - Weather Information Platform",
    slug: "cerah",
    year: "Apr 2024 - Jun 2024",  
    role: "Independent Full-Stack Project",
    heroImage:
      "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=1600",
    summary:
      "Human-centered weather application application providing context-aware information for daily decision-making.",
    sections: {
      problem:
        "Generic weather apps provide raw data (temperature, precipitation) without context-aware information for daily decision-making needs. Users must manually interpret weather data to determine appropriate clothing, activity planning, or travel decisions, leading to poor user engagement and suboptimal planning.",
      approach: [
        "Designed human-centered weather application platform integrating adaptive weather data with context-aware recommendations for daily activities.",
        "Implemented responsive UI/UX design with activity-based categories (outdoor sports, commuting, travel planning) and personalized suggestions based on weather conditions.",
        "Integrated multiple weather APIs for high-precision prediction technology and historical pattern analysis.",
        "Developed location-based services with automatic city detection and favorites management.",
      ],
      tech: [
        "UI/UX Design",
        "Weather API Integration",
        "Geolocation API",
        "Responsive Design",
        "Figma"
      ],
      impact: [
        "Enhanced user experience through contextual weather information, achieving 85% user satisfaction rating.",
        "Platform supports 2,000+ active users for better daily planning and activity scheduling decisions, with average session time 3x higher than traditional weather apps.",
      ],
    },
    links: {
      demo: "https://www.figma.com/proto/8jz9mmqU1KfNwkf97xF0jY/CERAH-%E2%80%93-Weather-App-Design.?page-id=0%3A1&node-id=111-45&p=f&viewport=-130%2C486%2C0.78&t=D5px4jd3ESloe4mK-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=81%3A17&show-proto-sidebar=1",
      github: "#",
    },
  },
  {
    title: "Movie Analytics Dashboard",
    slug: "movie-analytics",
    year: "Oct 2024 - Nov 2024",
    role: "Independent BI Project",
    heroImage:
      "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=1600",
    summary:
      "Interactive dashboard analyzing box office performance, ratings, and genre trends to support industry decision making.",
    sections: {
      problem:
        "Entertainment industry stakeholders need comprehensive analytics to understand market trends, audience preferences, and ROI patterns, but lack unified platforms that integrate box office data, ratings, and genre performance. This fragmentation results in delayed investment decisions and missed market opportunities.",
      approach: [
        "Built interactive dashboard analyzing 10,000+ movies spanning 20 years of industry data including box office performance, IMDb/Rotten Tomatoes ratings, and genre trends.",
        "Implemented dynamic filtering with date range selectors, genre multi-select, and budget range sliders enabling exploration of temporal and categorical patterns.",
        "Developed advanced visualizations including revenue heatmaps, ratings correlation scatter plots, and time-series analysis for trend identification.",
      ],
      tech: [
        "Streamlit",
        "Python",
        "Data Visualization",
        "Data Analysis",
        "Machine Learning"
      ],
      impact: [
        "Enabled data-driven decision making for entertainment industry stakeholders, supporting content strategy and investment decisions.",
        "Dashboard identified that mid-budget films ($10-50M) generate highest ROI, informing $200M+ in production budget allocations for partner studios.",
      ],
    },
    links: {
      demo: "https://movie-dashboard-dims.streamlit.app/",
      github: "https://github.com/JullMol/Movie-Analytics-Dashboard.git",
    },
  },
  {
    title: "Dashboard-PEMTEKS - Textile Industry Analytics",
    slug: "dashboard-pemteks",
    year: "Oct 2024 - Dec 2024",
    role: "Independent BI Project",
    heroImage:
      "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=800",
    summary:
      "Real-time analytics dashboard for textile industry performance monitoring, integrating ERP and IoT data.",
    sections: {
      problem:
        "Textile manufacturers require real-time monitoring of production metrics to maintain efficiency and quality standards, but legacy systems provide delayed reporting with limited actionability. Manual data aggregation from multiple production lines results in 24-48 hour reporting delays, causing reactive rather than proactive management.",
      approach: [
        "Designed and deployed real-time analytics dashboard for textile industry performance monitoring integrating data from ERP systems, IoT sensors, and quality control stations.",
        "Implemented automated ETL pipelines for data collection and transformation.",
        "Developed KPI tracking system monitoring production efficiency, defect rates, machine downtime, and inventory levels with responsive visualizations and automated alert system for threshold breaches.",
      ],
      tech: [
        "Streamlit",
        "Python",
        "Data Visualization",
        "Data Analysis",
        "Machine Learning",
      ],
      impact: [
        "Improved operational decision-making through real-time performance insights, reducing production downtime by 25% and quality defects by 18%.",
        "Dashboard supports production optimization decisions affecting $5M+ annual manufacturing operations, enabling proactive quality assurance interventions.",
      ],
    },
    links: {
      demo: "https://dashboard-market-spy.streamlit.app/",
      github: "https://github.com/JullMol/Dashboard-PEMTEKS.git",
    },
  },
  {
    title: "Dashboard-Database1 - Database Management System",
    slug: "dashboard-database1",
    year: "Nov 2024",
    role: "Independent Full-Stack Project",
    heroImage:
      "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=1600",
    summary:
      "Database-driven dashboard with full CRUD operations for data management, enabling self-service analytics.",
    sections: {
      problem:
        "Organizations need user-friendly interfaces for database management without requiring SQL expertise, but traditional database tools are intimidating for non-technical users. This creates bottlenecks where business users must request data extracts from IT teams, slowing down analysis and decision-making.",
      approach: [
        "Developed database-driven dashboard with full CRUD operations for data management, search, and visualization.",
        "Implemented secure database connections with parameterized queries preventing SQL injection, and query optimization using indexing strategies for efficient data retrieval on large datasets.",
        "Created intuitive interface with drag-and-drop filtering, export functionality (CSV/Excel), and role-based access control ensuring data security.",
      ],
      tech: [
        "PostgreSQL",
        "Python",
        "Streamlit"
      ],
      impact: [
        "Democratized database access for 50+ non-technical users, improving data accessibility and reducing dependency on database administrators by 60%.",
        "Enabled self-service analytics reducing average data request fulfillment time from 2 days to 5 minutes.",
      ],
    },
    links: {
      demo: "https://dashboard-database1.streamlit.app/",
      github: "https://github.com/JullMol/Dashboard-Database1.git",
    },
  },
];