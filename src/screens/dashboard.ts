import '../components/export'
import { getApi } from "../services/getApi";
import { AttributesCard } from "../components/card/card";
import { QuoteType } from "../types/apiType";

export default class AppDashboard extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

   async connectedCallback() {
        const data = await getApi();
        this.render(data)
    }

    render(data : any) {

        if(this.shadowRoot){this.shadowRoot.innerHTML=``}
        data.forEach((e: QuoteType) => {
            const cards = this.ownerDocument.createElement('app-card');
            cards.setAttribute(AttributesCard.anime, e.anime);
            cards.setAttribute(AttributesCard.character, e.character);
            cards.setAttribute(AttributesCard.quote, e.quote);
            this.shadowRoot?.appendChild(cards);
            
        });
    }
}


customElements.define('app-dashboard', AppDashboard)