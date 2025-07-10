
import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { 
  Home, 
  Pill, 
  Heart, 
  Upload, 
  Bot, 
  FileText,
  Activity,
  Settings,
  HelpCircle 
} from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
}

const navigationItems = [
  { name: 'Dashboard', href: '/', icon: Home },
  { name: 'Medicines', href: '/medicines', icon: Pill },
  { name: 'Diseases', href: '/diseases', icon: Heart },
  { name: 'AI Consultation', href: '/consultation', icon: Upload },
  { name: 'AI Assistant', href: '/assistant', icon: Bot },
  { name: 'Reports', href: '/reports', icon: FileText },
  { name: 'Health Tracker', href: '/tracker', icon: Activity },
];

const bottomItems = [
  { name: 'Settings', href: '/settings', icon: Settings },
  { name: 'Help & Support', href: '/help', icon: HelpCircle },
];

export const Sidebar = ({ isOpen }: SidebarProps) => {
  const location = useLocation();
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <aside className={`fixed left-0 top-16 h-full bg-gradient-card backdrop-blur-xl border-r border-white/10 transition-all duration-300 z-40 ${
      isOpen ? 'w-64 translate-x-0' : 'w-0 -translate-x-full'
    }`}>
      <nav className="p-4 space-y-2">
        <div className="space-y-1">
          {navigationItems.map((item) => {
            const Icon = item.icon;
            const active = isActive(item.href);
            
            return (
              <NavLink
                key={item.name}
                to={item.href}
                className={`group flex items-center px-3 py-2.5 text-sm font-medium rounded-lg transition-all duration-200 ${
                  active
                    ? 'bg-gradient-primary text-white shadow-lg'
                    : 'text-slate-300 hover:bg-white/10 hover:text-white'
                }`}
                onMouseEnter={() => setHoveredItem(item.name)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <Icon className={`mr-3 h-5 w-5 transition-transform duration-200 ${
                  hoveredItem === item.name ? 'scale-110' : ''
                }`} />
                <span className="truncate">{item.name}</span>
                {active && (
                  <div className="ml-auto w-2 h-2 bg-white rounded-full animate-pulse" />
                )}
              </NavLink>
            );
          })}
        </div>

        <div className="pt-6 mt-6 border-t border-white/10">
          <div className="space-y-1">
            {bottomItems.map((item) => {
              const Icon = item.icon;
              const active = isActive(item.href);
              
              return (
                <NavLink
                  key={item.name}
                  to={item.href}
                  className={`group flex items-center px-3 py-2.5 text-sm font-medium rounded-lg transition-all duration-200 ${
                    active
                      ? 'bg-gradient-primary text-white shadow-lg'
                      : 'text-slate-300 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  <Icon className="mr-3 h-5 w-5" />
                  <span className="truncate">{item.name}</span>
                </NavLink>
              );
            })}
          </div>
        </div>
      </nav>
    </aside>
  );
};
