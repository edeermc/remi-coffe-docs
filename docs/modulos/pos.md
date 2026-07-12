# Punto de venta (POS)

## Venta en mostrador

1. Inicia **turno de caja**.
2. Agrega productos al carrito (toque en la grilla o escaneo).
3. Si el producto tiene extras, elige en el modal.
4. **Cobrar** — registra la venta, descuenta inventario (BOM) y crea una **comanda** en cocina.

## Pedidos WhatsApp (COD)

Pestaña **Pedidos WhatsApp** en el mismo POS (requiere turno abierto):

- Lista todos los pedidos WhatsApp **activos** con pago pendiente, sin importar la columna del tablero.
- El cliente puede pagar al llegar aunque la comanda aún esté en preparación.
- Selecciona uno y pulsa **Cobrar** — genera ticket POS; la comanda sigue en cocina hasta marcar **Entregado**.

## Permisos

- `pos` — operar caja
- `orders.whatsapp.manage` — cobro COD (incluido en rol Cajero)

Ver también: [Comandas](./comandas.md).
