import styled from 'styled-components';
import '../../stylesheet/fonts.css';

export const DiagramTabWrapper = styled.div`
    background-color: #F1F3F8;
    
    @media screen and (min-width: 768px) {
        display: flex;
    }
    
`;

export const DiagramButtonWrapper = styled.div`
    position: relative;

    &:hover {
        fill: aqua;
    }
        & svg {
            position: absolute;
            top: 50%;
            right: 20px;
            transform: translateY(-50%);
            cursor: pointer;
            transition: fill 500ms ease;
            pointer-events: none;
            
        }
`;
export const DiagramButton = styled.select`
    display: flex;
    
    width: 100%;
    padding: 12px 21px 14px 20px;
    margin-bottom: 20px;
    border: 1px solid black;
    border-radius: 30px;

    font-family: var(--baseFont);
    font-style: normal;
    font-weight: var(--regular);
    font-size: 16px;
    line-height: 1.47; 
    background: none;
    cursor: pointer;
    outline: none;
    
    appearance: none;
`;
export const DiagramTableBar = styled.div``;