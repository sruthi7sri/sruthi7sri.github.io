
import React, {useState} from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, Download, ExternalLink, ArrowDown, GraduationCap, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

const Index = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false); 
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
      tech: [ "Python", "R", "dplyr", "survival", "survminer", "SAS", "Kaplan-Meier Survival Analysis", "Log-Rank Test"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/20 backdrop-blur-md z-50 border-b border-white/10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <button><h1 className="text-xl font-bold text-white" onClick={() => scrollToSection('home')}>Sruthisri Venkateswaran</h1></button>
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
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
            {/* Mobile Nav Button (Hamburger) */}
           <div className="md:hidden">
             <button
               onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
               className="text-white/80 hover:text-white"
               aria-label="Toggle menu"
             >
               {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
             </button>
           </div>
          </div>
          {/* Mobile Menu Dropdown */}
          {isMobileMenuOpen && (
            <div className="md:hidden pt-4 pb-2 border-t border-white/10 mt-4">
              <div className="flex flex-col space-y-4">
                {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="text-white/80 hover:text-white transition-colors duration-300 text-left"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          )}
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
            <a
              href="https://drive.google.com/uc?export=download&id=1rd6gA08YHpeRkcvb2wngKkeFDF3s_m9L"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="bg-white/10 hover:bg-white/20 text-white border border-white/20 w-full sm:w-auto">
                <Download className="w-5 h-5 mr-2" />
                Download Resume
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
      {/* <section id="about" className="py-20">
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
                  </div>
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
      </section> */}
      {/* About Section */}
      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-white text-center mb-16">About Me</h2>
          
          {/* Centered single-column layout */}
          <div className="max-w-4xl mx-auto">
            <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Professional Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-white/90 leading-relaxed text-left">
                  I'm a versatile and impact-driven Computer Science Master's student at the University at Buffalo, passionate about building scalable software, intelligent systems, and data-driven solutions that solve real-world problems. My experience spans enterprise, research, and startup settings, where I've designed full-stack applications, engineered large-scale data pipelines, and deployed machine learning and deep learning models (CV, NLP, RL) into production with 85-90%+ accuracy.
                </p>
                <p className="text-white/90 leading-relaxed text-left">
                  I thrive across the full development lifecycle—from requirements gathering and model design to API integration, CI/CD deployment, and user-facing demos. Highlights include developing computer vision pipelines for smart city parking, refactoring large-scale research simulation tools for faster geospatial analysis, and delivering recommendation systems and real-time analytics at Jio Platforms that impacted millions of users.
                </p>
                <p className="text-white/90 leading-relaxed text-left">
                  My technical toolkit includes Python, PyTorch, TensorFlow, SQL, React Native, PySpark, Tableau, and cloud platforms like AWS and GCP. Recognized for both technical depth and collaborative problem-solving, I enjoy creating systems that are robust, efficient, and accessible. I'm now seeking opportunities in Machine Learning, Artificial Intelligence, Data Science, and Software Engineering, where I can combine technical rigor with real-world impact.
                </p>
                
                <hr className="border-white/20" />
                
                <div className="space-y-4 text-center pt-4">
                  {/* Styled Education Block */}
                  <div className="flex justify-center items-center gap-3">
                    <GraduationCap className="w-8 h-8 text-purple-400 flex-shrink-0" />
                    <div className="text-left">
                      <p className="text-2xl font-semibold text-white">University at Buffalo</p>
                      <p className="text-md text-white/80">Master of Science in Computer Science</p>
                    </div>
                  </div>
                  
                  {/* Open to Opportunities */}
                  <p className="text-lg text-purple-300 pt-2">
                    Open to opportunities in Data Science, ML Engineering, Software Development, and Data Analysis roles.
                  </p>
                </div>
              </CardContent>
            </Card>
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

      {/* Contact Section */}
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

