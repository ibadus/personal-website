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

			<h3 className="block text-xl font-bold sm:text-2xl md:text-4xl">
				Education
			</h3>

			{Schools.map(school =>
				<ShcoolCard key={school.id} school={school}/>
			)}

			<h3 className="block text-xl font-bold sm:text-2xl md:text-4xl">
				Languages
			</h3>

			<div className='inline-flex'>
				<div className='mr-4'>
					<p className="flex text-l font-semibold sm:text-l md:text-xl">
						🇫🇷 French
					</p>
					<p className="flex text-m font-normal sm:text-m md:text-l">
						Native
					</p>
				</div>

				<div className='ml-4'>
					<p className="block text-l font-semibold sm:text-l md:text-xl">
						🇬🇧 English
					</p>
					<p className="block text-m font-normal sm:text-m md:text-l">
						Fluent
					</p>
				</div>
			</div>

			<h3 className="block text-xl font-bold sm:text-2xl md:text-4xl">
				Experiences
			</h3>

			{Works.map(work =>
				<WorkCard key={work.company} work={work}/>
			)}
		</div>
	);
}

export const getStaticProps: GetStaticProps<Props> = async () => ({props: {}});
