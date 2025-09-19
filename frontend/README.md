📖 FranTech Store

Pequeño e-commerce de ejemplo hecho con React, usando React Router DOM, Context API y Tailwind CSS.
La app simula un catálogo de productos que se cargan desde un mock y se organizan por categorías.

🚀 Tecnologías usadas
⚛️ React

Framework principal para construir la interfaz. Permite dividir la app en componentes reutilizables como Navbar, CategoriesCard, ProductsCard.

🌐 React Router DOM

Manejador de rutas en la SPA. Gracias a esto, la app tiene distintas páginas:

/ → Home con las categorías.

/productos/televisores → Lista de TVs.

/productos/laptops → Lista de laptops.

/productos/smartphones → Lista de smartphones.

Justificación: mantiene la experiencia de Single Page Application sin recargar la página.

📦 Context API

Sistema de estado global que evita el "prop drilling" (pasar props de componente en componente).
En este caso se usa ProductContext para:

Guardar todos los productos (mock).

Compartirlos con cualquier página o componente que los necesite.

Centralizar la lógica de carga (simulada con useEffect).

🎨 Tailwind CSS

Framework de utilidades para CSS. Permite diseñar rápido con clases.
Justificación: acelera el prototipado y mantiene los estilos consistentes.

🧪 Mock de productos

Los datos se guardan en mocks/products.js. Se cargan con un useEffect en el ProductProvider para simular una API real.

✅ Justificación de decisiones

Context API: suficiente para un proyecto chico → no hace falta Redux ni Zustand.

React Router DOM: permite estructurar la app como un e-commerce real.

Mock + useEffect: prepara el terreno para reemplazar fácilmente con un fetch real a una API.

Tailwind: mantiene el código rápido y limpio, ideal para prototipar.

Arquitectura modular (components / pages / context): escalable y fácil de mantener.