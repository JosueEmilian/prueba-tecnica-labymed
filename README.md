# DOCUMENTACION
# Tecnologias
* Node.js / Express.js
* Typescript / TypeOrm

* Para la creacion de tablas y manejo de operaciones se utilizo TYPEORM
* Creacion de tablas y relacioens a partir de la carpeta de Modelos

# a) INSTRUCCIONES PARA INSTALACION DEL PROYECTO

1. DESCARGAR EL PROYECTO
2. INSTALAR DEPENDENCIAS Y LIBRERIAS CON EL COMANDO $ NPM INSTALL
3. EJECUTAR EL SERVIDOR CON EL COMANDO $ NPM RUN DEV


# b) DESCRIPCION DE LOS ENDPOINTS DE LA API

# ENDPOINTS PARA CURSOS
- Utilizado para obtener todos los registros de cursos en la tabla correspondiente
Metodo GET: http://localhost:3000/cursos

- Utilizado para obtener un registro individual  de cursos en la tabla correspondiente
Metodo GET: http://localhost:3000/cursos

- Utilizado para agregar cursos en la tabla correspondiente
Metodo POST: http://localhost:3000/cursos

- Utilizado para actualizar registros de cursos a la bd
Metodo PUT: http://localhost:3000/cursos/1

- Utilizado para eliminar registros de cursos a la bd
Metodo DELTE: http://localhost:3000/cursos/1

# ENDPOINTS PARA ESTUDIANTES
- Utilizado para obtener todos los registros de estudiantes en la tabla correspondiente
Metodo GET: http://localhost:3000/estudiantes

- Utilizado para obtener un registro individual  de estudiantes en la tabla correspondiente
Metodo GET: http://localhost:3000/estudiantes

- Utilizado para agregar estudiantes en la tabla correspondiente
Metodo POST: http://localhost:3000/estudiantes

- Utilizado para actualizar registros de estudiantes a la bd
Metodo PUT: http://localhost:3000/estudiantes/1

- Utilizado para eliminar registros de estudiantes a la bd
Metodo DELTE: http://localhost:3000/estudiantes/1


# ENDPOINTS PARA TABLA DE INTERMEDIA QUE RELACIONA ESTUDIANTES CON CURSOS
- Utilizado para obtener todos los registros de estudiantes en la tabla correspondiente
Metodo GET: http://localhost:3000/curso-estudiante

- Utilizado para obtener un registro individual  de estudiantes en la tabla correspondiente
Metodo GET: http://localhost:3000/curso-estudiante

- Utilizado para agregar estudiantes en la tabla correspondiente
Metodo POST: http://localhost:3000/curso-estudiante

- Utilizado para actualizar registros de estudiantes a la bd
Metodo PUT: http://localhost:3000/curso-estudiante/1

- Utilizado para eliminar registros de estudiantes a la bd
Metodo DELTE: http://localhost:3000/curso-estudiante/1

