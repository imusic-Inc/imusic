import APIController from '../api/functons'
import { useState } from "react"; 
import PublicSession from '../components/publicSession';
import { LoadingSession } from '../components/loadingSession';
let token;
function Discover() {

    const [genre, setGenre] = useState([]);
    
  async function init() {
    if (!token) {
      APIController.getToken().then(value => {
        token = value;
        APIController.getGenres(token).then((values) => {
            setGenre(values);
          })
        });
      }
    }
  init();
  
  return (
    <div className="flex-6 p-1 pt-1 left-20">
          <h1 className="fixed bg-primary title">Public iMusic Rooms</h1>
      <br /><br />
      
    {genre.length < 1 ? <><LoadingSession/></>: genre.map(value => {
                  return <PublicSession name={value.name} id={value.id} key={value.id} />
              })}
</div>
  );
}

export default Discover;