import styled from "styled-components";
import '../../../stylesheet/fonts.css';


export const SelectWrapper = styled.div`
    margin-bottom: 20px;
    position: relative;

    //border: 1px solid red;

    &:hover {
        fill: var(--active-blue);
    }

    

`;
export const IconSVG = styled.svg`
    pointer-events: none;
`;
export const SelectBtn = styled.button`
    width: 100%;
    height: 100%;
    border: 1px solid var(--black);
    border-radius: 30px;
    padding: 12px 21px 14px 20px;


    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: var(--baseFont);
    font-style: normal;
    font-weight: var(--regular);
    font-size: 16px;
    line-height: 1.47;
    background: none;
    cursor: pointer;
    outline: none;

    & svg {
        &.rotated-svg {
            transform: rotateX(180deg);
        }
  
    }
`;

export const SelectOptionsList = styled.ul`
    width: 100%;
    position: absolute;
    top: 60px;
    left: 0;
    z-index: 1;
    background-color: #f1f2f7;

    box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.1);
    border-radius: 20px;
    
`;
export const SelectOptionsItem = styled.li`
    text-align: start;
    font-family: var(--baseFont);
    font-style: normal;
    font-weight: var(--regular);
    font-size: 16px;
    line-height: 1.47;
    cursor: pointer;
    padding: 5px 21px 5px 20px;
    border-radius: 10px;

    &:hover {
        background-color: var(--background-gray);
    }

`;