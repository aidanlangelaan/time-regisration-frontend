import { IosArrowRtl24Regular } from "@fluentui/react-icons";
import { useMatches } from "react-router";
import { Link } from "react-router-dom";
import "./breadcrumbs.style.scss";

export default function LayoutBreadcrumbs(): JSX.Element {
	const matches = useMatches();
	const crumbs = matches.filter((match) => Boolean((match.handle as any)?.title));

	return (
		<div id="breadcrumbs">
			{crumbs.map((match, index) => {
				const title = (match.handle as any).title();
				if (index < crumbs.length - 1) {
					return (
						<>
							<Link to={match.pathname} key={match.id}>
								{title}
							</Link>
							<span className="splitter">
								<IosArrowRtl24Regular />
							</span>
						</>
					);
				} else {
					return <span key={match.id}>{title}</span>;
				}
			})}
		</div>
	);
}
