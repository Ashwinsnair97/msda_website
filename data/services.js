// Single source for every list of services on the site: the home page list,
// the services page, the footer and the callback form all derive from this.
export const services = [
  {
    id: "audit-assurance",
    title: "Audit & Assurance",
    shortTitle: "Audit & Assurance",
    summary:
      "Statutory, tax, internal, government, bank and concurrent audits, along with specialised assurance engagements.",
    description:
      "Independent audit and assurance across statutory, tax, internal, government, bank and concurrent audits, along with specialised assurance engagements.",
    deliverables: [
      "Statutory audit",
      "Tax audit",
      "Internal audit",
      "Government audit",
      "Bank audit",
      "Concurrent audit",
      "Specialised assurance",
    ],
  },
  {
    id: "direct-indirect-taxation",
    title: "Direct & Indirect Taxation",
    shortTitle: "Direct & Indirect Tax",
    summary:
      "Income tax, GST, tax planning, audits, refunds, assessments, litigation and departmental representation.",
    description:
      "Income tax and GST support covering planning, audits, refunds, assessments, litigation and representation before tax authorities.",
    deliverables: [
      "Income tax",
      "GST",
      "Tax planning",
      "Tax audits",
      "Refunds",
      "Assessments",
      "Litigation",
      "Departmental representation",
    ],
  },
  {
    id: "international-taxation-fema",
    title: "International Taxation & FEMA",
    shortTitle: "International Tax & FEMA",
    summary:
      "Cross-border tax, expatriate taxation, foreign exchange regulations and international business transactions.",
    description:
      "Advisory on cross-border tax matters, expatriate taxation, foreign exchange regulations and international business transactions.",
    deliverables: [
      "Cross-border tax",
      "Expatriate taxation",
      "FEMA compliance",
      "International transactions",
    ],
  },
  {
    id: "corporate-law-governance",
    title: "Corporate Law & Governance",
    shortTitle: "Corporate Law & Governance",
    summary:
      "Corporate law advisory, statutory filings, governance frameworks and regulatory compliance.",
    description:
      "Corporate law advisory, statutory filings and governance frameworks that help businesses meet their regulatory obligations.",
    deliverables: [
      "Corporate law advisory",
      "Statutory filings",
      "Governance frameworks",
      "Regulatory compliance",
    ],
  },
  {
    id: "business-advisory-virtual-cfo",
    title: "Business Advisory & Virtual CFO",
    shortTitle: "Business Advisory & Virtual CFO",
    summary:
      "Financial performance reviews, MIS, cash flows, budgets, management reporting and strategic planning.",
    description:
      "Financial performance reviews, MIS, cash flow and budget management, management reporting and strategic planning support.",
    deliverables: [
      "Performance reviews",
      "MIS",
      "Cash flows",
      "Budgets",
      "Management reporting",
      "Strategic planning",
    ],
  },
  {
    id: "transaction-corporate-finance-advisory",
    title: "Transaction & Corporate Finance Advisory",
    shortTitle: "Transaction Advisory",
    summary:
      "Valuations, due diligence, mergers and acquisitions, debt advisory and fundraising support.",
    description:
      "Support across key stages of business transactions, from valuations and due diligence to mergers, acquisitions, debt and fundraising.",
    deliverables: [
      "Valuations",
      "Due diligence",
      "Mergers & acquisitions",
      "Debt advisory",
      "Fundraising support",
    ],
  },
  {
    id: "risk-controls-specialised-audits",
    title: "Risk, Controls & Specialised Audits",
    shortTitle: "Risk & Specialised Audits",
    summary:
      "Internal controls, risk management, systems reviews and forensic assignments where applicable.",
    description:
      "Reviews of internal controls, risk management and systems, along with forensic assignments where applicable.",
    deliverables: [
      "Internal controls",
      "Risk management",
      "Systems reviews",
      "Forensic assignments",
    ],
  },
  {
    id: "accounting-finance-outsourcing",
    title: "Accounting & Finance Outsourcing",
    shortTitle: "Accounting & Outsourcing",
    summary:
      "Accounting, financial statement preparation, payroll, HR administration and recurring compliance support.",
    description:
      "Outsourced accounting, financial statement preparation, payroll and HR administration, with support for recurring compliances.",
    deliverables: [
      "Accounting",
      "Financial statements",
      "Payroll",
      "HR administration",
      "Recurring compliance",
    ],
  },
];

export function serviceHref(id) {
  return `/services#${id}`;
}

export const clientSegments = {
  intro:
    "Every organisation and individual faces distinct financial, regulatory and strategic challenges. Our multidisciplinary expertise enables us to support clients across industries, business stages and financial needs, delivering professional services tailored to their specific requirements.",
  items: [
    {
      title: "Listed Companies & Regulated Entities",
      description: "Audit, assurance, taxation, governance and regulatory compliance.",
    },
    {
      title: "MSMEs & Established Businesses",
      description: "Accounting, tax advisory, compliance and business performance support.",
    },
    {
      title: "Startups & Emerging Enterprises",
      description: "Business structuring, financial planning, regulatory setup and growth advisory.",
    },
    {
      title: "Multinational & Foreign Entities",
      description:
        "International taxation, FEMA, cross-border transactions and Indian regulatory compliance.",
    },
    {
      title: "Exporters, SEZ Units & International Businesses",
      description:
        "GST refunds, export compliance, zero-rated supplies, SEZ transactions and cross-border tax advisory.",
    },
    {
      title: "Individuals, NRIs & HNW/UHNW Clients",
      description:
        "Personal taxation, international tax matters and wealth-related financial advisory within our professional scope.",
    },
    {
      title: "Banks & Financial Institutions",
      description:
        "Bank audits, concurrent audits, assurance and specialised compliance assignments.",
    },
    {
      title: "Nonprofit Organisations, Trusts & Charitable Institutions",
      description: "Audit, taxation, regulatory filings and governance support.",
    },
    {
      title: "Government & Public Sector Organisations",
      description:
        "Government audits, public sector assurance and specialised advisory services.",
    },
  ],
};
