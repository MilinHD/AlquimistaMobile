window.onload = function () {

    AOS.init({
        duration: 800,
        once: true,
    });

    // ===================================================================
    // BASE DE DATOS DE PRODUCTOS
    // ===================================================================
    const products = [
        {
            id: 'panacea-summus',
            name: 'Panacea Summus',
            subtitle: 'El Bálsamo de los Ecos Opuestos',
            price: 50000,
            images: ['images/Panacea-Summus.jpg'],
            status: 'disponible',
            accordion: [
                {
                    title: 'La Promesa de Aetheria',
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
            subtitle: 'La Runa Purificadora',
            price: 45000,
            images: ['images/Petra-Lorien.jpg'],
            status: 'disponible',
            accordion: [
                {
                    title: 'La Promesa de Aetheria',
                    content: '<p>Un cabello sano no es el que se cubre; es el que nace de una tierra fértil. Este shampoo sólido purifica profundamente el cuero cabelludo, eliminando el exceso que ahoga la raíz para que la verdadera vitalidad pueda despertar.</p>'
                },
                {
                    title: 'El Ritual',
                    content: '<p>Humedece la pastilla y frótala suavemente en tus manos o contra el cuero cabelludo una primera vez para retirar el exceso de cebo luego aclara con agua, repite el primer paso para crear una espuma rica y cremosa. Masajea la espuma sobre el cuero cabelludo con intención, sintiendo cómo purificas el origen. Aclara con abundante agua.</p>'
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
            subtitle: 'El Sello Acondicionador Estabilizante',
            price: 40000,
            images: ['images/Nox-Lucens.jpg'],
            status: 'disponible',
            accordion: [
                {
                    title: 'La Promesa del Aetheria',
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
            subtitle: 'El Sello Protector Labial',
            price: 0,
            images: ['images/Aura-Mielitae.jpg'],
            status: 'en-crisol',
            accordion: [
                {
                    title: 'La Promesa del Aetheria',
                    content: '<p>Tus labios son el umbral entre tu mundo interior y el exterior. Este bálsamo no es una simple capa de brillo; es un sello sagrado. Inspirado en la alquimia de la colmena, crea un velo protector que calma, repara y defiende la delicada piel de los labios, honrando el portal de tu aliento y tu palabra.</p>'
                },
                {
                    title: 'El Ritual',
                    content: '<p>Desliza suavemente sobre los labios. Siente cómo se funde al instante en un velo de confort. Úsalo como un escudo contra el viento y el frío, o como un ritual nocturno para reparar y nutrir mientras descansas.</p>'
                },
                {
                    title: 'La Mirada Dual',
                    content: '<p><strong>La Lente de la Forma (Ciencia):</strong> La Cera de Abejas y la Manteca de Karité forman una barrera oclusiva y emoliente que previene la pérdida de humedad. La Caléndula, con sus potentes activos antiinflammatorios, calma la irritación y acelera la reparación de fisuras.</p><p class="mt-2"><strong>La Lente del Flujo (MTC):</strong> La Cera de Abejas (Feng La) crea un escudo que protege contra la invasión de "Viento-Frío". La Caléndula (Jin Zhan Ju) "aclara el Calor" (inflamación), mientras la base rica "nutre el Yin" de la piel.</p>'
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
            subtitle: 'El Elixir Restaurador',
            price: 0,
            images: ['images/Elixir-Vitae.jpg'],
            status: 'en-crisol',
            accordion: [
                {
                    title: 'La Promesa del Aetheria',
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
            subtitle: 'El Elixir Nutritivo de la Raíz',
            price: 0,
            images: ['images/Nectar-Divinum.jpg'],
            status: 'en-crisol',
            accordion: [
                {
                    title: 'La Promesa del Aetheria',
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
                    content: '<p>Este artefacto es la reconstrucción del rocío sagrado que emana de la Vitalidad Arborian, la esencia misma del Axis Vitae.</p><button data-arquetipo="lithosylvan" class="btn btn-outline mt-4 text-sm !py-2 !px-4 open-grimorio-btn-from-product">[ Descubrir su Origen ]</button>'
                }
            ]
        }
    ];

    // ===================================================================
    // LORE DE LOS ARQUETIPOS
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
        },
        chironai: {
            titulo: "Los Chironai",
            glifo: "images/arquetipo-chironai.png",
            filosofia: {
                titulo: "La Filosofía",
                contenido: "La filosofía Chironai se basa en la convicción de que el dolor no es un enemigo, sino un mensaje. Su sabiduría no busca silenciar el grito del cuerpo, sino traducir su eco, aplicando el frío al calor y el movimiento al estancamiento para restaurar la armonía."
            },
            dualidad: {
                titulo: "El Don y la Falla",
                don: "<strong>Don:</strong> Echo Sensus - La capacidad de sentir la naturaleza exacta del dolor (si es por Frío, Calor o Estasis) en otros seres.",
                falla: "<strong>Falla:</strong> Cor Compassionis - La tendencia a absorber el estancamiento de Qi y Sangre de otros, sufriendo su mismo dolor."
            },
            leccion: {
                titulo: "La Lección Alquímica para el Ser Moderno",
                contenido: "La saga de los Chironai es una alegoría para los empáticos, los cuidadores y los sanadores del mundo moderno. Nos enseña sobre el peligro del burnout por compasión (compassion fatigue) y la necesidad sagrada de establecer límites saludables. Su sabiduría nos recuerda que para poder sanar a otros, primero debemos aprender a no ahogarnos en su dolor."
            },
            ritual: {
                titulo: "Artefacto del Ritual del Eco Equilibrado",
                introduccion: "Del mito de los espíritus gemelos Lyra y Orion, que aprendieron a no combatir el dolor sino a desordenarlo con un eco de opuestos, hemos reconstruido un artefacto para dialogar con el estancamiento.",
                artefactos: [
                    { id: 'panacea-summus', subtitulo: 'El Bálsamo de los Ecos Opuestos' }
                ]
            }
        },
        mellisonae: {
            titulo: "Los Mellisonae",
            glifo: "images/arquetipo-mellisonae.png",
            filosofia: {
                titulo: "La Filosofía",
                contenido: "La filosofía Mellisonae enseña que la vida solo puede existir dentro de un límite, una barrera que separa el orden interior de la entropía exterior. Su propósito no es gobernar, sino mantener el Velo, tejer el Sello y proteger lo sagrado."
            },
            dualidad: {
                titulo: "El Don y la Falla",
                don: "<strong>Don:</strong> Sigillum Unitas - La habilidad de tejer la barrera metafísica que protege la realidad.",
                falla: "<strong>Falla:</strong> Horror Vacui - Una fobia a la entropía que puede llevarlos a un aislamiento cósmico, causando estancamiento universal."
            },
            leccion: {
                titulo: "La Lección Alquímica para el Ser Moderno",
                contenido: "La saga de los Mellisonae es una lección sobre los límites saludables. Nos recuerda que para prosperar en un mundo caótico, no necesitamos muros infranqueables, sino membranas inteligentes y resilientes. Es una invitación a honrar nuestra piel, nuestra energía y nuestro espacio personal como un santuario que debe ser protegido para poder florecer."
            },
            ritual: {
                titulo: "Artefacto del Ritual del Sello Cósmico",
                introduccion: "Del mito de la 'Herida Cósmica', aprendieron que una barrera no solo debe ser fuerte, sino también terapéutica. De esta leyenda, hemos reconstruido un fragmento del Sello que protege el universo.",
                artefactos: [
                    { id: 'aura-mielitae', subtitulo: 'El Sello Protector de la Colmena' }
                ]
            }
        },
        mutabilis: {
            titulo: "Los Mutabilis",
            glifo: "images/arquetipo-mutabilis.png",
            filosofia: {
                titulo: "La Filosofía",
                contenido: "La filosofía Mutabilis enseña que la vida no es un estado, sino un proceso de adaptación. No ven el trauma como un enemigo, sino como un catalizador, una oportunidad para metabolizar la experiencia y emerger más resilientes y transformados."
            },
            dualidad: {
                titulo: "El Don y la Falla",
                don: "<strong>Don:</strong> Forma Fluida - La capacidad de alterar su propia fisiología para prosperar.",
                falla: "<strong>Falla:</strong> Memoria Dolorosa - La tendencia a retener el 'eco' del dolor, viviendo en un estado de inflamación crónica."
            },
            leccion: {
                titulo: "La Lección Alquímica para el Ser Moderno",
                contenido: "La saga de los Mutabilis es una guía para navegar las crisis de la vida. Nos enseña que la verdadera resiliencia no es la capacidad de resistir el cambio, sino de fluir con él. Es una invitación a ver nuestras propias cicatrices no como marcas de daño, sino como testimonios de nuestra increíble capacidad de renovación."
            },
            ritual: {
                titulo: "Artefacto del Ritual de Renovación",
                introduccion: "Del mito de la 'Piel de Roca', aprendieron que la verdadera adaptación es un ciclo de trauma, purificación y renovación. De esta leyenda, hemos reconstruido el elixir que guía a la piel a través de este proceso sagrado.",
                artefactos: [
                    { id: 'elixir-vitae', subtitulo: 'El Elixir de la Renovación' }
                ]
            }
        }
    };

    // Variables de UI Globales
    const phoneNumber = '573196805286';
    const galleryViewContainer = document.getElementById('formulaciones-gallery-container');
    const galleryInner = document.getElementById('formulaciones-gallery');
    const detailView = document.getElementById('formulaciones-detail');
    let swiper;

    // --- Inicialización ---
    setupEventListeners();
    renderGallery();

    function setupEventListeners() {
        const glifoBtn = document.getElementById('glifo-btn');
        const menuOverlay = document.getElementById('menu-overlay');
        const backBtn = document.getElementById('back-to-gallery');

        glifoBtn.addEventListener('click', () => {
            menuOverlay.classList.toggle('is-open');
        });

        menuOverlay.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => glifoBtn.click());
        });

        backBtn.addEventListener('click', showGallery);
        initAccordion();
    }

    function renderGallery() {
        galleryInner.innerHTML = '';

        products.forEach(product => {
            const cardWrapper = document.createElement('div');
            cardWrapper.className = 'flex-shrink-0 w-80 sm:w-96 snap-center';

            const displayStatus = product.status === 'en-crisol' ? '<p class="mt-4 italic text-sm opacity-60">Aún en el Crisol...</p>' : '';

            const cardLink = document.createElement('a');
            cardLink.href = `#formulaciones`;
            cardLink.className = 'block h-full product-card-link cursor-pointer';
            cardLink.dataset.productId = product.id;

            cardLink.innerHTML = `
            <div class="bg-pizarra-suave border border-oro-viejo/30 rounded-lg shadow-lg h-full flex flex-col overflow-hidden product-card transition-transform duration-300 ease-in-out hover:-translate-y-1"> 
                <div class="h-64 w-full flex-shrink-0">
                    <img src="${product.images[0]}" alt="${product.name}" class="w-full h-full object-cover" loading="lazy">
                </div>
                <div class="p-6 text-center flex flex-col flex-grow">
                    <h3 class="text-2xl text-luz-de-vela font-cinzel">${product.name}</h3>
                    <p class="text-md text-oro-viejo mt-2">${product.subtitle}</p>
                    ${displayStatus}
                </div>
            </div>
            `;

            cardWrapper.appendChild(cardLink);
            galleryInner.appendChild(cardWrapper);
        });

        galleryInner.querySelectorAll('.product-card-link').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const productId = e.currentTarget.dataset.productId;
                showProductDetail(productId);
            });
        });
    }

    function showProductDetail(productId) {
        const product = products.find(p => p.id === productId);
        if (!product) return;

        // Limpiamos los IDs duplicados al momento de capturar elementos del DOM
        const nameEl = document.getElementById('product-name');
        const subtitleEl = document.getElementById('product-subtitle');
        const priceEl = document.getElementById('product-price');
        const whatsappBtn = document.getElementById('whatsapp-cta');
        const accordionContainer = document.getElementById('product-accordion');
        const swiperWrapper = document.getElementById('product-swiper-wrapper');

        nameEl.textContent = product.name;
        subtitleEl.textContent = product.subtitle;

        // LÓGICA DE LORE PARA EL PRECIO
        if (product.status === 'en-crisol') {
            priceEl.textContent = "Aún en el Crisol...";
            priceEl.classList.add('italic', 'opacity-70');
            whatsappBtn.textContent = "[ Consultar Disponibilidad ]";
        } else {
            priceEl.textContent = new Intl.NumberFormat('es-CO', {
                style: 'currency',
                currency: 'COP',
                minimumFractionDigits: 0
            }).format(product.price);
            priceEl.classList.remove('italic', 'opacity-70');
            whatsappBtn.textContent = "[ Consultar con el Aetherista ]";
        }

        whatsappBtn.href = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(`Hola Aetheria, quisiera consultar sobre el producto: ${product.name}.`)}`;

        accordionContainer.innerHTML = product.accordion.map(item => `<div class="accordion-item bg-pizarra-suave rounded-lg border border-oro-viejo"><button class="accordion-header w-full flex justify-between items-center text-left p-4"><h4 class="text-lg">${item.title}</h4><span class="icon-plus text-oro-viejo text-2xl">+</span></button><div class="accordion-content"><div class="p-4 prose prose-invert max-w-none">${item.content}</div></div></div>`).join('');

        swiperWrapper.innerHTML = product.images.map(img => `<div class="swiper-slide"><img src="${img}" class="w-full h-auto" loading="lazy"></div>`).join('');

        if (swiper) swiper.destroy(true, true);
        swiper = new Swiper('.swiper-container', { loop: true, pagination: { el: '.swiper-pagination', clickable: true }, autoplay: { delay: 4000, disableOnInteraction: false } });

        galleryViewContainer.classList.add('hidden');
        detailView.classList.remove('hidden');
        window.scrollTo({ top: detailView.offsetTop - 100, behavior: 'smooth' });

        history.pushState({ view: 'productDetail' }, null);
    }

    function showGallery() {
        detailView.classList.add('hidden');
        galleryViewContainer.classList.remove('hidden');
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

    // --- Lógica del Oráculo (Códice) ---
   

    const manifiestoWhatsAppBtn = document.getElementById('whatsapp-manifiesto-cta');
    if (manifiestoWhatsAppBtn) {
        manifiestoWhatsAppBtn.href = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent('Hola Aetheria, me gustaría iniciar una conversación.')}`;
    }

    // --- Lógica del Grimorio ---
    const modal = document.getElementById('grimorio-modal');
    const modalContent = document.getElementById('grimorio-content');
    const modalBody = document.getElementById('grimorio-body');
    const closeBtn = document.getElementById('close-grimorio-btn');
    const openBtns = document.querySelectorAll('.open-grimorio-btn');

    function closeGrimorioAnimation() {
        modal.classList.add('opacity-0');
        modalContent.classList.add('scale-95');
        setTimeout(() => {
            modal.classList.add('invisible');
        }, 300);
    }

    function openGrimorio(arquetipoId) {
        const data = arquetipos[arquetipoId];
        if (!data) return;

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

        modal.classList.remove('invisible', 'opacity-0');
        modalContent.classList.remove('scale-95');
        location.hash = arquetipoId;
    }

    function closeGrimorio() {
        const base = window.location.href.split('#')[0];
        history.replaceState(null, null, base);
        closeGrimorioAnimation();
    }

    openBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const arquetipoId = e.currentTarget.dataset.arquetipo;
            openGrimorio(arquetipoId);
        });
    });

    closeBtn.addEventListener('click', closeGrimorio);

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeGrimorio();
        }
    });

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

    detailView.addEventListener('click', (e) => {
        const sagaBtn = e.target.closest('.open-grimorio-btn-from-product');
        if (sagaBtn) {
            e.preventDefault();
            const arquetipoId = sagaBtn.dataset.arquetipo;

            if (arquetipos[arquetipoId]) {
                showGallery();
                setTimeout(() => {
                    openGrimorio(arquetipoId);
                }, 350);
            }
        }
    });

    window.addEventListener('hashchange', () => {
        const isArquetipoHash = Object.keys(arquetipos).some(id => `#${id}` === location.hash);
        if (!isArquetipoHash && !modal.classList.contains('invisible')) {
            closeGrimorioAnimation();
        }
    });

    window.addEventListener('popstate', (event) => {
        if (!detailView.classList.contains('hidden')) {
            showGallery();
        }
    });
}; // Cierre de window.onload