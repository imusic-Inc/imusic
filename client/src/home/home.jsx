import Auth from "../auth/authenticated";
import Menu from "./menu";
import { useState } from "react";
function Home() {
const [signIn, setSignIn] = useState(true);
    return (<>
        <Menu />
       {signIn? <Auth />:<></>}
    </>)
}
export default Home;