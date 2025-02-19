import ModernHero from "./components/modern_hero";
import ServicesSection from "./components/services_section";
import WorkShowcase from "./components/work_showcase";

export default function App() {
  return (
    <div className="bg-white">
      <ModernHero />
      <ServicesSection />
      <WorkShowcase />
      {/* Add more sections as needed */}
    </div>
  );
}
