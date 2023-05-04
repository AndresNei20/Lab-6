import { Actions, AppState, QuoteActions } from "../types/store";

export const reducer = (currentAction: Actions, currentState: AppState): AppState => {
    const {action, payload} = currentAction;

    switch (action) {
        case QuoteActions.ADD:
            return{
                ...currentState,
                FavQuote:[
                    payload,
                    ...currentState.FavQuote,
                ]
            }

            case QuoteActions.GET:
                return {
                    ...currentState,
                    FavQuote: payload
                }
        default:
            return currentState
    }
}