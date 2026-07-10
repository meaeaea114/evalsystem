import { useState, useMemo } from 'react';
import { Search, Filter, BookOpen, Layers, CheckCircle } from 'lucide-react';

export default function AdminSubjectsPage() {
  // 1. Core State Population mapped explicitly from the Master Crosswalk Data
  const [subjects] = useState([
    { oldCode: 'IT 111', oldTitle: 'Introduction to Computing', newCode: 'CC 100', newTitle: 'Introduction to Computing', units: 3, prereqText: 'None', prereqCodes: [] },
    { oldCode: 'CS 111', oldTitle: 'Computer Programming', newCode: 'CC 101', newTitle: 'Computer Programming', units: 3, prereqText: 'None', prereqCodes: [] },
    { oldCode: 'Null', oldTitle: 'Null', newCode: 'MATH 101', newTitle: 'Differential Calculus', units: 4, prereqText: 'None', prereqCodes: [] },
    { oldCode: 'GEd 101', oldTitle: 'Understanding the Self', newCode: 'GEd 101', newTitle: 'Understanding the Self', units: 3, prereqText: 'None', prereqCodes: [] },
    { oldCode: 'GEd 102', oldTitle: 'Mathematics in the Modern World', newCode: 'GEd 102', newTitle: 'Mathematics in the Modern World', units: 3, prereqText: 'None', prereqCodes: [] },
    { oldCode: 'GEd 105', oldTitle: 'Readings in Philippine History', newCode: 'GEd 105', newTitle: 'Readings in Philippine History', units: 3, prereqText: 'None', prereqCodes: [] },
    { oldCode: 'PATHFit 1', oldTitle: 'Movement Competency Training', newCode: 'PATHFit 1', newTitle: 'Movement Competency Training', units: 2, prereqText: 'None', prereqCodes: [] },
    { oldCode: 'NSTP 111', oldTitle: 'National Service Training Program 1', newCode: 'NSTP 111', newTitle: 'National Service Training Program 1', units: 3, prereqText: 'None', prereqCodes: [] },
    { oldCode: 'CS 121', oldTitle: 'Advanced Computer Programming', newCode: 'CC 102', newTitle: 'Advanced Computer Programming', units: 3, prereqText: 'Introduction to Computing, Computer Programming', prereqCodes: ['CC 100', 'CC 101'] },
    { oldCode: 'CS 131', oldTitle: 'Data Structures and Algorithms', newCode: 'CC 103', newTitle: 'Data Structures and Algorithms', units: 3, prereqText: 'Introduction to Computing, Computer Programming', prereqCodes: ['CC 100', 'CC 101'] },
    { oldCode: 'CpE 405', oldTitle: 'Discrete Mathematics', newCode: 'CpE 405', newTitle: 'Discrete Mathematics', units: 3, prereqText: 'Differential Calculus', prereqCodes: ['MATH 101'] },
    { oldCode: 'IT 332', oldTitle: 'Integrative Programming and Technologies', newCode: 'IPT 101', newTitle: 'Integrative Programming and Technologies', units: 3, prereqText: 'Systems Analysis and Design', prereqCodes: ['SAD 101'] },
    { oldCode: 'IT 314', oldTitle: 'Web Systems and Technologies', newCode: 'WS 101', newTitle: 'Web Systems and Technologies', units: 3, prereqText: 'Information Management, Object-Oriented Programming', prereqCodes: ['CC 104', 'OOP 101'] },
    { oldCode: 'IT 324', oldTitle: 'Capstone Project 1', newCode: 'CP 101', newTitle: 'Capstone Project 1', units: 3, prereqText: '3rd Year Standing', prereqCodes: ['YEAR_3'] },
    { oldCode: 'IT 413', oldTitle: 'Advanced Information Assurance and Security', newCode: 'IAS 102', newTitle: 'Advanced Information Assurance and Security', units: 3, prereqText: 'Information Assurance and Security', prereqCodes: ['IAS 101'] },
    { oldCode: 'IT 325', oldTitle: 'IT Project Management', newCode: 'ITPM 101', newTitle: 'IT Project Management', units: 3, prereqText: 'Systems Analysis and Design', prereqCodes: ['SAD 101'] },
    { oldCode: 'IT 414', oldTitle: 'System Quality Assurance', newCode: 'SQA 101', newTitle: 'System Quality Assurance', units: 3, prereqText: 'Systems Analysis and Design', prereqCodes: ['SAD 101'] },
    { oldCode: 'IT 411', oldTitle: 'Capstone Project 2', newCode: 'CP 102', newTitle: 'Capstone Project 2', units: 3, prereqText: 'Capstone Project 1', prereqCodes: ['CP 101'] },
    { oldCode: 'IT 331', oldTitle: 'Application Development and Emerging Technologies', newCode: 'CC 105', newTitle: 'Application Development and Emerging Technologies', units: 3, prereqText: 'Object-Oriented Programming', prereqCodes: ['OOP 101'] }
  ]);

  // 2. Filter Interactivity States
  const [searchQuery, setSearchQuery] = useState('');
  const [curriculumView, setCurriculumView] = useState('All'); // 'All', 'New Only', 'With Mapping'

  // 3. Search & Filter Logic
  const filteredSubjects = useMemo(() => {
    return subjects.filter(subject => {
      const textMatch = 
        subject.newTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
        subject.newCode.toLowerCase().includes(searchQuery.toLowerCase()) ||
        subject.oldCode.toLowerCase().includes(searchQuery.toLowerCase());

      if (curriculumView === 'New Only') {
        return textMatch && subject.oldCode === 'Null';
      }
      if (curriculumView === 'With Mapping') {
        return textMatch && subject.oldCode !== 'Null';
      }
      return textMatch;
    });
  }, [subjects, searchQuery, curriculumView]);

  return (
    <div className="space-y-6 text-[#0F2A1D]">
      {/* Title block */}
      <div>
        <h2 className="text-3xl font-extrabold tracking-tight text-[#0F2A1D]">Subjects</h2>
        <p className="text-xs text-slate-400 font-medium uppercase mt-1 tracking-wider">
          Curriculum Crosswalk & Prerequisite Configuration
        </p>
      </div>

      {/* Filter and Search Action Toolbar Strip */}
      <div className="bg-white border border-slate-200/80 rounded-3xl p-4 shadow-sm flex flex-col md:flex-row gap-4 justify-between items-center">
        {/* Search Input Box */}
        <div className="relative w-full md:w-80">
          <Search className="absolute left-4 top-3.5 text-slate-400" size={16} />
          <input 
            type="text" 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by code, title or old layout..." 
            className="w-full bg-slate-50 border border-slate-200 text-xs pl-12 pr-4 py-3.5 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#375534]/20 focus:bg-white transition-all text-slate-800 placeholder-slate-400 font-bold"
          />
        </div>

        {/* Dynamic Filter Select Pills */}
        <div className="flex gap-2 w-full md:w-auto overflow-x-auto">
          {['All', 'New Only', 'With Mapping'].map((tab) => (
            <button
              key={tab}
              onClick={() => setCurriculumView(tab)}
              className={`px-4 py-2 rounded-xl text-[11px] font-black tracking-wide uppercase transition-all whitespace-nowrap
                ${curriculumView === tab 
                  ? 'bg-[#0F2A1D] text-white shadow-sm shadow-black/10' 
                  : 'bg-slate-50 border border-slate-200/60 text-slate-500 hover:bg-slate-100'
                }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Main Grid Crosswalk Repository View */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-5">
        {filteredSubjects.length > 0 ? (
          filteredSubjects.map((item, idx) => (
            <div 
              key={idx} 
              className="bg-white border border-slate-200/80 rounded-3xl p-6 shadow-sm flex flex-col justify-between space-y-4 hover:shadow-md transition-all group"
            >
              {/* Upper Section: Core Course Information Layout */}
              <div className="space-y-3">
                <div className="flex justify-between items-start">
                  <div className="space-y-1">
                    <span className="font-mono text-xs font-black text-blue-600 bg-blue-50/60 border border-blue-100/40 px-2.5 py-1 rounded-lg">
                      {item.newCode}
                    </span>
                    <h3 className="text-base font-black text-slate-900 group-hover:text-[#0F2A1D] transition-colors pt-1.5 leading-snug">
                      {item.newTitle}
                    </h3>
                  </div>
                  <span className="text-[11px] font-black bg-slate-100 border border-slate-200/60 text-slate-500 px-3 py-1 rounded-xl shrink-0">
                    🕒 {item.units} Units
                  </span>
                </div>

                {/* Crosswalk Mapping Card Block Section */}
                <div className="bg-slate-50/70 border border-slate-200/50 rounded-2xl p-3.5 flex items-center justify-between text-xs font-bold">
                  <div className="space-y-0.5">
                    <p className="text-[10px] uppercase tracking-wider text-slate-400 font-black">Historical Crosswalk Map</p>
                    {item.oldCode === 'Null' ? (
                      <p className="text-slate-500 font-medium italic mt-0.5">Newly introduced structural unit</p>
                    ) : (
                      <p className="text-slate-800 font-extrabold mt-0.5">
                        Mapped from: <span className="font-mono text-xs font-black text-[#375534] bg-[#E3EED4]/30 px-1.5 py-0.5 rounded border border-[#6B9071]/20">{item.oldCode}</span> {item.oldTitle}
                      </p>
                    )}
                  </div>
                  <Layers size={16} className="text-slate-300 group-hover:text-[#6B9071] transition-colors" />
                </div>
              </div>

              {/* Lower Section: Prerequisite Matrix Logic */}
              <div className="pt-3 border-t border-slate-100 space-y-2">
                <p className="text-[10px] font-black uppercase tracking-wider text-slate-400">Sequence Eligibility Rule</p>
                {item.prereqCodes.length === 0 ? (
                  <div className="flex items-center gap-1.5 text-emerald-700 font-black text-xs bg-emerald-50/50 border border-emerald-100/40 p-2.5 rounded-xl">
                    <CheckCircle size={14} className="stroke-[2.5]" /> Open Sequence — No prerequisites required
                  </div>
                ) : (
                  <div className="space-y-2">
                    <p className="text-xs text-slate-600 font-semibold leading-relaxed">
                      Requires prior passing completion of: <span className="italic font-bold text-slate-700">{item.prereqText}</span>
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {item.prereqCodes.map((codeItem) => (
                        <span 
                          key={codeItem} 
                          className="font-mono text-[10px] font-black bg-rose-50 text-rose-700 border border-rose-100 px-2 py-0.5 rounded-md"
                        >
                          {codeItem}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full p-12 text-center bg-white border border-slate-200/80 rounded-3xl text-slate-400 font-black uppercase tracking-wider">
            No subject profiles discovered matching the parameters.
          </div>
        )}
      </div>
    </div>
  );
}