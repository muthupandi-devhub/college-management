import React, { useState } from 'react';
import {
  GraduationCap,
  BookOpen,
  Award,
  Users,
  Compass,
  Search,
  ArrowRight,
  Sparkles,
  ChevronRight,
  Library,
  Globe2,
  FileText,
  Clock,
  CheckCircle2,
  Bookmark,
} from 'lucide-react';
import { DEGREE_PROGRAMS } from '../data/mockData.ts';
import { DegreeProgram } from '../types.ts';
import { TwilightGothicQuad } from './VisualFallback.tsx';

interface AcademicsViewProps {
  onSelectProgram: (program: DegreeProgram) => void;
  onOpenSearchModal: () => void;
  onOpenVisitModal: () => void;
}

export const AcademicsView: React.FC<AcademicsViewProps> = ({
  onSelectProgram,
  onOpenSearchModal: _onOpenSearchModal,
  onOpenVisitModal,
}) => {
  const [selectedDivision, setSelectedDivision] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedSchool, setSelectedSchool] = useState<number>(0);

  const academicSchools = [
    {
      name: 'College of Arts & Sciences',
      established: 1888,
      dean: 'Dean Alistair Vance, D.Phil. (Oxon)',
      description: 'The historic intellectual heart of Aethelgard, home to 32 departments spanning classical humanistic inquiry, theoretical physics, modern linguistics, and global literatures.',
      undergrads: '4,200 Scholars',
      faculty: '480 Tenured Professors',
      endowment: '$4.1B',
    },
    {
      name: 'School of Engineering & Applied Quantum Sciences',
      established: 1912,
      dean: 'Dean Elena Rostova, Ph.D. (MIT)',
      description: 'Pioneering breakthroughs across quantum computing architecture, bio-nanoengineering, sustainable robotic materials, and aerospace propulsion systems.',
      undergrads: '1,850 Scholars',
      faculty: '210 Tenured Professors',
      endowment: '$3.2B',
    },
    {
      name: 'School of Global Affairs & Public Policy',
      established: 1948,
      dean: 'Amb. Marcus Chen, J.D., M.P.A.',
      description: 'Educating heads of state, international jurists, and central banking governors in multilateral negotiation, constitutional governance, and diplomacy.',
      undergrads: '920 Scholars',
      faculty: '95 Tenured Professors',
      endowment: '$1.8B',
    },
    {
      name: 'School of Biomedical & Precision Health',
      established: 1920,
      dean: 'Dr. Sarah Al-Mansoor, M.D., Ph.D.',
      description: 'Interconnected with Boston medical centers and cleanroom wet labs, driving translational gene therapies, clinical trials, and epidemiology.',
      undergrads: '1,100 Scholars',
      faculty: '290 Tenured Professors',
      endowment: '$2.9B',
    },
  ];

  const filteredPrograms = DEGREE_PROGRAMS.filter((p) => {
    const programDivision = (p.division || p.degreeType || p.college).toLowerCase();
    const matchesDivision =
      selectedDivision === 'all' || programDivision.includes(selectedDivision.toLowerCase());
    const matchesSearch =
      (p.title || p.name || '').toLowerCase().includes(searchQuery.toLowerCase()) ||
      (p.college || p.department || '').toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesDivision && matchesSearch;
  });

  const coreCurriculumPillars = [
    {
      title: 'Moral Philosophy & Ethical Dialectic',
      code: 'PHIL-101',
      description: 'Direct Socratic engagement with Plato, Aristotle, Kant, Confucius, and contemporary bioethics through small seminar debates.',
    },
    {
      title: 'Algorithmic Thought & Quantitative Proofs',
      code: 'QUANT-104',
      description: 'Rigorous foundations in discrete mathematics, probability theory, computational complexity, and empirical inference.',
    },
    {
      title: 'Empirical Laboratory Discovery',
      code: 'SCIE-110',
      description: 'Hands-on experimental research in cleanrooms, molecular biology benches, or astronomical observatories.',
    },
    {
      title: 'Rhetoric, Classical Poetics & Composition',
      code: 'ENGL-102',
      description: 'Mastery of persuasive written and verbal argumentation, scholarly research papers, and classical rhetorical devices.',
    },
    {
      title: 'Polyglot Global Fluency',
      code: 'LANG-201',
      description: 'Demonstrated advanced collegiate fluency in at least one modern or classical non-English tongue.',
    },
    {
      title: 'Senior Capstone Baccalaureate Thesis',
      code: 'THES-499',
      description: 'An original 80-page scholarly monograph or peer-reviewed experimental thesis defended before a faculty tribunal.',
    },
  ];

  return (
    <div className="min-h-screen bg-[#fcfbf9] text-[#1c1917] selection:bg-[#7d1d28]/20 selection:text-[#7d1d28]">
      {/* Hero Section */}
      <section className="relative border-b border-[#e7e3db] bg-gradient-to-b from-[#f8f5ee] to-[#fcfbf9] pt-14 pb-16 lg:pt-20 lg:pb-24 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#1c1917_1px,transparent_1px)] [background-size:16px_16px]" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#7d1d28]/10 text-[#7d1d28] border border-[#7d1d28]/20 text-xs font-serif uppercase tracking-widest mb-6">
                <GraduationCap className="w-3.5 h-3.5" />
                Undergraduate & Graduate Academics
              </div>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#1c1917] leading-[1.12] tracking-tight mb-6">
                Rigorous Inquiry. Timeless Truth. Unbounded Innovation.
              </h1>
              <p className="text-lg text-[#57534e] font-serif leading-relaxed mb-8 max-w-2xl">
                At Aethelgard, education is an unhurried, rigorous voyage into fundamental questions. With a 7:1 student-to-faculty ratio and zero undergraduate courses taught by teaching assistants, scholars work shoulder-to-shoulder with the world&apos;s foremost minds.
              </p>
              
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="#degree-explorer"
                  className="inline-flex items-center gap-2 bg-[#7d1d28] hover:bg-[#63141f] text-white px-6 py-3.5 text-xs font-serif uppercase tracking-widest font-medium transition-colors shadow-sm"
                >
                  <BookOpen className="w-4 h-4 text-[#e0a96d]" />
                  Explore 58 Degree Concentrations
                </a>
                <button
                  onClick={onOpenVisitModal}
                  className="inline-flex items-center gap-2 border border-[#a8a29e] hover:border-[#1c1917] text-[#1c1917] bg-white px-6 py-3.5 text-xs font-serif uppercase tracking-widest font-medium transition-colors"
                >
                  <Clock className="w-4 h-4 text-[#7d1d28]" />
                  Observe an Open Seminar
                </button>
              </div>

              {/* Core Academic Metrics */}
              <div className="grid grid-cols-3 gap-6 pt-10 mt-10 border-t border-[#e7e3db]">
                <div>
                  <div className="font-serif text-3xl font-bold text-[#1c1917]">7 : 1</div>
                  <div className="text-xs uppercase tracking-wider text-[#78716c] font-sans mt-1">Student / Faculty Ratio</div>
                </div>
                <div>
                  <div className="font-serif text-3xl font-bold text-[#7d1d28]">78%</div>
                  <div className="text-xs uppercase tracking-wider text-[#78716c] font-sans mt-1">Classes Under 18 Scholars</div>
                </div>
                <div>
                  <div className="font-serif text-3xl font-bold text-[#1c1917]">31</div>
                  <div className="text-xs uppercase tracking-wider text-[#78716c] font-sans mt-1">Nobel Laureates on Faculty</div>
                </div>
              </div>
            </div>

            {/* Right Visual Architectural Feature */}
            <div className="lg:col-span-5">
              <div className="relative border border-[#d6d0c4] bg-white p-3 shadow-xl">
                <div className="relative h-72 sm:h-80 w-full overflow-hidden border border-[#e7e3db]">
                  <TwilightGothicQuad className="w-full h-full" />
                  <div className="absolute top-3 left-3 bg-[#1c1917]/85 backdrop-blur-sm text-white px-3 py-1 text-[11px] font-serif uppercase tracking-widest border border-white/20">
                    Vance Library of Antiquity &bull; Main Reading Cloister
                  </div>
                </div>
                <div className="p-4 bg-[#fcfbf9] border-t border-[#e7e3db]">
                  <div className="flex items-center justify-between text-xs text-[#78716c] font-serif mb-1">
                    <span className="text-[#7d1d28] font-bold">16.4 MILLION VOLUMES</span>
                    <span>Cambridge Depository</span>
                  </div>
                  <p className="text-xs text-[#57534e] italic">
                    &quot;He who enters here leaves not merely ignorance behind, but the illusion that knowledge can be mastered without disciplined devotion.&quot;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Academic Colleges & Schools Tabbed Section */}
      <section className="py-20 border-b border-[#e7e3db] bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <div className="text-xs font-serif uppercase tracking-widest text-[#7d1d28] mb-2">Constituent Schools</div>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1c1917]">Faculties of Exceptional Distinction</h2>
            <p className="text-sm text-[#57534e] font-serif mt-3 leading-relaxed">
              Organized into four primary undergraduate faculties and six renowned graduate institutes, Aethelgard promotes porous boundaries—permitting undergraduates to cross-enroll into graduate law seminars and quantum cleanroom laboratories.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* School Selector */}
            <div className="lg:col-span-4 border border-[#e7e3db] divide-y divide-[#e7e3db] bg-[#fcfbf9]">
              {academicSchools.map((school, idx) => {
                const isSelected = selectedSchool === idx;
                return (
                  <button
                    key={school.name}
                    onClick={() => setSelectedSchool(idx)}
                    className={`w-full text-left p-5 transition-all flex items-center justify-between ${
                      isSelected
                        ? 'bg-white border-l-4 border-l-[#7d1d28] shadow-sm'
                        : 'hover:bg-[#f6f2ea] text-[#57534e]'
                    }`}
                  >
                    <div>
                      <div className={`font-serif text-base ${isSelected ? 'text-[#7d1d28] font-bold' : 'text-[#1c1917]'}`}>
                        {school.name}
                      </div>
                      <div className="text-[11px] text-[#78716c] font-sans mt-1">
                        Established {school.established}
                      </div>
                    </div>
                    <ChevronRight className={`w-4 h-4 transition-transform ${isSelected ? 'text-[#7d1d28] translate-x-1' : 'text-[#a8a29e]'}`} />
                  </button>
                );
              })}
            </div>

            {/* Selected School Overview */}
            <div className="lg:col-span-8 border border-[#d6d0c4] bg-[#fcfbf9] p-6 lg:p-8">
              <div className="pb-6 border-b border-[#e7e3db]">
                <div className="text-xs font-serif uppercase tracking-widest text-[#7d1d28] mb-1">
                  FACULTY DEAN: {academicSchools[selectedSchool].dean}
                </div>
                <h3 className="font-serif text-3xl text-[#1c1917]">
                  {academicSchools[selectedSchool].name}
                </h3>
                <p className="text-sm text-[#57534e] font-serif leading-relaxed mt-3">
                  {academicSchools[selectedSchool].description}
                </p>
              </div>

              <div className="grid grid-cols-3 gap-6 py-6 border-b border-[#e7e3db]">
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-[#78716c]">Student Enrollment</div>
                  <div className="font-serif text-xl font-bold text-[#1c1917] mt-1">
                    {academicSchools[selectedSchool].undergrads}
                  </div>
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-[#78716c]">Instructional Faculty</div>
                  <div className="font-serif text-xl font-bold text-[#7d1d28] mt-1">
                    {academicSchools[selectedSchool].faculty}
                  </div>
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-[#78716c]">Dedicated Endowment</div>
                  <div className="font-serif text-xl font-bold text-[#1c1917] mt-1">
                    {academicSchools[selectedSchool].endowment}
                  </div>
                </div>
              </div>

              <div className="pt-6 flex flex-wrap items-center justify-between gap-4">
                <span className="text-xs text-[#78716c]">
                  Accredited by the New England Commission of Higher Education (NECHE)
                </span>
                <a
                  href="#degree-explorer"
                  className="inline-flex items-center gap-2 text-xs font-serif uppercase tracking-wider text-[#7d1d28] hover:text-[#63141f] font-semibold"
                >
                  View Concentrations Offered
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Aethelgard Hexagon: The Core Curriculum */}
      <section className="py-20 border-b border-[#e7e3db] bg-[#f8f5ee]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <div className="text-xs font-serif uppercase tracking-widest text-[#7d1d28] mb-2">General Education Charter</div>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1c1917]">The Aethelgard Hexagon</h2>
            <p className="text-sm text-[#57534e] font-serif mt-3 leading-relaxed">
              Irrespective of whether an undergraduate specializes in Theoretical Astrophysics or Medieval Latin, every graduate of Aethelgard completes the six foundational pillars of humanistic and analytical understanding.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreCurriculumPillars.map((pillar, idx) => (
              <div key={idx} className="bg-white border border-[#e7e3db] p-6 shadow-sm hover:border-[#7d1d28] transition-colors">
                <div className="flex items-center justify-between text-xs font-sans text-[#78716c] mb-3">
                  <span className="font-bold text-[#7d1d28] uppercase tracking-wider">PILLAR {idx + 1}</span>
                  <span className="font-mono bg-[#f4efe6] px-2 py-0.5 text-[11px] text-[#1c1917] border border-[#e7e3db]">{pillar.code}</span>
                </div>
                <h3 className="font-serif text-lg font-bold text-[#1c1917] mb-2">{pillar.title}</h3>
                <p className="text-xs text-[#57534e] font-serif leading-relaxed">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Degree Concentration Explorer */}
      <section id="degree-explorer" className="py-20 border-b border-[#e7e3db] bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <div className="text-xs font-serif uppercase tracking-widest text-[#7d1d28] mb-2">Curriculum Catalog</div>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#1c1917]">Academic Concentrations & Syllabi</h2>
              <p className="text-sm text-[#57534e] font-serif mt-2 max-w-2xl">
                Explore undergraduate majors, interdisciplinary joint concentrations, and doctoral research tracks. Click any degree to inspect credit requirements, syllabus pathways, and sample seminars.
              </p>
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-72">
              <Search className="w-4 h-4 text-[#a8a29e] absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search major, keyword, PI..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#fcfbf9] border border-[#d6d0c4] text-[#1c1917] pl-9 pr-3 py-2 text-xs font-serif placeholder:italic focus:outline-none focus:border-[#7d1d28]"
              />
            </div>
          </div>

          {/* Division Filter Tabs */}
          <div className="flex flex-wrap gap-2 mb-8 border-b border-[#e7e3db] pb-4">
            {[
              { id: 'all', label: 'All Disciplines' },
              { id: 'humanities', label: 'Humanities & Classics' },
              { id: 'stem', label: 'STEM & Quantum Sciences' },
              { id: 'social sciences', label: 'Social Sciences & Law' },
              { id: 'biomedical', label: 'Biomedical & Medicine' },
            ].map((div) => (
              <button
                key={div.id}
                onClick={() => setSelectedDivision(div.id)}
                className={`px-4 py-2 text-xs uppercase tracking-wider font-medium transition-colors ${
                  selectedDivision === div.id
                    ? 'bg-[#7d1d28] text-white font-serif'
                    : 'bg-[#fcfbf9] text-[#57534e] border border-[#e7e3db] hover:border-[#1c1917]'
                }`}
              >
                {div.label}
              </button>
            ))}
          </div>

          {/* Program Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPrograms.map((program) => (
              <div
                key={program.id}
                onClick={() => onSelectProgram(program)}
                className="border border-[#e7e3db] bg-[#fcfbf9] p-6 hover:border-[#7d1d28] hover:shadow-md transition-all cursor-pointer flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between text-[11px] text-[#78716c] font-sans mb-3">
                    <span className="uppercase tracking-wider font-semibold text-[#7d1d28]">{program.degreeType || program.division}</span>
                    <span className="font-serif font-bold text-[#1c1917] bg-[#f4efe6] px-2 py-0.5 border border-[#e7e3db]">{program.degreeCode || program.degree}</span>
                  </div>
                  <h3 className="font-serif text-xl text-[#1c1917] group-hover:text-[#7d1d28] transition-colors mb-2">
                    {program.title || program.name}
                  </h3>
                  <div className="text-xs text-[#78716c] font-serif mb-3">
                    {program.college || program.department}
                  </div>
                  <p className="text-xs text-[#57534e] font-serif leading-relaxed mb-4 line-clamp-3">
                    {program.description}
                  </p>
                </div>

                <div>
                  <div className="pt-3 border-t border-[#e7e3db] flex items-center justify-between text-xs text-[#78716c]">
                    <span>Credit Units: <strong className="text-[#1c1917]">{program.credits}</strong></span>
                    <span className="inline-flex items-center gap-1 text-[#7d1d28] font-serif font-semibold group-hover:underline">
                      View Syllabus
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredPrograms.length === 0 && (
            <div className="p-12 text-center border border-dashed border-[#d6d0c4] bg-[#fcfbf9]">
              <BookOpen className="w-8 h-8 text-[#a8a29e] mx-auto mb-3" />
              <div className="font-serif text-lg text-[#1c1917]">No concentration matched your query.</div>
              <div className="text-xs text-[#78716c] mt-1 font-serif">Try searching for &quot;Physics&quot;, &quot;Philosophy&quot;, &quot;Economics&quot;, or reset filters.</div>
            </div>
          )}
        </div>
      </section>

      {/* Libraries & Special Collections */}
      <section className="py-20 bg-[#f8f5ee]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#1c1917] text-white text-xs font-serif uppercase tracking-widest mb-4">
                <Library className="w-3.5 h-3.5 text-[#e0a96d]" />
                The University Library System
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#1c1917] mb-4">
                16.4 Million Volumes Across 14 Specialized Vaults
              </h2>
              <p className="text-sm text-[#57534e] font-serif leading-relaxed mb-6">
                From 9th-century illuminated Irish manuscripts and the original handwritten drafts of Emily Dickinson, to an ultra-modern quantum petaflop supercomputing digital archive, Aethelgard operates the third-largest academic library collection in the world.
              </p>

              <div className="space-y-4">
                <div className="p-4 bg-white border border-[#e7e3db] flex items-start gap-4">
                  <Bookmark className="w-5 h-5 text-[#7d1d28] shrink-0 mt-0.5" />
                  <div>
                    <div className="font-serif text-sm font-bold text-[#1c1917]">Houghton Rare Manuscript Vault</div>
                    <div className="text-xs text-[#57534e] font-serif mt-1">
                      Over 450,000 rare incunabula, original royal seals, and illuminated cartographic codices housed in nitrogen-sealed climate chambers.
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-white border border-[#e7e3db] flex items-start gap-4">
                  <Globe2 className="w-5 h-5 text-[#7d1d28] shrink-0 mt-0.5" />
                  <div>
                    <div className="font-serif text-sm font-bold text-[#1c1917]">Global Academic Consortium & Depository</div>
                    <div className="text-xs text-[#57534e] font-serif mt-1">
                      Direct inter-library borrowing reciprocal agreements with Oxford Bodleian, Cambridge University, and the Sorbonne.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="border border-[#d6d0c4] bg-white p-6 shadow-sm">
                <h3 className="font-serif text-xl text-[#1c1917] pb-3 border-b border-[#e7e3db] mb-4">
                  Study Abroad & Dual-Degree Partnerships
                </h3>
                <p className="text-xs text-[#57534e] font-serif leading-relaxed mb-4">
                  Over 54% of undergraduates undertake an accredited semester or junior year abroad at one of our six partnered collegiate universities:
                </p>

                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="p-3 bg-[#fcfbf9] border border-[#e7e3db]">
                    <strong className="text-[#1c1917] font-serif">University of Oxford</strong>
                    <div className="text-[#78716c] text-[11px] mt-0.5">Balliol & Christ Church Colleges</div>
                  </div>
                  <div className="p-3 bg-[#fcfbf9] border border-[#e7e3db]">
                    <strong className="text-[#1c1917] font-serif">Sciences Po Paris</strong>
                    <div className="text-[#78716c] text-[11px] mt-0.5">Dual B.A. in International Politics</div>
                  </div>
                  <div className="p-3 bg-[#fcfbf9] border border-[#e7e3db]">
                    <strong className="text-[#1c1917] font-serif">University of Cambridge</strong>
                    <div className="text-[#78716c] text-[11px] mt-0.5">Trinity College Math Tripos Exchange</div>
                  </div>
                  <div className="p-3 bg-[#fcfbf9] border border-[#e7e3db]">
                    <strong className="text-[#1c1917] font-serif">University of Tokyo</strong>
                    <div className="text-[#78716c] text-[11px] mt-0.5">Hongo Quantum Nanotechnology Lab</div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-[#e7e3db] flex items-center justify-between">
                  <span className="text-xs text-[#78716c]">Financial Aid Transfers 100% Abroad</span>
                  <button
                    onClick={onOpenVisitModal}
                    className="text-xs font-serif uppercase tracking-wider text-[#7d1d28] hover:underline font-semibold"
                  >
                    Inquire with Dean of Global Studies &rarr;
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
