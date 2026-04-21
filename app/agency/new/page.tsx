"use client";

import { useState, useRef } from "react";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import { 
  Building2,
  Users2,
  Briefcase,
  ArrowUp,
  Award,
  Plus,
  Trash2,
  Edit
} from "lucide-react";

export default function AddNewAgencyPage() {
  const [agencyName, setAgencyName] = useState("");
  const [aboutAgency, setAboutAgency] = useState("");
  const [website, setWebsite] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [logo, setLogo] = useState<File | null>(null);

  // Timezones State
  const [selectedTimezones, setSelectedTimezones] = useState<string[]>([]);
  const [isTimezoneOpen, setIsTimezoneOpen] = useState(false);
  const [timezoneSearch, setTimezoneSearch] = useState("");

  // Languages State
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>(["English"]);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [languageSearch, setLanguageSearch] = useState("");

  // Client Size State
  const [selectedClientSizes, setSelectedClientSizes] = useState<string[]>([]);
  const [isClientSizeOpen, setIsClientSizeOpen] = useState(false);
  const [clientSizeSearch, setClientSizeSearch] = useState("");

  // Countries of Service State
  const [selectedCountriesOfService, setSelectedCountriesOfService] = useState<string[]>([]);
  const [isCountriesOfServiceOpen, setIsCountriesOfServiceOpen] = useState(false);
  const [countriesOfServiceSearch, setCountriesOfServiceSearch] = useState("");

  // Awards State
  const [awards, setAwards] = useState<{id: string, title: string, authority: string}[]>([]);
  const [isAddingAward, setIsAddingAward] = useState(false);
  const [editingAwardId, setEditingAwardId] = useState<string | null>(null);
  const [awardTitle, setAwardTitle] = useState("");
  const [awardAuthority, setAwardAuthority] = useState("");

  // Key Clients State
  const [clients, setClients] = useState<{id: string, name: string, website: string, industry: string}[]>([]);
  const [isAddingClient, setIsAddingClient] = useState(false);
  const [editingClientId, setEditingClientId] = useState<string | null>(null);
  const [clientName, setClientName] = useState("");
  const [clientWebsite, setClientWebsite] = useState("");
  const [clientIndustry, setClientIndustry] = useState("");

  // Key Decision Makers State
  const [leaders, setLeaders] = useState<{id: string, name: string, designation: string, email: string, contact: string, linkedin: string}[]>([]);
  const [isAddingLeader, setIsAddingLeader] = useState(false);
  const [editingLeaderId, setEditingLeaderId] = useState<string | null>(null);
  const [leaderName, setLeaderName] = useState("");
  const [leaderDesignation, setLeaderDesignation] = useState("");
  const [leaderEmail, setLeaderEmail] = useState("");
  const [leaderContact, setLeaderContact] = useState("");
  const [leaderLinkedin, setLeaderLinkedin] = useState("");

  // Agency Portfolio State
  const [projects, setProjects] = useState<{id: string, name: string, industry: string, problem: string, solution: string, roles: string[]}[]>([]);
  const [isAddingProject, setIsAddingProject] = useState(false);
  const [editingProjectId, setEditingProjectId] = useState<string | null>(null);
  const [projectName, setProjectName] = useState("");
  const [projectIndustry, setProjectIndustry] = useState("");
  const [projectProblem, setProjectProblem] = useState("");
  const [projectSolution, setProjectSolution] = useState("");
  const [selectedProjectRoles, setSelectedProjectRoles] = useState<string[]>([]);
  const [isProjectRolesOpen, setIsProjectRolesOpen] = useState(false);
  const [projectRolesSearch, setProjectRolesSearch] = useState("");

  const TIMEZONES = [
    "(GMT-12:00) Etc/GMT+12",
    "(GMT-11:00) Etc/GMT+11",
    "(GMT-11:00) Pacific/Midway",
    "(GMT-11:00) Pacific/Niue",
    "(GMT-11:00) Pacific/Pago_Pago",
    "(GMT-11:00) Pacific/Samoa",
    "(GMT-10:00) America/Adak",
    "(GMT-10:00) Pacific/Honolulu",
    "(GMT-09:00) America/Anchorage",
    "(GMT-08:00) America/Los_Angeles",
    "(GMT-07:00) America/Denver",
    "(GMT-06:00) America/Chicago",
    "(GMT-05:00) America/New_York",
    "(GMT-04:00) America/Halifax",
    "(GMT-03:00) America/Sao_Paulo",
    "(GMT+00:00) Europe/London",
    "(GMT+00:00) UTC",
    "(GMT+01:00) Europe/Paris",
    "(GMT+01:00) Europe/Berlin",
    "(GMT+02:00) Africa/Cairo",
    "(GMT+02:00) Europe/Athens",
    "(GMT+03:00) Europe/Moscow",
    "(GMT+03:00) Asia/Riyadh",
    "(GMT+04:00) Asia/Dubai",
    "(GMT+05:00) Asia/Karachi",
    "(GMT+05:30) Asia/Kolkata",
    "(GMT+07:00) Asia/Bangkok",
    "(GMT+08:00) Asia/Singapore",
    "(GMT+08:00) Asia/Hong_Kong",
    "(GMT+09:00) Asia/Tokyo",
    "(GMT+09:00) Asia/Seoul",
    "(GMT+10:00) Australia/Sydney",
    "(GMT+11:00) Pacific/Guadalcanal",
    "(GMT+12:00) Pacific/Auckland"
  ];

  const LANGUAGES = [
    "Arabic",
    "Bengali",
    "Chinese (Simplified)",
    "Chinese (Traditional)",
    "Dutch",
    "Ekajuk",
    "Elamite",
    "English",
    "English Middle (1100-1500)",
    "English Old (Ca.450-1100)",
    "Erzya",
    "French",
    "German",
    "Greek",
    "Hebrew",
    "Hindi",
    "Italian",
    "Japanese",
    "Korean",
    "Portuguese",
    "Russian",
    "Spanish",
    "Thai",
    "Turkish",
    "Urdu",
    "Vietnamese"
  ];

  const CLIENT_SIZES = [
    "Enterprise",
    "Mid-Market",
    "Small Business"
  ];

  const COUNTRIES = [
    "Afghanistan", "Åland Islands", "Albania", "Algeria", "American Samoa", "Andorra", "Angola", "Anguilla", "Antarctica", "Antigua and Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei Darussalam", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde", "Cayman Islands", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo", "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia", "Fiji", "Finland", "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Korea", "Kuwait", "Kyrgyzstan", "Lao People's Democratic Republic", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macao", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Norway", "Oman", "Pakistan", "Palau", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Puerto Rico", "Qatar", "Romania", "Russian Federation", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Samoa", "San Marino", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "Spain", "Sri Lanka", "Sudan", "Suriname", "Swaziland", "Sweden", "Switzerland", "Syrian Arab Republic", "Taiwan", "Tajikistan", "Thailand", "Timor-Leste", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay", "Uzbekistan", "Vanuatu", "Venezuela", "Viet Nam", "Yemen", "Zambia", "Zimbabwe"
  ];

  const CURRENCIES = ["AED", "AFN", "ALL", "AMD", "ANG", "AOA", "ARS", "AUD", "AWG", "AZN", "BAM", "BBD", "BDT", "BGN", "BHD", "BIF", "BMD", "BND", "BOB", "BRL", "BSD", "BTN", "BWP", "BYN", "BZD", "CAD", "CDF", "CHF", "CLP", "CNY", "COP", "CRC", "CUC", "CUP", "CVE", "CZK", "DJF", "DKK", "DOP", "DZD", "EGP", "ERN", "ETB", "EUR", "FJD", "FKP", "GBP", "GEL", "GGP", "GHS", "GIP", "GMD", "GNF", "GTQ", "GYD", "HKD", "HNL", "HRK", "HTG", "HUF", "IDR", "ILS", "IMP", "INR", "IQD", "IRR", "ISK", "JEP", "JMD", "JOD", "JPY", "KES", "KGS", "KHR", "KMF", "KPW", "KRW", "KWD", "KYD", "KZT", "LAK", "LBP", "LKR", "LRD", "LSL", "LYD", "MAD", "MDL", "MGA", "MKD", "MMK", "MNT", "MOP", "MRU", "MUR", "MVR", "MWK", "MXN", "MYR", "MZN", "NAD", "NGN", "NIO", "NOK", "NPR", "NZD", "OMR", "PAB", "PEN", "PGK", "PHP", "PKR", "PLN", "PYG", "QAR", "RON", "RSD", "RUB", "RWF", "SAR", "SBD", "SCR", "SDG", "SEK", "SGD", "SHP", "SLL", "SOS", "SRD", "SSP", "STN", "SVC", "SYP", "SZL", "THB", "TJS", "TMT", "TND", "TOP", "TRY", "TTD", "TWD", "TZS", "UAH", "UGX", "USD", "UYU", "UZS", "VEF", "VND", "VUV", "WST", "XAF", "XCD", "XDR", "XOF", "XPF", "YER", "ZAR", "ZMW", "ZWL"];

  const INDUSTRIES = [
    "Accounting", "Accounting & Finance", "Advertising & Marketing", "Aerospace & Defence", "Agriculture & Farming", "Airlines/Aviation", "Alternative Dispute Resolution", "Alternative Medicine", "Animation", "Apparel & Fashion", "Architecture & Design", "Architecture & Planning", "Arts and Crafts", "Automotive", "Aviation & Aerospace", "Banking", "Banking & Financial Services", "Biotechnology", "Broadcast Media", "Building Materials", "Business Supplies and Equipment", "Capital Markets", "Chemical", "Civic & Social Organization", "Civil Engineering", "Commercial Real Estate", "Computer & Network Security", "Computer Games", "Computer Hardware", "Computer Networking", "Computer Software", "Construction", "Consumer Electronics", "Consumer Goods", "Consumer Services", "Cosmetics", "Dairy", "Defense & Space", "Design", "E-Learning", "Education Management", "Electrical/Electronic Manufacturing", "Entertainment", "Environmental Services", "Events Services", "Executive Office", "Facilities Services", "Farming", "Financial Services", "Fine Art", "Fishery", "Food & Beverages", "Food Production", "Fund-Raising", "Furniture", "Gambling & Casinos", "Glass, Ceramics & Concrete", "Government Administration", "Government Relations", "Graphic Design", "Health, Wellness and Fitness", "Higher Education", "Hospital & Health Care", "Hospitality", "Human Resources", "Import and Export", "Individual & Family Services", "Industrial Automation", "Information Services", "Information Technology and Services", "Insurance", "International Affairs", "International Trade and Development", "Internet", "Investment Banking", "Investment Management", "Judiciary", "Law Enforcement", "Law Practice", "Legal Services", "Legislative Office", "Leisure, Travel & Tourism", "Libraries", "Logistics and Supply Chain", "Luxury Goods & Jewelry", "Machinery", "Management Consulting", "Maritime", "Market Research", "Marketing and Advertising", "Mechanical or Industrial Engineering", "Media Production", "Medical Devices", "Medical Practice", "Mental Health Care", "Military", "Mining & Metals", "Motion Pictures and Film", "Museums and Institutions", "Music", "Nanotechnology", "Newspapers", "Non-Profit Organization Management", "Oil & Energy", "Online Media", "Outsourcing/Offshoring", "Package/Freight Delivery", "Packaging and Containers", "Paper & Forest Products", "Performing Arts", "Pharmaceuticals", "Philanthropy", "Photography", "Plastics", "Political Organization", "Primary/Secondary Education", "Printing", "Professional Training & Coaching", "Program Development", "Public Policy", "Public Relations and Communications", "Public Safety", "Publishing", "Railroad Manufacture", "Ranching", "Real Estate", "Recreational Facilities and Services", "Religious Institutions", "Renewables & Environment", "Research", "Restaurants", "Retail", "Security and Investigations", "Semiconductors", "Shipbuilding", "Sporting Goods", "Sports", "Staffing and Recruiting", "Supermarkets", "Telecommunications", "Textiles", "Think Tanks", "Tobacco", "Translation and Localization", "Transportation/Trucking/Railroad", "Utilities", "Venture Capital & Private Equity", "Veterinary", "Warehousing", "Wholesale", "Wine and Spirits",    "Wireless Communications",
    "Writing & Editing"
  ];

  const ROLES = [
    ".net developer",
    "3d artist",
    "3d modeler & texture artist",
    "3d network associate project manager",
    "a & r / label manager",
    "a&p executive/merchandiser",
    "abinitio developer",
    "academic administrator",
    "academic librarian",
    "account assistant",
    "account director",
    "account executive",
    "account manager",
    "accountant",
    "accounts payable clerk",
    "accounts receivable clerk",
    "actuary",
    "admin assistant",
    "administrative officer",
    "advertising copywriter",
    "advertising manager",
    "aerospace engineer",
    "agency manager",
    "agricultural consultant",
    "agricultural engineer",
    "air traffic controller",
    "aircraft pilot",
    "ambulance technician",
    "amenity horticulturist",
    "analyst",
    "analytical chemist",
    "android developer",
    "animal physiotherapist",
    "animator",
    "applications developer",
    "arable farmer",
    "arbitrator",
    "archaeologist",
    "architect",
    "architectural technologist",
    "archivist",
    "armed forces officer",
    "art gallery curator",
    "art therapist",
    "artificial intelligence engineer",
    "artist",
    "arts administrator",
    "asbestos surveyor",
    "assistant accountant",
    "assistant chef",
    "assistant engineer",
    "assistant manager",
    "assistant teacher",
    "associate dentist",
    "associate professor",
    "assurance manager",
    "astronomer",
    "audio visual technician",
    "audit associate",
    "audit manager",
    "automation engineer",
    "automotive engineer",
    "aviation pilot",
    "back-end developer",
    "bakery assistant",
    "banking advisor",
    "barista",
    "barrister",
    "beauty therapist",
    "beekeeping technician",
    "bibliographer",
    "bilingual secretary",
    "biochemist",
    "bioinformatician",
    "biological scientist",
    "biologist",
    "biomedical engineer",
    "biomedical scientist",
    "biotechnologist",
    "blockchain developer",
    "bookkeeper",
    "brand ambassador",
    "brand manager",
    "broadcast engineer",
    "broadcast journalist",
    "broadcast presenter",
    "building surveyor",
    "business analyst",
    "business development manager",
    "business manager",
    "buyer",
    "c# developer",
    "c++ developer",
    "cabinet maker",
    "cad technician",
    "call center agent",
    "campaign manager",
    "career advisor",
    "caregiver",
    "carpenter",
    "cartographer",
    "case worker",
    "cashier",
    "catering manager",
    "ceramic engineer",
    "certified public accountant",
    "chartered accountant",
    "chef",
    "chemical engineer",
    "chemist",
    "chief executive officer",
    "chief financial officer",
    "chief operating officer",
    "chief technology officer",
    "chiropodist",
    "chiropractor",
    "civil engineer",
    "civil servant",
    "claims adjuster",
    "cleaner",
    "clerical assistant",
    "clinical biochemist",
    "clinical psychologist",
    "clinical scientist",
    "cloud architect",
    "cloud engineer",
    "coastguard",
    "commercial manager",
    "communications officer",
    "community worker",
    "company secretary",
    "compensation & benefits manager",
    "compliance officer",
    "computer programmer",
    "computer scientist",
    "conference organizer",
    "conservation officer",
    "construction manager",
    "content creator",
    "content strategist",
    "contracts manager",
    "control engineer",
    "cook",
    "copywriter",
    "corporate treasurer",
    "counselor",
    "country manager",
    "courier",
    "court reporter",
    "creative director",
    "credit analyst",
    "credit controller",
    "criminal investigator",
    "customer service manager",
    "customer service representative",
    "cyber security analyst",
    "cyber security engineer",
    "data analyst",
    "data architect",
    "data engineer",
    "data scientist",
    "database administrator",
    "debt collector",
    "delivery driver",
    "dental hygienist",
    "dental technician",
    "dentist",
    "design engineer",
    "designer",
    "devops engineer",
    "dietitian",
    "digital marketer",
    "diplomat",
    "director",
    "distribution manager",
    "doctor",
    "draughtsperson",
    "driver",
    "early years teacher",
    "economist",
    "editor",
    "education consultant",
    "electrical engineer",
    "electrician",
    "electronics engineer",
    "elementary school teacher",
    "emergency medical technician",
    "employment consultant",
    "energy manager",
    "engineer",
    "english teacher",
    "environmental consultant",
    "environmental engineer",
    "environmental health officer",
    "epidemiologist",
    "equality & diversity officer",
    "estate agent",
    "event coordinator",
    "event manager",
    "event planner",
    "executive assistant",
    "executive chef",
    "executive director",
    "facilities manager",
    "family support worker",
    "fashion designer",
    "fashion stylist",
    "film director",
    "film editor",
    "film producer",
    "finance director",
    "finance manager",
    "financial advisor",
    "financial analyst",
    "financial controller",
    "financial planner",
    "firefighter",
    "fitness instructor",
    "flight attendant",
    "florist",
    "food scientist",
    "food technologist",
    "foreman",
    "forensic scientist",
    "forest officer",
    "front-end developer",
    "full-stack developer",
    "fundraiser",
    "game developer",
    "game designer",
    "general manager",
    "general practitioner",
    "geneticist",
    "geochemist",
    "geologist",
    "geophysicist",
    "graphic designer",
    "hairstylist",
    "head chef",
    "health & safety officer",
    "health care assistant",
    "health service manager",
    "health visitor",
    "history teacher",
    "homeopath",
    "hospital doctor",
    "hotel manager",
    "hotel receptionist",
    "human resources assistant",
    "human resources director",
    "human resources manager",
    "human resources officer",
    "hydrologist",
    "illustrator",
    "immigration officer",
    "industrial designer",
    "information architect",
    "information officer",
    "insurance broker",
    "interior designer",
    "interpreter",
    "investment analyst",
    "investment banker",
    "it consultant",
    "it manager",
    "it support technician",
    "journalist",
    "judge",
    "junior developer",
    "laboratory technician",
    "landscape architect",
    "lawyer",
    "lecturer",
    "legal secretary",
    "librarian",
    "lifeguard",
    "lighting technician",
    "linguist",
    "litigation executive",
    "logistics manager",
    "machine learning engineer",
    "maintenance engineer",
    "makeup artist",
    "management consultant",
    "manager",
    "manufacturing engineer",
    "marine biologist",
    "marine engineer",
    "market researcher",
    "marketing assistant",
    "marketing director",
    "marketing executive",
    "marketing manager",
    "marketing officer",
    "massage therapist",
    "materials engineer",
    "mathematics teacher",
    "mechanical engineer",
    "media buyer",
    "media planner",
    "medical laboratory assistant",
    "medical receptionist",
    "medical secretary",
    "mentor",
    "merchandiser",
    "metallurgist",
    "meteorologist",
    "microbiologist",
    "midwife",
    "military officer",
    "mining engineer",
    "mobile app developer",
    "model",
    "mortgage advisor",
    "museum curator",
    "music producer",
    "music therapist",
    "musician",
    "nanny",
    "network administrator",
    "network engineer",
    "notary public",
    "nurse",
    "nursery nurse",
    "nutritionist",
    "occupational psychologist",
    "occupational therapist",
    "oceanographer",
    "office administrator",
    "office manager",
    "operations director",
    "operations manager",
    "ophthalmic optician",
    "optometrist",
    "orthodontist",
    "osteopath",
    "outdoor education officer",
    "paramedic",
    "park ranger",
    "paralegal",
    "patent attorney",
    "pathologist",
    "payroll clerk",
    "pensions administrator",
    "personal assistant",
    "personal trainer",
    "personnel manager",
    "pharmacist",
    "pharmacologist",
    "philosophy teacher",
    "photographer",
    "physicist",
    "physiotherapist",
    "pilot",
    "planner",
    "plumber",
    "podiatrist",
    "police officer",
    "political assistant",
    "politician",
    "postman",
    "primary school teacher",
    "prison officer",
    "private investigator",
    "probation officer",
    "process engineer",
    "product designer",
    "product manager",
    "production assistant",
    "production director",
    "production manager",
    "professor",
    "project assistant",
    "project coordinator",
    "project director",
    "project manager",
    "proofreader",
    "psychiatrist",
    "psychologist",
    "psychotherapist",
    "public relations officer",
    "publicity officer",
    "publishing assistant",
    "purchasing manager",
    "quality assurance engineer",
    "quality manager",
    "quantity surveyor",
    "quarry manager",
    "react developer",
    "receptionist",
    "recruitment consultant",
    "recruitment manager",
    "refugee worker",
    "registrar",
    "rehabilitation worker",
    "reliability engineer",
    "research assistant",
    "research scientist",
    "restaurant manager",
    "retail manager",
    "risk manager",
    "sales assistant",
    "sales director",
    "sales executive",
    "sales manager",
    "sales representative",
    "science teacher",
    "scientist",
    "sculptor",
    "secondary school teacher",
    "secretary",
    "security guard",
    "senior developer",
    "service manager",
    "social researcher",
    "social worker",
    "software architect",
    "software developer",
    "software engineer",
    "solicitor",
    "sonographer",
    "sound technician",
    "special educational needs teacher",
    "speech therapist",
    "sports coach",
    "sports therapist",
    "staff nurse",
    "statistician",
    "structural engineer",
    "student advisor",
    "surgeon",
    "surveyor",
    "systems analyst",
    "systems developer",
    "tax advisor",
    "tax consultant",
    "teacher",
    "teaching assistant",
    "technical architect",
    "technical author",
    "technical director",
    "technical sales engineer",
    "technical support engineer",
    "technician",
    "telecommunications engineer",
    "television producer",
    "theatre director",
    "theatre manager",
    "tour manager",
    "tourism officer",
    "town planner",
    "toxicologist",
    "trader",
    "traffic planner",
    "training manager",
    "translator",
    "transport planner",
    "travel agent",
    "treasurer",
    "university professor",
    "urban designer",
    "ux designer",
    "valuer",
    "veterinary nurse",
    "veterinary surgeon",
    "video editor",
    "video producer",
    "visual merchandiser",
    "vocational consultant",
    "warden",
    "warehouse manager",
    "waste management officer",
    "water engineer",
    "web designer",
    "web developer",
    "website manager",
    "wedding planner",
    "welfare officer",
    "writer",
    "youth worker",
    "zoologist"
  ];

  const SERVICES = [
    "Background Verification / Screening", "Blue-Collar Recruitment", "Bulk Hiring / Mass Recruitment", "Campus Recruitment", "Candidate Sourcing", "Compensation Benchmarking", "Competency Evaluation", "Contingent Search", "Contract Staffing", "Contractor Management", "CV/Resume Screening", "Diversity Recruitment Services", "Employer Branding Services", "Employer of Record (EOR)", "Executive Search", "Gig / On-Demand Workforce", "Headhunting", "HR Consulting", "Internal Recruitment Audit", "International Recruitment", "IT Recruitment", "Leadership Development", "Market Intelligence", "Onboarding Services", "Outplacement Services", "Payroll Outsourcing", "Permanent Recruitment", "Psychometric Testing", "Recruitment Process Outsourcing (RPO)", "Retained Search", "Talent Mapping", "Talent Management", "Technical Assessment", "Training and Development", "Vendor Management Systems (VMS)", "Workforce Planning"
  ];

  const toggleSelection = (list: string[], setList: (val: string[]) => void, item: string) => {
    if (list.includes(item)) {
      setList(list.filter(i => i !== item));
    } else {
      setList([...list, item]);
    }
  };

  const handleSaveAward = () => {
    if (!awardTitle || !awardAuthority) return;
    
    if (editingAwardId) {
      setAwards(awards.map(a => a.id === editingAwardId ? { ...a, title: awardTitle, authority: awardAuthority } : a));
    } else {
      setAwards([...awards, { id: crypto.randomUUID(), title: awardTitle, authority: awardAuthority }]);
    }
    resetAwardForm();
  };

  const resetAwardForm = () => {
    setIsAddingAward(false);
    setEditingAwardId(null);
    setAwardTitle("");
    setAwardAuthority("");
  };

  const handleEditAward = (award: {id: string, title: string, authority: string}) => {
    setEditingAwardId(award.id);
    setAwardTitle(award.title);
    setAwardAuthority(award.authority);
    setIsAddingAward(true);
  };

  const handleDeleteAward = (id: string) => {
    setAwards(awards.filter(a => a.id !== id));
  };

  const handleSaveClient = () => {
    if (!clientName || !clientIndustry) return;
    
    if (editingClientId) {
      setClients(clients.map(c => c.id === editingClientId ? { ...c, name: clientName, website: clientWebsite, industry: clientIndustry } : c));
    } else {
      setClients([...clients, { id: crypto.randomUUID(), name: clientName, website: clientWebsite, industry: clientIndustry }]);
    }
    resetClientForm();
  };

  const resetClientForm = () => {
    setIsAddingClient(false);
    setEditingClientId(null);
    setClientName("");
    setClientWebsite("");
    setClientIndustry("");
  };

  const handleEditClient = (client: {id: string, name: string, website: string, industry: string}) => {
    setEditingClientId(client.id);
    setClientName(client.name);
    setClientWebsite(client.website);
    setClientIndustry(client.industry);
    setIsAddingClient(true);
  };

  const handleDeleteClient = (id: string) => {
    setClients(clients.filter(c => c.id !== id));
  };

  const handleSaveLeader = () => {
    if (!leaderName || !leaderDesignation) return;
    
    if (editingLeaderId) {
      setLeaders(leaders.map(l => l.id === editingLeaderId ? { ...l, name: leaderName, designation: leaderDesignation, email: leaderEmail, contact: leaderContact, linkedin: leaderLinkedin } : l));
    } else {
      setLeaders([...leaders, { id: crypto.randomUUID(), name: leaderName, designation: leaderDesignation, email: leaderEmail, contact: leaderContact, linkedin: leaderLinkedin }]);
    }
    resetLeaderForm();
  };

  const resetLeaderForm = () => {
    setIsAddingLeader(false);
    setEditingLeaderId(null);
    setLeaderName("");
    setLeaderDesignation("");
    setLeaderEmail("");
    setLeaderContact("");
    setLeaderLinkedin("");
  };

  const handleEditLeader = (leader: {id: string, name: string, designation: string, email: string, contact: string, linkedin: string}) => {
    setEditingLeaderId(leader.id);
    setLeaderName(leader.name);
    setLeaderDesignation(leader.designation);
    setLeaderEmail(leader.email);
    setLeaderContact(leader.contact);
    setLeaderLinkedin(leader.linkedin);
    setIsAddingLeader(true);
  };

  const handleDeleteLeader = (id: string) => {
    setLeaders(leaders.filter(l => l.id !== id));
  };

  const handleSaveProject = () => {
    if (!projectName || !projectIndustry || !projectProblem || !projectSolution || selectedProjectRoles.length === 0) return;
    
    if (editingProjectId) {
      setProjects(projects.map(p => p.id === editingProjectId ? { 
        ...p, 
        name: projectName, 
        industry: projectIndustry, 
        problem: projectProblem, 
        solution: projectSolution, 
        roles: selectedProjectRoles 
      } : p));
    } else {
      setProjects([...projects, { 
        id: crypto.randomUUID(), 
        name: projectName, 
        industry: projectIndustry, 
        problem: projectProblem, 
        solution: projectSolution, 
        roles: selectedProjectRoles 
      }]);
    }
    resetProjectForm();
  };

  const resetProjectForm = () => {
    setIsAddingProject(false);
    setEditingProjectId(null);
    setProjectName("");
    setProjectIndustry("");
    setProjectProblem("");
    setProjectSolution("");
    setSelectedProjectRoles([]);
    setIsProjectRolesOpen(false);
    setProjectRolesSearch("");
  };

  const handleEditProject = (project: {id: string, name: string, industry: string, problem: string, solution: string, roles: string[]}) => {
    setEditingProjectId(project.id);
    setProjectName(project.name);
    setProjectIndustry(project.industry);
    setProjectProblem(project.problem);
    setProjectSolution(project.solution);
    setSelectedProjectRoles(project.roles);
    setIsAddingProject(true);
  };

  const handleDeleteProject = (id: string) => {
    setProjects(projects.filter(p => p.id !== id));
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans relative">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-orange-50 pt-20 md:pt-24 pb-12 md:pb-16 px-4 md:px-5 text-center relative overflow-hidden">
        {/* Decorative Icons */}
        <div className="hidden sm:block absolute top-10 left-[10%] opacity-20 text-[32px] pointer-events-none">📓</div>
        <div className="hidden sm:block absolute top-8 right-[15%] opacity-20 text-[28px] pointer-events-none">🌐</div>
        <div className="hidden sm:block absolute bottom-10 left-[5%] opacity-30 text-[#ff7a18] text-[40px] pointer-events-none">⟿</div>

        <h1 className="text-[32px] md:text-[42px] font-bold text-slate-900 mb-3 animate-fade-up px-2">Add New Agency</h1>
        <p className="text-[14px] md:text-[16px] text-slate-600 animate-fade-up px-4" style={{ animationDelay: '0.1s' }}>
          Add a new agency profile on Candexa AI
        </p>
      </section>

      {/* Form Content */}
      <main className="max-w-[900px] mx-auto px-4 md:px-5 -mt-6 md:-mt-10 pb-24 relative z-10">
        
        {/* Agency Branding Section */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 mb-8 shadow-sm">
          <div className="flex items-center gap-2.5 mb-8 text-[#ff7a18]">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="3"/>
            </svg>
            <h2 className="text-[17px] md:text-[18px] font-bold m-0">Agency Branding</h2>
          </div>

          <div className="flex flex-col md:flex-row gap-10 items-start">
            <p className="text-[14px] text-slate-600 leading-relaxed max-w-[300px]">
              Upload your company logo. A clean, high-resolution image works best for building trust with potential clients.
            </p>
            
            <div className="flex-1 w-full">
              <input 
                type="file" 
                ref={fileInputRef} 
                className="hidden" 
                accept="image/*"
                onChange={(e) => setLogo(e.target.files?.[0] || null)}
              />
              <div 
                onClick={() => fileInputRef.current?.click()}
                className="border-2 border-dashed border-slate-200 rounded-xl p-10 flex flex-col items-center justify-center bg-[#fcfdfc] hover:bg-[#fff1e8] transition-colors cursor-pointer group"
              >
                <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"/>
                  </svg>
                </div>
                <span className="text-[15px] font-semibold text-text-dark mb-1">
                  {logo ? logo.name : "Click to upload logo"}
                </span>
                <span className="text-[13px] text-text-light">
                  {logo ? `${(logo.size / 1024 / 1024).toFixed(2)} MB` : "JPEG, PNG, WebP (Max 5MB)"}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Basic Information Section */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 mb-8 shadow-sm">
          <div className="flex items-center gap-2.5 mb-8 text-[#ff7a18]">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
            </svg>
            <h2 className="text-[17px] md:text-[18px] font-bold m-0">Basic Information</h2>
          </div>

          <div className="space-y-6">
            <div>
              <label className="flex items-center gap-2 text-[13px] md:text-[14px] font-bold text-slate-700 mb-2">
                <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M3 5h12M9 5v14m-6 0h12"/>
                </svg>
                Agency Name <span className="text-red-500">*</span>
              </label>
              <input 
                type="text" 
                placeholder="Enter agency name..."
                value={agencyName}
                onChange={(e) => setAgencyName(e.target.value.slice(0, 290))}
                className="w-full h-12 px-4 border border-slate-200 rounded-xl bg-slate-50/50 focus:outline-none focus:border-[#ff7a18] transition-all text-[14px] md:text-[14.5px]"
              />
              <div className="text-right text-[10px] md:text-[11px] text-slate-400 mt-1">{agencyName.length}/290</div>
            </div>

            <div>
              <label className="flex items-center gap-2 text-[13px] md:text-[14px] font-bold text-slate-700 mb-2">
                <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 9h6M9 13h6M9 17h6"/>
                </svg>
                About Agency <span className="text-red-500">*</span>
              </label>
              <textarea 
                placeholder="Describe what makes your agency stand out..."
                value={aboutAgency}
                onChange={(e) => setAboutAgency(e.target.value)}
                rows={5}
                className="w-full px-4 py-3 border border-slate-200 rounded-xl bg-slate-50/50 focus:outline-none focus:border-[#ff7a18] transition-all text-[14px] md:text-[14.5px] resize-none"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="flex items-center gap-2 text-[13px] md:text-[14px] font-bold text-slate-700 mb-2">
                  <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
                  </svg>
                  Year Founded
                </label>
                <div className="relative">
                  <select className="w-full h-12 px-4 border border-slate-200 rounded-xl bg-slate-50/50 focus:outline-none focus:border-[#ff7a18] appearance-none text-[14px] md:text-[14.5px] text-slate-600">
                    <option value="">Select Year Founded</option>
                    {Array.from({ length: 2016 - 1800 + 1 }, (_, i) => 2016 - i).map((year) => (
                      <option key={year} value={year}>{year}</option>
                    ))}
                  </select>
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none text-[10px]">▼</span>
                </div>
              </div>

              <div>
                <label className="flex items-center gap-2 text-[13px] md:text-[14px] font-bold text-slate-700 mb-2">
                  <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                  </svg>
                  Company Size
                </label>
                <div className="relative">
                  <select className="w-full h-12 px-4 border border-slate-200 rounded-xl bg-slate-50/50 focus:outline-none focus:border-[#ff7a18] appearance-none text-[14px] md:text-[14.5px] text-slate-600">
                    <option value="">Select Company Size</option>
                    <option value="0-1">0-1 employees</option>
                    <option value="2-10">2-10 employees</option>
                    <option value="11-50">11-50 employees</option>
                    <option value="51-200">51-200 employees</option>
                    <option value="201-500">201-500 employees</option>
                    <option value="501-1000">501-1,000 employees</option>
                    <option value="1001-5000">1,001-5,000 employees</option>
                    <option value="5001-10000">5,001-10,000 employees</option>
                    <option value="10001+">10,001+ employees</option>
                  </select>
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none text-[10px]">▼</span>
                </div>
              </div>
            </div>

            <div>
              <label className="flex items-center gap-2 text-[13px] md:text-[14px] font-bold text-slate-700 mb-2">
                <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>
                </svg>
                Timezones
              </label>
              <div className="relative">
                <div 
                  onClick={() => setIsTimezoneOpen(!isTimezoneOpen)}
                  className="w-full min-h-[48px] px-4 py-2 border border-slate-200 rounded-xl bg-slate-50/50 flex flex-wrap gap-2 items-center cursor-pointer"
                >
                  {selectedTimezones.length === 0 ? (
                    <span className="text-[14px] md:text-[14.5px] text-slate-500">Select timezones...</span>
                  ) : (
                    selectedTimezones.map(tz => (
                      <span key={tz} className="bg-orange-50 text-[#ff7a18] text-[11px] md:text-[12px] px-2 py-1 rounded-lg flex items-center gap-1 border border-orange-100">
                        {tz}
                        <button onClick={(e) => { e.stopPropagation(); toggleSelection(selectedTimezones, setSelectedTimezones, tz); }} className="hover:text-red-500 font-bold ml-1">×</button>
                      </span>
                    ))
                  )}
                  <span className="absolute right-4 top-[14px] text-slate-400 text-[10px]">{isTimezoneOpen ? "▲" : "▼"}</span>
                </div>

                {isTimezoneOpen && (
                  <div className="absolute top-[100%] left-0 right-0 z-50 mt-1 bg-white border border-slate-200 rounded-xl shadow-xl max-h-[300px] flex flex-col overflow-hidden">
                    <div className="p-3 border-b border-slate-100">
                      <div className="relative">
                        <svg className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/>
                        </svg>
                        <input 
                          type="text" 
                          placeholder="Search timezones..."
                          value={timezoneSearch}
                          onChange={(e) => setTimezoneSearch(e.target.value)}
                          onClick={(e) => e.stopPropagation()}
                          className="w-full h-10 pl-9 pr-4 border border-slate-100 rounded-lg text-[13px] md:text-[14px] focus:outline-none focus:border-[#ff7a18]"
                        />
                      </div>
                    </div>
                    <div className="overflow-y-auto py-1 custom-scrollbar">
                      {TIMEZONES.filter(tz => tz.toLowerCase().includes(timezoneSearch.toLowerCase())).map(tz => (
                        <div 
                          key={tz}
                          onClick={() => toggleSelection(selectedTimezones, setSelectedTimezones, tz)}
                          className="flex items-center gap-3 px-4 py-2.5 hover:bg-slate-50 cursor-pointer"
                        >
                          <div className={`w-5 h-5 rounded border flex items-center justify-center transition-colors ${selectedTimezones.includes(tz) ? "bg-[#ff7a18] border-[#ff7a18]" : "border-slate-300"}`}>
                            {selectedTimezones.includes(tz) && <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7"/></svg>}
                          </div>
                          <span className={`text-[13px] md:text-[14px] ${selectedTimezones.includes(tz) ? "text-[#ff7a18] font-medium" : "text-slate-600"}`}>{tz}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div>
              <label className="flex items-center gap-2 text-[13px] md:text-[14px] font-bold text-slate-700 mb-2">
                <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                </svg>
                Languages
              </label>
              <div className="relative">
                <div 
                  onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                  className="w-full min-h-[48px] px-4 py-2 border border-slate-200 rounded-xl bg-slate-50/50 flex flex-wrap gap-2 items-center cursor-pointer"
                >
                  {selectedLanguages.length === 0 ? (
                    <span className="text-[14px] md:text-[14.5px] text-slate-500">Select languages...</span>
                  ) : (
                    selectedLanguages.map(lang => (
                      <span key={lang} className="bg-orange-50 text-[#ff7a18] text-[11px] md:text-[12px] px-2 py-1 rounded-lg flex items-center gap-1 border border-orange-100">
                        {lang}
                        <button onClick={(e) => { e.stopPropagation(); toggleSelection(selectedLanguages, setSelectedLanguages, lang); }} className="hover:text-red-500 font-bold ml-1">×</button>
                      </span>
                    ))
                  )}
                  <span className="absolute right-4 top-[14px] text-slate-400 text-[10px]">{isLanguageOpen ? "▲" : "▼"}</span>
                </div>

                {isLanguageOpen && (
                  <div className="absolute top-[100%] left-0 right-0 z-50 mt-1 bg-white border border-slate-200 rounded-xl shadow-xl max-h-[300px] flex flex-col overflow-hidden">
                    <div className="p-3 border-b border-slate-100">
                      <div className="relative">
                        <svg className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/>
                        </svg>
                        <input 
                          type="text" 
                          placeholder="Search languages..."
                          value={languageSearch}
                          onChange={(e) => setLanguageSearch(e.target.value)}
                          onClick={(e) => e.stopPropagation()}
                          className="w-full h-10 pl-9 pr-4 border border-slate-100 rounded-lg text-[13px] md:text-[14px] focus:outline-none focus:border-[#ff7a18]"
                        />
                      </div>
                    </div>
                    <div className="overflow-y-auto py-1 custom-scrollbar">
                      {LANGUAGES.filter(lang => lang.toLowerCase().includes(languageSearch.toLowerCase())).map(lang => (
                        <div 
                          key={lang}
                          onClick={() => toggleSelection(selectedLanguages, setSelectedLanguages, lang)}
                          className="flex items-center gap-3 px-4 py-2.5 hover:bg-slate-50 cursor-pointer"
                        >
                          <div className={`w-5 h-5 rounded border flex items-center justify-center transition-colors ${selectedLanguages.includes(lang) ? "bg-[#ff7a18] border-[#ff7a18]" : "border-slate-300"}`}>
                            {selectedLanguages.includes(lang) && <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7"/></svg>}
                          </div>
                          <span className={`text-[13px] md:text-[14px] ${selectedLanguages.includes(lang) ? "text-[#ff7a18] font-medium" : "text-slate-600"}`}>{lang}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Presence & Commercials Section */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 mb-8 shadow-sm">
          <div className="flex items-center gap-2.5 mb-8 text-[#ff7a18]">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
            </svg>
            <h2 className="text-[17px] md:text-[18px] font-bold m-0">Presence & Commercials</h2>
          </div>

          <div className="space-y-6">
            <div>
              <label className="flex items-center gap-2 text-[14px] font-bold text-text-dark mb-2">
                <svg className="w-4 h-4 text-text-light" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
                Target Client Size
              </label>
              <div className="relative">
                <div 
                  onClick={() => setIsClientSizeOpen(!isClientSizeOpen)}
                  className="w-full min-h-[48px] px-4 py-2 border border-gray-200 rounded-lg bg-[#fcfdfc] flex flex-wrap gap-2 items-center cursor-pointer"
                >
                  {selectedClientSizes.length === 0 ? (
                    <span className="text-[14.5px] text-gray-500">Select client sizes...</span>
                  ) : (
                    selectedClientSizes.map(size => (
                      <span key={size} className="bg-[#edf7f2] text-green-800 text-[12px] px-2 py-1 rounded flex items-center gap-1">
                        {size}
                        <button onClick={(e) => { e.stopPropagation(); toggleSelection(selectedClientSizes, setSelectedClientSizes, size); }} className="hover:text-red-500 font-bold">×</button>
                      </span>
                    ))
                  )}
                  <span className="absolute right-4 top-[14px] text-gray-400 text-[12px]">{isClientSizeOpen ? "▲" : "▼"}</span>
                </div>

                {isClientSizeOpen && (
                  <div className="absolute top-[100%] left-0 right-0 z-50 mt-1 bg-white border border-gray-200 rounded-lg shadow-xl max-h-[300px] flex flex-col overflow-hidden">
                    <div className="p-3 border-b border-gray-100">
                      <div className="relative">
                        <svg className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/>
                        </svg>
                        <input 
                          type="text" 
                          placeholder="Search options..."
                          value={clientSizeSearch}
                          onChange={(e) => setClientSizeSearch(e.target.value)}
                          onClick={(e) => e.stopPropagation()}
                          className="w-full h-10 pl-9 pr-4 border border-gray-200 rounded-lg text-[14px] focus:outline-none focus:border-green-500"
                        />
                      </div>
                    </div>
                    <div className="overflow-y-auto py-1">
                      {CLIENT_SIZES.filter(size => size.toLowerCase().includes(clientSizeSearch.toLowerCase())).map(size => (
                        <div 
                          key={size}
                          onClick={() => toggleSelection(selectedClientSizes, setSelectedClientSizes, size)}
                          className="flex items-center gap-3 px-4 py-2.5 hover:bg-[#f8faf9] cursor-pointer"
                        >
                          <div className={`w-5 h-5 rounded border flex items-center justify-center transition-colors ${selectedClientSizes.includes(size) ? "bg-green-600 border-green-600" : "border-gray-300"}`}>
                            {selectedClientSizes.includes(size) && <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7"/></svg>}
                          </div>
                          <span className={`text-[14px] ${selectedClientSizes.includes(size) ? "text-green-800 font-medium" : "text-gray-600"}`}>{size}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="flex items-center gap-2 text-[13px] md:text-[14px] font-bold text-slate-700 mb-2">
                  <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                  HQ Country
                </label>
                <div className="relative">
                  <select className="w-full h-12 px-4 border border-slate-200 rounded-xl bg-slate-50/50 focus:outline-none focus:border-[#ff7a18] appearance-none text-[14px] md:text-[14.5px] text-slate-600">
                    <option value="">Select HQ Country</option>
                    {COUNTRIES.map(country => (
                      <option key={country} value={country}>{country}</option>
                    ))}
                  </select>
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none text-[10px]">▼</span>
                </div>
              </div>

              <div>
                <label className="flex items-center gap-2 text-[13px] md:text-[14px] font-bold text-slate-700 mb-2">
                  <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
                  </svg>
                  Website <span className="text-red-500">*</span>
                </label>
                <input 
                  type="url" 
                  placeholder="https://example.com"
                  value={website}
                  onChange={(e) => setWebsite(e.target.value.slice(0, 500))}
                  className="w-full h-12 px-4 border border-slate-200 rounded-xl bg-slate-50/50 focus:outline-none focus:border-[#ff7a18] transition-all text-[14px] md:text-[14.5px]"
                />
                <div className="text-right text-[10px] md:text-[11px] text-slate-400 mt-1">{website.length}/500</div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="flex items-center gap-2 text-[13px] md:text-[14px] font-bold text-slate-700 mb-2">
                  <svg className="w-4 h-4 text-[#0a66c2]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                  </svg>
                  LinkedIn Company Profile
                </label>
                <input 
                  type="url" 
                  placeholder="https://linkedin.com/company/example"
                  value={linkedin}
                  onChange={(e) => setLinkedin(e.target.value.slice(0, 500))}
                  className="w-full h-12 px-4 border border-slate-200 rounded-xl bg-slate-50/50 focus:outline-none focus:border-[#ff7a18] transition-all text-[14px] md:text-[14.5px]"
                />
                <div className="text-right text-[10px] md:text-[11px] text-slate-400 mt-1">{linkedin.length}/500</div>
              </div>

              <div>
                <label className="flex items-center gap-2 text-[13px] md:text-[14px] font-bold text-slate-700 mb-2">
                  <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10"/><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8m4-10v12"/>
                  </svg>
                  Hourly Rate
                </label>
                <div className="flex gap-2">
                  <input 
                    type="text" 
                    placeholder="e.g. 50"
                    className="flex-1 h-12 px-4 border border-slate-200 rounded-xl bg-slate-50/50 focus:outline-none focus:border-[#ff7a18] transition-all text-[14px] md:text-[14.5px]"
                  />
                  <div className="relative w-28">
                    <select className="w-full h-12 px-4 border border-slate-200 rounded-xl bg-slate-50/50 focus:outline-none focus:border-[#ff7a18] appearance-none text-[14px] md:text-[14.5px] text-slate-600">
                      <option value="">Cur</option>
                      {CURRENCIES.map(curr => (
                        <option key={curr} value={curr}>{curr}</option>
                      ))}
                    </select>
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none text-[10px]">▼</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Expertise & Industries Section */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 mb-8 shadow-sm">
          <div className="flex items-center gap-2.5 mb-8 text-[#ff7a18]">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/>
            </svg>
            <h2 className="text-[17px] md:text-[18px] font-bold m-0">Expertise & Industries</h2>
          </div>

          <div className="space-y-6">
            <div>
              <label className="flex items-center gap-2 text-[13px] md:text-[14px] font-bold text-slate-700 mb-2">
                <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M3 21h18M3 7v1a3 3 0 006 0V7m6 0v1a3 3 0 006 0V7m-9 0h.01M4 21V10m5 11V10m5 11V10m5 11V10M12 3L2 7h20L12 3z"/>
                </svg>
                Industry Focus
              </label>
              <div className="relative">
                  <select className="w-full h-12 px-4 border border-slate-200 rounded-xl bg-slate-50/50 focus:outline-none focus:border-[#ff7a18] appearance-none text-[14px] md:text-[14.5px] text-slate-600">
                    <option value="">Add industry focus...</option>
                    {INDUSTRIES.map(industry => (
                      <option key={industry} value={industry}>{industry}</option>
                    ))}
                  </select>
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none text-[10px]">▼</span>
              </div>
            </div>

            <div>
              <label className="flex items-center gap-2 text-[13px] md:text-[14px] font-bold text-slate-700 mb-2">
                <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                </svg>
                Countries of Service
              </label>
              <div className="relative">
                <div 
                  onClick={() => setIsCountriesOfServiceOpen(!isCountriesOfServiceOpen)}
                  className="w-full min-h-[48px] px-4 py-2 border border-slate-200 rounded-xl bg-slate-50/50 flex flex-wrap gap-2 items-center cursor-pointer"
                >
                  {selectedCountriesOfService.length === 0 ? (
                    <span className="text-[14px] md:text-[14.5px] text-slate-500">Select target markets...</span>
                  ) : (
                    selectedCountriesOfService.map(country => (
                      <span key={country} className="bg-orange-50 text-[#ff7a18] text-[11px] md:text-[12px] px-2 py-1 rounded-lg flex items-center gap-1 border border-orange-100">
                        {country}
                        <button onClick={(e) => { e.stopPropagation(); toggleSelection(selectedCountriesOfService, setSelectedCountriesOfService, country); }} className="hover:text-red-500 font-bold ml-1">×</button>
                      </span>
                    ))
                  )}
                  <span className="absolute right-4 top-[14px] text-slate-400 text-[10px]">{isCountriesOfServiceOpen ? "▲" : "▼"}</span>
                </div>

                {isCountriesOfServiceOpen && (
                  <div className="absolute top-[100%] left-0 right-0 z-50 mt-1 bg-white border border-slate-200 rounded-xl shadow-xl max-h-[300px] flex flex-col overflow-hidden">
                    <div className="p-3 border-b border-slate-100">
                      <div className="relative">
                        <svg className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/>
                        </svg>
                        <input 
                          type="text" 
                          placeholder="Search countries..."
                          value={countriesOfServiceSearch}
                          onChange={(e) => setCountriesOfServiceSearch(e.target.value)}
                          onClick={(e) => e.stopPropagation()}
                          className="w-full h-10 pl-9 pr-4 border border-slate-100 rounded-lg text-[13px] md:text-[14px] focus:outline-none focus:border-[#ff7a18]"
                        />
                      </div>
                    </div>
                    <div className="overflow-y-auto py-1 custom-scrollbar">
                      {COUNTRIES.filter(country => country.toLowerCase().includes(countriesOfServiceSearch.toLowerCase())).map(country => (
                        <div 
                          key={country}
                          onClick={() => toggleSelection(selectedCountriesOfService, setSelectedCountriesOfService, country)}
                          className="flex items-center gap-3 px-4 py-2.5 hover:bg-slate-50 cursor-pointer"
                        >
                          <div className={`w-5 h-5 rounded border flex items-center justify-center transition-colors ${selectedCountriesOfService.includes(country) ? "bg-[#ff7a18] border-[#ff7a18]" : "border-slate-300"}`}>
                            {selectedCountriesOfService.includes(country) && <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7"/></svg>}
                          </div>
                          <span className={`text-[13px] md:text-[14px] ${selectedCountriesOfService.includes(country) ? "text-[#ff7a18] font-medium" : "text-slate-600"}`}>{country}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div>
              <label className="flex items-center gap-2 text-[13px] md:text-[14px] font-bold text-slate-700 mb-2">
                <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
                </svg>
                Offered Services
              </label>
              <div className="relative">
                <select className="w-full h-12 px-4 border border-slate-200 rounded-xl bg-slate-50/50 focus:outline-none focus:border-[#ff7a18] appearance-none text-[14px] md:text-[14.5px] text-slate-600">
                  <option value="">Add service offered...</option>
                  {SERVICES.map(service => (
                    <option key={service} value={service}>{service}</option>
                  ))}
                </select>
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none text-[10px]">▼</span>
              </div>
            </div>
          </div>
        </div>

        {/* Awards & Recognition Section */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 mb-8 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
            <div className="flex items-center gap-2.5 text-[#ff7a18]">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M12 15l-2 5L12 18l2 2-2-5zM12 15a6 6 0 100-12 6 6 0 000 12z"/>
              </svg>
              <h2 className="text-[17px] md:text-[18px] font-bold m-0">Awards & Recognition</h2>
            </div>
            {!isAddingAward && (
              <button 
                onClick={() => setIsAddingAward(true)}
                className="w-full sm:w-auto flex items-center justify-center gap-1.5 px-6 py-2.5 rounded-xl bg-orange-50 text-[#ff7a18] text-[13px] font-bold hover:bg-orange-100 transition-colors border border-orange-100"
              >
                <Plus className="w-4 h-4" /> Add Award
              </button>
            )}
          </div>

          {isAddingAward ? (
            <div className="border border-slate-100 rounded-2xl p-5 md:p-6 bg-slate-50/50 animate-in fade-in slide-in-from-top-2 duration-300">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
                <h3 className="text-[15px] font-bold text-slate-900">Award Information</h3>
                <div className="flex items-center gap-3">
                  <button onClick={resetAwardForm} className="flex-1 sm:flex-none px-4 py-2 rounded-xl border border-slate-200 text-[13px] font-medium text-slate-500 bg-white hover:bg-slate-50 transition-all">
                    Cancel
                  </button>
                  <button onClick={handleSaveAward} className="flex-1 sm:flex-none px-6 py-2 rounded-xl bg-[#ff7a18] text-white text-[13px] font-bold hover:bg-[#e66a10] transition-all">
                    Save Award
                  </button>
                </div>
              </div>

              <div className="space-y-5">
                <div>
                  <label className="block text-[13px] font-bold text-slate-700 mb-2">Title <span className="text-red-500">*</span></label>
                  <input 
                    type="text" 
                    placeholder="e.g. Best Recruitment Agency 2023"
                    value={awardTitle}
                    onChange={(e) => setAwardTitle(e.target.value.slice(0, 90))}
                    className="w-full h-12 px-4 border border-slate-200 rounded-xl bg-white focus:outline-none focus:border-[#ff7a18] transition-all text-[14px]"
                  />
                  <div className="text-right text-[10px] text-slate-400 mt-1">{awardTitle.length}/90</div>
                </div>

                <div>
                  <label className="block text-[13px] font-bold text-slate-700 mb-2">Issuing Authority <span className="text-red-500">*</span></label>
                  <input 
                    type="text" 
                    placeholder="e.g. Global HR Excellence"
                    value={awardAuthority}
                    onChange={(e) => setAwardAuthority(e.target.value.slice(0, 90))}
                    className="w-full h-12 px-4 border border-slate-200 rounded-xl bg-white focus:outline-none focus:border-[#ff7a18] transition-all text-[14px]"
                  />
                  <div className="text-right text-[10px] text-slate-400 mt-1">{awardAuthority.length}/90</div>
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              {awards.length === 0 ? (
                <div className="bg-slate-50/50 border border-dashed border-slate-200 rounded-2xl py-12 flex flex-col items-center justify-center text-center px-4">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-slate-300 mb-4 shadow-sm">
                    <Award className="w-6 h-6" />
                  </div>
                  <p className="text-[14px] text-slate-500 m-0">No awards added yet. Showcase your achievements!</p>
                </div>
              ) : (
                awards.map(award => (
                  <div key={award.id} className="group border border-slate-100 rounded-2xl p-4 md:p-5 bg-white hover:border-orange-200 hover:shadow-lg transition-all relative">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center text-[#ff7a18] shrink-0">
                        <Award className="w-5 h-5" />
                      </div>
                      <div className="flex-1 min-w-0 pr-16 md:pr-20">
                        <h4 className="text-[14px] md:text-[15px] font-bold text-slate-900 mb-0.5 truncate">{award.title}</h4>
                        <p className="text-[12px] md:text-[13px] text-slate-500 m-0 truncate">{award.authority}</p>
                      </div>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-1 md:gap-2">
                        <button 
                          onClick={() => handleEditAward(award)}
                          className="p-2 rounded-lg hover:bg-orange-50 text-[#ff7a18] transition-colors"
                          title="Edit"
                        >
                          <Edit className="w-4 h-4" />
                        </button>
                        <button 
                          onClick={() => handleDeleteAward(award.id)}
                          className="p-2 rounded-lg hover:bg-red-50 text-red-500 transition-colors"
                          title="Delete"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          )}
        </div>

        {/* Key Clients Section */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 mb-8 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
            <div className="flex items-center gap-2.5 text-[#ff7a18]">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m-1 4h1m5-12h1m-1 4h1m-1 4h1"/>
              </svg>
              <h2 className="text-[17px] md:text-[18px] font-bold m-0">Key Clients</h2>
            </div>
            {!isAddingClient && (
              <button 
                onClick={() => setIsAddingClient(true)}
                className="w-full sm:w-auto flex items-center justify-center gap-1.5 px-6 py-2.5 rounded-xl bg-orange-50 text-[#ff7a18] text-[13px] font-bold hover:bg-orange-100 transition-colors border border-orange-100"
              >
                <Plus className="w-4 h-4" /> Add Client
              </button>
            )}
          </div>

          {isAddingClient ? (
            <div className="border border-slate-100 rounded-2xl p-5 md:p-6 bg-slate-50/50 animate-in fade-in slide-in-from-top-2 duration-300">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
                <h3 className="text-[15px] font-bold text-slate-900">Client Information</h3>
                <div className="flex items-center gap-3">
                  <button onClick={resetClientForm} className="flex-1 sm:flex-none px-4 py-2 rounded-xl border border-slate-200 text-[13px] font-medium text-slate-500 bg-white hover:bg-slate-50 transition-all">
                    Cancel
                  </button>
                  <button onClick={handleSaveClient} className="flex-1 sm:flex-none px-6 py-2 rounded-xl bg-[#ff7a18] text-white text-[13px] font-bold hover:bg-[#e66a10] transition-all">
                    Save Client
                  </button>
                </div>
              </div>

              <div className="space-y-5">
                <div>
                  <label className="block text-[13px] font-bold text-slate-700 mb-2">Client Name <span className="text-red-500">*</span></label>
                  <input 
                    type="text" 
                    placeholder="Enter client name..."
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value.slice(0, 90))}
                    className="w-full h-12 px-4 border border-slate-200 rounded-xl bg-white focus:outline-none focus:border-[#ff7a18] transition-all text-[14px]"
                  />
                  <div className="text-right text-[10px] text-slate-400 mt-1">{clientName.length}/90</div>
                </div>

                <div>
                  <label className="block text-[13px] font-bold text-slate-700 mb-2">Client Website</label>
                  <input 
                    type="url" 
                    placeholder="https://example.com (optional)"
                    value={clientWebsite}
                    onChange={(e) => setClientWebsite(e.target.value.slice(0, 90))}
                    className="w-full h-12 px-4 border border-slate-200 rounded-xl bg-white focus:outline-none focus:border-[#ff7a18] transition-all text-[14px]"
                  />
                  <div className="text-right text-[10px] text-slate-400 mt-1">{clientWebsite.length}/90</div>
                </div>

                <div>
                  <label className="flex items-center gap-2 text-[13px] font-bold text-slate-700 mb-2">
                    <svg className="w-4 h-4 text-[#ff7a18]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m-1 4h1m5-12h1m-1 4h1m-1 4h1"/>
                    </svg>
                    Client Industry <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <select 
                      value={clientIndustry}
                      onChange={(e) => setClientIndustry(e.target.value)}
                      className="w-full h-12 px-4 border border-slate-200 rounded-xl bg-white focus:outline-none focus:border-[#ff7a18] appearance-none text-[14px] text-slate-600"
                    >
                      <option value="">Select Industry</option>
                      {INDUSTRIES.map(industry => (
                        <option key={industry} value={industry}>{industry}</option>
                      ))}
                    </select>
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none text-[10px]">▼</span>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              {clients.length === 0 ? (
                <div className="bg-slate-50/50 border border-dashed border-slate-200 rounded-2xl py-12 flex flex-col items-center justify-center text-center px-4">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-slate-300 mb-4 shadow-sm">
                    <Building2 className="w-6 h-6" />
                  </div>
                  <p className="text-[14px] text-slate-500 m-0">No key clients added yet. Showcase your partnerships!</p>
                </div>
              ) : (
                clients.map(client => (
                  <div key={client.id} className="group border border-slate-100 rounded-2xl p-4 md:p-5 bg-white hover:border-orange-200 hover:shadow-lg transition-all relative">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center text-[#ff7a18] shrink-0">
                        <Building2 className="w-5 h-5" />
                      </div>
                      <div className="flex-1 min-w-0 pr-16 md:pr-20">
                        <h4 className="text-[14px] md:text-[15px] font-bold text-slate-900 mb-0.5 truncate">{client.name}</h4>
                        <p className="text-[12px] md:text-[13px] text-slate-500 m-0 truncate">{client.website || client.industry}</p>
                      </div>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-1 md:gap-2">
                        <button 
                          onClick={() => handleEditClient(client)}
                          className="p-2 rounded-lg hover:bg-orange-50 text-[#ff7a18] transition-colors"
                          title="Edit"
                        >
                          <Edit className="w-4 h-4" />
                        </button>
                        <button 
                          onClick={() => handleDeleteClient(client.id)}
                          className="p-2 rounded-lg hover:bg-red-50 text-red-500 transition-colors"
                          title="Delete"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          )}
        </div>

        {/* Key Decision Makers Section */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 mb-8 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
            <div className="flex items-center gap-2.5 text-[#ff7a18]">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
              </svg>
              <h2 className="text-[17px] md:text-[18px] font-bold m-0">Key Decision Makers</h2>
            </div>
            {!isAddingLeader && (
              <button 
                onClick={() => setIsAddingLeader(true)}
                className="w-full sm:w-auto flex items-center justify-center gap-1.5 px-6 py-2.5 rounded-xl bg-orange-50 text-[#ff7a18] text-[13px] font-bold hover:bg-orange-100 transition-colors border border-orange-100"
              >
                <Plus className="w-4 h-4" /> Add Leader
              </button>
            )}
          </div>

          {isAddingLeader ? (
            <div className="border border-slate-100 rounded-2xl p-5 md:p-6 bg-slate-50/50 animate-in fade-in slide-in-from-top-2 duration-300">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
                <h3 className="text-[15px] font-bold text-slate-900">Leader Information</h3>
                <div className="flex items-center gap-3">
                  <button onClick={resetLeaderForm} className="flex-1 sm:flex-none px-4 py-2 rounded-xl border border-slate-200 text-[13px] font-medium text-slate-500 bg-white hover:bg-slate-50 transition-all">
                    Cancel
                  </button>
                  <button onClick={handleSaveLeader} className="flex-1 sm:flex-none px-6 py-2 rounded-xl bg-[#ff7a18] text-white text-[13px] font-bold hover:bg-[#e66a10] transition-all">
                    Save Leader
                  </button>
                </div>
              </div>

              <div className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[13px] font-bold text-slate-700 mb-2">Full Name <span className="text-red-500">*</span></label>
                    <input 
                      type="text" 
                      placeholder="e.g. John Doe"
                      value={leaderName}
                      onChange={(e) => setLeaderName(e.target.value.slice(0, 90))}
                      className="w-full h-12 px-4 border border-slate-200 rounded-xl bg-white focus:outline-none focus:border-[#ff7a18] transition-all text-[14px]"
                    />
                    <div className="text-right text-[10px] text-slate-400 mt-1">{leaderName.length}/90</div>
                  </div>
                  <div>
                    <label className="block text-[13px] font-bold text-slate-700 mb-2">Designation <span className="text-red-500">*</span></label>
                    <input 
                      type="text" 
                      placeholder="e.g. CEO & Founder"
                      value={leaderDesignation}
                      onChange={(e) => setLeaderDesignation(e.target.value.slice(0, 90))}
                      className="w-full h-12 px-4 border border-slate-200 rounded-xl bg-white focus:outline-none focus:border-[#ff7a18] transition-all text-[14px]"
                    />
                    <div className="text-right text-[10px] text-slate-400 mt-1">{leaderDesignation.length}/90</div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[13px] font-bold text-slate-700 mb-2">Official Email</label>
                    <input 
                      type="email" 
                      placeholder="john@agency.com (optional)"
                      value={leaderEmail}
                      onChange={(e) => setLeaderEmail(e.target.value.slice(0, 45))}
                      className="w-full h-12 px-4 border border-slate-200 rounded-xl bg-white focus:outline-none focus:border-[#ff7a18] transition-all text-[14px]"
                    />
                    <div className="text-right text-[10px] text-slate-400 mt-1">{leaderEmail.length}/45</div>
                  </div>
                  <div>
                    <label className="block text-[13px] font-bold text-slate-700 mb-2">Contact Number</label>
                    <input 
                      type="text" 
                      placeholder="+1 234 567 890 (optional)"
                      value={leaderContact}
                      onChange={(e) => setLeaderContact(e.target.value.slice(0, 45))}
                      className="w-full h-12 px-4 border border-slate-200 rounded-xl bg-white focus:outline-none focus:border-[#ff7a18] transition-all text-[14px]"
                    />
                    <div className="text-right text-[10px] text-slate-400 mt-1">{leaderContact.length}/45</div>
                  </div>
                </div>

                <div>
                  <label className="block text-[13px] font-bold text-slate-700 mb-2">LinkedIn Profile</label>
                  <input 
                    type="url" 
                    placeholder="https://linkedin.com/in/johndoe"
                    value={leaderLinkedin}
                    onChange={(e) => setLeaderLinkedin(e.target.value.slice(0, 90))}
                    className="w-full h-12 px-4 border border-slate-200 rounded-xl bg-white focus:outline-none focus:border-[#ff7a18] transition-all text-[14px]"
                  />
                  <div className="text-right text-[10px] text-slate-400 mt-1">{leaderLinkedin.length}/90</div>
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              {leaders.length === 0 ? (
                <div className="bg-slate-50/50 border border-dashed border-slate-200 rounded-2xl py-12 flex flex-col items-center justify-center text-center px-4">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-slate-300 mb-4 shadow-sm">
                    <Users2 className="w-6 h-6" />
                  </div>
                  <p className="text-[14px] text-slate-500 m-0">No leaders added yet. Who represents your agency?</p>
                </div>
              ) : (
                leaders.map(leader => (
                  <div key={leader.id} className="group border border-slate-100 rounded-2xl p-4 md:p-5 bg-white hover:border-orange-200 hover:shadow-lg transition-all relative">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center text-[#ff7a18] shrink-0">
                        <Users2 className="w-5 h-5" />
                      </div>
                      <div className="flex-1 min-w-0 pr-16 md:pr-20">
                        <h4 className="text-[14px] md:text-[15px] font-bold text-slate-900 mb-0.5 truncate">{leader.name}</h4>
                        <p className="text-[12px] md:text-[13px] text-slate-500 m-0 truncate">{leader.designation}</p>
                      </div>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-1 md:gap-2">
                        <button 
                          onClick={() => handleEditLeader(leader)}
                          className="p-2 rounded-lg hover:bg-orange-50 text-[#ff7a18] transition-colors"
                          title="Edit"
                        >
                          <Edit className="w-4 h-4" />
                        </button>
                        <button 
                          onClick={() => handleDeleteLeader(leader.id)}
                          className="p-2 rounded-lg hover:bg-red-50 text-red-500 transition-colors"
                          title="Delete"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          )}
        </div>

        {/* Agency Portfolio Section */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 mb-8 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
            <div className="flex items-center gap-2.5 text-[#ff7a18]">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"/>
              </svg>
              <h2 className="text-[17px] md:text-[18px] font-bold m-0">Agency Portfolio</h2>
            </div>
            {!isAddingProject && (
              <button 
                onClick={() => setIsAddingProject(true)}
                className="w-full sm:w-auto flex items-center justify-center gap-1.5 px-6 py-2.5 rounded-xl bg-orange-50 text-[#ff7a18] text-[13px] font-bold hover:bg-orange-100 transition-colors border border-orange-100"
              >
                <Plus className="w-4 h-4" /> Add Project
              </button>
            )}
          </div>

          {isAddingProject ? (
            <div className="border border-slate-100 rounded-2xl p-5 md:p-6 bg-slate-50/50 animate-in fade-in slide-in-from-top-2 duration-300">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
                <h3 className="text-[15px] font-bold text-slate-900">Project Details</h3>
                <div className="flex items-center gap-3">
                  <button onClick={resetProjectForm} className="flex-1 sm:flex-none px-4 py-2 rounded-xl border border-slate-200 text-[13px] font-medium text-slate-500 bg-white hover:bg-slate-50 transition-all">
                    Cancel
                  </button>
                  <button onClick={handleSaveProject} className="flex-1 sm:flex-none px-6 py-2 rounded-xl bg-[#ff7a18] text-white text-[13px] font-bold hover:bg-[#e66a10] transition-all">
                    Save Project
                  </button>
                </div>
              </div>

              <div className="space-y-5">
                <div>
                  <label className="block text-[13px] font-bold text-slate-700 mb-2">Project Name <span className="text-red-500">*</span></label>
                  <input 
                    type="text" 
                    placeholder="Project Name"
                    value={projectName}
                    onChange={(e) => setProjectName(e.target.value.slice(0, 90))}
                    className="w-full h-12 px-4 border border-slate-200 rounded-xl bg-white focus:outline-none focus:border-[#ff7a18] transition-all text-[14px]"
                  />
                  <div className="text-right text-[10px] text-slate-400 mt-1">{projectName.length}/90</div>
                </div>

                <div>
                  <label className="block text-[13px] font-bold text-slate-700 mb-2">Client Industry <span className="text-red-500">*</span></label>
                  <div className="relative">
                    <select 
                      value={projectIndustry}
                      onChange={(e) => setProjectIndustry(e.target.value)}
                      className="w-full h-12 px-4 border border-slate-200 rounded-xl bg-white focus:outline-none focus:border-[#ff7a18] appearance-none text-[14px] text-slate-600"
                    >
                      <option value="">Select Client Industry</option>
                      {INDUSTRIES.map(industry => (
                        <option key={industry} value={industry}>{industry}</option>
                      ))}
                    </select>
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none text-[10px]">▼</span>
                  </div>
                </div>

                <div>
                  <label className="block text-[13px] font-bold text-slate-700 mb-2">Problem Statement <span className="text-red-500">*</span></label>
                  <textarea 
                    placeholder="Briefly describe the challenge your agency solved..."
                    value={projectProblem}
                    onChange={(e) => setProjectProblem(e.target.value.slice(0, 480))}
                    className="w-full h-32 p-4 border border-slate-200 rounded-xl bg-white focus:outline-none focus:border-[#ff7a18] transition-all text-[14px] resize-none"
                  />
                  <div className="text-right text-[11px] text-gray-400 mt-1">{projectProblem.length}/480</div>
                </div>

                <div>
                  <label className="block text-[14px] font-bold text-text-dark mb-2">Solution Summary <span className="text-red-500">*</span></label>
                  <textarea 
                    placeholder="Summarize your approach and the results achieved..."
                    value={projectSolution}
                    onChange={(e) => setProjectSolution(e.target.value.slice(0, 980))}
                    className="w-full h-32 p-4 border border-gray-200 rounded-lg bg-white focus:outline-none focus:border-green-500 transition-colors text-[14.5px] resize-none"
                  />
                  <div className="text-right text-[11px] text-gray-400 mt-1">{projectSolution.length}/980</div>
                </div>

                <div>
                  <label className="block text-[13px] font-bold text-slate-700 mb-2">Roles Hired <span className="text-red-500">*</span></label>
                  <div className="relative">
                    <div 
                      onClick={() => setIsProjectRolesOpen(!isProjectRolesOpen)}
                      className="w-full min-h-[48px] px-4 py-2 border border-slate-200 rounded-xl bg-white flex flex-wrap gap-2 items-center cursor-pointer"
                    >
                      {selectedProjectRoles.length === 0 ? (
                        <span className="text-[14px] text-slate-500">Search or add roles...</span>
                      ) : (
                        selectedProjectRoles.map(role => (
                          <span key={role} className="bg-orange-50 text-[#ff7a18] text-[11px] px-2 py-1 rounded-lg flex items-center gap-1 border border-orange-100">
                            {role}
                            <button onClick={(e) => { e.stopPropagation(); toggleSelection(selectedProjectRoles, setSelectedProjectRoles, role); }} className="hover:text-red-500 font-bold ml-1">×</button>
                          </span>
                        ))
                      )}
                      <span className="absolute right-4 top-[14px] text-slate-400 text-[10px] transition-transform duration-200" style={{ transform: isProjectRolesOpen ? 'rotate(180deg)' : 'rotate(0)' }}>▼</span>
                    </div>

                    {isProjectRolesOpen && (
                      <div className="absolute top-[100%] left-0 right-0 z-50 mt-1 bg-white border border-slate-200 rounded-xl shadow-xl max-h-[300px] flex flex-col overflow-hidden">
                        <div className="p-3 border-b border-slate-100">
                          <div className="relative">
                            <svg className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                              <circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/>
                            </svg>
                            <input 
                              type="text" 
                              placeholder="Search roles..."
                              value={projectRolesSearch}
                              onChange={(e) => setProjectRolesSearch(e.target.value)}
                              onClick={(e) => e.stopPropagation()}
                              className="w-full h-10 pl-9 pr-4 border border-slate-100 rounded-lg text-[13px] focus:outline-none focus:border-[#ff7a18]"
                            />
                          </div>
                        </div>
                        <div className="overflow-y-auto py-1 custom-scrollbar">
                          {ROLES.filter(role => role.toLowerCase().includes(projectRolesSearch.toLowerCase())).map(role => (
                            <div 
                              key={role}
                              onClick={() => toggleSelection(selectedProjectRoles, setSelectedProjectRoles, role)}
                              className="flex items-center gap-3 px-4 py-2.5 hover:bg-slate-50 cursor-pointer"
                            >
                              <div className={`w-5 h-5 rounded border flex items-center justify-center transition-colors ${selectedProjectRoles.includes(role) ? "bg-[#ff7a18] border-[#ff7a18]" : "border-slate-300"}`}>
                                {selectedProjectRoles.includes(role) && <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7"/></svg>}
                              </div>
                              <span className={`text-[13px] ${selectedProjectRoles.includes(role) ? "text-[#ff7a18] font-medium" : "text-slate-600"}`}>{role}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              {projects.length === 0 ? (
                <div className="bg-slate-50/50 border border-dashed border-slate-200 rounded-2xl py-12 flex flex-col items-center justify-center text-center px-4">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-slate-300 mb-4 shadow-sm">
                    <Briefcase className="w-6 h-6" />
                  </div>
                  <p className="text-[14px] text-slate-500 m-0">No projects added yet. Showcase your success stories!</p>
                </div>
              ) : (
                projects.map(project => (
                  <div key={project.id} className="group border border-slate-100 rounded-2xl p-4 md:p-5 bg-white hover:border-orange-200 hover:shadow-lg transition-all relative">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center text-[#ff7a18] shrink-0">
                        <Briefcase className="w-5 h-5" />
                      </div>
                      <div className="flex-1 min-w-0 pr-16 md:pr-20">
                        <h4 className="text-[14px] md:text-[15px] font-bold text-slate-900 mb-0.5 truncate">{project.name}</h4>
                        <p className="text-[12px] md:text-[13px] text-slate-500 m-0 truncate">{project.industry}</p>
                      </div>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-1 md:gap-2">
                        <button 
                          onClick={() => handleEditProject(project)}
                          className="p-2 rounded-lg hover:bg-orange-50 text-[#ff7a18] transition-colors"
                          title="Edit"
                        >
                          <Edit className="w-4 h-4" />
                        </button>
                        <button 
                          onClick={() => handleDeleteProject(project.id)}
                          className="p-2 rounded-lg hover:bg-red-50 text-red-500 transition-colors"
                          title="Delete"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          )}
        </div>

        {/* Submit Button Section */}
        <div className="flex justify-center pt-8">
          <button className="w-full sm:w-auto bg-gradient-to-br from-[#ff7a18] to-[#e66a10] text-white font-bold text-[16px] py-4 px-12 rounded-2xl transition-all hover:-translate-y-1 flex items-center justify-center gap-2 border border-[#ff7a18]/20">
            Create Agency Profile
          </button>
        </div>

        {/* Floating Scroll Top Button */}
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 w-12 h-12 rounded-full border border-slate-200 bg-white flex items-center justify-center text-[#ff7a18] hover:-translate-y-1 transition-all z-[100] sm:hidden"
        >
          <ArrowUp className="w-6 h-6" />
        </button>

      </main>

      <Footer />
    </div>
  );
}
