# Remi Coffee — Wiki de usuario y administración

Documentación del sistema **Remi Coffee** (cafetería: catálogo BOM, inventario, POS, comandas y pedidos WhatsApp), orientada a administradores y usuarios finales.

## ¿Para quién es esta wiki?

| Audiencia | Empieza por |
|-----------|-------------|
| Administrador de la cafetería | [Configuración inicial](./01-configuracion-inicial) |
| Quien define quién puede hacer qué | [Roles y permisos](./02-roles-y-permisos) |
| Usuario del panel día a día | [Inicio del panel](./03-inicio-panel) y [módulos](./modulos/) |
| Referencia técnica de claves | [Claves de sección](./referencia/claves-de-seccion) · [Matriz de roles](./referencia/matriz-roles) |

## Estructura del sistema

Remi Coffee se compone de:

| Componente | Función |
|------------|---------|
| **Panel web** | Interfaz operativa en el navegador |
| **Laravel Reverb** | Actualización en tiempo real del tablero de comandas |
| **RemiAppManager** (opcional) | Licencias, mensajes, tickets de soporte y correo transaccional |

El acceso al panel se controla por **roles**. Cada rol tiene una lista de **secciones** (permisos granulares). Sin la sección adecuada, el menú no muestra la opción y el sistema no permite realizar la acción.

## Mapa del menú

```
Inicio
├── Operación
│   ├── Punto de venta (POS)
│   ├── Comandas (Kanban)
│   ├── WhatsApp (inbox — Fase 9)
│   ├── Tickets / recibos
│   └── Movimientos de inventario
├── Catálogo
│   ├── Categorías, unidades, marcas
│   ├── Productos, ingredientes, recetas, extras
│   ├── Almacenes, proveedores
│   └── Descuentos y ofertas
├── Reportes
│   ├── Inventario, ventas, compras, mermas
│   └── Ventas por turno POS
└── Configuración
    ├── Usuarios y roles
    ├── Sistema (marca, logo, colores)
    ├── Integración RemiAppManager
    └── Bitácoras y auditoría

Menú de usuario (esquina superior)
├── Mi perfil
└── Soporte RemiAppManager (tickets)
```

## Guías por módulo

| Módulo | Documento |
|--------|-----------|
| Operación (POS, inventario) | [Operación](./modulos/operacion) |
| Punto de venta y COD WhatsApp | [POS](./modulos/pos) |
| Tablero de comandas | [Comandas](./modulos/comandas) |
| WhatsApp | [WhatsApp](./modulos/whatsapp) |
| Catálogo (productos, recetas, BOM) | [Catálogo](./modulos/catalogo) |
| Reportes | [Reportes](./modulos/reportes) |
| Configuración | [Configuración](./modulos/configuracion) |
| Soporte plataforma | [Soporte plataforma](./modulos/soporte-plataforma) |

## Versiones

Esta documentación corresponde a **Remi Coffee v1.0.0** (comandas Kanban, WebSockets y cobro COD en POS).
