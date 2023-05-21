import { History } from 'history';
import * as React from 'react';
import { Button, OverlayTrigger } from 'react-bootstrap';
import {
    FormattedMessage,
    injectIntl,
} from 'react-intl';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { ProfileTwoFactorAuth } from '../';
import { IntlProps } from '../../';
import { kycSteps } from '../../api';
import { CloseIcon } from '../../assets/images/CloseIcon';
import { CheckBigIcon } from '../../assets/images/kyc/CheckBigIcon';
import { ClocksIcon } from '../../assets/images/kyc/ClocksIcon';
import { CrossIcon } from '../../assets/images/kyc/CrossIcon';
import { ChangePassword, CodeVerification, Modal, Tooltip } from '../../components';
import { is2faValid } from 'src/helpers';
import {
    entropyPasswordFetch,
    Label,
    labelFetch,
    RootState,
    selectCurrentPasswordEntropy,
    selectLabelData,
    selectMobileDeviceState,
    selectUserInfo,
    User,
} from '../../modules';
import {
    changePasswordFetch,
    selectChangePasswordSuccess,
    toggle2faFetch,
} from '../../modules/user/profile';


interface ReduxProps {
    labels: Label[];
    user: User;
    passwordChangeSuccess?: boolean;
    currentPasswordEntropy: number;
    isMobile: boolean;
}

interface RouterProps {
    history: History;
}

interface OnChangeEvent {
    target: {
        value: string;
    };
}

interface DispatchProps {
    changePassword: typeof changePasswordFetch;
    clearPasswordChangeError: () => void;
    toggle2fa: typeof toggle2faFetch;
    fetchCurrentPasswordEntropy: typeof entropyPasswordFetch;
    labelFetch: typeof labelFetch;
}

interface ProfileProps {
    showModal: boolean;
}

interface State {
    showChangeModal: boolean;
    showModal: boolean;
    code2FA: string;
    code2FAFocus: boolean;
}

type Props = ReduxProps & DispatchProps & RouterProps & ProfileProps & IntlProps & OnChangeEvent;

class ProfileSecurityComponent extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            showChangeModal: false,
            showModal: false,
            code2FA: '',
            code2FAFocus: false,
        };
    }

    public componentDidMount() {
        this.props.labelFetch();
    }

    public componentWillReceiveProps(next: Props) {
        if (next.passwordChangeSuccess) {
            this.setState({ showChangeModal: false });
        }
    }

    public render() {
        const { labels, currentPasswordEntropy } = this.props;

        const modal = this.state.showChangeModal ? (
            <div className="cr-modal">
              <form className="cr-email-form">
                <div className="pg-change-password-screen">
                   <ChangePassword
                        handleChangePassword={this.props.changePassword}
                        title={this.props.intl.formatMessage({ id: 'page.body.profile.header.account.content.password.change' })}
                        closeModal={this.toggleChangeModal}
                        currentPasswordEntropy={currentPasswordEntropy}
                        fetchCurrentPasswordEntropy={this.props.fetchCurrentPasswordEntropy}
                    />
                </div>
              </form>
            </div>
        ) : null;

        return (
            
            
                    <div className="pg-profile-page__security">
                        {/* <div className="pg-profile-page-header">{this.props.intl.formatMessage({id: 'page.body.profile.tabs.security'})}</div> */}
                        <div className="pg-profile-page__box pg-profile-page__left-col__basic">
                            <div className="pg-profile-page__row">
                                <div>
                                    <div className="pg-profile-page__label">
                                        {this.props.intl.formatMessage({ id: 'page.body.profile.header.account.content.password'})}
                                    </div>
                                    <div style={{color: 'var(--input-text-color)', fontSize: '14pxpx'}}>
                                        A segurança dos seus dados é muito importante para nós. Por isso, recomendamos
                                        <br/>
                                        que você altere sua senha a cada 3 meses para evitar acessos não autorizados à sua conta.
                                    </div>
                                </div>
                                <Button
                                    className="btn-change"
                                    onClick={this.toggleChangeModal}
                                    size="lg"
                                    variant="change"
                                >
                                    {this.props.intl.formatMessage({ id: 'page.body.profile.header.account.content.password.button.change'})}
                                </Button>
                                {modal}
                            </div>
                            {this.renderProfileTwoFactor()}
                            <Modal
                                className="pg-profile-page__disable-2fa-modal"
                                show={this.state.showModal}
                                header={this.renderModalHeader()}
                                content={this.renderModalBody()}
                                footer={this.renderModalFooter()}
                            />
                        </div>
                    </div>
                

        );
    }

        private renderProfileTwoFactor = () => {
        return (
            <React.Fragment>
                <div className="pg-profile-page__row">
                    <ProfileTwoFactorAuth is2faEnabled={this.props.user.otp} navigateTo2fa={this.handleNavigateTo2fa}/>
                </div>
            </React.Fragment>
        );
    };

    private renderModalHeader = () => {
        return (
            <div className="cr-email-form__options-group">
                <div className="cr-email-form__option">
                    <div className="cr-email-form__option-inner">
                        <FormattedMessage id="page.body.profile.header.account.content.twoFactorAuthentication.modalHeader"/>
                        <div className="cr-email-form__cros-icon" onClick={this.closeModal}>
                            <CloseIcon className="close-icon" />
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    private renderModalBody = () => {
        return (
            <div className="pg-exchange-modal-submit-body pg-exchange-modal-submit-body-2fa">
                <div className="cr-email-form__group">
                    <CodeVerification
                        code={this.state.code2FA}
                        onChange={this.handleChange2FACode}
                        codeLength={6}
                        type="text"
                        placeholder="X"
                        inputMode="decimal"
                        showPaste2FA={true}
                        isMobile={this.props.isMobile}
                    />
                </div>
            </div>
        );
    };

    private renderModalFooter = () => {
        const { code2FA } = this.state;

        return (
            <div className="pg-exchange-modal-submit-footer">
                <Button
                    block={true}
                    disabled={!is2faValid(code2FA)}
                    onClick={this.handleDisable2FA}
                    size="lg"
                    variant="primary"
                >
                    {this.props.intl.formatMessage({id: 'page.body.profile.header.account.content.twoFactorAuthentication.disable'})}
                </Button>
            </div>
        );
    };

    private handleChange2FACode = (value: string) => {
        this.setState({
            code2FA: value,
        });
    };

    private handleDisable2FA = () => {
        this.props.toggle2fa({
            code: this.state.code2FA,
            enable: false,
        });
        this.closeModal();
        this.handleChange2FACode('');
    };

    private closeModal = () => {
        this.setState({
            showModal: false,
        });
      };

    private toggleChangeModal = () => {
        this.setState({
            showChangeModal: !this.state.showChangeModal,
        });
    };

    private handleNavigateTo2fa = (enable2fa: boolean) => {
        if (enable2fa) {
            this.props.history.push('/security/2fa', { enable2fa });
        } else {
            this.setState({
                showModal: !this.state.showModal,
            });
        }
    };


}

const mapStateToProps = (state: RootState): ReduxProps => ({
    user: selectUserInfo(state),
    passwordChangeSuccess: selectChangePasswordSuccess(state),
    currentPasswordEntropy: selectCurrentPasswordEntropy(state),
    labels: selectLabelData(state),
    isMobile: selectMobileDeviceState(state),
});

const mapDispatchToProps = dispatch => ({
    changePassword: ({ old_password, new_password, confirm_password }) =>
        dispatch(changePasswordFetch({ old_password, new_password, confirm_password })),
    toggle2fa: ({ code, enable }) => dispatch(toggle2faFetch({ code, enable })),
    fetchCurrentPasswordEntropy: payload => dispatch(entropyPasswordFetch(payload)),
    labelFetch: () => dispatch(labelFetch()),
});

const ProfileSecurityConnected = injectIntl(connect(mapStateToProps, mapDispatchToProps)(ProfileSecurityComponent));
// tslint:disable-next-line:no-any
const ProfileSecurity = withRouter(ProfileSecurityConnected as any);

export {
    ProfileSecurity,
};
