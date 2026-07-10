import { useState } from 'react';
import { 
  Share2, 
  Printer, 
  Download, 
  TrendingUp, 
  Layers, 
  CheckCircle2, 
  AlertTriangle,
  FileSpreadsheet
} from 'lucide-react';

export default function AdminReportsPage() {
  // 1. Structural Analytics States
  const [metrics] = useState({
    avgComplianceRate: '98.2%',
    complianceStatus: 'Optimal Sequence',
    overallPassRate: '94.2%',
    passRateTrend: '+2.1% from last semester',
    totalEvaluations: '20',
    pendingAudits: '0 pending',
    activePrograms: '6',
    campusScope: 'Across 2 campuses'
  });

  // 2. Mock Data for Program Performance Summary (Prerequisite & Sequence metrics)
  const [programData] = useState([
    { program: 'BS Computer Science', totalStudents: 450, trackingUnits: 24, complianceRate: '96%', status: 'Excellent' },
    { program: 'BS Information Tech', totalStudents: 620, trackingUnits: 26, complianceRate: '92%', status: 'Good' },
    { program: 'BS Business Admin', totalStudents: 890, trackingUnits: 18, complianceRate: '98%', status: 'Excellent' },
    { program: 'BS Nursing', totalStudents: 340, trackingUnits: 32, complianceRate: '99%', status: 'Outstanding' },
    { program: 'BS Education', totalStudents: 410, trackingUnits: 20, complianceRate: '95%', status: 'Excellent' },
  ]);

  return (
    <div className="space-y-6 text-[#0F2A1D]">
      
      {/* Module Title Bar & Global Action Toolbar buttons */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-3xl font-extrabold tracking-tight text-[#0F2A1D]">Reports</h2>
          <p className="text-xs text-slate-400 font-medium uppercase mt-1 tracking-wider">Comprehensive academic structure and sequence reports.</p>
        </div>
        
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <button className="flex items-center justify-center gap-2 bg-white border border-slate-200 text-slate-700 text-xs font-bold uppercase tracking-wider px-4 py-2.5 rounded-xl hover:bg-slate-50 transition-all flex-1 sm:flex-none">
            <Share2 size={14} /> Share
          </button>
          <button className="flex items-center justify-center gap-2 bg-white border border-slate-200 text-slate-700 text-xs font-bold uppercase tracking-wider px-4 py-2.5 rounded-xl hover:bg-slate-50 transition-all flex-1 sm:flex-none">
            <Printer size={14} /> Print
          </button>
          <button className="flex items-center justify-center gap-2 bg-[#0F2A1D] text-[#E3EED4] text-xs font-bold uppercase tracking-wider px-4 py-2.5 rounded-xl hover:bg-[#375534] transition-all shadow-sm flex-1 sm:flex-none">
            <Download size={14} /> Export PDF
          </button>
        </div>
      </div>

      <h3 className="text-lg font-bold text-slate-800 tracking-tight">University Analytics</h3>

      {/* Top 4 Summary Cards Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        
        {/* Sequence Compliance Status */}
        <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-xs">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Sequence Compliance</p>
          <p className="text-3xl font-black text-slate-900 tracking-tight mt-2">{metrics.avgComplianceRate}</p>
          <p className="text-[11px] font-bold text-emerald-600 mt-1 flex items-center gap-1">
            <CheckCircle2 size={12} /> {metrics.complianceStatus}
          </p>
        </div>

        {/* Overall Pass Rate */}
        <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-xs">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Overall Pass Rate</p>
          <p className="text-3xl font-black text-slate-900 tracking-tight mt-2">{metrics.overallPassRate}</p>
          <p className="text-[11px] font-bold text-slate-400 mt-1">{metrics.passRateTrend}</p>
        </div>

        {/* Total Tracked Evaluations */}
        <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-xs">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Total Evaluations</p>
          <p className="text-3xl font-black text-slate-900 tracking-tight mt-2">{metrics.totalEvaluations}</p>
          <p className="text-[11px] font-bold text-slate-400 mt-1">{metrics.pendingAudits}</p>
        </div>

        {/* Active Structural Curriculums */}
        <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-xs">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Active Programs</p>
          <p className="text-3xl font-black text-slate-900 tracking-tight mt-2">{metrics.activePrograms}</p>
          <p className="text-[11px] font-bold text-slate-400 mt-1">{metrics.campusScope}</p>
        </div>

      </div>

      {/* Middle Analytics Visual Row Grid Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Academic Activity Trend Mapping Block */}
        <div className="bg-white rounded-3xl border border-slate-200/80 p-6 shadow-xs flex flex-col justify-between min-h-[300px]">
          <div>
            <h4 className="text-sm font-black uppercase tracking-wider text-slate-800">Academic Activity Trend</h4>
            <p className="text-xs text-slate-400 font-medium mt-0.5">Assignments vs Evaluations over time</p>
          </div>
          
          {/* Custom SVG/CSS clean trend visual simulation chart block */}
          <div className="flex-1 flex flex-col justify-end mt-4 space-y-4">
            <div className="h-32 w-full relative border-b border-l border-slate-100 flex items-end">
              <div className="absolute inset-0 flex flex-col justify-between pointer-events-none text-[9px] font-mono text-slate-300">
                <div className="border-t border-dashed border-slate-100 w-full pt-0.5 pl-1">60</div>
                <div className="border-t border-dashed border-slate-100 w-full pt-0.5 pl-1">45</div>
                <div className="border-t border-dashed border-slate-100 w-full pt-0.5 pl-1">30</div>
                <div className="border-t border-dashed border-slate-100 w-full pt-0.5 pl-1">15</div>
              </div>
              <div className="w-full h-full flex items-end justify-around px-4 z-10">
                <div className="w-8 bg-[#0F2A1D] rounded-t-lg h-[40%] hover:opacity-90 transition-all" />
                <div className="w-8 bg-[#375534] rounded-t-lg h-[65%] hover:opacity-90 transition-all" />
                <div className="w-8 bg-[#6B9071] rounded-t-lg h-[50%] hover:opacity-90 transition-all" />
                <div className="w-8 bg-[#AEC3B0] rounded-t-lg h-[85%] hover:opacity-90 transition-all" />
              </div>
            </div>
            <div className="flex justify-around text-[10px] font-bold text-slate-400 uppercase tracking-wider px-4">
              <span>Jan</span><span>Mar</span><span>May</span><span>Jul</span>
            </div>
          </div>
        </div>

        {/* Core Subject Flow Mapping Visual Block */}
        <div className="bg-white rounded-3xl border border-slate-200/80 p-6 shadow-xs flex flex-col justify-between min-h-[300px]">
          <div>
            <h4 className="text-sm font-black uppercase tracking-wider text-slate-800">Prerequisite Compliance Rate</h4>
            <p className="text-xs text-slate-400 font-medium mt-0.5">Linear sequence errors categorized by course groups</p>
          </div>
          
          <div className="flex-1 flex flex-col justify-center space-y-3 mt-4 text-xs font-bold text-slate-600">
            <div className="space-y-1">
              <div className="flex justify-between"><span className="text-slate-800 font-extrabold">General Education Units</span><span className="font-mono text-slate-400">100% Cleared</span></div>
              <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden"><div className="bg-[#0F2A1D] h-full" style={{ width: '100%' }} /></div>
            </div>
            <div className="space-y-1">
              <div className="flex justify-between"><span className="text-slate-800 font-extrabold">Computing Core (CC) Units</span><span className="font-mono text-slate-400">94% Cleared</span></div>
              <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden"><div className="bg-[#375534] h-full" style={{ width: '94%' }} /></div>
            </div>
            <div className="space-y-1">
              <div className="flex justify-between"><span className="text-slate-800 font-extrabold">Professional Specialized Track Units</span><span className="font-mono text-slate-400">88% Cleared</span></div>
              <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden"><div className="bg-[#6B9071] h-full" style={{ width: '88%' }} /></div>
            </div>
          </div>
        </div>

      </div>

      {/* Program Performance Summary Sheet Grid Panel */}
      <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs overflow-hidden">
        <div className="p-5 border-b border-slate-100 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 bg-slate-50/50">
          <div>
            <h4 className="text-sm font-black uppercase tracking-wider text-slate-900">Program Performance Summary</h4>
            <p className="text-xs text-slate-400 font-medium mt-0.5">Detailed evaluation metrics by degree program</p>
          </div>
          <button className="flex items-center gap-2 bg-slate-100 border border-slate-200 hover:bg-slate-200/70 text-slate-700 text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-xl transition-all w-full sm:w-auto justify-center">
            <FileSpreadsheet size={14} /> Export CSV
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-200/60 text-[10px] font-black text-slate-400 uppercase tracking-wider bg-slate-50/20">
                <th className="p-4 pl-6">Program</th>
                <th className="p-4">Total Students</th>
                <th className="p-4">Tracked Units</th>
                <th className="p-4">Sequence Compliance</th>
                <th className="p-4 pr-6 text-right">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-xs font-bold text-slate-700">
              {programData.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-50/30 transition-colors">
                  <td className="p-4 pl-6 text-slate-900 font-extrabold">{row.program}</td>
                  <td className="p-4 font-mono text-slate-500">{row.totalStudents}</td>
                  <td className="p-4 font-mono text-slate-500 pl-8">{row.trackingUnits}</td>
                  <td className="p-4">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-slate-900 font-black">{row.complianceRate}</span>
                      <div className="w-20 bg-slate-100 h-1.5 rounded-full overflow-hidden hidden sm:block">
                        <div className="bg-[#375534] h-full" style={{ width: row.complianceRate }} />
                      </div>
                    </div>
                  </td>
                  <td className="p-4 pr-6 text-right">
                    <span className={`px-2.5 py-1 rounded-lg text-[9px] font-black uppercase tracking-wider text-white
                      ${row.status === 'Outstanding' ? 'bg-[#0F2A1D]' : 
                        row.status === 'Excellent' ? 'bg-[#375534]' : 'bg-slate-500'}`}
                    >
                      {row.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}