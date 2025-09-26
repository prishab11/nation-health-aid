import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { LanguageSelector } from "@/components/LanguageSelector";
import { ChatMessage } from "@/components/ChatMessage";
import { HealthTopics } from "@/components/HealthTopics";
import { ChatInput } from "@/components/ChatInput";
import { Heart, Bot, Shield, Bell, Users } from "lucide-react";
import heroImage from "@/assets/healthcare-hero.jpg";

interface Message {
  id: string;
  content: string;
  isBot: boolean;
  timestamp: string;
}

const Index = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("en");
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);

  // Initial welcome message
  useEffect(() => {
    const welcomeMessage: Message = {
      id: "welcome",
      content: "Namaste! I'm your AI Health Assistant. I'm here to help you with preventive healthcare, disease symptoms, vaccination schedules, and health information. How can I assist you today?",
      isBot: true,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    setMessages([welcomeMessage]);
  }, []);

  const handleSendMessage = async (content: string) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      content,
      isBot: false,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMessage]);
    setIsTyping(true);

    // Simulate AI response (replace with actual AI integration)
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: generateHealthResponse(content),
        isBot: true,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const handleTopicSelect = (topic: string, query: string) => {
    handleSendMessage(query);
  };

  const generateHealthResponse = (query: string): string => {
    const lowerQuery = query.toLowerCase();
    
    if (lowerQuery.includes("fever") || lowerQuery.includes("temperature")) {
      return "For fever: Monitor temperature regularly. Drink plenty of fluids, rest well. Seek medical attention if fever exceeds 102°F (39°C), persists for more than 3 days, or is accompanied by severe symptoms like difficulty breathing, persistent vomiting, or severe headache.";
    }
    
    if (lowerQuery.includes("vaccination") || lowerQuery.includes("vaccine")) {
      return "Common vaccination schedule: Infants need vaccines at birth, 6 weeks, 10 weeks, 14 weeks, and 9 months. Adults should get annual flu shots and COVID-19 boosters as recommended. Consult your local health center for the complete immunization chart.";
    }
    
    if (lowerQuery.includes("nutrition") || lowerQuery.includes("diet")) {
      return "Healthy nutrition tips: Include fruits, vegetables, whole grains, and proteins in your diet. Drink 8-10 glasses of water daily. Limit processed foods, sugar, and salt. Eat 5 portions of fruits and vegetables daily for optimal health.";
    }
    
    if (lowerQuery.includes("pregnancy") || lowerQuery.includes("maternal")) {
      return "Pregnancy care: Regular prenatal checkups are essential. Take folic acid supplements, eat nutritious foods, avoid alcohol and smoking. Get adequate rest and gentle exercise. Immediate medical care needed for bleeding, severe nausea, or unusual pain.";
    }
    
    return "Thank you for your question about health. For specific medical advice, please consult with a healthcare professional. I can provide general health information about prevention, symptoms to watch for, and when to seek medical care. What specific health topic would you like to know more about?";
  };

  return (
    <div className="min-h-screen gradient-subtle">
      {/* Header */}
      <header className="bg-card shadow-soft border-b border-border/20">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center">
                <Heart className="h-5 w-5 text-primary-foreground" />
              </div>
              <div>
                <h1 className="font-bold text-lg text-foreground">HealthAI Assistant</h1>
                <p className="text-xs text-muted-foreground">Rural Healthcare Education</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <Badge variant="secondary" className="hidden sm:flex items-center gap-1">
                <Users className="h-3 w-3" />
                24/7 Available
              </Badge>
              <LanguageSelector
                selectedLanguage={selectedLanguage}
                onLanguageChange={setSelectedLanguage}
                isOpen={isLanguageOpen}
                onToggle={() => setIsLanguageOpen(!isLanguageOpen)}
              />
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Hero Section */}
          <div className="lg:col-span-3 mb-6">
            <Card className="relative overflow-hidden shadow-card border-border/20">
              <div className="absolute inset-0">
                <img 
                  src={heroImage} 
                  alt="Healthcare for rural communities" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-transparent" />
              </div>
              <div className="relative p-8 text-primary-foreground">
                <div className="max-w-2xl">
                  <h2 className="text-3xl font-bold mb-4">
                    Healthcare Information at Your Fingertips
                  </h2>
                  <p className="text-lg mb-6 opacity-90">
                    Get reliable health advice, prevention tips, and know when to seek medical care. 
                    Available 24/7 in your preferred language.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <Badge className="bg-primary-foreground text-primary">
                      <Shield className="h-3 w-3 mr-1" />
                      Disease Prevention
                    </Badge>
                    <Badge className="bg-primary-foreground text-primary">
                      <Bot className="h-3 w-3 mr-1" />
                      AI-Powered
                    </Badge>
                    <Badge className="bg-primary-foreground text-primary">
                      <Bell className="h-3 w-3 mr-1" />
                      Real-time Updates
                    </Badge>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Health Topics */}
          <div className="lg:col-span-3">
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">Quick Health Topics</h3>
              <p className="text-muted-foreground text-sm">Click on any topic to get instant information</p>
            </div>
            <HealthTopics onTopicSelect={handleTopicSelect} />
          </div>

          {/* Chat Interface */}
          <div className="lg:col-span-3">
            <Card className="h-[600px] flex flex-col shadow-card border-border/20">
              <div className="p-4 border-b border-border/20 bg-card">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-secondary animate-pulse"></div>
                  <span className="text-sm font-medium">AI Health Assistant</span>
                  <Badge variant="outline" className="ml-auto text-xs">Online</Badge>
                </div>
              </div>

              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((message) => (
                  <ChatMessage
                    key={message.id}
                    message={message.content}
                    isBot={message.isBot}
                    timestamp={message.timestamp}
                  />
                ))}
                
                {isTyping && (
                  <div className="flex gap-3 justify-start">
                    <div className="w-8 h-8 rounded-full gradient-primary flex items-center justify-center">
                      <Bot className="h-4 w-4 text-primary-foreground" />
                    </div>
                    <Card className="p-3 bg-card border-border/20">
                      <div className="flex gap-1">
                        <div className="w-2 h-2 rounded-full bg-primary animate-bounce"></div>
                        <div className="w-2 h-2 rounded-full bg-primary animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 rounded-full bg-primary animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                    </Card>
                  </div>
                )}
              </div>

              <ChatInput 
                onSendMessage={handleSendMessage}
                disabled={isTyping}
                placeholder={`Ask me about health in ${selectedLanguage === 'en' ? 'English' : 'your language'}...`}
              />
            </Card>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-card border-t border-border/20 mt-12">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="text-center text-sm text-muted-foreground">
            <p className="mb-2">
              ⚠️ This AI assistant provides general health information only. 
              Always consult healthcare professionals for medical advice.
            </p>
            <p>Built for rural healthcare education • Available 24/7</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;