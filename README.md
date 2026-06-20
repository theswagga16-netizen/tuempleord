# Tu Temple Ord - Portal de Ofertas de Empleo

Portal web para publicar y buscar ofertas de empleo en República Dominicana, monetizado con Google AdSense.

## 📋 Características

- **Publicar Vacantes:** Los usuarios pueden publicar nuevas ofertas de empleo de forma rápida
- **Listar Ofertas:** Visualizar todas las ofertas de empleo disponibles
- **Anuncios de Google AdSense:** 6 espacios estratégicamente colocados para maximizar ingresos
- **Diseño Responsivo:** Compatible con dispositivos móviles, tablets y escritorio
- **Meta Tags SEO:** Optimizado para motores de búsqueda
- **Política de Privacidad:** Página requerida por Google AdSense
- **Términos de Servicio:** Página de términos y condiciones

## 📁 Estructura del Proyecto

```
tuempleord/
├── index.html          # Página principal con formulario y listado de ofertas
├── privacy-policy.html # Política de privacidad
├── terms.html          # Términos de servicio
├── styles.css          # Estilos CSS
└── README.md          # Este archivo
```

## 🎨 Diseño

- **Color Principal:** Rojo (#c0392b)
- **Tipografía:** Poppins (Google Fonts)
- **Diseño Responsivo:** Mobile-first approach
- **Animaciones:** Transiciones suaves y efectos fade-in

## 💰 Monetización con Google AdSense

### Espacios de Anuncios Disponibles

1. **Banner Superior** - Después del header
2. **Antes del Formulario** - Rectangle ad
3. **Entre Ofertas (1)** - Auto-responsive
4. **Entre Ofertas (2)** - Auto-responsive
5. **Entre Ofertas (3)** - Auto-responsive
6. **Footer** - Antes del footer

### Cómo Configurar Google AdSense

1. Crea una cuenta en [Google AdSense](https://www.google.com/adsense/)
2. Verifica la propiedad del dominio
3. Reemplaza los `SLOT_ID_X` con tus IDs de unidades de anuncios reales
4. Asegúrate de que tu sitio tenga:
   - Dominio propio (no GitHub Pages gratuito)
   - Política de privacidad ✅ (incluida)
   - Términos de servicio ✅ (incluida)
   - Contenido original y de calidad
   - Tráfico consistente

## 🚀 Cómo Usar

### Localmente

1. Clona el repositorio:
```bash
git clone https://github.com/theswagga16-netizen/tuempleord.git
```

2. Abre `index.html` en tu navegador

### En Producción

1. Sube los archivos a tu servidor web
2. Asegúrate de que `styles.css` esté en el mismo directorio
3. Actualiza los `SLOT_ID_X` en `index.html` con tus IDs reales de Google AdSense

## 📱 Responsividad

El sitio está optimizado para:
- **Móviles:** 320px - 480px
- **Tablets:** 480px - 768px
- **Escritorio:** 768px y superior

## 🔍 SEO

Incluye:
- Meta descripción
- Meta keywords
- Open Graph tags
- Meta robots (index, follow)
- Estructura HTML semántica

## 📝 Notas de Monetización

- **Tiempo de Aprobación:** Google AdSense puede tardar 1-2 semanas en revisar tu solicitud
- **Requisitos Mínimos:**
  - Mínimo 100 visitantes/mes
  - Contenido original
  - Sin violaciones de políticas de Google
- **Mejores Prácticas:**
  - No hacer clic en tus propios anuncios
  - No colocar demasiados anuncios (máximo 3 por página en AdSense)
  - Monitorear rendimiento en AdSense Dashboard

## 🛠️ Personalización

### Cambiar Colores

Edita `styles.css`:
```css
/* Color principal: Rojo */
header {
  background: #c0392b;
}

/* Cambiar a tu color preferido */
header {
  background: #tu-color;
}
```

### Agregar Más Ofertas

Añade nuevos artículos con la estructura:
```html
<article class="oferta-empleo">
  <h3>Título del Puesto</h3>
  <h4>Empresa</h4>
  <p><strong>Ubicación:</strong> Ciudad</p>
  <p><strong>Descripción:</strong> Detalles del puesto</p>
  <p><strong>Requisitos:</strong> Requisitos</p>
  <p><strong>Beneficios:</strong> Beneficios</p>
  <a href="#" class="btn-link" target="_blank">Aplicar Ahora</a>
</article>
```

## 📞 Soporte

Si encuentras problemas o tienes sugerencias, abre un issue en el repositorio.

## 📄 Licencia

Este proyecto está bajo la licencia MIT.

## 👨‍💻 Autor

**theswagga16-netizen** - Desarrollador web

---

**Última actualización:** Junio 2024