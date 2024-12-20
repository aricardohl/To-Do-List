# **Prueba Técnica Fullstack Junior**

## **Objetivo**  
El objetivo de esta prueba es evaluar tus conocimientos básicos en desarrollo frontend, backend y bases de datos, así como tu capacidad para resolver problemas, organizar código y seguir buenas prácticas.

---

## **Descripción del Proyecto**  
Desarrolla una aplicación web simple de **gestión de tareas (To-Do List)**. El usuario debe poder realizar las siguientes acciones:  

1. **Crear una tarea.**  
2. **Ver la lista de tareas creadas.**  
3. **Editar una tarea existente.**  
4. **Eliminar una tarea.**  

La aplicación debe estar estructurada de la siguiente manera:  
- **Frontend:** Interfaz de usuario responsiva y amigable.  
- **Backend:** API RESTful para la gestión de tareas.  
- **Base de Datos:** Guarda las tareas con campos básicos.

---

## **Requisitos Técnicos**

### **1. Frontend**  
- Usa **HTML, CSS y JavaScript** (o frameworks como **React, Vue** o **Angular** si te sientes cómodo).  
- La interfaz debe mostrar la lista de tareas y permitir crear, editar y eliminar tareas.  
- Debe comunicarse con la API utilizando **fetch** o cualquier librería HTTP como **Axios**.  
- Implementa un diseño responsivo (que se vea bien en dispositivos móviles y de escritorio).  

### **2. Backend**  
- Usa **Node.js** con **Express**.  
- Crea una API RESTful con los siguientes endpoints:  

| Método | Endpoint       | Descripción                |
|--------|----------------|----------------------------|
| GET    | `/tasks`       | Obtener todas las tareas   |
| POST   | `/tasks`       | Crear una nueva tarea      |
| PUT    | `/tasks/:id`   | Actualizar una tarea       |
| DELETE | `/tasks/:id`   | Eliminar una tarea         |

- Valida que los datos no estén vacíos antes de guardarlos o actualizarlos.  
- Maneja posibles errores con respuestas claras en el API.  

### **3. Base de Datos**  
- Usa **SQLite** (o **MongoDB** si prefieres una base NoSQL).  
- La tabla/colección de tareas debe tener los siguientes campos:  
   - `id`: identificador único (autogenerado).  
   - `title`: título de la tarea (string, obligatorio).  
   - `description`: descripción de la tarea (string, opcional).  
   - `completed`: estado de la tarea (booleano, por defecto `false`).  

---

## **Entrega**  
1. **Código fuente:** Entrega todo tu código en un repositorio de GitHub. Incluye instrucciones claras en un archivo `README.md` sobre cómo ejecutar el proyecto.  
2. **Demostración:** Opcionalmente, despliega la aplicación en una plataforma como **Vercel**, **Heroku** o **Render** y proporciona el enlace.  

---

## **Criterios de Evaluación**  
1. **Funcionalidad:** La aplicación cumple con los requisitos solicitados.  
2. **Código limpio:** Organización, buenas prácticas y comentarios donde sea necesario.  
3. **Uso adecuado de tecnologías:** Backend, frontend y base de datos bien conectados.  
4. **Diseño responsivo y amigable:** Interfaz clara y sencilla.  
5. **Control de errores:** La aplicación maneja errores de usuario y del servidor.  

