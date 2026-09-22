export const categories = [
  { id: 'all', label: 'All Projects' },
  { id: 'fullstack', label: 'Full-Stack' },
  { id: 'frontend', label: 'Frontend' },
  { id: 'blockchain', label: 'Blockchain / Web3' },
  { id: 'shopify', label: 'Shopify & AI' },
  { id: 'mobile', label: 'Mobile Apps' },
];

export const projects = [
  // ─── Full-Stack ───────────────────────────────────────────────────────────
  {
    id: 1,
    title: 'CoreCSI',
    subtitle: 'Enterprise Strategy Management',
    category: 'fullstack',
    role: 'Senior Full-Stack Developer',
    stack: ['React.js', 'Node.js'],
    description:
      'Enterprise strategy management application designed to support organizational planning and agile strategy workflows. Worked across the React frontend and Node.js backend as a senior full-stack developer.',
    url: 'https://app.corecsi.net/login',
    accent: '#c9a86c',
  },
  {
    id: 2,
    title: 'DOPU Fortune',
    subtitle: 'Web3 Fortune Application',
    category: 'fullstack',
    role: 'Senior Full-Stack Developer',
    stack: ['React.js', 'Node.js'],
    description:
      'A blockchain-themed fortune and coin-toss application offering interactive experiences inspired by different cultural traditions. Part of the DOPU ecosystem on the XDC Network.',
    url: 'https://fortune.dopu.ai/',
    accent: '#7a92b8',
  },
  {
    id: 3,
    title: 'XDC Network',
    subtitle: 'Masternode Governance Platform',
    category: 'fullstack',
    role: 'Frontend Developer (Enhancement)',
    stack: ['React.js', 'Node.js'],
    description:
      'Blockchain governance application displaying masternode information, validator status, staking statistics, node capacity, and network participation data. Contributed enhancement tasks to the frontend and backend.',
    url: 'https://master.xinfin.network/',
    accent: '#6b9b8a',
  },
  {
    id: 4,
    title: 'XDC Observer',
    subtitle: 'Crypto Swap Platform',
    category: 'fullstack',
    role: 'Senior Full-Stack Developer',
    stack: ['React.js', 'Node.js'],
    description:
      'Cryptocurrency exchange interface within the XDC ecosystem, focused on digital-asset swapping and purchasing. Worked as a senior full-stack developer on both frontend and backend.',
    url: 'https://swap.xdcobserver.io/',
    accent: '#c9a86c',
  },
  {
    id: 5,
    title: 'ICO Tokens',
    subtitle: 'Payment Gateway',
    category: 'fullstack',
    role: 'MERN Stack Developer (Built from Scratch)',
    stack: ['MongoDB', 'Express.js', 'React.js', 'Node.js'],
    description:
      'Developed the full payment-gateway project from scratch using the MERN stack. Covered complete full-stack development including frontend UI, backend APIs, and database architecture.',
    url: 'https://betapg.icotokens.net/',
    accent: '#b8956a',
  },

  // ─── Frontend ─────────────────────────────────────────────────────────────
  {
    id: 6,
    title: 'Insite.work',
    subtitle: 'Construction Management & Safety',
    category: 'frontend',
    role: 'Senior Frontend Developer (Full-Time)',
    stack: ['React.js', 'TypeScript'],
    description:
      'Construction management and workplace safety platform supporting site management, workforce coordination, safety documentation, project workflows, and digital records. Worked full-time as a senior frontend developer.',
    url: 'https://insite.work/',
    accent: '#8fa8a0',
  },
  {
    id: 7,
    title: 'StorX',
    subtitle: 'Decentralized Cloud Storage',
    category: 'frontend',
    role: 'Frontend Developer (Full-Time)',
    stack: ['Vue.js'],
    description:
      'Decentralized cloud storage platform using encryption, file fragmentation, and distributed nodes to protect data. Worked full-time as a frontend developer building the Vue.js interface.',
    url: 'https://storx.io/',
    accent: '#7a92b8',
  },
  {
    id: 8,
    title: 'XinFin Network',
    subtitle: 'Website Redesign & Redevelopment',
    category: 'frontend',
    role: 'Frontend Redesign & Redevelopment',
    stack: ['HTML', 'CSS', 'JavaScript'],
    description:
      'Complete redevelopment and redesign of the XinFin Network website including its live network statistics section. Focus: website modernization, frontend development, and blockchain network data presentation.',
    url: 'https://xinfin.network/#stats',
    accent: '#c9a86c',
  },

  // ─── Blockchain / Web3 ────────────────────────────────────────────────────
  {
    id: 9,
    title: 'ComTech Gold',
    subtitle: 'Gold Tokenization Platform',
    category: 'blockchain',
    role: 'Frontend Developer',
    stack: ['React.js'],
    description:
      'Frontend development for a digital gold application on the XDC blockchain for tokenized ownership of physical gold within the ComTech Gold ecosystem.',
    url: 'https://cgold.comtechglobal.ae/',
    accent: '#c9a86c',
  },
  {
    id: 10,
    title: 'ComTech Gold',
    subtitle: 'Governance Application',
    category: 'blockchain',
    role: 'Frontend Developer',
    stack: ['React.js'],
    description:
      'Developed frontend components for the ComTech Gold governance application — a distinct governance interface from the gold tokenization platform.',
    url: 'https://governance.comtechglobal.ae/',
    accent: '#b8956a',
  },
  {
    id: 11,
    title: 'ComTech',
    subtitle: 'Tokenization Application',
    category: 'blockchain',
    role: 'Frontend Developer',
    stack: ['React.js'],
    description:
      'Frontend development for a blockchain tokenization application within the ComTech ecosystem enabling digital asset tokenization workflows.',
    url: 'https://tokenization.comtechglobal.ae/#/welcome',
    accent: '#6b9b8a',
  },
  {
    id: 12,
    title: 'Doru Air',
    subtitle: 'Secure Cryptocurrency Wallet',
    category: 'blockchain',
    role: 'Senior Full-Stack Developer',
    stack: ['React.js', 'Node.js'],
    description:
      'Air-gapped cryptocurrency self-custody solution supporting offline key storage, QR-based transaction signing, and hardware-wallet functionality.',
    url: 'https://doruair.com/',
    accent: '#7a92b8',
  },
  {
    id: 13,
    title: 'XDC Apothem',
    subtitle: 'Testnet Faucet',
    category: 'blockchain',
    role: 'Developer',
    stack: [],
    description:
      'Blockchain utility allowing developers to request testnet XDC tokens for application development and testing on the Apothem testnet.',
    url: 'https://faucet.apothem.network/',
    accent: '#c9a86c',
  },
  {
    id: 14,
    title: 'XinFin Web Wallet',
    subtitle: 'XDC Web Wallet',
    category: 'blockchain',
    role: 'Developer',
    stack: [],
    description:
      'Web-based cryptocurrency wallet interface for the XDC blockchain, associated with MyEtherWallet technology.',
    url: 'https://wallet.xinfin.network/#/',
    accent: '#7a92b8',
  },
  {
    id: 15,
    title: 'PROTU',
    subtitle: 'User Dashboard & Administration',
    category: 'blockchain',
    role: 'Developer',
    stack: [],
    description:
      'Project comprising two interfaces: a Protein Market X user dashboard and a revenue-distribution administration application.',
    url: 'https://admin.protu.ai/admin/login',
    secondaryUrl: 'https://dashboard.protu.ai/',
    secondaryLabel: 'Dashboard',
    accent: '#b8956a',
  },

  // ─── Mobile ───────────────────────────────────────────────────────────────
  {
    id: 16,
    title: 'Manière De Voir',
    subtitle: 'Fashion Shopping App',
    category: 'mobile',
    role: 'Independent Flutter Developer',
    stack: ['Flutter', 'Dart', 'iOS', 'Android'],
    description:
      'Mobile shopping application for the Manière De Voir fashion brand. Features product discovery, collections, cart, authentication, checkout integrations, and performance improvements. Published on App Store & Google Play.',
    url: 'https://apps.apple.com/us/app/mani%C3%A8re-de-voir/id6448750840',
    secondaryUrl: 'https://play.google.com/store/search?q=maniere+de+voir&c=apps&hl=en_IN',
    secondaryLabel: 'Google Play',
    accent: '#8fa8a0',
  },
  {
    id: 17,
    title: 'Voyyp',
    subtitle: 'Virtual Phone System',
    category: 'mobile',
    role: 'Mobile Application Developer',
    stack: ['React Native', 'iOS'],
    description:
      'Business communication application for entrepreneurs and teams, providing virtual phone services, calling, texting, and customer communication capabilities.',
    url: 'https://apps.apple.com/us/app/voyyp/id1528178888',
    accent: '#7a92b8',
  },

  // ─── Shopify & AI ─────────────────────────────────────────────────────────
  {
    id: 18,
    title: 'CyberLS',
    subtitle: "India's Own Google Workspace Backup",
    category: 'fullstack',
    role: 'Full-Stack Developer',
    stack: ['Next.js', 'Node.js', 'TypeScript', 'React.js'],
    description:
      "India's first decentralized Google Workspace backup platform. Automatically backs up Gmail, Google Drive, Calendar, Contacts, and Shared Drives with AES-256 encryption, fragmented across distributed Indian storage nodes — ensuring data sovereignty under Indian law.",
    url: 'https://staging.cyberls.com/',
    accent: '#7a92b8',
  },
  {
    id: 19,
    title: 'Shopify Public & Private Apps',
    subtitle: 'Custom Shopify App Development',
    category: 'shopify',
    role: 'Shopify Developer',
    stack: ['Shopify API', 'React.js', 'Node.js', 'GraphQL', 'Polaris'],
    description:
      'Built and published custom Shopify applications — both public (App Store listed) and private (merchant-specific). Work includes storefront integrations, Admin API extensions, Checkout UI customizations, and theme app extensions for e-commerce brands.',
    url: '#',
    accent: '#9aaf78',
  },
  {
    id: 20,
    title: 'Shopify Website Development',
    subtitle: 'Theme & Storefront Development with AI',
    category: 'shopify',
    role: 'Shopify Developer',
    stack: ['Shopify Liquid', 'Hydrogen', 'Claude AI', 'JavaScript', 'CSS'],
    description:
      'Developed and customized Shopify storefronts and themes for e-commerce clients. Integrated Claude AI as an agentic assistant for content generation, product description automation, and smart storefront personalization.',
    url: '#',
    accent: '#8b9dc9',
  },
  {
    id: 21,
    title: 'Agentic AI Workflows',
    subtitle: 'AI-Powered Automation & Agent Systems',
    category: 'shopify',
    role: 'AI Developer',
    stack: ['Claude AI', 'Gemini API', 'Node.js', 'React.js', 'LangChain'],
    description:
      'Designed and implemented agentic AI systems using Claude and Gemini APIs. Built autonomous agent pipelines for content creation, e-commerce automation, data processing, and multi-step task orchestration.',
    url: '#',
    accent: '#c9a86c',
  },
];
