const Header = ({ hero, alt, title }) => {
	return (
		<div>
			<div className="aspect-w-2 aspect-h-1">
				<img
					src={hero}
					alt={alt}
					className="rounded-2xl object-cover object-top w-full"
				/>
			</div>
			<h1 className="font-bold text-4xl leading-10 text-white  my-4 sm:my-6 md:my-8 lg:my-16">
				{title}
			</h1>
		</div>
	);
};
export default Header;
