import { toLower } from 'lodash';
import { getCsrfToken } from 'src/v26/src/helpers';
import { withdrawHistoryData, WithdrawHistoryFetch } from 'src/v26/src/modules';
import { call, put } from 'redux-saga/effects';
import { API, RequestOptions } from '../../../../api';

const createOptions = (csrfToken?: string): RequestOptions => {
	return { apiVersion: 'core', headers: { 'X-CSRF-Token': csrfToken } };
};

export function* withdrawHistorySaga(action: WithdrawHistoryFetch) {
	try {
		const list = yield call(
			API.get(createOptions(getCsrfToken())),
			`/private/wallet/withdraws/history?currency=${toLower(action.payload.currency)}`,
		);
		yield put(
			withdrawHistoryData({
				payload: list,
				loading: false,
			}),
		);
	} catch (error) {}
}
