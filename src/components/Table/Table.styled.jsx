import styled from 'styled-components';
import '../../stylesheet/fonts.css';

export const TableWrapper = styled.div`
    font-family: var(--baseFont);
    font-style: normal;
    font-weight: var(--regular);
    margin: 0 auto;


    & ul {
        list-style: none;
    }    
`;
export const TableTittle = styled.div`
    background-color: var(--white);
    border-radius: 30px;
    padding: 15px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
export const TableTittleBtn = styled.button`
    border: none;
    background: none;
    font-size: 18px;
    line-height: 1.47;
    font-weight: var(--bold);
`;

export const TableContentList = styled.ul`
    margin: 0;
    padding: 0 20px;
`;
export const TableContentItem = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 13px 0;
    border-bottom: 1px solid var(--transaction-underline-color);
    margin-bottom: 1px;
    

    & span {
        display: block;
    }
`;

export const ItemCategoryWrapper = styled.div`
    display: flex;
    align-items: center;
`;

export const CategoryColorMark = styled.span`
    width: 24px;
    height: 24px;
    margin-right: 16px;
    background-color:${props => props.background || "var(--black)"};
`;
export const CategoryName = styled.span`

`;
export const ItemSum = styled.span``;

export const TableResultList = styled.ul`
    margin: 16px 0 0 0;
    padding: 0 20px;
    
`;
export const TableResultItem = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;

    &:not(:last-child) {
        margin-bottom: 14px;
    }
    & span {
        display: block;
    }
`;
export const ResultItemTittle = styled.span`
    font-weight: var(--bold);
`;
export const ResultItemValue = styled.span`
    color: ${props => props.color || "var(--black)"};
`;