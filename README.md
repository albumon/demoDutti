# Antes de empezar:
- Para reportar tu trabajo debes crear un repositorio GIT público.

- Crea tantos commits como consideres necesario. Parte de nuestra evaluación se basa en como afrontas los problemas y la única forma que tenemos de verlo es mediante commits. Esta parte puede ser más decisiva que la calidad de la entrega.
- En el comentario del commit especifica los cambios que has realizado, así como explicaciones o aportaciones que consideres importante comentar. Valoraremos especialmente que los commits estén bien documentados
- En caso de que surjan dudas intenta buscar alternativas y justifícalas en el mensaje de commit.

# Tasks.

1.  RE-Estructura el proyecto como mejor consideres. 
    1.  Como mínimo se debe crear un modulo a parte para la autenticación y registro.
    2.  Implementa Interficies  o clases  para los tipos de datos que consideres.
2. Implementa un sistema de login/registro que persista los datos correctamente.
   1. Puedes utilizar:
      1. LocalStorage, 
      2. Alguna api externa
      3. Implementar servicio propio con Nodejs.
3. Implementa el patron de diseño redux para la gestion del listado de naves.
   1. No es necesario implementar redux para todo el aplicativo, solo para la gestión de naves.
4.  Implementa la carga de multiples "páginas" en el apartado de ships.
    1.   Actualmente solo carga una página de la api.
    2.   Revisar la API para saber como consumir el resto de páginas. https://swapi.dev/
5.  Implementa test unitarios para el modulo de login/registro.
6.  Añade imágenes a las CARDS de naves: Puedes usar esta api  'https://starwars-visualguide.com/assets/img/starships/' + ID_DE NAVE -->  https://starwars-visualguide.com/assets/img/starships/5.jpg
7.  Suponiendo que esta página tiene un numero elevado de usuarios simultáneos, implementa las mejoras que consideres oportunas para evitar la saturación del servidor.
    1.  Si alguna de las medidas no es de código, comentalas a continuación en este Readme.


# Getting Started 

`npm i`  for install
Run `npm run start` for a dev server. 
Navigate to `http://localhost:4200/`.


# Notas del desarrollador:

URL del repositorio: https://github.com/albumon/demoDutti

Notas aclaratorias sobre las modificaciones que se han hecho en el proyecto según cada punto
1. Modificación de la estructura
    Se ha modificado la estructura del proyecto, organizando todos los ficheros de la siguiente forma:
        - Carpetas HTML: contienen los templates HTML de los componentes.
        - Carpetas SCSS: contienen los ficheros SCSS de estilos de los componentes.
        - Carpetas TS: contienen todos los ficheros TypeScript de los componentes. En este caso no se incluyen los ficheros de los módulos y los routers, estos se dejan en la carpeta raíz del componente principal al que pertenezcan.

    Se ha organizado el proyecto de forma que los componentes se quedan estructurados de la siguiente manera:
        - principal: contiene el componente principal que es el que muestra el menú y el que se encargará de cargar las páginas Ships, Page One y Page Two.
        - user-management: contiene todo lo relacionado con el proceso de login y registro de los usuarios.
    
    En lo que a servicios se refiere, se han encapsulado los servicios dependiendo de para lo que se vayan a utilizar, por ejemplo:
        - ships: servicios para la obtención de la información de las naves
        - storage: servicios para todo lo relacionado con la manipulación de datos del LocalStorage

        De esta forma tenemos todos los servicios organizados y centralizados
    
    También se ha creado la carpeta shared, la cual contiene objetos y clases que serán utilizadas por todo el proyecto, como por ejemplo:
        - Models: contiene los modelos que se utilizarán en el proyecto:
            - deserializable.model.ts: interfaz para poder deserializar objetos JSON en los modelos que se hayan creado
            - ship.model.ts: objeto para modelar las naves, implementa la interfaz deserializable para poder convertir un objeto JSON en un objeto Ship que nos permita consultar y manipular su información de forma que no sea necesario tener que ir instanciándolos uno a uno cuando se obtengan de la API
            - user.model.ts: modelo para la gestión de los usuarios. Con este modelo será más fácil tener mapeados los usuarios, también implementa la interfaz deserializable por si quisiéramos utilizarla al obtener usuarios de una API o un servidor.
        - Util: contiene clases que pueden ser de utilidad en el proyecto. En este caso sólo se ha creado la clase general-util.ts que se describirá a continuación, pero esto sería útil para tener por ejemplo clases que nos permitan encapsular métodos para manejo de fechas, JSON, etc...de esta forma tendríamos todo centralizado.
            - general-util.ts: se ha creado esta clase para poder tener métodos que se suelen utilizar en el proyecto y así tenerlo centralizado, de esta forma ahorramos duplicar código por todo el proyecto.
            En este caso por ejemplo contiene 3 funciones:
                - isWorkableObject: función que recibe un objeto de cualquier tipo y nos devuelve un flag indicando si es un objeto con el que se puede trabajar o no, es decir, si es un objeto distinto de nulo o undefined.
                - hasValue: es una función que podemos utilizar para comprobar si un string tiene valor o no, al igual que la anterior nos retorna un flag indicando si lo tiene o no.
                - hasValueArray: tiene la misma función que la anterior, pero en este caso con Arrays, nos permite comprobar si un array tiene registros o no.

2. Implementación de la funcionalidad de Login y Registro
    Se ha implementado el Login y Registro de usuarios utilizando el LocalStorage.
    Se ha añadido un campo más al registro, la contraseña, de esta forma podemos utilizarla
    para comprobar si el usuario está haciendo un login correcto.

    En el formulario de registro también se ha añadido una comprobación más que es para evitar que se puedan registrar 2 usuarios con el mismo username, mostrando un error si se intenta hacer.

4. Implementación de la carga de múltiples páginas de naves
    Para la implementación de la carga de múltiples páginas lo que se ha hecho es, esperar a que el usuario se encuentre en la última página de las que se están mostrando y en ese momento, lanzar la carga de la siguiente, de esta forma si en la primera carga obtenemos 2 páginas y el usuario sólo consulta la información de la primera, no es necesario cargar a partir de la segunda página ya que no va a seguir consultando datos, así ahorramos llamadas al servidor y por lo tanto, recursos.

    Para la carga de la primera página se estaba utilizando la url -> https://swapi.dev/api/starships/
    Al utilizar esta url no había ningún problema, sin embargo, cuando se intentaba consultar la siguiente url de la API para obtener el resto de naves, arrojaba un error del CORS.
    Se ha intentado solucionar modificando los headers de la llamada, pero no daba resultado, por lo que se ha decidido añadir una configuración proxy a la aplicación para poder evitar
    este error y así obtener los datos de la API correctamente.

    Al parecer esta API no está siendo ya mantenida, en su lugar existe -> https://www.swapi.tech/api/starships/' la cual funciona correctamente para todas las páginas.

    La configuración del proxy se ha añadido en el fichero angular.json -> "proxyConfig": "src/proxy.conf.json"
