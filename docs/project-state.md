# Estado del proyecto — Death Cafe Nómada

## Pendientes en pausa

### SEO — Google Search Console (en pausa, 2026-10-01)
Se hicieron mejoras on-page para rankear en "death cafe mexico": title/meta
description de la home actualizados a "Death Cafe Nómada — México" y se
agregó JSON-LD (Organization) en `src/components/SEO.astro`. Ya desplegado
a producción.

Falta la parte que depende del usuario:
1. Crear propiedad en Google Search Console para `https://deathcafenomada.uno37.com`.
2. Verificar (DNS TXT record o Google Analytics) — si elige DNS, pedir el
   registro al usuario y agregarlo vía MCP de Hostinger.
3. Enviar sitemap: `https://deathcafenomada.uno37.com/sitemap-index.xml`.

**Siguiente paso cuando se retome:** preguntar al usuario si ya tiene cuenta
de Google Search Console y continuar desde el paso 1.

## Paleta v3 (aplicada localmente, sin deploy)
Tokens en `src/styles/global.css`: cream #F7F3EC, paper #EEDFD3, sand #D6C1B4, vino (terracotta) #873F52, olive #456D4D (+olive-dark #2F5238), clay #BC7650 (solo detalles), ink #302B29. Links en verde, botones con borde vino (hover relleno).

## Pendientes
- Google Form/Sheet para newsletter (esperando link del usuario).
- Directorio: faltan Death Cafe Pereira y Cali (Colombia): IG y modalidad.
