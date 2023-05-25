import { AxiosResponse } from 'axios';
import { JsonBody, makeRequest } from './requestBuilder';

export * from './types';
export * from './config';

export interface RequestOptions {
    apiVersion: 'applogic' | 'peatio' | 'barong' | 'finex';
    withHeaders?: boolean;
    headers?: Object;
}

export type RequestBody = JsonBody | FormData;

export type RequestMethod = (config2: RequestOptions) =>
    (url: string, body?: RequestBody) => Promise<AxiosResponse['data']>;

export interface ApiWrapper {
    get: RequestMethod;
    post: RequestMethod;
    patch: RequestMethod;
    put: RequestMethod;
    delete: RequestMethod;
}

export const API: ApiWrapper = {
    get: (config2: RequestOptions) => async (url: string) =>
        makeRequest({
            method: 'get',
            url,
        }, config2),

    post: (config2: RequestOptions) => async (url: string, body?: JsonBody) =>
        makeRequest({
            method: 'post',
            body,
            url,
        }, config2),

    patch: (config2: RequestOptions) => async (url: string, body?: JsonBody) =>
        makeRequest({
            method: 'patch',
            body,
            url,
        }, config2),

    put: (config2: RequestOptions) => async (url: string, body?: JsonBody) =>
        makeRequest({
            method: 'put',
            body,
            url,
        }, config2),

    delete: (config2: RequestOptions) => async (url: string) =>
        makeRequest({
            method: 'delete',
            url,
        }, config2),
};

const conf: RequestOptions = {
    apiVersion: 'barong',
};

export const changePassword = async body => API.post(conf)('/identity/users/password/confirm_code', body);
