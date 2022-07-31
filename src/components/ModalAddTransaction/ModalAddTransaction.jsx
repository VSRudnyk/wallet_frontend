import style from './ModalAddTransactions.module.css'
import {ReactComponent as Close} from './close.svg';
import { useEffect, useState } from 'react'; 

import { useDispatch, useSelector } from 'react-redux';
import { changeModalStatus } from '../../redux/global/globalActions';
import { createPortal } from 'react-dom';
import Datetime from 'react-datetime';
import "react-datetime/css/react-datetime.css";
/* import { DatasetController } from 'chart.js'; */

const modalRoot = document.querySelector('#modal-root'); 

export const ModalAddTransactions = () => {
    const [operationType, setOperationType] = useState(true);
    const [data, setData] = useState(new Date())
    const modalAddTransactionStatus = useSelector(state=>
        state.global.isModalAddTransactionOpen);
    const dispatch = useDispatch();

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        return () => {
          window.removeEventListener('keydown', handleKeyDown)
        };
      },);

      const handleKeyDown = e => { 
        if (e.code === 'Escape') {     
            dispatch(changeModalStatus(!modalAddTransactionStatus))
        }
      };

      const OnBackdropClick = e => {
        if(e.target === e.currentTarget) {
            dispatch(changeModalStatus(!modalAddTransactionStatus))    
       } 
     }

      const closeModal = e => {
        dispatch(changeModalStatus(!modalAddTransactionStatus))
    }

    const onButtonClick = () => {
        console.log(operationType)
        setOperationType(!operationType)
    }



    
    return createPortal(
        <div className={style.backDrop} onClick={OnBackdropClick}>
            <div className={style.modal}>
                <button 
                className={style.buttonClose}
                onClick={closeModal}>
                    {<Close className={style.buttonClose__svg} />}
                </button>
                <p className={style.modal__name}>Add transaction</p>
               
                <div className={style.switch__box} onClick={onButtonClick}>
                    <span className={operationType ? 
                        style.switch__incomeActive : 
                        style.switch__income}>
                            Income</span>
                        <div className={style.switch__case}>
                        <div 
                        className={operationType? style.switcher__button__income : style.switcher__button__expense} 
                        > 
                            {operationType && <div className={style.switcher__buttonVert}></div>}
                            <div className={style.switcher__buttonGor}></div>
                        </div>
                    </div> 
                    <span className={operationType? style.switch__expense : style.switch__expenseActive}>Expense</span>
                    </div>
                    
                <div className={style.inputs__box}>
                    {!operationType && <select className={style.input__select}>            
                        <option value="" className={style.input__optionDis}>Select category
                            </option>    
                      <option value="Main">Main</option>
                      <option value="Food">Food</option>
                      <option value="Auto">Auto</option>
                      <option value="Development">Development</option>
                      <option value="Children">Children</option>
                      <option value="House">House</option>
                      <option value="Education">Education</option>
                      <option value="Reset">Reset</option>
                        </select>}
                    
                    <input type="text"
                        placeholder='0.00' 
                        className={style.input__quntity} />
                   
                   {<Datetime 
                    timeFormat={false}
                    value={data}
                    dateFormat={'DD.MM.YYYY'}
                    className={style.input__calendar}
                    onChange={(e) => setData(e.target)}/>}
                   
                    <input type="text" 
                    className={style.input__comment}
                    placeholder="Comment"/>
                </div>
                <button className={style.button__add}>Add</button>
                <button className={style.button__close} onClick={closeModal}>Cancel</button>
            </div>
        </div>, modalRoot)
}
