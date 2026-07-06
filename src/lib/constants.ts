export const COMPANY_INFO = {
  name: "Lithionix Software LLP",
  tagline: "Transforming Ideas into Intelligent Digital Solutions",
  email: {
    support: "support@lithionixgroup.in",
    sales: "sales@lithionixgroup.in",
  },
  phone: "+91-9627941300",
  address: {
    street: "Pindari Road",
    city: "Bageshwar",
    state: "Uttarakhand",
    pincode: "263642",
    country: "India",
  },
  officeHours: "Monday - Saturday: 9:00 AM - 6:00 PM",
  // TODO: Verify these social media URLs point to the official Lithionix Software LLP profiles
  social: {
    linkedin: "https://linkedin.com/company/lithionix",
    facebook: "https://facebook.com/lithionix",
    instagram: "https://instagram.com/lithionix",
    github: "https://github.com/lithionix",
  },
  gst: "05AALFL3596M1ZO",
  cin: "XXXXXXXXXXXXX",
} as const;

export const SERVICES = [
  {
    id: "custom-software",
    title: "Custom Software Development",
    description: "Tailored software solutions built to address your unique business challenges and drive growth.",
    icon: "Code2",
  },
  {
    id: "web-development",
    title: "Web Development",
    description: "Responsive, high-performance web applications using modern frameworks and best practices.",
    icon: "Globe",
  },
  {
    id: "mobile-app",
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications that deliver exceptional user experiences.",
    icon: "Smartphone",
  },
  {
    id: "ai-solutions",
    title: "AI Solutions",
    description: "Intelligent automation and AI-powered solutions to transform your business operations.",
    icon: "Brain",
  },
  {
    id: "machine-learning",
    title: "Machine Learning",
    description: "Custom ML models that learn from data to make intelligent predictions and decisions.",
    icon: "TrendingUp",
  },
  {
    id: "generative-ai",
    title: "Generative AI",
    description: "Advanced generative AI solutions for content creation, synthesis, and innovation.",
    icon: "Sparkles",
  },
  {
    id: "llm-development",
    title: "LLM Development",
    description: "Large Language Model customization and deployment for enterprise applications.",
    icon: "MessageSquare",
  },
  {
    id: "rag-applications",
    title: "RAG Applications",
    description: "Retrieval-Augmented Generation systems for accurate, context-aware AI responses.",
    icon: "Database",
  },
  {
    id: "chatbot-development",
    title: "Chatbot Development",
    description: "Intelligent conversational AI chatbots for customer support and engagement.",
    icon: "Bot",
  },
  {
    id: "computer-vision",
    title: "Computer Vision",
    description: "Advanced image and video analysis solutions for automation and insights.",
    icon: "Eye",
  },
  {
    id: "face-recognition",
    title: "Face Recognition",
    description: "Biometric face recognition systems for security and authentication.",
    icon: "Scan",
  },
  {
    id: "erp-development",
    title: "ERP Development",
    description: "Enterprise Resource Planning systems to streamline business processes.",
    icon: "Package",
  },
  {
    id: "crm-development",
    title: "CRM Development",
    description: "Customer Relationship Management solutions to enhance customer engagement.",
    icon: "Users",
  },
  {
    id: "saas-development",
    title: "SaaS Development",
    description: "Scalable Software-as-a-Service platforms for modern businesses.",
    icon: "Cloud",
  },
  {
    id: "cloud-solutions",
    title: "Cloud Solutions",
    description: "Cloud architecture, migration, and managed services for optimal performance.",
    icon: "CloudCog",
  },
  {
    id: "devops",
    title: "DevOps",
    description: "CI/CD pipelines, infrastructure automation, and DevOps practices for faster delivery.",
    icon: "GitBranch",
  },
  {
    id: "mlops",
    title: "MLOps",
    description: "ML model deployment, monitoring, and lifecycle management at scale.",
    icon: "Workflow",
  },
  {
    id: "data-engineering",
    title: "Data Engineering",
    description: "Data pipelines, warehouses, and analytics infrastructure for data-driven decisions.",
    icon: "BarChart3",
  },
  {
    id: "api-development",
    title: "API Development",
    description: "RESTful and GraphQL APIs for seamless system integration and connectivity.",
    icon: "Puzzle",
  },
  {
    id: "ui-ux-design",
    title: "UI/UX Design",
    description: "User-centered design that creates intuitive and engaging digital experiences.",
    icon: "Palette",
  },
  {
    id: "software-consulting",
    title: "Software Consulting",
    description: "Expert technology consulting to guide your digital transformation journey.",
    icon: "Lightbulb",
  },
] as const;

export const INDUSTRIES = [
  { id: "healthcare", title: "Healthcare", icon: "HeartPulse" },
  { id: "education", title: "Education", icon: "GraduationCap" },
  { id: "government", title: "Government", icon: "Building2" },
  { id: "retail", title: "Retail", icon: "ShoppingCart" },
  { id: "manufacturing", title: "Manufacturing", icon: "Factory" },
  { id: "finance", title: "Finance", icon: "Banknote" },
  { id: "logistics", title: "Logistics", icon: "Truck" },
  { id: "media", title: "Media", icon: "Radio" },
  { id: "hospital", title: "Hospital", icon: "Hospital" },
  { id: "food-delivery", title: "Food Delivery", icon: "UtensilsCrossed" },
  { id: "real-estate", title: "Real Estate", icon: "Home" },
] as const;

export const TECHNOLOGIES = [
  "React", "Next.js", "Node.js", "Python", "Django", "FastAPI",
  "TensorFlow", "PyTorch", "OpenAI", "LangChain", "PostgreSQL",
  "MongoDB", "Redis", "AWS", "Azure", "GCP", "Docker", "Kubernetes",
  "React Native", "Flutter", "Swift", "Kotlin", "TypeScript",
  "GraphQL", "REST API", "Microservices", "Terraform", "GitHub Actions"
];

export const PROCESS_STEPS = [
  {
    step: "01",
    title: "Discovery & Planning",
    description: "We understand your business needs, goals, and challenges through detailed consultations.",
  },
  {
    step: "02",
    title: "Design & Prototype",
    description: "Creating intuitive designs and interactive prototypes for your review and feedback.",
  },
  {
    step: "03",
    title: "Development & Testing",
    description: "Building robust solutions with rigorous testing to ensure quality and performance.",
  },
  {
    step: "04",
    title: "Deployment & Support",
    description: "Seamless deployment with continuous monitoring and dedicated support.",
  },
];

export const STATS = [
  { value: 50, suffix: "+", label: "Projects Delivered" },
  { value: 30, suffix: "+", label: "Happy Clients" },
  { value: 15, suffix: "+", label: "Team Members" },
  { value: 5, suffix: "+", label: "Years Experience" },
];

export const NAVIGATION_ITEMS = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Solutions", href: "/solutions" },
  { name: "Industries", href: "/industries" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Case Studies", href: "/case-studies" },
  { name: "Technologies", href: "/technologies" },
  { name: "Careers", href: "/careers" },
  { name: "Blog", href: "/blog" },
  { name: "Contact Us", href: "/contact" },
];

export const FOOTER_LINKS = {
  services: [
    { name: "Custom Software Development", href: "/services#custom-software" },
    { name: "Web Development", href: "/services#web-development" },
    { name: "Mobile App Development", href: "/services#mobile-app" },
    { name: "AI Solutions", href: "/services#ai-solutions" },
    { name: "Cloud Solutions", href: "/services#cloud-solutions" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Careers", href: "/careers" },
    { name: "Blog", href: "/blog" },
    { name: "Contact Us", href: "/contact" },
  ],
  resources: [
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Terms & Conditions", href: "/terms" },
    { name: "Refund Policy", href: "/refund-policy" },
    { name: "Cookie Policy", href: "/cookie-policy" },
  ],
};