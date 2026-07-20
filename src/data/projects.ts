export interface Project {
  number: string;
  tag: 'Proyecto propio' | 'Confidencial';
  title: string;
  description: string;
  metrics: string;
  stack: string[];
  link?: { label: string; href: string };
}

export const projects: Project[] = [
  {
    number: '01',
    tag: 'Confidencial', //'Proyecto propio',
    title: 'ERP & POS para negocio gastronómico',
    description:
      'Sistema integral de operación para restaurantes: ventas, recetas con explosión de insumos, producción de cocina, caja chica y cuentas por cobrar. API REST con servicio de autenticación JWT desacoplado y aplicación Angular con impresión térmica de tickets.',
    metrics: '88 endpoints · 18 tablas · 15 módulos',
    stack: ['Java 8', 'Spring Boot', 'MySQL', 'JWT', 'Angular 15', 'Docker'],
    //link: { label: 'Ver GitHub', href: 'https://github.com/AndresCagua' },
  },
  {
    number: '02',
    tag: 'Confidencial',
    title: 'API de logística nacional',
    description:
      'Backend de la app móvil de operadores para una empresa nacional de mensajería: órdenes de recolección y distribución, trazabilidad de guías, evidencias de entrega y notificaciones push y WhatsApp. Soporta modo offline con sincronización masiva y convive con sistemas legacy.',
    metrics: '71 endpoints · 28 entidades · workers en segundo plano',
    stack: ['.NET 8', 'EF Core', 'Azure SQL', 'Firebase', 'WhatsApp Business API', 'Docker'],
  },
  {
    number: '03',
    tag: 'Confidencial',
    title: 'Plataforma de gestión deportiva',
    description:
      'Plataforma integral de una federación deportiva nacional: torneos, jugadores, partidos y estadísticas en vivo, más CMS institucional. Persistencia políglota — PostgreSQL transaccional y MongoDB para estadísticas — sincronizada con observers y jobs, con migración histórica de datos en colas.',
    metrics: '~520 rutas · 73 controladores · 140 modelos',
    stack: ['Laravel 12', 'PHP 8.2', 'PostgreSQL', 'MongoDB', 'Swagger', 'Docker'],
  },
  {
    number: '04',
    tag: 'Confidencial',
    title: 'Operaciones de Data Warehouse',
    description:
      'Automatización de las operaciones de un DWH Oracle en producción para un operador nacional de telecomunicaciones: pipelines ETL diarios, watchdogs con reintentos, reconciliación de cargas archivo contra base de datos, gestión de sesiones colgadas y reportería automática.',
    metrics: 'Oracle 12c · PL/SQL avanzado · particionamiento',
    stack: ['Oracle 12c', 'PL/SQL', 'Bash', 'ODI/OSB', 'Linux'],
  },
];
