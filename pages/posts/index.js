import { Fragment } from 'react';
import Head from 'next/head';
import AllPosts from '../../components/posts/AllPosts';
import { getAllPosts } from '../../lib/posts-util';

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

const AllPostsPage = (props) => {
	return (
		<Fragment>
			<Head>
				<title>All Posts</title>
				<meta
					name="description"
					content="A list of all programming related tutorials and posts"
				/>
			</Head>
			<AllPosts posts={props.posts} />
		</Fragment>
	);
};

export const getStaticProps = () => {
	const allPosts = getAllPosts();

	return {
		props: {
			posts: allPosts,
		},
	};
};

export default AllPostsPage;
