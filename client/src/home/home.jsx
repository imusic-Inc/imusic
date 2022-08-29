import Auth from "../auth/authenticated";
import Menu from "./menu";
import { useState } from "react";
function Home() {
const [signIn, setSignIn] = useState(false);
    return (<>
        <Menu />
       {signIn? <Auth />:<></>}
    </>)
}
export default Home;