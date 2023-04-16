import AppRouter from "app-router";
import { RouterProvider } from "react-router-dom";

export default function App(): JSX.Element | null {
	return <RouterProvider router={AppRouter()} fallbackElement={<>Loading...</>} />;
}
