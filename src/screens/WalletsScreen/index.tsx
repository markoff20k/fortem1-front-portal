import React, { FC, ReactElement, useCallback, useEffect, useState } from 'react';
import { useIntl } from 'react-intl';
import { useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { ChangeIcon } from 'src/assets/images/ChangeIcon';
import { TabPanel } from 'src/components';
import { CanCan, EstimatedValue, WalletsOverview, WalletsP2P, WalletsSpot, WalletsTransfer } from 'src/containers';
import { useDocumentTitle, useP2PWalletsFetch, useWalletsFetch } from 'src/hooks';
import { selectAbilities, selectCurrencies, selectP2PWallets, selectWallets, selectMarkets, selectMarketTickers, Wallet } from 'src/modules';

// import { estimateUnitValue, estimateValue } from 'helpers/estimateValue';
import { estimateValue } from 'src/helpers/estimateValue';
import { estimateUnitValue } from 'src/helpers/estimateValue';

// import { VALUATION_PRIMARY_CURRENCY, VALUATION_SECONDARY_CURRENCY } from '../../../constants';
import { VALUATION_PRIMARY_CURRENCY, VALUATION_SECONDARY_CURRENCY } from 'src/constants';
import { formatWithSeparators } from 'src/components';

import { Container, Content, Dashboard, Report } from "./style";
import imgBTC from "../../assets/BTC.svg";
import imgLogoIcon from "../../assets/logo-icon-dark.svg";



import DonutChart from "src/components/Charts/DonutChart";

import ReactApexChart from "react-apexcharts";

// import { Card, CardBody, CardTitle, Col, Row, Container } from "reactstrap"


interface ParamType {
    routeTab?: string;
    currency?: string;
    action?: string;
}

export const WalletsScreen: FC = (): ReactElement => {
    const [tab, setTab] = useState<string>('');
    const [tabMapping, setTabMapping] = useState<string[]>(['overview', 'spot']);
    const [currentTabIndex, setCurrentTabIndex] = useState<number>(0);
    const [mergedWallets, setMergedWallets] = useState<Wallet[]>([]);

    const history = useHistory();
    const { formatMessage } = useIntl();
    const { routeTab, currency, action } = useParams<ParamType>();
    const wallets = useSelector(selectWallets) || [];
    const p2pWallets = useSelector(selectP2PWallets) || [];
    const currencies = useSelector(selectCurrencies);
    const abilities = useSelector(selectAbilities);

    const markets = useSelector(selectMarkets);
    const tickers = useSelector(selectMarketTickers);


    const fiatWallets = wallets.filter(wallet => wallet.type === 'fiat' );
    
    const tokenWallets = wallets.filter(wallet => wallet.currency === 'kart');

    const cryptoWallets = wallets.filter(wallet => wallet.currency === 'eth' );


    const estimatedFiatValue = React.useMemo(() => {
      return estimateValue(VALUATION_PRIMARY_CURRENCY, currencies, fiatWallets, markets, tickers);
  }, [currencies, fiatWallets, markets, tickers]);
    
    const estimatedValue = React.useMemo(() => {
      return estimateValue(VALUATION_PRIMARY_CURRENCY, currencies, wallets, markets, tickers);
  }, [currencies, wallets, markets, tickers]);

  const estimatedTokenValue = React.useMemo(() => {
    return estimateValue(VALUATION_PRIMARY_CURRENCY, currencies, tokenWallets, markets, tickers);
}, [currencies, tokenWallets, markets, tickers]);


const estimatedCryptoValue = React.useMemo(() => {
  return estimateValue(VALUATION_PRIMARY_CURRENCY, currencies, cryptoWallets, markets, tickers);
}, [currencies, cryptoWallets, markets, tickers]);


  const valorestimado = Number(estimatedFiatValue);

  const valorestimadoToken = Number(estimatedTokenValue);

  const valorestimadoCrypto = Number(estimatedCryptoValue);

  

  

  
  //const estimatedCryptoValue = Number(estimatedValue) - Number(estimatedFiatValue);

    // const donutChartDataCharts1 = [{estimatedFiatValue}, 0, {estimatedCryptoValue}];

    const donutChartOptionsCharts1 = {
        series: [{valorestimado}, 0, {estimatedCryptoValue}],
        labels: ["Reais", "Tokens", "Criptomoedas"],
        colors: ["#11ECC7", "#F9A912", "#009991"],
        chart: {
          width: 380,
          type: 'donut',
        },
        stroke: {
          show: false,
        },
        states: {
          hover: {
            filter: {
              type: "none",
            },
          },
        },
        legend: {
            show: true,
            // position: "bottom",
            // horizontalAlign: "center",
            // verticalAlign: "middle",
            // floating: false,
            fontSize: "18px",
            fontWeight: "700",
            // fontColor: "#f5f5f5",
            // color: "white",
            offsetX: 0,
            offsetY: -10,
        },
        dataLabels: {
          enabled: false,
        },
        hover: { mode: null },
        plotOptions: {
            pie: {
              startAngle: -90,
              endAngle: 270
            }
        },
        // plotOptions: {
        //   donut: {
        //     expandOnClick: false,
        //     donut: {
        //       labels: {
        //         show: false,
        //       },
        //     },
        //   },
        // },
      
        fill: {
          colors: ["#11ECC7", "#F9A912", "#009991"],
          type: 'gradient',

        },
        tooltip: {
          enabled: true,
          theme: "dark",
        },
      };

    // this one
    const dountchartData = {
        // series: [{estimatedFiatValue}, 0, {estimatedCryptoValue}],
        // series: [formatWithSeparators(estimatedFiatValue, '.'), 0, formatWithSeparators(estimatedCryptoValue, '.')],
        series: [valorestimado, valorestimadoToken, valorestimadoCrypto],
        options: {
          labels: ["Reais", "Tokens", "Criptomoedas"],
          // colors: ["#44F5C9", "#F9A912", "#4542F7"],
        //   chart: {
        //     width: 680,
        //     type: 'donut',
        //   },
        
          fill: {
            type: 'gradient',
          },
          stroke: {
            show: false,
            
          },
          plotOptions: {
            pie: {
              donut: {
                size: '75%',
                labels: {
                  show: true,
                  name: {
                    show: true,
                  },
                  value: {
                    show: true,
                  },
                  total: {
                    show: true,
                    showAlways: true,
                    label: "Patrimônio total",
                    fontWeight: 600,
                    fontSize: '15px',
                    color: 'var(--input-text-color)',
                    fontFamily: 'Inter, Arial, sans-serif',
                    // color: '#373d3f',
                    
                  }
                }
              },
              startAngle: -90,
              endAngle: 270,
              expandOnClick: true,

              
            }
          },
          legend: {
            show: true,
            // position: 'right',
            // horizontalAlign: "center",
            // verticalAlign: 'middle',
            floating: false,
            fontSize: "16px",
            offsetX: -40,
            offsetY: 30,
            fontWeight: 600,
            color: 'var(--input-text-color)',
            fontFamily: 'Inter, Arial, sans-serif',
            // formatter: function (val) {
            //    return val + "R$ "
            // },
          },
          dataLabels: {
            enabled: false,
            formatter: function (val) {
              return val + "%"
            },
            dropShadow: {
              ...
            }
          },
          responsive: [
            {
              breakpoint: 600,
              options: {
                chart: {
                  height: 240,
                },
                legend: {
                  show: false,
                },
              },
            },
          ],
        },
      }
      
      
      
      const dountchart = () => {
        console.log(estimatedCryptoValue)
        console.log(estimatedFiatValue)
        console.log(estimatedTokenValue)
        
        return(
          <React.Fragment>
              <ReactApexChart
                options={dountchartData.options}
                series={dountchartData.series}
                type="donut"
                height="320"
                width="420"
                className="apex-charts"
              />
            </React.Fragment>
        )
      }

      

    useDocumentTitle('Carteiras');
    useWalletsFetch();
    useP2PWalletsFetch();

    useEffect(() => {
        if (wallets.length && currencies.length && p2pWallets.length) {
            const merged = currencies.map(cur => {
                const spotWallet = wallets.find(i => i.currency === cur.id);
                const reaisWallet = wallets.find(i => i.name === 'brl');
                const p2pWallet = p2pWallets.find(i => i.currency === cur.id);

                return {
                    ...spotWallet,
                    balance: String(+(spotWallet?.balance || 0) + +(p2pWallet?.balance || 0)),
                    locked: String(+(spotWallet?.locked || 0) + +(p2pWallet?.locked || 0)),
                };
            });

            setMergedWallets(merged);
        }
    }, [wallets, p2pWallets, currencies]);

    useEffect(() => {
        // if (abilities && CanCan.checkAbilityByAction('read', 'P2P', abilities)) {
            setTabMapping(['overview', 'spot', 'p2p', 'transfer']);
            
        // }
    }, [abilities]);

    useEffect(() => {
        if (routeTab) {
            const index = tabMapping.indexOf(routeTab);
            if (index !== -1) {
                setTab(routeTab);
                setCurrentTabIndex(index);
            }
        } else {
            history.push('/wallets/overview');
        }
    }, [routeTab, tabMapping]);






    // const estimatedFiatValue = estimateValue(VALUATION_PRIMARY_CURRENCY, currencies, cryptoWallet, markets, tickers);

    let formattedWallet = wallets.map((wallet: Wallet) => ({
      ...wallet,
      name: wallet.currency.toUpperCase(),
      value: Number(wallet.balance),
      
  }));
    

    const translate = useCallback((id: string) => formatMessage({ id }), [formatMessage]);
    const onCurrentTabChange = useCallback((index: number) => {
        setCurrentTabIndex(index);
        history.push(`/wallets/${tabMapping[index]}`);
    }, [tabMapping]);

    const onTabChange = useCallback((index: number) => {
        if (tab !== tabMapping[index]) {
            setTab(tabMapping[index]);
        }
    }, [tabMapping]);

    const renderTabs = React.useCallback(() => {
        //const isP2PEnabled = true;
        const isP2PEnabled = CanCan.checkAbilityByAction('read', 'P2P', abilities);
        const p2pTabs = [
            {
                content: currentTabIndex === 2 ? <WalletsP2P /> : null,
                label: translate('page.body.wallets.tab.p2p'),
            },
            {
                content: currentTabIndex === 3 ? <WalletsTransfer currency={currency} /> : null,
                label: <div><ChangeIcon className="icon" />{translate('page.body.wallets.tab.transfer')}</div>,
            },
        ];

        return [
            {
                 content: currentTabIndex === 0 ? <WalletsOverview isP2PEnabled={isP2PEnabled} /> : null,
                 label: translate('page.body.wallets.tab.overview'),
             },
            {
                content: currentTabIndex === 1 ? <WalletsSpot currency={currency} action={action}/> : null,
                label: translate('page.body.wallets.tab.spot'),
            },
            ...(isP2PEnabled ? p2pTabs : []),
        ];
    }, [currentTabIndex, currency, action, abilities, history, translate]);

    return (
        <React.Fragment>
            {/* <EstimatedValue wallets={mergedWallets} /> */}

            <Container>
      <Content
        // style={
        //   !props.isOpened ? { width: "calc(100vw - 130px)", left: 110 } : {}
        // }
      >
        <Dashboard>
          <div className="patrimony">
            <div className="patrimony-total col-md-5">
              <p
                style={{ color: "var(--primary-text-color)", fontWeight: '700' }}
              >
                Patrimônio total estimado
              </p>
              <h4
                style={{ color: "var(--primary-text-color)" }}
              >
                R$ {formatWithSeparators(estimatedValue, ',')}
              </h4>
              {/* <EstimatedValue wallets={reais} /> */}
              
              {/* <span>+ 13,87%</span> */}
            </div>
            <div className="patrimony-available col-md-5">
              <p
                style={{ color: "var(--primary-text-color)" }}
              >
                Disponível em reais
              </p>
              <h4
                style={{ color: "var(--primary-text-color)" }}
              >
                {/* R$ {formatWithSeparators(estimatedFiatValue, ',')} */}
                R$ {estimatedFiatValue}
                {/* Careteira: {formattedWallet[0].name} */}
                {/* {tokenWallet[0].name} */}
              </h4>
              <div className="btn-deposit">
                <button>Depositar</button>
                <button>Sacar</button>
              </div>
            </div>
          </div>
          <div className="patrimony-graphic col-md-7">
            <div className="patrimony-graphic-top">
              <p
                style={{ color: "var(--primary-text-color)", fontWeight: '700' }}
              >
                Total em ativos
              </p>
              {/* <select
                style={{ color: "var(--primary-text-color)" }}
              >
                <option>Visão geral</option>
              </select> */}
            </div>
            <div className="patrimony-graphic-bottom">
              {/* <img src={imgGrafic} alt="" /> */}
              {dountchart()}
              {/* <DonutChart/> */}
              {/* <DonutChart
                    chartData={donutChartDataCharts1}
                    chartOptions={donutChartOptionsCharts1}
                    width={380}
                    // height="320"
                	// className="apex-charts"
 
                /> */}
              {/* <div className="grafic">
                <h5
                    style={{ color: "var(--primary-text-color)" }}
                >
                  <span>Investido</span>
                  <br />
                  R$ 10.840.000,00
                </h5>
              </div> */}
              {/* <div className="ativos">
                <p
                  style={{ color: "var(--primary-text-color)" }} >
                  <div></div>
                  <strong>Criptomoedas</strong>
                  <br />
                  R$ 10.000.000,00
                </p>
                <p
                  style={{ color: "var(--primary-text-color)" }}
                >
                  <div></div>
                  <strong>Tokens</strong>
                  <br />
                  R$ 840.000,00
                </p>
              </div> */}
            </div>
          </div>
        </Dashboard>
        <Report>
          {/* <div className="reports">
            <p style={{ color: "var(--primary-text-color)" }} >
              Meus ativos
            </p>
            <div>
              <select
                style={{ color: "var(--primary-text-color)" }}
              >
                <option
                  style={{ color: "var(--primary-text-color)" }}
                >
                  Selecionar um ativo
                </option>
              </select>
              <button
                style={{ color: "var(--primary-text-color)" }}
              >
                Todos
              </button>
              <button
                style={{ color: "var(--primary-text-color)" }}
              >
                Criptomoedas
              </button>
              <button
                style={{ color: "var(--primary-text-color)" }}
              >
                Tokens
              </button>
            </div>
          </div>
          <div className="reports-table">
            <Table>
              <thead>
                <tr>
                  <th
                    style={{ color: "var(--primary-text-color)", border: "none" }}
                  >
                    Nome do ativo
                  </th>
                  <th
                    style={{ color: "var(--primary-text-color)", border: "none" }}
                  >
                    Quantidade
                  </th>
                  <th
                    style={{ color: "var(--primary-text-color)", border: "none" }}
                  >
                    Valor
                  </th>
                  <th
                    style={{ color: "var(--primary-text-color)", border: "none" }}
                  >
                    Ação
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td
                    className="td"
                    style={{ color: "var(--primary-text-color)", border: "none" }}
                  >
                    <img style={{ marginRight: 20 }} src={imgBTC} alt="" />
                    Bitcoin BTC
                  </td>
                  <td
                    style={{ color: "var(--primary-text-color)", border: "none" }}
                  >
                    0,43085
                  </td>
                  <td
                    style={{ color: "var(--primary-text-color)", bordeer: "none" }}
                  >
                    ≈ R$ 10.000.000,00
                  </td>
                  <td
                    style={{ color: "var(--primary-text-color)", border: "none" }}
                  >
                    <button className="btn-negociar">Negociar</button>
                  </td>
                </tr>
                <tr>
                  <td
                    className="td"
                    style={{ color: "var(--primary-text-color)", border: "none" }}
                  >
                    <img
                      className="img-especial"
                      style={{ marginRight: 20, width: 25 }}
                      src={imgLogoIcon}
                      alt=""
                    />
                    Token $BTO
                  </td>
                  <td
                    style={{ color: "var(--primary-text-color)" }}
                  >
                    2
                  </td>
                  <td
                    style={{ color: "var(--primary-text-color)", border: "none" }}
                  >
                    ≈ R$ 840.000,00
                  </td>
                  <td
                    style={{ color: "var(--primary-text-color)", border: "none" }}
                  >
                    <button className="btn-negociar">Negociar</button>
                  </td>
                </tr>
              </tbody>
            </Table>
            <div
              className="pagination"
              style={{ color: "var(--primary-text-color)" }}
            >
              Página
              <span
                style={{ color: "var(--primary-text-color)" }}
              >
                1
              </span>{" "}
              de 10
              <button>{"<"}</button>
              <button>{">"}</button>
            </div>
          </div> */}
          
        </Report>
        
      </Content>
      {/* <WalletsScreen /> */}


      <div className="pg-wallets-tab">
                <div className="pg-wallets-tab__tabs-content">
                
                    <TabPanel
                        panels={renderTabs()}
                        onTabChange={onTabChange}
                        currentTabIndex={currentTabIndex}
                        onCurrentTabChange={onCurrentTabChange}
                    />
                    
                </div>
            </div>

    </Container>



        </React.Fragment>
        

    );
};
