import { useState, useEffect } from "react"; 
import Cookies from 'universal-cookie';
import {toast,ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Share(props) {
    const [clip, setClip] = useState('');
    const cookies = new Cookies();

     const notify = (message) => {
        toast.info(message, {
            autoClose: 2000,
        });
    };

    useEffect(() => {
        setClip(window.location.href);
    }, [props]);

    function addToClib() {
        notify('Link copied to clipboard');
        setTimeout(() => {
        navigator.clipboard.writeText(clip);
            props.show();
        }, 1000);
        
    }

    function shareWithFriend() {
        const token = cookies.get("access_token");
        if (token && token.length > 50) {
             notify('Link copied to clipboard');
         setTimeout(() => {
             navigator.clipboard.writeText(`https://imusicroom.herokuapp.com/login#access_token=${cookies.get("access_token")}&Redirect_URL=${window.location.pathname+window.location.search}`);
             props.show();
        }, 1000);
        } else {
            notify('You have to login first');
        }
       
       
    }

    return (<>
        <ToastContainer
position="top-left"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
/>
    <div className="share-contaner p-1 btn-default  bg-default">
        <div className="flex-row justify-center">
<h3>Share</h3> <div onClick={props.show} className="btn"><svg style={{ width: '24px', height: '24px' }} viewBox="0 0 24 24">
    <path fill="red" d="M13.46,12L19,17.54V19H17.54L12,13.46L6.46,19H5V17.54L10.54,12L5,6.46V5H6.46L12,10.54L17.54,5H19V6.46L13.46,12Z" />
</svg></div>
        </div>

            <div className="share-icons p-1">
                <a  href={'https://api.whatsapp.com/send/?text='+clip} rel="noreferrer" target={"_blank"} className="flex-column flex-center m-1 btn">
                    <div><svg viewBox="0 0 60 60" style={{ width: '70px', height: '70px' }} preserveAspectRatio="xMidYMid meet" focusable="false" ><g ><g fill="none" fill-rule="evenodd" ><circle cx="30" cy="30" r="30" fill="#25D366" ></circle><path d="M39.7746 19.3513C37.0512 16.5467 33.42 15 29.5578 15C21.6022 15 15.1155 21.6629 15.1155 29.8725C15.1155 32.4901 15.7758 35.0567 17.0467 37.3003L15 45L22.6585 42.9263C24.7712 44.1161 27.148 44.728 29.5578 44.728C37.5134 44.728 44 38.0652 44 29.8555C44 25.8952 42.498 22.1558 39.7746 19.3513ZM29.5578 42.2295C27.3956 42.2295 25.2829 41.6346 23.4508 40.5127L23.0051 40.2408L18.4661 41.4646L19.671 36.9093L19.3904 36.4334C18.1855 34.4618 17.5583 32.1841 17.5583 29.8555C17.5583 23.0397 22.9556 17.4986 29.5743 17.4986C32.7763 17.4986 35.7968 18.7904 38.0581 21.119C40.3193 23.4476 41.5737 26.5581 41.5737 29.8555C41.5572 36.6884 36.1764 42.2295 29.5578 42.2295ZM36.1434 32.966C35.7803 32.779 34.0142 31.8782 33.6841 31.7592C33.354 31.6402 33.1064 31.5722 32.8754 31.9462C32.6278 32.3201 31.9511 33.153 31.7365 33.4079C31.5219 33.6629 31.3238 33.6799 30.9607 33.4929C30.5976 33.306 29.4422 32.915 28.0558 31.6572C26.9829 30.6714 26.2567 29.4476 26.0421 29.0907C25.8275 28.7167 26.0256 28.5127 26.2072 28.3258C26.3722 28.1558 26.5703 27.8839 26.7518 27.6799C26.9334 27.4589 26.9994 27.3059 27.115 27.068C27.2305 26.813 27.181 26.6091 27.082 26.4221C26.9994 26.2351 26.2732 24.3994 25.9761 23.6686C25.679 22.9377 25.3819 23.0397 25.1673 23.0227C24.9528 23.0057 24.7217 23.0057 24.4741 23.0057C24.2265 23.0057 23.8469 23.0907 23.5168 23.4646C23.1867 23.8385 22.2459 24.7394 22.2459 26.5581C22.2459 28.3938 23.5333 30.1445 23.7149 30.3994C23.8964 30.6544 26.2567 34.3938 29.8714 36.0085C30.7297 36.3994 31.4064 36.6204 31.9345 36.7904C32.7928 37.0793 33.5851 37.0283 34.2123 36.9433C34.9055 36.8414 36.3415 36.0425 36.6551 35.1756C36.9522 34.3088 36.9522 33.5609 36.8697 33.4079C36.7541 33.255 36.5065 33.153 36.1434 32.966Z" fill="white" ></path></g></g></svg></div>
                    <h6>WhatsApp</h6>
                </a>
                 <a href={`https://www.facebook.com/dialog/share?app_id=87741124305&href=${clip}`} rel="noreferrer" target={"_blank"} className="flex-column flex-center m-1 btn">
                    <div><svg viewBox="0 0 60 60" preserveAspectRatio="xMidYMid meet" style={{ width: '70px', height: '70px' }} focusable="false" ><g ><g fill="none" fill-rule="evenodd" ><path d="M28.4863253 59.9692983c-6.6364044-.569063-11.5630204-2.3269561-16.3219736-5.8239327C4.44376366 48.4721168 3e-7 39.6467924 3e-7 29.9869344c0-14.8753747 10.506778-27.18854591 25.2744118-29.61975392 6.0281072-.9924119 12.7038532.04926445 18.2879399 2.85362966C57.1386273 10.0389054 63.3436516 25.7618627 58.2050229 40.3239688 54.677067 50.3216743 45.4153135 57.9417536 34.81395 59.5689067c-2.0856252.3201125-5.0651487.5086456-6.3276247.4003916z" fill="#3B5998" fill-rule="nonzero" ></path><path d="M25.7305108 45h5.4583577V30.0073333h4.0947673l.8098295-4.6846666h-4.9045968V21.928c0-1.0943333.7076019-2.2433333 1.7188899-2.2433333h2.7874519V15h-3.4161354v.021c-5.3451414.194-6.4433395 3.2896667-6.5385744 6.5413333h-.0099897v3.7603334H23v4.6846666h2.7305108V45z" fill="#FFF" ></path></g></g></svg></div>
                    <h6>Facebook</h6>
                </a>
                 <a href={`https://twitter.com/intent/tweet?url=${clip}`} target={"_blank"} rel="noreferrer" className="flex-column flex-center m-1 btn">
                    <div><svg viewBox="0 0 60 60" preserveAspectRatio="xMidYMid meet" style={{ width: '70px', height: '70px' }} focusable="false" ><g ><g fill="none" fill-rule="evenodd" ><path d="M28.486325 59.969298c-6.636404-.569063-11.56302-2.326956-16.321973-5.823932C4.443764 48.472116 0 39.646792 0 29.986934 0 15.11156 10.506778 2.798388 25.274412.36718c6.028107-.992411 12.703853.049265 18.28794 2.85363 13.576275 6.818095 19.7813 22.541053 14.64267 37.103159-3.527955 9.997705-12.789708 17.617785-23.391072 19.244938-2.085625.320112-5.065149.508645-6.327625.400391z" fill="#1DA1F2" fill-rule="nonzero" ></path><path d="M45.089067 17.577067c-.929778.595555-3.064534 1.460977-4.117334 1.460977v.001778C39.7696 17.784 38.077156 17 36.200178 17c-3.645511 0-6.6016 2.956089-6.6016 6.600178 0 .50631.058666 1.000178.16711 1.473778h-.001066c-4.945066-.129778-10.353422-2.608356-13.609244-6.85049-2.001778 3.46489-.269511 7.3184 2.002133 8.72249-.7776.058666-2.209067-.0896-2.882844-.747023-.045156 2.299734 1.060622 5.346845 5.092622 6.452267-.776533.417778-2.151111.297956-2.7488.209067.209778 1.941333 2.928355 4.479289 5.901155 4.479289C22.46009 38.565156 18.4736 40.788089 14 40.080889 17.038222 41.929422 20.5792 43 24.327111 43c10.650667 0 18.921956-8.631822 18.4768-19.280356-.001778-.011733-.001778-.023466-.002844-.036266.001066-.027378.002844-.054756.002844-.0832 0-.033067-.002844-.064356-.003911-.096356.9696-.66311 2.270578-1.836089 3.2-3.37991-.539022.296888-2.156089.891377-3.6608 1.038932.965689-.521244 2.396444-2.228266 2.749867-3.585777" fill="#FFF" ></path></g></g></svg></div>
                    <h6>Twitter</h6>
                </a>
                 <a href={`https://www.linkedin.com/shareArticle?url=${clip}`} target={"_blank"} rel="noreferrer" className="flex-column flex-center m-1 btn">
                    <div><svg viewBox="0 0 60 60" preserveAspectRatio="xMidYMid meet" style={{ width: '70px', height: '70px' }} focusable="false"><g ><g fill="none" fill-rule="evenodd"><path d="M28.4863253 59.9692983c-6.6364044-.569063-11.5630204-2.3269561-16.3219736-5.8239327C4.44376366 48.4721168 3e-7 39.6467924 3e-7 29.9869344c0-14.8753747 10.506778-27.18854591 25.2744118-29.61975392 6.0281072-.9924119 12.7038532.04926445 18.2879399 2.85362966C57.1386273 10.0389054 63.3436516 25.7618627 58.2050229 40.3239688 54.677067 50.3216743 45.4153135 57.9417536 34.81395 59.5689067c-2.0856252.3201125-5.0651487.5086456-6.3276247.4003916z" fill="#0077B5" fill-rule="nonzero" ></path><g fill="#FFF" ><path d="M17.88024691 22.0816337c2.14182716 0 3.87817284-1.58346229 3.87817284-3.53891365C21.75841975 16.58553851 20.02207407 15 17.88024691 15 15.73634568 15 14 16.58553851 14 18.54272005c0 1.95545136 1.73634568 3.53891365 3.88024691 3.53891365M14.88888889 44.8468474h6.95851852V24.77777778h-6.95851852zM31.6137778 33.6848316c0-2.3014877 1.0888889-4.552108 3.6925432-4.552108 2.6036543 0 3.2438518 2.2506203 3.2438518 4.4970883v10.960701h6.9274074V33.1816948c0-7.9263084-4.6853333-9.29280591-7.5676049-9.29280591-2.8798518 0-4.4682469.9740923-6.2961975 3.33440621v-2.70185178h-6.9471111V44.5905129h6.9471111V33.6848316z" ></path></g></g></g></svg></div>
                    <h6>Linkedin</h6>
                </a>
                 <a href={`mailTo:?fs=1&tf=cm&source=mailto&body=${clip}`} target={"_blank"} rel="noreferrer" className="flex-column flex-center m-1 btn">
                    <div><svg viewBox="0 0 60 60" preserveAspectRatio="xMidYMid meet" style={{ width: '70px', height: '70px' }} focusable="false" ><g ><g fill-rule="nonzero" fill="none" ><path d="M28.4863253 59.9692983c-6.6364044-.569063-11.5630204-2.3269561-16.3219736-5.8239327C4.44376366 48.4721168 3e-7 39.6467924 3e-7 29.9869344c0-14.8753747 10.506778-27.18854591 25.2744118-29.61975392 6.0281072-.9924119 12.7038532.04926445 18.2879399 2.85362966C57.1386273 10.0389054 63.3436516 25.7618627 58.2050229 40.3239688 54.677067 50.3216743 45.4153135 57.9417536 34.81395 59.5689067c-2.0856252.3201125-5.0651487.5086456-6.3276247.4003916z" fill="#888" ></path><path d="M40.531502 19.160814h-22c-1.74 0-2.986 1.2375-3 3v16c0 1.7625 1.26 3 3 3h22c1.74 0 3-1.2375 3-3v-16c0-1.7625-1.26-3-3-3zm0 6l-11 7-11-7v-3l11 7 11-7v3z" fill="#FFF" ></path></g></g></svg></div>
                    <h6>Email</h6>
                </a>
                 <div onClick={addToClib} className="flex-column flex-center m-1 btn">
                    <div><svg viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet" style={{ width: '70px', height: '70px' }} focusable="false" ><g viewBox="0 0 36 36"><circle cx="18" cy="18" r="17.5" stroke="#E7E7E7" fill="#F4F4F4" stroke-width=".5" ></circle><path d="m21.41,23.29l-0.71,-0.71l4.59,-4.58l-4.59,-4.59l0.71,-0.71l5.3,5.3l-5.3,5.29zm-6.12,-0.7l-4.58,-4.59l4.59,-4.59l-0.71,-0.7l-5.3,5.29l5.29,5.29l0.71,-0.7z" fill="#606060" ></path></g></svg></div>
                    <h6>Copy</h6>
                </div>
        </div>
        <div className="flex-row flex-center flex-space">
            <h5>Share your account with friends: </h5>
            <div className="btn-default btn" onClick={shareWithFriend}> Generate link</div>
        </div>
    </div>
    </>);
}

export default Share;