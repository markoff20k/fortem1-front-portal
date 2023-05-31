import { FetchListCompetition, listCompetitionData, listCompetitionError } from '../actions';
import { put, call } from 'redux-saga/effects';
import { API, RequestOptions } from 'src/v26/src/api';
import { getCsrfToken } from 'src/v26/src/helpers';
const createOptions = (csrfToken?: string): RequestOptions => {
	return { apiVersion: 'core', headers: { 'X-CSRF-Token': csrfToken } };
};

export function* CompetitionListSaga(action: FetchListCompetition) {
	try {
		const competitionList = yield call(API.get(createOptions(getCsrfToken())), '/public/competition/list');
		yield put(listCompetitionData(competitionList));
	} catch (error) {
		yield put(listCompetitionError(error));
	}
}
