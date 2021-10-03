import styled, { css } from "styled-components"
import { breakpoints } from "../../assets/breakpoints";

export const Row = styled.div`
    flex:0 0 100%;
    display:flex;
    flex-direction:row;
    flex-wrap: wrap;
`;

interface ColProps {
    xs?: number;
    sm?: number;
    md?: number;
    lg?: number;
}

export const Col = styled.div<ColProps>`
    display:flex;
    flex-direction:row;
    
    ${({ xs }) => (
        xs && css`
            @media (min-width: ${breakpoints.xs}px) {
                flex: 0 0${xs / 12 * 100}%;
                max-width:${xs / 12 * 100}%;
            }
        `
    )}

    ${({ sm }) => (
        sm && css`
            @media (min-width: ${breakpoints.sm}px) {
                flex: 0 0${sm / 12 * 100}%;
                max-width:${sm / 12 * 100}%;
            }
        `
    )}

    ${({ md }) => (
        md && css`
            @media (min-width: ${breakpoints.md}px) {
                flex: 0 0${md / 12 * 100}%;
                max-width:${md / 12 * 100}%;
            }
        `
    )}
    
    ${({ lg }) => (
        lg && css`
            @media (min-width: ${breakpoints.lg}px) {
                flex: 0 0${lg / 12 * 100}%;
                max-width:${lg / 12 * 100}%;
            }
        `
    )}
`