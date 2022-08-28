function MyPlayerFunctions() {
    const audio = new Audio();
    let isPlaying = false;
    let loginShow = true;
   function listiner(calback,secondCallback,playOnLoadCallback,number,total,setLogin) {
            if (audio) {
            audio.addEventListener('ended', () => {
                isPlaying = false;
                console.log("this is the line of code just testing");
                calback(false);
                const next = number + 1 < total ? number + 1 : number;
                secondCallback(next);
                playOnLoadCallback();
                if (loginShow) {
                    setLogin(true);
                    loginShow = false;
                }
               
        })
        }
   }
   
    
    return {
       async play(calback,secondCallback,playOnLoadCallback,number,total,setLogin) {
            if (audio && !isPlaying) {
            audio.play();
            isPlaying = true;
            };
            listiner(calback,secondCallback,playOnLoadCallback,number,total,setLogin);
        },
       async setSrc(url) {
            if (isPlaying && audio) audio.pause();
            if (audio) audio.src = url;
        },
       async pause() {
            if (audio) {
                audio.pause();
                isPlaying = false;
            }
        },
        canPlay() {
            if (audio && !isPlaying) {
                return true;
            } else {
                return false;
           }
       }
    }
    
}

export default MyPlayerFunctions;