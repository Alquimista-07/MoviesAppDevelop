# MoviesApp

### NOTA:

Para poner en marcha la aplicación es necesario seguir las siguientes instrucciones:

1. Abrir la Terminal de Linux/Mac o en la CMD de Windows y dirigirse al directorio **`movies-app-backend`**

2. Posterirmente vamos a ejecutar uno de los dos siguientes comandos, y se va a encargar de instalar la dependencia necesaria para levantar un **`json-server`**:

```
npm install -g json-server
```
```
npm install json-server
```

3. A continuación es necesario ejecutar el siguiente comando para iniciar el **`json-server`** con el fin de crear una API a partir de un archivo JSON.

```
npm start
```
#### NOTA:
Es importante no cerrar la terminal donde se encuentra ejecutando el **`json-server`**

4. Posteriormente en una nueva Terminal de Linux/Mac o CMD de Windows nos dirigimos al directorio **`movies-app-frontend`**

5. A continuación, ejecutamos el siguiente comando, el cual nos va a instalar las dependencias necesarias para el funcionamiento de la aplicación:

```
npm install
```

6. Luego de que haya terminado la instalación de las dependencias, ejecutamos el siguiente comando:

```
ng serve -o
```
#### NOTA:
Esto nos va a compilar e iniciar el servidor de forma automática y nos va a abrir el navegador web con la aplicación en funcionando.