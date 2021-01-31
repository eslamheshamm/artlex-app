import NavBar from "@/components/Navbar/";
import Head from "next/head";

export default function Container({ children, customMeta }) {
	let meta = {
		title: "title",
		description: `Artists Community`,
		image: "https://source.unsplash.com/random",
		type: "website",
		...customMeta,
	};
	return (
		<body className="bg-accent mx-auto dark:bg-white h-full font-display">
			<Head>
				<title>{meta.title}</title>
				<meta name="robots" content="follow, index" />
				<meta content={meta.description} name="description" />
				<meta property="og:type" content={meta.type} />
				<meta property="og:site_name" content="Eslam Hesham" />
				<meta property="og:description" content={meta.description} />
				<meta property="og:title" content={meta.title} />
				<meta property="og:image" content={meta.image} />
				{meta.date && (
					<meta property="article:published_time" content={meta.date} />
				)}
			</Head>
			<NavBar />
			<main className="h-full mx-auto w-11/12">
				<section>
					<article>{children}</article>
				</section>
			</main>
		</body>
	);
}
