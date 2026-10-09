// src/data/documental.ts

export const perfil = {
  nombre: 'Alberto Adrián Mártir González',
  titular: 'Especialista en Gestión Documental · Licenciado - Información Científica · Digitalización',
  resumen:
    'Profesional de las Ciencias de la Información con más de 4 años de experiencia en la organización, preservación y recuperación de documentos físicos y digitales. Combino la gestión documental tradicional (indización, metadatos, normativas) con herramientas informáticas avanzadas (ofimática, automatización, digitalización, sistemas de archivo). Mi enfoque: trazabilidad, rigor y acceso rápido a la información.',
  cv: '/documental/cv',
  ubicacion: 'Cerro, La Habana, Cuba',
  disponibilidad: 'Abierto a oportunidades',
  email: 'amg11amg2@gmail.com',
};

export const trayectoria = [
  {
    id: 'fcm',
    numeral: 'I',
    institucion: 'FCM "Salvador Allende"',
    logo: '/img/salvador-allende.png',
    cargo: 'Especialista en Gestión de la Información · Profesor Ayudante',
    periodo: 'oct 2021 — nov 2025',
    ubicacion: 'Cerro, La Habana',
    funciones: [
      'Gestión integral del patrimonio documental de la biblioteca universitaria: catalogación, indización y control de autoridades.',
      'Creación y mantenimiento de repositorios digitales (BiblioAllende, BiblioAsesor) para consulta y descarga de documentos.',
      'Aplicación de normativas bibliotecológicas (CDU, ISBD, MARC21, Dublin Core) en la organización de fondos físicos y digitales.',
      'Automatización de procesos de análisis estadístico (método Delphi) y cálculo de remuneraciones con Excel + VBA.',
      'Asesoría metodológica a profesores, residentes y tesistas en búsqueda bibliográfica y gestión de referencias (Zotero, BVS, DeCS, MeSH).',
      'Digitalización de documentación institucional y aplicación de metadatos para su recuperación.',
    ],
    logros: [
      'Reduje el tiempo de búsqueda documental en un 40% mediante la implementación de BiblioAsesor.',
      'Mejoré el acceso al patrimonio documental en un 35% con BiblioAllende.',
      'Automaticé el cálculo de remuneraciones reduciendo errores y tiempo de proceso en un 50%.',
    ],
    herramientas: ['Excel + VBA', 'Access', 'Zotero', 'BVS', 'DeCS', 'MeSH', 'MARC21', 'Dublin Core', 'MySQL'],
  },
  {
    id: 'dayron',
    numeral: 'II',
    institucion: 'Dayron Audiovisuales',
    logo: '/img/dayron.png',
    cargo: 'Gestor de copias audiovisuales · Impresión y escaneo',
    periodo: 'ene 2021 — jul 2021',
    ubicacion: 'Cerro, La Habana',
    funciones: [
      'Gestión y organización de contenido audiovisual: paquetes semanales, series, documentales, novelas y películas.',
      'Catalogación y control de inventario de material audiovisual físico y digital.',
      'Impresión y escaneo de documentos con equipos multifunción.',
      'Atención al cliente: recomendaciones, sugerencias y soporte en la selección de contenido.',
    ],
    logros: [
      'Mantuve un inventario actualizado y trazable del material audiovisual.',
      'Optimicé el flujo de impresión y escaneo para atención al cliente.',
    ],
    herramientas: ['TeraCopy', 'SuperCopier', 'Escáner ADF', 'Impresoras multifunción', 'Reproductores', 'Conversores'],
  },
  {
    id: 'disaic',
    numeral: 'III',
    institucion: 'DISAIC',
    logo: '/img/disaic.png',
    cargo: 'Consultor TIC · Desarrollador',
    periodo: 'ene 2018 — dic 2020',
    ubicacion: 'Cerro, La Habana',
    funciones: [
      'Procesamiento digital de documentos regulados por la empresa, asegurando su correcta clasificación y almacenamiento.',
      'Gestión de bases de datos y consultorías tecnológicas para clientes sectoriales.',
      'Diseño y desarrollo de sitios web institucionales (DISAIC, MAQUIMOTOR).',
      'Impartición de cursos de WordPress y Joomla para gestión de contenidos.',
      'Trabajo con sistema contable Versat y documentación financiera asociada.',
    ],
    logros: [
      'Procesé y registré documentos regulados con 99% de precisión.',
      'Optimicé el acceso a la información documental en un 40%.',
      'Capacité a usuarios en el uso de CMS para gestión documental.',
    ],
    herramientas: ['WordPress', 'Joomla', 'PHP', 'HTML', 'CSS', 'MySQL', 'SQL Server', 'XAMPP', 'WAMP', 'MariaDB'],
  },
];

export const titulosOficiales = [
  {
    id: 'licenciatura',
    rango: 'Universitario',
    titulo: 'Licenciatura en Sistemas de Información',
    institucion: 'FCM "Salvador Allende"',
    ubicacion: 'Cerro, La Habana',
    periodo: 'sep 2021 — jul 2025',
    destacado: 'Título de Oro',
    menciones: [
      'Premio "Mario Muñoz"',
      'Estudiante Más Integral de la Universidad',
      'Invitado especial a 4 pruebas estatales',
      'Profesor ayudante durante la carrera',
    ],
  },
  {
    id: 'tecnico',
    rango: 'Técnico medio',
    titulo: 'Técnico en Ciencias Informáticas',
    institucion: 'Politécnico "FAYR"',
    ubicacion: 'Cerro, La Habana',
    periodo: 'sep 2014 — jul 2018',
    destacado: null,
    menciones: [
      'Graduado con excelentes notas',
      'Formación valorada por el rector del centro',
    ],
  },
];

export const certificaciones = [
  {
    id: 'fullstack',
    titulo: 'FullStack Open',
    institucion: 'Universidad de Helsinki',
    modalidad: 'Online · Finlandia',
    periodo: 'may 2022 — ago 2025',
    descripcion:
      'Programa internacional de desarrollo Full Stack. Incluye certificado de terminación y créditos universitarios. Enfoque en aplicaciones modernas con React, Node.js, Express, MongoDB y testing.',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Testing'],
  },
  {
    id: 'odoo',
    titulo: 'Curso Básico — Desarrollo Odoo',
    institucion: 'DESOFT',
    modalidad: 'Vedado, La Habana',
    periodo: 'dic 2025 — feb 2026',
    descripcion:
      'Formación introductoria al framework Odoo: instalación, entorno, módulos base, ORM, XML y creación del primer módulo personalizado.',
    tags: ['Odoo', 'ORM', 'XML', 'Python', 'PostgreSQL'],
  },
];

export const habilidades = {
  categorias: [
    {
      id: 'ofimatica',
      titulo: 'Ofimática',
      descripcion: 'Suite ofimática y automatización de documentos.',
      icono: 'document',
      color: '#2E4756',
      items: [
        { nombre: 'Excel (avanzado)', icono: 'spreadsheet' },
        { nombre: 'Access', icono: 'database' },
        { nombre: 'Word', icono: 'document' },
        { nombre: 'PowerPoint', icono: 'presentation' },
        { nombre: 'LibreOffice Writer', icono: 'document' },
        { nombre: 'LibreOffice Calc', icono: 'spreadsheet' },
        { nombre: 'LibreOffice Base', icono: 'database' },
        { nombre: 'VBA / Macros', icono: 'code' },
      ],
    },
    {
      id: 'sistemas',
      titulo: 'Sistemas operativos',
      descripcion: 'Entornos Windows y Linux, línea de comandos.',
      icono: 'monitor',
      color: '#3B6E8F',
      items: [
        { nombre: 'Windows 7/10/11', icono: 'windows' },
        { nombre: 'Linux (Kubuntu, Debian, Ubuntu)', icono: 'linux' },
        { nombre: 'CMD (línea de comandos)', icono: 'terminal' },
        { nombre: 'Bash / Terminal Linux', icono: 'terminal' },
        { nombre: 'PowerShell', icono: 'terminal' },
      ],
    },
    {
      id: 'gestion_archivos',
      titulo: 'Gestión de archivos',
      descripcion: 'Copia, respaldo y búsqueda avanzada de archivos.',
      icono: 'folder',
      color: '#B87333',
      items: [
        { nombre: 'TeraCopy', icono: 'copy' },
        { nombre: 'SuperCopier', icono: 'copy' },
        { nombre: 'rsync', icono: 'sync' },
        { nombre: 'robocopy', icono: 'sync' },
        { nombre: 'Everything (búsqueda)', icono: 'search' },
        { nombre: 'Recoll (búsqueda)', icono: 'search' },
        { nombre: 'DocFetcher', icono: 'search' },
        { nombre: 'grep / find', icono: 'search' },
      ],
    },
    {
      id: 'digitalizacion',
      titulo: 'Digitalización',
      descripcion: 'Escaneo, OCR y conversión a formatos documentales.',
      icono: 'scan',
      color: '#2E4756',
      items: [
        { nombre: 'Escáner plano', icono: 'scanner' },
        { nombre: 'Escáner ADF', icono: 'scanner' },
        { nombre: 'OCR (Tesseract)', icono: 'ocr' },
        { nombre: 'Adobe Acrobat', icono: 'pdf' },
        { nombre: 'ABBYY FineReader', icono: 'ocr' },
      ],
    },
    {
      id: 'bibliotecologia',
      titulo: 'Bibliotecología y metadatos',
      descripcion: 'Normativas, estándares y sistemas de clasificación documental.',
      icono: 'library',
      color: '#B87333',
      items: [
        { nombre: 'CDU', icono: 'library' },
        { nombre: 'Dewey', icono: 'library' },
        { nombre: 'ISBD', icono: 'library' },
        { nombre: 'MARC21', icono: 'library' },
        { nombre: 'Dublin Core', icono: 'metadata' },
        { nombre: 'Zotero', icono: 'book' },
        { nombre: 'Mendeley', icono: 'book' },
        { nombre: 'BVS / DeCS / MeSH', icono: 'health' },
      ],
    },
    {
      id: 'seguridad',
      titulo: 'Seguridad y antivirus',
      descripcion: 'Protección de documentos y equipos.',
      icono: 'shield',
      color: '#3B6E8F',
      items: [
        { nombre: 'Windows Defender', icono: 'shield' },
        { nombre: 'Avast', icono: 'shield' },
        { nombre: 'ESET', icono: 'shield' },
        { nombre: 'ClamAV', icono: 'shield' },
      ],
    },
    {
      id: 'audiovisual',
      titulo: 'Gestión audiovisual',
      descripcion: 'Catalogación, conversión y reproducción de contenido.',
      icono: 'video',
      color: '#2E4756',
      items: [
        { nombre: 'FFmpeg', icono: 'video' },
        { nombre: 'HandBrake', icono: 'video' },
        { nombre: 'VLC', icono: 'video' },
        { nombre: 'Catalogación audiovisual', icono: 'film' },
      ],
    },
    {
      id: 'bases_datos',
      titulo: 'Bases de datos',
      descripcion: 'Motores relacionales y no relacionales.',
      icono: 'database',
      color: '#B87333',
      items: [
        { nombre: 'MySQL', icono: 'database' },
        { nombre: 'SQL Server', icono: 'database' },
        { nombre: 'MariaDB', icono: 'database' },
        { nombre: 'MongoDB', icono: 'database' },
        { nombre: 'PostgreSQL', icono: 'database' },
      ],
    },
  ],
};

export const softSkills = [
  { nombre: 'Rigor y atención al detalle', detalle: 'Trazabilidad exhaustiva en cada proceso documental.' },
  { nombre: 'Discreción y confidencialidad', detalle: 'Manejo de documentos regulados y datos sensibles.' },
  { nombre: 'Organización sistemática', detalle: 'Métodos de clasificación claros y consistentes.' },
  { nombre: 'Capacidad de síntesis', detalle: 'Resúmenes y metadatos que facilitan la recuperación.' },
  { nombre: 'Comunicación con usuarios', detalle: 'Atención clara a perfiles técnicos y no técnicos.' },
  { nombre: 'Metodología y trazabilidad', detalle: 'Procesos documentados y auditables.' },
];

export const idiomas = [
  { nombre: 'Español', nivel: 'Nativo', valor: 100, etiqueta: 'C2' },
  { nombre: 'Inglés', nivel: 'Intermedio', valor: 60, etiqueta: 'B2' },
];

export const formacionComplementaria = [
  'Zotero',
  'DeCS',
  'MeSH',
  'BVS',
  'Google Académico',
  'Inteligencia Artificial',
  'WordPress',
  'Joomla',
  'HTML',
  'CSS',
  'PHP',
  'Odoo',
];