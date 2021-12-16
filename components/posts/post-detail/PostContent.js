import ReactMarkdown from 'react-markdown';
import Image from 'next/image';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import atomDark from 'react-syntax-highlighter/dist/cjs/styles/prism/atom-dark';
import js from 'react-syntax-highlighter/dist/cjs/languages/prism/javascript';
import css from 'react-syntax-highlighter/dist/cjs/languages/prism/css';
import csharp from 'react-syntax-highlighter/dist/cjs/languages/prism/csharp';
import cpp from 'react-syntax-highlighter/dist/cjs/languages/prism/cpp';

import PostHeader from './PostHeader';
import classes from './PostContent.module.css';

SyntaxHighlighter.registerLanguage('js', js);
SyntaxHighlighter.registerLanguage('css', css);
SyntaxHighlighter.registerLanguage('csharp', csharp);
SyntaxHighlighter.registerLanguage('cpp', cpp);

const DUMMY_POST = {
	title: 'Getting Started with VR in Unity',
	image: 'getting-started-vr.png',
	content: '# This is a first post',
	date: '2021-12-20',
	slug: 'getting-started-with-vr-in-unity1',
};

const PostContent = (props) => {
	const { post } = props;

	const imagePath = `/images/posts/${post.slug}/${post.image}`;

	const customRenderers = {
		// img(image) {
		// 	return (
		// 		<Image
		// 			src={`/images/posts/${post.slug}/${image.src}`}
		// 			alt={image.alt}
		// 			width={600}
		// 			height={300}
		// 		/>
		// 	);
		// },
		p(paragraph) {
			const { node } = paragraph;

			if (node.children[0].tagName === 'img') {
				const image = node.children[0];

				return (
					<div className={classes.image}>
						<Image
							src={`/images/posts/${post.slug}/${image.properties.src}`}
							alt={image.properties.alt}
							width={600}
							height={300}
						/>
					</div>
				);
			}

			return <p>{paragraph.children}</p>;
		},
		code(code) {
			const { className, children } = code;
			const language = className.split('-')[1];

			return (
				<SyntaxHighlighter
					style={atomDark}
					language={language}
					children={children}
				/>
			);
		},
	};

	return (
		<article className={classes.content}>
			<PostHeader title={post.title} image={imagePath} />
			<ReactMarkdown components={customRenderers}>{post.content}</ReactMarkdown>
		</article>
	);
};

export default PostContent;
