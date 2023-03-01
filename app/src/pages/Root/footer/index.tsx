import { Brand } from '@/components/data_display/brand';
import * as Styles from './index.styles';

function Footer() {
  return (
    <footer>
      <Styles.Root maxWidth="xl">
        <Brand />
      </Styles.Root>
    </footer>
  );
}

export default Footer;
