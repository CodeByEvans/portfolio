import { FaReact, FaNodeJs, FaAws, FaGitAlt, FaDocker } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiGraphql,
  SiPrisma,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiRedis,
  SiSupabase,
} from "react-icons/si";

const frontEnd = [
  <FaReact />,
  <SiNextdotjs />,
  <SiTailwindcss />,
  <SiTypescript />,
];

const backEnd = [<FaNodeJs />, <SiNextdotjs />, <SiGraphql />, <SiPrisma />];

const databaseAndCloud = [
  <SiMysql />,
  <SiMongodb />,
  <SiPostgresql />,
  <SiRedis />,
  <SiSupabase />,
  <FaAws />,
];

const tools = [<FaGitAlt />, <FaDocker />, "⚙️", "🧶", "⚡", "📦"];

export const stackDataSections = [
  {
    title: "Frontend",
    items: frontEnd,
    description:
      "Empecé desarrollando con HTML, CSS y Javascript, pero rapidamente me interesé por frameworks más avanzados e interactivos como React. Esto me permitió hacer aplicaciones más eficientes y dinámicas, las cuales quise mejorar aun más con Next.js y TypeScript.",
  },
  {
    title: "Backend",
    items: backEnd,
    description:
      "Después de dominar el lado visual, me empezó a intrigar lo que pasaba detrás del telón. Así fue como entré al mundo del backend con Node.js y Express, aprendiendo a crear mis propios endpoints y conectar todo con bases de datos. Con el tiempo, fui profundizando en el modelado de datos, autenticación, SEO y la estructura de las APIs. Todo eso me ayudó a convertirme en un desarrollador full-stack más completo.",
  },
  {
    title: "Database & Cloud",
    items: databaseAndCloud,
    description:
      "Siempre me ha gustado que mis proyectos trabajen con datos reales, vivos y dinámicos. Empecé con MySQL, que fue la base de datos que más fácil se me hizo al principio, y con el tiempo aprendí a manejar también MongoDB, PostgreSQL y Supabase, aprovechando su Real-Time API y sus integraciones. Al notar que guardar imágenes y archivos pesados en la base de datos no era lo ideal, empecé a usar servicios en la nube como AWS S3 y Cloudinary. Más adelante, me metí con CI/CD para automatizar despliegues y mejorar mi flujo de desarrollo.",
  },
  {
    title: "Tools",
    items: tools,
    description:
      "Para mí, la clave está en mantener un flujo limpio y productivo. Uso Git y GitHub en cada proyecto, Zod para validaciones, i18next para traducción, y Playwright, Supertest y Jest para testing. Me gusta animar las interfaces con Framer Motion y Radix UI, trabajando la experiencia de usuario a la perfección a la vez que la accesibilidad. Nada de esto podría mantenerse sin unas buenas prácticas y buena documentación, así que hago de cada proyecto una experiencia unica.",
  },
];

export default stackDataSections;
