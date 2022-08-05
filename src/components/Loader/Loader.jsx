import { HashLoader } from 'react-spinners';
import { LoaderContainer } from './Loader.styled';
export const Loader = ({ color, size }) => {
  return (
    <LoaderContainer>
      {/* <HashLoader color="#1f38dd" size={150} /> */}
      <HashLoader color={color} size={size} />
    </LoaderContainer>
  );
};
