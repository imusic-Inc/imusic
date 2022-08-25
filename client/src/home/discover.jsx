import APIController from '../api/functons'
import { useState } from "react"; 
import Session from '../components/session';
import store from '../redux/store';

function Discover() {

    const [genre, setGenre] = useState([]);
    let token;
    async function init() {
    token = await APIController.getToken();
        const genes = await APIController.getGenres(token);
        store.dispatch({ type: "genre", payload: [...genes] });
        setGenre(genes);
    }

    const storeState = store.getState();
    console.log();
    if (storeState.genre) {
        
    } else {
         init();
    }
    
  return (
    <div class="flex-6 p-1 pt-1 left-20">
          <p class="font-s-2 fixed bg-primary title">Discover</p>
          
</div>
  );
}

export default Discover;