import { motion } from "motion/react";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { AnimatedSection } from "../ui/animated-section";
import { TouchCarousel } from "../ui/touch-carousel";
import React from "react";

interface ProductsPageProps {
  onPageChange: (page: string) => void;
}

export function ProductsPage({ onPageChange }: ProductsPageProps) {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-white relative overflow-hidden">
        <div className="absolute top-10 right-10 w-32 h-32 rounded-full bg-[#018136]/5"></div>
        <div className="absolute bottom-20 left-20 w-48 h-48 rounded-full bg-[#FFDF58]/10"></div>

        <div className="relative max-w-6xl mx-auto px-6">
          <div className="text-center">
            <Badge className="bg-[#018136]/10 text-[#018136] px-4 py-2 mb-6">OUR PRODUCTS</Badge>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Comprehensive ERP Solutions for Every Business Size
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From small businesses to large enterprises, we offer proven ERP solutions
              that streamline operations, improve efficiency, and drive growth.
            </p>
          </div>
        </div>
      </section>

      {/* Product Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-900">
                Why Choose Our ERP Solutions?
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our ERP products are designed to integrate seamlessly with your existing processes,
                providing comprehensive business management capabilities that grow with your organization.
              </p>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 rounded-full bg-[#018136] flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-900 font-medium">Financial Management & Accounting</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 rounded-full bg-[#018136] flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-900 font-medium">Inventory Control & Supply Chain</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 rounded-full bg-[#018136] flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-900 font-medium">Customer Relationship Management</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 rounded-full bg-[#018136] flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-900 font-medium">Advanced Reporting & Analytics</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white p-8 rounded-3xl shadow-xl">
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#018136] mb-2">4</div>
                    <div className="text-gray-600">Proven ERP Solutions</div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-xl font-bold text-[#018136]">50+</div>
                      <div className="text-xs text-gray-600">Industries</div>
                    </div>
                    <div>
                      <div className="text-xl font-bold text-[#018136]">1000+</div>
                      <div className="text-xs text-gray-600">Deployments</div>
                    </div>
                  </div>
                  <div className="text-center">
                    <Badge className="bg-[#FFDF58]/20 text-gray-800">95% Success Rate</Badge>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Details */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-white">
        <div className="max-w-6xl mx-auto px-6">
          <Tabs defaultValue="sage300" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-12">
              <TabsTrigger value="sage300">Sage 300</TabsTrigger>
              <TabsTrigger value="sage200">Sage 200</TabsTrigger>
              <TabsTrigger value="zoho">Zoho Books</TabsTrigger>
              <TabsTrigger value="busy">Busy Accounting</TabsTrigger>
            </TabsList>

            {/* Sage 300 */}
            <TabsContent value="sage300" className="space-y-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <Badge className="bg-[#018136]/10 text-[#018136]">ENTERPRISE SOLUTION</Badge>
                  <h3 className="text-3xl font-bold text-gray-900">Sage 300</h3>
                  <p className="text-lg text-gray-600">
                    Comprehensive enterprise-level ERP solution designed for large organizations
                    with complex business requirements and multiple locations.
                  </p>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-900">Key Features:</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 rounded-full bg-[#018136]"></div>
                        <span>Multi-company & multi-currency support</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 rounded-full bg-[#018136]"></div>
                        <span>Advanced manufacturing & distribution</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 rounded-full bg-[#018136]"></div>
                        <span>Comprehensive financial management</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 rounded-full bg-[#018136]"></div>
                        <span>Scalable architecture for growth</span>
                      </li>
                    </ul>
                  </div>

                  <Button className="bg-[#018136] hover:bg-[#016429] text-white">
                    Learn More About Sage 300
                  </Button>
                </div>

                <Card className="p-8">
                  <CardContent className="p-0 space-y-6">
                    <h4 className="font-semibold text-gray-900">Perfect For:</h4>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <Badge className="bg-[#FFDF58]/20 text-gray-800">Enterprise</Badge>
                        <span className="text-sm text-gray-600">Large organizations (500+ employees)</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Badge className="bg-[#018136]/10 text-[#018136]">Manufacturing</Badge>
                        <span className="text-sm text-gray-600">Complex manufacturing processes</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Badge className="bg-[#FFDF58]/20 text-gray-800">Multi-Location</Badge>
                        <span className="text-sm text-gray-600">Multiple offices/warehouses</span>
                      </div>
                    </div>

                    <div className="pt-4 border-t">
                      <h5 className="font-medium text-gray-900 mb-2">Implementation Timeline:</h5>
                      <p className="text-sm text-gray-600">6-12 months for full deployment</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Sage 200 */}
            <TabsContent value="sage200" className="space-y-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <Badge className="bg-[#FFDF58]/20 text-gray-800">MID-MARKET SOLUTION</Badge>
                  <h3 className="text-3xl font-bold text-gray-900">Sage 200</h3>
                  <p className="text-lg text-gray-600">
                    Perfect mid-market ERP solution for growing businesses that need robust
                    functionality without enterprise-level complexity.
                  </p>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-900">Key Features:</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 rounded-full bg-[#018136]"></div>
                        <span>Integrated accounting & business management</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 rounded-full bg-[#018136]"></div>
                        <span>Customizable workflows & reporting</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 rounded-full bg-[#018136]"></div>
                        <span>CRM integration & customer management</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 rounded-full bg-[#018136]"></div>
                        <span>Mobile access & cloud deployment</span>
                      </li>
                    </ul>
                  </div>

                  <Button className="bg-[#018136] hover:bg-[#016429] text-white">
                    Learn More About Sage 200
                  </Button>
                </div>

                <Card className="p-8">
                  <CardContent className="p-0 space-y-6">
                    <h4 className="font-semibold text-gray-900">Perfect For:</h4>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <Badge className="bg-[#FFDF58]/20 text-gray-800">Growing Business</Badge>
                        <span className="text-sm text-gray-600">50-500 employees</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Badge className="bg-[#018136]/10 text-[#018136]">Distribution</Badge>
                        <span className="text-sm text-gray-600">Wholesale & distribution</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Badge className="bg-[#FFDF58]/20 text-gray-800">Services</Badge>
                        <span className="text-sm text-gray-600">Professional services firms</span>
                      </div>
                    </div>

                    <div className="pt-4 border-t">
                      <h5 className="font-medium text-gray-900 mb-2">Implementation Timeline:</h5>
                      <p className="text-sm text-gray-600">3-6 months for full deployment</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Zoho Books */}
            <TabsContent value="zoho" className="space-y-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <Badge className="bg-[#018136]/10 text-[#018136]">CLOUD-BASED SOLUTION</Badge>
                  <h3 className="text-3xl font-bold text-gray-900">Zoho Books</h3>
                  <p className="text-lg text-gray-600">
                    Modern cloud-based accounting solution with AI-powered automation,
                    perfect for businesses seeking flexible, scalable financial management.
                  </p>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-900">Key Features:</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 rounded-full bg-[#018136]"></div>
                        <span>AI-powered expense categorization</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 rounded-full bg-[#018136]"></div>
                        <span>Automated invoicing & payment reminders</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 rounded-full bg-[#018136]"></div>
                        <span>Real-time collaboration & access</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 rounded-full bg-[#018136]"></div>
                        <span>1000+ third-party integrations</span>
                      </li>
                    </ul>
                  </div>

                  <Button className="bg-[#018136] hover:bg-[#016429] text-white">
                    Learn More About Zoho Books
                  </Button>
                </div>

                <Card className="p-8">
                  <CardContent className="p-0 space-y-6">
                    <h4 className="font-semibold text-gray-900">Perfect For:</h4>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <Badge className="bg-[#FFDF58]/20 text-gray-800">Startups</Badge>
                        <span className="text-sm text-gray-600">Fast-growing startups</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Badge className="bg-[#018136]/10 text-[#018136]">E-commerce</Badge>
                        <span className="text-sm text-gray-600">Online businesses</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Badge className="bg-[#FFDF58]/20 text-gray-800">Remote Teams</Badge>
                        <span className="text-sm text-gray-600">Distributed workforces</span>
                      </div>
                    </div>

                    <div className="pt-4 border-t">
                      <h5 className="font-medium text-gray-900 mb-2">Implementation Timeline:</h5>
                      <p className="text-sm text-gray-600">2-4 weeks for full setup</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Busy Accounting */}
            <TabsContent value="busy" className="space-y-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <Badge className="bg-[#FFDF58]/20 text-gray-800">SME FOCUSED</Badge>
                  <h3 className="text-3xl font-bold text-gray-900">Busy Accounting</h3>
                  <p className="text-lg text-gray-600">
                    User-friendly accounting solution designed specifically for small and
                    medium enterprises with industry-specific modules and local compliance.
                  </p>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-900">Key Features:</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 rounded-full bg-[#018136]"></div>
                        <span>GST-compliant invoicing & returns</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 rounded-full bg-[#018136]"></div>
                        <span>Industry-specific business modules</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 rounded-full bg-[#018136]"></div>
                        <span>Inventory management & barcode support</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 rounded-full bg-[#018136]"></div>
                        <span>Multi-location & multi-user support</span>
                      </li>
                    </ul>
                  </div>

                  <Button className="bg-[#018136] hover:bg-[#016429] text-white">
                    Learn More About Busy Accounting
                  </Button>
                </div>

                <Card className="p-8">
                  <CardContent className="p-0 space-y-6">
                    <h4 className="font-semibold text-gray-900">Perfect For:</h4>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <Badge className="bg-[#FFDF58]/20 text-gray-800">SMEs</Badge>
                        <span className="text-sm text-gray-600">5-50 employees</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Badge className="bg-[#018136]/10 text-[#018136]">Retail</Badge>
                        <span className="text-sm text-gray-600">Retail & trading businesses</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Badge className="bg-[#FFDF58]/20 text-gray-800">Local Business</Badge>
                        <span className="text-sm text-gray-600">India-focused compliance</span>
                      </div>
                    </div>

                    <div className="pt-4 border-t">
                      <h5 className="font-medium text-gray-900 mb-2">Implementation Timeline:</h5>
                      <p className="text-sm text-gray-600">1-3 weeks for full setup</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Compare Our ERP Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Find the perfect fit for your business size and industry requirements
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gradient-to-r from-[#018136]/5 to-[#FFDF58]/5">
                    <th className="text-left py-6 px-8 font-semibold text-gray-900">Features</th>
                    <th className="text-center py-6 px-8 font-semibold text-gray-900">Sage 300</th>
                    <th className="text-center py-6 px-8 font-semibold text-gray-900">Sage 200</th>
                    <th className="text-center py-6 px-8 font-semibold text-gray-900">Zoho Books</th>
                    <th className="text-center py-6 px-8 font-semibold text-gray-900">Busy Accounting</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr>
                    <td className="py-4 px-8 font-medium text-gray-900">Best For</td>
                    <td className="py-4 px-8 text-center text-sm">Large Enterprise</td>
                    <td className="py-4 px-8 text-center text-sm">Mid-Market</td>
                    <td className="py-4 px-8 text-center text-sm">Startups/Cloud</td>
                    <td className="py-4 px-8 text-center text-sm">SMEs</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-8 font-medium text-gray-900">User Range</td>
                    <td className="py-4 px-8 text-center text-sm">500+ Users</td>
                    <td className="py-4 px-8 text-center text-sm">50-500 Users</td>
                    <td className="py-4 px-8 text-center text-sm">10-100 Users</td>
                    <td className="py-4 px-8 text-center text-sm">5-50 Users</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-8 font-medium text-gray-900">Multi-Currency</td>
                    <td className="py-4 px-8 text-center">
                      <div className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#018136]">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </td>
                    <td className="py-4 px-8 text-center">
                      <div className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#018136]">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </td>
                    <td className="py-4 px-8 text-center">
                      <div className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#018136]">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </td>
                    <td className="py-4 px-8 text-center">
                      <div className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-gray-300">
                        <svg className="w-3 h-3 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 px-8 font-medium text-gray-900">Cloud Deployment</td>
                    <td className="py-4 px-8 text-center">
                      <div className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#018136]">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </td>
                    <td className="py-4 px-8 text-center">
                      <div className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#018136]">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </td>
                    <td className="py-4 px-8 text-center">
                      <div className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#018136]">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </td>
                    <td className="py-4 px-8 text-center">
                      <div className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#018136]">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 px-8 font-medium text-gray-900">Implementation Time</td>
                    <td className="py-4 px-8 text-center text-sm">6-12 months</td>
                    <td className="py-4 px-8 text-center text-sm">3-6 months</td>
                    <td className="py-4 px-8 text-center text-sm">2-4 weeks</td>
                    <td className="py-4 px-8 text-center text-sm">1-3 weeks</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#018136]/5 via-white to-[#FFDF58]/10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Ready to Choose Your ERP Solution?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Let our experts help you select the perfect ERP system for your business needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => onPageChange('contact')}
              className="bg-[#018136] hover:bg-[#016429] text-white px-8 py-4 rounded-full text-lg font-medium"
            >
              Schedule Consultation
            </Button>
            <Button
              variant="outline"
              className="border-[#018136] text-[#018136] hover:bg-[#018136] hover:text-white px-8 py-4 rounded-full text-lg font-medium"
            >
              Request Demo
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}