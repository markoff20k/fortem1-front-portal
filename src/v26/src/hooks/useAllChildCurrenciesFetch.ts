import { allChildCurrenciesFetch } from 'src/v26/src/modules';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

export const useAllChildCurrenciesFetch = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(allChildCurrenciesFetch());
	}, [dispatch]);
};
