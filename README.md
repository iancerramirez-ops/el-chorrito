# El Chorrito - App Web

Aplicación web moderna para El Chorrito, potabilizadora de agua en Guarenas, Estado Miranda.

## 🚀 Características

- **Diseño tipo iPhone**: Interfaz moderna con notch y estilo móvil
- **Sonido de cascada**: Audio ambiente con Web Audio API (activar/desactivar con el botón de volumen)
- **Animaciones fluidas**: Efectos de agua, niebla y transiciones suaves
- **Integración WhatsApp**: Botones para hacer pedidos y compartir
- **Pago Móvil**: Información de contacto y datos bancarios
- **Modal de recomendaciones**: Consejos de hidratación

## 📋 Requisitos Previos

- Node.js 18+ y npm (o yarn/pnpm)

## 🛠️ Instalación

1. **Instalar dependencias:**
   ```bash
   npm install
   ```

2. **Iniciar servidor de desarrollo:**
   ```bash
   npm run dev
   ```

3. **Abrir en el navegador:**
   La aplicación estará disponible en `http://localhost:5173` (o el puerto que Vite asigne)

## 📦 Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run preview` - Previsualiza la build de producción

## 🎨 Tecnologías Utilizadas

- **React 18** - Biblioteca de UI
- **Vite** - Build tool y dev server
- **Tailwind CSS** - Framework de estilos
- **Lucide React** - Iconos modernos
- **Web Audio API** - Generación de sonido de cascada

## 📱 Características Técnicas

- **Responsive Design**: Optimizado para móviles (390px de ancho)
- **Audio Context**: Manejo correcto del audio en navegadores modernos
- **Animaciones CSS**: Keyframes personalizados para efectos de agua y niebla
- **Optimización de Rendimiento**: Uso de `useMemo` para evitar re-renders innecesarios

## 🔧 Configuración

El proyecto está completamente configurado con:
- ✅ Vite + React
- ✅ Tailwind CSS con configuración personalizada
- ✅ PostCSS y Autoprefixer
- ✅ Todas las dependencias instaladas

## 📝 Notas

- El sonido de cascada requiere interacción del usuario (click/touch) para activarse debido a las políticas de los navegadores
- Las partículas de niebla están precalculadas para evitar problemas de renderizado
- El diseño está optimizado para pantallas móviles con un máximo de 390px de ancho

## 📄 Licencia

Proyecto privado - El Chorrito Guarenas
