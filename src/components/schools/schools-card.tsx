import type {School} from "./schools";

type school = {
	school: School;
};

export function ShcoolCard(props: school) {
	return (
		<div>
			<div className="inline-flex">
				<h3 className="block text-xl font-medium sm:text-xl md:text-2xl">
					{props.school.start_year} - {props.school.end_year}
				</h3>
				<span className="block text-xl font-medium sm:text-xl md:text-2xl px-2">
					·
				</span>
				<h3 className="text-xl font-semibold sm:text-xl md:text-2xl">
					<a target="_blank" rel="noreferrer" href={props.school.link} className="hover:decoration-blue-700">
						{props.school.name}
					</a>
				</h3>
			</div>
			<h2 className="block text-m font-normal sm:text-m md:text-l">
				{props.school.major}
			</h2>
		</div>
	);
}
