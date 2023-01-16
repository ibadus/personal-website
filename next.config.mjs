// @ts-check

/** @type {import('next').NextConfig} */
const config = {
	reactStrictMode: true,

	swcMinify: true,

	images: {
		domains: [
			'source.unsplash.com',
			'lastfm.freetls.fastly.net',
			'i.scdn.co',
			'cdn.discordapp.com',
		],
	},

	async redirects() {
		return [
			{
				source: '/example',
				destination: 'https://example.com',
				permanent: true,
			},
		];
	},
};

export default config;
