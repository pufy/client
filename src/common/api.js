import { apiUrl } from '../config';
import Token from './token';

export class Api{

    post(url, data, header){
        let dataBody = JSON.stringify(data);
        
        return fetch(`${apiUrl}${url}`, {
          method: 'POST',
          headers: (header ? header: {
            'Accept': 'application/json',
            'Content-type': 'application/json',
            'Authorization': `Bearer ${ Token.getToken() }`
          }),
          body: dataBody
        })
    }

    get(url, params){
        url = new URL(`${apiUrl}${url}`);
        if(params)
            Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))
        return fetch(url, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${ Token.getToken() }`
            }
        });
    }
}
  
export default new Api();