import Hero from "../components/home-page/hero"
import FeaturedPosts from "../components/home-page/featured-posts"
import { Post } from "../utils/types";
function HomePage() {
  const DUMMY_POSTS = [
    {
      title: 'Getting started with GraphQL',
      image: 'graphql.png',
      excerpt: 'GraphQL is a new layer of data that came to revolutionize web\'s development and user experience',
      date: '2022-02-10',
      slug: 'getting-started-with-graphql'
    }
  ] as Post[];
  return (
    <>
      <Hero />
      <FeaturedPosts posts={DUMMY_POSTS} />
    </>
  )
}

export default HomePage