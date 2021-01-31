import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Home() {
	const router = useRouter();
	const { locale } = router;
	return (
		<div className="flex flex-col items-center justify-center min-h-screen py-2">
			<Head>
				<title>Artlex</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className="flex flex-col items-center justify-center flex-1 px-20 text-center">
				<h1 className="text-6xl font-bold">Visit Artlex Blog</h1>
				<Link href="/blog" locale={locale}>
					<h1 className="mt-4 text-6xl font-bold">
						<a className="text-blue-600 " href="/blog">
							Click Here!
						</a>
					</h1>
				</Link>
			</main>
		</div>
	);
}
