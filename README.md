# ¡Bienvenido al Webinar de Angular!
___

Lo primero que veremos luego de una pequeña introducción serán las:

## Instalaciones Necesarias

**1.-** La primera instalación necesaria es **NodeJS**
Puedes descargarla e instalarla haciendo click sobre el siguiente [enlace.](https://nodejs.org/es/download/)

Una vez lo hayas instalado, puedes comprobar la versión de tu instalación con los siguientes comandos.

    node -v

Para revisar la versión de nodeJS (debe ser superior a la v.12), pero en este webinar utilizaremos su gestor de paquetes **npm** y para comprobar su versión podemos escribir.

    npm -v

Nos bastará con que sea una versión igual o superior a la v.6

**2.-** La segunda instalación será [Typescript,](https://www.typescriptlang.org/) podemos instalarla ejecutando el siguiente comando en una consola con permisos de **Administrador** de la siguiente manera

![Ejecutar como administrador](./Assets/png/Administrador.png)

    npm install -g typescript


Ahora debemos verificar que tengamos la versión 2.8 en adelante con el siguiente comando

    tsc --version

**3.-** Por último debemos instalar el [Angular Cli](https://cli.angular.io/) ejecutando el siguiente comando con permisos de administrador

    npm install -g @angular/cli

Podrás comprobar su versión con el siguiente comando

    ng --version
___
### Extras

Nó es obligatorio pero se recomienda utilizar el edtitor de texto [VSCode](https://code.visualstudio.com), podrás descargarlo haciendo (click) sobre el siguiente [enlace](https://code.visualstudio.com/download).

##### También se recomienda instalar las siguientes extensiones:

1. Angular 2 TypeScript Emmet
2. Angular Language Service
3. Bracket Pair Colorizer
4. file-icons
5. Polacode
6. Prettier - Code formatter
7. Auto Import

___
## Introducción a Angular
Ahora crearemos nuestro primer proyecto de Angular, para este webinar desarrollaremos una galería de imágenes, por lo que comenzaremos con el siguiente comando.

    ng new galery

Este comando nos generará un nuevo proyecto gracias al CLI de Angular.

El siguiente comado nos permitirá encender el servidor y compilar el proyecto en modo desarrollo

    ng serve -o
___

### Genrando el proyecto con Angular CLI

    ng g c components/header
    ng g c components/home
    ng g c components/publications
    ng g c components/publicacionForm
    ng g c components/confirmModal

Genera componentes nuevos en el directorio "components".

    ng g s services/publication

Genera un servicio nuevo en el directorio "services"
___

### Importando Bootstrap desde su CDN

Podemos importar la popular librería [Bootstrap](https://getbootstrap.com/) 4.5 copiando la CDN en el index del proyecto de la siguiente manera

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>PruebaGalery</title>
  <base href="/">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" type="image/x-icon" href="favicon.ico">
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
</head>
<body>
  <app-root></app-root>
  <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV" crossorigin="anonymous"></script>
</body>
</html>
```