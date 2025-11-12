"use client";

import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Eye, MessageCircle } from "lucide-react";
import { mockNewsFeed } from "@/lib/mock-api";
import { format } from "date-fns";

export function NewsFeed() {
  const [feed, setFeed] = useState<typeof mockNewsFeed>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadFeed();
  }, []);

  const loadFeed = async () => {
    setTimeout(() => {
      setFeed(mockNewsFeed);
      setLoading(false);
    }, 500);
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "article":
        return "bg-blue-500";
      case "video":
        return "bg-red-500";
      case "match_update":
        return "bg-green-500";
      case "external_link":
        return "bg-purple-500";
      default:
        return "bg-neutral-500";
    }
  };

  if (loading) {
    return (
      <div className="space-y-4">
        {[...Array(3)].map((_, i) => (
          <Card
            key={i}
            className="p-6 bg-neutral-800 border-neutral-700 animate-pulse"
          >
            <div className="h-6 bg-neutral-700 rounded w-3/4 mb-4"></div>
            <div className="h-4 bg-neutral-700 rounded w-1/2"></div>
          </Card>
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {feed.map((item) => (
        <Card
          key={item.id}
          className="p-6 bg-neutral-800 border-neutral-700 hover:border-primary-500/50 transition-all duration-300 cursor-pointer group"
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
                <Badge
                  className={`${getTypeColor(item.type)} text-white capitalize`}
                >
                  {item.type.replace("_", " ")}
                </Badge>
                <span className="text-neutral-500 text-sm flex items-center">
                  <Clock size={14} className="mr-1" />
                  {format(new Date(item.created_at), "MMM d, yyyy")}
                </span>
              </div>

              <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-primary-400 transition-colors">
                {item.title}
              </h3>

              {item.description && (
                <p className="text-neutral-400 mb-4 line-clamp-2">
                  {item.description}
                </p>
              )}

              <div className="flex items-center space-x-4 text-sm text-neutral-500">
                <span className="flex items-center">
                  <Eye size={16} className="mr-1" />
                  1.2k views
                </span>
                <span className="flex items-center">
                  <MessageCircle size={16} className="mr-1" />
                  24 comments
                </span>
              </div>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}
