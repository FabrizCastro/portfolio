export const work = [
  {
    company: 'Keola',
    role: { es: 'Experiencia en software', en: 'Software experience' },
    description: {
      es: 'Estuve a cargo del diseño de la arquitectura de software del proyecto.',
      en: 'I was responsible for designing the project’s software architecture.',
    },
    cases: [{
      id: 'keola-arquitectura',
      title: { es: 'Proyecto Arquitectura', en: 'Architecture Project' },
      type: { es: 'Arquitectura', en: 'Architecture' },
      description: { es: 'Diseñé la arquitectura de software del proyecto.', en: 'I designed the software architecture for the project.' },
      technologies: [],
    }],
  },
  {
    company: 'Ascensores SA – OTIS',
    role: { es: 'Practicante de ingeniería de software', en: 'Software Engineering Intern' },
    date: { es: 'Desde 2023', en: 'Since 2023' },
    description: {
      es: 'Desarrollé herramientas internas y módulos de acceso y navegación con C#, React y Angular. Integré sistemas con SAP ERP y OfficeTrack, optimicé consultas y procedimientos en SQL Server y diseñé una arquitectura de microservicios para SISMAN 2.0. También preparé prototipos en Figma y colaboré con equipos que trabajaban con metodologías ágiles.',
      en: 'I built internal tools and user access and navigation modules with C#, React, and Angular. I integrated systems with SAP ERP and OfficeTrack, optimized SQL Server queries and procedures, and designed a microservices architecture for SISMAN 2.0. I also created Figma prototypes and collaborated with teams using agile practices.',
    },
    cases: [
      {
        id: 'sisman-aws',
        title: { es: 'Arquitectura SISMAN en AWS', en: 'SISMAN architecture on AWS' },
        type: { es: 'Arquitectura', en: 'Architecture' },
        description: { es: 'Diseñé la arquitectura de SISMAN 2.0 sobre AWS, con un enfoque de microservicios.', en: 'I designed the architecture for SISMAN 2.0 on AWS using a microservices approach.' },
        technologies: ['AWS', 'Microservicios / Microservices'],
      },
      {
        id: 'ascensores-tools',
        title: { es: 'Ascensores Tools', en: 'Ascensores Tools' },
        type: { es: 'Aplicación', en: 'Application' },
        description: { es: 'Desarrollé herramientas internas de Ascensores y su backend de servicios.', en: 'I developed internal tools for Ascensores and their backend services.' },
        technologies: ['React', 'Vite', 'C#', 'ASP.NET Core', 'REST API'],
      },
      {
        id: 'ascensores-hub',
        title: { es: 'Ascensores Hub', en: 'Ascensores Hub' },
        type: { es: 'Aplicación', en: 'Application' },
        description: { es: 'Diseñé y desarrollé la aplicación interna que reúne información comercial de proyectos, distritos, propietarios y constructoras.', en: 'I designed and built an internal application that brings together sales information on projects, districts, owners, and construction companies.' },
        technologies: ['React', 'ASP.NET Core', 'MySQL'],
        images: ['/ascensores/home.jpeg', '/ascensores/chart.jpeg', '/ascensores/constructoras.jpeg'],
      },
      {
        id: 'sisman-integraciones',
        title: { es: 'SISMAN, SAP y OfficeTrack', en: 'SISMAN, SAP, and OfficeTrack' },
        type: { es: 'Integración', en: 'Integration' },
        description: { es: 'Integré SISMAN con SAP ERP y OfficeTrack mediante APIs REST y tareas programadas. Optimicé vistas y procedimientos en SQL Server y desarrollé módulos de reporte de incidencias.', en: 'I integrated SISMAN with SAP ERP and OfficeTrack using REST APIs and scheduled jobs. I optimized SQL Server views and procedures and built incident reporting modules.' },
        technologies: ['SAP ERP', 'OfficeTrack', 'REST API', 'SQL Server'],
      },
    ],
  },
  {
    company: 'Freelance',
    role: { es: 'Automatización con Python', en: 'Automation with Python' },
    date: { es: '2021 – 2024', en: '2021 – 2024' },
    description: {
      es: 'Creé programas ejecutables en Python para automatizar macros, combinar archivos y procesar grandes volúmenes de datos para cálculos financieros.',
      en: 'I built executable Python programs to automate macros, merge files, and process large datasets for financial calculations.',
    },
    cases: [],
  },
];
