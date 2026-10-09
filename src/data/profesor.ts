// src/data/profesor.ts

export const perfil = {
  nombre: 'Alberto Adrián Mártir González',
  titular: 'Profesor ayudante universitario · Docencia en Ciencias de la Información · Mentoría académica',
  resumen:
    'Ayudante docente universitario con más de 4 años de experiencia en formación técnica y profesional. He impartido asignaturas de arquitectura de máquinas, estadística, programación, indización, diseño y gestión de bases de datos, diseño web, matemáticas, demografía y alfabetización informacional. Mi enfoque: rigor metodológico, claridad expositiva y acompañamiento cercano al estudiante.',
  cv: '/profesor/cv',
  ubicacion: 'Cerro, La Habana, Cuba',
  disponibilidad: 'Abierto a oportunidades docentes',
  email: 'amg11amg2@gmail.com',
  telefono: '+53 5 8426686',
  linkedin: 'linkedin.com/in/alberto-gonzalez-9b4777339',
  github: 'github.com/A113E',
};

export const trayectoria = [
  {
    id: 'fcm-docente',
    numeral: 'I',
    institucion: 'Universidad de Ciencias Médicas "Salvador Allende"',
    logo: '/img/salvador-allende.png',
    cargo: 'Especialista en Gestión de la Información · Profesor Ayudante',
    periodo: 'oct 2021 — nov 2025',
    ubicacion: 'Cerro, La Habana',
    funciones: [
      'Impartición de asignaturas de pregrado en la Facultad de Ciencias Médicas: Arquitectura de Máquinas, Estadística Inferencial, Programación, Indización, Diseño y Gestión de Bases de Datos, Investigación Científica, Metodología de la Investigación, Diseño Web, Matemáticas, Demografía y Alfabetización Informacional.',
      'Profesor ayudante en el posgrado de Alfabetización Informacional y Búsqueda Bibliográfica, vinculado al proyecto I+D "Plantas Medicinales" del Salvador Allende.',
      'Asesoría metodológica a profesores, residentes, especialistas y tesistas en búsqueda bibliográfica, redacción científica y gestión de referencias (Zotero, BVS, DeCS, MeSH).',
      'Diseño de materiales didácticos y guías de estudio para asignaturas técnicas y metodológicas.',
      'Acompañamiento en la elaboración de tesis de pregrado y posgrado: metodología, estructura y presentación.',
      'Participación como ponente en eventos científicos nacionales e internacionales (GERAT Habana, CONFACSA, HISTARMED).',
    ],
    logros: [
      'Formé a estudiantes de pregrado en asignaturas técnicas y metodológicas durante 4 cursos académicos.',
      'Acompañé la elaboración de tesis de pregrado y posgrado en áreas de información y salud.',
      'Colaboré en el posgrado de Alfabetización Informacional vinculado a un proyecto I+D institucional.',
    ],
    herramientas: ['Moodle', 'Zotero', 'BVS', 'DeCS', 'MeSH', 'Excel', 'PowerPoint', 'Metodología científica'],
  },
  {
    id: 'disaic-docente',
    numeral: 'II',
    institucion: 'DISAIC',
    logo: '/img/disaic.png',
    cargo: 'Consultor TIC · Formador',
    periodo: 'ene 2018 — dic 2020',
    ubicacion: 'Cerro, La Habana',
    funciones: [
      'Impartición de cursos de WordPress, Joomla y XAMPP a usuarios y clientes sectoriales.',
      'Capacitación en gestión de contenidos con CMS: instalación, configuración, publicación y mantenimiento.',
      'Diseño de materiales y ejercicios prácticos para las formaciones.',
      'Acompañamiento técnico post-formación a los usuarios.',
    ],
    logros: [
      'Capacité a usuarios de diferentes sectores en el uso de CMS para gestión de contenidos.',
      'Diseñé materiales didácticos adaptados al nivel de cada grupo.',
    ],
    herramientas: ['WordPress', 'Joomla', 'XAMPP', 'HTML', 'CSS', 'PHP'],
  },
];

export const asignaturas = [
  {
    id: 'arquitectura',
    nombre: 'Arquitectura de Máquinas',
    institucion: 'FCM "Salvador Allende"',
    icono: 'cpu',
    descripcion: 'Fundamentos de hardware, arquitectura y sistemas operativos.',
  },
  {
    id: 'estadistica',
    nombre: 'Estadística Inferencial',
    institucion: 'FCM "Salvador Allende"',
    icono: 'chart',
    descripcion: 'Métodos estadísticos para análisis de datos en ciencias de la salud.',
  },
  {
    id: 'programacion',
    nombre: 'Programación',
    institucion: 'FCM "Salvador Allende"',
    icono: 'code',
    descripcion: 'Fundamentos de programación y resolución de problemas con código.',
  },
  {
    id: 'indizacion',
    nombre: 'Indización',
    institucion: 'FCM "Salvador Allende"',
    icono: 'tag',
    descripcion: 'Lenguajes documentales, descriptores y control de autoridades.',
  },
  {
    id: 'bd',
    nombre: 'Diseño y Gestión de Bases de Datos',
    institucion: 'FCM "Salvador Allende"',
    icono: 'database',
    descripcion: 'Modelado relacional, SQL y administración de bases de datos.',
  },
  {
    id: 'investigacion',
    nombre: 'Investigación Científica',
    institucion: 'FCM "Salvador Allende"',
    icono: 'search',
    descripcion: 'Metodología, diseño de estudios y redacción científica.',
  },
  {
    id: 'metodologia',
    nombre: 'Metodología de la Investigación',
    institucion: 'FCM "Salvador Allende"',
    icono: 'compass',
    descripcion: 'Enfoques cualitativos y cuantitativos, técnicas de recolección.',
  },
  {
    id: 'web',
    nombre: 'Diseño Web',
    institucion: 'FCM "Salvador Allende"',
    icono: 'globe',
    descripcion: 'HTML, CSS y fundamentos de diseño de interfaces.',
  },
  {
    id: 'matematicas',
    nombre: 'Matemáticas',
    institucion: 'FCM "Salvador Allende"',
    icono: 'sigma',
    descripcion: 'Álgebra, funciones y fundamentos matemáticos aplicados.',
  },
  {
    id: 'demografia',
    nombre: 'Demografía',
    institucion: 'FCM "Salvador Allende"',
    icono: 'users',
    descripcion: 'Estudio de poblaciones, indicadores y análisis demográfico.',
  },
  {
    id: 'alfabetizacion',
    nombre: 'Alfabetización Informacional',
    institucion: 'FCM "Salvador Allende"',
    icono: 'book',
    descripcion: 'Competencias en búsqueda, evaluación y uso de la información.',
  },
  {
    id: 'wordpress',
    nombre: 'WordPress',
    institucion: 'DISAIC',
    icono: 'wordpress',
    descripcion: 'Gestión de contenidos, temas, plugins y publicación.',
  },
  {
    id: 'joomla',
    nombre: 'Joomla',
    institucion: 'DISAIC',
    icono: 'globe',
    descripcion: 'CMS para gestión de contenidos institucionales.',
  },
  {
    id: 'xampp',
    nombre: 'XAMPP',
    institucion: 'DISAIC',
    icono: 'server',
    descripcion: 'Entorno local para desarrollo web: Apache, MySQL, PHP.',
  },
];

export const posgrado = {
  titulo: 'Alfabetización Informacional y Búsqueda Bibliográfica',
  institucion: 'Universidad de Ciencias Médicas "Salvador Allende"',
  proyecto: 'Proyecto I+D "Plantas Medicinales"',
  rol: 'Profesor ayudante',
  periodo: '2022 — 2025',
  descripcion:
    'Posgrado dirigido a profesionales de la salud vinculados al proyecto de investigación "Plantas Medicinales". Como profesor ayudante, acompañé a los participantes en competencias de búsqueda bibliográfica, evaluación de fuentes y gestión de referencias científicas.',
  contenidos: [
    'Estrategias de búsqueda en bases de datos científicas (PubMed, Scielo, BVS).',
    'Uso de descriptores DeCS y MeSH.',
    'Gestión de referencias bibliográficas con Zotero.',
    'Evaluación crítica de fuentes de información.',
    'Redacción y citación científica.',
  ],
};

export const festivales = [
  { year: '2022', nombre: 'Festival de Clases "Salvador Allende"' },
  { year: '2023', nombre: 'Festival de Clases "Salvador Allende"' },
  { year: '2024', nombre: 'Festival de Clases "Salvador Allende"' },
  { year: '2025', nombre: 'Festival de Clases "Salvador Allende"' },
];

export const formacion = [
  {
    id: 'licenciatura',
    rango: 'Universitario',
    titulo: 'Licenciatura en Sistemas de Información',
    institucion: 'FCM "Salvador Allende"',
    periodo: '2021 — 2025',
    destacado: 'Título de Oro',
  },
  {
    id: 'tecnico',
    rango: 'Técnico medio',
    titulo: 'Técnico en Ciencias Informáticas',
    institucion: 'Politécnico "FAYR"',
    periodo: '2014 — 2018',
    destacado: null,
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

export const softSkills = [
  { nombre: 'Claridad expositiva', detalle: 'Traduzco conceptos complejos en explicaciones accesibles.' },
  { nombre: 'Empatía y mentoría', detalle: 'Acompaño el aprendizaje respetando el ritmo de cada estudiante.' },
  { nombre: 'Paciencia', detalle: 'Repito y reformulo sin perder el foco pedagógico.' },
  { nombre: 'Rigor metodológico', detalle: 'Estructura clara de contenidos y evaluación.' },
  { nombre: 'Comunicación efectiva', detalle: 'Adaptación del lenguaje al nivel del grupo.' },
  { nombre: 'Diseño de materiales', detalle: 'Creación de guías, ejercicios y recursos didácticos.' },
];

export const idiomas = [
  { nombre: 'Español', nivel: 'Nativo', valor: 100, etiqueta: 'C2' },
  { nombre: 'Inglés', nivel: 'Intermedio', valor: 60, etiqueta: 'B2' },
];