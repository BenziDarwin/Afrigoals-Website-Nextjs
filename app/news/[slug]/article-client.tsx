"use client";

import { Navigation } from "@/components/landing/navigation";
import { Footer } from "@/components/landing/footer";
import { mockArticlesDetailed } from "@/lib/mock-data-enhanced";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import { format } from "date-fns";
import { useRouter } from "next/navigation";
import ReactMarkdown from "react-markdown";
import { ArticleLikes } from "@/components/news/article-likes";
import { ArticleComments } from "@/components/news/article-comments";

export default function ArticleClient({ slug }: { slug: string }) {
  const router = useRouter();
  const article = mockArticlesDetailed.find((a) => a.slug === slug);

  if (!article) {
    return (
      <div className="min-h-screen bg-gray-50 text-gray-900 flex items-center justify-center">
        Article not found
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-6 max-w-4xl">
          <button
            onClick={() => router.back()}
            className="flex items-center text-gray-500 hover:text-gray-900 mb-8 transition-colors"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to News
          </button>

          <article className="animate-in fade-in-50 slide-in-from-bottom-5 duration-700">
            <div className="mb-8">
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge className="bg-primary-500 capitalize text-white">
                  {article.category.replace("_", " ")}
                </Badge>
                {article.tags?.map((tag, index) => (
                  <Badge
                    key={index}
                    variant="outline"
                    className="border-gray-300 text-gray-700 hover:border-primary-500 hover:text-primary-500 transition-colors cursor-pointer"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                {article.title}
              </h1>

              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-6">
                <div className="flex items-center">
                  <User size={16} className="mr-1" />
                  {article.author_name}
                </div>
                <div className="flex items-center">
                  <Calendar size={16} className="mr-1" />
                  {format(new Date(article.published_at), "MMMM d, yyyy")}
                </div>
                <div className="flex items-center">
                  <Clock size={16} className="mr-1" />
                  {article.read_time}
                </div>
              </div>

              {article.featured_image && (
                <div className="rounded-lg overflow-hidden mb-8">
                  <img
                    src={article.featured_image}
                    alt={article.title}
                    className="w-full h-auto"
                  />
                </div>
              )}
            </div>

            <div className="prose prose-lg max-w-none">
              <ReactMarkdown
                components={{
                  h2: ({ children }) => (
                    <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">
                      {children}
                    </h2>
                  ),
                  h3: ({ children }) => (
                    <h3 className="text-2xl font-bold text-gray-900 mt-6 mb-3">
                      {children}
                    </h3>
                  ),
                  p: ({ children }) => (
                    <p className="text-gray-700 leading-relaxed mb-4">
                      {children}
                    </p>
                  ),
                  ul: ({ children }) => (
                    <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                      {children}
                    </ul>
                  ),
                  ol: ({ children }) => (
                    <ol className="list-decimal list-inside text-gray-700 mb-4 space-y-2">
                      {children}
                    </ol>
                  ),
                  blockquote: ({ children }) => (
                    <blockquote className="border-l-4 border-primary-500 pl-4 italic text-gray-600 my-6">
                      {children}
                    </blockquote>
                  ),
                }}
              >
                {article.content}
              </ReactMarkdown>
            </div>

            <div className="mt-12 pt-8 border-t border-gray-300">
              <div className="flex flex-wrap gap-2">
                <span className="text-gray-500">Tags:</span>
                {article.tags?.map((tag, index) => (
                  <Badge
                    key={index}
                    variant="outline"
                    className="border-gray-300 text-gray-700 hover:border-primary-500 hover:text-primary-500 transition-colors cursor-pointer"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="mt-12">
              <ArticleLikes articleId={article.id} />
            </div>

            <div className="mt-12">
              <ArticleComments articleId={article.id} />
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}
