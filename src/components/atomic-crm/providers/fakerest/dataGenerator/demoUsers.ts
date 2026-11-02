import type { RAFile, Sale } from "../../../types";

/**
 * DEV-162 — demo users dict for the FakeRest provider.
 *
 * All users carry real people pfps from the JiMesh brand pfp pack
 * (jimeshIO: frontend/public-site/public/brand/pfp/, see INDEX.md)
 * so seeded CRM rows (owners, account managers) show actual faces
 * instead of blank/initial avatars.
 *
 * The pfp files are self-hosted from the app's public folder
 * (public/brand/pfp) so the demo works fully offline.
 */
const pfp = (src: string, title: string) =>
  ({ src, title, rawFile: null } as RAFile);

export const DEMO_SALES_USERS: Sale[] = [
  {
    id: 0,
    user_id: "0",
    first_name: "Jane",
    last_name: "Doe",
    email: "janedoe@atomic.dev",
    secondary_emails: [],
    password: "demo",
    administrator: true,
    disabled: false,
    avatar: pfp("/brand/pfp/woman5.svg", "Jane Doe"),
  },
  {
    id: 1,
    user_id: "1",
    first_name: "Priya",
    last_name: "Sharma",
    email: "priya.sharma@jimesh.io",
    secondary_emails: [],
    password: "demo",
    administrator: false,
    disabled: false,
    avatar: pfp("/brand/pfp/sales1.svg", "Priya Sharma"),
  },
  {
    id: 2,
    user_id: "2",
    first_name: "Daniel",
    last_name: "Reyes",
    email: "daniel.reyes@jimesh.io",
    secondary_emails: [],
    password: "demo",
    administrator: false,
    disabled: false,
    avatar: pfp("/brand/pfp/founder.svg", "Daniel Reyes"),
  },
  {
    id: 3,
    user_id: "3",
    first_name: "Marcus",
    last_name: "Okafor",
    email: "marcus.okafor@jimesh.io",
    secondary_emails: [],
    password: "demo",
    administrator: false,
    disabled: false,
    avatar: pfp("/brand/pfp/sales2.svg", "Marcus Okafor"),
  },
  {
    id: 4,
    user_id: "4",
    first_name: "Nadia",
    last_name: "Rahman",
    email: "nadia.rahman@jimesh.io",
    secondary_emails: [],
    password: "demo",
    administrator: false,
    disabled: false,
    avatar: pfp("/brand/pfp/customer_success.svg", "Nadia Rahman"),
  },
  {
    id: 5,
    user_id: "5",
    first_name: "Tom",
    last_name: "Becker",
    email: "tom.becker@jimesh.io",
    secondary_emails: [],
    password: "demo",
    administrator: false,
    disabled: false,
    avatar: pfp("/brand/pfp/support_male.svg", "Tom Becker"),
  },
  {
    id: 6,
    user_id: "6",
    first_name: "Lena",
    last_name: "Fischer",
    email: "lena.fischer@jimesh.io",
    secondary_emails: [],
    password: "demo",
    administrator: false,
    disabled: false,
    avatar: pfp("/brand/pfp/support_female.svg", "Lena Fischer"),
  },
  {
    id: 7,
    user_id: "7",
    first_name: "Marco",
    last_name: "Ruiz",
    email: "marco.ruiz@jimesh.io",
    secondary_emails: [],
    password: "demo",
    administrator: false,
    disabled: false,
    avatar: pfp("/brand/pfp/ops.svg", "Marco Ruiz"),
  },
  {
    id: 8,
    user_id: "8",
    first_name: "Ana",
    last_name: "Solberg",
    email: "ana.solberg@jimesh.io",
    secondary_emails: [],
    password: "demo",
    administrator: false,
    disabled: false,
    avatar: pfp("/brand/pfp/product.svg", "Ana Solberg"),
  },
];
