import { LitElement, html, css } from 'lit-element';

/*
Se conoce como etiqueta host a la etiqueta de mi componente, dentro de esta etiqueta 
puede haber cualquier cantidad de contenido html pero este contenido no se renderizara ya que
esta oculto por el shadowDom. Esto es lo que se conoce como el LightDom

El LightDom me sirve para poder voltear el contenido que este dentro de una etiqueta host
al template de mi componente usando una etiqueta llamada slot

Cunado se tiene varios slots en un componente es necesario asignarle un nombre
*/


export class MenuOverlay extends LitElement {

    static get properties() {
        return {
            closed: { type: Boolean },
        };
    }

    constructor(){
        super();
        this.closed = true;
    }

    static get styles() {
        return css`
        :host {
          position: relative;
        }
        .trigger {
          cursor: pointer;
        }
        section {
          border: 1px solid #ddd;
          box-shadow: 3px 3px 8px #eee;
          padding: 15px;
          width: 300px;
          position: absolute;
          background-color: #f5f5f5;
        }
        .closed {
          display: none;
        }
        `;
      }

    render() {
        return html`
            <!-- La etiqueta que tenga como atrubuto slot con su name se renderiza en esta parte -->
            <div class="trigger" @click="${this.toggle}">
                <slot name="trigger"></slot>
            </div>
            <section class="${this.closed ? 'closed' : ''}">
                <!-- Cualquier contenido que no tenga nombre y este
                 en la etiqueta host se renderizada en esta sección  -->
                <slot></slot>
            </section>
        `;
    }

    toggle(){
        this.closed = !this.closed;
    }
}
customElements.define('menu-overlay', MenuOverlay);
