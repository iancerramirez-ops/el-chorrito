# Código para subir el proyecto a GitHub

## 1. Crear el repositorio en GitHub (en el navegador)

1. Entra a **https://github.com** e inicia sesión.
2. Clic en el **+** (arriba derecha) → **New repository**.
3. **Repository name:** `el-chorrito` (o el nombre que quieras).
4. Deja **Public**.
5. **No** marques "Add a README file".
6. Clic en **Create repository**.

---

## 2. Comandos en la terminal (PowerShell o CMD)

Abre una terminal en la carpeta del proyecto:

```powershell
cd C:\Users\Usuario\Links
```

Luego ejecuta **uno por uno**:

### Inicializar Git (si aún no está inicializado)
```bash
git init
```

### Agregar todos los archivos
```bash
git add .
```

### Primer commit
```bash
git commit -m "Initial commit: El Chorrito app"
```

### Rama principal (main)
```bash
git branch -M main
```

### Conectar con tu repositorio de GitHub
**Cambia `TU_USUARIO` por tu usuario de GitHub y `el-chorrito` por el nombre del repo si lo cambiaste.**

```bash
git remote add origin https://github.com/TU_USUARIO/el-chorrito.git
```

### Subir el código a GitHub
```bash
git push -u origin main
```

Te pedirá usuario y contraseña de GitHub. Si usas **contraseña**, en GitHub debes crear un **Personal Access Token** (Settings → Developer settings → Personal access tokens) y usarlo en lugar de la contraseña.

---

## 3. Resumen rápido (todo junto)

Sustituye `TU_USUARIO` por tu usuario de GitHub:

```bash
cd C:\Users\Usuario\Links
git init
git add .
git commit -m "Initial commit: El Chorrito app"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/el-chorrito.git
git push -u origin main
```

---

## 4. Después de subir

- Tu código estará en: `https://github.com/TU_USUARIO/el-chorrito`
- Para subir cambios más adelante:
  ```bash
  git add .
  git commit -m "Descripción del cambio"
  git push
  ```

---

## Si Git no está instalado

1. Descarga Git: **https://git-scm.com/download/win**
2. Instala (opción por defecto).
3. Cierra y vuelve a abrir la terminal.
4. Vuelve a ejecutar los comandos de la sección 2 o 3.
