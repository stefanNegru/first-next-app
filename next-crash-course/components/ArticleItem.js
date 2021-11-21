import articleStyles from '../styles/Article.module.css'
import Link from 'next/dist/client/link'

export const ArticleItem = ({article}) => {
    return (
        <Link href="/article/[id]" as={`/article/${article.id}`}>
            <a className={articleStyles.card}>
                <h3>{article.title} &rarr;</h3>
                <p>{article.excerpt}</p>
            </a>
            
        </Link>
    )
}
