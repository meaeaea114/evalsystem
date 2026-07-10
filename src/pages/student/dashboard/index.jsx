import { useState } from 'react';
import { 
  BookOpen, 
  CheckCircle2, 
  Clock, 
  Award, 
  ArrowUpRight, 
  ChevronRight,
  Bookmark,
  FileText,
  History,
  Download
} from 'lucide-react';

export default function StudentDashboardTab() {
  // Metric States mapping directly to requested layout values
  const [stats] = useState({
    assignedCount: 6,
    assignedTrend: '8.1%',
    evaluatedCount: 2,
    pendingCount: 4,
    currentGpa: '1.50',
    gpaTrend: '2.3%',
    requiredUnits: 180,
    earnedUnits: 117,
    completionPercentage: 65
  });

  const [currentSubjects] = useState([
    { code: 'CS301', name: 'Data Structures & Algorithms', instructor: 'Dr. Elena Marquez', status: 'Completed' },
    { code: 'CS305', name: 'Database Management Systems', instructor: 'Prof. Miguel Santos', status: 'Completed' },
    { code: 'CS310', name: 'Operating Systems', instructor: 'Dr. Anna Reyes', status: 'Pending' },
    { code: 'CS315', name: 'Software Engineering', instructor: 'Prof. Carlo Villanueva', status: 'Assigned' }
  ]);

  // Updated array containing the full list of chronological recent activity items
  const [recentActivities] = useState([
    { id: 1, title: 'Data Structures & Algorithms grade released', desc: 'Final grade of 1.25 has been posted.', date: 'JUN 26' },
    { id: 2, title: 'Database Management Systems evaluated', desc: 'Your instructor submitted evaluation results.', date: 'JUN 25' },
    { id: 3, title: 'Software Engineering assigned', desc: 'You were enrolled in CS315 for the current semester.', date: 'JUN 10' },
    { id: 4, title: 'Operating Systems assigned', desc: 'You were enrolled in CS310 for the current semester.', date: 'JUN 10' }
  ]);

  return (
    <div className="space-y-6 text-[#0F2A1D] max-w-[1400px] mx-auto">
      
      {/* Welcome Greeting Headers Banner */}
      <div className="flex flex-col lg:flex-row justify-between lg:items-center gap-4">
        <div>
          <h2 className="text-4xl font-serif font-black text-[#0F2A1D] tracking-tight">Welcome back, John</h2>
          <p className="text-xs text-slate-400 font-bold mt-1.5 flex items-center gap-2">
            BS Computer Science <span className="w-1.5 h-1.5 bg-slate-300 rounded-full" /> Year 3rd Year
          </p>
        </div>
        
        {/* Context Info Tags */}
        <div className="flex items-center gap-2 text-xs font-bold">
          <div className="bg-[#f4f7f3] border border-slate-200/40 px-3.5 py-2 rounded-xl flex items-center gap-2">
            <Clock size={14} className="text-slate-400" /> 1st Semester • 2025–2026
          </div>
          <span className="bg-[#e2f4df] text-[#0F2A1D] px-3 py-2 rounded-xl text-[10px] font-black uppercase tracking-wider">
            Regular
          </span>
        </div>
      </div>

      {/* Row 1: Four Interactive Counter Metrics Grid Blocks */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {/* Assigned Subjects Card */}
        <div className="bg-white rounded-2xl p-5 border border-slate-200/50 flex justify-between items-center relative overflow-hidden group hover:shadow-xs transition-shadow">
          <div className="space-y-1">
            <p className="text-xs font-bold text-slate-400">Assigned Subjects</p>
            <div className="flex items-baseline gap-2 pt-1.5">
              <span className="text-3xl font-black text-slate-900 tracking-tight">{stats.assignedCount}</span>
              <span className="text-[10px] font-black text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded-md flex items-center gap-0.5">
                <ArrowUpRight size={10} className="stroke-[3]" /> {stats.assignedTrend}
              </span>
            </div>
          </div>
          <div className="p-3 bg-[#f4f7f3] text-slate-500 rounded-xl group-hover:scale-105 transition-transform"><BookOpen size={18} /></div>
        </div>

        {/* Evaluated Subjects Card */}
        <div className="bg-white rounded-2xl p-5 border border-slate-200/50 flex justify-between items-center relative overflow-hidden group hover:shadow-xs transition-shadow">
          <div className="space-y-1">
            <p className="text-xs font-bold text-slate-400">Evaluated Subjects</p>
            <div className="pt-1.5">
              <span className="text-3xl font-black text-slate-900 tracking-tight">{stats.evaluatedCount}</span>
            </div>
          </div>
          <div className="p-3 bg-[#f4f7f3] text-slate-500 rounded-xl group-hover:scale-105 transition-transform"><CheckCircle2 size={18} /></div>
        </div>

        {/* Pending Evaluations Card */}
        <div className="bg-white rounded-2xl p-5 border border-slate-200/50 flex justify-between items-center relative overflow-hidden group hover:shadow-xs transition-shadow">
          <div className="space-y-1">
            <p className="text-xs font-bold text-slate-400">Pending Evaluations</p>
            <div className="pt-1.5">
              <span className="text-3xl font-black text-slate-900 tracking-tight">{stats.pendingCount}</span>
            </div>
          </div>
          <div className="p-3 bg-[#f4f7f3] text-slate-500 rounded-xl group-hover:scale-105 transition-transform"><Clock size={18} /></div>
        </div>

        {/* Current GPA Card */}
        <div className="bg-white rounded-2xl p-5 border border-slate-200/50 flex justify-between items-center relative overflow-hidden group hover:shadow-xs transition-shadow">
          <div className="space-y-1">
            <p className="text-xs font-bold text-slate-400">Current GPA</p>
            <div className="flex items-baseline gap-2 pt-1.5">
              <span className="text-3xl font-black text-slate-900 tracking-tight">{stats.currentGpa}</span>
              <span className="text-[10px] font-black text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded-md flex items-center gap-0.5">
                <ArrowUpRight size={10} className="stroke-[3]" /> {stats.gpaTrend}
              </span>
            </div>
          </div>
          <div className="p-3 bg-[#f4f7f3] text-slate-500 rounded-xl group-hover:scale-105 transition-transform"><Award size={18} /></div>
        </div>
      </div>

      {/* Row 2: Secondary Split Layout */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 items-start">
        
        {/* LEFT COLUMN MODULE WORKSPACE */}
        <div className="xl:col-span-2 space-y-6">
          {/* Latest Evaluation Result Banner */}
          <div className="bg-gradient-to-br from-[#eaf0eb] to-[#f4f7f4] border border-slate-200/40 rounded-3xl p-6 shadow-2xs relative flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div className="space-y-2">
              <span className="px-2.5 py-1 bg-white border border-slate-200 text-[#0F2A1D] font-bold text-[10px] rounded-lg tracking-wide shadow-2xs">
                Latest Evaluation Result
              </span>
              <h3 className="text-2xl font-serif font-black text-slate-900 pt-1 tracking-tight">Operating Systems</h3>
              <p className="text-sm font-bold text-slate-800 flex items-center gap-2">
                <span className="text-2xl font-black tracking-tighter">0.0</span> Awaiting faculty submission
              </p>
            </div>
            <div className="w-11 h-11 bg-white border border-slate-200 rounded-full flex items-center justify-center shadow-xs shrink-0 text-slate-700">
              <Bookmark size={18} />
            </div>
          </div>

          {/* Current Subjects Database Table */}
          <div className="bg-white border border-slate-200/50 rounded-3xl p-6 shadow-sm space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-serif font-black text-slate-900 tracking-tight">Current Subjects</h3>
              <button className="text-xs font-bold text-slate-400 hover:text-slate-900 flex items-center gap-0.5 group">
                View All <ChevronRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-slate-100 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                    <th className="pb-3 font-semibold">Code</th>
                    <th className="pb-3 font-semibold">Subject Name</th>
                    <th className="pb-3 font-semibold">Instructor</th>
                    <th className="pb-3 text-right font-semibold">Status</th>
                  </tr>
                </thead>
                <tbody className="text-xs font-bold text-slate-700 divide-y divide-slate-50">
                  {currentSubjects.map((subject, index) => (
                    <tr key={index} className="hover:bg-slate-50/40 transition-colors">
                      <td className="py-4 font-mono font-black text-slate-400 tracking-tight">{subject.code}</td>
                      <td className="py-4 font-extrabold text-slate-900">{subject.name}</td>
                      <td className="py-4 text-slate-500 font-medium">{subject.instructor}</td>
                      <td className="py-4 text-right">
                        <span className={`px-2.5 py-1 rounded-md text-[9px] font-black uppercase tracking-wider border
                          ${subject.status === 'Completed' 
                            ? 'bg-emerald-50/60 text-emerald-700 border-emerald-100/40' 
                            : subject.status === 'Pending' ? 'bg-amber-50/60 text-amber-700 border-amber-100/40'
                            : 'bg-blue-50/60 text-blue-700 border-blue-100/40'
                          }`}
                        >
                          {subject.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN MODULE WORKSPACE */}
        <div className="space-y-6">
          {/* Academic Progress Gauge Card */}
          <div className="bg-white border border-slate-200/50 rounded-3xl p-6 shadow-sm flex flex-col justify-between min-h-[290px]">
            <div>
              <h3 className="text-sm font-serif font-black text-slate-900 tracking-tight">Academic Progress</h3>
              <p className="text-[11px] text-slate-400 font-bold mt-0.5">Degree completion status</p>
            </div>

            {/* Circular Donut Progression Ring */}
            <div className="flex justify-center py-4">
              <div className="relative w-28 h-28 flex items-center justify-center">
                <svg className="absolute w-full h-full transform -rotate-90">
                  <circle cx="56" cy="56" r="48" className="stroke-slate-100 fill-none" strokeWidth="8" />
                  <circle 
                    cx="56" 
                    cy="56" 
                    r="48" 
                    className="stroke-[#0F2A1D] fill-none transition-all duration-700" 
                    strokeWidth="8" 
                    strokeDasharray={2 * Math.PI * 48}
                    strokeDashoffset={2 * Math.PI * 48 * (1 - stats.completionPercentage / 100)}
                    strokeLinecap="round"
                  />
                </svg>
                <div className="text-center leading-none">
                  <span className="text-xl font-serif font-black text-slate-900">{stats.completionPercentage}%</span>
                  <p className="text-[8px] font-bold text-slate-400 uppercase tracking-widest mt-1">Completed</p>
                </div>
              </div>
            </div>

            <div className="divide-y divide-slate-50 text-[11px] font-bold text-slate-600 pt-2">
              <div className="flex justify-between py-2">
                <span className="text-slate-400 font-medium">Required Units</span>
                <span className="font-mono text-slate-900 font-black">{stats.requiredUnits}</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-slate-400 font-medium">Earned Units</span>
                <span className="font-mono text-slate-900 font-black">{stats.earnedUnits}</span>
              </div>
            </div>
          </div>

          {/* Recent Activity Timeline Panel */}
          <div className="bg-white border border-slate-200/50 rounded-3xl p-6 shadow-sm space-y-4">
            <div>
              <h3 className="text-sm font-serif font-black text-slate-900 tracking-tight">Recent Activity</h3>
            </div>
            
            <div className="space-y-4 relative border-l border-slate-100 pl-4 ml-2">
              {recentActivities.map((act) => (
                <div key={act.id} className="space-y-0.5 text-xs font-bold relative group">
                  {/* Timeline Dot Anchor Marker */}
                  <div className="w-2 h-2 bg-[#375534] rounded-full absolute -left-[21px] top-1.5 border border-white" />
                  <h4 className="text-slate-900 font-extrabold group-hover:text-[#0F2A1D] transition-colors leading-snug">
                    {act.title}
                  </h4>
                  <p className="text-[11px] text-slate-400 font-medium leading-normal">{act.desc}</p>
                  <p className="text-[9px] font-mono font-black text-slate-300 tracking-tight uppercase pt-0.5">
                    {act.date}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Reports Section */}
          <div className="bg-white border border-slate-200/50 rounded-3xl p-6 shadow-sm space-y-4">
            <div>
              <h3 className="text-sm font-serif font-black text-slate-900 tracking-tight">Quick Reports</h3>
            </div>
            <div className="space-y-2.5">
              <button className="w-full flex items-center gap-3 px-4 py-3 bg-[#f8faf7] hover:bg-[#edf2ee] text-slate-700 text-xs font-bold rounded-xl transition-all">
                <FileText size={16} className="text-[#375534]" /> View Evaluation Summary
              </button>
              <button className="w-full flex items-center gap-3 px-4 py-3 bg-[#f8faf7] hover:bg-[#edf2ee] text-slate-700 text-xs font-bold rounded-xl transition-all">
                <History size={16} className="text-[#375534]" /> Evaluation History
              </button>
              <button className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-[#0F2A1D] text-[#E3EED4] text-xs font-black uppercase tracking-wider rounded-xl hover:bg-[#375534] transition-all shadow-sm active:scale-[0.98]">
                <Download size={14} /> Download Printable Report
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}