import APIController from '../api/functons'
import { useState } from "react"; 
import PublicSession from '../components/publicSession';
import {LoadingSession} from '../components/loadingSession';
function Discover() {

    const [genre, setGenre] = useState([]);
    
    async function init() {
    let token = await APIController.getToken();
        const genes = await APIController.getGenres(token);
        setGenre(genes);
    }
  init();
  
  return (
    <div class="flex-6 p-1 pt-1 left-20">
          <h1 class="fixed bg-primary title">Public Sessions</h1>
      <br /><br />
      
    {genre.length < 1 ? <><LoadingSession/></>: genre.map(value => {
                  return <PublicSession name={value.name} id={value.id} key={value.id} />
              })}
</div>
  );
}

export default Discover;