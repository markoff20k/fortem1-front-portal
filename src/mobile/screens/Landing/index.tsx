import * as React from 'react';
import { MarketsTable } from '../../../containers';

import { LandingScreenMobile } from '../../../screens/LandingScreenMobile';

const LandingComponent: React.FC = () => {
    return (
        <div className="pg-landing-screen-mobile">
            {/* <MarketsTable /> */}
            <LandingScreenMobile />
        </div>
    );
};

export const LandingScreen = React.memo(LandingComponent);
