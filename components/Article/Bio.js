const ProfileBio = ({ src, alt, author, bio }) => {
	return (
		<div className="flex flex-col items-center bg-accent-shd2 break-word py-6 px-4 sm:pl-4 sm:pr-16 sm:w-96 rounded-3xl">
			<div>
				<img
					src={src}
					alt={alt}
					className="w-12 h-12 rounded-full  object-cover mx-4"
				/>
			</div>
			<p className=" flex items-center justify-center flex-col mt-2 ">
				<span className="text-white text-3xl leading-8 mb-2">{author}</span>
				<span className="text-white text-opacity-40">{bio}</span>
			</p>
		</div>
	);
};
export default ProfileBio;
