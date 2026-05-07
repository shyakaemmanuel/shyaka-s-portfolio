import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

/* -------------------- ANIMATIONS -------------------- */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 }
};

/* -------------------- NAVBAR -------------------- */
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-black/40 backdrop-blur-xl border-b border-white/10 text-white z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        <h1 className="font-bold text-xl tracking-widest">SHYAKA'S PORTFOLIO</h1>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-sm">
          {['about','me','education','experience','projects','skills','contact us'].map((item)=> (
            <a key={item} href={`#${item.replace(' ', '-')}`} className="hover:text-blue-400 transition">
              {item.toUpperCase()}
            </a>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-black/95 border-t border-white/10"
        >
          <div className="flex flex-col space-y-4 px-6 py-4">
            {['about','me','education','experience','projects','skills','contact us'].map((item)=> (
              <a 
                key={item} 
                href={`#${item.replace(' ', '-')}`} 
                className="hover:text-blue-400 transition"
                onClick={() => setIsOpen(false)}
              >
                {item.toUpperCase()}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
}

/* -------------------- HERO -------------------- */
function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black text-white px-6 pt-24">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">

        {/* TEXT */}
        <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.8 }}>
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
            SHYAKA Emmanuel
          </h1>
          <p className="mt-4 text-xl text-gray-300">
            Full Stack Developer • Real-time Systems • UI Engineer
          </p>

          <div className="mt-8 flex gap-4">
            <a href="#projects" className="px-6 py-3 bg-blue-500 rounded-xl hover:scale-105 transition shadow-lg">
              Explore Work
            </a>
            <a href="#contact-us" className="px-6 py-3 border border-white/20 rounded-xl hover:bg-white hover:text-black transition">
              Hire Me
            </a>
          </div>
        </motion.div>

        {/* IMAGE */}
        <motion.div initial={{ opacity:0, scale:0.8 }} animate={{ opacity:1, scale:1 }} transition={{ duration: 1 }} className="flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-blue-500 blur-3xl opacity-30 rounded-full"></div>
            <img
              src="/profile.png"
              alt="profile"
              className="relative w-72 h-72 md:w-96 md:h-96 object-cover rounded-full border-4 border-white/10 shadow-2xl"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}

/* -------------------- ABOUT -------------------- */
function About() {
  return (
    <section id="about" className="py-28 px-6 bg-gray-950 text-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-6">About Me</h2>
        <p className="text-gray-400 text-lg leading-relaxed">
          I am student at Lycee de Muhura and I am a passionate full stack developer specializing in modern web applications, real-time systems, and scalable UI architecture. I build products like Nexus Social with focus on performance, design, and user experience.
        </p>
      </div>
    </section>
  );
}

/* -------------------- ME (GALLERY) -------------------- */
function Me() {
  const photos = [
    { id: 1, src: "/profile.png", caption: "Profile Photo" },
    { id: 2, src: "/working.jpg", caption: "Working on Projects" },
    { id: 3, src: "/team.JPG", caption: "Team Collaboration" },
    { id: 4, src: "/shyk1.JPG", caption: "Conference Speaker" },
    { id: 5, src: "/coding-session.jpg", caption: "Coding Session" },
    { id: 6, src: "/2me.jpg", caption: "Office Setup" }
  ];

  return (
    <section id="me" className="py-28 px-6 bg-black text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-6 text-center">Photo Gallery</h2>
        <p className="text-gray-400 text-center mb-12">Moments from my journey</p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {photos.map((photo) => (
            <motion.div
              key={photo.id}
              whileHover={{ scale: 1.05 }}
              className="relative group overflow-hidden rounded-2xl bg-white/5 border border-white/10"
            >
              <img
                src={photo.src}
                alt={photo.caption}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white font-semibold">{photo.caption}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------- EDUCATION -------------------- */
function Education() {
  const education = [
    {
      year: "2025 - Present",
      degree: "Level 5 Software Development",
      institution: "Lycee de Muhura",
      desc: "Currently studying advanced software development, programming, and web technologies."
    },
    {
      year: "2024 - 2025",
      degree: "Level 4 Software Development",
      institution: "Lycee de Muhura",
      desc: "Completed with focus on programming fundamentals and software development principles."
    },
    {
      year: "2023-2024",
      degree: "Level 3 Software Development",
      institution: "Lycee de Muhura",
      desc: "Intensive self-learning covering HTML,CSS, Javascript, and modern web technologies."
    }
  ];

  return (
    <section id="education" className="py-28 px-6 bg-gray-950 text-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Education</h2>
        
        <div className="relative border-l-2 border-green-500/30 ml-4">
          {education.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="mb-12 ml-8 relative"
            >
              <div className="absolute -left-12 w-6 h-6 bg-green-500 rounded-full border-4 border-gray-950"></div>
              <span className="text-green-400 font-semibold">{edu.year}</span>
              <h3 className="text-2xl font-bold mt-2">{edu.degree}</h3>
              <p className="text-gray-400 mt-1">{edu.institution}</p>
              <p className="text-gray-300 mt-3">{edu.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------- EXPERIENCE -------------------- */
function Experience() {
  const experiences = [
    {
      year: "2025 - Present",
      title: "Full Stack Developer",
      company: "Freelance",
      desc: "Building modern web applications and real-time systems for clients worldwide."
    },
    {
      year: "2024 - 2025",
      title: "Frontend Developer",
      company: "Tech Startup",
      desc: "Developed responsive UI components and improved application performance."
    },
    {
      year: "2023 - 2024",
      title: "Junior Developer",
      company: "Web Agency",
      desc: "Started career building websites and learning modern frameworks."
    }
  ];

  return (
    <section id="experience" className="py-28 px-6 bg-black text-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12">Experience</h2>
        
        <div className="relative border-l-2 border-blue-500/30 ml-4">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="mb-12 ml-8 relative"
            >
              <div className="absolute -left-12 w-6 h-6 bg-blue-500 rounded-full border-4 border-black"></div>
              <span className="text-blue-400 font-semibold">{exp.year}</span>
              <h3 className="text-2xl font-bold mt-2">{exp.title}</h3>
              <p className="text-gray-400 mt-1">{exp.company}</p>
              <p className="text-gray-300 mt-3">{exp.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------- PROJECTS -------------------- */
function Projects() {
  const projects = [
    {
      title: "Nexus Social",
      desc: "Real-time social platform with live chat, notifications, and interactive feeds.",
      link: "https://nexus-social-tau.vercel.app/",
      github: "https://github.com/shyakaemmanuel/nexus-social",
      tags: ["React", "Firebase", "Node.js", "Socket.io"]
    },
    {
      title: "Health Cert App",
      desc: "Full stack certification management system.",
      link: "https://health-cert-app-eight.vercel.app/",
      github: "https://github.com/shyakaemmanuel/health-cert-app",
      tags: ["React", "MongoDB", "Express", "Vercel"]
    }
  ];

  return (
    <section id="projects" className="py-28 px-6 bg-black text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-10">Featured Projects</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((p,i)=> (
            <motion.div
              key={i}
              whileHover={{ scale:1.03 }}
              className="p-6 bg-white/5 border border-white/10 rounded-2xl shadow-xl hover:border-blue-500/50 transition-all"
            >
              <h3 className="text-2xl font-bold">{p.title}</h3>
              <p className="mt-3 text-gray-400">{p.desc}</p>
              
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((tag, j) => (
                  <span key={j} className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex gap-4">
                <a href={p.link} target="_blank" className="px-4 py-2 bg-blue-500 rounded-lg hover:bg-blue-600 transition">
                  Live Demo
                </a>
                <a href={p.github} target="_blank" className="px-4 py-2 border border-white/20 rounded-lg hover:bg-white/10 transition">
                  GitHub
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------- SKILLS -------------------- */
function Skills() {
  const skills = ['React','Tailwind','Firebase','Node.js','MongoDB','Vercel','Git','UI/UX'];

  return (
    <section id="skills" className="py-28 px-6 bg-gray-950 text-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-10">Skills & Technologies</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((s)=> (
            <div key={s} className="bg-white/5 border border-white/10 p-4 rounded-xl text-center hover:bg-blue-500 transition">
              {s}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------- CONTACT -------------------- */
function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent! (This is a demo - integrate with a backend for actual functionality)');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact-us" className="py-28 px-6 bg-gray-950 text-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-6 text-center">Let's Work Together</h2>
        <p className="text-gray-400 text-center mb-12">Available for freelance & collaboration</p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className="text-gray-400">shyakae230@gmail.com</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Social</h3>
              <div className="space-y-2">
                <a href="https://github.com/shyakaemmanuel" target="_blank" className="block text-blue-400 hover:underline">GitHub</a>
                <a href="https://linkedin.com" target="_blank" className="block text-blue-400 hover:underline">LinkedIn</a>
                <a href="https://www.instagram.com/shyk_brilliant/" target="_blank" className="block text-blue-400 hover:underline">Instagram</a>
                <a href="https://www.facebook.com/Shyakan.emmy" target="_blank" className="block text-blue-400 hover:underline">Facebook</a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-blue-500 focus:outline-none transition"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-blue-500 focus:outline-none transition"
              required
            />
            <textarea
              placeholder="Your Message"
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              rows="4"
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-blue-500 focus:outline-none transition resize-none"
              required
            />
            <button
              type="submit"
              className="w-full px-6 py-3 bg-blue-500 rounded-lg hover:bg-blue-600 transition font-semibold"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

/* -------------------- FOOTER -------------------- */
function Footer() {
  return (
    <footer className="py-8 px-6 bg-black border-t border-white/10 text-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-gray-400 text-sm">© 2024 SHYAKA Emmanuel. All rights reserved.</p>
        
        <div className="flex space-x-6">
          <a href="https://github.com/shyakaemmanuel" target="_blank" className="text-gray-400 hover:text-blue-400 transition">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
          </a>
          <a href="https://linkedin.com" target="_blank" className="text-gray-400 hover:text-blue-400 transition">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
          <a href="https://www.instagram.com/shyk_brilliant/" target="_blank" className="text-gray-400 hover:text-blue-400 transition">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
          <a href="https://www.facebook.com/Shyakan.emmy" target="_blank" className="text-gray-400 hover:text-blue-400 transition">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </a>
          <a href="mailto:shyakae230@gmail.com" className="text-gray-400 hover:text-blue-400 transition">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}

/* -------------------- BACK TO TOP -------------------- */
function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-4 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 transition z-40"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </motion.button>
      )}
    </>
  );
}

/* -------------------- LOADING -------------------- */
function Loading() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black z-50 flex items-center justify-center"
    >
      <div className="text-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full mx-auto mb-4"
        />
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-white text-xl font-semibold"
        >
          Loading...
        </motion.p>
      </div>
    </motion.div>
  );
}

/* -------------------- APP -------------------- */
export default function App() {
  return (
    <div className="font-sans scroll-smooth bg-black">
      <Loading />
      <Navbar />
      <Hero />
      <About />
      <Me />
      <Education />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
      <BackToTop />
    </div>
  );
}
