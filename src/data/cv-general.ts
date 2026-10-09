// src/data/cv-general.ts

export const perfil = {
  nombre: 'Alberto Adrián Mártir González',
  titular: 'Licenciado en Sistemas de Información · Desarrollador Odoo · Gestión Documental · Investigador · Docente',
  resumen:
    'Profesional de las Ciencias de la Información con más de 4 años de experiencia en entornos académicos, empresariales y científicos. Combino el desarrollo de software (Odoo, Laravel, Full Stack), la gestión documental y bibliotecológica, la investigación científica y la docencia universitaria. Mi enfoque: rigor técnico, claridad metodológica y soluciones digitales que duran.',
  email: 'amg11amg2@gmail.com',
  telefono: '+53 5 8426686',
  ubicacion: 'Cerro, La Habana, Cuba',
  linkedin: 'linkedin.com/in/alberto-gonzalez-9b4777339',
  github: 'github.com/A113E',
  orcid: '0009-0006-0403-9422',
  scholar: 'Google Académico',
};

export const experiencia = [
  {
    cargo: 'Desarrollador Odoo / Laravel',
    institucion: 'Desoft, Empresa de Desarrollo de Aplicaciones Informáticas',
    ubicacion: 'Vedado, La Habana',
    periodo: 'dic 2025 — actualidad',
    funciones: [
      'Desarrollo, corrección y mejora de módulos personalizados sobre Odoo en proyectos institucionales (ICS, Fevexpo).',
      'Participación en la implementación de módulos para Odoo 14, 16 y 19 (df_website_process, df_invoice_process, df_scientific_program, df_virtual_fair, df_prize_selection, entre otros).',
      'Análisis de requisitos, arquitectura de soluciones e implementación de módulos de la OCA.',
      'Soporte y administración de eventos institucionales del MINTUR, MINCOM y AgroCiencias.',
    ],
    logros: [
      'Contribución al desarrollo y migración de módulos entre versiones de Odoo (14 → 16 → 19).',
      'Implementación de módulos propios para gestión de eventos, roles de usuario y stands virtuales.',
    ],
  },
  {
    cargo: 'Especialista en Gestión de la Información · Profesor Ayudante',
    institucion: 'Universidad de Ciencias Médicas "Salvador Allende"',
    ubicacion: 'Cerro, La Habana',
    periodo: 'oct 2021 — nov 2025',
    funciones: [
      'Gestión integral del patrimonio documental de la biblioteca universitaria: catalogación, indización y control de autoridades.',
      'Creación y mantenimiento de repositorios digitales (BiblioAllende, BiblioAsesor) para consulta y descarga de documentos.',
      'Desarrollo y administración del sitio del evento científico GERAT Habana 2021 y CONFACSA 2025.',
      'Automatización estadística (método Delphi, cálculo de remuneraciones) con Excel + VBA.',
      'Docencia en Indización, Estadística, Diseño y Gestión de Bases de Datos, Diseño Web y Alfabetización Informacional.',
      'Asesoría metodológica a profesores, residentes y tesistas en búsqueda bibliográfica y gestión de referencias.',
    ],
    logros: [
      'Reduje el tiempo de búsqueda documental en un 40% con BiblioAsesor.',
      'Mejoré el acceso al patrimonio documental en un 35% con BiblioAllende.',
      'Automaticé el cálculo de remuneraciones reduciendo errores y tiempo de proceso en un 50%.',
    ],
  },
  {
    cargo: 'Gestor de copias audiovisuales · Impresión y escaneo',
    institucion: 'Dayron Audiovisuales',
    ubicacion: 'Cerro, La Habana',
    periodo: 'ene 2021 — jul 2021',
    funciones: [
      'Gestión y organización de contenido audiovisual: paquetes semanales, series, documentales, novelas y películas.',
      'Impresión y escaneo de documentos con equipos multifunción.',
      'Atención al cliente y recomendaciones audiovisuales personalizadas.',
    ],
    logros: [
      'Mantuve un inventario actualizado y trazable del material audiovisual.',
    ],
  },
  {
    cargo: 'Consultor TIC · Desarrollador',
    institucion: 'DISAIC, Empresa Consultora de Servicios Informáticos',
    ubicacion: 'Cerro, La Habana',
    periodo: 'ene 2018 — dic 2020',
    funciones: [
      'Diseño y desarrollo de sitios institucionales (DISAIC, MAQUIMOTOR).',
      'Gestión de bases de datos y consultorías tecnológicas.',
      'Impartición de cursos de WordPress y Joomla para gestión de contenidos.',
      'Trabajo con el sistema contable Versat.',
      'Procesamiento digital de documentos regulados por la empresa.',
    ],
    logros: [
      'Procesé y registré documentos regulados con 99% de precisión.',
      'Optimicé el acceso a la información documental en un 40%.',
    ],
  },
];

export const proyectos = [
  {
    nombre: 'Plataforma FEVEXPO — Gestión de Eventos y Ferias',
    institucion: 'Desoft',
    periodo: '2025 — 2027',
    descripcion:
      'Plataforma integral para eventos y ferias expositivas sobre Odoo (versiones 14, 16, 19). Análisis, arquitectura y módulos personalizados.',
  },
  {
    nombre: 'BiblioAllende y BiblioAsesor',
    institucion: 'UCM "Salvador Allende"',
    periodo: '2022 — 2025',
    descripcion:
      'Aplicaciones web para gestión y consulta del patrimonio documental universitario. Catalogación, indización y metadatos.',
  },
  {
    nombre: 'Estrategia educativa a cuidadores de ancianos con pie diabético',
    institucion: 'CITED',
    periodo: '2022 — 2027',
    descripcion:
      'Proyecto de investigación aplicada para formación de cuidadores en atención podológica de adultos mayores.',
  },
];

export const habilidades = [
  {
    categoria: 'Desarrollo',
    items: ['Python', 'JavaScript', 'PHP', 'React', 'Node.js', 'Express', 'Laravel'],
  },
  {
    categoria: 'Odoo',
    items: ['Odoo 14/16/19', 'ORM', 'XML', 'OCA', 'Doodba', 'Docker', 'Módulos personalizados'],
  },
  {
    categoria: 'Bases de datos',
    items: ['PostgreSQL', 'MySQL', 'SQL Server', 'MariaDB', 'MongoDB'],
  },
  {
    categoria: 'Web y CMS',
    items: ['HTML', 'CSS', 'Bootstrap', 'WordPress', 'Joomla', 'Drupal', 'TYPO3'],
  },
  {
    categoria: 'Gestión documental',
    items: ['Indización', 'Metadatos', 'Zotero', 'BVS', 'DeCS', 'MeSH', 'MARC21', 'Dublin Core'],
  },
  {
    categoria: 'DevOps y entorno',
    items: ['Git', 'GitHub', 'GitLab', 'Linux', 'Windows', 'Excel + VBA', 'Moodle'],
  },
];

export const formacion = [
  {
    titulo: 'Licenciatura en Sistemas de Información',
    institucion: 'FCM "Salvador Allende"',
    periodo: '2021 — 2025',
    destacado: 'Título de Oro · Premio "Mario Muñoz" · Estudiante Más Integral',
  },
  {
    titulo: 'Técnico en Ciencias Informáticas',
    institucion: 'Politécnico "FAYR"',
    periodo: '2014 — 2018',
    destacado: 'Graduado con excelentes notas',
  },
  {
    titulo: 'FullStack Open',
    institucion: 'Universidad de Helsinki (Online)',
    periodo: '2022 — 2025',
    destacado: 'Certificado Full Stack',
  },
  {
    titulo: 'Curso Básico — Desarrollo Odoo',
    institucion: 'DESOFT',
    periodo: '2025 — 2026',
    destacado: 'Módulos, ORM, XML, PostgreSQL',
  },
];

export const idiomas = [
  { nombre: 'Español', nivel: 'Nativo', etiqueta: 'C2' },
  { nombre: 'Inglés', nivel: 'Intermedio', etiqueta: 'B2' },
];

export const softSkills = [
  'Rigor y atención al detalle',
  'Discreción y confidencialidad',
  'Organización sistemática',
  'Capacidad de síntesis',
  'Comunicación con usuarios',
  'Metodología y trazabilidad',
  'Pensamiento analítico',
  'Aprendizaje continuo',
];