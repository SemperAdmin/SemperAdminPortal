import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

const pkg = JSON.parse(fs.readFileSync('./package.json', 'utf8'));

// Get last commit date
const lastModified = execSync('git log -1 --format=%cI', {
  encoding: 'utf8',
}).trim();

// Parse ISO datetime to YYYY-MM-DD format
const lastModifiedDate = lastModified.split('T')[0];

// Get current date for reference
const now = new Date().toISOString().split('T')[0];

const codeJson = {
  name: pkg.name,
  organization: 'SemperAdmin',
  description:
    'Authoritative, sourced USMC administrative reference portal. Role-based access for Marines, leaders, commanders, and S-1 staff. Covers pay, records, life events, leave mechanics, and reserve operations.',
  version: pkg.version,
  status: 'Active Development',
  permissions: {
    usageType: 'openSource',
    licenses: [
      {
        name: 'MIT',
        URL: 'https://github.com/semperadmin/semperadminportal/blob/main/LICENSE',
      },
    ],
  },
  homepageURL: 'https://semperadmin.github.io/SemperAdminPortal/',
  downloadURL: 'https://github.com/semperadmin/semperadminportal',
  repositoryURL: 'https://github.com/semperadmin/semperadminportal',
  repositoryURLType: 'git',
  bugsURL: 'https://github.com/semperadmin/semperadminportal/issues',
  screenshotURLs: [],
  languages: ['TypeScript', 'React', 'Next.js', 'Tailwind CSS'],
  contact: {
    name: 'Stephen',
    email: 'mcesgrosters@gmail.com',
    URL: 'https://github.com/semperadmin/semperadminportal',
  },
  date: {
    metadataLastUpdated: now,
    lastModified: lastModifiedDate,
    released: '2024-01-01',
  },
  laborHours: 0,
  tags: [
    'USMC',
    'military',
    'administrative-reference',
    'policy',
    'next.js',
    'open-source',
  ],
  disclaimers:
    'This is an open-source community project. Not an official U.S. Marine Corps resource. Always verify critical policy information with official sources (ALMAR, MCO, NAVMC). See repository for full disclaimer.',
  relatedCode: [
    {
      codeName: 'code.gov',
      codeURL: 'https://code.gov',
      relationship: 'Listed on',
    },
  ],
  reusability: 'Yes',
  targetOperatingSystems: ['Linux', 'macOS', 'Windows', 'Web Browser'],
  developmentStatus: 'Active',
  'gov.uk': false,
};

// Write code.json to repo root
fs.writeFileSync('./code.json', JSON.stringify(codeJson, null, 2) + '\n');
console.log('✓ code.json generated successfully');
