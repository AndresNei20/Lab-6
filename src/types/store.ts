import { QuoteType } from "./apiType";

export type observer = ({render: () => void} & HTMLElement);

export type AppState = {
    FavQuote: QuoteType[]
}

export enum QuoteActions{
    "ADD" = "ADD",
    "GET" = "GET"
}

export interface AddQuoteActions{
    action: QuoteActions.ADD,
    payload: QuoteType
}

export interface GetQuoteActions{
    action: QuoteActions.GET,
    payload: QuoteType[]
}

export type Actions = AddQuoteActions | GetQuoteActions