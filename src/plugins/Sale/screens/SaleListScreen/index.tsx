import { Button } from 'antd';
import * as React from 'react';
import { SaleListTables, SaleListTablesUpcoming } from '../../containers';
import Slider from 'react-slick';
import news from './news.svg';
import Flip from 'react-reveal/Flip';
import Zoom from 'react-reveal/Zoom';
import Flash from 'react-reveal/Flash';
import Pulse from 'react-reveal/Pulse';
import RubberBand from 'react-reveal/RubberBand';
import { Parallax } from 'react-scroll-parallax';



import './SaleListScreen.css';


import bgF from './bfF-tokens.svg';

const settingEvents = {
	dots: false,
	infinite: true,
	speed: 500,
	autoplay: true,
	autoplaySpeed: 10000,
	pauseOnHover: true,
	slidesToShow: 1,
	slidesToScroll: 1,
};

const BannerData2 = [
    {
        event_name: "Conecte-se ",
        description: "com os ativos digitais" ,
		ref_link: "",
    },
	{
        event_name: "Conecte-se ",
        description: "com o crédito" ,
		ref_link: "",
    },
	{
        event_name: "Diversifique ",
        description: "como os grandes" ,
		ref_link: "",
    },    
	{
        event_name: "Tranforme ",
        description: "a incerteza econômica em oportunidade." ,
		ref_link: "",
    },    
]

const renderEvent = () => {
	return (
	
		<div className="homepage-event  rn-header header-default " style={{background: '#000',  margin: '0px auto', marginLeft: '5px', display: 'flex', flexDirection: 'row', height: '36px', borderTop: '2px solid #46473E', borderBottom: '2px solid #46473E', minWidth: '100px', }}> 
		
			<div  className="news-event "  style={{margin: '0 auto', maxWidth: '80px', background: '#000', alignItems: 'center',  color: '#1EDED0', borderRight: '1px solid gray', fontSize: '16px',  maxHeight: '32px' }}>
			<Pulse forever={true}>	<img src={news} style={{ marginTop: '5px', minWidth: '30px', }}></img></Pulse>
								
			</div>

			{/* <div className="container2  theme-shape-root"  style={{  background: '#000', color: '#1EDED0', alignItems: 'center',   marginLeft: '10px', height: '26px', backgroundColor: '#000'}}>


				<Slider {...settingEvents}>
					{BannerData2.map(event => {
						return (
							<div className="news-event text-center justify-content-center" style={{display: 'flex', textAlign: 'center'}}>
								<h3  style={{opacity: '1', fontSize: '16px', color: '#F5F5F5', letterSpacing: '3px', marginTop: '-14px', background: '#000',  fontFamily: 'Raleway Dots'}} >
								
									<a style={{fontFamily: 'Raleway Dots'}} href={event.ref_link}>{event.event_name}{event.description}</a>
								
								</h3>
							
							</div>
						);
					})}
				</Slider>
			</div> */}
		</div>
	);
};

export const SaleListScreen: React.FC = () => {
	return (
		<React.Fragment>
		{/* <div className="sale-list" style={{backgroundColor: '#131313'}}> */}
			{/* {renderEvent()}	 */}

			<div className="sale-list-banner">
			
				{/* <div  style={{ backgroundImage: `url(${bgF})` }} /> */}


					<img src={bgF}  style={{ height: '500px' }}/>

					<div className="sale-list-title" id="sale-list-title">Título do artigo sobre tokens</div>
					<div className="sale-list-subtitle" id="sale-list-subtitle">Texto sobre a notícia principal com uma chamada para o usuário clicar no banner com até 256 caracteres.</div>
					<button className="btn-token" > Comprar tokens</button>
			
				
				{/* <img src={bgF} style={{backgroundImage: 'radial-gradient(300px at center, #4a4a4a, transparent )',objectFit: 'contain', }} className="theme-shape-center" /> */}
	
				
				
			
			</div>


			<div id="sale-list" className="container-fluid">

					<div className="mt-3">
						{/*<h1  className="sale-list__title">Seja bem-vindo ao marketplace de tokens da Fortem ONE</h1>*/}
						<div className="sale-list-highlight">Tokens em destaque</div>
					</div>

						<div className="mt-3">
							<SaleListTablesUpcoming />
						</div>
			</div>
		{/* </div> */}
		</React.Fragment>
	);
};
 