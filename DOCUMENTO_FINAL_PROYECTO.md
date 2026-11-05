# 📋 DOSSIER COMPLETO DEL PROYECTO
## Link in Bio Oficial & Portafolio Multimedia — PF Carlos Castro

---

### 1. Resumen Ejecutivo & Objetivo
* **Cliente / Marca:** **PF Carlos Castro** (Preparador Físico Deportivo)
* **Objetivo:** Desarrollar una página web moderna, ultra-rápida y limpia estilo *Link in Bio* (alternativa premium a Linktree), con estética deportiva y de alto rendimiento, optimizada para dispositivos móviles y con navegación fluida centrada en botones de acción y exhibición multimedia de trabajos realizados.
* **Ubicación local del proyecto:** `C:\Users\Marta\.gemini\antigravity\scratch\pf-carlos-castro-bio`

---

### 2. Identidad Visual y Paleta de Colores Oficial
Diseñada a partir del logotipo oficial (katana clavada en disco olímpico de 10 kg con kanji *Samurái*, iniciales en acero y aura roja de poder):

| Parámetro | Valor Hexadecimal / CSS | Aplicación en la Interfaz |
| :--- | :--- | :--- |
| **Fondo Principal** | `#0D0D0D` (Negro Carbón) | Modo oscuro (*Dark Mode*) con micro-malla técnica de fibra de carbono. |
| **Acento Primario** | `#B80F0F` / `#FF2A2A` (Rojo Carmesí) | Bordes con efecto resplandor (*glow*), botón principal de WhatsApp y badges. |
| **Glow Effect** | `0 0 25px rgba(184, 15, 15, 0.45)` | Resplandor circular animado alrededor del escudo y botones destacados. |
| **Texto & Metales** | `#E0E0E0` / `#FFFFFF` (Gris Plata) | Tipografías principales con acabado nítido y títulos con gradiente metálico. |
| **Acero Secundario**| `#2A2A30` / `#4A4A4A` (Acero Oscuro) | Fondos de tarjetas, bordes secundarios e iconos con relieve sutil. |

---

### 3. Estructura y Flujo de Navegación Implementado

#### A. Encabezado / Identidad Visual (Hero)
1. **Escudo Central:**
   * Logotipo oficial integrado en `assets/images/logo.jpg`.
   * Marco metálico biselado con aro exterior de resplandor dinámico carmesí pulsante.
2. **Insignia Verificada:**
   * Badge superior: *"Preparador Físico Oficial"*.
3. **Nombre de Marca:**
   * **PF Carlos Castro** (Tipografía atlética de impacto).
4. **Slogan & Subtítulo:**
   * **Alto Rendimiento • Resistencia • Trabajo Personalizado**
   * *"Entrenamiento deportivo de élite y hábitos saludables para una vida sin límites."*

#### B. Pantalla Principal: Botones de Acción Directa
1. **Botón 1 (WhatsApp Directo - Destacado en Rojo Carmesí con Glow):**
   * **Texto:** *"Contactar por WhatsApp"*
   * **Subtítulo:** `+56 9 8780 8954 • Asesoría & Planes Personalizados`
   * **Indicador en Vivo:** Punto verde pulsante de disponibilidad inmediata.
   * **Enlace configurado:**  
     `https://api.whatsapp.com/send/?phone=56987808954&text=%C2%A1Hola!+Me+gustar%C3%ADa+tener+m%C3%A1s+informaci%C3%B3n+sobre...&type=phone_number&app_absent=0`
2. **Botón 2 (Instagram Oficial):**
   * **Texto:** *"Sígueme en Instagram"*
   * **Subtítulo:** `@pf_carloscastro • Contenido, Rutinas & Tips Diarios`
   * **Enlace configurado:**  
     `https://www.instagram.com/pf_carloscastro/`
3. **Botón 3 (Sección Interna):**
   * **Texto:** *"Ver Trabajos y Casos de Éxito"*
   * **Subtítulo:** `Carpetas multimedia de fotos y videos de entrenamientos`
   * **Función:** Desplazamiento fluido (*smooth scroll*) con animación hacia la galería de proyectos.

#### C. Sección Destino: Trabajos y Casos de Éxito en Carpetas
* **Filtros por Pestañas:**
  * `Todos` (con contador total)
  * `Alta Competencia`
  * `Fútbol`
  * `Fuerza & Biomecánica`
  * `Formativo`
* **Carpetas Multimedia Preconfiguradas (con fotos reales extraídas del material):**
  1. **Entrenamiento de Alta Competencia:**
     * *Tag:* Alto Rendimiento • Fuerza & Potencia.
     * *Descripción:* Desarrollo de potencia explosiva, fuerza aplicada y resistencia neuromuscular para atletas de alto nivel competitivo.
     * *Multimedia:* Fotos de trabajo funcional dinámico en césped sintético y mancuernas + demostración de video.
  2. **Preparación Física en Fútbol & Deportes:**
     * *Tag:* Rendimiento en Cancha • Agilidad.
     * *Descripción:* Planificación física específica para futbolistas: aceleración, frenado, prevención de lesiones y salto vertical.
     * *Multimedia:* Fotos de trabajo en máquinas y circuitos pliométricos en equipo.
  3. **Transformaciones y Resultados:**
     * *Tag:* Biomecánica • Hipertrofia & Salud.
     * *Descripción:* Programación personalizada para ganancia de masa muscular, recomposición corporal y corrección postural avanzada.
     * *Multimedia:* Fotos de peso muerto convencional y coaching presencial 1 a 1 en poleas y sentadillas.
  4. **Formación a Temprana Edad & Hábitos:**
     * *Tag:* Iniciación Deportiva • Disciplina.
     * *Descripción:* "Honra tu templo a temprana edad": Guiando a niños y jóvenes en patrones básicos de movimiento, coordinación y amor por el entrenamiento.
     * *Multimedia:* Fotografía real de Carlos enseñando la técnica estricta de sentadilla a un alumno joven.
* **Visor Lightbox & Reproductor de Video Integrado:**
  * Al hacer clic en cualquier imagen o video, se expande a pantalla completa en alta calidad.
  * Controles de navegación siguiente (`→`) y anterior (`←`), soporte para cerrar con tecla `Esc` o clic fuera del visor.
* **Cargador Interactivo de Fotos y Videos en Tiempo Real:**
  * Botón: `+ Cargar Fotos / Videos`
  * Modal interactivo con zona *Drag & Drop* que permite a Carlos o a cualquier usuario subir fotos (JPG, PNG) o videos (MP4, MOV) desde su computador o teléfono para previsualizarlos al instante en la carpeta seleccionada sin recargar la página.
* **Acciones en Cada Carpeta:**
  * Botón *"Consultar por este plan"* con mensaje de WhatsApp personalizado por especialidad.
  * Botón *"Volver al inicio"* con subida fluida.

#### D. Pie de Página (Footer)
* Tarjeta destacada con marco metálico y resplandor carmesí:
  > *"Honra tu templo a temprana edad: hábitos fuertes hoy, un futuro sin límites mañana."*  
  > &mdash; **PF Carlos Castro**
* Enlaces rápidos a WhatsApp e Instagram.
* Firma de copyright y ubicación: `Santiago, Chile`.

#### E. Botón Flotante Permanente
* Botón FAB circular de WhatsApp siempre accesible en la esquina inferior derecha para contacto instantáneo en cualquier punto del recorrido.

---

### 4. Estructura de Archivos del Proyecto

```text
📁 pf-carlos-castro-bio/
│
├── 📄 index.html                        # Página web principal lista para producción
├── 📄 DOCUMENTO_FINAL_PROYECTO.md        # Este documento explicativo
├── 📄 DOCUMENTO_FINAL_PROYECTO.html      # Versión web imprimible en PDF
├── 📄 README.md                         # Guía técnica rápida
│
└── 📁 assets/
    ├── 📁 css/
    │   └── 🎨 styles.css                # Hoja de estilos con variables CSS, animaciones y Dark Mode
    │
    ├── 📁 js/
    │   └── ⚡ app.js                     # Controlador interactivo de álbumes, filtros, lightbox y subida
    │
    └── 📁 images/
        ├── 🖼️ logo.jpg                  # Logotipo oficial (katana, disco y halo rojo)
        ├── 🖼️ work-1.jpg                # Foto: Fuerza con mancuernas en gimnasio
        ├── 🖼️ work-2.jpg                # Foto: Sesión de alta competencia en césped sintético
        ├── 🖼️ work-3.jpg                # Foto: Coaching personalizado 1 a 1 en poleas
        ├── 🖼️ work-4.jpg                # Foto: Levantamiento de peso muerto pesado
        ├── 🖼️ work-5.jpg                # Foto: Formación formativa infantil (sentadilla)
        └── 🖼️ work-6.jpg                # Foto: Entrenamiento de hipertrofia en máquina
```

---

### 5. Guía para Publicar en Internet Gratis en 1 Minuto

Para que Carlos tenga su enlace activo en su perfil de Instagram (`https://...`):

#### Opción A: Netlify Drop (La más fácil y rápida - 30 segundos)
1. Entra a [app.netlify.com/drop](https://app.netlify.com/drop).
2. Arrastra la carpeta completa `pf-carlos-castro-bio` a la pantalla.
3. ¡Listo! Netlify te entregará un link web público (ej. `https://pf-carloscastro.netlify.app`).

#### Opción B: Vercel
1. Ingresa a [vercel.com](https://vercel.com) con una cuenta de Google o GitHub.
2. Haz clic en "Add New" > "Project" y sube o conecta la carpeta.
3. Despliegue automático con certificado de seguridad SSL gratis.

#### Opción C: GitHub Pages
1. Sube los archivos a un repositorio público en GitHub llamado `pf-carlos-castro`.
2. Ve a **Settings** > **Pages** > Rama `main` > Guardar.
3. Tu enlace será: `https://tuusuario.github.io/pf-carlos-castro/`.

---

### 6. Personalización Futura de Contenidos

* **Modificar teléfonos o redes:** Abre [index.html](file:///C:/Users/Marta/.gemini/antigravity/scratch/pf-carlos-castro-bio/index.html) y edita los atributos `href` de los enlaces de WhatsApp o Instagram.
* **Agregar fotos o videos permanentes:** Guarda los nuevos archivos dentro de la carpeta `assets/images/` y agrega sus datos en el archivo [assets/js/app.js](file:///C:/Users/Marta/.gemini/antigravity/scratch/pf-carlos-castro-bio/assets/js/app.js) en la lista `initialAlbums`.
