import "styled-components";

declare module "styled-components" {
    export interface DefaultTheme {
        color: {
            text: string;
            first: string;
            second: string;
            third: string;
            accent: string;
        };
        shadow: {
            text: {
                10: string,
                15: string,
                20: string,
                30: string
            },
            third: {
                80: string,
            },
            accent: {
                70: string,
            }
        }
    }
}

declare module 'react-transition-group';
