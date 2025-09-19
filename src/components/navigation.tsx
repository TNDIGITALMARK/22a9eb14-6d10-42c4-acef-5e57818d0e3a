"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Plane, MapPin, Hotel, Car, Calendar } from "lucide-react";

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 font-bold text-xl text-primary">
            <div className="p-2 bg-primary text-white rounded-lg">
              <Plane className="h-5 w-5" />
            </div>
            <span className="heading">FlightDeal Finder</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="flex items-center gap-2 text-gray-700 hover:text-primary transition-colors"
            >
              <Plane className="h-4 w-4" />
              Flights
            </Link>
            <Link
              href="/destinations"
              className="flex items-center gap-2 text-gray-700 hover:text-primary transition-colors"
            >
              <MapPin className="h-4 w-4" />
              Destinations
            </Link>
            <Link
              href="/hotels"
              className="flex items-center gap-2 text-gray-700 hover:text-primary transition-colors"
            >
              <Hotel className="h-4 w-4" />
              Hotels
            </Link>
            <Link
              href="/packages"
              className="flex items-center gap-2 text-gray-700 hover:text-primary transition-colors"
            >
              <Calendar className="h-4 w-4" />
              Packages
            </Link>
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" className="text-gray-700">
              Sign In
            </Button>
            <Button className="bg-primary hover:bg-primary/90">
              Sign Up
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-700"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <Link
                href="/"
                className="flex items-center gap-2 text-gray-700 hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <Plane className="h-4 w-4" />
                Flights
              </Link>
              <Link
                href="/destinations"
                className="flex items-center gap-2 text-gray-700 hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <MapPin className="h-4 w-4" />
                Destinations
              </Link>
              <Link
                href="/hotels"
                className="flex items-center gap-2 text-gray-700 hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <Hotel className="h-4 w-4" />
                Hotels
              </Link>
              <Link
                href="/packages"
                className="flex items-center gap-2 text-gray-700 hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <Calendar className="h-4 w-4" />
                Packages
              </Link>
              <div className="pt-4 border-t border-gray-200 space-y-2">
                <Button variant="ghost" className="w-full justify-start text-gray-700">
                  Sign In
                </Button>
                <Button className="w-full bg-primary hover:bg-primary/90">
                  Sign Up
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}