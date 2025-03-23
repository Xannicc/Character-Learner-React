import { useCallback, useState } from "react";
import Papa from "papaparse";
import { ContentType, useGlobalContext } from "./components/GlobalProvider";

export function hexToRGB(hex: string) {
    hex = hex.replace(/^#/, "");
    if (hex.length === 3) {
        hex = hex.split("").map((char) => char + char).join("");
    }
    const bigint = parseInt(hex, 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return `${r}, ${g}, ${b}`;
};

export type ToggleType = [boolean, (state: boolean) => void];

export function useToggleState(initialState: boolean) {
    const [state, setState] = useState(initialState);

    const toggle = useCallback(() => {
        setState((prev) => !prev);
    }, []);

    return [state, toggle] as const;
};

export const parseCSV = (file: File): Promise<any> => {
    return new Promise((resolve, reject) => {
        if (file && file.type === "text/csv") {
            const reader = new FileReader();

            reader.onload = () => {
                const csvText = reader.result as string;
                const result = Papa.parse(csvText, {
                    header: true,
                    skipEmptyLines: true,
                });
                resolve(result.data);
            };

            reader.onerror = () => {
                reject(new Error("Error reading file"));
            };

            reader.readAsText(file);
        }
        else {
            reject(new Error("Please upload a CSV file."));
        }
    });
};

export const generateNum = (num: number | undefined, max: number) => {
    if (num === undefined) {
        return Math.floor(Math.random() * max);
    }
    let nextNum = Math.floor(Math.random() * max);
    while (nextNum === num) {
        nextNum = Math.floor(Math.random() * max);
    }
    return nextNum;
};