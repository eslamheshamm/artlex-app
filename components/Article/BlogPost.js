import Link from "next/link";
import Image from "next/image";
// import format from 'comma-number';

const BlogPost = ({ title, summary, hero, author, authorPhoto, slug }) => {
	return (
		<div className="mb-8 p-6 rounded-2xl bg-accent-shd2">
			<div className="aspect-w-2 aspect-h-1  mb-5">
				<img src={`${hero}`} className="rounded-2xl object-cover w-full" />
			</div>
			<Link href={`/blog/${slug}`}>
				<a className="">
					<h2 className="font-bold text-2xl leading-6 text-white">{title}</h2>
				</a>
			</Link>
			<p className="text-white text-opacity-40 text-lg my-4">{summary}</p>
			<div className="flex items-center my-4">
				<img src={`${authorPhoto}`} className="rounded-full mr-4 w-8 h-8" />
				<p className="text-white text-opacity-40 text-40 ">{author}</p>
			</div>
		</div>
	);
};

export default BlogPost;
