// src/data/products.js

const products = [
  {
    id: "ha-serum-01",
    name: "Hyaluronic Acid Serum",
    category: "Skincare",
    brand: "AuraLux",
    price: 45.0,
    imageUrl: "https://placehold.co/600x400/F0F0F0/888888?text=Hyaluronic+Serum",
    rating: 4.8,
    stock: 30,
    description: "Deeply hydrates, plumps skin, and boosts moisture retention.",
    variants: [
      { type: "volume", value: "30ml", variantStock: 20 },
      { type: "volume", value: "50ml", additionalPrice: 15, variantStock: 10 }
    ]
  },
  {
    id: "vm-lipstick-02",
    name: "Velvet Matte Lipstick",
    category: "Makeup",
    brand: "GlowEssence",
    price: 22.0,
    imageUrl: "https://placehold.co/600x400/FDF0F0/8A2BE2?text=Velvet+Lipstick",
    rating: 4.6,
    stock: 40,
    description: "Richly pigmented matte finish with long-lasting hydration.",
    variants: [
      { type: "shade", value: "Crimson Red", variantStock: 15 },
      { type: "shade", value: "Nude Peach", variantStock: 25 }
    ]
  },
  {
    id: "shampoo-03",
    name: "Botanical Repair Shampoo",
    category: "Haircare",
    brand: "PureBotanicals",
    price: 28.0,
    imageUrl: "https://placehold.co/600x400/EAF4EA/556B2F?text=Repair+Shampoo",
    rating: 4.5,
    stock: 20,
    description: "Strengthens damaged hair with nourishing plant-based ingredients.",
    variants: [
      { type: "volume", value: "200ml", variantStock: 12 },
      { type: "volume", value: "400ml", additionalPrice: 8, variantStock: 8 }
    ]
  },
  {
    id: "perfume-04",
    name: "Golden Mist Perfume",
    category: "Fragrances",
    brand: "Scentology",
    price: 65.0,
    imageUrl: "https://placehold.co/600x400/F4EEDB/9B870C?text=Golden+Mist",
    rating: 4.9,
    stock: 12,
    description: "Elegant blend of citrus, amber, and floral notes for everyday luxury.",
    variants: [
      { type: "volume", value: "50ml", variantStock: 7 },
      { type: "volume", value: "100ml", additionalPrice: 20, variantStock: 5 }
    ]
  },
  {
    id: "cleanser-05",
    name: "Gentle Foaming Cleanser",
    category: "Skincare",
    brand: "AuraLux",
    price: 18.0,
    imageUrl: "https://placehold.co/600x400/FFF0F0/444?text=Cleanser",
    rating: 4.4,
    stock: 35,
    description: "Removes dirt, oil, and impurities while keeping skin soft and hydrated."
  },
  {
    id: "brush-kit-06",
    name: "Premium Makeup Brush Kit",
    category: "Beauty Tools",
    brand: "GlowEssence",
    price: 55.0,
    imageUrl: "https://placehold.co/600x400/F8F8F8/222?text=Brush+Kit",
    rating: 4.7,
    stock: 18,
    description: "7-piece brush set with ultra-soft bristles for flawless application."
  },
  {
    id: "moist-cream-07",
    name: "Radiance Moisturizing Cream",
    category: "Skincare",
    brand: "GlowEssence",
    price: 30.0,
    imageUrl: "https://placehold.co/600x400/F6F6F0/8B4513?text=Moisturizer",
    rating: 4.5,
    stock: 22,
    description: "Enriched with vitamin C and aloe for soft, glowing skin."
  },
  {
    id: "hair-oil-08",
    name: "Herbal Hair Growth Oil",
    category: "Haircare",
    brand: "PureBotanicals",
    price: 25.0,
    imageUrl: "https://placehold.co/600x400/E0F7E0/3C763D?text=Hair+Oil",
    rating: 4.3,
    stock: 28,
    description: "Strengthens roots and stimulates hair growth naturally."
  },
  {
    id: "foundation-09",
    name: "Silk Finish Foundation",
    category: "Makeup",
    brand: "GlowEssence",
    price: 32.0,
    imageUrl: "https://placehold.co/600x400/F9E0F0/7A297A?text=Foundation",
    rating: 4.6,
    stock: 25,
    description: "Buildable coverage with a silky, smooth finish for all-day wear.",
    variants: [
      { type: "shade", value: "Ivory", variantStock: 10 },
      { type: "shade", value: "Honey Beige", variantStock: 15 }
    ]
  }
];

export default products;
