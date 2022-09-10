const getData = (function() {
    const link = "http://localhost:3001/api/v1/"

    const __getSession = async(path) => {

        const result = await fetch(link + path, {
            method: 'get',
            credentials: "include",
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        });
        const data = await result.json();
        return data.data.session;
    }

    const __getSessionByType = async(path, type) => {

        const result = await fetch(link + path + '?roomType=' + type, {
            method: 'get',
            credentials: "include",
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        });
        const data = await result.json();
        return data.data.doc;
    }
    const __getUserByEmail = async(path, email) => {
        const result = await fetch(link + path, {
            method: 'get',
            credentials: "include",
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        });
        const data = await result.json();
        return data.data.doc.find(value => value.email === email);
    }

    const __getSessionById = async(path, id) => {
        const result = await fetch(link + path + '/' + id, {
            method: 'get',
            credentials: "include",
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        });
        const data = await result.json();
        return data.data.doc;
    }

    const __getUser = async(path) => {
        const result = await fetch(link + path, {
            method: 'get',
            credentials: "include",
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        });
        const data = await result.json();
        return data.data.doc;
    }

    const __joinPublicSession = async(path) => {
        const result = await fetch(link + path, {
            method: 'PATCH',
            mode: 'cors',
            // credentials: 'same-origin',
            credentials: "include",
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        });
        const data = await result.json();
        return data;
    }

    const __joinPrivateSession = async(path, values = {}) => {
        const result = await fetch(link + path, {
            method: 'PATCH',
            mode: 'cors',
            // credentials: 'same-origin',
            credentials: "include",
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(values),
        });
        const data = await result.json();
        return data;
    }
    const __leaveSession = async(path) => {
        const result = await fetch(link + path, {
            method: 'PATCH',
            mode: 'cors',
            // credentials: 'same-origin',
            credentials: "include",
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        });
        const data = await result.json();
        return data;
    }

    const __postMessage = async(path, values = {}) => {
        const result = await fetch(link + path, {
            method: 'POST',
            mode: 'cors',
            // credentials: 'same-origin',
            credentials: "include",
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(values),
        });
        const data = await result.json();
        return data;
    }

    const __CreateSession = async(path, values = {}) => {
        const result = await fetch(link + path, {
            method: 'post',
            mode: 'cors',
            // credentials: 'same-origin',
            credentials: "include",
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(values),
        });
        const data = await result.json();
        return data;
    }

    const __LogOut = async(path) => {
        const result = await fetch(link + path, {
            method: 'get',
            mode: 'cors',
            // credentials: 'same-origin',
            credentials: "include",
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        });
        const data = await result.json();
        return data;
    }

    const __UpdateSession = async(path, values = {}) => {
        const result = await fetch(link + path, {
            method: 'PATCH',
            mode: 'cors',
            body: JSON.stringify(values),
            credentials: "include",
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        });
        const data = await result.json();
        return data.data.users;
    }

    const __UpdateSessionPlayList = async(path, values = {}) => {
        const result = await fetch(link + 'session/' + path, {
            method: 'PATCH',
            mode: 'cors',
            body: JSON.stringify(values),
            credentials: "include",
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        });
        const data = await result.json();
        return data;
    }

    const __addSessionPlayList = async(path, values = {}) => {
        const result = await fetch(link + 'session/' + path + '/addToQueue', {
            method: 'PATCH',
            mode: 'cors',
            body: JSON.stringify(values),
            credentials: "include",
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        });
        const data = await result.json();
        return data;
    }

    const __PlayList_nowPlaying = async(path, values = {}) => {
        const result = await fetch(link + 'session/' + path, {
            method: 'PATCH',
            mode: 'cors',
            body: JSON.stringify(values),
            credentials: "include",
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        });
        const data = await result.json();
        return data;
    }

    const __DeleteSession = async(path) => {
        const result = await fetch(link + path, {
            method: 'DELETE',
            mode: 'cors',
            credentials: "include",
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        });
        return result;
    }
    const __RefreshToken = async() => {
        const result = await fetch(link + 'refreshToken', {
            method: 'get',
            mode: 'cors',
            credentials: "include",
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        });
        return result;
    }


    return {
        getSession(path) {
            return __getSession(path);
        },
        getSessionByType(path, type) {
            return __getSessionByType(path, type);
        },
        getSessionById(path, id) {
            return __getSessionById(path, id);
        },
        getUserByEmail(path, email) {
            return __getUserByEmail(path, email);
        },
        getUser(path) {
            return __getUser(path);
        },
        joinPublicSession(path) {
            return __joinPublicSession(path);
        },
        joinPrivateSession(path, password) {
            return __joinPrivateSession(path, password);
        },
        leaveSession(path) {
            return __leaveSession(path);
        },
        postMessage(path, message) {
            return __postMessage(path, message);
        },
        createSession(path, data) {
            return __CreateSession(path, data);
        },
        logOut(path) {
            return __LogOut(path);
        },
        deleteSession(path) {
            return __DeleteSession(path);
        },
        updateSessionPlayList(path, data) {
            return __UpdateSessionPlayList(path, data);
        },
        addSessionPlayList(path, data) {
            return __addSessionPlayList(path, data);
        },
        PlayList_nowPlaying(path, data) {
            return __PlayList_nowPlaying(path, data);
        },
        refreshToken() {
            return __RefreshToken();
        }

    }
})();

export default getData;