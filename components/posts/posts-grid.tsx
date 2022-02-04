import PostItem from './post-item'
import classes from './posts-grid.module.css'

import { Post } from '../../utils/types'

function PostsGrid(props: {
    posts: Post[]
}) {

    const { posts } = props
    return(
        <ul data-testid='posts-grid' className={classes.grid}>
            {posts.map(post => <PostItem key={post.slug} post={post} />)}
        </ul>
    )
}

export default PostsGrid