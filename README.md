# 🟡 Despensas Sumifénix — Catálogo Interactivo

> Catálogo digital diseñado para convertir visitantes en solicitudes de cotización vía WhatsApp.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)

---

## 📋 Descripción

Página web oficial de **Despensas Sumifénix**, empresa mexicana especializada en:

- 🛒 Despensas empresariales
- 🎄 Arcones navideños
- 🎁 Canastas corporativas
- ✨ Regalos corporativos personalizados

**No es una tienda en línea.** Es un catálogo interactivo con sistema de cotización integrado que redirige directamente a WhatsApp con un mensaje pre-formateado listo para enviar.

---

## 🚀 Características

| Característica | Detalle |
|---|---|
| **Mi Cotización** | Drawer lateral para armar lista de productos con cantidades |
| **WhatsApp Directo** | Mensaje pre-formateado con los productos seleccionados |
| **Filtros de Categoría** | Chips interactivos para filtrar productos |
| **Modal de Detalle** | Vista completa del contenido de cada producto |
| **FAQ Accordion** | Preguntas frecuentes con apertura/cierre animado |
| **Responsive** | Mobile-first, adaptado a todos los dispositivos |
| **Accesible** | ARIA labels, navegación por teclado, reducción de movimiento |
| **Animaciones** | Reveal on scroll, micro-interacciones, transiciones suaves |

---

## 🛠 Tecnologías

- **HTML5** semántico
- **CSS3** con Custom Properties (variables), Grid, Flexbox, `clamp()`
- **JavaScript** Vanilla (ES6+) — sin dependencias externas

---

## 📁 Estructura

```
despensassumielfenix/
├── index.html      # Estructura HTML completa
├── style.css       # Design system + componentes + responsive
├── script.js       # Lógica de interacción + estado + WhatsApp
├── assets/         # Imágenes (hero, productos)
├── .gitignore
└── README.md
```

---

## ⚙️ Configuración

### Número de WhatsApp

Edita `script.js` línea 27 y reemplaza con tu número real:

```js
const CONFIG = {
  whatsappNumber: '521XXXXXXXXXX', // ← Tu número aquí
};
```

**Formato:** código de país + número, sin guiones ni espacios.  
**Ejemplo México:** `5213312345678`

---

## 🖥 Uso Local

1. Clona el repositorio:
   ```bash
   git clone https://github.com/brufuenram-glitch/despensassumielfenix.git
   ```
2. Abre `index.html` en tu navegador.

No requiere servidor, bundler ni instalación de dependencias.

---

## 📄 Licencia

© 2026 Despensas Sumifénix. Todos los derechos reservados.
