import {
  DecisionTrack,
  ApplicationStage,
  EndowedFellowship,
  RegionalDean,
  DegreeProgram,
  ResidentialHouse,
  StudentSociety,
  ResearchInstitute,
  ResearchPublication,
  InstrumentationCore,
  StartupSpinout,
  FundingOpportunity,
} from '../types.ts';

export const DECISION_TRACKS: DecisionTrack[] = [
  {
    key: 'ed1',
    label: 'EARLY DECISION I (NOV 1)',
    badge: 'BINDING PLAN',
    deadlineDate: 'November 1, 2025',
    notificationDate: 'Mid-December 2025',
    description:
      'For candidates who consider Aethelgard University their undeniable first choice. Early notification enables complete academic and housing certainty prior to winter recess.',
    binding: true,
  },
  {
    key: 'ed2',
    label: 'EARLY DECISION II (JAN 5)',
    badge: 'BINDING PLAN',
    deadlineDate: 'January 5, 2026',
    notificationDate: 'Mid-February 2026',
    description:
      'A second opportunity for committed applicants who crystallized their first-choice affinity for Aethelgard later in the fall. Carries the same binding pledge with accelerated notification.',
    binding: true,
  },
  {
    key: 'rd',
    label: 'REGULAR DECISION (JAN 15)',
    badge: 'NON-BINDING PLAN',
    deadlineDate: 'January 15, 2026',
    notificationDate: 'Late March 2026',
    description:
      'The primary non-binding application track providing maximum flexibility to compare academic programs and financial aid packages before the national May 1 reply deadline.',
    binding: false,
  },
  {
    key: 'transfer',
    label: 'TRANSFER STUDENTS (MAR 1)',
    badge: 'LATERAL SCHOLAR',
    deadlineDate: 'March 1, 2026',
    notificationDate: 'Early May 2026',
    description:
      'Welcoming ambitious scholars from accredited two-year and four-year institutions seeking to transfer credit toward our rigorous undergraduate degrees.',
    binding: false,
  },
];

export const APPLICATION_STAGES: ApplicationStage[] = [
  {
    number: '01',
    stageName: 'STAGE 1',
    title: 'Application Submission',
    description:
      'File via the Common Application or Coalition on Scoir. Includes the Aethelgard Intellectual Curiosity personal monograph.',
    footerNote: 'PORTAL ACCESS 24H POST-FILING',
    iconType: 'check',
  },
  {
    number: '02',
    stageName: 'STAGE 2',
    title: 'Official Transcripts',
    description:
      'Secondary school profile and counselor evaluation submitted directly by school officials with 9th–11th grade marks.',
    footerNote: 'OFFICIAL PARCHMENT UPLOAD',
    iconType: 'file',
  },
  {
    number: '03',
    stageName: 'STAGE 3',
    title: 'Letters of Recommendation',
    description:
      'Two academic evaluations from primary discipline teachers (STEM, Humanities, or Classical Languages) plus counselor missive.',
    footerNote: 'FACULTY ENDORSEMENT',
    iconType: 'quill',
  },
  {
    number: '04',
    stageName: 'STAGE 4',
    title: 'Portfolio or Alumni Interview',
    description:
      'Optional virtual dialogue with Aethelgard alumni or supplemental submission for Architecture, Studio Arts, and Music Composition.',
    footerNote: 'EVALUATIVE DIALOGUE',
    iconType: 'users',
  },
  {
    number: '05',
    stageName: 'STAGE 5',
    title: 'Aid Profile: CSS & FAFSA',
    description:
      'CSS Profile (School Code 3012) and FAFSA (002144). International applicants submit the Institutional Scholar Aid Form.',
    footerNote: 'ZERO LOAN PACKAGING',
    iconType: 'shield',
  },
  {
    number: '06',
    stageName: 'STAGE 6',
    title: 'Decision Release',
    description:
      'Access your comprehensive electronic dossier and personalized need-based financial fellowship award inside the portal.',
    footerNote: 'OFFICIAL NOTIFICATION',
    iconType: 'bell',
  },
];

export const ENDOWED_FELLOWSHIPS: EndowedFellowship[] = [
  {
    id: 'vance',
    name: 'Vance Presidential Scholars',
    icon: 'Landmark',
    description:
      'Full-tuition scholarship plus $10,000 summer research stipends for demonstrated civic innovators and humanities scholars.',
    adjudicationNote: 'DIRECT DEAN NOMINATION',
    awardAmount: 'Full Tuition + $10,000 Research Stipend',
    nominationProcess: 'Automatic consideration upon submission of the Aethelgard Monograph.',
  },
  {
    id: 'turing',
    name: 'Turing Tech Fellowship',
    icon: 'Cpu',
    description:
      'Four-year stipend supporting computational mathematics, robotics, and applied quantum science researchers.',
    adjudicationNote: 'APPLIED COMPUTING GRANT',
    awardAmount: 'Full Tuition + $8,500 Hardware Grant',
    nominationProcess: 'Awarded to top 1% applicants to the School of Engineering & Applied Science.',
  },
  {
    id: 'athena',
    name: 'Athena Arts Endowment',
    icon: 'Palette',
    description:
      'Dedicated residency award for fine arts, musical performance, and architectural studio disciplines with private atelier.',
    adjudicationNote: 'PORTFOLIO ADJUDICATION',
    awardAmount: 'Full Tuition + Dedicated Atelier Space',
    nominationProcess: 'Adjudicated by the Faculty of Fine Arts through SlideRoom portfolio submissions.',
  },
  {
    id: 'global-leaders',
    name: 'Global Leaders Grant',
    icon: 'Globe',
    description:
      'Guaranteed travel and tuition relief for international candidates representing developing or under-resourced democracies.',
    adjudicationNote: 'INTERNATIONAL SCHOLAR BOARD',
    awardAmount: 'Full Tuition + Roundtrip International Airfare',
    nominationProcess: 'Evaluated automatically via the International Scholar Aid Form (ISAF).',
  },
];

export const REGIONAL_DEANS: RegionalDean[] = [
  {
    id: 'sterling',
    name: 'Dr. Julian Sterling',
    title: 'SENIOR DEAN OF ADMISSIONS',
    territory: 'New England & Mid-Atlantic',
    upcomingVisit: 'Boston & New York (Nov 4-8)',
    email: 'sterling@aethelgard.edu',
    statesCovered: ['Massachusetts', 'New York', 'Connecticut', 'Rhode Island', 'Maine', 'New Jersey', 'Pennsylvania'],
  },
  {
    id: 'montgomery',
    name: 'Victoria Montgomery',
    title: 'ASSOCIATE DEAN FOR WESTERN STATES',
    territory: 'California, Pacific NW & Mountain',
    upcomingVisit: 'San Francisco & Seattle (Oct 28-31)',
    email: 'montgomery@aethelgard.edu',
    statesCovered: ['California', 'Washington', 'Oregon', 'Colorado', 'Utah', 'Nevada', 'Arizona', 'Idaho'],
  },
  {
    id: 'thorne',
    name: 'Prof. Alistair Thorne',
    title: 'DIRECTOR OF GLOBAL OUTREACH',
    territory: 'Europe, Asia-Pacific, Latin America',
    upcomingVisit: 'London, Geneva & Singapore (Nov 15-26)',
    email: 'thorne.intl@aethelgard.edu',
    statesCovered: ['United Kingdom', 'European Union', 'Singapore', 'Japan', 'South Korea', 'Brazil', 'Chile', 'India'],
  },
];

export const FAQ_ITEMS = [
  {
    question: 'How does Aethelgard conduct admissions interviews?',
    answer:
      'All evaluative interviews are conducted virtually or in local metropolitan centers by members of our global Alumni Admissions Council. Interviews are optional and evaluative; if an alumnus is unavailable in your geographic region, your application is reviewed with zero prejudice or disadvantage. Interviews typically last 45 minutes and focus on intellectual curiosity and scholarly passions rather than canned recitation.',
  },
  {
    question: "What is the university's policy on deferrals and gap years?",
    answer:
      'Aethelgard enthusiastically supports gap year pursuits that foster intellectual independence, national service, ethical engagement, or deep scientific apprenticeship. Admitted scholars may submit a formal deferral petition to their Regional Dean prior to June 1. Deferrals are granted for up to one full academic year and preserve all awarded financial fellowships.',
  },
  {
    question: 'Can a financial aid award be appealed if circumstances shift?',
    answer:
      'Yes. Our Office of Financial Aid maintains a perpetual Special Circumstances Appeals Board. If your family experiences changes in employment, extraordinary medical expenses, or changes in household dependencies, you may submit updated documentation. Over 92% of appealed dossiers receive supplemental aid within 10 business days.',
  },
  {
    question: 'Is residential housing guaranteed for all undergraduate years?',
    answer:
      'Unconditionally. 100% of undergraduate scholars are guaranteed four years of residential college housing in one of our six historic houses. All matriculating first-years are assigned to a house during matriculation ceremonies, complete with private dining halls, faculty masters in residence, intramural teams, and house libraries.',
  },
];

export const RESIDENTIAL_HOUSES: ResidentialHouse[] = [
  {
    id: 'alden',
    name: 'Alden Hall',
    charteredYear: 1891,
    capacity: 420,
    heraldicIcon: 'Landmark',
    architectureNote:
      'Anchored by the Great Oak Quadrangle. Famed for its chamber music evenings in the Woodbury Salon, annual Shakespeare Lawn play, and championship rowing eight.',
    distinguishingTradition:
      'The Candlelit Master’s Tea every Thursday with visiting Nobel laureates.',
    motto: 'Constantia et Fidelitas',
    color: '#0f2341',
  },
  {
    id: 'pembroke',
    name: 'Pembroke House',
    charteredYear: 1904,
    capacity: 390,
    heraldicIcon: 'BookOpen',
    architectureNote:
      'Home to the historic Pembroke Cloisters and the famous 24-hour subterranean printmaking press and rare illuminated manuscript reading rooms.',
    distinguishingTradition:
      'The Midnight Apple Cider Tasting in November by the Courtyard Fire Pit.',
    motto: 'Litterae Illumunant Viam',
    color: '#775a19',
  },
  {
    id: 'radcliffe',
    name: 'Radcliffe Quadrangle',
    charteredYear: 1912,
    capacity: 450,
    heraldicIcon: 'Scale',
    architectureNote:
      'Perched atop Beacon Hill vista. Houses the renowned Beatrice Webb Debating Parlor and the university’s active greenhouse and rooftop astronomy dome.',
    distinguishingTradition:
      'Spring Equinox Astronomy Gala with brass quartets on the terrace.',
    motto: 'Astra Inclinant Non Necessitant',
    color: '#14532d',
  },
  {
    id: 'sterling',
    name: 'Sterling Court',
    charteredYear: 1928,
    capacity: 410,
    heraldicIcon: 'Compass',
    architectureNote:
      'Defined by limestone gargoyles and an expansive ivy-covered central courtyard. Known for strong literary journal staff and intramural squash dominance.',
    distinguishingTradition:
      'The Court Poetics Review and All-Night Vinyl Listening Session.',
    motto: 'Animus In Fide',
    color: '#78350f',
  },
  {
    id: 'winthrop',
    name: 'Winthrop College',
    charteredYear: 1935,
    capacity: 480,
    heraldicIcon: 'Waves',
    architectureNote:
      'Fronting the scenic Charles riverbend with private dock access. Renowned for its community garden, darkroom photography suite, and rowing regatta tailgates.',
    distinguishingTradition:
      'The Riverbank Lantern Flotilla during late spring commencement week.',
    motto: 'Fluctuat Nec Mergitur',
    color: '#1e3a8a',
  },
  {
    id: 'anselm',
    name: 'St. Anselm Hall',
    charteredYear: 1888,
    capacity: 440,
    heraldicIcon: 'Sparkles',
    architectureNote:
      'The oldest foundation on campus, adjoining Cathedral Hall. Features hammerbeam wood timber vaulted ceilings, grandfather clock towers, and historic stone hearths.',
    distinguishingTradition:
      'The Annual Anselm Chess Tournament against the Faculty Senate.',
    motto: 'In Principio Erat Ratio',
    color: '#581c87',
  },
];

export const STUDENT_SOCIETIES: StudentSociety[] = [
  {
    id: 'debating',
    name: 'The Debating Union',
    subtitle: 'FOUNDED 1892 • PARLIAMENTARY',
    description:
      'Weekly chamber debates against Oxford, Yale, and Edinburgh in the historic wood-lined Russell Forum.',
    founded: 1892,
    category: 'Civic & Rhetorical',
  },
  {
    id: 'mun',
    name: 'Mock Trial & Model UN',
    subtitle: 'NATIONAL CHAMPION DELEGATION',
    description:
      'Hosting the annual 1,500-delegate Boston International Simulation and competing across four continents.',
    founded: 1931,
    category: 'International Relations',
  },
  {
    id: 'orchestra',
    name: 'University Symphony & Choir',
    subtitle: 'PERFORMING IN CATHEDRAL HALL',
    description:
      'Full-scale 80-piece orchestra, madrigal concerts, and 6 vibrant a cappella groups touring annually.',
    founded: 1905,
    category: 'Performing Arts',
  },
  {
    id: 'aerospace',
    name: 'Aerospace Collective',
    subtitle: '24/7 HIGH-BAY MAKERSPACE',
    description:
      'Designing CubeSats, liquid propellant rocketry, and autonomous swarm robotics funded by aerospace grants.',
    founded: 2011,
    category: 'Engineering & Maker',
  },
];

export const DEGREE_PROGRAMS: DegreeProgram[] = [
  {
    id: 'philosophy-ethics',
    title: 'Classical Philosophy & Applied Ethics',
    degreeType: 'Undergraduate',
    degreeCode: 'B.A.',
    college: 'COLLEGE OF ARTS & LETTERS',
    tagline: 'College of Arts & Letters',
    highlightKicker: 'Honors Track',
    description:
      'Rigorous dialectical training rooted in classical Socratic inquiry, phenomenological theory, and moral philosophy applied to modern artificial intelligence frameworks.',
    duration: '4 Years • 128 Credits',
    credits: '128 Credits',
    campusResidence: 'Boston Quadrangle',
    capstoneRequirement: 'Defended Senior Thesis',
    careerOutcomes: ['Constitutional Law', 'Bioethics Advisory', 'Academic Research'],
    facultyCount: 14,
    honorsTrack: true,
    researchFellowship: false,
    internationalTerm: false,
    location: 'Cambridge Main Campus',
    facultyLeader: 'Prof. Julian Sterling, D.Phil. (Oxon)',
    sampleCourses: [
      'PHIL 101: Socratic Dialectics & Platonic Epistemology',
      'PHIL 240: Kantian Deontology and Moral Modernity',
      'PHIL 380: Ethics of Algorithmic Alignment & Consciousness',
      'PHIL 495: Senior Defended Colloquium',
    ],
  },
  {
    id: 'quantum-math',
    title: 'Quantum Computing & Applied Mathematics',
    degreeType: 'Dual Degree',
    degreeCode: 'B.S. / M.S.',
    college: 'SCHOOL OF ENGINEERING & APPLIED SCIENCE',
    tagline: 'School of Engineering & Applied Science',
    highlightKicker: 'Accelerated 5-Year',
    description:
      'Integration of supercomputing architectures, quantum algorithmic complexity, and topological matter theory. Direct access to cryogenic qubit testbeds.',
    duration: '5 Years • 152 Credits',
    credits: '152 Credits',
    campusResidence: 'Cambridge Main Campus',
    capstoneRequirement: 'Aethelgard Qubit Foundry',
    careerOutcomes: ['Quantum Architect', 'Cryptography Lead', 'National Labs'],
    facultyCount: 22,
    honorsTrack: false,
    researchFellowship: true,
    internationalTerm: false,
    location: 'Cambridge Main Campus',
    facultyLeader: 'Prof. Julian Vance & Dr. Priya Balakrishnan',
    sampleCourses: [
      'AMATH 210: Linear Operator Theory in Hilbert Spaces',
      'QCOMP 320: Fault-Tolerant Quantum Error Correction',
      'PHYS 450: Superconducting Josephon Junction Circuits',
      'QCOMP 590: Thesis in Cryogenic Quantum Silicon',
    ],
  },
  {
    id: 'molecular-neuroscience',
    title: 'Molecular Neuroscience & Neural Pathology',
    degreeType: 'Doctoral',
    degreeCode: 'M.D. / Ph.D.',
    college: 'SCHOOL OF MEDICINE & PUBLIC HEALTH',
    tagline: 'School of Medicine & Public Health',
    highlightKicker: 'Full Endowment',
    description:
      'Dual clinical and neurobiological doctoral training focused on neurodegenerative interventions, synaptogenesis, and gene therapy clinical trials.',
    duration: '7–8 Years • 100% Fellowship',
    credits: 'Full Clinical Fellowship',
    campusResidence: 'Commonwealth Memorial Center',
    capstoneRequirement: 'Peer-Reviewed Publishing',
    careerOutcomes: ['Principal Investigator', 'Academic Surgeon', 'Biotech Founder'],
    facultyCount: 31,
    honorsTrack: false,
    researchFellowship: true,
    internationalTerm: false,
    location: 'Boston Quadrangle',
    facultyLeader: 'Dr. Marcus Sterling, M.D., Ph.D.',
    sampleCourses: [
      'NEUR 801: Synaptic Biophysics and Ion Channelopathy',
      'MED 910: Clinical Neuropathology and Biopsy Diagnostics',
      'GENE 850: Adeno-Associated Viral Vectors in the CNS',
      'DISSERT 990: Defended Doctoral Investigation',
    ],
  },
  {
    id: 'human-rights-law',
    title: 'International Human Rights & Trade Law',
    degreeType: 'Professional',
    degreeCode: 'LL.M.',
    college: 'FACULTY OF LAW & GLOBAL DIPLOMACY',
    tagline: 'Faculty of Law & Global Diplomacy',
    highlightKicker: 'Geneva Immersion',
    description:
      'Advanced jurisprudence examining multilateral treaties, international criminal arbitration, trade sanctions, and cross-border environmental governance.',
    duration: '1 Year Intensive • 32 Credits',
    credits: '32 Credits',
    campusResidence: 'Cambridge • Geneva Center',
    capstoneRequirement: 'UN Tribunal Moot Court',
    careerOutcomes: ['Diplomatic Counsel', 'NGO Director', 'Arbitration Partner'],
    facultyCount: 18,
    honorsTrack: false,
    researchFellowship: false,
    internationalTerm: true,
    location: 'Cambridge Main Campus',
    facultyLeader: 'Dean Charlotte von Weizsäcker, J.D.',
    sampleCourses: [
      'LAW 612: Customary International Law and State Immunity',
      'LAW 704: Geneva Center Fieldwork: Human Rights Council',
      'LAW 788: Cross-Border Sanctions & WTO Dispute Settlement',
      'LAW 800: International Tribunal Advocacy',
    ],
  },
  {
    id: 'architectural-heritage',
    title: 'Architectural Heritage & Urban Design',
    degreeType: 'Undergraduate',
    degreeCode: 'B.S.',
    college: 'SCHOOL OF ARCHITECTURE & URBANISM',
    tagline: 'School of Architecture & Urbanism',
    highlightKicker: 'Rome Term Included',
    description:
      'Studio-intensive investigation into historical conservation, structural masonry resilience, adaptive reuse, and high-density sustainable civic master planning.',
    duration: '4 Years • 136 Credits',
    credits: '136 Credits',
    campusResidence: 'Rome Palazzo Atelier',
    capstoneRequirement: 'NAAB Designated Path',
    careerOutcomes: ['Conservation Architect', 'Urban Planner', 'Historic Preservation'],
    facultyCount: 16,
    honorsTrack: false,
    researchFellowship: false,
    internationalTerm: true,
    location: 'Boston Quadrangle',
    facultyLeader: 'Prof. Matteo Cavalcanti, FAIA',
    sampleCourses: [
      'ARCH 201: Classical Proportion Systems & Vitruvian Geometry',
      'ARCH 340: Structural Timber & Gothic Vault Engineering',
      'ARCH 410: Rome Residency: Urban Stratigraphy Studio',
      'ARCH 490: Civic Center Adaptive Synthesis Studio',
    ],
  },
  {
    id: 'economics-policy',
    title: 'Economics & Quantitative Public Policy',
    degreeType: 'Doctoral',
    degreeCode: 'Ph.D.',
    college: 'DEPARTMENT OF ECONOMICS & POLICY',
    tagline: 'Department of Economics & Policy',
    highlightKicker: 'IMF / World Bank Grants',
    description:
      'Econometric modeling, central banking mechanics, international monetary equilibria, and machine learning methodologies for microeconomic policy design.',
    duration: '5 Years • Full Tuition + Stipend',
    credits: 'Doctoral Residency',
    campusResidence: 'Cambridge Main Campus',
    capstoneRequirement: 'Top 10 Global Economics Faculty',
    careerOutcomes: ['Central Bank Economist', 'Tenure-Track Faculty', 'Policy Think Tank'],
    facultyCount: 27,
    honorsTrack: false,
    researchFellowship: true,
    internationalTerm: true,
    location: 'Cambridge Main Campus',
    facultyLeader: 'Prof. Henrik Lindqvist, Ph.D.',
    sampleCourses: [
      'ECON 701: Advanced Dynamic Stochastic General Equilibrium',
      'ECON 732: Microeconometric Causal Inference & Quasi-Experiments',
      'ECON 820: Sovereign Debt Restructuring & Monetary Unions',
      'ECON 900: Ph.D. Dissertation Defense',
    ],
  },
];

export const RESEARCH_INSTITUTES: ResearchInstitute[] = [
  {
    number: '01',
    title: 'The Vance Institute for AI & Bio-Ethics',
    categoryTag: 'COGNITION & ALIGNMENT',
    description:
      'Interrogating neural computation, frontier alignment safeguards, neuro-symbolic reasoning, and the constitutional governance of synthetic autonomy.',
    metric: '24 PRINCIPAL PIS',
    director: 'Prof. Alistair Thorne, Ph.D.',
    keyInitiative: 'Constitutional Safety Protocols for Autonomous Agents',
  },
  {
    number: '02',
    title: 'Center for Climate Systems & Clean Energy',
    categoryTag: 'PLANETARY TRANSITION',
    description:
      'Pioneering solid-state electrolyte battery architectures, oceanic electrochemical carbon sequestration, and micro-grid resiliency models.',
    metric: '31 ACTIVE GRANTS',
    director: 'Dr. Evelyn Rostova, Ph.D.',
    keyInitiative: 'Deep-Ocean Dissolved CO2 Mineralization Project',
  },
  {
    number: '03',
    title: 'Global Governance & Constitutional Law',
    categoryTag: 'JURISPRUDENCE & TREATY',
    description:
      'Empirical constitutional analysis, multilateral sovereignty frameworks, and algorithmic legal arbitration cited by high judicial courts worldwide.',
    metric: '14 SUPREME AMICI',
    director: 'Dean Charlotte von Weizsäcker',
    keyInitiative: 'Treaty Architectures for Sub-Orbital & High-Seas Resources',
  },
  {
    number: '04',
    title: 'Genomic Medicine & Precision Therapeutics',
    categoryTag: 'TRANSLATIONAL HEALTH',
    description:
      'CRISPR prime editing, base-editing delivery via synthetic mRNA nanoparticles, and targeted immuno-oncology therapies moving directly to Phase-I trials.',
    metric: '8 CLINICAL PIPELINES',
    director: 'Dr. Marcus Sterling, M.D.',
    keyInitiative: 'Synthetic Epitope Engineering for Autoimmune Arrest',
  },
];

export const RESEARCH_PUBLICATIONS: ResearchPublication[] = [
  {
    id: 'pub-superconductivity',
    journal: 'Nature',
    volumeIssue: 'Vol 628',
    publishedDate: 'March 18, 2025',
    doi: '10.1038/s41586-025-0814-x',
    title:
      'Room-Temperature Superconductivity in Nitrogen-Doped Lanthanum Hydrides Under Metastable Pressure Windows',
    abstract:
      'We present experimental proof and crystallographic confirmation of zero-resistance conduction at 287.4 Kelvin. Synthesized within the Aethelgard High-Pressure Nanofabrication Core, these findings resolve century-old theoretical debates regarding phononic pairing in high-density hydride lattices.',
    leadAuthor: 'Prof. Elena Rostova, Ph.D. (Dept. of Applied Physics)',
    citationMetrics: '84 Citations in 60 Days',
    pdfSize: '2.4MB',
    bibtex: `@article{rostova2025superconductivity,
  title={Room-Temperature Superconductivity in Nitrogen-Doped Lanthanum Hydrides Under Metastable Pressure Windows},
  author={Rostova, Elena and Vance, Julian and Chen, Wei and Thorne, Alistair},
  journal={Nature},
  volume={628},
  number={7992},
  pages={312--324},
  year={2025},
  publisher={Nature Publishing Group},
  doi={10.1038/s41586-025-0814-x}
}`,
  },
  {
    id: 'pub-quantum',
    journal: 'Science',
    volumeIssue: 'Issue 6692',
    publishedDate: 'February 11, 2025',
    doi: '10.1126/science.adj9012',
    title:
      'Scalable Quantum Decoupling via In-Memory Photonic Mesh Arrays',
    abstract:
      'Coherence preservation across 10,000 spatial nodes without cryogenic dilution cooling: results from the Vance AI & Quantum Architecture Consortium demonstrating linear fault-tolerant scaling for distributed cryptography.',
    leadAuthor: 'Prof. Julian Vance & Dr. Priya Balakrishnan (SEAS)',
    citationMetrics: 'Research Grant #NSF-QIS-2023-88',
    pdfSize: '4.1MB',
    bibtex: `@article{vance2025quantum,
  title={Scalable Quantum Decoupling via In-Memory Photonic Mesh Arrays},
  author={Vance, Julian and Balakrishnan, Priya and Sterling, Julian and Wu, Kevin},
  journal={Science},
  volume={383},
  number={6692},
  pages={640--648},
  year={2025},
  publisher={American Association for the Advancement of Science},
  doi={10.1126/science.adj9012}
}`,
  },
  {
    id: 'pub-immunology',
    journal: 'The Lancet',
    volumeIssue: 'Lancet Oncology',
    publishedDate: 'January 29, 2025',
    doi: '10.1016/S1470-2045(25)00934-7',
    title:
      'Autologous Engineered Regulatory T-Cell Infusions Induce Complete Remission in Refractory Autoimmune Encephalitis',
    abstract:
      'Phase-II multi-site randomized clinical outcome study assessing synthetic epitope presentation. 94% durable symptom resolution tracked across 18 months in collaboration with Aethelgard University Medical Center.',
    leadAuthor: 'Dr. Marcus Sterling, M.D., Ph.D. (School of Medicine)',
    citationMetrics: 'NIH Breakthrough Therapy Designation',
    pdfSize: '1.8MB',
    bibtex: `@article{sterling2025immunotherapy,
  title={Autologous Engineered Regulatory T-Cell Infusions Induce Complete Remission in Refractory Autoimmune Encephalitis},
  author={Sterling, Marcus and Hastings, Eleanor and Montgomery, Victoria and Al-Mansoor, Tariq},
  journal={The Lancet Oncology},
  volume={26},
  number={2},
  pages={188--202},
  year={2025},
  publisher={Elsevier},
  doi={10.1016/S1470-2045(25)00934-7}
}`,
  },
  {
    id: 'pub-law',
    journal: 'Law Review',
    volumeIssue: 'Vol. 138',
    publishedDate: 'December 14, 2024',
    doi: '10.2139/ssrn.4629103',
    title:
      'Algorithmic Governance and the Non-Delegation Doctrine in Transnational Administrative Law',
    abstract:
      'A fundamental re-examination of sovereign prerogative when automated inference systems make binding evidentiary findings in cross-border trade disputes, establishing an enforceable tripartite standard for constitutional verification.',
    leadAuthor: 'Dean Charlotte von Weizsäcker & Justice Elena S. Vance',
    citationMetrics: 'Cited in 4 Supreme Amici Briefs',
    pdfSize: '3.2MB',
    bibtex: `@article{weizsaecker2024algorithmic,
  title={Algorithmic Governance and the Non-Delegation Doctrine in Transnational Administrative Law},
  author={von Weizs{\"a}cker, Charlotte and Vance, Elena S.},
  journal={Aethelgard Law Review},
  volume={138},
  number={4},
  pages={815--890},
  year={2024}
}`,
  },
];

export const INSTRUMENTATION_CORES: InstrumentationCore[] = [
  {
    id: 'nanofab',
    name: 'Nanofabrication Core',
    subhead: 'CLASS 100 / ISO 5 CLEANROOM',
    description:
      'Direct-write electron beam lithography down to 3nm resolution, magnetron sputtering, and atomic layer deposition suites.',
    metric: '12,000 SQ FT FACILITY',
    icon: 'Cpu',
  },
  {
    id: 'cryo-em',
    name: 'Cryo-EM Microscopy Suite',
    subhead: '300KV FIELD EMISSION GUN',
    description:
      'Two Titan Krios G4 microscopes with automated vitrification robot arrays for near-atomic structural biology resolution.',
    metric: '1.8 ÅNGSTRÖM PRECISION',
    icon: 'Microscope',
  },
  {
    id: 'supercluster',
    name: 'Athena Supercluster',
    subhead: 'HIGH-PERFORMANCE COMPUTING',
    description:
      '50,000 GPU/CPU cores connected via 800 Gbps low-latency interconnects, dedicated to climate modeling and neural training.',
    metric: '28.4 PETAFLOPS RPEAK',
    icon: 'Server',
  },
  {
    id: 'archives',
    name: 'Archival Preservation Vault',
    subhead: 'HUMANITIES & SPECIAL COLLECTIONS',
    description:
      'Inert gas fire-suppressed vault housing 450,000 rare volumes, incunabula, and centuries of constitutional draft manuscripts.',
    metric: 'EST. 1894 COLLECTIONS',
    icon: 'Archive',
  },
];

export const STARTUP_SPINOUTS: StartupSpinout[] = [
  {
    id: 'aethel-photonics',
    name: 'AethelPhotonics Inc.',
    fundingRound: 'Series B',
    description:
      'Optical silicon accelerators for hyperscale artificial intelligence workloads. Spun out of SEAS in 2022.',
    capitalRaised: '$64M Series B led by Cambridge DeepTech Partners',
    category: 'Photonic Computing',
  },
  {
    id: 'helios-biotherapeutics',
    name: 'Helios BioTherapeutics',
    fundingRound: 'NASDAQ: HLBT',
    description:
      'Targeted lipid nanoparticle formulations for neurodegenerative peptide breakdown. Commercialized under exclusive Aethelgard worldwide license.',
    capitalRaised: '$180M Market Capitalization',
    category: 'Precision Biotechnology',
  },
  {
    id: 'pelagic-carbon',
    name: 'Pelagic Carbon Solutions',
    fundingRound: 'Seed',
    description:
      'Continuous deep-sea geochemical alkalinity enhancement systems reversing coastal acidification. Winner: XPRIZE Carbon Removal Phase-I.',
    capitalRaised: '$12M Seed syndicate',
    category: 'Planetary Geo-Engineering',
  },
];

export const FUNDING_OPPORTUNITIES: FundingOpportunity[] = [
  {
    id: 'nih-pioneer',
    agency: 'NIH Pioneer Award (DP1)',
    program: 'Transformative, high-risk biological mechanistic approaches',
    description: 'Direct institutional support for unconventional high-impact biological paradigms.',
    fundingTier: '$3,500,000 Direct Costs (5 Years)',
    deadline: 'May 14, 2025',
    status: 'Open for PI Review',
    urgencyLevel: 'normal',
  },
  {
    id: 'nsf-qlci',
    agency: 'NSF Quantum Leap Challenge Institutes (QLCI)',
    program: 'Multi-institutional hub for distributed fault-tolerant hardware',
    description: 'Major center grant supporting 5-university quantum computing consortia.',
    fundingTier: '$25,000,000 Major Center Grant',
    deadline: 'June 02, 2025',
    status: 'Consortium Formed',
    urgencyLevel: 'active',
  },
  {
    id: 'endowed-frontier',
    agency: 'Aethelgard Endowed Frontier Fund',
    program: 'Internal seed grants for exploratory junior faculty labs',
    description: 'Unrestricted seed allocation awarded biannually by the Board of Overseers.',
    fundingTier: '$150,000 Seed Capital',
    deadline: 'April 30, 2025',
    status: 'Urgent: 14 Days Left',
    urgencyLevel: 'urgent',
  },
];
