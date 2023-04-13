import AppRouter from "app-router";
import { BrowserRouter } from "react-router-dom";

export default function App(): JSX.Element | null {
    return (
        <BrowserRouter>
            <AppRouter />
        </BrowserRouter>
    );
}
