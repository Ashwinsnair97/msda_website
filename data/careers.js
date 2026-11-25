import { offices, site } from "./site";

// Recruitment inbox, shown as the fallback while the online application form
// is not wired up. Point this at a dedicated inbox (e.g. careers@…) once the
// firm has one.
export const careersEmail = site.email;

// The application form lives at /careers/apply (general application) and
// /careers/apply/<opening id> (that role preselected).
export const careersApplyHref = "/careers/apply";

export function openingApplyHref(opening) {
  return `${careersApplyHref}/${opening.id}`;
}

// Role-select value for an application that isn't for a listed opening.
export const GENERAL_APPLICATION = "general";

export function findOpening(id) {
  return openings.find((opening) => opening.id === id);
}

// Pre-addressed email with the role in the subject line.
export function applicationEmailHref(roleId) {
  const opening = findOpening(roleId);
  const subject = opening ? `Application: ${opening.title}` : "General application";
  const body =
    "Dear Hiring Team,\n\nPlease find my CV attached.\n\nName:\nPhone:\nQualification:\nYears of experience:\n";
  return `mailto:${careersEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

// `icon` keys map to lucide icons in app/careers/page.js.
export const benefits = [
  {
    icon: "development",
    title: "Professional development",
    text: "Build technical knowledge and develop practical professional skills.",
  },
  {
    icon: "engagements",
    title: "Diverse engagements",
    text: "Gain exposure to different clients, industries and professional requirements.",
  },
  {
    icon: "collaboration",
    title: "Collaborative environment",
    text: "Work alongside professionals across different areas of expertise.",
  },
  {
    icon: "opportunities",
    title: "Career opportunities",
    text: "Explore opportunities suited to different stages of your professional journey.",
  },
];

// DRAFT: titles, vacancies, education, experience and skills come from the
// previous website and need the firm's confirmation. `location` is an office
// id from data/site.js; the current values are placeholders to confirm.
// `summary` and `responsibilities` are placeholder copy written for this
// site; replace them with the firm's own job descriptions before publishing.
export const openings = [
  {
    id: "article-assistant",
    title: "Article Assistant",
    vacancies: 8,
    experience: "Entry level",
    location: "bengaluru-jayanagar",
    education: "CA Intermediate (both groups)",
    skills: ["MS Office", "Accounts", "Taxation"],
    summary:
      "Begin your articleship with practical exposure to audit, taxation and accounting engagements, working under the guidance of experienced chartered accountants.",
    responsibilities: [
      "Assist with statutory, tax and internal audit assignments.",
      "Prepare and update books of accounts and supporting schedules.",
      "Support income tax and GST computations, returns and filings.",
      "Maintain working papers and engagement documentation.",
    ],
  },
  {
    id: "chartered-accountant",
    title: "Chartered Accountant",
    vacancies: 3,
    experience: "0–2 years",
    location: "hyderabad",
    education: "CA",
    skills: ["Accounting", "Audit", "Taxation", "GST"],
    summary:
      "Take responsibility for audit, taxation and accounting engagements while developing your professional practice alongside the firm's partners.",
    responsibilities: [
      "Plan and carry out audit assignments and review working papers.",
      "Prepare and review income tax and GST computations, returns and filings.",
      "Prepare financial statements and review accounting records.",
      "Guide article assistants on engagement work.",
    ],
  },
  {
    id: "senior-paid-assistant",
    title: "Senior Paid Assistant",
    vacancies: 2,
    experience: "3–4 years",
    location: "bengaluru-jayanagar",
    education: "B.Com / M.Com / MBA / CA Intermediate",
    skills: ["Accounting", "Audit", "GST", "Tally", "SAP", "Excel"],
    summary:
      "Manage day-to-day accounting, audit and GST work for a portfolio of clients, using accounting systems such as Tally and SAP.",
    responsibilities: [
      "Maintain and finalise books of accounts for clients.",
      "Prepare GST returns and reconciliations.",
      "Support audit assignments with schedules and documentation.",
      "Prepare reports and analysis in Excel.",
    ],
  },
];

// Choices for the application form's role select.
export const roleOptions = [
  ...openings.map((opening) => ({ value: opening.id, label: opening.title })),
  { value: GENERAL_APPLICATION, label: "General application" },
];

export function openingLocation(opening) {
  return offices.find((office) => office.id === opening.location)?.name;
}

export function vacancyLabel(count) {
  return `${count} ${count === 1 ? "vacancy" : "vacancies"}`;
}
