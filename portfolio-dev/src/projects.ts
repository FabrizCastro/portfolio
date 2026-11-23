export type ProjectGroup = "personal" | "gsitel";
export type ProjectLanguage = "en" | "es";

export interface Project {
  title: string;
  titleEs?: string;
  description: string;
  descriptionEs: string;
  category?: "automation";
  featured?: boolean;
  /** ISO date with year, month or day precision. */
  date?: string;
  images?: string[];
  code?: { language: string; source: string };
  milestones?: { en: string; es: string }[];
  technologies?: string[];
  link?: string;
  github?: string;
}

export interface ProjectEntry {
  project: Project;
  id: string;
  category: string;
}

const existingProjects: Project[] = [
  
    {
        title: "n8n Automation",
        category: "automation",
        featured: true,
        milestones: [
          { en: "Generate XML configuration files from Excel input.", es: "Generación de archivos XML de configuración a partir de Excel." },
          { en: "Generate client-specific accounting reports from SUNAT records.", es: "Creación de reportes contables por cliente con datos de SUNAT." },
        ],
        titleEs: "Automatización con n8n",
        descriptionEs: "Desarrollé flujos en n8n y su frontend y backend. Los flujos integran archivos en la nube y APIs de Google, SUNAT y Microsoft. Los ejemplos muestran la generación de archivos XML a partir de Excel y la elaboración de reportes contables por cliente.",
        description: "I built n8n workflows and their frontend and backend. The workflows connect cloud files with APIs from Google, SUNAT, and Microsoft. The examples show XML generation from Excel and client-specific accounting reports.",
        images: ["/n8n/xml-automatization.jpeg","/n8n/xml-response.png","/n8n/fact-ventas-automatization.jpeg","/n8n/factreportresponsegmail.jpeg"],
        technologies: ["Code", "Python", "n8n"],
    },
    {
        title: "Redcorp - A business app",
        titleEs: "Redcorp",
        descriptionEs: "Plataforma web y móvil para organizar equipos y facilitar la comunicación entre empleados de distintas áreas.",
        description:
        "Redcorp is a web and mobile platform that offers services to companies that require better organization and communication between employees across different departments, promoting work groups and development efficiency through a social network-like interface. Our target audience is companies looking for a web application to better manage their employee network and workgroup management.",
        link: "https://redcorp-web-app.web.app/",
        github: "https://github.com/redcorp-2023-1",
        images: ["/redcorp/redcorp.png","/redcorp/landingpage-inicio.png",
        "/redcorp/select.png","/redcorp/login.png","/redcorp/register.png",
        "/redcorp/home.png","/redcorp/secciones.png","/redcorp/comunicados.png"],
        technologies: [".NET Core", "Vue","Microservices","Docker"],
    },
    {
        title: "Kitchen-tech - Web App + IOT",
        titleEs: "Kitchen-tech · Aplicación web e IoT",
        descriptionEs: "Aplicación para restaurantes que registra pedidos, pagos y clientes. El sistema IoT detecta el estado de las mesas durante el servicio.",
        description:
        "It was an application designed for use in a restaurant. Its function was to allow servers to record orders, pay at the register, add customers, and customize consumption, costs, and expenses. The IoT system was responsible for detecting the status of diners throughout their meal, interacting between the statuses of 'Empty Table, Eating, Waiting for Orders, Waiting, Reservation, and Payment Due.'",
        link:"https://www.youtube.com/watch?v=rSsDI6MaP-4&t=1s",
        github: "https://github.com/orgs/Techstudents-SW74/repositories",
        images: ["/kitchen/1.jpg","/kitchen/MUM3.png","/kitchen/fisico.png","/kitchen/wokwi.jpeg"],
        technologies: ["Vue", "Spring Boot","MySQL", "Python"],
    },
    {
        title: "Smart Contracts",
        titleEs: "Smart Contracts",
        descriptionEs: "Aplicación web que usa contratos inteligentes en Ethereum y Solidity para formalizar acuerdos entre empresas y creadores de contenido. Una API ejecuta las transacciones y devuelve el consumo de gas y la información del contrato.",
        description: "A web app that uses smart contracts on Ethereum and Solidity to formalize agreements between companies and content creators. An API executes transactions and returns gas usage and contract details.",
        link:"https://smart-contracts-team.github.io/landing-page/",
        github: "https://github.com/orgs/Smart-Contracts-Team/repositories",
        images: ["/smart/home1.jpg","/smart/dashboard.png","/smart/services.jpg","/smart/eth.png","/smart/data.png"],
        technologies: ["Angular", "Spring Boot","MySQL", "Microservices"],
    },

]
const [automation, ...earlierProjects] = existingProjects;
export const projects: Record<ProjectGroup, Project[]> = {
  personal: [
    {
      title: "Cuadrai",
      featured: true,
      technologies: ["React", "Python", "Microservices"],
      milestones: [
        { en: "Web app built with Next.js and React.", es: "Aplicación web desarrollada con Next.js y React." },
        { en: "Mobile app built with React Native and Expo.", es: "Aplicación móvil desarrollada con React Native y Expo." },
        { en: "Booking and catalog services backed by PostgreSQL.", es: "Servicios de reservas y catálogo con persistencia en PostgreSQL." },
      ],
      description: "I developed the web app, mobile app, and backend for the sports venue booking platform.",
      descriptionEs: "Desarrollé la aplicación web, la aplicación móvil y el backend de la plataforma de reservas de espacios deportivos.",
    },
    {
      title: "Xtreme Fitness Sport",
      featured: true,
      technologies: ["React"],
      description: "I developed the web app for Xtreme Fitness Sport.",
      descriptionEs: "Desarrollé la aplicación web de Xtreme Fitness Sport.",
    },
    {
      title: "SerMedicod",
      description: "I defined the initial proposal for the SerMedicod project.",
      descriptionEs: "Elaboré el planteamiento inicial del proyecto SerMedicod.",
    },
    {
      title: "V&A Profesionales",
      description: "I developed the frontend and backend applications for V&A Profesionales.",
      descriptionEs: "Desarrollé las aplicaciones de frontend y backend de V&A Profesionales.",
    },
    automation,
    ...earlierProjects,
  ],
  gsitel: [
    {
      title: "Saca tu Basura",
      description: "A GSITEL app for waste collection.",
      descriptionEs: "Aplicación de GSITEL para la recolección de residuos.",
    },
    {
      title: "Vecinal Web",
      description: "A GSITEL web app for neighborhood use.",
      descriptionEs: "Aplicación web vecinal de GSITEL.",
    },
  ],
};
