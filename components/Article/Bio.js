const ProfileBio = ({ src, alt, author, about }) => {
	return (
		<>
			<div className="flex">
				<div className="flex  bg-accent-shd2 py-6 pl-4 pr-16 rounded-3xl">
					<div>
						<img
							src={src}
							alt={alt}
							className="w-12 h-12 rounded-full  object-cover mx-4"
						/>
					</div>
					<p className=" flex flex-col mt-2 w-72">
						<span className="text-white text-2xl mb-2">{author}</span>
						<span className="text-white text-opacity-40">{about}</span>
					</p>
				</div>
			</div>
		</>
	);
};
export default ProfileBio;
