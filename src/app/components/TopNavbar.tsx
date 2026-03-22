import { useNavigate, useLocation } from 'react-router';
import { LayoutDashboard, Activity, FileText, User, BarChart3, MessageSquare, Link2, Settings, Smartphone } from 'lucide-react';

export default function TopNavbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const routes = [
    { path: '/', label: 'Dashboard', icon: LayoutDashboard },
    { path: '/graph', label: 'Graph View', icon: Activity },
    { path: '/str-generation', label: 'STR Generation', icon: FileText },
    { path: '/entity/ACC-0041', label: 'Entity Profile', icon: User },
    { path: '/analytics', label: 'Analytics', icon: BarChart3 },
    { path: '/query', label: 'AI Query', icon: MessageSquare },
    { path: '/blockchain', label: 'Audit Trail', icon: Link2 },
    { path: '/admin', label: 'Configuration', icon: Settings },
    { path: '/mobile', label: 'Mobile', icon: Smartphone },
  ];

  return (
    <div className="bg-white border-b border-gray-200 px-8 py-4 sticky top-0 z-40 shadow-sm">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-8">
          <h2 className="text-xl font-bold text-gray-900" style={{ fontFamily: 'Syne' }}>
            FundLens
          </h2>
          <div className="flex items-center gap-1">
            {routes.map((route) => {
              const Icon = route.icon;
              const isActive = location.pathname === route.path;
              return (
                <button
                  key={route.path}
                  onClick={() => navigate(route.path)}
                  className={`flex items-center gap-2 px-3 py-2 rounded transition-all text-sm ${
                    isActive
                      ? 'bg-[#E31E24] text-white font-semibold'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                  title={route.label}
                >
                  <Icon className="w-4 h-4" />
                  <span className="hidden sm:inline">{route.label}</span>
                </button>
              );
            })}
          </div>
        </div>
        <div className="flex items-center gap-2 text-xs text-gray-600">
          <div className="w-2 h-2 rounded-full bg-green-500" />
          <span>System Active</span>
        </div>
      </div>
    </div>
  );
}
