import { Link, routes } from '@redwoodjs/router'
import { Post } from 'types/graphql'

interface Props {
  article: Post
}

const Article = ({ article }: Props) => {
  return (
    <article>
      <header>
        <h2>
          <Link to={routes.article({ id: article.id.toString() })}>
            {article.title}
          </Link>
        </h2>
      </header>
      <p>{article.body}</p>
      <div>Posted at: {article.createdAt}</div>
    </article>
  )
}

export default Article
