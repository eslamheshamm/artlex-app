const Catagory = ({ category = "Art" }) => {
	return (
		<>
			<div>
				<button className="px-8 py-5  bg-primary bg-opacity-20 text-primary text-2xl font-bold leading-6 rounded-3xl focus:outline-none">
					<div className="flex justify-start ">
						<i className="mr-4">
							{category == "art"
								? Art
								: category == "creativity"
								? Creativity
								: category == "graphic design"
								? Graphic
								: category == "ux"
								? UXUI
								: category == "ui"
								? UXUI
								: category == "ux/ui"
								? UXUI
								: Art}
						</i>
						<span>{category}</span>
					</div>
				</button>
			</div>
		</>
	);
};
const UXUI = (
	<svg
		width="24"
		height="25"
		viewBox="0 0 24 25"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M3 5.5C3 4.96957 3.21071 4.46086 3.58579 4.08579C3.96086 3.71071 4.46957 3.5 5 3.5H8.28C8.48979 3.50016 8.69422 3.5663 8.86436 3.68905C9.03449 3.8118 9.1617 3.98496 9.228 4.184L10.726 8.677C10.8019 8.90534 10.7929 9.15339 10.7007 9.37564C10.6085 9.5979 10.4393 9.77945 10.224 9.887L7.967 11.017C9.07332 13.4655 11.0345 15.4267 13.483 16.533L14.613 14.276C14.7205 14.0607 14.9021 13.8915 15.1244 13.7993C15.3466 13.7071 15.5947 13.6981 15.823 13.774L20.316 15.272C20.5152 15.3383 20.6885 15.4657 20.8112 15.636C20.934 15.8064 21.0001 16.011 21 16.221V19.5C21 20.0304 20.7893 20.5391 20.4142 20.9142C20.0391 21.2893 19.5304 21.5 19 21.5H18C9.716 21.5 3 14.784 3 6.5V5.5Z"
			stroke="white"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
	</svg>
);
const Graphic = (
	<svg
		width="24"
		height="25"
		viewBox="0 0 24 25"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M3 9.5C3 8.96957 3.21071 8.46086 3.58579 8.08579C3.96086 7.71071 4.46957 7.5 5 7.5H5.93C6.25918 7.50005 6.58329 7.41884 6.87357 7.26359C7.16384 7.10834 7.4113 6.88383 7.594 6.61L8.406 5.39C8.5887 5.11617 8.83616 4.89166 9.12643 4.73641C9.41671 4.58116 9.74082 4.49995 10.07 4.5H13.93C14.2592 4.49995 14.5833 4.58116 14.8736 4.73641C15.1638 4.89166 15.4113 5.11617 15.594 5.39L16.406 6.61C16.5887 6.88383 16.8362 7.10834 17.1264 7.26359C17.4167 7.41884 17.7408 7.50005 18.07 7.5H19C19.5304 7.5 20.0391 7.71071 20.4142 8.08579C20.7893 8.46086 21 8.96957 21 9.5V18.5C21 19.0304 20.7893 19.5391 20.4142 19.9142C20.0391 20.2893 19.5304 20.5 19 20.5H5C4.46957 20.5 3.96086 20.2893 3.58579 19.9142C3.21071 19.5391 3 19.0304 3 18.5V9.5Z"
			stroke="white"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
		<path
			d="M15 13.5C15 14.2956 14.6839 15.0587 14.1213 15.6213C13.5587 16.1839 12.7956 16.5 12 16.5C11.2044 16.5 10.4413 16.1839 9.87868 15.6213C9.31607 15.0587 9 14.2956 9 13.5C9 12.7044 9.31607 11.9413 9.87868 11.3787C10.4413 10.8161 11.2044 10.5 12 10.5C12.7956 10.5 13.5587 10.8161 14.1213 11.3787C14.6839 11.9413 15 12.7044 15 13.5V13.5Z"
			stroke="white"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
	</svg>
);
const Art = (
	<svg
		width="24"
		height="25"
		viewBox="0 0 24 25"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			fill-rule="evenodd"
			clip-rule="evenodd"
			d="M6.00039 2.90002C6.31865 2.90002 6.62388 3.02645 6.84892 3.2515C7.07396 3.47654 7.20039 3.78176 7.20039 4.10002V5.30002H8.40039C8.71865 5.30002 9.02388 5.42645 9.24892 5.6515C9.47396 5.87654 9.60039 6.18176 9.60039 6.50002C9.60039 6.81828 9.47396 7.12351 9.24892 7.34855C9.02388 7.5736 8.71865 7.70002 8.40039 7.70002H7.20039V8.90002C7.20039 9.21828 7.07396 9.52351 6.84892 9.74855C6.62388 9.9736 6.31865 10.1 6.00039 10.1C5.68213 10.1 5.37691 9.9736 5.15186 9.74855C4.92682 9.52351 4.80039 9.21828 4.80039 8.90002V7.70002H3.60039C3.28213 7.70002 2.97691 7.5736 2.75186 7.34855C2.52682 7.12351 2.40039 6.81828 2.40039 6.50002C2.40039 6.18176 2.52682 5.87654 2.75186 5.6515C2.97691 5.42645 3.28213 5.30002 3.60039 5.30002H4.80039V4.10002C4.80039 3.78176 4.92682 3.47654 5.15186 3.2515C5.37691 3.02645 5.68213 2.90002 6.00039 2.90002ZM6.00039 14.9C6.31865 14.9 6.62388 15.0265 6.84892 15.2515C7.07396 15.4765 7.20039 15.7818 7.20039 16.1V17.3H8.40039C8.71865 17.3 9.02388 17.4265 9.24892 17.6515C9.47396 17.8765 9.60039 18.1818 9.60039 18.5C9.60039 18.8183 9.47396 19.1235 9.24892 19.3486C9.02388 19.5736 8.71865 19.7 8.40039 19.7H7.20039V20.9C7.20039 21.2183 7.07396 21.5235 6.84892 21.7486C6.62388 21.9736 6.31865 22.1 6.00039 22.1C5.68213 22.1 5.37691 21.9736 5.15186 21.7486C4.92682 21.5235 4.80039 21.2183 4.80039 20.9V19.7H3.60039C3.28213 19.7 2.97691 19.5736 2.75186 19.3486C2.52682 19.1235 2.40039 18.8183 2.40039 18.5C2.40039 18.1818 2.52682 17.8765 2.75186 17.6515C2.97691 17.4265 3.28213 17.3 3.60039 17.3H4.80039V16.1C4.80039 15.7818 4.92682 15.4765 5.15186 15.2515C5.37691 15.0265 5.68213 14.9 6.00039 14.9ZM14.4004 2.90002C14.6652 2.89994 14.9226 2.98746 15.1325 3.14895C15.3424 3.31044 15.493 3.53682 15.5608 3.79282L16.9756 9.14002L21.0004 11.4608C21.1828 11.5661 21.3343 11.7176 21.4396 11.9001C21.5449 12.0825 21.6003 12.2894 21.6003 12.5C21.6003 12.7107 21.5449 12.9176 21.4396 13.1C21.3343 13.2824 21.1828 13.4339 21.0004 13.5392L16.9756 15.8612L15.5596 21.2072C15.4917 21.463 15.3411 21.6891 15.1314 21.8504C14.9216 22.0118 14.6644 22.0992 14.3998 22.0992C14.1352 22.0992 13.878 22.0118 13.6682 21.8504C13.4585 21.6891 13.3079 21.463 13.24 21.2072L11.8252 15.86L7.80039 13.5392C7.61798 13.4339 7.46651 13.2824 7.3612 13.1C7.25589 12.9176 7.20044 12.7107 7.20044 12.5C7.20044 12.2894 7.25589 12.0825 7.3612 11.9001C7.46651 11.7176 7.61798 11.5661 7.80039 11.4608L11.8252 9.13882L13.2412 3.79282C13.3089 3.53702 13.4593 3.31078 13.669 3.14931C13.8786 2.98785 14.1358 2.9002 14.4004 2.90002Z"
			fill="#FF6C6C"
		/>
	</svg>
);
const Creativity = (
	<svg
		width="24"
		height="25"
		viewBox="0 0 24 25"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M17.6572 19.157C16.1569 20.6573 14.122 21.5002 12.0002 21.5002C9.87842 21.5002 7.84354 20.6573 6.34321 19.157C4.84288 17.6567 4 15.6218 4 13.5C4 11.3782 4.84288 9.34333 6.34321 7.843C6.34321 7.843 7.00021 9.5 9.00021 10.5C9.00021 8.5 9.50021 5.5 11.9862 3.5C14.0002 5.5 16.0902 6.277 17.6562 7.843C18.4004 8.58499 18.9905 9.46674 19.3928 10.4376C19.795 11.4084 20.0015 12.4491 20.0002 13.5C20.0016 14.5508 19.7953 15.5915 19.3932 16.5623C18.9912 17.5331 18.4012 18.4149 17.6572 19.157Z"
			stroke="white"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
		<path
			d="M9.879 16.621C10.2274 16.9695 10.6563 17.2268 11.1277 17.3702C11.5991 17.5135 12.0986 17.5386 12.5821 17.4431C13.0655 17.3476 13.5179 17.1345 13.8994 16.8226C14.2809 16.5107 14.5797 16.1096 14.7694 15.6548C14.9591 15.2001 15.0338 14.7056 14.987 14.215C14.9402 13.7245 14.7733 13.253 14.5011 12.8423C14.2288 12.4316 13.8595 12.0943 13.4259 11.8602C12.9923 11.6261 12.5078 11.5024 12.015 11.5L11 14.5H9C9 15.268 9.293 16.036 9.879 16.621Z"
			stroke="white"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
	</svg>
);
export default Catagory;
