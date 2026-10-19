/**
 * PORTAFOLIO PROFESIONAL - JUAN JOSÉ RESTREPO ÁLVAREZ
 * Lógica interactiva en JavaScript Vanilla
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Inicializar año dinámico en el footer
  const yearElement = document.getElementById('currentYear');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // 2. Control de Modo Oscuro / Modo Claro (Theme Switcher)
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  const themeIcon = document.getElementById('themeIcon');
  const htmlRoot = document.documentElement;

  // Cargar preferencia guardada o por defecto 'dark'
  const savedTheme = localStorage.getItem('theme-preference') || 'dark';
  applyTheme(savedTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const currentTheme = htmlRoot.getAttribute('data-bs-theme');
      const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
      applyTheme(nextTheme);
    });
  }

  function applyTheme(theme) {
    htmlRoot.setAttribute('data-bs-theme', theme);
    localStorage.setItem('theme-preference', theme);

    if (themeIcon) {
      if (theme === 'dark') {
        themeIcon.classList.replace('bi-moon-stars-fill', 'bi-sun-fill');
      } else {
        themeIcon.classList.replace('bi-sun-fill', 'bi-moon-stars-fill');
      }
    }
  }

  // 3. Botón "Volver Arriba" (Back To Top)
  const backToTopBtn = document.getElementById('backToTopBtn');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 350) {
      backToTopBtn.classList.add('show');
    } else {
      backToTopBtn.classList.remove('show');
    }
  });

  // 4. Cerrar menú móvil al hacer clic en un enlace de navegación
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
  const navbarCollapse = document.getElementById('navbarContent');
  const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse) || new bootstrap.Collapse(navbarCollapse, { toggle: false });

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (navbarCollapse.classList.contains('show')) {
        bsCollapse.hide();
      }
    });
  });

  // 5. Demostración interactiva: Calculadora de Interés Compuesto
  const btnRunCalc = document.getElementById('btnRunCalculation');
  if (btnRunCalc) {
    btnRunCalc.addEventListener('click', () => {
      const capital = parseFloat(document.getElementById('calcCapital').value) || 0;
      const rate = (parseFloat(document.getElementById('calcRate').value) || 0) / 100;
      const years = parseFloat(document.getElementById('calcYears').value) || 0;

      if (capital <= 0 || years <= 0) {
        alert('Por favor ingresa un capital y un número de años válidos.');
        return;
      }

      // Fórmula de interés compuesto: A = P * (1 + r)^t
      const finalAmount = capital * Math.pow((1 + rate), years);
      const netGain = finalAmount - capital;

      const resultBox = document.getElementById('calcResultBox');
      const finalElem = document.getElementById('calcFinalAmount');
      const gainElem = document.getElementById('calcInterestGained');

      const formatter = new Intl.NumberFormat('es-CO', {
        style: 'currency',
        currency: 'COP',
        maximumFractionDigits: 0
      });

      finalElem.textContent = formatter.format(finalAmount);
      gainElem.textContent = `Ganancia neta generada: ${formatter.format(netGain)} (+${((netGain / capital) * 100).toFixed(1)}%)`;
      resultBox.classList.remove('d-none');
    });
  }
});

// 6. Manejador de envío del formulario de contacto
function handleContactSubmit(event) {
  event.preventDefault();
  
  const name = document.getElementById('senderName').value.trim();
  const email = document.getElementById('senderEmail').value.trim();
  const subject = document.getElementById('senderSubject').value.trim();
  const message = document.getElementById('senderMessage').value.trim();

  if (!name || !email || !message) {
    return;
  }

  // Preparar enlace de correo tipo mailto seguro
  const mailtoUrl = `mailto:juanjoserestrepo962@gmail.com?subject=${encodeURIComponent('[Portafolio Web] ' + subject)}&body=${encodeURIComponent(
    `Hola Juan José,\n\nMi nombre es: ${name}\nCorreo de contacto: ${email}\n\nMensaje:\n${message}\n\n--\nEnviado desde tu portafolio web profesional.`
  )}`;

  // Mostrar mensaje de confirmación
  const successAlert = document.getElementById('contactSuccessAlert');
  if (successAlert) {
    successAlert.classList.remove('d-none');
  }

  // Abrir cliente de correo
  window.location.href = mailtoUrl;

  // Limpiar formulario tras unos segundos
  setTimeout(() => {
    document.getElementById('contactForm').reset();
  }, 1000);
}
