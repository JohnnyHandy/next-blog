import Head from 'next/head'
import { getAllPosts } from '../../utils/post-util'
import PostsGrid from '../../components/posts/posts-grid'
import { Post } from '../../utils/types'
import classes from './all-posts.module.css'

function AllPostsPage(props: { posts: Post[] }) {
  const { posts } = props
  return (
    <>
      <Head>
        <title>All my Posts</title>
        <meta
          name="description"
          content="A list of all programming-related tutorials and posts"
        />
      </Head>
      <section data-testid="all-posts-section" className={classes.posts}>
        <h1>All posts</h1>
        <PostsGrid posts={posts} />
      </section>
    </>
  )
}

export function getStaticProps() {
  const allPosts = getAllPosts()
  return {
    props: {
      posts: allPosts,
    },
  }
}

export default AllPostsPage
