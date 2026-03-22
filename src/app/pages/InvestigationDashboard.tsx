import { useState } from 'react';
import { useNavigate } from 'react-router';
import { AlertTriangle, TrendingUp, Clock, ExternalLink, ChevronRight } from 'lucide-react';
import GraphNode from '../components/GraphNode';
import FlowArrow from '../components/FlowArrow';
import NodeTooltip from '../components/NodeTooltip';

interface Alert {
  id: string;
  caseId: string;
  priority: 'critical' | 'high' | 'medium';
  typology: string;
  amount: string;
  accounts: number;
  time: string;
  confidence: number;
}

interface NodeData {
  id: string;
  x: number;
  y: number;
  radius: number;
  label: string;
  sublabel?: string;
  amount?: string;
  timestamp?: string;
  color: 'amber' | 'red' | 'teal' | 'teal-dashed';
  glow?: boolean;
  critical?: boolean;
}

interface ArrowData {
  id: string;
  from: { x: number; y: number };
  to: { x: number; y: number };
  amount: string;
  color?: 'teal' | 'red';
  curved?: boolean;
}

export default function InvestigationDashboard() {
  const navigate = useNavigate();
  const [selectedAlert, setSelectedAlert] = useState<string>('CASE-2847');
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });

  const alerts: Alert[] = [
    {
      id: '1',
      caseId: 'CASE-2847',
      priority: 'critical',
      typology: 'Round-trip Layering',
      amount: '₹47.2L',
      accounts: 7,
      time: '2m ago',
      confidence: 94,
    },
    {
      id: '2',
      caseId: 'CASE-2848',
      priority: 'high',
      typology: 'Smurfing Pattern',
      amount: '₹23.1L',
      accounts: 14,
      time: '8m ago',
      confidence: 87,
    },
    {
      id: '3',
      caseId: 'CASE-2849',
      priority: 'high',
      typology: 'Shell Company Flow',
      amount: '₹156.4L',
      accounts: 5,
      time: '14m ago',
      confidence: 91,
    },
    {
      id: '4',
      caseId: 'CASE-2850',
      priority: 'medium',
      typology: 'Trade-Based Laundering',
      amount: '₹89.7L',
      accounts: 9,
      time: '22m ago',
      confidence: 78,
    },
  ];

  const nodes: NodeData[] = [
    {
      id: 'ACC-0041',
      x: 15,
      y: 50,
      radius: 28,
      label: 'ACC-0041',
      sublabel: 'Dormant→Active',
      timestamp: '14:23',
      color: 'amber',
      glow: true,
    },
    {
      id: 'ACC-0112',
      x: 32,
      y: 35,
      radius: 18,
      label: 'ACC-0112',
      amount: '₹7.8L',
      timestamp: '14:28',
      color: 'amber',
    },
    {
      id: 'ACC-0203',
      x: 32,
      y: 65,
      radius: 18,
      label: 'ACC-0203',
      amount: '₹9.1L',
      timestamp: '14:31',
      color: 'amber',
    },
    {
      id: 'ACC-0089',
      x: 50,
      y: 50,
      radius: 26,
      label: 'ACC-0089',
      amount: 'Hub ₹46.8L',
      timestamp: '14:45',
      color: 'red',
      glow: true,
      critical: true,
    },
    {
      id: 'ACC-0317',
      x: 68,
      y: 35,
      radius: 18,
      label: 'ACC-0317',
      amount: '₹8.4L',
      timestamp: '14:52',
      color: 'amber',
    },
    {
      id: 'ACC-0455',
      x: 68,
      y: 65,
      radius: 18,
      label: 'ACC-0455',
      amount: '₹8.9L',
      timestamp: '14:55',
      color: 'amber',
    },
    {
      id: 'ACC-0041-return',
      x: 85,
      y: 50,
      radius: 24,
      label: 'ACC-0041',
      sublabel: 'Origin ← Return',
      timestamp: '15:02',
      color: 'teal-dashed',
    },
  ];

  const arrows: ArrowData[] = [
    { id: 'a1', from: nodes[0], to: nodes[1], amount: '₹7.8L' },
    { id: 'a2', from: nodes[0], to: nodes[2], amount: '₹9.1L' },
    { id: 'a3', from: nodes[1], to: nodes[3], amount: '₹7.8L' },
    { id: 'a4', from: nodes[2], to: nodes[3], amount: '₹9.1L' },
    { id: 'a5', from: nodes[3], to: nodes[4], amount: '₹8.4L' },
    { id: 'a6', from: nodes[3], to: nodes[5], amount: '₹8.9L' },
    { id: 'a7', from: nodes[4], to: nodes[6], amount: '₹8.4L' },
    { id: 'a8', from: nodes[5], to: nodes[6], amount: '₹8.9L' },
    {
      id: 'a9',
      from: nodes[3],
      to: nodes[6],
      amount: '₹29.5L',
      color: 'red',
      curved: true,
    },
  ];

  const handleNodeHover = (nodeId: string | null, x?: number, y?: number) => {
    setHoveredNode(nodeId);
    if (nodeId && x !== undefined && y !== undefined) {
      setTooltipPosition({ x, y });
    }
  };

  const handleNodeClick = (nodeId: string) => {
    navigate(`/entity/${nodeId}`);
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'critical':
        return 'bg-[#EF4444]';
      case 'high':
        return 'bg-[#F59E0B]';
      case 'medium':
        return 'bg-[#3B82F6]';
      default:
        return 'bg-[#6B7280]';
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Top Bar */}
      <div className="h-[64px] bg-white border-b border-gray-200 flex items-center justify-between px-8">
        <div className="flex items-center gap-6">
          <div>
            <h1 className="text-gray-900 text-lg font-bold" style={{ fontFamily: 'Syne' }}>
              FundLens AML Platform
            </h1>
            <p className="text-gray-600 text-xs">Union Bank of India · Investigation Dashboard</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500" />
            <span className="text-gray-600 text-xs">System Active</span>
          </div>
          <div className="text-gray-600 text-xs" style={{ fontFamily: 'DM Mono' }}>
            {new Date().toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' })}
          </div>
        </div>
      </div>

      {/* 3-Column Layout */}
      <div className="flex h-[calc(100vh-64px)]">
        {/* LEFT COLUMN: Alert Queue */}
        <div className="w-[320px] bg-white border-r border-gray-200 flex flex-col">
          <div className="p-4 border-b border-gray-200">
            <h2 className="text-gray-900 font-bold text-sm mb-1" style={{ fontFamily: 'Syne' }}>
              Active Alerts
            </h2>
            <p className="text-gray-600 text-xs">GNN-detected patterns requiring review</p>
          </div>

          <div className="flex-1 overflow-auto">
            {alerts.map((alert) => (
              <div
                key={alert.id}
                onClick={() => setSelectedAlert(alert.caseId)}
                className={`p-4 border-b border-gray-200 cursor-pointer transition-colors ${
                  selectedAlert === alert.caseId
                    ? 'bg-gray-50 border-l-2 border-l-[#E31E24]'
                    : 'hover:bg-gray-50'
                }`}
              >
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${getPriorityColor(alert.priority)}`} />
                    <span
                      className="text-gray-900 text-xs font-bold"
                      style={{ fontFamily: 'DM Mono' }}
                    >
                      {alert.caseId}
                    </span>
                  </div>
                  <div className="flex items-center gap-1 text-gray-600">
                    <Clock className="w-3 h-3" />
                    <span className="text-xs">{alert.time}</span>
                  </div>
                </div>

                <div className="text-gray-900 text-sm mb-2">{alert.typology}</div>

                <div
                  className="flex items-center justify-between text-xs mb-2"
                  style={{ fontFamily: 'DM Mono' }}
                >
                  <span className="text-gray-600">{alert.accounts} accounts</span>
                  <span className="text-gray-900 font-bold">{alert.amount}</span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <TrendingUp className="w-3 h-3 text-[#E31E24]" />
                    <span className="text-[#E31E24] text-xs font-bold">
                      {alert.confidence}% confidence
                    </span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-gray-600" />
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 border-t border-gray-200">
            <div className="text-xs text-gray-600" style={{ fontFamily: 'DM Mono' }}>
              <div className="flex justify-between mb-1">
                <span>Alerts today:</span>
                <span className="text-gray-900">47</span>
              </div>
              <div className="flex justify-between">
                <span>Under review:</span>
                <span className="text-gray-900">4</span>
              </div>
            </div>
          </div>
        </div>

        {/* CENTER COLUMN: Graph Visualization */}
        <div className="flex-1 relative bg-gradient-to-br from-gray-50 to-gray-100 border-x border-gray-200">
          <svg className="w-full h-full">
            <defs>
              <marker
                id="arrowhead-teal"
                markerWidth="10"
                markerHeight="10"
                refX="9"
                refY="3"
                orient="auto"
                markerUnits="strokeWidth"
              >
                <path d="M0,0 L0,6 L9,3 z" fill="#00C9A7" opacity="0.55" />
              </marker>
              <marker
                id="arrowhead-red"
                markerWidth="10"
                markerHeight="10"
                refX="9"
                refY="3"
                orient="auto"
                markerUnits="strokeWidth"
              >
                <path d="M0,0 L0,6 L9,3 z" fill="#EF4444" opacity="0.7" />
              </marker>

              <filter id="amber-glow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              <filter id="red-glow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="6" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {arrows.map((arrow) => (
              <FlowArrow key={arrow.id} {...arrow} />
            ))}

            {nodes.map((node) => (
              <GraphNode
                key={node.id}
                {...node}
                onHover={handleNodeHover}
                onClick={handleNodeClick}
              />
            ))}
          </svg>

          {hoveredNode && (
            <NodeTooltip nodeId={hoveredNode} x={tooltipPosition.x} y={tooltipPosition.y} />
          )}

          {/* Critical chip for ACC-0089 */}
          <div className="absolute left-[50%] top-[calc(50%+40px)] -translate-x-1/2 pointer-events-none">
            <div
              className="px-2 py-1 bg-[#EF4444] text-white text-[10px] font-bold rounded flex items-center gap-1"
              style={{ fontFamily: 'Syne' }}
            >
              <div className="w-1.5 h-1.5 rounded-full bg-white" />
              CRITICAL
            </div>
          </div>

          {/* Bottom-Left: Typology */}
          <div className="absolute bottom-6 left-6 w-[260px] bg-white border border-gray-200 rounded-lg p-4">
            <div className="text-xs text-gray-600 mb-3">Typology detected</div>
            <div className="flex items-center gap-2 bg-gray-50 px-3 py-2 rounded-md mb-3">
              <div className="w-2 h-2 rounded-full bg-[#E31E24]" />
              <span className="text-sm text-gray-900 font-medium">Round-trip Layering</span>
            </div>
            <div className="space-y-2 text-xs" style={{ fontFamily: 'DM Mono' }}>
              <div className="text-gray-600">
                <span className="text-gray-900">3 hops</span> · <span className="text-gray-900">₹47.2L</span> cycled
              </div>
              <div className="text-gray-600">
                <span className="text-gray-900">6h 14m</span> · GNN confidence{' '}
                <span className="text-[#E31E24] font-bold">94%</span>
              </div>
            </div>
          </div>

          {/* Bottom-Right: Legend */}
          <div className="absolute bottom-6 right-6 bg-white border border-gray-200 rounded-lg p-4">
            <div className="space-y-2 text-xs" style={{ fontFamily: 'DM Mono' }}>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#EF4444]" />
                <span className="text-gray-600">Critical</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#F59E0B]" />
                <span className="text-gray-600">Medium</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#E31E24]" />
                <span className="text-gray-600">Origin/clean</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-[1px] border-t border-dashed border-[#E31E24]" />
                <span className="text-gray-600">Return path</span>
              </div>
            </div>
          </div>

          {/* Expand button */}
          <button
            onClick={() => navigate('/graph')}
            className="absolute top-6 right-6 px-3 py-2 bg-white border border-gray-200 text-gray-600 hover:bg-gray-50 transition-colors rounded text-xs flex items-center gap-2"
          >
            <ExternalLink className="w-3 h-3" />
            Expand view
          </button>
        </div>

        {/* RIGHT COLUMN: Case Details */}
        <div className="w-[340px] bg-white border-l border-gray-200 flex flex-col overflow-auto">
          <div className="p-4 border-b border-gray-200">
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-gray-900 font-bold text-sm" style={{ fontFamily: 'Syne' }}>
                Case Details
              </h2>
              <div className="px-2 py-1 bg-[#E31E24] text-white text-[10px] font-bold rounded">
                CRITICAL
              </div>
            </div>
            <p
              className="text-gray-600 text-xs"
              style={{ fontFamily: 'DM Mono' }}
            >
              CASE-2847
            </p>
          </div>

          <div className="flex-1 p-4 space-y-4">
            {/* Key Metrics */}
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <h3 className="text-xs text-gray-600 mb-3 font-semibold">Key Metrics</h3>
              <div className="space-y-3 text-sm" style={{ fontFamily: 'DM Mono' }}>
                <div className="flex justify-between">
                  <span className="text-gray-600">Total amount:</span>
                  <span className="text-gray-900 font-bold">₹47,23,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Accounts:</span>
                  <span className="text-gray-900">7</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Hops:</span>
                  <span className="text-gray-900">3</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Duration:</span>
                  <span className="text-gray-900">6h 14m</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Risk score:</span>
                  <span className="text-[#E31E24] font-bold">94%</span>
                </div>
              </div>
            </div>

            {/* Accounts Involved */}
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <h3 className="text-xs text-gray-600 mb-3 font-semibold">Accounts Involved</h3>
              <div className="space-y-2">
                {[
                  { id: 'ACC-0041', role: 'Origin', risk: 'high' },
                  { id: 'ACC-0089', role: 'Hub', risk: 'critical' },
                  { id: 'ACC-0112', role: 'Intermediary', risk: 'medium' },
                  { id: 'ACC-0203', role: 'Intermediary', risk: 'medium' },
                ].map((account) => (
                  <div
                    key={account.id}
                    onClick={() => navigate(`/entity/${account.id}`)}
                    className="flex items-center justify-between p-2 bg-white rounded hover:bg-gray-100 cursor-pointer transition-colors border border-gray-100"
                  >
                    <div>
                      <div
                        className="text-gray-900 text-xs font-bold"
                        style={{ fontFamily: 'DM Mono' }}
                      >
                        {account.id}
                      </div>
                      <div className="text-gray-600 text-xs">{account.role}</div>
                    </div>
                    <div
                      className={`w-2 h-2 rounded-full ${
                        account.risk === 'critical'
                          ? 'bg-[#E31E24]'
                          : account.risk === 'high'
                          ? 'bg-[#F59E0B]'
                          : 'bg-[#3B82F6]'
                      }`}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Regulatory Info */}
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <h3 className="text-xs text-gray-600 mb-3 font-semibold">Regulatory Reference</h3>
              <div className="space-y-2 text-xs" style={{ fontFamily: 'DM Mono' }}>
                <div className="text-gray-900 font-medium">PMLA Section 16</div>
                <div className="text-gray-900 font-medium">FATF Typology 12</div>
                <div className="text-gray-600">Round-trip Layering Pattern</div>
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-2">
              <button
                onClick={() => navigate('/str-generation')}
                className="w-full px-4 py-3 bg-[#E31E24] text-white hover:bg-[#d4183d] transition-colors rounded font-bold text-sm"
                style={{ fontFamily: 'Syne' }}
              >
                Generate STR Report
              </button>
              <button
                onClick={() => navigate('/entity/ACC-0041')}
                className="w-full px-4 py-3 border border-gray-300 text-gray-900 hover:bg-gray-50 transition-colors rounded text-sm"
              >
                View Entity Details
              </button>
              <button className="w-full px-4 py-3 border border-gray-300 text-gray-900 hover:bg-gray-50 transition-colors rounded text-sm">
                Assign to Investigator
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
