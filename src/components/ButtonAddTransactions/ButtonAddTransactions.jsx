import {Switch, SwitchElGor, SwitchElVert} from './ButtonAddTransactions.styled'
import { useDispatch, useSelector } from 'react-redux';
import { changeModalStatus } from '../../redux/global/globalActions.jsx'


 export const ButtonAddTransactions = () => {
    const modalAddTransactionStatus = useSelector(state=>
        state.global.isModalAddTransactionOpen);
    const dispatch = useDispatch()

    function onButtonClick() {
        dispatch(changeModalStatus(!modalAddTransactionStatus))

    }
    return (        
            <Switch  onClick={onButtonClick}> 
                <SwitchElVert></SwitchElVert>
                <SwitchElGor></SwitchElGor>
            </Switch>        
    )}
    