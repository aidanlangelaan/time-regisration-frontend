import { BrandVariants, Theme, createDarkTheme, createLightTheme } from "@fluentui/react-components";

const brandVariants: BrandVariants = {
	"10": "#000000",
	"20": "#190a00",
	"30": "#3e1a00",
	"40": "#642a00",
	"50": "#893a00",
	"60": "#af4900",
	"70": "#d45900",
	"80": "#fa6900",
	"90": "#fb954b",
	"100": "#fc9e5b",
	"110": "#fc9e5b",
	"120": "#fcb079",
	"130": "#fdc8a2",
	"140": "#fed4b7",
	"150": "#fee7d6",
	"160": "#ffffff",
};

const lightTheme: Theme = createLightTheme(brandVariants);
const darkTheme: Theme = createDarkTheme(brandVariants);

export const themes = {
	light: lightTheme,
	dark: darkTheme,
};
