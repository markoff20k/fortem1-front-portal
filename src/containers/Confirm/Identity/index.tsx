import cr from 'classnames';
import moment from 'moment';
//import * as React from 'react';
import  React, {useState } from 'react';
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
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';

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
    residentialAddress: string;
    residentialAddress2: string;
    residentialAddress3: string;
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
        residentialAddress: '',
        residentialAddress2: '',
        residentialAddress3: '',
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
    };

    public translate = (e: string) => {
        return this.props.intl.formatMessage({ id: e });
    };

    public componentDidUpdate(prev: Props) {
        const { history, editSuccess, sendSuccess } = this.props;

        if ((!prev.editSuccess && editSuccess) || (!prev.sendSuccess && sendSuccess)) {
            this.props.labelFetch();
            history.push('/profile');
        }

  
    }

    
    // const autocomplete = new google.maps.places.Autocomplete(input, options);

    

    public render() {

               



        // const autocomplete = new google.maps.places.Autocomplete();

        const input = document.getElementById('autocomplete') as HTMLInputElement | null;
        const value = input?.value;

        input?.addEventListener('input', function (event) {
            const target = event.target as HTMLInputElement;
            //console.log(target.value);
            //residentialAddress = target.value;


 



          });


        function fillInAddress() {
            // Get the place details from the autocomplete object.
            const place = autocomplete.getPlace();
            let address1 = "";
            let postcode = "";
          
            // Get each component of the address from the place details,
            // and then fill-in the corresponding field on the form.
            // place.address_components are google.maps.GeocoderAddressComponent objects
            // which are documented at http://goo.gle/3l5i5Mr
            for (const component of place.address_components as google.maps.GeocoderAddressComponent[]) {
              // @ts-ignore remove once typings fixed
              const componentType = component.types[0];
          
              switch (componentType) {
                case "street_number": {
                  address1 = `${component.long_name} ${address1}`;
                  break;
                }
          
                case "route": {
                  address1 += component.short_name;
                  break;
                }
          
                case "postal_code": {
                  postcode = `${component.long_name}${postcode}`;
                  break;
                }
          
                case "postal_code_suffix": {
                  postcode = `${postcode}-${component.long_name}`;
                  break;
                }
          
                case "locality":
                  (document.querySelector("#locality") as HTMLInputElement).value =
                    component.long_name;
                  break;
          
                case "administrative_area_level_1": {
                  (document.querySelector("#state") as HTMLInputElement).value =
                    component.short_name;
                  break;
                }
          
                case "country":
                  (document.querySelector("#country") as HTMLInputElement).value =
                    component.long_name;
                  break;
              }
            }
          
            // address1Field.value = address1;
            this.state.residentialAddress = address1;
            
            // postalField.value = postcode;
            this.state.cep = postcode;
          
            // After filling the form with address components from the Autocomplete
            // prediction, set cursor focus on the second address line to encourage
            // entry of subpremise information such as apartment, unit, or floor number.
            
            
            //address2Field.focus();


          }

        // const [value, setValue ] = React.useState(null);

        //       useEffect(() => {
        //     autoCompleteRef.current = new window.google.maps.places.Autocomplete(
        //      inputRef.current,
        //      options
        //     );
        //    }, []);

            //const autoCompleteRef = useRef();
            //const inputRef = useRef();
            
            const options = {
                // componentRestrictions: { country: "ng" },
                fields: ["address_components", "geometry", "icon", "name"],
                types: ["address"]
               }
       
                   
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
            
            
            
        } = this.state;

        // let [value, setValue] = "321";


        const firstNameGroupClass = cr('pg-confirm__content-identity__forms__row__content', {
            'pg-confirm__content-identity__forms__row__content--focused': firstNameFocused,
            'pg-confirm__content-identity__forms__row__content--wrong':
                firstName && !this.handleValidateInput('firstName', firstName),
        });

        const lastNameGroupClass = cr('pg-confirm__content-identity__forms__row__content', {
            'pg-confirm__content-identity__forms__row__content--focused': lastNameFocused,
            'pg-confirm__content-identity__forms__row__content--wrong':
                lastName && !this.handleValidateInput('lastName', lastName),
        });

        const dateOfBirthGroupClass = cr('pg-confirm__content-identity__forms__row__content', {
            'pg-confirm__content-identity__forms__row__content--focused': dateOfBirthFocused,
            'pg-confirm__content-identity__forms__row__content--wrong':
                dateOfBirth && !this.handleValidateInput('dateOfBirth', dateOfBirth),
        });

        const cpfGroupClass = cr('pg-confirm__content-identity__forms__row__content', {
            'pg-confirm__content-identity__forms__row__content--focused': cpfFocused,
            'pg-confirm__content-identity__forms__row__content--wrong':
                cpf && !this.handleValidateInput('cpf', cpf),
        });

        const telGroupClass = cr('pg-confirm__content-identity__forms__row__content', {
            'pg-confirm__content-identity__forms__row__content--focused': telFocused,
            'pg-confirm__content-identity__forms__row__content--wrong':
                tel && !this.handleValidateInput('tel', tel),
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
        });

        const postcodeGroupClass = cr('pg-confirm__content-identity__forms__row__content', {
            'pg-confirm__content-identity__forms__row__content--focused': postcodeFocused,
            'pg-confirm__content-identity__forms__row__content--wrong':
                postcode && !this.handleValidateInput('postcode', postcode),
        });

        /* tslint:disable */
        languages.map((l: string) => countries.registerLocale(require(`i18n-iso-countries/langs/${l}.json`)));

        /* tslint:enable */

        const dataCountries = Object.values(countries.getNames(lang)).map((item) => {
            return { label: item, value: item };
        });

        
        return (
            <form className="pg-confirm__content-identity" autoComplete="on">
                <div className="pg-confirm__content-identity__forms">
                    <div className="pg-confirm__content-identity__forms__row input-group">
                        <fieldset className={firstNameGroupClass}>
                            <CustomInput
                                type="string"
                                name="fname"
                                autoComplete="given-name"
                                inputValue={firstName}
                                placeholder={this.translate('page.body.kyc.identity.firstName')}
                                handleChangeInput={(e) => this.handleChange(e, 'firstName')}
                                autoFocus={true}
                                label={this.translate('page.body.kyc.identity.firstName')}
                                defaultLabel={''}
                                handleFocusInput={this.handleFieldFocus('firstName')}
                            />
                        </fieldset>
                        <fieldset className={lastNameGroupClass}>
                            <CustomInput
                                type="string"
                                name="lname"
                                autoComplete="family-name"
                                inputValue={lastName}
                                handleChangeInput={(e) => this.handleChange(e, 'lastName')}
                                placeholder={this.translate('page.body.kyc.identity.lastName')}
                                label={this.translate('page.body.kyc.identity.lastName')}
                                defaultLabel={''}
                                handleFocusInput={this.handleFieldFocus('lastName')}
                            />
                        </fieldset>
                    </div>
                    <div className="pg-confirm__content-identity__forms__row">
                        <fieldset className={dateOfBirthGroupClass}>
                            <div className="custom-input">
                                {dateOfBirth ? (
                                    <label>{this.translate('page.body.kyc.identity.dateOfBirth')}</label>
                                ) : null}
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
                        </fieldset>
                    </div>

                    <div className="pg-confirm__content-identity__forms__row">
                        <fieldset className={cpfGroupClass}>
                            <div className="custom-input">
                                {cpf ? (
                                    <label>{this.translate('page.body.kyc.identity.cpf')}</label>
                                ) : null}
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
                        </fieldset>
                    </div>


                    <div className="pg-confirm__content-identity__forms__row">
                        <fieldset className={telGroupClass}>
                            <div className="custom-input">
                                {tel ? (
                                    <label>{this.translate('page.body.kyc.phone.phoneNumber')}</label>
                                ) : null}
                                <div className="input-group input-group-lg">
                                    <MaskInput
                                        className="pg-confirm__content-identity__forms__row__content-number"
                                        maskString="00-0000-0000"
                                        mask="00-0000-0000"
                                        onChange={this.handleChangeTel}
                                        onFocus={this.handleFieldFocus('tel')}
                                        onBlur={this.handleFieldFocus('tel')}
                                        value={tel}
                                        placeholder={this.translate('page.body.kyc.phone.phoneNumber')}
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
                                inputValue={residentialAddress}
                                placeholder={this.translate('page.body.kyc.identity.residentialAddress')}
                                label={this.translate('page.body.kyc.identity.residentialAddress')}
                                defaultLabel={''}
                                handleChangeInput={(e) => this.handleChange(e, 'residentialAddress')}
                                handleFocusInput={this.handleFieldFocus('residentialAddress')}
                                id="autocomplete"
                            />
                        
                        </fieldset>
                    </div>
     

                    {/* <div className="pg-confirm__content-identity__forms__row" style={{marginTop: '20px'}}>
                        <div className="pg-confirm__content-identity__forms__row__content">
                        <GooglePlacesAutocomplete
                                apiOptions={{ language: 'pt-BR' }}
                                autocompletionRequest={{
                                    componentRestrictions: {
                                    country: ['br'],
                                    },
                                    types: ['address'],
                                  }}
                                  

                                  selectProps={{
                                    
                                    onChange: this.handleFieldFocusGoogle(value2),
                                    

                                    styles: {
                                      input: (provided) => ({
                                        ...provided,
                                        color: 'var(--input-text-color)',
                                        backgroundColor: 'transparent',
                                        border: 'none !important' ,
                                        borderRadius: '12px',
                                        height: '42px'
                                      }),
                                      control: (provided) => ({
                                        ...provided,
                                        color: 'var(--input-text-color)',
                                        backgroundColor: 'var(--input-background-color)',
                                        border: 'none !important' ,
                                        borderRadius: '12px',
                                      }),
                                      container: (provided) => ({
                                        ...provided,
                                        color: 'var(--input-text-color)',
                                        backgroundColor: 'var(--input-background-color)',
                                        border: 'none !important' ,
                                      }),
                                      valueContainer: (provided) => ({
                                        ...provided,
                                        color: 'var(--input-text-color)',
                                        backgroundColor: 'transparent',
                                        border: 'none !important' ,
                                        borderRadius: '12px',
                                      }),
                                      menuList: (provided) => ({
                                        ...provided,
                                        color: 'var(--input-text-color)',
                                        backgroundColor: 'var(--input-background-color)',
                                        
                                      }),
                                      menu: (provided) => ({
                                        ...provided,
                                        color: 'var(--input-text-color)',
                                        backgroundColor: '#414855',
                                        
                                      }),

                                      option: (provided) => ({
                                        ...provided,
                                        color: 'var(--input-text-color)',
                                        backgroundColor: 'var(--input-background-color)',
                                      }),
                                      singleValue: (provided) => ({
                                        ...provided,
                                        color: 'var(--input-text-color)',
                                        backgroundColor: 'var(--input-background-color)',
                                        
                                      }),
                                      multiValue: (provided) => ({
                                        ...provided,
                                        color: 'var(--input-text-color)',
                                        backgroundColor: 'var(--input-background-color)',
                                        
                                      }),
                                      indicatorsContainer: (provided) => ({
                                        ...provided,
                                        color: 'var(--input-text-color)',
                                        opacity: 0.5,
                                        
                                      }),
                                      indicatorSeparator: (provided) => ({
                                        ...provided,
                                        color: 'var(--input-text-color)',
                                        opacity: 0.5,
                                        
                                      }),
                                      dropdownIndicator: (provided) => ({
                                        ...provided,
                                        color: 'var(--input-text-color)',
                                        opacity: 0.5,
                                      }),

                                      
                              
                                    },
                                  }}



                                // selectProps={{
                                //     value, onChange: setValue
                                // }}

                                
                            />
                        </div>
                    </div> */}


                    <div className="pg-confirm__content-identity__forms__row input-group">
                        <fieldset className={residentialAddress2GroupClass}>
                            <CustomInput
                                type="string"
                                name="ship-city"
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
                        </fieldset>
                        <fieldset className={residentialAddress3GroupClass}>
                            <CustomInput
                                label={this.translate('page.body.kyc.identity.postcode')}
                                defaultLabel={this.translate('page.body.kyc.identity.postcode')}
                                type="string"
                                name="ship-zip"
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

                    <div className="pg-confirm__content-identity__forms__row input-group">
                        {/* <fieldset className={cityGroupClass}>
                            <CustomInput
                                type="string"
                                name="ship-city"
                                autoComplete="shipping locality"
                                inputValue={city}
                                handleChangeInput={(e) => this.handleChange(e, 'city')}
                                placeholder={this.translate('page.body.kyc.identity.city')}
                                label={this.translate('page.body.kyc.identity.city')}
                                defaultLabel={''}
                                handleFocusInput={this.handleFieldFocus('city')}
                            />
                        </fieldset> */}
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
                    this.scrollToElement(8);
                    break;
                case 'residentialAddress':
                    this.setState({
                        residentialAddressFocused: !this.state.residentialAddressFocused,
                        //residentialAddress: (document.getElementById('autocomplete')).value,
                        residentialAddress: (document.getElementById('autocomplete') as HTMLInputElement).value,
                        //postcode: (document.getElementById('autocomplete') as HTMLInputElement).value.split("-")[length-1],
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
                const firstNameRegex = new RegExp(`^[a-zA-Z—-\\s]{1,255}$`);

                return Boolean(value.match(firstNameRegex));
            case 'lastName':
                const lastNameRegex = new RegExp(`^[a-zA-Z—-\\s]{1,255}$`);

                return Boolean(value.match(lastNameRegex));
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
                const cityRegex = new RegExp(`^[a-zA-Z0-9-,.;/\\\\\\s\w\D]{1,255}$`);

                return Boolean(value.match(cityRegex));
            case 'postcode':
                const postcodeRegex = new RegExp(`^[a-zA-Z0-9]{1,12}$`);

                return Boolean(value.match(postcodeRegex));
            case 'dateOfBirth':
                if (value.length === 10) {
                    return moment(value, 'DD/MM/YYYY').unix() < Date.now() / 1000;
                }

                return false;
            default:
                return true;
        }
    };

    private handleCheckButtonDisabled = () => {
        const { city, dateOfBirth, firstName, lastName, postcode, residentialAddress, residentialAddress2, residentialAddress3, countryOfBirth, cpf, tel } = this.state;

        const firstNameValid = this.handleValidateInput('firstName', firstName);
        const lastNameValid = this.handleValidateInput('lastName', lastName);
        //const residentialAddressValid = this.handleValidateInput('residentialAddress', residentialAddress);
        const residentialAddressValid = true;
        const residentialAddress2Valid = true;
        const residentialAddress3Valid = true;
        //const cityValid = this.handleValidateInput('city', city);
        const cityValid = true;
        const postcodeValid = this.handleValidateInput('postcode', postcode);
        const dateOfBirthValid = this.handleValidateInput('dateOfBirth', dateOfBirth);
        const cpfValid = this.handleValidateInput('cpf', cpf);
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
