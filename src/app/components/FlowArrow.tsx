interface FlowArrowProps {
  from: { x: number; y: number };
  to: { x: number; y: number };
  amount: string;
  color?: 'teal' | 'red';
  curved?: boolean;
}

export default function FlowArrow({
  from,
  to,
  amount,
  color = 'teal',
  curved = false,
}: FlowArrowProps) {
  const fromX = `${from.x}%`;
  const fromY = `${from.y}%`;
  const toX = `${to.x}%`;
  const toY = `${to.y}%`;

  const strokeColor = color === 'red' ? '#E31E24' : '#E31E24';
  const opacity = color === 'red' ? 0.7 : 0.55;
  const markerId = color === 'red' ? 'arrowhead-red' : 'arrowhead-teal';

  let pathD: string;
  let labelX: string;
  let labelY: string;

  if (curved) {
    // Create a curved arc for the return path
    // This goes up and over the other nodes
    const midX = (from.x + to.x) / 2;
    const controlY = 15; // High arc at 15% from top

    pathD = `M ${fromX} ${fromY} Q ${midX}% ${controlY}%, ${toX} ${toY}`;
    labelX = `${midX}%`;
    labelY = `${controlY - 3}%`; // Label above the arc
  } else {
    // Straight line
    pathD = `M ${fromX} ${fromY} L ${toX} ${toY}`;
    const midX = (from.x + to.x) / 2;
    const midY = (from.y + to.y) / 2;
    labelX = `${midX}%`;
    labelY = `${midY - 2}%`; // Label slightly above the line
  }

  return (
    <g>
      {/* Arrow path */}
      <path
        d={pathD}
        fill="none"
        stroke={strokeColor}
        strokeWidth="1.5"
        strokeDasharray="5 5"
        opacity={opacity}
        markerEnd={`url(#${markerId})`}
        className="animate-flow"
      />

      {/* Amount label */}
      <text
        x={labelX}
        y={labelY}
        textAnchor="middle"
        fill="#1a1a1a"
        fontSize="9"
        fontFamily="DM Mono"
        fontWeight="600"
        className="pointer-events-none select-none"
        style={{ textShadow: '0 0 3px rgba(255,255,255,0.8)' }}
      >
        {amount}
      </text>

      <style>{`
        @keyframes flow {
          0% {
            stroke-dashoffset: 0;
          }
          100% {
            stroke-dashoffset: -10;
          }
        }
        .animate-flow {
          animation: flow 1s linear infinite;
        }
      `}</style>
    </g>
  );
}
