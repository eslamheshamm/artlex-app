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
			title={frontMatter.title}
			description={frontMatter.summary}
			image={`https://leerob.io${frontMatter.image}`}
			date={new Date(frontMatter.publishedAt).toISOString()}
			type="article"
		>
			<section className="flex sm:flex-row">
				<Aside />
				<article className="mx-auto w-10/12 bg-accent h-full">
					<Header
						hero="https://source.unsplash.com/random"
						alt="random"
						title={frontMatter.title}
					/>
					<div className=" justify-between items-start md:items-center w-full mt-2 mb-8">
						<div className="flex justify-between items-start flex-col lg:flex-row">
							<ProfileBio
								src="https://source.unsplash.com/random"
								author={frontMatter.author}
								bio={frontMatter.bio}
							/>
							<div className="flex flex-col lg:items-end">
								<div className="flex my-4 text-white text-opacity-40 mb-2">
									<p className="text-sm">
										{format(parseISO(frontMatter.publishedAt), "MMMM dd, yyyy")}
									</p>
									<span className="mx-2"> {`   • `}</span>
									<p className="text-sm">{frontMatter.readingTime.text}</p>
								</div>
								<Catagory category={frontMatter.category} />
							</div>
						</div>
					</div>
					<article className="w-11/12 md:w-9/12  sm:mx-auto text-opacity-40  text-white prose-sm sm:text-xl my-16 sm:prose-lg break-words leading-7">
						{children}
					</article>

					{/* <div className="text-sm text-gray-700 dark:text-gray-300">
						{` • `}
						<a
							href={editUrl(frontMatter.slug)}
							target="_blank"
							rel="noopener noreferrer"
						>
							{"Edit on GitHub"}
						</a>
					</div> */}
				</article>
			</section>
		</Container>
	);
}
