import React, { useState } from "react";

import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router';

import { Container, Content, ContentInside } from "./style";

import { Mydata } from "./myData";
import { Preferences } from "./preferences";
import { Limits } from "./limits";
import { Security } from "./security";

import { selectSaleItem } from 'src/modules/sale/sale-item';

import { selectUserInfo } from 'src/modules';
import { findSalebyId } from 'src/modules/sale/sale-item';

import { SaleDetailScreen } from "src/plugins/Sale";

export const TokenScreen: React.FC = () => {



  const [internalPage, setInternalPage] = useState(1);

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
		dispatchFetchSaleItemByID(ieoID);
	}, [dispatchFetchSaleItemByID, ieoID]);

  let saleBadgeColor = '#0C9D58';
	let saleBadgeDescription = 'Em captação';

	switch (saleItem.payload.type) {
		case 'ongoing':
			saleBadgeColor = '#009991';
			saleBadgeDescription = 'Em captação';
			break;
		case 'upcoming':
			saleBadgeColor = '#FABE08';
			saleBadgeDescription = 'Captação futura';

			break;
		case 'ended':
			saleBadgeColor = '#EA4235';
			saleBadgeDescription = 'Captação finalizada';
			break;
	
		default:
			break;
	}


  
  const renderTokenHeader = () => {

    if (saleItem.payload.id) {
			return (
        <div className="pg-token-header">
          <p className="pg-token-header-code"> token ${saleItem.payload.currency_id} </p>
          <p className="pg-token-header-type" style={{ backgroundColor: saleBadgeColor }} > {saleBadgeDescription} </p>
          <p style={{display: 'flex', flexDirection: 'row', color: '#11ECC7', fontSize: '16px', fontWeight: '400', lineHeight: '19.36px', marginBottom: '20px'}}> Comprar tokens <p style={{marginLeft: '6px', color: '#c0c0c0', fontSize: '16px', fontWeight: '400', lineHeight: '19px'}}> / Token ${saleItem.payload.currency_id} </p> </p>
          <div style={{display: 'flex', flexDirection: 'row', marginBottom: '20px', justifyContent: 'space-between'}} >
            <div style={{display: 'flex', flexDirection: 'row', marginBottom: '20px'}} >
              <img className="pg-token-header-logo" src={saleItem.payload.sale_logo} ></img> 
              <div style={{display: 'flex', flexDirection: 'column', marginLeft: '20px', justifyContent: 'space-evenly'}} >
                <span style={{color: 'var(--input-text-color)', fontFamily: 'Inter', fontSize: '24px', fontWeight: '600', lineHeight: '29px'}}> {saleItem.payload.host_uid} </span>
                <span style={{color: '#11ECC7', fontFamily: 'Inter', fontSize: '14px', fontWeight: '400', lineHeight: '16.94px', opacity: '0.84'}}> + 1.52% a.m <span style={{color: 'var(--input-text-color)'}}> | Receba em 1x até 16/04/2024   </span> </span>
              </div>
            </div>
            <div style={{display: 'flex', flexDirection: 'column', marginRight: '60px'}} >
              <p className="pg-token-header-contract"> Contrato </p>
              <div className="pg-token-header-contract-wraper">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" role="img" className="sc-dd938628-0 kHltGi">
                    <path fill="#2F3030" d="M249.982 6.554 397.98 251.112l-147.45-63.02z"></path>
                    <path fill="#828384" d="M102.39 251.112 249.982 6.554l.548 181.538z"></path>
                    <path fill="#343535" d="M249.982 341.285 102.39 251.112l148.14-63.02z"></path>
                    <path fill="#131313" d="m397.98 251.112-147.45-63.02-.548 153.193z"></path>
                    <path fill="#2F3030" d="m249.982 372.329 147.998-87.732L249.982 493.13z"></path>
                    <path fill="#828384" d="M249.982 372.329 102.39 284.597 249.982 493.13z"></path>
                </svg>
                {/* <p className="pg-token-header-contract-address"> </p> */}
                {/* <a className="pg-token-header-contract-address" href="https://app.ens.domains/fortem-one.eth" target="_blank" rel="noopener noreferrer">
                  [ fortem-one.eth ]
							  </a> */}
                <a className="pg-token-header-contract-address" href="https://app.ens.domains/fortem-one.eth" target="_blank" rel="noopener noreferrer">
                  0xa470629a595D93004aC6510D3b914360C46D9c05 
							  </a>
              </div>
            </div>

          </div>
        </div>

			);
		} else {

      return (
        <>
          <div>{saleItem.payload.description}</div>
        </>

			);
      }

    };

  return (
    <Container>
      <Content
        // style={
        //   !props.isOpened ? { maxWidth: "calc(100vw - 200px)", left: 150 } : {}
        // }
      >
        <div className="header-profile">
          <div className="btn-gerencial">
            <div>
              <button
                onClick={() => setInternalPage(1)}
                className={internalPage === 1 && "active-menu-header"}
                style={{color: 'var(--primary-text-color)'}}
              >
                O Projeto
              </button>
              <button
                onClick={() => setInternalPage(2)}
                className={internalPage === 2 && "active-menu-header"}
                style={{color: 'var(--primary-text-color)'}}
              >
                Sobre o token
              </button>
              <button
                onClick={() => setInternalPage(3)}
                className={internalPage === 3 && "active-menu-header"}
                style={{color: 'var(--primary-text-color)'}}
              >
                Emissor
              </button>
              <button
                onClick={() => setInternalPage(4)}
                style={{color: 'var(--primary-text-color)'}}
              >
                Garantias e risco
              </button>
            </div>
          </div>
        </div>

        {renderTokenHeader()};

        </Content>

        <ContentInside>



        {internalPage === 1 ? (
          <Mydata />
          // <SaleDetailScreen/>
        ) : internalPage === 2 ? (
          <Preferences />
        ) : internalPage === 3 ? (
          <Limits />
        ) : internalPage === 4 ? (
          <Security />
        ) : (
          {}
        )}
      </ContentInside>
    </Container>
  );
}
