import { useAddTransactionMutation } from '../../redux/transactionsOperation';
import Switch from 'react-switch';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { rules } from '../../functions/validate';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeModalStatus } from '../../redux/global/globalActions';
import { createPortal } from 'react-dom';
import 'react-datepicker/dist/react-datepicker.css';
import { useTranslation } from 'react-i18next';
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
  SwitcherButtonVert,
  SwitcherButtonGor,
  InputsBox,
  InputAmount,
  InputCalendarBox,
  InputCalendar,
  InputCalendarIcon,
  InputComment,
  InputCalendarSVG,
  ButtonAdd,
  ButtonCancel,
  SelectDiv,
  SelectSvg,
  SelectWindow,
  SelectOptions,
} from './ModalAddTransactions.styled';


const modalRoot = document.querySelector('#modal-root');

export const ModalAddTransactions = () => {
  const [input, setInput] = useState({
    sum: '',
    date: new Date(),
    operationType: false,
    comment: '',
    category: '',
  });

    
 /*  const [checkedSwitch, setCheckedSwitch] = useState(!input.operationType); */
  const handleChangeSwitch = nextChecked => {
    setInput({...input, operationType: nextChecked});
  };
   

  const { t } = useTranslation();
  const [transaction, { isSuccess, isError }] = useAddTransactionMutation();

  const [selectWindow, setSelectWindow] = useState(false);

  const modalAddTransactionStatus = useSelector(
    state => state.global.isModalAddTransactionOpen
  );
  const dispatch = useDispatch();


  useEffect(() => {       

    const setting =  JSON.parse(localStorage.getItem('inputs'));   
    if(setting) {
      setInput({...setting, date: new Date()})
    }
    window.addEventListener('keydown', (e) => {
      if (e.code === 'Escape') {
        dispatch(changeModalStatus(!modalAddTransactionStatus));
      }
    });
    return () => {
      window.removeEventListener('keydown', (e) => {
        if (e.code === 'Escape') {
          dispatch(changeModalStatus(!modalAddTransactionStatus));
        }
      }); 
    };    
  }, [dispatch, modalAddTransactionStatus]);

  
  const OnBackdropClick = e => {
    if (e.target === e.currentTarget) {
     localStorage.setItem("inputs", JSON.stringify({sum: input.sum,  operationType: input.operationType, comment: input.comment, category: input.category}));
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
    e.preventDefault();
    const transactionItem = {
      sum: input.sum,
      date: input.date,
      type: input.operationType ? 'income' : 'expense',
      comment: input.comment ? input.comment: "-",
      category: input.category,
      balance: 90000,
    };

    if (rules(transactionItem)) {
      transaction(transactionItem);
      closeModal();

      setInput({
        sum: '',
        date: new Date(),
        operationType: true,
        comment: '',
        category: '',
      });
      localStorage.removeItem('inputs')
    }
  };

  const onSelectClick = e => {
    setSelectWindow(!selectWindow);
  };

  const onOptionClick = e => {
    setSelectWindow(!selectWindow);
    setInput({ ...input, category: e.target.attributes.id.value });
  };

  return createPortal(
    <Backdrop onClick={OnBackdropClick}>
      {isSuccess && Notify.success(t('addtransaction.notify.success'))}
      {isError && Notify.failure(t('addtransaction.notify.error'))}
      <Modal>
        <ButtonClose onClick={closeModal}>{<CloseSvg />}</ButtonClose>
        <ModalName>{t('addtransaction.header.title')}</ModalName>
        <form onSubmit={OnSubmitClick}>
          <SwitchBox onClick={onButtonClick}>
            <SwitchIncome
              nonActive={!input.operationType}
              onClick={e => {
                if (e.currentTarget === e.target) {
                  handleChangeSwitch(!input.operationType);                  
                }
              }}
            >
              {t('addtransaction.header.income')}
            </SwitchIncome>
            <SwtchCase>
              <Switch
                onChange={handleChangeSwitch}
                checked={!input.operationType}
                className="react-switch"
                height={30}
                width={78}
                handleDiameter={44}
                offColor="#FFFFFF"
                onColor="#FFFFFF"
                offHandleColor="#24CCA7"
                onHandleColor="#FF6596"
                boxShadow={
                  !input.operationType
                    ? '0px 6px 15px rgba(255, 101, 150, 0.5)'
                    : '0px 6px 15px rgba(36, 204, 167, 0.5)'
                }
                uncheckedIcon={false}
                checkedIcon={false} 
                uncheckedHandleIcon={
                  <>
                    <SwitcherButtonVert />
                    <SwitcherButtonGor />
                  </>
                }
                checkedHandleIcon={<SwitcherButtonGor />}
              />
            </SwtchCase>
            <SwitchExpence
              nonActive={!input.operationType}
              onClick={e => {
                if (e.currentTarget === e.target) {         
                  handleChangeSwitch(!input.operationType)
                }
              }}
            >
              {t('addtransaction.header.expense')}
            </SwitchExpence>
          </SwitchBox>
          <InputsBox>
            <SelectDiv
              value={t(
                `addtransaction.options.${input.category && input.category.toLowerCase()}`
              )}
              onClick={onSelectClick}
              nonActive={t(
                `addtransaction.options.${input.category && input.category.toLowerCase()}`
              )}
            >
              {!input.category
                ? t('addtransaction.placeholders.select')
                : t(`addtransaction.options.${input.category && input.category.toLowerCase()}`)}
              <SelectSvg />
              {selectWindow && (
                <SelectWindow>
                  {!input.operationType ? (
                    <ul>
                      <SelectOptions
                        onClick={onOptionClick}
                        oper={input.operationType}
                        id="car"
                        key="Car"
                        value={t('addtransaction.options.car')}
                      >
                        {t('addtransaction.options.car')}
                      </SelectOptions>
                      <SelectOptions
                        onClick={onOptionClick}
                        oper={input.operationType}
                        id="products"
                        key="Products"
                        value={t('addtransaction.options.products')}
                      >
                        {t('addtransaction.options.products')}
                      </SelectOptions>
                      <SelectOptions
                        onClick={onOptionClick}
                        oper={input.operationType}
                        key="Main"
                        id="main"
                        value={t('addtransaction.options.main')}
                      >
                        {t('addtransaction.options.main')}
                      </SelectOptions>
                      <SelectOptions
                        onClick={onOptionClick}
                        oper={input.operationType}
                        key="Food"
                        id="food"
                        value={t('addtransaction.options.food')}
                      >
                        {t('addtransaction.options.food')}
                      </SelectOptions>
                      <SelectOptions
                        onClick={onOptionClick}
                        oper={input.operationType}
                        key="Development"
                        id="development"
                        value={t('addtransaction.options.development')}
                      >
                        {t('addtransaction.options.development')}
                      </SelectOptions>
                      <SelectOptions
                        onClick={onOptionClick}
                        oper={input.operationType}
                        key="Children"
                        id="children"
                        value={t('addtransaction.options.children')}
                      >
                        {t('addtransaction.options.children')}
                      </SelectOptions>
                      <SelectOptions
                        onClick={onOptionClick}
                        oper={input.operationType}
                        key="House"
                        id="house"
                        value={t('addtransaction.options.house')}
                      >
                        {t('addtransaction.options.house')}
                      </SelectOptions>
                      <SelectOptions
                        onClick={onOptionClick}
                        oper={input.operationType}
                        key="Education"
                        id="education"
                        value={t('addtransaction.options.education')}
                      >
                        {t('addtransaction.options.education')}
                      </SelectOptions>
                      <SelectOptions
                        onClick={onOptionClick}
                        oper={input.operationType}
                        key="Self care"
                        id="health"
                        value={t('addtransaction.options.health')}
                      >
                        {t('addtransaction.options.health')}
                      </SelectOptions>
                      <SelectOptions
                        onClick={onOptionClick}
                        oper={input.operationType}
                        key="Children care"
                        id="childrencare"
                        value={t('addtransaction.options.childrencare')}
                      >
                        {t('addtransaction.options.childrencare')}
                      </SelectOptions>{' '}
                      <SelectOptions
                        onClick={onOptionClick}
                        oper={input.operationType}
                        key="Household product"
                        id="household"
                        value={t('addtransaction.options.household')}
                      >
                        {t('addtransaction.options.household')}
                      </SelectOptions>{' '}
                      <SelectOptions
                        onClick={onOptionClick}
                        oper={input.operationType}
                        key="Leisure"
                        id="leisure"
                        value={t('addtransaction.options.leisure')}
                      >
                        {t('addtransaction.options.leisure')}
                      </SelectOptions>{' '}
                      <SelectOptions
                        onClick={onOptionClick}
                        oper={input.operationType}
                        key="Basic expenses"
                        id="basic"
                        value={t('addtransaction.options.basic')}
                      >
                        {t('addtransaction.options.basic')}
                      </SelectOptions>
                      <SelectOptions
                        onClick={onOptionClick}
                        oper={input.operationType}
                        key="Other"
                        id="other"
                        value={t('addtransaction.options.other')}
                      >
                        {t('addtransaction.options.other')}
                      </SelectOptions>
                    </ul>
                  ) : (
                    <ul>
                      <SelectOptions
                        onClick={onOptionClick}
                        oper={input.operationType}
                        key="Salary"
                        id="salary"
                        value={t('addtransaction.options.salary')}
                      >
                        {t('addtransaction.options.salary')}
                      </SelectOptions>
                      <SelectOptions
                        onClick={onOptionClick}
                        oper={input.operationType}
                        key="Bonus"
                        id="bonus"
                        value={t('addtransaction.options.bonus')}
                      >
                        {t('addtransaction.options.bonus')}
                      </SelectOptions>
                      <SelectOptions
                        onClick={onOptionClick}
                        oper={input.operationType}
                        key="Other"
                        id="other"
                        value={t('addtransaction.options.other')}
                      >
                        {t('addtransaction.options.other')}
                      </SelectOptions>
                    </ul>
                  )}
                </SelectWindow>
              )}
            </SelectDiv>

            <InputAmount
              type="number"
              placeholder="0.00"
              value={input.sum}
              onChange={e =>
                setInput({ ...input, sum: e.target.value })
              }
            />
            <InputCalendarBox>
              <InputCalendar
              key='input'
                dateFormat={'dd.MM.yyyy'}
                selected={input.date}
                maxDate={new Date()}
                onChange={e => setInput({ ...input, date: e })}
              
                
              />
              <InputCalendarIcon
                key='icon'
                dateFormat={'dd.MM.yyyy'}
                selected={input.date}
                maxDate={new Date()}
                customInput={<InputCalendarSVG />}
                onChange={e => setInput({ ...input, date: e })}             
              />
            </InputCalendarBox>

            <InputComment
              type="text"
              value={input.comment}
              onChange={e => setInput({ ...input, comment: e.target.value })}
              placeholder={t('addtransaction.placeholders.comment')}
            />
          </InputsBox>
          <ButtonAdd onSubmit={OnSubmitClick}>
            {t('addtransaction.buttons.add')}
          </ButtonAdd>
          <br />
          <ButtonCancel add={input.operationType} onClick={closeModal}>
            {t('addtransaction.buttons.cancel')}
          </ButtonCancel>
        </form>
      </Modal>
    </Backdrop>,
    modalRoot
  );
};
