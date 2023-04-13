import { Outlet } from "react-router-dom";
import LayoutHeader from './Navigation/header';

export default function Layout(): JSX.Element {
    return (
        <div >
            <LayoutHeader />

            <div id="page-content">
                <Outlet />
            </div>
        </div>
    );
}
