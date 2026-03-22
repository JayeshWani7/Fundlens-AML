import { ArrowLeft, Check, Edit3, ExternalLink, Save, Download, Globe } from 'lucide-react';
import { useNavigate } from 'react-router';
import { useState } from 'react';
import MiniFlowGraph from '../components/MiniFlowGraph';

export default function STRGeneration() {
  const navigate = useNavigate();
  const [language, setLanguage] = useState<'EN' | 'HI'>('EN');

  const today = new Date().toLocaleDateString('en-IN', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });

  const handleExport = () => {
    // Add your export logic here
    console.log('Exporting PDF');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Top Bar */}
      <div className="h-[64px] bg-white border-b border-gray-200 flex items-center justify-between px-8">
        <div className="flex items-center gap-4">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm">Back to Investigation</span>
          </button>
        </div>
        <div className="flex items-center gap-3">
          <button className="px-4 py-2 border border-gray-400 text-gray-600 hover:bg-gray-100 transition-colors rounded text-sm flex items-center gap-2">
            <Save className="w-4 h-4" />
            Save Draft
          </button>
          <button
            onClick={handleExport}
            className="px-4 py-2 border border-gray-400 text-gray-600 hover:bg-gray-100 transition-colors rounded text-sm flex items-center gap-2"
          >
            <Download className="w-4 h-4" />
            Export PDF
          </button>
          <button className="px-6 py-2 bg-[#E31E24] text-white hover:bg-[#d4183d] transition-colors rounded text-sm font-semibold flex items-center gap-2"
            style={{ fontFamily: 'Syne' }}
          >
            Submit to FIU-IND
            <ExternalLink className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Main Content: 50/50 Split */}
      <div className="flex h-[calc(100vh-64px)]">
        {/* LEFT PANEL */}
        <div className="w-1/2 border-r border-gray-200 p-8 overflow-auto">
          {/* Mini Flow Graph */}
          <div className="mb-6">
            <h3 className="text-sm text-gray-600 mb-3">Case Overview</h3>
            <MiniFlowGraph />
          </div>

          {/* Case Summary Card */}
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-5 mb-6">
            <h3 className="text-sm text-gray-600 mb-4">Case Summary</h3>
            <div className="space-y-3 text-sm" style={{ fontFamily: 'DM Mono' }}>
              <div className="flex justify-between">
                <span className="text-gray-600">Case ID:</span>
                <span className="text-gray-900">CASE-2847</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Typology:</span>
                <span className="text-gray-900">Round-trip Layering</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Amount:</span>
                <span className="text-gray-900">₹47,23,000</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Accounts involved:</span>
                <span className="text-gray-900">7</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Risk score:</span>
                <span className="text-[#E31E24] font-bold">94%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Regulatory reference:</span>
                <span className="text-gray-900">PMLA S.16, FATF Typology 12</span>
              </div>
            </div>
          </div>

          {/* Evidence Chain */}
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-5">
            <h3 className="text-sm text-gray-600 mb-4">Evidence Chain</h3>
            <div className="space-y-3">
              {[
                { block: '#48291', time: '14:23:07' },
                { block: '#48292', time: '14:23:09' },
                { block: '#48293', time: '14:23:12' },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 bg-white border border-gray-200 rounded-md p-3"
                >
                  <div className="w-6 h-6 flex items-center justify-center">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect x="2" y="2" width="4" height="4" fill="#E31E24" />
                      <rect x="10" y="2" width="4" height="4" fill="#E31E24" />
                      <rect x="2" y="10" width="4" height="4" fill="#E31E24" />
                      <rect x="10" y="10" width="4" height="4" fill="#E31E24" />
                      <line x1="6" y1="4" x2="10" y2="4" stroke="#E31E24" />
                      <line x1="6" y1="12" x2="10" y2="12" stroke="#E31E24" />
                      <line x1="4" y1="6" x2="4" y2="10" stroke="#E31E24" />
                      <line x1="12" y1="6" x2="12" y2="10" stroke="#E31E24" />
                    </svg>
                  </div>
                  <div className="flex-1 text-xs" style={{ fontFamily: 'DM Mono' }}>
                    <div className="text-gray-900">Block {item.block} · Verified</div>
                  </div>
                  <Check className="w-4 h-4 text-[#E31E24]" />
                </div>
              ))}
            </div>
            <div className="mt-4 text-xs text-gray-600" style={{ fontFamily: 'DM Mono' }}>
              Evidence anchored to Hyperledger Fabric — tamper-proof since 14:23:07
            </div>
          </div>
        </div>

        {/* RIGHT PANEL */}
        <div className="w-1/2 p-8 overflow-auto flex flex-col">
          {/* Progress Stepper */}
          <div className="flex items-center gap-4 mb-8">
            {[
              { label: 'Analysing pattern', status: 'complete' },
              { label: 'Compiling evidence', status: 'complete' },
              { label: 'Drafting narrative', status: 'active' },
            ].map((step, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <div
                  className={`w-6 h-6 rounded-full flex items-center justify-center ${
                    step.status === 'complete'
                      ? 'bg-[#E31E24]'
                      : 'bg-white border-2 border-[#E31E24]'
                  }`}
                >
                  {step.status === 'complete' ? (
                    <Check className="w-4 h-4 text-white" />
                  ) : (
                    <div className="w-2 h-2 bg-[#E31E24] rounded-full animate-pulse" />
                  )}
                </div>
                <span className="text-xs text-gray-600">{step.label}</span>
                {idx < 2 && <div className="w-8 h-[2px] bg-[#E31E24]" />}
              </div>
            ))}
          </div>

          {/* STR Report Preview */}
          <div className="flex-1 bg-gray-50 border border-[#E31E24] rounded-xl p-6">
            {/* Header */}
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-3">
                <div className="px-3 py-1 bg-[#E31E24] text-white rounded text-xs font-bold">
                  STR-01 DRAFT
                </div>
                <div className="text-xs text-gray-600" style={{ fontFamily: 'DM Mono' }}>
                  Auto-generated · 47 seconds
                </div>
              </div>
              <div className="flex items-center gap-2">
                {/* Language Toggle */}
                <div className="flex items-center gap-1 bg-gray-200 rounded px-2 py-1">
                  <Globe className="w-3 h-3 text-gray-600" />
                  <button
                    onClick={() => setLanguage('EN')}
                    className={`px-2 py-0.5 rounded text-xs transition-colors ${
                      language === 'EN' ? 'bg-[#E31E24] text-white font-bold' : 'text-gray-600'
                    }`}
                  >
                    EN
                  </button>
                  <div className="w-px h-3 bg-gray-400 opacity-30" />
                  <button
                    onClick={() => setLanguage('HI')}
                    className={`px-2 py-0.5 rounded text-xs transition-colors ${
                      language === 'HI' ? 'bg-[#E31E24] text-white font-bold' : 'text-gray-600'
                    }`}
                  >
                    HI
                  </button>
                </div>
                <div className="px-3 py-1 bg-gray-200 text-gray-700 rounded text-xs">
                  PMLA S.16 · goAML Format
                </div>
              </div>
            </div>

            {/* Word Count / Page Count */}
            <div className="mb-4 text-xs text-gray-600" style={{ fontFamily: 'DM Mono' }}>
              3 pages · 847 words
            </div>

            {/* Report Content */}
            <div
              className="space-y-4 text-[11px] leading-relaxed text-gray-700"
              style={{ fontFamily: 'DM Mono' }}
            >
              <div className="text-gray-900 font-bold text-sm mb-4">
                FIU-IND FORM STR-01 (DRAFT)
              </div>

              <div>
                <div className="text-gray-900">Report Date: {today}</div>
                <div className="text-gray-900">Filing Entity: Union Bank of India</div>
              </div>

              <div className="h-[1px] bg-gray-300 my-4" />

              <div>
                <div className="text-gray-900 font-bold mb-2">CASE REF: CASE-2847</div>
                <div>TYPOLOGY: Round-trip Layering</div>
                <div>RISK SCORE: 94% (GNN confidence)</div>
                <div>ACCOUNTS INVOLVED: 7</div>
                <div>TOTAL AMOUNT: ₹47,23,000</div>
                <div>PERIOD: 6 hours 14 minutes</div>
              </div>

              <div className="h-[1px] bg-gray-300 my-4" />

              <div>
                <div className="text-gray-900 font-bold mb-2">NARRATIVE:</div>
                <div className="leading-relaxed opacity-90">
                  FundLens detected a round-trip layering pattern involving seven accounts
                  across three transaction hops. The pattern commenced when a dormant savings
                  account (ACC-0041) was suddenly activated and dispersed funds totaling
                  ₹47,23,000 to multiple intermediary accounts. These funds were subsequently
                  consolidated through a central hub account (ACC-0089) exhibiting high-risk
                  characteristics.
                  <br />
                  <br />
                  The consolidated amount was then distributed through additional intermediary
                  layers before returning to the origin account (ACC-0041), completing a
                  suspicious circular flow within 6 hours 14 minutes. This velocity and
                  structural pattern is consistent with FATF-identified layering typologies
                  designed to obscure fund origins.
                </div>
              </div>

              <div className="h-[1px] bg-gray-300 my-4" />

              <div>
                <div className="text-gray-900 font-bold mb-2">RECOMMENDED ACTION:</div>
                <div className="leading-relaxed opacity-90">
                  Freeze implicated accounts pending investigation. Immediate escalation to
                  law enforcement recommended given the high confidence score (94%) and rapid
                  transaction velocity. Request enhanced due diligence on account holders and
                  beneficial owners.
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 mt-8 pt-6 border-t border-gray-300">
              <button className="flex-1 px-6 py-3 border border-gray-400 text-gray-600 hover:bg-gray-100 transition-colors rounded-lg text-sm flex items-center justify-center gap-2">
                <Edit3 className="w-4 h-4" />
                Edit draft
              </button>
              <button className="flex-1 px-6 py-3 bg-[#E31E24] text-white hover:bg-[#d4183d] transition-colors rounded-lg text-sm font-bold flex items-center justify-center gap-2"
                style={{ fontFamily: 'Syne' }}
              >
                Submit to FIU-IND
                <ExternalLink className="w-4 h-4" />
              </button>
            </div>

            {/* Footer Note */}
            <div className="mt-4 text-center text-[10px] text-gray-600" style={{ fontFamily: 'DM Mono' }}>
              Submission will create immutable blockchain record
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}