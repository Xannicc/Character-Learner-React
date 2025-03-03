/// <reference types="vite-plugin-svgr/client" />

import NavBar from "./components/NavBar"
import { useEffect, useState, createContext } from "react"
import { darkText, darkColor1, darkColor2, darkColor3, lightText, lightColor1, lightColor2, lightColor3, PageType } from "./constants"
import MainPage from "./components/MainPage";
import ContentPage from "./components/ContentPage";
import SettingsPage from "./components/SettingsPage";

export const PageContext = createContext<{
    currentPage: PageType;
    setCurrentPage: React.Dispatch<React.SetStateAction<PageType>>;
} | null>(null);

function App() {
    const [currentPage, setCurrentPage] = useState<PageType>("main");

    useEffect(() => {
        // colors
        document.documentElement.style.setProperty("--darkText-color", darkText);
        document.documentElement.style.setProperty("--dark1-color", darkColor1);
        document.documentElement.style.setProperty("--dark1-color", darkColor2);
        document.documentElement.style.setProperty("--dark1-color", darkColor3);

        document.documentElement.style.setProperty("--lightText-color", lightText);
        document.documentElement.style.setProperty("--light1-color", lightColor1);
        document.documentElement.style.setProperty("--light2-color", lightColor2);
        document.documentElement.style.setProperty("--light3-color", lightColor3);
    }, []);

    const pages = {
        main: <MainPage />,
        content: <ContentPage setCurrentPage={setCurrentPage} />,
        popularContent: <></>,
        settings: <SettingsPage />,
    }

    return (
        <>
            <PageContext.Provider
                value={{ currentPage, setCurrentPage }}
            >
                <NavBar />
            </PageContext.Provider>
            <section>
                {pages[currentPage]}
            </section>
        </>
    )
}

export default App
