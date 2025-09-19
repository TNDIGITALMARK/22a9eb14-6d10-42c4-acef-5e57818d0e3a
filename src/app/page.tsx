export const dynamic = 'force-dynamic'

import { Navigation } from "@/components/navigation";
import { SearchSection } from "@/components/search-section";
import { DealCard, featuredDeals } from "@/components/deal-card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, TrendingUp, Globe, Shield } from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      {/* Hero Section with Search */}
      <SearchSection />

      {/* Featured Deals Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="heading text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Deals
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover our hand-picked selection of the best flight deals and vacation packages
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredDeals.map((deal) => (
              <DealCard key={deal.id} {...deal} />
            ))}
          </div>

          <div className="text-center">
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
              View All Deals
            </Button>
          </div>
        </div>
      </section>

      {/* Vacation Packages Showcase */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-accent text-white">Exclusive Packages</Badge>
            <h2 className="heading text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Unlock Exclusive Offers
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Get access to member-only deals, exclusive vacation packages, and insider savings
            </p>
          </div>

          <div className="bg-primary rounded-2xl p-8 md:p-12 text-white max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="heading text-2xl md:text-3xl font-bold mb-4">
                  Complete Travel Solutions
                </h3>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                      <span className="text-xs font-semibold">✓</span>
                    </div>
                    Flight + Hotel Packages
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                      <span className="text-xs font-semibold">✓</span>
                    </div>
                    Car Rental Deals
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                      <span className="text-xs font-semibold">✓</span>
                    </div>
                    Activity & Experience Bookings
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                      <span className="text-xs font-semibold">✓</span>
                    </div>
                    24/7 Travel Support
                  </li>
                </ul>
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-white">
                  Get Mobile App
                </Button>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 rounded-xl p-4 text-center backdrop-blur-sm">
                  <Globe className="h-8 w-8 mx-auto mb-2" />
                  <div className="text-sm">Global Coverage</div>
                </div>
                <div className="bg-white/10 rounded-xl p-4 text-center backdrop-blur-sm">
                  <Shield className="h-8 w-8 mx-auto mb-2" />
                  <div className="text-sm">Secure Booking</div>
                </div>
                <div className="bg-white/10 rounded-xl p-4 text-center backdrop-blur-sm">
                  <Star className="h-8 w-8 mx-auto mb-2" />
                  <div className="text-sm">Best Rated</div>
                </div>
                <div className="bg-white/10 rounded-xl p-4 text-center backdrop-blur-sm">
                  <TrendingUp className="h-8 w-8 mx-auto mb-2" />
                  <div className="text-sm">Price Tracking</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="p-2 bg-primary rounded-lg">
                  <Globe className="h-5 w-5" />
                </div>
                <span className="heading font-bold text-lg">FlightDeal Finder</span>
              </div>
              <p className="text-gray-400">
                Your trusted partner for finding the best flight deals and vacation packages worldwide.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Twitter</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Facebook</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Newsletter</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 FlightDeal Finder. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}