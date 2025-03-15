import { createContext, ReactNode, useContext, useEffect, useReducer, useState } from "react"
import { darkTheme, lightTheme, tempUserContent } from "../constants";
import { useToggleState } from "../utils";
import { ThemeProvider } from "styled-components";

export interface ContentType {
    name: string;
    content: any[];
    selected: boolean;
    liked: boolean;
}

export interface SettingsType {
    darkMode: boolean;
    forceKanji: boolean;
}

interface FunctionsType {
    addContent: (content: ContentType) => void;
    removeContent: (name: string) => void;
    sortContent: (compareFn: (a: ContentType, b: ContentType) => number) => void;
    updateContent: (content: ContentType) => void;
    toggleLiked: (name: string) => void;
    /*
        addFavourite: (content: ContentType) => void;
        removeFavourite: (name: string) => void;
        sortFavourites: (compareFn: (a: ContentType, b: ContentType) => number) => void;
    */
    toggleDarkMode: (darkMode: boolean) => void;
    toggleForceKanji: (toggleForceKanji: boolean) => void;
}

interface GlobalContextType {
    userContent: ContentType[];
    //favouriteContent: ContentType[];
    userSettings: SettingsType;
    globalFunctions: FunctionsType;
}

type Action =
    | { type: "ADD_CONTENT"; payload: ContentType }
    | { type: "REMOVE_CONTENT"; payload: string }
    | { type: "SORT_CONTENT"; payload: (a: ContentType, b: ContentType) => number }
    | { type: "UPDATE_CONTENT"; payload: ContentType }
    | { type: "TOGGLE_LIKED"; payload: string };

const userContentReducer = (state: ContentType[], action: Action): ContentType[] => {
    switch (action.type) {
        case "ADD_CONTENT":
            if (state.filter(content => content.name === action.payload.name).length > 0) {
                return state;
            }
            return [...state, action.payload];

        case "REMOVE_CONTENT":
            return state.filter(content => content.name !== action.payload);

        case "SORT_CONTENT":
            return [...state].sort(action.payload);

        case "UPDATE_CONTENT":
            return state.map(content =>
                content.name === action.payload.name ? { ...content, ...action.payload } : content
            );

        case "TOGGLE_LIKED":
            return state.map(content =>
                content.name === action.payload ? { ...content, liked: !content.liked } : content
            );

        default:
            throw new Error("Unknown action type");
    }
};

/* 
const userFavouriteReducer = (state: ContentType[], action: Action): ContentType[] => {
    switch (action.type) {
        case "ADD_CONTENT":
            if (state.filter(content => content.name === action.payload.name).length > 0) {
                return state;
            }
            return [...state, action.payload];

        case "REMOVE_CONTENT":
            return state.filter(content => content.name !== action.payload);

        case "SORT_CONTENT":
            return [...state].sort(action.payload);

        default:
            throw new Error("Unknown action type");
    }
};
*/
// write into these from backend with first render

const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

function GlobalProvider({ children }: { children: ReactNode }) {
    const [darkMode, toggleDarkMode] = useToggleState(true);
    const [forceKanji, toggleForceKanji] = useToggleState(false);

    const [userContent, contentDispatch] = useReducer(userContentReducer, []);
    //const [favouriteContent, favouriteDispatch] = useReducer(userFavouriteReducer, []);

    const addContent = (content: ContentType) => {
        contentDispatch({ type: "ADD_CONTENT", payload: content });
    };

    const removeContent = (name: string) => {
        contentDispatch({ type: "REMOVE_CONTENT", payload: name });
    };

    const sortContent = (compareFn: (a: ContentType, b: ContentType) => number) => {
        contentDispatch({ type: "SORT_CONTENT", payload: compareFn });
    };

    const updateContent = (content: ContentType) => {
        contentDispatch({ type: "UPDATE_CONTENT", payload: content });
    };

    const toggleLiked = (name: string) => {
        contentDispatch({ type: "TOGGLE_LIKED", payload: name });
    };

    /*
    const addFavourite = (content: ContentType) => {
        favouriteDispatch({ type: "ADD_CONTENT", payload: content });
    };

    const removeFavourite = (name: string) => {
        favouriteDispatch({ type: "REMOVE_CONTENT", payload: name });
    };

    const sortFavourites = (compareFn: (a: ContentType, b: ContentType) => number) => {
        favouriteDispatch({ type: "SORT_CONTENT", payload: compareFn });
    };
    */

    // first render

    useEffect(() => {
        /*
        userContent.map((content) => {
            if (content.liked === true) {
                addFavourite(content);
            }
        });
        */
    }, []);

    return (
        <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
            <GlobalContext.Provider
                value={{
                    userContent,
                    //favouriteContent,
                    userSettings: {
                        darkMode,
                        forceKanji,
                    },
                    globalFunctions: {
                        addContent,
                        removeContent,
                        sortContent,
                        updateContent,
                        toggleLiked,
                        //addFavourite,
                        //removeFavourite,
                        //sortFavourites,
                        toggleDarkMode,
                        toggleForceKanji,
                    }
                }}
            >
                {children}
            </GlobalContext.Provider>
        </ThemeProvider>
    )
}

export const useGlobalContext = () => {
    const context = useContext(GlobalContext);
    if (!context) {
        throw new Error("useGlobalContext must be used within a GlobalProvider");
    }
    return context;
};

export default GlobalProvider