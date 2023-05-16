import { ThemeContext, ThemeMode } from "theme/theme-context";
import { useContext } from "react";
import { Link } from "react-router-dom";

export default function SettingsPage(): JSX.Element {
	const themeContext = useContext(ThemeContext);

	return (
		<>
			<div>
				<button onClick={() => themeContext.toggleTheme(ThemeMode.Default)}>Toggle Default</button>
				<button onClick={() => themeContext.toggleTheme(ThemeMode.Dark)}>Toggle Dark</button>
				<button onClick={() => themeContext.toggleTheme(ThemeMode.Light)}>Toggle Light</button>
			</div>

			<div>
				Settings page <Link to="test">Goto test</Link>
			</div>
		</>
	);
}
