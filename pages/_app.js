import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import MDXComponents from "@/components/Article/MDXComponents";
import { MDXProvider } from "@mdx-js/react";

function MyApp({ Component, pageProps }) {
	return (
		<ThemeProvider attribute="class">
			<MDXProvider components={MDXComponents}>
				<Component {...pageProps} />
			</MDXProvider>
		</ThemeProvider>
	);
}

export default MyApp;
