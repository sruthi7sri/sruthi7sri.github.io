
import React from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, Download, ExternalLink, ArrowDown, GraduationCap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

const Index = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const skills = [
    {
      category: "Programming Languages",
      items: ["Python", "SQL", "JavaScript", "R", "SAS"]
    },
    {
      category: "AI & Machine Learning",
      items: [
        "Machine Learning",
        "Deep Learning",
        "Computer Vision (CNNs, YOLO, Vision Transformer)",
        "NLP (Transformers, BERT, T5, BART)",
        "Reinforcement Learning",
        "scikit-learn",
        "TensorFlow",
        "PyTorch",
        "OpenCV"
      ]
    },
    {
      category: "Data Science & Analytics",
      items: [
        "Pandas",
        "NumPy",
        "Matplotlib",
        "Seaborn",
        "Tableau",
        "Power BI",
        "Grafana",
        "Prometheus"
      ]
    },
    {
      category: "Data Engineering & Cloud",
      items: [
        "PySpark",
        "Spark Streaming",
        "Hadoop",
        "Airflow",
        "Kafka",
        "Snowflake",
        "dbt",
        "AWS (S3, EMR, Glue, Redshift)",
        "GCP (BigQuery, Dataflow)",
        "Docker",
        "Kubernetes",
        "CI/CD"
      ]
    },
    {
      category: "Development Tools & Databases",
      items: [
        "React Native",
        "Streamlit",
        "FastAPI",
        "MySQL",
        "Oracle",
        "PostgreSQL",
        "SAP HANA",
        "MongoDB",
        "Git",
        "GitHub"
      ]
    },
    {
      category: "Soft Skills",
      items: [
        "Collaboration",
        "Leadership",
        "Problem-Solving",
        "Communication",
        "Creativity",
        "Root-Cause Analysis"
      ]
    }
  ];

  const projects = [
    {
      name: "Qu Anytime, Qu",
      description: "Qu Anytime is a cross-platform mobile app designed to foster meaningful conversations and personal growth through real-time, topic-based calls. I developed the frontend using React Native, integrating RESTful APIs for event creation, chat, and media sharing. I also configured Expo and EAS pipelines for automated deployment to the App Store and Play Store. The app enables users to connect, learn, and grow with people around the world through curated discussions. \n🏆 Our team earned 2nd Place at UB CSE Demo Day Spring 2025 for innovation and user experience.", 
      tech: ["React Native", "MySQL", "AWS", "ConnectyCube", "Expo", "CI/CD", "Github"]
    },
    {
      name: "Telco-Customer-Churn-Analysis-Prediction",
      description: "Telco Customer Churn Prediction is an end-to-end data science project using the IBM Telco dataset to predict customer churn through logistic regression and actionable insights. A Streamlit app enables real-time predictions and interactive dashboards, showcasing practical ML, deployment, and UI skills for business decision-making.",
      github: "https://github.com/sruthi7sri/Telco-Customer-Churn-Analysis-Prediction",
      live: "https://telco-customer-churn-analysis-prediction-sruthi7sri.streamlit.app/",
      tech: ["Python", "Pandas", "Scikit-learn", "Streamlit", "Logistic Regression"]
    },
    {
      name: "Meteorite Impact Analysis System MIAS",
      description: "Meteorite Impact Analysis System (MIAS) integrates NASA’s meteorite data with synthetic research metadata to uncover global trends in meteorite science. Using SQL for data processing and Tableau for interactive dashboards, MIAS highlights research hotspots, funding patterns, and scientific collaborations through intuitive visualizations.",
      github: "https://github.com/sruthi7sri/Meteorite-Impact-Analysis-System-MIAS",
      tech: ["SQL", "Tableau", "Python" , "Data Cleaning" , "Data Integration"]
    },
    {
      name: "Vehicle Counting in Parking Lots",
      description: "Vehicle Counting in Parking Lot is a real-time computer vision project that uses a CNN to detect and classify parking slots as 'occupied' or 'vacant' from video footage. Deployed via a Streamlit app, it showcases deep learning, image processing, and smart city applicability for traffic and parking management.",
      github: "https://github.com/sruthi7sri/Vehicle-Counting-in-Parking-Lot",
      tech: ["OpenCV", "CNN", "Python", "Streamlit", "Deep Learning"]
    },
    {
      name: "OCTMNIST Eye Disease Classifier",
      description: "OCTMNIST-Eye-Disease-Classifier is a full-stack ML/DL project covering PyTorch fundamentals, traditional ML on tabular data, and a deployed CNN for retinal disease detection using the OCTMNIST dataset. The Streamlit app enables real-time image classification, and a bonus use-case highlights community-driven deep learning.",
      github: "https://github.com/sruthi7sri/OCTMNIST-Eye-Disease-Classifier",
      live: "https://octmnist-eye-disease-classifier.streamlit.app/",
      tech: ["PyTorch", "CNN", "Pandas", "Scikit-learn", "Streamlit", "OCTMNIST"]
    },
    {
      name: "NSCLC Flatiron-Style Real-World Data Project",
      description: "This project simulates a Flatiron Health-style real-world oncology data pipeline focused on non-small cell lung cancer (NSCLC) patients receiving first-line immunotherapy. It demonstrates data ingestion, cleaning, cohort building, survival analysis, and reporting using Python, R, and SAS.",
      github: "https://github.com/sruthi7sri/nsclc-flatiron-project",
      // live: "https://telco-customer-churn-analysis-prediction-sruthi7sri.streamlit.app/",
      tech: [ "Python", "R", "dplyr", "survival", "survminer", "SAS", "Kaplan-Meier Survival Analysis", "Log-Rank Test"]
    }
    // {
    //   name: "Data Pipeline Automation Tool",
    //   description: "Health Risk & OCR Dual ML System combines a Pima Diabetes Risk Predictor using traditional ML models with a CNN-based OCR engine for character recognition. This project showcases practical AI in healthcare and document processing, demonstrating skills in supervised learning, computer vision, and end-to-end model development.",
    //   github: "https://sruthi7sri.github.io/Dual-ML-Application-Pima-Diabetes-Risk-Predictor-And-OCR-Engine/",
    //   tech: ["Scikit-learn", "TensorFlow", "Keras", "Python", "OCR"]
    // },
    // {
    //   name: "Multi Dataset ML Pipeline",
    //   description: "Multi-Dataset ML Pipeline is a scalable Python project automating the full ML lifecycle across four datasets using scikit-learn Pipelines. It supports both classification and regression tasks, with cross-validated models, serialized outputs, and a live GitHub Pages site showcasing results and code for easy stakeholder access.",
    //   github: "https://sruthi7sri.github.io/Multi-Dataset-ML-Pipeline/",
    //   tech: ["Python", "Scikit-learn", "Pandas", "Matplotlib"]
    // },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/20 backdrop-blur-md z-50 border-b border-white/10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <button><h1 className="text-xl font-bold text-white" onClick={() => scrollToSection('home')}>Sruthisri Venkateswaran</h1></button>
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Skills', 'Projects', 'Resume', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-white/80 hover:text-white transition-colors duration-300 relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-400 transition-all duration-300 group-hover:w-full"></span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-20">
        <div className="container mx-auto px-6 text-center">
          <div className="mb-8">
            <Avatar className="w-48 h-48 mx-auto mb-8 border-4 border-purple-400/20">
              <AvatarImage 
                src="/profile.jpg" 
                alt="Sruthisri" 
                className="object-cover"
              />
              <AvatarFallback className="bg-gradient-to-r from-purple-400 to-pink-400 text-6xl font-bold text-white">
                SV
              </AvatarFallback>
            </Avatar>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
            Sruthisri Venkateswaran
          </h1>
          <div className="text-xl md:text-2xl text-purple-300 mb-8 space-y-2">
            <p>Data Scientist • ML Engineer • Software Engineer • Data Analyst</p>
            <p className="text-lg text-white/70 max-w-3xl mx-auto mt-4">
              I build intelligent systems that are usable, deployable, and rooted in real-world impact.
            </p>
          </div>
          <div className="flex justify-center space-x-6 mb-12">
            <a href="https://github.com/sruthi7sri" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-white/10 hover:bg-white/20 text-white border border-white/20">
                <Github className="w-5 h-5 mr-2" />
                GitHub
              </Button>
            </a>
            <a href="https://linkedin.com/in/sruthisri" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                <Linkedin className="w-5 h-5 mr-2" />
                LinkedIn
              </Button>
            </a>
          </div>
          <button
            onClick={() => scrollToSection('about')}
            className="animate-bounce text-white/60 hover:text-white transition-colors"
          >
            <ArrowDown className="w-8 h-8" />
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-white text-center mb-16">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white">
                <CardHeader>
                  <CardTitle className="text-2xl">Professional Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-white/90 leading-relaxed">
                    I’m a versatile and impact-driven Computer Science Master’s student at the University at Buffalo, passionate about building scalable software, intelligent systems, and data-driven solutions that solve real-world problems. My experience spans enterprise, research, and startup settings, where I’ve designed full-stack applications, engineered large-scale data pipelines, and deployed machine learning and deep learning models (CV, NLP, RL) into production with 85–90%+ accuracy.
                  </p>
                  <p className="text-white/90 leading-relaxed">
                  I thrive across the full development lifecycle—from requirements gathering and model design to API integration, CI/CD deployment, and user-facing demos. Highlights include developing computer vision pipelines for smart city parking, refactoring large-scale research simulation tools for faster geospatial analysis, and delivering recommendation systems and real-time analytics at Jio Platforms that impacted millions of users.
                  </p>
                  <p className="text-white/90 leading-relaxed">
                  My technical toolkit includes Python, PyTorch, TensorFlow, SQL, React Native, PySpark, Tableau, and cloud platforms like AWS and GCP. Recognized for both technical depth and collaborative problem-solving, I enjoy creating systems that are robust, efficient, and accessible. I’m now seeking opportunities in Machine Learning, Artificial Intelligence, Data Science, and Software Engineering, where I can combine technical rigor with real-world impact.
                  </p>
                </CardContent>
              </Card>
            </div>
            <div>
              <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white">
                <CardHeader>
                  <CardTitle className="text-2xl">Contact & Professional Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <GraduationCap className="w-5 h-5 text-purple-400" />
                    <span>Master of Science in Computer Science</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-purple-400" />
                    <a href="mailto:sruthi7sri@gmail.com" className="hover:text-purple-300 transition-colors">
                      sruthi7sri@gmail.com
                    </a>
                    {/* <span>sruthi7sri@gmail.com</span> */}
                  </div>
                  {/* <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-purple-400" />
                    <span>+1 (555) 123-4567</span>
                  </div> */}
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-purple-400" />
                    <span>Buffalo, NY</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Github className="w-5 h-5 text-purple-400" />
                    <a href="https://github.com/sruthi7sri" className="hover:text-purple-300 transition-colors">
                      github.com/sruthi7sri
                    </a>
                  </div>
                  <div className="pt-4">
                    <p className="text-sm text-white/70">
                      Open to opportunities in Data Science, ML Engineering, Software Development, and Data Analysis roles.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-white text-center mb-16">Skills & Expertise</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skillGroup, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/15 transition-all duration-300 hover:scale-105">
                <CardHeader>
                  <CardTitle className="text-xl text-purple-250 text-center">{skillGroup.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-3">
                    {skillGroup.items.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary" className="bg-purple-600/30 text-white hover:bg-purple-600/50">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-white text-center mb-16">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/15 transition-all duration-300 hover:scale-105">
                <CardHeader>
                  <CardTitle className="text-xl">{project.name}</CardTitle>
                  <CardDescription className="text-white/70">
                    {/* {project.description} */}
                    {project.description.split('\n').map((line, i) => (
                      <p key={i} className="mb-1">{line}</p>
                    ))}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="border-purple-400 text-purple-300">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  {/* <div className="flex space-x-3">
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Button size="sm" variant="outline" className="border-white/20 text-black hover:bg-white/10">
                        <Github className="w-4 h-4 mr-0" />
                        Code
                      </Button>
                    </a>
                    {project.live && (
                      <a href={project.live} target="_blank" rel="noopener noreferrer">
                        <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live Demo
                        </Button>
                      </a>
                    )}
                  </div> */}
                  <div className="flex space-x-3">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Button size="sm" variant="outline" className="border-white/20 text-black hover:bg-white/10">
                          <Github className="w-4 h-4 mr-0" />
                          Code
                        </Button>
                      </a>
                    )}
                    {project.live && (
                      <a href={project.live} target="_blank" rel="noopener noreferrer">
                        <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live Demo
                        </Button>
                      </a>
                    )}
                  </div>

                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        <div className="text-center mt-10">
          <a
            href="https://github.com/sruthi7sri"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-400 hover:text-purple-200 underline text-lg"
          >
            → More Projects on my GitHub
          </a>
        </div>
      </section>

      {/* Resume Section */}
      {/* <section id="resume" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-white text-center mb-16">Resume</h2>
          <div className="max-w-4xl mx-auto">
            <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl">Sruthisri Venkateswaran</CardTitle>
                <CardDescription className="text-xl text-purple-300">
                  Data Scientist • ML Engineer • Software Engineer • Data Analyst
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold mb-4 text-purple-300">Professional Summary</h3>
                  <p className="text-white/90 leading-relaxed">
                    Versatile and results-driven Computer Science graduate with a strong foundation in AI/ML, data engineering,
                    and full-stack development. Experienced in building end-to-end machine learning systems, data visualization dashboards,
                    and cloud-native applications. Adept at collaborating across functions to deliver intelligent, scalable solutions
                    that drive insights and improve user experiences. Actively seeking roles in Data Science, Machine Learning,
                    Software Development, or Data Analytics.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4 text-purple-300">Education</h3>
                  <ul className="text-white/80 space-y-3 list-disc list-inside">
                    <li>
                      <strong>Master of Science:</strong> Computer Science, University at Buffalo, May 2026 – GPA: 3.92/4.00
                      <br />
                      <em>Courses:</em> Machine Learning, Data Intensive Computing, Deep Learning, Data Models and Query Language, Computer Security, Algorithms Analysis and Design, Operating Systems.
                    </li>
                    <li>
                      <strong>Bachelor of Engineering:</strong> Computer Engineering, University of Mumbai, May 2023 – GPA: 9.53/10.00
                      <br />
                      <em>Courses:</em> Python Programming, Applied Data Science, Big Data Analysis, Machine Learning, Natural Language Processing, Social Media Analytics, Quantitative Analysis, Data Warehouse and mining, Probabilistic Graphical Models, AI, Data Structures, Analysis of Algorithms, DBMS, Software Engineering, JAVA
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4 text-purple-300">Technical Skills</h3>
                  <ul className="text-white/90 leading-relaxed space-y-2 text-sm">
                    <li><strong>Programming Languages:</strong> Python, SQL, JavaScript, Java, C++</li>
                    <li><strong>AI & Machine Learning:</strong> Data Cleaning, Exploratory Data Analysis, Model Evaluation, scikit-learn, TensorFlow, PyTorch, Deep Learning</li>
                    <li><strong>Data Science & Analytics:</strong> Pandas, NumPy, Seaborn, Matplotlib, Tableau, Power BI, Excel, Data-driven Insights</li>
                    <li><strong>Data Engineering & Cloud:</strong> PySpark, Spark, Hadoop, AWS, GCP, Azure, Data Modeling</li>
                    <li><strong>Development Tools:</strong> React Native, Streamlit, MySQL, MongoDB, HTML, CSS, Git, GitHub, Full Stack Development, System Design, DevOps</li>
                    <li><strong>Soft Skills:</strong> Communication, Collaboration, Problem-solving, Root-cause Analysis, Creativity, Leadership</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4 text-purple-300">Experience</h3>
                  <ul className="text-white/80 space-y-4 list-disc list-inside">
                    <li>
                      <strong>Frontend Developer Intern — Qu Anytime</strong> (Spring 2025)<br />
                      • Delivered cross-platform mobile UI and RESTful integrations.<br />
                      • Set up CI/CD using Expo/EAS for app store deployment.<br />
                      • Won 2nd place at UB CSE Demo Day for innovation and user testing.
                    </li>
                    <li>
                      <strong>Graduate Engineer Trainee — Jio Platforms Ltd.</strong> (Dec 2023 – Jul 2024)<br />
                      • Developed scalable data pipelines for business reporting.<br />
                      • Reduced latency by 20%, enhanced executive dashboards.
                    </li>
                    <li>
                      <strong>API Intern — National Informatics Centre, Govt. of India</strong> (Apr 2022 – Sep 2022)<br />
                      • Created REST APIs for inter-departmental data exchange.<br />
                      • Automated manual processes, reducing overhead by 30%.
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4 text-purple-300">Leadership & Certifications</h3>
                  <ul className="text-white/80 space-y-2 list-disc list-inside">
                    <li><strong>Treasurer & Marketing Head, SIES Student Council:</strong> Managed ₹15L budget, secured ₹5L+ sponsorships, and cut costs by 50%.</li>
                    <li><strong>Certifications:</strong> Google Digital Marketing, 30 Days of Google Cloud Challenge</li>
                  </ul>
                </div>
                <div className="text-center">
                  <a
                    href="https://drive.google.com/file/d/1tb6GPsznx5CAmlrBPzyTjGeM8UFotTnW/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="bg-purple-600 hover:bg-purple-700">
                      <Download className="w-4 h-4 mr-2" />
                      Download Full Resume (PDF)
                    </Button>
                  </a>

                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section> */}
      {/* Resume Section */}
      <section id="resume" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-white text-center mb-16">Resume</h2>

          <div className="max-w-5xl mx-auto">
            <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl">Sruthisri Venkateswaran</CardTitle>
                <CardDescription className="text-xl text-purple-300">
                  Software Engineer • ML Engineer • Data Engineer
                </CardDescription>
                <p className="text-sm text-white/70 mt-2">Open to Relocation</p>
              </CardHeader>

              <CardContent className="space-y-10">
                {/* Summary */}
                <div>
                  <h3 className="text-xl font-bold mb-4 text-purple-300">Professional Summary</h3>
                  <p className="text-white/90 leading-relaxed">
                    Versatile and impact-focused Computer Science Master’s student at the University at Buffalo (GPA: 3.92/4.0)
                    with professional experience building scalable software, AI solutions, and data products across enterprise and research
                    settings. Delivered high-performance systems in cloud-native environments (AWS, GCP), optimized legacy tools
                    reducing runtime by 30–50%, and deployed ML/DL models (CV, NLP, RL) with 85–90%+ accuracy in production-ready
                    applications. Proven across the full lifecycle—from requirements and modeling to API integration and CI/CD deployment.
                    Recognized for leading high-impact demos and stakeholder tools. Actively seeking full-time roles in Software Engineering,
                    Machine Learning, or Data Engineering.
                  </p>
                </div>

                {/* Education */}
                <div>
                  <h3 className="text-xl font-bold mb-4 text-purple-300">Education</h3>
                  <ul className="text-white/80 space-y-4">
                    <li>
                      <strong>University at Buffalo, The State University of New York</strong> — Master of Science, Computer Science &amp; Engineering
                      <br />
                      <span className="text-white/70">Aug 2024 – May 2026 &nbsp;•&nbsp; GPA: 3.92/4.0</span>
                    </li>
                    <li>
                      <strong>SIES Graduate School of Technology, University of Mumbai</strong> — Bachelor of Science, Computer Engineering
                      <br />
                      <span className="text-white/70">Aug 2019 – May 2023 &nbsp;•&nbsp; GPA: 3.81/4.0</span>
                    </li>
                  </ul>
                </div>

                {/* Technical Skills */}
                <div>
                  <h3 className="text-xl font-bold mb-4 text-purple-300">Technical Skills</h3>
                  <ul className="text-white/90 leading-relaxed space-y-2 text-sm">
                    <li>
                      <strong>Programming Languages:</strong> Python, SQL, JavaScript, R, SAS
                    </li>
                    <li>
                      <strong>AI &amp; Machine Learning:</strong> Machine Learning, Deep Learning, Computer Vision (CNNs, YOLO, ViT),
                      NLP (BERT, T5, BART), Reinforcement Learning, scikit-learn, TensorFlow, PyTorch, OpenCV
                    </li>
                    <li>
                      <strong>Data Science &amp; Analytics:</strong> Pandas, NumPy, Matplotlib, Seaborn, Tableau, Power BI, Grafana, Prometheus
                    </li>
                    <li>
                      <strong>Data Engineering &amp; Cloud:</strong> PySpark, Spark Streaming, Hadoop, Airflow, Kafka, Snowflake, dbt,
                      AWS (S3, EMR, Glue, Redshift), GCP (BigQuery, Dataflow), Docker, Kubernetes, CI/CD
                    </li>
                    <li>
                      <strong>Development Tools &amp; Databases:</strong> FastAPI, React Native, Streamlit, MySQL, PostgreSQL, Oracle,
                      SAP HANA, MongoDB, Git, GitHub
                    </li>
                    <li>
                      <strong>Soft Skills:</strong> Collaboration, Leadership, Problem-Solving, Communication, Creativity, Root-Cause Analysis
                    </li>
                  </ul>
                </div>

                {/* Experience */}
                <div>
                  <h3 className="text-xl font-bold mb-4 text-purple-300">Experience</h3>
                  <ul className="text-white/80 space-y-5">
                    <li>
                      <strong>Software Developer Student Assistant — Dept. of Civil Engineering, University at Buffalo</strong>
                      <span className="text-white/60"> &nbsp;•&nbsp; Jul 2025 – Present &nbsp;•&nbsp; Buffalo, NY</span>
                      <ul className="list-disc list-inside mt-1 space-y-1">
                        <li>Refactored a complex Python simulation tool; cut code complexity by 40% and runtime by 30%.</li>
                        <li>Re-architected I/O to CSV/NetCDF; boosted cross-platform data compatibility.</li>
                        <li>Shipped CLI/GUI installers (macOS/Windows), reducing setup time to &lt;10 minutes.</li>
                      </ul>
                    </li>

                    <li>
                      <strong>Research Assistant — University at Buffalo</strong>
                      <span className="text-white/60"> &nbsp;•&nbsp; Feb 2025 – Present &nbsp;•&nbsp; Buffalo, NY</span>
                      <ul className="list-disc list-inside mt-1 space-y-1">
                        <li>Built CV pipelines for parking availability; 92%+ accuracy across challenging conditions.</li>
                        <li>YOLO training on 10k+ images; improved detection latency by 20% with CUDA acceleration.</li>
                      </ul>
                    </li>

                    <li>
                      <strong>Full Stack Development Intern — Qu Anytime (Qu)</strong>
                      <span className="text-white/60"> &nbsp;•&nbsp; Jan 2025 – May 2025 &nbsp;•&nbsp; Buffalo, NY</span>
                      <ul className="list-disc list-inside mt-1 space-y-1">
                        <li>Built 15+ React Native UI components; reduced mobile load times by 25%.</li>
                        <li>Integrated Google/Apple OAuth; cut onboarding drop-off by 40%; maintained Expo/EAS CI/CD.</li>
                      </ul>
                    </li>

                    <li>
                      <strong>Assistant Manager — Jio Platforms Limited</strong>
                      <span className="text-white/60"> &nbsp;•&nbsp; Dec 2023 – Jul 2024 &nbsp;•&nbsp; Mumbai, India</span>
                      <ul className="list-disc list-inside mt-1 space-y-1">
                        <li>Processed petabyte-scale data on Databricks/Snowflake/HANA; 50% faster pipelines.</li>
                        <li>Built recsys &amp; real-time analytics with Kafka/Confluent; +25% engagement.</li>
                        <li>Delivered 15+ Tableau dashboards, 5+ data marts; -30% decision latency.</li>
                      </ul>
                    </li>

                    <li>
                      <strong>Full Stack Development Intern — National Informatics Centre (Govt. of India)</strong>
                      <span className="text-white/60"> &nbsp;•&nbsp; Apr 2022 – Sep 2022 &nbsp;•&nbsp; Mumbai, India</span>
                      <ul className="list-disc list-inside mt-1 space-y-1">
                        <li>Designed REST APIs with 99.9% uptime for a role-based ticketing system (10k+ daily txns).</li>
                        <li>Optimized MySQL stored procedures; -40% query time; 100+ Postman tests pre-deploy.</li>
                      </ul>
                    </li>
                  </ul>
                </div>

                {/* Leadership & Certifications */}
                <div>
                  <h3 className="text-xl font-bold mb-4 text-purple-300">Leadership & Certifications</h3>
                  <ul className="text-white/80 space-y-2 list-disc list-inside">
                    <li>
                      <strong>2nd Place — UB Demo Day (2025):</strong> Full-stack mobile app; 200+ active beta testers.
                    </li>
                    <li>
                      <strong>Machine Learning Specialization (Coursera):</strong> Certificate ID: TCPH79JQE9T3
                    </li>
                    <li>
                      <strong>AWS Machine Learning — Associate:</strong> In progress
                    </li>
                  </ul>
                </div>

                {/* Download */}
                <div className="text-center">
                  <a
                    href="https://drive.google.com/file/d/1tb6GPsznx5CAmlrBPzyTjGeM8UFotTnW/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="bg-purple-600 hover:bg-purple-700">
                      <Download className="w-4 h-4 mr-2" />
                      Download Full Resume (PDF)
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
                    

      {/* Contact Section */}
      {/* <section id="contact" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-white text-center mb-16">Get In Touch</h2>
          <div className="max-w-2xl mx-auto">
            <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Let's Collaborate</CardTitle>
                <CardDescription className="text-white/70">
                  I'm always open to discussing new opportunities and interesting projects
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Mail className="w-5 h-5 text-purple-400" />
                      <div>
                        <p className="font-semibold">Email</p>
                        <p className="text-sm text-white/70">sruthi7sri@email.com</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="w-5 h-5 text-purple-400" />
                      <div>
                        <p className="font-semibold">Phone</p>
                        <p className="text-sm text-white/70">+1 (555) 123-4567</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <MapPin className="w-5 h-5 text-purple-400" />
                      <div>
                        <p className="font-semibold">Location</p>
                        <p className="text-sm text-white/70">San Francisco, CA</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <a href="https://github.com/sruthi7sri" target="_blank" rel="noopener noreferrer">
                      <Button className="w-full bg-gray-800 hover:bg-gray-700">
                        <Github className="w-4 h-4 mr-2" />
                        GitHub Profile
                      </Button>
                    </a>
                    <a href="https://linkedin.com/in/sruthi7sri" target="_blank" rel="noopener noreferrer">
                      <Button className="w-full bg-purple-600 hover:bg-purple-700">
                        <Linkedin className="w-4 h-4 mr-2" />
                        LinkedIn Profile
                      </Button>
                    </a>
                    <a href="mailto:sruthi7sri@email.com">
                      <Button className="w-full bg-purple-600 hover:bg-purple-700">
                        <Mail className="w-4 h-4 mr-2" />
                        Send Email
                      </Button>
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section> */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-white text-center mb-16">Get In Touch</h2>
          <div className="max-w-3xl mx-auto">
            <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white p-6 rounded-xl">
              <CardHeader className="text-center mb-4">
                <CardTitle className="text-2xl font-bold">Let's Collaborate</CardTitle>
                <CardDescription className="text-white/70">
                  I'm always open to discussing new opportunities and interesting projects.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Contact Info */}
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <Mail className="text-purple-400 w-5 h-5" />
                      <div>
                        <p className="text-sm font-semibold">Email</p>
                        <a href="mailto:sruthi7sri@gmail.com" className="text-sm text-white/70 hover:text-purple-300">
                          sruthi7sri@gmail.com
                        </a>
                        {/* <p className="text-sm text-white/70">sruthi7sri@gmail.com</p> */}
                      </div>
                    </div>
                    {/* <div className="flex items-center space-x-4">
                      <Phone className="text-purple-400 w-5 h-5" />
                      <div>
                        <p className="text-sm font-semibold">Phone</p>
                        <p className="text-sm text-white/70">+1 (555) 123-4567</p>
                      </div>
                    </div> */}
                    <div className="flex items-center space-x-4">
                      <MapPin className="text-purple-400 w-5 h-5" />
                      <div>
                        <p className="text-sm font-semibold">Location</p>
                        <p className="text-sm text-white/70">Buffalo, NY</p>
                      </div>
                    </div>
                  </div>

                  {/* Contact Buttons */}
                  <div className="flex flex-col space-y-4">
                    <a href="https://github.com/sruthi7sri" target="_blank" rel="noopener noreferrer">
                      <Button className="w-full bg-gray-900 hover:bg-gray-800">
                        <Github className="w-4 h-4 mr-2" />
                        GitHub Profile
                      </Button>
                    </a>
                    <a href="https://linkedin.com/in/sruthisri" target="_blank" rel="noopener noreferrer">
                      <Button className="w-full bg-blue-600 hover:bg-blue-700">
                        <Linkedin className="w-4 h-4 mr-2" />
                        LinkedIn Profile
                      </Button>
                    </a>
                    <a href="mailto:sruthi7sri@gmail.com">
                      <Button className="w-full bg-purple-600 hover:bg-purple-700">
                        <Mail className="w-4 h-4 mr-2" />
                        Send Email
                      </Button>
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>


      {/* Footer */}
      <footer className="py-8 border-t border-white/10">
        <div className="container mx-auto px-6 text-center">
          <p className="text-white/60">
            © 2025 Sruthisri. Built with passion for intelligent systems and real-world impact.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;

