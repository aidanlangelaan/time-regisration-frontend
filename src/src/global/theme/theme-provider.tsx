import { FluentProvider, FluentProviderProps } from "@fluentui/react-components";
import { useEffect, useState } from "react";
import { ThemeContext, ThemeMode } from "./theme-context";
import { themes } from "./themes";

const getBrowserDefault = () => window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
const userDefaultPreferredThemeMode = () => (getBrowserDefault() ? ThemeMode.Dark : ThemeMode.Light);

export const ThemeProvider = (props: FluentProviderProps): JSX.Element => {
	const [theme, setTheme] = useState<ThemeMode>(ThemeMode.Default);

	useEffect(() => {
		setTheme(userDefaultPreferredThemeMode());
	}, []);

	const toggleTheme = (selectedTheme: ThemeMode) => {
		if (selectedTheme === ThemeMode.Default) {
			selectedTheme = userDefaultPreferredThemeMode();
		}

		setTheme(selectedTheme);
	};

	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			<FluentProvider theme={theme == ThemeMode.Light ? themes.light : themes.dark}>{props.children}</FluentProvider>
		</ThemeContext.Provider>
	);
};
