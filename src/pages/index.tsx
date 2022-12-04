import {AnimatePresence, motion} from 'framer-motion';
import type {GetStaticProps} from 'next';
import {Fragment, useReducer} from 'react';
import {GiSkateboard} from 'react-icons/gi';
import {HiOutlineLocationMarker} from 'react-icons/hi';
import {
	Si42,
	SiAmazonaws,
	SiC,
	SiChakraui,
	SiCplusplus,
	SiCss3,
	SiDocker,
	SiFigma,
	SiGit,
	SiGithub,
	SiGithubactions,
	SiGnubash,
	SiGo,
	SiGooglecloud,
	SiHeroku,
	SiHtml5,
	SiJava,
	SiJetbrains,
	SiKubernetes,
	SiLinux,
	SiMongodb,
	SiNextdotjs as SiNextDotJs,
	SiNodedotjs as SiNodeDotJs,
	SiPostcss,
	SiPostgresql,
	SiPython,
	SiReact,
	SiRedis,
	SiSentry,
	SiShell,
	SiStripe,
	SiTailwindcss,
	SiTwitter,
	SiTypescript,
	SiVercel,
	SiVisualstudiocode,
	SiWireshark,
} from 'react-icons/si';
import {ListItem} from '../components/list-item';
import type {PinnedRepo} from '../hooks/github';
import {useGitHubPinnedRepos} from '../hooks/github';
import {age} from '../util/time';

type Props = {
	pinnedRepos: PinnedRepo[];
};

export default function Index(props: Props) {
	const {data: projects = props.pinnedRepos} = useGitHubPinnedRepos('ibadus');

	return (
		<>
			<div className="space-y-4">
				<div className="flex items-center space-x-3">
					<a
						href="https://github.com/ibadus"
						target="_blank"
						rel="noreferrer"
						aria-label="GitHub Profile"
					>
						<SiGithub className="h-7 w-7" />
						<span className="sr-only">GitHub Profile</span>
					</a>

					<a
						href="https://twitter.com/ibadus_"
						target="_blank"
						rel="noreferrer"
						aria-label="Twitter Profile"
					>
						<SiTwitter className="h-7 w-7" />
						<span className="sr-only">Twitter Profile</span>
					</a>

					<p className="inline-flex items-center space-x-2">
						<a
							target="_blank"
							href="https://www.google.com/maps/search/Paris"
							rel="noreferrer"
							className="flex items-center rounded-full bg-neutral-200 px-2 pr-3 text-neutral-600 no-underline transition-colors dark:bg-neutral-700 dark:text-white dark:text-opacity-50 dark:hover:bg-neutral-800"
						>
							<span>
								<HiOutlineLocationMarker className="inline dark:text-white relative bottom-0.5" />
								&nbsp;
							</span>

							<span className="text-neutral-600 dark:text-white">
								Paris
								&nbsp;
							</span>

							<span className="-mb-0.5 ml-1 block h-[6px] w-[6px] animate-pulse rounded-full bg-neutral-600 dark:bg-white" />
						</a>
					</p>
				</div>

				<h1 className="text-3xl font-bold sm:text-4xl md:text-6xl">
					Hey, I'm{' '}
					<span className="text-neutral-500 dark:text-neutral-400">ibadus</span>
				</h1>

				<p className="opacity-80">
					I'm a <span suppressHydrationWarning>~{age.toPrecision(4)}</span> year
					old entrepreneur that loves software ingeneering. I'm passionate about
					entrepreneurship, and building cool softwares/websites. I spend most
					of my time improving myself and learning new things.
				</p>
			</div>

			<div className="space-y-4">
				<h1 className="text-2xl font-bold sm:text-3xl">What do I do? 💭</h1>
				<p className="opacity-80">
					Currently I'm working on{' '}
					<a href="https://twitter.com/LabsDaisy" target="_blank" rel="noreferrer">
						DaisyLabs
					</a>
					, a software that automates online purchases for limited products especially
					sneakers. Meaning I spend a lot of time doing web/software cybersecurity and software ingeneering.
					<br />
					I'm currently studying at{' '}
					<a href="https://42.fr/en" target="_blank" rel="noreferrer">
						<Si42 className='inline'/> Paris
					</a>{', '}
					an IT school fully in P2P without teacher nor classes.
					<br />
					I also sometimes open source some stuff (but most of my repos are private).
				</p>

				<div className="grid auto-cols-max grid-cols-1 gap-1 sm:grid-cols-2 sm:gap-3">
					{projects.map(project => (
						<ProjectCard key={project.repo} repo={project} />
					))}
				</div>
			</div>

			<div className="space-y-4">
				<h1 className="text-2xl font-bold sm:text-3xl">Technologies 💻</h1>

				<p className="opacity-80">
					Here are some technologies that I use.
					<br />
					I use macOS btw.
				</p>

				<ul className="grid grid-cols-3 gap-4 sm:grid-cols-4">
					<ListItem icon={SiGo} text="Golang" />
					<ListItem icon={SiTypescript} text="TypeScript" />
					<ListItem icon={SiPython} text="Python" />
					<ListItem icon={SiC} text="C" />
					<ListItem icon={SiCplusplus} text="C++" />
					<ListItem icon={SiGnubash} text="Bash" />
					<ListItem icon={SiNodeDotJs} text="Node.js" />
					<ListItem icon={SiMongodb} text="Mongo" />
					<ListItem icon={SiPostgresql} text="Postgres" />
					<ListItem icon={SiRedis} text="Redis" />
					<ListItem icon={SiHtml5} text="HTML" />
					<ListItem icon={SiCss3} text="CSS" />
					<ListItem icon={SiReact} text="React" />
					<ListItem icon={SiNextDotJs} text="Next.js" />
					<ListItem icon={SiTailwindcss} text="Tailwind" />
					<ListItem icon={SiChakraui} text="Chakra UI" />
					<ListItem icon={SiDocker} text="Docker" />
					<ListItem icon={SiKubernetes} text="Kubernetes" />
					<ListItem icon={SiAmazonaws} text="AWS" />
					<ListItem icon={SiGooglecloud} text="GCP" />
					<ListItem icon={SiVercel} text="Vercel" />
					<ListItem icon={SiHeroku} text="Heroku" />
					<ListItem icon={SiLinux} text="Linux" />
					<ListItem icon={SiGit} text="Git" />
					<ListItem icon={SiGithub} text="Github" />
					<ListItem icon={SiGithubactions} text="Github Actions" />
					<ListItem icon={SiStripe} text="Stripe" />
					<ListItem icon={SiSentry} text="Sentry" />
					<ListItem icon={SiVisualstudiocode} text="VSCode" />
					<ListItem icon={SiJetbrains} text="Jetbrains IDE" />
					<ListItem icon={SiFigma} text="Figma" />
					<ListItem icon={SiWireshark} text="Wireshark" />
				</ul>
			</div>
		</>
	);
}

function ProjectCard({repo: project}: {repo: PinnedRepo}) {
	const [isOpen, toggle] = useReducer(x => !x, false);

	return (
		<motion.div
			animate={{height: isOpen ? 'auto' : '60px'}}
			className="relative flex flex-col overflow-hidden rounded-md border-white/10 bg-gradient-to-tr from-neutral-100 to-neutral-700/5 text-neutral-900/80 no-underline dark:border dark:from-white/5 dark:to-white/5 dark:text-neutral-100 dark:hover:bg-white/10 md:rounded-lg"
		>
			<button
				type="button"
				className="flex cursor-pointer select-none items-center space-x-2 border-b border-white/10 px-5 text-lg font-bold focus:outline-none"
				onClick={toggle}
			>
				<div className="flex flex-1 items-center space-x-2 text-left">
					<span className="my-auto py-5 leading-none">{project.repo}</span>

					<span className="flex items-center space-x-3 text-xs">
						<span className="space-x-1">
							<span>⭐</span>
							<span>{project.stars}</span>
						</span>

						<span className="space-x-1">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="inline h-4 w-4"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
								/>
							</svg>
							<span>{project.forks}</span>
						</span>
					</span>
				</div>
				<div>
					<motion.div
						className="rounded-full bg-white/0 p-1 hover:bg-white/10"
						animate={{rotate: isOpen ? 90 : 0}}
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-5 w-5"
							viewBox="0 0 20 20"
							fill="currentColor"
						>
							<path
								fillRule="evenodd"
								d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
								clipRule="evenodd"
							/>
						</svg>
					</motion.div>
				</div>
			</button>

			<AnimatePresence>
				{isOpen && (
					<motion.div
						initial={{opacity: 0}}
						animate={{opacity: 1}}
						exit={{opacity: 0}}
						className="flex h-full"
					>
						<div className="flex flex-col space-y-4 py-4 px-5">
							<p className="flex-1">{project.description}</p>

							<div>
								<a
									href={`https://github.com/${project.owner}/${project.repo}`}
									target="_blank"
									rel="noreferrer"
									className="inline-flex select-none items-center space-x-2 rounded-full bg-neutral-700 py-2 px-6 text-white no-underline transition-transform duration-500 hover:scale-95 dark:bg-white/10"
								>
									<span>View Project</span>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-6 w-6"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
										/>
									</svg>
								</a>
							</div>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</motion.div>
	);
}

export const getStaticProps: GetStaticProps<Props> = async function () {
	const pinnedRepos = await fetch(
		'https://gh-pinned.nxl.sh/api/user/ibadus',
	).then(async response => response.json() as Promise<PinnedRepo[]>);

	return {
		props: {pinnedRepos},
		revalidate: 120,
	};
};
