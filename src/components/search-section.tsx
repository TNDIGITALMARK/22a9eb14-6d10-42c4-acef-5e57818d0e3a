"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, MapPin, Users, Plane } from "lucide-react";

export function SearchSection() {
  const [tripType, setTripType] = useState("round-trip");

  return (
    <section className="relative bg-gradient-to-br from-primary to-blue-600 text-white py-20">
      <div className="absolute inset-0 world-map-bg opacity-10"></div>
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-12">
          <h1 className="heading text-4xl md:text-6xl font-bold mb-4">
            Find Your Next Adventure
          </h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Discover amazing flight deals and vacation packages to destinations around the world
          </p>
        </div>

        {/* Search Form */}
        <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8 max-w-5xl mx-auto">
          {/* Trip Type Selector */}
          <div className="flex flex-wrap gap-4 mb-6">
            {[
              { id: "round-trip", label: "Round Trip" },
              { id: "one-way", label: "One Way" },
              { id: "multi-city", label: "Multi-City" }
            ].map((option) => (
              <button
                key={option.id}
                onClick={() => setTripType(option.id)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  tripType === option.id
                    ? "bg-primary text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>

          {/* Search Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {/* From */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 flex items-center gap-1">
                <Plane className="h-4 w-4" />
                From
              </label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Departure city"
                  className="pl-10 h-12"
                  defaultValue="New York (NYC)"
                />
              </div>
            </div>

            {/* To */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 flex items-center gap-1">
                <MapPin className="h-4 w-4" />
                To
              </label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Destination city"
                  className="pl-10 h-12"
                />
              </div>
            </div>

            {/* Dates */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                Dates
              </label>
              <Input
                type="date"
                className="h-12"
              />
            </div>

            {/* Passengers */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 flex items-center gap-1">
                <Users className="h-4 w-4" />
                Passengers
              </label>
              <Select defaultValue="1">
                <SelectTrigger className="h-12">
                  <SelectValue placeholder="Select passengers" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">1 Passenger</SelectItem>
                  <SelectItem value="2">2 Passengers</SelectItem>
                  <SelectItem value="3">3 Passengers</SelectItem>
                  <SelectItem value="4">4+ Passengers</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Search Button */}
          <Button className="w-full h-14 text-lg font-semibold bg-accent hover:bg-accent/90">
            Find Deals
          </Button>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 text-center">
          <div>
            <div className="text-3xl font-bold mb-2">42</div>
            <div className="opacity-90">Flight Deals</div>
          </div>
          <div>
            <div className="text-3xl font-bold mb-2">65%</div>
            <div className="opacity-90">Max Savings</div>
          </div>
          <div>
            <div className="text-3xl font-bold mb-2">4.8★</div>
            <div className="opacity-90">Customer Rating</div>
          </div>
        </div>
      </div>
    </section>
  );
}