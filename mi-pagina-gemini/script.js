// JavaScript source code
window.onload = function () {

    AOS.init({
        duration: 800,
        once: true,
    });

    const products = [
        {
            id: 'panacea-summus', name: 'Panacea Summus', subtitle: 'Ungüento de Alivio Profundo', price: 38000,
            images: ['images/Panacea-Summus.jpg'],
            accordion: [
                { title: 'Tesoros de Anima Mundi', content: `<ul class="list-disc list-inside space-y-2"><li><strong>Cannabis y Manzanilla:</strong> Un dúo potente que calma la inflamación y apacigua la respuesta del cuerpo al dolor profundo.</li><li><strong>Alcanfor y Mentol:</strong> El aliento de la montaña. Generan una dualidad de frío y calor que confunde al dolor y relaja la tensión.</li><li><strong>Caléndula y Romero:</strong> Repara la piel estresada, mientras el espíritu del romero estimula la circulación de la energía (Qi).</li><li><strong>Ylang Ylang:</strong> Una nota floral exótica que ayuda a calmar el espíritu (Shen) asociado a la molestia física.</li><li><strong>Base de Cera de Abejas y Karité:</strong> Un vehículo rico que sella los activos en la piel para una liberación lenta y sostenida.</li></ul>` },
                { title: 'La Promesa del Alquimista', content: '<p>Este no es un simple ungüento, es un ritual de liberación. Formulado para penetrar en el tejido y disolver los nudos de tensión. Es el aliado para el dolor muscular, la rigidez articular, o cuando el cuerpo simplemente pide restauración.</p>' },
                { title: 'Sabiduría Ancestral', content: '<p>En la MTC, el dolor es un grito del Qi (energía vital) que está estancado. Panacea Summus es una fórmula de espíritu Lithosylvan: fuerte y directa. Mueve vigorosamente la sangre (Xue) y el Qi, rompiendo el bloqueo y calmando el Shen, tratando así la manifestación física y espiritual del dolor.</p>' }
            ]
        },
        // ... Pega aquí el resto de tus productos de la misma forma ...
        {
            id: 'petra-lorien', name: 'Petra Lorien', subtitle: 'Shampoo Sólido Purificante y Fortalecedor', price: 38000,
            images: ['images/Petra-Lorien.jpg'],
            accordion: [
                { title: 'Tesoros de Anima Mundi', content: `<ul class="list-disc list-inside space-y-2"><li><strong>Bentonita:</strong> El corazón de arcilla de la tierra, un imán natural para las impurezas y el exceso de grasa.</li><li><strong>Árbol de Té y Menta:</strong> El aliento antiséptico del bosque, que purifica profundamente el cuero cabelludo.</li><li><strong>Cannabis y Romero:</strong> Un dúo que fortalece el folículo y estimula la circulación para un crecimiento sano.</li><li><strong>Miel (Fēng Mì):</strong> Aporta hidratación y brillo, asegurando que la limpieza profunda nunca sea agresiva.</li></ul>` },
                { title: 'La Promesa del Alquimista', content: '<p>Libera tu cabello de lo innecesario. Petra Lorien genera una espuma rica y purificante, limpiando desde la raíz sin despojar al cabello de su esencia. Fortalece, equilibra y deja una sensación de ligereza incomparable.</p>' },
                { title: 'Sabiduría Ancestral', content: '<p>Inspirado en la filosofía Lithosylvan. Un cuero cabelludo congestionado por "calor húmedo" estanca el Qi. La arcilla y los botánicos clarifican, eliminan el estancamiento y fortalecen la raíz.</p>' }
            ]
        },
        {
            id: 'nox-lucens', name: 'Nox Lucens', subtitle: 'Acondicionador Sólido Nutritivo y Reparador', price: 34000,
            images: ['images/Nox-Lucens.jpg'],
            accordion: [
                { title: 'Tesoros de Anima Mundi', content: `<ul class="list-disc list-inside space-y-2"><li><strong>Manteca de Cacao:</strong> El oro graso de la selva, un emoliente que devuelve la flexibilidad y la suavidad.</li><li><strong>Miel (Fēng Mì) y Cera de Abejas:</strong> Un dúo que sella la cutícula, atrapando la hidratación y reduciendo el frizz.</li><li><strong>Vitamina E:</strong> Un antioxidante esencial que protege al cabello del estrés ambiental.</li></ul>` },
                { title: 'La Promesa del Alquimista', content: '<p>La noche que ilumina. Nox Lucens se derrite en una crema sedosa para recubrir y reparar tu cabello. Desenreda, nutre y protege, dejando el cabello increíblemente suave, manejable y con un brillo nocturno.</p>' },
                { title: 'Sabiduría Ancestral', content: '<p>Si Petra Lorien es Yang (limpieza), Nox Lucens es Yin (nutrición). Es una fórmula Chironai. El cabello sano depende de una Sangre (Xue) abundante. Este acondicionador nutre el "Yin del cabello", sellando su esencia.</p>' }
            ]
        },
        {
            id: 'aura-mielitae', name: 'Aura Mielitae', subtitle: 'Bálsamo Labial Protector y Reparador', price: 26000,
            images: ['images/Aura-Mielitae.jpg'],
            accordion: [
                { title: 'Tesoros de Anima Mundi', content: `<ul class="list-disc list-inside space-y-2"><li><strong>Cera de Abejas y Manteca de Karité:</strong> Crean un velo protector que defiende la delicada piel de los labios.</li><li><strong>Caléndula:</strong> La flor sanadora que repara las fisuras y calma la irritación.</li><li><strong>Sándalo:</strong> Un ancla meditativa, cuya esencia calma la mente y el espíritu.</li></ul>` },
                { title: 'La Promesa del Alquimista', content: '<p>Tus labios son un portal. Protégelos. Aura Mielitae es un bálsamo sedoso que se funde al instante, creando un velo de confort y protección duradera. Repara, hidrata y protege para un brillo saludable y natural.</p>' },
                { title: 'Sabiduría Ancestral', content: '<p>Nace del ritual Chironai del "Sello del Orador". La cera sella, la miel nutre y la esencia de Sándalo calma la mente para que las palabras sean verdaderas y sanadoras.</p>' }
            ]
        },
        {
            id: 'elixir-vitae', name: 'Elixir Vitae', subtitle: 'Loción Post-Afeitado Equilibrante y Restauradora', price: 60000,
            images: ['images/Elixir-vitae.jpg'],
            accordion: [
                { title: 'Tesoros de Anima Mundi', content: `<ul class="list-disc list-inside space-y-2"><li><strong>Árbol de Té y Mentol:</strong> El aliento de una cima helada; calma el ardor y deja una frescura tonificante.</li><li><strong>Ácido Hialurónico y Glicerina:</strong> Un río de hidratación que restaura la humedad perdida.</li><li><strong>Aceite de Argán y Pepita de Uva:</strong> Reconstruyen la barrera de la piel sin dejar sensación grasa.</li></ul>` },
                { title: 'La Promesa del Alquimista', content: '<p>El afeitado es fuego y acero. Elixir Vitae es el agua que lo calma. Restaura el equilibrio, hidrata y tonifica, dejando la piel suave, fresca y resiliente. Transforma la agresión en un momento de restauración.</p>' },
                { title: 'Sabiduría Ancestral', content: '<p>Es el "Alivio del Crisol" para los maestros Geoforjas. El afeitado genera "fuego tóxico" en la piel. Elixir Vitae "apaga el fuego" y crea un "filtro de rocío", una barrera invisible contra el aire cáustico.</p>' }
            ]
        },
        {
            id: 'nectar-divinum', name: 'Nectar Divinum', subtitle: 'Aceite Capilar Reparador y Luminoso', price: 26000,
            images: ['images/Nectar-Divinum.jpg'],
            accordion: [
                { title: 'Tesoros de Anima Mundi', content: `<ul class="list-disc list-inside space-y-2"><li><strong>Cannabis y Argán:</strong> Nutren el folículo y sellan la cutícula para un brillo excepcional.</li><li><strong>Ácido Hialurónico:</strong> Un milagro de hidratación para el cuero cabelludo, creando una base sana.</li><li><strong>Sándalo y Tomillo:</strong> Calma el cuero cabelludo y promueve un flujo de energía saludable.</li><li><strong>Ricino y Coco:</strong> Aceites ancestrales que fortalecen, espesan y nutren profundamente la hebra capilar.</li></ul>` },
                { title: 'La Promesa del Alquimista', content: '<p>La unción final para un cabello de otro mundo. Un aceite precioso y ligero que se absorbe sin apelmazar. Sella puntas, domestica el frizz, nutre el cuero cabelludo y otorga un brillo espectacular.</p>' },
                { title: 'Sabiduría Ancestral', content: '<p>Nace de la leyenda de los Lumina, espíritus de luz. Su catalizador es el "Velo de Esporas". El cabello es el "florecimiento del Riñón". Nectar Divinum actúa como un tónico para la Esencia (Jing) y la Sangre (Xue), manifestando una fuerza vital profunda.</p>' }
            ]
        }
    ];
    // Objeto de Arquetipos CORREGIDO
    const arquetipos = {
        lithosylvan: {
            titulo: "Los Lithosylvan",
            glifo: "images/glifo-lithosylvan.png", // Asegúrate de que este sea el nombre de tu archivo de glifo
            don: {
                titulo: "El Don: Radix, la Pureza de la Forma",
                descripcion: "La capacidad de crear estructuras perfectas, resilientes y puras. Es la sabiduría de la base sólida, la disciplina y la integridad inquebrantable."
            },
            falla: {
                titulo: "La Falla: Radix Rigidus, la Petrificación del Espíritu",
                descripcion: "Cuando la estructura se vuelve rígida, se convierte en una prisión. Es el estancamiento, la incapacidad de adaptarse y la fragilidad que se esconde detrás de una dureza aparente."
            },
            saga: {
                titulo: "La Revelación del Arconte Kaelus",
                parrafos: [
                    "Cuando la Falla de Radix Rigidus amenazaba con petrificar a su pueblo, el Arconte Kaelus se retiró a un observatorio olvidado. Vio el poder del Sol (Yang), que purificaba la tierra, pero a diferencia de sus ancestros, se quedó a observar la noche.",
                    "Vio que la Luna (Yin) devolvía la humedad a la tierra agrietada, permitiendo que el mundo se nutriera. Su gran revelación fue que la fuerza del Sol, sin el contrapeso de la Luna, era una fuerza incompleta. La verdadera fuerza era la <strong>Resiliencia Flexible</strong>.",
                    "Esta saga es una alegoría de la cultura moderna del esfuerzo (hustle culture), que glorifica la acción incesante (Yang) mientras desprecia el descanso (Yin) como un signo de debilidad."
                ]
            },
            // --- LÍNEA CORREGIDA ---
            artefactos: ['petra-lorien', 'nox-lucens'] // Los IDs correctos de los productos asociados
        }
        // Aquí podremos añadir 'chironai', 'mellisonae', etc. en el futuro
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

    function showProductDetail(productId) {
        const product = products.find(p => p.id === productId);
        if (!product) return;

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
    }

    function showGallery() {
        detailView.classList.add('hidden');
        galleryView.classList.remove('hidden');
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
    // Lógica del Grimorio Revelado
    // ===================================================================
    const modal = document.getElementById('grimorio-modal');
    const modalContent = document.getElementById('grimorio-content');
    const modalBody = document.getElementById('grimorio-body');
    const closeBtn = document.getElementById('close-grimorio-btn');
    const openBtns = document.querySelectorAll('.open-grimorio-btn');

    function openGrimorio(arquetipoId) {
        const data = arquetipos[arquetipoId];
        if (!data) return;

        // Construir el contenido del grimorio dinámicamente
        modalBody.innerHTML = `
            <div class="text-center mb-8">
                <div class="w-24 h-24 mx-auto mb-4">
                    <img src="${data.glifo}" alt="Glifo de ${data.titulo}" class="w-full h-full object-contain">
                </div>
                <h2 class="text-3xl text-oro-viejo font-cinzel">${data.titulo}</h2>
            </div>

            <div class="space-y-8 text-luz-de-vela/90">
                <div>
                    <h3 class="text-xl text-purpura-alquimista mb-2 font-semibold">${data.don.titulo}</h3>
                    <p class="text-sm">${data.don.descripcion}</p>
                </div>
                <div>
                    <h3 class="text-xl text-purpura-alquimista mb-2 font-semibold">${data.falla.titulo}</h3>
                    <p class="text-sm">${data.falla.descripcion}</p>
                </div>
                <div>
                    <h3 class="text-xl text-purpura-alquimista mb-2 font-semibold">${data.saga.titulo}</h3>
                    <div class="space-y-3 text-sm">
                        ${data.saga.parrafos.map(p => `<p>${p}</p>`).join('')}
                    </div>
                </div>
                <div>
                    <h3 class="text-xl text-purpura-alquimista mb-4 font-semibold">Artefactos Asociados</h3>
                    <div class="grid grid-cols-2 gap-4">
                        ${data.artefactos.map(artefactoId => {
            const producto = products.find(p => p.id === artefactoId);
            if (!producto) return '';
            return `
                                <div class="text-center">
                                    <img src="${producto.images[0]}" alt="${producto.name}" class="rounded-md mb-2 aspect-square object-cover">
                                    <h4 class="text-sm font-semibold text-oro-viejo">${producto.name}</h4>
                                </div>
                            `;
        }).join('')}
                    </div>
                </div>
            </div>
        `;

        // Mostrar el modal
        modal.classList.remove('invisible', 'opacity-0');
        modalContent.classList.remove('scale-95');
    }

    function closeGrimorio() {
        modal.classList.add('opacity-0');
        modalContent.classList.add('scale-95');
        setTimeout(() => {
            modal.classList.add('invisible');
        }, 300); // Coincide con la duración de la transición
    }

    openBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const arquetipoId = btn.dataset.arquetipo;
            openGrimorio(arquetipoId);
        });
    });

    closeBtn.addEventListener('click', closeGrimorio);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeGrimorio();
        }
    });
};
