import { LitElement, html, css } from 'lit-element';
import './lit-checkbox.js';

export class TodoItem extends LitElement {

    static get properties() {
        return {
            task: { type: Object },
        };
    }

    static styles = css`
        p{
            display:flex;
            align-items: center;
            gap: 10px;
            font-size: 20px;
        }
        .completed{
            text-decoration: line-through;
            color: #888;
        }
    `;

    checkedChange(e){
        this.task = {
            ...this.task,
            completed: e.detail 
        }
    }

    render() {
        return html`
            <p class="${this.task.completed ? 'completed' : ''}">
                <lit-checkbox ?checked="${this.task.completed}" 
                              size="20px"
                              @lit-switch-checked="${this.checkedChange}"></lit-checkbox> 
                ${this.task.name}
            </p>
        `;
    }
}
customElements.define('todo-item', TodoItem);