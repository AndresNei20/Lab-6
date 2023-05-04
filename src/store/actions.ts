import { getApi } from "../services/getApi";
import { AddQuoteActions, GetQuoteActions, QuoteActions } from "../types/store";

export const getQuotes = async (): Promise<GetQuoteActions> => {
        const Quotes = getApi();
        return{
            action: QuoteActions.GET,
            payload: []
        }
}

export const addNewQuote = ({payload}: Pick<AddQuoteActions, "payload">): AddQuoteActions => {
    return{
        action: QuoteActions.ADD,
        payload
    }
}
