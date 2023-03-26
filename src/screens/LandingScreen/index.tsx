import { LandingBlock } from '@openware/react-components';
import * as React from 'react';
import { injectIntl } from 'react-intl';
import { connect } from 'react-redux';
import { Link, RouteProps, withRouter } from 'react-router-dom';
import { compose } from 'redux';

import { IntlProps } from '../../';
import { Logo } from '../../components';
import { MarketsTable } from '../../containers';
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


import { HomepageMarket } from '../../containers';
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
        return (
            <div className="pg-landing-screen">
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
                                    <Link to="/signin" className="landing-button landing-button--simple">
                                        {this.translate('page.body.landing.header.button2')}
                                    </Link>
                                    <Link to="/signup" className="landing-button">
                                        {this.translate('page.body.landing.header.button3')}
                                    </Link>
                                </>
                            )}
                        </div>
                    </div>
                </div>
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
			
                        {this.renderDownloadDevices()}

                    </div>
                </LandingBlock>
                <div className="pg-landing-screen__start-trading">
                    <div className="pg-landing-screen__start-trading__wrap">
                    <Parallax rotateX={[-70, 0]} easing="easeInOutCirc">
				            <img src={mobile} style={{backgroundImage: 'radial-gradient(300px at center, #4a4a4a, transparent )', display: 'block', marginTop: '60px', transformOrigin: '90% 0px', marginLeft: 'auto', marginRight: 'auto', height: '740px', width: '680px', objectFit: 'contain', }} className="theme-shape-center" />
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
                <div className="pg-landing-screen__footer">
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
                </div>
                
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
