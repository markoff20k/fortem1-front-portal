import { LandingBlock } from '@openware/react-components';
import * as React from 'react';
import { useRef, useLayoutEffect, useState } from 'react';
import { injectIntl } from 'react-intl';
import { connect } from 'react-redux';
import { Link, RouteProps, withRouter } from 'react-router-dom';
import { compose } from 'redux';

import { IntlProps } from '../../';
// import { Logo } from '../../components';

import Logo from 'src/assets/images/logo_branca_bandeira_verde.svg';

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

import ServiceA from "../../template_react/doob/src/elements/service/ServiceA";
import ServiceB from "../../template_react/doob/src/elements/service/ServiceB";
import ServiceC from "../../template_react/doob/src/elements/service/ServiceC";
import ServiceD from "../../template_react/doob/src/elements/service/ServiceD";
import ServiceE from "../../template_react/doob/src/elements/service/ServiceE";


import serviceBorder from './Home/Telegram.svg' ;



import { HomepageMarket, Footer } from '../../containers';
// import { MarketOverviewList } from '../MarketOverviewList';

import {TextDecrypt} from './TextDecrypt.js';
import ScrollAnimation from "react-animate-on-scroll";
import { Parallax } from 'react-scroll-parallax';
// import mobile from './fortem-mobile.png';
import mobile from './mobileFortem.png';
import DownloadAPP from './Home/Screen1.png';
import DownloadGG from './Home/Screen2.png';
import Download1 from './Home/Screen4.png';
import Download2 from './Home/Screen3.png';
import devicePhone from './Home/fortemDevices-iPhone.png';
import deviceLaptop from './Home/fortemDevices-Laptop.png';

import block from './block.svg';

import Flip from 'react-reveal/Flip';

import SectionTitle from "../../elements/sectionTitle/SectionTitle";
import BlogList from "../../components/blog/itemProp/BlogList";

import BlogClassicData from '../../data/blog/BlogList.json';
var BlogListData = BlogClassicData.slice(0, 6);

import HeaderTopNews from "./components/HeaderTopNews";
import { FiX , FiArrowRight} from "react-icons/fi";

import {HeaderLanding} from '../../containers/HeaderLanding';

import HeaderTwo from './components/header/HeaderTwo';
import Typed from 'react-typed';


import { SaleListTablesUpcoming } from '../../plugins/Sale/containers/SaleListTablesUpcoming';
import { SaleListTables } from 'src/plugins/Sale';

import {Player, Controls} from '@lottiefiles/react-lottie-player';

import Cubes from './cubes.json';

import Accordion from 'src/template_react/doob/src/elements/accordion/AccordionOne';


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

   


    public render() {

        // const [deactive, setClass] = useState('');

        
        return (
    <>
        {/* <div className='pg-header '> <HeaderLanding/> </div> */}
        <HeaderLanding/>
        <div className="pg-landing-screen" >
            
        <div className="theme-shape-root-landing">
   
            {/* <div className="bg-overlay bg_image" style={{ width: '100vw', height: '80vh', }}> */}
            <div className="bg_image" style={{ width: '100vw', height: '100vh', }}>
            
            <div className='bg_overlay cube'> 
            <Player
  autoplay
  loop
  speed={0.6}
  src={Cubes}
  style={{  background: 'transparent', position: 'relative', opacity: '0.6', }}
>
  <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
</Player>
</div>

				<img src={block} style={{filter: 'blur(1px)', backgroundSize: 'cover', opacity: '0', zIndex: '1', width: '100%', height: '90vh'}}/>

                <div className='logo'>
                    <img src={Logo} />
                    {/* <h2>Olá, Somos a Fortem ONE.</h2> */}
                    {/* <h4>FinTech provedora de serviços e software para: </h4> */}
                    <h4>SEUS PROJETOS. SUAS ESCOLHAS. NOSSA TECNOLOGIA. </h4>
                    <h6>-	Corretoras e plataformas de negociação</h6>
                    <h6>-	Serviços financeiros, bancos e carteiras de ativos digitais</h6>
                    <h6>-	Plataformas de investimentos e tokenização de ativos</h6>
                    <h6>-	Soluções e meios de pagamento</h6>
                </div>
            </div>

          
        </div>


        <div className="landing-section-cards" >
		<section className='section pd-top-300px wf-section'>
			<div className='container-default w-container'>
				<div className='mg-bottom-48px'> 
					<div className="inner-container _912px center">
						<div className="text-center">
							<div className="position-relative">
							{/*<GradientBorder borderRadius='15px' >*/}
								<div className="position-relative z-index-1" >
								
								<Parallax rotateX={[-90, 0]} easing="easeInOutCirc">

									<p style={{fontSize: '68px', fontWeight: '700', letterSpacing: '4px', lineHeight: '84px', fontFamily: 'Inter, sans-serif', transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d', opacity: 1}} className="display-2">
										Plataforma 
                                        
										<span className="color-accent">.<br /></span>
                                    </p>
                                    <p style={{fontSize: '68px', fontWeight: '700', letterSpacing: '4px', lineHeight: '84px', fontFamily: 'Inter, sans-serif', transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d', opacity: 1}} className="display-2">
                                        para todas necessidades
									    <span className="color-accent">.</span>
									</p>
									<p style={{fontSize: '30px', fontFamily: 'Inter, sans-serif', color: '#acacac', lineHeight: '44.2px'}}>Da emissão primária à negociação no mercado secundário. Somos o único provedor de tecnologia a oferecer soluções para o ciclo completo .</p>
								</Parallax>
								
								</div>
								{/*</GradientBorder>*/}
								
								<ScrollAnimation animateIn="fadeInUp" animateOut="fadeInOut" animateOnce={false}></ScrollAnimation>
								<div className="position-absolute top number-01">
									<div className="text-big-outline" style={{opacity: 1}}>
										01</div>
								</div>
								<ScrollAnimation />
							</div>
						</div>
					</div>
				</div>
            </div>


                        {this.renderInfo()}






        </section>
        </div>




                <LandingBlock className="pg-landing-screen__top">
                    
                    
        {/* <div className="pg-landing-screen__why bg-gradient-to-b from-fortem1neutral-700 via-fortem1typo-500 to-fortem1neutral-700"> */}
        <div className="pg-landing-screen__why">
            <div className="row-card">
                <div className="pg-landing-screen__why-card-1">
                    <p>Porquê a Fortem?</p>
                    <h1>Segurança, escalabilidade e estabilidade</h1>
                </div>
                <div className="pg-landing-screen__why-card">
                    <p>Arquitetura distribuída</p>
                    <div className="pg-landing-screen__why-card-info">
                        <div className="icon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" className="hi-outline hi-template inline-block w-12 h-12 text-indigo-500">
                                <path fill="#009991" d="M118.8 43.3c-3.2.3-8.2.8-15.2 1.6-3.7.4-7.8.8-11.9 1.2l-2.1-2.4c-4-4.1-9-7.4-14.6-9.6-5.6-2.2-11.9-3.5-18.3-3.2-6.4.3-13 1.8-19.2 4.6C25.1 41.2 14.6 52.6 9.9 67c-2.4 7.1-3.3 15-2.6 22.8 0 2 .5 3.9.8 5.9.3 2 .8 4 1.4 5.9 1.2 3.9 2.7 7.7 4.7 11.3l-2 1.4c-3.2-4.6-5.8-9.6-7.7-15.1-11.8-33.3 5.6-69.9 38.9-81.8 28.7-10.2 59.7 1.3 75.4 25.9z" />
                                <path fill="#009991" d="M45.7 74.6c-.8 8.5 4.4 16.2 12.7 18.6 5.2 1.4 10.2.5 15.5-2.9 8.2-5.3 48.9-29.8 51.7-31.5 1.3-.8 1.9-2.4 1.4-3.8-.4-1.1-1.3-2-2.5-2.2-.3-.1-.6-.1-.9-.1-2.7.2-56.9 6-61.9 6.4-8.6.7-15.1 7-16 15.5z" />
                            </svg>
                        </div>
                        <p className='title'>Alta disponibilidade</p>
                        <p className='description'>Nossa plataforma eletrônica foi projetada e desenvolvida a partir de uma arquitetura tecnológica de missão crítica, com alta disponibilidade, contingências e capacidade de processamento para suportar os momentos mais voláteis dos mercados.</p>
                    </div>
                </div>
            </div>
            <div className="row-card">
                <div className="pg-landing-screen__why-card-2">
                    <p>Porque Fortem?</p>
                    <div className="pg-landing-screen__why-card-info">
                        <p className='title'>Monitoração constante</p>
                        <p className='description'>Várias camadas e mecanismos de segurança atuam em conjunto com um Centro de Monitoração especializado, 24 horas x 7 dias da semana.
                                    Tudo isso para garantir aos nossos clientes um ambiente profissional, seguro e estável.
                                    E mais, sem necessidade de correr riscos enviando seus recursos para fora do país.</p>
                    </div>
                </div>
                <div className="pg-landing-screen__why-card">
                    <p>Descrubra mais</p>
                    <div className="pg-landing-screen__why-card-info">
                    </div>
                </div>
            </div>
            <div className="row-card">
                <div className="pg-landing-screen__why-card-2">
                    <p>Porque Fortem?</p>
                    <div className="pg-landing-screen__why-card-info">
                        <p className='title'>Missão crítica</p>
                        <p className='description'>Nossa plataforma eletrônica foi projetada e desenvolvida a partir de uma arquitetura tecnológica de missão crítica, com alta disponibilidade, contingências e capacidade de processamento para suportar os momentos mais voláteis dos mercados.</p>
                    </div>
                </div>
                <div className="pg-landing-screen__why-card-1">
                    <p>Descrubra mais</p>
                    <div className="pg-landing-screen__why-card-info">
                        <h1>Agende uma demonstração</h1>
                        <button className='button-schedule'>Agendar </button>
                    </div>
                </div>
            </div>
        </div>
                    
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

                        <h3 className="text-lg font-bold mb-2 color-accent  text-fortem1typo-100">Estabilidade, desempenho e capacidade</h3>
                        {/* <span className="color-accent">.</span> */}

                                <p className="text-md leading-6 text-fortem1typo-100">
                                    Nossa plataforma eletrônica foi projetada e desenvolvida a partir de uma arquitetura tecnológica de missão crítica, com alta disponibilidade, contingências e capacidade de processamento para suportar os momentos mais voláteis dos mercados.
                                </p>
                                <br/>
                                <Link to={""}>
                                    <p className="color-accent"> Conheça nossa página de status dos serviços  <i className="icon"><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></i></p>
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


                        <img
                                        src={FeaturesAPIIcon}
                                        className="hi-outline hi-template inline-block w-12 h-12 text-indigo-500"          
                                    />

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

                        
                            {/* <svg xmlns="http://www.w3.org/2000/svg" width="288" height="288" className="hi-outline hi-template inline-block w-12 h-12 text-indigo-500">
                                <svg xmlns="http://www.w3.org/2000/svg" width="288" height="288" viewBox="0 0 48 48">
                                    <path fill="#009991" d="m22.1 33.7-6.7-1-3-6.1c-.2-.3-.5-.6-.9-.6s-.7.2-.9.6l-3 6.1-6.7 1c-.4 0-.7.3-.9.6-.1.4 0 .8.3 1l4.9 4.8L4 46.8c-.1.4.1.8.4 1 .3.2.7.3 1.1.1l6-3.2 6 3.2c.1.1.6.3 1.1-.1.3-.2.5-.6.4-1l-1.2-6.7 4.9-4.8c.3-.3.4-.7.3-1-.2-.3-.5-.6-.9-.6zm-6 5.4c-.2.2-.3.6-.3.9l.9 5.2-4.7-2.5c-.3-.2-.6-.2-.9 0l-4.7 2.5.9-5.2c.1-.3-.1-.7-.3-.9l-3.8-3.7 5.3-.8c.3 0 .6-.3.8-.5l2.3-4.8 2.3 4.8c.1.3.4.5.8.5l5.3.8-3.9 3.7zM33.7 7.6l-6.7-1-3-6.1c-.3-.3-.6-.5-1-.5s-.7.2-.9.6l-3 6.1-6.7 1c-.4 0-.7.3-.8.6-.1.4 0 .8.3 1l4.9 4.8-1.2 6.7c-.1.4.1.8.4 1 .3.2.7.3 1.1.1l6-3.2 6 3.2c.1.1.6.3 1.1-.1.3-.2.5-.6.4-1l-1.2-6.7 4.9-4.8c.3-.3.4-.7.3-1-.3-.3-.6-.6-.9-.7zM27.6 13c-.2.2-.3.6-.3.9l.9 5.2-4.7-2.5c-.3-.2-.6-.2-.9 0l-4.7 2.5.9-5.2c.1-.3-.1-.7-.3-.9l-3.8-3.7 5.3-.8c.3 0 .6-.3.8-.5L23 3.3 25.4 8c.1.3.4.5.8.5l5.3.8-3.9 3.7zM47.1 33.7l-6.7-1-3-6.1c-.2-.3-.5-.6-.9-.6s-.7.2-.9.6l-3 6.1-6.7 1c-.4.1-.7.3-.8.7-.1.4 0 .8.3 1l4.9 4.8-1.3 6.6c-.1.4.1.8.4 1 .3.2.7.3 1.1.1l6-3.2 6 3.2c.1.1.6.3 1.1-.1.3-.2.5-.6.4-1l-1.2-6.7 4.9-4.8c.3-.3.4-.7.3-1-.2-.3-.5-.6-.9-.6zm-6 5.4c-.2.2-.3.6-.3.9l.9 5.2-4.7-2.5c-.3-.2-.6-.2-.9 0l-4.7 2.5.9-5.2c.1-.3-.1-.7-.3-.9l-3.8-3.7 5.3-.8c.3 0 .6-.3.8-.5l2.3-4.8 2.3 4.8c.1.3.4.5.8.5l5.3.8-3.9 3.7z" />
                                </svg>
                            </svg> */}

                            <svg xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" clip-rule="evenodd" viewBox="0 0 32 32" className="hi-outline hi-template inline-block w-12 h-12 text-indigo-500">
                                <rect width="32" height="32" fill="none"/>
                                <path fill="#009991" d="M41.767,197.818L41.745,195.98L40.628,193.989C40.457,193.685 40.457,193.315 40.628,193.011L41.745,191.02L41.773,188.738C41.777,188.389 41.963,188.068 42.262,187.89L44.225,186.725L45.39,184.762C45.568,184.463 45.889,184.277 46.238,184.273L48.52,184.245L50.511,183.128C50.815,182.957 51.185,182.957 51.489,183.128L53.48,184.245L55.762,184.273C56.111,184.277 56.432,184.463 56.61,184.762L57.775,186.725L59.738,187.89C60.037,188.068 60.223,188.389 60.227,188.738L60.255,191.02L61.372,193.011C61.543,193.315 61.543,193.685 61.372,193.989L60.255,195.98L60.232,197.84L64.705,202.291C64.967,202.552 65.064,202.935 64.957,203.289C64.851,203.642 64.558,203.908 64.196,203.981C64.196,203.981 61.985,204.423 60.504,204.719C60.108,204.798 59.798,205.108 59.719,205.504C59.423,206.985 58.981,209.196 58.981,209.196C58.908,209.558 58.643,209.85 58.29,209.957C57.937,210.064 57.554,209.968 57.293,209.707L51.469,203.883C51.176,204.039 50.824,204.039 50.531,203.883L44.707,209.707C44.446,209.968 44.063,210.064 43.71,209.957C43.357,209.85 43.092,209.558 43.019,209.196C43.019,209.196 42.577,206.985 42.281,205.504C42.202,205.108 41.892,204.798 41.496,204.719C40.015,204.423 37.804,203.981 37.804,203.981C37.442,203.908 37.15,203.643 37.043,203.29C36.936,202.937 37.032,202.554 37.293,202.293L41.767,197.818ZM59.071,199.506L57.775,200.275L56.61,202.238C56.432,202.537 56.111,202.723 55.762,202.727L53.48,202.755L53.281,202.867L57.386,206.972L57.758,205.111C57.995,203.924 58.924,202.995 60.111,202.758L61.966,202.387L59.071,199.506ZM42.916,199.498L40.028,202.386L41.889,202.758C43.076,202.995 44.005,203.924 44.242,205.111L44.614,206.972L48.719,202.867L48.52,202.755L46.238,202.727C45.889,202.723 45.568,202.537 45.39,202.238L44.225,200.275L42.916,199.498ZM50.863,201.777L51,201.853L52.724,200.887C52.869,200.805 53.033,200.761 53.201,200.759L55.177,200.734L56.186,199.035C56.271,198.891 56.391,198.771 56.535,198.686L58.234,197.677L58.259,195.701C58.261,195.533 58.305,195.369 58.387,195.224L59.353,193.5L58.387,191.776C58.305,191.631 58.261,191.467 58.259,191.299L58.234,189.323L56.535,188.314C56.391,188.229 56.271,188.109 56.186,187.965L55.177,186.266L53.201,186.241C53.033,186.239 52.869,186.195 52.724,186.113L51,185.147L49.276,186.113C49.131,186.195 48.967,186.239 48.799,186.241L46.823,186.266L45.814,187.965C45.729,188.109 45.609,188.229 45.465,188.314L43.766,189.323L43.741,191.299C43.739,191.467 43.695,191.631 43.613,191.776L42.647,193.5L43.613,195.224C43.695,195.369 43.739,195.533 43.741,195.701L43.766,197.677L45.465,198.686C45.609,198.771 45.729,198.891 45.814,199.035L46.823,200.734L48.799,200.759C48.967,200.761 49.131,200.805 49.276,200.887L50.835,201.761L50.846,201.767L50.863,201.777ZM48.86,190.518L50.116,188.138C50.289,187.81 50.629,187.605 51,187.605C51.371,187.605 51.711,187.81 51.884,188.138L53.14,190.518L55.792,190.977C56.158,191.04 56.458,191.301 56.573,191.653C56.687,192.006 56.597,192.393 56.339,192.659L54.463,194.589L54.846,197.253C54.899,197.62 54.744,197.986 54.444,198.204C54.144,198.422 53.748,198.456 53.415,198.293L51,197.105L48.585,198.293C48.252,198.456 47.856,198.422 47.556,198.204C47.256,197.986 47.101,197.62 47.154,197.253L47.537,194.589L45.661,192.659C45.403,192.393 45.313,192.006 45.427,191.653C45.542,191.301 45.842,191.04 46.208,190.977L48.86,190.518ZM51,190.748L50.399,191.886C50.254,192.161 49.991,192.352 49.685,192.405L48.416,192.625L49.314,193.548C49.53,193.77 49.631,194.08 49.587,194.387L49.403,195.662L50.559,195.094C50.837,194.957 51.163,194.957 51.441,195.094L52.597,195.662L52.413,194.387C52.369,194.08 52.47,193.77 52.686,193.548L53.584,192.625L52.315,192.405C52.009,192.352 51.746,192.161 51.601,191.886L51,190.748Z" transform="translate(-35 -180)"/>
                            </svg>

                            
                        </div>
                        <h3 className="text-lg font-bold mb-2 text-fortem1typo-100">Portfólio diversificado de ativos digitais</h3>

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




                

                {/* <LandingBlock className="pg-landing-screen__features">
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

 */}
                
                <LandingBlock> 
                <div className="pg-landing-screen__start-trading">
                    <div className="pg-landing-screen__start-trading__wrap">
                    <Parallax rotateX={[-60, 0]} easing="easeInOutCirc">
				            <img src={mobile} style={{backgroundImage: 'radial-gradient(300px at center, #4a4a4a, transparent )', display: 'block', marginTop: '80px', marginLeft: 'auto', marginRight: 'auto', objectFit: 'contain', }} className="theme-shape-center" />
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

                <LandingBlock>
                    <SaleListTablesUpcoming />     
                     <SaleListTables /> 
                </LandingBlock>

                <LandingBlock>
                    <Accordion customStyle={'teste'} />
                    
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




        <div className="w-full h-auto absolute inset-0 z-[-1]"><div style={{position: 'relative', width: '100%', height: '100%', overflow: 'hidden', pointerEvents: 'auto'}}><div style={{width: '100%', height: '100%'}}><canvas style={{display: 'block', width: '1161px', height: '1547px'}} data-engine="three.js r149" width="1161" height="1547"></canvas></div></div></div>
    <Footer />
            
    </div>
    </>
        );
    }


    private renderCryptoTabs = () => (
        <div className="counter-wrap">
                
                    
                        {/* <div className="col-lg-12" >
                            <SectionTitle
                                textAlign = "text-center"
                                radiusRounded = ""
                                subtitle = ""
                                title = "Conheça nosso portfólio diversificado de ativos digitais"
                                description = ""
                            />
                            <p style={{fontSize: '26px'}} className="text-center"> Todo o universo cripto para você escolher </p>
                        </div> */}
                        {this.renderInfo()}
                    
                
        </div>

    );

    private renderInfo = () => {
		const InfoItem = ({ name, value, color = '' }) => {
			return (
				<div className=" bg_image servicesFortem-inner"  style={{  width: '199px', height: '194px', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundImage: `url(${serviceBorder})`, marginBottom: '20px'  }} >
                <div className="homepage-info">
					<div>
						<h2 className="homepage-info__number" style={{ color: `${'#F5F5F5'}` }}>
							{value}
						</h2>
					</div>
					<div>
						<h4 className="homepage-info__text">{name}</h4>
					</div>
				</div>
                </div>
			);
		};

		return (
			<div className="counter-wrap">
				
					<div className="card-wrapper">
						{/*<InfoItem name={'Currencies'} value={statistics.currencies} color="#99FFE7" />*/}
						<InfoItem name={'Microserviços'} value={'300+'} color="#F5F5F5" />
                        <p>Tecnologias de ponta orientadas a micro serviços fazem parte do core da nossa arquitetura. Escalabilidade automática, desempenho e alta disponibilidade são os principais pilares que garantem a estabilidade das nossas soluções. Até mesmo soluções mais complexas podem ser simplificadas com o uso da nossa tecnologia.</p>
					</div>
					<div className="card-wrapper">
						<InfoItem name={'Ativos digitais'} value={'500+'} color="#F5F5F5" />
                        <p>Suporte nativo aos principais ativos digitais e integração com os maiores provedores de liquidez globais fornecem extrema eficiência ao seu negócio, melhores ofertas e menores custos com spreads.</p>
					</div>
					<div className="card-wrapper">
						<InfoItem name={'Blockchains'} value={'20+'} color="#F5F5F5" />
                        <p>Suporte nativo aos principais ativos digitais e integração com os maiores provedores de liquidez globais fornecem extrema eficiência ao seu negócio, melhores ofertas e menores custos com spreads.</p>
					</div>
				
			</div>
		);
	};

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
