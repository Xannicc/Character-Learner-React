import { ContentType } from "./components/GlobalProvider"

export const darkText = "#ffffffde"
export const darkColor1 = "#3E3E3E"
export const darkColor2 = "#242424"
export const darkColor3 = "#121212"
export const darkColor4 = "#aeacb4"

export const lightText = "#484b6a"
export const lightColor1 = "#fafafa"
export const lightColor2 = "#e4e5f1"
export const lightColor3 = "#d2d3db"

const pages = [
    "main",
    "content",
    "popularContent",
    "settings",
] as const;

export type PageType = (typeof pages)[number];

export interface UserInformation {
    username: string;
    email: string;
    password: string;
}

export const animationVariants = {
    static: {
        x: 0,
        y: 0,
        scale: 1,
        opacity: 1,
        transition: {
            duration: 0
        }
    },
    right: {
        x: ["0%", "-20%", "-40%", "-60%", "-80%", "-100%"],
        y: ["0%", "-5%", "-15%", "-20%", "-15%", "-5%"],
        scale: [1, 0.5],
        opacity: [1, 1, 1, 0.75, 0.5, 0],
        transition: {
            ease: [0.25, 1, 0.5, 1],
            default: {
                type: "tween"
            }
        }
    },
    left: {
        x: ["100%", "80%", "60%", "40%", "20%", "0%"],
        y: ["5%", "15%", "20%", "15%", "5%", "0%"],
        scale: [0.5, 1],
        opacity: [0, 0.5, 0.75, 1, 1, 1],
        transition: {
            ease: [0.25, 1, 0.5, 1],
            default: {
                type: "tween"
            }
        }
    },
    rise: {
        scale: [0.35, 1],
        opacity: [0.35, 1],
        transition: {
            type: "spring",
            stiffness: 110,
            damping: 12,
            mass: 0.6,
        }
    },
    shrink: {
        scale: [1, 0.35],
        opacity: [1, 0.35],
        transition: {
            type: "spring",
            stiffness: 110,
            damping: 12,
            mass: 0.6,
        }
    },
    bounce: {
        scale: [0.3, 1],
        transition: {
            type: "spring",
            stiffness: 110,
            damping: 12,
            mass: 0.6,
        }
    }
}

//temp 

export const tempUserContent: ContentType[] = [
    {
        name: "Hiragana",
        content: [
            ["kana", "kanji", "english"],
            ["a", "b", "c"],
            ["e", "f", "g"]
        ],
        selected: false,
        liked: false
    }, {
        name: "Katakana",
        content: [
            ["kana", "kanji", "english"],
            ["x", "y", "z"],
            ["l", "m", "n"]
        ],
        selected: false,
        liked: false
    }, {
        name: "Katakana1",
        content: [
            ["kana", "kanji", "english"],
            ["x", "y", "z"],
            ["l", "m", "n"]
        ],
        selected: false,
        liked: false
    }];

export const tempPopularContent: ContentType[] = [
    {
        name: "Genki",
        content: [
            ["kana", "kanji", "english"],
            ["aj", "byy", "c;d"],
            ["ehhw", "fj", "gddh"]
        ],
        selected: false,
        liked: false
    },
    {
        name: "Kanji",
        content: [
            ["kana", "kanji", "english"],
            ["sdf", "wewx", "rgpw"],
            ["lhj", "emf", "qjf"]
        ],
        selected: false,
        liked: false
    }];