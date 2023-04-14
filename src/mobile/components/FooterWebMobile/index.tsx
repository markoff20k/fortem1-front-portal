import classnames from 'classnames';
import * as React from 'react';
import { useIntl } from 'react-intl';
import { Link, useLocation } from 'react-router-dom';
import { HomeIcon } from '../../assets/images/footer/HomeIcon';
import { OrderIcon } from '../../assets/images/footer/OrderIcon';
import { ProfileIcon } from '../../assets/images/footer/ProfileIcon';
import { TradeIcon } from '../../assets/images/footer/TradeIcon';
import { WalletIcon } from '../../assets/images/footer/WalletIcon';

import Accordion from '../../../components/Accordion';



const handleGetActiveItemClass = (currentRoute: string, targetRoute: string, absolute?: boolean) => {
    return classnames('pg-mobile-footer__item', {
        'pg-mobile-footer__item--active': absolute ? currentRoute === targetRoute : currentRoute.includes(targetRoute),
    });
};

const FooterComponent: React.FC = () => {
    const { pathname } = useLocation();
    const intl = useIntl();



    return (
        



    <footer className="bg-fortem1neutral-700" aria-labelledby="footer-heading">

        <Accordion />
        



        
    


        <div className="mx-auto max-w-7xl px-6 pb-8 pt-4">
            <div className="flex flex-row flex-wrap items-center place-content-between border-t-2 border-white/10 pt-8 mt-8 sm:mt-10 lg:mt-12">
                <div className="flex-full">
                    <p className="text-xs leading-5 text-gray-400">&copy; 2020 Your Tech, Inc. All rights reserved.</p>
                </div>
                <div className="flex flex-row flex-wrap">
                    {/* <UIlogoEthereum /> */}
                </div>
            </div>      
        </div>
    </footer>

    );
    
};

export const FooterWebMobile = React.memo(FooterComponent);
