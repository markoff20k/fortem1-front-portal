import cr from 'classnames';
import moment from 'moment';
import * as React from 'react';

import { Button, Spinner } from 'react-bootstrap';
import { injectIntl } from 'react-intl';
import MaskInput from 'react-maskinput';
import { connect, MapDispatchToPropsFunction } from 'react-redux';
import { RouterProps } from 'react-router';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { IntlProps } from '../../../';
import { languages } from '../../../api/config';
import { CustomInput, SearchDropdown } from '../../../components';
import { formatDate, isDateInFuture } from '../../../helpers';
import {
    editIdentity,
    Label,
    labelFetch,
    RootState,
    selectCurrentLanguage,
    selectEditIdentitySuccess,
    selectLabelData,
    selectSendIdentityLoading,
    selectSendIdentitySuccess,
    selectUserInfo,
    sendIdentity,
    User,
} from '../../../modules';
import { IdentityData } from '../../../modules/user/kyc/identity/types';

import * as countries from 'i18n-iso-countries';

// import AutoComplete from './Autocomplete';
//import GooglePlacesAutocomplete from 'react-google-places-autocomplete';

// import SearchBar from 'material-ui-search-bar';
import Script from 'react-load-script';

// import AutoComplete from './Autocomplete';


interface ReduxProps {
    editSuccess?: string;
    sendSuccess?: string;
    lang: string;
    labels: Label[];
    user: User;
    loading: boolean;
}

interface DispatchProps {
    editIdentity: typeof editIdentity;
    sendIdentity: typeof sendIdentity;
    labelFetch: typeof labelFetch;
}

interface OnChangeEvent {
    target: {
        value: string;
    };
}

interface IdentityState {
    city: string;
    countryOfBirth: string;
    dateOfBirth: string;
    firstName: string;
    lastName: string;
    postcode: string;
    cpf: string;
    tel: string;
    query: string;
    residentialAddress: string;
    residentialAddress2: string;
    residentialAddress3: string;
    region: string;
    zone: string;
    country: string;
    cityFocused: boolean;
    dateOfBirthFocused: boolean;
    cpfFocused: boolean;
    telFocused: boolean;
    firstNameFocused: boolean;
    lastNameFocused: boolean;
    postcodeFocused: boolean;
    residentialAddressFocused: boolean;
    residentialAddress2Focused: boolean;
    residentialAddress3Focused: boolean;
    regionFocused: boolean;
    zoneFocused: boolean;
    countryFocused: boolean;
}

type Props = ReduxProps & DispatchProps & RouterProps & IntlProps;

class IdentityComponent extends React.Component<Props, IdentityState> {
    public state = {
        city: '',
        countryOfBirth: '',
        dateOfBirth: '',
        firstName: '',
        lastName: '',
        postcode: '',
        cpf: '',
        tel: '',
        query: '',
        residentialAddress: '',
        residentialAddress2: '',
        residentialAddress3: '',
        region: '',
        zone: '',
        country: '',
        cityFocused: false,
        dateOfBirthFocused: false,
        cpfFocused: false,
        telFocused: false,
        firstNameFocused: false,
        lastNameFocused: false,
        postcodeFocused: false,
        residentialAddressFocused: false,
        residentialAddress2Focused: false,
        residentialAddress3Focused: false,
        regionFocused: false,
        zoneFocused: false,
        countryFocused: false,
    };

    public translate = (e: string) => {
        return this.props.intl.formatMessage({ id: e });
    };

    public componentDidUpdate(prev: Props) {
        const { history, editSuccess, sendSuccess } = this.props;

        if ((!prev.editSuccess && editSuccess) || (!prev.sendSuccess && sendSuccess)) {
            this.props.labelFetch();
            history.push('/profile?internalPage=3', {internalPage: 3});
            

        }

  
    }

    
    //const autocomplete = new google.maps.places.Autocomplete(input, options);




      

    public render() {

        // const input = document.getElementById('autocomplete') as HTMLInputElement | null;
        // const value = input?.value;

        // input?.addEventListener('input', function (event) {
        //     const target = event.target as HTMLInputElement;

        //   });


            
            // const options = {
            //     fields: ["address_components", "geometry", "icon", "name"],
            //     types: ["address"]
            //    }
       
                   
        const { editSuccess, sendSuccess, lang, loading } = this.props;

        const {
            city,
            dateOfBirth,
            firstName,
            lastName,
            postcode,
            cpf,
            tel,
            residentialAddress,
            residentialAddress2,
            residentialAddress3,
            region,
            zone,
            country,
            cityFocused,
            dateOfBirthFocused,
            cpfFocused,
            telFocused,
            firstNameFocused,
            lastNameFocused,
            postcodeFocused,
            residentialAddressFocused,
            residentialAddress2Focused,
            residentialAddress3Focused,
            query,
            regionFocused,
            zoneFocused,
            countryFocused,
            
            
            
        } = this.state;


        const firstNameGroupClass = cr('pg-confirm__content-identity__forms__row__content', {
            'pg-confirm__content-identity__forms__row__content--focused': firstNameFocused,
            'pg-confirm__content-identity__forms__row__content--wrong':
                firstName && !this.handleValidateInput('firstName', firstName),

                'label-error--active':
                firstName && !this.handleValidateInput('firstName', firstName),
                
        });

        const lastNameGroupClass = cr('pg-confirm__content-identity__forms__row__content', {
            'pg-confirm__content-identity__forms__row__content--focused': lastNameFocused,
            'pg-confirm__content-identity__forms__row__content--wrong':
                lastName && !this.handleValidateInput('lastName', lastName),
                'label-error--active':
                lastName && !this.handleValidateInput('lastName', lastName),
        });

        const dateOfBirthGroupClass = cr('pg-confirm__content-identity__forms__row__content', {
            'pg-confirm__content-identity__forms__row__content--focused': dateOfBirthFocused,
            'pg-confirm__content-identity__forms__row__content--wrong':
                dateOfBirth && !this.handleValidateInput('dateOfBirth', dateOfBirth),
            'label-error--active':
                dateOfBirth && !this.handleValidateInput('dateOfBirth', dateOfBirth),
        });

        const cpfGroupClass = cr('pg-confirm__content-identity__forms__row__content', {
            'pg-confirm__content-identity__forms__row__content--focused': cpfFocused,
            'pg-confirm__content-identity__forms__row__content--wrong':
                cpf && !this.isValidCPF(cpf),
            'label-error--active':
                cpf && !this.isValidCPF(cpf),
        });

        const telGroupClass = cr('pg-confirm__content-identity__forms__row__content', {
            'pg-confirm__content-identity__forms__row__content--focused': telFocused,
            'pg-confirm__content-identity__forms__row__content--wrong':
                tel && !this.handleValidateInput('tel', tel),
                'label-error--active': tel && !this.handleValidateInput('tel', tel),
        });

        const residentialAddressGroupClass = cr('pg-confirm__content-identity__forms__row__content', {
            'pg-confirm__content-identity__forms__row__content--focused': residentialAddressFocused,
            'pg-confirm__content-identity__forms__row__content--wrong':
                residentialAddress && !this.handleValidateInput('residentialAddress', residentialAddress),
        });

        const residentialAddress2GroupClass = cr('pg-confirm__content-identity__forms__row__content', {
            'pg-confirm__content-identity__forms__row__content--focused': residentialAddress2Focused,
            'pg-confirm__content-identity__forms__row__content--wrong':
                residentialAddress2 && !this.handleValidateInput('residentialAddress2', residentialAddress2),
        });

        const residentialAddress3GroupClass = cr('pg-confirm__content-identity__forms__row__content', {
            'pg-confirm__content-identity__forms__row__content--focused': residentialAddress3Focused,
            'pg-confirm__content-identity__forms__row__content--wrong':
                residentialAddress3 && !this.handleValidateInput('residentialAddress3', residentialAddress3),
        });



        const cityGroupClass = cr('pg-confirm__content-identity__forms__row__content', {
            'pg-confirm__content-identity__forms__row__content--focused': cityFocused,
            'pg-confirm__content-identity__forms__row__content--wrong': city && !this.handleValidateInput('city', city),
            'label-error--active': city && !this.handleValidateInput('city', city),
        });

        const regionGroupClass = cr('pg-confirm__content-identity__forms__row__content', {
            'pg-confirm__content-identity__forms__row__content--focused': regionFocused,
            'pg-confirm__content-identity__forms__row__content--wrong': region && !this.handleValidateInput('region', region),
            'label-error--active': region && !this.handleValidateInput('region', region),
        });

        const zoneGroupClass = cr('pg-confirm__content-identity__forms__row__content', {
            'pg-confirm__content-identity__forms__row__content--focused': zoneFocused,
            'pg-confirm__content-identity__forms__row__content--wrong': zone && !this.handleValidateInput('zone', zone),
            'label-error--active': zone && !this.handleValidateInput('zone', zone),
        });

        const countryGroupClass = cr('pg-confirm__content-identity__forms__row__content', {
            'pg-confirm__content-identity__forms__row__content--focused': countryFocused,
            'pg-confirm__content-identity__forms__row__content--wrong': country && !this.handleValidateInput('country', country),
            'label-error--active': country && !this.handleValidateInput('country', country),
            
        });

        const postcodeGroupClass = cr('pg-confirm__content-identity__forms__row__content', {
            'pg-confirm__content-identity__forms__row__content--focused': postcodeFocused,
            'pg-confirm__content-identity__forms__row__content--wrong':
                postcode && !this.handleValidateInput('postcode', postcode),
            'label-error--active': postcode && !this.handleValidateInput('postcode', postcode),
        });

        /* tslint:disable */
        languages.map((l: string) => countries.registerLocale(require(`i18n-iso-countries/langs/${l}.json`)));

        /* tslint:enable */

        const dataCountries = Object.values(countries.getNames(lang)).map((item) => {
            return { label: item, value: item };
        });

 
        const options = {
            // componentRestrictions: { country: "ng" },
            // fields: ["address_components", "geometry", "icon", "name"],
            types: ["address"]
           }
    
        const autocomplete = new google.maps.places.Autocomplete(document.getElementById('autocomplete'), options );

        
   

        const handleScriptLoad = () => { 

            // google.maps.event.addListener(autocomplete, 'place_changed', function () {
            //     var place = autocomplete.getPlace();
            //     console.log(place);

            console.log("BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB")


            // Declare Options For Autocomplete 
            //const options = { types: ['(address)'] }; 

            // const options = {
            //     // componentRestrictions: { country: "ng" },
            //     fields: ["address_components", "geometry", "icon", "name"],
            //     types: ["address"]
            //    }
            
            // Initialize Google Autocomplete 
            /*global google*/
            
            // const autocomplete = new google.maps.places.Autocomplete(document.getElementById('autocomplete'), options );



            // Avoid paying for data that you don't need by restricting the 
            // set of place fields that are returned to just the address
            // components and formatted address
            // autocomplete.setFields(['address_components',   
            //                              'formatted_address']);
            // Fire Event when a suggested name is selected
            
            
            //autocomplete.addListener('place_changed', handlePlaceSelect());

            google.maps.event.addListener(autocomplete, 'place_changed', function() {
                var place = autocomplete.getPlace();
                console.log(place);
                console.log('PLACEPLACEPLACEPLACEPLACEPLACEPLACEPLACEPLACEPLACEPLACEPLACEPLACEPLACE')
            });

            

            autocomplete.addListener('autocomplete', function() {

                var place = autocomplete.getPlace();

                console.log('PLACEPLACEPLACEPLACEPLACEPLACEPLACEPLACEPLACEPLACEPLACEPLACEPLACEPLACE')
            
                if (!place.geometry) {
                  // User entered the name of a Place that was not suggested and
                  // pressed the Enter key, or the Place Details request failed.
                  // Do anything you like with what was entered in the ac field.
                  console.log('You entered: ' + place.name);
                  return;
                }
            
                console.log('You selected: ' + place.formatted_address);
              });
            
            
          }

          const handlePlaceSelect = () => {

            console.log("UUUUUUUUUUUUUUUUUUUUUUUUUUUUUU");

            // Extract City From Address Object
            const addressObject = autocomplete.getPlace();
            const address = addressObject.address_components;
        
            // Check if address is valid
            if (address) {
              // Set State
              this.setState(
                {
                  city: address[0].long_name,
                  query: addressObject.formatted_address,
                }
              );
              console.log(city);
              console.log("UHUUUUUUUUUUUUUUUUUUUUUUUUUUUL");
            }
          }

          //autocomplete.addListener('place_changed', handlePlaceSelect());
        
        return (
            <>
            <Script url="https://maps.googleapis.com/maps/api/js?key=AIzaSyBhuXDx_zh466hb2LYtMmwiyi0d0Bb7RgA&libraries=places" onLoad={handleScriptLoad} />  
            <form className="pg-confirm__content-identity" autoComplete="on">
                <div className="pg-confirm__content-identity__forms">
                    <div className="pg-confirm__content-identity__forms__row">

                    {/* <AutoComplete /> */}
                        <fieldset className={firstNameGroupClass}>
                            <CustomInput
                                type="string"
                                name="fname"
                                autoComplete="given-name"
                                inputValue={firstName}
                                placeholder={this.translate('page.body.kyc.identity.firstName')}
                                handleChangeInput={(e) => this.handleChangeNames(e, 'firstName')}
                                autoFocus={true}
                                label={this.translate('page.body.kyc.identity.firstName')}
                                defaultLabel={''}
                                handleFocusInput={this.handleFieldFocus('firstName')}
                            />
                        <label className='label-error'>Seu nome deve possuir pelo menos 3 caracteres</label>
                        </fieldset>
                        
                        </div>
                        

                        <div className="pg-confirm__content-identity__forms__row">

                        <fieldset className={lastNameGroupClass}>
                            <CustomInput
                                type="string"
                                name="lname"
                                autoComplete="family-name"
                                inputValue={lastName}
                                handleChangeInput={(e) => this.handleChangeNames(e, 'lastName')}
                                placeholder={this.translate('page.body.kyc.identity.lastName')}
                                label={this.translate('page.body.kyc.identity.lastName')}
                                defaultLabel={''}
                                handleFocusInput={this.handleFieldFocus('lastName')}
                            />
                            <label className='label-error'>Seu sobrenome deve possuir pelo menos 3 caracteres</label>
                        </fieldset>
                    </div>
                    <div className="pg-confirm__content-identity__forms__row">
                        <fieldset className={dateOfBirthGroupClass}>
                            <div className="custom-input">
                                {dateOfBirth ? (
                                    <label>{this.translate('page.body.kyc.identity.dateOfBirth')}</label>
                                ) : <label>Data de Nascimento</label>}
                                <div className="input-group input-group-lg">
                                    <MaskInput
                                        className="pg-confirm__content-identity__forms__row__content-number"
                                        maskString="00/00/0000"
                                        mask="00/00/0000"
                                        onChange={this.handleChangeDate}
                                        onFocus={this.handleFieldFocus('dateOfBirth')}
                                        onBlur={this.handleFieldFocus('dateOfBirth')}
                                        value={dateOfBirth}
                                        placeholder={this.translate('page.body.kyc.identity.dateOfBirth.placeholder')}
                                    />
                                </div>
                            </div>
                            <label className='label-error'>Data inválida</label>
                        </fieldset>
                    {/* </div>

                    <div className="pg-confirm__content-identity__forms__row"> */}
                        <fieldset className={cpfGroupClass}>
                            <div className="custom-input">
                                {cpf ? (
                                    <label>{this.translate('page.body.kyc.identity.cpf')}</label>
                                ) : <label>CPF</label>}
                                <div className="input-group input-group-lg">
                                    <MaskInput
                                        className="pg-confirm__content-identity__forms__row__content-number"
                                        maskString="000.000.000-00"
                                        mask="000.000.000-00"
                                        onChange={this.handleChangeCPF}
                                        onFocus={this.handleFieldFocus('cpf')}
                                        onBlur={this.handleFieldFocus('cpf')}
                                        value={cpf}
                                        placeholder={this.translate('page.body.kyc.identity.cep.placeholder')}
                                    />
                                </div>
                            </div>
                            <label className='label-error'>CPF inválido</label>
                        </fieldset>
                    </div>


                    <div className="pg-confirm__content-identity__forms__row">
                        <fieldset className={telGroupClass}>
                            <div className="custom-input">
                                {tel ? (
                                    <label>{this.translate('page.body.kyc.phone.phoneNumber')}</label>
                                ) : <label>Telefone</label>}
                                <div className="input-group input-group-lg">
                                    <MaskInput
                                        className="pg-confirm__content-identity__forms__row__content-number"
                                        maskString="00-00000-0000"
                                        mask="00-00000-0000"
                                        onChange={this.handleChangeTel}
                                        onFocus={this.handleFieldFocus('tel')}
                                        onBlur={this.handleFieldFocus('tel')}
                                        value={tel}
                                        placeholder="00-00000-0000"
                                    />
                                </div>
                            </div>
                        </fieldset>
                    </div>



                    <div className="pg-confirm__content-identity__forms__row">
                        <div className="pg-confirm__content-identity__forms__row__content">
                            <SearchDropdown
                                className="pg-confirm__content-identity__forms__row__content-number-dropdown"
                                options={dataCountries}
                                onSelect={this.selectCountry}
                                placeholder={this.translate('page.body.kyc.identity.CoR')}
                            />
                        </div>
                    </div>
                    <div className="pg-confirm__content-identity__forms__row">
                        <fieldset className={residentialAddressGroupClass}>
                            <CustomInput
                                type="string"
                                name="ship-address"
                                autoComplete={new google.maps.places.Autocomplete(document.getElementById("autocomplete"), options)}
                                // inputValue={this.state.query}
                                inputValue={residentialAddress}
                                placeholder={this.translate('page.body.kyc.identity.residentialAddress')}
                                label={this.translate('page.body.kyc.identity.residentialAddress')}
                                defaultLabel={''}
                                handleChangeInput={(e) => this.handleChange(e, 'residentialAddress')}
                                handleFocusInput={this.handleFieldFocus('residentialAddress')}
                                id="autocomplete"
                            />
                                {/* <input id="autocomplete2" placeholder="Endereço residencial"
                                    style={{
                                        margin: '0 auto',
                                        height: '48px',
                                        width: '100%',
                                        color: 'var(--input-text-color)',
                                        border: 'none !important',
                                        outline: 'none !important',
                                        
                                    }}
                                    /> */}
                        </fieldset>
                    </div>

                    <div className="pg-confirm__content-identity__forms__row input-group">
                        <fieldset className={residentialAddress2GroupClass}>
                            <CustomInput
                                type="string"
                                name="numero"
                                autoComplete="shipping locality"
                                inputValue={residentialAddress2}
                                handleChangeInput={(e) => this.handleChange(e, 'residentialAddress2')}
                                // placeholder={this.translate('page.body.kyc.identity.city')}
                                placeholder="Número"
                                // label={this.translate('page.body.kyc.identity.city')}
                                label="Número"
                                defaultLabel={''}
                                handleFocusInput={this.handleFieldFocus('residentialAddress2')}
                            />
                            <label className='label-error'>Número inválido. Digite DDD + Telefone</label>
                        </fieldset>
                        <fieldset className={residentialAddress3GroupClass}>
                            <CustomInput
                                //label={this.translate('page.body.kyc.identity.postcode')}
                                label="Complemento"

                                // defaultLabel={this.translate('page.body.kyc.identity.postcode')}
                                defaultLabel="Complemento"
                                type="string"
                                name="complemento"
                                autoComplete="shipping postal-code"
                                inputValue={residentialAddress3}
                                handleChangeInput={(e) => this.handleChange(e, 'residentialAddress3')}
                                onKeyPress={this.handleConfirmEnterPress}
                                // placeholder={this.translate('page.body.kyc.identity.postcode')}
                                placeholder="Complemento"
                                handleFocusInput={this.handleFieldFocus('residentialAddress3')}
                            />
                        </fieldset>
                    </div>


                    <div className="pg-confirm__content-identity__forms__row">
                        <fieldset className={regionGroupClass}>
                            <CustomInput
                                type="string"
                                name="bairro"
                                autoComplete="shipping locality"
                                inputValue={region}
                                handleChangeInput={(e) => this.handleChange(e, 'region')}
                                // placeholder={this.translate('page.body.kyc.identity.city')}
                                placeholder="Bairro"
                                // label={this.translate('page.body.kyc.identity.city')}
                                label="Bairro"
                                defaultLabel={''}
                                handleFocusInput={this.handleFieldFocus('region')}
                            />
                        <label className='label-error'>Campo com menos de 3 caracteres</label>
                        </fieldset>

                    </div>

                    <div className="pg-confirm__content-identity__forms__row input-group">
  
                        <fieldset className={cityGroupClass}>
                            <CustomInput
                                //label={this.translate('page.body.kyc.identity.postcode')}
                                label="Cidade"
                                // defaultLabel={this.translate('page.body.kyc.identity.postcode')}
                                defaultLabel="Cidade"
                                type="string"
                                name="cidade"
                                autoComplete="shipping postal-code"
                                inputValue={city}
                                handleChangeInput={(e) => this.handleChange(e, 'city')}
                                
                                onKeyPress={this.handleConfirmEnterPress}
                                // placeholder={this.translate('page.body.kyc.identity.postcode')}
                                placeholder="Cidade"
                                handleFocusInput={this.handleFieldFocus('city')}
                            />
                            <label className='label-error'>Campo com menos de 3 caracteres</label>
                        </fieldset>

                        <fieldset className={zoneGroupClass}>
                            <CustomInput
                                type="string"
                                name="estado"
                                autoComplete="shipping locality"
                                inputValue={zone}
                                handleChangeInput={(e) => this.handleChange(e, 'zone')}
                                // placeholder={this.translate('page.body.kyc.identity.city')}
                                placeholder="Estado"
                                // label={this.translate('page.body.kyc.identity.city')}
                                label="Estado"
                                defaultLabel={''}
                                handleFocusInput={this.handleFieldFocus('zone')}
                                id='autogeneratecity'
                            />
                            <label className='label-error'>Campo com menos de 2 caracteres</label>
                        </fieldset>
                    </div>


                    {/* <div className="pg-confirm__content-identity__forms__row input-group">
                        <fieldset className={postcodeGroupClass}>
                            <CustomInput
                                label={this.translate('page.body.kyc.identity.postcode')}
                                defaultLabel={this.translate('page.body.kyc.identity.postcode')}
                                type="string"
                                name="ship-zip"
                                autoComplete="shipping postal-code"
                                inputValue={postcode}
                                handleChangeInput={(e) => this.handleChange(e, 'postcode')}
                                onKeyPress={this.handleConfirmEnterPress}
                                placeholder={this.translate('page.body.kyc.identity.postcode')}
                                handleFocusInput={this.handleFieldFocus('postcode')}
                            />
                        </fieldset>
                    </div> */}

                    <div className="pg-confirm__content-identity__forms__row">
                    <fieldset className={countryGroupClass}>
                            <CustomInput
                                //label={this.translate('page.body.kyc.identity.postcode')}
                                label="País"
                                // defaultLabel={this.translate('page.body.kyc.identity.postcode')}
                                defaultLabel="País"
                                type="string"
                                name="país"
                                autoComplete="shipping postal-code"
                                inputValue={country}
                                handleChangeInput={(e) => this.handleChange(e, 'country')}
                                onKeyPress={this.handleConfirmEnterPress}
                                // placeholder={this.translate('page.body.kyc.identity.postcode')}
                                placeholder="País"
                                handleFocusInput={this.handleFieldFocus('country')}
                            />
                            <label className='label-error'>Campo com menos de 3 caracteres</label>
                        </fieldset>
                        
                        <fieldset className={postcodeGroupClass}>
                            <div className="custom-input">
                                {postcode ? (
                                    <label>{this.translate('page.body.kyc.identity.postcode')}</label>
                                ) : <label>CEP</label>}
                                <div className="input-group input-group-lg">
                                    <MaskInput
                                        className="pg-confirm__content-identity__forms__row__content-number"
                                        maskString="00000-000"
                                        mask="00000-000"
                                        onChange={this.handleChangeCEP}
                                        //handleChangeInput={(e) => this.handleChange(e, 'postcode')}
                                        onFocus={this.handleFieldFocus('postcode')}
                                        onBlur={this.handleFieldFocus('postcode')}
                                        value={postcode}
                                        placeholder="00000-000"

                                        
                                    />
                                </div>
                            </div>
                            <label className='label-error'>CEP inválido</label>
                        </fieldset>
                    </div>




                </div>
                {sendSuccess && !editSuccess && <p className="pg-confirm__success">{this.translate(sendSuccess)}</p>}
                {editSuccess && !sendSuccess && <p className="pg-confirm__success">{this.translate(editSuccess)}</p>}
                <div className="pg-confirm__content-deep">
                    <Button
                        onClick={this.sendData}
                        disabled={this.handleCheckButtonDisabled() || loading}
                        size="lg"
                        variant="primary"
                        type="submit"
                        block={true}>
                        {loading ? (
                            <Spinner
                                as="span"
                                animation="border"
                                size="sm"
                                role="status"
                                aria-hidden="true"
                            />
                        ) : this.translate('page.body.kyc.next')}
                    </Button>
                </div>
            </form>
            </>
        );
    }

    private scrollToElement = (displayedElem: number) => {
        const element: HTMLElement = document.getElementsByClassName('pg-confirm__content-identity__forms__row')[
            displayedElem
        ] as HTMLElement;
        element && element.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'nearest' });
    };


    private handleFieldFocus = (field: string) => {
        return () => {
            switch (field) {
                case 'city':
                    this.setState({
                        cityFocused: !this.state.cityFocused,
                    });
                    this.scrollToElement(7);
                    break;
                case 'zone':
                        this.setState({
                            zoneFocused: !this.state.zoneFocused,
                        });
                        this.scrollToElement(7);
                        break;                    
                case 'dateOfBirth':
                    this.setState({
                        dateOfBirthFocused: !this.state.dateOfBirthFocused,
                    });
                    this.scrollToElement(2);
                    break;
                case 'cpf':
                    this.setState({
                            cpfFocused: !this.state.cpfFocused,
                        });
                        this.scrollToElement(3);
                        break;                    
                case 'firstName':
                    this.setState({
                        firstNameFocused: !this.state.firstNameFocused,
                    });
                    this.scrollToElement(0);
                    break;
                case 'lastName':
                    this.setState({
                        lastNameFocused: !this.state.lastNameFocused,
                    });
                    this.scrollToElement(1);
                    break;
                case 'postcode':
                    this.setState({
                        postcodeFocused: !this.state.postcodeFocused,
                    });
                    this.scrollToElement(10);
                    break;
                case 'region':
                    this.setState({
                        regionFocused: !this.state.regionFocused,
                    });
                    this.scrollToElement(8);
                    break;
                case 'country':
                    this.setState({
                        countryFocused: !this.state.countryFocused,
                    });
                    this.scrollToElement(9);
                    break;
    
    
                case 'residentialAddress':

                console.log((document.getElementById('autocomplete') as HTMLInputElement).value);
                document.getElementById("autogeneratecity").innerHTML="Sampa";

                    // var ac = new google.maps.places.Autocomplete(
                    //     (document.getElementById('autocomplete')), {
                    //                   types: ["address"]

                    //     });

            
                    // const options = {
                    //     fields: ["address_components"],
                      
                    //    };


                    // let auto_complete = new google.maps.places.Autocomplete(
                    //     this.state.residentialAddress2,
                    //     options,
                    //   );

                      //auto_complete.trigger(auto_complete, 'place_changed');
                      //google.maps.event.trigger(auto_complete, 'place_changed');

                      //google.maps.event.trigger(this.autocomplete, 'place_changed');


                    //auto_complete.setFields(['address_components', 'name']);

                    //this.autocomplete = auto_complete.getPlace();


                    //const ac = new google.maps.places.Autocomplete(document.getElementById('autocomplete'), options );

                        //var place = ac.getPlace();
                        //console.log("jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj");

                        //auto_complete.setFields(["address_component"]); 
                        //const addressObject = auto_complete.getPlace();
                        
                         
                        //const address = addressObject.address_components;
                        //console.log(addressObject);
                        //console.log(auto_complete);
                        //console.log(autocomplete.getPlace());


                    //setTimeout(codingCourse, 3000);
                    
                    // function codingCourse() {
                    //     console.log(addressObject);
                    //     console.log(addressObject);
                    //     console.log(addressObject);
                    //     console.log(auto_complete);
                

                    //   }

                    const auto_c = (document.getElementById('autocomplete') as HTMLInputElement).value;

                    const auto_zone = auto_c.split(",")[length].split(" - ")[length] ? auto_c.split(",")[length].split(" - ")[length] : "";
                    console.log('Estado:'  + auto_zone);
                    this.setState({
                        residentialAddressFocused: !this.state.residentialAddressFocused,
                        //residentialAddress: (document.getElementById('autocomplete')).value,
                        

                        
                        //residentialAddress: (document.getElementById('autocomplete') as HTMLInputElement).value.split(",")[length+1],
                        
                        //comentei aqui TO-DO
                        residentialAddress: (auto_c.split(",")[length-1]).split(" - ")[0] ? (auto_c.split(",")[length-1]).split(" - ")[0] : "",
                        
                        

                        //value={lastVerifiedProfile.fullname ? lastVerifiedProfile.fullname : "Nome completo - Complete seu cadastro"}


                                  //value={lastVerifiedProfile.fullname ? lastVerifiedProfile.fullname : "Nome completo - Complete seu cadastro"}

                        //residentialAddress: place.formatted_address+"OK OK",
                        

                        //residentialAddress: this.state.query,

                        //residentialAddress2: ((document.getElementById('autocomplete') as HTMLInputElement).value.split(",")[length-1]).split(" - ")[0],
                        //region: (((document.getElementById('autocomplete') as HTMLInputElement).value.split(",")[length-1]).split(" - ")[length]) ? ((document.getElementById('autocomplete') as HTMLInputElement).value.split(",")[length-1]).split(" - ")[length] : "",
                        //city: (((document.getElementById('autocomplete') as HTMLInputElement).value.split(",")[length]).split(" - ")[0]) ? ((document.getElementById('autocomplete') as HTMLInputElement).value.split(",")[length]).split(" - ")[0] : "",
                        //zone: (((document.getElementById('autocomplete') as HTMLInputElement).value.split(",")[length]).split(" - ")[length]) ? ((document.getElementById('autocomplete') as HTMLInputElement).value.split(",")[length]).split(" - ")[length] : "",
                        zone: auto_zone,
                        //country: (((document.getElementById('autocomplete') as HTMLInputElement).value.split(",")[length+1]).split(" - ")[0]) ? ((document.getElementById('autocomplete') as HTMLInputElement).value.split(",")[length+1]).split(" - ")[0] : "",

                    });
                    this.scrollToElement(5);
                    break;
                case 'residentialAddress2':
                    this.setState({
                        residentialAddress2Focused: !this.state.residentialAddress2Focused,

                    });
                    this.scrollToElement(6);
                    break;

                case 'residentialAddress3':
                        this.setState({
                            residentialAddress3Focused: !this.state.residentialAddress3Focused,
    
                        });
                        this.scrollToElement(7);
                        break;
                default:
                    break;
            }
        };
    };


    private handleChange = (value: string, key: string) => {
        // @ts-ignore
        this.setState({
            [key]: value,
        });
    };

    private handleChangeNames = (value: string, key: string) => {
        // @ts-ignore
        this.setState({
            [key]: value.replace(/w/, '').toUpperCase()
        });
    };

    private handleConfirmEnterPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter' && !this.handleCheckButtonDisabled()) {
            event.preventDefault();
            this.sendData(event);
        }
    };

    private handleChangeDate = (e: OnChangeEvent) => {
        this.setState({
            dateOfBirth: formatDate(e.target.value),
        });
    };

    private handleChangeCPF = (e: OnChangeEvent) => {
        this.setState({
            cpf: e.target.value,
        });
    };

    private handleChangeCEP = (e: OnChangeEvent) => {
        this.setState({
            postcode: e.target.value,
        });
    };

    private handleChangeTel = (e: OnChangeEvent) => {
        this.setState({
            tel: e.target.value,
        });
    };

    private selectCountry = (option) => {
        this.setState({
            countryOfBirth: countries.getAlpha2Code(option.value, this.props.lang),
        });
    };

    private handleValidateInput = (field: string, value: string): boolean => {
        switch (field) {
            case 'firstName':
                //const firstNameRegex = new RegExp(`^[a-zA-Z—-\\s]{3,255}$`);
                const firstNameRegex = new RegExp(`^[\w\D]{3,255}$`);

                // return Boolean(value.match(firstNameRegex));
                return Boolean(value.length > 2) ;
            case 'lastName':
                const lastNameRegex = new RegExp(`^[a-zA-Z—-\\s]{3,255}$`);

                // return Boolean(value.match(lastNameRegex));
                return Boolean(value.length > 2) ;
            case 'residentialAddress':
                // const residentialAddressRegex = new RegExp(`^[a-zA-Z0-9-,.;/\\\\\\s\w]{1,255}$`);

                return true;
            case 'residentialAddress2':
                // const residentialAddres3Regex = new RegExp(`^[a-zA-Z0-9-,.;/\\\\\\s\w]{1,255}$`);
    
                    return true;
            case 'residentialAddress3':
                // const residentialAddress3Regex = new RegExp(`^[\w\D]{1,255}$`);
            
                    return true;
            case 'city':
                //const cityRegex = new RegExp(`/^[\w\D]{2,30}$`);

                return Boolean(value.length > 2) ;
            case 'region':
                //const cityRegex = new RegExp(`/^[\w\D]{2,30}$`);
                return Boolean(value.length > 2) ;
            case 'zone':
                    //const cityRegex = new RegExp(`/^[\w\D]{2,30}$`);
                return Boolean(value.length > 1) ;                
            case 'country':
                    //const cityRegex = new RegExp(`/^[\w\D]{2,30}$`);
                return Boolean(value.length > 2) ;                
            case 'tel':
                    //const cityRegex = new RegExp(`/^[\w\D]{2,30}$`);
                return Boolean(value.length > 12) ;   
            case 'postcode':
                //const postcodeRegex = new RegExp(`^[a-zA-Z0-9]{1,12}$`);
                const postcodeRegex = new RegExp(`^[a-zA-Z0-9-,.-;/\\\\\\s\w]{9,255}$`);

                return Boolean(value.match(postcodeRegex));
                //return true;
            case 'dateOfBirth':
                if (value.length === 10) {
                    return moment(value, 'DD/MM/YYYY').unix() < Date.now() / 1000;
                }

                return false;
            // case 'cpf':
            //         // const cpfRegex = new RegExp(`^\d{3}\.\d{3}\.\d{3}\-\d{2}$)|(^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$`);
            //         const cpfRegex = true;
    
            //         return Boolean(value.match(cpfRegex));
            default:
                return true;
        }
    };

    private isValidCPF(cpf) {
        if (typeof cpf !== "string") return false
        cpf = cpf.replace(/[\s.-]*/igm, '')
        if (
            !cpf ||
            cpf.length != 11 ||
            cpf == "00000000000" ||
            cpf == "11111111111" ||
            cpf == "22222222222" ||
            cpf == "33333333333" ||
            cpf == "44444444444" ||
            cpf == "55555555555" ||
            cpf == "66666666666" ||
            cpf == "77777777777" ||
            cpf == "88888888888" ||
            cpf == "99999999999" 
        ) {
            return false
        }
        var soma = 0
        var resto
        for (var i = 1; i <= 9; i++) 
            soma = soma + parseInt(cpf.substring(i-1, i)) * (11 - i)
        resto = (soma * 10) % 11
        if ((resto == 10) || (resto == 11))  resto = 0
        if (resto != parseInt(cpf.substring(9, 10)) ) return false
        soma = 0
        for (var i = 1; i <= 10; i++) 
            soma = soma + parseInt(cpf.substring(i-1, i)) * (12 - i)
        resto = (soma * 10) % 11
        if ((resto == 10) || (resto == 11))  resto = 0
        if (resto != parseInt(cpf.substring(10, 11) ) ) return false
        return true
    }

    private handleCheckButtonDisabled = () => {
        const { city, dateOfBirth, firstName, lastName, postcode, residentialAddress, residentialAddress2, residentialAddress3, countryOfBirth, cpf, tel } = this.state;

        const firstNameValid = this.handleValidateInput('firstName', firstName);
        const lastNameValid = this.handleValidateInput('lastName', lastName);
        //const residentialAddressValid = this.handleValidateInput('residentialAddress', residentialAddress);
        const residentialAddressValid = true;
        const residentialAddress2Valid = true;
        const residentialAddress3Valid = true;
        //const cityValid = this.handleValidateInput('city', city);
        const cityValid = this.handleValidateInput('city', city);
        const postcodeValid = this.handleValidateInput('postcode', postcode);
        //const postcodeValid = true;
        const dateOfBirthValid = this.handleValidateInput('dateOfBirth', dateOfBirth);
        const cpfValid = this.isValidCPF(cpf);
        // const telValid = this.handleValidateInput('tel', tel);
        const telValid = this.handleValidateInput('tel', tel);


        return (
            !firstNameValid ||
            !lastNameValid ||
            !residentialAddressValid ||
            !residentialAddress2Valid ||
            !residentialAddress3Valid ||
            !countryOfBirth ||
            !cityValid ||
            !postcodeValid ||
            !cpfValid ||
            !telValid ||
            !dateOfBirthValid
        );
    };

    private sendData = (event) => {
        event.preventDefault();
        const { labels, user } = this.props;
        const dob = !isDateInFuture(this.state.dateOfBirth) ? this.state.dateOfBirth : '';
        const profileInfo: IdentityData = {
            first_name: this.state.firstName,
            last_name: this.state.lastName,
            dob,
            address: this.state.residentialAddress + this.state.residentialAddress2 + this.state.residentialAddress3,
            postcode: this.state.postcode,
            
            city: this.state.city,
            country: this.state.countryOfBirth,
            confirm: true,

            metadata: JSON.stringify({
                cpf: this.state.cpf,
                tel: this.state.tel,
            }),
        };
        const isIdentity =
            labels.length && labels.find((w) => w.key === 'profile' && w.value === 'verified' && w.scope === 'private');
        const verifiedProfiles = user.profiles.length ? user.profiles.filter((i) => i.state === 'verified') : [];
        const lastVerifiedProfile = verifiedProfiles.length && verifiedProfiles[verifiedProfiles.length - 1];

        if (!isIdentity && lastVerifiedProfile && lastVerifiedProfile.address) {
            this.props.editIdentity(profileInfo);
        } else {
            this.props.sendIdentity(profileInfo);
        }
    };
}

const mapStateToProps = (state: RootState): ReduxProps => ({
    editSuccess: selectEditIdentitySuccess(state),
    sendSuccess: selectSendIdentitySuccess(state),
    lang: selectCurrentLanguage(state),
    labels: selectLabelData(state),
    user: selectUserInfo(state),
    loading: selectSendIdentityLoading(state),
});

const mapDispatchToProps: MapDispatchToPropsFunction<DispatchProps, {}> = (dispatch) => ({
    editIdentity: (payload) => dispatch(editIdentity(payload)),
    sendIdentity: (payload) => dispatch(sendIdentity(payload)),
    labelFetch: () => dispatch(labelFetch()),
});

export const Identity = compose(
    injectIntl,
    withRouter,
    connect(mapStateToProps, mapDispatchToProps)
)(IdentityComponent) as any; // tslint:disable-line
