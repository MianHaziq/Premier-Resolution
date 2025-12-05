/**
 * Service Page Content Data
 *
 * To add content:
 * 1. Use **text** for inline bold text
 * 2. Structure: sections > subSections > paragraphs/bullets
 *
 * Types:
 * - "main": Green heading with underline
 * - "sub": Black bold sub-heading
 */

// Debt Collection Service Data (Example from image)
export const debtCollectionData = {
  sections: [
    {
      type: "main",
      heading: "Comprehensive Bankruptcy Recovery Solutions?",
      intro:
        "Here are some processes we provide data-backed, expert-driven guidance on:",
      subSections: [
        {
          heading: "Bankruptcy Scrubbing",
          paragraphs: [
            {
              text: "Optimize your portfolio by ensuring you get a **scrubbed list of bankruptcy filings** to help you identify accounts impacted by bankruptcy terms.",
            },
          ],
        },
        {
          heading: "Data Integration for Seamless Updates",
          paragraphs: [
            {
              text: "It is important to stay informed of recent filings to monitor as they occur. We integrate updated bankruptcy data directly into your systems, enabling real-time monitoring. Our service provides timely alerts for new filings that may impact your accounts, with customizable notifications based on **account type**, **bankruptcy chapter**, or other relevant criteria.",
            },
          ],
        },
        {
          heading: "Sequential Reporting for Transparency",
          paragraphs: [
            {
              text: "We enable ongoing monitoring of accounts subject to bankruptcy proceedings. Our detailed, **real-time reports** include essential data such as case numbers, filing dates, and affected amounts. This allows you to **keep your portfolio compliant** and up to date with regularly refreshed bankruptcy data.",
            },
          ],
        },
      ],
    },
    {
      type: "main",
      heading: "Claims Management Services?",
      subSections: [
        {
          heading: "Efficient Claims Filing",
          paragraphs: [
            {
              text: "Protect your rights as a creditor by filing accurate and timely bankruptcy claims. We ensure your claims are properly classified into categories such as secured, unsecured, priority, and administrative claims. Each type of claim is carefully reviewed to maximize recovery.",
            },
          ],
          bullets: [
            {
              label: "Secured Claims",
              text: "Backed by collateral, ensuring higher recovery priority.",
            },
            {
              label: "Unsecured Claims",
              text: "Divided into priority (e.g., taxes, child support) and non-priority claims.",
            },
            {
              label: "Administrative Claims",
              text: "Covering bankruptcy process expenses.",
            },
            {
              label: "Equity Security Interests",
              text: "Addressing stock or equity claims.",
            },
            {
              label: "Contingent & Disputed Claims",
              text: "Handling claims dependent on future events or contested in court.",
            },
          ],
        },
        {
          heading: "Reclamation Claims",
          paragraphs: [
            {
              text: "We help creditors recover goods sold to insolvent parties shortly before bankruptcy. Reclamation demands must be filed within strict deadlines, ensuring compliance and protection of your rights. If goods are still in the debtor's possession, we work to recover them on your behalf.",
            },
            {
              text: "Timing is critical when asserting a reclamation claim in bankruptcy:",
            },
          ],
        },
        {
          heading: "Eligibility for Reclamation Claims",
          introText: "A seller may assert a reclamation claim if:",
          bullets: [
            {
              text: "The debtor received the goods **while insolvent** (meaning they were unable to pay their debts as they became due).",
            },
            {
              text: "The seller demands the return of the goods **in writing** within **45 days** of delivery.",
            },
            {
              text: "If the buyer files for bankruptcy, the seller must make the demand **within 20 days after the bankruptcy filing**, even if the 45-day period hasn't expired.",
            },
          ],
        },
      ],
    },
    {
      type: "main",
      heading: "Preference Defense?",
      subSections: [
        {
          heading: "Preference Defense",
          paragraphs: [
            {
              text: "For companies facing preference claims, we offer robust defense strategies. We have a team of licensed attorneys in all 50 states to strategically navigate preference claims for the most favorable outcome for creditors. Our team works to consequently reverse and defend claims where payments were made within the preference period.",
            },
          ],
          introText: "Key preference defenses include:",
        },
        {
          paragraphs: [
            {
              text: "**Ordinary Course of Business Defense**: If a payment was made in the ordinary course of business, following usual payment practices and within industry norms, we can argue that it should not be considered payment.",
            },
          ],
          bullets: [
            {
              label: "New Value Defense",
              text: "If a creditor extended new value (goods or services) to the insolvent party after receiving a payment during the preference period, this defense may be used to reduce or eliminate the preference claim.",
            },
            {
              label: "Contemporaneous Exchange Defense",
              text: "This defense applies if the transfer was made as part of a contemporaneous exchange for new value, meaning the payment was made in exchange for something of equal value at the same time.",
            },
            {
              label: "Subsequent New Value Defense",
              text: "This defense asserts that the creditor provided new value to the debtor after receiving the preference payment, and this new value offsets the preference demand.",
            },
            {
              label: "Substantially Contemporaneous Exchange",
              text: "If the payment was made at roughly the same time as the creditor extended new value, this may support the defense that the transaction was fair and legitimate.",
            },
            {
              label: "De Minimis Defense",
              text: "If the amount involved in the preference payment is very small (below a specified threshold), the claim may be challenged based on its minimal value.",
            },
            {
              label: "Insider Defense",
              text: "If the payment was made to an insider (i.e., a relative or affiliated company), we can argue that the transaction should not be subject to recovery due to the specific protections provided under bankruptcy law.",
            },
          ],
        },
        {
          paragraphs: [
            {
              text: "Our team leverages these defenses to reduce or eliminate repayment exposure and minimize financial liability. We focus on protecting your assets while ensuring compliance with bankruptcy law.",
            },
          ],
        },
      ],
    },
    {
      type: "main",
      heading: "Why Choose Premiere Resolutions?",
      bullets: [
        {
          label: "Tailored Expertise",
          text: "Our deep understanding of bankruptcy law ensures accurate and timely filing of your claims, maintaining compliance as the foremost priority.",
        },
        {
          label: "Comprehensive Solutions",
          text: "From monitoring and claims filing to preference defense, we offer end-to-end support. As each bankruptcy claim poses unique challenges, we tailor our approach to deliver the best outcome to you.",
        },
        {
          label: "Technology-Driven",
          text: "Our real-time updates and seamless integration help you manage the claims process more efficiently.",
        },
        {
          label: "Results-Oriented Approach",
          text: "We prioritize protecting your interests and maximizing your recovery.",
        },
      ],
    },
    {
      type: "main",
      heading: "Take Control of Bankruptcy Challenges Today?",
      paragraphs: [
        {
          text: "Premiere Resolutions is here to guide you through bankruptcy claims filing, preference defense enabling comprehensive bankruptcy solutions providing a steady path through complex and time-sensitive bankruptcy challenges.",
        },
        {
          text: "**Let us help you protect your assets and recover what's rightfully yours.**",
          bold: true,
        },
      ],
    },
  ],
};

// Email Support Service Data (Example template)
export const emailSupportData = {
  sections: [
    {
      type: "main",
      heading: "Professional Email Marketing Solutions",
      intro:
        "Transform your customer communication with our comprehensive email marketing services:",
      subSections: [
        {
          heading: "Strategic Campaign Management",
          paragraphs: [
            {
              text: "Our team designs and executes **targeted email campaigns** that engage your audience and drive measurable results. We handle everything from content creation to delivery optimization.",
            },
          ],
        },
        {
          heading: "List Management & Segmentation",
          paragraphs: [
            {
              text: "We help you maintain **clean, organized email lists** with advanced segmentation strategies. This ensures your messages reach the right audience at the right time.",
            },
          ],
        },
      ],
    },
    {
      type: "main",
      heading: "Our Email Services Include",
      bullets: [
        {
          label: "Campaign Design",
          text: "Professional, mobile-responsive email templates that reflect your brand.",
        },
        {
          label: "A/B Testing",
          text: "Data-driven optimization to improve open rates and conversions.",
        },
        {
          label: "Automation Workflows",
          text: "Triggered email sequences for customer journeys and lead nurturing.",
        },
        {
          label: "Analytics & Reporting",
          text: "Comprehensive metrics to track campaign performance and ROI.",
        },
      ],
    },
    {
      type: "main",
      heading: "Why Partner With Us?",
      paragraphs: [
        {
          text: "With years of experience in email marketing, we deliver campaigns that not only reach inboxes but also drive action. Our data-driven approach ensures continuous improvement and maximum engagement.",
        },
        {
          text: "**Ready to elevate your email marketing? Contact us today.**",
          bold: true,
        },
      ],
    },
  ],
};

// Customer Services Data (Example template)
export const customerServicesData = {
  sections: [
    {
      type: "main",
      heading: "Complete Call Center Solutions",
      intro:
        "Deliver exceptional customer experiences with our professional call center services:",
      subSections: [
        {
          heading: "Inbound Support",
          paragraphs: [
            {
              text: "Our trained agents handle **customer inquiries, technical support, and order processing** with professionalism and efficiency. We ensure every interaction reflects your brand values.",
            },
          ],
        },
        {
          heading: "Outbound Campaigns",
          paragraphs: [
            {
              text: "From **lead generation to customer surveys**, our outbound team executes campaigns that deliver results. We use proven scripts and strategies tailored to your goals.",
            },
          ],
        },
      ],
    },
    {
      type: "main",
      heading: "Service Features",
      bullets: [
        {
          label: "24/7 Availability",
          text: "Round-the-clock support to serve your customers anytime.",
        },
        {
          label: "Multi-Channel Support",
          text: "Phone, email, and chat integration for seamless communication.",
        },
        {
          label: "Quality Assurance",
          text: "Regular monitoring and training to maintain service excellence.",
        },
        {
          label: "Scalable Teams",
          text: "Flexible staffing to match your business needs and seasonal demands.",
        },
      ],
    },
    {
      type: "main",
      heading: "Get Started Today",
      paragraphs: [
        {
          text: "Transform your customer service operations with a dedicated team that cares about your success as much as you do.",
        },
        {
          text: "**Contact us to discuss your call center needs.**",
          bold: true,
        },
      ],
    },
  ],
};

// Live Chat Support Data
export const liveChatSupportData = {
  sections: [
    {
      type: "main",
      heading: "Real-Time Customer Engagement",
      intro:
        "Connect with your customers instantly through our professional live chat services:",
      subSections: [
        {
          heading: "Instant Response",
          paragraphs: [
            {
              text: "Our chat agents provide **immediate assistance** to website visitors, answering questions, resolving issues, and guiding customers through their journey.",
            },
          ],
        },
        {
          heading: "Proactive Engagement",
          paragraphs: [
            {
              text: "We don't wait for customers to reach out. Our team **proactively engages visitors** based on behavior triggers, increasing conversions and reducing cart abandonment.",
            },
          ],
        },
      ],
    },
    {
      type: "main",
      heading: "Chat Support Benefits",
      bullets: [
        {
          label: "Reduced Wait Times",
          text: "Instant responses that keep customers engaged and satisfied.",
        },
        {
          label: "Multi-Tasking Capability",
          text: "Agents handle multiple chats simultaneously for efficiency.",
        },
        {
          label: "Chat Transcripts",
          text: "Complete records of all conversations for quality and training.",
        },
        {
          label: "Integration Ready",
          text: "Seamless connection with your CRM and helpdesk systems.",
        },
      ],
    },
    {
      type: "main",
      heading: "Elevate Your Customer Experience",
      paragraphs: [
        {
          text: "Live chat is the fastest-growing customer service channel. Let us help you meet customers where they are and provide the instant support they expect.",
        },
        {
          text: "**Start your live chat journey with Premiere Resolutions.**",
          bold: true,
        },
      ],
    },
  ],
};

// AI Chatbot Data
export const aiChatbotData = {
  sections: [
    {
      type: "main",
      heading: "Intelligent Automation Solutions",
      intro:
        "Revolutionize your customer service with AI-powered chatbot technology:",
      subSections: [
        {
          heading: "24/7 Automated Support",
          paragraphs: [
            {
              text: "Our AI chatbots provide **round-the-clock assistance**, handling common queries instantly while freeing your human agents for complex issues.",
            },
          ],
        },
        {
          heading: "Natural Language Processing",
          paragraphs: [
            {
              text: "Advanced **NLP technology** ensures our chatbots understand customer intent and provide accurate, helpful responses in conversational language.",
            },
          ],
        },
      ],
    },
    {
      type: "main",
      heading: "AI Chatbot Capabilities",
      bullets: [
        {
          label: "Smart Routing",
          text: "Automatically escalate complex issues to human agents when needed.",
        },
        {
          label: "Learning System",
          text: "Continuously improves responses based on customer interactions.",
        },
        {
          label: "Multi-Platform",
          text: "Deploy across website, mobile app, and social media channels.",
        },
        {
          label: "Analytics Dashboard",
          text: "Track performance, common queries, and customer satisfaction.",
        },
      ],
    },
    {
      type: "main",
      heading: "Transform Your Support Today",
      paragraphs: [
        {
          text: "AI chatbots reduce response times, cut support costs, and improve customer satisfaction. Let us build a solution tailored to your business needs.",
        },
        {
          text: "**Discover the power of AI-driven customer service.**",
          bold: true,
        },
      ],
    },
  ],
};

// Business Management Data
export const businessManagementData = {
  sections: [
    {
      type: "main",
      heading: "Streamlined Business Operations",
      intro:
        "Optimize your business processes with our comprehensive management support:",
      subSections: [
        {
          heading: "Process Optimization",
          paragraphs: [
            {
              text: "We analyze your current workflows and implement **efficient processes** that reduce costs, save time, and improve overall productivity.",
            },
          ],
        },
        {
          heading: "Administrative Support",
          paragraphs: [
            {
              text: "Our team handles **day-to-day administrative tasks**, allowing you to focus on strategic growth and core business activities.",
            },
          ],
        },
      ],
    },
    {
      type: "main",
      heading: "Management Services",
      bullets: [
        {
          label: "Data Entry & Management",
          text: "Accurate, timely data processing and organization.",
        },
        {
          label: "Document Processing",
          text: "Handling invoices, contracts, and business documentation.",
        },
        {
          label: "Reporting & Analytics",
          text: "Regular business intelligence reports for informed decisions.",
        },
        {
          label: "Project Coordination",
          text: "Keeping your initiatives on track and on budget.",
        },
      ],
    },
    {
      type: "main",
      heading: "Partner for Growth",
      paragraphs: [
        {
          text: "Business management support is the backbone of successful operations. Let us handle the details while you focus on what matters most—growing your business.",
        },
        {
          text: "**Connect with us to streamline your operations.**",
          bold: true,
        },
      ],
    },
  ],
};

// Sales Services Data
export const salesServicesData = {
  sections: [
    {
      type: "main",
      heading: "Revenue-Driving Sales Solutions",
      intro:
        "Accelerate your sales growth with our professional sales support services:",
      subSections: [
        {
          heading: "Lead Generation",
          paragraphs: [
            {
              text: "Our team identifies and qualifies **high-quality leads** through targeted outreach, ensuring your sales pipeline stays full of potential customers.",
            },
          ],
        },
        {
          heading: "Appointment Setting",
          paragraphs: [
            {
              text: "We schedule **qualified appointments** with decision-makers, giving your sales team more opportunities to close deals.",
            },
          ],
        },
      ],
    },
    {
      type: "main",
      heading: "Sales Support Services",
      bullets: [
        {
          label: "Outbound Calling",
          text: "Professional cold and warm calling campaigns that generate results.",
        },
        {
          label: "CRM Management",
          text: "Keep your customer data organized and actionable.",
        },
        {
          label: "Sales Reporting",
          text: "Track performance metrics and optimize your sales strategy.",
        },
        {
          label: "Follow-Up Sequences",
          text: "Persistent, professional follow-up to maximize conversions.",
        },
      ],
    },
    {
      type: "main",
      heading: "Boost Your Sales Today",
      paragraphs: [
        {
          text: "With our experienced sales support team, you can focus on closing deals while we handle prospecting, qualification, and pipeline management.",
        },
        {
          text: "**Let's drive your revenue growth together.**",
          bold: true,
        },
      ],
    },
  ],
};

// BPO Operations Data
export const bpoOperationsData = {
  sections: [
    {
      type: "main",
      heading: "End-to-End BPO Solutions",
      intro:
        "Transform your business operations with our comprehensive outsourcing services:",
      subSections: [
        {
          heading: "Back-Office Operations",
          paragraphs: [
            {
              text: "We handle **critical back-office functions** including data processing, document management, and administrative tasks with precision and efficiency.",
            },
          ],
        },
        {
          heading: "Front-Office Support",
          paragraphs: [
            {
              text: "Our **customer-facing teams** represent your brand professionally, handling inquiries, sales, and support across multiple channels.",
            },
          ],
        },
      ],
    },
    {
      type: "main",
      heading: "BPO Service Areas",
      bullets: [
        {
          label: "Finance & Accounting",
          text: "Bookkeeping, invoicing, and financial reporting services.",
        },
        {
          label: "HR Operations",
          text: "Payroll processing, recruitment support, and employee management.",
        },
        {
          label: "IT Support",
          text: "Technical helpdesk and system maintenance services.",
        },
        {
          label: "Supply Chain",
          text: "Order processing, inventory management, and logistics coordination.",
        },
      ],
    },
    {
      type: "main",
      heading: "Scale With Confidence",
      paragraphs: [
        {
          text: "Our BPO solutions give you the flexibility to scale operations without the overhead of building internal teams. Focus on your core business while we handle the rest.",
        },
        {
          text: "**Partner with Premiere Resolutions for operational excellence.**",
          bold: true,
        },
      ],
    },
  ],
};

/**
 * FAQ Section Data
 *
 * Structure:
 * - title: Main heading on left side
 * - subtitle: Description text below heading
 * - tabs: Array of tab objects, each with:
 *   - label: Tab button text
 *   - questions: Array of {question, answer} objects
 */

// Default FAQ Data (can be customized per service)
export const defaultFAQData = {
  title: "We are here to help you",
  subtitle:
    "You can find our frequently asked questions and exact answers without contacting directly supporters",
  tabs: [
    {
      label: "General",
      questions: [
        {
          question: "Can you customize call center solutions for my business?",
          answer:
            "Yes. All our services are fully customizable based on your workflow, customer needs, and operational goals.",
        },
        {
          question: "Do you offer 24/7 customer support?",
          answer:
            "Yes, we provide round-the-clock customer support services to ensure your customers always have access to assistance whenever they need it.",
        },
        {
          question: "Can I scale the team as my business grows?",
          answer:
            "Absolutely. Our flexible staffing model allows you to scale up or down based on your business requirements without any long-term commitments.",
        },
        {
          question: "Do you offer Call center support?",
          answer:
            "Yes, we offer comprehensive call center support including inbound, outbound, and blended services tailored to your specific needs.",
        },
        {
          question: "What is the onboarding process?",
          answer:
            "Our onboarding process includes discovery, planning, training, and a seamless transition period to ensure your team is fully prepared for success.",
        },
        {
          question: "How do you handle customer data and privacy?",
          answer:
            "We follow strict data protection protocols and comply with all relevant privacy regulations including GDPR and CCPA to keep your data secure.",
        },
      ],
    },
    {
      label: "Price",
      questions: [
        {
          question: "What are your pricing models?",
          answer:
            "We offer flexible pricing models including per-hour, per-agent, per-transaction, and performance-based options to suit your budget.",
        },
        {
          question: "Are there any setup fees?",
          answer:
            "Setup fees vary based on the complexity of your requirements. We provide transparent pricing with no hidden costs. Contact us for a custom quote.",
        },
        {
          question: "Do you offer volume discounts?",
          answer:
            "Yes, we provide competitive volume discounts for larger engagements. The more you scale, the more you save.",
        },
        {
          question: "What payment methods do you accept?",
          answer:
            "We accept all major payment methods including credit cards, bank transfers, and ACH payments. We can also accommodate custom billing arrangements.",
        },
        {
          question: "Is there a minimum contract period?",
          answer:
            "We offer flexible contract terms starting from month-to-month arrangements. Long-term contracts come with additional discounts.",
        },
      ],
    },
    {
      label: "Service",
      questions: [
        {
          question: "What services do you offer?",
          answer:
            "We offer a comprehensive range of BPO services including customer support, sales, technical support, back-office operations, and more.",
        },
        {
          question: "How do you ensure quality?",
          answer:
            "We maintain strict quality assurance protocols including call monitoring, regular training, performance reviews, and customer satisfaction surveys.",
        },
        {
          question: "What industries do you serve?",
          answer:
            "We serve a wide range of industries including finance, healthcare, retail, technology, telecommunications, and e-commerce.",
        },
        {
          question: "Do you provide dedicated or shared agents?",
          answer:
            "We offer both options. Dedicated agents work exclusively for your business, while shared agents handle multiple clients efficiently.",
        },
        {
          question: "What languages do you support?",
          answer:
            "We offer multilingual support in English, Spanish, French, German, and many more languages based on your requirements.",
        },
      ],
    },
  ],
};

// Service-specific FAQ data (optional - you can create custom FAQ for each service)
export const debtCollectionFAQData = {
  title: "We are here to help you",
  subtitle:
    "You can find our frequently asked questions and exact answers without contacting directly supporters",
  tabs: [
    {
      label: "General",
      questions: [
        {
          question: "What types of debt collection services do you offer?",
          answer:
            "We offer comprehensive debt collection services including bankruptcy claims filing, preference defense, reclamation claims, and portfolio monitoring.",
        },
        {
          question: "How do you ensure compliance with debt collection laws?",
          answer:
            "Our team of licensed attorneys ensures full compliance with FDCPA, state regulations, and bankruptcy court requirements across all 50 states.",
        },
        {
          question: "What is your success rate for debt recovery?",
          answer:
            "Our data-driven approach and expert team consistently achieve above-industry-average recovery rates. Contact us for specific metrics relevant to your portfolio.",
        },
        {
          question: "How quickly can you begin working on my accounts?",
          answer:
            "We can typically begin processing your accounts within 24-48 hours of receiving the necessary documentation and system access.",
        },
        {
          question: "Do you offer real-time reporting?",
          answer:
            "Yes, we provide real-time monitoring and reporting through our integrated systems, keeping you informed of all account activities and recoveries.",
        },
        {
          question: "Can you integrate with our existing systems?",
          answer:
            "Absolutely. We seamlessly integrate with most major CRM and portfolio management systems for efficient data exchange and updates.",
        },
      ],
    },
    {
      label: "Price",
      questions: [
        {
          question: "What are your fee structures?",
          answer:
            "We offer contingency-based pricing, flat fees, and hybrid models. Our pricing is tailored to your portfolio size and recovery goals.",
        },
        {
          question: "Are there upfront costs?",
          answer:
            "Most of our services operate on a contingency basis with no upfront costs. You only pay when we successfully recover funds.",
        },
        {
          question: "Do you offer volume pricing?",
          answer:
            "Yes, we provide discounted rates for larger portfolios and long-term partnerships.",
        },
      ],
    },
    {
      label: "Service",
      questions: [
        {
          question: "What is bankruptcy scrubbing?",
          answer:
            "Bankruptcy scrubbing identifies accounts affected by bankruptcy filings, ensuring you don't pursue accounts protected by bankruptcy law.",
        },
        {
          question: "How do preference claims work?",
          answer:
            "Preference claims involve defending against trustee demands to return payments made before bankruptcy. Our legal team specializes in these defenses.",
        },
        {
          question: "What reporting do you provide?",
          answer:
            "We provide detailed reports including case numbers, filing dates, recovery amounts, and compliance status for all accounts in your portfolio.",
        },
      ],
    },
  ],
};

/**
 * CTA Section Data
 *
 * Structure:
 * - heading: Main heading (green, bold)
 * - description: Paragraph text
 * - ctaText: Text above button
 * - buttonText: Button label
 * - buttonLink: Button destination URL
 * - image: Image path
 * - imageAlt: Alt text for image
 */

// Default CTA Data
export const defaultCTAData = {
  heading: "Local Experts in Debt Collection",
  description:
    "We offer on-the-ground representatives in your customer's location who understand the practices that work to support full recovery of your funds.",
  ctaText: "Get Your Free Consultation Today",
  buttonText: "Start Collection",
  buttonLink: "/contact",
  image: "/heroImage.jpg",
  imageAlt: "Customer support representative",
};

// Service-specific CTA data examples
export const debtCollectionCTAData = {
  heading: "Local Experts in Debt Collection",
  description:
    "We offer on-the-ground representatives in your customer's location who understand the practices that work to support full recovery of your funds.",
  ctaText: "Get Your Free Consultation Today",
  buttonText: "Start Collection",
  buttonLink: "/contact",
  image: "/heroImage.jpg",
  imageAlt: "Debt collection expert on phone",
};

export const customerServicesCTAData = {
  heading: "Expert Customer Service Solutions",
  description:
    "Our dedicated team provides exceptional customer support that builds trust and loyalty with your clients.",
  ctaText: "Get Your Free Consultation Today",
  buttonText: "Get Started",
  buttonLink: "/contact",
  image: "/heroImage.jpg",
  imageAlt: "Customer service representative",
};

export const liveChatCTAData = {
  heading: "Real-Time Customer Engagement",
  description:
    "Connect with your customers instantly through our professional live chat services and boost conversions.",
  ctaText: "Get Your Free Consultation Today",
  buttonText: "Start Chatting",
  buttonLink: "/contact",
  image: "/heroImage.jpg",
  imageAlt: "Live chat support agent",
};

export const aiChatbotCTAData = {
  heading: "AI-Powered Support 24/7",
  description:
    "Revolutionize your customer service with intelligent automation that never sleeps.",
  ctaText: "Get Your Free Consultation Today",
  buttonText: "Explore AI Solutions",
  buttonLink: "/contact",
  image: "/heroImage.jpg",
  imageAlt: "AI chatbot automation",
};

export const salesServicesCTAData = {
  heading: "Accelerate Your Sales Growth",
  description:
    "Our professional sales team generates leads and closes deals to drive your revenue forward.",
  ctaText: "Get Your Free Consultation Today",
  buttonText: "Boost Sales",
  buttonLink: "/contact",
  image: "/heroImage.jpg",
  imageAlt: "Sales professional",
};

export const bpoOperationsCTAData = {
  heading: "End-to-End Business Solutions",
  description:
    "Transform your operations with our comprehensive BPO services designed for efficiency and growth.",
  ctaText: "Get Your Free Consultation Today",
  buttonText: "Learn More",
  buttonLink: "/contact",
  image: "/heroImage.jpg",
  imageAlt: "BPO operations team",
};

export const businessManagementCTAData = {
  heading: "Streamline Your Operations",
  description:
    "Focus on growth while we handle your day-to-day administrative and management tasks.",
  ctaText: "Get Your Free Consultation Today",
  buttonText: "Get Support",
  buttonLink: "/contact",
  image: "/heroImage.jpg",
  imageAlt: "Business management support",
};

export const emailSupportCTAData = {
  heading: "Professional Email Marketing",
  description:
    "Engage your audience with targeted email campaigns that drive conversions and build relationships.",
  ctaText: "Get Your Free Consultation Today",
  buttonText: "Start Campaign",
  buttonLink: "/contact",
  image: "/heroImage.jpg",
  imageAlt: "Email marketing specialist",
};
