

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
        }
          
    }
})();

export default getData;