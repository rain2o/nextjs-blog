export interface PostsCollectionItem {
  id: string,
  date: string,
  title: string
}

export interface PostData extends PostsCollectionItem {
  contentHtml: string
}