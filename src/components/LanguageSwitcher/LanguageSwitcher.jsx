import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';
import {
  Button,
  BtnWrapper,
  DropDown,
  List,
  ListItem,
  LangBtn,
} from './LanguageSwitcher.styled';
import { ReactComponent as LangIcon } from './language-switch.svg';

const lngs = {
  en: { nativeName: 'English' },
  ua: { nativeName: 'Українська' },
};

const LanguageSwitcher = () => {
  const [isDropDownOpen, setIsDropDowOpen] = useState(false);

  const { i18n } = useTranslation();
  useEffect(() => {
    window.addEventListener('mousedown', handleClickOutside);
    return () => {
      window.removeEventListener('mousedown', handleClickOutside);
    };
  });

  const handleClickOutside = e => {
    console.log(e.target);
    if (e.target.id !== 'en' && e.target.id !== 'ua') {
      setIsDropDowOpen(false);
    }
  };
  const langBtnHandler = lng => {
    i18n.changeLanguage(lng);
    setIsDropDowOpen(false);
  };

  return (
    <BtnWrapper>
      <Button>
        <LangIcon
          style={{ width: '18px' }}
          onClick={() => setIsDropDowOpen(state => !state)}
        />
      </Button>
      {isDropDownOpen && (
        <DropDown>
          <List>
            {Object.keys(lngs).map(lng => (
              <ListItem key={lng}>
                <LangBtn
                  id={lng}
                  type="submit"
                  onClick={() => langBtnHandler(lng)}
                >
                  {lngs[lng].nativeName}
                </LangBtn>
              </ListItem>
            ))}
          </List>
        </DropDown>
      )}
    </BtnWrapper>
  );
};

export default LanguageSwitcher;
