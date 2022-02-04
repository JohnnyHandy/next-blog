import classes from './featured-posts.module.css'

import PostsGrid from '../posts/posts-grid'
import { Post } from '../../utils/types'

function FeaturedPosts(props: {
    posts: Post[]
}) {
    const { posts } = props
    return(
        <section data-testid='featured-posts-section' className={classes.latest}>
            <h2>Featured Posts</h2>
            <PostsGrid posts={posts} />
        </section>
    )
}

export default FeaturedPosts