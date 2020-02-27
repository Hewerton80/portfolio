import styled,{css} from "styled-components"

export const Row = styled.div`
    flex:0 0 100%;
    display:flex;
    flex-direction:row;
    flex-wrap: wrap;
`; 
export const Col = styled.div`
    display:flex;
    flex-direction:row;
    
    ${props=>(
        props.xs && css`
            @media (min-width: 1px) {
                flex: 0 0${props=>props.xs/12*100}%;
                max-width:${props=>props.xs/12*100}%;
            }
        `
    )}
    ${props=>(
        props.sm && css`
            @media (min-width: 576px) {
                flex: 0 0${props=>props.sm/12*100}%;
                max-width:${props=>props.sm/12*100}%;
            }
        `
    )}
    ${props=>(
        props.md && css`
            @media (min-width: 768px) {
                flex: 0 0${props=>props.md/12*100}%;
                max-width:${props=>props.md/12*100}%;
            }
        `
    )}
    ${props=>(
        props.lg && css`
            @media (min-width: 992px) {
                flex: 0 0${props=>props.lg/12*100}%;
                max-width:${props=>props.lg/12*100}%;
            }
        `
    )}
`