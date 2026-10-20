import type { AuthenticatedUser } from '../types';

export interface DemoAccount extends AuthenticatedUser { password: string; description: string; }

// Fictional accounts only. No submitted password is stored or logged.
export const demoAccounts: DemoAccount[] = [
  { id: '260482', password: 'StudentDemo!', displayName: 'Tariro Moyo', role: 'Student / Alumni', accountType: 'student', description: 'Student portfolio owner' },
  { id: '250731', password: 'LecturerDemo!', displayName: 'Dr. N. Dube', role: 'Lecturer / Supervisor', accountType: 'lecturer', description: 'Achievement reviewer' },
  { id: '240618', password: 'CareerDemo!', displayName: 'Ms. P. Ncube', role: 'Career Services / Administrator', accountType: 'career-services', description: 'Career Services workspace' },
  { id: '990204', password: 'RecipientDemo!', displayName: 'Jordan Recipient', role: 'External Recipient', accountType: 'external-recipient', description: 'Specific shared-portfolio recipient' }
];

export const isSixDigitId = (value: string) => /^\d{6}$/.test(value);

export const authenticateDemoAccount = async (identifier: string, password: string): Promise<AuthenticatedUser | null> => {
  await new Promise(resolve => window.setTimeout(resolve, 450));
  const account = demoAccounts.find(candidate => candidate.id === identifier && candidate.password === password);
  if (!account) return null;
  const { password: _password, description: _description, ...user } = account;
  return user;
};
