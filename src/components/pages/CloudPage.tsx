import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";

interface CloudPageProps {
  onPageChange: (page: string) => void;
}

export function CloudPage({ onPageChange }: CloudPageProps) {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-white relative overflow-hidden">
        <div className="absolute top-10 right-10 w-32 h-32 rounded-full bg-[#018136]/5"></div>
        <div className="absolute bottom-20 left-20 w-48 h-48 rounded-full bg-[#FFDF58]/10"></div>
        
        <div className="relative max-w-6xl mx-auto px-6">
          <div className="text-center">
            <Badge className="bg-[#018136]/10 text-[#018136] px-4 py-2 mb-6">CLOUD HOSTING</Badge>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Secure, Scalable Cloud Infrastructure for Your ERP
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Experience the benefits of cloud-hosted ERP solutions with enterprise-grade security, 
              99.9% uptime guarantee, and seamless scalability to support your business growth.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-900">
                Why Choose Cloud Hosting?
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Move your ERP to the cloud and unlock unprecedented flexibility, security, and performance. 
                Our cloud infrastructure is designed to support mission-critical business applications.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-full bg-[#018136]/10 flex items-center justify-center">
                    <svg className="w-5 h-5 text-[#018136]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-gray-900">Scalability</h3>
                  <p className="text-sm text-gray-600">Scale resources up or down based on your business needs</p>
                </div>
                
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-full bg-[#FFDF58]/20 flex items-center justify-center">
                    <svg className="w-5 h-5 text-gray-800" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-gray-900">Security</h3>
                  <p className="text-sm text-gray-600">Enterprise-grade security with encryption and compliance</p>
                </div>
                
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-full bg-[#018136]/10 flex items-center justify-center">
                    <svg className="w-5 h-5 text-[#018136]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-gray-900">99.9% Uptime</h3>
                  <p className="text-sm text-gray-600">Guaranteed availability with redundant infrastructure</p>
                </div>
                
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-full bg-[#FFDF58]/20 flex items-center justify-center">
                    <svg className="w-5 h-5 text-gray-800" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4zM18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-gray-900">Cost Effective</h3>
                  <p className="text-sm text-gray-600">Reduce IT infrastructure costs and maintenance overhead</p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white p-8 rounded-3xl shadow-xl">
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#018136] mb-2">99.9%</div>
                    <div className="text-gray-600">Uptime Guarantee</div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-xl font-bold text-[#018136]">24/7</div>
                      <div className="text-xs text-gray-600">Monitoring</div>
                    </div>
                    <div>
                      <div className="text-xl font-bold text-[#018136]">ISO 27001</div>
                      <div className="text-xs text-gray-600">Certified</div>
                    </div>
                  </div>
                  <div className="text-center">
                    <Badge className="bg-[#FFDF58]/20 text-gray-800">Enterprise Security</Badge>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cloud Solutions */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Cloud Deployment Options
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose from flexible cloud hosting solutions tailored to your business requirements
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="p-8 hover:shadow-xl transition-all duration-300">
              <CardContent className="p-0 text-center space-y-6">
                <div className="w-16 h-16 rounded-full bg-[#018136]/10 mx-auto flex items-center justify-center">
                  <svg className="w-8 h-8 text-[#018136]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Public Cloud</h3>
                  <p className="text-gray-600 text-sm">Cost-effective solution with shared infrastructure and rapid deployment</p>
                </div>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center justify-center space-x-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#018136]"></div>
                    <span>Quick setup & deployment</span>
                  </li>
                  <li className="flex items-center justify-center space-x-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#018136]"></div>
                    <span>Pay-as-you-scale model</span>
                  </li>
                  <li className="flex items-center justify-center space-x-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#018136]"></div>
                    <span>Automatic updates</span>
                  </li>
                </ul>
                <Badge className="bg-[#FFDF58]/20 text-gray-800">Most Popular</Badge>
              </CardContent>
            </Card>
            
            <Card className="p-8 hover:shadow-xl transition-all duration-300 border-[#018136]/20">
              <CardContent className="p-0 text-center space-y-6">
                <div className="w-16 h-16 rounded-full bg-[#018136]/10 mx-auto flex items-center justify-center">
                  <svg className="w-8 h-8 text-[#018136]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Private Cloud</h3>
                  <p className="text-gray-600 text-sm">Dedicated infrastructure with enhanced security and customization</p>
                </div>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center justify-center space-x-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#018136]"></div>
                    <span>Dedicated resources</span>
                  </li>
                  <li className="flex items-center justify-center space-x-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#018136]"></div>
                    <span>Enhanced security</span>
                  </li>
                  <li className="flex items-center justify-center space-x-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#018136]"></div>
                    <span>Custom configurations</span>
                  </li>
                </ul>
                <Badge className="bg-[#018136]/10 text-[#018136]">Enterprise</Badge>
              </CardContent>
            </Card>
            
            <Card className="p-8 hover:shadow-xl transition-all duration-300">
              <CardContent className="p-0 text-center space-y-6">
                <div className="w-16 h-16 rounded-full bg-[#FFDF58]/20 mx-auto flex items-center justify-center">
                  <svg className="w-8 h-8 text-gray-800" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Hybrid Cloud</h3>
                  <p className="text-gray-600 text-sm">Best of both worlds with flexible resource allocation</p>
                </div>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center justify-center space-x-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#018136]"></div>
                    <span>Flexible deployment</span>
                  </li>
                  <li className="flex items-center justify-center space-x-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#018136]"></div>
                    <span>Cost optimization</span>
                  </li>
                  <li className="flex items-center justify-center space-x-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#018136]"></div>
                    <span>Seamless integration</span>
                  </li>
                </ul>
                <Badge className="bg-[#FFDF58]/20 text-gray-800">Flexible</Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Cloud Providers */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Cloud Partners
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We partner with leading cloud providers to ensure reliable, secure hosting for your ERP solutions
            </p>
          </div>
          
          <Tabs defaultValue="azure" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-12">
              <TabsTrigger value="azure">Microsoft Azure</TabsTrigger>
              <TabsTrigger value="tsplus">TS Plus</TabsTrigger>
            </TabsList>
            
            {/* Microsoft Azure */}
            <TabsContent value="azure" className="space-y-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <Badge className="bg-[#018136]/10 text-[#018136]">ENTERPRISE CLOUD</Badge>
                  <h3 className="text-3xl font-bold text-gray-900">Microsoft Azure</h3>
                  <p className="text-lg text-gray-600">
                    Enterprise-grade cloud platform with global infrastructure, advanced security features, 
                    and comprehensive compliance certifications for mission-critical applications.
                  </p>
                  
                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-900">Key Benefits:</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 rounded-full bg-[#018136]"></div>
                        <span>Global data centers with 99.9% SLA</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 rounded-full bg-[#018136]"></div>
                        <span>Advanced threat protection & monitoring</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 rounded-full bg-[#018136]"></div>
                        <span>Compliance with 90+ standards</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 rounded-full bg-[#018136]"></div>
                        <span>Automatic scaling & load balancing</span>
                      </li>
                    </ul>
                  </div>
                  
                  <Button className="bg-[#018136] hover:bg-[#016429] text-white">
                    Learn More About Azure Hosting
                  </Button>
                </div>
                
                <Card className="p-8">
                  <CardContent className="p-0 space-y-6">
                    <h4 className="font-semibold text-gray-900">Azure Features:</h4>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <Badge className="bg-[#FFDF58]/20 text-gray-800">Security</Badge>
                        <span className="text-sm text-gray-600">Multi-layer security & encryption</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Badge className="bg-[#018136]/10 text-[#018136]">Global</Badge>
                        <span className="text-sm text-gray-600">60+ regions worldwide</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Badge className="bg-[#FFDF58]/20 text-gray-800">Compliant</Badge>
                        <span className="text-sm text-gray-600">SOC, ISO, HIPAA certified</span>
                      </div>
                    </div>
                    
                    <div className="pt-4 border-t">
                      <h5 className="font-medium text-gray-900 mb-2">Setup Time:</h5>
                      <p className="text-sm text-gray-600">24-48 hours for standard deployment</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            {/* TS Plus */}
            <TabsContent value="tsplus" className="space-y-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <Badge className="bg-[#FFDF58]/20 text-gray-800">REMOTE ACCESS SOLUTION</Badge>
                  <h3 className="text-3xl font-bold text-gray-900">TS Plus</h3>
                  <p className="text-lg text-gray-600">
                    Cost-effective remote access solution that enables secure access to your ERP applications 
                    from anywhere, with simple setup and management.
                  </p>
                  
                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-900">Key Benefits:</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 rounded-full bg-[#018136]"></div>
                        <span>Secure remote desktop access</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 rounded-full bg-[#018136]"></div>
                        <span>Cost-effective licensing model</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 rounded-full bg-[#018136]"></div>
                        <span>Easy setup and configuration</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 rounded-full bg-[#018136]"></div>
                        <span>Cross-platform compatibility</span>
                      </li>
                    </ul>
                  </div>
                  
                  <Button className="bg-[#018136] hover:bg-[#016429] text-white">
                    Learn More About TS Plus
                  </Button>
                </div>
                
                <Card className="p-8">
                  <CardContent className="p-0 space-y-6">
                    <h4 className="font-semibold text-gray-900">TS Plus Features:</h4>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <Badge className="bg-[#FFDF58]/20 text-gray-800">Remote Access</Badge>
                        <span className="text-sm text-gray-600">Web-based & mobile access</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Badge className="bg-[#018136]/10 text-[#018136]">Affordable</Badge>
                        <span className="text-sm text-gray-600">No per-user licensing fees</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Badge className="bg-[#FFDF58]/20 text-gray-800">Simple</Badge>
                        <span className="text-sm text-gray-600">Quick deployment process</span>
                      </div>
                    </div>
                    
                    <div className="pt-4 border-t">
                      <h5 className="font-medium text-gray-900 mb-2">Setup Time:</h5>
                      <p className="text-sm text-gray-600">4-8 hours for basic configuration</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Migration Support */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Seamless Cloud Migration
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our expert team ensures a smooth transition to the cloud with minimal downtime and zero data loss
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#018136]/10 mx-auto flex items-center justify-center">
                <span className="text-2xl font-bold text-[#018136]">1</span>
              </div>
              <h3 className="font-semibold text-gray-900">Assessment</h3>
              <p className="text-sm text-gray-600">Evaluate current infrastructure and migration requirements</p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#FFDF58]/20 mx-auto flex items-center justify-center">
                <span className="text-2xl font-bold text-gray-800">2</span>
              </div>
              <h3 className="font-semibold text-gray-900">Planning</h3>
              <p className="text-sm text-gray-600">Develop detailed migration strategy and timeline</p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#018136]/10 mx-auto flex items-center justify-center">
                <span className="text-2xl font-bold text-[#018136]">3</span>
              </div>
              <h3 className="font-semibold text-gray-900">Migration</h3>
              <p className="text-sm text-gray-600">Execute migration with real-time monitoring</p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#FFDF58]/20 mx-auto flex items-center justify-center">
                <span className="text-2xl font-bold text-gray-800">4</span>
              </div>
              <h3 className="font-semibold text-gray-900">Optimization</h3>
              <p className="text-sm text-gray-600">Fine-tune performance and provide training</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Ready to Move to the Cloud?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Let our cloud experts design the perfect hosting solution for your ERP needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => onPageChange('contact')}
              className="bg-[#018136] hover:bg-[#016429] text-white px-8 py-4 rounded-full text-lg font-medium"
            >
              Schedule Cloud Consultation
            </Button>
            <Button 
              onClick={() => onPageChange('hardware')}
              variant="outline" 
              className="border-[#018136] text-[#018136] hover:bg-[#018136] hover:text-white px-8 py-4 rounded-full text-lg font-medium"
            >
              View Hardware Options
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}