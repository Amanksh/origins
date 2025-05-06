"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

// Example product data
type Product = {
  name: string;
  module: string;
  cabinet: string;
  pricePerSqM: number;
};
type ProductData = { [key: string]: Product[] };
const productData: ProductData = {
  Indoor: [
    {
      name: "Indoor Basic",
      module: "320x160mm",
      cabinet: "960x960mm",
      pricePerSqM: 500,
    },
    {
      name: "Indoor Pro",
      module: "256x128mm",
      cabinet: "1024x1024mm",
      pricePerSqM: 700,
    },
  ],
  Outdoor: [
    {
      name: "Outdoor Basic",
      module: "320x160mm",
      cabinet: "960x960mm",
      pricePerSqM: 600,
    },
    {
      name: "Outdoor Pro",
      module: "320x320mm",
      cabinet: "960x960mm",
      pricePerSqM: 850,
    },
  ],
  Premium: [
    {
      name: "Premium Ultra",
      module: "256x128mm",
      cabinet: "1024x1024mm",
      pricePerSqM: 1200,
    },
  ],
  "Entry Level": [
    {
      name: "Entry Level",
      module: "320x160mm",
      cabinet: "960x960mm",
      pricePerSqM: 400,
    },
  ],
};

export default function PriceCalculatorPage() {
  const [category, setCategory] = useState<keyof typeof productData>("Indoor");
  const [product, setProduct] = useState<Product>(productData["Indoor"][0]);
  const [length, setLength] = useState(2);
  const [width, setWidth] = useState(1);

  // Calculate area and price
  const area = length * width;
  const price = area * (product?.pricePerSqM || 0);

  // Handle category change
  const handleCategoryChange = (cat: string) => {
    setCategory(cat as keyof typeof productData);
    setProduct(productData[cat as keyof typeof productData][0]);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-background py-12">
      <Card className="w-full max-w-3xl">
        <CardHeader>
          <CardTitle className="text-3xl mb-2">Price Calculator</CardTitle>
          <div className="flex flex-wrap gap-2 mt-2">
            {Object.keys(productData).map((cat) => (
              <Button
                key={cat}
                variant={cat === category ? "gradient" : "secondary"}
                onClick={() => handleCategoryChange(cat)}
              >
                {cat}
              </Button>
            ))}
          </div>
        </CardHeader>
        <CardContent>
          <div className="mb-4">
            <label className="block mb-1 font-semibold">Product</label>
            <select
              className="w-full bg-card text-white rounded-xl px-4 py-3 border-0"
              value={product.name}
              onChange={(e) =>
                setProduct(
                  productData[category as keyof typeof productData].find(
                    (p: Product) => p.name === e.target.value
                  ) || productData[category as keyof typeof productData][0]
                )
              }
            >
              {productData[category as keyof typeof productData].map(
                (p: Product) => (
                  <option key={p.name} value={p.name}>
                    {p.name} (Module: {p.module}, Cabinet: {p.cabinet})
                  </option>
                )
              )}
            </select>
          </div>
          <div className="flex gap-4 mb-4">
            <div className="flex-1">
              <label className="block mb-1 font-semibold">
                Length (meters)
              </label>
              <Input
                type="number"
                min={0.1}
                step={0.1}
                value={length}
                onChange={(e) => setLength(Number(e.target.value))}
              />
            </div>
            <div className="flex-1">
              <label className="block mb-1 font-semibold">Width (meters)</label>
              <Input
                type="number"
                min={0.1}
                step={0.1}
                value={width}
                onChange={(e) => setWidth(Number(e.target.value))}
              />
            </div>
          </div>
          <div className="mb-6">
            <Badge variant="green" className="mr-2">
              Area: {area.toFixed(2)} m²
            </Badge>
            <Badge variant="orange">
              Estimated Price: ${price.toLocaleString()}
            </Badge>
          </div>
          <div className="w-full h-96 bg-[#23262B] rounded-xl flex items-center justify-center relative overflow-hidden">
            {/* 3D View Placeholder */}
            <div className="absolute left-8 bottom-8 flex flex-col items-center">
              {/* Building reference (SVG or image) */}
              <svg
                width="60"
                height="180"
                viewBox="0 0 60 180"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="10"
                  y="40"
                  width="40"
                  height="130"
                  rx="6"
                  fill="#444"
                />
                <rect x="20" y="60" width="8" height="20" fill="#888" />
                <rect x="32" y="60" width="8" height="20" fill="#888" />
                <rect x="20" y="90" width="8" height="20" fill="#888" />
                <rect x="32" y="90" width="8" height="20" fill="#888" />
                <rect x="20" y="120" width="8" height="20" fill="#888" />
                <rect x="32" y="120" width="8" height="20" fill="#888" />
              </svg>
              <span className="text-xs text-muted-foreground mt-1">
                Building
              </span>
            </div>
            {/* Screen representation (scaled to area) */}
            <div
              className="bg-gradient-to-br from-primary to-primary-light border-4 border-white shadow-lg"
              style={{
                width: `${Math.max(60, Math.min(300, length * 80))}px`,
                height: `${Math.max(30, Math.min(180, width * 80))}px`,
                position: "absolute",
                left: "120px",
                bottom: "40px",
                borderRadius: "0.75rem",
                zIndex: 2,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                fontWeight: 700,
                fontSize: "1rem",
                textShadow: "0 2px 8px #0008",
              }}
            >
              LED Screen
            </div>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
