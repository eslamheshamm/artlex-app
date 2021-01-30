const Img = ({ src, alt }) => {
	return (
		<div>
			<img src={src} alt={alt} className="object-cover w-full rounded-xl " />
		</div>
	);
};

export default Img;
