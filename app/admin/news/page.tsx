"use client";

import { DashboardLayout } from "@/components/dashboard/layout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Plus, Edit, Trash2, Eye } from "lucide-react";
import { useEffect, useState } from "react";
import { mockNewsArticles } from "@/lib/mock-api";
import { format } from "date-fns";

export default function AdminNewsPage() {
  const [articles, setArticles] = useState<typeof mockNewsArticles>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadArticles();
  }, []);

  const loadArticles = async () => {
    setTimeout(() => {
      setArticles(mockNewsArticles);
      setLoading(false);
    }, 500);
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">
              News Management
            </h1>
            <p className="text-neutral-400">
              Create and manage news articles and blog posts
            </p>
          </div>
          <Button className="bg-primary-500 hover:bg-primary-600">
            <Plus size={20} className="mr-2" />
            New Article
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="p-6 bg-neutral-800 border-neutral-700">
            <div className="text-3xl font-bold text-white mb-1">
              {articles.length}
            </div>
            <div className="text-neutral-400 text-sm">Total Articles</div>
          </Card>
          <Card className="p-6 bg-neutral-800 border-neutral-700">
            <div className="text-3xl font-bold text-white mb-1">
              {articles.filter((a) => a.published).length}
            </div>
            <div className="text-neutral-400 text-sm">Published</div>
          </Card>
          <Card className="p-6 bg-neutral-800 border-neutral-700">
            <div className="text-3xl font-bold text-white mb-1">
              {articles.filter((a) => !a.published).length}
            </div>
            <div className="text-neutral-400 text-sm">Drafts</div>
          </Card>
        </div>

        <Card className="p-6 bg-neutral-800 border-neutral-700">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-xl font-semibold text-white">All Articles</h2>
            <Input
              placeholder="Search articles..."
              className="max-w-xs bg-neutral-700 border-neutral-600 text-white"
            />
          </div>

          {loading ? (
            <div className="space-y-4">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="h-24 bg-neutral-700 rounded-lg animate-pulse"
                />
              ))}
            </div>
          ) : articles.length === 0 ? (
            <div className="text-center py-12 text-neutral-400">
              No articles yet. Create your first article to get started.
            </div>
          ) : (
            <div className="space-y-4">
              {articles.map((article) => (
                <div
                  key={article.id}
                  className="p-4 bg-neutral-700 rounded-lg flex items-center justify-between hover:bg-neutral-600 transition-colors"
                >
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="text-white font-semibold">
                        {article.title}
                      </h3>
                      <Badge
                        className={
                          article.published
                            ? "bg-green-500 text-white"
                            : "bg-yellow-500 text-black"
                        }
                      >
                        {article.published ? "Published" : "Draft"}
                      </Badge>
                      <Badge className="bg-blue-500 text-white capitalize">
                        {article.category}
                      </Badge>
                    </div>
                    <p className="text-neutral-400 text-sm mb-2 line-clamp-2">
                      {article.excerpt ||
                        article.content.substring(0, 150) + "..."}
                    </p>
                    <div className="text-neutral-500 text-xs">
                      Created:{" "}
                      {format(new Date(article.created_at), "MMM d, yyyy")}
                      {article.published_at && (
                        <>
                          {" "}
                          • Published:{" "}
                          {format(
                            new Date(article.published_at),
                            "MMM d, yyyy",
                          )}
                        </>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center space-x-2 ml-4">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-neutral-400 hover:text-white"
                    >
                      <Eye size={18} />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-neutral-400 hover:text-white"
                    >
                      <Edit size={18} />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-red-400 hover:text-red-300"
                    >
                      <Trash2 size={18} />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </Card>
      </div>
    </DashboardLayout>
  );
}
