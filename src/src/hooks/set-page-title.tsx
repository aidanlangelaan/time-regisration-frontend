import { useMatches } from "react-router";

export default function SetPageTitle(): JSX.Element {
	const matches = useMatches();
	const currentRoute = matches.filter((match) => Boolean((match.handle as any)?.title)).slice(-1)[0];

	const title = (currentRoute as any).handle.title();

	document.title = title + " | Time Registration";

	return <></>;
}
