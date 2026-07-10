import { useState } from 'react';
import { UserPlus, Search, Filter, Edit3, Trash2, X } from 'lucide-react';

export default function AdminStudentsPage() {
  // 1. Core State Management for Students Directory
  const [students, setStudents] = useState([
    { id: 'TLSU-2021-0001', name: 'Maria Santos', email: 'm.santos@tlsu.edu.ph', course: 'BSCS', year: '4', status: 'active' },
    { id: 'TLSU-2021-0002', name: 'Juan Dela Cruz', email: 'j.delacruz@tlsu.edu.ph', course: 'BSIT', year: '4', status: 'active' },
    { id: 'TLSU-2022-0003', name: 'Ana Reyes', email: 'a.reyes@tlsu.edu.ph', course: 'BSBA', year: '3', status: 'active' },
    { id: 'TLSU-2022-0004', name: 'Carlos Lim', email: 'c.lim@tlsu.edu.ph', course: 'BSN', year: '3', status: 'active' },
    { id: 'TLSU-2022-0005', name: 'Sofia Tan', email: 's.tan@tlsu.edu.ph', course: 'BSED', year: '3', status: 'active' },
    { id: 'TLSU-2023-0006', name: 'Miguel Garcia', email: 'm.garcia@tlsu.edu.ph', course: 'BSCS', year: '2', status: 'active' },
    { id: 'TLSU-2023-0007', name: 'Isabella Fernandez', email: 'i.fernandez@tlsu.edu.ph', course: 'BSA', year: '2', status: 'active' },
    { id: 'TLSU-2023-0008', name: 'Rafael Cruz', email: 'r.cruz@tlsu.edu.ph', course: 'BSIT', year: '2', status: 'active' }
  ]);

  // 2. Structural Filters and Query States
  const [searchQuery, setSearchQuery] = useState('');
  
  // 3. Form and Modal Interaction States
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingStudent, setEditingStudent] = useState(null);
  const [formData, setFormData] = useState({ id: '', name: '', email: '', course: 'BSIT', year: '1', status: 'active' });

  // 4. Functional Actions
  const openAddModal = () => {
    setEditingStudent(null);
    setFormData({ id: '', name: '', email: '', course: 'BSIT', year: '1', status: 'active' });
    setIsModalOpen(true);
  };

  const openEditModal = (student) => {
    setEditingStudent(student.id);
    setFormData({ ...student });
    setIsModalOpen(true);
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you certain you want to remove this student entry from the directory?')) {
      setStudents(students.filter(student => student.id !== id));
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingStudent) {
      // Execute Edit Update logic
      setStudents(students.map(student => student.id === editingStudent ? formData : student));
    } else {
      // Execute Create Entry logic
      if (students.some(student => student.id === formData.id)) {
        alert('This Student Number is already taken.');
        return;
      }
      setStudents([...students, formData]);
    }
    setIsModalOpen(false);
  };

  // 5. Query Filtering Logic
  const filteredStudents = students.filter(student => 
    student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    student.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
    student.course.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6 text-[#0F2A1D]">
      {/* Header View */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-3xl font-extrabold tracking-tight text-[#0F2A1D]">Students</h2>
        </div>
        <button 
          onClick={openAddModal}
          className="flex items-center gap-2 bg-[#0F2A1D] text-[#E3EED4] text-xs font-bold uppercase tracking-wider px-5 py-3.5 rounded-2xl hover:bg-[#375534] transition-all shadow-sm active:scale-[0.98]"
        >
          <UserPlus size={16} /> Add Student
        </button>
      </div>

      {/* Control Actions Panel */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-3.5 text-slate-400" size={18} />
          <input 
            type="text" 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search students by name or ID..." 
            className="w-full bg-slate-50 border border-slate-200 text-sm pl-12 pr-4 py-3.5 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#375534]/20 focus:bg-white transition-all text-slate-800 placeholder-slate-400 font-medium"
          />
        </div>
        <button className="flex items-center justify-center gap-2 bg-slate-50 border border-slate-200 text-slate-700 text-xs font-bold uppercase tracking-wider px-5 py-3 rounded-2xl hover:bg-slate-100 transition-all">
          <Filter size={16} /> Filter
        </button>
      </div>

      {/* Premium Table Registry */}
      <div className="bg-white rounded-3xl border border-slate-200/80 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-200/60 bg-slate-50/70 text-[10px] font-black text-slate-400 uppercase tracking-wider">
                <th className="p-4 pl-6">Student</th>
                <th className="p-4">Student No.</th>
                <th className="p-4">Program</th>
                <th className="p-4">Year Level</th>
                <th className="p-4">Status</th>
                <th className="p-4 pr-6 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-xs font-bold text-slate-700">
              {filteredStudents.length > 0 ? (
                filteredStudents.map((student) => (
                  <tr key={student.id} className="hover:bg-slate-50/40 transition-colors group">
                    <td className="p-4 pl-6">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-xl bg-[#375534]/10 text-[#375534] font-black text-[11px] flex items-center justify-center uppercase shrink-0">
                          {student.name.split(' ').map(n => n[0]).join('').substring(0, 2)}
                        </div>
                        <div>
                          <p className="font-extrabold text-slate-900 transition-colors">{student.name}</p>
                          <p className="text-[11px] text-slate-400 font-medium mt-0.5">{student.email}</p>
                        </div>
                      </div>
                    </td>
                    <td className="p-4 font-mono text-slate-500 tracking-tight">{student.id}</td>
                    <td className="p-4 text-slate-900 font-extrabold">{student.course}</td>
                    <td className="p-4 text-slate-600 font-extrabold pl-6">{student.year}</td>
                    <td className="p-4">
                      <span className="px-2.5 py-0.5 rounded-full text-[9px] font-black uppercase tracking-wider bg-emerald-50 text-emerald-700 border border-emerald-100">
                        {student.status}
                      </span>
                    </td>
                    <td className="p-4 pr-6 text-right">
                      <div className="flex items-center justify-end gap-1.5 opacity-40 group-hover:opacity-100 transition-opacity">
                        <button 
                          onClick={() => openEditModal(student)}
                          className="p-2 text-slate-500 hover:text-[#0F2A1D] hover:bg-slate-100 rounded-xl transition-all"
                        >
                          <Edit3 size={15} />
                        </button>
                        <button 
                          onClick={() => handleDelete(student.id)}
                          className="p-2 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-xl transition-all"
                        >
                          <Trash2 size={15} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="p-8 text-center text-slate-400 font-bold uppercase tracking-wider">
                    No records found matching the criteria.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* 6. Context Add/Edit Overlay Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-[#0F2A1D]/40 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl border border-slate-200 shadow-2xl w-full max-w-md overflow-hidden animate-in fade-in zoom-in-95 duration-200">
            {/* Modal Header */}
            <div className="bg-[#0F2A1D] text-[#E3EED4] p-5 flex justify-between items-center">
              <h3 className="text-sm font-black uppercase tracking-wider">
                {editingStudent ? 'Edit Student Configuration' : 'Register New Student Profile'}
              </h3>
              <button onClick={() => setIsModalOpen(false)} className="text-[#AEC3B0] hover:text-white transition-colors">
                <X size={18} />
              </button>
            </div>

            {/* Modal Form */}
            <form onSubmit={handleSubmit} className="p-6 space-y-4 text-xs font-bold text-slate-600">
              <div>
                <label className="block uppercase tracking-wider mb-1.5 text-slate-400">Student Number</label>
                <input 
                  type="text" 
                  name="id"
                  required
                  disabled={!!editingStudent}
                  value={formData.id}
                  onChange={handleInputChange}
                  placeholder="e.g., TLSU-2026-0001" 
                  className="w-full border border-slate-200 bg-slate-50 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#375534]/20 focus:bg-white transition-all text-slate-800 disabled:opacity-50 disabled:bg-slate-100"
                />
              </div>

              <div>
                <label className="block uppercase tracking-wider mb-1.5 text-slate-400">Full Name</label>
                <input 
                  type="text" 
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="e.g., Maria Santos" 
                  className="w-full border border-slate-200 bg-slate-50 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#375534]/20 focus:bg-white transition-all text-slate-800"
                />
              </div>

              <div>
                <label className="block uppercase tracking-wider mb-1.5 text-slate-400">Institutional Email</label>
                <input 
                  type="email" 
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="e.g., m.santos@tlsu.edu.ph" 
                  className="w-full border border-slate-200 bg-slate-50 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#375534]/20 focus:bg-white transition-all text-slate-800"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block uppercase tracking-wider mb-1.5 text-slate-400">Program</label>
                  <select 
                    name="course"
                    value={formData.course}
                    onChange={handleInputChange}
                    className="w-full border border-slate-200 bg-slate-50 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#375534]/20 focus:bg-white transition-all text-slate-800"
                  >
                    <option value="BSIT">BSIT</option>
                    <option value="BSCS">BSCS</option>
                    <option value="BSBA">BSBA</option>
                    <option value="BSN">BSN</option>
                    <option value="BSED">BSED</option>
                    <option value="BSA">BSA</option>
                  </select>
                </div>

                <div>
                  <label className="block uppercase tracking-wider mb-1.5 text-slate-400">Year Level</label>
                  <select 
                    name="year"
                    value={formData.year}
                    onChange={handleInputChange}
                    className="w-full border border-slate-200 bg-slate-50 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#375534]/20 focus:bg-white transition-all text-slate-800"
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block uppercase tracking-wider mb-1.5 text-slate-400">Status</label>
                <select 
                  name="status"
                  value={formData.status}
                  onChange={handleInputChange}
                  className="w-full border border-slate-200 bg-slate-50 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#375534]/20 focus:bg-white transition-all text-slate-800"
                >
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                </select>
              </div>

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
                  className="bg-[#0F2A1D] text-[#E3EED4] px-5 py-2.5 rounded-xl hover:bg-[#375534] transition-all"
                >
                  {editingStudent ? 'Save Changes' : 'Register Entry'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}