export default function MiniFlowGraph() {
  // Compact version of the flow graph for the STR screen
  const nodes = [
    { id: 'ACC-0041', x: 15, y: 50, r: 16, color: '#F59E0B' },
    { id: 'ACC-0112', x: 30, y: 35, r: 12, color: '#F59E0B' },
    { id: 'ACC-0203', x: 30, y: 65, r: 12, color: '#F59E0B' },
    { id: 'ACC-0089', x: 50, y: 50, r: 16, color: '#E31E24' },
    { id: 'ACC-0317', x: 70, y: 35, r: 12, color: '#F59E0B' },
    { id: 'ACC-0455', x: 70, y: 65, r: 12, color: '#F59E0B' },
    { id: 'ACC-0041-R', x: 85, y: 50, r: 14, color: '#E31E24' },
  ];

  const arrows = [
    { from: nodes[0], to: nodes[1] },
    { from: nodes[0], to: nodes[2] },
    { from: nodes[1], to: nodes[3] },
    { from: nodes[2], to: nodes[3] },
    { from: nodes[3], to: nodes[4] },
    { from: nodes[3], to: nodes[5] },
    { from: nodes[4], to: nodes[6] },
    { from: nodes[5], to: nodes[6] },
  ];

  return (
    <div className="bg-gray-50 border border-gray-200 rounded-lg p-4" style={{ height: '340px' }}>
      <svg className="w-full h-full">
        <defs>
          <marker
            id="mini-arrow"
            markerWidth="6"
            markerHeight="6"
            refX="5"
            refY="3"
            orient="auto"
          >
            <path d="M0,0 L0,6 L6,3 z" fill="#E31E24" opacity="0.6" />
          </marker>
        </defs>

        {/* Arrows */}
        {arrows.map((arrow, idx) => (
          <line
            key={idx}
            x1={`${arrow.from.x}%`}
            y1={`${arrow.from.y}%`}
            x2={`${arrow.to.x}%`}
            y2={`${arrow.to.y}%`}
            stroke="#E31E24"
            strokeWidth="1.5"
            strokeDasharray="3 3"
            opacity="0.6"
            markerEnd="url(#mini-arrow)"
          />
        ))}

        {/* Curved return arrow */}
        <path
          d={`M ${nodes[3].x}% ${nodes[3].y}% Q 50% 15%, ${nodes[6].x}% ${nodes[6].y}%`}
          fill="none"
          stroke="#E31E24"
          strokeWidth="2"
          strokeDasharray="3 3"
          opacity="0.7"
          markerEnd="url(#mini-arrow)"
        />

        {/* Nodes */}
        {nodes.map((node) => (
          <g key={node.id}>
            <circle
              cx={`${node.x}%`}
              cy={`${node.y}%`}
              r={node.r}
              fill="white"
              stroke={node.color}
              strokeWidth="2.5"
              style={{ filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.08))' }}
            />
          </g>
        ))}
      </svg>
    </div>
  );
}
