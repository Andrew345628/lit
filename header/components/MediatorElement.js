import {LitElement, html, css} from 'lit-element';

export class MediatorElement extends LitElement {
  static styles = css`
    .image {
      width: 25px;
    }
    .hided{
      display: none
    }
    .visible{
      display: block
    }
  `;

  constructor() {
    super();
    this.image = './image/info.png';
    this.text = 'No text';
  }
  text_hide() {
    //var element = document.getElementById('info');
    ////element.classList.add("visible");
    //console.log(element);
   
  }

  render() {
    return html`<image src="${this.image}" class="image" @click=${this.text_hide}(block)></image>
    <div class="hided" id="info">${this.text}</div>
    `;
  }
}
