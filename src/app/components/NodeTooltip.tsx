interface NodeTooltipProps {
  nodeId: string;
  x: number;
  y: number;
}

export default function NodeTooltip({ nodeId, x, y }: NodeTooltipProps) {
  // Mock data for tooltip
  const tooltipData = {
    'ACC-0041': {
      accountType: 'Savings Account',
      balance: '₹2,45,000',
      lastActive: '2026-03-19 14:23',
      riskScore: 72,
    },
    'ACC-0112': {
      accountType: 'Current Account',
      balance: '₹12,000',
      lastActive: '2026-03-19 15:10',
      riskScore: 58,
    },
    'ACC-0203': {
      accountType: 'Savings Account',
      balance: '₹8,500',
      lastActive: '2026-03-19 16:45',
      riskScore: 61,
    },
    'ACC-0089': {
      accountType: 'Current Account',
      balance: '₹1,84,000',
      lastActive: '2026-03-19 18:30',
      riskScore: 94,
    },
    'ACC-0317': {
      accountType: 'Savings Account',
      balance: '₹15,600',
      lastActive: '2026-03-19 19:12',
      riskScore: 55,
    },
    'ACC-0455': {
      accountType: 'Current Account',
      balance: '₹22,100',
      lastActive: '2026-03-19 20:37',
      riskScore: 52,
    },
    'ACC-0041-return': {
      accountType: 'Savings Account',
      balance: '₹31,68,000',
      lastActive: '2026-03-19 21:15',
      riskScore: 89,
    },
  };

  const data = tooltipData[nodeId as keyof typeof tooltipData];

  if (!data) return null;

  return (
    <div
      className="fixed bg-white border border-[#E31E24] rounded-lg p-3 shadow-lg z-50 pointer-events-none"
      style={{
        left: `${x}px`,
        top: `${y - 120}px`,
        transform: 'translateX(-50%)',
      }}
    >
      <div className="space-y-2 text-xs" style={{ fontFamily: 'DM Mono' }}>
        <div className="text-[#E31E24] font-bold">{nodeId.replace('-return', '')}</div>
        <div className="text-gray-600">
          <div>Type: <span className="text-gray-900 font-medium">{data.accountType}</span></div>
          <div>Balance: <span className="text-gray-900 font-medium">{data.balance}</span></div>
          <div>Last active: <span className="text-gray-900 font-medium">{data.lastActive}</span></div>
          <div>
            Risk score:{' '}
            <span
              className={
                data.riskScore >= 80
                  ? 'text-[#E31E24] font-bold'
                  : data.riskScore >= 60
                  ? 'text-[#F59E0B] font-bold'
                  : 'text-[#10B981] font-bold'
              }
            >
              {data.riskScore}%
            </span>
          </div>
        </div>
        <div className="pt-1 border-t border-gray-200">
          <a href="#" className="text-[#E31E24] hover:text-[#d4183d] font-semibold text-xs">
            View full profile →
          </a>
        </div>
      </div>
    </div>
  );
}
