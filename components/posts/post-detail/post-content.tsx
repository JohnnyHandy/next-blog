import PostHeader from './post-header'
import ReactMarkdown from 'react-markdown'
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter'
import { atomDark } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import js from 'react-syntax-highlighter/dist/cjs/languages/prism/javascript'
import css from 'react-syntax-highlighter/dist/cjs/languages/prism/css'

import classes from './post-content.module.css'
import { Post } from '../../../utils/types'
import Image from 'next/image'

SyntaxHighlighter.registerLanguage('js', js)
SyntaxHighlighter.registerLanguage('css', css)

function PostContent(props: { post: Post }) {
  const { post } = props
  const imagePath = `/images/posts/${post?.slug}/${post?.image}`
  const customRenderers = {
    image(image: { alt: string; src: string }) {
      return (
        <Image
          src={`/images/posts/${post?.slug}/${image.src}`}
          alt={image.alt}
          width={600}
          height={300}
        />
      )
    },
    code(code: { language: string; value: string }) {
      const { language, value } = code
      return (
        <SyntaxHighlighter
          language={language}
          // eslint-disable-next-line react/no-children-prop
          children={value}
          style={atomDark}
        />
      )
    },
  }
  return (
    <article className={classes.content} data-testid="post-content">
      <PostHeader title={post?.title} image={imagePath} />
      <ReactMarkdown renderers={customRenderers}>
        {post?.content as string}
      </ReactMarkdown>
    </article>
  )
}

export default PostContent
