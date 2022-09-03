import { useState, useEffect } from "react";
import Cookies from 'universal-cookie';
import getData from "../api/backendcalls";
import { useNavigate } from "react-router-dom";
import APIController from "../api/functons";
function Auth(props) {
    const [pathed, setPath] = useState("");
    const [userName, setUserName] = useState("");
    const cookies = new Cookies();
    useEffect(() => {
        const paths = new URLSearchParams(window.location.search);
        const token = paths.get("access_token");
        if (token && token.length > 10) {
            authenticate(token);
        } else {
            const cookies_tokens = cookies.get('access_token');
            if (cookies_tokens && cookies_tokens.length > 10) {
                authenticate(cookies_tokens);
            }
        }

    if (pathed && pathed.length>10 &&  userName &&  userName.length>3) {
        if (window.location.href.includes('login')) {
           
            window.history.back();
            
        } else {
            props.show();
        } 
    }
    });

    function authenticate(tokens) {
        APIController.getUser(tokens).then(value => {
            // const expires = 1000 * 60 * 60;
            if (value.error) {
                setPath('');
                cookies.set("name",null);
                cookies.set("access_token",null);
                cookies.set("email", null);
                cookies.set("setDate", null);
                cookies.set("uid", null);
                cookies.set("photo", null);
            } else {
                getData.getUserByEmail('users', value.email)
                    .then(value => {
                cookies.set('access_token', tokens)
                cookies.set('name', value.name);
                cookies.set('email', value.email);
                cookies.set('uid', value._id);
                cookies.set('photo', value.email);
                cookies.set('setDate', Date.now());
                cookies.set('product', value.product);
                setUserName(value.name);
                setPath(tokens); 
                });
            }
            });
    }

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
                               {pathed && pathed.length>10? "LOADING...":"SIGN UP FREE"}
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