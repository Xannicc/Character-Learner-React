// const userFavouriteReducer = (state: ContentType[], action: Action): ContentType[] => {
//     switch (action.type) {
//         case "ADD_CONTENT":
//             if (state.filter(content => content.name === action.payload.name).length > 0) {
//                 return state;
//             }
//             return [...state, action.payload];

//         case "REMOVE_CONTENT":
//             return state.filter(content => content.name !== action.payload);

//         case "SORT_CONTENT":
//             return [...state].sort(action.payload);

//         default:
//             throw new Error("Unknown action type");
//     }
// };

// const addFavourite = (content: ContentType) => {
//     favouriteDispatch({ type: "ADD_CONTENT", payload: content });
// };

// const removeFavourite = (name: string) => {
//     favouriteDispatch({ type: "REMOVE_CONTENT", payload: name });
// };

// const sortFavourites = (compareFn: (a: ContentType, b: ContentType) => number) => {
//     favouriteDispatch({ type: "SORT_CONTENT", payload: compareFn });
// };
