import Header from './components/Header'; // Importa el componente Header
import React from 'react'; // Necesitas React si usas JSX, aunque no uses useState

function App() {
  return (
    // Puedes mantener un contenedor principal si quieres, o directamente <Header />
    <div className="min-h-screen bg-gray-50">
      <Header /> {/* Aquí se renderiza el componente Header */}

      {/* Este es el contenido principal de tu aplicación, que puedes ir construyendo */}
      {/* Por ahora, lo dejamos vacío o con un mensaje simple */}
      <main className="container mx-auto p-8 pt-20">
        <p className="text-center text-gray-600">Contenido principal de tu blog...</p>
      </main>
    </div>
  );
}

export default App;