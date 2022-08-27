import Auth from "../auth/authenticated";
import Menu from "./menu";

function Home() {
    return (<>
        <Menu />
        <Auth />
    </>)
}
export default Home;