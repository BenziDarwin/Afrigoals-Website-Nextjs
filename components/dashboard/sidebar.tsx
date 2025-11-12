'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import {
  Home,
  Trophy,
  Users,
  CalendarDays,
  BarChart3,
  Newspaper,
  Settings,
  Shield,
  Building2,
  Video
} from 'lucide-react';
import { UserRole } from '@/lib/supabase';

interface SidebarProps {
  role: UserRole;
}

const roleNavigation = {
  admin: [
    { name: 'Dashboard', href: '/admin', icon: Home },
    { name: 'Leagues', href: '/admin/leagues', icon: Trophy },
    { name: 'Clubs', href: '/admin/clubs', icon: Building2 },
    { name: 'Users', href: '/admin/users', icon: Users },
    { name: 'News Management', href: '/admin/news', icon: Newspaper },
    { name: 'Settings', href: '/admin/settings', icon: Settings },
  ],
  league_manager: [
    { name: 'Dashboard', href: '/league-manager', icon: Home },
    { name: 'My League', href: '/league-manager/league', icon: Trophy },
    { name: 'Clubs', href: '/league-manager/clubs', icon: Building2 },
    { name: 'Fixtures', href: '/league-manager/fixtures', icon: CalendarDays },
    { name: 'Statistics', href: '/league-manager/stats', icon: BarChart3 },
    { name: 'Settings', href: '/league-manager/settings', icon: Settings },
  ],
  club_manager: [
    { name: 'Dashboard', href: '/club-manager', icon: Home },
    { name: 'My Club', href: '/club-manager/club', icon: Building2 },
    { name: 'Players', href: '/club-manager/players', icon: Users },
    { name: 'Matches', href: '/club-manager/matches', icon: CalendarDays },
    { name: 'Videos', href: '/club-manager/videos', icon: Video },
    { name: 'Statistics', href: '/club-manager/stats', icon: BarChart3 },
    { name: 'Settings', href: '/club-manager/settings', icon: Settings },
  ],
  user: [
    { name: 'Dashboard', href: '/dashboard', icon: Home },
    { name: 'Matches', href: '/dashboard/matches', icon: CalendarDays },
    { name: 'News', href: '/dashboard/news', icon: Newspaper },
    { name: 'Statistics', href: '/dashboard/stats', icon: BarChart3 },
    { name: 'Settings', href: '/dashboard/settings', icon: Settings },
  ],
};

export function Sidebar({ role }: SidebarProps) {
  const pathname = usePathname();
  const navigation = roleNavigation[role] || roleNavigation.user;

  return (
    <div className="flex flex-col h-full bg-gradient-to-b from-primary-600 via-primary-500 to-primary-600 shadow-2xl">
      <div className="p-6 border-b border-white/10 backdrop-blur-sm">
        <Link href="/" className="flex items-center space-x-3 group">
          <div className="relative">
            <div className="absolute inset-0 bg-white rounded-xl blur-md opacity-30 group-hover:opacity-50 transition-opacity" />
            <div className="relative w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-lg">
              <span className="text-primary-600 font-extrabold text-2xl">A</span>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-extrabold text-white">AFRIGOALS</span>
            <span className="text-xs text-white/70 font-medium tracking-wide">Dashboard</span>
          </div>
        </Link>
      </div>

      <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
        {navigation.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href || pathname.startsWith(item.href + '/');

          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                'group flex items-center space-x-3 px-4 py-3.5 rounded-xl transition-all duration-200 relative overflow-hidden',
                isActive
                  ? 'bg-white text-primary-600 shadow-lg'
                  : 'text-white/90 hover:bg-white/10 hover:text-white backdrop-blur-sm'
              )}
            >
              {isActive && (
                <div className="absolute inset-0 bg-white" />
              )}
              <Icon size={20} className={cn(
                'relative z-10 transition-transform group-hover:scale-110',
                isActive ? 'text-primary-600' : 'text-white/90'
              )} />
              <span className={cn(
                'relative z-10 font-semibold',
                isActive ? 'text-primary-600' : 'text-white/90'
              )}>{item.name}</span>
              {isActive && (
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-primary-600 rounded-l-full" />
              )}
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-white/10 backdrop-blur-sm">
        <div className="flex items-center space-x-3 px-4 py-3 rounded-xl bg-white/10 backdrop-blur-sm">
          <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
            <Shield size={20} className="text-white" />
          </div>
          <div className="flex flex-col">
            <span className="text-white font-semibold text-sm capitalize">{role.replace('_', ' ')}</span>
            <span className="text-white/70 text-xs">Active Session</span>
          </div>
        </div>
      </div>
    </div>
  );
}
