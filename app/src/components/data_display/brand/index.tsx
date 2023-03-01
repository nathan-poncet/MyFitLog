import { styled } from '@mui/system';
import { Link } from 'react-router-dom';
import * as Styles from './index.styles';

export const Brand = () => {
  return (
    <Link to={`/`}>
      <Styles.Container variant="h5" variantMapping={{ h5: 'p' }}>
        <span>MyFit</span>Log
      </Styles.Container>
    </Link>
  );
};
