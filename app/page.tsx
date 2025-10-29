
"use client";
import React, { useState } from 'react';
import Image from "next/image";
import { Menu, X, Download, ExternalLink, Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState('All');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const competences = [
    { name: 'Spring Boot', category: 'Backend', icon: '🍃' },
    { name: 'Node.js', category: 'Backend', icon: '🟢' },
    { name: 'ASP.NET', category: 'Backend', icon: '🔷' },
    { name: 'Laravel', category: 'Backend', icon: '🔺' },
    { name: 'React', category: 'Frontend', icon: '⚛️' },
    { name: 'Angular', category: 'Frontend', icon: '🅰️' },
    { name: 'HTML/CSS', category: 'Frontend', icon: '🎨' },
    { name: 'Tailwind CSS', category: 'Frontend', icon: '💨' },
    { name: 'Java JEE', category: 'Backend', icon: '☕' },
    { name: 'Flutter', category: 'Mobile', icon: '📱' },
    { name: 'kotlin', category: 'Mobile', icon: '📱' },

    { name: 'MySQL', category: 'Base de Données', icon: '🐬' },
    { name: 'PostgreSQL', category: 'Base de Données', icon: '🐘' },
    { name: 'Oracle', category: 'Base de Données', icon: '🔴' },
    { name: 'MongoDB', category: 'Base de Données', icon: '🍃' },
    { name: 'SQL Server', category: 'Base de Données', icon: '💾' },
    { name: 'Git', category: 'DevOps', icon: '🔧' },
    { name: 'Azure', category: 'DevOps', icon: '☁️' },
    { name: 'Linux', category: 'DevOps', icon: '🐧' },
    { name: 'Jira', category: 'DevOps', icon: '📊' },
    { name: 'Scrum', category: 'DevOps', icon: '🔄' }
  ];

  const experiences = [
    {
      title: 'PFA: Plateforme Scan des chèques',
      company: 'DocArchive',
      period: 'Juillet 2025 - Septembre 2025',
      location: 'Bouskoura, Maroc',
      description: 'Développement d\'une application ASP.NET MVC permettant l\'extraction automatique du code CMC7 et de la signature à partir d\'images de chèques.',
      technologies: ['ASP.NET', 'MVC', 'EmguCV', 'Tesseract', 'SQL Server', 'IIS']
    },
    {
      title: 'Chef d\'équipe de Numérisation',
      company: 'DocArchive - Projet Banque CDM',
      period: '2023 - 2024',
      location: 'Bouskoura, Maroc',
      description: 'Coordination de la numérisation des documents bancaires pour le Crédit du Maroc.',
      technologies: []
    },
    {
      title: 'Assistant Commercial',
      company: 'LMM',
      period: '2022 - 2023',
      location: 'Casablanca, Maroc',
      description: 'Rédaction de devis et bons de livraison, facturation, encaissement et relance clients.',
      technologies: []
    }
  ];

  const formations = [
    {
      title: 'Diplôme d\'Ingénieur d\'État',
      school: 'EMSI',
      period: '2024 - 2026',
      location: 'Casablanca',
      description: 'Ingénierie Informatique et Réseaux - Option MIAGE'
    },
    {
      title: 'Licence en Sciences Mathématiques et Informatique',
      school: 'Faculté des Sciences Ain Chock',
      period: '2020 - 2024',
      location: 'Casablanca',
      description: 'Option Base de Données'
    },
    {
      title: 'Baccalauréat Sciences Mathématiques',
      school: 'Écoles l\'ambassadeur',
      period: '2019 - 2020',
      location: 'Casablanca',
      description: 'Option A - Section Français'
    }
  ];

  const projets = [
    {
      title: 'Application web sécurisée',
      description: 'Plateforme e-commerce avec système de recommandation et WAF.',
      technologies: ['Java JEE', 'Angular', 'Spring Boot', 'Azure'],
      image: '/images/secWEB.png',
      year: '2024'
    },
    {
      title: 'Gestion de Produits',
      description: 'Application avec authentification admin.',
      technologies: ['.NET Core', 'Tailwind CSS', 'SQL Server'],
      image: '/images/projet1.png',
      year: '2024'
    },
    {
      title: 'Plateforme d\'inscription',
      description: 'Système de gestion des inscriptions FSAC.',
      technologies: ['PHP', 'Laravel', 'Tailwind', 'Alpine.js'],
      image: '/images/projet1.png',
      year: '2023'
    },
    {
      title: 'Scan des chèques',
      description: 'Extraction automatique avec OCR.',
      technologies: ['ASP.NET', 'MVC', 'EmguCV', 'Tesseract', 'SQL Server', 'IIS'],
      image: '/images/projet1.png',
      year: '2025'
    }
  ];

  const certifications = [
    { name: 'Git et GitHub', provider: 'IBM - Coursera', icon: '🎓' },
    { name: 'React Basics', provider: 'Meta - Coursera', icon: '⚛️' },
    { name: 'Java and OOP', provider: 'University of Pennsylvania', icon: '☕' },
    { name: 'Azure Networks', provider: 'Whizlabs', icon: '☁️' }
  ];

  const langues = [
    { name: 'Arabe', level: 'Langue maternelle', percent: 100 },
    { name: 'Français', level: 'Courant', percent: 90 },
    { name: 'Anglais', level: 'Intermédiaire', percent: 70 },
    { name: 'Espagnol', level: 'Notions de base', percent: 40 }
  ];

  const filters = ['All', 'Frontend', 'Backend', 'Base de Données', 'Mobile', 'DevOps'];

  const filteredCompetences = activeFilter === 'All' 
    ? competences 
    : competences.filter(c => c.category === activeFilter);

  const handleFormChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    alert('Message envoyé!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <nav className="fixed top-0 w-full bg-gray-900/95 backdrop-blur-sm z-50 border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
            Mohamed RIYAHI
          </div>
          <div className="hidden md:flex gap-6">
            <a href="#accueil" className="hover:text-blue-400 transition-colors">Accueil</a>
            <a href="#apropos" className="hover:text-blue-400 transition-colors">À propos</a>
            <a href="#competences" className="hover:text-blue-400 transition-colors">Compétences</a>
            <a href="#experience" className="hover:text-blue-400 transition-colors">Expérience</a>
            <a href="#projets" className="hover:text-blue-400 transition-colors">Projets</a>
            <a href="#certifications" className="hover:text-blue-400 transition-colors">Certifications</a>
            <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
          </div>
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {isMenuOpen && (
          <div className="md:hidden bg-gray-800 border-t border-gray-700">
            <div className="px-4 py-4 space-y-3">
              {['accueil', 'apropos', 'competences', 'experience', 'projets', 'certifications', 'contact'].map(section => (
                <a key={section} href={`#${section}`} className="block px-4 py-2 hover:bg-gray-700 rounded-lg capitalize" onClick={() => setIsMenuOpen(false)}>
                  {section === 'apropos' ? 'À propos' : section}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      <section id="accueil" className="min-h-screen flex items-center justify-center px-4 pt-20">
        <div className="text-center max-w-4xl">
          <div className="mb-8 inline-block animate-bounce">
            <span className="text-6xl">👋</span>
          </div>
          <p className="text-xl text-gray-400 mb-4">Salut, je m'appelle</p>
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
            Mohamed RIYAHI
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-4 leading-relaxed">
            Ingénieur Informatique et Réseaux (5ème année)
          </p>
          <p className="text-lg text-gray-400 mb-12">
            Spécialisé en développement Full Stack
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
  <a
    href="/CV_Mohamed_RIYAHI.pdf"                  // Ton fichier doit être dans le dossier /public
    download="CV_Mohamed_RIYAHI.pdf"         // Nom du fichier téléchargé
    className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 rounded-lg font-semibold flex items-center gap-2 transition-all transform hover:scale-105"
  >
    <Download size={20} />
    Télécharger mon CV
  </a>
            <a href="#projets" className="px-8 py-4 bg-gray-800 hover:bg-gray-700 rounded-lg font-semibold transition-all transform hover:scale-105">
              Voir mes projets
            </a>
          </div>
        </div>
      </section>

      <section id="apropos" className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-6xl w-full">
          <h2 className="text-5xl font-bold text-center mb-16 text-blue-400">À propos de moi</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="bg-gray-800/50 rounded-lg p-8 mb-6">
                <h3 className="text-2xl font-bold mb-4 text-blue-400">Profil</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Étudiant en 5ème année du cycle d'Ingénieur d'État en Ingénierie Informatique et Réseaux, option MIAGE, à l'EMSI de Casablanca.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Passionné par le développement Full Stack avec une expérience dans la conception d'applications web sécurisées.
                </p>
              </div>

              <div className="bg-gray-800/50 rounded-lg p-8">
                <h3 className="text-2xl font-bold mb-4 text-blue-400">Compétences personnelles</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">🎯</span>
                    <span className="text-gray-300">Résolution de problèmes</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">👥</span>
                    <span className="text-gray-300">Esprit d'équipe</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">📋</span>
                    <span className="text-gray-300">Organisation</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">🔄</span>
                    <span className="text-gray-300">Méthodologies Agiles</span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-gray-800/50 rounded-lg p-8 mb-6">
                <h3 className="text-2xl font-bold mb-6 text-blue-400">Langues</h3>
                <div className="space-y-4">
                  {langues.map((langue, index) => (
                    <div key={index}>
                      <div className="flex justify-between mb-2">
                        <span className="font-semibold text-gray-300">{langue.name}</span>
                        <span className="text-gray-400 text-sm">{langue.level}</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div className="bg-gradient-to-r from-blue-600 to-cyan-500 h-2 rounded-full" style={{ width: `${langue.percent}%` }}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-800/50 rounded-lg p-6 text-center">
                  <div className="text-4xl font-bold text-blue-400 mb-2">5+</div>
                  <div className="text-gray-400 text-sm">Ans d'études</div>
                </div>
                <div className="bg-gray-800/50 rounded-lg p-6 text-center">
                  <div className="text-4xl font-bold text-blue-400 mb-2">6+</div>
                  <div className="text-gray-400 text-sm">Projets réalisés</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="competences" className="min-h-screen px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-4">Compétences Techniques</h2>
          <p className="text-xl text-gray-400 text-center mb-12">Technologies et outils maîtrisés</p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {filters.map(filter => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-3 rounded-full font-semibold transition-all ${
                  activeFilter === filter ? 'bg-blue-600 text-white' : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredCompetences.map((comp, index) => (
              <div key={index} className="bg-gray-800/50 rounded-xl p-6 hover:bg-gray-800 transition-all transform hover:scale-105">
                <div className="text-5xl mb-4 text-center">{comp.icon}</div>
                <h3 className="text-center font-semibold text-white mb-1">{comp.name}</h3>
                <p className="text-center text-xs text-gray-400">{comp.category}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="min-h-screen px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-4">Parcours</h2>
          <p className="text-xl text-gray-400 text-center mb-16">Expériences et formations</p>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-3xl font-bold mb-8 text-blue-400 flex items-center gap-3">
                <span>💼</span> Expériences
              </h3>
              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <div key={index} className="relative pl-8 border-l-2 border-blue-600">
                    <div className="absolute -left-3 top-0 w-6 h-6 bg-blue-600 rounded-full"></div>
                    <div className="bg-gray-800/50 rounded-lg p-6 hover:bg-gray-800 transition-all">
                      <h4 className="text-xl font-bold text-white mb-2">{exp.title}</h4>
                      <p className="text-blue-400 font-semibold mb-1">{exp.company}</p>
                      <p className="text-gray-400 text-sm mb-1">{exp.period}</p>
                      <p className="text-gray-500 text-sm mb-4">{exp.location}</p>
                      <p className="text-gray-300 leading-relaxed mb-3">{exp.description}</p>
                      {exp.technologies.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, i) => (
                            <span key={i} className="px-2 py-1 bg-blue-600/20 text-blue-400 rounded text-xs">{tech}</span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-3xl font-bold mb-8 text-blue-400 flex items-center gap-3">
                <span>🎓</span> Formations
              </h3>
              <div className="space-y-6">
                {formations.map((form, index) => (
                  <div key={index} className="relative pl-8 border-l-2 border-cyan-600">
                    <div className="absolute -left-3 top-0 w-6 h-6 bg-cyan-600 rounded-full"></div>
                    <div className="bg-gray-800/50 rounded-lg p-6 hover:bg-gray-800 transition-all">
                      <h4 className="text-xl font-bold text-white mb-2">{form.title}</h4>
                      <p className="text-cyan-400 font-semibold mb-1">{form.school}</p>
                      <p className="text-gray-400 text-sm mb-1">{form.period}</p>
                      <p className="text-gray-500 text-sm mb-3">{form.location}</p>
                      <p className="text-gray-300">{form.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projets" className="min-h-screen px-4 py-20">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-5xl font-bold text-center mb-4">Projets Académiques</h2>
    <p className="text-xl text-gray-400 text-center mb-12">Réalisations développées</p>

    <div className="grid md:grid-cols-2 gap-8">
      {projets.map((projet, index) => (
        <div
          key={index}
          className="bg-gray-800/50 rounded-xl overflow-hidden hover:shadow-xl hover:shadow-blue-500/20 transition-all"
        >
          <div className="relative w-full h-56">
            <Image
              src={projet.image}
              alt={projet.title}
              fill
              className="object-cover"
            />
            <div className="absolute top-4 right-4 bg-gray-900/80 px-3 py-1 rounded-full text-sm">
              {projet.year}
            </div>
          </div>

          <div className="p-6">
            <h3 className="text-xl font-bold mb-3">{projet.title}</h3>
            <p className="text-gray-400 mb-4">{projet.description}</p>
            <div className="flex flex-wrap gap-2">
              {projet.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-blue-600/20 text-blue-400 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


      <section id="certifications" className="min-h-screen px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-4">Certifications</h2>
          <p className="text-xl text-gray-400 text-center mb-12">Formations Coursera</p>
          
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-gray-800/50 rounded-xl p-6 hover:bg-gray-800 transition-all">
                <div className="flex items-start gap-4">
                  <div className="text-4xl">{cert.icon}</div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">{cert.name}</h3>
                    <p className="text-blue-400 text-sm">{cert.provider}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-4xl w-full">
          <h2 className="text-5xl font-bold text-center mb-4">Contactez-moi</h2>
          <p className="text-xl text-gray-400 text-center mb-12">Pour toute opportunité ou collaboration</p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-gray-800/50 rounded-lg p-6 hover:bg-gray-800 transition-all">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-300">Email</h3>
                    <p className="text-blue-400">riyahimohamed07@gmail.com</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-800/50 rounded-lg p-6 hover:bg-gray-800 transition-all">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-300">Téléphone</h3>
                    <p className="text-blue-400">+212 645-495486</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-800/50 rounded-lg p-6 hover:bg-gray-800 transition-all">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-300">Localisation</h3>
                    <p className="text-blue-400">Casablanca, Maroc</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
              <a
  href="https://www.linkedin.com/in/mohamed-riyahi-574a1328b"
  target="_blank"
  rel="noopener noreferrer"
  className="flex-1 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all"
>
  <Linkedin size={20} />
  LinkedIn
</a>

                <button className="flex-1 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all">
                  <Github size={20} />
                  GitHub
                </button>
              </div>
            </div>

            <div className="space-y-4">
              <input
                type="text"
                placeholder="Votre nom"
                value={formData.name}
                onChange={(e) => handleFormChange('name', e.target.value)}
                className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg focus:ring-2 focus:ring-blue-600 outline-none"
              />
              <input
                type="email"
                placeholder="Votre email"
                value={formData.email}
                onChange={(e) => handleFormChange('email', e.target.value)}
                className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg focus:ring-2 focus:ring-blue-600 outline-none"
              />
              <textarea
                placeholder="Votre message"
                value={formData.message}
                onChange={(e) => handleFormChange('message', e.target.value)}
                rows={6}
                className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg focus:ring-2 focus:ring-blue-600 outline-none resize-none"
              />
              <button
                onClick={handleSubmit}
                className="w-full py-3 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 rounded-lg font-semibold transition-all"
              >
                Envoyer le message
              </button>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-800 py-8 text-center text-gray-400">
        <p>&copy; 2024 Mohamed RIYAHI. Tous droits réservés.</p>
      </footer>
    </div>
  );
}