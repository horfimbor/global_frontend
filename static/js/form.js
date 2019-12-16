class Form extends HTMLElement {
    constructor() {
        super();

        let legend = this.getAttribute('text')

        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
        <style>
            legend {
                background-color: #000;
                color: #fff;
                padding: 3px 6px;
            }

            ::slotted(input:invalid) {
              border: 2px solid red;
              background-color: #f16f82;
            }

            ::slotted(input:valid) {
              border: 1px solid black;
              background-color: #6facf1;
            }
        </style>
        <fieldset>
            <legend>${legend}</legend>
            <slot></slot>
        </fieldset>
        `

    }
}
customElements.define('hf-form', Form);