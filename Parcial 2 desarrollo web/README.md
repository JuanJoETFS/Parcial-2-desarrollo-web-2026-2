# Portafolio Profesional - Parcial 2 Desarrollo Web

**Estudiante:** Juan José Restrepo Álvarez  
**Asignatura:** Desarrollo Web  
**Programa:** Ingeniería Informática (4° Semestre)  
**Institución:** Corporación Universitaria Lasallista  
**Docente:** Néstor Vélez Vargas  
**GitHub:** [@JuanJoETFS](https://github.com/JuanJoETFS)  

---

## 🚀 Enlaces del Proyecto
* **Repositorio de GitHub:** `https://github.com/JuanJoETFS/parcial2-desarrollo-web` *(o el nombre asignado al crear el repo)*
* **Sitio Web Desplegado (GitHub Pages):** `https://juanjoetfs.github.io/parcial2-desarrollo-web/`

---

## 📋 Cumplimiento de la Rúbrica de Evaluación

### 1. (1.0) Framework Responsive: Bootstrap 5
* Implementado con **Bootstrap 5.3.3** a través de CDN oficial.
* Sistema de rejilla (`row`, `col-12`, `col-md-6`, `col-lg-4`, `col-lg-6`, etc.) para una adaptación fluida a cualquier dispositivo.
* Componentes nativos utilizados:
  * Navbar responsivo con colapso tipo hamburguesa para dispositivos móviles.
  * Tarjetas (`card`), badges de estado y etiquetas de tecnologías.
  * Barras de progreso (`progress`, `progress-bar`) para niveles de habilidad.
  * Modal interactivo (`modal`) para la demostración de la calculadora cuantitativa.
  * Sistema de temas Dark/Light integrado con `data-bs-theme`.

### 2. (3.0) Secciones Requeridas y Visualización Multi-pantalla
El sitio web está completamente adaptado para **pantallas pequeñas (móviles < 576px), medianas (tablets 768px - 991px) y grandes (desktops > 992px)**, cumpliendo con cada sección:

* **a. Información Personal (`#informacion-personal`):**
  * Presentación de Juan José Restrepo Álvarez como estudiante de Ingeniería Informática.
  * Biografía profesional destacando su pasión por la tecnología y su meta de consolidarse como **QUANT (Analista Cuantitativo)** en los mercados financieros.
  * Datos de contacto: correo (`juanjoserestrepo962@gmail.com`), teléfono/WhatsApp (`+57 305 323 0190`), GitHub (`JuanJoETFS`) y ubicación (Antioquia, Colombia).
* **b. Estudios Realizados (`#estudios`):**
  * Pregrado en curso: **Ingeniería Informática - Corporación Universitaria Lasallista (4° Semestre)**.
  * Idioma: **Inglés nivel B2 (Upper-Intermediate)** bajo el Marco Común Europeo.
  * Formación continua y autodidacta en fundamentos cuantitativos, matemáticas y desarrollo web.
* **c. Proyectos en los que ha participado / Experiencia (`#proyectos`):**
  * **Portafolio Web Profesional Responsive:** Proyecto frontend con HTML5, CSS3, Bootstrap 5 y JavaScript.
  * **Quant Simulator & Financial Analysis:** Prototipo académico en Python para cálculo de retornos, volatilidad y series temporales de activos financieros.
  * **Calculadora de Interés Compuesto & Proyecciones:** Herramienta interactiva con simulación en tiempo real mediante ventana modal (`modal`).
* **d. Lenguajes de Programación que Domina (`#lenguajes`):**
  * **Python:** Sintaxis, lógica y librerías básicas orientadas a análisis numérico y finanzas cuantitativas.
  * **HTML5 & CSS3:** Maquetación semántica moderna, flexbox, CSS grid y diseño responsive.
  * **JavaScript:** Lógica de cliente, interactividad del DOM y cálculos financieros en frontend.
  * **SQL & Bases de Datos:** Consultas relacionales y modelado de datos.
  * Herramientas de soporte: Bootstrap 5, Git, GitHub, VS Code e inglés técnico.
* **e. Áreas de Interés Profesional (`#intereses`):**
  * **Finanzas Cuantitativas (QUANT):** Algoritmos de trading, valoración de activos y modelos estadísticos de mercado.
  * **Economía y Dinámica de Mercados:** Macroeconomía, políticas monetarias y ciclos de capital.
  * **Data Science & Machine Learning:** Modelos de regresión, backtesting riguroso y análisis predictivo.
  * **Desarrollo Web & Arquitectura de Software:** Construcción de interfaces funcionales, dashboards y aplicaciones distribuidas.

### 3. (1.0) Subida a GitHub y Despliegue en GitHub Pages
Estructura completamente lista para ser servida de forma estática en GitHub Pages (`index.html` en la raíz).

---

## 🛠️ Estructura del Código

```text
├── index.html          # Estructura semántica completa (HTML5 + Bootstrap 5)
├── css/
│   └── style.css       # Estilos personalizados, variables, temas y animaciones
├── js/
│   └── main.js         # Lógica interactiva (Modo claro/oscuro, calculadora, navbar móvil)
└── README.md           # Documentación académica del proyecto
```

---

## 📦 Instrucciones para Desplegar en GitHub Pages

1. Abre tu terminal o consola en la carpeta del proyecto.
2. Inicializa git y crea el commit inicial:
   ```bash
   git init
   git add .
   git commit -m "feat: portafolio profesional responsive - parcial 2 desarrollo web"
   git branch -M main
   ```
3. Crea un repositorio público en [GitHub](https://github.com/new) llamado `parcial2-desarrollo-web`.
4. Vincula y sube los cambios:
   ```bash
   git remote add origin https://github.com/JuanJoETFS/parcial2-desarrollo-web.git
   git push -u origin main
   ```
5. En GitHub, ve a **Settings** > **Pages**:
   * En **Source**, selecciona `Deploy from a branch`.
   * En **Branch**, selecciona `main` y la carpeta `/(root)`.
   * Haz clic en **Save**.
6. En un par de minutos tu sitio estará en vivo en:
   `https://juanjoetfs.github.io/parcial2-desarrollo-web/`

---

## ✉️ Formato de Envío al Docente

* **Destinatario:** `nvelez@unilasallista.edu.co`
* **Asunto:** `Parcial 2 Desarrollo Web - Juan José Restrepo Álvarez`
* **Cuerpo sugerido:**
  > Estimado docente Néstor Vélez Vargas,
  > 
  > Envío la entrega correspondiente al Parcial 2 de Desarrollo Web:
  > * **Estudiante:** Juan José Restrepo Álvarez
  > * **Código / Programa:** Ingeniería Informática (4to semestre)
  > * **Enlace del repositorio GitHub:** https://github.com/JuanJoETFS/parcial2-desarrollo-web
  > * **Enlace del sitio desplegado (GitHub Pages):** https://juanjoetfs.github.io/parcial2-desarrollo-web/
  > 
  > Quedo atento a su retroalimentación.
  > 
  > Atentamente,  
  > **Juan José Restrepo Álvarez**
