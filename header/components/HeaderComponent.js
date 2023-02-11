import { css, html, LitElement } from 'lit-element';
import { NavigationComponent } from './NavigationComponent';

export class HeaderComponent extends LitElement {
    static get styles() {
        return css`
            header {
                margin: 0;
                padding: 0;
                background: rgb(25, 25, 25);
                margin: 0;
                //height: 50px;
            }
            ul {
                width: 50%;
                margin: 0 auto;
                padding: 8px 0;
                list-style: none;
                display: flex;
                color: #fff;
                font-family: 'Roboto', sans-serif;
                justify-content: space-between;
                transition: all .2s ease-out;
                align-items: center;
                height: 35px;
                font-weight: 550;
            }
            span:hover {
                color: rgb(200, 200, 200);
                cursor: pointer;
                transition: all .2s ease-out;
            }
            span {
                display: inline-block;
            }
            span::after {
                content: '';
                width: 0px;
                height: 2px;
                display: block;
                background: rgb(200, 200, 200);
                transition: 200ms;
            }
            span:hover::after {
                width: 100%;
            }
        `;
    }
    static get properties() {
        return {
            navigation: {
                type: Object
            }
        };
    }

    constructor() {
        super();
        this.navigation = new NavigationComponent().hostConnected();
    }
    render() {
        return html `<header>${this.navigation}</header>`;
    }
}