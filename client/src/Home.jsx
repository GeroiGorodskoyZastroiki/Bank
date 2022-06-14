import Header from "./components/Header.jsx";
import Body from "./components/Body.jsx";
import "./Home.css"

export default function Layout() {
    return (
        <div className="struct">
            <Header />
            <Body />
        </div>
    )
}