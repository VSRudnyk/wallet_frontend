import { SelectWrapper, SelectBtn, SelectOptionsList, SelectOptionsItem, } from  './CustomSelect.styled'
import { useState } from 'react'
import { IconSVG } from 'stylesheet/IconSVG';


export const CustomSelect = ({items}) => {

    const [selectedValue, setSelectedValue] = useState(items.tittle)
    const [openStatus, setOpenStatus] = useState(false);
 
    function onSelectClick () {
        setOpenStatus(!openStatus);
    }

    function onSelectChange (event) {
        console.log(event.currentTarget.className)


        if (event.target.nodeName !== "LI") {
            return
        }

        const itemValue = event.target.dataset.itemvalue;

        setSelectedValue(itemValue);
        setOpenStatus(!openStatus)
    }

    return (
        <SelectWrapper className='select__wrapper'>
            <SelectBtn className='select__button' onClick={onSelectClick}>
                <span className='select__button__active-text'>{selectedValue}</span>
                <IconSVG id="icon-diagram-tab-arrow-down" />
            </SelectBtn>

            {openStatus === true && <SelectOptionsList className='select__options-wrapper options' onClick={event => {
                onSelectChange(event)
            }}>
                {items && items.data.map(item => {
                    return (
                        <SelectOptionsItem key={item} className='options__item' data-itemvalue={`${item}`}>{item}</SelectOptionsItem>
                    )
                })}
                {/* <SelectOptionsItem className='options__item' data-itemvalue="2019">2019</SelectOptionsItem>
                <SelectOptionsItem className='options__item' data-itemvalue="2020">2020</SelectOptionsItem>
                <SelectOptionsItem className='options__item' data-itemvalue="2021">2021</SelectOptionsItem>
                <SelectOptionsItem className='options__item' data-itemvalue="2022">2022</SelectOptionsItem> */}
            </SelectOptionsList>}
        </SelectWrapper>
    )
}