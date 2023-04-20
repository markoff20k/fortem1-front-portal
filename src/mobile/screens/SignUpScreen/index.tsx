import * as React from 'react';
import { useIntl } from 'react-intl';
import { useHistory } from 'react-router';
import { SignUpScreen } from '../../../screens/SignUpScreen';
import { Modal } from '../../components';


const SignUpMobileScreen: React.FC = () => {
    const history = useHistory();
    const intl = useIntl();

    return <div>
        <Modal
            isOpen={true}
            onClose={() => history.push('/trading')}
            onBack={() => history.push('/signin')}
            backTitle={intl.formatMessage({ id: 'page.body.landing.header.login' })}
            title={intl.formatMessage({ id: 'page.body.landing.header.register' })}>
            <SignUpScreen/>
        </Modal>
    </div>;
};

export {
    SignUpMobileScreen,
};
