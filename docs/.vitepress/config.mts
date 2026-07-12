import { defineConfig } from "vitepress";

export default defineConfig({
  title: "Remi Coffee",
  description:
    "Wiki de usuario y administraciÃ³n â€” cafeterÃ­a, POS, comandas e inventario BOM",
  lang: "es-ES",
  themeConfig: {
    nav: [
      { text: "Inicio", link: "/" },
      { text: "ConfiguraciÃ³n inicial", link: "/01-configuracion-inicial" },
      { text: "Roles y permisos", link: "/02-roles-y-permisos" },
    ],
    sidebar: [
      {
        text: "Primeros pasos",
        collapsed: false,
        items: [
          { text: "ConfiguraciÃ³n inicial", link: "/01-configuracion-inicial" },
          { text: "Roles y permisos", link: "/02-roles-y-permisos" },
          { text: "Inicio del panel", link: "/03-inicio-panel" },
        ],
      },
      {
        text: "MÃ³dulos",
        collapsed: false,
        items: [
          { text: "Resumen de mÃ³dulos", link: "/modulos/" },
          { text: "OperaciÃ³n", link: "/modulos/operacion" },
          { text: "Punto de venta", link: "/modulos/pos" },
          { text: "Comandas", link: "/modulos/comandas" },
          { text: "WhatsApp", link: "/modulos/whatsapp" },
          { text: "CatÃ¡logo", link: "/modulos/catalogo" },
          { text: "Reportes", link: "/modulos/reportes" },
          { text: "ConfiguraciÃ³n", link: "/modulos/configuracion" },
          { text: "Soporte plataforma", link: "/modulos/soporte-plataforma" },
        ],
      },
      {
        text: "Referencia",
        collapsed: false,
        items: [
          { text: "Claves de secciÃ³n", link: "/referencia/claves-de-seccion" },
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
      copyright: "DocumentaciÃ³n de usuario y administraciÃ³n",
    },
  },
});
