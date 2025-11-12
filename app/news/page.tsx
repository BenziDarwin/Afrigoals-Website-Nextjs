"use client";

import { useState } from "react";
import { Navigation } from "@/components/landing/navigation";
import { Footer } from "@/components/landing/footer";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { mockNewsFeed } from "@/lib/mock-api";
import { mockArticlesDetailed } from "@/lib/mock-data-enhanced";
import { Clock, Eye, MessageCircle, Calendar, User } from "lucide-react";
import { format } from "date-fns";
import { useRouter } from "next/navigation";

export default function NewsPage() {
  const router = useRouter();

  const handleArticleClick = (slug: string) => {
    router.push(`/news/${slug}`);
  };

  return (
    <div className="min-h-screen bg-black">
      <Navigation />

      <div className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              News & Updates
            </h1>
            <p className="text-xl text-neutral-400">
              Stay updated with the latest football news, match reports, and
              analysis
            </p>
          </div>

          <Tabs defaultValue="all" className="space-y-6">
            <TabsList className="bg-neutral-900 border-neutral-800">
              <TabsTrigger
                value="all"
                className="data-[state=active]:bg-primary-500"
              >
                All News
              </TabsTrigger>
              <TabsTrigger
                value="articles"
                className="data-[state=active]:bg-primary-500"
              >
                Featured Articles
              </TabsTrigger>
              <TabsTrigger
                value="updates"
                className="data-[state=active]:bg-primary-500"
              >
                Match Updates
              </TabsTrigger>
            </TabsList>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 space-y-6">
                <TabsContent value="all" className="mt-0 space-y-6">
                  {mockArticlesDetailed.map((article) => (
                    <Card
                      key={article.id}
                      className="bg-neutral-900 border-neutral-800 overflow-hidden hover:border-primary-500/50 transition-all duration-300 cursor-pointer group"
                      onClick={() => handleArticleClick(article.slug)}
                    >
                      <div className="md:flex">
                        {article.featured_image && (
                          <div className="md:w-80 h-48 md:h-auto overflow-hidden">
                            <img
                              src={article.featured_image}
                              alt={article.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                          </div>
                        )}
                        <div className="p-6 flex-1">
                          <div className="flex items-center space-x-2 mb-3">
                            <Badge className="bg-primary-500 capitalize">
                              {article.category.replace("_", " ")}
                            </Badge>
                            <span className="text-neutral-500 text-sm flex items-center">
                              <Clock size={14} className="mr-1" />
                              {article.read_time}
                            </span>
                          </div>

                          <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-primary-400 transition-colors">
                            {article.title}
                          </h2>

                          <p className="text-neutral-400 mb-4 line-clamp-3">
                            {article.excerpt}
                          </p>

                          <div className="flex items-center space-x-4 text-sm text-neutral-500">
                            <span className="flex items-center">
                              <User size={14} className="mr-1" />
                              {article.author_name}
                            </span>
                            <span className="flex items-center">
                              <Calendar size={14} className="mr-1" />
                              {format(
                                new Date(article.published_at),
                                "MMM d, yyyy",
                              )}
                            </span>
                          </div>

                          {article.tags && (
                            <div className="flex flex-wrap gap-2 mt-4">
                              {article.tags.slice(0, 3).map((tag, index) => (
                                <Badge
                                  key={index}
                                  variant="outline"
                                  className="border-neutral-700 text-neutral-400 text-xs"
                                >
                                  {tag}
                                </Badge>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    </Card>
                  ))}
                </TabsContent>

                <TabsContent value="articles" className="mt-0 space-y-6">
                  {mockArticlesDetailed.map((article) => (
                    <Card
                      key={article.id}
                      className="bg-neutral-900 border-neutral-800 overflow-hidden hover:border-primary-500/50 transition-all duration-300 cursor-pointer group"
                      onClick={() => handleArticleClick(article.slug)}
                    >
                      <div className="md:flex">
                        {article.featured_image && (
                          <div className="md:w-80 h-48 md:h-auto overflow-hidden">
                            <img
                              src={article.featured_image}
                              alt={article.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                          </div>
                        )}
                        <div className="p-6 flex-1">
                          <div className="flex items-center space-x-2 mb-3">
                            <Badge className="bg-primary-500 capitalize">
                              {article.category.replace("_", " ")}
                            </Badge>
                            <span className="text-neutral-500 text-sm flex items-center">
                              <Clock size={14} className="mr-1" />
                              {article.read_time}
                            </span>
                          </div>

                          <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-primary-400 transition-colors">
                            {article.title}
                          </h2>

                          <p className="text-neutral-400 mb-4">
                            {article.excerpt}
                          </p>

                          <div className="flex items-center space-x-4 text-sm text-neutral-500">
                            <span className="flex items-center">
                              <User size={14} className="mr-1" />
                              {article.author_name}
                            </span>
                            <span className="flex items-center">
                              <Calendar size={14} className="mr-1" />
                              {format(
                                new Date(article.published_at),
                                "MMM d, yyyy",
                              )}
                            </span>
                          </div>
                        </div>
                      </div>
                    </Card>
                  ))}
                </TabsContent>

                <TabsContent value="updates" className="mt-0 space-y-4">
                  {mockNewsFeed
                    .filter((item) => item.type === "match_update")
                    .map((item) => (
                      <Card
                        key={item.id}
                        className="p-6 bg-neutral-900 border-neutral-800 hover:border-primary-500/50 transition-all duration-300 cursor-pointer group"
                      >
                        <div className="flex items-start space-x-4">
                          {item.thumbnail_url && (
                            <div className="w-24 h-24 rounded-lg overflow-hidden flex-shrink-0">
                              <img
                                src={item.thumbnail_url}
                                alt={item.title}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                              />
                            </div>
                          )}

                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-2">
                              <Badge className="bg-green-500 text-white capitalize">
                                {item.type.replace("_", " ")}
                              </Badge>
                              <span className="text-neutral-500 text-sm flex items-center">
                                <Clock size={14} className="mr-1" />
                                {format(
                                  new Date(item.created_at),
                                  "MMM d, yyyy",
                                )}
                              </span>
                            </div>

                            <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-primary-400 transition-colors">
                              {item.title}
                            </h3>

                            {item.description && (
                              <p className="text-neutral-400">
                                {item.description}
                              </p>
                            )}
                          </div>
                        </div>
                      </Card>
                    ))}
                </TabsContent>
              </div>

              <div className="space-y-6">
                <Card className="p-6 bg-neutral-900 border-neutral-800">
                  <h3 className="text-xl font-semibold text-white mb-4">
                    Trending Topics
                  </h3>
                  <div className="space-y-3">
                    {[
                      "Player Transfer News",
                      "League Standings Update",
                      "Match Highlights",
                      "Coach Interviews",
                      "Injury Reports",
                    ].map((topic, i) => (
                      <button
                        key={i}
                        className="w-full text-left px-3 py-2 bg-neutral-800 hover:bg-neutral-700 rounded-lg transition-colors text-neutral-300 hover:text-white"
                      >
                        {topic}
                      </button>
                    ))}
                  </div>
                </Card>

                <Card className="p-6 bg-neutral-900 border-neutral-800">
                  <h3 className="text-xl font-semibold text-white mb-4">
                    Featured Writers
                  </h3>
                  <div className="space-y-3">
                    {mockArticlesDetailed.map((article, i) => (
                      <div key={i} className="flex items-center space-x-3">
                        <div className="w-12 h-12 rounded-full bg-primary-500 flex items-center justify-center">
                          <span className="text-white font-bold">
                            {article.author_name.charAt(0)}
                          </span>
                        </div>
                        <div>
                          <div className="text-white font-medium">
                            {article.author_name}
                          </div>
                          <div className="text-neutral-400 text-sm">
                            Sports Journalist
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
            </div>
          </Tabs>
        </div>
      </div>

      <Footer />
    </div>
  );
}
