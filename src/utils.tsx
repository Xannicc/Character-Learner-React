import { useCallback, useState } from "react";

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
}

export function useToggleState(initialState: boolean) {
    const [state, setState] = useState(initialState);

    const toggle = useCallback(() => {
        setState((prev) => !prev);
    }, []);

    return [state, toggle] as const;
}