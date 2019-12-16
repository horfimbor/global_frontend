class Button extends HTMLElement {
    constructor() {
        super();

        let content = this.getAttribute('content')
        let purpose = this.getAttribute('purpose')

        let halo = "#06c62c"
        let border = "green"

        if (purpose == "good"){
            halo = "#4b51fa"
            border = "blue"
        }else if (purpose == "bad") {
            halo = "#cd0000"
            border = "red"
        }

        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
        <style>
            button {
                box-shadow: 0px 0px 5px 2px ${halo};
                background-color:transparent;
                border-top-left-radius:10px;
                border-bottom-right-radius:10px;
                border:1px solid ${border};
                display:inline-block;
                cursor:pointer;
                color:#d4cce3;
                text-decoration:none;
            }
            button:hover {
	            box-shadow: 0px 0px 5px 2px #ff8400;
	            border:1px solid #decd11;
            }
            button:active {
                box-shadow: 0px 0px 5px 2px #ffffff;
                border:1px solid #d0de11;
                position:relative;
                top:1px;
            }
        </style>
        <button>${content}</button>
        `

    }
}
customElements.define('hf-button', Button);