import {Si42} from "react-icons/si";

export type School = {
	name: JSX.Element;
	start_year: string;
	end_year: string;
	link: string;
	major: string;

	id: string;
};

export const Schools: School[] = [
	{
		name: <span className="hover:text-blue-700">ESCP <span className="text-sm">↗️</span></span>,
		start_year: "2023",
		end_year: "2024",
		link: "https://escp.eu/",
		major: "Business School - Option Entrepreneurship",

		id: "42"
	},
	{
		name: <span className="hover:text-blue-700"><Si42 className='inline'/> Paris <span className="text-sm">↗️</span></span>,
		start_year: "2021",
		end_year: "2024",
		link: "https://www.42.fr/",
		major: "Computer Science",

		id: "42"
	},
	{
		name: <span className="hover:text-blue-700">CNAM <span className="text-sm">↗️</span></span>,
		start_year: "2020",
		end_year: "2021",
		link: "https://www.cnam.fr/",
		major: "Computer Science",

		id: "cnam"
	}
];
