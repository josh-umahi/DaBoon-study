import { css } from 'styled-components';

export const primaryFont = "'Work Sans', sans-serif";

export function fontSettings (fontFamily, fontSize, fontWeight, textAlign, color){
    return css`
        font-family: ${fontFamily};
        font-size: ${fontSize};
        font-weight: ${fontWeight};
        text-align: ${textAlign};
        color: ${color};
    `;
}

export function flexDisplay (flexDirection, justifyContent, alignItems){
    return css`
        display: flex;
        flex-direction: ${flexDirection};
        justify-content: ${justifyContent};
        align-items: ${alignItems};
    `;
}
