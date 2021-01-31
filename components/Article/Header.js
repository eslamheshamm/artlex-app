import Img from "../elements/Img";
const Header = ({ imgLink, imgAlt, title }) => {
	return (
		<div>
			<div className="aspect-w-2 aspect-h-1">
				<img
					src={imgLink}
					alt={imgAlt}
					className="rounded-2xl objec-cover w-full"
				/>
			</div>
			<h1 className="font-bold text-4xl leading-10 text-white my-16 ">
				{title}
			</h1>
		</div>
	);
};
export default Header;
