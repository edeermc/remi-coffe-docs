# remicoffee-docs

Wiki de usuario y administración de **Remi Coffee**, publicada con [VitePress](https://vitepress.dev/).

## Repositorio

**Repositorio Git independiente.** Contenido en `docs/`; el panel enlaza vía `NEXT_PUBLIC_DOCS_URL`.

| Relacionado | Rol |
|-------------|-----|
| `remicoffee-frontend` | Panel (enlace Documentación) |
| `remicoffee-backend` | API (referencia de permisos y módulos) |

## Desarrollo local

```bash
npm install
npm run dev
```

Abre `http://localhost:5173` (o el puerto que indique la terminal).

En Docker local del monorepo, el frontend suele apuntar a esa URL con `NEXT_PUBLIC_DOCS_URL=http://localhost:5173`.

## Build

```bash
npm run build
npm run preview
```

## Despliegue en Vercel

1. Importa este repo en Vercel como proyecto nuevo.
2. Vercel lee `vercel.json` automáticamente:
   - **Build:** `npm run build`
   - **Output:** `docs/.vitepress/dist`
3. Opcional: dominio `docs-cafe.tu-dominio.com`.
4. Configura `NEXT_PUBLIC_DOCS_URL` en el build del frontend con esa URL.

## Contenido principal

| Documento | Tema |
|-----------|------|
| `docs/02-roles-y-permisos.md` | Roles (admin, cajero, barista…) |
| `docs/modulos/comandas.md` | Kanban, atajos, estados |
| `docs/modulos/pos.md` | Venta y COD WhatsApp |
| `docs/modulos/whatsapp.md` | Estado actual / Fase 9 |
| `docs/referencia/` | Claves de sección y matriz de roles |

Edita los `.md` y haz push; Vercel redeploya el sitio.

## Plan de despliegue del producto

Ver `DEPLOYMENT-REMICOFFEE.md` en la carpeta raíz local del workspace.
