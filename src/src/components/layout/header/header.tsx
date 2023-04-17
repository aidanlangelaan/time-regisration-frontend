import { Avatar, Button } from "@fluentui/react-components";
import { DataBarVertical24Regular, Settings24Regular } from "@fluentui/react-icons";
import { Link } from "react-router-dom";
import LayoutBreadcrumbs from "../navigation/breadcrumbs/breadcrumbs";
import "./header.style.scss";

export default function LayoutHeader(): JSX.Element {
	return (
		<header>
			<nav className="flex-container">
				<div className="flex-container left">
					<Button icon={<DataBarVertical24Regular />} />
					<div id="logo">
						<Link to="/">Time Registration</Link>
					</div>

					<span className="vertical-devider"></span>

					<LayoutBreadcrumbs />
				</div>

				<div className="flex-container right">
					<Link to="/settings">
						<Settings24Regular />
					</Link>
					<Avatar name="Aidan Langelaan" />
				</div>
			</nav>
		</header>
	);
}
