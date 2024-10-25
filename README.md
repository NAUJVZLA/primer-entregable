# Vacancies Manager App

Esta aplicación es un sistema para administrar vacantes y compañías, donde se pueden agregar, editar y visualizar vacantes, con información específica de cada una. La aplicación está desarrollada en Next.js y TypeScript, utilizando estilos personalizados y componentes atómicos.

## Tecnologías utilizadas

- **Next.js**: Framework de React para el desarrollo de aplicaciones web con enrutamiento y funcionalidades avanzadas.
- **TypeScript**: Lenguaje de tipado estático para mejorar la seguridad y escalabilidad del código.
- **Styled-components**: Librería para aplicar estilos CSS de manera dinámica y modular.
- **React Toastify**: Notificaciones en la interfaz de usuario.
- **Atomic Design**: Arquitectura de diseño para construir componentes reutilizables en la interfaz de usuario.

## Funcionalidades principales

### Vacancies Manager

- **Creación de vacantes**: Permite agregar una vacante con título, descripción, estado y compañía.
- **Gestión de compañías**: Posibilidad de agregar, editar y visualizar compañías asociadas a las vacantes.
- **Formulario dinámico**: Formulario en `VacancyForm` que incluye validaciones de campo.
- **Navegación en la app**: Barra de navegación moderna creada con Next.js y diseño responsivo con Tailwind CSS.
- **Temas y estilo global**: Implementación de variantes de temas usando `styled-components` y configuraciones de temas en el archivo `theme.ts`.

### Otras características

- **Autenticación básica**: Funciones de inicio de sesión y registro implementadas usando sessionStorage y JSON Server en local.
- **CRUD de publicaciones**: Funciones para crear, leer, actualizar y eliminar publicaciones, además de la posibilidad de dar "like" a publicaciones.

## Estructura de Carpetas

- `/pages`: Contiene las páginas principales del proyecto (inicio, vacantes, compañías).
- `/ui/atoms`: Componentes atómicos de interfaz de usuario como `Button` e `Input`.
- `/theme`: Definición de colores y estilos globales.
- `/public`: Contiene los íconos y recursos de la aplicación.

## Instalación y Configuración

1. **Clona el repositorio**:

   ```bash
   git clone https://github.com/tu-usuario/vacancies-manager.git
   cd vacancies-manager
