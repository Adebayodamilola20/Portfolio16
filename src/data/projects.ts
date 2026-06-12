import { StaticImageData } from 'next/image';
import image1 from '@/assets/image1.png';
import image2 from '@/assets/image2.png';
import image3 from '@/assets/image3.png';
import img4 from '@/assets/iimg4.png';
import img5 from '@/assets/img5.png';
import img6 from '@/assets/img6.png';
import gig3 from '@/assets/gig3.png';
import gig4 from '@/assets/gig4.png';
import gig5 from '@/assets/gig5.png';

export interface Project {
  id: string;
  title: string;
  categories: string[];
  image?: string | StaticImageData;
  images?: (string | StaticImageData)[];
  description?: string;
  overview?: string;
  problem?: string;
  architecture?: string;
  features?: string[];
  technologies?: string[];
  tags?: string[];
  status?: 'live' | 'in-development' | 'coming-soon';
  complexity?: 'enterprise' | 'advanced' | 'intermediate';
  github?: string;
  link?: string;
}

export const categories = [
  'ALL',
  'MOBILE APPS',
  'AUTONOMOUS SYSTEMS',
  'AI AGENTS',
  'AI / AUTOMATION',
  'AI CHAT',
  'DEVELOPER TOOLS',
  'SECURITY SYSTEMS',
  'ROBOTICS',
  'CYBERSECURITY',
  'BUSINESS INTELLIGENCE',
  'REAL ESTATE',
  'LOGISTICS',
  'SAAS',
  'WEB APPS',
  'AI SYSTEMS',
  'AUTOMATIONS',
  'WEBSITES',
];

export const projects: Project[] = [
  // ── 1. Multi-AI-Agent DevOps Command Center ──
  {
    id: 'multi-ai-agent',
    title: 'Multi-AI-Agent DevOps Command Center',
    categories: ['AUTONOMOUS SYSTEMS', 'AI AGENTS', 'DEVELOPER TOOLS'],
    description:
      'A multi-agent autonomous engineering platform where specialized AI agents collaborate to perform software development tasks such as code analysis, debugging, documentation generation, deployment checks, workflow orchestration, pull request preparation, and project monitoring.',
    overview:
      'The Multi-AI-Agent DevOps Command Center is an autonomous software engineering platform built on a multi-agent architecture. It orchestrates specialized AI agents — each responsible for a distinct engineering discipline — to work collaboratively on real-world development tasks. The system handles everything from codebase scanning and bug detection to documentation generation, pull request preparation, deployment validation, and cross-channel status reporting. Designed for developer productivity and automated engineering workflows, it reduces repetitive tasks and accelerates delivery cycles.',
    problem:
      'Software development teams spend significant time on repetitive, low-value tasks — scanning codebases for issues, writing documentation, preparing pull requests, and coordinating deployments. These tasks slow velocity and drain engineering bandwidth. Existing automation tools are single-purpose and lack the intelligence to handle nuanced, multi-step engineering workflows that require context and coordination across disciplines.',
    architecture:
      'Built on a multi-agent orchestration layer with a central coordinator that routes tasks to specialized agents based on domain expertise. Each agent operates autonomously with tool-calling capabilities, communicating through a shared message bus. The orchestrator enforces human-in-the-loop checkpoints before critical actions (deployments, PR merges). Agent types include: Code Analyzer, Bug Fixer, Documentation Writer, PR Preparer, Deployment Checker, and Status Reporter. The system integrates with GitHub for source control, CI/CD pipelines for deployment, and Slack/Discord for notifications.',
    features: [
      'Multi-agent architecture with specialized AI agents',
      'Autonomous codebase scanning and issue detection',
      'Automated bug fixing and code remediation',
      'Intelligent documentation generation',
      'Pull request preparation with summaries and diffs',
      'Deployment validation and health checks',
      'Cross-channel status reporting via Slack/Discord',
      'Human-in-the-loop review gates for critical actions',
      'Plugin-based agent registration for custom workflows',
      'Real-time project monitoring and analytics',
    ],
    technologies: [
      'Python',
      'LLMs',
      'Multi-Agent Orchestration',
      'Tool Calling',
      'GitHub API',
      'Slack API',
      'Discord API',
      'CI/CD Integration',
      'Async Workflows',
      'Message Queues',
    ],
    tags: ['AI Agents', 'Automation', 'GitHub', 'LLM', 'Autonomous Workflow', 'DevOps'],
    status: 'in-development',
    complexity: 'enterprise',
    github: 'https://github.com/Adebayodamilola20/multi-ai-agent',
    link: '/portfolio/multi-ai-agent',
  },

  // ── 2. Telegram Agent Automation ──
  {
    id: 'telegram-agent',
    title: 'Telegram Agent Automation',
    categories: ['AI AGENTS', 'AUTOMATIONS', 'AI / AUTOMATION'],
    description:
      'An intelligent automation system that allows Telegram to act as a command center for controlling workflows, executing actions, receiving notifications, and interacting with AI-powered agents remotely.',
    overview:
      'Telegram Agent Automation transforms Telegram into a powerful remote command center. The system connects Telegram bots to backend workflows, enabling users to trigger actions, monitor systems, receive real-time notifications, and interact with AI-powered agents — all through a familiar chat interface. Built for teams that need lightweight, accessible automation without complex dashboards.',
    problem:
      'Managing automated workflows and monitoring systems typically requires specialized dashboards, VPN access, or complex CLI tools. Teams need a simpler, more accessible way to trigger actions, check system status, and receive alerts from anywhere — without being tied to a workstation or custom monitoring platform.',
    architecture:
      'Built on the Telegram Bot API with a webhook-driven architecture. Commands are parsed from messages and dispatched to a task execution engine. The system supports command chaining, conditional workflows, and role-based access control. Agent integrations allow AI models to process natural language commands and return structured responses. Notification routing ensures the right team members receive relevant alerts based on severity and category.',
    features: [
      'Telegram bot command interface',
      'Remote workflow execution and control',
      'Real-time system notifications and alerts',
      'Natural language command processing via AI agents',
      'Role-based access control for team operations',
      'Command chaining and conditional workflows',
      'Integration with external APIs and services',
      'Audit logging for all executed commands',
      'Multi-group and channel support',
      'Scheduled task execution',
    ],
    technologies: [
      'Python',
      'Telegram Bot API',
      'AI Agents',
      'NLP',
      'Webhook Architecture',
      'REST APIs',
      'Async Processing',
      'Redis',
      'Task Scheduling',
    ],
    tags: ['Telegram', 'Automation', 'AI Agents', 'Remote Control', 'ChatOps'],
    status: 'live',
    complexity: 'advanced',
    github: 'https://github.com/Adebayodamilola20/Telegram-Agent-Automation',
    link: '/portfolio/telegram-agent',
  },

  // ── 3. Jarvis macOS Automation ──
  {
    id: 'jarvis-macos',
    title: 'Jarvis macOS Automation',
    categories: ['AUTONOMOUS SYSTEMS', 'DEVELOPER TOOLS'],
    description:
      'A lightweight Jarvis-inspired automation assistant for macOS capable of executing commands, performing system actions, and assisting users through intelligent task automation.',
    overview:
      'Jarvis macOS Automation brings voice-and-command-driven automation to the Mac desktop. Inspired by the Jarvis AI from popular culture, it executes system commands, manages files, controls applications, and assists with daily workflows through an intelligent command interface. Built as a lightweight, privacy-respecting assistant that runs entirely on-device.',
    problem:
      'Mac users frequently perform repetitive system tasks — opening applications, managing files, running scripts, and switching contexts — that interrupt flow and waste time. Existing automation tools like AppleScript or Shortcuts require scripting knowledge or lack the intelligence to handle natural language instructions.',
    architecture:
      'Built as a native macOS application using Swift, with a command processing layer that interprets user inputs (text or voice) and translates them into system actions. The architecture includes a command registry for extensible action definitions, a permission sandbox for secure execution, and a notification system for feedback. Supports plugin architecture for custom automation modules.',
    features: [
      'Natural language command processing',
      'Application launching and control',
      'File system management and organization',
      'Script execution and workflow automation',
      'System monitoring and status reporting',
      'Clipboard management and text processing',
      'Calendar and reminder integration',
      'Custom plugin support',
      'Keyboard shortcut automation',
      'Privacy-first local processing',
    ],
    technologies: [
      'Swift',
      'macOS APIs',
      'Natural Language Processing',
      'Shell Integration',
      'AppleScript Bridge',
      'Core ML',
      'Accessibility APIs',
      'Distributed Notifications',
    ],
    tags: ['macOS', 'Automation', 'Desktop Assistant', 'Workflow', 'Productivity'],
    status: 'live',
    complexity: 'advanced',
    github: 'https://github.com/Adebayodamilola20/macos-jarvisRobot-automation',
    link: '/portfolio/jarvis-macos',
  },

  // ── 4. Humanoid Robot MuJoCo ──
  {
    id: 'humanoid-mujoco',
    title: 'Humanoid Robot MuJoCo',
    categories: ['ROBOTICS', 'AI SYSTEMS'],
    description:
      'A physics-based humanoid robotics simulation environment built using MuJoCo for experimentation with movement, control systems, reinforcement learning concepts, and robotics research.',
    overview:
      'Humanoid Robot MuJoCo provides a high-fidelity physics simulation environment for humanoid robotics research. Built on the MuJoCo physics engine, it enables experimentation with bipedal locomotion, balance control, joint dynamics, and reinforcement learning policies. The platform serves as a testbed for developing and validating control strategies before real-world deployment.',
    problem:
      'Physical humanoid robots are expensive, fragile, and difficult to experiment with safely. Researchers need accurate physics simulation to develop and test control algorithms, locomotion strategies, and reinforcement learning policies without risking hardware damage or requiring extensive physical setups.',
    architecture:
      'Built on the MuJoCo physics engine for accurate contact dynamics and rigid body simulation. The system includes humanoid robot model definitions (URCF/MJCF), a simulation loop with configurable timestep, reward function infrastructure for RL experiments, and visualization tools. Supports both scripted control policies and learned policies from reinforcement learning frameworks. Modular design allows swapping robot models, environments, and control algorithms independently.',
    features: [
      'High-fidelity humanoid physics simulation',
      'MuJoCo-based contact dynamics',
      'Configurable humanoid robot models',
      'Bipedal locomotion experiments',
      'Balance and stability control testing',
      'Reinforcement learning environment interface',
      'Real-time visualization and rendering',
      'Reward function framework',
      'Episode recording and playback',
      'Parameterized environment configurations',
    ],
    technologies: [
      'Python',
      'MuJoCo',
      'Robotics Simulation',
      'Reinforcement Learning',
      'NumPy',
      'Matplotlib',
      'XML Model Definitions',
      'Physics Engine',
    ],
    tags: ['Robotics', 'MuJoCo', 'Simulation', 'Reinforcement Learning', 'Humanoid'],
    status: 'live',
    complexity: 'enterprise',
    github: 'https://github.com/Adebayodamilola20/Humanoid-Robot-MuJoCo',
    link: '/portfolio/humanoid-mujoco',
  },

  // ── 5. Patrol Security Ecosystem ──
  {
    id: 'patrol-security',
    title: 'Patrol Security Ecosystem',
    categories: ['SECURITY SYSTEMS', 'WEB APPS'],
    description:
      'A real-time patrol monitoring and operational management platform designed for security companies. Supports QR patrol validation, GPS verification, role-based access control, incident reporting, live dashboards, and automated reporting workflows.',
    overview:
      'Patrol Security Ecosystem is an enterprise-grade platform built for security companies to manage patrol operations in real-time. It combines QR-code-based checkpoint validation, GPS tracking, incident reporting, and operational dashboards into a unified system. Managers get live visibility into field operations, while guards use a mobile interface for check-ins, reporting, and communication.',
    problem:
      'Security companies struggle with patrol accountability — verifying that guards complete their rounds, tracking incidents in real-time, and generating compliance reports. Paper-based systems are unreliable, GPS-only solutions lack checkpoint verification, and existing tools are fragmented across multiple platforms.',
    architecture:
      'Full-stack web application with a React frontend, Node.js/Express API layer, and PostgreSQL database. QR codes are placed at patrol checkpoints; guards scan them with a mobile app to validate presence. GPS coordinates are cross-referenced with expected locations for additional verification. The dashboard provides real-time map visualization, incident timelines, and automated report generation. Role-based access control separates guard, supervisor, and admin permissions.',
    features: [
      'QR patrol checkpoint validation',
      'GPS location verification',
      'Real-time patrol tracking dashboard',
      'Incident reporting with photo/video',
      'Role-based access control (Guard, Supervisor, Admin)',
      'Automated compliance report generation',
      'Shift scheduling and assignment',
      'Alert escalation workflows',
      'Historical patrol analytics',
      'Mobile-first field interface',
    ],
    technologies: [
      'React',
      'Node.js',
      'PostgreSQL',
      'QR Code System',
      'GPS Tracking',
      'REST API',
      'WebSocket',
      'Cloud Hosting',
      'Mobile App',
    ],
    tags: ['Security', 'QR Patrol', 'GPS', 'Real-Time', 'Enterprise', 'Dashboard'],
    status: 'live',
    complexity: 'enterprise',
    github: 'https://github.com/Adebayodamilola20/PatrolSecurity_Ecosystem',
    link: '/portfolio/patrol-security',
  },

  // ── 6. Patrol Watcher ──
  {
    id: 'patrol-watcher',
    title: 'Patrol Watcher',
    categories: ['SECURITY SYSTEMS', 'AUTOMATIONS'],
    description:
      'A security monitoring platform focused on patrol visibility, operational oversight, alert management, and field activity tracking.',
    overview:
      'Patrol Watcher complements the Patrol Security Ecosystem by providing focused monitoring capabilities — patrol visibility, alert management, and operational oversight. It aggregates field data into actionable dashboards, enabling security managers to maintain situational awareness and respond quickly to anomalies.',
    problem:
      'Security operations centers need a dedicated monitoring view that aggregates patrol activity, highlights anomalies, and manages alerts without the complexity of a full management platform. Existing tools either overwhelm operators with data or provide insufficient visibility into field operations.',
    architecture:
      'Lightweight monitoring dashboard built with a real-time data pipeline. Ingests patrol events from field devices via WebSocket connections, processes them through an alert engine with configurable rules, and presents status through an operational dashboard. Alert escalation routes notifications to appropriate personnel based on severity and type. Designed to run alongside the main Patrol Security Ecosystem or as a standalone monitoring tool.',
    features: [
      'Real-time patrol activity monitoring',
      'Configurable alert rules and thresholds',
      'Alert escalation and routing',
      'Field activity timeline',
      'Operational status dashboard',
      'Anomaly detection and flagging',
      'Multi-site monitoring support',
      'Audit trail for all alerts',
      'Shift handover summaries',
      'Integration with Patrol Security Ecosystem',
    ],
    technologies: [
      'React',
      'Node.js',
      'WebSocket',
      'Redis',
      'Alert Engine',
      'Real-Time Data Pipeline',
      'Dashboard UI',
    ],
    tags: ['Security', 'Monitoring', 'Alerts', 'Real-Time', 'Operations'],
    status: 'live',
    complexity: 'advanced',
    github: 'https://github.com/Adebayodamilola20/patrol-watcher',
    link: '/portfolio/patrol-watcher',
  },

  // ── 7. CyberGuard NG Assist ──
  {
    id: 'cyberguard-ng',
    title: 'CyberGuard NG Assist',
    categories: ['CYBERSECURITY', 'AI SYSTEMS'],
    description:
      'An AI-assisted cybersecurity platform focused on helping Nigerian SMEs improve security posture, detect threats, identify vulnerabilities, and strengthen operational security.',
    overview:
      'CyberGuard NG Assist is an AI-powered cybersecurity assistant tailored for Nigerian small and medium enterprises. It provides automated threat detection, vulnerability scanning, security posture assessment, and actionable recommendations. The platform bridges the cybersecurity expertise gap that SMEs face by making enterprise-grade security intelligence accessible and affordable.',
    problem:
      'Nigerian SMEs are increasingly targeted by cyber threats but lack the expertise, resources, and budgets for dedicated security teams. Existing cybersecurity tools are expensive, complex, and designed for enterprise environments. SMEs need an accessible, AI-assisted solution that can identify threats, assess vulnerabilities, and provide clear guidance without requiring security specialists.',
    architecture:
      'Cloud-native platform with a Python backend processing security telemetry data. AI models analyze network patterns, log data, and configuration states to detect threats and vulnerabilities. The frontend dashboard presents security posture scores, active threats, and prioritized remediation steps. Integrates with common SME infrastructure (邮件 servers, cloud storage, web applications) to collect and analyze security data.',
    features: [
      'AI-powered threat detection',
      'Vulnerability scanning and assessment',
      'Security posture scoring',
      'Remediation recommendations',
      'Real-time security alerts',
      'Compliance checklist for Nigerian regulations',
      'Infrastructure configuration audit',
      'Phishing detection assistance',
      'Security awareness training modules',
      'Monthly security reports',
    ],
    technologies: [
      'Python',
      'Machine Learning',
      'Threat Detection',
      'Vulnerability Scanning',
      'Cloud Architecture',
      'REST API',
      'Dashboard UI',
      'Log Analysis',
    ],
    tags: ['Cybersecurity', 'AI', 'SME Security', 'Threat Detection', 'Nigeria'],
    status: 'live',
    complexity: 'enterprise',
    github: 'https://github.com/Adebayodamilola20/cyberguard-ng-assist',
    link: '/portfolio/cyberguard-ng',
  },

  // ── 8. CyberGuard Naija Assist ──
  {
    id: 'cyberguard-naija',
    title: 'CyberGuard Naija Assist',
    categories: ['CYBERSECURITY', 'AI SYSTEMS', 'AI / AUTOMATION'],
    description:
      'An advanced CyberGuard variant designed to provide intelligent security guidance, risk monitoring, and cybersecurity assistance.',
    overview:
      'CyberGuard Naija Assist extends the CyberGuard platform with advanced AI-driven security guidance. It provides intelligent risk monitoring, automated security assessments, and conversational cybersecurity assistance. The system learns from threat intelligence feeds and local attack patterns to deliver context-aware security recommendations.',
    problem:
      'Building on the challenges CyberGuard NG Assist addresses, Naija Assist tackles the need for proactive, intelligent security guidance that adapts to the evolving threat landscape. SMEs need not just detection but predictive insights and guided remediation that evolves with emerging threats specific to the Nigerian and African cybersecurity landscape.',
    architecture:
      'Extends the CyberGuard architecture with an AI conversation layer powered by LLMs for natural language security guidance. Adds threat intelligence ingestion from multiple feeds, predictive risk modeling based on historical attack patterns, and an automated assessment engine that continuously evaluates security posture. The conversational interface allows non-technical users to ask security questions and receive actionable answers.',
    features: [
      'Conversational AI security assistant',
      'Predictive threat modeling',
      'Continuous security posture assessment',
      'Threat intelligence feed integration',
      'Risk scoring and prioritization',
      'Automated security policy enforcement',
      'Natural language security Q&A',
      'Compliance monitoring',
      'Incident response guidance',
      'Integration with CyberGuard NG Assist',
    ],
    technologies: [
      'Python',
      'LLMs',
      'Threat Intelligence',
      'Predictive Analytics',
      'NLP',
      'Machine Learning',
      'REST API',
      'Real-Time Monitoring',
    ],
    tags: ['Cybersecurity', 'AI Assistant', 'Threat Intelligence', 'Risk Monitoring', 'Nigeria'],
    status: 'in-development',
    complexity: 'enterprise',
    github: 'https://github.com/Adebayodamilola20/cyberguard-naija-assist',
    link: '/portfolio/cyberguard-naija',
  },

  // ── 9. AI Models ──
  {
    id: 'ai-models',
    title: 'AI Models Collection',
    categories: ['AI SYSTEMS', 'AI / AUTOMATION'],
    description:
      'A collection of AI model experiments, integrations, workflows, and machine learning implementations exploring different approaches to intelligent systems and model deployment.',
    overview:
      'A comprehensive repository of AI model experiments, training pipelines, and deployment implementations. Covers multiple AI domains including natural language processing, computer vision, generative models, and reinforcement learning. Each experiment is self-contained with documentation, training scripts, and inference examples.',
    problem:
      'AI practitioners need a centralized reference for model implementations, training recipes, and deployment patterns. Scattered experiments across multiple repositories make it difficult to compare approaches, reuse code, and build on previous work. This collection consolidates experiments into a structured, documented knowledge base.',
    architecture:
      'Modular repository structure with each model implementation in its own directory containing training scripts, model definitions, configuration files, and documentation. Shared utilities for data loading, preprocessing, evaluation, and visualization. Supports multiple frameworks (PyTorch, TensorFlow) and deployment targets (local inference, cloud endpoints, edge devices). Experiment tracking via configurable logging.',
    features: [
      'Multiple AI model implementations',
      'Training and inference pipelines',
      'Model comparison benchmarks',
      'Configurable experiment tracking',
      'Multi-framework support',
      'Deployment-ready model exports',
      'Jupyter notebook documentation',
      'Data preprocessing utilities',
      'Evaluation metrics framework',
      'Transfer learning examples',
    ],
    technologies: [
      'Python',
      'PyTorch',
      'TensorFlow',
      'Scikit-learn',
      'Hugging Face',
      'Jupyter',
      'NumPy',
      'Pandas',
      'MLflow',
    ],
    tags: ['AI', 'Machine Learning', 'Deep Learning', 'NLP', 'Computer Vision', 'Experiments'],
    status: 'live',
    complexity: 'advanced',
    github: 'https://github.com/Adebayodamilola20/ai_models',
    link: '/portfolio/ai-models',
  },

  // ── 10. AccelerateDevGHCopilot ──
  {
    id: 'accelerate-copilot',
    title: 'AccelerateDev GH Copilot',
    categories: ['DEVELOPER TOOLS', 'AI / AUTOMATION'],
    description:
      'A developer productivity tool inspired by modern AI coding assistants, designed to accelerate engineering workflows, improve coding efficiency, and streamline software delivery.',
    overview:
      'AccelerateDev GH Copilot is a developer productivity tool that integrates AI-assisted coding into the GitHub workflow. It provides intelligent code suggestions, automated code reviews, commit message generation, and workflow optimizations. Designed to reduce context-switching and accelerate the development cycle from code to deployment.',
    problem:
      'Developers lose productivity to context-switching between coding, writing commit messages, reviewing PRs, and managing workflows. Existing AI coding tools focus on code completion but miss the broader workflow — commit messages, PR descriptions, code review, and deployment coordination. Teams need an integrated solution that accelerates the entire delivery pipeline.',
    architecture:
      'Built as a GitHub-integrated tool with a CLI and optional VS Code extension. The core engine processes repository context (file changes, commit history, PR data) through AI models to generate contextually relevant suggestions. Supports both local and cloud inference modes. The architecture includes a context analysis layer, suggestion generation engine, and feedback loop for continuous improvement.',
    features: [
      'AI-powered code suggestions',
      'Automated commit message generation',
      'PR description and summary creation',
      'Code review assistance',
      'Workflow optimization recommendations',
      'GitHub Actions integration',
      'Multi-language support',
      'Context-aware suggestions',
      'Local and cloud inference modes',
      'VS Code extension',
    ],
    technologies: [
      'Python',
      'GitHub API',
      'LLMs',
      'VS Code Extension API',
      'CLI Tool',
      'Git Hooks',
      'AI Code Analysis',
      'REST API',
    ],
    tags: ['Developer Tools', 'AI', 'GitHub', 'Productivity', 'Code Review', 'Automation'],
    status: 'live',
    complexity: 'advanced',
    github: 'https://github.com/Adebayodamilola20/AccelerateDevGHCopilot',
    link: '/portfolio/accelerate-copilot',
  },

  // ── Mobile / Flutter Projects ──

  // ── M1. Insta App ──
  {
    id: 'insta-app',
    title: 'Insta — AI Chat Messenger',
    categories: ['MOBILE APPS', 'AI CHAT', 'AI / AUTOMATION'],
    description:
      'A Flutter-based AI chat and messaging application featuring conversational UI, AI response handling, media interaction, and a modern mobile-first user experience.',
    overview:
      'Insta is a Flutter-powered messaging application that integrates AI-driven conversational capabilities into a sleek, modern chat interface. The app supports real-time message rendering, media sharing, AI-assisted responses, and intelligent conversation flows. Built with a focus on smooth animations, performant state management, and a premium mobile UX that feels native on both iOS and Android.',
    problem:
      'Most chat applications offer static messaging without intelligent assistance. Users need a messaging experience that goes beyond text — one that can understand context, suggest responses, handle media intelligently, and provide an AI-powered conversational layer that adapts to how people communicate on mobile.',
    architecture:
      'Built with Flutter using a clean architecture pattern with BLoC/Riverpod state management. The backend communicates with AI APIs for response generation and context understanding. The UI layer uses custom chat bubbles, animated message lists, media pickers, and a responsive layout system. Push notifications, offline message caching, and real-time sync are handled through Firebase Cloud Messaging and local storage.',
    features: [
      'AI-powered conversational chat interface',
      'Real-time message rendering with animations',
      'Media sharing (images, files, voice notes)',
      'AI-assisted response suggestions',
      'Offline message caching and sync',
      'Push notification support',
      'Custom chat themes and personalization',
      'Message search and history',
      'Read receipts and typing indicators',
      'Cross-platform (iOS & Android)',
    ],
    technologies: [
      'Flutter',
      'Dart',
      'AI API Integration',
      'Firebase',
      'BLoC / Riverpod',
      'WebSocket',
      'Push Notifications',
      'Local Storage',
      'Media Handling',
      'REST API',
    ],
    tags: ['Flutter', 'Dart', 'AI Chat', 'Messaging', 'Mobile', 'Conversational UI'],
    status: 'live',
    complexity: 'advanced',
    github: 'https://github.com/Adebayodamilola20/insta_app',
    link: '/portfolio/insta-app',
  },

  // ── M2. Founders Scout ──
  {
    id: 'founders-scout',
    title: 'Founders Scout',
    categories: ['MOBILE APPS', 'BUSINESS INTELLIGENCE'],
    description:
      'A Flutter mobile application designed to discover and analyze business opportunities, founders, and potential leads with structured search, insights, and lead tracking.',
    overview:
      'Founders Scout is a mobile business intelligence tool that helps users discover founders, companies, and potential business leads. The app provides structured search and filtering, business insights, and a lead tracking workflow — all wrapped in a clean, productivity-focused mobile interface. Designed for entrepreneurs, investors, and business development professionals who need to identify and evaluate opportunities on the go.',
    problem:
      'Business professionals spend hours manually searching for founders, companies, and leads across scattered sources — LinkedIn, Crunchbase, Google, and spreadsheets. There is no unified mobile tool that combines discovery, analysis, and tracking in one place. Existing tools are desktop-first, expensive, and lack the mobile-native experience needed for on-the-go prospecting.',
    architecture:
      'Built with Flutter using a feature-based architecture. The app includes a search engine with multi-criteria filtering, a business insights module that aggregates data from multiple sources, and a lead tracking system with status management and notes. State management is handled via Riverpod with persistent local storage for offline access. The data layer uses a combination of API integrations and local caching for fast search results.',
    features: [
      'Founder and business discovery engine',
      'Advanced search with multi-criteria filtering',
      'Business insights and analytics view',
      'Lead tracking with status pipeline',
      'Save and organize leads into lists',
      'Business profile detail pages',
      'Offline data caching',
      'Export leads and notes',
      'Clean productivity-focused UI',
      'Cross-platform (iOS & Android)',
    ],
    technologies: [
      'Flutter',
      'Dart',
      'Riverpod',
      'REST API',
      'Local Database',
      'Search Engine',
      'Filtering System',
      'Data Aggregation',
      'Offline Caching',
      'Clean Architecture',
    ],
    tags: ['Flutter', 'Dart', 'Business Intelligence', 'Lead Generation', 'Mobile', 'Productivity'],
    status: 'live',
    complexity: 'advanced',
    github: 'https://github.com/Adebayodamilola20/founders_scout',
    link: '/portfolio/founders-scout',
  },

  // ── M3. AI Models Mobile ──
  {
    id: 'ai-models-mobile',
    title: 'AI Models — Mobile Explorer',
    categories: ['MOBILE APPS', 'AI SYSTEMS', 'AI / AUTOMATION'],
    description:
      'A Flutter-based mobile AI experimentation project exploring AI model interactions, intelligent workflows, and mobile AI integrations in a portable interface.',
    overview:
      'AI Models Mobile brings AI experimentation to your pocket. Built with Flutter, the app provides a mobile interface for interacting with AI models, testing intelligent workflows, and exploring different AI capabilities on the go. It serves as both a practical AI assistant and a sandbox for experimenting with mobile AI integrations.',
    problem:
      'AI model experimentation and interaction typically requires desktop environments, terminal access, or web-based tools. There is no lightweight mobile app that lets developers and researchers quickly test AI models, compare outputs, and experiment with intelligent workflows from a phone.',
    architecture:
      'Built with Flutter using a modular architecture where each AI model integration is a self-contained module. The app communicates with AI APIs for inference, supports streaming responses for real-time output, and maintains conversation history locally. State management handles API loading states, error recovery, and model selection. The UI uses a card-based layout for model comparison and a chat-style interface for conversational models.',
    features: [
      'Mobile AI model interaction interface',
      'Multiple AI model support and switching',
      'Streaming response rendering',
      'Conversation history and context',
      'Model comparison and benchmarking view',
      'API key management and configuration',
      'Offline conversation caching',
      'Export and share AI outputs',
      'Clean, developer-friendly UI',
      'Cross-platform (iOS & Android)',
    ],
    technologies: [
      'Flutter',
      'Dart',
      'AI Model APIs',
      'Streaming Responses',
      'REST API',
      'Local Storage',
      'State Management',
      'Async Processing',
      'JSON Serialization',
    ],
    tags: ['Flutter', 'Dart', 'AI', 'Machine Learning', 'Mobile', 'Experimentation'],
    status: 'live',
    complexity: 'intermediate',
    github: 'https://github.com/Adebayodamilola20/ai_models',
    link: '/portfolio/ai-models-mobile',
  },

  // ── M4. Real Estate App ──
  {
    id: 'real-estate-app',
    title: 'PropView — Real Estate',
    categories: ['MOBILE APPS', 'REAL ESTATE'],
    description:
      'A Flutter real estate mobile application for browsing property listings, viewing details, exploring housing options, and creating a clean mobile-first property marketplace experience.',
    overview:
      'PropView is a Flutter-powered real estate application that provides a modern, mobile-first experience for browsing and discovering properties. The app features property listings with rich details, advanced search and filtering, save-and-compare functionality, and a clean visual design optimized for mobile property discovery.',
    problem:
      'Property seekers currently rely on desktop websites or fragmented apps that offer poor mobile experiences. Browsing listings, comparing properties, and saving favorites is cumbersome on phones. Existing real estate apps are either bloated with features or too basic to be useful for serious property research.',
    architecture:
      'Built with Flutter using a listing-first architecture. The data layer supports paginated property feeds with server-side filtering. The UI uses a card-based listing grid with smooth transitions to detail pages. State management handles filter state, saved properties, and search history. Image loading uses lazy loading with cached network images for performance. The app supports deep linking for sharing specific properties.',
    features: [
      'Property listing grid with rich cards',
      'Detailed property pages with galleries',
      'Advanced search and multi-criteria filtering',
      'Save and compare properties',
      'Map-based property exploration',
      'Price alerts and notifications',
      'Property sharing via deep links',
      'Offline saved properties access',
      'Clean, modern real estate UI',
      'Cross-platform (iOS & Android)',
    ],
    technologies: [
      'Flutter',
      'Dart',
      'REST API',
      'Image Caching',
      'Map Integration',
      'Deep Linking',
      'Push Notifications',
      'Local Storage',
      'Paginated Feeds',
      'Responsive Layout',
    ],
    tags: ['Flutter', 'Dart', 'Real Estate', 'Property', 'Mobile', 'Marketplace'],
    status: 'live',
    complexity: 'advanced',
    github: 'https://github.com/Adebayodamilola20/Real_Estate-app',
    link: '/portfolio/real-estate-app',
  },

  // ── M5. ReloExpress Mobile ──
  {
    id: 'reloexpress-mobile',
    title: 'ReloExpress — Delivery & Logistics',
    categories: ['MOBILE APPS', 'LOGISTICS'],
    description:
      'A Flutter delivery and logistics application supporting courier, relocation, and delivery service workflows with pickup requests, delivery coordination, and tracking-ready architecture.',
    overview:
      'ReloExpress Mobile is the Flutter companion to the ReloExpress logistics platform. It provides a mobile interface for requesting deliveries, coordinating pickups, tracking shipments, and managing logistics workflows. Designed for both customers and delivery personnel, the app streamlines the entire delivery lifecycle from request to completion.',
    problem:
      'Logistics and delivery operations require real-time coordination between customers and field personnel. Existing solutions are either desktop-only, lack mobile-first workflows, or provide poor UX for tracking and communication. Customers need a simple way to request deliveries, and drivers need efficient tools to manage their routes and confirm completions.',
    architecture:
      'Built with Flutter using a role-based architecture — customer and driver interfaces share core services but present different workflows. The app communicates with the ReloExpress backend API for order management, GPS tracking, and status updates. Real-time updates use WebSocket connections for live tracking. The app supports offline mode for drivers in low-connectivity areas with sync-when-online capability.',
    features: [
      'Delivery request creation flow',
      'Real-time order tracking',
      'Driver route management',
      'Pickup and drop-off confirmation',
      'Photo proof of delivery',
      'In-app messaging between customer and driver',
      'Push notifications for order updates',
      'Offline mode for drivers',
      'Order history and receipts',
      'Cross-platform (iOS & Android)',
    ],
    technologies: [
      'Flutter',
      'Dart',
      'WebSocket',
      'GPS Tracking',
      'Push Notifications',
      'REST API',
      'Offline Storage',
      'Image Upload',
      'Role-Based UI',
      'Real-Time Updates',
    ],
    tags: ['Flutter', 'Dart', 'Logistics', 'Delivery', 'Mobile', 'Tracking'],
    status: 'live',
    complexity: 'advanced',
    github: 'https://github.com/Adebayodamilola20/ReloExpressWeb',
    link: '/portfolio/reloexpress-mobile',
  },

  // ── Existing Projects ──
  {
    id: 'multi-agent-dev',
    title: 'Multi-Agent Autonomous Development System',
    categories: ['AUTONOMOUS SYSTEMS', 'AI / AUTOMATION'],
    description:
      'A multi-agent AI workflow system designed to automate software development tasks using multiple specialized agents working together.',
    overview:
      'A multi-agent AI workflow system designed to automate software development tasks using multiple specialized agents working together.',
    features: [
      'Multi-agent architecture',
      'Autonomous workflows',
      'AI orchestration',
      'Developer productivity',
      'Agent communication',
    ],
    tags: ['AI Agents', 'Automation', 'GitHub', 'LLM', 'Autonomous Workflow'],
    status: 'in-development',
    complexity: 'enterprise',
    github: 'https://github.com/Adebayodamilola20/multi-ai-agent',
    link: '/portfolio/multi-ai-agent',
  },
  {
    id: 'genesai',
    title: 'Genesai',
    categories: ['SAAS'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600&auto=format&fit=crop',
    description:
      'Production-ready SaaS platform with multi-API system, agency capabilities, and real-time tracking.',
    link: '#',
  },
  {
    id: 'adapt-lab',
    title: 'The Adapt Lab',
    categories: ['AI SYSTEMS', 'AI / AUTOMATION'],
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1600&auto=format&fit=crop',
    description:
      'Advanced AI system integration for research laboratories and data analysis.',
    link: '#',
  },
  {
    id: 'win',
    title: 'WINER',
    categories: ['WEB APPS'],
    images: [image1, image2, image3],
    description: 'Women Impacting Nigeria (WIN)',
    link: '/portfolio/win',
  },
  {
    id: 'proton-security',
    title: 'Proton Security',
    categories: ['WEBSITES'],
    images: [img4, img5, img6],
    description: 'Protonn Security is a security company',
    link: '/portfolio/proton-security',
  },
  {
    id: 'reloexpress',
    title: 'ReloExpress',
    categories: ['WEB APPS'],
    images: [gig3, gig4, gig5],
    description:
      'ReloExpress is a logistics and relocation platform designed to simplify the moving process.',
    link: '/portfolio/reloexpress',
  },
  {
    id: 'healthmate',
    title: 'HealthMate',
    categories: ['MOBILE APPS'],
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1600&auto=format&fit=crop',
    description:
      'Intuitive mobile application for personal health tracking and wellness management.',
    link: '#',
  },
  {
    id: 'selfie-spot',
    title: 'The Selfie Spot',
    categories: ['WEBSITES'],
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1600&auto=format&fit=crop',
    description: 'A modern photography studio and event space platform.',
    link: '#',
  },
];
