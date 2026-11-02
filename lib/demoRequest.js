// Pre-filled demo request email used by every "Request a Demo" CTA.
const demoRequestBody = encodeURIComponent(`Dear KAVACH-Q Team,

I would like to request a technical demonstration of the KAVACH-Q platform for our organization.

Organization Name:
Industry:
Contact Person:
Designation:
Phone Number:
Email Address:
Estimated Assets/Repositories:

We are interested in understanding:
- Cryptographic Discovery & Inventory
- Quantum Vulnerability Scoring (QVS)
- PQC Migration Planning
- Compliance & Reporting

Preferred Demo Date:

Regards,`);

export const demoRequestHref = `mailto:gaintquantum@gmail.com?subject=${encodeURIComponent("KAVACH-Q Enterprise Demo Request")}&body=${demoRequestBody}`;
