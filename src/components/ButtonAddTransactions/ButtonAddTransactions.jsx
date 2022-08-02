import {Switch, SwitchElGor, SwitchElVert} from './ButtonAddTransactions.styled'
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
            <Switch  onClick={onButtonClick}> 
                <SwitchElVert></SwitchElVert>
                <SwitchElGor></SwitchElGor>
            </Switch>        
    )}

    