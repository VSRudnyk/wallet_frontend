import { SelectWrapper, SelectBtn, SelectOptionsList, SelectOptionsItem, } from  './CustomSelect.styled'
import { useState, useEffect, useRef } from 'react'
import { IconSVG } from 'stylesheet/IconSVG';


export const CustomSelect = ({items, changeValue}) => {

    const [selectedText, setSelectedTex] = useState(items.tittle)
    const [openStatus, setOpenStatus] = useState(false);
    const refToggleDropDown = useRef(null)
    function onSelectClick () {
        setOpenStatus(!openStatus);  
    }

    function onSelectChange (event) {

        if (event.target.nodeName !== "LI") {
            return
        }
        
        const itemName = event.target.innerText;
        const itemValue = event.target.dataset.itemvalue

        setSelectedTex(itemName);
        changeValue(itemValue);
        setOpenStatus(!openStatus);

    }
    function handleOutsideDropDown (event) {

            if (openStatus === true) {
                
                if (refToggleDropDown.current) {
                    if(!refToggleDropDown.current.contains(event.target)) {
                        setOpenStatus(false)
                    }
                }
            }
    }

    useEffect(() => {
        window.addEventListener('click', handleOutsideDropDown);
        return () => {
            window.removeEventListener('click', handleOutsideDropDown);
        }
    }); 
    return (
        <SelectWrapper className='select__wrapper'>
            <SelectBtn className='select__button' ref={refToggleDropDown}  onClick={onSelectClick} status={openStatus}>
                <span className='select__button__active-text'>{selectedText}</span>
                <IconSVG id="icon-diagram-tab-arrow-down"/>
            </SelectBtn>

            {openStatus === true && <SelectOptionsList className='select__options-wrapper options' onClick={event => {
                onSelectChange(event)
            }}>
                {items && items.data.map(({text, value}) => {
                    return (
                        <SelectOptionsItem key={text} className='options__item' data-itemvalue={value}>{text}</SelectOptionsItem>
                    )
                })}
            </SelectOptionsList>}
        </SelectWrapper>
    )
}
