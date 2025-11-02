// ERPSolutionsGrid.tsx
import { motion } from "framer-motion";
import { Badge } from "./ui/badge";
import { LucideIcon } from "lucide-react";
import { ERPSolutionSection } from "./ERPSolutionSection";
import "./ERPGrid.css";

interface ERPSolution {
  id: string;
  name: string;
  description: string;
  icon: LucideIcon;
  color: string;
  categoryBadge: string;
  features: string[];
  benefits: string[];
  imageSrc: string;
  path: string;
}

interface ERPSolutionsGridProps {
  solutions: ERPSolution[];
  onLearnMore?: (solution: ERPSolution) => void;
}

export function ERPSolutionsGrid({
  solutions,
  onLearnMore,
}: ERPSolutionsGridProps) {
  return (
    <section className="erp-solutions-grid-section">
      <div className="erp-solutions-container">
        <div className="erp-solutions-header">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Badge
              className="erp-solutions-badge"
              data-testid="badge-section-title"
            >
              Our Solutions
            </Badge>
            <h2
              className="erp-solutions-title"
              data-testid="text-section-title"
            >
              Comprehensive ERP Solutions
            </h2>
            <p className="erp-solutions-subtitle">
              Choose from our portfolio of industry-leading ERP solutions, each
              designed to address specific business needs and scales
            </p>
          </motion.div>
        </div>

        <div className="erp-solutions-list">
          {solutions.map((solution, index) => (
            <ERPSolutionSection
              id={solution.id}
              name={solution.name}
              description={solution.description}
              icon={solution.icon}
              color={solution.color}
              categoryBadge={solution.categoryBadge}
              features={solution.features}
              benefits={solution.benefits}
              imageSrc={solution.imageSrc}
              path={solution.path}
              reverse={index % 2 === 1}
              onLearnMore={() => {
                console.log(`Learn more clicked for ${solution.name}`);
                onLearnMore?.(solution);
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
