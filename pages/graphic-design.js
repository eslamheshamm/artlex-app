import Container from "@/components/Article/Container";
import BlogPost from "@/components/Article/BlogPost";
import { getAllFilesFrontMatter } from "@/lib/mdx";
import CategorySection from "@/components/Categories/";

export default function Blog({ posts }) {
	const category = "graphic design";
	const filteredBlogPosts = posts
		.sort(
			(a, b) =>
				Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
		)
		.filter(
			(frontMatter) =>
				frontMatter.category.toLowerCase() === category.toLowerCase()
		);

	return (
		<Container
			title="Artlex Community "
			description="Egyptian community for artists."
		>
			<CategorySection />

			<bod className="mx-auto h-full my-12">
				<section className="grid grid-cols-3 gap-4 w-full">
					{!filteredBlogPosts.length && "No posts found."}
					{filteredBlogPosts.map((frontMatter) => (
						<BlogPost key={frontMatter.title} {...frontMatter} />
					))}
				</section>
			</bod>
		</Container>
	);
}

export async function getStaticProps() {
	const posts = await getAllFilesFrontMatter("blog");

	return { props: { posts } };
}
