import { v1 as uuidv1 } from 'uuid';

export const cartReducer = (state, action) => {
    switch (action.type) {
        case "ADD_PACK":
            return [
                ...state,
                {
                    id: uuidv1(),
                    pack: action.pack.pack,
                    quantity: action.pack.quantity,
                },
            ];
        case "REMOVE_PACK":
            return state.filter((items) => items.id !== action.id);
        default:
            return state;
    }
};
