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
		name: <span><Si42 className='inline'/> Paris</span>,
		start_year: "2021",
		end_year: "current",
		link: "https://www.42.fr/",
		major: "Computer Science",

		id: "42"
	},
	{
		name: <span>CNAM</span>,
		start_year: "2020",
		end_year: "2021",
		link: "https://www.cnam.fr/",
		major: "Computer Science",

		id: "cnam"
	}
];
