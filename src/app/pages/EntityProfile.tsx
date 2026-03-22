import { ArrowLeft, Plus, Flag, Eye } from 'lucide-react';
import { useNavigate } from 'react-router';

export default function EntityProfile() {
  const navigate = useNavigate();

  const transactions = [
    { date: '2026-03-19', time: '14:23', counterparty: 'ACC-0112', amount: '₹7,80,000', channel: 'NEFT', flagged: true },
    { date: '2026-03-19', time: '14:28', counterparty: 'ACC-0203', amount: '₹9,10,000', channel: 'UPI', flagged: true },
    { date: '2026-03-19', time: '15:12', counterparty: 'ACC-0317', amount: '₹6,45,000', channel: 'IMPS', flagged: true },
    { date: '2026-03-19', time: '16:08', counterparty: 'ACC-0455', amount: '₹8,90,000', channel: 'NEFT', flagged: true },
    { date: '2026-03-19', time: '17:22', counterparty: 'ACC-0089', amount: '₹4,28,000', channel: 'UPI', flagged: true },
    { date: '2026-03-19', time: '18:45', counterparty: 'ACC-0112', amount: '₹3,15,000', channel: 'NEFT', flagged: true },
    { date: '2026-03-19', time: '19:30', counterparty: 'ACC-0203', amount: '₹2,95,000', channel: 'IMPS', flagged: true },
    { date: '2026-03-19', time: '20:15', counterparty: 'ACC-0317', amount: '₹4,60,000', channel: 'UPI', flagged: true },
    { date: '2023-12-15', time: '10:45', counterparty: 'Utility Bill', amount: '₹1,240', channel: 'Bill Pay', flagged: false },
    { date: '2023-12-08', time: '14:20', counterparty: 'Salary Credit', amount: '₹45,000', channel: 'NEFT', flagged: false },
    { date: '2023-11-28', time: '09:15', counterparty: 'Grocery Store', amount: '₹3,200', channel: 'UPI', flagged: false },
    { date: '2023-11-20', time: '16:30', counterparty: 'Utility Bill', amount: '₹1,180', channel: 'Bill Pay', flagged: false },
  ];

  return (
    <div className="min-h-screen bg-white pb-20">
      {/* Top Bar with Breadcrumb */}
      <div className="h-[44px] bg-white border-b border-gray-200 flex items-center px-6">
        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-gray-700 hover:text-gray-900 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
        </button>
        <div className="ml-4 text-sm text-gray-700" style={{ fontFamily: 'DM Mono' }}>
          Dashboard → <span className="text-gray-900">CASE-2847</span> → <span className="text-[#E31E24]">ACC-0041</span>
        </div>
      </div>

      {/* Identity Card */}
      <div className="mx-6 mt-6 bg-gray-50 rounded-lg border-l-4 border-[#E31E24] p-6 flex justify-between items-center">
        {/* Left Section */}
        <div className="flex items-center gap-4">
          {/* Initials Circle */}
          <div className="w-[54px] h-[54px] rounded-full bg-[#E31E24] flex items-center justify-center">
            <span className="text-white font-bold text-xl" style={{ fontFamily: 'Syne' }}>
              RK
            </span>
          </div>

          {/* Identity Info */}
          <div>
            <h1 className="text-gray-900 text-[18px] font-bold mb-1" style={{ fontFamily: 'Syne' }}>
              Rajesh Kumar
            </h1>
            <div className="text-[13px] text-gray-700 mb-3">
              Savings Account · SB-Branch Mumbai Central
            </div>
            <div className="flex items-center gap-2">
              <span className="px-2 py-1 bg-[#F59E0B] text-white rounded text-xs font-semibold">
                Dormant (26 months)
              </span>
              <span className="px-2 py-1 bg-[#3B82F6] text-white rounded text-xs font-semibold">
                KYC Tier 2
              </span>
              <span className="px-2 py-1 bg-[#E31E24] text-white rounded text-xs font-semibold">
                PEP adjacent
              </span>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="text-right">
          <div className="text-xs text-gray-700 mb-1">Risk Score</div>
          <div className="flex items-center gap-3 mb-2">
            <span className="text-[#E31E24] text-4xl font-bold" style={{ fontFamily: 'Syne' }}>
              87
            </span>
            <span className="px-3 py-1 bg-[#E31E24] text-white rounded text-sm font-bold">
              High
            </span>
          </div>
          <div className="text-[11px] text-[#E31E24] mb-1">
            Last active: 14:23 today (after 26mo dormancy)
          </div>
          <div className="text-[11px] text-gray-700">
            Opened: March 2019 · PAN: XXXXX1234X (masked)
          </div>
        </div>
      </div>

      {/* Main 3-Column Layout */}
      <div className="mx-6 mt-6 grid grid-cols-[320px_1fr_320px] gap-6">
        {/* LEFT COLUMN - Account Metrics */}
        <div className="space-y-6">
          <div>
            <h3 className="text-sm text-gray-700 mb-3">Account metrics</h3>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <div className="text-xs text-gray-700 mb-1">Avg monthly txn volume</div>
                <div className="text-gray-900 text-lg font-bold" style={{ fontFamily: 'Syne' }}>
                  ₹12,400
                </div>
              </div>
              <div className="bg-white border border-[#E31E24] rounded-lg p-4">
                <div className="text-xs text-gray-700 mb-1">Current month</div>
                <div className="text-[#E31E24] text-lg font-bold" style={{ fontFamily: 'Syne' }}>
                  ₹47,23,000
                </div>
                <div className="text-xs text-[#E31E24] mt-1">3,800% over baseline</div>
              </div>
              <div className="bg-white border border-[#F59E0B] rounded-lg p-4">
                <div className="text-xs text-gray-700 mb-1">Counterparties (30d)</div>
                <div className="text-[#F59E0B] text-lg font-bold" style={{ fontFamily: 'Syne' }}>
                  8
                </div>
                <div className="text-xs text-[#F59E0B] mt-1">Unusual for type</div>
              </div>
              <div className="bg-white border border-[#E31E24] rounded-lg p-4">
                <div className="text-xs text-gray-700 mb-1">In/Out ratio</div>
                <div className="text-[#E31E24] text-lg font-bold" style={{ fontFamily: 'Syne' }}>
                  97%/3%
                </div>
                <div className="text-xs text-[#E31E24] mt-1">Nearly all inbound</div>
              </div>
            </div>
          </div>

          {/* Peer Comparison */}
          <div className="bg-white border border-gray-200 rounded-lg p-4">
            <h3 className="text-sm text-gray-700 mb-4">Peer comparison</h3>
            <div className="space-y-4">
              {[
                { label: 'Txn frequency', peer: 70, account: 85, alert: false },
                { label: 'Avg amount', peer: 60, account: 95, alert: true },
                { label: 'Counterparties', peer: 40, account: 88, alert: true },
                { label: 'Dormancy risk', peer: 20, account: 92, alert: true },
                { label: 'KYC compliance', peer: 85, account: 65, alert: false },
              ].map((metric, idx) => (
                <div key={idx}>
                  <div className="flex justify-between text-xs text-gray-700 mb-1">
                    <span>{metric.label}</span>
                    <span>{metric.account}%</span>
                  </div>
                  <div className="relative h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="absolute h-full bg-[#E31E24] opacity-30 rounded-full"
                      style={{ width: `${metric.peer}%` }}
                    />
                    <div
                      className={`absolute h-full rounded-full ${
                        metric.alert ? 'bg-[#E31E24]' : 'bg-[#E31E24]'
                      }`}
                      style={{ width: `${metric.account}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 pt-3 border-t border-gray-200 text-xs text-gray-700">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-3 h-2 bg-[#E31E24] opacity-30 rounded" />
                <span>Peer average (similar accounts)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-2 bg-[#E31E24] rounded" />
                <span>This account (deviations)</span>
              </div>
            </div>
          </div>
        </div>

        {/* CENTER COLUMN - Transaction History */}
        <div>
          <h3 className="text-sm text-gray-700 mb-3">Transaction history</h3>
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-xs" style={{ fontFamily: 'DM Mono' }}>
                <thead>
                  <tr className="bg-gray-50 text-gray-700 text-left">
                    <th className="py-3 px-3 w-4"></th>
                    <th className="py-3 px-3">Date</th>
                    <th className="py-3 px-3">Time</th>
                    <th className="py-3 px-3">Counterparty</th>
                    <th className="py-3 px-3 text-right">Amount</th>
                    <th className="py-3 px-3">Channel</th>
                    <th className="py-3 px-3">Risk</th>
                  </tr>
                </thead>
                <tbody>
                  {transactions.map((txn, idx) => (
                    <tr
                      key={idx}
                      className={`border-t border-gray-200 hover:bg-gray-50 transition-colors ${
                        txn.flagged ? 'bg-gray-50' : ''
                      }`}
                    >
                      <td className="py-2 px-3">
                        {txn.flagged && <div className="w-2 h-2 rounded-full bg-[#E31E24]" />}
                      </td>
                      <td className="py-2 px-3 text-gray-700">{txn.date}</td>
                      <td className="py-2 px-3 text-gray-700">{txn.time}</td>
                      <td className="py-2 px-3 text-gray-900">{txn.counterparty}</td>
                      <td
                        className={`py-2 px-3 text-right font-bold ${
                          txn.flagged ? 'text-[#E31E24]' : 'text-gray-900'
                        }`}
                      >
                        {txn.amount}
                      </td>
                      <td className="py-2 px-3 text-gray-700">{txn.channel}</td>
                      <td className="py-2 px-3">
                        {txn.flagged && (
                          <span className="px-2 py-1 bg-[#E31E24] text-white rounded text-[10px] font-bold">
                            High
                          </span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="bg-gray-50 px-4 py-3 text-xs text-gray-700 border-t border-gray-200">
              Showing 20 of 847 total transactions
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN - Network & Related */}
        <div className="space-y-6">
          {/* Network Connections */}
          <div>
            <h3 className="text-sm text-gray-700 mb-3">Network connections</h3>
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <svg className="w-full h-[180px]">
                <defs>
                  <marker id="mini-marker" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                    <path d="M0,0 L0,6 L6,3 z" fill="#E31E24" opacity="0.4" />
                  </marker>
                </defs>
                
                {/* Center node (this account) */}
                <circle cx="50%" cy="50%" r="18" fill="white" stroke="#E31E24" strokeWidth="2" />
                <text x="50%" y="50%" textAnchor="middle" dy="0.35em" fill="#333" fontSize="9">
                  ACC-0041
                </text>
                
                {/* Connected nodes */}
                {[
                  { x: 30, y: 20, label: '0112', color: '#F59E0B' },
                  { x: 70, y: 20, label: '0203', color: '#F59E0B' },
                  { x: 85, y: 50, label: '0089', color: '#E31E24' },
                  { x: 70, y: 80, label: '0317', color: '#F59E0B' },
                  { x: 30, y: 80, label: '0455', color: '#F59E0B' },
                  { x: 15, y: 50, label: '0521', color: '#666' },
                ].map((node, idx) => (
                  <g key={idx}>
                    <line
                      x1="50%"
                      y1="50%"
                      x2={`${node.x}%`}
                      y2={`${node.y}%`}
                      stroke="#E31E24"
                      strokeWidth="1"
                      opacity="0.3"
                      markerEnd="url(#mini-marker)"
                    />
                    <circle cx={`${node.x}%`} cy={`${node.y}%`} r="12" fill="white" stroke={node.color} strokeWidth="2" />
                    <text x={`${node.x}%`} y={`${node.y}%`} textAnchor="middle" dy="0.35em" fill="#333" fontSize="8">
                      {node.label}
                    </text>
                  </g>
                ))}
              </svg>
              <button className="w-full mt-3 text-[#E31E24] hover:underline text-xs flex items-center justify-center gap-1">
                <Eye className="w-3 h-3" />
                View in full graph
              </button>
            </div>
          </div>

          {/* Investigation History */}
          <div>
            <h3 className="text-sm text-gray-700 mb-3">Investigation history</h3>
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <div className="text-xs text-gray-700" style={{ fontFamily: 'DM Mono' }}>
                No prior STRs filed
              </div>
              <div className="mt-3 pt-3 border-t border-gray-200 space-y-2">
                <div className="text-xs">
                  <div className="text-gray-900 mb-1">Watch flags:</div>
                  <div className="text-gray-700">• Added to dormant watch (Oct 2024)</div>
                  <div className="text-gray-700">• KYC review pending (Feb 2026)</div>
                </div>
              </div>
            </div>
          </div>

          {/* Related Entities */}
          <div>
            <h3 className="text-sm text-gray-700 mb-3">Related entities</h3>
            <div className="space-y-2">
              {[
                { name: 'Priya Kumar', relation: 'Same address', risk: 42, color: 'text-[#E31E24]' },
                { name: 'Amit Sharma', relation: 'Same mobile', risk: 68, color: 'text-[#F59E0B]' },
                { name: 'ACC-0892', relation: 'Shared device login', risk: 81, color: 'text-[#E31E24]' },
              ].map((entity, idx) => (
                <div key={idx} className="bg-white border border-gray-200 rounded-lg p-3 flex items-center justify-between">
                  <div className="flex-1">
                    <div className="text-gray-900 text-xs font-medium">{entity.name}</div>
                    <div className="text-gray-700 text-[10px]">{entity.relation}</div>
                  </div>
                  <div className={`text-sm font-bold ${entity.color}`}>{entity.risk}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Action Bar */}
      <div className="fixed bottom-0 left-0 right-0 h-[56px] bg-white border-t border-gray-200 flex items-center justify-between px-6">
        <div className="flex items-center gap-3">
          <button className="px-4 py-2 border border-gray-700 text-gray-700 hover:bg-gray-100 transition-colors rounded text-sm flex items-center gap-2">
            <Plus className="w-4 h-4" />
            Add to watchlist
          </button>
          <button className="px-4 py-2 border border-gray-700 text-gray-700 hover:bg-gray-100 transition-colors rounded text-sm flex items-center gap-2">
            <Flag className="w-4 h-4" />
            Flag for enhanced monitoring
          </button>
        </div>
        <button className="px-6 py-2 bg-[#E31E24] text-white hover:bg-[#d4183d] transition-colors rounded text-sm font-bold flex items-center gap-2"
          style={{ fontFamily: 'Syne' }}
        >
          Create investigation case ↗
        </button>
      </div>
    </div>
  );
}
