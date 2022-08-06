import { useAddTransactionMutation } from '../../redux/transactionsOperation';
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
} from './ModalAddTransactions.styled';

const modalRoot = document.querySelector('#modal-root');

export const ModalAddTransactions = () => {
  const [input, setInput] = useState({
    sum: '',
    date: new Date(),
    operationType: true,
    comment: '',
    category: '',
  });
  const { t } = useTranslation();
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
    e.preventDefault();
    const transactionItem = {
      sum: input.sum,
      date: input.date,
      type: input.operationType ? 'income' : 'expense',
      comment: input.comment,
      category: input.category,
      balance: 90000,
    };

    if (rules(transactionItem)) {
      transaction(transactionItem).then(res => document.location.reload());
      closeModal();

      setInput({
        sum: '',
        date: new Date(),
        operationType: true,
        comment: '',
        category: '',
      });
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
      {isSuccess && Notify.success(t('addtransaction.notify.success'))}
      {isError && Notify.failure(t('addtransaction.notify.error'))}
      <Modal>
        <ButtonClose onClick={closeModal}>{<CloseSvg />}</ButtonClose>
        <ModalName>{t('addtransaction.header.title')}</ModalName>
        <form onSubmit={OnSubmitClick}>
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
                  {!input.operationType ? (
                    <ul>
                      <SelectOptions
                        onClick={onOptionClick}
                        oper={input.operationType}
                        key="Car"
                        value={t('addtransaction.options.car')}
                      >
                        {t('addtransaction.options.car')}
                      </SelectOptions>
                      <SelectOptions
                        onClick={onOptionClick}
                        oper={input.operationType}
                        key="Products"
                        value={t('addtransaction.options.products')}
                      >
                        {t('addtransaction.options.products')}
                      </SelectOptions>
                      <SelectOptions
                        onClick={onOptionClick}
                        oper={input.operationType}
                        key="Main"
                        value={t('addtransaction.options.main')}
                      >
                        {t('addtransaction.options.main')}
                      </SelectOptions>
                      <SelectOptions
                        onClick={onOptionClick}
                        oper={input.operationType}
                        key="Food"
                        value={t('addtransaction.options.food')}
                      >
                        {t('addtransaction.options.food')}
                      </SelectOptions>
                      <SelectOptions
                        onClick={onOptionClick}
                        oper={input.operationType}
                        key="Development"
                        value={t('addtransaction.options.development')}
                      >
                        {t('addtransaction.options.development')}
                      </SelectOptions>
                      <SelectOptions
                        onClick={onOptionClick}
                        oper={input.operationType}
                        key="Children"
                        value={t('addtransaction.options.children')}
                      >
                        {t('addtransaction.options.children')}
                      </SelectOptions>
                      <SelectOptions
                        onClick={onOptionClick}
                        oper={input.operationType}
                        key="House"
                        value={t('addtransaction.options.house')}
                      >
                        {t('addtransaction.options.house')}
                      </SelectOptions>
                      <SelectOptions
                        onClick={onOptionClick}
                        oper={input.operationType}
                        key="Education"
                        value={t('addtransaction.options.education')}
                      >
                        {t('addtransaction.options.education')}
                      </SelectOptions>
                      <SelectOptions
                        onClick={onOptionClick}
                        oper={input.operationType}
                        key="Self care"
                        value={t('addtransaction.options.health')}
                      >
                        {t('addtransaction.options.health')}
                      </SelectOptions>
                      <SelectOptions
                        onClick={onOptionClick}
                        oper={input.operationType}
                        key="Children care"
                        value={t('addtransaction.options.children')}
                      >
                        {t('addtransaction.options.children')}
                      </SelectOptions>{' '}
                      <SelectOptions
                        onClick={onOptionClick}
                        oper={input.operationType}
                        key="Household product"
                        value={t('addtransaction.options.house')}
                      >
                        {t('addtransaction.options.house')}
                      </SelectOptions>{' '}
                      <SelectOptions
                        onClick={onOptionClick}
                        oper={input.operationType}
                        key="Laisure"
                        value={t('addtransaction.options.laisure')}
                      >
                        {t('addtransaction.options.laisure')}
                      </SelectOptions>{' '}
                      <SelectOptions
                        onClick={onOptionClick}
                        oper={input.operationType}
                        key="Basic expenses"
                        value={t('addtransaction.options.main')}
                      >
                        {t('addtransaction.options.main')}
                      </SelectOptions>
                      <SelectOptions
                        onClick={onOptionClick}
                        oper={input.operationType}
                        key="Other"
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
                        value={t('addtransaction.options.salary')}
                      >
                        {t('addtransaction.options.salary')}
                      </SelectOptions>
                      <SelectOptions
                        onClick={onOptionClick}
                        oper={input.operationType}
                        key="Bonus"
                        value={t('addtransaction.options.bonus')}
                      >
                        {t('addtransaction.options.bonus')}
                      </SelectOptions>
                      <SelectOptions
                        onClick={onOptionClick}
                        oper={input.operationType}
                        key="Other"
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
              required
              placeholder="0.00"
              value={input.sum}
              onChange={e =>
                setInput({ ...input, sum: Number(e.target.value) })
              }
            />
            <InputCalendarBox>
              <InputCalendar
                dateFormat={'dd.MM.yyyy'}
                selected={input.date}
                onChange={e => setInput({ ...input, date: e })}
              />
              <InputCalendarSVG />
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
