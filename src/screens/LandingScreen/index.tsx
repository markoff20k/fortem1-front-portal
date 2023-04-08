import { LandingBlock } from '@openware/react-components';
import * as React from 'react';
import { useRef, useLayoutEffect, useState } from 'react';
import { injectIntl } from 'react-intl';
import { connect } from 'react-redux';
import { Link, RouteProps, withRouter } from 'react-router-dom';
import { compose } from 'redux';

import { IntlProps } from '../../';
import { Logo } from '../../components';
import { MarketsTable, NavBar } from '../../containers';
import { toggleColorTheme } from '../../helpers';
import {
    RootState,
    selectCurrentColorTheme,
    selectUserLoggedIn,
} from '../../modules';
import { CustomizationSettingsInterface, LogoInterface } from '../../themes';

import FeaturesExchangeIcon from 'src/assets/images/landing/features/Exchange.svg';
import FeaturesTypesIcon from 'src/assets/images/landing/features/Types.svg';
import FeaturesCustomizeIcon from 'src/assets/images/landing/features/Customize.svg';
import FeaturesSecurityIcon from 'src/assets/images/landing/features/Security.svg';
import FeaturesCommunityIcon from 'src/assets/images/landing/features/Community.svg';
import FeaturesAPIIcon from 'src/assets/images/landing/features/API.svg';

import TelegramIcon from 'src/assets/images/landing/social/Telegram.svg';
import LinkedInIcon from 'src/assets/images/landing/social/LinkedIn.svg';
import TwitterIcon from 'src/assets/images/landing/social/Twitter.svg';
import YouTubeIcon from 'src/assets/images/landing/social/YouTube.svg';
import RedditIcon from 'src/assets/images/landing/social/Reddit.svg';
import FacebookIcon from 'src/assets/images/landing/social/Facebook.svg';
import MediumIcon from 'src/assets/images/landing/social/Medium.svg';
import CoinMarketIcon from 'src/assets/images/landing/social/CoinMarket.svg';

import { useSelector } from 'react-redux';


import { HomepageMarket, Footer } from '../../containers';
// import { MarketOverviewList } from '../MarketOverviewList';


import { Parallax } from 'react-scroll-parallax';
import mobile from './fortem-mobile.png';
import DownloadAPP from './Home/Screen1.png';
import DownloadGG from './Home/Screen2.png';
import Download1 from './Home/Screen4.png';
import Download2 from './Home/Screen3.png';
import devicePhone from './Home/fortemDevices-iPhone.png';
import deviceLaptop from './Home/fortemDevices-Laptop.png';

import Flip from 'react-reveal/Flip';

import SectionTitle from "../../elements/sectionTitle/SectionTitle";
import BlogList from "../../components/blog/itemProp/BlogList";

import BlogClassicData from '../../data/blog/BlogList.json';
var BlogListData = BlogClassicData.slice(0, 6);

import HeaderTopNews from "./components/HeaderTopNews";
import { FiX , FiArrowRight} from "react-icons/fi";

import {HeaderLanding} from '../../containers/HeaderLanding';




interface ReduxProps {
    isLoggedIn: boolean;
    colorTheme: string;
}

type Props = ReduxProps & RouteProps & IntlProps;

class Landing extends React.Component<Props> {


    

    public componentDidMount() {
        if (this.props.colorTheme === 'light') {
            toggleColorTheme('dark');
        }
    }


    

    public componentWillReceiveProps(next: Props) {
        if (next.colorTheme === 'light') {
            toggleColorTheme('dark');
        }
    }

    public componentWillUnmount() {
        if (this.props.colorTheme === 'light') {
            toggleColorTheme(this.props.colorTheme);
        }
    }

   

  

	public renderDownloadDevices = () => {
		return (
			<div className="homepage-download rn-section-gap">
				<div className="container">
					<div className="main-homepage-download">
						<div className="row dowdload-box">
							<div className="col-5 dowdload-box__box-1" style={{ paddingTop: 100 }}>
								<div className="row ">
									<div className="col-12">
										<div className="d-flex justify-content-start">
										<h3 className="trading-title">Agora não há mais motivos para você ficar de fora. </h3>
									</div>
									<div>
									<p className="trading-description">
							Download Fortem APP, you will be able to easily at any time, anywhere trading global mainstream,
							popular digital assets.
						</p>
										</div>
					
									</div>
								</div>
								<div className="row pt-5">
									<div className="col-12">
										<div
											className="grid-container"
											style={{ display: 'grid', gridTemplateColumns: 'auto auto' }}
										>
											<div>
												<img
													className="img-fluid"
													src={DownloadAPP}
													style={{ borderRadius: 10 }}
													alt="google+play"
												/>
											</div>
											<div style={{ marginLeft: -100 }}>
												<img
													className="img-fluid"
													src={DownloadGG}
													style={{ borderRadius: 10 }}
													alt="android+store"
												/>
											</div>
											<div className="mt-3">
												<img
													className="img-fluid"
													src={Download2}
													style={{ borderRadius: 10 }}
													alt="app+store"
												/>
											</div>
											<div className="mt-3" style={{ marginLeft: -100 }}>
												<img
													className="img-fluid"
													src={Download1}
													style={{ borderRadius: 10 }}
													alt="scan+qrcode"
												/>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="col-7 dowdload-box__box-2" style={{ position: 'relative' }}>
							<Flip top cascade>

							<img
									src={devicePhone}
									alt="exchange"
									style={{ position: 'absolute', zIndex: 100, top: 70, left: 90, width: '50%' }}
								/>

								<img
									src={deviceLaptop}
									alt="exchange"
									style={{ position: 'absolute', zIndex: 100, top: 40, left: 200, width: '120%' }}
								/>
							</Flip>
							</div>
						</div>
					</div>
				</div>

			</div>
		);
	};

    public render() {

        // const [deactive, setClass] = useState('');

        
        return (
            <div className="pg-landing-screen">
                



                <HeaderLanding/>

                <LandingBlock>

                
        <div className="relative isolate">
          <svg className="absolute opacity-30 inset-x-0 top-0 -z-10 h-[64rem] w-full stroke-gray-200 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]" aria-hidden="true">
            <defs>
              <pattern id="1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84" width="200" height="200" x="50%" y="-1" patternUnits="userSpaceOnUse">
                <path d="M.5 200V.5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="50%" y="-1" className="overflow-visible fill-gray-50">
              <path d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z" stroke-width="0" />
            </svg>
            <rect width="100%" height="100%" stroke-width="0" fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)" />
          </svg>
          <div className="absolute top-0 left-1/2 right-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48">
            <svg viewBox="0 0 801 1036" aria-hidden="true" className="w-[50.0625rem]">
              <path fill="url(#70656b7e-db44-4b9b-b7d2-1f06791bed52)" fill-opacity=".3" d="m282.279 843.371 32.285 192.609-313.61-25.32 281.325-167.289-58.145-346.888c94.5 92.652 277.002 213.246 251.009-45.597C442.651 127.331 248.072 10.369 449.268.891c160.956-7.583 301.235 116.434 351.256 179.39L507.001 307.557l270.983 241.04-495.705 294.774Z" />
              <defs>
                {/* <!-- <linearGradient id="70656b7e-db44-4b9b-b7d2-1f06791bed52" x1="508.179" x2="-28.677" y1="-116.221" y2="1091.63" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#1f932ae7" />
                  <stop offset="1" stop-color="#34ec64" />
                </linearGradient> --> */}
              </defs>
            </svg>


          </div>
          <div className="overflow-hidden">
            <div className="mx-auto max-w-7xl px-6 pb-32 pt-16 sm:pt-16 lg:px-8 lg:pt-24">
              <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
                <div className="w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
                  <h1 className="text-3xl font-bold tracking-tight text-fortem1neutral-300 sm:text-5xl">Invista em tokens com os melhores rendimentos e com a segurança da blockchain.</h1>
                  <p className="relative mt-6 text-xl leading-8 text-fortem1neutral-300 sm:max-w-md lg:max-w-none">Dos investimentos em tokens à conta digital. Aqui você tem o controle integrado de todas as suas necessidades financeiras.</p>
                  <div className="mt-10 flex items-center gap-x-6">
                    <a href="#" className="rounded-md bg-fortem1high-green px-3.5 py-2.5 text-base font-semibold text-fortem1neutral-900 shadow-sm hover:fortem1high-green focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fortem1high-green">Crie sua conta</a>
                    {/* <a href="#" className="text-sm font-semibold leading-6 text-gray-900">Live demo <span aria-hidden="true">→</span></a> */}
                  </div>
                </div>
                <div className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
                  <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                    <div className="relative">
                      <img src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80" alt="" className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg" />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"></div>
                    </div>
                  </div>
                  <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                    <div className="relative">
                      <img src="https://images.unsplash.com/photo-1485217988980-11786ced9454?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80" alt="" className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg" />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"></div>
                    </div>
                    <div className="relative">
                      <img src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-x=.4&w=396&h=528&q=80" alt="" className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg" />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"></div>
                    </div>
                  </div>
                  <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
                    <div className="relative">
                      <img src="https://images.unsplash.com/photo-1670272504528-790c24957dda?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=left&w=400&h=528&q=80" alt="" className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg" />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"></div>
                    </div>
                    <div className="relative">
                      <img src="https://images.unsplash.com/photo-1670272505284-8faba1c31f7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80" alt="" className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg" />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


                </LandingBlock>
                <LandingBlock className="pg-landing-screen__top" contentClassName="pg-landing-screen__top-content">
                    <div className="pg-landing-screen__market-info">
                        <div className="pg-landing-screen__market-info__wrap">
                            <div className="pg-landing-screen__market-info__wrap__title">
                                <h1>{this.translate('page.body.landing.marketInfo.title.text1')}</h1>
                                <h1>{this.translate('page.body.landing.marketInfo.title.text2')}</h1>
                                <Link to="/trading" className="landing-button">
                                    {this.translate('page.body.landing.marketInfo.title.button')}
                                </Link>
                            </div>
                            {/* <MarketsTable /> */}
                            <HomepageMarket />
                        </div>
                    </div>
                    <div className="pg-landing-screen__platform-info">
                        <div className="pg-landing-screen__platform-info__wrap">
                            <div className="pg-landing-screen__platform-info__wrap__item">
                                <span>{this.translate('page.body.landing.platformInfo.item.first.value')}</span>
                                <span>{this.translate('page.body.landing.platformInfo.item.first.title')}</span>
                            </div>
                            <div className="pg-landing-screen__platform-info__wrap__item">
                                <span>{this.translate('page.body.landing.platformInfo.item.second.value')}</span>
                                <span>{this.translate('page.body.landing.platformInfo.item.second.title')}</span>
                            </div>
                            <div className="pg-landing-screen__platform-info__wrap__item">
                                <span>{this.translate('page.body.landing.platformInfo.item.third.value')}</span>
                                <span>{this.translate('page.body.landing.platformInfo.item.third.title')}</span>
                            </div>
                        </div>
                    </div>
                </LandingBlock>
                <LandingBlock
                    className="pg-landing-screen__register"
                    contentClassName="pg-landing-screen__register-content">
                    <div className="pg-landing-screen__register__item">
                        <h1>{this.translate('page.body.landing.register.item.title')}</h1>
                        <h2>{this.translate('page.body.landing.register.item.text')}</h2>
                        <Link to="/signup" className="landing-button">
                            {this.translate('page.body.landing.register.item.button')}
                        </Link>
                    </div>
                </LandingBlock>


                {/* <!-- Framework Atttibutes Cards --> */}
    <div className="flex flex-wrap w-full relative isolate justify-center bg-gradient-to-b from-fortem1neutral-700 via-fortem1typo-500 to-fortem1neutral-700">
        <div className="flex flex-col w-10/12">
            <div className=" flex flex-row flex-wrap w-full mt-32 mb-8">
                <div className="flex w-12/12 pb-6 sm:w-6/12 sm:pb-6 md:w-6/12 md:pb-6 lg:w-3/12 lg:pb-0 justify-center">
                    <div className="flex flex-col w-11/12 p-6 bg-fortem1neutral-700 rounded-2xl border-2 border-fortem1green-500">
                        <div className="mb-5">
    
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" className="hi-outline hi-template inline-block w-12 h-12 text-indigo-500">
                                <path fill="#009991" d="M118.8 43.3c-3.2.3-8.2.8-15.2 1.6-3.7.4-7.8.8-11.9 1.2l-2.1-2.4c-4-4.1-9-7.4-14.6-9.6-5.6-2.2-11.9-3.5-18.3-3.2-6.4.3-13 1.8-19.2 4.6C25.1 41.2 14.6 52.6 9.9 67c-2.4 7.1-3.3 15-2.6 22.8 0 2 .5 3.9.8 5.9.3 2 .8 4 1.4 5.9 1.2 3.9 2.7 7.7 4.7 11.3l-2 1.4c-3.2-4.6-5.8-9.6-7.7-15.1-11.8-33.3 5.6-69.9 38.9-81.8 28.7-10.2 59.7 1.3 75.4 25.9z" />
                                <path fill="#009991" d="M45.7 74.6c-.8 8.5 4.4 16.2 12.7 18.6 5.2 1.4 10.2.5 15.5-2.9 8.2-5.3 48.9-29.8 51.7-31.5 1.3-.8 1.9-2.4 1.4-3.8-.4-1.1-1.3-2-2.5-2.2-.3-.1-.6-.1-.9-.1-2.7.2-56.9 6-61.9 6.4-8.6.7-15.1 7-16 15.5z" />
                            </svg>
                        </div>

                        <h3 className="text-lg font-bold mb-2 text-fortem1typo-100">Estabilidade, desempenho e capacidade</h3>
                        <span className="color-accent">.</span>

                                <p className="text-sm leading-6 text-fortem1typo-100">
                                Nossa plataforma eletrônica foi projetada e desenvolvida a partir de uma arquitetura tecnológica de missão crítica, com alta disponibilidade, contingências e capacidade de processamento para suportar os momentos mais voláteis dos mercados.
                                </p>
                                <Link to={""}>
                                    Conheça nossa página de status dos serviços 
                                    <span>
                                        <i className="icon"><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></i>
                                    </span>
                                </Link>

                    </div>

                </div>        
                <div className="flex w-12/12 pb-6 sm:w-6/12 sm:pb-6 md:w-6/12 md:pb-6 lg:w-3/12 lg:pb-0 justify-center">
                <div className="flex flex-col w-11/12 p-6 bg-fortem1neutral-700 rounded-2xl border-2 border-fortem1green-500">
                        <div className="mb-5">

                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" className="hi-outline hi-template inline-block w-12 h-12 text-indigo-500">
                                <path fill="#009991" d="M532.2 984c33.8-21.5 67.7-42.9 101.5-64.4 15.3-9.7 30.8-19.3 45.7-29.7 35.4-24.7 68.6-52.8 98.1-84.4 58.4-62.7 102.8-137 130.9-217.9 22.9-66.1 32.7-135.8 32.7-205.6V248.9c0-17.9-12.5-33.5-29.4-38.6-12.2-3.7-24.3-7.5-36-12.4 3.2 1.3 6.4 2.7 9.6 4-20.9-8.9-40.5-20.3-58.5-34.1l8.1 6.3c-17.8-13.8-33.8-29.7-47.6-47.5l6.3 8.1c-13.8-18-25.3-37.7-34.2-58.6 1.3 3.2 2.7 6.4 4 9.6-3-7.2-5.8-14.6-8.2-22-5.4-16.9-20.5-29.4-38.6-29.4H357.7c-16.5 0-33.1-.5-49.6 0h-.7c-18.2 0-33.2 12.5-38.6 29.4-2.4 7.5-5.1 14.8-8.2 22 1.3-3.2 2.7-6.4 4-9.6-8.9 20.9-20.4 40.5-34.2 58.6l6.3-8.1c-13.8 17.8-29.8 33.7-47.6 47.5l8.1-6.3c-18 13.8-37.7 25.2-58.5 34.1 3.2-1.3 6.4-2.7 9.6-4-11.8 4.9-23.8 8.7-36 12.4-16.9 5.1-29.4 20.7-29.4 38.6v120.6c0 21.2 0 42.4 1.5 63.6 3.2 43.1 10.5 86.1 22.6 127.6 24 82.4 65.6 158.3 120.8 223.8 42.9 50.9 94.6 92.1 150.6 127.6l110.7 70.2c.9.6 1.9 1.2 2.8 1.8 17.7 11.2 44.9 4.3 54.7-14.4 10.4-19.8 4.5-42.7-14.4-54.7-18-11.4-36-22.8-53.9-34.2-23-14.6-45.9-29.1-68.9-43.7-16.1-10.2-31.8-21.1-47-32.7l8.1 6.3c-37.8-29.3-71.8-63.3-101.1-101.1l6.3 8.1c-29.8-38.7-54.6-81.1-73.7-126.1 1.3 3.2 2.7 6.4 4 9.6-19.5-46.3-32.8-94.9-39.5-144.7.5 3.5 1 7.1 1.4 10.6-4.3-32.4-5-64.8-5-97.3V249.3c-9.8 12.9-19.6 25.7-29.4 38.6 34.5-10.4 67.9-24.2 97.2-45.3 34.7-25 64.3-55.8 86.3-92.6 12.1-20.2 21.8-42.2 29-64.6-12.9 9.8-25.7 19.6-38.6 29.4H666.3c16.5 0 33.1.4 49.6 0h.7c-12.9-9.8-25.7-19.6-38.6-29.4 25.1 78.3 82.1 146.4 156.9 181.6 18 8.5 36.5 15.1 55.6 20.9-9.8-12.9-19.6-25.7-29.4-38.6v141.8c0 25.4-1.7 50.8-5 76 .5-3.5 1-7.1 1.4-10.6-6.8 49.7-20.1 98.4-39.5 144.7 1.3-3.2 2.7-6.4 4-9.6-19.1 45-43.9 87.4-73.7 126.1l6.3-8.1c-29.3 37.8-63.3 71.8-101.1 101.1l8.1-6.3c-22.4 17.3-46.2 32.2-70 47.4-26.4 16.8-52.8 33.5-79.2 50.3-6.8 4.3-13.7 8.7-20.5 13-8.7 5.5-15.6 13.8-18.4 23.9-2.6 9.6-1.4 22.3 4 30.8 11.4 17.6 35.8 26.2 54.7 14.2z" />
                                <path fill="#009991" d="m308.2 509.9 102.7 102.7 14.6 14.6c15.3 15.3 41.3 15.3 56.6 0l79.3-79.3 125.5-125.5 28.9-28.9c14.8-14.8 15.9-42 0-56.6-16-14.7-40.8-15.8-56.6 0l-79.3 79.3-125.5 125.5-28.9 28.9h56.6L379.4 467.9l-14.6-14.6c-14.8-14.8-42-15.9-56.6 0-14.7 16-15.8 40.7 0 56.6z"/>
                            </svg>
                        </div>

                        <h3 className="text-lg font-bold mb-2 text-fortem1typo-100">Monitoração constante</h3>

                                <p className="text-md leading-6 text-fortem1typo-100">
                                    Várias camadas e mecanismos de segurança atuam em conjunto com um Centro de Monitoração especializado, 24 horas x 7 dias da semana.
                                    Tudo isso para garantir aos nossos clientes um ambiente profissional, seguro e estável.
                                    E mais, sem necessidade de correr riscos enviando seus recursos para fora do país.
                                </p>
                    </div>
                </div>
                <div className="flex w-12/12 pb-6 sm:w-6/12 sm:pb-6 md:w-6/12 md:pb-6 lg:w-3/12 lg:pb-0 justify-center">    
                <div className="flex flex-col w-11/12 p-6 bg-fortem1neutral-700 rounded-2xl border-2 border-fortem1green-500">
                        <div className="mb-5">
                            <svg
                                    className="hi-outline hi-template inline-block w-12 h-12 text-indigo-500"
                                    stroke="#38BCA4"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                    >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="1"
                                        d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
                                    ></path>
                            </svg>
                        </div>

                        <h3 className="text-lg font-bold mb-2 text-fortem1typo-100">Interfaces intuitivas</h3>

                                <p className="text-sm leading-6 text-fortem1typo-100">
                                    Metus potenti velit sollicitudin porttitor magnis elit lacinia tempor
                                    varius, ut cras orci vitae parturient id nisi vulputate consectetur,
                                    primis venenatis cursus tristique malesuada viverra congue risus.
                                </p>
                    </div>
                </div>    
                <div className="flex w-12/12 pb-6 sm:w-6/12 sm:pb-6 md:w-6/12 md:pb-6 lg:w-3/12 lg:pb-0 justify-center">
                <div className="flex flex-col w-11/12 p-6 bg-fortem1neutral-700 rounded-2xl border-2 border-fortem1green-500">
                        <div className="mb-5">
                            <svg
                                    className="hi-outline hi-template inline-block w-12 h-12 text-indigo-500"
                                    stroke="#38BCA4"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                    >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="1"
                                        d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
                                    ></path>
                            </svg>
                        </div>

                        <h3 className="text-lg font-bold mb-2 text-fortem1typo-100">Processos simplificados</h3>

                                <p className="text-sm leading-6 text-fortem1typo-100">
                                    Metus potenti velit sollicitudin porttitor magnis elit lacinia tempor
                                    varius, ut cras orci vitae parturient id nisi vulputate consectetur,
                                    primis venenatis cursus tristique malesuada viverra congue risus.
                                </p>
                    </div>
                </div>

            </div>

            <div className=" flex flex-row flex-wrap w-full mb-32 mt-6 place-content-evenly">
                            
                <div className="flex w-12/12 pb-6 sm:w-6/12 sm:pb-6 md:w-6/12 md:pb-6 lg:w-4/12 lg:pb-0 justify-center">
                <div className="flex flex-col w-11/12 p-6 bg-fortem1neutral-700 rounded-2xl border-2 border-fortem1green-500">
                        <div className="mb-5">


                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 417 417" className="hi-outline hi-template inline-block w-12 h-12 text-indigo-500">
                                <path fill="#009991" d="M208.906 0.660156C94.0303 0.660156 0.90625 93.7852 0.90625 208.66C0.90625 323.535 94.0303 416.66 208.906 416.66C323.781 416.66 416.906 323.535 416.906 208.66C416.906 93.7852 323.781 0.660156 208.906 0.660156ZM187.357 385.659C147.893 380.933 111.379 363.267 82.8383 334.727C49.1643 301.053 30.6202 256.282 30.6202 208.66C30.6202 165.79 45.6562 125.236 73.2213 93.0012C73.9313 101.518 75.6842 110.649 75.2353 117.176C73.5953 140.971 71.2472 155.863 85.1752 175.938C90.6012 183.757 91.9343 194.966 94.5753 204.016C97.1583 212.87 107.477 217.514 114.594 222.969C128.953 233.978 142.69 246.774 157.916 256.463C167.965 262.858 174.242 266.039 171.299 278.302C168.932 288.164 168.271 294.239 163.169 303.025C161.612 305.706 169.046 322.943 171.52 325.417C179.018 332.914 186.458 339.792 194.631 346.542C207.302 357.011 193.4 370.614 187.357 385.659ZM334.973 334.727C309.34 360.36 277.274 377.213 242.417 383.808C247.357 371.592 256.153 360.738 264.312 354.446C271.409 348.97 280.298 338.437 284.005 330.094C287.709 321.762 292.616 314.539 297.582 306.877C304.647 295.978 280.163 279.541 272.229 276.096C254.375 268.345 240.935 257.886 225.068 246.721C213.763 238.767 190.811 250.875 178.048 245.304C160.567 237.671 146.165 224.408 130.97 212.965C115.29 201.156 116.048 187.389 116.048 169.968C128.33 170.421 145.802 166.569 153.956 176.446C156.529 179.563 165.376 193.488 171.298 188.54C176.136 184.497 167.713 168.291 166.086 164.481C161.081 152.766 177.49 148.197 185.889 140.253C196.849 129.889 220.359 113.635 218.501 106.206C216.643 98.7772 194.977 77.7292 182.252 81.0132C180.345 81.5051 163.555 99.1102 160.311 101.872C160.397 96.1262 160.483 90.3812 160.571 84.6352C160.626 81.0072 153.803 77.2831 154.12 74.9432C154.92 69.0292 171.382 58.2962 175.477 53.5862C172.608 51.7932 162.818 43.3842 159.855 44.6182C152.681 47.6082 144.579 49.6682 137.405 52.6572C137.405 50.1692 137.103 47.8322 136.743 45.5242C151.19 39.1331 166.43 34.7097 182.053 32.3722L196.137 38.0322L206.081 49.8332L216.005 60.0662L224.68 62.8612L238.459 49.8662L234.906 40.5892V32.2502C262.156 36.2082 287.89 46.3742 310.428 62.0502C306.396 62.4112 301.965 63.0042 296.966 63.6402C294.901 62.4202 292.252 61.8662 290.001 61.0172C296.532 75.0592 303.344 88.9072 310.265 102.763C317.658 117.564 334.058 133.44 336.938 149.064C340.332 167.48 337.977 184.208 339.834 205.875C341.622 226.74 363.358 250.447 363.358 250.447C363.358 250.447 373.395 253.866 381.742 252.675C373.961 283.458 358.009 311.689 334.973 334.727Z" />
                            </svg>

                        </div>

                        <h3 className="text-lg font-bold mb-2 text-fortem1typo-100">Alta liquidez, volume global, melhores ofertas</h3>

                                <p className="text-sm leading-6 text-fortem1typo-100">
                                A Fortem One é a única plataforma nacional conectada diretamente às maiores exchanges e formadores de mercado cripto do mundo, concentrando todas as ordens em um único livro de ofertas. Assim, disponibilizamos aos nossos clientes os melhores preços e uma ampla variedade de ativos.
                                </p>
                    </div>
                </div> 
                <div className="flex w-12/12 pb-6 sm:w-6/12 sm:pb-6 md:w-6/12 md:pb-6 lg:w-4/12 lg:pb-0 justify-center">
                <div className="flex flex-col w-11/12 p-6 bg-fortem1neutral-700 rounded-2xl border-2 border-fortem1green-500">
                        <div className="mb-5">

                        
                            <svg xmlns="http://www.w3.org/2000/svg" width="288" height="288" className="hi-outline hi-template inline-block w-12 h-12 text-indigo-500">
                                <svg xmlns="http://www.w3.org/2000/svg" width="288" height="288" viewBox="0 0 48 48">
                                    <path fill="#009991" d="m22.1 33.7-6.7-1-3-6.1c-.2-.3-.5-.6-.9-.6s-.7.2-.9.6l-3 6.1-6.7 1c-.4 0-.7.3-.9.6-.1.4 0 .8.3 1l4.9 4.8L4 46.8c-.1.4.1.8.4 1 .3.2.7.3 1.1.1l6-3.2 6 3.2c.1.1.6.3 1.1-.1.3-.2.5-.6.4-1l-1.2-6.7 4.9-4.8c.3-.3.4-.7.3-1-.2-.3-.5-.6-.9-.6zm-6 5.4c-.2.2-.3.6-.3.9l.9 5.2-4.7-2.5c-.3-.2-.6-.2-.9 0l-4.7 2.5.9-5.2c.1-.3-.1-.7-.3-.9l-3.8-3.7 5.3-.8c.3 0 .6-.3.8-.5l2.3-4.8 2.3 4.8c.1.3.4.5.8.5l5.3.8-3.9 3.7zM33.7 7.6l-6.7-1-3-6.1c-.3-.3-.6-.5-1-.5s-.7.2-.9.6l-3 6.1-6.7 1c-.4 0-.7.3-.8.6-.1.4 0 .8.3 1l4.9 4.8-1.2 6.7c-.1.4.1.8.4 1 .3.2.7.3 1.1.1l6-3.2 6 3.2c.1.1.6.3 1.1-.1.3-.2.5-.6.4-1l-1.2-6.7 4.9-4.8c.3-.3.4-.7.3-1-.3-.3-.6-.6-.9-.7zM27.6 13c-.2.2-.3.6-.3.9l.9 5.2-4.7-2.5c-.3-.2-.6-.2-.9 0l-4.7 2.5.9-5.2c.1-.3-.1-.7-.3-.9l-3.8-3.7 5.3-.8c.3 0 .6-.3.8-.5L23 3.3 25.4 8c.1.3.4.5.8.5l5.3.8-3.9 3.7zM47.1 33.7l-6.7-1-3-6.1c-.2-.3-.5-.6-.9-.6s-.7.2-.9.6l-3 6.1-6.7 1c-.4.1-.7.3-.8.7-.1.4 0 .8.3 1l4.9 4.8-1.3 6.6c-.1.4.1.8.4 1 .3.2.7.3 1.1.1l6-3.2 6 3.2c.1.1.6.3 1.1-.1.3-.2.5-.6.4-1l-1.2-6.7 4.9-4.8c.3-.3.4-.7.3-1-.2-.3-.5-.6-.9-.6zm-6 5.4c-.2.2-.3.6-.3.9l.9 5.2-4.7-2.5c-.3-.2-.6-.2-.9 0l-4.7 2.5.9-5.2c.1-.3-.1-.7-.3-.9l-3.8-3.7 5.3-.8c.3 0 .6-.3.8-.5l2.3-4.8 2.3 4.8c.1.3.4.5.8.5l5.3.8-3.9 3.7z" />
                                </svg>
                            </svg>

                            
                        </div>
                        <h3 className="text-lg font-bold mb-2 text-fortem1typo-100">Portifólio diversificado de ativos digitais</h3>

                                <p className="text-sm leading-6 text-fortem1typo-100">
                                    Nosso marketplace oferece as melhores opções de tokens de acordo com suas necessidades e expectativas. São várias opções de rentabilidade, prazos para resgate e investimento mínimo. Tudo com a tecnologia da Fotem ONE e segurança da blockchain.
                                </p>
                    </div>
                </div>
                <div className="flex w-12/12 pb-6 sm:w-12/12 sm:pb-6 md:w-6/12 md:pb-6 lg:w-4/12 lg:pb-0 justify-center">    
                <div className="flex flex-col w-11/12 p-6 bg-fortem1neutral-700 rounded-2xl border-2 border-fortem1green-500">
                        <div className="mb-5">
                
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" className="hi-outline hi-template inline-block w-12 h-12 text-indigo-500">
                                <g fill="#009991" data-name="Layer 5">
                                    <path d="M60.708 73.262H56.217l-1.785-4.645H46.259l-1.687 4.645h-4.38l7.964-20.447H52.52zm-7.6-8.089l-2.817-7.587-2.762 7.587zM62.9 73.262V52.815h6.625a24.059 24.059 0 0 1 4.909.307 5.365 5.365 0 0 1 2.943 2 6.35 6.35 0 0 1 1.185 3.982 6.677 6.677 0 0 1-.683 3.166 5.607 5.607 0 0 1-1.736 2.016A5.981 5.981 0 0 1 74 65.256a23.571 23.571 0 0 1-4.282.293H67.026v7.713zm4.129-16.988v5.8h2.259a10.679 10.679 0 0 0 3.264-.321 2.711 2.711 0 0 0 1.29-1 2.748 2.748 0 0 0 .468-1.59 2.644 2.644 0 0 0-.655-1.841 2.857 2.857 0 0 0-1.66-.906 19.794 19.794 0 0 0-2.971-.14zM81.823 73.262V52.815h4.129V73.262z" />
                                    <path d="M63.992,29.455a34.336,34.336,0,1,0,31.98,21.838A34.175,34.175,0,0,0,63.992,29.455ZM92.7,76.358a31.336,31.336,0,1,1,.48-23.974A31.123,31.123,0,0,1,92.7,76.358Z" />
                                    <path d="M109.592,66.68A45.844,45.844,0,0,0,109.577,61l8.281-7.16a1.5,1.5,0,0,0,.4-1.716l-7.575-18.019a1.487,1.487,0,0,0-1.445-.918l-11.1.465a45.211,45.211,0,0,0-4.029-4L94.9,18.736a1.5,1.5,0,0,0-.93-1.5l-18.1-7.386a1.5,1.5,0,0,0-1.671.374L66.68,18.409a45.709,45.709,0,0,0-5.673.016l-7.16-8.286a1.5,1.5,0,0,0-1.716-.4L34.11,17.315a1.5,1.5,0,0,0-.918,1.446l.466,11.1a45.41,45.41,0,0,0-4,4.03L18.736,33.1a1.534,1.534,0,0,0-1.5.929l-7.385,18.1a1.5,1.5,0,0,0,.373,1.671l8.184,7.525a45.646,45.646,0,0,0,.014,5.674l-8.283,7.16a1.5,1.5,0,0,0-.4,1.716L17.316,93.89a1.507,1.507,0,0,0,1.445.917l11.1-.464a45.391,45.391,0,0,0,4.03,4L33.1,109.263a1.5,1.5,0,0,0,.93,1.5l18.1,7.385a1.5,1.5,0,0,0,1.67-.373l7.526-8.182a45.38,45.38,0,0,0,5.671-.017l7.162,8.287a1.5,1.5,0,0,0,1.717.4l18.018-7.579a1.5,1.5,0,0,0,.917-1.445l-.464-11.1a45.742,45.742,0,0,0,4-4.031l10.924.8a1.5,1.5,0,0,0,1.5-.93l7.384-18.1a1.5,1.5,0,0,0-.373-1.67Zm-1.2,25.153-10.591-.771a1.491,1.491,0,0,0-1.254.527,42.681,42.681,0,0,1-4.715,4.759,1.5,1.5,0,0,0-.52,1.2l.45,10.776-16.054,6.752-6.943-8.033a1.5,1.5,0,0,0-1.135-.519c-.041,0-.083,0-.125.005a42.383,42.383,0,0,1-6.691.023,1.482,1.482,0,0,0-1.217.48l-7.308,7.944-16.125-6.58.771-10.59a1.5,1.5,0,0,0-.527-1.254,42.309,42.309,0,0,1-4.757-4.713,1.5,1.5,0,0,0-1.2-.52l-10.777.451L12.928,75.71l8.029-6.94a1.5,1.5,0,0,0,.514-1.257,42.59,42.59,0,0,1-.019-6.7,1.5,1.5,0,0,0-.48-1.217l-7.946-7.307,6.58-16.123,10.592.77a1.514,1.514,0,0,0,1.253-.527,42.667,42.667,0,0,1,4.714-4.757,1.5,1.5,0,0,0,.521-1.2l-.452-10.779,16.056-6.75,6.941,8.032a1.5,1.5,0,0,0,1.258.514,42.988,42.988,0,0,1,6.7-.022,1.5,1.5,0,0,0,1.217-.48l7.307-7.945L91.833,19.6,91.063,30.2a1.5,1.5,0,0,0,.527,1.254,42.161,42.161,0,0,1,4.754,4.713,1.506,1.506,0,0,0,1.2.522l10.777-.451,6.749,16.055-8.028,6.94a1.5,1.5,0,0,0-.514,1.258,42.6,42.6,0,0,1,.02,6.7,1.5,1.5,0,0,0,.481,1.217l7.944,7.306Z" />
                                </g>
                            </svg>
                        </div>

                        <h3 className="text-lg font-bold mb-2 text-fortem1typo-100">APIs e integrações</h3>

                                <p className="text-sm leading-6 text-fortem1typo-100">
                                    As APIs da Fortem foram projetadas para fornecerem diferentes canais e formas de interação com os serviços da plataforma, de acordo com as necessidades específicas de cada cliente. Disponibilizamos os principais padrões e tecnologias já amplamente utilizadas pelo mercado financeiro, facilitando as integrações entre diferentes sistemas e habilitando o acesso ao novo mercado digital de forma segura e descomplicada.
                                </p>
                    </div>
                </div>    

            </div>

        </div>
    </div>




                

                <LandingBlock className="pg-landing-screen__features">
                    <div className="pg-landing-screen__features__wrap">
                        <h1>{this.translate('page.body.landing.features.title')}</h1>
                        <div className="pg-landing-screen__features__content">
                            <div className="pg-landing-screen__features__content__row">
                                <div className="pg-landing-screen__features__content__row__item">
                                    <img
                                        src={FeaturesExchangeIcon}
                                        alt={this.translate('page.body.landing.features.features.item1.title')}
                                    />
                                    <h2>{this.translate('page.body.landing.features.features.item1.title')}</h2>
                                    <span>{this.translate('page.body.landing.features.features.item1.text')}</span>
                                </div>
                                <div className="pg-landing-screen__features__content__row__item">
                                    <img
                                        src={FeaturesTypesIcon}
                                        alt={this.translate('page.body.landing.features.features.item2.title')}
                                    />
                                    <h2>{this.translate('page.body.landing.features.features.item2.title')}</h2>
                                    <span>{this.translate('page.body.landing.features.features.item2.text')}</span>
                                </div>
                            </div>
                            <div className="pg-landing-screen__features__content__row">
                                <div className="pg-landing-screen__features__content__row__item">
                                    <img
                                        src={FeaturesCustomizeIcon}
                                        alt={this.translate('page.body.landing.features.features.item3.title')}
                                    />
                                    <h2>{this.translate('page.body.landing.features.features.item3.title')}</h2>
                                    <span>{this.translate('page.body.landing.features.features.item3.text')}</span>
                                </div>
                                <div className="pg-landing-screen__features__content__row__item">
                                    <img
                                        src={FeaturesSecurityIcon}
                                        alt={this.translate('page.body.landing.features.features.item4.title')}
                                    />
                                    <h2>{this.translate('page.body.landing.features.features.item4.title')}</h2>
                                    <span>{this.translate('page.body.landing.features.features.item4.text')}</span>
                                </div>
                            </div>
                            <div className="pg-landing-screen__features__content__row">
                                <div className="pg-landing-screen__features__content__row__item">
                                    <img
                                        src={FeaturesCommunityIcon}
                                        alt={this.translate('page.body.landing.features.features.item5.title')}
                                    />
                                    <h2>{this.translate('page.body.landing.features.features.item5.title')}</h2>
                                    <span>{this.translate('page.body.landing.features.features.item5.text')}</span>
                                </div>
                                <div className="pg-landing-screen__features__content__row__item">
                                    <img
                                        src={FeaturesAPIIcon}
                                        alt={this.translate('page.body.landing.features.features.item6.title')}
                                    />
                                    <h2>{this.translate('page.body.landing.features.features.item6.title')}</h2>
                                    <span>{this.translate('page.body.landing.features.features.item6.text')}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </LandingBlock>


                <LandingBlock
                    className="pg-landing-screen__trade-on-the-go"
                    contentClassName="pg-landing-screen__trade-on-the-go-content">
                    <div className="pg-landing-screen__trade-on-the-go__wrap">
                     {/* <div className="pg-landing-screen__trade-on-the-go__wrap__image" />
                        <div className="pg-landing-screen__trade-on-the-go__wrap__content">
                            <h1>{this.translate('page.body.landing.tradeOnTheGo.item.title')}</h1>
                            <h2>{this.translate('page.body.landing.tradeOnTheGo.item.text1')}</h2>
                            <h2>{this.translate('page.body.landing.tradeOnTheGo.item.text2')}</h2>
                            <h2>{this.translate('page.body.landing.tradeOnTheGo.item.text3')}</h2>
                            <Link to="/trading/" className="landing-button">
                                {this.translate('page.body.landing.tradeOnTheGo.item.button')}
                            </Link>
                        </div>  */}
                                        
                 {/* <h2  style={{transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d', opacity: 1}} className="display-3 text-center">
										Tenha tudo 
										<span className="color-accent">.<br /></span>
										<span>Em uma única Plataforma</span>
										<span className="color-accent">.<br /></span>
										<span>Em um único App</span>
										<span className="color-accent">.</span>
										<span> Na palma da sua mão</span>
										<span className="color-accent">...</span>

				</h2> */}
			
                        {this.renderDownloadDevices()}

                    </div>
                </LandingBlock>

                
                <LandingBlock> 
                <div className="pg-landing-screen__start-trading">
                    <div className="pg-landing-screen__start-trading__wrap">
                    <Parallax rotateX={[-70, 0]} easing="easeInOutCirc">
				            <img src={mobile} style={{backgroundImage: 'radial-gradient(300px at center, #4a4a4a, transparent )', display: 'block', marginTop: '60px', transformOrigin: '90% 0px', marginLeft: 'auto', marginRight: 'auto', objectFit: 'contain', }} className="theme-shape-center" />
			        </Parallax>
                        <h1>{this.translate('page.body.landing.startTrading.title')}</h1>
                        <div className="pg-landing-screen__start-trading__wrap__content">
                            <Link to="/signup" className="landing-button">
                                {this.translate('page.body.landing.startTrading.button1')}
                            </Link>
                            <Link to="/trading/" className="landing-button landing-button--secondary">
                                {this.translate('page.body.landing.startTrading.button2')}
                            </Link>
                        </div>
                    </div>
                </div>
                </LandingBlock>

                <LandingBlock>

                    <div className="blog-area rn-section-gap theme-shape-root">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <SectionTitle
                                        textAlign = "text-center"
                                        radiusRounded = ""
                                        subtitle = ""
                                        title = "Arena do conhecimento"
                                        description = "Acompanhe os últimos acontecimentos nos mercados de ativos digitais"
                                    />
                                </div>
                            </div>
                            <div className="row row--15">
                                {BlogListData.map((item) => (
                                    <div key={item.id} className="col-lg-4 col-md-6 col-12 mt--30">
                                        <BlogList StyleVar="box-card-style-default" data={item} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                </LandingBlock>
    
   




                
                {/* <div className="pg-landing-screen__footer">
                    <div className="pg-landing-screen__footer__wrap">
                        <div className="pg-landing-screen__footer__wrap__left" onClick={(e) => this.handleScrollTop()}>
                            <Logo />
                        </div>
                        <div className="pg-landing-screen__footer__wrap__navigation">
                            <div className="pg-landing-screen__footer__wrap__navigation__col">
                                <Link to="/trading/">{this.translate('page.body.landing.footer.exchange')}</Link>
                                <Link to="/wallets">{this.translate('page.body.landing.footer.wallets')}</Link>
                                <Link to="/">{this.translate('page.body.landing.footer.fees')}</Link>
                            </div>
                            <div className="pg-landing-screen__footer__wrap__navigation__col">
                                <Link to="/">{this.translate('page.body.landing.footer.faq')}</Link>
                                <Link to="/">{this.translate('page.body.landing.footer.support')}</Link>
                                <Link to="/">{this.translate('page.body.landing.footer.privacy')}</Link>
                            </div>
                            <div className="pg-landing-screen__footer__wrap__navigation__col">
                                <Link to="/">{this.translate('page.body.landing.footer.about')}</Link>
                                <Link to="/">{this.translate('page.body.landing.footer.community')}</Link>
                                <Link to="/">{this.translate('page.body.landing.footer.info')}</Link>
                            </div>
                        </div>
                        <div className="pg-landing-screen__footer__wrap__social">
                            <div className="pg-landing-screen__footer__wrap__social__row">
                                <img src={TelegramIcon} alt="Telegram" />
                                <img src={LinkedInIcon} alt="LinkedIn" />
                                <img src={TwitterIcon} alt="Twitter" />
                                <img src={YouTubeIcon} alt="YouTube" />
                            </div>
                            <div className="pg-landing-screen__footer__wrap__social__row">
                                <img src={RedditIcon} alt="Reddit" />
                                <img src={FacebookIcon} alt="Facebook" />
                                <img src={MediumIcon} alt="MediumIcon" />
                                <img src={CoinMarketIcon} alt="CoinMarket" />
                            </div>
                        </div>
                    </div>
                    <span className="pg-landing-screen__footer__rights">
                        {this.translate('page.body.landing.footer.rights')}
                    </span>
                </div> */}
                
                {/* <h2  style={{transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d', opacity: 1}} className="display-3 text-center">
										Tenha tudo 
										<span className="color-accent">.<br /></span>
										<span>Em uma única Plataforma</span>
										<span className="color-accent">.<br /></span>
										<span>Em um único App</span>
										<span className="color-accent">.</span>
										<span> Na palma da sua mão</span>
										<span className="color-accent">...</span>

				</h2> */}





    <Footer />
            
    </div>
        );
    }

private handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

private translate = (key: string) => this.props.intl.formatMessage({ id: key });

}

const mapStateToProps = (state: RootState): ReduxProps => ({
    isLoggedIn: selectUserLoggedIn(state),
    colorTheme: selectCurrentColorTheme(state),
});

export const LandingScreen = compose(
    injectIntl,
    withRouter,
    connect(mapStateToProps, null)
)(Landing) as React.ComponentClass;
