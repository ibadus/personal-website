import {
	SiAmazonaws,
	SiChakraui,
	SiDebian,
	SiDiscord,
	SiDocker,
	SiGithub,
	SiGitlab,
	SiGo,
	SiHeroku,
	SiJavascript,
	SiMongodb,
	SiNextdotjs,
	SiNodedotjs,
	SiPostgresql,
	SiPython,
	SiReact,
	SiRedis,
	SiSentry,
	SiShopify,
	SiStripe,
	SiTypescript,
	SiVercel,
} from 'react-icons/si';
import {ListItemToolTip} from '../list-item';

export type Work = {
	banner: string;

	company: string;
	start_year: number;
	end_year: number;

	position: string;

	short_description: string;
	long_description: JSX.Element;

	technologies: JSX.Element[];
};

// Sorted from newest to oldest
export const Works: Work[] = [
	{
		banner: '/experiences/banner/daisy.png',

		company: 'Daisy Labs',
		start_year: 2022,
		end_year: 2023,

		position: 'Founder',

		short_description: 'Software, automating online purchases on websites.',
		long_description: (
			<p>
				I designed and implemented a large-scale cross-platform desktop application using Golang, as well as a web dashboard using React and Next.js.
				I also developed and maintained various backend services to support these applications.
				Through my efforts, I coded over 200,000 lines of code to the production environment, delivering a robust and efficient solution.
				I took a proactive approach to security, implementing measures to block hackers and ensuring the safety of sensitive data.
				Aswell as protecting the application, I also reverse engineered a lot of websites in order to fully automate checkout processes.
			</p>
		),

		technologies: [
			<ListItemToolTip key="Golang" icon={SiGo} text="Golang" />,
			<ListItemToolTip key="JavaScript" icon={SiJavascript} text="JavaScript" />,
			<ListItemToolTip key="Node.JS" icon={SiNodedotjs} text="Node.JS" />,
			<ListItemToolTip key="Docker" icon={SiDocker} text="Docker" />,

			<ListItemToolTip key="TypeScript" icon={SiTypescript} text="TypeScript" />,
			<ListItemToolTip key="React" icon={SiReact} text="React" />,
			<ListItemToolTip key="Next.JS" icon={SiNextdotjs} text="Next.JS" />,
			// TODO: add mantine-ui

			<ListItemToolTip key="Stripe" icon={SiStripe} text="Stripe" />,
			<ListItemToolTip key="Discord" icon={SiDiscord} text="Discord" />,
			<ListItemToolTip key="Sentry" icon={SiSentry} text="Sentry" />,

			<ListItemToolTip key="AWS" icon={SiAmazonaws} text="AWS" />,
			<ListItemToolTip key="Vercel" icon={SiVercel} text="Vercel" />,
			<ListItemToolTip key="Heroku" icon={SiHeroku} text="Heroku" />,
			<ListItemToolTip key="Linux" icon={SiDebian} text="Linux" />,

			<ListItemToolTip key="Mongodb" icon={SiMongodb} text="Mongodb" />,
			<ListItemToolTip key="Postgres" icon={SiPostgresql} text="Postgres" />,
			<ListItemToolTip key="Redis" icon={SiRedis} text="Redis" />,

			<ListItemToolTip key="Github" icon={SiGithub} text="Github" />,
		],
	},
	{
		banner: '/experiences/banner/heko.png',

		company: 'Heko',
		start_year: 2022,
		end_year: 2022,

		position: 'Software Engineer',

		short_description: 'Software, automating payments.',
		long_description: (
			<p>
				I rewrote a Python desktop application to Golang.
				I also developed various backend services to support this application aswell as many new application features.
				On top of that I implemented new developpment practices, such as unit testing, coding style, uniform commit messages and automatic releases.
			</p>
		),

		technologies: [
			<ListItemToolTip key="Golang" icon={SiGo} text="Golang" />,
			<ListItemToolTip key="Discord" icon={SiDiscord} text="Discord" />,
			<ListItemToolTip key="Python" icon={SiPython} text="Python" />,

			<ListItemToolTip key="Heroku" icon={SiHeroku} text="Heroku" />,

			<ListItemToolTip key="Github" icon={SiGithub} text="Github" />,
		],
	},
	{
		banner: '/experiences/banner/reversretail.jpeg',

		company: 'Revers Retail',
		start_year: 2022,
		end_year: 2022,

		position: 'Co-Founder',

		short_description: 'Membership based e-commerce website, selling retail priced high speed proxies.',
		long_description: (
			<p>
				I created a fully customized membership based e-commerce website using React, Next.js and Stripe.
				Including an user dashboard with unseen features with an UI/UX focus.
			</p>
		),

		technologies: [
			<ListItemToolTip key="JavaScript" icon={SiJavascript} text="JavaScript" />,
			<ListItemToolTip key="Node.JS" icon={SiNodedotjs} text="Node.JS" />,
			<ListItemToolTip key="TypeScript" icon={SiTypescript} text="TypeScript" />,
			<ListItemToolTip key="React" icon={SiReact} text="React" />,
			<ListItemToolTip key="Next.JS" icon={SiNextdotjs} text="Next.JS" />,
			// TODO: add next-ui

			<ListItemToolTip key="Stripe" icon={SiStripe} text="Stripe" />,
			<ListItemToolTip key="Discord" icon={SiDiscord} text="Discord" />,

			<ListItemToolTip key="Vercel" icon={SiVercel} text="Vercel" />,
			<ListItemToolTip key="Heroku" icon={SiHeroku} text="Heroku" />,

			<ListItemToolTip key="Mongodb" icon={SiMongodb} text="Mongodb" />,

			<ListItemToolTip key="Github" icon={SiGithub} text="Github" />,
		],
	},
	{
		banner: '/experiences/banner/rageproxies.png',

		company: 'Rage Proxies',
		start_year: 2021,
		end_year: 2022,

		position: 'Co-Founder',

		short_description: 'E-commerce website, selling high speed proxies.',
		long_description: (
			<p>
				I created and designed a Shopify store, with automatic order fulfillment through Discord for digital products.
				Alongside I created a Discord bot allowing our clients to consult their product and manage their orders.
			</p>
		),

		technologies: [
			<ListItemToolTip key="Shopify" icon={SiShopify} text="Shopify" />,

			<ListItemToolTip key="JavaScript" icon={SiJavascript} text="JavaScript" />,
			<ListItemToolTip key="Node.JS" icon={SiNodedotjs} text="Node.JS" />,
			<ListItemToolTip key="TypeScript" icon={SiTypescript} text="TypeScript" />,
			<ListItemToolTip key="React" icon={SiReact} text="React" />,
			<ListItemToolTip key="Chakra-UI" icon={SiChakraui} text="Chakra-UI" />,

			<ListItemToolTip key="Stripe" icon={SiStripe} text="Stripe" />,
			<ListItemToolTip key="Discord" icon={SiDiscord} text="Discord" />,

			<ListItemToolTip key="Vercel" icon={SiVercel} text="Vercel" />,
			<ListItemToolTip key="Heroku" icon={SiHeroku} text="Heroku" />,

			<ListItemToolTip key="Mongodb" icon={SiMongodb} text="Mongodb" />,

			<ListItemToolTip key="Github" icon={SiGithub} text="Github" />,
		],
	},
	{
		banner: '/experiences/banner/blazeaio.png',

		company: 'Blaze AIO',
		start_year: 2021,
		end_year: 2021,

		position: 'Software Engineer / Reverse Engineer',

		short_description: 'Software, automating online purchases on websites.',
		long_description: (
			<p>
				I developed a new module automating the checkout process on a high security website.
				While helping the team to improve the software's stability and performance.
				I also searched and found web bypasses, allowing me to bypass the security of the website in order to improve the module efficiency.
			</p>
		),

		technologies: [
			<ListItemToolTip key="JavaScript" icon={SiJavascript} text="JavaScript" />,
			<ListItemToolTip key="Node.JS" icon={SiNodedotjs} text="Node.JS" />,

			<ListItemToolTip key="Heroku" icon={SiHeroku} text="Heroku" />,

			<ListItemToolTip key="Github" icon={SiGithub} text="Github" />,
		],
	},
	{
		banner: '/experiences/banner/soldout.png',

		company: 'Sold Out',
		start_year: 2020,
		end_year: 2021,

		position: 'Software Engineer / Reverse Engineer',

		short_description: 'Startup, helping people to get their dream sneakers during releases.',
		long_description: (
			<p>
				I made a startup switch from Python to Golang for their high performance software.
				Alongside other developpers, we created a brand new architecture, allowing us to scale the software to support millions of users.
				We also searched and found many web security flaws, allowing us to bypass the security of many websites in order to improve the software's efficiency.
			</p>
		),

		technologies: [
			<ListItemToolTip key="Golang" icon={SiGo} text="Golang" />,
			<ListItemToolTip key="JavaScript" icon={SiJavascript} text="JavaScript" />,
			<ListItemToolTip key="Python" icon={SiPython} text="Python" />,

			<ListItemToolTip key="Docker" icon={SiDocker} text="Docker" />,

			<ListItemToolTip key="Mongodb" icon={SiMongodb} text="Mongodb" />,

			<ListItemToolTip key="Github" icon={SiGithub} text="Github" />,
		],
	},
	{
		banner: '/experiences/banner/ormyx.jpeg',

		company: 'Ormyx',
		start_year: 2020,
		end_year: 2021,

		position: 'Software Engineer / Reverse Engineer',

		short_description: 'Software, automating online purchases on websites.',
		long_description: (
			<p>
				I helped the team to improve the software's stability and performance.
				I also developped new features, to improve the software's efficiency and value for their users.
			</p>
		),

		technologies: [
			<ListItemToolTip key="JavaScript" icon={SiJavascript} text="JavaScript" />,
			<ListItemToolTip key="Node.JS" icon={SiNodedotjs} text="Node.JS" />,

			<ListItemToolTip key="Github" icon={SiGithub} text="Github" />,
			<ListItemToolTip key="Gitlab" icon={SiGitlab} text="Gitlab" />,
		],
	},
];
