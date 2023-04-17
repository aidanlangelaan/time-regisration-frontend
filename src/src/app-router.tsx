import { createBrowserRouter } from "react-router-dom";
import AppRoutes from "global/routes";

const AppRouter = () => {
	const routes = AppRoutes();
	return createBrowserRouter(routes);
};
export default AppRouter;
