"use client";

import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, MapPin, Calendar, Users } from "lucide-react";

interface DealCardProps {
  id: string;
  destination: string;
  country: string;
  image: string;
  originalPrice: number;
  salePrice: number;
  discount: string;
  rating: number;
  reviews: number;
  description: string;
  duration?: string;
  type: "flight" | "package";
}

export function DealCard({
  id,
  destination,
  country,
  image,
  originalPrice,
  salePrice,
  discount,
  rating,
  reviews,
  description,
  duration,
  type
}: DealCardProps) {
  return (
    <div className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
      {/* Image Container */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={image}
          alt={destination}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />

        {/* Discount Badge */}
        <div className="absolute top-4 left-4">
          <Badge className="bg-accent text-white font-semibold px-3 py-1">
            {discount}
          </Badge>
        </div>

        {/* Type Badge */}
        <div className="absolute top-4 right-4">
          <Badge variant="secondary" className="bg-white/90 text-gray-800 font-medium">
            {type === "flight" ? "Flight" : "Package"}
          </Badge>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Header */}
        <div className="mb-3">
          <h3 className="heading text-xl font-semibold text-gray-900 mb-1">
            {destination}
          </h3>
          <div className="flex items-center text-gray-600 text-sm">
            <MapPin className="h-4 w-4 mr-1" />
            {country}
            {duration && (
              <>
                <span className="mx-2">•</span>
                <Calendar className="h-4 w-4 mr-1" />
                {duration}
              </>
            )}
          </div>
        </div>

        {/* Rating */}
        <div className="flex items-center mb-3">
          <div className="flex items-center text-amber-400">
            <Star className="h-4 w-4 fill-current" />
            <span className="ml-1 text-gray-900 font-medium">{rating}</span>
          </div>
          <span className="text-gray-500 text-sm ml-2">
            ({reviews.toLocaleString()} reviews)
          </span>
        </div>

        {/* Description */}
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {description}
        </p>

        {/* Price Section */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <span className="text-gray-500 line-through text-sm">
              ${originalPrice}
            </span>
            <span className="text-2xl font-bold text-gray-900">
              ${salePrice}
            </span>
          </div>
          <div className="text-right">
            <div className="text-xs text-gray-500">per person</div>
          </div>
        </div>

        {/* Action Button */}
        <Link href={`/deal/${id}`}>
          <Button className="w-full bg-primary hover:bg-primary/90 text-white font-medium">
            View Deal
          </Button>
        </Link>
      </div>
    </div>
  );
}

// Sample data for featured deals
export const featuredDeals: DealCardProps[] = [
  {
    id: "1",
    destination: "Paris",
    country: "France",
    image: "https://images.unsplash.com/photo-1502602898536-47ad22581b52?w=800&h=600&fit=crop",
    originalPrice: 650,
    salePrice: 450,
    discount: "-31%",
    rating: 4.8,
    reviews: 1204,
    description: "Experience the city of lights with direct flights from major US cities.",
    type: "flight"
  },
  {
    id: "2",
    destination: "Phuket",
    country: "Thailand",
    image: "https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?w=800&h=600&fit=crop",
    originalPrice: 890,
    salePrice: 640,
    discount: "-28%",
    rating: 4.7,
    reviews: 856,
    description: "Tropical paradise with pristine beaches and vibrant culture.",
    type: "flight"
  },
  {
    id: "3",
    destination: "Tokyo",
    country: "Japan",
    image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&h=600&fit=crop",
    originalPrice: 1200,
    salePrice: 820,
    discount: "-32%",
    rating: 4.9,
    reviews: 2341,
    description: "Discover modern Japan with its rich traditions and cutting-edge technology.",
    type: "flight"
  },
  {
    id: "4",
    destination: "Bali Escape",
    country: "Indonesia",
    image: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=800&h=600&fit=crop",
    originalPrice: 1450,
    salePrice: 1200,
    discount: "-17%",
    rating: 4.6,
    reviews: 432,
    description: "5-day spiritual retreat including flights, accommodation, and guided tours.",
    duration: "5 days",
    type: "package"
  },
  {
    id: "5",
    destination: "Alp Ski Adventure",
    country: "Switzerland",
    image: "https://images.unsplash.com/photo-1551524164-687a55dd1126?w=800&h=600&fit=crop",
    originalPrice: 2100,
    salePrice: 1900,
    discount: "-10%",
    rating: 4.8,
    reviews: 678,
    description: "Ultimate alpine skiing experience with luxury mountain accommodations.",
    duration: "7 days",
    type: "package"
  },
  {
    id: "6",
    destination: "Rome City Break",
    country: "Italy",
    image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800&h=600&fit=crop",
    originalPrice: 980,
    salePrice: 750,
    discount: "-23%",
    rating: 4.7,
    reviews: 1567,
    description: "Explore ancient Rome with guided tours of the Colosseum and Vatican.",
    duration: "4 days",
    type: "package"
  }
];