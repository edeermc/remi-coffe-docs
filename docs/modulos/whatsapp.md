# WhatsApp

Canal de pedidos por mensajería. En la **Fase 9** se conectará el bot real, el inbox de chat y las notificaciones automáticas al cliente.

## Estado actual (demo)

- La pantalla **WhatsApp** en el menú es un **placeholder** para la bandeja de conversaciones.
- Los pedidos demo se crean en el seeder y aparecen en **Comandas** y en la pestaña **Pedidos WhatsApp** del POS.
- El cobro contra-entrega (COD) funciona desde el POS en cualquier estado activo de la comanda.

## Flujo previsto (Fase 9)

1. Cliente escribe al número de la cafetería.
2. Bot toma el pedido y lo registra como comanda `source=whatsapp`.
3. Barista prepara en el tablero Kanban.
4. Al pasar a **Listo**, el sistema avisa al cliente por WhatsApp.
5. En **Por entregar**, el repartidor entrega y el cajero cobra en POS (COD).

## Permisos

| Sección | Uso |
|---------|-----|
| `whatsapp.chat` | Ver y responder conversaciones (inbox) |
| `orders.whatsapp.manage` | Cobrar pedidos COD en POS |

Ver también: [Comandas](./comandas.md) · [Punto de venta](./pos.md).
