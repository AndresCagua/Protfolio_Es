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
    tag: 'Proyecto propio',
    title: 'FerrePlus — Sistema de inventario',
    description:
      'Plataforma full-stack para gestión de inventario en ferreterías y bodegas de repuestos: productos, clientes, proveedores, ventas, compras, movimientos de stock, gastos y reportes. Autenticación JWT con roles, dashboard con indicadores, alertas de stock bajo y reportes por fechas. Totalmente dockerizado.',
    metrics: '56 endpoints · 12 entidades · dashboard con reportes',
    stack: ['Java 21', 'Spring Boot 3', 'PostgreSQL', 'JWT', 'Angular 22', 'Docker'],
    link: { label: 'Ver en GitHub', href: 'https://github.com/AndresCagua/FerrePlus' },
  },
  {
    number: '02',
    tag: 'Confidencial',
    title: 'ERP & POS para negocio gastronómico',
    description:
      'Sistema integral de operación para restaurantes: ventas, recetas con explosión de insumos, producción de cocina, caja chica y cuentas por cobrar. API REST con servicio de autenticación JWT desacoplado y aplicación Angular con impresión térmica de tickets.',
    metrics: '87 endpoints · 18 tablas · 15 módulos',
    stack: ['Java 8', 'Spring Boot', 'MySQL', 'JWT', 'Angular 15', 'Docker'],
  },
  {
    number: '03',
    tag: 'Confidencial',
    title: 'API de logística nacional',
    description:
      'Backend de la app móvil de operadores para una empresa nacional de mensajería: órdenes de recolección y distribución, trazabilidad de guías, evidencias de entrega y notificaciones push y WhatsApp. Soporta modo offline con sincronización masiva y convive con sistemas legacy.',
    metrics: '22 endpoints · workers en segundo plano · 28 entidades',
    stack: ['.NET 8', 'EF Core', 'Azure SQL', 'Firebase', 'Docker'],
  },
  {
    number: '04',
    tag: 'Confidencial',
    title: 'Plataforma de gestión deportiva',
    description:
      'Plataforma integral de una federación deportiva nacional: torneos, jugadores, partidos y estadísticas en vivo, más CMS institucional. Persistencia políglota — PostgreSQL transaccional y MongoDB para estadísticas — sincronizada con observers y jobs, con migración histórica de datos en colas.',
    metrics: '293 endpoints · 73 controladores · 140 modelos',
    stack: ['Laravel 12', 'PHP 8.2', 'PostgreSQL', 'MongoDB', 'Swagger', 'Docker'],
  },
  {
    number: '05',
    tag: 'Confidencial',
    title: 'Operaciones de Data Warehouse',
    description:
      'Automatización de las operaciones de un DWH Oracle en producción para un operador nacional de telecomunicaciones: pipelines ETL diarios, watchdogs con reintentos, reconciliación de cargas archivo contra base de datos, gestión de sesiones colgadas y reportería automática.',
    metrics: 'Oracle 12c · PL/SQL avanzado · particionamiento',
    stack: ['Oracle 12c', 'PL/SQL', 'Bash', 'DataStage', 'Linux'],
  },
];
