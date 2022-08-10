import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useLogoutMutation } from 'redux/authOperation';
import Media from 'react-media';
import Notiflix from 'notiflix';

import { ReactComponent as SettingsIcon } from '../../assets/images/settings-icon.svg';
import { ReactComponent as LanguageIcon } from '../../assets/images/language-switch.svg';
import { ReactComponent as ExitIcon } from '../../assets/images/Exit.svg';

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
  es: { nativeName: 'Español' },
};

const Settings = () => {
  const [isDropDownOpen, setIsDropDowOpen] = useState(false);
  const [isSlideLeftOpen, setIsSlideLeftOpen] = useState(false);
  const [logout] = useLogoutMutation();

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
      e.target.id !== 'es' &&
      e.target.id !== 'langs' &&
      e.target.id !== 'Capa_1' &&
      e.target.id !== 'logout' &&
      e.target.id !== 'exit-icon'
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
  const promptBeforeExit = () => {
    Notiflix.Confirm.show(
      t('exitprompt.wallet'),
      t('exitprompt.confirm'),
      t('exitprompt.cancel'),
      t('exitprompt.exit'),
      function cancelCb() {
        Notiflix.Confirm.show(false);
      },
      function okCb() {
        logout();
      }
    );
  };
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
                      <LangBtn
                        type="button"
                        id="logout"
                        onClick={promptBeforeExit}
                      >
                        {t('settingsComponent.exit')}
                        <ExitIcon
                          style={{ width: '18px', marginLeft: 'auto' }}
                          id="exit-icon"
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
