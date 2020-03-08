import styled from 'styled-components';

export const MobileStepper = styled.div`
    width:100%;
    padding:8px 0px;
    display:flex;
    justify-content:center;
    align-items:center;
    margin-top:16px;
`;
export const Stepp = styled.div`
    width:14px;
    height:14px;
    margin: 0 3px;
    border:0;
    border-radius:50%;
    background-color:${props=>props.active?"#2a2a2a":"#7f7f7e"};
    cursor:pointer;
    &:hover{
        transform:scale(1.25)
    }
`;
