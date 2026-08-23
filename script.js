/* ═══════════════════════════════════════════════════════════════
   DESPENSAS SUMIFÉNIX — script.js
   Vanilla JS (ES6+) · No dependencies
   ─────────────────────────────────────────────────────────────
   Módulos:
   1. Config (WhatsApp number, product data)
   2. Mi Cotización (state management)
   3. Quote Drawer (UI)
   4. WhatsApp Message Builder
   5. Header (scroll behavior)
   6. Mobile Menu
   7. Product Filters
   8. FAQ Accordion
   9. Intersection Observer (reveal animations)
   10. Product Detail Modal
   11. Init
═══════════════════════════════════════════════════════════════ */

'use strict';

/* ─── 1. CONFIG ──────────────────────────────────────────────
   Número oficial de WhatsApp: +52 56 1195 6294
   Constante global — todos los botones usan este número.
─────────────────────────────────────────────────────────────── */
const WHATSAPP_NUMBER = '5215611956294';

const CONFIG = {
  whatsappNumber: WHATSAPP_NUMBER,

  products: {
    'despensa-clasica': {
      id:          'despensa-clasica',
      name:        'Despensa Emergencia',
      category:    'Despensas',
      description: 'Despensa con 11 productos de primera necesidad. Incluye papel higiénico, atún, frijoles, mayonesa, galletas y más. Perfecta para apoyar y reconocer a tus colaboradores.',
      items: [
        'Papel higiénico',
        'Frijoles negros refritos',
        'Chocolate de mesa Morelia',
        'Leche Alpura Vaquitas',
        'Bebida Boing!',
        'Galletas Crackets',
        'Atún en agua x2 latas',
        'Mayonesa La Costeña',
        'Ensalada de verduras',
        'Chiles jalapeños',
      ],
    },
    'despensa-excelencia': {
      id:          'despensa-excelencia',
      name:        'Despensa Excelencia',
      category:    'Despensas',
      description: 'Despensa con 12 productos de primera necesidad. Incluye atún, galletas, mayonesa, café, chocolate, papel higiénico y más. Perfecta para apoyar y reconocer a tus colaboradores.',
      items: [
        '1 Galletas saladas Crackets 135 g.',
        '1 Ensalada de verduras La Costeña 220 g.',
        '1 Mayonesa La Costeña 105 g.',
        '1 Café de grano Legal 28 g.',
        '1 Bebida en polvo Tang 11 g.',
        '2 Chocolate en polvo Choco Milk 18 g.',
        '1 Papel higiénico Pétalo (4 rollos).',
        '1 Chiles en rajas La Costeña 220 g.',
        '2 Atún Tuny 140 g.',
        '1 Empaque bolsa (1 pieza).'
      ],
    },
    'despensa-resiliencia': {
      id:          'despensa-resiliencia',
      name:        'Despensa Resiliencia',
      category:    'Despensas',
      description: 'Despensa con 22 productos de primera necesidad. Incluye arroz, frijoles, aceite, atún, café, cereal, papel higiénico y más. Perfecta para apoyar y reconocer a tus colaboradores.',
      items: [
        '1 Aceite vegetal Cristal 500 ml.',
        '1 Arroz Abeto 500 g.',
        '1 Frijol Abeto 500 g.',
        '1 Atún Tuny 140 g.',
        '1 Ensalada de verduras Clemente Jacques 220 g.',
        '1 Chiles en vinagre Clemente Jacques 220 g.',
        '1 Gelatina en polvo D\'Gari 120 g.',
        '1 Flan en polvo D\'Gari 120 g.',
        '1 Jabón para trastes Salvo 215 g.',
        '2 Pastas para espagueti La Moderna 200 g.',
        '1 Cereal Zucaritas Kellogg\'s 125 g.',
        '1 Néctar de frutas Boing 125 ml.',
        '2 Cubos de caldo de pollo Knorr 10.5 g c/u.',
        '1 Chocolate en polvo Choco Milk 18 g.',
        '1 Café de grano Legal 28 g.',
        '1 Puré de tomate La Costeña 150 g.',
        '1 Jabón corporal Escudo 135 g.',
        '1 Bebida en polvo Tang 11 g.',
        '1 Papel higiénico Pétalo (4 rollos).',
        '1 Empaque caja de cartón.'
      ],
    },
    'despensa-sensibilidad': {
      id:          'despensa-sensibilidad',
      name:        'Despensa Sensibilidad',
      category:    'Despensas',
      description: 'Despensa con 31 productos de primera necesidad. Una opción completa y variada para apoyar y reconocer a tus colaboradores.',
      items: [
        '1 Aceite vegetal Nutrioli 400 ml',
        '1 Arroz Abeto 500 g',
        '1 Lenteja Abeto 250 g',
        '1 Azúcar estándar 500 g',
        '1 Frijoles La Sierra 430 g',
        '1 Sopa de pasta La Moderna 200 g',
        '1 Pasta para spaghetti La Moderna 200 g',
        '1 Media crema Nestlé 225 g',
        '1 Galletas Surtido Clásico Cuétara 170 g',
        '1 Mayonesa La Costeña 105 g',
        '1 Café de olla soluble Legal 50 g',
        '1 Leche condensada La Lechera 209 g',
        '1 Atún Tuny 140 g',
        '1 Salsa picante Valentina 370 ml',
        '1 Salsa catsup Clemente Jacques 220 ml',
        '1 Néctar de frutas Boing 125 ml',
        '2 Leche saborizada Alpura 180 ml',
        '1 Mermelada Clemente Jacques 270 g',
        '1 Gelatina en polvo D\'Gari 120 g',
        '1 Flan en polvo D\'Gari 115 g',
        '1 Hierbas de olor El Criollo 18 g',
        '1 Sal con ajo El Criollo 18 g',
        '2 Bebida en polvo Tang 11 g',
        '1 Bolsa de malvaviscos 200 g',
        '2 Caldo de pollo Knorr cubos 10.5 g c/u',
        '1 Palomitas con mantequilla Act II 87 g',
        '1 Leche en polvo Nutri Rindes 120 g',
        '1 Empaque caja de cartón'
      ],
    },
    'canasta-corporativa': {
      id:          'canasta-corporativa',
      name:        'Canasta Corporativa',
      category:    'Canastas',
      description: 'Canasta gourmet de presentación elegante para obsequiar a clientes especiales, socios estratégicos y directivos.',
      items: [
        'Vino espumoso o blanco',
        'Chocolates finos surtidos',
        'Quesos selectos',
        'Crackers artesanales',
        'Aceitunas premium',
        'Frutos secos mixtos',
        'Mantequilla artesanal',
        'Canasta de mimbre con listón dorado',
      ],
    },
    'kit-personalizado': {
      id:          'kit-personalizado',
      name:        'Kit Personalizado',
      category:    'Regalos Corporativos',
      description: 'Diseñamos el kit ideal para tu empresa. Tú eliges los productos y nosotros lo armamos con tu identidad corporativa.',
      items: [
        'Productos a tu elección',
        'Branding con tu logo',
        'Mensaje corporativo personalizado',
        'Colores institucionales',
        'Presentación exclusiva',
        'Empaque de lujo',
        'Garantía de calidad',
        'Asesoría personalizada',
      ],
    },
    'regalo-clientes': {
      id:          'regalo-clientes',
      name:        'Regalo para Clientes',
      category:    'Regalos Corporativos',
      description: 'Fortalece relaciones comerciales con un detalle memorable. Selección premium para clientes que mueven tu negocio.',
      items: [
        'Selección gourmet premium',
        'Presentación ejecutiva',
        'Tarjeta de felicitación personalizada',
        'Empaque con logo empresarial',
        'Productos de marcas reconocidas',
        'Moño y listón corporativo',
        'Caja rígida de lujo',
        'Entrega coordinada',
      ],
    },
    'pedido-especial': {
      id:          'pedido-especial',
      name:        'Pedido Especial',
      category:    'Regalos Corporativos',
      description: '¿Necesitas algo diferente? Cuéntanos tu idea y armamos una propuesta completamente a la medida de tu empresa.',
      items: [
        'Producto 100% personalizado',
        'Sin límite de creatividad',
        'Presupuesto a tu medida',
        'Asesoría comercial incluida',
        'Propuesta en 24 horas',
        'Muestra previa disponible',
        'Atención ejecutiva dedicada',
        'Cotización sin compromiso',
      ],
    },
  },
};

/* ─── 2. MI COTIZACIÓN — STATE MANAGEMENT ────────────────── */
const QuoteState = (() => {
  let items = []; // Array of { id, name, qty }

  // Observers (simple pub/sub)
  const listeners = [];
  const subscribe = (fn) => listeners.push(fn);
  const notify    = ()   => listeners.forEach((fn) => fn([...items]));

  const find   = (id)   => items.find((i) => i.id === id);
  const total  = ()     => items.reduce((acc, i) => acc + i.qty, 0);
  const getAll = ()     => [...items];
  const isEmpty = ()    => items.length === 0;

  /**
   * Add a product to the quote.
   * If it already exists, increments quantity.
   */
  const add = (id, name) => {
    const existing = find(id);
    if (existing) {
      existing.qty += 1;
    } else {
      items.push({ id, name, qty: 1 });
    }
    notify();
  };

  /**
   * Remove a product entirely.
   */
  const remove = (id) => {
    items = items.filter((i) => i.id !== id);
    notify();
  };

  /**
   * Change quantity of a product.
   * Removes if qty reaches 0.
   */
  const setQty = (id, qty) => {
    const item = find(id);
    if (!item) return;
    if (qty <= 0) {
      remove(id);
    } else {
      item.qty = qty;
      notify();
    }
  };

  /**
   * Clear all items.
   */
  const clear = () => {
    items = [];
    notify();
  };

  return { add, remove, setQty, clear, find, total, getAll, isEmpty, subscribe };
})();

/* ─── 3. QUOTE DRAWER ────────────────────────────────────── */
const QuoteDrawer = (() => {
  const elements = {
    trigger:   () => document.getElementById('quoteTrigger'),
    badge:     () => document.getElementById('quoteBadge'),
    overlay:   () => document.getElementById('quoteOverlay'),
    drawer:    () => document.getElementById('quoteDrawer'),
    close:     () => document.getElementById('quoteClose'),
    empty:     () => document.getElementById('quoteEmpty'),
    list:      () => document.getElementById('quoteList'),
    footer:    () => document.getElementById('quoteFooter'),
    clear:     () => document.getElementById('quoteClear'),
    submit:    () => document.getElementById('quoteSubmit'),
  };

  let isOpen = false;

  const open = () => {
    isOpen = true;
    elements.overlay().classList.add('is-open');
    elements.drawer().classList.add('is-open');
    elements.drawer().setAttribute('aria-hidden', 'false');
    elements.trigger()?.setAttribute('aria-expanded', 'true');
    // Trap focus
    elements.drawer().focus?.();
    document.body.style.overflow = 'hidden';
  };

  const close = () => {
    isOpen = false;
    elements.overlay().classList.remove('is-open');
    elements.drawer().classList.remove('is-open');
    elements.drawer().setAttribute('aria-hidden', 'true');
    elements.trigger()?.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  };

  const toggle = () => (isOpen ? close() : open());

  /**
   * Re-render the quote list from current state.
   */
  const render = (items) => {
    const badge  = elements.badge();
    const empty  = elements.empty();
    const list   = elements.list();
    const footer = elements.footer();

    const count = items.reduce((a, i) => a + i.qty, 0);

    // Update badge
    badge.textContent = count;
    if (count > 0) {
      badge.classList.add('bump');
      setTimeout(() => badge.classList.remove('bump'), 400);
    }

    // Toggle empty/list view
    const hasItems = items.length > 0;
    empty.style.display  = hasItems ? 'none' : 'flex';
    list.style.display   = hasItems ? 'flex' : 'none';
    footer.style.display = hasItems ? 'flex' : 'none';

    if (!hasItems) return;

    // Render each item
    list.innerHTML = items.map((item) => `
      <li class="quote-list-item" data-id="${item.id}">
        <div class="quote-list-item__name">${escapeHtml(item.name)}</div>
        <div class="quote-list-item__qty">
          <button class="qty-btn" data-action="decrement" data-id="${item.id}" aria-label="Disminuir cantidad de ${escapeHtml(item.name)}">−</button>
          <span class="qty-value" aria-live="polite" aria-label="Cantidad: ${item.qty}">${item.qty}</span>
          <button class="qty-btn" data-action="increment" data-id="${item.id}" aria-label="Aumentar cantidad de ${escapeHtml(item.name)}">+</button>
        </div>
        <button class="quote-list-item__remove" data-action="remove" data-id="${item.id}" aria-label="Eliminar ${escapeHtml(item.name)} de Mi Cotización">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" aria-hidden="true">
            <polyline points="3 6 5 6 21 6"/>
            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/>
          </svg>
        </button>
      </li>
    `).join('');

    // Event delegation for qty/remove buttons in list
    list.onclick = (e) => {
      const btn = e.target.closest('[data-action]');
      if (!btn) return;
      const id     = btn.dataset.id;
      const action = btn.dataset.action;
      const item   = QuoteState.find(id);
      if (!item) return;

      if (action === 'increment') QuoteState.setQty(id, item.qty + 1);
      if (action === 'decrement') QuoteState.setQty(id, item.qty - 1);
      if (action === 'remove')    QuoteState.remove(id);
    };
  };

  const init = () => {
    // Trigger button
    elements.trigger()?.addEventListener('click', toggle);

    // Close button
    elements.close().addEventListener('click', close);

    // Overlay click
    elements.overlay().addEventListener('click', close);

    // Clear button
    elements.clear().addEventListener('click', () => {
      if (confirm('¿Vaciar toda la lista de cotización?')) {
        QuoteState.clear();
      }
    });

    // Submit (WhatsApp)
    elements.submit().addEventListener('click', () => {
      WhatsAppBuilder.send(QuoteState.getAll());
    });

    // ESC key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && isOpen) close();
    });

    // Subscribe to state changes
    QuoteState.subscribe(render);

    // Initial render
    render([]);
  };

  return { init, open, close, toggle };
})();

/* ─── 4. WHATSAPP MESSAGE BUILDER ────────────────────────── */
const WhatsAppBuilder = (() => {
  /**
   * Build the WhatsApp message and open the link.
   */
  /**
   * Open WhatsApp with a product list (multiple items).
   */
  const send = (items) => {
    if (!items || items.length === 0) {
      alert('Agrega al menos un producto a tu cotización antes de enviar.');
      QuoteDrawer.open();
      return;
    }

    const productLines = items
      .map((item) => `• ${item.name} x${item.qty}`)
      .join('\n\n');

    const message =
      `Hola.\n\nMe interesa cotizar los siguientes productos:\n\n` +
      `${productLines}\n\n` +
      `¿Podrían enviarme información sobre precios, disponibilidad y tiempos de entrega?\n\nGracias.`;

    openWhatsApp(message);
  };

  /**
   * Open WhatsApp for a single product (from "Agregar" button).
   */
  const sendSingle = (productName) => {
    const message =
      `Hola.\n\nMe interesa cotizar el siguiente producto:\n\n` +
      `• ${productName}\n\n` +
      `¿Podrían enviarme información sobre precio, contenido y disponibilidad?\n\nGracias.`;

    openWhatsApp(message);
  };

  /**
   * Central function — opens WhatsApp with a given message.
   */
  const openWhatsApp = (message) => {
    const encoded = encodeURIComponent(message);
    const url     = `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  /**
   * Build a direct WhatsApp link (for href attributes).
   */
  const buildDirect = (customText = '') => {
    const text = customText || 'Hola, me interesa cotizar sus productos. ¿Podrían ayudarme?';
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
  };

  return { send, sendSingle, openWhatsApp, buildDirect };
})();

/* ─── 5. PRODUCT CARDS — ADD BUTTONS ────────────────────── */
const ProductCards = (() => {
  const init = () => {
    // Event delegation on the products grid
    const grid = document.getElementById('productsGrid');
    if (!grid) return;

    grid.addEventListener('click', (e) => {
      // Handle "Agregar" button
      const addBtn = e.target.closest('.card-product__add-btn');
      if (addBtn) {
        handleAdd(addBtn);
        return;
      }

      // Handle "Ver contenido" button
      const detailBtn = e.target.closest('.card-product__detail-btn');
      if (detailBtn) {
        handleDetail(detailBtn);
        return;
      }
    });
  };

  const handleAdd = (btn) => {
    const id   = btn.dataset.productId;
    const name = btn.dataset.productName;
    if (!id || !name) return;

    QuoteState.add(id, name);

    // Visual feedback (same design, no changes)
    const originalContent = btn.innerHTML;
    btn.innerHTML = `
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <polyline points="20 6 9 17 4 12"/>
      </svg>
      Agregado
    `;
    btn.classList.add('is-added');

    setTimeout(() => {
      btn.innerHTML = originalContent;
      btn.classList.remove('is-added');
    }, 1800);

    // Immediately open WhatsApp with current quote
    const allItems = QuoteState.getAll();
    if (allItems.length === 1 && allItems[0].qty === 1) {
      WhatsAppBuilder.sendSingle(name);
    } else {
      WhatsAppBuilder.send(allItems);
    }
  };

  const handleDetail = (btn) => {
    const id = btn.dataset.productId;
    if (!id) return;
    ProductModal.open(id);
  };

  return { init };
})();

/* ─── 6. PRODUCT DETAIL MODAL ────────────────────────────── */
const ProductModal = (() => {
  const elements = {
    overlay: () => document.getElementById('modalOverlay'),
    modal:   () => document.getElementById('productModal'),
    close:   () => document.getElementById('modalClose'),
    content: () => document.getElementById('modalContent'),
  };

  let isOpen = false;

  const open = (productId) => {
    const product = CONFIG.products[productId];
    if (!product) return;

    // Render content
    elements.content().innerHTML = `
      <p class="modal-product__category">${escapeHtml(product.category)}</p>
      <h2 class="modal-product__title" id="modalTitle">${escapeHtml(product.name)}</h2>
      <p class="modal-product__desc">${escapeHtml(product.description)}</p>
      <p class="modal-product__content-title">Contenido incluye:</p>
      <ul class="modal-product__items">
        ${product.items.map((item) => `<li class="modal-product__item">${escapeHtml(item)}</li>`).join('')}
      </ul>
      <div class="modal-product__actions">
        <button class="btn btn--ghost modal-add-from-modal" data-product-id="${productId}" data-product-name="${escapeHtml(product.name)}">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" aria-hidden="true"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
          Agregar a Cotización
        </button>
        <a class="btn btn--whatsapp" 
           href="${WhatsAppBuilder.buildDirect(`Hola, me interesa cotizar: ${product.name}. ¿Podrían darme más información?`)}"
           target="_blank" rel="noopener">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
          Cotizar por WhatsApp
        </a>
      </div>
    `;

    // Handle add from modal (adds to quote and immediately triggers WhatsApp)
    const addBtn = elements.content().querySelector('.modal-add-from-modal');
    addBtn?.addEventListener('click', () => {
      QuoteState.add(productId, product.name);
      close();
      
      const allItems = QuoteState.getAll();
      if (allItems.length === 1 && allItems[0].qty === 1) {
        WhatsAppBuilder.sendSingle(product.name);
      } else {
        WhatsAppBuilder.send(allItems);
      }
    });

    isOpen = true;
    elements.overlay().classList.add('is-open');
    elements.modal().classList.add('is-open');
    elements.modal().setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  };

  const close = () => {
    isOpen = false;
    elements.overlay().classList.remove('is-open');
    elements.modal().classList.remove('is-open');
    elements.modal().setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  };

  const init = () => {
    elements.close().addEventListener('click', close);
    elements.overlay().addEventListener('click', close);
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && isOpen) close();
    });
  };

  return { init, open, close };
})();

/* ─── 7. HEADER SCROLL BEHAVIOR ─────────────────────────── */
const Header = (() => {
  const init = () => {
    const header = document.getElementById('header');
    if (!header) return;

    let lastScrollY  = 0;
    let ticking      = false;

    const handleScroll = () => {
      const scrollY = window.scrollY;

      if (scrollY > 60) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }

      lastScrollY = scrollY;
      ticking     = false;
    };

    window.addEventListener('scroll', () => {
      if (!ticking) {
        requestAnimationFrame(handleScroll);
        ticking = true;
      }
    }, { passive: true });
  };

  return { init };
})();

/* ─── 8. MOBILE MENU ─────────────────────────────────────── */
const MobileMenu = (() => {
  const init = () => {
    const hamburger = document.getElementById('hamburger');
    const menu      = document.getElementById('mobileMenu');
    if (!hamburger || !menu) return;

    let isOpen = false;

    const open  = () => {
      isOpen = true;
      hamburger.classList.add('is-open');
      menu.classList.add('is-open');
      hamburger.setAttribute('aria-expanded', 'true');
      menu.setAttribute('aria-hidden', 'false');
    };

    const close = () => {
      isOpen = false;
      hamburger.classList.remove('is-open');
      menu.classList.remove('is-open');
      hamburger.setAttribute('aria-expanded', 'false');
      menu.setAttribute('aria-hidden', 'true');
    };

    hamburger.addEventListener('click', () => (isOpen ? close() : open()));

    // Close on link click
    menu.querySelectorAll('[data-close-menu]').forEach((link) => {
      link.addEventListener('click', close);
    });

    // Close on ESC
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && isOpen) close();
    });
  };

  return { init };
})();

/* ─── 9. PRODUCT FILTERS ─────────────────────────────────── */
const Filters = (() => {
  const init = () => {
    const filterBar = document.querySelector('.filters');
    const grid      = document.getElementById('productsGrid');
    if (!filterBar || !grid) return;

    filterBar.addEventListener('click', (e) => {
      const chip = e.target.closest('.chip');
      if (!chip) return;

      const category = chip.dataset.category;

      // Update active chip
      filterBar.querySelectorAll('.chip').forEach((c) => {
        c.classList.remove('chip--active');
        c.setAttribute('aria-selected', 'false');
      });
      chip.classList.add('chip--active');
      chip.setAttribute('aria-selected', 'true');

      // Filter cards with animation
      const cards = grid.querySelectorAll('.card-product');
      cards.forEach((card) => {
        const cardCategory = card.dataset.category;
        const show = category === 'all' || cardCategory === category;

        if (show) {
          card.classList.remove('is-hidden');
          card.style.animation = 'none';
          // Force reflow
          card.offsetHeight;
          card.style.animation = '';
        } else {
          card.classList.add('is-hidden');
        }
      });
    });
  };

  return { init };
})();

/* ─── 10. FAQ ACCORDION ──────────────────────────────────── */
const FAQ = (() => {
  const init = () => {
    const faqItems = document.querySelectorAll('.faq-item');
    if (!faqItems.length) return;

    faqItems.forEach((item) => {
      const btn    = item.querySelector('.faq-item__question');
      const answer = item.querySelector('.faq-item__answer');
      if (!btn || !answer) return;

      btn.addEventListener('click', () => {
        const isCurrentlyOpen = item.classList.contains('is-open');

        // Close all
        faqItems.forEach((i) => {
          i.classList.remove('is-open');
          i.querySelector('.faq-item__question')?.setAttribute('aria-expanded', 'false');
        });

        // Open clicked (if it wasn't open)
        if (!isCurrentlyOpen) {
          item.classList.add('is-open');
          btn.setAttribute('aria-expanded', 'true');
        }
      });
    });
  };

  return { init };
})();

/* ─── 11. INTERSECTION OBSERVER — REVEAL ANIMATIONS ─────── */
const RevealObserver = (() => {
  const init = () => {
    // Don't animate if user prefers reduced motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      document.querySelectorAll('.reveal').forEach((el) => {
        el.classList.add('is-visible');
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target); // Animate only once
          }
        });
      },
      {
        rootMargin: '0px 0px -60px 0px',
        threshold:  0.10,
      }
    );

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
  };

  return { init };
})();

/* ─── 12. SMOOTH SCROLL FOR ANCHOR LINKS ────────────────── */
const SmoothScroll = (() => {
  const init = () => {
    document.addEventListener('click', (e) => {
      const link = e.target.closest('a[href^="#"]');
      if (!link) return;

      const targetId = link.getAttribute('href');
      if (targetId === '#') return;

      const target = document.querySelector(targetId);
      if (!target) return;

      e.preventDefault();

      const headerHeight = document.getElementById('header')?.offsetHeight || 72;
      const top = target.getBoundingClientRect().top + window.scrollY - headerHeight;

      window.scrollTo({ top, behavior: 'smooth' });
    });
  };

  return { init };
})();

/* ─── 13. CATALOG PDF BUTTON ─────────────────────────────── */
const CatalogBtn = (() => {
  const init = () => {
    // Interceptor removido para que el botón siga su href nativo hacia el PDF
  };

  return { init };
})();

/* ─── UTILITY: Escape HTML ───────────────────────────────── */
function escapeHtml(str) {
  if (typeof str !== 'string') return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

/* ─── 14. INIT — Bootstrap all modules on DOM ready ─────── */
document.addEventListener('DOMContentLoaded', () => {
  // Initialize all modules
  Header.init();
  MobileMenu.init();
  QuoteDrawer.init();
  ProductCards.init();
  ProductModal.init();
  Filters.init();
  FAQ.init();
  RevealObserver.init();
  SmoothScroll.init();
  CatalogBtn.init();

  // Log for debugging (remove in production)
  console.info(
    '%c Despensas Sumifénix %c Sitio listo ✓ ',
    'background: #111; color: #C9A227; font-weight: bold; padding: 4px 8px; border-radius: 4px 0 0 4px;',
    'background: #C9A227; color: #111; font-weight: bold; padding: 4px 8px; border-radius: 0 4px 4px 0;'
  );
});
