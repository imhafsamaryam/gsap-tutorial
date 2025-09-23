export function AboutSection() {
  return (
    <section className="py-20 bg-white relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-gray-900 leading-tight">
              <span className="text-[#018136]">Conexa</span> is an expert Odoo partner that blends AI-powered automation, deep industry insights, and seamless integrations to help businesses optimize operations, scale efficiently, and drive digital transformation.
            </h2>
          </div>
          
          <div className="relative">
            {/* Decorative background shape */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#018136]/5 to-[#FFDF58]/5 rounded-3xl transform -rotate-3"></div>
            
            <div className="relative bg-white p-8 rounded-3xl shadow-lg">
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-[#018136]/10 flex items-center justify-center flex-shrink-0">
                    <div className="w-6 h-6 rounded-full bg-[#018136]"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">All-Powered Efficiency</h3>
                    <p className="text-gray-600 text-sm">Advanced automation and AI integration for streamlined operations</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-[#FFDF58]/20 flex items-center justify-center flex-shrink-0">
                    <div className="w-6 h-6 rounded-full bg-[#FFDF58]"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Custom Tailored Scaling</h3>
                    <p className="text-gray-600 text-sm">Solutions designed to grow with your business needs</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-[#018136]/10 flex items-center justify-center flex-shrink-0">
                    <div className="w-6 h-6 rounded-full bg-[#018136]"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Ongoing Support & Optimization</h3>
                    <p className="text-gray-600 text-sm">Continuous improvement and dedicated support services</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-[#FFDF58]/20 flex items-center justify-center flex-shrink-0">
                    <div className="w-6 h-6 rounded-full bg-[#FFDF58]"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Lead Business Expertise</h3>
                    <p className="text-gray-600 text-sm">Industry-leading knowledge and proven methodologies</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}