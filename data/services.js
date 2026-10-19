// Single source for every list of services on the site: the home page list,
// the services page, the footer and the callback form all derive from this.
export const services = [
  {
    id: "transaction-advisory",
    title: "Transaction Advisory",
    shortTitle: "Transaction Advisory",
    summary:
      "Due diligence, valuation, business modelling, debt advisory, fundraising and M&A.",
    description:
      "Support across key stages of business transactions, from evaluating opportunities to planning funding and acquisitions.",
    deliverables: [
      "Due diligence",
      "Valuation & business modelling",
      "Debt advisory",
      "Fundraising",
      "Mergers & acquisitions",
    ],
  },
  {
    id: "business-structuring-statutory-compliances",
    title: "Business Structuring & Statutory Compliances",
    shortTitle: "Business Structuring & Compliance",
    summary:
      "Business registrations, statutory compliance, and HR and payroll support.",
    description:
      "Guidance on business models, registrations and ongoing statutory obligations, with support for HR and payroll administration.",
    deliverables: [
      "Business registrations",
      "Statutory compliance",
      "Employee benefits",
      "PF, ESI & PT filings",
    ],
  },
  {
    id: "audit-and-assurance",
    title: "Audit and Assurance",
    shortTitle: "Audit & Assurance",
    summary:
      "Independent assurance through statutory, internal, government and bank audits.",
    description:
      "Audit services tailored to the engagement, covering statutory, internal, government and bank audits, including work for public sector entities.",
    deliverables: [
      "Statutory audit",
      "Internal audit",
      "Government audit",
      "Bank audit",
      "Public sector advisory",
    ],
  },
  {
    id: "accounting-business-support-compliances",
    title: "Accounting, Business Support and Compliances",
    shortTitle: "Accounting & Business Support",
    summary:
      "Accounting, account reviews, MIS reporting, financial projections, RERA and ROC filings.",
    description:
      "Practical support for accounting records, financial reporting, business information and regulatory filings.",
    deliverables: [
      "Books of accounts",
      "Account reviews",
      "MIS reports",
      "Financial projections",
      "RERA & ROC filings",
    ],
  },
  {
    id: "tax-planning-advisory",
    title: "Tax Planning & Advisory — Direct & Indirect Taxation",
    shortTitle: "Tax Planning & Advisory",
    summary:
      "Tax planning, GST, international taxation, transfer pricing and regulatory advisory.",
    description:
      "Tax planning, compliance and advisory across domestic and international matters, subject to applicable requirements.",
    deliverables: [
      "Direct & indirect tax",
      "Appellate representation",
      "DTAA",
      "Transfer pricing",
      "NRI taxation",
      "GST",
      "Import/export",
      "PLI",
      "MOOWR",
      "Foreign Trade Policy",
    ],
  },
];

export function serviceHref(id) {
  return `/services#${id}`;
}

export const supportAreas = [
  {
    title: "Regulatory compliance",
    description: "Support with statutory compliance, filings and regulatory requirements.",
  },
  {
    title: "Business health reviews",
    description: "Reviews of accounts, financial information and business context.",
  },
  {
    title: "Risk and governance support",
    description: "Audit and assurance work across statutory, internal, government and bank audits.",
  },
  {
    title: "Operational clarity",
    description: "Accounting, reporting, HR and payroll administration support.",
  },
  {
    title: "Financial reporting",
    description: "Accounting records, MIS reports and financial projections to support business reporting.",
  },
  {
    title: "Strategic planning",
    description: "Transaction advisory spanning valuation, business modelling, debt advisory and fundraising.",
  },
];
