import { ConvexReactClient } from "convex/react";

export const CONVEX_URL =
  (import.meta.env.VITE_CONVEX_URL as string) || "https://blessed-peacock-789.convex.cloud";

export const convex = new ConvexReactClient(CONVEX_URL);
