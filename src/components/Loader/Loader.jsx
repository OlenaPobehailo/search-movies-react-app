import { PropagateLoader } from 'react-spinners';
import { LoaderWrapper } from './Loader.styled';

const Loader = () => {
  return (
    <LoaderWrapper>
      <PropagateLoader color="goldenrod" />
    </LoaderWrapper>
  );
};

export default Loader;
