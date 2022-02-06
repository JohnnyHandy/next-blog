export type Post = {
    title: string
    image: string
    excerpt?: string
    date: string
    slug: string
    content?: string
    isFeatured?: boolean
}

export type PostMarkdownData = {
    title: string
    date: string
    image: string
    excerpt: string
    isFeatured: boolean
}