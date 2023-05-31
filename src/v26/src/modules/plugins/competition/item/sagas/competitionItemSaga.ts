import { errorCompetitionItem } from './../actions';
import { dataCompetitionItem } from './../actions';
import { FetchCompetitionItem } from '../actions';
import { put, call } from 'redux-saga/effects';
import { API, RequestOptions } from 'src/v26/src/api';
import { getCsrfToken } from 'src/v26/src/helpers';
const createOptions = (csrfToken?: string): RequestOptions => {
	return { apiVersion: 'core', headers: { 'X-CSRF-Token': csrfToken } };
};

export function* competitionItemSaga(action: FetchCompetitionItem) {
	try {
		const { competition_id: id } = action.payload;
		const competition = yield call(API.get(createOptions(getCsrfToken())), `/public/competition/detail/${id}`);
		yield put(dataCompetitionItem(competition, false));
	} catch (error) {
		yield put(errorCompetitionItem(error));
	}
}
