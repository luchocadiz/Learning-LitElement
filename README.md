# Learning-LitElement
Repositorio para subir ejemplos del aprendisaje de LitElement

#NOTAS

##Ciclo de updates

Cuando se modifica una propiedad el template no se modifica inmediatamente ya que este es asincrono. 
Inclusive antes de que se modifique el template ocurre algo en donde se verifica si la propiedad modificada implica un update en el template.

LitElemente me brinda la posibilidad de verificar si ese cambio puede o no provocar un update o no
con el metodo updateComplete(). Este metodo devuelve una promesa que se resolvera cuando se acabe de
realizar la actualización del template

Otro metodo llamado requestUpdate() permite manipular el ciclo de vida ya que solicita manualmente un
update en el template.


Si modifico un objeto o un array completo los mecanismo de bindig se desencadenan y actualizan el 
template automaticamente.
Las modificaciones en la casilla de un array y modficaciones en la subpropiedades de un objeto no
desencadenan los mecanismos de binding en LitElement por lo que no se renderizara. 
Para lograr un repintado cuando ocurre esto se tiene que usar un requestUpdate() para solicitar manualmente la actualización del template.

FirstUpdate() se ejecuta **despues de la primera renderización del componente**. En este momento el template ya esta renderizado, por lo tanto el dom del componente(shadomDom) ya exite y podemos hacer cosas con el 

El hasChanged es una funcion configurable en las propiedades declarativas y este se ejecuta una vez que cambia una propiedad y sirve para informar a LitElement sobre la conveniencia o no de hacer un update. Si este es true entonces hace un update y si es false no 

El metodo update() del ciclo de vida se ejecuta una vez que el template se ha actualizado y este puede recibir un listado de las propiedades que han cambiado en el ultimo update.