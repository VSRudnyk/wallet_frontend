import { useAddTransactionMutation } from '../../redux/transactionsOperation';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { rules } from '../../functions/validate'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeModalStatus } from '../../redux/global/globalActions';
import { createPortal } from 'react-dom';
import "react-datepicker/dist/react-datepicker.css";
import {
  Backdrop,
  Modal,
  ButtonClose,
  CloseSvg,
  ModalName,
  SwitchBox,
  SwitchIncome,
  SwitchExpence,
  SwtchCase,
  SwitcherButton,
  SwitcherButtonVert,
  SwitcherButtonGor,
  InputsBox,
  InputAmount,
  InputCalendarBox,
  InputCalendar,
  InputComment,
  InputCalendarSVG,
  ButtonAdd,
  ButtonCancel,
  SelectDiv,
  SelectSvg,
  SelectWindow,
  SelectOptions,
  SelectBox
} from './ModalAddTransactions.styled';


const modalRoot = document.querySelector('#modal-root');

export const ModalAddTransactions = () => {
  const [input, setInput] = useState({
    sum: '',
    date: new Date(),
    operationType: true,
    comment: '',
    category: ''
  });
 
  const [transaction, { isSuccess, isError }] = useAddTransactionMutation(); 
 
  const [selectWindow, setSelectWindow] = useState(false);
  const modalAddTransactionStatus = useSelector(
    state => state.global.isModalAddTransactionOpen
  );
  const dispatch = useDispatch();

  
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  const handleKeyDown = e => {
    if (e.code === 'Escape') {
      dispatch(changeModalStatus(!modalAddTransactionStatus));
    }
  };

  const OnBackdropClick = e => {
    if (e.target === e.currentTarget) {
      dispatch(changeModalStatus(!modalAddTransactionStatus));
    }
  };

  const closeModal = () => {
    dispatch(changeModalStatus(!modalAddTransactionStatus));
  };

  const onButtonClick = () => {
    setInput({ ...input, operationType: !input.operationType, category: '' });
  };

  const OnSubmitClick = e => {
    e.preventDefault()
    const transactionItem = {
      sum: input.sum,
      date: input.date,
      type: input.operationType ? 'income' : 'expense',
      comment: input.comment,
      category: input.category,
      balance: 90000} 

        if(rules(transactionItem)) {
         transaction(transactionItem).then(res => 
          document.location.reload()
         );
        
        setInput({ 
          sum: '',
          date: new Date(),
          operationType: true,
          comment: '',
          category: ''})     
      }
      };

  const onSelectClick = e => {
    setSelectWindow(!selectWindow);
  };

  const onOptionClick = e => {
    setSelectWindow(!selectWindow);
    setInput({ ...input, category: e.target.attributes.value.value });
  };

  return createPortal(
    <Backdrop onClick={OnBackdropClick}>
     {isSuccess && Notify.success('Operation add in your Wallet')}      
      {isError && Notify.failure('OOOps! Operation don`t add in your Wallet')} 
      <Modal>
        <ButtonClose onClick={closeModal}>{<CloseSvg />}</ButtonClose>
        <ModalName>Add transaction</ModalName>
          <form onSubmit={OnSubmitClick}>
          <SwitchBox onClick={onButtonClick}>
          <SwitchIncome nonActive={!input.operationType}>Income</SwitchIncome>
          <SwtchCase>
            <SwitcherButton typeIncome={input.operationType}>
              {input.operationType && <SwitcherButtonVert />}
              <SwitcherButtonGor />
            </SwitcherButton>
          </SwtchCase>
          <SwitchExpence nonActive={!input.operationType}>
            Expense
          </SwitchExpence>
        </SwitchBox>
        <InputsBox>
          
            <SelectDiv
              value={input.category}
              onClick={onSelectClick}
              nonActive={input.category}
            >
              {!input.category ? 'Select category' : input.category}
              <SelectSvg />
              {selectWindow && (
                <SelectWindow>
                  {!input.operationType ? (<ul>
                    <SelectOptions
                      onClick={onOptionClick}
                      oper={input.operationType}
                      key="Car"
                      value="Car"
                    >
                      Car
                    </SelectOptions>
                    <SelectOptions
                      onClick={onOptionClick}
                      oper={input.operationType}
                      key="Products"
                      value="Products"
                    >
                      Products
                    </SelectOptions>
                    <SelectOptions
                      onClick={onOptionClick}
                      oper={input.operationType}
                      key="Main"
                      value="Main"
                    >
                      Main
                    </SelectOptions>
                    <SelectOptions
                      onClick={onOptionClick}
                      oper={input.operationType}
                      key="Food"
                      value="Food"
                    >
                      Food
                    </SelectOptions>
                    <SelectOptions
                      onClick={onOptionClick}
                      oper={input.operationType}
                      key="Development"
                      value="Development"
                    >
                      Development
                    </SelectOptions>
                    <SelectOptions
                      onClick={onOptionClick}
                      oper={input.operationType}
                      key="Children"
                      value="Children"
                    >
                      Children
                    </SelectOptions>
                    <SelectOptions
                      onClick={onOptionClick}
                      oper={input.operationType}
                      key="House"
                      value="House"
                    >
                      House
                    </SelectOptions>
                    <SelectOptions
                      onClick={onOptionClick}
                      oper={input.operationType}
                      key="Education"
                      value="Education"
                    >
                      Education
                    </SelectOptions>
                    <SelectOptions
                      onClick={onOptionClick}
                      oper={input.operationType}
                      key="Self care"
                      value="Self care"
                    >
                      Self care
                    </SelectOptions>
                    <SelectOptions
                      onClick={onOptionClick}
                      oper={input.operationType}
                      key="Children care"
                      value="Children care"
                    >
                      Children care
                    </SelectOptions> <SelectOptions
                      onClick={onOptionClick}
                      oper={input.operationType}
                      key="Household product"
                      value="Household product "
                    >
                      Household product 
                    </SelectOptions> <SelectOptions
                      onClick={onOptionClick}
                      oper={input.operationType}
                      key="Laisure"
                      value="Laisure"
                    >
                      Laisure
                    </SelectOptions> <SelectOptions
                      onClick={onOptionClick}
                      oper={input.operationType}
                      key="Basic expenses"
                      value="Basic expenses"
                    >
                      Basic expenses
                    </SelectOptions>
                     <SelectOptions
                      onClick={onOptionClick}
                      oper={input.operationType}
                      key="Other"
                      value="Other"
                    >
                      Other
                    </SelectOptions>                    
                  </ul>) : 
                  <ul>
                    <SelectOptions
                      onClick={onOptionClick}
                      oper={input.operationType}
                      key="Salary"
                      value="Salary"
                    >Salary</SelectOptions>
                         <SelectOptions
                      onClick={onOptionClick}
                      oper={input.operationType}
                      key="Bonus"
                      value="Bonus"
                    >Bonus</SelectOptions>
                    <SelectOptions
                      onClick={onOptionClick}
                      oper={input.operationType}
                      key="Other"
                      value="Other"
                    >Other</SelectOptions>
                  </ul>
                  }
       
                </SelectWindow>
              )}
            </SelectDiv>
          
          <InputAmount
            type="number"
            required        
            placeholder="0.00"
            value={input.sum}
            onChange={e => setInput({ ...input, sum: Number(e.target.value) })}
          />
          <InputCalendarBox>
            <InputCalendar  
            dateFormat={'dd.MM.yyyy'} 
            selected={input.date} 
            onChange={e => setInput({ ...input, date: e })} />
            <InputCalendarSVG />
          </InputCalendarBox>

          <InputComment
            type="text"
            value={input.comment}
            onChange={e => setInput({ ...input, comment: e.target.value })}
            placeholder="Comment"
          />
        </InputsBox>
        <ButtonAdd onSubmit={OnSubmitClick}>Add</ButtonAdd>
        <br />
        <ButtonCancel add={input.operationType} onClick={closeModal}>Cancel</ButtonCancel>
          </form>
      </Modal>
    </Backdrop>,
    modalRoot
  );
};
