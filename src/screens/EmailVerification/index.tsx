import { History } from 'history';
import * as React from 'react';
import {Button, Spinner} from 'react-bootstrap';
import {
    injectIntl,
} from 'react-intl';
import { connect, MapStateToProps } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { captchaType } from '../../api/config';
import { IntlProps } from '../../';
import { Captcha } from '../../components';
import { EMAIL_REGEX, setDocumentTitle } from '../../helpers';
import {
    emailVerificationFetch,
    GeetestCaptchaResponse,
    resetCaptchaState,
    RootState,
    selectCaptchaResponse,
    selectCurrentLanguage,
    selectGeetestCaptchaSuccess,
    selectMobileDeviceState,
    selectRecaptchaSuccess,
    selectSendEmailVerificationError,
    selectSendEmailVerificationLoading,
    selectSendEmailVerificationSuccess,
    selectUserInfo,
    User,
} from '../../modules';
import { CommonError } from '../../modules/types';

import logo from '../../assets/images/logo-icon-dark.svg';

import { Redirect } from 'react-router';



interface OwnProps {
    history: History;
    location: {
        state: {
            email: string;
        };
    };
    success: boolean;
    error?: CommonError;
}

interface DispatchProps {
    emailVerificationFetch: typeof emailVerificationFetch;
    resetCaptchaState: typeof resetCaptchaState;
}

interface ReduxProps {
    emailVerificationLoading: boolean;
    isMobileDevice: boolean;
    captcha_response?: string | GeetestCaptchaResponse;
    reCaptchaSuccess: boolean;
    geetestCaptchaSuccess: boolean;
    user: User;
}

type Props = DispatchProps & ReduxProps & OwnProps & IntlProps;

class EmailVerificationComponent extends React.Component<Props> {
    public componentDidMount() {
        setDocumentTitle('Confirmação');


        if (!this.props.location.state) {
            this.props.history.push('/signin');
        }
    }

    public translate = (id: string) => this.props.intl.formatMessage({ id });

    


    public renderCaptcha = () => {
        const { error, success } = this.props;

        return (
            <Captcha
                error={error}
                success={success}
            />
        );
    };

   

    public render() {
        const { emailVerificationLoading, isMobileDevice } = this.props;

        const title = this.props.intl.formatMessage({ id: 'page.header.signUp.modal.header' });
        const text = this.props.intl.formatMessage({ id: 'page.header.signUp.modal.body' });
        const text2 = this.props.intl.formatMessage({ id: 'page.header.signUp.modal.body2' });
        const button = this.props.intl.formatMessage({ id: 'page.resendConfirmation' });
        const button2 = this.props.intl.formatMessage({ id: 'page.header.signIn' });

        
        // const renderLogIn = () => {
        //     return (

        //     );
        // };


        return (
            <div className="pg-emailverification-container">
                <div className="pg-emailverification">
                    <div className="pg-emailverification-title"> <img className="cr-sign-in-form__image" src={logo} alt="logo" /> </div>
                    
                    <div className="pg-emailverification-body">
                        <div className="pg-emailverification-body-text">{text}</div>
                        <div className="pg-emailverification-body-text">{text2}</div>
                        {this.renderCaptcha()}
                        {
                            !isMobileDevice && (
                                <div className="pg-emailverification-body-container">
                                    {emailVerificationLoading ? <Spinner animation="border" variant="primary"/> :
                                        <div className="pg-emailverification-body-container-button">
                                            <Button
                                                block={true}
                                                type="button"
                                                onClick={this.handleClick}
                                                size="lg"
                                                variant="primary"
                                                disabled={this.disableButton()}>{button}
                                            </Button>
                                            {/* <hr style={{color: 'beige', backgroundColor: '#555555', borderRadius: '15px', marginTop: '20px', marginBottom: '20px', height: '2px'}} /> */}
                                            
                                            {/* {renderLogIn()} */}
                                            <div className="redirect-login">
                    
                        {this.props.intl.formatMessage({ id: 'page.header.signUp.alreadyConfirmed' })}
                        <span onClick={() => this.props.history.push('/signin')} className="pg-sign-up-screen__login-button">
                            {this.props.intl.formatMessage({ id: 'page.mobile.header.signIn' })}
                        </span>
                    
                </div>
                                            {/* <Button
                                                block={true}
                                                type="button"
                                                onClick={this.handleRedirect}
                                                size="lg"
                                                variant="primary"
                                                disabled={false}>{button2}
                                            </Button>    */}
                                            
                                                
                                            


                                        </div>}
                                </div>)
                        }
                        

                        
                        {isMobileDevice &&
                            (<div className="pg-emailverification-body-container">
                              <Button
                                block={true}
                                type="button"
                                onClick={this.handleClick}
                                size="lg"
                                variant="primary"
                              >
                                  {this.props.intl.formatMessage({ id:  'page.mobile.reset.header' })}
                              </Button>
                            </div>)
                        }
                    </div>
                </div>
            </div>
        );
    }

    private handleClick = () => {
        const { captcha_response } = this.props;

        switch (captchaType()) {
            case 'recaptcha':
            case 'geetest':
                this.props.emailVerificationFetch({
                    email: this.props.location.state.email,
                    captcha_response,
                });
                break;
            default:
                this.props.emailVerificationFetch({
                    email: this.props.location.state.email,
                });
                break;
        }

        this.props.resetCaptchaState();
    };

    private handleRedirect = () => {
        return (
            
            this.props.history.push('/signin');        
            
            );        
            
        
    };

    

    private disableButton = (): boolean => {
        const {
            location,
            geetestCaptchaSuccess,
            reCaptchaSuccess,
        } = this.props;
        const captchaTypeValue = captchaType();

        if (location.state && location.state.email && !location.state.email.match(EMAIL_REGEX)) {
            return true;
        }

        if (captchaTypeValue === 'recaptcha' && !reCaptchaSuccess) {
            return true;
        }

        if (captchaTypeValue === 'geetest' && !geetestCaptchaSuccess) {
            return true;
        }

        return false;
    };
}

const mapStateToProps: MapStateToProps<ReduxProps, {}, RootState> = state => ({
    emailVerificationLoading: selectSendEmailVerificationLoading(state),
    i18n: selectCurrentLanguage(state),
    isMobileDevice: selectMobileDeviceState(state),
    error: selectSendEmailVerificationError(state),
    success: selectSendEmailVerificationSuccess(state),
    captcha_response: selectCaptchaResponse(state),
    reCaptchaSuccess: selectRecaptchaSuccess(state),
    geetestCaptchaSuccess: selectGeetestCaptchaSuccess(state),
    user: selectUserInfo(state),
});

const mapDispatchToProps = {
    emailVerificationFetch,
    resetCaptchaState,
};

export const EmailVerificationScreen = compose(
    injectIntl,
    withRouter,
    connect(mapStateToProps, mapDispatchToProps),
)(EmailVerificationComponent) as React.ComponentClass;
