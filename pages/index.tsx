import Head from "next/head";
import Hero from "../components/home-page/hero"
import FeaturedPosts from "../components/home-page/featured-posts"
import { Post } from "../utils/types";
import { getFeaturedPosts } from "../utils/post-util";
function HomePage(props: {
  posts: Post[]
}) {
  const {posts} = props
  return (
    <>
      <Head>
          <title> Roger Blog </title>
          <meta
            name='description'
            content='I post about programming and web development'
          />
      </Head>
      <Hero />
      <FeaturedPosts posts={posts} />
    </>
  )
}

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts()

  return {
    props: {
      posts: featuredPosts
    }
  }
}

export default HomePage