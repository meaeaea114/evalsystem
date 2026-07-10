import { useState } from 'react';
import { Search, Filter, Plus, BookOpen, Trash2, X, CheckCircle2, AlertCircle } from 'lucide-react';

export default function AdminEvaluationPage() {
  // 1. Interactive Core Data State for Subject Evaluations / Assignments
  const [evaluations, setEvaluations] = useState([
    { id: 'EV-2026-001', student: 'Maria Santos', program: 'BSCS', subject: 'CC 103 - Data Structures and Algorithms', status: 'Cleared', date: '7/10/2026' },
    { id: 'EV-2026-002', student: 'Juan Dela Cruz', program: 'BSIT', subject: 'IPT 101 - Integrative Programming', status: 'Cleared', date: '7/10/2026' },
    { id: 'EV-2026-003', student: 'Miguel Garcia', program: 'BSCS', subject: 'CC 103 - Data Structures and Algorithms', status: 'Pending Pre-req', date: '7/10/2026' }
  ]);

  // 2. Control & Search Filter States
  const [searchQuery, setSearchQuery] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    student: '',
    program: 'BSIT',
    subject: '',
    status: 'Pending Pre-req',
    date: '7/10/2026'
  });

  // Pre-configured list of subjects matching curriculum mapping
  const subjectOptions = [
    'CC 100 - Introduction to Computing',
    'CC 101 - Computer Programming',
    'CC 102 - Advanced Computer Programming',
    'CC 103 - Data Structures and Algorithms',
    'IPT 101 - Integrative Programming and Technologies',
    'WS 101 - Web Systems and Technologies',
    'CP 101 - Capstone Project 1'
  ];

  // 3. Functional Operations Handlers
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEvaluation = {
      id: `EV-2026-00${evaluations.length + 1}`,
      ...formData
    };
    setEvaluations([...evaluations, newEvaluation]);
    setIsModalOpen(false);
    setFormData({ student: '', program: 'BSIT', subject: '', status: 'Pending Pre-req', date: '7/10/2026' });
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to remove this evaluation assignment entry?')) {
      setEvaluations(evaluations.filter(ev => ev.id !== id));
    }
  };

  // 4. Real-time Search Processing
  const filteredEvaluations = evaluations.filter(ev => 
    ev.student.toLowerCase().includes(searchQuery.toLowerCase()) ||
    ev.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
    ev.program.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6 text-[#0F2A1D]">
      {/* Dynamic Header Frame */}
      <div>
        <h2 className="text-3xl font-extrabold tracking-tight text-[#0F2A1D]">Evaluation</h2>
        <p className="text-xs text-slate-400 font-medium uppercase mt-1 tracking-wider">
          Prerequisite Audit & Subject Assignment Registry
        </p>
      </div>

      {/* Control Actions & Filter Toolbar Panel */}
      <div className="bg-white border border-slate-200/80 rounded-3xl p-4 shadow-xs flex flex-col sm:flex-row gap-4 items-center justify-between">
        <div className="relative w-full sm:w-80">
          <Search className="absolute left-4 top-3.5 text-slate-400" size={16} />
          <input 
            type="text" 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search assignments by student or subject..." 
            className="w-full bg-slate-50 border border-slate-200 text-xs pl-12 pr-4 py-3.5 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#375534]/20 focus:bg-white transition-all text-slate-800 placeholder-slate-400 font-bold"
          />
        </div>
        
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <button className="flex items-center justify-center gap-2 bg-slate-50 border border-slate-200 text-slate-700 text-xs font-bold uppercase tracking-wider px-5 py-3 rounded-xl hover:bg-slate-100 transition-all flex-1 sm:flex-none">
            <Filter size={14} /> Filter
          </button>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="flex items-center justify-center gap-2 bg-[#0F2A1D] text-[#E3EED4] text-xs font-bold uppercase tracking-wider px-5 py-3.5 rounded-2xl hover:bg-[#375534] transition-all shadow-sm active:scale-[0.98] flex-1 sm:flex-none whitespace-nowrap"
          >
            <Plus size={16} /> Assign Subject
          </button>
        </div>
      </div>

      {/* Premium Table Registry Window Container */}
      <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs overflow-hidden min-h-[300px] flex flex-col">
        <div className="overflow-x-auto flex-1">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-200/60 bg-slate-50/70 text-[10px] font-black text-slate-400 uppercase tracking-wider">
                <th className="p-4 pl-6">Student</th>
                <th className="p-4">Program</th>
                <th className="p-4">Subject</th>
                <th className="p-4">Status</th>
                <th className="p-4">Assigned Date</th>
                <th className="p-4 pr-6 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-xs font-bold text-slate-700">
              {filteredEvaluations.length > 0 ? (
                filteredEvaluations.map((ev) => (
                  <tr key={ev.id} className="hover:bg-slate-50/40 transition-colors group">
                    <td className="p-4 pl-6 font-extrabold text-slate-900">{ev.student}</td>
                    <td className="p-4 font-extrabold text-slate-800">{ev.program}</td>
                    <td className="p-4 text-slate-600 max-w-[280px] truncate">{ev.subject}</td>
                    <td className="p-4">
                      <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[9px] font-black uppercase tracking-wider border
                        ${ev.status === 'Cleared' 
                          ? 'bg-emerald-50 text-emerald-700 border-emerald-100' 
                          : 'bg-amber-50 text-amber-700 border-amber-100'
                        }`}
                      >
                        {ev.status === 'Cleared' ? <CheckCircle2 size={10} /> : <AlertCircle size={10} />}
                        {ev.status}
                      </span>
                    </td>
                    <td className="p-4 text-slate-400 font-mono tracking-tight">{ev.date}</td>
                    <td className="p-4 pr-6 text-right">
                      <button 
                        onClick={() => handleDelete(ev.id)}
                        className="p-2 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-xl transition-all opacity-40 group-hover:opacity-100"
                      >
                        <Trash2 size={15} />
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                /* Empty Fallback State View matched explicitly to user wireframe image */
                <tr>
                  <td colSpan="6" className="p-16 text-center">
                    <div className="flex flex-col items-center justify-center max-w-sm mx-auto space-y-3">
                      <div className="text-slate-300">
                        <BookOpen size={44} className="stroke-[1.2]" />
                      </div>
                      <div className="space-y-1">
                        <h4 className="text-sm font-black text-slate-900 tracking-tight">No assignments found</h4>
                        <p className="text-xs text-slate-400 font-medium">Assign a subject to a student to see it here.</p>
                      </div>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Dynamic Overlay Assignment Creation Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-[#0F2A1D]/40 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl border border-slate-200 shadow-2xl w-full max-w-md overflow-hidden animate-in fade-in zoom-in-95 duration-200">
            {/* Modal Head */}
            <div className="bg-[#0F2A1D] text-[#E3EED4] p-5 flex justify-between items-center">
              <h3 className="text-sm font-black uppercase tracking-wider">New Evaluation Assignment</h3>
              <button onClick={() => setIsModalOpen(false)} className="text-[#AEC3B0] hover:text-white transition-colors">
                <X size={18} />
              </button>
            </div>

            {/* Modal Body Form */}
            <form onSubmit={handleSubmit} className="p-6 space-y-4 text-xs font-bold text-slate-500 uppercase tracking-wider">
              <div className="space-y-1.5">
                <label className="text-slate-400">Student Full Name</label>
                <input 
                  type="text" 
                  name="student"
                  required
                  value={formData.student}
                  onChange={handleInputChange}
                  placeholder="e.g., Maria Santos"
                  className="w-full border border-slate-200 bg-slate-50 p-3.5 rounded-xl text-slate-800 font-bold focus:outline-none focus:ring-2 focus:ring-[#375534]/20 focus:bg-white transition-all"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1.5">
                  <label className="text-slate-400">Degree Program</label>
                  <select 
                    name="program"
                    value={formData.program}
                    onChange={handleInputChange}
                    className="w-full border border-slate-200 bg-slate-50 p-3.5 rounded-xl text-slate-800 font-bold focus:outline-none focus:ring-2 focus:ring-[#375534]/20 focus:bg-white transition-all"
                  >
                    <option value="BSIT">BSIT</option>
                    <option value="BSCS">BSCS</option>
                    <option value="BSBA">BSBA</option>
                    <option value="BSN">BSN</option>
                    <option value="BSED">BSED</option>
                    <option value="BSA">BSA</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-slate-400">Prereq Standing</label>
                  <select 
                    name="status"
                    value={formData.status}
                    onChange={handleInputChange}
                    className="w-full border border-slate-200 bg-slate-50 p-3.5 rounded-xl text-slate-800 font-bold focus:outline-none focus:ring-2 focus:ring-[#375534]/20 focus:bg-white transition-all"
                  >
                    <option value="Cleared">Cleared</option>
                    <option value="Pending Pre-req">Pending Pre-req</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-slate-400">Target Curricular Unit</label>
                <select 
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full border border-slate-200 bg-slate-50 p-3.5 rounded-xl text-slate-800 font-bold focus:outline-none focus:ring-2 focus:ring-[#375534]/20 focus:bg-white transition-all normal-case"
                >
                  <option value="">-- Choose a course unit map --</option>
                  {subjectOptions.map(opt => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>

              {/* Action Buttons */}
              <div className="pt-3 flex justify-end gap-2">
                <button 
                  type="button" 
                  onClick={() => setIsModalOpen(false)}
                  className="bg-slate-100 border border-slate-200 text-slate-700 px-4 py-2.5 rounded-xl hover:bg-slate-200 transition-all"
                >
                  Cancel
                </button>
                <button 
                  type="submit"
                  className="bg-[#0F2A1D] text-[#E3EED4] px-5 py-2.5 rounded-xl hover:bg-[#375534] transition-all shadow-sm"
                >
                  Dispatch Assignment
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}