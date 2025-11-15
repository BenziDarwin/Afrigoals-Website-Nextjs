"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Trophy,
  Clock,
  AlertCircle,
  RefreshCw,
  Flag,
  Info,
} from "lucide-react";

interface MatchEvent {
  minute: number;
  type: string;
  team: string | null;
  description: string;
  player: string | null;
  jersey_number?: number;
}

interface MatchEventsProps {
  events: MatchEvent[];
  isLive?: boolean;
}

export function MatchEvents({ events, isLive = false }: MatchEventsProps) {
  const getEventIcon = (type: string) => {
    switch (type) {
      case "goal":
        return <Trophy className="w-5 h-5 text-primary-500" />;
      case "yellow_card":
        return <div className="w-5 h-5 bg-yellow-500 rounded" />;
      case "red_card":
        return <div className="w-5 h-5 bg-red-500 rounded" />;
      case "substitution":
        return <RefreshCw className="w-5 h-5 text-blue-400" />;
      case "kickoff":
      case "halftime":
      case "fulltime":
        return <Flag className="w-5 h-5 text-neutral-400" />;
      case "chance":
        return <AlertCircle className="w-5 h-5 text-orange-400" />;
      default:
        return <Info className="w-5 h-5 text-neutral-400" />;
    }
  };

  const getEventStyle = (type: string) => {
    switch (type) {
      case "goal":
        return "border-l-4 border-primary-500 bg-primary-500/5";
      case "yellow_card":
        return "border-l-4 border-yellow-500 bg-yellow-500/5";
      case "red_card":
        return "border-l-4 border-red-500 bg-red-500/5";
      case "substitution":
        return "border-l-4 border-blue-400 bg-blue-400/5";
      case "halftime":
      case "fulltime":
        return "border-l-4 border-neutral-600 bg-neutral-800/50";
      default:
        return "border-l-4 border-neutral-700 bg-neutral-800/30";
    }
  };

  return (
    <Card className="bg-card border-border p-6 h-full">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold text-foreground flex items-center">
          <Clock className="w-5 h-5 mr-2 text-primary-500" />
          Match Events
        </h3>
        {isLive && <Badge className="bg-destructive animate-pulse">LIVE</Badge>}
      </div>

      <div className="space-y-3 max-h-[700px] overflow-y-auto pr-2">
        {events.map((event, index) => (
          <div
            key={index}
            className={`p-4 rounded-lg transition-all hover:shadow-md ${getEventStyle(event.type)}`}
          >
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 w-12 text-center">
                <span className="text-sm font-bold text-foreground">
                  {event.minute}'
                </span>
              </div>

              <div className="flex-shrink-0">{getEventIcon(event.type)}</div>

              <div className="flex-1 min-w-0">
                <p className="text-sm text-foreground leading-relaxed">
                  {event.description}
                </p>
                {event.player && (
                  <div className="mt-1 flex items-center space-x-2">
                    <Badge
                      variant="outline"
                      className="text-xs border-primary-500/50 text-primary-400"
                    >
                      #{event.jersey_number} {event.player}
                    </Badge>
                  </div>
                )}
                {event.team && (
                  <p className="text-xs text-muted-foreground mt-1">
                    {event.team}
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {isLive && (
        <div className="mt-4 text-center text-sm text-muted-foreground">
          Events update in real-time
        </div>
      )}
    </Card>
  );
}
