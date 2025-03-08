import { createContext, ReactNode, useContext, useEffect } from "react"
import { darkTheme, lightTheme, tempUserContent } from "../constants";
import { useToggleState } from "../utils";
import { ThemeProvider } from "styled-components";

export interface ContentType {
    name: string;
    content: [string, string, string][];
    selected: boolean;
    liked: boolean;
}

export interface SettingsType {
    forceKanji: boolean;
    darkMode: boolean;
}

interface FunctionsType {
    toggleDarkMode: (darkMode: boolean) => void;
}

interface GlobalContextType {
    userContent: ContentType[];
    userSettings: SettingsType;
    globalFunctions: FunctionsType;
}

// write into these from backend with first render
const userContent: ContentType[] = tempUserContent;
const forceKanji = false;

const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

function GlobalProvider({ children }: { children: ReactNode }) {
    const [darkMode, toggleDarkMode] = useToggleState(true);

    return (
        <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
            <GlobalContext.Provider
                value={{
                    userContent,
                    userSettings: {
                        forceKanji,
                        darkMode,
                    },
                    globalFunctions: {
                        toggleDarkMode
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