import { IEOListData, IEOListError, IEOListDataFetch } from '../actions';
import { put, call } from 'redux-saga/effects';
import { API, RequestOptions } from 'src/v26/src/api';
import { getCsrfToken } from 'src/v26/src/helpers';
const createOptions = (csrfToken?: string): RequestOptions => {
	return { apiVersion: 'ieo', headers: { 'X-CSRF-Token': csrfToken } };
};

export function* IEOListSaga(action: IEOListDataFetch) {
	try {
		const IEOList = yield call(API.get(createOptions(getCsrfToken())), '/fetch/active');
		yield put(IEOListData(IEOList));
	} catch (error) {
		yield put(IEOListError(error));
	}
}
