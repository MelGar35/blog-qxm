import { useState } from 'react';
import { ImageWithFallback } from './components/figma/ImageWithFallback'; 
import Header from "./components/Header";
import qxmLogoFooter from "./assets/logo_footer.svg"
import Pagination from './components/Pagination';
import { ChevronDown } from 'lucide-react'; //comp Sidebar
import imgNota2 from "./assets/pexels-n-voitkevich-6863260.webp";
import imgNota1 from "./assets/Nota1.webp";

// Importaciones de iconos de Lucide React
import {
  Share2, ArrowLeft,
  TrendingUp, User, ChevronRight,
} from "lucide-react";


import svgPaths from "./imports/svg-xxvk0ukngx"; 


// --- INTERFACES DE TIPOS ---
interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  author: string;
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
const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "5 problemas comunes en casa cuando empieza el frío (y a quién podés llamar para solucionarlos)",
    excerpt: "Con la llegada del invierno, muchas casas empiezan a mostrar fallas que no se notaban durante el verano. Acá te contamos cuáles son los problemas más comunes en los hogares argentinos durante el invierno, cómo afectan tu bienestar y quién puede ayudarte a solucionarlos de forma rápida y segura.", // Resumen más completo
    content: `
      <p>Con la llegada del invierno, muchas casas empiezan a mostrar fallas que no se notaban durante el verano. El frío, la humedad y el mayor uso de artefactos generan situaciones que, si no se resuelven a tiempo, pueden convertirse en complicaciones más grandes (y caras).</p>
      <p>Acá te contamos cuáles son los problemas más comunes en los hogares argentinos durante el invierno, cómo afectan tu bienestar y quién puede ayudarte a solucionarlos de forma rápida y segura.</p>

      <h3>1. Humedad en techos y paredes</h3>
      <p>El contraste entre el frío exterior y el calor interior genera humedad por condensación. A eso se suman filtraciones por lluvia o malas terminaciones que provocan manchas, hongos y mal olor.</p>
      <h4>¿Por qué es un problema?</h4>
      <ul>
        <li>Daña la pintura y la estructura de la casa.</li>
        <li>Afecta la salud respiratoria.</li>
        <li>Empeora con el tiempo si no se trata.</li>
      </ul>
      <h4>¿Quién puede ayudarte?</h4>
      <ul>
        <li>Un pintor profesional puede aplicar pintura antihumedad o membrana líquida.</li>
        <li>Un albañil puede revisar y reparar grietas o filtraciones.</li>
      </ul>
      <p>👉 Solucionarlo a tiempo evita que la humedad se propague a más ambientes. </p>
      <p>👉 <a href="https://www.qxm.com.ar/pedido/nuevo" target="_blank" rel="noopener noreferrer"><span class="text-blue-500 font-bold">Solicitá un presupuesto acá</span></a></p>

      <h3>2. Estufas y calefactores que no prenden o no calientan bien</h3>
      <p>Al empezar a usarlos después de meses apagados, muchos calefactores no funcionan correctamente: no encienden, hacen ruido, largan olor a gas o simplemente no calientan lo suficiente.</p>
      <h4>¿Por qué es un problema?</h4>
      <ul>
        <li>Aumenta el consumo sin mejorar el confort.</li>
        <li>Puede ser peligroso si hay pérdidas o mal funcionamiento.</li>
      </ul>
      <h4>¿Quién puede ayudarte?</h4>
      <ul>
        <li>Un gasista matriculado puede hacer el mantenimiento o la instalación de una nueva estufa.</li>
        <li>Un técnico en calefacción puede limpiar y revisar la salida de gases.</li>
      </ul>
      <p>👉 ¡No esperes al primer día de mucho frío para darte cuenta!</p>

      <h3>3. Cortes de luz al usar varios artefactos</h3>
      <p>Con la calefacción eléctrica, caloventores, secadores, hervidores y otros aparatos funcionando al mismo tiempo, muchas casas experimentan cortes o sobrecargas.</p>
      <h4>¿Por qué es un problema?</h4>
      <ul>
        <li>Podés dañar electrodomésticos.</li>
        <li>Puede representar un riesgo de incendio.</li>
      </ul>
      <h4>¿Quién puede ayudarte?</h4>
      <ul>
        <li>Un electricista puede revisar la carga total, actualizar la instalación, cambiar térmicas o dividir los circuitos para evitar sobrecargas.</li>
      </ul>
      <p>👉 Si tenés una casa antigua o estás usando más artefactos que antes, hacé una revisión general. </p>
      <p>👉 <a href="#">Pedí ayuda para tu casa acá</a></p>

      <h3>4. Termotanque o calefón con poca presión o sin agua caliente</h3>
      <p>Con más duchas calientes y mayor demanda de agua caliente, los problemas se notan rápido: demora en calentar, baja presión o cortes intermitentes.</p>
      <h4>¿Por qué es un problema?</h4>
      <ul>
        <li>No sólo es incómodo, también puede esconder problemas como sarro, obstrucciones o pérdidas de gas.</li>
      </ul>
      <h4>¿Quién puede ayudarte?</h4>
      <ul>
        <li>Un técnico de gas o plomero puede limpiar el termotanque, revisar la válvula de seguridad o reemplazarlo si es necesario.</li>
      </ul>
      <p>👉 El mantenimiento regular alarga la vida útil del equipo y mejora el rendimiento.</p>

      <h3>5. Ingreso de aire frío por puertas y ventanas</h3>
      <p>Aunque no lo veas, por debajo de las puertas, por los costados de las ventanas o en marcos mal ajustados, se pierde mucho calor.</p>
      <h4>¿Por qué es un problema?</h4>
      <ul>
        <li>Aumenta el gasto en calefacción.</li>
        <li>El frío constante genera incomodidad en todo el hogar.</li>
      </ul>
      <h4>¿Quién puede ayudarte?</h4>
      <ul>
        <li>Un carpintero puede ajustar o sellar puertas y ventanas.</li>
        <li>También podés pedir ayuda a alguien especializado en pequeños arreglos del hogar para colocar burletes o sellos de goma.</li>
      </ul>
      <p>👉 Un cierre hermético puede hacer una gran diferencia en el confort y el gasto.</p>

      <h3>🛠️ ¿Necesitás ayuda con alguno de estos problemas?</h3>
      <p>En Quién por mí podés buscar trabajadores verificados por rubro, pedir presupuestos gratis y contratar a quien mejor se adapte a tu necesidad y tu presupuesto.</p>
      <ul>
        <li>✅ Sin vueltas</li>
        <li>✅ Cerca tuyo</li>
        <li>✅ Con opiniones de otros usuarios</li>
      </ul>
      <p>👉 <a href="https://www.qxm.com.ar/pedido/nuevo" target="_blank" rel="noopener noreferrer"><span class="text-blue-500 font-bold">Pedí ayuda para tu casa acá</a></p>
    `,
    author: "María González",
    category: "Consejos",
    image: imgNota1,
    featured: true
  },
  {
    id: 2,
    "title": "¿Te subió la boleta de luz? Estos cambios simples te pueden ayudar a gastar menos (y saber cuándo llamar a un profesional)",
  "excerpt": "Con el frío, el uso de estufas, luces, termotanques y electrodomésticos se dispara... y la boleta de luz lo refleja. Pero no todo está perdido: hay pequeñas acciones que podés hacer por tu cuenta para reducir el consumo energético.",
  "content": `
      <p>Con el frío, el uso de estufas, luces, termotanques y electrodomésticos se dispara… y la boleta de luz lo refleja. Pero no todo está perdido: hay pequeñas acciones que podés hacer por tu cuenta para reducir el consumo energético. Y cuando no alcanza, siempre está la opción de pedir ayuda a un profesional confiable.</p>
      <p>Acá te dejamos una guía rápida para saber qué podés hacer vos mismo y cuándo conviene llamar a alguien que sepa.</p>

      <h3>1. Cambiá las lámparas por LED</h3>
      <p>Los focos LED consumen hasta 80% menos que los incandescentes y duran mucho más. Cambiarlos en los ambientes que más usás es un primer paso muy efectivo.</p>
      <p><b>¿Cuándo llamar a alguien?</b><br> Si querés hacer una renovación total, agregar luces dimerizables o automatizadas, es mejor contar con un electricista que te asesore e instale todo correctamente.</p>

      <h3>2. Sellá puertas y ventanas</h3>
      <p>El calor se escapa por cualquier rendija. Colocar burletes autoadhesivos en puertas y ventanas es fácil, económico y reduce la necesidad de calefacción.</p>
      <p><b>¿Cuándo llamar a alguien?</b><br> Si hay filtraciones de humedad, marcos rotos o ventanas mal colocadas, mejor consultar a un carpintero o especialista en arreglos.</p>

      <h3>3. Desenchufá lo que no usás</h3>
      <p>Muchos equipos siguen consumiendo energía aún apagados (el famoso “consumo vampiro”). Desenchufar cargadores, microondas o TV cuando no se usan puede ayudar.</p>
      <p>⚡ <b>Consejo extra:</b> Usá zapatillas con interruptor para cortar varios enchufes a la vez.</p>

      <h3>4. Revisá tu instalación eléctrica → acá sí necesitás a un experto</h3>
      <p>Si te saltan los tapones cada vez que prendés varias cosas, o tenés instalaciones viejas, no es algo que se pueda resolver con un tutorial. Ahí sí necesitás ayuda profesional.</p>
      <p>👨‍🔧 Llamá a un electricista matriculado para hacer una revisión segura, eficiente y evitar accidentes. 👉 <a href="#">Pedí ayuda acá</a></p>

      <h3>5. Mantenimiento de termotanques o calefactores → no lo improvises</h3>
      <p>Un calefactor que no prende bien o un termotanque que tarda demasiado en calentar puede estar consumiendo de más o funcionando mal.</p>
      <p>👨‍🔧 Necesitás a un técnico de gas para hacer la limpieza, revisar el consumo y dejarlo en condiciones.</p>
      <p>✋ Pedí ayuda cuando lo necesites, para eso está quien x mi.</p>

      <p>Hay muchos cambios simples que ayudan a bajar el consumo eléctrico, y vale la pena empezar por ahí. Pero cuando se trata de instalaciones, reparaciones o seguridad, lo mejor es dejarlo en manos de expertos.</p>
      <p>En Quién por mí, podés buscar técnicos, electricistas, gasistas o especialistas en arreglos cerca tuyo y pedir presupuestos gratis.</p>
      <p>👉 <a href="#">Pedí un presupuesto acá</a></p> `,
    author: "Carlos Ruiz",
    category: "Mantenimiento",
    image: imgNota2,
    featured: false
  },
  {
    id: 3,
    "title": "Mudarte sin gastar de más: 7 cosas que deberías saber (y preguntar) antes de cambiar de casa",
  "excerpt": "Cambiar de casa es emocionante… pero también puede convertirse en un dolor de cabeza si no hacés algunas preguntas clave antes de mudarte. Entre imprevistos, arreglos y servicios que nadie te avisó que ibas a necesitar, los gastos pueden dispararse.",
  "content": `
      <p>Cambiar de casa es emocionante… pero también puede convertirse en un dolor de cabeza si no hacés algunas preguntas clave antes de mudarte. Entre imprevistos, arreglos y servicios que nadie te avisó que ibas a necesitar, los gastos pueden dispararse. Por eso, en este blog te compartimos 7 puntos que te conviene chequear antes de dar el gran paso, ¡y cómo podés resolverlos fácil con Quién Por Mí!</p>

      <h3>1. ¿Hay filtraciones, humedad o problemas eléctricos?</h3>
      <p>Parece básico, pero muchas veces recién lo descubrís cuando ya estás viviendo ahí. Antes de mudarte, revisá bien techos, paredes y enchufes.</p>
      <p>👉 <a href="https://www.qxm.com.ar/pedido/nuevo" target="_blank" rel="noopener noreferrer"><span class="text-blue-500 font-bold">Buscá ahora un especialista en tu zona</span></a></p>

      <h3>2. ¿Qué tan seguros están las cerraduras y aberturas?</h3>
      <p>¿La puerta cierra bien? ¿La cerradura es segura? ¿Las ventanas traban correctamente? Un cambio de cerradura o arreglo de carpintería puede evitarte más de un susto. Mejor preguntar antes…</p>

      <h3>3. ¿Tenés que pintar o reparar algo antes de entrar?</h3>
      <p>Muchos departamentos o casas se entregan "tal cual están", lo que muchas veces significa manchas, humedad vieja o colores que no son lo tuyo. Aclará este punto con la inmobiliaria para evitar malos entendidos o costos que no te corresponden.</p>

      <h3>4. ¿Funciona bien la instalación de gas, agua y cloacas?</h3>
      <p>No es lo más agradable de revisar, pero sí fundamental. Consultá si hubo controles recientes o si necesitás ver las conexiones. Lo barato sale caro si no te asegurás antes.</p>

      <h3>5. ¿Con qué servicios contás?</h3>
      <p>Quizás te enamoraste del barrio, pero mudarte también implica mover tu vida, tus hábitos y cosas de confianza ¿Hay supermercados, gimnasios, médicos o espacios verdes accesibles? Contemplar los costos de movilidad también es importante.</p>

      <h3>6. ¿Vas a necesitar ayuda para la mudanza?</h3>
      <p>Mudarte es agotador. Fletes, cajas, muebles que no entran… Si todavía no conseguiste ayuda, en Quién Por Mí podés buscar fletes, ayudantes, y hasta personas que te armen los muebles después. Cotizá con tiempo para sumarlo a tu presupuesto.</p>
      <p>👉 <a href="https://www.qxm.com.ar/pedido/nuevo" target="_blank" rel="noopener noreferrer"><span class="text-blue-500 font-bold">Conseguí flete + ayuda</span></a></p>

      <h3>7. ¿Hay cosas que querés renovar o adaptar?</h3>
      <p>¿Te gustaría cambiar los pisos? ¿Hacer una ampliación? ¿Modificar algo de la estructura? Antes de gastar en materiales o contratar a alguien, es clave dejarlo todo en claro con el dueño o la inmobiliaria.</p>
      <p>Ahora, si ya tenés el visto bueno, en Quién Por Mí encontrás albañiles, maestros mayores de obra y especialistas que pueden ayudarte a hacerlo bien desde el principio.</p>
      <p>👉 <a href="https://www.qxm.com.ar/pedido/nuevo" target="_blank" rel="noopener noreferrer"><span class="text-blue-500 font-bold">Pedí presupuesto para reformas o ampliaciones acá</span></a></p>

      <p><b>Mudarte puede ser más fácil (y más barato)</b></p>
      <p>La clave está en anticiparse. Hacer estas preguntas y resolverlas a tiempo no solo te evita gastos innecesarios, también te da tranquilidad. Y si ya estás en plena mudanza o recién llegás, no estás solo: en Quién Por Mí conectás rápido con personas reales que pueden ayudarte a resolver lo que necesitás en tu hogar.</p>
      <p>👉 <a href="https://www.qxm.com.ar/" target="_blank" rel="noopener noreferrer"><span class="text-blue-500 font-bold">Entrá ahora a qxm.com.ar y encontrá ayuda cerca tuyo.</span></a></p>
    `,
    author: "Ana Martínez",
    category: "Reformas",
    image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&h=400&fit=crop",
    featured: false
  },
  {
    id: 4,
    title: "Jardinería Urbana: Espacios Verdes en Casa",
    excerpt: "Cómo crear y mantener un jardín en espacios reducidos urbanos.",
    content: "",
    author: "Luis Fernández",
    category: "Jardinería",
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&h=400&fit-crop",
    featured: false
  },
  {
    id: 5,
    title: "Instalaciones Eléctricas: Seguridad Primero",
    excerpt: "Guía esencial sobre seguridad eléctrica en el hogar y cuándo llamar a un profesional.",
    content: "",
    author: "Roberto Silva",
    category: "Electricidad",
    image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=800&h=400&fit-crop",
    featured: false
  },
  {
    id: 6,
    title: "Beneficios de instalar paneles solares en tu casa",
    excerpt: "Conoce las ventajas económicas y ambientales de la energía solar para tu hogar.",
    content: "<p>Contenido sobre paneles solares...</p>",
    author: "Pedro López",
    category: "Electricidad",
    image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=800&h=400&fit-crop",
    featured: false
  },
  {
    id: 7,
    title: "Consejos para mantener tu piscina impecable todo el año",
    excerpt: "Desde el filtrado hasta los químicos, una guía completa para el cuidado de tu piscina.",
    content: "<p>Contenido sobre mantenimiento de piscinas...</p>",
    author: "Mariana Díaz",
        category: "Mantenimiento",
    image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=800&h=400&fit-crop",
    featured: false
  },
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
    <div className="bg-white rounded-lg shadow-[0px_1px_3px_1px_rgba(0,0,0,0.05)] overflow-hidden mb-8">
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
    <div className="bg-white rounded-lg shadow-[0px_1px_3px_1px_rgba(0,0,0,0.05)]  overflow-hidden h-full h">
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
          
        </div>
      </div>
    </div>
  );
}

// Sidebar con estilo QXM
function BlogSidebar({ onCategorySelect, selectedCategory }: { onCategorySelect: (categoryName: string | null) => void; selectedCategory: string | null }) {
  const popularPosts: BlogPost[] = blogPosts.slice(0, 5);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleSelectAndClose = (categoryName: string | null) => {
    onCategorySelect(categoryName);
    setIsDropdownOpen(false); // Cierra el dropdown al seleccionar
  };

  return (
    <div className="space-y-6">
      {/* Categorías (Dropdown para mobile, lista para desktop) */}
      <div className="bg-white rounded-lg shadow-[0px_1px_3px_1px_rgba(0,0,0,0.05)]">
        {/* Este div será el botón del dropdown en mobile */}
        <div 
          className="flex items-center justify-between p-4 border-b border-gray-100 md:hidden cursor-pointer"
          onClick={toggleDropdown}
        >
          <h3 className="font-['Barlow:SemiBold',_sans-serif] text-lg text-[#0d4676]">
            Categorías
          </h3>
          <ChevronDown className={`w-5 h-5 text-[#0d4676] transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
        </div>

        {/* Contenido del dropdown - visible en mobile si está abierto, siempre en desktop */}
        <div className={`${isDropdownOpen ? 'block' : 'hidden'} md:block`}>
          <div className="px-4 py-4 hidden md:block border-b border-gray-100">
            <h3 className="font-['Barlow:SemiBold',_sans-serif] text-lg text-[#0d4676]">Categorías</h3>
          </div>
          <div className="p-4">
            <div className="space-y-2">
              {/* Botón "Todas las categorías" */}
              <div
                onClick={() => handleSelectAndClose(null)}
                className={`flex items-center justify-between p-3 rounded-lg hover:bg-[#f7f8fc] transition-colors cursor-pointer
                  ${selectedCategory === null ? 'bg-[#e2f1ff] text-[#0095ff]' : ''}
                `}
              >
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-gray-400"></div>
                  <span className="font-['Barlow:Medium',_sans-serif]">Todas las categorías</span>
                </div>
                <span className="bg-[#ebedf2] text-[#7d8491] px-2 py-1 rounded-full font-['Barlow:Regular',_sans-serif] text-xs">
                  {blogPosts.length}
                </span>
              </div>

              {categories.map((category: Category, index: number) => (
                <div
                  key={index}
                  onClick={() => handleSelectAndClose(category.name)}
                  className={`flex items-center justify-between p-3 rounded-lg hover:bg-[#f7f8fc] transition-colors cursor-pointer
                    ${selectedCategory === category.name ? 'bg-[#e2f1ff] text-[#0095ff]' : ''}
                  `}
                >
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: category.color }}></div>
                    <span className="font-['Barlow:Medium',_sans-serif] text-[#5c6474]">{category.name}</span>
                  </div>
                  <span className="bg-[#ebedf2] text-[#7d8491] px-2 py-1 rounded-full font-['Barlow:Regular',_sans-serif] text-xs">
                    {blogPosts.filter(post => post.category === category.name).length}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Posts más leídos */}
      <div className="bg-white rounded-lg shadow-[0px_1px_3px_1px_rgba(0,0,0,0.05)]">
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
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Newsletter QXM VER QUE HACEMOS CON ESTA SECCION
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
      </div>*/}
    </div>
  );
}

// Vista de post individual
function PostView({ post, onBack }: { post: BlogPost; onBack: () => void }) { // Definidos los tipos para 'post' y 'onBack'
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 pt-[130px]">
      <button 
        onClick={onBack}
        className="flex items-center gap-2 text-[#7d8491] hover:text-[#0095ff] transition-colors mb-6 px-3 py-2 rounded-lg hover:bg-[#f7f8fc] font-['Barlow:Medium',_sans-serif]"
      >
        <ArrowLeft className="w-4 h-4" />
        Volver al blog
      </button>
      
      <article className="bg-white rounded-lg shadow-[0px_1px_3px_1px_rgba(0,0,0,0.05)] border border-gray-100 overflow-hidden">
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
              </div>
            </div>
            
            <div className="flex items-center gap-4 text-[#7d8491]">
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
      <div className="pt-16 pb-14"> {/* Elimina px-0, lo manejaremos en el div interno */}
        <div className="max-w-7xl mx-auto px-4 sm:px-4 lg:px-6 flex flex-col md:flex-row items-start justify-between"> {/* <-- CAMBIADO AQUÍ */}
          <div className="flex items-center gap-3 mb-6 md:mb-0">
            <img src={qxmLogoFooter} alt="QXM Logo Footer" className="h-[38px] w-auto object-contain" />
          </div>

          <div className="ml-auto">
        <ul className="space-y-3 font-['Barlow:Regular',_sans-serif] text-md text-[#d5d4ed] text-right">
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
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  // Nuevo estado para la categoría seleccionada: null significa "Todas"
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  

  const postsPerPage = 2; // Cantidad de notas por página (excluyendo el destacado)

  // Primero, filtra los posts basándose en la categoría seleccionada
  const filteredPosts = selectedCategory
    ? blogPosts.filter(post => post.category === selectedCategory)
    : blogPosts;

  // Luego, separa el post destacado (si aplica) del resto de los posts filtrados
  const featuredPost: BlogPost | undefined = filteredPosts.find(post => post.featured);
  // Los 'otherPosts' son ahora los posts filtrados, excluyendo el destacado si está presente
  const otherPosts: BlogPost[] = filteredPosts.filter(post => !post.featured);

  // Lógica para obtener los posts a mostrar en la página actual para la categoría filtrada
  const startIndex = (currentPage - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  const currentPaginatedPosts = otherPosts.slice(startIndex, endIndex);

  // Calcula el total de páginas para las "otras notas" de la categoría filtrada
  const totalPages = Math.ceil(otherPosts.length / postsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Nueva función para manejar la selección de categoría
  const handleCategorySelect = (categoryName: string | null) => {
    setSelectedCategory(categoryName);
    setCurrentPage(1); // Resetear a la primera página cuando se cambia de categoría
    setSelectedPost(null); // Asegurarse de que no haya un post individual seleccionado
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Desplazar al inicio
  };


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
            {/* Artículo destacado (solo se muestra en la primera página y si no hay categoría seleccionada o si el destacado pertenece a la categoría seleccionada) */}
            {currentPage === 1 && featuredPost && (selectedCategory === null || featuredPost.category === selectedCategory) && (
              <div onClick={() => setSelectedPost(featuredPost)} className="cursor-pointer">
                <FeaturedPost post={featuredPost} />
              </div>
            )}
            {/* Mensaje si no hay posts para la categoría seleccionada (y no es la primera página con destacado) */}
            {currentPaginatedPosts.length === 0 && (!featuredPost || currentPage !== 1) && (
                <p className="text-gray-600 text-center py-10">No hay entradas disponibles para la categoría seleccionada.</p>
            )}

            {/* Entradas recientes (ahora paginadas y filtradas por categoría) */}
            {currentPaginatedPosts.length > 0 && (
                <div>
                    <h2 className="font-['Barlow:SemiBold',_sans-serif] text-2xl text-[#0d4676] mb-6">
                        {selectedCategory ? `Notas de ${selectedCategory}` : 'Entradas Recientes'}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {currentPaginatedPosts.map((post: BlogPost) => (
                            <div key={post.id} onClick={() => setSelectedPost(post)} className="cursor-pointer">
                                <PostCard post={post} />
                            </div>
                        ))}
                    </div>
                </div>
            )}


            {/* Paginador (solo si hay más de una página de posts filtrados) */}
            {totalPages > 1 && currentPaginatedPosts.length > 0 && (
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
              />
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <BlogSidebar
              onCategorySelect={handleCategorySelect} // Pasamos la función al Sidebar
              selectedCategory={selectedCategory} // Pasamos la categoría seleccionada al Sidebar
            />
          </div>
        </div>
      </main>

      <BlogFooter />
    </div>
  );
}
