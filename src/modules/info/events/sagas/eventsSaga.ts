import { API, RequestOptions } from 'src/api';
import { getCsrfToken } from 'src/helpers';
import { call, put } from 'redux-saga/effects';

import { eventData, eventError, EventFetch } from '../actions';

const createOptions = (csrfToken?: string): RequestOptions => {
	return { apiVersion: 'core', headers: { 'X-CSRF-Token': csrfToken } };
};

export function* eventFetchSaga(action: EventFetch) {
	try {
		const events = yield call(API.get(createOptions(getCsrfToken())), '/public/banner/list');
		yield put(
			eventData({
				payload: events,
				loading: false,
			}),
		);
	} catch (error) {
		yield put(
			eventData({
				payload: [],
				loading: false,
			}),
		);
		yield put(eventError(error));
	}
}
