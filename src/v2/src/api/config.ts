import {
    DEFAULT_KYC_STEPS,
    ORDER_BOOK_DEFAULT_SIDE_LIMIT,
    STORAGE_DEFAULT_LIMIT,
} from '../constants';
import { Config2 } from './types';

export const defaultConfig: Config2 = {
    api: {
        authUrl: `http://www.fortem1.com.br/api/v2/authz`,
        tradeUrl: `http://www.fortem1.com.br/api/v2/trade`,
        applogicUrl: `http://www.fortem1.com.br/api/v2/applogic`,
        rangerUrl: `ws://www.fortem1.com.br/api/v2/stream`,
        arkeUrl: '',
        finexUrl: '',
    },
    minutesUntilAutoLogout: '30',
    rangerReconnectPeriod: '1',
    withCredentials: true,
    storage: {},
    gaTrackerKey: '',
    msAlertDisplayTime: '5000',
    incrementalOrderBook: false,
    finex: false,
    isResizable: false,
    isDraggable: false,
    languages: ['en'],
    sessionCheckInterval: '15000',
    balancesFetchInterval: '3000',
    passwordEntropyStep: 0,
    showLanding: true,
    sentryEnabled: false,
    kycSteps: [
        'email',
        'profile',
        'document',
        'address',
    ],
};

export const Cryptobase = {
    config2: defaultConfig,
};

declare global {
    interface Window {
        env2: Config2;
    }
}

window.env2 = window.env2 || defaultConfig;
Cryptobase.config2 = { ...window.env2 };
Cryptobase.config2.storage = Cryptobase.config2.storage || {};

export const tradeUrl = () => Cryptobase.config2.api.tradeUrl;
export const authUrl = () => Cryptobase.config2.api.authUrl;
export const applogicUrl = () => Cryptobase.config2.api.applogicUrl;
export const rangerUrl = () => Cryptobase.config2.api.rangerUrl;
export const arkeUrl = () => Cryptobase.config2.api.arkeUrl || tradeUrl();
export const finexUrl = () => Cryptobase.config2.api.finexUrl || tradeUrl();
export const minutesUntilAutoLogout = (): string => Cryptobase.config2.minutesUntilAutoLogout || '5';
export const withCredentials = () => Cryptobase.config2.withCredentials;
export const defaultStorageLimit = () => Cryptobase.config2.storage.defaultStorageLimit || STORAGE_DEFAULT_LIMIT;
export const orderBookSideLimit = () => Cryptobase.config2.storage.orderBookSideLimit || ORDER_BOOK_DEFAULT_SIDE_LIMIT;
export const gaTrackerKey = (): string => Cryptobase.config2.gaTrackerKey || '';
export const msAlertDisplayTime = (): string => Cryptobase.config2.msAlertDisplayTime || '5000';
export const rangerReconnectPeriod = (): number => Cryptobase.config2.rangerReconnectPeriod ? Number(Cryptobase.config2.rangerReconnectPeriod) : 1;
export const incrementalOrderBook = (): boolean => Cryptobase.config2.incrementalOrderBook || false;
export const isResizableGrid = ():boolean => Cryptobase.config2.isResizable || false;
export const isDraggableGrid = ():boolean => Cryptobase.config2.isDraggable || false;
export const languages = Cryptobase.config2.languages && Cryptobase.config2.languages.length > 0 ? Cryptobase.config2.languages : ['en'];
export const sessionCheckInterval = (): string => Cryptobase.config2.sessionCheckInterval || '15000';
export const balancesFetchInterval = (): string => Cryptobase.config2.balancesFetchInterval || '3000';
export const isFinexEnabled = (): boolean => Cryptobase.config2.finex || false;
export const passwordEntropyStep = ():number => Cryptobase.config2.passwordEntropyStep;
export const showLanding = (): boolean => Cryptobase.config2.showLanding;
export const sentryEnabled = () => Cryptobase.config2.sentryEnabled || defaultConfig.sentryEnabled;
export const kycSteps = (): string[] => Cryptobase.config2.kycSteps || DEFAULT_KYC_STEPS;
