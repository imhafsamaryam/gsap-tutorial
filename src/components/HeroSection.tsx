import { Button } from "./ui/button";

export function HeroSection() {
  return (
    <section className="relative min-h-[600px] bg-gradient-to-br from-green-50 to-white overflow-hidden">
      {/* Background geometric shapes */}
      <div className="absolute inset-0">
        {/* Large curved background shape */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] opacity-20">
          <div className="w-full h-full rounded-full bg-gradient-to-br from-[#018136]/30 to-[#FFDF58]/20 transform translate-x-1/3 -translate-y-1/4"></div>
        </div>
        
        {/* Curved accent shape */}
        <div className="absolute top-20 right-20 w-[400px] h-[400px] opacity-30">
          <div className="w-full h-full rounded-full bg-gradient-to-br from-[#018136]/40 to-transparent"></div>
        </div>
        
        {/* Smaller decorative elements */}
        <div className="absolute top-40 right-40 w-[200px] h-[200px] opacity-40">
          <div className="w-full h-full rounded-full bg-gradient-to-br from-[#FFDF58]/60 to-transparent"></div>
        </div>
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="text-sm text-[#018136] font-medium tracking-wide uppercase">
              AI-POWERED WAREHOUSE CONSTRUCTION EFFICIENCIES
            </div>
            
            <h1 className="text-5xl font-bold text-gray-900 leading-tight">
              Faster, Smarter,<br />
              Tailored for You
            </h1>
            
            <p className="text-lg text-gray-600 leading-relaxed max-w-md">
              We leverage advanced automation, industry insights, and dynamic integrations to craft seamless, efficient systems and support that revolutionize your business and operations.
            </p>
            
            <Button className="bg-[#FFDF58] hover:bg-[#e6c84d] text-gray-900 px-8 py-3 rounded-full font-medium">
              Get Free Consultation
            </Button>
          </div>
          
          <div className="relative">
            {/* Geometric illustration area */}
            <div className="relative w-full h-[400px]">
              {/* Main curved element */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-80 h-80 rounded-full border-8 border-[#018136]/20 flex items-center justify-center">
                  <div className="w-60 h-60 rounded-full bg-gradient-to-br from-[#018136]/10 to-[#FFDF58]/10"></div>
                </div>
              </div>
              
              {/* Floating accent elements */}
              <div className="absolute top-10 left-10 w-16 h-16 rounded-full bg-[#FFDF58]/40"></div>
              <div className="absolute bottom-20 right-10 w-12 h-12 rounded-full bg-[#018136]/30"></div>
              <div className="absolute top-1/2 right-0 w-8 h-8 rounded-full bg-[#FFDF58]/60"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}