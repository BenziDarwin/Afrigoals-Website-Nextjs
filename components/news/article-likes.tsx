'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ThumbsUp, Heart, Share2 } from 'lucide-react';

export function ArticleLikes({ articleId }: { articleId: string }) {
  const [likes, setLikes] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    const initialLikes = Math.floor(Math.random() * 200) + 50;
    setLikes(initialLikes);
  }, [articleId]);

  const handleLike = () => {
    if (isLiked) {
      setLikes(likes - 1);
      setIsLiked(false);
    } else {
      setLikes(likes + 1);
      setIsLiked(true);
    }
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Check out this article',
        url: window.location.href,
      });
    }
  };

  return (
    <div className="flex items-center justify-between py-6 border-y border-gray-200">
      <div className="flex items-center space-x-2">
        <Button
          variant={isLiked ? "default" : "outline"}
          onClick={handleLike}
          className={isLiked ? 'bg-primary-600 hover:bg-primary-700' : ''}
        >
          <ThumbsUp size={18} className="mr-2" />
          {likes} Likes
        </Button>
        <Button variant="outline">
          <Heart size={18} className="mr-2" />
          Save
        </Button>
      </div>
      <Button variant="outline" onClick={handleShare}>
        <Share2 size={18} className="mr-2" />
        Share
      </Button>
    </div>
  );
}
