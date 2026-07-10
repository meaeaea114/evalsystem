import { useState } from 'react';
import { 
  Edit2, 
  ShieldAlert, 
  MailWarning, 
  Mail, 
  Phone, 
  MapPin, 
  GraduationCap 
} from 'lucide-react';

export default function StudentProfilePage() {
  // 1. Core Profile Data State mapping directly to your screenshots
  const [studentInfo] = useState({
    name: 'John Bautista',
    id: 'TLSU-2023-00147',
    classification: 'REGULAR',
    program: 'BS Computer Science',
    yearSection: '3rd Year - BSCS-3B',
    academicYear: '2025–2026',
    semester: '1st Semester',
    email: 'john.bautista@tlsu.edu',
    contactNumber: '+63 (912) 345-6789',
    address: '123 Taft Avenue, Malate, Manila, 1004',
    completionPercentage: 65,
    earnedUnits: 117,
    requiredUnits: 180
  });

  return (
    <div className="space-y-6 text-[#0F2A1D] max-w-[1400px] mx-auto antialiased">
      
      {/* Page Header Title Section */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-slate-100 pb-4">
        <div>
          <h2 className="text-3xl font-serif font-black tracking-tight text-slate-900">Student Profile</h2>
          <p className="text-xs text-slate-400 font-semibold mt-1">
            Manage your personal information and academic settings.
          </p>
        </div>
        <button className="flex items-center gap-2 bg-white border border-slate-200 text-slate-700 text-xs font-bold px-4 py-2.5 rounded-xl hover:bg-slate-50 transition-all shadow-2xs active:scale-[0.98]">
          <Edit2 size={13} /> Edit Profile
        </button>
      </div>

      {/* Main Structural Asymmetric Split Layout Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
        
        {/* LEFT COLUMN: Identity Profile Card & Account Settings */}
        <div className="space-y-6">
          
          {/* Main Avatar Profile Information Block Card */}
          <div className="bg-white border border-slate-200/60 rounded-3xl overflow-hidden shadow-xs text-center flex flex-col items-center">
            {/* Ambient Background Top Header Panel strip */}
            <div className="h-24 w-full bg-gradient-to-br from-[#eaf0eb] to-[#f4f7f4]" />
            
            {/* Floating Profile Initial Circle Badge element */}
            <div className="w-24 h-24 rounded-full bg-slate-100 border-4 border-white text-slate-600 font-serif font-black text-3xl flex items-center justify-center shadow-xs -mt-12">
              {studentInfo.name[0]}
            </div>

            <div className="p-6 pt-4 space-y-3.5 w-full">
              <div>
                <h3 className="text-lg font-serif font-black text-slate-900 leading-tight">{studentInfo.name}</h3>
                <p className="text-xs font-mono font-bold text-slate-400 mt-1">{studentInfo.id}</p>
              </div>
              <div className="pt-1">
                <span className="bg-[#e2f4df] text-[#0F2A1D] px-4 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-wider border border-[#cbe6bf]/30">
                  {studentInfo.classification}
                </span>
              </div>
            </div>
          </div>

          {/* Account Settings Secondary Navigation Panel Card */}
          <div className="bg-white border border-slate-200/60 rounded-3xl p-6 shadow-xs space-y-4">
            <h4 className="text-sm font-serif font-black text-slate-900 tracking-tight flex items-center gap-2">
              Account Settings
            </h4>
            <div className="space-y-1 text-xs font-bold text-slate-500">
              <button className="w-full flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-slate-50 hover:text-slate-900 text-left transition-all group">
                <ShieldAlert size={16} className="text-slate-400 group-hover:text-[#375534]" />
                <span>Security & Password</span>
              </button>
              <button className="w-full flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-slate-50 hover:text-slate-900 text-left transition-all group">
                <MailWarning size={16} className="text-slate-400 group-hover:text-[#375534]" />
                <span>Email Preferences</span>
              </button>
            </div>
          </div>

        </div>

        {/* RIGHT COLUMN: Academic Info, Contact Details, and Completion Tracker */}
        <div className="lg:col-span-2 space-y-6">
          
          {/* Academic Information Grid Matrix Card Container */}
          <div className="bg-white border border-slate-200/60 rounded-3xl p-6 shadow-xs space-y-5">
            <h4 className="text-sm font-serif font-black text-slate-900 tracking-tight border-b border-slate-50 pb-3">
              Academic Information
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-5 text-xs font-bold">
              <div className="space-y-0.5">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-wider">Degree Program</p>
                <p className="text-sm font-extrabold text-slate-800 pt-0.5">{studentInfo.program}</p>
              </div>
              <div className="space-y-0.5">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-wider">Year & Section</p>
                <p className="text-sm font-extrabold text-slate-800 pt-0.5">{studentInfo.yearSection}</p>
              </div>
              <div className="space-y-0.5">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-wider">Current Academic Year</p>
                <p className="text-sm font-extrabold text-slate-800 pt-0.5">{studentInfo.academicYear}</p>
              </div>
              <div className="space-y-0.5">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-wider">Current Semester</p>
                <p className="text-sm font-extrabold text-slate-800 pt-0.5">{studentInfo.semester}</p>
              </div>
            </div>
          </div>

          {/* Contact Details Informational List Card Container */}
          <div className="bg-white border border-slate-200/60 rounded-3xl p-6 shadow-xs space-y-5">
            <h4 className="text-sm font-serif font-black text-slate-900 tracking-tight border-b border-slate-50 pb-3">
              Contact Details
            </h4>
            <div className="space-y-4 text-xs font-bold">
              {/* Email Entry row */}
              <div className="flex gap-4 items-center">
                <div className="p-2.5 bg-[#f4f7f3] text-slate-500 rounded-xl shrink-0"><Mail size={16} /></div>
                <div>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-wider">University Email</p>
                  <p className="text-sm font-extrabold text-slate-800 mt-0.5 lowercase">{studentInfo.email}</p>
                </div>
              </div>
              {/* Phone Entry row */}
              <div className="flex gap-4 items-center">
                <div className="p-2.5 bg-[#f4f7f3] text-slate-500 rounded-xl shrink-0"><Phone size={16} /></div>
                <div>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-wider">Contact Number</p>
                  <p className="text-sm font-mono font-extrabold text-slate-800 mt-0.5">{studentInfo.contactNumber}</p>
                </div>
              </div>
              {/* Address Entry row */}
              <div className="flex gap-4 items-center">
                <div className="p-2.5 bg-[#f4f7f3] text-slate-500 rounded-xl shrink-0"><MapPin size={16} /></div>
                <div>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-wider">Current Address</p>
                  <p className="text-sm font-extrabold text-slate-800 mt-0.5 normal-case">{studentInfo.address}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Degree Completion Horizontal Tracking Linear Gauge Banner */}
          <div className="bg-[#eaf0eb] border border-[#cbe6bf]/40 rounded-3xl p-6 shadow-2xs flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="p-3.5 bg-white border border-slate-200/60 rounded-2xl text-[#0F2A1D] shrink-0">
              <GraduationCap size={20} />
            </div>
            <div className="space-y-3 flex-1 w-full text-xs font-bold">
              <div>
                <h4 className="text-sm font-serif font-black text-slate-900 tracking-tight">Degree Completion</h4>
                <p className="text-[11px] text-slate-400 font-medium normal-case mt-0.5">You are making steady progress.</p>
              </div>
              {/* Progress track */}
              <div className="space-y-2">
                <div className="w-full bg-white/60 p-0.5 h-3 rounded-full overflow-hidden border border-slate-200/30">
                  <div 
                    className="bg-[#0F2A1D] h-full rounded-full transition-all duration-500" 
                    style={{ width: `${studentInfo.completionPercentage}%` }}
                  />
                </div>
                <div className="flex justify-between text-[10px] font-black uppercase tracking-wider text-slate-400 px-0.5">
                  <span>{studentInfo.completionPercentage}% Completed</span>
                  <span className="font-mono">{studentInfo.earnedUnits} / {studentInfo.requiredUnits} Units</span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}