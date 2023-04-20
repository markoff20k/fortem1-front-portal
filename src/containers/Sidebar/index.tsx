import classnames from 'classnames';
import { History } from 'history';
import * as React from 'react';
import { Dropdown } from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';
import { connect, MapDispatchToPropsFunction } from 'react-redux';
import { Link, RouteProps, withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { languages } from '../../api/config';
import { LogoutIcon } from '../../assets/images/sidebar/LogoutIcon';
import { ProfileIcon } from '../../assets/images/sidebar/ProfileIcon';
import { SidebarIcons } from '../../assets/images/sidebar/SidebarIcons';
import { pgRoutes } from '../../constants';
import {
    changeLanguage,
    changeUserDataFetch,
    logoutFetch,
    Market,
    RootState,
    selectCurrentColorTheme,
    selectCurrentLanguage,
    selectCurrentMarket,
    selectSidebarState,
    selectUserInfo,
    selectUserLoggedIn,
    toggleSidebar,
    selectAbilities,
    AbilitiesInterface,
    User,
} from '../../modules';
import enIcon from 'src/assets/images/sidebar/en.svg';
import ptIcon from 'src/assets/images/sidebar/pt.svg';

interface State {
    isOpenLanguage: boolean;
}

interface DispatchProps {
    changeLanguage: typeof changeLanguage;
    toggleSidebar: typeof toggleSidebar;
    logoutFetch: typeof logoutFetch;
}

interface ReduxProps {
    lang: string;
    colorTheme: string;
    isLoggedIn: boolean;
    currentMarket: Market | undefined;
    isActive: boolean;
    user: User;
    abilities: AbilitiesInterface;
}

interface OwnProps {
    onLinkChange?: () => void;
    history: History;
    location: {
        pathnname: string;
    };
    changeUserDataFetch: typeof changeUserDataFetch;
}

type Props = OwnProps & ReduxProps & RouteProps & DispatchProps;

class SidebarContainer extends React.Component<Props, State> {
    public state = {
        isOpenLanguage: false,
    };

    public componentWillReceiveProps(nextProps: Props) {
        if (this.props.location.pathname !== nextProps.location.pathname && nextProps.isActive) {
            this.props.toggleSidebar(true);
        }
    }

    public render() {
        const { isLoggedIn, isActive, lang } = this.props;
        const { isOpenLanguage } = this.state;

        const address = this.props.history.location ? this.props.history.location.pathname : '';
        const languageName = lang.toUpperCase();

        const languageClassName = classnames('dropdown-menu-language-field', {
            'dropdown-menu-language-field-active': isOpenLanguage,
        });

        const sidebarClassName = classnames('pg-sidebar-wrapper', {
            'pg-sidebar-wrapper--active': isActive,
            'pg-sidebar-wrapper--hidden': !isActive,
        });

        if (isLoggedIn) (this.props.toggleSidebar(true));

        return (
            <div className={sidebarClassName}>
                {this.renderProfileLink()}
                <div className="pg-sidebar-wrapper-nav">{pgRoutes(isLoggedIn, this.props.abilities).map(this.renderNavItems(address))}</div>
                {this.renderLogout()}
            </div>
        );
    }

    public renderNavItems = (address: string) => (values: string[], index: number) => {
        const { currentMarket } = this.props;

        const [name, url, img] = values;
        const handleLinkChange = () => this.props.toggleSidebar(false);
        const path = url.includes('/trading') && currentMarket ? `/trading/${currentMarket.id}` : url;
        const isActive = (url === '/trading/' && address.includes('/trading')) || address === url;

        const iconClassName = classnames('pg-sidebar-wrapper-nav-item-img', {
            'pg-sidebar-wrapper-nav-item-img--active': isActive,
        });

        return (
            <Link to={path} key={index} onClick={handleLinkChange} className={`${isActive && 'route-selected'}`}>
                <div className="pg-sidebar-wrapper-nav-item">
                    <div className="pg-sidebar-wrapper-nav-item-img-wrapper">
                        <SidebarIcons className={iconClassName} name={img} />
                    </div>
                    <p className="pg-sidebar-wrapper-nav-item-text">
                        <FormattedMessage id={name} />
                    </p>
                </div>
            </Link>
        );
    };

    public renderProfileLink = () => {
        const { isLoggedIn, location } = this.props;
        const handleLinkChange = () => this.props.toggleSidebar(false);
        const address = location ? location.pathname : '';
        const isActive = address === '/profile';

        const iconClassName = classnames('pg-sidebar-wrapper-nav-item-img', {
            'pg-sidebar-wrapper-nav-item-img--active': isActive,
        });

        return (
            isLoggedIn && (
                <div className="pg-sidebar-wrapper-profile">
                    {/* <Link to="/profile" onClick={handleLinkChange} className={`${isActive && 'route-selected'}`}> */}
                        <div className="pg-sidebar-wrapper-profile-area">
                            {/* <ProfileIcon className={iconClassName} /> */}
                            <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 25C0 11.1929 11.1929 0 25 0H45C58.8071 0 70 11.1929 70 25V45C70 58.8071 58.8071 70 45 70H25C11.1929 70 0 58.8071 0 45V25Z" fill="url(#paint0_linear_239_14235)"/>
                                <defs>
                                <linearGradient id="paint0_linear_239_14235" x1="64" y1="-5.5" x2="-8.50001" y2="96" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#F4D9A5"/>
                                <stop offset="0.708333" stop-color="#20806F"/>
                                </linearGradient>
                                </defs>
                            </svg>
                            <p className="pg-sidebar-wrapper-profile-area-text-name">
                                {/* <FormattedMessage id={'page.header.navbar.profile'} /> */}
                                {/* {this.props.user.username} */}
                                Jeferson Martin
                            </p>
                            <p className="pg-sidebar-wrapper-profile-area-text-verified">
                                {/* <FormattedMessage id={'page.header.navbar.profile'} /> */}
                                Verificado 
                                <span>
                                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_152_16557)">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M9.73225 1.43743L7.39367 0.138916L5.05504 1.43743L2.4832 2.17289L1.74773 4.74474L0.449219 7.08336L1.74773 9.42196L2.4832 11.9938L5.05504 12.7293L7.39367 14.0278L9.73225 12.7293L12.3042 11.9938L13.0396 9.42196L14.3381 7.08336L13.0396 4.74474L12.3042 2.17289L9.73225 1.43743ZM10.8012 5.5458C11.1026 5.19801 11.065 4.67171 10.7172 4.37028C10.3694 4.06886 9.84308 4.10646 9.54167 4.45425L6.56033 7.89429L5.24563 6.37733C4.9442 6.02953 4.41791 5.99194 4.07011 6.29336C3.72232 6.59478 3.68472 7.12108 3.98614 7.46888L5.93059 9.71246C6.08888 9.89513 6.31865 10 6.56033 10C6.80201 10 7.03178 9.89513 7.19007 9.71246L10.8012 5.5458Z" fill="#0CAF60"/>
                                        </g>
                                        <defs>
                                        <clipPath id="clip0_152_16557">
                                        <rect width="15" height="15" fill="white"/>
                                        </clipPath>
                                        </defs>
                                    </svg>
                                </span>
                            </p>
                            <p className="pg-sidebar-wrapper-profile-area-text-account">
                                {/* <FormattedMessage id={'page.header.navbar.profile'} /> */}
                                Conta: <span className='pg-sidebar-wrapper-profile-area-text-fid'>{this.props.user.uid}</span>
                            </p>


                        </div>

                    {/* </Link> */}
                </div>
            )
        );
    };

    public renderLogout = () => {
        const { isLoggedIn } = this.props;
        if (!isLoggedIn) {
            return null;
        }

        return (
            <div className="pg-sidebar-wrapper-logout">
                <div className="pg-sidebar-wrapper-logout-link" onClick={this.props.logoutFetch}>
                    {/* <LogoutIcon className="pg-sidebar-wrapper-logout-link-img" /> */}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="22px" className='text-danger pg-sidebar-wrapper-logout-link-img'>
                        <path fill="#ff3d60" d="M53.42 32.299a21.42 21.42 0 1 1-36.24-15.47 2 2 0 0 1 2.77 2.887 17.42 17.42 0 1 0 24.102 0 2 2 0 0 1 2.77-2.887A21.253 21.253 0 0 1 53.42 32.3ZM32 35.045a2 2 0 0 0 2-2V12.279a2 2 0 0 0-4 0v20.766a2 2 0 0 0 2 2Z"/>
                    </svg>
                    
                    <p className="pg-sidebar-wrapper-logout-link-text">
                        <FormattedMessage id={'page.body.profile.content.action.logout'} />
                    </p>
                </div>
            </div>
        );
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
        if (name === 'pt') {
            return ptIcon;
        } else {
            return enIcon;
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

const mapStateToProps = (state: RootState): ReduxProps => ({
    colorTheme: selectCurrentColorTheme(state),
    isLoggedIn: selectUserLoggedIn(state),
    currentMarket: selectCurrentMarket(state),
    lang: selectCurrentLanguage(state),
    isActive: selectSidebarState(state),
    abilities: selectAbilities(state),
    user: selectUserInfo(state),
});

const mapDispatchToProps: MapDispatchToPropsFunction<DispatchProps, {}> = (dispatch) => ({
    changeLanguage: (payload) => dispatch(changeLanguage(payload)),
    toggleSidebar: (payload) => dispatch(toggleSidebar(payload)),
    logoutFetch: () => dispatch(logoutFetch()),
    changeUserDataFetch: (payload) => dispatch(changeUserDataFetch(payload)),
});

export const Sidebar = compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps)
)(SidebarContainer) as React.ComponentClass;
