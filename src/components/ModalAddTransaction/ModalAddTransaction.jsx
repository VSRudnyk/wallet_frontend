import style from './ModalAddTransactions.module.css'
import {ReactComponent as Close} from './close.svg'

const ModalAddTransactions = () => {
    return(
        <div className={style.backDrop}>
            <div className={style.modal}>
                <button className={style.buttonClose}>{<Close className={style.buttonClose__svg} />}</button>
                <p className={style.modal__name}>Add transaction</p>
               
                <div className={style.switch__box}>
                    <span className={style.switch__income}>Income</span>
                    <label className="switch">
                    <div className={style.switch__case}>
                        <div className={style.switch__button}> 
                            <div className={style.switch__buttonVert}></div>
                            <div className={style.switch__buttonGor}></div>                                           
                          {/*   <input type="checkbox" className={style.checkbox}/> */}
                        </div>
                    </div>
                    
                    </label>
                    <span className={style.switch__expense}>Expense</span>
                    </div>
                    
                <div className={style.inputs__box}>
                    <input type="text"
                        placeholder='0.00' 
                        className={style.input__quntity} />
                   
                    <input type="text" 
                        className={style.input__calendar}/>
                   
                    <input type="text" 
                    className={style.input__comment}
                    placeholder="Comment"/>
                </div>
                <button className={style.button__add}>Add</button>
                <button className={style.button__close}>Cancel</button>
            </div>
        </div>)
}

export default ModalAddTransactions;