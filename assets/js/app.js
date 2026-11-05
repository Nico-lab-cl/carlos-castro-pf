/**
 * PF CARLOS CASTRO - Link in Bio & Portafolio Multimedia
 * Lógica interactiva: Carpetas, Álbumes, Lightbox, Videos y Carga Local
 */

document.addEventListener('DOMContentLoaded', () => {
  // Datos iniciales de álbumes y trabajos realizados
  const initialAlbums = [
    {
      id: 'alta-competencia',
      category: 'alta-competencia',
      title: 'Entrenamiento de Alta Competencia',
      tag: 'Alto Rendimiento • Fuerza & Potencia',
      description: 'Desarrollo de potencia explosiva, fuerza aplicada y resistencia neuromuscular para atletas de alto nivel competitivo.',
      whatsappMsg: '¡Hola Carlos! Me interesa conocer los planes de Entrenamiento de Alta Competencia.',
      items: [
        {
          type: 'image',
          src: 'assets/images/work-2.jpg',
          title: 'Sesión Dinámica en Césped Sintético',
          caption: 'Entrenamiento funcional de potencia y velocidad con balón medicinal y pesas rusas.'
        },
        {
          type: 'image',
          src: 'assets/images/work-1.jpg',
          title: 'Acondicionamiento y Fuerza con Mancuernas',
          caption: 'Control postural, tensión mecánica y trabajo unilateral de tren superior.'
        },
        {
          type: 'video',
          src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
          poster: 'assets/images/work-4.jpg',
          title: 'Reel: Test de Fuerza Explosiva',
          caption: 'Monitoreo de levantamiento olímpico y velocidad de barra.'
        }
      ]
    },
    {
      id: 'futbol',
      category: 'futbol',
      title: 'Preparación Física en Fútbol & Deportes',
      tag: 'Rendimiento en Cancha • Agilidad',
      description: 'Planificación física específica para futbolistas: aceleración, frenado, prevención de lesiones y salto vertical.',
      whatsappMsg: '¡Hola Carlos! Quiero cotizar preparación física específica para fútbol / deportes colectivos.',
      items: [
        {
          type: 'image',
          src: 'assets/images/work-6.jpg',
          title: 'Entrenamiento de Fuerza en Máquinas',
          caption: 'Sobrecarga guiada para desarrollo de cadenas posteriores y gemelos en deportistas.'
        },
        {
          type: 'image',
          src: 'assets/images/work-2.jpg',
          title: 'Circuito de Agilidad y Trabajo en Equipo',
          caption: 'Ejercicios pliométricos en cajón y transferencias de fuerza al gesto deportivo.'
        }
      ]
    },
    {
      id: 'fuerza-transformacion',
      category: 'fuerza-transformacion',
      title: 'Transformaciones y Resultados',
      tag: 'Biomecánica • Hipertrofia & Salud',
      description: 'Programación personalizada para ganancia de masa muscular, recomposición corporal y corrección postural avanzada.',
      whatsappMsg: '¡Hola Carlos! Quisiera información sobre el plan personalizado de Transformación y Fuerza.',
      items: [
        {
          type: 'image',
          src: 'assets/images/work-4.jpg',
          title: 'Peso Muerto Convencional',
          caption: 'Técnica estricta y sobrecarga progresiva en levantamientos básicos.'
        },
        {
          type: 'image',
          src: 'assets/images/work-3.jpg',
          title: 'Coaching 1 a 1 en Poleas y Sentadillas',
          caption: 'Supervisión constante de los ángulos de tracción y biomecánica articular.'
        },
        {
          type: 'image',
          src: 'assets/images/work-1.jpg',
          title: 'Hipertrofia Funcional',
          caption: 'Enfoque en calidad de contracción y volumen adaptado a cada persona.'
        }
      ]
    },
    {
      id: 'temprana-edad',
      category: 'temprana-edad',
      title: 'Formación a Temprana Edad & Hábitos',
      tag: 'Iniciación Deportiva • Disciplina',
      description: '"Honra tu templo a temprana edad": Guiando a niños y jóvenes en patrones básicos de movimiento, coordinación y amor por el entrenamiento.',
      whatsappMsg: '¡Hola Carlos! Me gustaría saber sobre el entrenamiento formativo para niños y jóvenes.',
      items: [
        {
          type: 'image',
          src: 'assets/images/work-5.jpg',
          title: 'Enseñanza Técnica de Sentadilla',
          caption: 'Inculcando patrones biomecánicos correctos y disciplina de manera lúdica y segura.'
        }
      ]
    }
  ];

  let albums = [...initialAlbums];
  let currentActiveFilter = 'all';

  // Referencias DOM
  const foldersGrid = document.getElementById('foldersGrid');
  const filterButtons = document.querySelectorAll('.folder-tab-btn');
  const btnScrollPortfolio = document.getElementById('btnScrollPortfolio');
  const portfolioSection = document.getElementById('portfolioSection');

  // Modal Lightbox
  const lightboxModal = document.getElementById('lightboxModal');
  const lightboxImage = document.getElementById('lightboxImage');
  const lightboxVideo = document.getElementById('lightboxVideo');
  const lightboxTitle = document.getElementById('lightboxTitle');
  const lightboxCaption = document.getElementById('lightboxCaption');
  const lightboxCounter = document.getElementById('lightboxCounter');
  const btnCloseModal = document.getElementById('btnCloseModal');
  const btnPrevMedia = document.getElementById('btnPrevMedia');
  const btnNextMedia = document.getElementById('btnNextMedia');

  // Modal Cargar Archivos
  const uploadModal = document.getElementById('uploadModal');
  const btnOpenUpload = document.getElementById('btnOpenUpload');
  const btnCloseUpload = document.getElementById('btnCloseUpload');
  const uploadDropzone = document.getElementById('uploadDropzone');
  const fileInput = document.getElementById('fileInput');
  const uploadForm = document.getElementById('uploadForm');
  const targetFolderSelect = document.getElementById('targetFolderSelect');
  const mediaTitleInput = document.getElementById('mediaTitleInput');
  const mediaCaptionInput = document.getElementById('mediaCaptionInput');

  // Toast
  const toastNotice = document.getElementById('toastNotice');
  const toastText = document.getElementById('toastText');

  // Estado del visor modal
  let currentAlbumItems = [];
  let currentItemIndex = 0;

  // 1. Renderizar Carpetas / Álbumes
  function renderAlbums() {
    foldersGrid.innerHTML = '';

    const filtered = currentActiveFilter === 'all' 
      ? albums 
      : albums.filter(a => a.category === currentActiveFilter);

    if (filtered.length === 0) {
      foldersGrid.innerHTML = `
        <div style="text-align:center; padding: 2.5rem; background: var(--bg-card); border-radius: var(--radius-lg); border: 1px dashed var(--steel-border);">
          <p style="color: var(--silver-muted);">No hay trabajos en esta carpeta por el momento.</p>
        </div>
      `;
      return;
    }

    filtered.forEach((album) => {
      const albumCard = document.createElement('article');
      albumCard.className = 'album-card';
      albumCard.id = `album-${album.id}`;

      // Generar items de multimedia
      const mediaHtml = album.items.map((item, idx) => {
        const isVid = item.type === 'video';
        const posterSrc = isVid ? (item.poster || item.src) : item.src;
        return `
          <div class="media-item ${isVid ? 'is-video' : ''}" data-album-id="${album.id}" data-item-index="${idx}">
            <img src="${posterSrc}" alt="${item.title}" loading="lazy" />
            <div class="media-overlay">
              <span class="media-tag-icon">
                ${isVid 
                  ? `<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg>` 
                  : `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>`}
              </span>
              <p class="media-title-caption">${item.title}</p>
            </div>
            ${isVid ? `
              <div class="video-play-badge">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><polygon points="6 4 20 12 6 20 6 4"/></svg>
              </div>
            ` : ''}
          </div>
        `;
      }).join('');

      const encodedMsg = encodeURIComponent(album.whatsappMsg);
      const whatsappHref = `https://api.whatsapp.com/send/?phone=56987808954&text=${encodedMsg}&type=phone_number&app_absent=0`;

      albumCard.innerHTML = `
        <div class="album-header">
          <div class="album-meta-title">
            <span class="album-tag">${album.tag}</span>
            <h3 class="album-title">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent-red-bright)" stroke-width="2">
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              ${album.title}
            </h3>
            <p class="album-description">${album.description}</p>
          </div>
          <div class="album-badge-count">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/>
            </svg>
            ${album.items.length} archivos
          </div>
        </div>

        <div class="album-media-viewport">
          <div class="media-gallery-grid">
            ${mediaHtml}
          </div>
        </div>

        <div class="album-footer-actions">
          <a href="${whatsappHref}" target="_blank" rel="noopener noreferrer" class="btn-album-action whatsapp">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Consultar por este plan
          </a>
          <button type="button" class="btn-album-action back-top" onclick="window.scrollTo({top: 0, behavior: 'smooth'});">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="18 15 12 9 6 15"/>
            </svg>
            Volver al inicio
          </button>
        </div>
      `;

      foldersGrid.appendChild(albumCard);
    });

    // Actualizar badges en botones de tabs
    updateTabBadges();
  }

  function updateTabBadges() {
    const counts = {
      'all': albums.reduce((acc, a) => acc + a.items.length, 0),
      'alta-competencia': albums.find(a => a.category === 'alta-competencia')?.items.length || 0,
      'futbol': albums.find(a => a.category === 'futbol')?.items.length || 0,
      'fuerza-transformacion': albums.find(a => a.category === 'fuerza-transformacion')?.items.length || 0,
      'temprana-edad': albums.find(a => a.category === 'temprana-edad')?.items.length || 0
    };

    filterButtons.forEach(btn => {
      const cat = btn.getAttribute('data-filter');
      const badge = btn.querySelector('.badge');
      if (badge && counts[cat] !== undefined) {
        badge.textContent = counts[cat];
      }
    });
  }

  // 2. Filtros de Categorías
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentActiveFilter = btn.getAttribute('data-filter');
      renderAlbums();
    });
  });

  // 3. Scroll Suave hacia la sección de Trabajos
  if (btnScrollPortfolio) {
    btnScrollPortfolio.addEventListener('click', (e) => {
      e.preventDefault();
      portfolioSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }

  // 4. Delegación de Click en Galería para Lightbox
  foldersGrid.addEventListener('click', (e) => {
    const itemEl = e.target.closest('.media-item');
    if (!itemEl) return;

    const albumId = itemEl.getAttribute('data-album-id');
    const itemIndex = parseInt(itemEl.getAttribute('data-item-index'), 10);
    const targetAlbum = albums.find(a => a.id === albumId);

    if (targetAlbum && targetAlbum.items[itemIndex]) {
      currentAlbumItems = targetAlbum.items;
      currentItemIndex = itemIndex;
      openLightbox();
    }
  });

  // 5. Lightbox Modal
  function openLightbox() {
    updateLightboxMedia();
    lightboxModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    lightboxModal.classList.remove('active');
    lightboxVideo.pause();
    lightboxVideo.currentTime = 0;
    lightboxVideo.style.display = 'none';
    lightboxImage.style.display = 'none';
    document.body.style.overflow = '';
  }

  function updateLightboxMedia() {
    const item = currentAlbumItems[currentItemIndex];
    if (!item) return;

    lightboxTitle.textContent = item.title;
    lightboxCaption.textContent = item.caption || '';
    lightboxCounter.textContent = `${currentItemIndex + 1} de ${currentAlbumItems.length}`;

    if (item.type === 'video') {
      lightboxImage.style.display = 'none';
      lightboxVideo.style.display = 'block';
      lightboxVideo.src = item.src;
      lightboxVideo.play().catch(() => {});
    } else {
      lightboxVideo.pause();
      lightboxVideo.style.display = 'none';
      lightboxImage.style.display = 'block';
      lightboxImage.src = item.src;
      lightboxImage.alt = item.title;
    }
  }

  function nextMedia() {
    currentItemIndex = (currentItemIndex + 1) % currentAlbumItems.length;
    updateLightboxMedia();
  }

  function prevMedia() {
    currentItemIndex = (currentItemIndex - 1 + currentAlbumItems.length) % currentAlbumItems.length;
    updateLightboxMedia();
  }

  btnCloseModal.addEventListener('click', closeLightbox);
  btnNextMedia.addEventListener('click', nextMedia);
  btnPrevMedia.addEventListener('click', prevMedia);

  lightboxModal.addEventListener('click', (e) => {
    if (e.target === lightboxModal) closeLightbox();
  });

  document.addEventListener('keydown', (e) => {
    if (!lightboxModal.classList.contains('active')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') nextMedia();
    if (e.key === 'ArrowLeft') prevMedia();
  });

  // 6. Modal de Carga de Archivos Locales (Previsualización de Fotos y Videos)
  let selectedFileObj = null;

  btnOpenUpload.addEventListener('click', () => {
    uploadModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  });

  btnCloseUpload.addEventListener('click', () => {
    uploadModal.classList.remove('active');
    document.body.style.overflow = '';
    resetUploadForm();
  });

  uploadModal.addEventListener('click', (e) => {
    if (e.target === uploadModal) {
      uploadModal.classList.remove('active');
      document.body.style.overflow = '';
      resetUploadForm();
    }
  });

  // Drag & drop
  uploadDropzone.addEventListener('dragover', (e) => {
    e.preventDefault();
    uploadDropzone.classList.add('dragover');
  });

  uploadDropzone.addEventListener('dragleave', () => {
    uploadDropzone.classList.remove('dragover');
  });

  uploadDropzone.addEventListener('drop', (e) => {
    e.preventDefault();
    uploadDropzone.classList.remove('dragover');
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleSelectedFile(e.dataTransfer.files[0]);
    }
  });

  fileInput.addEventListener('change', (e) => {
    if (e.target.files && e.target.files[0]) {
      handleSelectedFile(e.target.files[0]);
    }
  });

  function handleSelectedFile(file) {
    selectedFileObj = file;
    const dropzoneText = uploadDropzone.querySelector('p');
    if (dropzoneText) {
      dropzoneText.innerHTML = `<strong>Archivo seleccionado:</strong> ${file.name} (${(file.size / 1024 / 1024).toFixed(2)} MB)`;
    }
    if (!mediaTitleInput.value) {
      // Autocompletar título limpio
      const cleanName = file.name.replace(/\.[^/.]+$/, "").replace(/[-_]/g, " ");
      mediaTitleInput.value = cleanName.charAt(0).toUpperCase() + cleanName.slice(1);
    }
  }

  function resetUploadForm() {
    selectedFileObj = null;
    fileInput.value = '';
    mediaTitleInput.value = '';
    mediaCaptionInput.value = '';
    const dropzoneText = uploadDropzone.querySelector('p');
    if (dropzoneText) {
      dropzoneText.innerHTML = '<strong>Haz clic para seleccionar</strong> o arrastra aquí tu foto o video (JPG, PNG, MP4, MOV)';
    }
  }

  uploadForm.addEventListener('submit', (e) => {
    e.preventDefault();

    if (!selectedFileObj) {
      showToast('Por favor selecciona una foto o video antes de guardar.');
      return;
    }

    const folderId = targetFolderSelect.value;
    const targetAlbum = albums.find(a => a.id === folderId);
    if (!targetAlbum) return;

    const fileUrl = URL.createObjectURL(selectedFileObj);
    const isVideo = selectedFileObj.type.startsWith('video');

    const newItem = {
      type: isVideo ? 'video' : 'image',
      src: fileUrl,
      title: mediaTitleInput.value || (isVideo ? 'Nuevo Video' : 'Nueva Foto'),
      caption: mediaCaptionInput.value || 'Archivo cargado en sesión'
    };

    if (isVideo) {
      newItem.poster = 'assets/images/logo.jpg';
    }

    // Agregar al inicio del álbum seleccionado
    targetAlbum.items.unshift(newItem);

    // Renderizar
    renderAlbums();

    // Feedback
    uploadModal.classList.remove('active');
    document.body.style.overflow = '';
    resetUploadForm();
    showToast(`¡Elemento añadido con éxito a "${targetAlbum.title}"!`);

    // Scroll hasta el álbum modificado
    const modifiedAlbumEl = document.getElementById(`album-${folderId}`);
    if (modifiedAlbumEl) {
      modifiedAlbumEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  });

  // 7. Notificaciones Toast
  let toastTimer = null;
  function showToast(message) {
    if (toastTimer) clearTimeout(toastTimer);
    toastText.textContent = message;
    toastNotice.classList.add('show');
    toastTimer = setTimeout(() => {
      toastNotice.classList.remove('show');
    }, 3800);
  }

  // Inicialización
  renderAlbums();
});
