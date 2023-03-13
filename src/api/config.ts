const hostUrl = window.location.hostname === 'www.fortem1.com.br' ? 'https://www.fortem1.com.br' : window.location.origin;
const protocolSSL = window.location.protocol === 'http:' ? 'ws://' : 'wss://';
const rangerHostUrl =  window.location.hostname === 'www.fortem1.com.br' ? 'wss://www.fortem1.com.br' : `${protocolSSL}${window.location.hostname}`;

export const defaultConfig: Config = {
    api: {
        authUrl: `https://www.fortem1.com.br/api/v2/auth`,
        tradeUrl: `https://www.fortem1.com.br/api/v2/peatio`,
        applogicUrl: `https://www.fortem1.com.br/api/v2/applogic`,
        rangerUrl: `wss://www.fortem1.com.br/api/v2/websocket`,
        finexUrl: `${hostUrl}/api/v2/finex`,
        p2pUrl: `${hostUrl}/api/v2/p2p`,
    },
    finex: false,
    withCredentials: true,
    incrementalOrderBook: false,
    isResizable: true,
    isDraggable: false,
    showLanding: true,
    sentryEnabled: false,
    captchaLogin: false,
    usernameEnabled: true,
    gaTrackerKey: '',
    minutesUntilAutoLogout: '60',
    msAlertDisplayTime: '5000',
    msPricesUpdates: '500',
    sessionCheckInterval: '5000',
    balancesFetchInterval: '500',
    passwordEntropyStep: '14',
    storage: {
        defaultStorageLimit: '50',
        orderBookSideLimit: '50'
    },
    languages: ['pt', 'en'],
    kycSteps: [
        'email',
        'profile',
        'document'
    ],
    captcha_type: 'geetest',
    password_min_entropy: 0,
    wizard_step: 'false',
    barong_upload_size_min_range: '1',
    barong_upload_size_max_range: '20',
    themeSwitcher: 'visible',
    peatio_platform_currency: 'brl',
    useSharedLayout: 'false',
    tvDefaultCandles: 30,
};

export const Cryptobase = {
    config: defaultConfig,
};

Cryptobase.config = { ...defaultConfig, ...window.env };
Cryptobase.config.storage = { ...defaultConfig.storage, ...Cryptobase.config.storage };

const convertToBoolean = (value: any): boolean => {
    return String(value) === 'true';
}

export const tradeUrl = () => Cryptobase.config.api.tradeUrl;
export const authUrl = () => Cryptobase.config.api.authUrl;
export const applogicUrl = () => Cryptobase.config.api.applogicUrl;
export const rangerUrl = () => Cryptobase.config.api.rangerUrl;
export const finexUrl = () => Cryptobase.config.api.finexUrl || tradeUrl();
export const p2pUrl = () => Cryptobase.config.api.p2pUrl;
export const withCredentials = () => convertToBoolean(Cryptobase.config.withCredentials);
export const incrementalOrderBook = () => convertToBoolean(Cryptobase.config.incrementalOrderBook);
export const isResizableGrid = () => convertToBoolean(Cryptobase.config.isResizable);
export const isDraggableGrid = () => convertToBoolean(Cryptobase.config.isDraggable);
export const isFinexEnabled = () => convertToBoolean(Cryptobase.config.finex);
export const showLanding = () => convertToBoolean(Cryptobase.config.showLanding);
export const sentryEnabled = () => convertToBoolean(Cryptobase.config.sentryEnabled);
export const captchaLogin = () => convertToBoolean(Cryptobase.config.captchaLogin);
export const minutesUntilAutoLogout = () => Cryptobase.config.minutesUntilAutoLogout;
export const sessionCheckInterval = () => Cryptobase.config.sessionCheckInterval;
export const balancesFetchInterval = () => Cryptobase.config.balancesFetchInterval;
export const gaTrackerKey = () => Cryptobase.config.gaTrackerKey;
export const msAlertDisplayTime = () => Cryptobase.config.msAlertDisplayTime;
export const msPricesUpdates = () => Cryptobase.config.msPricesUpdates;
export const defaultStorageLimit = () => Number(Cryptobase.config.storage.defaultStorageLimit);
export const orderBookSideLimit = () => Number(Cryptobase.config.storage.orderBookSideLimit);
export const passwordEntropyStep = () => Number(Cryptobase.config.passwordEntropyStep);
export const languages = (Cryptobase.config.languages && Cryptobase.config.languages.length > 0) ? Cryptobase.config.languages : ['en'];
export const kycSteps = () => Cryptobase.config.kycSteps;
export const isUsernameEnabled = () => convertToBoolean(Cryptobase.config.usernameEnabled);
export const captchaType = () => Cryptobase.config.captcha_type;
export const captchaId = () => Cryptobase.config.captcha_id;
export const passwordMinEntropy = () => Number(Cryptobase.config.password_min_entropy);
export const wizardStep = () => String(Cryptobase.config.wizard_step || '1');
export const barongUploadSizeMinRange = Number(Cryptobase.config.barong_upload_size_min_range || '1');
export const barongUploadSizeMaxRange = Number(Cryptobase.config.barong_upload_size_max_range || '20');
export const themeSwitcher = () => Cryptobase.config.themeSwitcher;
export const platformCurrency = () => Cryptobase.config.peatio_platform_currency.toUpperCase();
export const useSharedLayout = () => convertToBoolean(Cryptobase.config.useSharedLayout);
export const tvDefaultCandles = () => Number(Cryptobase.config.tvDefaultCandles || 20);
