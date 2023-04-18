import "./header.style.scss";

import { Avatar, Button } from "@fluentui/react-components";
import { DataBarVertical24Regular, Settings24Regular } from "@fluentui/react-icons";

import LayoutBreadcrumbs from "../breadcrumbs/breadcrumbs";
import { Link } from "react-router-dom";
import { MouseEventHandler } from "react";

export default function LayoutHeader(props: { onMenuButtonClick: MouseEventHandler }): JSX.Element {
	const { onMenuButtonClick } = props;

	return (
		<header>
			<nav className="flex-container">
				<div className="flex-container left">
					<Button icon={<DataBarVertical24Regular />} onClick={onMenuButtonClick} />
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
