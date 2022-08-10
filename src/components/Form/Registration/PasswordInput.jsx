import { InputContainer, Base } from '../Form.styled';
import { ButtonShowAndHide } from './ButtonShow';

export const PasswordInput = ({ onInput, password }) => {
  function lengthConfig() {
    const passLength = password.length;
    if (passLength >= 6 && passLength <= 12) {
      const x = '25%';
      return x;
    }
    return '0%';
  }

  function numberConfig() {
    const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    for (const number of numbers) {
      if (password.includes(number)) {
        const y = '25%';
        return y;
      }
    }
    return '0%';
  }

  function lettersLoweCase() {
    const lowerLetters = [
      'a',
      'b',
      'c',
      'd',
      'e',
      'f',
      'g',
      'h',
      'i',
      'j',
      'k',
      'l',
      'm',
      'n',
      'o',
      'p',
      'q',
      'r',
      's',
      't',
      'u',
      'v',
      'w',
      'x',
      'y',
      'z',
    ];

    for (const letter of lowerLetters) {
      if (password.includes(letter)) {
        const c = '25%';
        return c;
      }
    }
    return '0%';
  }

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
        const c = '25%';
        return c;
      }
    }
    return '0%';
  }

  function widthProgress() {
    const widthProgres = `calc(${lengthConfig()} + ${lettersConfig()} + ${numberConfig()} + ${lettersLoweCase()} )`;
    return widthProgres;
  }

  const width = widthProgress();

  function progressColor() {
    switch (width) {
      case 'calc(0% + 0% + 0% + 25% )':
        return '#d40000';
      case 'calc(0% + 0% + 25% + 0% )':
        return '#d40000';
      case 'calc(25% + 0% + 0% + 0% )':
        return '#d40000';
      case 'calc(0% + 25% + 0% + 0% )':
        return '#d40000';

      case 'calc(0% + 0% + 25% + 25% )':
        return '#f5a401';
      case 'calc(0% + 25% + 25% + 0% )':
        return '#f5a401';
      case 'calc(25% + 25% + 0% + 0% )':
        return '#f5a401';
      case 'calc(0% + 25% + 0% + 25% )':
        return '#f5a401';
      case 'calc(25% + 0% + 25% + 0% )':
        return '#f5a401';
      case 'calc(25% + 0% + 0% + 25% )':
        return '#f5a401';

      case 'calc(25% + 25% + 25% + 0% )':
        return '#ffff09';
      case 'calc(0% + 25% + 25% + 25% )':
        return '#ffff09';
      case 'calc(25% + 25% + 0% + 25% )':
        return '#ffff09';
      case 'calc(25% + 0% + 25% + 25% )':
        return '#ffff09';

      case 'calc(25% + 25% + 25% + 25% )':
        return '#3eba11';
      default:
        return 'none';
    }
  }

  return (
    <InputContainer>
      <ButtonShowAndHide onInput={onInput} password={password} />
      <Base
        style={{ width: widthProgress(), background: progressColor() }}
        password={password}
      />
    </InputContainer>
  );
};
