import { parseISO, format } from "date-fns";
import Container from "@/components/Article/Container";
import Header from "@/components/Article/Header";
import ProfileBio from "@/components/Article/Bio";
import Catagory from "@/components/Article/Catagory";
import Aside from "@/components/Article/Aside";
const editUrl = (slug) =>
	`https://github.com/leerob/leerob.io/edit/master/data/blog/${slug}.mdx`;

export default function BlogLayout({ children, frontMatter }) {
	return (
		<Container
			title={`${frontMatter.title}`}
			description={frontMatter.summary}
			image={`https://leerob.io${frontMatter.image}`}
			date={new Date(frontMatter.publishedAt).toISOString()}
			type="article"
		>
			<section className="flex">
				<Aside />
				<article className="mx-auto w-8/12 bg-accent h-full">
					<h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white"></h1>
					<Header
						imgLink="https://source.unsplash.com/random"
						imgAlt="random"
						title={frontMatter.title}
					/>
					<div className=" justify-between items-start md:items-center w-full mt-2 mb-8">
						<div className="w-full">
							<div className="flex justify-between">
								<ProfileBio
									src="https://source.unsplash.com/random"
									author={frontMatter.author}
									about={frontMatter.authourInfo}
								/>
								<div className="flex flex-col items-end">
									<div className="flex text-white text-opacity-40 mb-2">
										<p className="text-sm">
											{format(
												parseISO(frontMatter.publishedAt),
												"MMMM dd, yyyy"
											)}
										</p>
										<span className="mx-2"> {`   • `}</span>
										<p className="text-sm">{frontMatter.readingTime.text}</p>
									</div>
									<Catagory category={frontMatter.category.toUpperCase()} />
								</div>
							</div>
						</div>
					</div>
					<div className="prose dark:prose-dark max-w-none w-6/12 mx-auto h-full my-16">
						{children}
					</div>
					<div className="text-sm text-gray-700 dark:text-gray-300">
						{` • `}
						<a
							href={editUrl(frontMatter.slug)}
							target="_blank"
							rel="noopener noreferrer"
						>
							{"Edit on GitHub"}
						</a>
					</div>
				</article>
			</section>
		</Container>
	);
}
