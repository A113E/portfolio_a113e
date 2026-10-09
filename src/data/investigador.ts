// src/data/investigador.ts

export const perfil = {
  nombre: 'Alberto Adrián Mártir González',
  titular: 'Investigador técnico · Ciencias de la Información · Información en salud',
  resumen:
    'Profesional de las Ciencias de la Información con experiencia en investigación aplicada, metodología científica y apoyo a la producción académica. He colaborado en proyectos I+D en salud, asesorado tesis de pregrado y posgrado, y publicado en revistas cubanas y de Centroamérica. Mi enfoque: rigor metodológico, claridad expositiva y uso de herramientas digitales para la investigación.',
  cv: '/investigador/cv',
  ubicacion: 'Cerro, La Habana, Cuba',
  disponibilidad: 'Abierto a colaboraciones científicas',
  email: 'amg11amg2@gmail.com',
  telefono: '+53 5 8426686',
  linkedin: 'linkedin.com/in/alberto-gonzalez-9b4777339',
  github: 'github.com/A113E',
  orcid: '0009-0006-0403-9422',
  orcidUrl: 'https://orcid.org/0009-0006-0403-9422',
  scholarUrl: 'https://scholar.google.com/citations?user=jbtpyo4AAAAJ&hl=es',
};

export const trayectoria = [
  {
    id: 'fcm-invest',
    numeral: 'I',
    institucion: 'Universidad de Ciencias Médicas "Salvador Allende"',
    logo: '/img/salvador-allende.png',
    cargo: 'Especialista en Gestión de la Información · Investigador técnico',
    periodo: 'oct 2021 — nov 2025',
    ubicacion: 'Cerro, La Habana',
    funciones: [
      'Servicio de Búsqueda Bibliográfica y Alfabetización Informacional: atención permanente a estudiantes, profesores, residentes y trabajadores del centro, con orientación en el uso de bases de datos científicas (PubMed, Scielo, BVS, Google Académico), descriptores DeCS y MeSH, y estrategias avanzadas de búsqueda.',
      'Asesoría metodológica en tesis de pregrado y posgrado, tesinas, informes técnicos, publicaciones científicas y trabajos académicos, abarcando desde la formulación del problema hasta la redacción y citación.',
      'Talleres de metodología de la investigación, búsqueda bibliográfica, gestión de referencias con Zotero y uso de recursos científicos, impartidos tanto a usuarios internos como externos al centro.',
      'Apoyo docente en asignaturas relacionadas con la investigación científica en diferentes carreras de la Facultad de Ciencias Médicas, complementando la docencia reglada con módulos de metodología.',
      'Apoyo directo al Departamento de Posgrado en la organización de eventos y jornadas investigativas, así como en el acompañamiento metodológico a los participantes.',
      'Administración, coordinación y participación como miembro del comité organizativo y ponente en eventos científicos institucionales como GERAT Habana 2021 y CONFACSA 2025.',
      'Automatización de análisis estadísticos (método Delphi, cálculo de remuneraciones en proyectos científicos) con Excel + VBA, reduciendo tiempos y errores en los procesos de investigación.',
    ],
    logros: [
      'Automaticé el cálculo de remuneraciones de proyectos científicos reduciendo el tiempo de proceso en un 50%.',
      'Acompañé metodológicamente más de una decena de tesis, tesinas e informes técnicos.',
      'Contribuí a la organización de al menos dos eventos científicos institucionales.',
    ],
    herramientas: ['Zotero', 'BVS', 'DeCS', 'MeSH', 'PubMed', 'Scielo', 'Excel + VBA', 'Moodle', 'Google Académico'],
  },
];

export const publicaciones = [
  {
    id: 'heberprot',
    titulo: 'Uso de Heberprot-P® en pacientes con úlcera de pie diabético',
    revista: 'Revista Cubana de Angiología y Cirugía Vascular',
    year: '2024',
    rol: 'Coautor',
    url: 'https://revangiologia.sld.cu/index.php/ang/article/view/477',
  },
  {
    id: 'cuidadores-prevencion',
    titulo: 'Preparación de los cuidadores de ancianos dependientes para la prevención del pie diabético',
    revista: 'Revista Cubana de Angiología y Cirugía Vascular',
    year: '2024',
    rol: 'Coautor',
    url: 'https://revangiologia.sld.cu/index.php/ang/article/view/476',
  },
  {
    id: 'periodontitis',
    titulo: 'La periodontitis y su asociación con la enfermedad arterial periférica',
    revista: 'Revista Cubana de Angiología y Cirugía Vascular',
    year: '2025',
    rol: 'Coautor',
    url: 'https://revangiologia.sld.cu/index.php/ang/article/view/980',
  },
  {
    id: 'una-salud',
    titulo: 'Sustentos históricos y bioéticos del enfoque "Una salud"',
    revista: 'Revista Filosofía, Historia y Salud',
    year: '2025',
    rol: 'Coautor',
    url: 'https://revfhs.sld.cu/index.php/fhs/article/view/580',
  },
  {
    id: 'registro-digital',
    titulo: 'Registro digital para personas cuidadoras de pacientes dependientes en la tercera edad (Proyecto Prevención del Pie Diabético)',
    revista: 'Revista de Gerontología y Geriatría',
    year: '2024',
    rol: 'Coautor',
    url: 'https://revgeroinfo.sld.cu/index.php/gerf/article/view/297',
  },
  {
    id: 'ulcera-compleja',
    titulo: 'Úlcera de pie diabético compleja en paciente con Nefropatía Diabética',
    revista: 'Revista de Ciencias Médicas y de la Vida',
    year: '2024',
    rol: 'Coautor',
    url: 'https://editorial.udv.edu.gt/index.php/RCMV/article/view/163',
  },
  {
    id: 'tecnicas-busqueda',
    titulo: 'Técnicas Efectivas para estrategias la Búsqueda, Indización y Procesamiento en Recursos Bibliográficos',
    revista: 'CONFACSA 2025',
    year: '2025',
    rol: 'Coautor',
    url: 'https://eventosfacultadsallende.sld.cu/index.php/confacsa/2025/paper/view/90',
  },
  {
    id: 'piediabetico-youtube',
    titulo: 'PieDiabético_EducaciónOnline: Un canal de salud educativo en YouTube',
    revista: 'CONFACSA 2025',
    year: '2025',
    rol: 'Autor principal',
    url: 'https://eventosfacultadsallende.sld.cu/index.php/confacsa/2025/paper/view/143',
  },
];

export const eventos = [
  { year: '2021', nombre: 'GERAT Habana 2021', contexto: 'Evento científico nacional e internacional · Ponente' },
  { year: '2022', nombre: 'Simposio Científico Internacional en Ciencias de la Salud "El Salvador"', contexto: 'Participación científica internacional' },
  { year: '2023', nombre: 'Séptimo Congreso Internacional de Cuerpos Académicos de Enfermería', contexto: 'Universidad Autónoma de México' },
  { year: '2023-2025', nombre: 'CONFACSA', contexto: 'Conferencia científica · Ediciones 2023 a 2025' },
  { year: '2022', nombre: 'HISTARMED', contexto: 'Edición 2022' },
  { year: '2024', nombre: 'HISTARMED', contexto: 'Edición 2024' },
];

export const proyectos = [
  {
    nombre: 'Medios Diagnósticos para la COVID-19',
    institucion: 'Universidad "Salvador Allende"',
    periodo: '2022 — 2026',
    rol: 'Miembro del equipo de investigación',
    descripcion:
      'Estudio y organización de los medios diagnósticos empleados durante la pandemia de COVID-19, con impacto en la docencia y la investigación en ciencias de la salud.',
    tags: ['Investigación', 'Salud', 'Análisis de datos'],
  },
  {
    nombre: 'Estrategia educativa a cuidadores de ancianos dependientes con pie diabético',
    institucion: 'CITED',
    periodo: '2022 — 2026',
    rol: 'Miembro del equipo de investigación',
    descripcion:
      'Diseño e implementación de una estrategia educativa dirigida a cuidadores de adultos mayores dependientes con pie diabético.',
    tags: ['Educación para la salud', 'Pie diabético', 'Cuidadores'],
  },
  {
    nombre: 'Estrategia educativa podológica para cuidadores de ancianos dependientes con pie diabético',
    institucion: 'CITED',
    periodo: '2022 — 2027',
    rol: 'Miembro del equipo de investigación',
    descripcion:
      'Continuación y ampliación del proyecto anterior con enfoque podológico, extendiendo la formación y seguimiento de cuidadores hasta 2027.',
    tags: ['Podología', 'Pie diabético', 'Educación'],
  },
  {
    nombre: 'Plantas Medicinales',
    institucion: 'Universidad "Salvador Allende"',
    periodo: '2023 — 2027',
    rol: 'Miembro del equipo de investigación',
    descripcion:
      'Proyecto médico-educacional orientado al conocimiento del uso de las plantas medicinales en el tratamiento de enfermedades y uso clínico-experimental.',
    tags: ['Investigación', 'Salud', 'Plantas medicinales'],
  },
  {
    nombre: 'Plataforma para la Gestión de Eventos y Ferias Expositivas — FEVEXPO',
    institucion: 'Desoft',
    periodo: '2025 — 2027',
    rol: 'Arquitecto de software',
    descripcion:
      'Plataforma integral para eventos y ferias expositivas sobre Odoo. Análisis de requisitos, arquitectura, implementación de módulos OCA y módulos propios.',
    tags: ['Odoo', 'Arquitectura', 'Eventos'],
  },
];

export const formacion = [
  {
    id: 'licenciatura',
    rango: 'Universitario',
    titulo: 'Licenciatura en Sistemas de Información',
    institucion: 'FCM "Salvador Allende"',
    periodo: '2021 — 2025',
    destacado: 'Título de Oro',
    menciones: ['Premio "Mario Muñoz"', 'Estudiante Más Integral', 'Invitado especial a 4 pruebas estatales'],
  },
  {
    id: 'tecnico',
    rango: 'Técnico medio',
    titulo: 'Técnico en Ciencias Informáticas',
    institucion: 'Politécnico "FAYR"',
    periodo: '2014 — 2018',
    destacado: null,
    menciones: [],
  },
];

export const certificaciones = [
  {
    titulo: 'FullStack Open',
    institucion: 'Universidad de Helsinki',
    periodo: '2022 — 2025',
    descripcion: 'Programa internacional de desarrollo Full Stack con créditos universitarios.',
  },
  {
    titulo: 'Curso Básico — Desarrollo Odoo',
    institucion: 'DESOFT',
    periodo: '2025 — 2026',
    descripcion: 'Formación en desarrollo sobre el framework Odoo.',
  },
];

export const idiomas = [
  { nombre: 'Español', nivel: 'Nativo', valor: 100, etiqueta: 'C2' },
  { nombre: 'Inglés', nivel: 'Intermedio', valor: 60, etiqueta: 'B2' },
];

export const softSkills = [
  { nombre: 'Rigor metodológico', detalle: 'Aplicación estricta de métodos científicos en cada proyecto.' },
  { nombre: 'Pensamiento crítico', detalle: 'Análisis de fuentes, evaluación de evidencia y argumentación.' },
  { nombre: 'Redacción científica', detalle: 'Claridad, precisión y estructura en textos académicos.' },
  { nombre: 'Búsqueda avanzada', detalle: 'Dominio de bases de datos científicas y estrategias de indización.' },
  { nombre: 'Asesoría académica', detalle: 'Acompañamiento a tesistas, docentes e investigadores.' },
  { nombre: 'Colaboración interdisciplinaria', detalle: 'Trabajo con equipos de salud, educación e informática.' },
];