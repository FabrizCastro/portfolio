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
  timelineDescription?: Localized;
  technologies: string[];
  commands: string[];
  highlights?: WorkPoint[];
  cover: 'orange' | 'yellow' | 'blue' | 'sky' | 'lavender';
  media?: WorkMedia[];
  architecture?: {
    description?: Localized;
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
        id: 'sisman-aws',
        title: { es: 'Arquitectura SISMAN en AWS', en: 'SISMAN architecture on AWS' },
        type: { es: 'Arquitectura', en: 'Architecture' },
        cover: 'yellow',
        description: {
          es: 'Participé en el diseño y la conexión de cuatro contenedores en un único servidor Amazon EC2: API, FTP, base de datos y aplicación web. La API sincroniza datos con SAP y OfficeTrack, el FTP recibe certificados y SISMAN Web consulta la base de datos.',
          en: 'I helped design and connect four containers on one Amazon EC2 host: the API, FTP, database, and web application. The API syncs data with SAP and OfficeTrack, FTP receives certificates, and SISMAN Web queries the database.',
        },
        architecture: {
          diagram: 'sisman-aws',
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
        commands: ['aws ec2 describe-instance-status --include-all-instances --output table'],
      },
      {
        id: 'ascensores-tools',
        title: { es: 'Ascensores Tools', en: 'Ascensores Tools' },
        type: { es: 'Seguimiento comercial', en: 'Sales tracking' },
        cover: 'blue',
        description: {
          es: 'Desarrollé con C# y React una herramienta para que los ejecutivos de ventas de Ascensores gestionaran prospectos y clientes y dieran seguimiento a sus oportunidades. Armé el backlog a partir de reuniones periódicas con el equipo comercial y validé con ellos el diseño, las funcionalidades y las propuestas según su forma de trabajar.',
          en: 'I built a C# and React tool for the Ascensores sales team to manage prospects, customers, and sales opportunities. I owned the backlog and met with sales executives regularly to validate designs, features, and proposals against how they worked.',
        },
        timelineDescription: {
          es: 'Construí una herramienta para seguir prospectos y clientes. Armé el backlog y validé el diseño y las funcionalidades con los ejecutivos de ventas.',
          en: 'I built a tool to track prospects and customers. I owned the backlog and validated designs and features with the sales team.',
        },
        technologies: ['C#', 'ASP.NET Core', 'React', 'Vite', 'REST API'],
        commands: ['dotnet build', 'npm run build'],
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
      {
        id: 'ascensores-hub',
        title: { es: 'Ascensores Hub', en: 'Ascensores Hub' },
        type: { es: 'Portal de mantenimiento', en: 'Maintenance portal' },
        cover: 'sky',
        description: {
          es: 'Diseñé y desarrollé un portal para que clientes empresariales como BCP consultaran cuántos equipos tenían, cuáles estaban operativos y qué mantenimientos o emergencias se habían atendido. El dashboard muestra los materiales utilizados en cada emergencia y gráficos por tipo de reclamo. El portal también reúne los certificados de mantenimiento terminados.',
          en: 'I designed and built a portal for enterprise customers such as BCP to see how many units they had, which were operational, and what maintenance or emergency work had been completed. The dashboard shows materials used in each emergency and charts by complaint type. The portal also provides completed maintenance certificates.',
        },
        timelineDescription: {
          es: 'Desarrollé un portal para que clientes como BCP consultaran el estado de sus equipos, las emergencias atendidas y sus certificados de mantenimiento.',
          en: 'I built a portal for customers such as BCP to see equipment status, emergency work, and maintenance certificates.',
        },
        architecture: {
          description: {
            es: 'Organicé el portal como un monolito horizontal con React, FastAPI y PostgreSQL. CloudFront sirve el frontend desde Amazon S3 y el backend corre en Amazon EC2 con Docker. El Hub se conecta al VPC de SISMAN para sincronizar datos de su API una vez al día y recuperar certificados vía FTP. El diseño incluye Cognito para el acceso y CloudWatch para la observabilidad.',
            en: 'I structured the portal as a horizontal monolith with React, FastAPI, and PostgreSQL. CloudFront serves the frontend from Amazon S3, and the backend runs in Docker on Amazon EC2. Hub connects to the SISMAN VPC to sync API data once a day and retrieve certificates over FTP. The design includes Cognito for access and CloudWatch for observability.',
          },
          diagram: 'ascensores-hub-aws',
          alt: {
            es: 'Arquitectura AWS de Ascensores Hub y sus conexiones con SISMAN',
            en: 'Ascensores Hub AWS architecture and its connections to SISMAN',
          },
          width: 2560,
          height: 1360,
        },
        technologies: ['React', 'Python', 'FastAPI', 'PostgreSQL', 'Docker', 'AWS'],
        commands: ['docker image ls', 'docker ps', 'docker stats --no-stream'],
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
        es: 'Resolví tickets durante la migración del backoffice a microservicios. También desarrollé el módulo de preguntas y respuestas de clientes y di mantenimiento a MongoDB.',
        en: 'I resolved tickets during the back office migration to microservices. I also built the customer Q&A module and maintained MongoDB.',
      },
      timelineDescription: {
        es: 'Desarrollé el módulo de preguntas y respuestas de clientes y di mantenimiento a MongoDB.',
        en: 'I built the customer Q&A module and maintained MongoDB.',
      },
      highlights: [
        {
          label: { es: 'Comisiones de socios', en: 'Member commissions' },
          text: { es: 'Mantuve el árbol binario que calculaba comisiones a partir de los puntos por consumos y reservas en el resort.', en: 'I maintained the binary tree that calculated commissions from points earned through spending and bookings at the resort.' },
        },
        {
          label: { es: 'Eventos y notificaciones', en: 'Events and notifications' },
          text: {
            es: 'Me encargué del módulo donde los administradores registraban eventos, aprobaban socios y los ubicaban por rango. Reutilicé el microservicio de eventos y las colas de Kafka para reenviar correos de promociones antes, durante y después de cada evento.',
            en: 'I worked on the module staff used to create events, approve members, and assign their positions by rank. I reused the event microservice and Kafka queues to resend promotional emails before, during, and after each event.',
          },
        },
      ],
      technologies: ['Spring Boot WebFlux', 'Angular', 'MongoDB', 'Apache Kafka'],
      commands: ['ng build', 'mongosh --eval "db.runCommand({ ping: 1 })"'],
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
