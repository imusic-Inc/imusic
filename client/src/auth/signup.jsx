import {Link} from "react-router-dom";
function SignUp() {
  return (
    <div className="left-20 pt-1">
<div className="register-container">
<div className="register-section">
<h2 className="pb-3">Register an Account.</h2>
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
<hr/>
</div>
<div className="flex-1 p-1">
Or
</div>

<div className="flex-6">
<hr/>
</div>
</div>
<input type="text" className="playSearch w-100 p-1" placeholder="&#8486; Full Name" name="name"/>
<input type="email" className="playSearch w-100 p-1" placeholder="&#9892; Email Address" name="email"/>
<input type="password" className="playSearch w-100 p-1" placeholder="&#8647; Password" name="pass"/>
<input type="password" className="playSearch w-100 p-1" placeholder="&#8649; Confirm Password" name="cpass"/>
<button className="playSearch btn w-100 p-1" >Sign-up</button>
</div>
<p className="p-2">I ready have and account <Link to="/sign-in" className="btn link" >sign me in</Link></p>
</div>
      </div>
      <br />
      <br />
      
</div>
  );
}

export default SignUp;