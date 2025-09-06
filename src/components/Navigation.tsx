import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  Heart, 
  Search, 
  Calendar, 
  FileText, 
  Shield, 
  Users,
  Activity,
  Menu,
  X,
  Phone
} from 'lucide-react';

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/search', label: 'Find Doctors', icon: Search },
    { path: '/appointments', label: 'Appointments', icon: Calendar },
    { path: '/records', label: 'Health Records', icon: FileText },
    { path: '/wellness', label: 'Wellness', icon: Activity },
    { path: '/community', label: 'Community', icon: Users }
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 font-bold text-xl">
            <div className="w-8 h-8 bg-gradient-primary rounded-xl flex items-center justify-center">
              <Heart className="w-5 h-5 text-white" />
            </div>
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              HealthConnect
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-2 px-3 py-2 rounded-xl transition-colors ${
                  isActive(item.path)
                    ? 'bg-primary-soft text-primary'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                }`}
              >
                <item.icon className="w-4 h-4" />
                <span className="text-sm font-medium">{item.label}</span>
              </Link>
            ))}
          </div>

          {/* Emergency & Profile */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="emergency" size="sm">
              <Phone className="w-4 h-4" />
              Emergency
            </Button>
            <Button variant="outline" size="sm">
              <Shield className="w-4 h-4" />
              Profile
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 hover:bg-muted rounded-xl"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${
                    isActive(item.path)
                      ? 'bg-primary-soft text-primary'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <item.icon className="w-5 h-5" />
                  <span className="font-medium">{item.label}</span>
                </Link>
              ))}
              <div className="flex gap-2 px-4 mt-3">
                <Button variant="emergency" size="sm" className="flex-1">
                  <Phone className="w-4 h-4" />
                  Emergency
                </Button>
                <Button variant="outline" size="sm" className="flex-1">
                  <Shield className="w-4 h-4" />
                  Profile
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;