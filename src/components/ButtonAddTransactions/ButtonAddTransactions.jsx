import style from './ButtonAddTransactions.module.css'

import { useDispatch, useSelector } from 'react-redux';
import { changeModalStatus } from '../../redux/global/globalActions'


 export const ButtonAddTransactions = () => {
    const modalAddTransactionStatus = useSelector(state=>
        state.global.isModalAddTransactionOpen);
    const dispatch = useDispatch()

    console.log(modalAddTransactionStatus)

    function onButtonClick() {
        dispatch(changeModalStatus(!modalAddTransactionStatus))
        
    }
    return (        
            <div className={style.switch__button} onClick={onButtonClick}> 
                <div className={style.switch__buttonVert}></div>
                <div className={style.switch__buttonGor}></div>
            </div>        
    )}

