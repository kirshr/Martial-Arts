import Navigation from "../components/Navigation";
import { Outlet } from "react-router-dom";
interface LayoutProps {

}
const Layout: React.FC<LayoutProps> = ({ }) => {
    return (
        < div className = "root-layout" >
            <Navigation />
            <main>
                <Outlet/>
            </main>
        </div >
    )
}
export default Layout;