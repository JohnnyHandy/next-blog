import Head from "next/head"

import { getPostData, getPostsFiles } from "../../utils/post-util"
import PostContent from "../../components/posts/post-detail/post-content"
import { Post } from "../../utils/types"
import { GetStaticPropsContext } from "next"

function PostDetailsPage(props: {
    post: Post
}){
    const { post } = props
    return (
        <>
            <Head>
                <title>{post.title}</title>
                <meta name='description' content={post.excerpt} />
            </Head>
            <PostContent post={post} />
        </>
    )
}

export function getStaticProps(context: GetStaticPropsContext) {
    const slug = context?.params?.slug
    const postData = getPostData(slug as string)
    return {
        props: {
            post: postData
        },
        revalidate: 600
    }
}

export function getStaticPaths() {
    const postFileNames = getPostsFiles()

    const slugs = postFileNames.map(fileName => fileName.replace(/\.md$/, '')).map(slug => ({ params: { slug: slug } }));

    return {
        paths: slugs,
        fallback: true
    }
}

export default PostDetailsPage