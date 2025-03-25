import {html} from 'lit-element';

export const ContentTemplate = (Superclass) => {
    return class extends SuperClass {
        get moreContent(){
            return html`
                <h1>Probando mi conten template desde un mixin</h1>
                <p>Contenido extra</p>
            `
        }
    }
}