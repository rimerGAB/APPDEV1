import { useEffect, useState } from "react";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";

export default function App() {
    const [page, setPage] = useState(window.location.hash);

    useEffect(() => {
        function updatePage() {
            setPage(window.location.hash);
        }

        window.addEventListener("hashchange", updatePage);

        return () => {
            window.removeEventListener("hashchange", updatePage);
        };
    }, []);

    return page === "#signup" ? <Signup /> : <Login />;
}