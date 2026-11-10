# Turnos

App `Turnos` del menú principal de Imperium. Quien la usa abre sus submenús
(Turnos de caja, Consecutivos de turnos, Configurar cajas, Control de banner
de noticias, Servicios de caja, Tipos de usuario, Youtube para turnos,
Prioridades) y ve el listado de cada uno. Queda probado que la lista de Turnos
de caja carga desde la app.

## Sub-features

La app hace la acción de `listar-turnos-caja`. Escribe: no. Esta ficha no
lleva línea `Subject:` con imagen: el catálogo no da un tag para rellenarla.
El hueco está en `despliegue.md`.

- `listar-turnos-caja` deja un resultado observable: la página con título
  `Turnos de caja` y la lista servida por
  `api://m/subject-turnos/ticketing-system-turn` con HTTP 200.

### Archivos y contratos

- `src/subject.ts` — `define_subject` de `subject-turnos`; sin `dependsOn`.
- `src/modules/ticketing-system-turn/ticketing-system-turn.pages.ts` — página
  `turnos.ticketing-system-turn`, path `ticketing-system-turn`, lista
  `api://m/subject-turnos/ticketing-system-turn`.
- `src/modules/ticketing-system-turn/ticketing-system-turn.routes.ts` — CRUD
  `ticketing-system-turn` y menú; permiso
  `subject.turnos.ticketing-system-turn.read`.

### Mapa

| id | ruta | rol semilla | pasos | esperado | muta | receta |
| --- | --- | --- | --- | --- | --- | --- |
| `subject-turnos.listar-turnos-caja` | `ticketing-system-turn` | sin definir; requiere `subject.turnos.ticketing-system-turn.read` | abrir Turnos → Turnos de caja | título `Turnos de caja`; GET de la lista 200 | no | sin definir |

## How to get to it (user POV)

- Menú principal `Turnos` → `Turnos de caja`.

## Driving it with arnes

Preconditions:

- Doctor en 0. Si falta `subject-turnos`, la receta sale `omitida`.
- Usuario con permiso `subject.turnos.ticketing-system-turn.read`.

- **Abrir.** Menú `Turnos de caja`; esperar el GET de la lista antes del clic
  y juzgar el título `Turnos de caja`.
- **Proof.** `evidence/turnos/`.

## Gotchas

- Una receta de lectura que escribe sale en fallo aunque la pantalla se vea bien.
- La base QA no está definida en este repo; sin ella no se muta.
- Lista vacía muestra `Sin registros`: es estado válido, no fallo.
- `omitida` no cuenta como probada.
