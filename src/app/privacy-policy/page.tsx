import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageBanner from "@/components/layout/PageBanner";

export const metadata: Metadata = buildMetadata({
    path: "/privacy-policy",
    title: "Privacy Policy",
    description:
        "How OneSociety collects, uses, shares, retains, and protects personal data, in line with India's Digital Personal Data Protection Act, 2023.",
});

/* -------------------------------------------------------------------------
   Content model - a section is a title plus an ordered list of blocks.
   This supports plain paragraphs, bullet lists, and simple tables, which
   the previous single-string `content` field couldn't express.
------------------------------------------------------------------------- */
type ContentBlock =
  | { type: "p"; text: string }
  | { type: "list"; items: string[] }
  | { type: "table"; headers: string[]; rows: string[][] }
  | { type: "note"; text: string };

interface PolicySection {
  title: string;
  blocks: ContentBlock[];
}

const sections: PolicySection[] = [
  {
    title: "Who is responsible for your data",
    blocks: [
      {
        type: "p",
        text: `OneSociety is operated by Aahas Softech Solutions ("we", "us"), at [REGISTERED ADDRESS].`,
      },
      {
        type: "p",
        text: "Your apartment society's managing committee is the Data Fiduciary for the information held about you - they decide who lives in which flat, who works at the gate, and what notices go out. We provide and operate the platform on their instructions. Where the law treats us as jointly responsible, we accept that responsibility for the platform itself: its security, its availability, and the rights described in section 6.",
      },
      {
        type: "p",
        text: "If your society stops using OneSociety, its data is returned or deleted on the committee's instruction.",
      },
    ],
  },
  {
    title: "What we collect",
    blocks: [
      {
        type: "p",
        text: "Your account is created by your society's office - you do not sign yourself up. Everything below comes either from them, or from you using the app.",
      },
      {
        type: "table",
        headers: ["Category", "What it is", "Why"],
        rows: [
          [
            "Identity & login",
            "Name, email address, mobile number, password (stored hashed), one-time codes",
            "Signing you in and knowing which flat you belong to",
          ],
          [
            "Residence",
            "Society, flat/unit, whether you are the owner or the tenant, tenancy status", 
            "Scoping the app to your home, and deciding who manages that flat's gate passes",
          ],
          [
            "Gate & security",
            "Visitor names and type, expected times, entry and exit times, pass codes, parcels held at the gate",
            "Access control and the society's safety record",
          ],
          [
            "Household records",
            "Family members, daily help, vehicles, pets - entered by you",
            "Gate passes for the people and vehicles you allow in",
          ],
          [
            "Billing records",
            "Maintenance dues, invoices and receipts raised by your society",
            "Showing you what is owed and paid",
          ],
          [
            "Community activity",
            "Complaints, forum and club posts, event RSVPs, poll votes, amenity bookings",
            "The features you choose to use",
          ],
          [
            "Staff records",
            "For security staff: shift attendance, patrol scans with timestamps, and a selfie captured at each patrol checkpoint",
            "Proving patrol rounds were walked; a workforce record for the society",
          ],
          [
            "Emergency details (optional)",
            "Blood group, useful skills",
            "Only if you explicitly opt in, so neighbours can help in an emergency",
          ],
          [
            "Device token",
            "A Firebase push identifier for your phone",
            "Ringing your phone when a visitor is at the gate",
          ],
        ],
      },
      { type: "p", text: "What we do not collect" },
      {
        type: "list",
        items: [
          "Your location. The app requests no location permission and records none.",
          "Your contacts, photos, calendar, microphone or call logs.",
          "Advertising identifiers, tracking across other apps, or behavioural profiles. We do not sell personal data, and we do not use it to target advertising.",
          "CCTV footage. The app stores camera names and zones only. Recordings stay on your society's own equipment, under the committee's control.",
        ],
      },
      { type: "p", text: "Permissions the app asks for" },
      {
        type: "list",
        items: [
          "Camera - to scan a visitor's gate-pass QR code, and for security staff to take the patrol selfie described above. Nothing is captured unless you press the button.",
          "Notifications - so a visitor at the gate can ring your phone. Decline it and the app still works; you will only see visitors when you open it.",
        ],
      },
    ],
  },
  {
    title: "Who can see what",
    blocks: [
      {
        type: "list",
        items: [
          "You - everything about you and your flat.",
          "Security staff at the gate - a flat number and a resident name, and the visitor records for the gate. Never residents' phone numbers or email addresses.",
          "Your managing committee and office staff - the resident directory including contact details, complaints, dues, and the society's operational records. They need this to run the society.",
          "The owner of a flat - contact details for the people recorded in flats they own, because they can start and end a tenancy.",
          "Other residents - your name and flat where you post in the community areas. There is no public feed; posts stay inside your society.",
        ],
      },
      { type: "p", text: "We do not share personal data with anyone else, except the service providers below, or where the law compels us." },
      { type: "p", text: "Service providers" },
      {
        type: "table",
        headers: ["Provider", "Purpose"],
        rows: [
          ["Render", "Application hosting"],
          ["Neon", "Database hosting"],
          ["Netlify", "Web app hosting"],
          ["Google Firebase Cloud Messaging", "Delivering push notifications to your device"],
        ],
      },
      { type: "p", text: "These providers process data on our instructions under their standard data-processing terms. Some may store or process data outside India, which the DPDP Act permits except for countries the Government restricts." },
    ],
  },
  {
    title: "How long it is kept",
    blocks: [
      {
        type: "table",
        headers: ["Data", "Retention"],
        rows: [
          ["One-time login codes", "24 hours"],
          ["Visitor and gate logs", "180 days, then anonymised"],
          ["Amenity bookings", "1 year"],
          ["Attendance, patrol and incident records", "1 year"],
          ["Complaints", "3 years"],
          ["Administrative audit log", "3 years"],
          ["Financial records (dues, invoices, receipts)", "8 years, and kept in de-identified form even after erasure - required by Indian bookkeeping law"],
          ["Your account and everything else", "Until you ask us to erase it, or your society removes you"],
        ],
      },
    ],
  },
  {
    title: "How it is protected",
    blocks: [
      {
        type: "list",
        items: [
          "Passwords are stored hashed with bcrypt - never in readable form.",
          "All traffic runs over TLS, and the database connection is encrypted.",
          "Sessions expire, and every request is checked against your role and your society. Data from one society is never reachable from another.",
          "One-time codes are rate-limited and single-use.",
          "Administrative actions are written to an audit log.",
        ],
      },
      { type: "p", text: "No system is perfectly secure. If a breach affects your data, we will notify you and the Data Protection Board of India without delay, as the DPDP Act requires." },
    ],
  },
  {
    title: "Your rights",
    blocks: [
      { type: "p", text: "Under the DPDP Act you may:" },
      {
        type: "list",
        items: [
          "Get a copy of your data - in the app: Profile → Privacy & my data → Get a copy of my data. It exports immediately; no request needed.",
          "Correct anything inaccurate - Profile → Privacy & my data → Correct my data, which raises a tracked request to your society office.",
          "Have your data erased - your name, email and phone are anonymised, household and emergency entries are deleted, your posts are redacted, and your login is disabled. Financial records are retained de-identified for the statutory period described above.",
          "Withdraw consent - for anything given by consent, such as the emergency registry, withdrawal is a single tap: as easy as giving it was.",
          "Complain - to our grievance officer below, and afterwards to the Data Protection Board of India if you are not satisfied.",
          "Nominate someone - to exercise these rights on your behalf if you die or become incapacitated. Contact the grievance officer.",
        ],
      },
      { type: "note", text: "A note on erasure. Some records are your society's, not only yours - a visitor entry names the visitor and the flat they came to, and it forms part of the society's security record. Where we cannot delete such a record outright, we anonymise your part of it." },
    ],
  },
  {
    title: "Children",
    blocks: [
      { type: "p", text: "OneSociety is for adults. Accounts are created by your society's office for residents and staff. Children may appear as family members in a household record - the adult who adds them is their parent or guardian and provides consent on their behalf. We do not knowingly create accounts for anyone under 18, we do not track children, and we do not direct any content or advertising at them." },
    ],
  },
  {
    title: "Notices and advertising",
    blocks: [
      { type: "p", text: "Your society can place its own notices and sponsor messages inside the app. These are chosen by your managing committee and shown to everyone in that society. They are not targeted using your personal data, and no third-party advertising network is involved." },
    ],
  },
  {
    title: "Changes to this policy",
    blocks: [
      { type: "p", text: "If we change how data is handled, we will update this page, change the date at the top, and - for anything significant - tell you in the app before it takes effect." },
    ],
  },
  {
    title: "Contact us",
    blocks: [
      {
        type: "list",
        items: [
          "Grievance Officer: [GRIEVANCE OFFICER NAME]",
          "Email: [GRIEVANCE EMAIL]",
          "Aahas Softech Solutions, [REGISTERED ADDRESS]",
        ],
      },
      { type: "p", text: "We acknowledge every privacy request within 72 hours and aim to resolve it within 30 days." },
      { type: "p", text: "For anything about your flat, your dues or your neighbours, your managing committee is the faster route - they hold that information and can act on it directly." },
    ],
  },
];

/* -------------------------------------------------------------------------
   Block renderer
------------------------------------------------------------------------- */
function Block({ block }: { block: ContentBlock }) {
  switch (block.type) {
    case "p":
      return <p className="text-neutral-dark leading-relaxed mb-4">{block.text}</p>;

    case "list":
      return (
        <ul className="mb-4 list-disc space-y-2 pl-5">
          {block.items.map((item, i) => (
            <li key={i} className="text-neutral-dark leading-relaxed">
              {item}
            </li>
          ))}
        </ul>
      );

    case "table":
      return (
        <div className="mb-4 overflow-x-auto rounded-lg border border-neutral-200">
          <table className="w-full border-collapse text-left text-sm">
            <thead>
              <tr className="bg-neutral-50">
                {block.headers.map((h, i) => (
                  <th key={i} className="border-b border-neutral-200 px-4 py-3 font-display font-semibold text-primary">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, ri) => (
                <tr key={ri} className={ri % 2 === 1 ? "bg-neutral-50/50" : undefined}>
                  {row.map((cell, ci) => (
                    <td key={ci} className="border-b border-neutral-100 px-4 py-3 align-top text-neutral-dark">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );

    case "note":
      return (
        <p className="mb-4 rounded-lg border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm leading-relaxed text-neutral-dark">
          {block.text}
        </p>
      );

    default:
      return null;
  }
}

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <main>
        <PageBanner
          title="Privacy Policy"
          description="Last updated: 22 August 2026 · Applies to the OneSociety mobile app and web app"
          breadcrumbs={[{ label: "Home", href: "/" }, { label: "Privacy Policy" }]}
        />
        <section className="section-padding bg-white">
          <div className="container-custom max-w-3xl">
            <div className="prose-custom">
              <p className="text-neutral-dark leading-relaxed mb-8 text-lg">
                This policy explains what OneSociety collects, why, who can see it, how long it is
                kept, and what you can do about it. It is written to India&apos;s Digital Personal
                Data Protection Act, 2023 (DPDP Act).
              </p>

              <div className="space-y-10">
                {sections.map((section, index) => (
                  <div key={section.title}>
                    <h2 className="font-display font-bold text-primary text-xl mb-3">
                      {index + 1}. {section.title}
                    </h2>
                    {section.blocks.map((block, bi) => (
                      <Block key={bi} block={block} />
                    ))}
                  </div>
                ))}
              </div>

              <p className="mt-10 text-sm text-neutral-500">
                © 2026 Aahas Softech Solutions. OneSociety and the OneSociety logo are trademarks
                of Aahas Softech Solutions. This policy covers the OneSociety mobile and web
                applications.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}