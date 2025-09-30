// JavaScript source code
window.onload = function () {

    AOS.init({
        duration: 800,
        once: true,
    });

    // ===================================================================
    // BASE DE DATOS DE PRODUCTOS (VERSIÓN FINAL Y COMPLETA)
    // ===================================================================
    const products = [
        {
            id: 'panacea-summus',
            name: 'Panacea Summus',
            subtitle: 'El Bálsamo de los Ecos Opuestos',
            price: 38000,
            images: ['images/Panacea-Summus.jpg'],
            accordion: [
                {
                    title: 'La Promesa del Alquimista',
                    content: '<p>Este no es un ungüento; es un ritual de liberación. Una fórmula que no ataca el dolor, sino que lo desordena con un eco de frío y calor, permitiendo que tu cuerpo recuerde su propia armonía y suelte el nudo de la tensión.</p>'
                },
                {
                    title: 'El Ritual',
                    content: '<p>Toma una pequeña cantidad con tu dedo. Aplica con un masaje lento y circular sobre la zona en desequilibrio hasta que sientas cómo el eco de los opuestos comienza su diálogo con tu piel. Respira profundo. Permite que el flujo se restaure.</p>'
                },
                {
                    title: 'La Mirada Dual',
                    content: '<p><strong>La Lente de la Forma (Ciencia):</strong> Actúa a través de la "Teoría de la Compuerta del Dolor". El frío del Mentol (receptor TRPM8) y el calor del Alcanfor (receptores TRPV1) sobrecargan las vías neuronales, cerrando la compuerta a la señal del dolor, mientras activos como el Cannabis y la Caléndula reducen la inflamación.</p><p class="mt-2"><strong>La Lente del Flujo (MTC):</strong> Es una fórmula magistral para el Bi Zheng (Obstrucción Dolorosa). Ingredientes calientes como el Alcanfor "expulsan el Frío", mientras ingredientes fríos como el Mentol "aclaran el Calor", restaurando el equilibrio dinámico y el flujo de Qi y Sangre.</p>'
                },
                {
                    title: 'La Entrada del Códice',
                    content: '<p>Este artefacto nace de la sabiduría de la Tribu Chironai, los sanadores empáticos de Anima Mundi.</p><button data-arquetipo="chironai" class="btn btn-outline mt-4 text-sm !py-2 !px-4 open-grimorio-btn-from-product">[ Descubrir su Saga ]</button>'
                }
            ]
        },
        {
            id: 'petra-lorien',
            name: 'Petra Lorien',
            subtitle: 'El Ritual del Origen Puro',
            price: 38000,
            images: ['images/Petra-Lorien.jpg'],
            accordion: [
                {
                    title: 'La Promesa del Alquimista',
                    content: '<p>Un cabello sano no es el que se cubre; es el que nace de una tierra fértil. Este shampoo sólido purifica profundamente el cuero cabelludo, eliminando el exceso que ahoga la raíz para que la verdadera vitalidad pueda despertar.</p>'
                },
                {
                    title: 'El Ritual',
                    content: '<p>Humedece la pastilla y frótala suavemente en tus manos para crear una espuma rica y cremosa. Masajea la espuma sobre el cuero cabelludo con intención, sintiendo cómo purificas el origen. Aclara con abundante agua.</p>'
                },
                {
                    title: 'La Mirada Dual',
                    content: '<p><strong>La Lente de la Forma (Ciencia):</strong> La Arcilla de Bentonita absorbe el exceso de sebo. Activos como el Romero y la Menta estimulan la microcirculación, llevando nutrientes al folículo, mientras el Árbol de Té controla la microbiota.</p><p class="mt-2"><strong>La Lente del Flujo (MTC):</strong> Es un ritual Yang. "Aclara el Calor-Humedad" del cuero cabelludo con la Arcilla y las hierbas frías, y "mueve el Qi y la Sangre estancada" con el Romero para nutrir la raíz.</p>'
                },
                {
                    title: 'La Entrada del Códice',
                    content: '<p>Este artefacto nace de la sabiduría de la Tribu Lithosylvan, los maestros de la estructura.</p><button data-arquetipo="lithosylvan" class="btn btn-outline mt-4 text-sm !py-2 !px-4 open-grimorio-btn-from-product">[ Descubrir su Saga ]</button>'
                }
            ]
        },
        {
            id: 'nox-lucens',
            name: 'Nox Lucens',
            subtitle: 'El Ritual del Sello Flexible',
            price: 34000,
            images: ['images/Nox-Lucens.jpg'],
            accordion: [
                {
                    title: 'La Promesa del Alquimista',
                    content: '<p>Si Petra Lorien purifica el origen, Nox Lucens protege la manifestación. Este acondicionador no enmascara el daño; sella la fibra capilar, devolviéndole la flexibilidad, la nutrición y un brillo que parece nacer de la luna.</p>'
                },
                {
                    title: 'El Ritual',
                    content: '<p>Después de purificar, desliza la barra de medios a puntas. Siente cómo se derrite en una crema sedosa que envuelve cada hebra. Deja actuar un momento, como un manto protector, y luego aclara.</p>'
                },
                {
                    title: 'La Mirada Dual',
                    content: '<p><strong>La Lente de la Forma (Ciencia):</strong> Su agente catiónico (BTMS) se adhiere a la carga negativa del cabello dañado, neutralizándola y sellando la cutícula. Las Mantecas y Ceras crean una película oclusiva que previene la pérdida de humedad.</p><p class="mt-2"><strong>La Lente del Flujo (MTC):</strong> Es un ritual Yin. "Nutre la Sangre (Xue) y el Yin" del cabello, combatiendo la "Sequedad". La Cera de Abejas actúa como una capa de Wei Qi (energía defensiva), protegiendo la esencia de la hebra.</p>'
                },
                {
                    title: 'La Entrada del Códice',
                    content: '<p>Este artefacto es la segunda mitad del ritual de la Tribu Lithosylvan, la clave de su Resiliencia Flexible.</p><button data-arquetipo="lithosylvan" class="btn btn-outline mt-4 text-sm !py-2 !px-4 open-grimorio-btn-from-product">[ Descubrir su Saga ]</button>'
                }
            ]
        },
        {
            id: 'aura-mielitae',
            name: 'Aura Mielitae',
            subtitle: 'El Sello Protector de la Colmena',
            price: 26000,
            images: ['images/Aura-Mielitae.jpg'],
            accordion: [
                {
                    title: 'La Promesa del Alquimista',
                    content: '<p>Tus labios son el umbral entre tu mundo interior y el exterior. Este bálsamo no es una simple capa de brillo; es un sello sagrado. Inspirado en la alquimia de la colmena, crea un velo protector que calma, repara y defiende la delicada piel de los labios, honrando el portal de tu aliento y tu palabra.</p>'
                },
                {
                    title: 'El Ritual',
                    content: '<p>Desliza suavemente sobre los labios. Siente cómo se funde al instante en un velo de confort. Úsalo como un escudo contra el viento y el frío, o como un ritual nocturno para reparar y nutrir mientras descansas.</p>'
                },
                {
                    title: 'La Mirada Dual',
                    content: '<p><strong>La Lente de la Forma (Ciencia):</strong> La Cera de Abejas y la Manteca de Karité forman una barrera oclusiva y emoliente que previene la pérdida de humedad. La Caléndula, con sus potentes activos antiinflamatorios, calma la irritación y acelera la reparación de fisuras.</p><p class="mt-2"><strong>La Lente del Flujo (MTC):</strong> La Cera de Abejas (Feng La) crea un escudo que protege contra la invasión de "Viento-Frío". La Caléndula (Jin Zhan Ju) "aclara el Calor" (inflamación), mientras la base rica "nutre el Yin" de la piel.</p>'
                },
                {
                    title: 'La Entrada del Códice',
                    content: '<p>Este artefacto nace de la sabiduría de la Conciencia Mellisonae, los tejedores del Velo Cósmico.</p><button data-arquetipo="mellisonae" class="btn btn-outline mt-4 text-sm !py-2 !px-4 open-grimorio-btn-from-product">[ Descubrir su Saga ]</button>'
                }
            ]
        },
        {
            id: 'elixir-vitae',
            name: 'Elixir Vitae',
            subtitle: 'El Elixir de la Renovación',
            price: 60000,
            images: ['images/Elixir-Vitae.jpg'],
            accordion: [
                {
                    title: 'La Promesa del Alquimista',
                    content: '<p>El afeitado es un ritual de fuego y acero, una agresión necesaria. Este elixir es la alquimia que transmuta ese trauma en un acto de renovación. No solo calma el ardor; guía a la piel a través de un ciclo de purificación y restauración para que emerja más fuerte y resiliente.</p>'
                },
                {
                    title: 'El Ritual',
                    content: '<p>Después del afeitado, sobre la piel seca, rocía una bruma generosa. Siente el choque inicial purificante, seguido por una ola de calma e hidratación profunda. Da suaves toques con las palmas para sellar el ritual.</p>'
                },
                {
                    title: 'La Mirada Dual',
                    content: '<p><strong>La Lente de la Forma (Ciencia):</strong> Es una fórmula secuencial. La fase de asepsia (Etanol, Árbol de Té) desinfecta los microcortes para prevenir la foliculitis. La fase de reparación (Ácido Hialurónico, Glicerina, Aceites) rehidrata intensamente y restaura la barrera cutánea dañada.</p><p class="mt-2"><strong>La Lente del Flujo (MTC):</strong> El Etanol y el Árbol de Té "aclaran el Calor Tóxico" del trauma. Inmediatamente después, los ingredientes humectantes "nutren el Yin y la Sangre", y la fórmula completa "restaura el Wei Qi" (energía defensiva) de la piel.</p>'
                },
                {
                    title: 'La Entrada del Códice',
                    content: '<p>Este artefacto nace de la sabiduría de la Tribu Mutabilis, los maestros de la adaptación y la resiliencia.</p><button data-arquetipo="mutabilis" class="btn btn-outline mt-4 text-sm !py-2 !px-4 open-grimorio-btn-from-product">[ Descubrir su Saga ]</button>'
                }
            ]
        },
        {
            id: 'nectar-divinum',
            name: 'Nectar Divinum',
            subtitle: 'El Rocío de la Vitalidad Sagrada',
            price: 26000,
            images: ['images/Nectar-Divinum.jpg'],
            accordion: [
                {
                    title: 'La Promesa del Alquimista',
                    content: '<p>La verdadera vitalidad de tu cabello no se encuentra en la hebra, sino en la conexión con su origen. Este sérum no es un aceite para dar brillo superficial; es un tónico para la Esencia (Jing), diseñado para nutrir el cuero cabelludo y reconectar la raíz con su fuente de poder primordial.</p>'
                },
                {
                    title: 'El Ritual',
                    content: '<p>Como un ritual pre-lavado, aplica unas gotas directamente sobre el cuero cabelludo. Masajea suavemente con las yemas de los dedos, visualizando cómo la energía desciende y nutre cada folículo. Deja actuar por al menos 30 minutos antes de purificar.</p>'
                },
                {
                    title: 'La Mirada Dual',
                    content: '<p><strong>La Lente de la Forma (Ciencia):</strong> Es un sérum bioactivo para el folículo. Activos como el Cannabis y el Tomillo calman la microinflamación, mientras el Ácido Hialurónico hidrata profundamente la piel del cuero cabelludo, creando un entorno óptimo para el crecimiento.</p><p class="mt-2"><strong>La Lente del Flujo (MTC):</strong> Es un tónico supremo para la Esencia del Riñón (Jing) y la Sangre (Xue). Sus aceites de semillas nutren el Jing, y las hierbas activas limpian el terreno de "Viento-Humedad", permitiendo que la vitalidad fluya sin obstrucción a la raíz.</p>'
                },
                {
                    title: 'La Entrada del Códice',
                    content: '<p>Este artefacto es la reconstrucción del rocío sagrado que emana de la Vitalidad Arborian, la esencia misma del Axis Vitae.</p><button data-arquetipo="arborian" class="btn btn-outline mt-4 text-sm !py-2 !px-4 open-grimorio-btn-from-product">[ Descubrir su Origen ]</button>'
                }
            ]
        }
    ];
    // ===================================================================
    // LORE DE LOS ARQUETIPOS (VERSIÓN FINAL Y COMPLETA)
    // ===================================================================
    const arquetipos = {
        lithosylvan: {
            titulo: "Los Lithosylvan",
            glifo: "images/glifo-lithosylvan.png",

            filosofia: {
                titulo: "La Filosofía",
                contenido: "Para los Lithosylvan, la energía caótica del universo (Flujo) es solo potencial. No adquiere un propósito real hasta que es contenida por una estructura íntegra (Forma)..."
            },

            dualidad: {
                titulo: "El Don y la Falla",
                don: "<strong>Don:</strong> Folium Firmus - Fuerza y Pureza Ancestral.",
                falla: "<strong>Falla:</strong> Radix Rigidus - La rigidez que nace de un exceso de purificación, causando estancamiento de Qi y Humedad Interna."
            },

            leccion: {
                titulo: "La Lección Alquímica para el Ser Moderno",
                contenido: "La lección de los Lithosylvan es para aquellos que, en su búsqueda de la perfección y la fuerza, han creado rigidez en sus vidas. Es el eco del burnout, del control excesivo que endurece el espíritu y estanca la creatividad..."
            },

            ritual: {
                titulo: "Artefactos del Ritual de la Resiliencia Flexible",
                introduccion: "Para superar su Falla, el Arconte Kaelus enseñó a su pueblo un ritual en dos actos: purificar el origen y proteger la manifestación. De esta leyenda, hemos reconstruido dos artefactos que trabajan en perfecta sinergia.",
                artefactos: [
                    { id: 'petra-lorien', subtitulo: 'El Artefacto del Sol (Solve)' },
                    { id: 'nox-lucens', subtitulo: 'El Artefacto de la Luna (et Coagula)' }
                ]
            }
        }
        // Aquí podremos añadir los demás arquetipos en el futuro
    };

    const phoneNumber = '573196805286';
    const galleryView = document.getElementById('formulaciones-gallery');
    const detailView = document.getElementById('formulaciones-detail');
    const backBtn = document.getElementById('back-to-gallery');
    const menuBtn = document.getElementById('menu-btn');
    const menuOverlay = document.getElementById('menu-overlay');
    let swiper;

    function setupEventListeners() {
        menuBtn.addEventListener('click', () => {
            menuOverlay.classList.toggle('opacity-0');
            menuOverlay.classList.toggle('invisible');
            menuOverlay.style.display = menuOverlay.classList.contains('invisible') ? 'none' : 'flex';
        });
        menuOverlay.querySelectorAll('a').forEach(link => link.addEventListener('click', () => menuBtn.click()));
        backBtn.addEventListener('click', showGallery);
        initAccordion();
    }

    function renderGallery() {
        galleryView.innerHTML = '';
        products.forEach(product => {
            const card = document.createElement('div');
            card.className = 'product-card bg-pizarra-suave border border-oro-viejo rounded-lg p-6 shadow-lg cursor-pointer flex flex-col items-center';
            card.innerHTML = `<img src="${product.images[0]}" alt="[Imagen de ${product.name}]" class="rounded-md mb-4 w-full h-auto aspect-square object-cover" loading="lazy"><h3 class="text-2xl text-center text-oro-viejo">${product.name}</h3><p class="text-center subtitle text-purpura-alquimista">${product.subtitle}</p>`;
            card.addEventListener('click', () => showProductDetail(product.id));
            galleryView.appendChild(card);
        });
    }

    // VERSIÓN CORREGIDA de showProductDetail
    function showProductDetail(productId) {
        const product = products.find(p => p.id === productId);
        if (!product) return;

        // El resto de la función es igual...
        document.getElementById('product-name').textContent = product.name;
        document.getElementById('product-subtitle').textContent = product.subtitle;
        const priceEl = document.getElementById('product-price');
        priceEl.textContent = new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', minimumFractionDigits: 0 }).format(product.price);
        const accordionContainer = document.getElementById('product-accordion');
        accordionContainer.innerHTML = product.accordion.map(item => `<div class="accordion-item bg-pizarra-suave rounded-lg border border-oro-viejo"><button class="accordion-header w-full flex justify-between items-center text-left p-4"><h4 class="text-lg">${item.title}</h4><span class="icon-plus text-oro-viejo text-2xl">+</span></button><div class="accordion-content"><div class="p-4 prose prose-invert max-w-none">${item.content}</div></div></div>`).join('');
        const swiperWrapper = document.getElementById('product-swiper-wrapper');
        swiperWrapper.innerHTML = product.images.map(img => `<div class="swiper-slide"><img src="${img}" class="w-full h-auto" loading="lazy"></div>`).join('');
        if (swiper) swiper.destroy(true, true);
        swiper = new Swiper('.swiper-container', { loop: true, pagination: { el: '.swiper-pagination', clickable: true }, autoplay: { delay: 4000, disableOnInteraction: false } });
        const whatsappBtn = document.getElementById('whatsapp-cta');
        whatsappBtn.href = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(`Hola Alquimista, quisiera consultar sobre el producto: ${product.name}.`)}`;
        galleryView.classList.add('hidden');
        detailView.classList.remove('hidden');
        window.scrollTo({ top: detailView.offsetTop - 100, behavior: 'smooth' });

        // --- AÑADIDO: Creamos un estado en el historial para "recordar" que estamos en la vista de detalle ---
        history.pushState({ view: 'productDetail' }, null);
    }
  

// VERSIÓN CORREGIDA de showGallery
function showGallery() {
    detailView.classList.add('hidden');
    galleryView.classList.remove('hidden');

    // --- AÑADIDO: Limpiamos la URL para que el usuario pueda salir de la página si vuelve a dar "atrás" ---
    // Usamos replaceState para no crear una nueva entrada en el historial
    history.replaceState({ view: 'gallery' }, null, ' ');
}

    function initAccordion() {
        const detailContainer = document.getElementById('formulaciones-detail');
        if (!detailContainer) return;

        detailContainer.addEventListener('click', function (event) {
            const header = event.target.closest('.accordion-header');
            if (!header) return;

            const currentItem = header.parentElement;
            const content = header.nextElementSibling;
            const wasActive = currentItem.classList.contains('active');

            const accordionContainer = currentItem.closest('#product-accordion');
            accordionContainer.querySelectorAll('.accordion-item').forEach(item => {
                if (item !== currentItem) {
                    item.classList.remove('active');
                    item.querySelector('.accordion-content').style.maxHeight = null;
                }
            });

            if (!wasActive) {
                currentItem.classList.add('active');
                content.style.maxHeight = content.scrollHeight + "px";
            } else {
                currentItem.classList.remove('active');
                content.style.maxHeight = null;
            }
        });
    }

    // --- VERSIÓN MODIFICADA Y SEGURA ---
    // Infusion Oracle Logic
    const codiceGenerateBtn = document.getElementById('generate-codice-btn');
    const codiceResultContainer = document.getElementById('codice-result-container');
    const codiceTopicInput = document.getElementById('codice-topic-input');

    // Reemplaza la función existente con esta versión completa y corregida
    // VERSIÓN FINAL Y DEFINITIVA
    codiceGenerateBtn.addEventListener('click', async () => {
        const topic = codiceTopicInput.value.trim();
        if (!topic) {
            codiceResultContainer.textContent = "Describe tu sentir para que el Oráculo pueda guiarte.";
            return;
        }

        codiceResultContainer.innerHTML = '<div class="spinner mx-auto"></div>';
        codiceGenerateBtn.disabled = true;
        codiceTopicInput.disabled = true;

        const prompt = `Eres un sabio alquimista y herbolario, con un tono poético y místico. Un usuario describe su malestar como: '${topic}'. Basado en esto, recomienda una infusión simple con 2-3 ingredientes comunes. Incluye un breve 'modo de uso' (ej. 'Beber una taza tibia 30 minutos antes de dormir'). Proporciona toda la información en formato JSON.`;

        const schema = {
            type: "OBJECT",
            properties: {
                nombreInfusion: { type: "STRING", description: "Un nombre poético y místico para la infusión (ej. 'Aliento de Montaña Serena')" },
                ingredientes: { type: "ARRAY", items: { "type": "STRING" }, description: "Una lista de 2 a 3 ingredientes simples y comunes." },
                preparacion: { type: "STRING", description: "Instrucciones de preparación muy sencillas y breves." },
                modo_de_uso: { type: "STRING", description: "Instrucciones breves sobre cuándo o cómo tomar la infusión." },
                sabiduria: { type: "STRING", description: "Una explicación corta (máx 60 palabras), poética y mística de sus beneficios." }
            },
            required: ["nombreInfusion", "ingredientes", "preparacion", "modo_de_uso", "sabiduria"]
        };

        try {
            const response = await fetch('/.netlify/functions/gemini-proxy', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ prompt, schema })
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || `API Error: ${response.statusText}`);
            }

            const data = await response.json();
            const infusionData = JSON.parse(data.response);

            // El contenedor del resultado ahora tiene un `div` que envuelve todo
            codiceResultContainer.innerHTML = `
            <div> <div class="text-left w-full">
                    <h4 class="text-xl text-oro-viejo mb-2">${infusionData.nombreInfusion}</h4>
                    <p class="mb-2"><strong class="text-purpura-alquimista">Ingredientes:</strong></p>
                    <ul class="list-disc list-inside mb-4 ml-4">
                        ${infusionData.ingredientes.map(i => `<li>${i}</li>`).join('')}
                    </ul>
                    <p class="mb-2"><strong class="text-purpura-alquimista">Preparación:</strong> ${infusionData.preparacion}</p>
                    <p class="mb-2"><strong class="text-purpura-alquimista">Modo de Uso:</strong> ${infusionData.modo_de_uso}</p>
                    <p class="italic mt-4">“${infusionData.sabiduria}”</p>
                </div>

                <div class="text-oro-viejo text-2xl tracking-widest my-6 text-center">. . .</div>
                <p class="subtitle text-center text-luz-de-vela/80 text-sm">
                    Si esta sabiduría resuena contigo y buscas una guía más profunda, 
                    <a href="https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent('Hola Alquimista, la sabiduría del códice me ha hablado y quisiera una guía más profunda.')}" target="_blank" class="text-oro-viejo hover:text-luz-de-vela transition-colors underline">
                        el Alquimista te escucha.
                    </a>
                </p>
            </div> `;

        } catch (error) {
            console.error("Error generating Infusion:", error);
            codiceResultContainer.textContent = "La energía del Oráculo está fluctuando. Inténtalo de nuevo en un momento.";
        } finally {
            codiceGenerateBtn.disabled = false;
            codiceTopicInput.disabled = false;
            codiceTopicInput.value = '';
        }
    });

    // Manifiesto WhatsApp CTA
    const manifiestoWhatsAppBtn = document.getElementById('whatsapp-manifiesto-cta');
    if (manifiestoWhatsAppBtn) {
        manifiestoWhatsAppBtn.href = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent('Hola Alquimista, me gustaría iniciar una conversación.')}`;
    }

    // Initialize App
    setupEventListeners();
    renderGallery();
    // ===================================================================
    // Lógica del Grimorio Revelado (VERSIÓN FINAL Y COMPLETA)
    // ===================================================================
    const modal = document.getElementById('grimorio-modal');
    const modalContent = document.getElementById('grimorio-content');
    const modalBody = document.getElementById('grimorio-body');
    const closeBtn = document.getElementById('close-grimorio-btn');
    const openBtns = document.querySelectorAll('.open-grimorio-btn');

    // Función que solo maneja la animación de cierre
    function closeGrimorioAnimation() {
        modal.classList.add('opacity-0');
        modalContent.classList.add('scale-95');
        setTimeout(() => {
            modal.classList.add('invisible');
        }, 300);
    }

    // Función principal para abrir el grimorio
    function openGrimorio(arquetipoId) {
        const data = arquetipos[arquetipoId];
        if (!data) return;

        // Construir el contenido del grimorio dinámicamente con la nueva estructura
        modalBody.innerHTML = `
        <div class="text-center mb-8">
            <div class="w-32 h-32 mx-auto mb-4">
                <img src="${data.glifo}" alt="Glifo de ${data.titulo}" class="w-full h-full object-contain">
            </div>
            <h2 class="text-3xl text-oro-viejo font-cinzel">${data.titulo}</h2>
        </div>

        <div class="space-y-8 text-luz-de-vela/90 text-left">
            
            <div>
                <h3 class="text-xl text-purpura-alquimista mb-2 font-semibold">${data.filosofia.titulo}</h3>
                <p class="text-sm italic">“${data.filosofia.contenido}”</p>
            </div>
            
            <div>
                <h3 class="text-xl text-purpura-alquimista mb-2 font-semibold">${data.dualidad.titulo}</h3>
                <div class="space-y-2 text-sm">
                    <p>${data.dualidad.don}</p>
                    <p>${data.dualidad.falla}</p>
                </div>
            </div>

            <div>
                <h3 class="text-xl text-purpura-alquimista mb-2 font-semibold">${data.leccion.titulo}</h3>
                <p class="text-sm">"${data.leccion.contenido}"</p>
            </div>

            <div>
                <h3 class="text-xl text-purpura-alquimista mb-4 font-semibold">${data.ritual.titulo}</h3>
                <p class="text-sm mb-6">${data.ritual.introduccion}</p>
                <div class="grid grid-cols-2 gap-4">
                    ${data.ritual.artefactos.map(artefacto => {
            const producto = products.find(p => p.id === artefacto.id);
            if (!producto) return '';
            return `
                            <a href="#" data-product-id="${producto.id}" class="text-center block product-link-from-grimorio transition-transform duration-200 hover:scale-105">
                                <img src="${producto.images[0]}" alt="${producto.name}" class="rounded-md mb-2 aspect-square object-cover">
                                <h4 class="text-sm font-semibold text-oro-viejo">${producto.name}</h4>
                                <p class="text-xs text-luz-de-vela/70 italic">${artefacto.subtitulo}</p>
                            </a>
                        `;
        }).join('')}
                </div>
            </div>
        </div>
    `;

        // El resto de la lógica de control del modal (no cambia)
        modal.classList.remove('invisible', 'opacity-0');
        modalContent.classList.remove('scale-95');
        location.hash = arquetipoId;
    }

    // Función principal para cerrar el grimorio
    function closeGrimorio() {
        const base = window.location.href.split('#')[0];
        history.replaceState(null, null, base);
        closeGrimorioAnimation();
    }

    // ===================================================================
    // Event Listeners (VERSIÓN FINAL Y COMPLETA)
    // ===================================================================

    // Para abrir el modal del Grimorio desde las cartas de Arquetipo
    openBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const arquetipoId = e.currentTarget.dataset.arquetipo;
            openGrimorio(arquetipoId);
        });
    });

    // Para cerrar el Grimorio con el botón 'X'
    closeBtn.addEventListener('click', closeGrimorio);

    // Para cerrar el Grimorio haciendo clic fuera del contenido
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeGrimorio();
        }
    });

    // Para hacer clickables los artefactos DENTRO del Grimorio
    modalBody.addEventListener('click', (e) => {
        const link = e.target.closest('.product-link-from-grimorio');
        if (link) {
            e.preventDefault();
            const productId = link.dataset.productId;
            closeGrimorio();
            setTimeout(() => {
                showProductDetail(productId);
            }, 350);
        }
    });

    // --- CÓDIGO AÑADIDO ---
    // Listener para los botones "Descubrir Saga" DENTRO de los productos
    detailView.addEventListener('click', (e) => {
        const sagaBtn = e.target.closest('.open-grimorio-btn-from-product');
        if (sagaBtn) {
            e.preventDefault(); // Prevenimos cualquier comportamiento por defecto del botón
            const arquetipoId = sagaBtn.dataset.arquetipo;

            // Si el arquetipo existe en nuestra base de datos, procedemos
            if (arquetipos[arquetipoId]) {
                // Primero cerramos la vista de la tienda y, justo después, abrimos el grimorio
                showGallery(); // Esto regresa a la galería principal
                setTimeout(() => {
                    openGrimorio(arquetipoId);
                }, 350); // Un pequeño retraso para una transición suave
            } else {
                // Si el arquetipo aún no está definido (ej. para un producto de una tribu futura), no hacemos nada o mostramos un aviso.
                console.warn(`El arquetipo "${arquetipoId}" aún no ha sido definido en el grimorio.`);
                // Opcionalmente, podrías mostrar una alerta al usuario.
                // alert(`La saga para el arquetipo "${arquetipoId}" será revelada próximamente.`);
            }
        }
    });
    // --- FIN DEL CÓDIGO AÑADIDO ---

    // Listener para el botón "atrás" que afecta al Grimorio
    window.addEventListener('hashchange', () => {
        const isArquetipoHash = Object.keys(arquetipos).some(id => `#${id}` === location.hash);
        if (!isArquetipoHash && !modal.classList.contains('invisible')) {
            closeGrimorioAnimation();
        }
    });

    // Listener para el botón "atrás" que afecta a la Tienda
    window.addEventListener('popstate', (event) => {
        if (!detailView.classList.contains('hidden')) {
            showGallery();
        }
    });
}; // Esta es la llave de cierre del 'window.onload', asegúrate de que esté al final.
