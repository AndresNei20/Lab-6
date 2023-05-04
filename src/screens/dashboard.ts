import '../components/export'
import { getApi } from "../services/getApi";
import { AttributesCard } from "../components/card/card";
import { QuoteType } from "../types/apiType";
import { appState, dispatch } from '../store/index';

export default class AppDashboard extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

   async connectedCallback() {
        const data = await getApi();
        this.render(data)

        if(appState.FavQuote.length === 0){
            const action = await getApi();
            dispatch(action);
        }else{
            this.render(data)
        }
    }

    render(data : any) {

        if(this.shadowRoot){this.shadowRoot.innerHTML=``}

            const tittle = this.ownerDocument.createElement('h1');
            tittle.innerText = "Quotes"

            const sectionQuote = this.ownerDocument.createElement('section');

            sectionQuote.appendChild(tittle)

        data.forEach((e: QuoteType) => {
            const cards = this.ownerDocument.createElement('app-card');
            cards.setAttribute(AttributesCard.anime, e.anime);
            cards.setAttribute(AttributesCard.character, e.character);
            cards.setAttribute(AttributesCard.quote, e.quote);
            sectionQuote.appendChild(cards);

           
            
        });
        this.shadowRoot?.appendChild(sectionQuote)

        const favTittle = this.ownerDocument.createElement('h1');
        favTittle.innerText = "Favorite Quotes"

        const sectionFavorites = this.ownerDocument.createElement('section');
        sectionFavorites.appendChild(favTittle);

        appState.FavQuote.forEach((fav, i)=>{
            const cards = this.ownerDocument.createElement('app-card');
            cards.setAttribute(AttributesCard.anime, fav.anime);
            cards.setAttribute(AttributesCard.character, fav.character);
            cards.setAttribute(AttributesCard.quote, fav.quote);
            sectionFavorites.appendChild(cards);
        })
        this.shadowRoot?.appendChild(sectionFavorites)
    }
}


customElements.define('app-dashboard', AppDashboard)