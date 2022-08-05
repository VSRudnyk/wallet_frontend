import { InputContainer, Base } from '../Form.styled';
import { ButtonShowAndHide } from './ButtonShow';
export const PasswordInput = ({ onInput, password }) => {
  function lengthConfig() {
    const passLength = password.length;
    if (passLength >= 6 && passLength < 12) {
      const x = '33%';
      return x;
    }
    return '0%';
  }
  console.log(lengthConfig());

  function numberConfig() {
    const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    for (const number of numbers) {
      if (password.includes(number)) {
        const y = '33%';
        return y;
      }
    }
    return '0%';
  }

  console.log(numberConfig());
  function lettersConfig() {
    const letters = [
      'A',
      'E',
      'I',
      'O',
      'U',
      'B',
      'C',
      'D',
      'F',
      'G',
      'H',
      'J',
      'K',
      'L',
      'M',
      'N',
      'P',
      'Q',
      'R',
      'S',
      'T',
      'V',
      'X',
      'Z',
      'W',
      'Y',
    ];

    for (const letter of letters) {
      if (password.includes(letter)) {
        const c = '33%';
        return c;
      }
    }
    return '0%';
  }
  console.log(lettersConfig());
  // const progressWidth = (num) => {

  //   switch (num) {
  //     case 0:
  //       return '33%';
  //     case 1:
  //       return '66%';
  //     case 2:
  //       return '100%';
  //     default:
  //       return '0';
  //   }
  // };

  function widthProgress() {
    console.log(lengthConfig(), lettersConfig(), numberConfig());
    const widthProgres = `calc(${lengthConfig()} + ${lettersConfig()} + ${numberConfig()} )`;
    console.log(widthProgres);
    return widthProgres;
  }

  return (
    <InputContainer>
      <ButtonShowAndHide onInput={onInput} password={password} />
      <Base style={{ width: widthProgress() }} password={password} />
    </InputContainer>
  );
};
