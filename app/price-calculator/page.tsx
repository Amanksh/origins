"use client";

import type React from "react";

import { useState, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Environment,
  PerspectiveCamera,
} from "@react-three/drei";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function DigitalSignageConfigurator() {
  // Product categories and data
  const categories = [
    { id: "indoor", name: "Indoor Displays" },
    { id: "outdoor", name: "Outdoor Displays" },
    { id: "premium", name: "Premium Displays" },
    { id: "entry", name: "Entry Level Displays" },
  ];

  // State for the configurator
  const [selectedCategory, setSelectedCategory] = useState("indoor");
  const [selectedProduct, setSelectedProduct] = useState("p1");
  const [moduleSize, setModuleSize] = useState("1.5mm");
  const [cabinetSize, setCabinetSize] = useState("500x500mm");
  const [dimensions, setDimensions] = useState({ width: 2, height: 1 });
  const [activeTab, setActiveTab] = useState("specs");
  const [configStep, setConfigStep] = useState("category"); // category, product, configure

  // Product data
  const products = {
    indoor: [
      {
        id: "p1",
        name: "Standard Series",
        description: "Versatile display for general indoor use",
        moduleSizes: ["1.2mm", "1.5mm", "1.9mm"],
        cabinetSizes: ["500x500mm", "500x1000mm"],
        image: "/placeholder.svg?height=200&width=300",
      },
      {
        id: "p2",
        name: "Ultra HD Series",
        description: "High-definition display for premium visual quality",
        moduleSizes: ["0.9mm", "1.2mm", "1.5mm"],
        cabinetSizes: ["500x500mm", "500x1000mm"],
        image: "/placeholder.svg?height=200&width=300",
      },
    ],
    outdoor: [
      {
        id: "p3",
        name: "Weatherproof Series",
        description: "Durable display for outdoor environments",
        moduleSizes: ["2.5mm", "3.0mm", "4.0mm"],
        cabinetSizes: ["500x500mm", "500x1000mm"],
        image: "/placeholder.svg?height=200&width=300",
      },
    ],
    premium: [
      {
        id: "p4",
        name: "Premium Series",
        description: "High-end display with superior image quality",
        moduleSizes: ["0.9mm", "1.2mm", "1.5mm"],
        cabinetSizes: ["500x500mm", "500x1000mm"],
        image: "/placeholder.svg?height=200&width=300",
      },
    ],
    entry: [
      {
        id: "p5",
        name: "Entry Series",
        description: "Cost-effective display for basic signage needs",
        moduleSizes: ["2.5mm", "3.0mm", "4.0mm"],
        cabinetSizes: ["500x500mm", "500x1000mm"],
        image: "/placeholder.svg?height=200&width=300",
      },
    ],
  };

  // Get current product data
  const currentProducts =
    products[selectedCategory as keyof typeof products] || [];
  const currentProduct =
    currentProducts.find((p) => p.id === selectedProduct) || currentProducts[0];

  // Handle dimension changes
  const handleWidthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number.parseFloat(e.target.value);
    if (!isNaN(value) && value > 0) {
      setDimensions({ ...dimensions, width: value });
    }
  };

  const handleHeightChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number.parseFloat(e.target.value);
    if (!isNaN(value) && value > 0) {
      setDimensions({ ...dimensions, height: value });
    }
  };

  // Navigation functions
  const goToProductSelection = (categoryId: string) => {
    setSelectedCategory(categoryId);
    setConfigStep("product");
  };

  const goToConfiguration = (productId: string) => {
    setSelectedProduct(productId);
    setConfigStep("configure");
  };

  const goBack = () => {
    if (configStep === "configure") {
      setConfigStep("product");
    } else if (configStep === "product") {
      setConfigStep("category");
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Digital Signage Configurator</h1>

      {/* Category Selection */}
      {configStep === "category" && (
        <div>
          <h2 className="text-2xl font-semibold mb-4">
            Select Display Category
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <Card
                key={category.id}
                className="cursor-pointer hover:shadow-lg transition-shadow"
                onClick={() => goToProductSelection(category.id)}
              >
                <CardHeader className="p-4">
                  <CardTitle>{category.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <img
                    src="/placeholder.svg?height=150&width=250"
                    alt={category.name}
                    className="w-full h-32 object-cover rounded-md"
                  />
                </CardContent>
                <CardFooter>
                  <Button
                    className="w-full"
                    onClick={() => goToProductSelection(category.id)}
                  >
                    Select
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* Product Selection */}
      {configStep === "product" && (
        <div>
          <div className="flex items-center mb-6">
            <Button variant="outline" className="mr-4" onClick={goBack}>
              Back
            </Button>
            <h2 className="text-2xl font-semibold">
              {categories.find((c) => c.id === selectedCategory)?.name}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentProducts.map((product) => (
              <Card
                key={product.id}
                className="cursor-pointer hover:shadow-lg transition-shadow"
                onClick={() => goToConfiguration(product.id)}
              >
                <CardHeader className="p-4">
                  <CardTitle>{product.name}</CardTitle>
                  <CardDescription>{product.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-40 object-cover rounded-md mb-4"
                  />
                  <div className="text-sm">
                    <div className="font-medium">Available Module Sizes:</div>
                    <div className="flex flex-wrap gap-2 mt-1 mb-2">
                      {product.moduleSizes.map((size) => (
                        <span
                          key={size}
                          className="bg-gray-100 px-2 py-1 rounded text-xs"
                        >
                          {size}
                        </span>
                      ))}
                    </div>
                    <div className="font-medium">Cabinet Sizes:</div>
                    <div className="flex flex-wrap gap-2 mt-1">
                      {product.cabinetSizes.map((size) => (
                        <span
                          key={size}
                          className="bg-gray-100 px-2 py-1 rounded text-xs"
                        >
                          {size}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button
                    className="w-full"
                    onClick={() => goToConfiguration(product.id)}
                  >
                    Configure
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* Configuration */}
      {configStep === "configure" && currentProduct && (
        <div>
          <div className="flex items-center mb-6">
            <Button variant="outline" className="mr-4" onClick={goBack}>
              Back
            </Button>
            <h2 className="text-2xl font-semibold">
              Configure {currentProduct.name}
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <Tabs
                value={activeTab}
                onValueChange={setActiveTab}
                className="w-full"
              >
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="specs">Specifications</TabsTrigger>
                  <TabsTrigger value="preview">3D Preview</TabsTrigger>
                </TabsList>
                <TabsContent value="specs" className="mt-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Display Specifications</CardTitle>
                      <CardDescription>
                        Configure your display by selecting module size, cabinet
                        size, and dimensions
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="space-y-2">
                        <Label>Module Pixel Pitch</Label>
                        <RadioGroup
                          value={moduleSize}
                          onValueChange={setModuleSize}
                          className="flex flex-wrap gap-4"
                        >
                          {currentProduct.moduleSizes.map((size) => (
                            <div
                              key={size}
                              className="flex items-center space-x-2"
                            >
                              <RadioGroupItem
                                value={size}
                                id={`module-${size}`}
                              />
                              <Label htmlFor={`module-${size}`}>{size}</Label>
                            </div>
                          ))}
                        </RadioGroup>
                        <p className="text-sm text-gray-500 mt-1">
                          Pixel pitch affects resolution and viewing distance
                        </p>
                      </div>

                      <div className="space-y-2">
                        <Label>Cabinet Size</Label>
                        <RadioGroup
                          value={cabinetSize}
                          onValueChange={setCabinetSize}
                          className="flex flex-wrap gap-4"
                        >
                          {currentProduct.cabinetSizes.map((size) => (
                            <div
                              key={size}
                              className="flex items-center space-x-2"
                            >
                              <RadioGroupItem
                                value={size}
                                id={`cabinet-${size}`}
                              />
                              <Label htmlFor={`cabinet-${size}`}>{size}</Label>
                            </div>
                          ))}
                        </RadioGroup>
                        <p className="text-sm text-gray-500 mt-1">
                          Cabinet size determines the building blocks of your
                          display
                        </p>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="width">Width (meters)</Label>
                          <Input
                            id="width"
                            type="number"
                            min="0.5"
                            step="0.1"
                            value={dimensions.width}
                            onChange={handleWidthChange}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="height">Height (meters)</Label>
                          <Input
                            id="height"
                            type="number"
                            min="0.5"
                            step="0.1"
                            value={dimensions.height}
                            onChange={handleHeightChange}
                          />
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button
                        onClick={() => setActiveTab("preview")}
                        className="w-full"
                      >
                        View 3D Preview
                      </Button>
                    </CardFooter>
                  </Card>
                </TabsContent>
                <TabsContent value="preview" className="mt-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>3D Preview</CardTitle>
                      <CardDescription>
                        Interactive 3D visualization of your configured display
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="min-h-[400px]">
                      <DisplayPreview
                        moduleSize={moduleSize}
                        cabinetSize={cabinetSize}
                        width={dimensions.width}
                        height={dimensions.height}
                      />
                    </CardContent>
                    <CardFooter className="flex flex-col space-y-4">
                      <div className="w-full grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <p className="font-medium">Module Size:</p>
                          <p>{moduleSize}</p>
                        </div>
                        <div>
                          <p className="font-medium">Cabinet Size:</p>
                          <p>{cabinetSize}</p>
                        </div>
                        <div>
                          <p className="font-medium">Total Width:</p>
                          <p>{dimensions.width} meters</p>
                        </div>
                        <div>
                          <p className="font-medium">Total Height:</p>
                          <p>{dimensions.height} meters</p>
                        </div>
                      </div>
                      <Button className="w-full">Request Quote</Button>
                    </CardFooter>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>

            <div className="hidden lg:block">
              <Card className="h-full">
                <CardHeader>
                  <CardTitle>Product Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <img
                    src={currentProduct.image || "/placeholder.svg"}
                    alt={currentProduct.name}
                    className="w-full h-64 object-cover rounded-md"
                  />

                  <div>
                    <h3 className="text-lg font-medium mb-2">
                      {currentProduct.name}
                    </h3>
                    <p className="text-gray-500">
                      {currentProduct.description}
                    </p>
                  </div>

                  <div className="space-y-4 mt-6">
                    <div>
                      <h4 className="font-medium mb-2">Key Features</h4>
                      <ul className="list-disc pl-5 space-y-1 text-sm">
                        <li>High brightness and contrast ratio</li>
                        <li>Wide viewing angle (160°)</li>
                        <li>Seamless panel connection</li>
                        <li>Quick installation and maintenance</li>
                        <li>Energy-efficient LED technology</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-medium mb-2">
                        Technical Specifications
                      </h4>
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        <div className="font-medium">Brightness:</div>
                        <div>800-1200 nits</div>
                        <div className="font-medium">Refresh Rate:</div>
                        <div>3840Hz</div>
                        <div className="font-medium">IP Rating:</div>
                        <div>IP30 (Indoor)</div>
                        <div className="font-medium">Lifespan:</div>
                        <div>100,000+ hours</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// DisplayPreview Component
interface DisplayPreviewProps {
  moduleSize: string;
  cabinetSize: string;
  width: number;
  height: number;
}

function DisplayPreview({
  moduleSize,
  cabinetSize,
  width,
  height,
}: DisplayPreviewProps) {
  const controlsRef = useRef(null);

  // Parse cabinet dimensions from string (e.g., "500x500mm")
  const [cabinetWidth, cabinetHeight] = cabinetSize
    .replace("mm", "")
    .split("x")
    .map((dim) => Number.parseInt(dim) / 1000); // Convert to meters

  // Calculate number of cabinets needed
  const cabinetsWide = Math.ceil(width / cabinetWidth);
  const cabinetsHigh = Math.ceil(height / cabinetHeight);

  // Calculate pixel pitch in meters
  const pixelPitch = Number.parseFloat(moduleSize.replace("mm", "")) / 1000;

  return (
    <div className="w-full h-[400px] bg-gray-100 rounded-md overflow-hidden">
      <Canvas shadows>
        <PerspectiveCamera
          makeDefault
          position={[0, 0, Math.max(width, height) * 2]}
        />
        <OrbitControls
          ref={controlsRef}
          enablePan={true}
          enableZoom={true}
          minDistance={Math.max(width, height)}
          maxDistance={Math.max(width, height) * 3}
        />

        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} castShadow />

        <Environment preset="studio" />

        <DisplayModel
          width={width}
          height={height}
          cabinetWidth={cabinetWidth}
          cabinetHeight={cabinetHeight}
          cabinetsWide={cabinetsWide}
          cabinetsHigh={cabinetsHigh}
          pixelPitch={pixelPitch}
        />

        {/* Room for context */}
        <mesh
          rotation={[-Math.PI / 2, 0, 0]}
          position={[0, -0.1, 0]}
          receiveShadow
        >
          <planeGeometry args={[20, 20]} />
          <meshStandardMaterial color="#f0f0f0" />
        </mesh>

        {/* Wall behind display */}
        <mesh position={[0, height / 2, -0.1]} receiveShadow>
          <planeGeometry args={[width * 2, height * 2]} />
          <meshStandardMaterial color="#e0e0e0" />
        </mesh>

        {/* Scale reference - furniture */}
        <group position={[-width - 0.5, 0, 1]}>
          {/* Simple desk */}
          <mesh position={[0, 0.4, 0]} castShadow>
            <boxGeometry args={[1.2, 0.05, 0.6]} />
            <meshStandardMaterial color="#8B4513" />
          </mesh>
          {/* Desk legs */}
          <mesh position={[-0.55, 0.2, -0.25]} castShadow>
            <boxGeometry args={[0.05, 0.4, 0.05]} />
            <meshStandardMaterial color="#8B4513" />
          </mesh>
          <mesh position={[0.55, 0.2, -0.25]} castShadow>
            <boxGeometry args={[0.05, 0.4, 0.05]} />
            <meshStandardMaterial color="#8B4513" />
          </mesh>
          <mesh position={[-0.55, 0.2, 0.25]} castShadow>
            <boxGeometry args={[0.05, 0.4, 0.05]} />
            <meshStandardMaterial color="#8B4513" />
          </mesh>
          <mesh position={[0.55, 0.2, 0.25]} castShadow>
            <boxGeometry args={[0.05, 0.4, 0.05]} />
            <meshStandardMaterial color="#8B4513" />
          </mesh>
          {/* Computer monitor */}
          <mesh position={[0, 0.65, 0]} castShadow>
            <boxGeometry args={[0.5, 0.3, 0.03]} />
            <meshStandardMaterial color="#333" />
          </mesh>
          <mesh position={[0, 0.65, 0.01]} castShadow>
            <planeGeometry args={[0.48, 0.28]} />
            <meshStandardMaterial
              color="#222"
              emissive="#007"
              emissiveIntensity={0.2}
            />
          </mesh>
          {/* Monitor stand */}
          <mesh position={[0, 0.5, 0]} castShadow>
            <boxGeometry args={[0.1, 0.1, 0.1]} />
            <meshStandardMaterial color="#555" />
          </mesh>
        </group>

        {/* Person silhouette for scale (simplified) */}
        <group position={[width + 0.5, 0.85, 1]}>
          {/* Body */}
          <mesh castShadow>
            <capsuleGeometry args={[0.2, 1.3, 4, 8]} />
            <meshStandardMaterial color="#555" />
          </mesh>
          {/* Head */}
          <mesh position={[0, 0.85, 0]} castShadow>
            <sphereGeometry args={[0.15, 16, 16]} />
            <meshStandardMaterial color="#555" />
          </mesh>
        </group>
      </Canvas>
    </div>
  );
}

interface DisplayModelProps {
  width: number;
  height: number;
  cabinetWidth: number;
  cabinetHeight: number;
  cabinetsWide: number;
  cabinetsHigh: number;
  pixelPitch: number;
}

function DisplayModel({
  width,
  height,
  cabinetWidth,
  cabinetHeight,
  cabinetsWide,
  cabinetsHigh,
  pixelPitch,
}: DisplayModelProps) {
  // Center the display
  const offsetX = -width / 2;
  const offsetY = 0;
  const offsetZ = 0;

  // Create cabinets array
  const cabinets = [];

  for (let y = 0; y < cabinetsHigh; y++) {
    for (let x = 0; x < cabinetsWide; x++) {
      // Skip cabinets that would extend beyond the requested dimensions
      if (x * cabinetWidth > width || y * cabinetHeight > height) continue;

      // Calculate actual cabinet width/height (might be smaller at edges)
      const actualWidth = Math.min(cabinetWidth, width - x * cabinetWidth);
      const actualHeight = Math.min(cabinetHeight, height - y * cabinetHeight);

      cabinets.push(
        <Cabinet
          key={`${x}-${y}`}
          position={[
            offsetX + x * cabinetWidth + actualWidth / 2,
            offsetY + y * cabinetHeight + actualHeight / 2,
            offsetZ,
          ]}
          width={actualWidth}
          height={actualHeight}
          depth={0.08} // Standard cabinet depth
          pixelPitch={pixelPitch}
        />
      );
    }
  }

  return <group>{cabinets}</group>;
}

interface CabinetProps {
  position: [number, number, number];
  width: number;
  height: number;
  depth: number;
  pixelPitch: number;
}

function Cabinet({ position, width, height, depth, pixelPitch }: CabinetProps) {
  return (
    <group position={position}>
      {/* Cabinet frame */}
      <mesh castShadow receiveShadow>
        <boxGeometry args={[width, height, depth]} />
        <meshStandardMaterial color="#333" />
      </mesh>

      {/* Display screen */}
      <mesh position={[0, 0, depth / 2 + 0.001]}>
        <planeGeometry args={[width * 0.98, height * 0.98]} />
        <meshStandardMaterial
          color="#111"
          emissive="#222"
          emissiveIntensity={0.5}
        />
      </mesh>

      {/* Simplified pixel representation */}
      <mesh position={[0, 0, depth / 2 + 0.002]}>
        <planeGeometry args={[width * 0.95, height * 0.95]} />
        <meshStandardMaterial
          color="#000"
          emissive="#007"
          emissiveIntensity={0.8}
        />
      </mesh>

      {/* Cabinet joints */}
      <mesh position={[width / 2 - 0.01, 0, 0]} castShadow>
        <boxGeometry args={[0.02, height, depth * 1.1]} />
        <meshStandardMaterial color="#222" />
      </mesh>

      <mesh position={[-width / 2 + 0.01, 0, 0]} castShadow>
        <boxGeometry args={[0.02, height, depth * 1.1]} />
        <meshStandardMaterial color="#222" />
      </mesh>

      <mesh position={[0, height / 2 - 0.01, 0]} castShadow>
        <boxGeometry args={[width, 0.02, depth * 1.1]} />
        <meshStandardMaterial color="#222" />
      </mesh>

      <mesh position={[0, -height / 2 + 0.01, 0]} castShadow>
        <boxGeometry args={[width, 0.02, depth * 1.1]} />
        <meshStandardMaterial color="#222" />
      </mesh>
    </group>
  );
}
