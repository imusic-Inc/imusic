function MyPlayerFunctions() {
    let audio = new Audio();
    let isPlaying = false;
   
   function listiner(calback,secondCallback,playOnLoadCallback,number) {
            if (audio) {
            audio.addEventListener('ended', () => {
                isPlaying = false;
                console.log("this is the line of code just testing");
                calback(false);
                secondCallback(number + 1);
                playOnLoadCallback();
        })
        }
   }
   
    
    return {
       async play(calback,secondCallback,playOnLoadCallback,number) {
            if (audio) {
            audio.play();
            isPlaying = true;
            };
            listiner(calback,secondCallback,playOnLoadCallback,number);
        },
        setSrc(url) {
            if (audio) audio.src = url;
        },
       async pause() {
            if (audio) {
                audio.pause();
                isPlaying = false;
            }
        },
        clean() {
            if (audio) {
                audio.pause();
                audio = null;
                audio = new Audio();
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