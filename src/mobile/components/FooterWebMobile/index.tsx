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
        <h2 id="footer-heading" className="sr-only">Footer</h2>

        <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-4 lg:pt-12 lg:pt-16">
            <div className="space-y-8">
                {/* <UIlogoFortemTechnologies customWidth={250} customHeight={103}/> */}
                
                <p className="text-sm leading-6 text-gray-300">Making the world a better place through constructing elegant hierarchies.</p>

                <div className="flex space-x-6">
                    <a href="#" className="text-gray-500 hover:text-gray-400">
                        <span className="sr-only">Facebook</span>
                        {/* <UIsocialmediaFacebook /> */}
                    </a>

                    <a href="#" className="text-gray-500 hover:text-gray-400">
                        <span className="sr-only">Instagram</span>
                        {/* <UIsocialmediaInstagram /> */}
                    </a>
        
                    <a href="#" className="text-gray-500 hover:text-gray-400">
                        <span className="sr-only">Twitter</span>
                        {/* <UIsocialmediaTwitter /> */}
                    </a>
        
                    <a href="#" className="text-gray-500 hover:text-gray-400">
                        <span className="sr-only">GitHub</span>
                        {/* <UIsocialmediaGithub /> */}
                    </a>
        
                    <a href="#" className="text-gray-500 hover:text-gray-400">
                        <span className="sr-only">YouTube</span>
                        {/* <UIsocialmediaYouTube /> */}
                    </a>
                </div>

            </div>
        </div>

        <div className="hidden md:flex mx-auto max-w-7xl px-6 pb-8">
            <div className="w-full xl:grid xl:grid-cols-3 xl:gap-8">

                <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">

                <div className="md:grid md:grid-cols-2 md:gap-8">
                    <div>
                        <h3 className="text-sm font-semibold leading-6 text-white">Solutions</h3>
                        <ul role="list" className="mt-6 space-y-4">
                            <li>
                                <a href="/logada" className="text-sm leading-6 text-gray-300 hover:text-white">AREA LOGADA</a>
                            </li>                            
                            <li>
                                <a href="#" className="text-sm leading-6 text-gray-300 hover:text-white">Marketing</a>
                            </li>
            
                            <li>
                                <a href="#" className="text-sm leading-6 text-gray-300 hover:text-white">Analytics</a>
                            </li>
            
                            <li>
                                <a href="#" className="text-sm leading-6 text-gray-300 hover:text-white">Commerce</a>
                            </li>
            
                            <li>
                                <a href="#" className="text-sm leading-6 text-gray-300 hover:text-white">Insights</a>
                            </li>
                        </ul>
                    </div>
                    <div className="mt-10 md:mt-0">
                        <h3 className="text-sm font-semibold leading-6 text-white">Support</h3>
                        <ul role="list" className="mt-6 space-y-4">
                            <li>
                                <a href="#" className="text-sm leading-6 text-gray-300 hover:text-white">Pricing</a>
                            </li>
            
                            <li>
                                <a href="#" className="text-sm leading-6 text-gray-300 hover:text-white">Documentation</a>
                            </li>
            
                            <li>
                                <a href="#" className="text-sm leading-6 text-gray-300 hover:text-white">Guides</a>
                            </li>
            
                            <li>
                                <a href="#" className="text-sm leading-6 text-gray-300 hover:text-white">API Status</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="md:grid md:grid-cols-3 md:gap-8">
                    <div>
                        <h3 className="text-sm font-semibold leading-6 text-white">Tecnologia</h3>
                        <ul role="list" className="mt-6 space-y-4">
                            <li>
                                <a href="#" className="text-sm leading-6 text-gray-300 hover:text-white">About</a>
                            </li>
            
                            <li>
                                <a href="#" className="text-sm leading-6 text-gray-300 hover:text-white">Blog</a>
                            </li>
            
                            <li>
                                <a href="#" className="text-sm leading-6 text-gray-300 hover:text-white">Jobs</a>
                            </li>
            
                            <li>
                                <a href="#" className="text-sm leading-6 text-gray-300 hover:text-white">Press</a>
                            </li>
            
                            <li>
                                <a href="#" className="text-sm leading-6 text-gray-300 hover:text-white">Partners</a>
                            </li>
                        </ul>
                    </div>
                    <div className="mt-10 md:mt-0">
                        <h3 className="text-sm font-semibold leading-6 text-white">Legal</h3>
                        <ul role="list" className="mt-6 space-y-4">
                            <li>
                                <a href="#" className="text-sm leading-6 text-gray-300 hover:text-white">Claim</a>
                            </li>
            
                            <li>
                                <a href="#" className="text-sm leading-6 text-gray-300 hover:text-white">Privacy</a>
                            </li>
            
                            <li>
                                <a href="#" className="text-sm leading-6 text-gray-300 hover:text-white">Terms</a>
                            </li>
                        </ul>
                    </div>

                </div>

                </div>

            </div>
   
        </div>

        
        <div className="flex flex-row flex-wrap md:hidden">

        
            <div className="transition w-full hover:bg-fortem1neutral-500">
        
                <div className="accordion-header cursor-pointer transition flex space-x-5 px-5 items-center h-16 text-gray-300">
                    <i className="fas fa-plus"></i>
                    <h3>Solutions</h3>
                </div>
        
                <div className="accordion-content px-5 pt-0 overflow-hidden max-h-0">
                    <ul role="list" className="space-y-4 pt-2 pb-6">
                        <li>
                            <a href="/logada" className="text-sm leading-6 text-gray-300 hover:text-white">AREA LOGADA</a>
                        </li>                            
                        <li>
                            <a href="#" className="text-sm leading-6 text-gray-300 hover:text-white">Marketing</a>
                        </li>
        
                        <li>
                            <a href="#" className="text-sm leading-6 text-gray-300 hover:text-white">Analytics</a>
                        </li>
        
                        <li>
                            <a href="#" className="text-sm leading-6 text-gray-300 hover:text-white">Commerce</a>
                        </li>
        
                        <li>
                            <a href="#" className="text-sm leading-6 text-gray-300 hover:text-white">Insights</a>
                        </li>
                    </ul>
                </div>
            </div>
    
            
            <div className="transition w-full hover:bg-fortem1neutral-500">
                
                <div className="accordion-header cursor-pointer transition flex space-x-5 px-5 items-center h-16 text-gray-300">
                    <i className="fas fa-plus"></i>
                    <h3>Support</h3>
                </div>

                <div className="accordion-content px-5 pt-0 overflow-hidden max-h-0">
                    <ul role="list" className="space-y-4 pt-2 pb-6">
                        <li>
                            <a href="#" className="text-sm leading-6 text-gray-300 hover:text-white">Pricing</a>
                        </li>
        
                        <li>
                            <a href="#" className="text-sm leading-6 text-gray-300 hover:text-white">Documentation</a>
                        </li>
        
                        <li>
                            <a href="#" className="text-sm leading-6 text-gray-300 hover:text-white">Guides</a>
                        </li>
        
                        <li>
                            <a href="#" className="text-sm leading-6 text-gray-300 hover:text-white">API Status</a>
                        </li>
                    </ul>
                </div>
            </div>
    
            
            <div className="transition w-full hover:bg-fortem1neutral-500">
                
                <div className="accordion-header cursor-pointer transition flex space-x-5 px-5 items-center h-16 text-gray-300">
                    <i className="fas fa-plus"></i>
                    <h3>Tech</h3>
                </div>
                
                <div className="accordion-content px-5 pt-0 overflow-hidden max-h-0">
                    <ul role="list" className="space-y-4 pt-2 pb-6">
                        <li>
                            <a href="#" className="text-sm leading-6 text-gray-300 hover:text-white">About</a>
                        </li>
        
                        <li>
                            <a href="#" className="text-sm leading-6 text-gray-300 hover:text-white">Blog</a>
                        </li>
        
                        <li>
                            <a href="#" className="text-sm leading-6 text-gray-300 hover:text-white">Jobs</a>
                        </li>
        
                        <li>
                            <a href="#" className="text-sm leading-6 text-gray-300 hover:text-white">Press</a>
                        </li>
        
                        <li>
                            <a href="#" className="text-sm leading-6 text-gray-300 hover:text-white">Partners</a>
                        </li>
                    </ul>
                </div>
            </div>
    
            
            <div className="transition w-full hover:bg-fortem1neutral-500">
                
                <div className="accordion-header cursor-pointer transition flex space-x-5 px-5 items-center h-16 text-gray-300">
                    <i className="fas fa-plus"></i>
                    <h3>Legal</h3>
                </div>
                
                <div className="accordion-content px-5 pt-0 overflow-hidden max-h-0">
                    <ul role="list" className="space-y-4 pt-2 pb-6">
                        <li>
                            <a href="#" className="text-sm leading-6 text-gray-300 hover:text-white">Claim</a>
                        </li>
        
                        <li>
                            <a href="#" className="text-sm leading-6 text-gray-300 hover:text-white">Privacy</a>
                        </li>
        
                        <li>
                            <a href="#" className="text-sm leading-6 text-gray-300 hover:text-white">Terms</a>
                        </li>
                    </ul>
                </div>
            </div>



        </div>  

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
