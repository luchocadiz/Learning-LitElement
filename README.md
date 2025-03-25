# Learning-LitElement
Repositorio para subir ejemplos del aprendisaje de LitElement

//El shadow dom no es mas que un dom encapsulado en el componente
//Esto permite crear css encapsulado sin tener que pelear con la colisión de
//clases de css
//Ejemplo de un web component es el tag de video de los elementos de html


Un mixin es una forma de poder tener multiple funcionalidades en un componente

Un mixin actua como una factoria de clases y esta se implementa mediante una funcion que devuelve una clase.

Esta función se ejecuta cuando recibe una superclase y la misma devuelve una clase que extiende esa superclase incluyendo los metodos del mixin.

**En definitiva es una función que se invoca enviando una superclase como parametro y esta devuelve una superclase mas los metodos del mixin**