import { ScrollRestoration } from "react-router-dom";

//@: Components
import Header from "../Header";
import Footer from "../Footer";

interface LayoutProps {
    children: React.ReactNode
}

export default function Layout({children}:LayoutProps) {
    return (
        <main>
            <ScrollRestoration/>
            
            <Header/>
            {children}
            <Footer/>
        </main>
    )
}
