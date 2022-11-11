// ./articles.gql
export interface GeneralQuery {
    articles: ArticlesQuery,
    projects: ProjectsQuery,
}
export interface ArticlesQuery {
    articles: Array<ArticleQueryItem>
}
export interface ArticleQuery {
    article: ArticleQueryItem
}
interface ArticleQueryItem {
    id: number,
    title: string
}

export interface ProjectsQuery {
    projects: Array<ProjectQueryItem>
}
export interface ProjectQuery {
    project: ProjectQueryItem
}
interface ProjectQueryItem {
    id: number,
    title: string
    gallery: {
        id: string
        url: string
    }
}