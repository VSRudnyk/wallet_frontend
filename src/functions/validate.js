import { Notify } from 'notiflix/build/notiflix-notify-aio';

export const rules = (arr) => {
  console.log(typeof(arr.sum))
    if( Number.parseFloat(arr.sum)  < 0 || Number.parseFloat(arr.sum) === 0 || arr.sum === '' ) {    
      Notify.failure('Plese enter correct amount'); 
      return false;
    }

    if(!arr.date) {
      Notify.failure('Data is not correct'); 
      return false;
    }
  
    if( arr.category === '') {
      Notify.failure('Please select category of operation'); 
      return false;
    }
    return true;
  }


        
