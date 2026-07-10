import { useState } from 'react';
import { 
  Users, 
  BookOpen, 
  ClipboardCheck, 
  ArrowUpRight, 
  ArrowDownRight,
  PlusCircle,
  CheckCircle2,
  FileSpreadsheet,
  UserCheck
} from 'lucide-react';

export default function AdminDashboardPage() {
  // Live State Management for Evaluation System Metrics
  const [stats] = useState({
    totalStudents: 15,
    totalSubjects: 20,
    pendingEvaluations: 6,
    completedEvaluations: 14,
    studentTrend: '+12.5%',
    subjectTrend: '+4.2%',
    pendingTrend: '-8.3%',
    completedTrend: '+23.1%'
  });

  // Mock Data for Course Assignment Distribution
  const [courseAssignments] = useState([
    { course: 'BSIT (Information Technology)', assignedCount: 8, percentage: 40 },
    { course: 'BSCS (Computer Science)', assignedCount: 7, percentage: 35 },
    { course: 'BSBA (Business Administration)', assignedCount: 3, percentage: 15 },
    { course: 'BSN (Nursing)', assignedCount: 2, percentage: 10 }
  ]);

  // Mock Data for Evaluation Completion progress metrics
  const [completionMetrics] = useState({
    clearedSequences: 14,
    incompleteSequences: 4,
    pendingAudits: 2,
    totalEvaluationsMapped: 20
  });

  // Recent Structural Log Tracking
  const [recentAssignments] = useState([
    { id: 1, student: 'Maria Santos', subject: 'Introduction to Computing', status: 'completed', date: '7/10/2026' },
    { id: 2, student: 'Juan Dela Cruz', subject: 'Data Structures & Algorithms', status: 'completed', date: '7/10/2026' },
    { id: 3, student: 'Maria Santos', subject: 'Database Systems', status: 'assigned', date: '7/10/2026' },
    { id: 4, student: 'Miguel Garcia', subject: 'Introduction to Computing', status: 'assigned', date: '7/10/2026' },
    { id: 5, student: 'Miguel Garcia', subject: 'Data Structures & Algorithms', status: 'pending', date: '7/10/2026' },
  ]);

  const [activityFeed] = useState([
    { id: 1, text: 'Administrator Assigned Database Systems to Maria Santos', time: '7/10/2026, 1:40:58 PM' },
    { id: 2, text: 'Administrator Evaluated Juan Dela Cruz for IT Fundamentals', time: '7/10/2026, 12:40:58 PM' },
    { id: 3, text: 'Administrator Added new student Elena Bautista (BSBA)', time: '7/10/2026, 10:40:58 AM' },
    { id: 4, text: 'Administrator Assigned Web Development to Rafael Cruz', time: '7/10/2026, 8:40:59 AM' },
    { id: 5, text: 'Administrator Completed evaluation for Camila Villanueva', time: '7/10/2026, 6:40:59 AM' },
  ]);

  return (
    <div className="space-y-6 text-[#0F2A1D]">
      {/* Top Title Head */}
      <div>
        <h2 className="text-3xl font-extrabold tracking-tight text-[#0F2A1D]">Dashboard</h2>
      </div>

      {/* Formal Welcome Banner */}
      <div className="bg-[#0F2A1D] text-[#E3EED4] rounded-3xl p-8 flex flex-col md:flex-row justify-between items-start md:items-center shadow-lg border border-white/10 relative overflow-hidden">
        <div className="space-y-1 z-10">
          <h2 className="text-3xl font-bold tracking-tight text-white">
            Welcome back, Administrator
          </h2>
          <p className="text-[#AEC3B0] text-sm font-medium">
            Here's an overview of today's academic activities, curricular tracking, and evaluations.
          </p>
        </div>
        
        <div className="mt-4 md:mt-0 bg-[#375534]/40 backdrop-blur-md p-4 rounded-2xl border border-white/10 text-left md:text-right z-10 min-w-[220px]">
          <p className="font-bold text-base text-white tracking-wide">Friday, July 10, 2026</p>
          <div className="flex gap-2 mt-2 text-[10px] font-black tracking-wider justify-start md:justify-end uppercase">
            <span className="bg-[#0F2A1D] text-[#E3EED4] px-2.5 py-1 rounded-lg border border-white/5">A.Y. 2024–2025</span>
            <span className="bg-[#0F2A1D] text-[#E3EED4] px-2.5 py-1 rounded-lg border border-white/5">1st Semester</span>
          </div>
        </div>
      </div>

      {/* Metrics Row Blocks */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {/* Total Students */}
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200/80 flex flex-col justify-between transition-all duration-300 hover:shadow-md">
          <div className="flex justify-between items-start">
            <div className="p-3 bg-blue-50 text-blue-600 rounded-2xl"><Users size={22} /></div>
            <span className="text-[11px] font-extrabold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full flex items-center gap-0.5">
              <ArrowUpRight size={12} className="stroke-[3]" /> {stats.studentTrend}
            </span>
          </div>
          <div className="mt-6">
            <span className="text-4xl font-black text-slate-900 tracking-tight">{stats.totalStudents}</span>
            <p className="text-xs font-bold text-slate-400 mt-1 tracking-wider uppercase">Total Students</p>
          </div>
        </div>

        {/* Total Subjects */}
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200/80 flex flex-col justify-between transition-all duration-300 hover:shadow-md">
          <div className="flex justify-between items-start">
            <div className="p-3 bg-purple-50 text-purple-600 rounded-2xl"><BookOpen size={22} /></div>
            <span className="text-[11px] font-extrabold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full flex items-center gap-0.5">
              <ArrowUpRight size={12} className="stroke-[3]" /> {stats.subjectTrend}
            </span>
          </div>
          <div className="mt-6">
            <span className="text-4xl font-black text-slate-900 tracking-tight">{stats.totalSubjects}</span>
            <p className="text-xs font-bold text-slate-400 mt-1 tracking-wider uppercase">Total Subjects</p>
          </div>
        </div>

        {/* Pending Evaluations */}
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200/80 flex flex-col justify-between transition-all duration-300 hover:shadow-md">
          <div className="flex justify-between items-start">
            <div className="p-3 bg-amber-50 text-amber-500 rounded-2xl"><ClipboardCheck size={22} /></div>
            <span className="text-[11px] font-extrabold text-rose-600 bg-rose-50 px-2.5 py-1 rounded-full flex items-center gap-0.5">
              <ArrowDownRight size={12} className="stroke-[3]" /> {stats.pendingTrend}
            </span>
          </div>
          <div className="mt-6">
            <span className="text-4xl font-black text-slate-900 tracking-tight">{stats.pendingEvaluations}</span>
            <p className="text-xs font-bold text-slate-400 mt-1 tracking-wider uppercase">Pending Evaluations</p>
          </div>
        </div>

        {/* Completed Evaluations */}
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200/80 flex flex-col justify-between transition-all duration-300 hover:shadow-md">
          <div className="flex justify-between items-start">
            <div className="p-3 bg-emerald-50 text-emerald-600 rounded-2xl"><CheckCircle2 size={22} /></div>
            <span className="text-[11px] font-extrabold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full flex items-center gap-0.5">
              <ArrowUpRight size={12} className="stroke-[3]" /> {stats.completedTrend}
            </span>
          </div>
          <div className="mt-6">
            <span className="text-4xl font-black text-slate-900 tracking-tight">{stats.completedEvaluations}</span>
            <p className="text-xs font-bold text-slate-400 mt-1 tracking-wider uppercase">Completed Evaluations</p>
          </div>
        </div>
      </div>

      {/* Main Structural Row Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Assignments Table Log */}
        <div className="lg:col-span-2 bg-white rounded-3xl p-6 border border-slate-200/80 shadow-sm flex flex-col justify-between space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="text-xs font-black text-slate-900 uppercase tracking-wider">Recent Assignments</h3>
            <button className="text-xs font-bold text-[#375534] hover:underline">View All</button>
          </div>
          
          <div className="overflow-x-auto w-full">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-100 text-[10px] font-black text-slate-400 uppercase tracking-wider">
                  <th className="pb-3">Student</th>
                  <th className="pb-3">Subject</th>
                  <th className="pb-3">Status</th>
                  <th className="pb-3 text-right">Date</th>
                </tr>
              </thead>
              <tbody className="text-xs font-semibold text-slate-700 divide-y divide-slate-50">
                {recentAssignments.map((assignment) => (
                  <tr key={assignment.id} className="hover:bg-slate-50/50 transition-colors">
                    <td className="py-3 font-bold text-slate-900">{assignment.student}</td>
                    <td className="py-3 text-slate-600">{assignment.subject}</td>
                    <td className="py-3">
                      <span className={`px-2 py-0.5 rounded-md text-[9px] font-black uppercase tracking-wider text-white
                        ${assignment.status === 'completed' ? 'bg-[#375534]' : 
                          assignment.status === 'assigned' ? 'bg-blue-600' : 'bg-amber-500'}`}
                      >
                        {assignment.status}
                      </span>
                    </td>
                    <td className="py-3 text-slate-400 text-right font-mono">{assignment.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Quick Actions Framework Panel */}
        <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-sm space-y-4">
          <h3 className="text-xs font-black text-slate-900 uppercase tracking-wider">Quick Actions</h3>
          <div className="grid grid-cols-2 gap-3 text-center">
            <button className="p-4 bg-slate-50 hover:bg-[#E3EED4]/30 hover:border-[#6B9071]/40 border border-slate-200/60 rounded-2xl flex flex-col items-center gap-2 group transition-all">
              <PlusCircle size={20} className="text-[#375534] group-hover:scale-105 transition-transform" />
              <span className="text-[10px] font-black text-slate-700 tracking-wide uppercase">Assign Subject</span>
            </button>
            <button className="p-4 bg-slate-50 hover:bg-[#E3EED4]/30 hover:border-[#6B9071]/40 border border-slate-200/60 rounded-2xl flex flex-col items-center gap-2 group transition-all">
              <UserCheck size={20} className="text-amber-600" />
              <span className="text-[10px] font-black text-slate-700 tracking-wide uppercase">Evaluate Student</span>
            </button>
            <button className="p-4 bg-slate-50 hover:bg-[#E3EED4]/30 hover:border-[#6B9071]/40 border border-slate-200/60 rounded-2xl flex flex-col items-center gap-2 group transition-all">
              <FileSpreadsheet size={20} className="text-blue-600" />
              <span className="text-[10px] font-black text-slate-700 tracking-wide uppercase">Generate Report</span>
            </button>
            <button className="p-4 bg-slate-50 hover:bg-[#E3EED4]/30 hover:border-[#6B9071]/40 border border-slate-200/60 rounded-2xl flex flex-col items-center gap-2 group transition-all">
              <Users size={20} className="text-emerald-600" />
              <span className="text-[10px] font-black text-slate-700 tracking-wide uppercase">Manage Students</span>
            </button>
          </div>
        </div>
      </div>

      {/* Analytics & System Activity Feed Segment Footer Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Assignments by Course (Populated Component) */}
        <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-sm flex flex-col justify-between">
          <h3 className="text-xs font-black text-slate-900 uppercase tracking-wider mb-4">Assignments by Course</h3>
          <div className="flex-1 space-y-3.5">
            {courseAssignments.map((item, idx) => (
              <div key={idx} className="space-y-1.5">
                <div className="flex justify-between text-xs font-bold text-slate-700">
                  <span className="truncate max-w-[180px]">{item.course}</span>
                  <span className="text-slate-400 font-mono">{item.assignedCount} units ({item.percentage}%)</span>
                </div>
                <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                  <div 
                    className="bg-[#375534] h-full rounded-full transition-all duration-500" 
                    style={{ width: `${item.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Evaluation Completion Metrics Tracker (Populated Component) */}
        <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-sm flex flex-col justify-between">
          <h3 className="text-xs font-black text-slate-900 uppercase tracking-wider mb-4">Evaluation Completion</h3>
          <div className="flex-1 flex flex-col justify-center space-y-3 text-xs font-bold">
            <div className="flex justify-between items-center p-3 bg-emerald-50/60 border border-emerald-100 rounded-xl">
              <span className="text-emerald-800">Cleared Sequences</span>
              <span className="font-mono text-base font-black text-emerald-900">{completionMetrics.clearedSequences}</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-amber-50/60 border border-amber-100 rounded-xl">
              <span className="text-amber-800">Incomplete Sequences</span>
              <span className="font-mono text-base font-black text-amber-900">{completionMetrics.incompleteSequences}</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-blue-50/60 border border-blue-100 rounded-xl">
              <span className="text-blue-800">Pending Sequence Audits</span>
              <span className="font-mono text-base font-black text-blue-900">{completionMetrics.pendingAudits}</span>
            </div>
            <div className="pt-1 flex justify-between text-[11px] uppercase tracking-wider text-slate-400 pl-1">
              <span>Total Tracked Scope</span>
              <span className="font-mono font-extrabold">{completionMetrics.totalEvaluationsMapped} Mapped</span>
            </div>
          </div>
        </div>

        {/* Real-time Activity Logs Feed */}
        <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-sm flex flex-col justify-between space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="text-xs font-black text-slate-900 uppercase tracking-wider">Activity Feed</h3>
            <button className="text-slate-400 hover:text-slate-600 text-sm font-bold tracking-widest">•••</button>
          </div>
          
          <div className="space-y-3 max-h-[170px] overflow-y-auto pr-1 text-[11px] leading-relaxed">
            {activityFeed.map((log) => (
              <div key={log.id} className="flex gap-3 items-start border-l-2 border-[#375534]/30 pl-3 py-0.5">
                <div>
                  <p className="text-slate-800 font-bold">{log.text}</p>
                  <p className="text-slate-400 font-semibold font-mono mt-0.5 text-[9px]">{log.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}