/* import { validate } from 'indicative/validator'; */
import { useAddTransactionMutation } from '../../redux/transactionsOperation';
import { toast, ToastContainer } from 'react-toastify';
import { useTranslation } from 'react-i18next';

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeModalStatus } from '../../redux/modal/modalActions';
import { createPortal } from 'react-dom';
// import 'react-datetime/css/react-datetime.css';
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
  // InputCalendar,
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
    amount: '',
    date: new Date(),
    operationType: true,
    comment: '',
    category: '',
    balance: 90000,
  });

  const [transaction, { isSuccess, isError }] = useAddTransactionMutation();
  const [selectWindow, setSelectWindow] = useState(false);

  const { t } = useTranslation();

  const modalAddTransactionStatus = useSelector(
    state => state.modal.isModalAddTransactionOpen
  );
  const dispatch = useDispatch();

  /*        const rules = {

        } */

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

  const closeModal = e => {
    dispatch(changeModalStatus(!modalAddTransactionStatus));
  };

  const onButtonClick = () => {
    setInput({ ...input, operationType: !input.operationType });
  };

  const onSubmitClick = e => {
    transaction({
      sum: Number(input.amount),
      date: input.date,
      type: input.operationType ? 'income' : 'expense',
      comment: input.comment,
      category: 'вввв',
      balance: 90000,
    });
    setTimeout(() => {
      dispatch(changeModalStatus(!modalAddTransactionStatus));
    }, 2500);
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
      <Modal>
        {isSuccess &&
          toast.success(t('addtransaction.notify.success'), {
            theme: 'colored',
            icon: '🆗',
            autoClose: 8000,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          }) && <ToastContainer />}
        {isError && toast.error(t('addtransaction.notify.error')) && (
          <ToastContainer />
        )}
        <ButtonClose onClick={closeModal}>{<CloseSvg />}</ButtonClose>
        <ModalName>{t('addtransaction.header.title')}</ModalName>

        <SwitchBox onClick={onButtonClick}>
          <SwitchIncome nonActive={!input.operationType}>
            {t('addtransaction.header.income')}
          </SwitchIncome>
          <SwtchCase>
            <SwitcherButton typeIncome={input.operationType}>
              {input.operationType && <SwitcherButtonVert />}
              <SwitcherButtonGor />
            </SwitcherButton>
          </SwtchCase>
          <SwitchExpence nonActive={!input.operationType}>
            {t('addtransaction.header.expense')}
          </SwitchExpence>
        </SwitchBox>
        <InputsBox>
          {!input.operationType && (
            <SelectDiv
              value={input.category}
              onClick={onSelectClick}
              nonActive={input.category}
            >
              {!input.category
                ? t('addtransaction.placeholders.select')
                : input.category}
              <SelectSvg />
              {selectWindow && (
                <SelectWindow>
                  <ul>
                    <SelectOptions
                      onClick={onOptionClick}
                      key="Main"
                      value="Main"
                    >
                      {t('addtransaction.options.main')}
                    </SelectOptions>
                    <SelectOptions
                      onClick={onOptionClick}
                      key="Food"
                      value="Food"
                    >
                      {t('addtransaction.options.food')}
                    </SelectOptions>
                    <SelectOptions
                      onClick={onOptionClick}
                      key="Auto"
                      value="Auto"
                    >
                      {t('addtransaction.options.auto')}
                    </SelectOptions>
                    <SelectOptions
                      onClick={onOptionClick}
                      key="Development"
                      value="Development"
                    >
                      {t('addtransaction.options.development')}
                    </SelectOptions>
                    <SelectOptions
                      onClick={onOptionClick}
                      key="Children"
                      value="Children"
                    >
                      {t('addtransaction.options.children')}
                    </SelectOptions>
                    <SelectOptions
                      onClick={onOptionClick}
                      key="House"
                      value="House"
                    >
                      {t('addtransaction.options.house')}
                    </SelectOptions>
                    <SelectOptions
                      onClick={onOptionClick}
                      key="Education"
                      value="Education"
                    >
                      {t('addtransaction.options.education')}
                    </SelectOptions>
                    <SelectOptions
                      onClick={onOptionClick}
                      key="Reset"
                      value="Reset"
                    >
                      {t('addtransaction.options.reset')}
                    </SelectOptions>
                  </ul>
                </SelectWindow>
              )}
            </SelectDiv>
          )}
          <InputAmount
            type="text"
            placeholder="0.00"
            value={input.amount}
            onChange={e => {
              return setInput({ ...input, amount: e.target.value });
            }}
          />
          <InputCalendarBox>
            {/* <InputCalendar
              timeFormat={false}
              value={input.date}
              dateFormat={'DD.MM.YYYY'}
              style={{ outline: 'none' }}
              input={true}
              onChange={e => setInput({ ...input, date: e._d })}
            ></InputCalendar> */}
            <InputCalendarSVG />
          </InputCalendarBox>

          <InputComment
            type="text"
            value={input.comment}
            onChange={e => setInput({ ...input, comment: e.target.value })}
            placeholder={t('addtransaction.placeholders.comment')}
          />
        </InputsBox>
        <ButtonAdd onClick={onSubmitClick}>
          {t('addtransaction.buttons.add')}
        </ButtonAdd>
        <br />
        <ButtonCancel onClick={closeModal}>
          {t('addtransaction.buttons.cancel')}
        </ButtonCancel>
      </Modal>
    </Backdrop>,
    modalRoot
  );
};
