import ArticleClient from "./article-client";
import { mockArticlesDetailed } from "@/lib/mock-data-enhanced";

export async function generateStaticParams() {
  return mockArticlesDetailed.map((article) => ({ slug: article.slug }));
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  return <ArticleClient slug={params.slug} />;
}
