import type { Db } from "./types";

import { DEMO_SALES_USERS } from "./demoUsers";

/**
 * DEV-162 — the fakerest users dict is now a fixed set of demo people
 * with real people pfps (see demoUsers.ts) instead of random faker
 * names, so every seeded row shows a consistent face.
 */
export const generateSales = (_: Db) => DEMO_SALES_USERS;
