import { Button, Col, message, Result, Row } from 'antd';
import React, { useState }  from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router';



import { selectSaleItem } from 'src/modules/sale/sale-item';

import { selectUserInfo } from 'src/modules';


import { findSalebyId } from 'src/modules/sale/sale-item';

import { BuyHistory, SaleBuy, SaleDetail, SaleInfo, SaleSocial } from 'src/plugins/Sale';


import { BuyersHistory } from 'src/plugins/Sale';

//import './SaleDetailScreen.pcss';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// import SectionTitle from "../../../../template_react/doob/src/elements/sectionTitle/SectionTitle";




export const SaleDetailScreen: React.FC = () => {

	const [tabIndex, setTabIndex] = useState(0);

	const history = useHistory();
	const { ieoID } = useParams<{ ieoID: string }>();
	const saleItem = useSelector(selectSaleItem);
	const user = useSelector(selectUserInfo);
	const dispatch = useDispatch();
	const dispatchFetchSaleItemByID = React.useCallback(
		(ieoIdParam: string) =>
			dispatch(
				findSalebyId({
					id: ieoIdParam,
				}),
			),
		[dispatch],
	);

	

	React.useEffect(() => {
		if (saleItem.loading) {
			message.loading('Aguarde...', 0);
		} else {
			message.destroy();
		}

		return () => {
			message.destroy();
		};
	}, [saleItem.loading]);

	React.useEffect(() => {
		dispatchFetchSaleItemByID(ieoID);
	}, [dispatchFetchSaleItemByID, ieoID]);

	let saleInfoView: JSX.Element;
	let saleBuyView: JSX.Element;
	let saleSocialView: JSX.Element;
	let saleDetailView: JSX.Element;
	let buyHistoryView: JSX.Element;
	if (saleItem && user) {
		saleInfoView = <SaleInfo ieoID={ieoID} sale={saleItem.payload} />;
		saleBuyView = <SaleBuy uid={user.uid} sale={saleItem.payload} />;
		saleDetailView = <SaleDetail ieoID={Number(ieoID)} />;
		if (user.uid) {
			buyHistoryView = (
				<>
					<div className="col-md-12 col-xl-6 mt-3">
						<BuyHistory uid={user.uid} ieoID={Number(ieoID)} />
					</div>
					<div className="col-md-12 col-xl-6 mt-3">
						<BuyersHistory ieoID={Number(ieoID)} />
					</div>
				</>
			);
		} else {
			buyHistoryView = (
				<>
					<div className="col-12">
						<BuyersHistory ieoID={Number(ieoID)} />
					</div>
				</>
			);
		}

		// const saleSocial = saleItem.payload.social;
		// saleSocialView = (
		// 	<SaleSocial
		// 		website=''
		// 		whitepaper=''
		// 		ico=''
		// 		facebook=''
		// 		telegram=''
		// 		twitter=''
		// 		linkedin=''
		// 		instagram=''
		// 	/>
		// );
	}

	const getBadgeColor = type => {
		switch (type) {
			case 'ongoing':
				return '#2a9d8f';
			case 'upcoming':
				return '#e9c46a';
			case 'ended':
				return '#e63946';
			default:
				return '#0C9D58ff';
		}
	};

	const renderDetailScreenView = () => {
		if (!saleItem.payload.id) {
			return (
				<Result
					status="500"
					title="500"
					subTitle="Nenhuma emissão encontrada na plataforma"
					extra={
						<Button type="primary" onClick={() => history.goBack()}>
							Voltar
						</Button>
					}
				/>
			);
		} else {
			return (
				<div id="sale-detail-screen">

<div className="rwt-advance-tab-area "  >
                    <div className="" >

					
						<div className="container" style={{display: 'flex', flexDirection: 'row', width: '100%'}} >
						
					
                    				
				
						{saleBuyView}
					
			    </div>
				
            
					</div>
					</div>

				</div>
			);
		}
	};

	return <React.Fragment>{renderDetailScreenView()}</React.Fragment>;
};
