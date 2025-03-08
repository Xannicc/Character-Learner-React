/// <reference types="vite-plugin-svgr/client" />

import NavBar from "./components/NavBar"
import { useState, createContext } from "react"
import { PageType } from "./constants"
import MainPage from "./pages/MainPage";
import ContentPage from "./pages/ContentPage";
import SettingsPage from "./pages/SettingsPage";
import GlobalProvider from "./components/GlobalProvider";

export const PageContext = createContext<{
    currentPage: PageType;
    setCurrentPage: React.Dispatch<React.SetStateAction<PageType>>;
} | undefined>(undefined);

function App() {
    const [currentPage, setCurrentPage] = useState<PageType>("main");

    const pages = {
        main: <MainPage />,
        content: <ContentPage setCurrentPage={setCurrentPage} />,
        popularContent: <></>,
        settings: <SettingsPage />,
    }

    return (
        <GlobalProvider>
            <PageContext.Provider
                value={{ currentPage, setCurrentPage }}
            >
                <NavBar />
            </PageContext.Provider>
            <section>
                {pages[currentPage]}
            </section>
        </GlobalProvider>
    )
}

export default App