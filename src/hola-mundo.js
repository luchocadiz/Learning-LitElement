import { LitElement, html } from 'lit-element';
import { sharedStyless } from './styles-css';

//LitElement es una clase base que extiende funcionalidad para poder crear webcomponent 
//de manera mucho mas eficiente y con mas beneficios
export class HolaMundo extends LitElement {


    //Este metodo permite definir cuales son las propiedades o datos que va 
    //a menejar el componente. 
    //Estas props se bindean como atributos en el customElement creado de forma que podemos
    //pasar datos de forma externa.
    //Estas propiedades si estan embebidas en el template del componente, 
    //cada vez que se actualizen, tambien renderizan esa sección del template.
    static get properties(){
        return {
            name: {type: String}
        };
    }

    static get Styles(){
        return [sharedStyless,
            css `
            
            ` 
        ];
    }

    //Permite definir el template. Es decir la parte visual del componente
    render() {

        //El template tag literal (html) es un elemento de lit-html que usa un template string 
        // de js para renderizar la estructura de mi componente.
        return html`
            <p>Hola ${this.name}</p>
        `;
    }
}
//Esto viene del standar de los webComponent que me permite definir el nombre de la etiqueta 
//personalizada o custom element
customElements.define('hola-mundo', HolaMundo);