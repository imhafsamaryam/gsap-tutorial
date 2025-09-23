import { Button } from "./ui/button";

export function Header() {
  return (
    <header className="w-full px-6 py-4 bg-white relative z-10">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <div className="text-xl font-medium text-gray-900">conexa</div>
        </div>
        
        <nav className="flex items-center space-x-8">
          <a href="#" className="text-gray-700 hover:text-[#018136] transition-colors">About us</a>
          <a href="#" className="text-gray-700 hover:text-[#018136] transition-colors">Business</a>
          <a href="#" className="text-gray-700 hover:text-[#018136] transition-colors">Learn More</a>
        </nav>
        
        <Button className="bg-[#018136] hover:bg-[#016429] text-white px-6 py-2 rounded-full">
          Contact us
        </Button>
      </div>
    </header>
  );
}