import { put, call } from 'redux-saga/effects';
import { API, RequestOptions } from 'src/v26/src/api';
import { getCsrfToken } from 'src/v26/src/helpers';
import { catchErrorCompetitionVolume, FetchCompetitionVolume, getDataCompetitionVolume } from '../actions';
const createOptions = (csrfToken?: string): RequestOptions => {
	return { apiVersion: 'core', headers: { 'X-CSRF-Token': csrfToken } };
};

export function* competitionVolumeSaga(action: FetchCompetitionVolume) {
	try {
		const { competition_id: id } = action.payload;
		const volume = yield call(API.get(createOptions(getCsrfToken())), `/private/competition/volume/competition_id=${id}`);
		yield put(getDataCompetitionVolume(volume, false));
	} catch (error) {
		yield put(catchErrorCompetitionVolume(error));
	}
}
