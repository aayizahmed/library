'use client';

import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { User, Session } from '@supabase/supabase-js';
import { createClient, isSupabaseConfigured } from '../lib/supabase/client';
import { Profile } from '../lib/types';

interface AuthContextType {
  user: User | null;
  session: Session | null;
  profile: Profile | null;
  isAdmin: boolean;
  loading: boolean;
  signInWithPassword: (email: string, pass: string) => Promise<{ error: Error | null }>;
  signOut: () => Promise<void>;
  demoLogin: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const DEMO_ADMIN_USER: User = {
  id: 'demo-admin-id-12345',
  app_metadata: { provider: 'email' },
  user_metadata: { full_name: 'Library Chief Administrator' },
  aud: 'authenticated',
  created_at: new Date().toISOString(),
  email: 'admin@school.edu',
  phone: '',
  role: 'authenticated',
  updated_at: new Date().toISOString(),
};

const DEMO_ADMIN_PROFILE: Profile = {
  id: 'demo-admin-id-12345',
  full_name: 'Library Chief Administrator',
  role: 'admin',
  created_at: new Date().toISOString(),
};

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // Check if demo admin state exists in sessionStorage
    const storedDemo = typeof window !== 'undefined' ? sessionStorage.getItem('school_lib_demo_admin') : null;

    if (storedDemo) {
      setUser(DEMO_ADMIN_USER);
      setProfile(DEMO_ADMIN_PROFILE);
      setLoading(false);
      return;
    }

    if (!isSupabaseConfigured()) {
      setLoading(false);
      return;
    }

    const supabase = createClient();

    // Check active session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setUser(session?.user ?? null);
      if (session?.user) {
        fetchProfile(session.user.id);
      } else {
        setLoading(false);
      }
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      setUser(session?.user ?? null);
      if (session?.user) {
        fetchProfile(session.user.id);
      } else {
        setProfile(null);
        setLoading(false);
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const fetchProfile = async (userId: string) => {
    try {
      const supabase = createClient();
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', userId)
        .single();

      if (!error && data) {
        setProfile(data as Profile);
      } else {
        // Fallback default admin profile
        setProfile({
          id: userId,
          full_name: 'Library Administrator',
          role: 'admin',
          created_at: new Date().toISOString(),
        });
      }
    } catch {
      setProfile({
        id: userId,
        full_name: 'Library Administrator',
        role: 'admin',
        created_at: new Date().toISOString(),
      });
    } finally {
      setLoading(false);
    }
  };

  const signInWithPassword = async (email: string, pass: string) => {
    if (!isSupabaseConfigured()) {
      // Demo Auth handling
      if (email.toLowerCase().includes('admin') || email === 'admin@school.edu') {
        demoLogin();
        return { error: null };
      }
      return { error: new Error('Invalid credentials. Use admin@school.edu to log in.') };
    }

    try {
      const supabase = createClient();
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password: pass,
      });

      if (error) return { error };

      if (data.user) {
        await fetchProfile(data.user.id);
      }

      return { error: null };
    } catch (e: any) {
      return { error: e };
    }
  };

  const demoLogin = () => {
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('school_lib_demo_admin', 'true');
    }
    setUser(DEMO_ADMIN_USER);
    setProfile(DEMO_ADMIN_PROFILE);
    setLoading(false);
  };

  const signOut = async () => {
    if (typeof window !== 'undefined') {
      sessionStorage.removeItem('school_lib_demo_admin');
    }
    if (isSupabaseConfigured()) {
      const supabase = createClient();
      await supabase.auth.signOut();
    }
    setUser(null);
    setSession(null);
    setProfile(null);
  };

  const isAdmin = Boolean(profile?.role === 'admin' || profile?.role === 'librarian' || user?.id === DEMO_ADMIN_USER.id);

  return (
    <AuthContext.Provider
      value={{
        user,
        session,
        profile,
        isAdmin,
        loading,
        signInWithPassword,
        signOut,
        demoLogin,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
