import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { PostMarkdownData } from './types'

const postsDirectory = path.join(process.cwd(), 'posts')

export function getPostsFiles() {
  return fs.readdirSync(postsDirectory)
}

export function getPostData(postIdentifier: string) {
  const slug = postIdentifier.replace(/\.md$/, '')
  const filePath = path.join(postsDirectory, `${slug}.md`)
  const fileContent = fs.readFileSync(filePath, 'utf-8')
  const { data, content } = matter(fileContent)
  const postData: PostMarkdownData & {
    slug: string
    content: string
  } = {
    slug,
    content,
    ...(data as PostMarkdownData),
  }
  return postData
}

export function getAllPosts() {
  const postFiles = getPostsFiles()

  const postData = postFiles
    .map((postFile) => {
      return getPostData(postFile)
    })
    .sort((a, b) => (a.date > b.date ? -1 : 1))

  return postData
}

export function getFeaturedPosts() {
  const allPosts = getAllPosts()

  const featuredPosts = allPosts.filter((post) => post.isFeatured)
  return featuredPosts
}
