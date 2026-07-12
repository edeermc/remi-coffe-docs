import { defineConfig } from "vitepress";

export default defineConfig({
  title: "Remi Coffee",
  description:
    "Wiki de usuario y administración — cafetería, POS, comandas e inventario BOM",
  lang: "es-ES",
  themeConfig: {
    nav: [
      { text: "Inicio", link: "/" },
      { text: "Configuración inicial", link: "/01-configuracion-inicial" },
      { text: "Roles y permisos", link: "/02-roles-y-permisos" },
    ],
    sidebar: [
      {
        text: "Primeros pasos",
        collapsed: false,
        items: [
          { text: "Configuración inicial", link: "/01-configuracion-inicial" },
          { text: "Roles y permisos", link: "/02-roles-y-permisos" },
          { text: "Inicio del panel", link: "/03-inicio-panel" },
        ],
      },
      {
        text: "Módulos",
        collapsed: false,
        items: [
          { text: "Resumen de módulos", link: "/modulos/" },
          { text: "Operación", link: "/modulos/operacion" },
          { text: "Punto de venta", link: "/modulos/pos" },
          { text: "Comandas", link: "/modulos/comandas" },
          { text: "WhatsApp", link: "/modulos/whatsapp" },
          { text: "Catálogo", link: "/modulos/catalogo" },
          { text: "Reportes", link: "/modulos/reportes" },
          { text: "Configuración", link: "/modulos/configuracion" },
          { text: "Soporte plataforma", link: "/modulos/soporte-plataforma" },
        ],
      },
      {
        text: "Referencia",
        collapsed: false,
        items: [
          { text: "Claves de sección", link: "/referencia/claves-de-seccion" },
          { text: "Matriz de roles", link: "/referencia/matriz-roles" },
        ],
      },
    ],
    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/edeermc/remi-coffe-docs",
      },
    ],
    footer: {
      message: "Remi Coffee v1.0.0",
      copyright: "Documentación de usuario y administración",
    },
  },
});
