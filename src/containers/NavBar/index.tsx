import classnames from 'classnames';

import * as React from 'react';
import {
    connect,
    MapDispatchToPropsFunction,
    MapStateToProps,
} from 'react-redux';
import { compose } from 'redux';
import { Dropdown } from 'react-bootstrap';

import { themeSwitcher } from '../../api/config';
import { languages } from '../../api/config';

import { Moon } from '../../assets/images/Moon';
import { Sun } from '../../assets/images/Sun';
import { colors } from '../../constants';
import {
    changeColorTheme,
    changeUserDataFetch,
    RootState,
    selectCurrentColorTheme,
    changeLanguage,
    selectCurrentLanguage,
    selectUserInfo,
    selectUserLoggedIn,
    User
} from '../../modules';

import enIcon from 'src/assets/images/sidebar/en.svg';
import ptIcon from 'src/assets/images/sidebar/pt.svg';

import {
    
    
    Buttons,
    
    
    Li,
  } from "./style";

import { HiLightBulb } from "react-icons/hi";

export interface ReduxProps {
    colorTheme: string;
    lang: string;
    user: User;
    isLoggedIn: boolean;


}

interface DispatchProps {
    changeColorTheme: typeof changeColorTheme;
    changeLanguage: typeof changeLanguage;

}

interface State {
    isOpenLanguage: boolean;
}

interface OwnProps {
    onLinkChange?: () => void;
    history: History;
    location: {
        pathnname: string;
    };
    changeUserDataFetch: typeof changeUserDataFetch;
}

type Props = OwnProps & ReduxProps & DispatchProps;

class NavBarComponent extends React.Component<Props> {

    public state = {
        isOpenLanguage: false,
    };

    public render() {
        const { colorTheme, lang } = this.props;
        const { isOpenLanguage } = this.state;

        const languageName = lang.toUpperCase();

        const languageClassName = classnames('dropdown-menu-language-field', {
            'dropdown-menu-language-field-active': isOpenLanguage,
        });


        if (themeSwitcher() !== 'visible') {
            return (


                <div className="btn-group pg-navbar__header-settings__account-dropdown-menu ">
                <Dropdown>
                    <Dropdown.Toggle variant="primary" id={languageClassName}>
                        <img src={this.getLanguageIcon(lang)} alt={lang} />
                        {/* <span className="dropdown-menu-language-selected">{languageName}</span> */}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>{this.getLanguageDropdownItems()}</Dropdown.Menu>
                </Dropdown>
            </div>



            )






        }

        return (
            <div className="pg-navbar">
                <div className="pg-navbar__header-settings">

                    
                    <div className="btn-group pg-navbar__header-settings__account-dropdown-menu ">
                        <Dropdown>
                            <Dropdown.Toggle variant="primary" id={languageClassName}>
                                <img src={this.getLanguageIcon(lang)} alt={lang} />
                                {/* <span className="dropdown-menu-language-selected">{languageName}</span> */}
                            </Dropdown.Toggle>
                            <Dropdown.Menu>{this.getLanguageDropdownItems()}</Dropdown.Menu>
                        </Dropdown>
                    </div>

                    <div >
                        {/* <div
                            className="pg-navbar__header-settings__switcher__items"
                            onClick={e => this.handleChangeCurrentStyleMode(colorTheme === 'light' ? 'dark' : 'light')}
                        >
                            {this.getLightDarkMode()}
                        </div> */}

                        <Buttons>
                            <Li to="" onClick={e => this.handleChangeCurrentStyleMode(colorTheme === 'light' ? 'dark' : 'light')}>
                                <HiLightBulb size={22} />
                            </Li>
                        </Buttons>

                    </div>
                </div>
                
            </div>
        );
    }

    private getLightDarkMode = () => {
        const { colorTheme } = this.props;

        if (colorTheme === 'dark') {
            return (
                <React.Fragment>
                    <div className="switcher-item">
                        <Sun fillColor={colors.light.navbar.sun}/>
                    </div>
                    <div className="switcher-item switcher-item--active">
                        <Moon fillColor={colors.light.navbar.moon}/>
                    </div>
                </React.Fragment>
            );
        }

        return (
            <React.Fragment>
                <div className="switcher-item switcher-item--active">
                    <Sun fillColor={colors.dark.navbar.sun}/>
                </div>
                <div className="switcher-item">
                    <Moon fillColor={colors.dark.navbar.moon}/>
                </div>
            </React.Fragment>
        );
    };

    private handleChangeCurrentStyleMode = (value: string) => {
        this.props.changeColorTheme(value);
    };

    public getLanguageDropdownItems = () => {
        return languages.map((l: string, index: number) => (
            <Dropdown.Item key={index} onClick={(e) => this.handleChangeLanguage(l)}>
                <div className="dropdown-row">
                    <img src={this.getLanguageIcon(l)} alt={l} />
                    <span>{l.toUpperCase()}</span>
                </div>
            </Dropdown.Item>
        ));
    };

    private getLanguageIcon = (name: string): string => {
        if (name === 'en') {
            return enIcon;
        } else {
            return ptIcon;
        }
    };


    private handleChangeLanguage = (language: string) => {
        const { user, isLoggedIn } = this.props;

        if (isLoggedIn) {
            const data = user.data && JSON.parse(user.data);

            if (data && data.language && data.language !== language) {
                const payload = {
                    ...user,
                    data: JSON.stringify({
                        ...data,
                        language,
                    }),
                };

                this.props.changeUserDataFetch({ user: payload });
            }
        }

        this.props.changeLanguage(language);
    };
}

const mapStateToProps: MapStateToProps<ReduxProps, {}, RootState> =
    (state: RootState): ReduxProps => ({
        colorTheme: selectCurrentColorTheme(state),
        lang: selectCurrentLanguage(state),
        user: selectUserInfo(state),
        isLoggedIn: selectUserLoggedIn(state),

        
    });

const mapDispatchToProps: MapDispatchToPropsFunction<DispatchProps, {}> =
    dispatch => ({
        changeColorTheme: payload => dispatch(changeColorTheme(payload)),
        changeLanguage: (payload) => dispatch(changeLanguage(payload)),
        changeUserDataFetch: (payload) => dispatch(changeUserDataFetch(payload)),
    });

export const NavBar = compose(
    connect(mapStateToProps, mapDispatchToProps),
)(NavBarComponent) as any;
