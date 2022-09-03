import APIController from '../api/functons'
import { useState, useEffect } from "react"; 
import PublicSession from '../components/publicSession';
import { LoadingSession } from '../components/loadingSession';
import PublicSessionImusic from '../components/publicSessionImusic';
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
  
  useEffect(() => {
  init();
  },[])

  
  return (
    <div className="flex-6 p-1 pt-1 left-20">
          <h1 className="fixed bg-primary title">iMusic Rooms</h1>
      <br /><br />
      

      <PublicSessionImusic name={"IMusic Public Rooms"} type={'public' } />
    <PublicSessionImusic name={"IMusic Private Rooms"} type={'private' } />


      {genre.length < 1 ? <><LoadingSession /></> : genre.map(value => {
      // console.log(value)
                  return <PublicSession name={value.name} type={'public'} id={value.id} key={value.id} />
              })}
</div>
  );
}

export default Discover;