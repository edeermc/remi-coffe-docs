# Roles y permisos

Remi Coffee controla el acceso con **roles**. Cada rol tiene un conjunto de **secciones** (claves técnicas como `catalog` o `kitchen.orders`). Un usuario hereda las secciones de su rol.

---

## Conceptos clave

| Concepto | Descripción |
|----------|-------------|
| **Rol** | Plantilla de permisos (ej. Cajero, Barista) |
| **Sección** | Permiso para un área funcional del sistema |
| `*` | Acceso total — solo el rol Administrador |
| **Almacenes asignados** | Limita en qué sucursales opera el usuario |
| `warehouses.all` | Ve y opera en **todos** los almacenes activos |

### Cómo se aplica

1. **Menú lateral** — solo aparecen las entradas para las que el usuario tiene sección.
2. **Permisos** — si intentas una acción sin la sección correspondiente, el sistema la bloquea.
3. **Almacenes** — inventario, POS, comandas y reportes filtran por almacén según asignación del usuario.
4. **Cajero** — la interfaz restringe a POS, perfil y (si tiene permiso) WhatsApp.
5. **Barista** — la interfaz restringe a Comandas y perfil.

---

## Roles predefinidos

Estos roles vienen **predefinidos** en el sistema. Puedes editarlos o crear roles nuevos en **Configuración → Usuarios y roles → Roles**.

### Administrador (`admin`)

- **Secciones:** `*` (todo)
- **Uso:** configuración global, usuarios, integración, todos los módulos
- **Nota:** no se puede eliminar ni cambiar el slug desde el panel

### Gerente de sucursal (`supervisor`)

- **Secciones:** `catalog`, `inventory`, `reports`, `pos`, `kitchen.orders`, `whatsapp.chat`, `orders.whatsapp.manage`, `audit.logins`, `audit.catalog`, `platform.support`
- **Uso:** operación diaria de una sucursal, comandas, reportes, bitácoras
- **Almacenes:** solo los asignados al usuario (no tiene `warehouses.all`)

### Gerente regional (`gerente-regional`)

- **Secciones:** `catalog`, `inventory`, `reports`, `pos`, `audit.logins`, `audit.catalog`, `warehouses.all`
- **Uso:** supervisión multi-sucursal
- **Almacenes:** todos los activos del sistema

### Consulta (`consulta`)

- **Secciones:** `catalog`, `reports`, `audit.catalog`
- **Uso:** solo lectura/consulta de catálogos, reportes y auditoría de catálogos
- **No puede:** movimientos, POS, comandas ni configuración

### Cajero POS (`cajero`)

- **Secciones:** `pos`, `whatsapp.chat`, `orders.whatsapp.manage`
- **Uso:** punto de venta, cobro COD de pedidos WhatsApp y consulta de recibos
- **Restricción UI:** solo puede navegar a `/panel/pos`, `/panel/whatsapp` y `/panel/perfil`

### Barista (`barista`)

- **Secciones:** `kitchen.orders`
- **Uso:** tablero Kanban de comandas (mostrador y WhatsApp)
- **Restricción UI:** solo puede navegar a `/panel/comandas` y `/panel/perfil`

---

## Tabla resumen: rol → secciones

| Sección | Admin | Gerente sucursal | Gerente regional | Consulta | Cajero | Barista |
|---------|:-----:|:----------------:|:----------------:|:--------:|:------:|:-------:|
| Acceso total `*` | ✓ | | | | | |
| `config.users` / `config.roles` / `config.system` | ✓ | | | | | |
| `catalog` | ✓ | ✓ | ✓ | ✓ | | |
| `inventory` | ✓ | ✓ | ✓ | | | |
| `reports` | ✓ | ✓ | ✓ | ✓ | | |
| `pos` | ✓ | ✓ | ✓ | | ✓ | |
| `kitchen.orders` | ✓ | ✓ | | | | ✓ |
| `whatsapp.chat` | ✓ | ✓ | | | ✓ | |
| `orders.whatsapp.manage` | ✓ | ✓ | | | ✓ | |
| `audit.logins` | ✓ | ✓ | ✓ | | | |
| `audit.catalog` | ✓ | ✓ | ✓ | ✓ | | |
| `warehouses.all` | ✓ | | ✓ | | | |
| `platform.support` | ✓ | ✓ | | | | |

---

## Crear roles personalizados

**Sección requerida:** `config.roles`

1. Configuración → Usuarios y roles → pestaña **Roles**.
2. **Nuevo rol** — nombre visible y slug (solo minúsculas, números y guiones).
3. Marca las **secciones** que necesites (lista completa en [claves de sección](referencia/claves-de-seccion.md)).
4. Asigna el rol a los usuarios en la pestaña **Usuarios**.

> El slug `admin` está reservado y no puede reutilizarse.

---

## Asignar almacenes a un usuario

**Sección requerida:** `config.users`

Al editar un usuario (sin rol que tenga `warehouses.all`):

- Selecciona uno o más **almacenes** donde puede operar.
- Afecta: movimientos de inventario, stock visible en POS, comandas y reportes filtrados.

Los roles con `warehouses.all` (admin y gerente regional) ignoran esta limitación.

---

## Referencia

- [Claves de sección](referencia/claves-de-seccion.md) — listado completo con descripción
- [Matriz de roles](referencia/matriz-roles.md) — tabla ampliada
- [Guías por módulo](./modulos/) — qué hace cada pantalla y qué permiso pide
