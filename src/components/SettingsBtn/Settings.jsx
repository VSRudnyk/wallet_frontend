import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Media from 'react-media';

import { ReactComponent as SettingsIcon } from '../../images/settings-icon.svg';
import { ReactComponent as LanguageIcon } from '../../images/language-switch.svg';
import { ReactComponent as ExitIcon } from '../../images/Exit.svg';

import {
  SettingsBtnWrapper,
  Button,
  DropDown,
  List,
  ListItem,
  LangBtn,
  SlideLeft,
} from './Settings.styled';

const lngs = {
  en: { nativeName: 'English' },
  ua: { nativeName: 'Українська' },
};

const Settings = () => {
  const [isDropDownOpen, setIsDropDowOpen] = useState(false);
  const [isSlideLeftOpen, setIsSlideLeftOpen] = useState(false);

  const { t, i18n } = useTranslation();

  useEffect(() => {
    window.addEventListener('mousedown', handleClickOutside);
    return () => {
      window.removeEventListener('mousedown', handleClickOutside);
    };
  });
  const handleClickOutside = e => {
    if (
      e.target.id !== 'en' &&
      e.target.id !== 'ua' &&
      e.target.id !== 'langs' &&
      e.target.id !== 'Capa_1' &&
      e.target.id !== 'lang_btn'
    ) {
      setIsDropDowOpen(false);
      setIsSlideLeftOpen(false);
    }
  };

  const langBtnHandler = lng => {
    i18n.changeLanguage(lng);
    setIsDropDowOpen(false);
    setIsSlideLeftOpen(false);
  };
  const menuBtnList = Object.keys(lngs).map(lng => (
    <ListItem key={lng}>
      <LangBtn id={lng} type="submit" onClick={() => langBtnHandler(lng)}>
        {lngs[lng].nativeName}
      </LangBtn>
    </ListItem>
  ));
  return (
    <Media queries={{ mobile: { maxWidth: 767 } }}>
      {matches =>
        matches.mobile ? (
          <SettingsBtnWrapper>
            <Button onClick={() => setIsDropDowOpen(state => !state)}>
              <SettingsIcon />
            </Button>
            {isDropDownOpen && (
              <>
                <DropDown visibility={isDropDownOpen.toString()}>
                  <List>
                    <ListItem>
                      <LangBtn
                        id="langs"
                        onClick={() => setIsSlideLeftOpen(state => !state)}
                      >
                        {t('settingsComponent.language')}
                        <LanguageIcon
                          style={{ width: '18px', marginLeft: 'auto' }}
                        />
                      </LangBtn>
                    </ListItem>
                    <ListItem>
                      <LangBtn>
                        <span>{t('settingsComponent.exit')}</span>
                        <ExitIcon
                          style={{ width: '18px', marginLeft: 'auto' }}
                        />
                      </LangBtn>
                    </ListItem>
                  </List>
                </DropDown>
                <SlideLeft visible={isSlideLeftOpen}>
                  <List>{isSlideLeftOpen && menuBtnList}</List>
                </SlideLeft>
              </>
            )}
          </SettingsBtnWrapper>
        ) : (
          <SettingsBtnWrapper>
            <Button onClick={() => setIsDropDowOpen(state => !state)}>
              <LanguageIcon id="lang_btn" />
            </Button>
            <DropDown visibility={isDropDownOpen.toString()}>
              <List>{isDropDownOpen && menuBtnList}</List>
            </DropDown>
          </SettingsBtnWrapper>
        )
      }
    </Media>
  );
};
export default Settings;
