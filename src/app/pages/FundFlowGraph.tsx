import { useState } from 'react';
import { useNavigate } from 'react-router';
import { ArrowLeft, Download, ExternalLink } from 'lucide-react';
import GraphNode from '../components/GraphNode';
import FlowArrow from '../components/FlowArrow';
import NodeTooltip from '../components/NodeTooltip';

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

export default function FundFlowGraph() {
  const navigate = useNavigate();
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });

  // Define node positions (percentage-based for responsiveness)
  const nodes: NodeData[] = [
    {
      id: 'ACC-0041',
      x: 15,
      y: 50,
      radius: 34,
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
      radius: 22,
      label: 'ACC-0112',
      amount: '₹7.8L',
      timestamp: '14:28',
      color: 'amber',
    },
    {
      id: 'ACC-0203',
      x: 32,
      y: 65,
      radius: 22,
      label: 'ACC-0203',
      amount: '₹9.1L',
      timestamp: '14:31',
      color: 'amber',
    },
    {
      id: 'ACC-0089',
      x: 50,
      y: 50,
      radius: 32,
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
      radius: 22,
      label: 'ACC-0317',
      amount: '₹8.4L',
      timestamp: '14:52',
      color: 'amber',
    },
    {
      id: 'ACC-0455',
      x: 68,
      y: 65,
      radius: 22,
      label: 'ACC-0455',
      amount: '₹8.9L',
      timestamp: '14:55',
      color: 'amber',
    },
    {
      id: 'ACC-0041-return',
      x: 85,
      y: 50,
      radius: 30,
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

  const handleGenerateSTR = () => {
    navigate('/str-generation');
  };

  const handleNodeClick = (nodeId: string) => {
    navigate(`/entity/${nodeId}`);
  };

  return (
    <div className="min-h-screen bg-white relative">
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

      {/* Graph Canvas */}
      <div className="relative h-[calc(100vh-64px)] overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100">
        <svg className="w-full h-full">
          <defs>
            {/* Arrow markers */}
            <marker
              id="arrowhead-teal"
              markerWidth="10"
              markerHeight="10"
              refX="9"
              refY="3"
              orient="auto"
              markerUnits="strokeWidth"
            >
              <path d="M0,0 L0,6 L9,3 z" fill="#E31E24" opacity="0.55" />
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
              <path d="M0,0 L0,6 L9,3 z" fill="#E31E24" opacity="0.7" />
            </marker>

            {/* Glow filters */}
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

          {/* Arrows (render first, behind nodes) */}
          {arrows.map((arrow) => (
            <FlowArrow key={arrow.id} {...arrow} />
          ))}

          {/* Nodes */}
          {nodes.map((node) => (
            <GraphNode
              key={node.id}
              {...node}
              onHover={handleNodeHover}
              onClick={handleNodeClick}
            />
          ))}
        </svg>

        {/* Tooltip */}
        {hoveredNode && (
          <NodeTooltip
            nodeId={hoveredNode}
            x={tooltipPosition.x}
            y={tooltipPosition.y}
          />
        )}

        {/* Critical chip for ACC-0089 */}
        <div className="absolute left-[50%] top-[calc(50%+50px)] -translate-x-1/2 pointer-events-none">
          <div className="px-2 py-1 bg-[#E31E24] text-white text-[10px] font-bold rounded flex items-center gap-1"
            style={{ fontFamily: 'Syne' }}
          >
            <div className="w-1.5 h-1.5 rounded-full bg-white" />
            CRITICAL
          </div>
        </div>

        {/* Bottom-Left Panel: Typology */}
        <div className="absolute bottom-6 left-6 w-[280px] bg-white border border-gray-200 rounded-lg p-4">
          <div className="text-xs text-gray-700 mb-3">Typology detected</div>
          <div className="flex items-center gap-2 bg-gray-50 px-3 py-2 rounded-md mb-4">
            <div className="w-2 h-2 rounded-full bg-[#E31E24]" />
            <span className="text-sm text-gray-900 font-medium">Round-trip Layering</span>
          </div>
          <div className="space-y-2 mb-4 text-xs" style={{ fontFamily: 'DM Mono' }}>
            <div className="text-gray-700">
              <span className="text-gray-900">3 hops</span> · <span className="text-gray-900">₹47.2L</span> cycled
            </div>
            <div className="text-gray-700">
              <span className="text-gray-900">6h 14m</span> · GNN confidence{' '}
              <span className="text-[#E31E24]">94%</span>
            </div>
          </div>
          <div className="flex gap-2">
            <button className="flex-1 px-3 py-2 border border-gray-700 text-gray-700 hover:bg-gray-100 transition-colors rounded text-xs">
              Trace origin
            </button>
            <button className="flex-1 px-3 py-2 border border-gray-700 text-gray-700 hover:bg-gray-100 transition-colors rounded text-xs">
              Trace destination
            </button>
          </div>
        </div>

        {/* Bottom-Right: Legend */}
        <div className="absolute bottom-6 right-6 bg-white border border-gray-200 rounded-lg p-4">
          <div className="space-y-2 text-xs" style={{ fontFamily: 'DM Mono' }}>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#E31E24]" />
              <span className="text-gray-700">Critical</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#F59E0B]" />
              <span className="text-gray-700">Medium</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#E31E24]" />
              <span className="text-gray-700">Origin/clean</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-[1px] border-t border-dashed border-[#E31E24]" />
              <span className="text-gray-700">Return path</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}