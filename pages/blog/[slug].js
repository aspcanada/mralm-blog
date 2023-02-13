import { useRouter } from 'next/router'
import Head from 'next/head'
import _404Page from '../404'
import Container from '../../components/container'
import PostBody from '../../components/blog/post-body'
import MoreStories from '../../components/blog/more-stories'
import Header from '../../components/header'
import PostHeader from '../../components/blog/post-header'
import SectionSeparator from '../../components/blog/section-separator'
import Layout from '../../components/layout'
import { getAllPostsWithSlug, getPostAndMorePosts } from '../../lib/api'
import PostTitle from '../../components/blog/post-title'

export default function PostPage({ post, morePosts, preview }) {
  const router = useRouter()

  if (!router.isFallback && !post) {
    return <_404Page />
  }

  return (
    <Layout preview={preview}>
      <Container>
        <Header />
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article>
              <Head>
                <title>{post.title} | Mr Arms Length Mortgage</title>
                <meta property="og:image" content={post.coverImage.url} />
              </Head>
              <PostHeader
                title={post.title}
                coverImage={post.coverImage}
                date={post.date}
                author={post.author}
              />
              <PostBody content={post.content} />
            </article>
            <SectionSeparator />
            {morePosts && morePosts.length > 0 && (
              <MoreStories posts={morePosts} />
            )}
          </>
        )}
      </Container>
    </Layout>
  )
}

export async function getStaticProps({ params, preview = false }) {
  const data = await getPostAndMorePosts(params.slug, preview)

  return {
    props: {
      preview,
      post: data?.post ?? null,
      morePosts: data?.morePosts ?? null,
    },
  }
}

export async function getStaticPaths() {
  const allPosts = await getAllPostsWithSlug()
  return {
    paths: allPosts?.map(({ slug }) => `/blog/${slug}`) ?? [],
    fallback: true,
  }
}
