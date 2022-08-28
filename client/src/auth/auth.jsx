function Auth(props) {
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
                            <span className='btn-login'>
                                SIGN UP FREE
                            </span>
                        </div>
                        <h5 className='p-1 pt-4'>Already have and account? <span className='sign-in pl-1 btn'>Sign me in</span></h5>
                    </div>
                </div>
                </div>
                
            </div>)
}
export default Auth;