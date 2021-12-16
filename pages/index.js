import { Fragment } from 'react';
import Head from 'next/head';
import Hero from '../components/home-page/Hero';
import FeaturedPosts from '../components/home-page/FeaturedPosts';
import { getFeaturedPosts } from '../lib/posts-util';

// const DUMMY_POSTS = [
// 	{
// 		title: 'Getting Started with VR in Unity',
// 		image: 'getting-started-vr.png',
// 		excerpt:
// 			'Your first steps into vr dev can be intimidating, but with these easy to follow instructions you will have your first app running on your headset in no time.',
// 		date: '2021-12-20',
// 		slug: 'getting-started-with-vr-in-unity1',
// 	},
// 	{
// 		title: 'Getting Started with VR in Unity',
// 		image: 'getting-started-vr.png',
// 		excerpt:
// 			'Your first steps into vr dev can be intimidating, but with these easy to follow instructions you will have your first app running on your headset in no time.',
// 		date: '2021-12-20',
// 		slug: 'getting-started-with-vr-in-unity2',
// 	},
// 	{
// 		title: 'Getting Started with VR in Unity',
// 		image: 'getting-started-vr.png',
// 		excerpt:
// 			'Your first steps into vr dev can be intimidating, but with these easy to follow instructions you will have your first app running on your headset in no time.',
// 		date: '2021-12-20',
// 		slug: 'getting-started-with-vr-in-unity3',
// 	},
// 	{
// 		title: 'Getting Started with VR in Unity',
// 		image: 'getting-started-vr.png',
// 		excerpt:
// 			'Your first steps into vr dev can be intimidating, but with these easy to follow instructions you will have your first app running on your headset in no time.',
// 		date: '2021-12-20',
// 		slug: 'getting-started-with-vr-in-unity4',
// 	},
// ];

const HomePage = (props) => {
	return (
		<Fragment>
			<Head>
				<title>Scott's Blog</title>
				<meta name="description" content="I post about xr dev topics" />
			</Head>
			<Hero />
			<FeaturedPosts posts={props.posts} />
		</Fragment>
	);
};

export const getStaticProps = () => {
	const featuredPosts = getFeaturedPosts();

	return {
		props: {
			posts: featuredPosts,
		},
	};
};

export default HomePage;
