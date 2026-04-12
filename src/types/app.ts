export interface IUser {
  id: string;
  aud: string;
  role?: string;
  email?: string;
  phone?: string;
  confirmed_at?: string;
  email_confirmed_at?: string;
  last_sign_in_at?: string;
  created_at: string;
  updated_at?: string;
  is_anonymous?: boolean;

  app_metadata: {
    provider?: string;
    providers?: string[];
    // [key: string]: any;
  };

  user_metadata: {
    name?: string;
    email?: string;
    email_verified?: boolean;
    phone_verified?: boolean;
    sub?: string;
  };

  //   identities?: any[];
}
