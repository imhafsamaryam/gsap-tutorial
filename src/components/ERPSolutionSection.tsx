// ERPSolutionSection.tsx
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { CheckCircle, Target, ArrowRight } from "lucide-react";
import { LucideIcon } from "lucide-react";
import "./ERPSolutionSection.css";
import { Link } from "react-router-dom";

interface ERPSolutionSectionProps {
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

  reverse?: boolean;
  onLearnMore?: () => void;
}

export function ERPSolutionSection({
  name,
  description,
  icon: Icon,
  color,
  categoryBadge,
  features,
  benefits,
  imageSrc,
  path,

  reverse = false,
  onLearnMore,
}: ERPSolutionSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="erp-solution-section"
      data-testid={`section-${name.toLowerCase().replace(/\s+/g, "-")}`}
    >
      <div className={`erp-solution-container ${reverse ? "reverse" : ""}`}>
        <div className="erp-solution-image-container">
          <motion.div
            className="erp-solution-image-wrapper"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <div className={`erp-solution-gradient-overlay ${color}`} />
            <img
              src={imageSrc}
              alt={`${name} Interface`}
              className="erp-solution-image"
              data-testid={`img-${name.toLowerCase().replace(/\s+/g, "-")}`}
            />
            <div className="erp-solution-image-overlay" />
            <div className={`erp-solution-icon-container ${color}`}>
              <Icon className="erp-solution-icon" />
            </div>
          </motion.div>
        </div>

        <div className="erp-solution-content">
          <div className="erp-solution-header">
            <Badge
              className="erp-solutions-badge"
              data-testid="badge-section-title"
            >
              {categoryBadge}
            </Badge>
            <h3
              className="erp-solution-title"
              data-testid={`text-name-${name
                .toLowerCase()
                .replace(/\s+/g, "-")}`}
            >
              {name}
            </h3>
          </div>

          <p className="erp-solution-description">{description}</p>

          <div className="erp-solution-features-grid">
            <div className="erp-solution-features-column">
              <h4 className="erp-solution-subtitle">
                <CheckCircle className="erp-solution-subtitle-icon" />
                Key Features
              </h4>
              <ul className="erp-solution-list">
                {features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="erp-solution-list-item"
                    data-testid={`text-feature-${idx}`}
                  >
                    <div className="erp-solution-list-bullet" />
                    <span className="erp-solution-list-text">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="erp-solution-benefits-column">
              <h4 className="erp-solution-subtitle">
                <Target className="erp-solution-subtitle-icon" />
                Business Benefits
              </h4>
              <ul className="erp-solution-list">
                {benefits.map((benefit, idx) => (
                  <li
                    key={idx}
                    className="erp-solution-list-item"
                    data-testid={`text-benefit-${idx}`}
                  >
                    <div className="erp-solution-list-bullet" />
                    <span className="erp-solution-list-text">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <Link to={path}>
            <button
              onClick={onLearnMore}
              className="erp-solution-button"
              data-testid={`button-learn-more-${name
                .toLowerCase()
                .replace(/\s+/g, "-")}`}
            >
              Learn More About {name}
              <ArrowRight className="erp-solution-button-icon" />
            </button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
