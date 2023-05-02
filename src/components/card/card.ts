export enum AttributesCard{
    "anime" = "anime",
    "character" = "character",
    "quote" = "quote"
}

export default class AppCard extends HTMLElement {
    anime?:string
    character?:string
    quote?:string

    static get observedAttributes(){
        const attrs: Record<AttributesCard, null> = {
            anime: null,
            character: null,
            quote: null
        }
        return Object.keys(attrs)
    }
    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    attributeChangedCallback(
        propName: AttributesCard,
        _: string | undefined,
        newValue: string | undefined
    ){
        switch (propName) {
            default:
                this[propName] = newValue
                break;
        }
    }

    connectedCallback() {
        this.render()
    }
    
    render() {
        const section = this.ownerDocument.createElement('section')
        const h2 = this.ownerDocument.createElement('h2')
        h2.innerText = `${this.anime}`;
        this.shadowRoot?.appendChild(h2);
        const h3 = this.ownerDocument.createElement('h3')
        h3.innerText = `${this.character}`;
        this.shadowRoot?.appendChild(h3);
        const h4 = this.ownerDocument.createElement('h4')
        h4.innerText = `${this.quote}`;
        this.shadowRoot?.appendChild(h4);
        const btn = this.ownerDocument.createElement('button');
        btn.innerText = "Add favorite"
        btn.addEventListener('click', ()=>{
            console.log(this.anime)
        })
        this.shadowRoot?.appendChild(btn);
    }
}

customElements.define('app-card', AppCard)