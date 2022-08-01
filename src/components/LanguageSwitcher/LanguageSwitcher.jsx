import { useTranslation } from 'react-i18next';
import { Button } from './LanguageSwitcher.styled';
const lngs = {
  en: { nativeName: 'English' },
  ua: { nativeName: 'Українська' },
};

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  return (
    <div>
      {Object.keys(lngs).map(lng => (
        <Button
          key={lng}
          type="submit"
          onClick={() => i18n.changeLanguage(lng)}
        >
          {lngs[lng].nativeName}
        </Button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
