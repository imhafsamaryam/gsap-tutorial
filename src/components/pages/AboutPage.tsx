import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";

interface AboutPageProps {
  onPageChange: (page: string) => void;
}

export function AboutPage({ onPageChange }: AboutPageProps) {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-white relative overflow-hidden">
        <div className="absolute top-10 right-10 w-32 h-32 rounded-full bg-[#018136]/5"></div>
        <div className="absolute bottom-20 left-20 w-48 h-48 rounded-full bg-[#FFDF58]/10"></div>
        
        <div className="relative max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <Badge className="bg-[#018136]/10 text-[#018136] px-4 py-2">ABOUT US</Badge>
              <h1 className="text-5xl font-bold text-gray-900 leading-tight">
                Leading ERP Solutions Provider Since 2015
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                We've been helping businesses optimize their operations through cutting-edge technology solutions, 
                transforming how companies manage their resources and drive growth.
              </p>
            </div>
            
            <div className="relative">
              <div className="bg-white p-8 rounded-3xl shadow-xl">
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-[#018136] mb-2">8+</div>
                    <div className="text-gray-600">Years of Excellence</div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-[#018136]">1000+</div>
                      <div className="text-sm text-gray-600">Projects Completed</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-[#018136]">50+</div>
                      <div className="text-sm text-gray-600">Industries</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  To empower businesses of all sizes with intelligent ERP solutions that streamline operations, 
                  increase efficiency, and drive sustainable growth through innovative technology and exceptional support.
                </p>
              </div>
              
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  To be the global leader in ERP implementation and support, known for our customer-centric approach, 
                  technical excellence, and ability to transform businesses through technology.
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">Why Choose Us?</h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 rounded-full bg-[#018136] flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Industry Expertise</h4>
                    <p className="text-gray-600 text-sm">Deep understanding of business processes across 50+ industries</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 rounded-full bg-[#018136] flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Proven Methodology</h4>
                    <p className="text-gray-600 text-sm">Streamlined implementation process with 95% project success rate</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 rounded-full bg-[#018136] flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Ongoing Support</h4>
                    <p className="text-gray-600 text-sm">24/7 technical support and continuous system optimization</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 rounded-full bg-[#018136] flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Cost-Effective Solutions</h4>
                    <p className="text-gray-600 text-sm">Competitive pricing with transparent costs and no hidden fees</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Expert Team</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Meet the professionals who make your ERP implementation successful
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6 text-center hover:shadow-xl transition-shadow">
              <CardContent className="p-0">
                <div className="w-16 h-16 rounded-full bg-[#018136]/10 mx-auto mb-4 flex items-center justify-center">
                  <div className="w-8 h-8 rounded-full bg-[#018136]"></div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">ERP Specialists</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Certified professionals with deep expertise in various ERP platforms and implementation methodologies.
                </p>
                <Badge className="bg-[#018136]/10 text-[#018136]">25+ Specialists</Badge>
              </CardContent>
            </Card>
            
            <Card className="p-6 text-center hover:shadow-xl transition-shadow">
              <CardContent className="p-0">
                <div className="w-16 h-16 rounded-full bg-[#FFDF58]/20 mx-auto mb-4 flex items-center justify-center">
                  <div className="w-8 h-8 rounded-full bg-[#FFDF58]"></div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Implementation Experts</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Project managers and technical consultants who ensure smooth deployment and user adoption.
                </p>
                <Badge className="bg-[#FFDF58]/20 text-gray-800">15+ Experts</Badge>
              </CardContent>
            </Card>
            
            <Card className="p-6 text-center hover:shadow-xl transition-shadow">
              <CardContent className="p-0">
                <div className="w-16 h-16 rounded-full bg-[#018136]/10 mx-auto mb-4 flex items-center justify-center">
                  <div className="w-8 h-8 rounded-full bg-[#018136]"></div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Support Staff</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Dedicated support team providing 24/7 assistance and ongoing system maintenance.
                </p>
                <Badge className="bg-[#018136]/10 text-[#018136]">20+ Staff</Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#018136]/10 mx-auto flex items-center justify-center">
                <svg className="w-8 h-8 text-[#018136]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Innovation</h3>
              <p className="text-gray-600 text-sm">Continuously evolving our solutions to meet changing business needs</p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#FFDF58]/20 mx-auto flex items-center justify-center">
                <svg className="w-8 h-8 text-gray-800" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Reliability</h3>
              <p className="text-gray-600 text-sm">Delivering consistent, dependable solutions you can trust</p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#018136]/10 mx-auto flex items-center justify-center">
                <svg className="w-8 h-8 text-[#018136]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Customer Success</h3>
              <p className="text-gray-600 text-sm">Your success is our priority - we're invested in your growth</p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#FFDF58]/20 mx-auto flex items-center justify-center">
                <svg className="w-8 h-8 text-gray-800" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Excellence</h3>
              <p className="text-gray-600 text-sm">Maintaining the highest standards in everything we deliver</p>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-gradient-to-br from-[#018136]/5 via-white to-[#FFDF58]/10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Recognition & Achievements</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Industry recognition for our commitment to excellence
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-8 text-center hover:shadow-xl transition-shadow">
              <CardContent className="p-0">
                <Badge className="bg-[#FFDF58]/20 text-gray-800 mb-4">2023</Badge>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">ERP Partner of the Year</h3>
                <p className="text-gray-600 text-sm">Recognized by Sage for outstanding implementation success and customer satisfaction</p>
              </CardContent>
            </Card>
            
            <Card className="p-8 text-center hover:shadow-xl transition-shadow">
              <CardContent className="p-0">
                <Badge className="bg-[#018136]/10 text-[#018136] mb-4">2023</Badge>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">ISO 27001 Certified</h3>
                <p className="text-gray-600 text-sm">Information security management certification ensuring data protection</p>
              </CardContent>
            </Card>
            
            <Card className="p-8 text-center hover:shadow-xl transition-shadow">
              <CardContent className="p-0">
                <Badge className="bg-[#FFDF58]/20 text-gray-800 mb-4">2022</Badge>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Best Customer Support</h3>
                <p className="text-gray-600 text-sm">Industry award for exceptional 24/7 customer support and service quality</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Ready to Partner with Us?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Let's discuss how our expertise can transform your business operations
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => onPageChange('contact')}
              className="bg-[#018136] hover:bg-[#016429] text-white px-8 py-4 rounded-full text-lg font-medium"
            >
              Get in Touch
            </Button>
            <Button 
              onClick={() => onPageChange('products')}
              variant="outline" 
              className="border-[#018136] text-[#018136] hover:bg-[#018136] hover:text-white px-8 py-4 rounded-full text-lg font-medium"
            >
              View Our Solutions
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}