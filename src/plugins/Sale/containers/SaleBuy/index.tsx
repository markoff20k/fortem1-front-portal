
import { Button, Input, InputNumber, message, notification, Tooltip, Select } from 'antd';
import NP from 'number-precision';
import React, { useState } from "react";
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import {
	Buy,
	buySaleItem,
	getTotalBuyers,
	resetBuyResponse,
	selectBuy,
	
	
} from 'src/modules/sale/buy';

import { currenciesFetch } from 'src/modules';
import { findSalebyId, SaleItem } from 'src/modules/sale/sale-item';
import { getPrice } from 'src/modules/sale/price';
import { selectCurrencies, selectWallets, walletsFetch } from 'src/modules';
import { useDocumentTitle, useP2PWalletsFetch, useWalletsFetch } from 'src/hooks';
import { selectPrice } from 'src/modules/sale/price';


import { BuyConfirmModal } from '../BuyConfirmModal';

import { FiLogIn } from "react-icons/fi";
import { Decimal } from '../../../../components';
import garantia from './Shield Done.svg';

//import './SaleBuy.css';
interface SaleBuyProps {
	uid: string;
	sale: SaleItem;
}




export const SaleBuy: React.FC<SaleBuyProps> = (props: SaleBuyProps) => {

	useWalletsFetch();

	const { id, currency_id, currency_available, type } = props.sale;
	// const iconLogin = require ('./login.svg');
	const priceSelector = useSelector(selectPrice);
	const buyResponse = useSelector(selectBuy, shallowEqual);

	const [show, setShow] = useState(false);

	// dispatch Fetch Wallets Of User Action
	const history = useHistory();
	const dispatch = useDispatch();
	const dispatchWalletsFetch = React.useCallback(() => dispatch(walletsFetch()), [dispatch]);
	const dispatchBuy = React.useCallback((buyInfo: Buy) => dispatch(buySaleItem(buyInfo)), [dispatch]);
	const dispatchGetPrice = React.useCallback((priceConfig: any) => dispatch(getPrice(priceConfig)), [dispatch]);
	const dispatchResetBuyResponse = React.useCallback(() => dispatch(resetBuyResponse()), [dispatch]);
	const dispatchGetTotalBuyers = React.useCallback(
		(ieoID: string) =>
			dispatch(
				getTotalBuyers({
					ieo_id: ieoID,
				}),
			),
		[dispatch],
	);
	const dispatchFetchSaleItemByID = React.useCallback(
		(ieoID: string) =>
			dispatch(
				findSalebyId({
					id: ieoID,
				}),
			),
		[dispatch],
	);

	const dispatchcFetchCurrencies = React.useCallback(() => dispatch(currenciesFetch()), [dispatch]);

	React.useEffect(() => {
		dispatchcFetchCurrencies();
	}, [dispatchcFetchCurrencies]);

	const currencies = useSelector(selectCurrencies);
	// filter Wallets that have currency in currency_available Of Sale Item
	const wallets = useSelector(selectWallets)  || [];
	const wallets2 = useSelector(selectWallets) || [];
	const filteredWallets = wallets.filter(wallet => currency_available.includes(wallet.currency));

	//const filteredWallets = wallets2.filter(wallet2 => props.sale.currency_available.includes(wallet2.currency));

	const baseWallet = wallets2.find(wallet2 => wallet2.currency === currency_id);
	//console.log(wallet.currency);
	console.log(currency_id);
	const baseBalance = baseWallet ? Number(baseWallet.balance) : 0;
	console.log(baseBalance);
	const defaultSelectedCurrency = props.sale.currency_available[0];
	
    


	// get Balance By Currency_ID
	// const handleGetBalance = React.useCallback(
	// 	currency => {
	// 		const foundedWallet = filteredWallets.find(wallet => wallet.currency === currency);
	// 		//console.log(Number(baseWallet.balance))
	// 		if (foundedWallet) {
	// 			return Number(foundedWallet.balance);
	// 		}

			
	// 		return 100;
	// 	},
	// 	[filteredWallets],
	// );

	const handleGetBalance = React.useCallback(
		currency => {
			const foundedWallet = filteredWallets.find(wallet => wallet.currency === currency);
			// console.log(filteredWallets[0].name);
			//console.log(foundedWallet.balance);
			if (foundedWallet) {
				// if (filteredWallets[0].name) return Number(filteredWallets[0].balance);
				if (foundedWallet) return Number(foundedWallet.balance);
				return 2;
			}

			return 1;
		},
		[filteredWallets],
	);

	// state
	const [quoteCurrencyState, setQuoteCurrencyState] = React.useState<string>(defaultSelectedCurrency);
	const [quoteBalanceState, setQuoteBalanceState] = React.useState<number>(handleGetBalance(defaultSelectedCurrency));
	const [priceState, setPriceState] = React.useState<number | undefined>(0);
	//const [bonusState, setBonusState] = React.useState<number>(0);
	const [bonusState] = React.useState<number>(0);
	const [quantityInputState, setQuantityInputState] = React.useState<number>((props.sale.min_buy)*10);
	const [quoteTotalState, setQuoteTotalState] = React.useState<number>(0);
	const [isShowBuyConfirmModalState, setIsBuyConfirmModalVisibleState] = React.useState<boolean>(false);

	const calculatePrice = React.useCallback(
		(basePrice: number, quotePrice: number) => {
			switch (quoteCurrencyState.toLowerCase()) {
				// case 'kobe':
				// 	return NP.divide(NP.divide(1, quotePrice), NP.divide(1, basePrice));
				// case 'esc':
				// 	return NP.divide(NP.divide(1, quotePrice), NP.divide(1, basePrice));
				// case 'swp':
				// 	return NP.divide(NP.divide(1, quotePrice), NP.divide(1, basePrice));
				case 'FTK':
					return NP.divide(NP.divide(1, quotePrice), NP.divide(1, basePrice));
				default:
					//return NP.divide(quotePrice, NP.divide(1, basePrice));
					return 5;
			}
		},
		[quoteCurrencyState],
	);

	// handle Select Currency
	const handleSelectCurrency = event => {
		const selectedCurrency = event.target.value;
		setQuoteCurrencyState(selectedCurrency);
		setQuoteBalanceState(handleGetBalance(selectedCurrency));
		setQuantityInputState(props.sale.min_buy);
		if (priceSelector.payload[quoteCurrencyState.toUpperCase()]) {
			setQuoteTotalState(calculatePrice(props.sale.price, priceSelector.payload[quoteCurrencyState.toUpperCase()]));
		}
	};

	/*const updateBonusState = React.useCallback(
		(quantity: number) => {
			const { bonus } = props.sale;
			const arrayOfBonus = bonus;
			const foundedBonus = arrayOfBonus.find((bonusParam: {}) => {
				const bonusRange = String(Object.keys(bonusParam)).split('-');
				const startPoint = Number(bonusRange[0]);
				const endPoint = Number(bonusRange[1]);
				if (quantity >= startPoint && quantity <= endPoint) {
					return true;
				}

				return false;
			});
			if (foundedBonus) {
				const bonusValue = Object.entries(foundedBonus)[0][1];
				setBonusState(Number(bonusValue));
			} else {
				setBonusState(0);
			}
		},
		[props.sale],
	);*/
	const handleQuantityInput = event => {
		const quantity = event.target.value;
		const { price } = props.sale;

		setQuantityInputState(quantity);
		setQuoteTotalState(
			NP.times(NP.strip(calculatePrice(price, priceSelector.payload[quoteCurrencyState.toUpperCase()] || 0)), quantity),
		);

		//updateBonusState(quantity);
	};

	const findIcon = (code: string): string => {
		const currency = currencies.find(currencyParam => currencyParam.id === code);
		try {
			return require(`../../../../../node_modules/cryptocurrency-icons/svg/icon/${code.toLowerCase()}.png`);
		} catch (err) {
			if (currency) {
				return currency.icon_url;
			}

			return require('../../../../../node_modules/cryptocurrency-icons/svg/color/generic.svg');

		}
	};

	React.useEffect(
		() => {
			dispatchWalletsFetch();
			dispatchGetPrice({
				fsym: 'BRL',
				tsyms: props.sale.currency_available,
			});
			//updateBonusState(quantityInputState);
			setQuoteBalanceState(handleGetBalance(props.sale.currency_available[0]));
		},
		[
			 dispatchWalletsFetch,
			// dispatchGetPrice,
			// updateBonusState,
			// setQuoteBalanceState,
			// handleGetBalance,
			props.sale,
			quantityInputState,
		],
	);

	React.useEffect(() => {
		setQuoteBalanceState(handleGetBalance(quoteCurrencyState));
	}, [filteredWallets.length, handleGetBalance, quoteCurrencyState]);

	React.useEffect(() => {
		if (priceSelector.payload && quoteCurrencyState && priceSelector.payload[quoteCurrencyState.toUpperCase()]) {
			const convertedPrice = calculatePrice(props.sale.price, priceSelector.payload[quoteCurrencyState.toUpperCase()]);
			setPriceState(convertedPrice);
			//A LINHA ABAIXO ESTAVA COMENTADA 
			setQuoteTotalState(NP.strip(NP.times(quantityInputState, convertedPrice)));
		}
	}, [quoteCurrencyState, priceSelector.loading, calculatePrice, priceSelector.payload, props.sale.price, quantityInputState]);

	const hiddenBuyConfirmModal = () => {
		setIsBuyConfirmModalVisibleState(false);
	};

	const showBuyConfirmModal = () => {
		setIsBuyConfirmModalVisibleState(true);
	};

	React.useEffect(() => {
		if (buyResponse.error) {
			notification.error({
				message: buyResponse.error.message,
			});
		}

		if (buyResponse.payload) {
			if (buyResponse.payload.success) {
				notification.success({
					message: `Compra do token $ ${currency_id.toUpperCase()} efetivada.`,
				});
				dispatchResetBuyResponse();
				dispatchGetTotalBuyers(props.sale.id); // update Total Buyers in Sale Info
				setTimeout(() => {
					dispatchFetchSaleItemByID(props.sale.id);
				}, 8000);
			}
		}

		if (buyResponse.loading) {
			const hide = message.loading('Aguarde. Estamos processando a sua compra...', 0);
			// dismiss manually and asynchronously
			setTimeout(hide, 3000);
		}
	}, [
		buyResponse.error,
		buyResponse.payload.success,
		buyResponse.loading,
		buyResponse.payload,
		currency_id,
		dispatchFetchSaleItemByID,
		dispatchGetTotalBuyers,
		dispatchResetBuyResponse,
		props.sale.id,
	]);

	const handleBuy = () => {
		const uid = props.uid;
		const quantity = quantityInputState;
		const totalPurchase = quoteTotalState;
		const quoteCurrency = quoteCurrencyState;
		if (priceState && priceState > 0 && quantity > 0  && totalPurchase > 0 && quoteCurrency) {
			const buyInfo: Buy = {
				ieo_id: id,
				uid: uid,
				quantity: quantity,
				total_purchase: 5,
				quote_currency: quoteCurrency,
			};
			dispatchBuy(buyInfo);
			setIsBuyConfirmModalVisibleState(false);
			console.log(totalPurchase);
			console.log(quantity);
			console.log(quoteCurrency);
		} else {
			notification.error({
				message: 'Não foi possível realizar sua compra no momento. Por favor, tente novamente em instantes ou entre em contato com nossa equipe de suporte.',
			});
		}
	};

	const handleNavigateLoginPage = () => {
		const location = {
			pathname: '/signin',
		};
		history.push(location);
	};

	const handleBuyDisabled = () => {
		return (
			quantityInputState <= 0 ||
			quoteTotalState <= 0 ||
			quoteBalanceState < quoteTotalState ||
			quantityInputState < props.sale.min_buy ||
			!priceState ||
			priceState <= 0
		);
	};

	let buyButton;
	if (props.uid) {
		buyButton = (
			<button
				
				
				
				style={{ height: '2.5em', color: '#f5f5f5', background: '#009991', margin: '0 auto',  textTransform: 'uppercase', padding: '1em, 1.5em', borderRadius: '5px', width: '100%', fontSize: '1em' }}
				disabled={handleBuyDisabled()}
				onClick={showBuyConfirmModal}
				className='btn buy-button'
			>Comprar Tokens
				
			</button>
		);
	} else {
		buyButton = (
			<a className="btn-default btn-icon icon-btn-wrap" href="/signin" style={{ width: '100%',  border: '1px solid #009991 ',  fontSize: '1.1em', position: 'absolute',  background: 'transparent'}}>Acessar plataforma <i className="icon"><FiLogIn /></i></a>
		);
	}

	const showBuyForm = () => {
		if (quoteCurrencyState) {
			return (
				<React.Fragment>
					<div className="" >
						<span style={{ fontSize: '0.8em', color: '#f5f5f5', background: 'transparent', marginTop: '10px' }}>Quantidade:</span>
						<Tooltip title={'Digite a quantidade de tokens que deseja comprar'}  placement="topLeft" color='#009991' >

						<Input
							size="large"
							autoFocus={type === 'ongoing'}
							value={quantityInputState}
							type='number'
							placeholder='Quantidade de tokens'
							disabled={quoteBalanceState <= 0}
							onChange={handleQuantityInput}
			
						/> </Tooltip>
						{quantityInputState < props.sale.min_buy ? (
							<span style={{ fontSize: '0.75em', color: '#ED0A3F', opacity: 0.91, background: 'transparent' }}>
								** A quantidade deve ser maior que {props.sale.min_buy} tokens
							</span>
						) : (
							''
						)}
					</div>
					<div className="">
						<span style={{ fontSize: '0.8em', color: '#f5f5f5', background: 'transparent', marginTop: '10px' }}>Ao preço unitário de:</span>
						<Input
							size="large"
							disabled
							value={priceState}
							type="number"
							addonBefore={<img className="currency-icon-token" src={findIcon(quoteCurrencyState)} alt="price_icon" style={{width: '26px', borderRadius: '50%'}}/>}
							addonAfter={quoteCurrencyState.toUpperCase()}
							bordered={false}
						/>
					</div>
					<div className="">
						<span style={{ fontSize: '0.8em', color: '#f5f5f5', background: 'transparent', marginTop: '10px' }}>O total da sua compra será de: </span>
						<Input
							size="large"
							disabled
							max="1000000"
							value={quoteTotalState}
							type="number"
							addonBefore={<img className="currency-icon" src={findIcon(quoteCurrencyState)} alt="" />}
							addonAfter={quoteCurrencyState.toUpperCase()}
						/>
					</div>
					<div className="buy-button" style={{ marginTop: '35px' }}>
						{buyButton}
					</div>
				</React.Fragment>
			);
		} else {
			return '';
		}
	};

	const showSelectCurrencyForm = () => {
		return (
			<div className="select-currency-box">
				<label form="currency">Forma de pagamento:</label>
				<select onChange={handleSelectCurrency} value={quoteCurrencyState} id='currency'   >
					{currency_available.map(currency => {
						let optiontring = currency.toUpperCase();
						const balance = Decimal.format(handleGetBalance(currency), 4, '.', ',');
						optiontring += ` | Disponível: ${balance}`;

						return <option value={currency} style={{background: 'var(--input-background-color) !important'}}>{optiontring}</option>;
					})}
				</select>
			</div>
		);
	};

	
	const showCloseView = () => {
		if (type !== 'ongoing') {
			return (
				<div id="sale-buy__closed">
					<span>Preço unitário:</span>
					<p>R${props.sale.price} Reais</p>
					<span>Inicia após:</span>
					<p style={{ color: 'rgb(248, 83, 113)' }}>{type.toUpperCase()}</p>
				</div>
			);
		}

		return '';
	};

	const showBuyConfirmModalView = () => {
		if (quoteTotalState && quoteCurrencyState && quantityInputState >= props.sale.min_buy && priceState && priceState > 0) {
			return (
				<BuyConfirmModal
					visible={isShowBuyConfirmModalState}
					onHiddenModal={hiddenBuyConfirmModal}
					onBuy={handleBuy}
					quantity={quantityInputState}
					ieoID={id}
					baseBalance={baseBalance}
					baseCurrency={String(currency_id).toUpperCase()}
					quoteBalance={quoteBalanceState}
					quoteCurrency={String(quoteCurrencyState).toUpperCase()}
					quoteTotal={quoteTotalState}
					bonus={bonusState}
				/>
			);
		}

		return '';
	};

	return (
		<React.Fragment>
			<div id="sale-buy" >
				<div className='sale-buy-frame'>
					<div>
						<p className='priceDescription'>Preço unitário</p>
						<p className='priceValue'>R$ 5,00</p>
					</div>
					<p className='yield-badge'>1.52% ao mês</p>
				</div>
				<h2 className="sale-buy__title" style={{color: '#f5f5f5'}}>Comprar <span style={{color: '#FDA736'}}>{currency_id.toUpperCase()}</span></h2>
				{/* <div style={{display: 'flex', flexDirection: 'row', lineHeight:'56px', color: 'var(--primary-text-color)'}}> <img src={garantia} /><p className="sale-buy__title"> COMPRAR <span style={{color: '#FDA736'}}>${currency_id.toUpperCase()}</span></p></div> */}
				<h3 className="sale-buy__subtitle">{`Saldo atual: ${baseBalance} ${currency_id.toUpperCase()}`}</h3>
				<div className="buy-box" >
					{showSelectCurrencyForm()}
					{showBuyForm()}
				</div>
				<div className="row">
					<div className="col-12 text-center" style={{ marginTop: '2rem' }}>
						{/* <img width="80px" src={WalletImage} alt="" /> */}
					</div>
				</div>
			</div>
			{showCloseView()}
			{showBuyConfirmModalView()}
		</React.Fragment>
	);
};