import styled from 'styled-components';

export const TableWrapper = styled.div`
    & ul {
        list-style: none;
    }
    border: 1px solid black;
    @media screen and (min-width: 320px) {
        width: 280px;
    }
    @media screen and (min-width: 768px) {
        width: 336px;
    }
    @media screen and (min-width: 1280px) {
        width: 395px;
    }
`;
export const TableTittle = styled.div`
    background-color: #FFF;
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
    font-weight: 700;
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
    border-bottom: 1px solid #DCDCDF;
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
    background-color:${props => props.background || "#000"};
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

`;
export const ResultItemValue = styled.span`
    color: ${props => props.color || "#000"};
`;