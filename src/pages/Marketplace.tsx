import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";

interface Product {
  id: number;
  title: string;
  category: string;
  description: string;
  price: number;
  originalPrice: number;
  reviews: number;
  rating: number;
  badge?: string;
  daysLeft?: number;
}

const products: Product[] = [
  {
    id: 1,
    title: "Analytics Pro",
    category: "Analytics",
    description: "Advanced analytics and reporting platform for growing businesses",
    price: 59,
    originalPrice: 99,
    reviews: 34,
    rating: 4.8,
    badge: "TRENDING",
    daysLeft: 3
  },
  {
    id: 2,
    title: "TaskFlow",
    category: "Productivity",
    description: "Streamline your workflow with automated task management",
    price: 49,
    originalPrice: 79,
    reviews: 128,
    rating: 4.9
  },
  {
    id: 3,
    title: "DevTools Suite",
    category: "Development",
    description: "Complete development toolkit for modern web applications",
    price: 79,
    originalPrice: 149,
    reviews: 56,
    rating: 4.7,
    daysLeft: 5
  }
];

const categories = [
  "All",
  "Analytics",
  "Productivity",
  "Development",
  "Marketing",
  "Design",
  "Finance"
];

const Marketplace = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("recommended");

  const filteredProducts = selectedCategory === "All" 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold mb-2">Marketplace</h1>
            <p className="text-muted-foreground">
              Discover powerful tools and solutions
            </p>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground">Sort by:</span>
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="recommended">Recommended</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="rating">Highest Rated</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-12 gap-8">
          {/* Sidebar */}
          <div className="col-span-3 space-y-6">
            <div className="glass p-6 space-y-4">
              <h3 className="font-semibold text-lg">Categories</h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "secondary" : "ghost"}
                    className="w-full justify-start"
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="col-span-9">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <Card key={product.id} className="glass glass-hover">
                  <CardHeader>
                    {product.badge && (
                      <Badge className="w-fit mb-2" variant="secondary">
                        {product.badge}
                      </Badge>
                    )}
                    <CardTitle>{product.title}</CardTitle>
                    <CardDescription>in {product.category}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      {product.description}
                    </p>
                    {product.daysLeft && (
                      <Badge variant="destructive" className="mb-2">
                        Deal ends in {product.daysLeft} days
                      </Badge>
                    )}
                    <div className="flex items-center gap-2">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(product.rating)
                              ? "fill-primary text-primary"
                              : "fill-muted text-muted"
                          }`}
                        />
                      ))}
                      <span className="text-sm text-muted-foreground">
                        ({product.reviews})
                      </span>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-bold">${product.price}</span>
                      <span className="text-sm text-muted-foreground line-through">
                        ${product.originalPrice}
                      </span>
                    </div>
                    <Button>View Details</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Marketplace;