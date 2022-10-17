import decode from "jwt-decode";

class AuthService {

    verify() {

    }

    getToken () {
        return localStorage.getItem("_id")
    }

    getInfo(){

        return decode(localStorage.getItem("_id"))

    }

    isLoggedIn() {

        const token = localStorage.getItem("_id");

        return token ? true : false

    }

    isExpired() {
        const token = decode(localStorage.getItem("_id"))
        return Date.now() >= token.exp * 1000
    }


    setLogIn(token) {

        localStorage.setItem("_id",token) 

    }

    setLogOut () {

        localStorage.removeItem("_id");

    }


}

export default new AuthService();