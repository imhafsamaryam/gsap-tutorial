import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";

interface HardwarePageProps {
  onPageChange: (page: string) => void;
}

export function HardwarePage({ onPageChange }: HardwarePageProps) {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-white relative overflow-hidden">
        <div className="absolute top-10 right-10 w-32 h-32 rounded-full bg-[#018136]/5"></div>
        <div className="absolute bottom-20 left-20 w-48 h-48 rounded-full bg-[#FFDF58]/10"></div>
        
        <div className="relative max-w-6xl mx-auto px-6">
          <div className="text-center">
            <Badge className="bg-[#018136]/10 text-[#018136] px-4 py-2 mb-6">HARDWARE SOLUTIONS</Badge>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Complete Hardware Solutions for Your ERP Implementation
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From high-performance servers to user workstations, we provide enterprise-grade hardware 
              with professional installation, configuration, and ongoing maintenance support.
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-900">
                Why Our Hardware Solutions?
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                We provide complete hardware ecosystems optimized for ERP performance, ensuring your business 
                applications run smoothly with maximum reliability and efficiency.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 rounded-full bg-[#018136] flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-900 font-medium">Professional Installation & Configuration</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 rounded-full bg-[#018136] flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-900 font-medium">Enterprise-Grade Performance & Reliability</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 rounded-full bg-[#018136] flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-900 font-medium">Comprehensive Warranty & Support</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 rounded-full bg-[#018136] flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-900 font-medium">Scalable Infrastructure Planning</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white p-8 rounded-3xl shadow-xl">
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#018136] mb-2">500+</div>
                    <div className="text-gray-600">Hardware Deployments</div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-xl font-bold text-[#018136]">24/7</div>
                      <div className="text-xs text-gray-600">Support</div>
                    </div>
                    <div>
                      <div className="text-xl font-bold text-[#018136]">3 Year</div>
                      <div className="text-xs text-gray-600">Warranty</div>
                    </div>
                  </div>
                  <div className="text-center">
                    <Badge className="bg-[#FFDF58]/20 text-gray-800">Enterprise Quality</Badge>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hardware Categories */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Complete Hardware Portfolio
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From servers to workstations, we provide everything you need for a complete ERP infrastructure
            </p>
          </div>
          
          <Tabs defaultValue="servers" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-12">
              <TabsTrigger value="servers">Servers</TabsTrigger>
              <TabsTrigger value="workstations">Workstations</TabsTrigger>
              <TabsTrigger value="networking">Networking</TabsTrigger>
              <TabsTrigger value="maintenance">Maintenance</TabsTrigger>
            </TabsList>
            
            {/* Servers */}
            <TabsContent value="servers" className="space-y-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <Badge className="bg-[#018136]/10 text-[#018136]">SERVER SOLUTIONS</Badge>
                  <h3 className="text-3xl font-bold text-gray-900">Enterprise Servers</h3>
                  <p className="text-lg text-gray-600">
                    High-performance servers optimized for ERP applications with redundant power supplies, 
                    hot-swappable drives, and enterprise-grade reliability features.
                  </p>
                  
                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-900">Server Specifications:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <h5 className="text-sm font-medium text-gray-900">Small Business</h5>
                        <ul className="space-y-1 text-sm text-gray-600">
                          <li>• Intel Xeon E-2200 series</li>
                          <li>• 16-32GB ECC RAM</li>
                          <li>• 1TB SSD storage</li>
                          <li>• 5-25 concurrent users</li>
                        </ul>
                      </div>
                      <div className="space-y-2">
                        <h5 className="text-sm font-medium text-gray-900">Enterprise</h5>
                        <ul className="space-y-1 text-sm text-gray-600">
                          <li>• Intel Xeon Gold series</li>
                          <li>• 64-256GB ECC RAM</li>
                          <li>• RAID 10 SSD arrays</li>
                          <li>• 100+ concurrent users</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <Button className="bg-[#018136] hover:bg-[#016429] text-white">
                    View Server Configurations
                  </Button>
                </div>
                
                <Card className="p-8">
                  <CardContent className="p-0 space-y-6">
                    <h4 className="font-semibold text-gray-900">Pricing Tiers:</h4>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                        <div>
                          <h5 className="font-medium text-gray-900">Entry Level</h5>
                          <p className="text-sm text-gray-600">5-15 users</p>
                        </div>
                        <div className="text-right">
                          <div className="text-lg font-bold text-[#018136]">$2,500</div>
                          <div className="text-xs text-gray-600">starting from</div>
                        </div>
                      </div>
                      
                      <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                        <div>
                          <h5 className="font-medium text-gray-900">Mid-Range</h5>
                          <p className="text-sm text-gray-600">15-50 users</p>
                        </div>
                        <div className="text-right">
                          <div className="text-lg font-bold text-[#018136]">$6,500</div>
                          <div className="text-xs text-gray-600">starting from</div>
                        </div>
                      </div>
                      
                      <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                        <div>
                          <h5 className="font-medium text-gray-900">Enterprise</h5>
                          <p className="text-sm text-gray-600">50+ users</p>
                        </div>
                        <div className="text-right">
                          <div className="text-lg font-bold text-[#018136]">$15,000</div>
                          <div className="text-xs text-gray-600">starting from</div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="pt-4 border-t">
                      <Badge className="bg-[#FFDF58]/20 text-gray-800">3-Year Warranty Included</Badge>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            {/* Workstations */}
            <TabsContent value="workstations" className="space-y-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <Badge className="bg-[#FFDF58]/20 text-gray-800">WORKSTATIONS</Badge>
                  <h3 className="text-3xl font-bold text-gray-900">Laptops & Desktops</h3>
                  <p className="text-lg text-gray-600">
                    Business-grade laptops and desktop computers configured for optimal ERP performance 
                    with bulk pricing for organizational deployments.
                  </p>
                  
                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-900">Recommended Configurations:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <h5 className="text-sm font-medium text-gray-900">Business Laptops</h5>
                        <ul className="space-y-1 text-sm text-gray-600">
                          <li>• Intel Core i5/i7 processors</li>
                          <li>• 8-16GB RAM</li>
                          <li>• 256-512GB SSD</li>
                          <li>• 3-year warranty</li>
                        </ul>
                      </div>
                      <div className="space-y-2">
                        <h5 className="text-sm font-medium text-gray-900">Desktop Workstations</h5>
                        <ul className="space-y-1 text-sm text-gray-600">
                          <li>• Intel Core i5/i7 processors</li>
                          <li>• 16-32GB RAM</li>
                          <li>• 512GB-1TB SSD</li>
                          <li>• Dual monitor support</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <Button className="bg-[#018136] hover:bg-[#016429] text-white">
                    View Workstation Options
                  </Button>
                </div>
                
                <Card className="p-8">
                  <CardContent className="p-0 space-y-6">
                    <h4 className="font-semibold text-gray-900">Bulk Pricing:</h4>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                        <div>
                          <h5 className="font-medium text-gray-900">Business Laptop</h5>
                          <p className="text-sm text-gray-600">Per unit (10+ units)</p>
                        </div>
                        <div className="text-right">
                          <div className="text-lg font-bold text-[#018136]">$850</div>
                          <div className="text-xs text-gray-600">15% bulk discount</div>
                        </div>
                      </div>
                      
                      <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                        <div>
                          <h5 className="font-medium text-gray-900">Desktop PC</h5>
                          <p className="text-sm text-gray-600">Per unit (10+ units)</p>
                        </div>
                        <div className="text-right">
                          <div className="text-lg font-bold text-[#018136]">$650</div>
                          <div className="text-xs text-gray-600">20% bulk discount</div>
                        </div>
                      </div>
                      
                      <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                        <div>
                          <h5 className="font-medium text-gray-900">Monitor Package</h5>
                          <p className="text-sm text-gray-600">Dual 24" displays</p>
                        </div>
                        <div className="text-right">
                          <div className="text-lg font-bold text-[#018136]">$350</div>
                          <div className="text-xs text-gray-600">per workstation</div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="pt-4 border-t">
                      <Badge className="bg-[#FFDF58]/20 text-gray-800">Free Setup & Configuration</Badge>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            {/* Networking */}
            <TabsContent value="networking" className="space-y-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <Badge className="bg-[#018136]/10 text-[#018136]">NETWORK INFRASTRUCTURE</Badge>
                  <h3 className="text-3xl font-bold text-gray-900">Networking Solutions</h3>
                  <p className="text-lg text-gray-600">
                    Complete network infrastructure setup including switches, routers, firewalls, 
                    and wireless access points with professional configuration and security protocols.
                  </p>
                  
                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-900">Network Components:</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 rounded-full bg-[#018136]"></div>
                        <span>Managed Gigabit switches (24-48 ports)</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 rounded-full bg-[#018136]"></div>
                        <span>Enterprise routers with VPN support</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 rounded-full bg-[#018136]"></div>
                        <span>Next-generation firewalls</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 rounded-full bg-[#018136]"></div>
                        <span>WiFi 6 access points</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 rounded-full bg-[#018136]"></div>
                        <span>Cable management & installation</span>
                      </li>
                    </ul>
                  </div>
                  
                  <Button className="bg-[#018136] hover:bg-[#016429] text-white">
                    Get Network Assessment
                  </Button>
                </div>
                
                <Card className="p-8">
                  <CardContent className="p-0 space-y-6">
                    <h4 className="font-semibold text-gray-900">Network Packages:</h4>
                    <div className="space-y-4">
                      <div className="p-4 border border-[#018136]/20 rounded-lg">
                        <div className="flex justify-between items-start mb-2">
                          <h5 className="font-medium text-gray-900">Small Office</h5>
                          <Badge className="bg-[#FFDF58]/20 text-gray-800">Popular</Badge>
                        </div>
                        <p className="text-sm text-gray-600 mb-3">Up to 25 users</p>
                        <ul className="text-xs text-gray-600 space-y-1">
                          <li>• 24-port managed switch</li>
                          <li>• Business router with VPN</li>
                          <li>• Basic firewall</li>
                          <li>• 2 WiFi access points</li>
                        </ul>
                        <div className="text-lg font-bold text-[#018136] mt-3">$2,800</div>
                      </div>
                      
                      <div className="p-4 border border-[#018136]/20 rounded-lg">
                        <h5 className="font-medium text-gray-900">Enterprise</h5>
                        <p className="text-sm text-gray-600 mb-3">50+ users</p>
                        <ul className="text-xs text-gray-600 space-y-1">
                          <li>• Multiple managed switches</li>
                          <li>• Enterprise router with redundancy</li>
                          <li>• Next-gen firewall</li>
                          <li>• Comprehensive WiFi coverage</li>
                        </ul>
                        <div className="text-lg font-bold text-[#018136] mt-3">$8,500</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            {/* Maintenance */}
            <TabsContent value="maintenance" className="space-y-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <Badge className="bg-[#FFDF58]/20 text-gray-800">ANNUAL MAINTENANCE</Badge>
                  <h3 className="text-3xl font-bold text-gray-900">Comprehensive Support</h3>
                  <p className="text-lg text-gray-600">
                    Annual Maintenance Contracts (AMC) providing complete hardware support with guaranteed 
                    response times, preventive maintenance, and replacement coverage.
                  </p>
                  
                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-900">AMC Coverage:</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 rounded-full bg-[#018136]"></div>
                        <span>24/7 helpdesk support</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 rounded-full bg-[#018136]"></div>
                        <span>On-site response within 4 hours</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 rounded-full bg-[#018136]"></div>
                        <span>Preventive maintenance visits</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 rounded-full bg-[#018136]"></div>
                        <span>Hardware replacement coverage</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 rounded-full bg-[#018136]"></div>
                        <span>System health monitoring</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 rounded-full bg-[#018136]"></div>
                        <span>Priority spare parts inventory</span>
                      </li>
                    </ul>
                  </div>
                  
                  <Button className="bg-[#018136] hover:bg-[#016429] text-white">
                    Get AMC Quote
                  </Button>
                </div>
                
                <Card className="p-8">
                  <CardContent className="p-0 space-y-6">
                    <h4 className="font-semibold text-gray-900">AMC Plans:</h4>
                    <div className="space-y-4">
                      <div className="p-4 bg-gradient-to-r from-[#018136]/5 to-[#FFDF58]/5 rounded-lg">
                        <h5 className="font-medium text-gray-900 mb-2">Bronze Plan</h5>
                        <p className="text-sm text-gray-600 mb-3">Basic support coverage</p>
                        <ul className="text-xs text-gray-600 space-y-1 mb-3">
                          <li>• 8x5 helpdesk support</li>
                          <li>• Next business day response</li>
                          <li>• Quarterly maintenance</li>
                        </ul>
                        <div className="text-lg font-bold text-[#018136]">8% of hardware value</div>
                      </div>
                      
                      <div className="p-4 bg-gradient-to-r from-[#018136]/5 to-[#FFDF58]/5 rounded-lg">
                        <div className="flex justify-between items-start mb-2">
                          <h5 className="font-medium text-gray-900">Gold Plan</h5>
                          <Badge className="bg-[#FFDF58]/20 text-gray-800">Recommended</Badge>
                        </div>
                        <p className="text-sm text-gray-600 mb-3">Comprehensive support</p>
                        <ul className="text-xs text-gray-600 space-y-1 mb-3">
                          <li>• 24/7 helpdesk support</li>
                          <li>• 4-hour response SLA</li>
                          <li>• Monthly maintenance visits</li>
                          <li>• Hardware replacement coverage</li>
                        </ul>
                        <div className="text-lg font-bold text-[#018136]">12% of hardware value</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Hardware Solutions?
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6 text-center hover:shadow-xl transition-shadow">
              <CardContent className="p-0">
                <div className="w-16 h-16 rounded-full bg-[#018136]/10 mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-8 h-8 text-[#018136]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Quality Guarantee</h3>
                <p className="text-gray-600 text-sm">
                  Enterprise-grade hardware from trusted manufacturers with comprehensive warranty coverage
                </p>
              </CardContent>
            </Card>
            
            <Card className="p-6 text-center hover:shadow-xl transition-shadow">
              <CardContent className="p-0">
                <div className="w-16 h-16 rounded-full bg-[#FFDF58]/20 mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-8 h-8 text-gray-800" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Expert Installation</h3>
                <p className="text-gray-600 text-sm">
                  Professional setup and configuration by certified technicians with minimal business disruption
                </p>
              </CardContent>
            </Card>
            
            <Card className="p-6 text-center hover:shadow-xl transition-shadow">
              <CardContent className="p-0">
                <div className="w-16 h-16 rounded-full bg-[#018136]/10 mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-8 h-8 text-[#018136]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Ongoing Support</h3>
                <p className="text-gray-600 text-sm">
                  24/7 technical support with rapid response times and proactive maintenance services
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#018136]/5 via-white to-[#FFDF58]/10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Ready to Upgrade Your Hardware Infrastructure?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Let our hardware experts design the perfect infrastructure solution for your ERP needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => onPageChange('contact')}
              className="bg-[#018136] hover:bg-[#016429] text-white px-8 py-4 rounded-full text-lg font-medium"
            >
              Request Hardware Quote
            </Button>
            <Button 
              onClick={() => onPageChange('cloud')}
              variant="outline" 
              className="border-[#018136] text-[#018136] hover:bg-[#018136] hover:text-white px-8 py-4 rounded-full text-lg font-medium"
            >
              Compare Cloud Options
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}