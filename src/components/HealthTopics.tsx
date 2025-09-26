import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Heart, 
  Shield, 
  Syringe, 
  Baby, 
  AlertTriangle, 
  Users 
} from "lucide-react";

const healthTopics = [
  {
    id: "preventive",
    title: "Preventive Healthcare",
    description: "Daily health tips & prevention",
    icon: Shield,
    color: "text-primary",
    queries: [
      "How to prevent common diseases?",
      "Daily health habits",
      "Nutrition guidelines"
    ]
  },
  {
    id: "symptoms",
    title: "Disease Symptoms",
    description: "Recognize warning signs",
    icon: AlertTriangle,
    color: "text-destructive",
    queries: [
      "Fever symptoms to watch",
      "When to seek medical help",
      "Common illness signs"
    ]
  },
  {
    id: "vaccination",
    title: "Vaccination Schedule",
    description: "Immunization timelines",
    icon: Syringe,
    color: "text-secondary",
    queries: [
      "Child vaccination schedule",
      "Adult booster shots",
      "Vaccine side effects"
    ]
  },
  {
    id: "maternal",
    title: "Maternal Health",
    description: "Pregnancy & child care",
    icon: Baby,
    color: "text-accent",
    queries: [
      "Pregnancy care tips",
      "Newborn health",
      "Breastfeeding guidance"
    ]
  },
  {
    id: "chronic",
    title: "Chronic Conditions",
    description: "Managing long-term health",
    icon: Heart,
    color: "text-primary",
    queries: [
      "Diabetes management",
      "Blood pressure control",
      "Heart health tips"
    ]
  },
  {
    id: "community",
    title: "Community Health",
    description: "Public health updates",
    icon: Users,
    color: "text-secondary",
    queries: [
      "Local health alerts",
      "Outbreak prevention",
      "Community programs"
    ]
  }
];

interface HealthTopicsProps {
  onTopicSelect: (topic: string, query: string) => void;
}

export const HealthTopics = ({ onTopicSelect }: HealthTopicsProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
      {healthTopics.map((topic) => {
        const IconComponent = topic.icon;
        return (
          <Card key={topic.id} className="p-4 shadow-card hover:shadow-soft transition-shadow border-border/20">
            <div className="flex items-start gap-3 mb-3">
              <div className={`p-2 rounded-lg bg-background ${topic.color}`}>
                <IconComponent className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold text-sm">{topic.title}</h3>
                <p className="text-xs text-muted-foreground">{topic.description}</p>
              </div>
            </div>
            
            <div className="space-y-1">
              {topic.queries.map((query, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  size="sm"
                  onClick={() => onTopicSelect(topic.id, query)}
                  className="w-full justify-start text-left h-auto py-1 px-2 text-xs hover:bg-primary/5"
                >
                  {query}
                </Button>
              ))}
            </div>
          </Card>
        );
      })}
    </div>
  );
};