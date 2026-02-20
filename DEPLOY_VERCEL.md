# 🚀 Guía para Publicar en Vercel

## Opción 1: Usando la CLI de Vercel (Recomendado)

### Paso 1: Instalar Vercel CLI
```bash
npm install -g vercel
```

### Paso 2: Iniciar sesión en Vercel
```bash
vercel login
```

### Paso 3: Desplegar el proyecto
Desde la carpeta del proyecto, ejecuta:
```bash
vercel
```

Sigue las instrucciones en pantalla:
- ¿Quieres sobrescribir la configuración? → **No** (si es la primera vez)
- ¿Qué directorio contiene tu código? → **.** (directorio actual)
- ¿Quieres ajustar la configuración? → **No** (Vercel detectará Vite automáticamente)

### Paso 4: Desplegar a producción
```bash
vercel --prod
```

---

## Opción 2: Usando GitHub + Vercel Dashboard (Más fácil)

### Paso 1: Crear repositorio en GitHub

1. Ve a [GitHub](https://github.com) y crea un nuevo repositorio
2. Nombre sugerido: `el-chorrito` o `chorrito-app`
3. **NO** inicialices con README, .gitignore o licencia (ya los tenemos)

### Paso 2: Subir código a GitHub

Si tienes Git instalado, ejecuta estos comandos:

```bash
# Inicializar repositorio (si no está inicializado)
git init

# Agregar todos los archivos
git add .

# Hacer commit inicial
git commit -m "Initial commit: El Chorrito app"

# Agregar el repositorio remoto (reemplaza TU_USUARIO y TU_REPO)
git remote add origin https://github.com/TU_USUARIO/TU_REPO.git

# Subir a GitHub
git branch -M main
git push -u origin main
```

### Paso 3: Conectar con Vercel

1. Ve a [vercel.com](https://vercel.com)
2. Inicia sesión con tu cuenta de GitHub
3. Click en **"Add New Project"** o **"Import Project"**
4. Selecciona el repositorio que acabas de crear
5. Vercel detectará automáticamente que es un proyecto Vite
6. Configuración recomendada:
   - **Framework Preset**: Vite (debería detectarse automáticamente)
   - **Build Command**: `npm run build` (ya configurado)
   - **Output Directory**: `dist` (ya configurado)
   - **Install Command**: `npm install` (ya configurado)
7. Click en **"Deploy"**

### Paso 4: ¡Listo!

Vercel te dará una URL como: `https://el-chorrito.vercel.app`

Cada vez que hagas `git push` a GitHub, Vercel desplegará automáticamente los cambios.

---

## Opción 3: Arrastrar y Soltar (Más rápido, pero sin Git)

1. Ve a [vercel.com](https://vercel.com)
2. Inicia sesión
3. Click en **"Add New Project"**
4. Selecciona la pestaña **"Import"**
5. Arrastra la carpeta completa del proyecto
6. Vercel detectará Vite y desplegará automáticamente

**Nota**: Con este método no tendrás actualizaciones automáticas, tendrás que volver a arrastrar cada vez que hagas cambios.

---

## ✅ Verificación Post-Despliegue

Después de desplegar, verifica que:

1. ✅ La aplicación carga correctamente
2. ✅ Las animaciones funcionan
3. ✅ Los botones de WhatsApp funcionan
4. ✅ El sonido de cascada funciona (requiere interacción del usuario)
5. ✅ El diseño se ve bien en móvil

---

## 🔧 Configuración Personalizada

El archivo `vercel.json` ya está configurado con:
- Build command: `npm run build`
- Output directory: `dist`
- Framework: `vite`
- Rewrites para SPA (Single Page Application)

No necesitas cambiar nada, pero si quieres personalizar el dominio o añadir variables de entorno, puedes hacerlo desde el dashboard de Vercel.

---

## 📝 Notas Importantes

- **Variables de entorno**: Si necesitas agregar variables de entorno (como API keys), hazlo desde el dashboard de Vercel en Settings → Environment Variables
- **Dominio personalizado**: Puedes agregar tu propio dominio desde Settings → Domains
- **Builds automáticos**: Si usas GitHub, cada push a `main` desplegará automáticamente
- **Preview deployments**: Cada Pull Request creará un preview deployment automáticamente

---

## 🆘 Solución de Problemas

### Error: "Build failed"
- Verifica que `npm run build` funciona localmente
- Revisa los logs en Vercel Dashboard → Deployments → [tu deployment] → Build Logs

### Error: "404 Not Found" al navegar
- Verifica que `vercel.json` tiene la configuración de `rewrites` (ya está incluida)

### Error: "Module not found"
- Asegúrate de que todas las dependencias están en `package.json`
- Ejecuta `npm install` localmente para verificar

---

¡Listo para desplegar! 🎉
