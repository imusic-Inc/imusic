

const getData = (function() {
    const link = "http://localhost:3001/api/v1/"
    
    const __getSession = async (path) => {

        const result = await fetch(link + path, {
            method: 'get',
        });
        const data = await result.json();
        return data.data.session;
    }

     const __getSessionByType = async (path,type) => {

        const result = await fetch(link + path+'?roomType='+type, {
            method: 'get',
        });
        const data = await result.json();
        return data.data.session;
     }
     const __getUserByEmail = async (path,email) => {
        const result = await fetch(link + path, {
            method: 'get',
        });
        const data = await result.json();
        return data.data.users.find(value=>value.email === email);
    }

     const __getSessionById = async (path,id) => {
        const result = await fetch(link + path+'/'+id, {
            method: 'get',
        });
        const data = await result.json();
        return data.data.session;
     }

     const __getUser = async (path) => {
        const result = await fetch(link + path, {
            method: 'get',
        });
        const data = await result.json();
        return data.data.users;
     }

    const __joinPublicSession = async (path) => {
        const result = await fetch(link + path, {
            method: 'PATCH',
            mode: 'cors',
            // credentials: 'same-origin',
        });
        const data = await result.json();
        return data;
     }
    
    const __joinPrivateSession = async (path,values={}) => {
        const result = await fetch(link + path, {
            method: 'PATCH',
            mode: 'cors',
            // credentials: 'same-origin',
            body: JSON.stringify(values),
        });
        const data = await result.json();
        return data;
    }
    const __leaveSession = async (path) => {
        const result = await fetch(link + path, {
            method: 'PATCH',
            mode: 'cors',
            // credentials: 'same-origin',
        });
        const data = await result.json();
        return data;
    }

    const __postMessage = async (path,values={}) => {
        const result = await fetch(link + path, {
            method: 'POST',
            mode: 'cors',
            // credentials: 'same-origin',
            body: JSON.stringify(values),
        });
        const data = await result.json();
        return data;
    }

    const __CreateSession = async (path,values={}) => {
        const result = await fetch(link + path, {
            method: 'post',
            mode: 'cors',
            // credentials: 'same-origin',
            body: JSON.stringify(values),
        });
        const data = await result.json();
        return data.data.users;
    }
    const __UpdateSession = async (path,id,values={}) => {
        const result = await fetch(link + path, {
            method: 'put',
            mode: 'cors',
            body: JSON.stringify(values),
        });
        const data = await result.json();
        return data.data.users;
    }
    

    
    return {
        getSession(path) {
            return __getSession(path);
        },
         getSessionByType(path,type) {
            return __getSessionByType(path,type);
         },
          getSessionById(path,id) {
            return __getSessionById(path,id);
        },
          getUserByEmail(path,email) {
            return __getUserByEmail(path,email);
        },
          getUser(path) {
            return __getUser(path);
          },
          joinPublicSession(path) {
            return __joinPublicSession(path);
        },
          joinPrivateSession(path,password) {
            return __joinPrivateSession(path,password);
        },
        leaveSession(path) {
            return __leaveSession(path);
        },
        postMessage(path,message) {
            return __postMessage(path,message);
        },
        createSession(path,data) {
            return __CreateSession(path,data);
        }
          
    }
})();

export default getData;