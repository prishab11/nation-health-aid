import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Globe, Check } from "lucide-react";

const languages = [
  { code: "en", name: "English", nativeName: "English" },
  { code: "hi", name: "Hindi", nativeName: "हिन्दी" },
  { code: "bn", name: "Bengali", nativeName: "বাংলা" },
  { code: "te", name: "Telugu", nativeName: "తెలుగు" },
  { code: "mr", name: "Marathi", nativeName: "मराठी" },
  { code: "ta", name: "Tamil", nativeName: "தமிழ்" },
  { code: "gu", name: "Gujarati", nativeName: "ગુજરાતી" },
  { code: "kn", name: "Kannada", nativeName: "ಕನ್ನಡ" },
];

interface LanguageSelectorProps {
  selectedLanguage: string;
  onLanguageChange: (language: string) => void;
  isOpen: boolean;
  onToggle: () => void;
}

export const LanguageSelector = ({ 
  selectedLanguage, 
  onLanguageChange, 
  isOpen, 
  onToggle 
}: LanguageSelectorProps) => {
  const currentLanguage = languages.find(lang => lang.code === selectedLanguage);

  return (
    <div className="relative">
      <Button
        variant="outline"
        size="sm"
        onClick={onToggle}
        className="gap-2 border-border/50 hover:border-primary hover:text-primary"
      >
        <Globe className="h-4 w-4" />
        <span className="hidden sm:inline">{currentLanguage?.nativeName}</span>
        <span className="sm:hidden">{currentLanguage?.code.toUpperCase()}</span>
      </Button>

      {isOpen && (
        <Card className="absolute top-full mt-2 right-0 w-64 p-2 shadow-card z-50 bg-card border border-border/20">
          <div className="grid grid-cols-2 gap-1">
            {languages.map((language) => (
              <Button
                key={language.code}
                variant="ghost"
                size="sm"
                onClick={() => {
                  onLanguageChange(language.code);
                  onToggle();
                }}
                className="justify-start gap-2 h-auto py-2 px-3 text-left"
              >
                <div className="flex items-center gap-2 w-full">
                  <div className="flex-1">
                    <div className="font-medium text-xs">{language.name}</div>
                    <div className="text-xs text-muted-foreground">{language.nativeName}</div>
                  </div>
                  {selectedLanguage === language.code && (
                    <Check className="h-3 w-3 text-primary" />
                  )}
                </div>
              </Button>
            ))}
          </div>
        </Card>
      )}
    </div>
  );
};