import { API, RequestOptions } from 'src/v26/src/api';
import { alertPush } from 'src/v26/src/modules/public/alert';
import { call, put } from 'redux-saga/effects';
import { friendsListData, FriendsListFetch } from '../actions';

const createOptions = (csrfToken?: string): RequestOptions => {
	return { apiVersion: 'core', headers: { 'X-CSRF-Token': csrfToken } };
};

export function* friendsFetchSaga(actions: FriendsListFetch) {
	try {
		const { page, limit } = actions.payload;
		const list = yield call(API.get(createOptions()), `/private/referral/friends/list?page=${page}&limit=${limit}`);
		yield put(
			friendsListData({
				payload: list,
				loading: false,
			}),
		);
	} catch (error) {
		yield put(
			friendsListData({
				payload: [0, []],
				loading: false,
			}),
		);
		yield put(alertPush({ message: [], code: error.code, type: 'error' }));
	}
}
