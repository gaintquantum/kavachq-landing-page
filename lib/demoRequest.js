// Pre-filled demo request email used by every "Request a Demo" CTA.
const demoRequestBody = ({ name = "", email = "", company = "" }) => encodeURIComponent(`Dear KAVACH-Q Team,

I would like to request a technical demonstration of the KAVACH-Q platform for our organization.

Organization Name: ${company}
Industry:
Contact Person: ${name}
Designation:
Phone Number:
Email Address: ${email}
Estimated Assets/Repositories:

We are interested in understanding:
- Cryptographic Discovery & Inventory
- Quantum Vulnerability Scoring (QVS)
- PQC Migration Planning
- Compliance & Reporting

Preferred Demo Date:

Regards,
${name}`);

export const buildDemoRequestHref = (details = {}) =>
  `mailto:gaintquantum@gmail.com?subject=${encodeURIComponent("KAVACH-Q Enterprise Demo Request")}&body=${demoRequestBody(details)}`;

export const demoRequestHref = buildDemoRequestHref();
