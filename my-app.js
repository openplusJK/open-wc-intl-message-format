import {LitElement, html} from '@polymer/lit-element';

import IntlMessageFormat from 'intl-messageformat/src/main.js'

/**
 * `my-app` DIT IS DE SHIT
 *
 * @customElement
 * @polymer
 * @demo
 * 
 */
class MyApp extends LitElement {
    static get properties() {
        return {

        }
    }

    /**
     * Implement to describe the element's DOM using lit-html.
     * Use the element current props to return a lit-html template result
     * to render into the element.
     */
    _render({}) {
        return html`
            <div>waaaaa</div>
        `;
    }

    /**
     * Instance of the element is created/upgraded. Use: initializing state,
     * set up event listeners, create shadow dom.
     * @constructor
     */
    constructor() {
        super();
    }

}

customElements.define('my-app', MyApp);