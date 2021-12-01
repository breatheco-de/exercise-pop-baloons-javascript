# Pop Balloons game using Javascript, HTML/CSS 🎈🎊

Este es un buen juego para practicar HTML, CSS y un poco de Javascript. El objetivo de este juego es reventar todos los globos haciendo clic en ellos.

## 🌱  Cómo iniciar este proyecto

Este proyecto viene con los archivos necesarios para empezar a trabajar, pero tienes dos opciones para empezar:

a) Abrir este enlace con Gitpod en tu navegador: https://gitpod.io#https://github.com/breatheco-de/exercise-pop-baloons-javascript.git

b) Clonar este repositorio localmente en tu computador:
```sh
$ git clone https://github.com/breatheco-de/exercise-pop-baloons-javascript.git
```
Ejecuta el sitio web con el siguiente comando en tu terminal: `$ npx http-server --yes -c-1`

💡 Importante: Recuerda actualizar el `remote` del proyecto con el de tu repositorio usando `git remote set-url origin <your new url>`, y luego guardar tu código en tu nuevo repositorio usando `add`, `commit` y `push`.


## 📝 Instrucciones

![Balloon Pop Game with HTML/CSS and Javascript](https://github.com/breatheco-de/exercise-pop-baloons-javascript/blob/master/preview.gif?raw=true)

Crea un juego con el siguiente flujo de trabajo:

1. Cuando el sitio web cargue (`window.onload`) tienes que mostrar (render) todos los globos.
2. Cada globo debe tener un onClick para poder escuchar cuando el usuario hace clic en él
3. Cuando el usuario hace clic en el globo, éste desaparece de la pantalla
4. Cuando los 20 globos hayan desaparecido el sitio web se recarga y el juego comienza otra vez.

## 💪 Estrategia

![Strategy to complete the pop balloons](https://github.com/breatheco-de/exercise-pop-baloons-javascript/blob/master/strategy.png?raw=true)

1. Primero, declara un array o arreglo de 20 colores, cada color representará un globo, los colores se pueden repetir. 
2. Para reventar un globo, tendrás que convertir el valor de esa posición del globo sea igual a `null`.
3. Haz un loop o bucle con todos los colores y crea el string html para cada globo, debes generar un string html como este y añadirlo al DOM:

```
<div class="balloon active"></div>
<div class="balloon popped"></div>
<div class="balloon active"></div>
<div class="balloon active"></div>
```
4. Agrega el string al innterHTML del elemento `<div id =" balloon-map ">` usando document.querySelector.

5. Actualiza tu función que muestra (render) los globos para agregar también un onClick en cada div de globo para escuchar el clic.

6. Cuando haces clic en un globo, anda al array y cambia el valor del color a `null`.


