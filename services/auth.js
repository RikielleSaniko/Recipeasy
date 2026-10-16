import User from '../model/user.js';
import martha from './martha.js';

class AuthService {
    #currentUser = null 
    get currentUser() {
        return this.#currentUser
    }

    async signUp(credentials) {
        try {
            const response = await martha.execute("insert-user", credentials);

            this.#currentUser = new User({ id: response.lastInsertId, username: credentials.username });
        } 
        catch {
            this.#currentUser = null;
        }

        return !!this.#currentUser;
    }

    async logIn(credentials) {
        const response = await martha.execute("select-user-auth", credentials)

        if (response.data.length == 1)  {
            const user = response.data[0]

            this.#currentUser = new User({ id: user.id, username: user.username })
        } else {
            this.#currentUser = null
        }

        return !!this.#currentUser
    }

    logOut() {
      this.#currentUser = null
    }

}

const authService = new AuthService();
export default authService;
