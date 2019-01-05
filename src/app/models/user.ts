export type Status = 'On' | 'Off' | 'Busy' | 'Away';

export interface User {
  nick?: string;
  subnick?: string;
  age?: number;
  email?: string;
  status?: Status;
  uid?: any;
}
