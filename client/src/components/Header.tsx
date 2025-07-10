
import { Menu, MessageCircle, Bell, User, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface HeaderProps {
  onToggleSidebar: () => void;
  onToggleChatbot: () => void;
}

export const Header = ({ onToggleSidebar, onToggleChatbot }: HeaderProps) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-white/10">
      <div className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={onToggleSidebar}
            className="hover:bg-white/10"
          >
            <Menu className="h-5 w-5" />
          </Button>
          
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">M</span>
            </div>
            <span className="text-xl font-heading font-bold text-gradient">
              MediCore
            </span>
          </div>
        </div>

        <div className="flex-1 max-w-md mx-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search medicines, diseases, symptoms..."
              className="pl-10 bg-white/5 border-white/10 focus:border-medical-primary"
            />
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <Button
            variant="ghost"
            size="sm"
            onClick={onToggleChatbot}
            className="hover:bg-white/10 relative"
          >
            <MessageCircle className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-medical-primary rounded-full animate-pulse-glow"></span>
          </Button>
          
          <Button variant="ghost" size="sm" className="hover:bg-white/10">
            <Bell className="h-5 w-5" />
          </Button>
          
          <Button variant="ghost" size="sm" className="hover:bg-white/10">
            <User className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};
