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
                
                <div className={`header-top-news bg_image`} >
            <div className="wrapper">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="inner">
                                <div className="content">
                                    <span className="rn-badge">Limited Time Offer</span>
                                    <span className="news-text">Intro price. Get Doob for Big Sale <strong>-95% off.</strong></span>
                                </div>
                                <div className="right-button">
                                    <a className="btn-read-more" target="_blank" href="https://themeforest.net/checkout/from_item/33571911?license=regular"><span>Purchase Now <FiArrowRight /></span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="icon-close">
                <button className="close-button"><FiX /></button>
            </div>
        </div>



                <div className="pg-landing-screen__header">
                    <div className="pg-landing-screen__header__wrap">
                        <div className="pg-landing-screen__header__wrap__left" onClick={(e) => this.handleScrollTop()}>
                            <Logo />
                        </div>
                        <div className="pg-landing-screen__header__wrap__right">
                            {this.props.isLoggedIn ? (
                                <Link to="/profile" className="landing-button">
                                    {this.translate('page.body.landing.header.button1')}
                                </Link>
                            ) : (
                                <>
                                    <Link to="/signup" className="landing-button">
                                        {this.translate('page.body.landing.header.button3')}
                                    </Link>
                                    <Link to="/signin" className="landing-button landing-button--simple">
                                        {this.translate('page.body.landing.header.button2')}
                                    </Link>
                                      <NavBar/>
                                        
                                        
                                </>
                            )}
                        </div>
                    </div>
                </div>
                
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

export const LandingScreenMobile = compose(
    injectIntl,
    withRouter,
    connect(mapStateToProps, null)
)(Landing) as React.ComponentClass;
