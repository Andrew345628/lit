import { html, css, LitElement } from 'lit-element';

export class CounterComponent extends LitElement {
    static get styles() {
        return css`
            :host {
                display: block;
                padding: 25px;
                font-family: Arial;
                color: var(--counter-element, #000);
            }
        `;
    }
    static get properties() {
        return {
            title: {
                type: String
            },
            counter: {
                type: Number
            },
        };
    }
    
    constructor() {
        super();
        this.title = 'titloe';
        this.counter = 1;
    }

    increment() {
        this.counter +=1;
    }

    subtraction() {
        this.counter -=1;
    }
    render() {
        return html`
        <h2>${this.title}. Считаем ${this.counter}!</h2>
        <button @click=${this.increment}>Плюс</button>
        <button @click=${this.subtraction}>Минус</button>
        `;
    }
}