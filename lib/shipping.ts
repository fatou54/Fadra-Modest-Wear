// Shipping calculator for Malaysia and International

export interface ShippingRate {
  region: string;
  states: string[];
  baseRate: number; // Base shipping cost in RM
  freeShippingThreshold: number; // Free shipping above this amount
}

export const shippingRates: ShippingRate[] = [
  // Malaysia Domestic
  {
    region: "Klang Valley",
    states: ["Kuala Lumpur", "Selangor", "Putrajaya"],
    baseRate: 8,
    freeShippingThreshold: 200,
  },
  {
    region: "Peninsular Malaysia (North)",
    states: ["Perlis", "Kedah", "Penang", "Perak"],
    baseRate: 12,
    freeShippingThreshold: 300,
  },
  {
    region: "Peninsular Malaysia (Central)",
    states: ["Negeri Sembilan", "Melaka"],
    baseRate: 10,
    freeShippingThreshold: 250,
  },
  {
    region: "Peninsular Malaysia (East Coast)",
    states: ["Kelantan", "Terengganu", "Pahang"],
    baseRate: 15,
    freeShippingThreshold: 350,
  },
  {
    region: "Peninsular Malaysia (South)",
    states: ["Johor"],
    baseRate: 12,
    freeShippingThreshold: 300,
  },
  {
    region: "East Malaysia (Sabah)",
    states: ["Sabah", "Labuan"],
    baseRate: 25,
    freeShippingThreshold: 430,
  },
  {
    region: "East Malaysia (Sarawak)",
    states: ["Sarawak"],
    baseRate: 25,
    freeShippingThreshold: 430,
  },
  // Southeast Asia
  {
    region: "Southeast Asia",
    states: ["Singapore", "Brunei", "Thailand", "Indonesia", "Philippines", "Vietnam", "Cambodia", "Myanmar", "Laos"],
    baseRate: 35,
    freeShippingThreshold: 600,
  },
  // East Asia
  {
    region: "East Asia",
    states: ["China", "Hong Kong", "Taiwan", "Japan", "South Korea", "Macau"],
    baseRate: 45,
    freeShippingThreshold: 800,
  },
  // Middle East
  {
    region: "Middle East",
    states: ["Saudi Arabia", "United Arab Emirates", "Qatar", "Kuwait", "Bahrain", "Oman", "Jordan", "Turkey", "Egypt", "Lebanon"],
    baseRate: 60,
    freeShippingThreshold: 1000,
  },
  // Australia & New Zealand
  {
    region: "Australia & New Zealand",
    states: ["Australia", "New Zealand"],
    baseRate: 50,
    freeShippingThreshold: 900,
  },
  // Europe
  {
    region: "Europe",
    states: ["United Kingdom", "France", "Germany", "Italy", "Spain", "Netherlands", "Belgium", "Sweden", "Norway", "Denmark", "Finland", "Switzerland", "Austria", "Poland", "Ireland", "Portugal"],
    baseRate: 65,
    freeShippingThreshold: 1100,
  },
  // North America
  {
    region: "North America",
    states: ["United States", "Canada", "Mexico"],
    baseRate: 70,
    freeShippingThreshold: 1200,
  },
  // South Asia
  {
    region: "South Asia",
    states: ["India", "Pakistan", "Bangladesh", "Sri Lanka", "Nepal", "Maldives"],
    baseRate: 40,
    freeShippingThreshold: 700,
  },
  // Rest of World
  {
    region: "Rest of World",
    states: ["Other Countries"],
    baseRate: 80,
    freeShippingThreshold: 1500,
  },
];

export function calculateShipping(state: string, subtotal: number): {
  shippingCost: number;
  region: string;
  isFreeShipping: boolean;
} {
  // Find the shipping rate for the given state/country
  const rate = shippingRates.find((r) =>
    r.states.some((s) => s.toLowerCase() === state.toLowerCase())
  );

  if (!rate) {
    // Default to Rest of World rates if state/country not found
    return {
      shippingCost: 80,
      region: "Rest of World",
      isFreeShipping: subtotal >= 1500,
    };
  }

  const isFreeShipping = subtotal >= rate.freeShippingThreshold;

  return {
    shippingCost: isFreeShipping ? 0 : rate.baseRate,
    region: rate.region,
    isFreeShipping,
  };
}

export function getAllStates(): string[] {
  const allStates: string[] = [];
  shippingRates.forEach((rate) => {
    allStates.push(...rate.states);
  });
  return allStates.sort();
}

export function getShippingInfo(state: string): ShippingRate | null {
  return (
    shippingRates.find((r) =>
      r.states.some((s) => s.toLowerCase() === state.toLowerCase())
    ) || null
  );
}
