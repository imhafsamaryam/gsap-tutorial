import { Badge } from "./ui/badge";
import React from "react";

export function ComparisonSection() {
  return (
    <section className="py-20 bg-white relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            How Conexa Compares<br />
            to Other Odoo Partners?
          </h2>
        </div>

        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gradient-to-r from-[#018136]/5 to-[#FFDF58]/5">
                  <th className="text-left py-6 px-8 font-semibold text-gray-900">Features</th>
                  <th className="text-center py-6 px-8">
                    <Badge className="bg-[#018136] text-white px-4 py-2">CONEXA</Badge>
                  </th>
                  <th className="text-center py-6 px-8 font-semibold text-gray-600">Other Firms</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr className="hover:bg-gray-50/50 transition-colors">
                  <td className="py-4 px-8 font-medium text-gray-900">Go Live Time</td>
                  <td className="py-4 px-8 text-center">
                    <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#018136]">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="text-sm text-[#018136] font-medium mt-1">60 Days</div>
                  </td>
                  <td className="py-4 px-8 text-center">
                    <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gray-300">
                      <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="text-sm text-gray-600 mt-1">120+ Days</div>
                  </td>
                </tr>

                <tr className="hover:bg-gray-50/50 transition-colors">
                  <td className="py-4 px-8 font-medium text-gray-900">AI-Powered Efficiency</td>
                  <td className="py-4 px-8 text-center">
                    <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#018136]">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </td>
                  <td className="py-4 px-8 text-center">
                    <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gray-300">
                      <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </td>
                </tr>

                <tr className="hover:bg-gray-50/50 transition-colors">
                  <td className="py-4 px-8 font-medium text-gray-900">Custom Tailored Scaling</td>
                  <td className="py-4 px-8 text-center">
                    <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#018136]">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </td>
                  <td className="py-4 px-8 text-center">
                    <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gray-300">
                      <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </td>
                </tr>

                <tr className="hover:bg-gray-50/50 transition-colors">
                  <td className="py-4 px-8 font-medium text-gray-900">Ongoing Support & Optimization</td>
                  <td className="py-4 px-8 text-center">
                    <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#018136]">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </td>
                  <td className="py-4 px-8 text-center">
                    <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gray-300">
                      <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </td>
                </tr>

                <tr className="hover:bg-gray-50/50 transition-colors">
                  <td className="py-4 px-8 font-medium text-gray-900">Lead Business Expertise</td>
                  <td className="py-4 px-8 text-center">
                    <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#018136]">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </td>
                  <td className="py-4 px-8 text-center">
                    <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gray-300">
                      <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}