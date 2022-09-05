import APIController from '../api/functons'
import { useState, useEffect } from "react"; 
import PublicSession from '../components/publicSession';
import { LoadingSession } from '../components/loadingSession';
import PublicSessionImusic from '../components/publicSessionImusic';
function Discover() {

    const [genre, setGenre] = useState([]);
  
  async function init() {
     APIController.getToken().then(value => {
        let token = value;
       APIController.getGenres(token).then((values) => {
         setGenre(values);
       });
      });
  };
  
  
  useEffect(() => {
    init();
  },[]);

  console.log(genre);
  return (
    <div className="flex-6 p-1 pt-1 left-20">
      <div className=''>
<h1 className="fixed bg-primary title">iMusic Rooms</h1>
      </div>
          
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