import Image from 'next/image'
import Link from 'next/link'

import classes from './post-item.module.css'

import { Post } from '../../utils/types'

function PostItem(props: { post: Post }) {
  const {
    post: { title, image, excerpt, date, slug },
  } = props

  const formattedDate = new Date(date).toLocaleString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

  const imagePath = `/images/posts/${slug}/${image}`
  const linkPath = `/posts/${slug}`
  return (
    <li data-testid="post-item" className={classes.post}>
      <Link href={linkPath}>
        <a>
          <div className={classes.image}>
            <Image
              src={imagePath}
              alt={title}
              width={300}
              height={200}
              layout="responsive"
            />
          </div>
          <div className={classes.content}>
            <h3>{title}</h3>
            <time> {formattedDate} </time>
            <p>{excerpt}</p>
          </div>
        </a>
      </Link>
    </li>
  )
}

export default PostItem
