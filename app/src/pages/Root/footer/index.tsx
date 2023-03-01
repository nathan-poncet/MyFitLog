import { Brand } from '@/components/data_display/brand';
import * as Styles from './index.styles';

function Footer() {
  return (
    <Styles.Root as="footer" maxWidth="xl">
      <Brand />
    </Styles.Root>
  );
}

export default Footer;
