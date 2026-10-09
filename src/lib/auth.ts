import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import type { Session, User } from "@supabase/supabase-js";

let cachedSession: Session | null = null;
let authReady = false;
const listeners = new Set<() => void>();

function notify() {
  listeners.forEach((l) => l());
}

function createGuestSession(): Session {
  return {
    access_token: "guest-token",
    token_type: "bearer",
    expires_in: 3600,
    refresh_token: "guest-refresh",
    user: {
      id: "guest-user-001",
      app_metadata: {},
      user_metadata: { full_name: "Guest Explorer" },
      aud: "authenticated",
      created_at: new Date().toISOString(),
      email: "guest@careernova.ai",
    } as User,
  } as Session;
}

function setAuthState(session: Session | null) {
  cachedSession = session;
  authReady = true;
  notify();
}

if (typeof window !== "undefined") {
  const isGuest = localStorage.getItem("careernova_guest") === "true";
  if (isGuest) {
    cachedSession = createGuestSession();
    authReady = true;
  }

  supabase.auth
    .getSession()
    .then(({ data }) => {
      if (data.session) {
        setAuthState(data.session);
      } else if (!isGuest) {
        setAuthState(null);
      }
    })
    .catch(() => {
      if (!isGuest) setAuthState(null);
    });

  supabase.auth.onAuthStateChange((_e, session) => {
    if (session) {
      localStorage.removeItem("careernova_guest");
      setAuthState(session);
    }
  });
}

export function signInAsGuest() {
  if (typeof window !== "undefined") {
    localStorage.setItem("careernova_guest", "true");
  }
  setAuthState(createGuestSession());
}

export async function signOut() {
  if (typeof window !== "undefined") {
    localStorage.removeItem("careernova_guest");
  }
  try {
    await supabase.auth.signOut();
  } catch {}
  setAuthState(null);
}

export function useAuth() {
  const [session, setSession] = useState<Session | null>(cachedSession);
  const [loading, setLoading] = useState(!authReady);
  useEffect(() => {
    const update = () => {
      setSession(cachedSession);
      setLoading(!authReady);
    };
    listeners.add(update);
    update();
    supabase.auth.getSession().then(({ data }) => {
      setAuthState(data.session);
    });
    return () => {
      listeners.delete(update);
    };
  }, []);
  return { session, user: session?.user as User | undefined, loading };
}
