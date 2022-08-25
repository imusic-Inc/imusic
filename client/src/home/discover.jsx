import APIController from '../api/functons'
import { useState } from "react"; 
import store from '../redux/store';
import PublicSession from '../components/publicSession';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

function Discover() {

    const [genre, setGenre] = useState([]);
    
    async function init() {
    let token = await APIController.getToken();
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
          <h1 class="fixed bg-primary title">Discover Popular Public Sessions</h1>
<br /><br />
      {genre.map(value => {
                  return <PublicSession name={value.name} id={value.id} key={value.id} />
              })}
</div>
  );
}

export default Discover;