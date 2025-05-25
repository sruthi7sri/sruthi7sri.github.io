
import React from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, Download, ExternalLink, ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Index = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const skills = [
    {
      category: "Domains",
      items: ["FullStack", "DevOps", "Machine Learning", "Artificial Intelligence", "Data Science", "Deep Learning", "Cloud Computing"]
    },
    {
      category: "Programming Languages",
      items: ["Python", "JavaScript", "TypeScript", "R", "SQL", "Java", "C++"]
    },
    {
      category: "Frameworks & Libraries",
      items: ["React", "Node.js", "TensorFlow", "PyTorch", "Scikit-learn", "Pandas", "NumPy"]
    },
    {
      category: "Tools & Technologies",
      items: ["Docker", "Kubernetes", "AWS", "Git", "MongoDB", "PostgreSQL", "Jupyter"]
    }
  ];

  const projects = [
    {
      name: "Intelligent Document Processing System",
      description: "AI-powered system for extracting and processing information from documents using NLP and computer vision techniques.",
      github: "https://github.com/sruthi7sri/document-processing",
      live: "https://doc-processor-demo.vercel.app",
      tech: ["Python", "TensorFlow", "OCR", "NLP"]
    },
    {
      name: "Real-time Data Analytics Dashboard",
      description: "Full-stack application providing real-time analytics and visualization for business intelligence.",
      github: "https://github.com/sruthi7sri/analytics-dashboard",
      live: "https://analytics-dash-demo.vercel.app",
      tech: ["React", "Node.js", "D3.js", "MongoDB"]
    },
    {
      name: "Predictive Maintenance ML Model",
      description: "Machine learning model for predicting equipment failures in industrial settings using IoT sensor data.",
      github: "https://github.com/sruthi7sri/predictive-maintenance",
      tech: ["Python", "Scikit-learn", "IoT", "Time Series"]
    },
    {
      name: "Cloud-Native Microservices Architecture",
      description: "Scalable microservices deployment with containerization and orchestration for enterprise applications.",
      github: "https://github.com/sruthi7sri/microservices-arch",
      tech: ["Docker", "Kubernetes", "AWS", "API Gateway"]
    },
    {
      name: "Deep Learning Image Classification",
      description: "CNN-based image classification system with 95%+ accuracy for medical image diagnosis.",
      github: "https://github.com/sruthi7sri/medical-image-classification",
      tech: ["PyTorch", "Computer Vision", "Medical AI", "CNN"]
    },
    {
      name: "Data Pipeline Automation Tool",
      description: "Automated ETL pipeline for processing large-scale data from multiple sources with monitoring and alerting.",
      github: "https://github.com/sruthi7sri/data-pipeline-automation",
      tech: ["Apache Airflow", "Python", "PostgreSQL", "Apache Kafka"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/20 backdrop-blur-md z-50 border-b border-white/10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold text-white">Sruthi Sri</h1>
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
            <div className="w-48 h-48 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mb-8 flex items-center justify-center text-6xl font-bold text-white">
              SS
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
            Sruthi Sri
          </h1>
          <div className="text-xl md:text-2xl text-purple-300 mb-8 space-y-2">
            <p>Data Scientist • ML Engineer • Software Engineer • Data Analyst</p>
            <p className="text-lg text-white/70 max-w-3xl mx-auto mt-4">
              ML & DL Enthusiast | Full Stack Developer | Data Scientist | I build intelligent systems that are usable, deployable, and rooted in real-world impact.
            </p>
          </div>
          <div className="flex justify-center space-x-6 mb-12">
            <a href="https://github.com/sruthi7sri" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-white/10 hover:bg-white/20 text-white border border-white/20">
                <Github className="w-5 h-5 mr-2" />
                GitHub
              </Button>
            </a>
            <a href="https://linkedin.com/in/sruthi7sri" target="_blank" rel="noopener noreferrer">
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
                    Versatile technology professional with expertise spanning Data Science, Machine Learning, Software Engineering, and Data Analysis. 
                    Passionate about leveraging cutting-edge technologies to solve complex real-world problems and deliver measurable business impact.
                  </p>
                  <p className="text-white/90 leading-relaxed">
                    With a strong foundation in both theoretical concepts and practical implementation, I excel at bridging the gap between 
                    data insights and scalable software solutions. My experience ranges from developing predictive models to building 
                    full-stack applications and designing cloud-native architectures.
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
                    <Mail className="w-5 h-5 text-purple-400" />
                    <span>sruthi7sri@email.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-purple-400" />
                    <span>+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-purple-400" />
                    <span>San Francisco, CA</span>
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
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skillGroup, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/15 transition-all duration-300 hover:scale-105">
                <CardHeader>
                  <CardTitle className="text-xl text-purple-300">{skillGroup.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
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
                    {project.description}
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
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Button size="sm" variant="outline" className="border-white/20 text-white hover:bg-white/10">
                        <Github className="w-4 h-4 mr-2" />
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
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section id="resume" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-white text-center mb-16">Resume</h2>
          <div className="max-w-4xl mx-auto">
            <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl">Sruthi Sri</CardTitle>
                <CardDescription className="text-xl text-purple-300">
                  Data Scientist • ML Engineer • Software Engineer • Data Analyst
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold mb-4 text-purple-300">Professional Summary</h3>
                  <p className="text-white/90 leading-relaxed">
                    Multi-disciplinary technology professional with comprehensive expertise in Data Science, Machine Learning, 
                    Software Engineering, and Data Analysis. Proven track record of developing intelligent systems that deliver 
                    measurable business impact through innovative solutions and cutting-edge technologies.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-4 text-purple-300">Core Competencies</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold mb-2">Technical Skills</h4>
                      <ul className="text-sm text-white/80 space-y-1">
                        <li>• Machine Learning & Deep Learning</li>
                        <li>• Full-Stack Development</li>
                        <li>• Data Analysis & Visualization</li>
                        <li>• Cloud Computing & DevOps</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Programming</h4>
                      <ul className="text-sm text-white/80 space-y-1">
                        <li>• Python, JavaScript, TypeScript, R</li>
                        <li>• TensorFlow, PyTorch, Scikit-learn</li>
                        <li>• React, Node.js, SQL, NoSQL</li>
                        <li>• Docker, Kubernetes, AWS</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <Button className="bg-purple-600 hover:bg-purple-700">
                    <Download className="w-4 h-4 mr-2" />
                    Download Full Resume (PDF)
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
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
                      <Button className="w-full bg-blue-600 hover:bg-blue-700">
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
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-white/10">
        <div className="container mx-auto px-6 text-center">
          <p className="text-white/60">
            © 2024 Sruthi Sri. Built with passion for intelligent systems and real-world impact.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
