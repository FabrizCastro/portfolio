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
  company?: "GSITEL";
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
      title: "CuadrAI",
      featured: true,
      technologies: ["Next.js", "React Native", "FastAPI", "PostgreSQL", "Rasa", "n8n"],
      milestones: [
        { en: "I built the mobile app with React Native and Expo and a backend for the Next.js web app that brings together venue, availability, and booking data.", es: "Desarrollé la app móvil con React Native y Expo y un backend para la web en Next.js que reúne datos de sedes, disponibilidad y reservas." },
        { en: "I used Gherkin scenarios to validate availability and booking states. I organized the backlog and release checks for Google Play and TestFlight.", es: "Validé reglas de disponibilidad y estados de reserva con escenarios Gherkin. Organicé el backlog y las validaciones para Google Play y TestFlight." },
        { en: "I connected the Rasa assistant to FastAPI services so players could ask about venue recommendations, availability, and bookings.", es: "Conecté el asistente Rasa con servicios FastAPI para responder preguntas sobre recomendaciones de canchas, disponibilidad y reservas." },
        { en: "I indexed project knowledge with embeddings so development agents could retrieve relevant context through RAG. I connected the assistant to n8n via MCP and used prompts and reusable skills to plan changes, define module responsibilities, and automate deployment steps with a dedicated Linux VM account.", es: "Indexé información del proyecto con embeddings para que los agentes recuperaran contexto mediante RAG. Conecté el asistente con n8n vía MCP y usé prompts y skills reutilizables para planificar cambios, delimitar módulos y automatizar pasos de despliegue con una cuenta dedicada en una VM Linux." },
      ],
      description: "I designed and built a platform where players can find and book courts and venue managers can track availability and occupancy.",
      descriptionEs: "Diseñé y desarrollé una plataforma para que los jugadores encuentren y reserven canchas y los administradores consulten disponibilidad y ocupación.",
    },
    {
      title: "Xtreme Fitness Sport",
      featured: true,
      technologies: ["Next.js", "FastAPI", "PostgreSQL", "OpenAPI", "Firebase"],
      description: "I defined the customer, membership, and scheduling workflows and turned them into acceptance criteria for the API. I built the web app and backend, documented the contracts in OpenAPI, and validated the main workflows after deploying to Firebase Hosting.",
      descriptionEs: "Definí los flujos de clientes, membresías y horarios y los convertí en criterios de aceptación para la API. Implementé la web y el backend, documenté los contratos en OpenAPI y validé los recorridos principales tras publicar la aplicación en Firebase Hosting.",
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
