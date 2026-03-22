import { Settings, Plus, Database, Activity } from 'lucide-react';
import { useState } from 'react';

export default function AdminConfig() {
  const [activeTab, setActiveTab] = useState('data');
  const [velocityThreshold, setVelocityThreshold] = useState(15);
  const [dormancyPeriod, setDormancyPeriod] = useState(6);
  const [gnnConfidence, setGnnConfidence] = useState(70);

  return (
    <div className="min-h-screen bg-white flex">
      {/* Left Sidebar */}
      <div className="w-[220px] bg-white border-r border-gray-200 flex flex-col">
        {/* Logo */}
        <div className="h-[72px] flex items-center justify-center border-b border-gray-200">
          <div className="text-gray-900 text-xl font-bold" style={{ fontFamily: 'Syne' }}>
            FundLens
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 py-4">
          {[
            { id: 'data', label: 'Data connections', icon: Database },
            { id: 'thresholds', label: 'Detection thresholds', icon: Activity },
            { id: 'gnn', label: 'GNN model settings', icon: Settings },
            { id: 'users', label: 'User management', icon: Settings },
            { id: 'blockchain', label: 'Blockchain config', icon: Settings },
            { id: 'fiu', label: 'FIU integration', icon: Settings },
            { id: 'audit', label: 'Audit log', icon: Settings },
          ].map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full h-[40px] px-4 flex items-center gap-3 text-sm transition-colors ${
                  isActive
                    ? 'bg-[#E31E24] text-white border-l-2 border-[#E31E24]'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
                style={{ fontFamily: 'Syne' }}
              >
                <Icon className="w-4 h-4" />
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* System Status */}
        <div className="p-4 border-t border-gray-200">
          <div className="text-xs text-gray-700 mb-3 font-semibold" style={{ fontFamily: 'Syne' }}>
            System status
          </div>
          <div className="space-y-2">
            {[
              { label: 'Kafka', status: 'online' },
              { label: 'Neo4j', status: 'online' },
              { label: 'GNN', status: 'online' },
            ].map((sys, idx) => (
              <div key={idx} className="flex items-center gap-2 text-xs">
                <div className="w-2 h-2 rounded-full bg-green-500" />
                <span className="text-gray-700">{sys.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8 overflow-auto">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-gray-900 text-3xl font-bold mb-2" style={{ fontFamily: 'Syne' }}>
            Data connections
          </h1>
          <p className="text-gray-700 text-sm">
            Connect FundLens to your bank's transaction systems
          </p>
        </div>

        {/* Data Source Cards */}
        <div className="grid grid-cols-2 gap-6 mb-8 max-w-[650px]">
          {/* Core Banking System */}
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-5 h-[140px] flex flex-col justify-between">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-gray-900 font-semibold mb-1" style={{ fontFamily: 'Syne' }}>
                  Core Banking System
                </h3>
                <div className="inline-block px-2 py-1 bg-[#E31E24] text-white rounded text-xs font-semibold">
                  CONNECTED
                </div>
              </div>
              <Settings className="w-4 h-4 text-gray-700 cursor-pointer hover:text-gray-900" />
            </div>
            <div className="text-gray-700 text-xs" style={{ fontFamily: 'DM Mono' }}>
              Infosys Finacle · Branch: All · Events/min: 42,000
            </div>
          </div>

          {/* RTGS / NEFT */}
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-5 h-[140px] flex flex-col justify-between">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-gray-900 font-semibold mb-1" style={{ fontFamily: 'Syne' }}>
                  RTGS / NEFT
                </h3>
                <div className="inline-block px-2 py-1 bg-[#E31E24] text-white rounded text-xs font-semibold">
                  CONNECTED
                </div>
              </div>
              <Settings className="w-4 h-4 text-gray-700 cursor-pointer hover:text-gray-900" />
            </div>
            <div className="text-gray-700 text-xs" style={{ fontFamily: 'DM Mono' }}>
              RBI SFMS connector · Real-time · Last sync: 2s ago
            </div>
          </div>

          {/* UPI / IMPS */}
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-5 h-[140px] flex flex-col justify-between">
            <div>
              <h3 className="text-gray-900 font-semibold mb-1" style={{ fontFamily: 'Syne' }}>
                UPI / IMPS
              </h3>
              <div className="inline-block px-2 py-1 bg-[#F59E0B] text-white rounded text-xs font-semibold">
                CONNECTING...
              </div>
            </div>
            <div>
              <div className="text-gray-700 text-xs mb-2">NPCI switch connection in progress</div>
              <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-[#F59E0B] rounded-full" style={{ width: '67%' }} />
              </div>
            </div>
          </div>

          {/* SWIFT */}
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-5 h-[140px] flex flex-col justify-between">
            <div>
              <h3 className="text-gray-900 font-semibold mb-1" style={{ fontFamily: 'Syne' }}>
                SWIFT
              </h3>
              <div className="inline-block px-2 py-1 bg-gray-500 text-white rounded text-xs font-semibold">
                NOT CONFIGURED
              </div>
            </div>
            <div>
              <div className="text-gray-700 text-xs mb-2">Required for cross-border monitoring</div>
              <button className="text-[#E31E24] hover:underline text-xs flex items-center gap-1">
                Configure ↗
              </button>
            </div>
          </div>
        </div>

        <button className="px-4 py-2 border border-[#E31E24] text-[#E31E24] hover:bg-[#E31E24] hover:text-white transition-colors rounded flex items-center gap-2 text-sm font-semibold mb-12">
          <Plus className="w-4 h-4" />
          Add data source
        </button>

        {/* Threshold Configuration */}
        <div className="max-w-[800px]">
          <h2 className="text-gray-900 text-2xl font-bold mb-6" style={{ fontFamily: 'Syne' }}>
            Detection thresholds
          </h2>

          <div className="space-y-6">
            {/* Structuring threshold (locked) */}
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-5">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <div className="text-gray-900 font-semibold mb-1">Structuring threshold</div>
                  <div className="text-xs text-gray-700">PMLA default — locked</div>
                </div>
                <div className="text-[#E31E24] text-lg font-bold" style={{ fontFamily: 'DM Mono' }}>
                  ₹2,00,000
                </div>
              </div>
              <div className="h-2 bg-gray-200 rounded-full relative">
                <div className="absolute h-full w-full bg-gray-400 opacity-30 rounded-full" />
              </div>
            </div>

            {/* Alert on velocity */}
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-5">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <div className="text-gray-900 font-semibold mb-1">Alert on velocity (per 24h)</div>
                  <div className="text-xs text-gray-700">₹10L – ₹50L</div>
                </div>
                <div className="text-[#E31E24] text-lg font-bold" style={{ fontFamily: 'DM Mono' }}>
                  ₹{velocityThreshold}L
                </div>
              </div>
              <input
                type="range"
                min="10"
                max="50"
                value={velocityThreshold}
                onChange={(e) => setVelocityThreshold(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-full appearance-none cursor-pointer"
                style={{
                  accentColor: '#E31E24',
                }}
              />
            </div>

            {/* Dormancy period */}
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-5">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <div className="text-gray-900 font-semibold mb-1">Dormancy period (months)</div>
                  <div className="text-xs text-gray-700">3 – 24</div>
                </div>
                <div className="text-[#E31E24] text-lg font-bold" style={{ fontFamily: 'DM Mono' }}>
                  {dormancyPeriod}
                </div>
              </div>
              <input
                type="range"
                min="3"
                max="24"
                value={dormancyPeriod}
                onChange={(e) => setDormancyPeriod(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-full appearance-none cursor-pointer"
                style={{
                  accentColor: '#E31E24',
                }}
              />
            </div>

            {/* GNN confidence */}
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-5">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <div className="text-gray-900 font-semibold mb-1">GNN confidence threshold</div>
                  <div className="text-xs text-gray-700">60% – 95%</div>
                </div>
                <div className="text-[#E31E24] text-lg font-bold" style={{ fontFamily: 'DM Mono' }}>
                  {gnnConfidence}%
                </div>
              </div>
              <input
                type="range"
                min="60"
                max="95"
                value={gnnConfidence}
                onChange={(e) => setGnnConfidence(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-full appearance-none cursor-pointer"
                style={{
                  accentColor: '#E31E24',
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Right Side Panel */}
      <div className="w-[300px] bg-white border-l border-gray-200 p-6">
        <h3 className="text-gray-900 text-sm font-bold mb-4" style={{ fontFamily: 'Syne' }}>
          Connection health
        </h3>

        <div className="space-y-6">
          {/* Events/sec */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs text-gray-700">Events/sec</span>
              <span className="text-sm text-gray-900 font-bold" style={{ fontFamily: 'DM Mono' }}>
                682
              </span>
            </div>
            <svg className="w-full h-12">
              <polyline
                points="0,40 10,35 20,38 30,30 40,32 50,28 60,25 70,30 80,22 90,20 100,18"
                fill="none"
                stroke="#E31E24"
                strokeWidth="2"
                vectorEffect="non-scaling-stroke"
                transform="scale(2.6, 1)"
              />
            </svg>
          </div>

          {/* Graph write latency */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs text-gray-700">Graph write latency</span>
              <span className="text-sm text-gray-900 font-bold" style={{ fontFamily: 'DM Mono' }}>
                89ms
              </span>
            </div>
            <svg className="w-full h-12">
              <polyline
                points="0,30 10,32 20,28 30,35 40,30 50,32 60,27 70,25 80,28 90,24 100,26"
                fill="none"
                stroke="#3B82F6"
                strokeWidth="2"
                vectorEffect="non-scaling-stroke"
                transform="scale(2.6, 1)"
              />
            </svg>
          </div>

          {/* GNN inference time */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs text-[#B0BED0]">GNN inference time</span>
              <span className="text-sm text-white font-bold" style={{ fontFamily: 'DM Mono' }}>
                142ms
              </span>
            </div>
            <svg className="w-full h-12">
              <polyline
                points="0,35 10,30 20,33 30,28 40,30 50,25 60,27 70,22 80,25 90,20 100,18"
                fill="none"
                stroke="#F59E0B"
                strokeWidth="2"
                vectorEffect="non-scaling-stroke"
                transform="scale(2.6, 1)"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
