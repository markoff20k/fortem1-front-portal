import React, { FC, ReactElement, useCallback, useEffect, useState } from 'react';
import { useIntl } from 'react-intl';
import { useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { ChangeIcon } from 'src/assets/images/ChangeIcon';
import { TabPanel } from 'src/components';
import { CanCan, EstimatedValue, WalletsOverview, WalletsP2P, WalletsSpot, WalletsTransfer } from 'src/containers';
import { useDocumentTitle, useP2PWalletsFetch, useWalletsFetch } from 'src/hooks';
import { selectAbilities, selectCurrencies, selectP2PWallets, selectWallets, Wallet } from 'src/modules';

import { Container, Content, Graphic, Report } from "./style";
import imgBTC from "../../assets/BTC.svg";
import imgLogoIcon from "../../assets/logo-icon-dark.svg";



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

    useDocumentTitle('Carteiras');
    useWalletsFetch();
    useP2PWalletsFetch();

    useEffect(() => {
        if (wallets.length && currencies.length && p2pWallets.length) {
            const merged = currencies.map(cur => {
                const spotWallet = wallets.find(i => i.currency === cur.id);
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
        <Graphic>
          <div className="patrimony">
            <div className="patrimony-total">
              <p
                style={{ color: "var(--primary-text-color)" }}
              >
                Patrimônio total
              </p>
              <h4
                style={{ color: "var(--primary-text-color)" }}
              >
                R$ 15.840,00
              </h4>
              <span>+ 13,87%</span>
            </div>
            <div className="patrimony-available">
              <p
                style={{ color: "var(--primary-text-color)" }}
              >
                Disponível em fiat
              </p>
              <h4
                style={{ color: "var(--primary-text-color)" }}
              >
                R$ 5.000.000,00
              </h4>
              <div className="btn-deposit">
                <button>Depositar</button>
                <button>Sacar</button>
              </div>
            </div>
          </div>
          <div className="patrimony-graphic">
            <div className="patrimony-graphic-top">
              <p
                style={{ color: "var(--primary-text-color)" }}
              >
                Total em ativos
              </p>
              <select
                style={{ color: "var(--primary-text-color)" }}
              >
                <option>Visão gear</option>
              </select>
            </div>
            <div className="patrimony-graphic-bottom">
              {/* <img src={imgGrafic} alt="" /> */}
              <div className="grafic">
                <h5
                    style={{ color: "var(--primary-text-color)" }}
                >
                  <span>Investido</span>
                  <br />
                  R$ 10.840.000,00
                </h5>
              </div>
              <div className="ativos">
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
              </div>
            </div>
          </div>
        </Graphic>
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
