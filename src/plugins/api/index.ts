import axios from 'axios';

const instance = axios.create({
		
	// baseURL: 'https://homolog.fortem1.com.br/api/v2/',
	
	baseURL: 'http://localhost:4000/',

	headers: {
		'Access-Control-Allow-Origin': '*',
		'Content-Type': 'application/json',
	},
});

// tslint:disable-next-line: no-default-export
export default instance;
