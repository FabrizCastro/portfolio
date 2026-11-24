const icons = import.meta.glob<string>('./assets/skills/{tech-*,api.svg,brand-nextjs.svg,calendar-clock.svg,device-desktop-code.svg,device-mobile-up.svg,expo.svg,language.svg,server.svg,target-arrow.svg,users-group.svg}', {
  eager: true,
  import: 'default',
  query: '?url',
});

export function getSkillGroups(es: boolean) {
  const text = (spanish: string, english: string) => es ? spanish : english;

  return [
    { category: text('IA y automatización', 'AI and automation'), previewCount: 6, tools: [
      { name: 'Codex', icon: 'tech-codex.svg', description: text('Planificación, implementación y revisión de código con agentes.', 'Planning, implementation, and code review with agents.') },
      { name: 'Claude', icon: 'tech-claude.svg', description: text('Razonamiento y desarrollo asistido.', 'Reasoning and assisted development.') },
      { name: 'Cursor', icon: 'tech-cursor.svg', monochrome: true, description: text('Editor de código con asistencia de IA.', 'AI-assisted code editor.') },
      { name: 'OpenClaw', icon: 'tech-openclaw.svg', description: text('Asistente y automatización con agentes.', 'Assistant and agent automation.') },
      { name: 'Ollama', icon: 'tech-ollama.svg', monochrome: true, description: text('Ejecución local de modelos de lenguaje.', 'Running language models locally.') },
      { name: 'n8n', icon: 'tech-n8n.svg', description: text('Flujos de trabajo e integración de servicios.', 'Workflows and service integration.') },
      { name: 'Rasa', icon: 'tech-rasa.svg' },
      { name: text('RAG y embeddings', 'RAG and embeddings'), icon: 'language.svg', monochrome: true },
      { name: 'MCP', icon: 'api.svg', monochrome: true },
      { name: text('Tareas programadas', 'Scheduled jobs'), icon: 'calendar-clock.svg', monochrome: true },
    ] },
    { category: text('Lenguajes', 'Languages'), previewCount: 6, tools: [
      { name: 'Python', icon: 'tech-python.svg', description: text('APIs, automatización y procesamiento de datos.', 'APIs, automation, and data processing.') },
      { name: 'C#', icon: 'tech-csharp.svg', description: text('Servicios e integraciones empresariales.', 'Business services and integrations.') },
      { name: 'Java', icon: 'tech-java.svg', description: text('Microservicios con Spring Boot.', 'Microservices with Spring Boot.') },
      { name: 'TypeScript', icon: 'tech-typescript.svg', description: text('Aplicaciones web y móviles con tipado estático.', 'Typed web and mobile applications.') },
      { name: 'JavaScript', icon: 'tech-javascript.svg', description: text('Interfaces y aplicaciones web.', 'Web interfaces and applications.') },
      { name: 'SQL', icon: 'server.svg', monochrome: true, description: text('Modelado relacional, consultas y procedimientos.', 'Relational modeling, queries, and stored procedures.') },
      { name: 'C++', icon: 'tech-cpp.svg' },
    ] },
    { category: text('Infraestructura', 'Infrastructure'), previewCount: 5, tools: [
      { name: 'AWS', icon: 'tech-aws.svg', description: text('Infraestructura en la nube y migración de servidores.', 'Cloud infrastructure and server migration.') },
      { name: 'Docker', icon: 'tech-docker.svg', description: text('Contenedores y entornos con Docker Compose.', 'Containers and environments with Docker Compose.') },
      { name: 'Firebase', icon: 'tech-firebase.svg', description: text('Autenticación, almacenamiento, notificaciones y hosting.', 'Authentication, storage, notifications, and hosting.') },
      { name: 'Vercel', icon: 'tech-vercel.svg', monochrome: true, description: text('Infraestructura para aplicaciones web.', 'Infrastructure for web applications.') },
      { name: 'TestFlight', icon: 'tech-testflight.png', description: text('Distribución de versiones beta para iOS.', 'Distributing beta builds for iOS.') },
      { name: 'Nginx', icon: 'tech-nginx.svg' },
      { name: text('Máquinas virtuales Linux', 'Linux virtual machines'), icon: 'device-desktop-code.svg', monochrome: true },
    ] },
    { category: text('Despliegue y distribución', 'Deployment and distribution'), previewCount: 4, tools: [
      { name: 'App Store', icon: 'tech-appstore.svg', description: text('Distribución de aplicaciones para iOS.', 'Distributing iOS apps.') },
      { name: 'Google Play', icon: 'tech-googleplay.svg', description: text('Distribución de aplicaciones para Android.', 'Distributing Android apps.') },
      { name: 'Netlify', icon: 'tech-netlify.svg', description: text('Publicación de sitios y aplicaciones web.', 'Publishing websites and web applications.') },
      { name: 'GitHub Actions', icon: 'tech-githubactions.svg', description: text('Automatización de compilación y despliegue.', 'Automating builds and deployments.') },
      { name: 'Firebase Hosting', icon: 'tech-firebase.svg' },
    ] },
    { category: 'Frontend', previewCount: 3, tools: [
      { name: 'React', icon: 'tech-react.svg', description: text('Desarrollo de interfaces web.', 'Web interface development.') },
      { name: 'Astro', icon: 'tech-astro.svg', description: text('Sitios web de contenido.', 'Content-focused websites.') },
      { name: 'Next.js', icon: 'brand-nextjs.svg', monochrome: true, description: text('Aplicaciones web en React.', 'React web applications.') },
      { name: 'Angular', icon: 'tech-angular.svg' },
      { name: 'Vue', icon: 'tech-vue.svg' },
    ] },
    { category: text('Backend y datos', 'Backend and data'), previewCount: 3, tools: [
      { name: '.NET', icon: 'tech-dotnet.svg', description: text('APIs e integraciones con ASP.NET Core.', 'APIs and integrations with ASP.NET Core.') },
      { name: 'FastAPI', icon: 'tech-fastapi.svg', description: text('Servicios y APIs REST con Python.', 'Python services and REST APIs.') },
      { name: 'PostgreSQL', icon: 'tech-postgresql.svg', description: text('Persistencia y modelado relacional.', 'Persistence and relational modeling.') },
      { name: 'Spring Boot / WebFlux', icon: 'tech-spring.svg' },
      { name: 'SQL Server', icon: 'tech-sqlserver.svg' },
      { name: 'REST / OpenAPI', icon: 'api.svg', monochrome: true },
      { name: text('Microservicios', 'Microservices'), icon: 'server.svg', monochrome: true },
    ] },
    { category: text('Desarrollo móvil', 'Mobile development'), previewCount: 0, tools: [
      { name: 'React Native', icon: 'tech-react.svg' },
      { name: 'Expo', icon: 'expo.svg', monochrome: true },
      { name: 'EAS Build', icon: 'device-mobile-up.svg', monochrome: true },
    ] },
    { category: text('Gestión de producto', 'Product management'), previewCount: 0, tools: [
      { name: text('Definición de alcance', 'Scope definition'), icon: 'target-arrow.svg', monochrome: true },
      { name: text('Prototipado en Figma', 'Figma prototyping'), icon: 'tech-figma.svg' },
      { name: text('Colaboración ágil', 'Agile collaboration'), icon: 'users-group.svg', monochrome: true },
    ] },
  ].map(group => ({
    ...group,
    tools: group.tools.map(tool => ({ ...tool, icon: icons[`./assets/skills/${tool.icon}`] })),
  }));
}
