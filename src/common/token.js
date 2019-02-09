const jwtDecode = require('jwt-decode');

export class Token{

    decode = () => jwtDecode(localStorage.getItem('token'));

    isTokenValid = () => {
        try{
            return jwtDecode(localStorage.getItem('token')) !== undefined;
        } catch(e){
            return false;
        }
    };

    getToken(){
        return localStorage.getItem('token');
    }
}
  
export default new Token();