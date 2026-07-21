# Como cargar obras nuevas

1. Crea una subcarpeta por proyecto dentro de `obras/`.
2. Copia ahi tus fotos (`.jpg`, `.jpeg`, `.png`, `.webp`) y videos (`.mp4`).
3. Abre `obras/proyectos.js` y agrega un nuevo bloque dentro de `window.mdProjects`.
4. En `media`, carga cada archivo con su ruta relativa.

## Plantilla para copiar

```js
{
  title: 'Nombre del proyecto',
  city: 'Funes',
  type: 'Regularizacion de planos',
  description: 'Breve descripcion del trabajo realizado.',
  media: [
    {
      type: 'image',
      src: 'obras/mi-proyecto/foto-1.jpg',
      alt: 'Descripcion breve de la imagen'
    },
    {
      type: 'video',
      src: 'obras/mi-proyecto/video-1.mp4'
    }
  ]
}
```

## Tip

- Si un proyecto no tiene medios todavia, deja `media: []` y se vera como pendiente.
