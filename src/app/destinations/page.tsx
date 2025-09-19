"use client";

import { useState } from "react";
import Image from "next/image";
import { Navigation } from "@/components/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Search,
  MapPin,
  Star,
  Thermometer,
  Calendar,
  Plane,
  TrendingUp,
  Filter
} from "lucide-react";

// Mock destination data
const destinations = [
  {
    id: "paris",
    name: "Paris",
    country: "France",
    continent: "Europe",
    image: "https://images.unsplash.com/photo-1502602898536-47ad22581b52?w=800&h=600&fit=crop",
    description: "The City of Light offers world-class museums, cuisine, and architecture",
    bestDeals: 3,
    avgPrice: 450,
    rating: 4.8,
    reviews: 12043,
    climate: "Temperate",
    bestTime: "Apr-Oct",
    timeZone: "CET",
    highlights: ["Eiffel Tower", "Louvre Museum", "Notre-Dame", "Champs-Élysées"]
  },
  {
    id: "tokyo",
    name: "Tokyo",
    country: "Japan",
    continent: "Asia",
    image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&h=600&fit=crop",
    description: "A fascinating blend of ultra-modern and traditional culture",
    bestDeals: 5,
    avgPrice: 820,
    rating: 4.9,
    reviews: 8934,
    climate: "Subtropical",
    bestTime: "Mar-May, Sep-Nov",
    timeZone: "JST",
    highlights: ["Shibuya Crossing", "Senso-ji Temple", "Tokyo Skytree", "Tsukiji Market"]
  },
  {
    id: "bali",
    name: "Bali",
    country: "Indonesia",
    continent: "Asia",
    image: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=800&h=600&fit=crop",
    description: "Tropical paradise known for its beaches, temples, and culture",
    bestDeals: 7,
    avgPrice: 680,
    rating: 4.7,
    reviews: 5621,
    climate: "Tropical",
    bestTime: "Apr-Oct",
    timeZone: "WITA",
    highlights: ["Uluwatu Temple", "Rice Terraces", "Mount Batur", "Seminyak Beach"]
  },
  {
    id: "rome",
    name: "Rome",
    country: "Italy",
    continent: "Europe",
    image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800&h=600&fit=crop",
    description: "The Eternal City with ancient history and incredible cuisine",
    bestDeals: 4,
    avgPrice: 520,
    rating: 4.8,
    reviews: 9876,
    climate: "Mediterranean",
    bestTime: "Apr-Jun, Sep-Oct",
    timeZone: "CET",
    highlights: ["Colosseum", "Vatican City", "Trevi Fountain", "Roman Forum"]
  },
  {
    id: "dubai",
    name: "Dubai",
    country: "UAE",
    continent: "Asia",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&h=600&fit=crop",
    description: "Modern metropolis with luxury shopping and stunning architecture",
    bestDeals: 6,
    avgPrice: 750,
    rating: 4.6,
    reviews: 7234,
    climate: "Desert",
    bestTime: "Nov-Mar",
    timeZone: "GST",
    highlights: ["Burj Khalifa", "Dubai Mall", "Palm Jumeirah", "Desert Safari"]
  },
  {
    id: "santorini",
    name: "Santorini",
    country: "Greece",
    continent: "Europe",
    image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800&h=600&fit=crop",
    description: "Stunning Greek island famous for its sunsets and white buildings",
    bestDeals: 2,
    avgPrice: 890,
    rating: 4.9,
    reviews: 4532,
    climate: "Mediterranean",
    bestTime: "Apr-Oct",
    timeZone: "EET",
    highlights: ["Oia Sunset", "Fira Town", "Red Beach", "Wine Tasting"]
  }
];

const continents = ["All", "Europe", "Asia", "Africa", "North America", "South America", "Oceania"];

export default function DestinationsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedContinent, setSelectedContinent] = useState("All");
  const [sortBy, setSortBy] = useState("popular");

  const filteredDestinations = destinations
    .filter(dest =>
      dest.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      dest.country.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter(dest => selectedContinent === "All" || dest.continent === selectedContinent)
    .sort((a, b) => {
      switch (sortBy) {
        case "price-low":
          return a.avgPrice - b.avgPrice;
        case "price-high":
          return b.avgPrice - a.avgPrice;
        case "rating":
          return b.rating - a.rating;
        default:
          return b.reviews - a.reviews; // popular
      }
    });

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary to-blue-600 text-white py-20">
        <div className="absolute inset-0 world-map-bg opacity-10"></div>
        <div className="container mx-auto px-4 relative">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="heading text-4xl md:text-5xl font-bold mb-4">
              Explore Amazing Destinations
            </h1>
            <p className="text-xl opacity-90 mb-8">
              Discover your next adventure from our curated collection of world-class destinations
            </p>

            {/* Search and Filter Bar */}
            <div className="bg-white rounded-2xl p-6 shadow-2xl">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Search destinations..."
                    className="pl-10 h-12 text-gray-900"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>

                <Select value={selectedContinent} onValueChange={setSelectedContinent}>
                  <SelectTrigger className="h-12 text-gray-900">
                    <SelectValue placeholder="All Continents" />
                  </SelectTrigger>
                  <SelectContent>
                    {continents.map((continent) => (
                      <SelectItem key={continent} value={continent}>
                        {continent}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="h-12 text-gray-900">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="popular">Most Popular</SelectItem>
                    <SelectItem value="rating">Highest Rated</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                  </SelectContent>
                </Select>

                <Button className="h-12 bg-accent hover:bg-accent/90 text-white">
                  <Filter className="h-4 w-4 mr-2" />
                  More Filters
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Results Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="heading text-2xl font-bold text-gray-900">
                {filteredDestinations.length} Destinations Found
              </h2>
              <p className="text-gray-600">
                {selectedContinent !== "All" && `Showing destinations in ${selectedContinent}`}
              </p>
            </div>
          </div>

          {/* Destination Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDestinations.map((destination) => (
              <Card key={destination.id} className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={destination.image}
                    alt={destination.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />

                  {/* Overlay Info */}
                  <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
                    <Badge className="bg-primary text-white">
                      {destination.bestDeals} deals
                    </Badge>
                    <div className="bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-medium">
                      ${destination.avgPrice}
                    </div>
                  </div>

                  {/* Rating Badge */}
                  <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1">
                    <Star className="h-4 w-4 text-amber-400 fill-current" />
                    <span className="text-sm font-medium">{destination.rating}</span>
                  </div>
                </div>

                <CardContent className="p-6">
                  <div className="mb-4">
                    <h3 className="heading text-xl font-bold text-gray-900 mb-1">
                      {destination.name}
                    </h3>
                    <div className="flex items-center text-gray-600 text-sm mb-2">
                      <MapPin className="h-4 w-4 mr-1" />
                      {destination.country}, {destination.continent}
                    </div>
                    <p className="text-gray-600 text-sm line-clamp-2">
                      {destination.description}
                    </p>
                  </div>

                  {/* Quick Facts */}
                  <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                    <div className="flex items-center gap-2">
                      <Thermometer className="h-4 w-4 text-gray-500" />
                      <span className="text-gray-700">{destination.climate}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-gray-500" />
                      <span className="text-gray-700">{destination.bestTime}</span>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 text-sm mb-2">Top Attractions</h4>
                    <div className="flex flex-wrap gap-1">
                      {destination.highlights.slice(0, 3).map((highlight, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {highlight}
                        </Badge>
                      ))}
                      {destination.highlights.length > 3 && (
                        <Badge variant="secondary" className="text-xs">
                          +{destination.highlights.length - 3} more
                        </Badge>
                      )}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2">
                    <Button className="flex-1 bg-primary hover:bg-primary/90">
                      <Plane className="h-4 w-4 mr-2" />
                      View Deals
                    </Button>
                    <Button variant="outline" size="sm">
                      <TrendingUp className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-white">
              Load More Destinations
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="heading text-3xl font-bold mb-4">
            Can't Find Your Dream Destination?
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Get in touch with our travel experts. We'll help you find the perfect getaway that matches your preferences and budget.
          </p>
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-white">
            Contact Travel Expert
          </Button>
        </div>
      </section>
    </div>
  );
}