import { HashLoader } from 'react-spinners';
import { LoaderContainer } from './Loader.styled';
export const Loader = ({ color, size }) => {
  return (
    <LoaderContainer>
      <HashLoader color={color} size={size} />
    </LoaderContainer>
  );
};
