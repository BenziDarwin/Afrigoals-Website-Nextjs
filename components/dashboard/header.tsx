'use client';

import { Bell, Search, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { User } from '@/lib/supabase';

interface HeaderProps {
  user: User;
  onSignOut: () => void;
}

export function DashboardHeader({ user, onSignOut }: HeaderProps) {
  const initials = user.full_name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase();

  return (
    <header className="h-16 bg-neutral-900 border-b border-neutral-800 flex items-center justify-between px-6">
      <div className="flex items-center flex-1 max-w-2xl">
        <div className="relative w-full">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500" size={20} />
          <Input
            placeholder="Search..."
            className="pl-10 bg-neutral-800 border-neutral-700 text-white"
          />
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <Button
          variant="ghost"
          size="icon"
          className="text-neutral-400 hover:text-white"
        >
          <Bell size={22} />
          <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full" />
        </Button>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
              <Avatar>
                <AvatarImage src={user.avatar_url} />
                <AvatarFallback className="bg-primary-500 text-white">
                  {initials}
                </AvatarFallback>
              </Avatar>
              <div className="text-left">
                <div className="text-sm font-medium text-white">{user.full_name}</div>
                <div className="text-xs text-neutral-400 capitalize">
                  {user.role.replace('_', ' ')}
                </div>
              </div>
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56 bg-neutral-800 border-neutral-700">
            <DropdownMenuLabel className="text-white">My Account</DropdownMenuLabel>
            <DropdownMenuSeparator className="bg-neutral-700" />
            <DropdownMenuItem className="text-neutral-300 focus:text-white focus:bg-neutral-700">
              Profile
            </DropdownMenuItem>
            <DropdownMenuItem className="text-neutral-300 focus:text-white focus:bg-neutral-700">
              Settings
            </DropdownMenuItem>
            <DropdownMenuSeparator className="bg-neutral-700" />
            <DropdownMenuItem
              onClick={onSignOut}
              className="text-red-400 focus:text-red-300 focus:bg-neutral-700"
            >
              <LogOut size={16} className="mr-2" />
              Sign Out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
