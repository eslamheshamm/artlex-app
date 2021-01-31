import { useState } from "react";
import Container from "@/components/Article/Container";
import BlogPost from "@/components/Article/BlogPost";
import { getAllFilesFrontMatter } from "@/lib/mdx";
import CategorySection from "@/components/Categories/";
export default function Blog({ posts }) {
	const [searchValue, setSearchValue] = useState("");
	const filteredBlogPosts = posts
		.sort(
			(a, b) =>
				Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
		)
		.filter((frontMatter) =>
			frontMatter.title.toLowerCase().includes(searchValue.toLowerCase())
		);

	return (
		<Container
			title="Artlex Community "
			description="Egyptian community for artists."
		>
			<CategorySection />
			<main className="mx-auto h-full my-12">
				{/* search field, waiting for design */}
				{/* -------------------------------------- */}
				{/* <div className="relative w-2/12 mb-4">
					<input
						aria-label="Search articles"
						type="text"
						onChange={(e) => setSearchValue(e.target.value)}
						placeholder="Search articles"
						className="px-4 py-2 border border-gray-300 dark:border-gray-900 focus:ring-blue-500 focus:border-blue-500 block w-full rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
					/>
					<svg
						className="absolute right-3 top-3 h-5 w-5 text-gray-400 dark:text-gray-300"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
						/>
					</svg>
				</div> */}

				<section className="grid md:grid-cols-2 gap-4 w-full">
					{!filteredBlogPosts.length && "No posts found."}
					{filteredBlogPosts.map((frontMatter) => (
						<BlogPost key={frontMatter.title} {...frontMatter} />
					))}
				</section>
			</main>
		</Container>
	);
}

export async function getStaticProps() {
	const posts = await getAllFilesFrontMatter("blog");

	return { props: { posts } };
}
