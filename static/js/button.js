class Button extends HTMLElement {
    constructor() {
        super();

        let content = this.getAttribute('content')

        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
        <style>
            .myButton {
                box-shadow: 0px 0px 5px 2px #c9127a;
                background-color:transparent;
                border-top-left-radius:10px;
                border-bottom-right-radius:10px;
                border:1px solid #de1111;
                display:inline-block;
                cursor:pointer;
                color:#d4cce3;
                text-decoration:none;
            }
            .myButton:hover {
	            box-shadow: 0px 0px 5px 2px #ff8400;
	            border:1px solid #decd11;
            }
            .myButton:active {
                box-shadow: 0px 0px 5px 2px #ffffff;
                border:1px solid #d0de11;
                position:relative;
                top:1px;
            }
        </style>
         <button class="myButton">${content}</button>
        `

    }
}
customElements.define('hf-button', Button);