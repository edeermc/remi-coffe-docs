# Matriz de roles

Tabla de referencia rápida: qué secciones trae cada rol predefinido al instalar Remi Coffee.

| Sección | Admin | Gerente sucursal | Gerente regional | Consulta | Cajero | Barista |
|---------|:-----:|:----------------:|:----------------:|:--------:|:------:|:-------:|
| `*` | ✓ | | | | | |
| `config.users` | ✓ | | | | | |
| `config.roles` | ✓ | | | | | |
| `config.system` | ✓ | | | | | |
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

> El administrador usa `*`, que incluye implícitamente todas las filas.

---

## Slugs de rol

| Slug | Nombre visible |
|------|----------------|
| `admin` | Administrador |
| `supervisor` | Gerente de sucursal |
| `gerente-regional` | Gerente regional |
| `consulta` | Consulta |
| `cajero` | Cajero (POS) |
| `barista` | Barista (comandas) |

---

## Matriz menú → permiso

| Menú | Permiso(s) |
|------|------------|
| Inicio | *(autenticado)* |
| Punto de venta | `pos` |
| Comandas (Kanban) | `kitchen.orders` |
| WhatsApp | `whatsapp.chat` |
| Tickets / recibos | `pos` |
| Movimientos | `inventory` |
| Categorías … descuentos | `catalog` |
| Reportes (inventario … turnos POS) | `reports` |
| Usuarios y roles | `config.users` o `config.roles` |
| Sistema / integración | `config.system` |
| Bitácoras | `audit.logins` o `audit.catalog` |
| Soporte (menú usuario) | `platform.support` |
| Mi perfil | *(autenticado)* |

[← Claves de sección](claves-de-seccion.md) · [Roles y permisos](../02-roles-y-permisos.md)
