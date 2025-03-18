import { LitElement, html } from 'lit-element';
import './feedback-element'

export class CounterClick extends LitElement {
    
    static get properties(){
        return {
            counter: { type: Number }
        }
    }

    //Se inicializan todas las properties
    constructor(){
        super();
        this.counter = 0;
    }

    get feedback(){
        return this.shadowRoot.getElementById('feedback');
    }
    
    incrementar(){
        this.counter++;
        if(this.counter == 3)
            this.feedback.openFeedback(`Has llegado a ${this.counter}`);
    }

    decrementar(){
        this.counter--;
        if(this.counter == 0)
            this.feedback.openFeedback(`Has llegado a ${this.counter}`);
    }

    //Cualquier cosa que necesite que se renderize en el template
    //la tengo que definir como property en el componente
    //Dentro de los template tambien se puede embeber eventos
    render() {
        return html`
            <style>
                div{
                    border: 1px solid;
                    background-color: #eee;
                }
            </style>
            <div>
                <p>Click: ${this.counter}</p>
            </div>
            <button @click="${this.incrementar}">+1</button>
            <button @click="${this.decrementar}">+1</button>
            
            <feedback-element id="feedback"></feedback-element>
        `;
    }
}
customElements.define('counter-click', CounterClick);