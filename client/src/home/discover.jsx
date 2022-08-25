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
    <p class="font-s-2 fixed bg-primary title">Discover
    </p>

    ...

    <h3 class="pt-2">Session playlist</h3>
    <div class="playlist">
        <div class="flex-row flex-center flex-space pt-1">
            <div class="flex-row flex-center">
                <div class=" pr-1">01</div>
                <img class="b-r-01" src="./images/My project-1.png" alt="" width="50" height="50" srcset=""/>
                <div class="pl-1">
                    <h4>Kofi the Traveler</h4>
                    <h6 class="opacity-6">Black Shaif</h6>
                </div>
            </div>
            <div class="flex-row flex-center flex-space">
                <div>30:31</div>
                <div class="play btn cirle-1 ml-1"><svg style={{width:24,height:24}} viewBox="0 0 24 24">
                        <path fill="#037AFF"
                            d="M10,16.5V7.5L16,12M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" />
                    </svg></div>
            </div>
        </div>

        <div class="flex-row flex-center flex-space pt-1">
            <div class="flex-row flex-center">
                <div class=" pr-1">02</div>
                <img class="b-r-01" src="./images/My project-1(2).png" alt="" width="50" height="50" srcset=""/>
                <div class="pl-1">
                    <h4>Kofi the Traveler</h4>
                    <h6 class="opacity-6">Black Shaif</h6>
                </div>
            </div>
            <div class="flex-row flex-center flex-space">
                <div>30:31</div>
                <div class="play btn cirle-1 ml-1"><svg style={{width:24,height:24}} viewBox="0 0 24 24">
                        <path fill="#037AFF"
                            d="M10,16.5V7.5L16,12M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" />
                    </svg></div>
            </div>
        </div>


        <div class="flex-row flex-center flex-space pt-1">
            <div class="flex-row flex-center">
                <div class=" pr-1">03</div>
                <img class="b-r-01" src="./images/My project-1(1).png" alt="" width="50" height="50" srcset=""/>
                <div class="pl-1">
                    <h4>Kofi the Traveler</h4>
                    <h6 class="opacity-6">Black Shaif</h6>
                </div>
            </div>
            <div class="flex-row flex-center flex-space">
                <div>30:31</div>
                <div class="play btn cirle-1 ml-1"><svg style={{width:24,height:24}} viewBox="0 0 24 24">
                        <path fill="#037AFF"
                            d="M10,16.5V7.5L16,12M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" />
                    </svg></div>
            </div>
        </div>
          </div>
          <br />
          <br />
</div>
  );
}

export default Discover;