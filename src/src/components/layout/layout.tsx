import { Link, Outlet } from "react-router-dom";

export default function Layout(): JSX.Element {
    return (
        <div>
            <div>
                <h1>Time Registration</h1>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/blaat">Blaat</Link>
            </div>

            <div id="content">
                <Outlet />
            </div>
        </div>
    );
}
