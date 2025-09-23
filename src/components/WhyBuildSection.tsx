export function WhyBuildSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-green-50 to-yellow-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-[#018136]/5"></div>
      <div className="absolute bottom-20 right-20 w-48 h-48 rounded-full bg-[#FFDF58]/10"></div>
      
      <div className="relative max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl font-bold text-gray-900">
              Why Build Odoo<br />
              with Conexa?
            </h2>
            
            <p className="text-gray-600 leading-relaxed">
              While Odoo deployments often range from 120+ days when building with typical Rasp or Anotice to its fullest potential, Conexa delivers results you need more efficiently. We achieve this through:
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 rounded-full bg-[#018136] flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-900 font-medium">AI-powered workflow optimization</span>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 rounded-full bg-[#018136] flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-900 font-medium">Pre-built industry templates</span>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 rounded-full bg-[#018136] flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-900 font-medium">Streamlined deployment processes</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-white p-8 rounded-3xl shadow-xl">
              <div className="text-center space-y-4">
                <div className="inline-flex items-center px-4 py-2 bg-[#FFDF58]/20 rounded-full">
                  <span className="text-sm font-medium text-gray-900">Odoo Scale Up</span>
                </div>
                
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-[#018136]">60+ Days</div>
                  <div className="text-sm text-gray-600">Faster Implementation</div>
                </div>
                
                <div className="w-full bg-gray-100 rounded-full h-3">
                  <div className="bg-[#018136] h-3 rounded-full" style={{ width: '75%' }}></div>
                </div>
                
                <div className="text-xs text-gray-500">Typical deployment vs Conexa approach</div>
              </div>
            </div>
            
            {/* Decorative accent */}
            <div className="absolute -top-4 -right-4 w-16 h-16 rounded-full bg-[#FFDF58]/30"></div>
          </div>
        </div>
      </div>
    </section>
  );
}