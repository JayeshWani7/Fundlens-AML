import { Menu, Bell, ChevronRight } from 'lucide-react';

export default function MobileAlert() {
  const recentAlerts = [
    { severity: 'amber', typology: 'Structuring/Smurfing', caseId: 'CASE-2851', amount: '₹28.4L', time: '23m ago' },
    { severity: 'amber', typology: 'Dormant Activation', caseId: 'CASE-2863', amount: '₹92.1L', time: '1h ago' },
    { severity: 'gray', typology: 'Fan-out pattern', caseId: 'CASE-2871', amount: '₹8.2L', time: '2h ago' },
  ];

  return (
    <div className="w-[390px] h-[844px] bg-white mx-auto relative overflow-hidden" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      {/* iOS Status Bar */}
      <div className="h-[44px] bg-[#000000] flex items-center justify-between px-6 text-white text-xs">
        <div>9:41</div>
        <div className="flex items-center gap-1">
          <svg width="16" height="11" viewBox="0 0 16 11" fill="white">
            <path d="M14.5 0.5C15.3284 0.5 16 1.17157 16 2V9C16 9.82843 15.3284 10.5 14.5 10.5H1.5C0.671573 10.5 0 9.82843 0 9V2C0 1.17157 0.671573 0.5 1.5 0.5H14.5ZM14.5 2H1.5V9H14.5V2Z"/>
          </svg>
          <svg width="15" height="11" viewBox="0 0 15 11" fill="white">
            <path d="M0 2C0 0.895431 0.895431 0 2 0H13C14.1046 0 15 0.895431 15 2V9C15 10.1046 14.1046 11 13 11H2C0.895431 11 0 10.1046 0 9V2Z"/>
          </svg>
        </div>
      </div>

      {/* Nav Bar */}
      <div className="h-[56px] bg-white border-b border-gray-200 flex items-center justify-between px-5">
        <Menu className="w-6 h-6 text-gray-900" />
        <div className="text-gray-900 text-[16px] font-bold" style={{ fontFamily: 'Syne' }}>
          FundLens
        </div>
        <div className="relative">
          <Bell className="w-6 h-6 text-gray-900" />
          <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-[#E31E24] flex items-center justify-center text-white text-[10px] font-bold">
            3
          </div>
        </div>
      </div>

      {/* Critical Alert Banner */}
      <div className="bg-gray-50 border-l-4 border-[#E31E24] p-4 m-4 rounded-lg">
        {/* Header */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#E31E24] animate-pulse" />
            <span className="text-[#E31E24] text-[10px] font-bold tracking-wide" style={{ fontFamily: 'Syne' }}>
              CRITICAL ALERT
            </span>
          </div>
          <span className="text-gray-700 text-[10px]">Detected 4 minutes ago</span>
        </div>

        {/* Risk Score */}
        <div className="mb-3">
          <div className="text-[#E31E24] text-[48px] font-bold leading-none mb-2" style={{ fontFamily: 'Syne' }}>
            94%
          </div>
          <div className="text-gray-900 text-[18px] font-semibold mb-2" style={{ fontFamily: 'Syne' }}>
            Round-trip Layering
          </div>
          <div className="text-gray-700 text-xs mb-1" style={{ fontFamily: 'DM Mono' }}>
            CASE-2847 · 7 accounts · ₹47,23,000
          </div>
          <div className="text-gray-700 text-[11px]" style={{ fontFamily: 'DM Mono' }}>
            NEFT + UPI · Mumbai Central branch
          </div>
        </div>

        {/* Mini Graph */}
        <div className="bg-white rounded-lg p-3 mb-4" style={{ height: '120px' }}>
          <svg className="w-full h-full">
            <defs>
              <marker id="mobile-arrow" markerWidth="5" markerHeight="5" refX="4" refY="2.5" orient="auto">
                <path d="M0,0 L0,5 L5,2.5 z" fill="#E31E24" opacity="0.6" />
              </marker>
            </defs>

            {/* Simplified 5-node graph */}
            <g>
              {/* Origin node */}
              <circle cx="20%" cy="50%" r="12" fill="white" stroke="#F59E0B" strokeWidth="2" />
              
              {/* Middle hub */}
              <circle cx="50%" cy="50%" r="14" fill="white" stroke="#E31E24" strokeWidth="2.5" />
              
              {/* Destination node */}
              <circle cx="80%" cy="50%" r="12" fill="white" stroke="#E31E24" strokeWidth="2" strokeDasharray="3 3" />
              
              {/* Top intermediate */}
              <circle cx="35%" cy="30%" r="10" fill="white" stroke="#F59E0B" strokeWidth="2" />
              
              {/* Bottom intermediate */}
              <circle cx="35%" cy="70%" r="10" fill="white" stroke="#F59E0B" strokeWidth="2" />

              {/* Arrows */}
              <line x1="20%" y1="50%" x2="35%" y2="30%" stroke="#E31E24" strokeWidth="1.5" opacity="0.5" markerEnd="url(#mobile-arrow)" />
              <line x1="20%" y1="50%" x2="35%" y2="70%" stroke="#E31E24" strokeWidth="1.5" opacity="0.5" markerEnd="url(#mobile-arrow)" />
              <line x1="35%" y1="30%" x2="50%" y2="50%" stroke="#E31E24" strokeWidth="1.5" opacity="0.5" markerEnd="url(#mobile-arrow)" />
              <line x1="35%" y1="70%" x2="50%" y2="50%" stroke="#E31E24" strokeWidth="1.5" opacity="0.5" markerEnd="url(#mobile-arrow)" />
              <line x1="50%" y1="50%" x2="80%" y2="50%" stroke="#E31E24" strokeWidth="1.5" opacity="0.5" markerEnd="url(#mobile-arrow)" />
              
              {/* Return arc */}
              <path d="M 50 50 Q 50 10, 80 50" fill="none" stroke="#E31E24" strokeWidth="2" opacity="0.7" markerEnd="url(#mobile-arrow)" transform="translate(0, 10)" />
            </g>
          </svg>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3">
          <button className="w-full bg-[#E31E24] text-white rounded-lg py-3 text-sm font-bold flex items-center justify-center gap-2"
            style={{ fontFamily: 'Syne' }}
          >
            Investigate now →
          </button>
          <button className="w-full border border-gray-900 text-gray-900 rounded-lg py-3 text-sm font-semibold">
            Assign to team
          </button>
        </div>
      </div>

      {/* Recent Alerts List */}
      <div className="px-4 pb-24">
        <div className="text-[#E31E24] text-[10px] tracking-widest font-semibold mb-3 uppercase">
          Recent alerts · last 2 hours
        </div>
        
        <div className="space-y-2">
          {recentAlerts.map((alert, idx) => {
            const dotColor = alert.severity === 'amber' ? '#F59E0B' : '#6B7280';
            return (
              <div
                key={idx}
                className="bg-white border border-gray-200 rounded-lg p-4 flex items-center justify-between hover:bg-gray-50 transition-colors active:scale-98"
              >
                <div className="flex items-center gap-3 flex-1">
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: dotColor }} />
                  <div>
                    <div className="text-gray-900 text-sm font-medium mb-1">
                      {alert.typology}
                    </div>
                    <div className="text-gray-700 text-xs" style={{ fontFamily: 'DM Mono' }}>
                      {alert.caseId} · {alert.amount} · {alert.time}
                    </div>
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-700" />
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom Tab Bar */}
      <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-200" style={{ paddingBottom: 'env(safe-area-inset-bottom, 20px)' }}>
        <div className="flex items-center justify-around pt-2 pb-1">
          {[
            { label: 'Dashboard', active: false },
            { label: 'Alerts', active: true, badge: '3' },
            { label: 'Cases', active: false },
            { label: 'Reports', active: false },
            { label: 'Settings', active: false },
          ].map((tab, idx) => (
            <div key={idx} className="flex flex-col items-center gap-1 py-2 px-3 relative">
              <div className={`w-6 h-6 rounded ${tab.active ? 'bg-[#E31E24]' : 'bg-gray-400'}`} />
              {tab.badge && (
                <div className="absolute top-0 right-0 w-4 h-4 rounded-full bg-[#E31E24] flex items-center justify-center text-white text-[8px] font-bold">
                  {tab.badge}
                </div>
              )}
              <span className={`text-[10px] ${tab.active ? 'text-[#E31E24]' : 'text-gray-400'}`}>
                {tab.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
