export interface AssessmentQuestion {
  id: string;
  category: "Control Environment" | "Risk Assessment" | "Control Activities" | "Information & Communication" | "Monitoring";
  categoryIndo: string;
  text: string;
  options: {
    score: number;
    text: string;
  }[];
}

export interface AssessmentResult {
  scores: Record<string, number>; // category -> average score
  totalScore: number;
  maxScore: number;
  percentage: number;
  maturityLevel: number;
  maturityLabel: string;
}

export interface ChatMessage {
  id: string;
  sender: "user" | "bot";
  text: string;
  timestamp: Date;
}

export interface ClientProfile {
  name: string;
  logo: string;
  sector: "BUMN" | "Banking";
  description: string;
  challenges: string[];
  solutions: string[];
}

export interface InquiryForm {
  name: string;
  company: string;
  email: string;
  phone: string;
  sector: "BUMN" | "Banking" | "Swasta" | "Lainnya";
  service: "GRC Implementation" | "ICOFR Framework" | "IT General Controls (ITGC)" | "Audit Readiness" | "Custom Consultation";
  message: string;
}
