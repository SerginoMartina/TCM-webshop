import { Flex } from '@chakra-ui/react'; // Removed BoxProps as it's not used in the corrected code
import { useTranslation } from 'next-i18next';
import Link from 'next/link';

import { LanguageSelector } from '@src/components/features/language-selector';

export const HEADER_HEIGHT = 60;

export const Header = () => {
  const { t } = useTranslation();

  return (
    <Flex
      as="nav"
      justifyContent="space-between"
      align="center"
      pl={{ base: 4, md: 12, lg: 12 }}
      pr={{ base: 4, md: 12, lg: 12 }}
      height={`${HEADER_HEIGHT}px`}
      zIndex="2">
      <Link href="/" title={t('common.homepage')}>
        <div style="Fontsize: 40px;">TCM</div>
      </Link>
      <LanguageSelector />
    </Flex>
  );
};
