type Localized = { es: string; en: string };
export type WorkPoint = { label: Localized; text: Localized };

export interface WorkMedia {
  src: string;
  darkSrc?: string;
  htmlSrc?: string;
  title: Localized;
  alt?: Localized;
  width: number;
  height: number;
}

export interface WorkCase {
  id: string;
  title: Localized;
  type: Localized;
  description: Localized;
  emphasis?: string[];
  timelineDescription?: Localized;
  technologies: string[];
  command: { label: Localized; text: string; output: string };
  highlights?: WorkPoint[];
  cover: 'orange' | 'yellow' | 'blue' | 'sky' | 'lavender';
  media?: WorkMedia[];
  architecture?: {
    title?: Localized;
    diagram: string;
    language?: keyof Localized;
    alt: Localized;
    width: number;
    height: number;
  };
}

interface WorkEntry {
  company: string;
  role: Localized;
  date: Localized;
  description: Localized;
  highlights?: WorkPoint[];
  technologies?: string[];
  cases: WorkCase[];
}

export const work: WorkEntry[] = [
  {
    company: 'Ascensores SA – OTIS',
    role: { es: 'Desarrollador de software', en: 'Software Developer' },
    date: { es: 'Mayo de 2026 – actualidad', en: 'May 2026 – Present' },
    description: {
      es: 'Desarrollo módulos de SISMAN e integraciones con SAP ERP y OfficeTrack. Valido los cambios de mantenimiento con usuarios y consultores, y participé en el diseño y la migración de SISMAN a AWS.',
      en: 'I develop SISMAN modules and integrations with SAP ERP and OfficeTrack. I validate maintenance changes with users and consultants, and helped design and migrate SISMAN to AWS.',
    },
    cases: [
      {
        id: 'ascensores-hub',
        title: { es: 'Ascensores Hub', en: 'Ascensores Hub' },
        type: { es: 'Portal de mantenimiento', en: 'Maintenance portal' },
        cover: 'sky',
        description: {
          es: 'Diseñé y desarrollé un portal para que clientes como BCP consulten el estado de sus equipos, las emergencias atendidas y sus certificados de mantenimiento.',
          en: 'I designed and built a portal for customers like BCP to check equipment status, completed emergency work, and maintenance certificates.',
        },
        emphasis: ['BCP'],
        timelineDescription: {
          es: 'Desarrollé un portal para que clientes como BCP consultaran el estado de sus equipos, las emergencias atendidas y sus certificados de mantenimiento.',
          en: 'I built a portal for customers such as BCP to see equipment status, emergency work, and maintenance certificates.',
        },
        architecture: {
          diagram: '/ascensores/architecture/ascensores-hub-aws',
          alt: {
            es: 'Arquitectura AWS de Ascensores Hub y sus conexiones con SISMAN',
            en: 'Ascensores Hub AWS architecture and its connections to SISMAN',
          },
          width: 2560,
          height: 1360,
        },
        media: [
          {
            src: '/ascensores/ascensores-hub-resumen.png',
            title: { es: 'Panel de resumen', en: 'Overview dashboard' },
            alt: { es: 'Panel de resumen del portal Ascensores Hub', en: 'Ascensores Hub overview dashboard' },
            width: 1905,
            height: 907,
          },
          {
            src: '/ascensores/ascensores-hub-emergencia.png',
            title: { es: 'Emergencias', en: 'Emergency work' },
            alt: { es: 'Vista de emergencias en Ascensores Hub', en: 'Emergency work view in Ascensores Hub' },
            width: 1902,
            height: 901,
          },
          {
            src: '/ascensores/ascensores-hub-login.png',
            title: { es: 'Inicio de sesión', en: 'Sign-in' },
            alt: { es: 'Pantalla de inicio de sesión de Ascensores Hub', en: 'Ascensores Hub sign-in screen' },
            width: 1918,
            height: 910,
          },
        ],
        technologies: ['React', 'Python', 'FastAPI', 'PostgreSQL', 'Docker', 'AWS'],
        command: {
          label: { es: 'Revisar los registros de la API de Hub', en: 'Review Hub API logs' },
          text: 'docker logs --since 24h "$HUB_API_CONTAINER"',
          output: 'INFO: Uvicorn running on http://0.0.0.0:8000',
        },
      },
      {
        id: 'sisman-aws',
        title: { es: 'Arquitectura SISMAN en AWS', en: 'SISMAN architecture on AWS' },
        type: { es: 'Arquitectura', en: 'Architecture' },
        cover: 'yellow',
        description: {
          es: 'Participé en el diseño y la migración de SISMAN a AWS. Coordiné con DELTA, SAP y OfficeTrack para mantener las integraciones operativas.',
          en: 'I helped design and migrate SISMAN to AWS and coordinated with DELTA, SAP, and OfficeTrack to keep integrations running.',
        },
        emphasis: ['DELTA', 'SAP', 'OfficeTrack'],
        architecture: {
          diagram: '/ascensores/architecture/sisman-aws',
          language: 'en',
          alt: {
            es: 'Diagrama en inglés de los cuatro contenedores de SISMAN en un host EC2 y sus flujos con SAP y OfficeTrack',
            en: 'SISMAN’s four containers on a single EC2 host and their data flows with SAP and OfficeTrack',
          },
          width: 2560,
          height: 1160,
        },
        highlights: [{
          label: { es: 'Migración coordinada', en: 'Coordinated migration' },
          text: {
            es: 'Con DELTA, SAP y OfficeTrack, organicé el orden de apagado, respaldos, redirección y arranque de servicios. El plan contempló reintentar operaciones fallidas en AWS para preservar los datos y la continuidad de las integraciones.',
            en: 'I worked with DELTA, SAP, and OfficeTrack to sequence shutdowns, backups, traffic redirection, and restarts. The plan included retrying failed operations in AWS to preserve data and keep integrations running.',
          },
        }],
        technologies: ['AWS', 'Amazon EC2'],
        command: {
          label: { es: 'Comprobar el estado del servidor de SISMAN', en: 'Check the SISMAN server status' },
          text: 'aws ec2 describe-instance-status --instance-ids "$SISMAN_INSTANCE_ID" --output table',
          output: 'InstanceState: running · SystemStatus: ok',
        },
      },
      {
        id: 'ascensores-tools',
        title: { es: 'Ascensores Tools', en: 'Ascensores Tools' },
        type: { es: 'Seguimiento comercial', en: 'Sales tracking' },
        cover: 'blue',
        description: {
          es: 'Desarrollé una herramienta para que el equipo comercial gestionara prospectos, clientes y oportunidades.',
          en: 'I built a tool for the sales team to manage prospects, customers, and opportunities.',
        },
        timelineDescription: {
          es: 'Construí una herramienta para seguir prospectos y clientes. Armé el backlog y validé el diseño y las funcionalidades con los ejecutivos de ventas.',
          en: 'I built a tool to track prospects and customers. I owned the backlog and validated designs and features with the sales team.',
        },
        technologies: ['C#', 'ASP.NET Core', 'React', 'Vite', 'REST API'],
        command: {
          label: { es: 'Iniciar la API comercial en local', en: 'Run the sales API locally' },
          text: 'dotnet run --urls http://localhost:5080',
          output: 'Now listening on: http://localhost:5080',
        },
        media: [
          {
            src: '/ascensores/swagger.jpeg',
            title: { es: 'API en Swagger', en: 'Swagger API' },
            alt: { es: 'Documentación de los endpoints de Ascensores Tools en Swagger', en: 'Ascensores Tools API endpoints documented in Swagger' },
            width: 982,
            height: 918,
          },
          {
            src: '/ascensores/nuevo-1.jpeg',
            title: { es: 'Seguimiento de ventas', en: 'Sales tracking' },
            alt: { es: 'Formulario para crear un registro de seguimiento de ventas', en: 'Form for creating a sales tracking record' },
            width: 944,
            height: 614,
          },
          {
            src: '/ascensores/nuevo-2.jpeg',
            title: { es: 'Formulario de oportunidad', en: 'Sales opportunity form' },
            width: 953,
            height: 819,
          },
          {
            src: '/ascensores/nuevo-3.jpeg',
            title: { es: 'Detalle técnico', en: 'Technical details' },
            alt: { es: 'Campos técnicos del formulario de seguimiento de ventas', en: 'Technical fields in the sales tracking form' },
            width: 953,
            height: 821,
          },
        ],
      },
    ],
  },
  {
    company: 'KeOla Networks',
    role: { es: 'Desarrollador full stack', en: 'Full-stack Developer' },
    date: { es: 'Agosto – diciembre de 2025', en: 'August – December 2025' },
    description: {
      es: 'Resolví tickets de producción en Inclub, el backoffice de un resort, durante su migración a microservicios.',
      en: 'I resolved production tickets in Inclub, a resort back office, during its migration to microservices.',
    },
    cases: [{
      id: 'keola-arquitectura',
      title: { es: 'Inclub', en: 'Inclub' },
      type: { es: 'Backoffice de resort', en: 'Resort back office' },
      cover: 'orange',
      description: {
        es: 'Desarrollé el módulo de consultas de clientes, mantuve el cálculo de comisiones y reutilicé Kafka para los correos de eventos.',
        en: 'I built the customer Q&A module, maintained commission calculations, and reused Kafka for event emails.',
      },
      emphasis: ['Kafka'],
      timelineDescription: {
        es: 'Desarrollé el módulo de preguntas y respuestas de clientes y di mantenimiento a MongoDB.',
        en: 'I built the customer Q&A module and maintained MongoDB.',
      },
      architecture: {
        title: { es: 'Propuesta de arquitectura en AWS', en: 'Proposed AWS architecture' },
        diagram: '/inclub/architecture/inclub-aws',
        alt: {
          es: 'Propuesta de microservicios para Inclub en AWS: el backoffice Angular accede a los servicios en ECS, con MongoDB para persistencia y Amazon MSK para las notificaciones de eventos.',
          en: 'Proposed AWS microservices architecture for Inclub: the Angular back office accesses services on ECS, with MongoDB for persistence and Amazon MSK for event notifications.',
        },
        width: 2520,
        height: 1180,
      },
      technologies: ['Spring Boot WebFlux', 'Angular', 'MongoDB', 'Apache Kafka'],
      command: {
        label: { es: 'Revisar el atraso de notificaciones en Kafka', en: 'Check Kafka notification consumer lag' },
        text: 'kafka-consumer-groups.sh --bootstrap-server "$KAFKA_BOOTSTRAP_SERVERS" --describe --group "$NOTIFICATIONS_GROUP"',
        output: 'event-notifications | PARTITION 0 | LAG 0',
      },
    }],
  },
  {
    company: 'Ascensores SA – OTIS',
    role: { es: 'Practicante de ingeniería de software', en: 'Software Engineering Intern' },
    date: { es: '2023 – abril de 2026', en: '2023 – April 2026' },
    description: {
      es: 'Trabajé en SISMAN, el sistema de mantenimiento de Ascensores, desde la base de datos hasta las herramientas que usan los técnicos en campo.',
      en: 'I worked on SISMAN, the Ascensores maintenance system, from its database to the tools technicians use in the field.',
    },
    highlights: [
      {
        label: { es: 'Mejora promedio del 70 % en SQL', en: 'Average 70% improvement in SQL performance' },
        text: { es: 'Optimicé consultas y procedimientos almacenados, reduciendo el uso de subconsultas.', en: 'I optimized queries and stored procedures by reducing the use of subqueries.' },
      },
      {
        label: { es: 'Seguridad y migración a SAP', en: 'Security and SAP migration' },
        text: { es: 'Desarrollé el módulo de autenticación y control de acceso y participé en la migración de BAS a SAP.', en: 'I built the authentication and access control module and contributed to the migration from BAS to SAP.' },
      },
      {
        label: { es: 'Mantenimiento en campo', en: 'Field maintenance' },
        text: {
          es: 'Integré los mantenimientos correctivos con OfficeTrack, capacité a los técnicos y digitalicé los reportes y certificados para que se generaran automáticamente.',
          en: 'I integrated corrective maintenance workflows with OfficeTrack, trained technicians, and digitized reports and certificates so they could be generated automatically.',
        },
      },
    ],
    technologies: ['SQL Server', 'SAP ERP', 'OfficeTrack'],
    cases: [],
  },
  {
    company: 'Freelance',
    role: { es: 'Automatización con Python', en: 'Automation with Python' },
    date: { es: '2021 – 2024', en: '2021 – 2024' },
    description: {
      es: 'Creé programas ejecutables en Python para automatizar macros, combinar archivos y procesar grandes volúmenes de datos para cálculos financieros.',
      en: 'I built executable Python programs to automate macros, merge files, and process large datasets for financial calculations.',
    },
    technologies: ['Python'],
    cases: [],
  },
];
