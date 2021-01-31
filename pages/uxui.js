import Container from "@/components/Article/Container";
import BlogPost from "@/components/Article/BlogPost";
import { getAllFilesFrontMatter } from "@/lib/mdx";
import CategorySection from "@/components/Categories/";

export default function Blog({ posts }) {
	const category = "UX/UI";
	const filteredBlogPosts = posts
		.sort(
			(a, b) =>
				Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
		)
		.filter((frontMatter) => frontMatter.category === category);

	return (
		<Container
			title="Blog"
			description="Thoughts on the software industry, programming, tech, videography, music, and my personal life."
		>
			<CategorySection />
			<main className="mx-auto h-full my-12">
				<section className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
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
