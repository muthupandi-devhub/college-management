import React from 'react';
import { X, BookOpen, Users, Award, Compass, GraduationCap } from 'lucide-react';
import { DegreeProgram } from '../types.ts';

interface CurriculumModalProps {
  program: DegreeProgram | null;
  onClose: () => void;
  onApply: (programTitle: string) => void;
}

export const CurriculumModal: React.FC<CurriculumModalProps> = ({
  program,
  onClose,
  onApply,
}) => {
  if (!program) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#000d24]/75 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-white border border-[#ded9d1] rounded-xs shadow-2xl overflow-hidden max-h-[92vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#0f2341] text-white border-b border-[#c5a059]/30">
          <div>
            <div className="flex items-center gap-2 text-[10px] uppercase tracking-wider text-[#c5a059] font-bold">
              <span>{program.college}</span>
              <span>·</span>
              <span>{program.degreeCode}</span>
            </div>
            <h3 className="font-serif text-xl font-semibold tracking-tight text-white mt-0.5">
              {program.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-slate-300 hover:text-white rounded-xs transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-6 bg-[#fef9f0] flex-1">
          {/* Overview */}
          <div>
            <h4 className="text-xs uppercase font-bold text-[#775a19] tracking-wider mb-1">
              Curricular Rationale & Synthesis
            </h4>
            <p className="text-sm text-[#1d1c16] leading-relaxed">
              {program.description}
            </p>
          </div>

          {/* Quick Specs Matrix */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="p-3 bg-white border border-[#ded9d1] rounded-xs">
              <span className="text-[10px] uppercase text-[#75777e] block">Duration</span>
              <span className="text-xs font-bold text-[#0f2341]">{program.duration}</span>
            </div>
            <div className="p-3 bg-white border border-[#ded9d1] rounded-xs">
              <span className="text-[10px] uppercase text-[#75777e] block">Total Credits</span>
              <span className="text-xs font-bold text-[#0f2341]">{program.credits}</span>
            </div>
            <div className="p-3 bg-white border border-[#ded9d1] rounded-xs">
              <span className="text-[10px] uppercase text-[#75777e] block">Primary Campus</span>
              <span className="text-xs font-bold text-[#0f2341]">{program.location}</span>
            </div>
            <div className="p-3 bg-white border border-[#ded9d1] rounded-xs">
              <span className="text-[10px] uppercase text-[#75777e] block">Capstone</span>
              <span className="text-xs font-bold text-[#0f2341]">{program.capstoneRequirement}</span>
            </div>
          </div>

          {/* Sample Course Syllabi */}
          <div className="bg-white p-4 border border-[#ded9d1] rounded-xs space-y-2.5">
            <h4 className="text-xs uppercase font-bold text-[#0f2341] tracking-wider flex items-center gap-1.5">
              <BookOpen className="w-4 h-4 text-[#c5a059]" />
              <span>Core Course Sequences & Colloquia</span>
            </h4>
            <ul className="space-y-2">
              {program.sampleCourses.map((course, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2.5 text-xs text-[#1d1c16] pb-2 border-b border-[#f2ede4] last:border-b-0 last:pb-0"
                >
                  <span className="font-mono text-[#c5a059] font-bold text-[11px] shrink-0 mt-0.5">
                    0{idx + 1}
                  </span>
                  <span>{course}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Distinguished Faculty & Career Outcomes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-3.5 bg-white border border-[#ded9d1] rounded-xs space-y-1.5">
              <div className="flex items-center gap-1.5 text-xs font-bold text-[#0f2341]">
                <Users className="w-3.5 h-3.5 text-[#c5a059]" />
                <span>Program Chair & Faculty Lead</span>
              </div>
              <p className="text-xs text-[#44474e]">{program.facultyLeader}</p>
              <span className="text-[11px] text-[#75777e] block">
                {program.facultyCount} Endowed Professors & Lecturers in department
              </span>
            </div>

            <div className="p-3.5 bg-white border border-[#ded9d1] rounded-xs space-y-1.5">
              <div className="flex items-center gap-1.5 text-xs font-bold text-[#0f2341]">
                <GraduationCap className="w-3.5 h-3.5 text-[#c5a059]" />
                <span>Select Career Outcomes</span>
              </div>
              <div className="flex flex-wrap gap-1">
                {program.careerOutcomes.map((outcome, i) => (
                  <span
                    key={i}
                    className="text-[11px] px-2 py-0.5 bg-[#f2ede4] border border-[#ded9d1] text-[#0f2341] rounded-xs font-medium"
                  >
                    {outcome}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer actions */}
        <div className="flex items-center justify-between px-6 py-3.5 bg-[#f2ede4] border-t border-[#ded9d1]">
          <span className="text-xs text-[#75777e]">
            Accredited by New England Commission of Higher Education
          </span>
          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-medium text-[#44474e] hover:text-[#0f2341]"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onApply(program.title);
              }}
              className="px-4 py-2 text-xs font-semibold text-white bg-[#0f2341] rounded-xs hover:bg-[#1a3863] transition-colors"
            >
              Start Application For This Degree
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
