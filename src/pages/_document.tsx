import Document, {Head, Html, Main, NextScript} from 'next/document';

export default class IbadusDocument extends Document {
	render() {
		return (
			<Html lang="en">
				<Head>
					<meta charSet="utf-8" />
					<link
						rel="icon"
						type="image/png"
						href="https://avatars3.githubusercontent.com/u/50923352?s=460&v=4"
					/>
					<meta name="theme-color" content="#ffffff" />
					<meta
						name="description"
						content="ibadus's website"
					/>
					<link rel="preconnect" href="https://fonts.googleapis.com" />
					<link rel="preconnect" href="https://fonts.gstatic.com" />
					<link
						href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400&display=swap"
						rel="stylesheet"
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
					<script async src="/theme.js" />
				</body>
			</Html>
		);
	}
}
