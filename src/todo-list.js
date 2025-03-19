import { LitElement, html, css } from 'lit-element';
import './todo-item.js'

export class TodoList extends LitElement {

    static get properties() {
        return {
            items: { type: Array },
        };
    }

    constructor(){
        super();
        this.items = [
            {
                name: 'tarea 1',
                completed: false 
            },
            {
                name: 'tarea 2',
                completed: true 
            },
            {
                name: 'tarea 3',
                completed: false 
            },
        ]
    }

    static styles = css`
        :host {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh; /* Asegura que el body ocupe toda la altura de la ventana */
            margin: 0; /* Elimina el margen por defecto del body */
        }
        .container {
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        todo-item {
            width: 100%; /* Asegura que todos los elementos tengan el mismo ancho */
        }

    `;

    render() {
        return html`
            <div class="container">
            ${
                this.items.map( item => html `<todo-item .task="${item}"></todo-item>`)
            }
            </div>
        `;
    }
}
customElements.define('todo-list', TodoList);