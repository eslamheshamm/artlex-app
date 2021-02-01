const ProfileBio = ({ src, alt, author, bio }) => {
	return (
		<div className="flex flex-col md:flex-row md:items-start  items-center bg-accent-shd2 break-word py-6 px-4 sm:pl-4 sm:pr-16 lg:w-4/12 rounded-3xl">
			<img
				src={src}
				alt={alt}
				className="w-12 h-12 rounded-full  object-cover md:mx-4"
			/>
			<p className=" flex items-center md:items-start flex-col mt-2 ">
				<span className="text-white text-3xl leading-8 mb-2">{author}</span>
				<span className="text-white text-opacity-40">{bio}</span>
			</p>
		</div>
	);
};
export default ProfileBio;
