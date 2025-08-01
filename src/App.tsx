import { useState } from 'react';
import { ImageWithFallback } from './components/figma/ImageWithFallback'; 
import Header from "./components/Header";
import qxmLogoFooter from "./assets/logo_footer.svg"

// Importaciones de iconos de Lucide React
import {
  Calendar, Clock, Eye, Heart, Share2, ArrowLeft,
  TrendingUp, User, MessageCircle, ChevronRight, ThumbsUp,
} from "lucide-react";


import svgPaths from "./imports/svg-xxvk0ukngx"; 


// --- INTERFACES DE TIPOS ---
// Define la estructura de un post del blog
interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string; // Considera usar `Date` si vas a manipular fechas, pero `string` es válido para mostrar.
  readTime: string;
  views: number;
  likes: number;
  category: string;
  image: string;
  featured?: boolean; // `?` indica que es opcional
}

// Define la estructura de una categoría
interface Category {
  name: string;
  count: number;
  color: string;
}


// Datos de ejemplo para el blog adaptado a QXM
const blogPosts: BlogPost[] = [ // Aplicamos el tipo BlogPost[]
  {
    id: 1,
    title: "Cómo Encontrar el Mejor Profesional para tu Hogar en 2024",
    excerpt: "Descubre las claves para contratar servicios de calidad y evitar problemas comunes al buscar profesionales.",
    content: `
      <p>Encontrar profesionales confiables para tu hogar puede ser un desafío. En esta guía te enseñamos cómo hacerlo de manera efectiva.</p>
      
      <h3>1. Verifica las Credenciales</h3>
      <p>Siempre revisa que el profesional tenga las certificaciones necesarias y experiencia comprobable en el área.</p>
      
      <h3>2. Lee las Reseñas</h3>
      <p>Las opiniones de otros clientes son fundamentales para tomar una decisión informada.</p>
      
      <h3>3. Solicita Múltiples Presupuestos</h3>
      <p>Compara precios y servicios de diferentes profesionales antes de decidir.</p>
      
      <p>Usando QXM puedes acceder a profesionales verificados y obtener presupuestos de manera rápida y segura.</p>
    `,
    author: "María González",
    date: "2024-01-15",
    readTime: "8 min",
    views: 2840,
    likes: 127,
    category: "Consejos",
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=400&fit=crop",
    featured: true
  },
  {
    id: 2,
    title: "Mantenimiento Preventivo: Claves para el Hogar",
    excerpt: "Aprende qué tareas de mantenimiento realizar regularmente para evitar costosas reparaciones.",
    content: `
      <p>El mantenimiento preventivo es esencial para conservar tu hogar en óptimas condiciones.</p>
      
      <h3>Revisiones Eléctricas</h3>
      <p>Programa inspecciones anuales del sistema eléctrico para prevenir problemas.</p>
      
      <h3>Plomería</h3>
      <p>Revisa las cañerías y grifos regularmente para detectar fugas temprano.</p>
    `,
    author: "Carlos Ruiz",
    date: "2024-01-12",
    readTime: "12 min",
    views: 1950,
    likes: 89,
    category: "Mantenimiento",
    image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800&h=400&fit=crop"
  },
  {
    id: 3,
    title: "Reformas de Baño: Tendencias 2024",
    excerpt: "Las últimas tendencias en diseño de baños que están revolucionando los hogares.",
    content: `
      <p>Los baños modernos combinan funcionalidad con estética. Descubre las tendencias más populares.</p>
      
      <h3>Minimalismo</h3>
      <p>Líneas limpias y espacios despejados son la clave del diseño moderno.</p>
      
      <h3>Sustentabilidad</h3>
      <p>Materiales ecológicos y sistemas de ahorro de agua están en auge.</p>
    `,
    author: "Ana Martínez",
    date: "2024-01-10",
    readTime: "6 min",
    views: 3200,
    likes: 156,
    category: "Reformas",
    image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&h=400&fit=crop"
  },
  {
    id: 4,
    title: "Jardinería Urbana: Espacios Verdes en Casa",
    excerpt: "Cómo crear y mantener un jardín en espacios reducidos urbanos.",
    content: "",
    author: "Luis Fernández",
    date: "2024-01-08",
    readTime: "5 min",
    views: 1680,
    likes: 94,
    category: "Jardinería",
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&h=400&fit-crop"
  },
  {
    id: 5,
    title: "Instalaciones Eléctricas: Seguridad Primero",
    excerpt: "Guía esencial sobre seguridad eléctrica en el hogar y cuándo llamar a un profesional.",
    content: "",
    author: "Roberto Silva",
    date: "2024-01-05",
    readTime: "10 min",
    views: 2100,
    likes: 78,
    category: "Electricidad",
    image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=800&h=400&fit-crop"
  }
];

const categories: Category[] = [ // Aplicamos el tipo Category[]
  { name: "Consejos", count: 45, color: "#0095FF" },
  { name: "Mantenimiento", count: 32, color: "#0D4676" },
  { name: "Reformas", count: 28, color: "#0095FF" },
  { name: "Jardinería", count: 24, color: "#0D4676" },
  { name: "Electricidad", count: 19, color: "#0095FF" },
];

//Aca estaba el Header

// Hero Section con estilo QXM
function HeroSection() {
  return (
    <div className="bg-[#0065b3] text-white py-16 relative overflow-hidden pt-[130px]"> 
      {/* Elementos decorativos de fondo usando svgPaths */}
      <div className="absolute top-0 left-0 w-32 h-32 opacity-20">
        <svg viewBox="0 0 129 81" fill="none" className="w-full h-full">
          <path d={svgPaths.p3137d300} fill="#0095FF" opacity="0.3"/>
        </svg>
      </div>
      <div className="absolute bottom-0 right-0 w-32 h-32 opacity-20 rotate-180">
        <svg viewBox="0 0 129 81" fill="none" className="w-full h-full">
          <path d={svgPaths.p2591fe00} fill="#0095FF" opacity="0.3"/>
        </svg>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 text-center relative">
        <h1 className="font-['Comfortaa:Bold',_sans-serif] text-4xl md:text-5xl mb-4">Blog QXM</h1>
        <p className="font-['Barlow:Regular',_sans-serif] text-xl text-blue-100 mb-6 max-w-3xl mx-auto">
          Descubre consejos expertos, guías prácticas y las mejores soluciones para tu hogar
        </p>
        <button className="bg-[#0095ff] text-white px-8 py-3 rounded-lg font-['Barlow:Medium',_sans-serif] hover:bg-[#0085e5] transition-colors shadow-lg">
          Explorar Artículos
        </button>
      </div>
    </div>
  );
}

// Post destacado con estilo QXM
function FeaturedPost({ post }: { post: BlogPost }) { // Definido el tipo para 'post'
  return (
    <div className="bg-white rounded-lg shadow-[0px_1px_2px_0px_rgba(0,0,0,0.3),0px_1px_3px_1px_rgba(0,0,0,0.15)] border border-gray-100 overflow-hidden mb-8">
      <div className="md:flex">
        <div className="md:w-1/2">
          <div className="h-64 md:h-full relative">
            <ImageWithFallback
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 left-4">
              <span className="bg-[#0095ff] text-white px-3 py-1 rounded-2xl font-['Barlow:Medium',_sans-serif] text-sm">
                Destacado
              </span>
            </div>
          </div>
        </div>
        
        <div className="md:w-1/2 p-6">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-[#e2f1ff] text-[#0095ff] px-3 py-1 rounded-2xl font-['Barlow:Medium',_sans-serif] text-sm">
              {post.category}
            </span>
            <div className="flex items-center text-[#7d8491] font-['Barlow:Regular',_sans-serif] text-sm gap-4">
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {new Date(post.date).toLocaleDateString('es-ES')}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </span>
            </div>
          </div>
          
          <h2 className="font-['Barlow:SemiBold',_sans-serif] text-2xl text-[#0d4676] mb-4 leading-tight">
            {post.title}
          </h2>
          
          <p className="font-['Barlow:Regular',_sans-serif] text-[#5c6474] mb-6 leading-relaxed">
            {post.excerpt}
          </p>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#f7f8fc] rounded-full flex items-center justify-center">
                <User className="w-5 h-5" />
              </div>
              <div>
                <p className="font-['Barlow:Medium',_sans-serif] text-[#0d4676]">{post.author}</p>
                <div className="flex items-center text-[#7d8491] font-['Barlow:Regular',_sans-serif] text-sm gap-3">
                  <span className="flex items-center gap-1">
                    <Eye className="w-4 h-4" />
                    {post.views.toLocaleString()}
                  </span>
                  <span className="flex items-center gap-1">
                    <Heart className="w-4 h-4" />
                    {post.likes}
                  </span>
                </div>
              </div>
            </div>
            
            <button className="bg-[#0095ff] text-white px-6 py-3 rounded-lg font-['Barlow:Medium',_sans-serif] hover:bg-[#0085e5] transition-colors flex items-center gap-2 shadow-sm">
              Leer más
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// Card de post con estilo QXM
function PostCard({ post }: { post: BlogPost }) { // Definido el tipo para 'post'
  return (
    <div className="bg-white rounded-lg shadow-[0px_1px_2px_0px_rgba(0,0,0,0.3),0px_1px_3px_1px_rgba(0,0,0,0.15)] border border-gray-100 overflow-hidden h-full hover:shadow-lg transition-shadow">
      <div className="relative">
        <div className="h-48">
          <ImageWithFallback
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute top-3 left-3">
          <span className="bg-white/90 backdrop-blur-sm text-[#0d4676] px-2 py-1 rounded-xl font-['Barlow:Medium',_sans-serif] text-xs">
            {post.category}
          </span>
        </div>
      </div>
      
      <div className="p-4">
        <div className="flex items-center gap-3 mb-2 font-['Barlow:Regular',_sans-serif] text-xs text-[#7d8491]">
          <span className="flex items-center gap-1">
            <Calendar className="w-3 h-3" />
            {new Date(post.date).toLocaleDateString('es-ES')}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="w-3 h-3" />
            {post.readTime}
          </span>
        </div>
        
        <h3 className="font-['Barlow:SemiBold',_sans-serif] text-lg text-[#0d4676] mb-2 leading-tight">
          {post.title}
        </h3>
        
        <p className="font-['Barlow:Regular',_sans-serif] text-[#5c6474] text-sm mb-3 leading-relaxed line-clamp-2">
          {post.excerpt}
        </p>
        
        <div className="flex items-center justify-between pt-3 border-t border-gray-100">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-[#f7f8fc] rounded-full flex items-center justify-center">
              <User className="w-3 h-3" />
            </div>
            <span className="font-['Barlow:Regular',_sans-serif] text-sm text-[#5c6474]">{post.author}</span>
          </div>
          
          <div className="flex items-center gap-3 font-['Barlow:Regular',_sans-serif] text-sm text-[#7d8491]">
            <span className="flex items-center gap-1">
              <Eye className="w-4 h-4" />
              {post.views.toLocaleString()}
            </span>
            <span className="flex items-center gap-1">
              <Heart className="w-4 h-4" />
              {post.likes}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

// Sidebar con estilo QXM
function BlogSidebar() {
  const popularPosts: BlogPost[] = blogPosts.slice(0, 5).sort((a, b) => b.views - a.views); // Definido el tipo
  
  return (
    <div className="space-y-6">
      {/* Categorías */}
      <div className="bg-white rounded-lg shadow-[0px_1px_2px_0px_rgba(0,0,0,0.3),0px_1px_3px_1px_rgba(0,0,0,0.15)] border border-gray-100">
        <div className="px-4 py-4 border-b border-gray-100">
          <h3 className="font-['Barlow:SemiBold',_sans-serif] text-lg text-[#0d4676]">Categorías</h3>
        </div>
        <div className="p-4">
          <div className="space-y-2">
            {categories.map((category: Category, index: number) => ( // Definido el tipo para 'category' y 'index'
              <div key={index} className="flex items-center justify-between p-3 rounded-lg hover:bg-[#f7f8fc] transition-colors cursor-pointer">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: category.color }}></div>
                  <span className="font-['Barlow:Medium',_sans-serif] text-[#5c6474]">{category.name}</span>
                </div>
                <span className="bg-[#ebedf2] text-[#7d8491] px-2 py-1 rounded-full font-['Barlow:Regular',_sans-serif] text-xs">
                  {category.count}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Posts más leídos */}
      <div className="bg-white rounded-lg shadow-[0px_1px_2px_0px_rgba(0,0,0,0.3),0px_1px_3px_1px_rgba(0,0,0,0.15)] border border-gray-100">
        <div className="px-4 py-4 border-b border-gray-100">
          <h3 className="font-['Barlow:SemiBold',_sans-serif] text-lg text-[#0d4676] flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-[#0095ff]" />
            Más Leídos
          </h3>
        </div>
        <div className="p-4">
          <div className="space-y-4">
            {popularPosts.map((post: BlogPost, index: number) => ( // Definido el tipo para 'post' y 'index'
              <div key={post.id} className="flex gap-3 cursor-pointer group">
                <div className="w-10 h-10 bg-[#f7f8fc] rounded-lg flex items-center justify-center font-['Barlow:Medium',_sans-serif] text-sm text-[#7d8491] group-hover:bg-[#e2f1ff] group-hover:text-[#0095ff] transition-colors">
                  {index + 1}
                </div>
                <div className="flex-1">
                  <h4 className="font-['Barlow:Medium',_sans-serif] text-sm text-[#0d4676] mb-1 group-hover:text-[#0095ff] transition-colors line-clamp-2">
                    {post.title}
                  </h4>
                  <div className="flex items-center gap-2 font-['Barlow:Regular',_sans-serif] text-xs text-[#7d8491]">
                    <Eye className="w-3 h-3" />
                    {post.views.toLocaleString()}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Newsletter QXM */}
      <div className="bg-[#0095ff] text-white rounded-lg overflow-hidden relative">
        <div className="absolute top-0 right-0 w-20 h-20 opacity-20">
          <svg viewBox="0 0 129 81" fill="none" className="w-full h-full">
            <path d={svgPaths.p2591fe00} fill="white" opacity="0.3"/>
          </svg>
        </div>
        <div className="p-6 relative z-10">
          <h3 className="font-['Barlow:SemiBold',_sans-serif] text-lg mb-2">¡Únete a QXM!</h3>
          <p className="font-['Barlow:Regular',_sans-serif] text-blue-100 text-sm mb-4">
            Recibe consejos y novedades directamente en tu email
          </p>
          <div className="space-y-3">
            <input
              type="email"
              placeholder="tu@email.com"
              className="w-full px-4 py-2 rounded-lg text-[#5c6474] placeholder-[#7d8491] border-0 focus:ring-2 focus:ring-white outline-none font-['Barlow:Regular',_sans-serif]"
            />
            <button className="w-full bg-white text-[#0095ff] py-2 rounded-lg font-['Barlow:Medium',_sans-serif] hover:bg-gray-50 transition-colors">
              Suscribirse
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// Vista de post individual
function PostView({ post, onBack }: { post: BlogPost; onBack: () => void }) { // Definidos los tipos para 'post' y 'onBack'
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <button 
        onClick={onBack}
        className="flex items-center gap-2 text-[#7d8491] hover:text-[#0095ff] transition-colors mb-6 px-3 py-2 rounded-lg hover:bg-[#f7f8fc] font-['Barlow:Medium',_sans-serif]"
      >
        <ArrowLeft className="w-4 h-4" />
        Volver al blog
      </button>
      
      <article className="bg-white rounded-lg shadow-[0px_1px_2px_0px_rgba(0,0,0,0.3),0px_1px_3px_1px_rgba(0,0,0,0.15)] border border-gray-100 overflow-hidden">
        <div className="relative h-96">
          <ImageWithFallback
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          <div className="absolute bottom-6 left-6 right-6 text-white">
            <div className="flex items-center gap-4 mb-4">
              <span className="bg-[#0095ff] px-3 py-1 rounded-2xl font-['Barlow:Medium',_sans-serif] text-sm">
                {post.category}
              </span>
              <span className="font-['Barlow:Regular',_sans-serif] text-sm opacity-90">{post.readTime} de lectura</span>
            </div>
            <h1 className="font-['Comfortaa:Bold',_sans-serif] text-3xl md:text-4xl mb-4">{post.title}</h1>
          </div>
        </div>
        
        <div className="p-8">
          <div className="flex items-center justify-between mb-8 pb-6 border-b border-gray-100">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-[#f7f8fc] rounded-full flex items-center justify-center">
                <User className="w-6 h-6" />
              </div>
              <div>
                <p className="font-['Barlow:SemiBold',_sans-serif] text-[#0d4676]">{post.author}</p>
                <p className="font-['Barlow:Regular',_sans-serif] text-[#7d8491] text-sm">
                  {new Date(post.date).toLocaleDateString('es-ES', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </p>
              </div>
            </div>
            
            <div className="flex items-center gap-4 text-[#7d8491]">
              <span className="flex items-center gap-1 font-['Barlow:Regular',_sans-serif]">
                <Eye className="w-4 h-4" />
                {post.views.toLocaleString()}
              </span>
              <button className="flex items-center gap-1 hover:text-red-500 transition-colors font-['Barlow:Regular',_sans-serif]">
                <Heart className="w-4 h-4" />
                {post.likes}
              </button>
              <button className="flex items-center gap-1 hover:text-[#0095ff] transition-colors font-['Barlow:Regular',_sans-serif]">
                <Share2 className="w-4 h-4" />
                Compartir
              </button>
            </div>
          </div>
          
          <div className="prose max-w-none font-['Barlow:Regular',_sans-serif] text-[#5c6474] leading-relaxed">
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>
          
          <div className="mt-8 pt-6 border-t border-gray-100">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <button className="flex items-center gap-2 bg-[#e2f1ff] text-[#0095ff] px-4 py-2 rounded-lg font-['Barlow:Medium',_sans-serif] hover:bg-[#d1e9ff] transition-colors">
                  <ThumbsUp className="w-4 h-4" />
                  Me gusta ({post.likes})
                </button>
                <button className="flex items-center gap-2 text-[#7d8491] hover:text-[#0095ff] transition-colors px-4 py-2 rounded-lg hover:bg-[#f7f8fc] font-['Barlow:Medium',_sans-serif]">
                  <MessageCircle className="w-4 h-4" />
                  Comentarios (12)
                </button>
              </div>
              
              <div className="flex items-center gap-2">
                <span className="font-['Barlow:Regular',_sans-serif] text-sm text-[#7d8491]">Compartir:</span>
                <button className="w-8 h-8 bg-[#e2f1ff] text-[#0095ff] rounded-lg hover:bg-[#d1e9ff] transition-colors flex items-center justify-center">
                  f {/* Esto debería ser un icono de Facebook */}
                </button>
                <button className="w-8 h-8 bg-[#e2f1ff] text-[#0095ff] rounded-lg hover:bg-[#d1e9ff] transition-colors flex items-center justify-center">
                  t {/* Esto debería ser un icono de Twitter */}
                </button>
                <button className="w-8 h-8 bg-[#e2f1ff] text-[#0095ff] rounded-lg hover:bg-[#d1e9ff] transition-colors flex items-center justify-center">
                  in {/* Esto debería ser un icono de LinkedIn */}
                </button>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}

// Footer QXM
function BlogFooter() {
  return (
    <footer className="bg-[#0d4676] mt-16">
      <div className="px-0 py-20">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start justify-between gap-8">
          <div className="flex items-center gap-3 mb-6 md:mb-0">
            <img src={qxmLogoFooter} alt="QXM Logo Footer" className="h-[38px] w-auto object-contain" />
          </div>
          
          <div>
            <ul className="space-y-3 font-['Barlow:Regular',_sans-serif] text-sm text-blue-100 text-right">
              <li><a href="#" className="hover:text-white transition-colors">Términos y condiciones</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Politicas de privacidad</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Condiciones de uso</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Politica de igualdad, diversidad y gobernanza</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contactanos</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Componente principal
export default function App() {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null); // Definido el tipo para selectedPost
  
  const featuredPost: BlogPost | undefined = blogPosts.find(post => post.featured); // Definido el tipo
  const recentPosts: BlogPost[] = blogPosts.filter(post => !post.featured); // Definido el tipo
  
  if (selectedPost) {
    return (
      <div className="min-h-screen bg-[#f7f8fc]">
        <Header />
        <PostView 
          post={selectedPost} 
          onBack={() => setSelectedPost(null)} 
        />
        <BlogFooter />
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-[#f7f8fc]">
      <Header />
      <HeroSection />
      
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Contenido principal */}
          <div className="lg:col-span-3">
            {/* Artículo destacado */}
            {featuredPost && (
              <div onClick={() => setSelectedPost(featuredPost)} className="cursor-pointer">
                <FeaturedPost post={featuredPost} />
              </div>
            )}
            
            {/* Entradas recientes */}
            <div>
              <h2 className="font-['Barlow:SemiBold',_sans-serif] text-2xl text-[#0d4676] mb-6">Entradas Recientes</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {recentPosts.map((post: BlogPost) => ( // Definido el tipo para 'post'
                  <div key={post.id} onClick={() => setSelectedPost(post)} className="cursor-pointer">
                    <PostCard post={post} />
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <BlogSidebar />
          </div>
        </div>
      </main>
      
      <BlogFooter />
    </div>
  );
}