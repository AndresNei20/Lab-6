
export const reducer = (currentAction: Actions, currentState: AppState): AppState => {
    const { action, payload } = currentAction; 

    switch (action) {
        case QuoteActions.SAVE:
            return {
                ...currentState,
                quotes: [...currentState.quotes, payload]
            }


    
        default:
            return currentState;
    }
}

a = {} 

{ ... a }

b = []
[ ...b]