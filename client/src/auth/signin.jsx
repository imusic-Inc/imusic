function SignIn() {
    return (
      <div className="flex-6 left-20 p-3">
        <div className="register-container">
         <div className="register-section">
            <h2 className="pb-3">Welcome back.</h2>
            <p className="pb-1">Continue with...</p>
            <div className="flex-column">
                <div className="btn btn-card flex-row bg-danger flex-center">
                    <span className="pr-1 bold">G</span> Google
                </div>

                <div className="btn btn-card bg-dark flex-row flex-center">
                    <span className="pr-1 bold">G</span> GitHub
                </div>
                <div className="flex-row flex-center pt-2 opacity-6">
                    <div className="flex-6">
                        <hr></hr>
                    </div>

                    <div className="flex-1 p-1">
                        Or
                    </div>

                    <div className="flex-6">
                        <hr/>
                    </div>
                </div>
                <input type="email" className="playSearch w-100 p-1" placeholder="&#9892; Email Address" name="email"/>
                <input type="password" className="playSearch w-100 p-1" placeholder="&#8647; Password" name="pass"/>
                <button className="playSearch btn w-100 p-1">Sign-in</button>

            </div>
            <p className="p-2">Don't have and account <span className="btn link">sign me up</span></p>
        </div>
    </div>
</div>);
}

export default SignIn;