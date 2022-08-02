import { HashLoader } from 'react-spinners';
import { LoaderContainer } from './Loader.styled';
export const Loader = () => {
  return (
    <LoaderContainer>
      <HashLoader color="#1f38dd" />;
    </LoaderContainer>
  );
};
