'use client';

import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { MessageCircle, Send, ThumbsUp, User } from 'lucide-react';
import { format } from 'date-fns';

interface Comment {
  id: string;
  user_name: string;
  user_avatar?: string;
  comment_text: string;
  created_at: string;
}

export function ArticleComments({ articleId }: { articleId: string }) {
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const mockComments: Comment[] = [
      {
        id: '1',
        user_name: 'James Ochieng',
        comment_text: 'Great match! Lagos Lions played exceptionally well. Samuel Adeola is truly a star player.',
        created_at: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      },
      {
        id: '2',
        user_name: 'Amina Hassan',
        comment_text: 'The atmosphere at the National Stadium was electric! What a game to witness.',
        created_at: new Date(Date.now() - 5 * 60 * 60 * 1000).toISOString(),
      },
      {
        id: '3',
        user_name: 'David Mensah',
        comment_text: 'Ibrahim Musa\'s goal was absolutely stunning. Goal of the season contender!',
        created_at: new Date(Date.now() - 8 * 60 * 60 * 1000).toISOString(),
      },
    ];
    setComments(mockComments);
  }, [articleId]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.trim()) return;

    setIsSubmitting(true);

    const comment: Comment = {
      id: Date.now().toString(),
      user_name: 'Guest User',
      comment_text: newComment,
      created_at: new Date().toISOString(),
    };

    setComments([comment, ...comments]);
    setNewComment('');
    setIsSubmitting(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-2xl font-bold text-gray-900 flex items-center">
          <MessageCircle className="mr-2 text-primary-600" size={24} />
          Comments ({comments.length})
        </h3>
      </div>

      <Card className="bg-white border border-gray-200 shadow-sm">
        <div className="p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <Textarea
              placeholder="Share your thoughts..."
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              className="min-h-24 bg-gray-50 border-gray-300 focus:border-primary-500"
            />
            <div className="flex justify-end">
              <Button
                type="submit"
                disabled={isSubmitting || !newComment.trim()}
                className="bg-primary-600 hover:bg-primary-700"
              >
                <Send size={16} className="mr-2" />
                Post Comment
              </Button>
            </div>
          </form>
        </div>
      </Card>

      <div className="space-y-4">
        {comments.map((comment) => (
          <Card key={comment.id} className="bg-white border border-gray-200 shadow-sm hover:shadow transition-shadow">
            <div className="p-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center border-2 border-primary-200">
                    <User className="text-primary-600" size={20} />
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-sm font-semibold text-gray-900">{comment.user_name}</h4>
                    <span className="text-xs text-gray-500">
                      {format(new Date(comment.created_at), 'MMM d, h:mm a')}
                    </span>
                  </div>
                  <p className="text-gray-700 leading-relaxed">{comment.comment_text}</p>
                  <div className="flex items-center space-x-4 mt-3">
                    <button className="flex items-center text-sm text-gray-500 hover:text-primary-600 transition-colors">
                      <ThumbsUp size={14} className="mr-1" />
                      Like
                    </button>
                    <button className="text-sm text-gray-500 hover:text-primary-600 transition-colors">
                      Reply
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
