import React, { useState, useEffect } from 'react';
import { Globe, MapPin, Heart, Menu, X, ChevronRight, Search, Users } from 'lucide-react';

// Types for our data
type Destination = {
  id: number;
  name: string;
  image: string;
  description: string;
  highlights: string[];
};

// Sample destinations from the document
const destinations: Destination[] = [
  {
    id: 1,
    name: "Togo",
    image: "https://images.pexels.com/photos/27552807/pexels-photo-27552807/free-photo-of-mending-nets.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Une mosaïque culturelle de plus de 40 groupes ethniques avec des traditions riches et variées.",
    highlights: ["Lomé", "Vallée de Tamberma", "Togoville", "Kpalimé", "Mont Agou"]
  },
  {
    id: 2,
    name: "Benin",
    image: "https://images.pexels.com/photos/8657107/pexels-photo-8657107.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Considéré comme le berceau spirituel du vaudou, avec un riche patrimoine culturel.",
    highlights: ["Ganvié", "Ouidah", "Abomey", "Parc National de Pendjari", "Porto-Novo"]
  },
  {
    id: 3, 
    name: "Ghana",
    image: "https://images.pexels.com/photos/6567674/pexels-photo-6567674.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Connu pour sa fierté culturelle, son identité panafricaine et ses festivals vibrants.",
    highlights: ["Cape Coast", "Accra", "Parc National de Kakum", "Lac Volta", "Kumasi"]
  },
  {
    id: 4,
    name: "Rwanda",
    image: "https://images.pexels.com/photos/31835038/pexels-photo-31835038/free-photo-of-aerial-view-of-verdant-hills-in-rwanda.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Un pays de renouveau et de fierté, mêlant danses traditionnelles et innovation futuriste.",
    highlights: ["Kigali", "Parc National des Volcans", "Lac Kivu", "Forêt de Nyungwe", "Villages culturels"]
  }
];

// Homepage Component
const IndexHome = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");

  // Auto-rotate hero slides
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Hero section images
  const heroSlides = [
    {
      image: "https://images.pexels.com/photos/4356144/pexels-photo-4356144.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Découvrez l'Afrique autrement",
      subtitle: "Des expériences authentiques à travers 20 pays"
    },
    {
      image: "https://images.pexels.com/photos/163185/old-retro-antique-vintage-163185.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Plus qu'un voyage, une immersion",
      subtitle: "Connectez-vous avec les cultures locales"
    },
    {
      image: "https://images.pexels.com/photos/220213/pexels-photo-220213.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Voyagez avec impact",
      subtitle: "Soutenez les projets communautaires avec la Fondation Mowoki"
    }
  ];

  return (
    <div className="font-sans bg-white text-gray-800">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-white/95 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <Globe className="h-8 w-8 text-indigo-600" />
                <span className="ml-2 text-2xl font-bold text-indigo-600">Mowoki</span>
              </div>
              
              {/* <div className="hidden md:ml-10 md:flex md:space-x-8">
                <a href="#" className="text-indigo-600 font-medium">Accueil</a>
                <a href="#" className="text-gray-700 hover:text-indigo-600 font-medium">Destinations</a>
                <a href="#" className="text-gray-700 hover:text-indigo-600 font-medium">Expériences</a>
                <a href="#" className="text-gray-700 hover:text-indigo-600 font-medium">À propos</a>
                <a href="#" className="text-gray-700 hover:text-indigo-600 font-medium">Fondation</a>
              </div> */}
            </div>
            
           {/*  <div className="hidden md:flex items-center space-x-4">
              <button className="px-4 py-2 rounded-md text-indigo-600 hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                Se connecter
              </button>
              <button className="px-4 py-2 rounded-md bg-indigo-600 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                S'inscrire
              </button>
            </div> */}
            
            <div className="flex items-center md:hidden">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-md text-gray-700 hover:text-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white pt-2 pb-4 px-2 shadow-lg">
            <div className="flex flex-col space-y-2">
              <a href="#" className="px-3 py-2 rounded-md bg-indigo-50 text-indigo-600 font-medium">Accueil</a>
              <a href="#" className="px-3 py-2 rounded-md text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 font-medium">Destinations</a>
              <a href="#" className="px-3 py-2 rounded-md text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 font-medium">Expériences</a>
              <a href="#" className="px-3 py-2 rounded-md text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 font-medium">À propos</a>
              <a href="#" className="px-3 py-2 rounded-md text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 font-medium">Fondation</a>
              
              <div className="pt-4 flex flex-col space-y-2">
                <button className="px-3 py-2 rounded-md text-indigo-600 border border-indigo-600 hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                  Se connecter
                </button>
                <button className="px-3 py-2 rounded-md bg-indigo-600 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                  S'inscrire
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div className="relative h-screen">
        {/* Hero Slide */}
        {heroSlides.map((slide, index) => (
          <div 
            key={index}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${index === activeSlide ? 'opacity-100' : 'opacity-0'}`}
          >
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-40">
                <div className="h-full flex items-center justify-center">
                  <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white">
                      {slide.title}
                    </h1>
                    <p className="mt-4 text-xl sm:text-2xl text-white">
                      {slide.subtitle}
                    </p>
                   {/*  <div className="mt-8">
                      <button className="px-6 py-3 bg-indigo-600 text-white text-lg font-medium rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-indigo-200">
                        Explorer maintenant
                      </button>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Slide indicators */}
        <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-3">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveSlide(index)}
              className={`h-3 w-3 rounded-full ${index === activeSlide ? 'bg-white' : 'bg-white/50'}`}
              aria-label={`Slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Search Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-10">
        <div className="bg-white rounded-lg shadow-xl p-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 mb-1">Destination</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <MapPin className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  placeholder="Pays, ville, région..."
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Date de départ</label>
              <input
                type="date"
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Voyageurs</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <Users className="h-5 w-5 text-gray-400" />
                </div>
                <select className="pl-10 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500">
                  <option>1 voyageur</option>
                  <option>2 voyageurs</option>
                  <option>3 voyageurs</option>
                  <option>4+ voyageurs</option>
                </select>
              </div>
            </div>
            
            <div className="flex items-end">
              <button className="w-full bg-indigo-600 text-white h-10 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 flex items-center justify-center">
                <Search className="h-5 w-5 mr-2" />
                Rechercher
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Tagline */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h2 className="text-3xl font-bold text-gray-900">Plus d'Afrique. Plus qu'un voyage.</h2>
        <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
          Découvrez l'Afrique sous un angle différent avec des expériences authentiques et immersives conçues avec nos partenaires locaux.
        </p>
      </div>

      {/* Featured Destinations */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Destinations populaires</h2>
            <a href="#" className="text-indigo-600 hover:text-indigo-800 flex items-center">
              Voir tout <ChevronRight className="h-5 w-5 ml-1" />
            </a>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {destinations.map((destination) => (
              <div key={destination.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="relative">
                  <img 
                    src={destination.image} 
                    alt={destination.name} 
                    className="w-full h-48 object-cover"
                  />
                  <button className="absolute top-3 right-3 p-1.5 bg-white rounded-full shadow hover:bg-gray-100">
                    <Heart className="h-5 w-5 text-gray-400 hover:text-red-500" />
                  </button>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900">{destination.name}</h3>
                  <p className="mt-2 text-sm text-gray-600 line-clamp-2">{destination.description}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {destination.highlights.slice(0, 3).map((highlight, index) => (
                      <span key={index} className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-indigo-100 text-indigo-800">
                        {highlight}
                      </span>
                    ))}
                    {destination.highlights.length > 3 && (
                      <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800">
                        +{destination.highlights.length - 3}
                      </span>
                    )}
                  </div>
                  <div className="mt-4">
                    <a 
                      href="#" 
                      className="text-indigo-600 hover:text-indigo-800 text-sm font-medium flex items-center"
                    >
                      Découvrir <ChevronRight className="h-4 w-4 ml-1" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">À propos de Mowoki</h2>
            <p className="mt-4 text-lg text-gray-600">
              Mowoki n'est pas simplement une plateforme de voyage — c'est un mouvement. Une invitation audacieuse à explorer l'Afrique au-delà des clichés et des foules.
            </p>
            <p className="mt-4 text-lg text-gray-600">
              Née sur le sol africain et construite avec une connaissance locale profonde, Mowoki vous connecte à des expériences significatives et hors des sentiers battus à travers le continent.
            </p>
            <div className="mt-8">
              <div className="flex items-center">
                <img 
                  src="https://images.pexels.com/photos/220213/pexels-photo-220213.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Jeremies Atevei PIMIZI" 
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div className="ml-4">
                  <h4 className="text-sm font-medium text-gray-900">Jeremies Atevei PIMIZI</h4>
                  <p className="text-sm text-gray-600">Fondateur de Mowoki</p>
                </div>
              </div>
              <blockquote className="mt-4 italic text-gray-600 border-l-4 border-indigo-500 pl-4">
                "Le nom Mowoki signifie 'Je vais' en Kabye, une langue parlée dans le nord du Togo. Il reflète un esprit de mouvement, de but et de découverte."
              </blockquote>
            </div>
            <div className="mt-6">
              <button className="inline-flex items-center px-4 py-2 border border-indigo-600 text-indigo-600 rounded-md hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                En savoir plus
              </button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <img 
                src="https://images.pexels.com/photos/811029/pexels-photo-811029.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Expérience Mowoki 1" 
                className="w-full h-40 object-cover rounded-lg"
              />
              <img 
                src="https://images.pexels.com/photos/2533092/pexels-photo-2533092.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Expérience Mowoki 2" 
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
            <div className="space-y-4 pt-8">
              <img 
                src="https://images.pexels.com/photos/1059608/pexels-photo-1059608.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Expérience Mowoki 3" 
                className="w-full h-64 object-cover rounded-lg"
              />
              <img 
                src="https://images.pexels.com/photos/6243465/pexels-photo-6243465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Expérience Mowoki 4" 
                className="w-full h-40 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Featured Experiences */}
      <div className="bg-indigo-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Expériences uniques en Afrique</h2>
            <p className="mt-4 text-lg text-indigo-200 max-w-3xl mx-auto">
              Des cérémonies spirituelles à Ouidah aux cascades cachées du Togo, chaque voyage est conçu pour vous immerger dans l'âme de l'Afrique.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-indigo-900 rounded-lg p-6">
              <div className="h-12 w-12 rounded-md bg-indigo-700 flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold">Immersion culturelle</h3>
              <p className="mt-2 text-indigo-200">
                Participez à des cérémonies traditionnelles, apprenez l'artisanat local et partagez le quotidien des communautés.
              </p>
            </div>
            
            <div className="bg-indigo-900 rounded-lg p-6">
              <div className="h-12 w-12 rounded-md bg-indigo-700 flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold">Nature préservée</h3>
              <p className="mt-2 text-indigo-200">
                Explorez des sites naturels époustouflants et secrets, loin des circuits touristiques traditionnels.
              </p>
            </div>
            
            <div className="bg-indigo-900 rounded-lg p-6">
              <div className="h-12 w-12 rounded-md bg-indigo-700 flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold">Tourisme d'impact</h3>
              <p className="mt-2 text-indigo-200">
                Voyagez de manière responsable en soutenant des projets communautaires à travers la Fondation Mowoki.
              </p>
            </div>
          </div>
          
          {/* Experience Cards */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-indigo-700 rounded-lg overflow-hidden">
              <img src="https://www.kanaga-at.com/wp-content/uploads/2021/07/benin_festival_vudu_foto_a._gagliardo.jpg" alt="Cérémonie vaudou" className="w-full h-48 object-cover" />
              <div className="p-5">
                <span className="inline-block px-2 py-1 text-xs font-semibold bg-indigo-900 text-white rounded-md mb-2">Bénin</span>
                <h3 className="text-lg font-semibold text-white">Cérémonie vaudou à Ouidah</h3>
                <p className="mt-2 text-indigo-200 text-sm">Découvrez les racines spirituelles du vaudou et assistez à une cérémonie authentique guidée par un prêtre local.</p>
                <div className="mt-4 flex justify-between items-center">
                  <span className="text-white font-semibold">À partir de 120€</span>
                  <button className="text-white bg-indigo-900 hover:bg-indigo-800 px-3 py-1 rounded text-sm">
                    Détails
                  </button>
                </div>
              </div>
            </div>
            
            <div className="bg-indigo-700 rounded-lg overflow-hidden">
              <img src="https://kumakonda.com/wp-content/uploads/Benin-togo-ghana-y-burkina-faso.jpg" alt="Koutammakou" className="w-full h-48 object-cover" />
              <div className="p-5">
                <span className="inline-block px-2 py-1 text-xs font-semibold bg-indigo-900 text-white rounded-md mb-2">Togo</span>
                <h3 className="text-lg font-semibold text-white">Villages Batammariba</h3>
                <p className="mt-2 text-indigo-200 text-sm">Séjournez dans les maisons-tours de la vallée de Koutammakou et découvrez la culture unique du peuple Batammariba.</p>
                <div className="mt-4 flex justify-between items-center">
                  <span className="text-white font-semibold">À partir de 95€</span>
                  <button className="text-white bg-indigo-900 hover:bg-indigo-800 px-3 py-1 rounded text-sm">
                    Détails
                  </button>
                </div>
              </div>
            </div>
            
            <div className="bg-indigo-700 rounded-lg overflow-hidden">
              <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/21/0d/ab/49/slave-route-view-from.jpg?w=1200&h=700&s=1" alt="Elmina Castle" className="w-full h-48 object-cover" />
              <div className="p-5">
                <span className="inline-block px-2 py-1 text-xs font-semibold bg-indigo-900 text-white rounded-md mb-2">Ghana</span>
                <h3 className="text-lg font-semibold text-white">Route des esclaves</h3>
                <p className="mt-2 text-indigo-200 text-sm">Parcourez les sites historiques de la traite transatlantique et connectez-vous à cette histoire poignante.</p>
                <div className="mt-4 flex justify-between items-center">
                  <span className="text-white font-semibold">À partir de 150€</span>
                  <button className="text-white bg-indigo-900 hover:bg-indigo-800 px-3 py-1 rounded text-sm">
                    Détails
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Ce que disent nos voyageurs</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center mb-4">
              <div className="flex-shrink-0">
                <img className="h-10 w-10 rounded-full" src="https://images.pexels.com/photos/27738917/pexels-photo-27738917/free-photo-of-a-woman-in-a-green-sequin-dress-sitting-on-a-table.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Avatar" />
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-gray-900">Sarah M.</h3>
                <p className="text-sm text-gray-500">Voyage au Togo</p>
              </div>
            </div>
            <div className="mt-2">
              <p className="text-gray-600">
                "Une expérience authentique qui m'a permis de découvrir le Togo au-delà des sites touristiques. Les guides locaux étaient exceptionnels et les rencontres inoubliables."
              </p>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center mb-4">
              <div className="flex-shrink-0">
                <img className="h-10 w-10 rounded-full" src="https://images.pexels.com/photos/10823274/pexels-photo-10823274.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Avatar" />
              </div>

              <div className="ml-3">
                <h3 className="text-sm font-medium text-gray-900">Thomas L.</h3>
                <p className="text-sm text-gray-500">Voyage au Bénin</p>
              </div>
            </div>
            <div className="mt-2">
              <p className="text-gray-600">
                "La cérémonie vaudou à Ouidah était une expérience spirituelle intense. Mowoki a su organiser cette rencontre avec respect et authenticité."
              </p>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center mb-4">
              <div className="flex-shrink-0">
                <img className="h-10 w-10 rounded-full" src="https://images.pexels.com/photos/16457058/pexels-photo-16457058/free-photo-of-woman-with-painted-body.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Avatar" />
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-gray-900">Amina D.</h3>
                <p className="text-sm text-gray-500">Voyage au Rwanda</p>
              </div>
            </div>
            <div className="mt-2">
              <p className="text-gray-600">
                "Le parc des volcans et la rencontre avec les gorilles était au-delà de mes attentes. L'organisation était parfaite et les guides extrêmement compétents."
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900">Restez connectés</h2>
            <p className="mt-4 text-lg text-gray-600">
              Abonnez-vous à notre newsletter pour recevoir des offres exclusives, des inspirations de voyage et des nouvelles de la Fondation Mowoki.
            </p>
            <div className="mt-8 sm:mx-auto sm:max-w-md">
              <form className="sm:flex">
                <label htmlFor="email" className="sr-only">Email</label>
                <input
                  id="email"
                  type="email"
                  required
                  className="w-full px-5 py-3 border border-gray-300 shadow-sm placeholder-gray-400 focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs rounded-md"
                  placeholder="Votre email"
                />
                <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    S'abonner
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider">Mowoki</h3>
              <ul className="mt-4 space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">À propos</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Notre histoire</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Équipe</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Carrières</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider">Destinations</h3>
              <ul className="mt-4 space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Togo</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Bénin</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Ghana</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Rwanda</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Toutes les destinations</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider">Aide</h3>
              <ul className="mt-4 space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">FAQ</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Politique de confidentialité</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Conditions générales</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider">Fondation</h3>
              <ul className="mt-4 space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Nos projets</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Faire un don</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Partenariats</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Impact</a></li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-gray-800">
            <div className="md:flex md:items-center md:justify-between">
              <div className="flex justify-center md:order-2 space-x-6">
                <a href="#" className="text-gray-400 hover:text-white">
                  <span className="sr-only">Facebook</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <span className="sr-only">Instagram</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
              </div>
              <div className="mt-8 md:mt-0 md:order-1">
                <p className="text-center text-base text-gray-400">
                  &copy; {new Date().getFullYear()} Mowoki. Tous droits réservés.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default IndexHome;