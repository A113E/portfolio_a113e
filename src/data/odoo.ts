// src/data/odoo.ts

export const perfil = {
  nombre: 'Alberto Adrián Mártir González',
  titular: 'Desarrollador Odoo · Python · Backend & Full Stack',
  resumen:
    'Desarrollador con 2 años de experiencia en el ecosistema Odoo (versiones 14, 16 y 19) y más de 4 en desarrollo web Full Stack. Especializado en módulos personalizados, integraciones con el core, migraciones entre versiones y despliegue en entornos Docker con plantillas Doodba. He trabajado en proyectos institucionales de alta visibilidad en Cuba, con contacto directo con clientes y responsabilidad sobre el ciclo completo del desarrollo: análisis, arquitectura, implementación, testing y soporte en producción.',
  cv: '/odoo/cv',
  ubicacion: 'Cerro, La Habana, Cuba',
  disponibilidad: 'Abierto a oportunidades remotas y presenciales',
  email: 'amg11amg2@gmail.com',
  telefono: '+53 5 8426686',
  linkedin: 'linkedin.com/in/alberto-gonzalez-9b4777339',
  github: 'github.com/A113E',
  stackPrincipal: 'Odoo · Python · PostgreSQL · Docker · Doodba',
};

export const proyectos = [
  {
    id: 'fevexpo',
    nombre: 'FEVEXPO',
    logo: '/img/fevexpo.png',
    tagline: 'Plataforma de gestión de eventos y ferias expositivas',
    cliente: 'Desoft — Eventos MINTUR, MINCOM y AgroCiencias',
    periodo: '2025 — actualidad',
    estado: 'Activo · producción',
    versiones: ['Odoo 14', 'Odoo 19'],
    rol: 'Desarrollador Odoo · Arquitecto en la versión 19',
    contexto:
      'FEVEXPO es una plataforma modular que gestiona ferias y eventos institucionales cubanos: congresos científicos, ferias de turismo y exposiciones agroindustriales. Cada evento tiene su propio ciclo de vida (registro de usuarios, solicitud de expositores, gestión de stands virtuales y físicos, programa científico, acreditación y certificados).',
    aportes: [
      {
        titulo: 'Módulos propios creados',
        items: [
          'appoiments_stands — Gestión de citas entre expositores y visitantes, integrado con el módulo base de calendario de Odoo 14.',
          'chat_stands_virtual — Chat en tiempo real entre dueños de stand y visitantes, integrado con el módulo de mensajería nativo de Odoo.',
          'event_scientific_program — Creación y visualización de subeventos por día del congreso, renderizados en el website como matriz interactiva integrada con el calendario.',
          'event_user_role — Sistema de roles específicos por evento (Expositor, Organizador, Presidente de comisión, Secretario, Acreditador, Jurado) integrado al backend de Odoo sobre el modelo event base.',
          'event_prize_selection — Módulo de selección de premiados que reutiliza el flujo del módulo recruitment para otorgar certificados a participantes.',
          'event_mode (v19) — Selección entre modalidad híbrida, física o virtual, con flujos diferenciados según el modo.',
          'event_virtual_stands (v19) — Gestión avanzada de stands virtuales con plantillas dinámicas, integrado con event_booth del core.',
          'user_role (v19) — Versión mejorada del sistema de roles, adaptada a los nuevos modelos de grupos y privilegios de Odoo 19.',
        ],
      },
      {
        titulo: 'Mejoras sobre módulos existentes',
        items: [
          'Rediseño completo de virtual_stands_fair para manejar stands virtuales, pabellones, plantillas y salas de forma escalable.',
          'Mejora del sistema de visualización de stands en el website con plantillas personalizadas e imágenes estáticas a medida.',
          'Optimización del flujo de registro de usuarios y solicitud de expositores.',
          'Implementación del repositorio público de trabajos científicos en event_track_website, con visibilidad de todos los trabajos aprobados.',
          'Mejora del flujo de aceptación y aprobación de trabajos científicos subidos a la plataforma.',
        ],
      },
    ],
    eventos: ['FitCuba 2026 (MINTUR)', 'Informática 2026 (MINCOM)', 'AgroCiencias 2026'],
    stack: ['Odoo 14', 'Odoo 19', 'Python', 'XML', 'PostgreSQL', 'JavaScript', 'OWL', 'Docker', 'Doodba', 'GitLab'],
    contactoCliente: true,
    linkGithub: 'https://github.com/A113E?tab=repositories',
    linkWeb: 'https://www.fevexpo.cu/',
  },
  {
    id: 'ics',
    nombre: 'ICS — Instituto de Comunicación Social',
    logo: '/img/ics.png',
    tagline: 'Plataforma de trámites y acreditaciones institucionales',
    cliente: 'Instituto de Comunicación Social de Cuba',
    periodo: '2025 — 2026',
    estado: 'Producción',
    versiones: ['Odoo 16'],
    rol: 'Desarrollador Odoo · Soporte y refactorización',
    contexto:
      'Plataforma institucional sobre Odoo 16 para gestionar trámites y procesos de acreditación. El proyecto estaba en producción cuando me incorporé, con necesidad de mantenimiento correctivo, refactorización y mejora continua.',
    aportes: [
      {
        titulo: 'Trabajo sobre la plataforma existente',
        items: [
          'Refactorización de modelos ORM existentes para mejorar mantenibilidad y rendimiento.',
          'Corrección y mejora de controladores y rutas HTTP.',
          'Optimización de templates QWeb y vistas backend.',
          'Ajustes en scripts de migración y automatización de procesos.',
          'Soporte correctivo y evolutivo en producción.',
        ],
      },
      {
        titulo: 'Módulos con los que trabajé',
        items: [
          'df_website_process — Gestión de trámites y procesos por web.',
          'df_invoice_process — Flujo de facturación institucional.',
          'l10n_cu_payment_transfermovil — Localización cubana para pagos por transferencia móvil.',
        ],
      },
    ],
    eventos: [],
    stack: ['Odoo 16', 'Python', 'XML', 'PostgreSQL', 'JavaScript', 'Docker', 'Doodba'],
    contactoCliente: false,
    linkGithub: 'https://github.com/A113E?tab=repositories',
    linkWeb: 'https://www.ics.gob.cu/registro-nacional-sitios-web/',
  },
  {
    id: 'informatica-2026',
    nombre: 'Informática 2026',
    logo: '/img/info.png',
    tagline: 'XX Convención y Feria Internacional Informática 2026',
    cliente: 'MINCOM — Ministerio de Comunicaciones',
    periodo: '2025 — 2026',
    estado: 'En curso',
    versiones: ['Odoo 14'],
    rol: 'Desarrollador Odoo · Contacto directo con cliente',
    contexto:
      'Evento científico-técnico internacional gestionado sobre FEVEXPO. Requería funcionalidades específicas para programa científico, asignación de roles institucionales, gestión de trabajos académicos y sistema de premiación.',
    aportes: [
      {
        titulo: 'Módulos creados específicamente para este evento',
        items: [
          'event_scientific_program — Programa científico con subeventos por día, mostrado como matriz en el website.',
          'event_user_role — Roles específicos del evento: Expositor, Organizador, Presidente de comisión científica, Secretario de comisión, Acreditador y Jurado.',
          'event_prize_selection — Sistema de selección de premiados reutilizando el flujo de recruitment para emitir certificados.',
          'event_track_website — Repositorio público de trabajos aprobados.',
        ],
      },
      {
        titulo: 'Mejoras sobre el flujo institucional',
        items: [
          'Rediseño del flujo de aceptación y aprobación de trabajos científicos.',
          'Integración con el módulo base de calendario para la visualización del programa.',
          'Contacto directo con el cliente para levantamiento de requisitos y validación.',
        ],
      },
    ],
    eventos: ['Informática 2026'],
    stack: ['Odoo 14', 'Python', 'XML', 'PostgreSQL', 'JavaScript', 'OWL', 'Docker', 'Doodba'],
    contactoCliente: true,
    linkGithub: 'https://github.com/A113E?tab=repositories',
    linkWeb: 'https://www.informaticahabana.cu/',
  },
  {
    id: 'fitcuba',
    nombre: 'FitCuba 2026',
    logo: '/img/fitcuba.png',
    tagline: 'Feria Internacional de Turismo de Cuba',
    cliente: 'MINTUR — Ministerio de Turismo',
    periodo: '2025 — 2026',
    estado: 'En curso',
    versiones: ['Odoo 14'],
    rol: 'Desarrollador Odoo · Contacto directo con cliente',
    contexto:
      'Feria internacional de turismo con stands virtuales y físicos, pabellones y salas. Requería flujos de interacción entre expositores y visitantes, más allá de la simple exposición estática.',
    aportes: [
      {
        titulo: 'Módulos y mejoras desarrolladas',
        items: [
          'appoiments_stands — Sistema de citas entre expositores y visitantes, integrado con el calendario nativo de Odoo.',
          'chat_stands_virtual — Chat en tiempo real entre dueños de stands y visitantes, integrado con el módulo de mensajería de Odoo.',
          'Mejora integral de virtual_stands_fair — Gestión de stands virtuales, pabellones, plantillas y salas.',
          'Rediseño de la visualización web de stands con plantillas personalizadas e imágenes estáticas a medida.',
          'Mejora del flujo de registro de usuarios y solicitud de expositores.',
        ],
      },
      {
        titulo: 'Contacto con cliente',
        items: [
          'Levantamiento directo de requisitos con el cliente MINTUR.',
          'Validación iterativa de funcionalidades durante el desarrollo.',
          'Ajustes rápidos en base a feedback del cliente en producción.',
        ],
      },
    ],
    eventos: ['FitCuba 2026'],
    stack: ['Odoo 14', 'Python', 'XML', 'PostgreSQL', 'JavaScript', 'Docker', 'Doodba'],
    contactoCliente: true,
    linkGithub: 'https://github.com/A113E?tab=repositories',
    linkWeb: 'https://fitcuba.fevexpo.cu/evento/2',
  },
    {
    id: 'agrociencias',
    nombre: 'AgroCiencias 2026',
    logo: '/img/agro.png',
    tagline: 'Feria internacional agroindustrial',
    cliente: 'MINAG — Ministerio de la Agricultura',
    periodo: '2025 — 2026',
    estado: 'En curso',
    versiones: ['Odoo 14'],
    rol: 'Desarrollador Odoo · Soporte en base de datos y diseño',
    contexto:
      'Feria internacional del sector agroindustrial gestionada sobre FEVEXPO. Requería soporte específico en base de datos (modelos, migraciones y optimización de consultas) y ajustes de diseño en la interfaz web del evento.',
    aportes: [
      {
        titulo: 'Soporte técnico especializado',
        items: [
          'Optimización de consultas y modelos sobre PostgreSQL para el catálogo de expositores y productos.',
          'Ajustes de diseño y maquetación en el website del evento, adaptando plantillas de FEVEXPO a las necesidades de la feria.',
          'Soporte correctivo en producción durante la celebración del evento.',
        ],
      },
    ],
    eventos: ['AgroCiencias 2026'],
    stack: ['Odoo 14', 'Python', 'PostgreSQL', 'XML', 'Docker', 'Doodba'],
    contactoCliente: false,
    linkGithub: 'https://github.com/A113E?tab=repositories',
    linkWeb: 'https://agrociencias.fevexpo.cu',
  },
];

export const trayectoria = [
  {
    id: 'desoft',
    numeral: 'I',
    institucion: 'Desoft, Empresa de Desarrollo de Aplicaciones Informáticas',
    logo: '/img/desoft.png',
    cargo: 'Desarrollador Odoo / Laravel',
    periodo: 'dic 2025 — actualidad',
    ubicacion: 'Vedado, La Habana',
    funciones: [
      'Desarrollo de módulos personalizados sobre Odoo 14, 16 y 19 en proyectos institucionales de alta visibilidad (FEVEXPO, ICS, Informática 2026, FitCuba 2026).',
      'Análisis de requisitos, arquitectura de soluciones e implementación de módulos OCA cuando aplica.',
      'Migración y adaptación de módulos entre versiones de Odoo (14 → 16 → 19) considerando cambios en grupos, privilegios y modelo de datos.',
      'Despliegue en entornos Docker con plantillas Doodba para las tres versiones.',
      'Uso de GitLab y GitHub con flujos de trabajo colaborativos, tests unitarios y pre-commits.',
      'Contacto directo con clientes institucionales para levantamiento de requisitos y validación.',
      'Soporte en producción sobre plataformas activas.',
    ],
    logros: [
      'Diseñé 8 módulos personalizados sobre Odoo en producción.',
      'Trabajé en 3 eventos institucionales de alcance nacional (FitCuba, Informática, AgroCiencias).',
      'Colaboré en la arquitectura de FEVEXPO 19.',
    ],
    herramientas: ['Odoo 14/16/19', 'Python', 'PostgreSQL', 'Docker', 'Doodba', 'GitLab', 'GitHub', 'Laravel', 'Linux'],
  },
  {
    id: 'fcm',
    numeral: 'II',
    institucion: 'Universidad de Ciencias Médicas "Salvador Allende"',
    logo: '/img/salvador-allende.png',
    cargo: 'Especialista en Gestión de la Información · Profesor Ayudante',
    periodo: 'oct 2021 — nov 2025',
    ubicacion: 'Cerro, La Habana',
    funciones: [
      'Desarrollo de aplicaciones web institucionales (BiblioAllende, BiblioAsesor) en stack PHP + MySQL.',
      'Automatización estadística con Excel + VBA.',
      'Docencia en asignaturas técnicas relacionadas con sistemas de información.',
    ],
    logros: [
      'Reduje el tiempo de búsqueda documental en un 40%.',
    ],
    herramientas: ['PHP', 'MySQL', 'JavaScript', 'Excel + VBA', 'WordPress'],
  },
  {
    id: 'dayron',
    numeral: 'III',
    institucion: 'Dayron Audiovisuales',
    logo: '/img/dayron.png',
    cargo: 'Gestor de copias audiovisuales · Impresión y escaneo',
    periodo: 'ene 2021 — jul 2021',
    ubicacion: 'Cerro, La Habana',
    funciones: [
      'Gestión y organización de contenido audiovisual.',
      'Atención al cliente y soporte técnico básico.',
    ],
    logros: [],
    herramientas: ['TeraCopy', 'SuperCopier', 'Escáner ADF'],
  },
  {
    id: 'disaic',
    numeral: 'IV',
    institucion: 'DISAIC, Empresa Consultora de Servicios Informáticos',
    logo: '/img/disaic.png',
    cargo: 'Consultor TIC · Desarrollador',
    periodo: 'ene 2018 — dic 2020',
    ubicacion: 'Cerro, La Habana',
    funciones: [
      'Diseño y desarrollo de sitios web institucionales con HTML, CSS, PHP y CMS.',
      'Gestión de bases de datos relacionales.',
      'Formación de usuarios en WordPress y Joomla.',
    ],
    logros: [
      'Desarrollé sitios institucionales para DISAIC y MAQUIMOTOR.',
    ],
    herramientas: ['WordPress', 'Joomla', 'PHP', 'HTML', 'CSS', 'MySQL'],
  },
];

export const stack = {
  categorias: [
    {
      id: 'odoo',
      titulo: 'Odoo',
      descripcion: 'Desarrollo de módulos, migraciones y arquitectura sobre Odoo.',
      color: '#714B67',
      items: [
        { nombre: 'Odoo 14 / 16 / 19', nivel: 'avanzado' },
        { nombre: 'ORM', nivel: 'avanzado' },
        { nombre: 'XML / QWeb', nivel: 'avanzado' },
        { nombre: 'OWL (Odoo Web Library)', nivel: 'intermedio' },
        { nombre: 'OCA', nivel: 'intermedio' },
        { nombre: 'Módulos personalizados', nivel: 'avanzado' },
        { nombre: 'Migraciones entre versiones', nivel: 'intermedio' },
        { nombre: 'Desarrollo de tests', nivel: 'intermedio' },
      ],
    },
    {
      id: 'backend',
      titulo: 'Backend',
      descripcion: 'Lenguajes y frameworks del lado del servidor.',
      color: '#3776AB',
      items: [
        { nombre: 'Python', nivel: 'avanzado' },
        { nombre: 'PHP', nivel: 'intermedio' },
        { nombre: 'JavaScript / Node.js', nivel: 'intermedio' },
        { nombre: 'Express', nivel: 'intermedio' },
        { nombre: 'Laravel', nivel: 'básico' },
      ],
    },
    {
      id: 'frontend',
      titulo: 'Frontend',
      descripcion: 'Tecnologías del lado del cliente.',
      color: '#E34C26',
      items: [
        { nombre: 'HTML', nivel: 'avanzado' },
        { nombre: 'CSS', nivel: 'avanzado' },
        { nombre: 'JavaScript', nivel: 'intermedio' },
        { nombre: 'React', nivel: 'intermedio' },
        { nombre: 'Bootstrap', nivel: 'intermedio' },
        { nombre: 'Angular', nivel: 'básico' },
      ],
    },
    {
      id: 'bbdd',
      titulo: 'Bases de datos',
      descripcion: 'Motores relacionales y no relacionales.',
      color: '#336791',
      items: [
        { nombre: 'PostgreSQL', nivel: 'avanzado' },
        { nombre: 'MySQL', nivel: 'intermedio' },
        { nombre: 'SQL Server', nivel: 'intermedio' },
        { nombre: 'MariaDB', nivel: 'intermedio' },
        { nombre: 'MongoDB', nivel: 'básico' },
      ],
    },
    {
      id: 'devops',
      titulo: 'DevOps y entorno',
      descripcion: 'Despliegue, contenedores y flujo de trabajo.',
      color: '#2496ED',
      items: [
        { nombre: 'Docker', nivel: 'intermedio' },
        { nombre: 'Doodba', nivel: 'intermedio' },
        { nombre: 'Git', nivel: 'avanzado' },
        { nombre: 'GitHub', nivel: 'avanzado' },
        { nombre: 'GitLab', nivel: 'intermedio' },
        { nombre: 'Linux (Kubuntu, Debian, Ubuntu)', nivel: 'avanzado' },
        { nombre: 'Pre-commits', nivel: 'intermedio' },
      ],
    },
    {
      id: 'cms',
      titulo: 'Web y CMS',
      descripcion: 'Sistemas de gestión de contenidos.',
      color: '#21759B',
      items: [
        { nombre: 'WordPress', nivel: 'avanzado' },
        { nombre: 'Joomla', nivel: 'intermedio' },
        { nombre: 'Drupal', nivel: 'básico' },
        { nombre: 'TYPO3', nivel: 'básico' },
      ],
    },
  ],
};

export const formacion = [
  {
    id: 'licenciatura',
    rango: 'Universitario',
    titulo: 'Licenciatura en Sistemas de Información',
    institucion: 'FCM "Salvador Allende"',
    periodo: '2021 — 2025',
    destacado: 'Título de Oro',
    menciones: ['Premio "Mario Muñoz"', 'Estudiante Más Integral', 'Profesor ayudante durante la carrera'],
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
    descripcion: 'Programa internacional de desarrollo Full Stack con créditos universitarios. React, Node.js, Express, MongoDB y testing.',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Testing'],
  },
  {
    titulo: 'Curso Básico — Desarrollo Odoo',
    institucion: 'DESOFT',
    periodo: '2025 — 2026',
    descripcion: 'Formación intensiva en el framework Odoo: instalación, entorno, módulos base, ORM, XML y creación de módulos personalizados.',
    tags: ['Odoo', 'ORM', 'XML', 'Python', 'PostgreSQL'],
  },
];

export const idiomas = [
  { nombre: 'Español', nivel: 'Nativo', valor: 100, etiqueta: 'C2' },
  { nombre: 'Inglés', nivel: 'Intermedio', valor: 60, etiqueta: 'B2' },
];

export const softSkills = [
  { nombre: 'Resolución de problemas', detalle: 'Análisis de causa raíz y soluciones mantenibles en producción.' },
  { nombre: 'Comunicación con cliente', detalle: 'Levantamiento de requisitos y validación directa con stakeholders institucionales.' },
  { nombre: 'Trabajo en equipo', detalle: 'Colaboración en flujos Git con code review y pair programming.' },
  { nombre: 'Aprendizaje autónomo', detalle: 'Migración entre versiones de Odoo con documentación oficial y comunidad.' },
  { nombre: 'Atención al detalle', detalle: 'Código limpio, testing y uso de pre-commits.' },
  { nombre: 'Gestión del tiempo', detalle: 'Cumplimiento de hitos en proyectos con plazos institucionales.' },
];