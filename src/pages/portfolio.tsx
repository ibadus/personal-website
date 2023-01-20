import type {GetStaticProps} from 'next';
import {Schools} from '../components/schools/schools';
import {ShcoolCard} from '../components/schools/schools-card';
import {Works} from '../components/work/work';
import {WorkCard} from '../components/work/work-card';

type Props = {};

export default function Portfolio(props: Props) {
	return (
		<div className="space-y-8">
			<h1 className="block text-3xl font-bold sm:text-4xl md:text-6xl">
				Portfolio
			</h1>

			<h1 className="block text-xl font-bold sm:text-2xl md:text-4xl">
				Education
			</h1>

			{Schools.map(school =>
				<ShcoolCard key={school.id} school={school}/>
			)}

			<h1 className="block text-xl font-bold sm:text-2xl md:text-4xl">
				Languages
			</h1>

			<div>
				<div>
					<h1 className="block text-l font-semibold sm:text-l md:text-xl">
						🇫🇷 French
					</h1>
				</div>
				<h2 className="block text-m font-normal sm:text-m md:text-l">
					Native
				</h2>
			</div>

			<div>
				<div>
					<h1 className="block text-l font-semibold sm:text-l md:text-xl">
						🇬🇧 English
					</h1>
				</div>
				<h2 className="block text-m font-normal sm:text-m md:text-l">
					Fluent
				</h2>
			</div>

			<h1 className="block text-xl font-bold sm:text-2xl md:text-4xl">
				Experiences
			</h1>

			{Works.map(work =>
				<WorkCard key={work.company} work={work}/>
			)}
		</div>
	);
}

export const getStaticProps: GetStaticProps<Props> = async () => ({props: {}});
