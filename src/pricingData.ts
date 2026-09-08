import type { PricingPlan } from "./types/pricing";

export const pricingPlans: PricingPlan[] = [
  {
    name: "Basic",
    Price: 9,
    description: "Perfect for individuals getting started.",
    features: ["5 projects", "Basic support", "10 GB storage"],
  },

  {
    name: "Pro",
    Price: 19,
    description: "Perfect for growing teams.",
    features: ["Unlimited projects", "Priority support", "100 GB storage"],
    Popular: true,
  },

  {
    name: "Enterprise",
    Price: 49,
    description: "For businesses that need more power.",
    features: ["Unlimited projects", "24/7 support", "1 TB storage"],
  },
];
