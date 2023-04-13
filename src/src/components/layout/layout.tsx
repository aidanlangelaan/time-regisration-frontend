import { Outlet } from "react-router-dom";
import ComponentsLayoutHeader from './Navigation/header';

export default function Layout(): JSX.Element {
    return (
        <div >
            <ComponentsLayoutHeader />

            <div id="page-content">
                <Outlet />
            </div>
        </div>
    );
}
