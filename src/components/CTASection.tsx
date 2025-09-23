import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

export function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#018136]/5 via-white to-[#FFDF58]/10 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 right-20 w-64 h-64 rounded-full bg-[#018136]/5"></div>
        <div className="absolute bottom-20 left-20 w-48 h-48 rounded-full bg-[#FFDF58]/10"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-gradient-to-br from-[#018136]/5 to-[#FFDF58]/5"></div>
      </div>
      
      <div className="relative max-w-6xl mx-auto px-6">
        <div className="text-center space-y-8">
          {/* Training & Support Badge */}
          <div className="inline-flex items-center">
            <Badge className="bg-[#FFDF58]/20 text-gray-800 px-6 py-2 text-sm font-medium border border-[#FFDF58]/30">
              Trainings & Ongoing Support
            </Badge>
          </div>
          
          <h2 className="text-5xl font-bold text-gray-900 leading-tight max-w-4xl mx-auto">
            Ready to Scale with Conexa?
          </h2>
          
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Let's build the perfect Odoo solution for your business.
            Faster, smarter, and tailored for success.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button className="bg-[#018136] hover:bg-[#016429] text-white px-8 py-4 rounded-full text-lg font-medium">
              Schedule Free Call
            </Button>
            <Button variant="outline" className="border-[#018136] text-[#018136] hover:bg-[#018136] hover:text-white px-8 py-4 rounded-full text-lg font-medium">
              View Case Studies
            </Button>
          </div>
          
          {/* Stats or additional info */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-[#018136] mb-2">30%</div>
              <div className="text-gray-600">Faster Deployment</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#018136] mb-2">100+</div>
              <div className="text-gray-600">Successful Projects</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#018136] mb-2">24/7</div>
              <div className="text-gray-600">Expert Support</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom decorative wave */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#018136]/5 to-transparent"></div>
    </section>
  );
}