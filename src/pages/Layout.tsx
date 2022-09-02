import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar"

export default function Layout() {
    return (
        <main className="min-h-screen flex flex-col">
            <Navbar />
            <Outlet />
            <div className="mt-auto">
                <Footer />
            </div>
        </main>
    )
}