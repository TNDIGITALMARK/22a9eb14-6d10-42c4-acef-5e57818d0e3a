"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import { Navigation } from "@/components/navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Star,
  MapPin,
  Calendar,
  Clock,
  Users,
  Wifi,
  Car,
  Coffee,
  Shield,
  Phone,
  Mail,
  Check,
  TrendingUp
} from "lucide-react";

// Mock data - in a real app, this would come from an API
const dealDetails = {
  "1": {
    id: "1",
    destination: "Paris",
    country: "France",
    image: "https://images.unsplash.com/photo-1502602898536-47ad22581b52?w=1200&h=800&fit=crop",
    originalPrice: 650,
    salePrice: 450,
    discount: "-31%",
    rating: 4.8,
    reviews: 1204,
    description: "Experience the city of lights with direct flights from major US cities. Enjoy world-class cuisine, iconic landmarks, and rich cultural heritage.",
    type: "flight" as const,
    duration: "Round-trip",
    departure: "New York (JFK)",
    airline: "Air France",
    includes: ["Direct flights", "Seat selection", "1 checked bag", "In-flight meals"],
    highlights: [
      "Visit the Eiffel Tower and Louvre Museum",
      "Stroll through Montmartre and Sacré-Cœur",
      "Seine River cruise included",
      "Optional day trip to Versailles"
    ],
    amenities: [
      { icon: Wifi, name: "Free WiFi" },
      { icon: Coffee, name: "Complimentary meals" },
      { icon: Shield, name: "Travel insurance" },
      { icon: Phone, name: "24/7 support" }
    ]
  }
};

export default function DealDetailPage() {
  const params = useParams();
  const dealId = params.id as string;
  const deal = dealDetails[dealId as keyof typeof dealDetails];

  if (!deal) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold mb-4">Deal Not Found</h1>
          <p className="text-gray-600 mb-8">The deal you're looking for doesn't exist.</p>
          <Button onClick={() => window.history.back()}>Go Back</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      {/* Hero Image Section */}
      <div className="relative h-96 md:h-[500px] overflow-hidden">
        <Image
          src={deal.image}
          alt={deal.destination}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30" />

        {/* Floating deal card */}
        <div className="absolute bottom-6 left-6 right-6 md:left-auto md:right-6 md:w-96">
          <Card className="backdrop-blur-sm bg-white/95">
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h1 className="heading text-2xl font-bold text-gray-900">{deal.destination}</h1>
                  <p className="text-gray-600 flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    {deal.country}
                  </p>
                </div>
                <Badge className="bg-accent text-white">
                  {deal.discount}
                </Badge>
              </div>

              <div className="flex items-center mb-4">
                <div className="flex items-center text-amber-400">
                  <Star className="h-4 w-4 fill-current" />
                  <span className="ml-1 text-gray-900 font-medium">{deal.rating}</span>
                </div>
                <span className="text-gray-500 text-sm ml-2">
                  ({deal.reviews.toLocaleString()} reviews)
                </span>
              </div>

              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-gray-500 line-through text-lg">
                  ${deal.originalPrice}
                </span>
                <span className="text-3xl font-bold text-gray-900">
                  ${deal.salePrice}
                </span>
                <span className="text-gray-500 text-sm">per person</span>
              </div>

              <Button className="w-full bg-primary hover:bg-primary/90 text-white font-semibold h-12">
                Book Now
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Deal Details */}
          <div className="lg:col-span-2 space-y-8">
            {/* Overview */}
            <Card>
              <CardHeader>
                <CardTitle className="heading text-xl">Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed mb-6">
                  {deal.description}
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Trip Details</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-gray-500" />
                        <span>{deal.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-gray-500" />
                        <span>From {deal.departure}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4 text-gray-500" />
                        <span>Airline: {deal.airline}</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">What's Included</h4>
                    <ul className="space-y-2 text-sm">
                      {deal.includes.map((item, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <Check className="h-4 w-4 text-green-600" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Tabs for additional info */}
            <Tabs defaultValue="highlights" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="highlights">Highlights</TabsTrigger>
                <TabsTrigger value="amenities">Amenities</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
              </TabsList>

              <TabsContent value="highlights">
                <Card>
                  <CardHeader>
                    <CardTitle className="heading">Trip Highlights</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {deal.highlights.map((highlight, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Star className="h-3 w-3 text-primary" />
                          </div>
                          <span className="text-gray-700">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="amenities">
                <Card>
                  <CardHeader>
                    <CardTitle className="heading">Included Amenities</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {deal.amenities.map((amenity, index) => (
                        <div key={index} className="text-center p-4 bg-gray-50 rounded-lg">
                          <amenity.icon className="h-8 w-8 mx-auto mb-2 text-primary" />
                          <div className="text-sm font-medium">{amenity.name}</div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="reviews">
                <Card>
                  <CardHeader>
                    <CardTitle className="heading">Customer Reviews</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {/* Sample reviews */}
                      <div className="border-b border-gray-200 pb-6">
                        <div className="flex items-center gap-4 mb-3">
                          <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
                          <div>
                            <div className="font-medium">Sarah M.</div>
                            <div className="flex items-center gap-1 text-sm">
                              <Star className="h-4 w-4 fill-current text-amber-400" />
                              <span>5.0</span>
                              <span className="text-gray-500 ml-2">2 weeks ago</span>
                            </div>
                          </div>
                        </div>
                        <p className="text-gray-700">
                          Amazing trip to Paris! The flight was smooth and the entire experience exceeded expectations.
                          Highly recommend this deal for anyone wanting to visit the City of Light.
                        </p>
                      </div>

                      <div className="border-b border-gray-200 pb-6">
                        <div className="flex items-center gap-4 mb-3">
                          <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
                          <div>
                            <div className="font-medium">Michael R.</div>
                            <div className="flex items-center gap-1 text-sm">
                              <Star className="h-4 w-4 fill-current text-amber-400" />
                              <span>4.8</span>
                              <span className="text-gray-500 ml-2">1 month ago</span>
                            </div>
                          </div>
                        </div>
                        <p className="text-gray-700">
                          Great value for money. The booking process was seamless and customer service was helpful
                          throughout the entire journey.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Right Column - Booking Card & Similar Deals */}
          <div className="space-y-6">
            {/* Price Trend Card */}
            <Card>
              <CardHeader>
                <CardTitle className="heading flex items-center gap-2">
                  <TrendingUp className="h-5 w-5" />
                  Price Trend
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center mb-4">
                  <div className="text-2xl font-bold text-green-600">↓ 15%</div>
                  <div className="text-sm text-gray-600">Price dropped this week</div>
                </div>
                <div className="bg-green-50 p-3 rounded-lg">
                  <div className="text-sm text-green-800 font-medium">Great Time to Book!</div>
                  <div className="text-sm text-green-700">Prices are trending down for this route.</div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Support */}
            <Card>
              <CardHeader>
                <CardTitle className="heading">Need Help?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  <Phone className="h-5 w-5 text-primary" />
                  <div>
                    <div className="font-medium">Call Us</div>
                    <div className="text-sm text-gray-600">1-800-FLIGHTS</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  <Mail className="h-5 w-5 text-primary" />
                  <div>
                    <div className="font-medium">Email Support</div>
                    <div className="text-sm text-gray-600">help@flightdeals.com</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}