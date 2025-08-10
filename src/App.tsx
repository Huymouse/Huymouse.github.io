import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  ChevronDown, 
  Github, 
  Linkedin, 
  Mail, 
  Phone,
  ExternalLink,
  Code,
  Palette,
  Smartphone,
  Globe
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrollY > 50 ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold text-blue-900">Huy Nguyễn</div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {['About', 'Skills', 'Portfolio', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-gray-700 hover:text-blue-900 transition-colors duration-200 font-medium"
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden bg-white border-t">
              <div className="py-4 space-y-4">
                {['About', 'Skills', 'Portfolio', 'Contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="block w-full text-left px-4 py-2 text-gray-700 hover:text-blue-900 hover:bg-gray-50 transition-colors duration-200"
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
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-orange-50 pt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
              Hi, I'm <span className="text-blue-900">Huy</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Người đẹp trai nhất thế giới, và là DEV không trình với nửa phút kinh nghiệm.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => scrollToSection('portfolio')}
                className="bg-blue-900 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-800 transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                View My Work
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="border-2 border-blue-900 text-blue-900 px-8 py-4 rounded-full font-semibold hover:bg-blue-900 hover:text-white transition-all duration-300 hover:scale-105"
              >
                Thông Tin Liên Hệ
              </button>
            </div>
          </div>
          
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown size={32} className="text-gray-400" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">About Me</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                I'm a passionate full-stack developer with over 5 years of experience 
                creating digital solutions that bridge the gap between design and functionality. 
                My journey began with a curiosity for how things work, and has evolved into 
                a love for crafting experiences that users genuinely enjoy.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                When I'm not coding, you'll find me exploring new design trends, 
                contributing to open-source projects, or enjoying a good cup of coffee 
                while planning the next big idea.
              </p>
              <div className="flex space-x-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-900">50+</div>
                  <div className="text-gray-600">Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-900">5+</div>
                  <div className="text-gray-600">Years</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-900">100+</div>
                  <div className="text-gray-600">Happy Clients</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-blue-400 to-orange-400 rounded-3xl p-1">
                <div className="w-full h-full bg-gray-200 rounded-3xl flex items-center justify-center">
                  <img 
                    src="https://scontent.fhph1-3.fna.fbcdn.net/v/t1.15752-9/518822887_1876879353168834_5606319374019031974_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeEfjg8DwCEMhmitJKWqrFGeQXqj7hixODxBeqPuGLE4PKCyTzy4-o-uy_WcfYf7ipN2xJcJZVw4j7Nwayl9_Dj1&_nc_ohc=OTmA2zdxt6gQ7kNvwEtryaH&_nc_oc=Adlhb7_bXyZ6Y1K31LafyfKrcXzb8WhRIKXgxNN7zPAEZ4_vZ-GjwEiXafnv_MUjNSg&_nc_zt=23&_nc_ht=scontent.fhph1-3.fna&oh=03_Q7cD3AFCj9Pqf7YpqmmSf6kd5rjs3T5e0rBT5gIiEq7KapviMw&oe=68BFCA56"
                    alt="Huy Nguyễn"
                    className="w-full h-full object-cover rounded-3xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills & Expertise</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              I work with cutting-edge technologies to deliver exceptional results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: 'Frontend Development', icon: Code, level: 95, color: 'blue' },
              { name: 'UI/UX Design', icon: Palette, level: 88, color: 'orange' },
              { name: 'Mobile Development', icon: Smartphone, level: 82, color: 'green' },
              { name: 'Web Technologies', icon: Globe, level: 92, color: 'purple' }
            ].map((skill, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className={`inline-flex p-3 rounded-full bg-${skill.color}-100 mb-4`}>
                  <skill.icon size={24} className={`text-${skill.color}-600`} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">{skill.name}</h3>
                <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                  <div 
                    className={`bg-${skill.color}-500 h-2 rounded-full transition-all duration-1000 delay-300`}
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
                <div className="text-sm text-gray-600">{skill.level}%</div>
              </div>
            ))}
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {['React', 'TypeScript', 'Node.js', 'Python', 'Figma', 'AWS'].map((tech, index) => (
              <div key={index} className="text-center">
                <div className="bg-white p-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="text-2xl font-bold text-gray-700">{tech}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A collection of projects I'm proud to have worked on
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'E-commerce Platform',
                description: 'Modern shopping experience with React and Node.js',
                image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
                tags: ['React', 'Node.js', 'MongoDB']
              },
              {
                title: 'Design System',
                description: 'Comprehensive UI component library',
                image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
                tags: ['Figma', 'Storybook', 'React']
              },
              {
                title: 'Mobile App',
                description: 'Cross-platform productivity application',
                image: 'https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
                tags: ['React Native', 'Firebase', 'Redux']
              }
            ].map((project, index) => (
              <div key={index} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-blue-900/0 group-hover:bg-blue-900/20 transition-all duration-300 flex items-center justify-center">
                    <ExternalLink size={24} className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-blue-900 to-blue-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Let's Work Together</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Ready to bring your ideas to life? I'd love to hear about your project.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-8">Get in touch</h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-800 p-3 rounded-full">
                    <Mail size={20} className="text-blue-100" />
                  </div>
                  <div>
                    <div className="text-white font-medium">Email</div>
                    <div className="text-blue-200">huy@example.com</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-800 p-3 rounded-full">
                    <Phone size={20} className="text-blue-100" />
                  </div>
                  <div>
                    <div className="text-white font-medium">Phone</div>
                    <div className="text-blue-200">+1 (555) 123-4567</div>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <h4 className="text-lg font-medium text-white mb-6">Follow me</h4>
                <div className="flex space-x-4">
                  {[
                    { icon: Github, label: 'GitHub' },
                    { icon: Linkedin, label: 'LinkedIn' },
                    { icon: Mail, label: 'Email' }
                  ].map((social, index) => (
                    <a
                      key={index}
                      href="#"
                      className="bg-blue-800 hover:bg-blue-700 p-3 rounded-full transition-colors duration-200"
                      aria-label={social.label}
                    >
                      <social.icon size={20} className="text-blue-100" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl">
              <form className="space-y-6">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-200"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-200"
                  />
                </div>
                <div>
                  <textarea
                    rows={4}
                    placeholder="Your Message"
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-200 resize-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-orange-500 hover:bg-orange-400 text-white font-semibold py-4 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-2xl font-bold text-white mb-4">Huy Nguyễn</div>
            <p className="text-gray-400">© 2024 Huy Nguyễn. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;