# Comandas (Kanban)

Las comandas unifican pedidos de **mostrador** y **WhatsApp** en un tablero de tres columnas.

## Columnas

| Columna | Estado | Significado |
|---------|--------|-------------|
| Pendiente | `pending` | En cola, sin iniciar |
| En preparación | `preparing` | Barista preparando |
| Por entregar | `awaiting_handoff` | Listo para recogida o entrega |

Al marcar **Entregado** (con confirmación) el ticket pasa a `closed` y desaparece del tablero.

## Mostrador vs WhatsApp

- **Mostrador:** se crea al cobrar en POS; ya está pagado. En *Por entregar* pulsa **Entregado**.
- **WhatsApp COD:** el cajero puede cobrar desde el POS en cualquier momento (aunque la comanda siga en preparación). En *Por entregar*, si ya está pagado, el barista pulsa **Entregado**.

## Acciones en cada tarjeta

| Acción | Descripción |
|--------|-------------|
| **Avanzar** | Pasa a la siguiente columna |
| **Retroceder** | Regresa a la columna anterior (corrige errores) |
| **Entregado** | Cierra la comanda (pide confirmación) |
| **Cancelar** | Menú <kbd>⋯</kbd> en la tarjeta (solo *Pendiente* o *En preparación*; pide confirmación) |

## Atajos de teclado

1. **Clic** en una tarjeta para seleccionarla (borde resaltado).
2. Con una tarjeta seleccionada:

| Tecla | Acción |
|-------|--------|
| `←` | Retroceder columna |
| `→` | Avanzar columna (o entregar si está en *Por entregar* y ya pagado) |
| `Enter` | Marcar entregado (desde *Por entregar*, con confirmación) |
| `Esc` | Deseleccionar |

Los atajos no aplican mientras escribes en un campo de texto o selector.

## Uso

1. Abre **Comandas** en el menú lateral.
2. Elige la sucursal/almacén.
3. Arrastra tarjetas entre columnas o usa los botones.
4. Filtra por **Todos / Mostrador / WhatsApp**.

## Tiempo real

El tablero se actualiza por **WebSocket** (Laravel Reverb). Si no hay conexión, se sincroniza cada 10 segundos.

## Permiso

Requiere la sección `kitchen.orders` (rol **Barista** o administrador).
