import { css, html, LitElement } from 'lit-element';

import './volume-item.js';

export class Volumes extends LitElement {
  static get properties() {
    return {
      viewableFiles: { type: Object },
    };
  }

  constructor() {
    super();
    this.viewableFiles = {};
    console.log("******** HELLO");
  }

  render() {
    return html`
      <section>
        <p>hello world ViewableFiles</p>
        <viewable-item></viewable-item>
      </section>
    `
  }

  static get styles() {
    return css`
      :host {
        display: block;
        overflow-y: auto;
        box-sizing: border-box;
        color: var(--primaryTextColor);
        margin-bottom: 2rem;
        --activeBorderWidth: 2px;
      }

      section {
        margin-top: 14px;
      }
    `;
  }
}

customElements.define('viewable-files', Volumes);
