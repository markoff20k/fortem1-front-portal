import { API, RequestOptions } from 'src/v26/src/api';
import { getCsrfToken } from 'src/v26/src/helpers';
import { call, put } from 'redux-saga/effects';

import { ethFeeData, ethFeeError, ETHFeeFetch } from '../actions';
const createOptions = (csrfToken?: string): RequestOptions => {
	return { apiVersion: 'core', headers: { 'X-CSRF-Token': csrfToken } };
};
export function* ethFeeSaga(action: ETHFeeFetch) {
	try {
		const list = yield call(API.get(createOptions(getCsrfToken())), '/private/wallet/fee/eth');
		yield put(ethFeeData(list));
	} catch (error) {
		yield put(ethFeeError(error));
	}
}