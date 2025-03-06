import { createContext, ReactNode, useContext } from "react"
import { tempUserContent } from "../constants";

export interface ContentType {
    name: string;
    content: [string, string, string][];
    selected: boolean;
    liked: boolean;
}

interface SettingsType {
    forceKanji: boolean;
}

interface GlobalContextType {
    userContent: ContentType[];
    userSettings: SettingsType;
}

// write into these from backend with first render
const userContent: ContentType[] = tempUserContent;
const forceKanji = false;

const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

function GlobalProvider({ children }: { children: ReactNode }) {
    return (
        <GlobalContext.Provider
            value={{
                userContent,
                userSettings: {
                    forceKanji
                },
            }}
        >
            {children}
        </GlobalContext.Provider>
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