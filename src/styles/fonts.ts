import { Poppins, Crimson_Text } from "next/font/google";

export const fontsans = Poppins({
	subsets: ["latin"],
	variable: "--font-sans",
	weight: ["400", "500", "600"],
});

export const fontserif = Crimson_Text({
	subsets: ["latin"],
	variable: "--font-serif",
	weight: ["400", "600"],
});
