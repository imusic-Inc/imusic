import { useState, useEffect } from "react";
import Cookies from 'universal-cookie';
import APIController from "../api/functons";
function Auth(props) {
    const [path, setPath] = useState("");
    const [userName, setUserName] = useState("");

    useEffect(() => {
        const paths = new URLSearchParams(window.location.search);
        const cookies = new Cookies();
        const token = paths.get("access_token");
        if (token && token.length > 10) {
            const expires = paths.get('expires_in');
            cookies.set('access_token', path, { maxAge:expires })
            setPath(token);
            APIController.getUser(path).then(value => {
            cookies.set('name', value.display_name, { maxAge:expires });
                cookies.set('email', value.email, { maxAge:expires });
                setUserName(value.display_name);
        })
        } else {
            const tokens = cookies.get('access_token');
            setUserName(cookies.get('name'));
            if (tokens && tokens.length > 10) {
               setPath(tokens); 
            }
        }
    if (path && userName &&  userName.length>3) {
        if (window.location.href.includes('login')) {
           window.history.back();
        } else {
            // props.show();
        }
       
        
    }
    });

   
    

    return( <div className='logIn-alert'>
                <div className='login-card p-2'>
                    <div >
                        <svg  className='btn' onClick={props.show} style={{ width: '24px', height: '24px' }} viewBox="0 0 24 24">
    <path fill="currentColor" d="M20 6.91L17.09 4L12 9.09L6.91 4L4 6.91L9.09 12L4 17.09L6.91 20L12 14.91L17.09 20L20 17.09L14.91 12L20 6.91Z" />
</svg>
                </div>
                    <div className=' flex-row flex-center'>
                    
                    <div className='flex-1 p-2'>
                        <img className='login-image' src="https://images.unsplash.com/photo-1661664492724-dd5cec84afa8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" alt=""  width='100%'/>
                </div>
                
                     <div className='flex-1 '>
                        <h1 className='p-1'>With a free account, you can listen to full songs.</h1>
                        <div className='login-btn btn p-1'>
                        <a href={'http://localhost:3001/api/v1/auth'}>
                            <span className='btn-login'>
                               {path && path.length>10? "LOADING...":"SIGN UP FREE"}
                        </span>
                        </a>   
                        
                        
                        </div>
                        <h5 className='p-1 pt-2'>Already have and account? <span className='sign-in pl-1 btn'>Sign me in</span></h5>
                    </div>
                </div>
                </div>
                
            </div>)
}
export default Auth;