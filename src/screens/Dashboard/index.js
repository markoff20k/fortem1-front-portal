import React, { useState } from "react";

import {
  Container2,
  Alert,
  Content,
  Button,
  CardsPatrimony,
  CardsAnnoucement,
  Carousel,
  Slid,
  Deposit,
  SlidTokens,
  Tokens,
  Criptos,
  Tables,
  Negotiation,
  Knowledge,
} from "./style";
import imgBell from "../../assets/bell.svg";
import { Patrimony } from "../../components/Cards/Patrimony";
import { Announcement } from "../../components/Cards/Announcement";
import { CarouselSlide } from "../../components/Carousel";
import { TokensSlid } from "../../components/Cards/Tokens";
// import { KnowledgeCards } from "../../components/Cards/Knowledge";
import img1 from "../../assets/image-1.svg";
import img2 from "../../assets/image-2.svg";
import img3 from "../../assets/image-3.svg";
import img4 from "../../assets/image-4.svg";
import imgUSDT from "../../assets/USDT.svg";
import imgBTC from "../../assets/BTC.svg";
import { TabelCripto } from "../../components/Table";
import { QRCode } from "../../components/FastDeposit/QRCode";


import { Sidebar, HomepageMarket } from '../../containers';

// import { Marketsl } from "src/containers/MarketsListExchange";
import { UserWithdrawalLimits } from '../../containers/Withdraw/UserWithdrawalLimits';

import { MarketsList } from '../../containers/MarketsList';


import { Link, useHistory } from 'react-router-dom';


import BlogList from "../../components/blog/itemProp/BlogList";

import BlogClassicData from '../../data/blog/BlogList.json';


import { ReactDimmer } from 'react-dimmer';

import { SaleListTablesUpcoming } from '../../plugins/Sale/containers/SaleListTablesUpcoming';

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

import { useSelector } from 'react-redux';

import { useDocumentTitle, useP2PWalletsFetch, useWalletsFetch } from 'src/hooks';
import { selectCurrencies, selectP2PWallets, selectWallets, selectMarkets, selectMarketTickers, Wallet } from 'src/modules';

// import { estimateUnitValue, estimateValue } from 'helpers/estimateValue';
import { estimateValue } from 'src/helpers/estimateValue';
import { estimateUnitValue } from 'src/helpers/estimateValue';

// import { VALUATION_PRIMARY_CURRENCY, VALUATION_SECONDARY_CURRENCY } from '../../../constants';
import { VALUATION_PRIMARY_CURRENCY, VALUATION_SECONDARY_CURRENCY } from 'src/constants';
import { formatWithSeparators } from 'src/components';

import imgLock from './Lock.svg';
import imgShield from './Shield.svg';

// import { createStyles, SimpleGrid, Card, Image, Text, Container, AspectRatio } from '@mantine/core';
import { createStyles, SimpleGrid, Card, Image, Text, AspectRatio, Container } from '@mantine/core';

const mockdata = [
  {
    title: 'B3 faz nova investida no mercado de criptoativos e testa debênture tokenizada',
    image:
      'https://images.ctfassets.net/bfjfs7jy18xi/bfninmdcetdt/ce51226dbcd5c0c47a33f0d267e5c053/bfninmdcetdt.png',
    date: 'August 18, 2022',
  },
  {
    title: 'Investidores do bitcoin estão se preparando para nova alta, aponta relatório',
    image:
      'https://images.ctfassets.net/bfjfs7jy18xi/idbesppnaar/cf5fc36a6b9a2b007441752f0ea77fc6/idbesppnaar.png',
    date: 'August 27, 2022',
  },
  {
    title: 'Real Digital: Banco Central divulga para o público código-fonte do projeto',
    image:
      'https://images.ctfassets.net/bfjfs7jy18xi/rdbcdpopcdp/8a316dbc706960cabe15c25ea1e388b4/rdbcdpopcdp.png',
    date: 'September 9, 2022',
  },
  {
    title: 'Bank of America: tokenização deve "transformar" infraestrutura do mercado financeiro',
    image:
      'https://images.ctfassets.net/bfjfs7jy18xi/boatdidmf/576b3755d5e2d8e5cb02d39c43ab04e3/boatdidmf.png',
    date: 'September 12, 2022',
  },
  {
    title: 'Bradesco e Santander destacam potencial da tokenização e primeiros projetos na área',
    image:
      'https://images.ctfassets.net/bfjfs7jy18xi/besdpdteppn/38c6c5d715f410a1980ea10afa64738d/besdpdteppn.png',
    date: 'September 12, 2022',
  },
  {
    title: 'Visa quer fim do cartão de crédito físico e prevê "tokenização de tudo", diz presidente',
    image:
      'https://images.ctfassets.net/bfjfs7jy18xi/maipeptb/6596c68e380bccd4771a04c73192f646/maipeptb.png',
    date: 'September 12, 2022',
  },
];


const useStyles = createStyles((theme) => ({
  card: {
    transition: 'transform 150ms ease, box-shadow 150ms ease',
    
    background: '#161D26',
    borderRadius: '16px',

    '&:hover': {
      transform: 'scale(1.01)',
      boxShadow: theme.shadows.md,
    },
  },

  title: {
    fontFamily: `Inter, sans`,
    fontWeight: 700,
  },
}));

export function Dashboard() {
  
  const [fastDeposit, setFastDeposit] = useState(false);

  
  const user = useSelector(selectUserInfo);

  const wallets = useSelector(selectWallets) || [];
    
  const currencies = useSelector(selectCurrencies);

  const markets = useSelector(selectMarkets);
  const tickers = useSelector(selectMarketTickers);

   
   const estimatedValue = React.useMemo(() => {
     return estimateValue(VALUATION_PRIMARY_CURRENCY, currencies, wallets, markets, tickers);
 }, [currencies, wallets, markets, tickers]);

 useWalletsFetch();
  
 const cryptoWallets = wallets.filter(wallet => wallet.currency.toUpperCase() === 'ETH' );

  const fiatWallets = wallets.filter(wallet => wallet.type === 'fiat' );

 const estimatedFiatValue = React.useMemo(() => {
   return estimateValue(VALUATION_PRIMARY_CURRENCY, currencies, fiatWallets, markets, tickers);
}, [currencies, fiatWallets, markets, tickers]);

const estimatedCryptoValue = React.useMemo(() => {
  return estimateValue(VALUATION_PRIMARY_CURRENCY, currencies, cryptoWallets, markets, tickers);
}, [currencies, cryptoWallets, markets, tickers]);

const estimatedTokenValue = estimatedValue - estimatedFiatValue - estimatedCryptoValue;

  const patrimony = [
    {
      description: "Patrimônio Total Estimado",
      value: "R$" + formatWithSeparators(estimatedValue, ','),
      type: "V",
    },
    {
      description: "Disponível em Reais",
      value: "R$" + formatWithSeparators(estimatedFiatValue, ','),
      type: "D",
    },
    {
      description: "Disponível em Cripto",
      value: "R$" + formatWithSeparators(estimatedCryptoValue, ','), 
      type: "V",
    },
    {
      description: "Disponível em Token",
      value: "R$" + formatWithSeparators(estimatedTokenValue, ','), 
      type: "V",
    },
  ];


  const announcement = [
    {
      description: "Aproveite a alta rentabilidade e liquidez dos tokens para aumentar seu patrimônio!",
      cta: "Confira os tokens disponíveis.",
      type: "D",
    },
    {
      description: "Compre criptomoedas em poucos cliques.",
      cta: "Confira as criptos disponíveis a partir de R$ 100,00.",
      type: "D",
    },
  ];

  const history = useHistory();



  const redirectLimits = () => {
		history.push('/profile');
	};

  const redirectMarketplace = () => {
		history.push('/tokens');
	};

  

  const images = [
    {
      img: img1,
    },
    {
      img: img2,
    },
    {
      img: img3,
    },
    {
      img: img4,
    },
  ];


  const { classes } = useStyles();

  const cards = mockdata.map((article) => (
    <Card key={article.title} p="md" radius="md" component="a" href="#" className={classes.card}>
      <AspectRatio ratio={1920 / 1080}>
        <Image src={article.image} />
      </AspectRatio>
      <Text color="dimmed" size="xs" transform="uppercase" weight={700} mt="md">
        {article.date}
      </Text>
      <Text className={classes.title} mt={5}>
        {article.title}
      </Text>
    </Card>
  ));


  return (
    
    <Container2>
      
      <Content>
        {/* {!props.user.validation && ( */}
        {/* KYC Steps */}
        {user.level === 1 || user.level === 2 || user.level === 3 && (
        <Alert>
            <div className="description">
              <img src={imgShield} alt="" />
              {/* <p
                style={props.themeDark ? { color: "#fff" } : { color: "#000" }}
              > */}
              {/* <p>
                A Fortem One preza pela sua segurança, para utilizar todos os recursos da plataforma, você precisa habilitar o duplo fator de autenticação e concluir o seu cadastro, é rápido e simples.
              </p> */}
              <p style={{fontWeight: '700'}}>
                Não perca nenhuma oportunidade de investimento!
                <br />
                <span style={{fontWeight: '400', opacity: '0.74'}}>
                Complete seu cadastro agora e tenha acesso a todas as funcionalidades da nossa plataforma.
                </span>
              </p>
              
            </div>
             
              <Link to={{pathname: "/profile", state: {setInternalPage: 3} }}>
                <Button style={{background: "var(--button-primary-cta-background-color) !important"}}>Completar cadastro</Button>
              </Link>
            
          </Alert>

        )}

        { !user.otp && ( 
          <Alert>
            <div className="description">
              <img src={imgLock} alt="" />
              {/* <p
                style={props.themeDark ? { color: "#fff" } : { color: "#000" }}
              > */}
              {/* <p>
                A Fortem One preza pela sua segurança, para utilizar todos os recursos da plataforma, você precisa habilitar o duplo fator de autenticação e concluir o seu cadastro, é rápido e simples.
              </p> */}
              <p style={{fontWeight: '700'}}>
                Sua segurança é nossa prioridade!
                <br />
                <span style={{fontWeight: '400', opacity: '0.74'}}>
                  Habilite a autenticação de dois fatores e proteja ainda mais suas transações financeiras.
              </span>
              </p>
              
            </div>
             
             <Link to={{pathname: "/security/2fa", state: {enable2fa: true} }}>
                <Button style={{backgroundColor: "var(--button-primary-cta-background-color)"}}>Habilitar agora</Button>
              </Link>
          </Alert> )}
        {/* )} */}

        <CardsAnnoucement>
          <Announcement announcement={announcement} />
        </CardsAnnoucement>


        <CardsPatrimony>
          <Patrimony patrimony={patrimony} />
        </CardsPatrimony>
        <Carousel>
          <Slid>
            <CarouselSlide />
          </Slid>
          <Deposit>
            <div className="header">
              <p
                style={{ color: "var(--primary-text-color)" }}
              >
                Depósito em Reais
              </p>
            </div>
            <div className="input-group">
              <p
                style={{ color: "var(--primary-text-color)" }}
              >
                Quanto você quer depositar?
              </p>
              <input className="input" type="text" placeholder="R$ 0,00" />
              <br/>
              
              {/* <span
                style={{ color: "var(--primary-text-color)" }}
              >
                Você ainda pode depositar: R$ 50.000,00 este mês
                
              </span> */}
              <div style={{marginLeft: '-52px'}}>
                <UserWithdrawalLimits/>
              </div>
            </div>
            <div className="buttons">
              <button style={{borderRadius: '12px', padding: '10px 18px', backgroundColor: 'var(--button-primary-cta-background-color) !important;'}} onClick={() => setFastDeposit(true)} className="btn btn-block">Ver dados para depósito</button>
              <button style={{borderRadius: '12px', padding: '10px 18px', color: '#11ECC7', background: 'transparent !important', position: 'relative', top: '-10px'}} onClick={() => redirectLimits()} className="btn-primary-outline btn-block">Aumentar limites </button>
            </div>
          </Deposit>
        </Carousel>
        <Tokens>
          <div className="highlights">
            <p style={{ color: "var(--primary-text-color)" }}>
              Tokens em destaque
            </p>
            <button
              style={{ color: "var(--primary-text-color)" }}
              onClick={() => redirectMarketplace()}
            >
              Ver todos
            </button>
          </div>
          <SlidTokens>
            {/* <TokensSlid  /> */}
            <SaleListTablesUpcoming />
            
            
          </SlidTokens> 
          {/* <SaleListTablesUpcoming /> */}
        </Tokens>
        <Criptos>
          <Tables>
            <div className="div-cripto">
              {/* <p> Visão geral do mercado cripto </p> */}
              <p> Acompanhe o mercado </p>
            </div>
            {/* <HomepageMarket/> */}
            <MarketsList />
          </Tables>
          <Negotiation>
            <Deposit>
              <div className="header">
                <p> Negociação instantânea </p>
              </div>
              <div className="input-group">
                <p> Quanto você quer negociar? </p>
                <div className="input-select">
                  <input
                    // style={{ backgroundImage: `url(${imgUSDT})` }}
                    className="input-insta"
                    type="text"
                    placeholder="R$ 3.045,00"
                  />
                  <select className="select">
                    <option className="option">BRL</option>
                    <option className="option">USD</option>
                  </select>
                </div>
                <span
                  style={{ color: "var(--primary-text-color)" }}
                >
                  Saldo disponível: R$ 0,00
                </span>
              </div>
              <div className="btn-percent">
                <button
                  style={{ color: "var(--primary-text-color)", border: 'none' }}
                >
                  25%
                </button>
                <button
                  style={{ color: "var(--primary-text-color)" }}
                >
                  50%
                </button>
                <button
                  style={{ color: "var(--primary-text-color)" }}
                >
                  75%
                </button>
                <button
                 style={{ color: "var(--primary-text-color)" }}
                >
                  100%
                </button>
              </div>
              <div className="input">
                <p
                  style={{ color: "var(--primary-text-color)" }}
                >
                  Qual ativo deseja receber?
                </p>
                <div className="input-select">
                  <input
                    style={{
                      backgroundImage: `url(${imgBTC})`,
                    }}
                    className="input-insta"
                    type="text"
                    placeholder="0,1210"
                  />
                  <select className="select">
                    <option className="option">BTC</option>
                  </select>
                </div>

                <span
                  style={
                    { color: "var(--primary-text-color)", marginTop: 10 }
                  }
                >
                  Preço unitário: R$ 28.800,00
                </span>
              </div>
              <div className="buttons">
                <button disabled className="btn-ajuste disabled">Confirmar</button>
              </div>
            </Deposit>
          </Negotiation>
        </Criptos>
        <Knowledge>
          <div className="header-knowledge">
            <p> Arena do conhecimento </p>
            <button style={{ color: "var(--primary-text-color)" }}>Ver todos</button>
          </div>
          <div className="cards-knowledge">
            {/* <div className="row row--15">
              {BlogListData.map((item) => (
                <div key={item.id} className="col-lg-4 col-md-6 col-12 mt--30">
                  <BlogList StyleVar="box-card-style-default" data={item} />
                
                </div>
              ))}
            </div> */}
               <Container py="xxl">
      <SimpleGrid cols={3} >
        {cards}
      </SimpleGrid>
      </Container>
    
          </div>
        </Knowledge>
      </Content>
      {fastDeposit && <QRCode setFastDeposit={setFastDeposit} />}
      <ReactDimmer
        				isOpen={fastDeposit}
        				exitDimmer={!setFastDeposit}
        				zIndex={100}
        				blur={10}
						transition={0.5}
      				/>
    </Container2>
  );
}

const mapStateToProps = (state) => ({
  user: selectUserInfo(state),
  
});