# 🌐 Portafolio Personal — Jesús Pérez

<div align="center">

![Estado](https://img.shields.io/badge/estado-activo-2ecc71?style=flat-square)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![GitHub Pages](https://img.shields.io/badge/Deploy-GitHub%20Pages-181717?style=flat-square&logo=github)

**Portafolio personal con estilo visual "Dadá": asimétrico, colorido y con personalidad.**

[🌐 Ver en vivo](https://efaxtower.github.io/jp_dada_portafolio/) · [📄 CV](https://efaxtower.github.io/jp_dada_portafolio/cv.html) · [📫 Contacto](https://efaxtower.github.io/jp_dada_portafolio/#contacto)

</div>

---

## 🎯 Sobre este proyecto

Este es mi portafolio personal como **Desarrollador Web y aprendiz de infraestructura**.

Más que una landing page, es una muestra de lo que sé hacer: **HTML, CSS y JavaScript puro**, sin frameworks, sin build tools, sin dependencias pesadas. Todo lo que ves aquí está hecho a mano.

### ¿Por qué "Dadá"?

Porque quería un portafolio que **no se pareciera a los demás**. Los portafolios de desarrolladores suelen ser todos iguales: fondo oscuro, cards minimalistas, tipografía Inter, mucho espacio vacío. Yo quise algo con **personalidad, color y un poco de caos controlado**.

El estilo Dadá (asimetría, rotaciones sutiles, sombras desplazadas, colores vibrantes) es mi firma visual. Pero el **contenido es serio**: proyectos reales en producción, stack técnico honesto y una trayectoria clara.

---

## ✨ Características

- 🎨 **Diseño Dadá**: asimetría controlada, rotaciones sutiles, sombras desplazadas
- 🌗 **Modo claro / oscuro** con persistencia en `localStorage`
- 📱 **100% responsive** (móvil, tablet, escritorio)
- ♿ **Accesibilidad básica**: `aria-label`, `focus-visible`, `prefers-reduced-motion`
- 🔍 **SEO**: meta description, Open Graph, Twitter Cards, sitemap, robots.txt
- 🎠 **Carrusel** de proyectos con auto-play y controles manuales
- 🖼️ **Lightbox** para diagramas de arquitectura
- 🚫 **Página 404** personalizada
- ⚡ **Sin frameworks**: HTML, CSS y JS vanilla

---

## 📁 Estructura del proyecto

```
jp_dada_portafolio/
├── index.html              # Página principal (hero, skills, timeline, contacto)
├── proyectos.html          # Galería de proyectos
├── servidores.html         # Detalle de infraestructura
├── cv.html                 # CV en formato web (imprimible)
├── 404.html                # Página de error personalizada
├── robots.txt              # Configuración para buscadores
├── sitemap.xml             # Mapa del sitio
├── cv-jesus-perez.pdf      # CV descargable
│
├── css/
│   └── style.css           # Estilos globales (variables CSS, Dadá, dark mode)
│
├── js/
│   └── main.js             # Tema, carrusel, lightbox, scroll suave
│
└── images/
    ├── perfil.jpg
    ├── sindromerchado.png
    ├── sindromerchado-arquitectura.png
    ├── panaderia.png
    ├── beep-jesus.png
    ├── dra-victoria.png
    ├── diseno.png
    └── servidor.jpg
```

## 🛠️ Stack técnico

| Tecnología | Uso |
|---|---|
| **HTML5** | Estructura semántica |
| **CSS3** | Variables CSS, Grid, Flexbox, animaciones |
| **JavaScript** | Vanilla, sin frameworks ni librerías |
| **Font Awesome 6** | Iconografía |
| **Google Fonts** | Space Grotesk (portafolio) e Inter (CV) |
| **Animate.css** | Animaciones de entrada |
| **GitHub Pages** | Hosting estático |

**Cero dependencias de build.** No hay `npm install`, no hay Webpack, no hay nada que compilar.

---

## 🎨 Sistema de diseño

El portafolio usa **variables CSS** para mantener coherencia y permitir el modo oscuro.

### Paleta Dadá

```css
--dada-green:  #2ecc71  /* Acento principal */
--dada-pink:   #ff6b9d  /* Acento secundario */
--dada-yellow: #f7dc6f  /* Detalles */
--dada-orange: #f39c12  /* Acentos cálidos */
--dada-purple: #9b59b6  /* Acentos fríos */
```

### Componentes clave

- `.dada-card` → tarjetas con sombra desplazada y rotación
- `.dada-btn` → botones con bordes gruesos y hover desplazado
- `.badge-*` → etiquetas de estado (privado, público, producción)
- `.section-header` → cabecera de cada sección con `section-tag`

---

## 📋 Páginas

### `index.html`
- Hero con presentación y redes
- Carrusel de proyectos destacados
- Sobre mí (4 tarjetas)
- **Habilidades** con tabla de niveles
- **Timeline** de evolución (2024 → 2026)
- Contacto (redirige a Google Forms)

### `proyectos.html`
- Galería completa de proyectos
- Badges de estado (producción / privado / público)
- Lightbox para el diagrama de arquitectura de SindroMerchado

### `servidores.html`
- Detalle del servidor LAMP + Samba + Cockpit
- Flujo de trabajo visual (Windows → Samba → Linux → Apache)
- Listas de "lo que sé" y "lo que estoy aprendiendo"

### `cv.html`
- CV en formato web
- Optimizado para impresión (botón "Descargar PDF")
- Estilo limpio (diferente al portafolio, para no distraer)

---

## 🎯 Proyectos destacados

| Proyecto | Estado | Stack |
|---|---|---|
| **Sistema de Panadería** | ✅ En producción | PHP · MySQL · CRUD |
| **Dra. Victoria** | ✅ En producción | HTML · CSS · JavaScript |
| **SindroMerchado** | 🚧 68% completado | PHP · Microservicios · API Gateway |
| **Beep Jesus Pro v3.0.1** | 🌐 Público | Bash · Linux · MIDI |
| **Servidor LAMP + Samba** | 🖥️ Activo | Linux · Apache · Samba · Cockpit |
| **Guía de Estilos** | 🔒 Personal | HTML · CSS |

---

## 🌗 Modo oscuro

El portafolio detecta tu preferencia guardada en `localStorage`. Si no hay preferencia, usa el modo claro por defecto.

El botón de tema está en el navbar (icono de luna/sol). Cambia entre modos y **guarda tu elección**.

Para añadir un componente nuevo compatible con modo oscuro, usa las variables CSS:

```css
.mi-componente {
    background: var(--bg-card);
    color: var(--text-primary);
    border: 4px solid var(--text-primary);
    box-shadow: var(--shadow-dada);
}
```

Nunca uses colores hardcodeados (`#fff`, `#000`) porque romperás el modo oscuro.

---

## ♿ Accesibilidad

- Todos los botones tienen `aria-label`
- Todas las imágenes tienen `alt` descriptivo
- Navegación por teclado con `:focus-visible` visible
- Respeta `prefers-reduced-motion` (desactiva animaciones si el usuario lo pide)
- Enlaces externos usan `rel="noopener"`

---

## 🚀 Deploy

El sitio estará disponible en `https://efaxtower.github.io/jp_dada_portafolio/`.

## 📈 Roadmap

- [x] Diseño Dadá base
- [x] Modo claro / oscuro
- [x] Responsive completo
- [x] SEO + Open Graph
- [x] Sección de habilidades con niveles
- [x] Timeline de evolución
- [x] Lightbox para diagramas
- [x] Página 404 personalizada
- [ ] Capturas reales de cada proyecto
- [ ] Sección de testimonios
- [ ] Versión en inglés (`/en/`)
- [ ] Blog o sección de "Notas"
- [ ] Dominio propio
- [ ] PWA (`manifest.json` + service worker)

---

## 📬 Contacto

- 🌐 **Portafolio**: [efaxtower.github.io/jp_dada_portafolio](https://efaxtower.github.io/jp_dada_portafolio/)
- 💻 **GitHub**: [@efaxtower](https://github.com/efaxtower)
- 💼 **LinkedIn**: [Jesús Pérez](https://www.linkedin.com/in/jes%C3%BAs-p%C3%A9rez-084424435/)
- 📧 **Formulario**: [Google Forms](https://forms.gle/QAihPT8mAGCK59KF9)

---

## 📄 Licencia

Este proyecto es de uso personal. El código es abierto para inspiración, pero **el contenido (textos, imágenes, proyectos) es propiedad de Jesús Pérez**.

Si quieres usar el diseño como base para tu portafolio, siéntete libre de hacerlo, pero **cambia el contenido** para que sea tuyo.

---

<div align="center">

**Hecho con ❤️ desde Venezuela**

*"No necesito ser el mejor. Solo necesito ser mejor que ayer."*

</div>
