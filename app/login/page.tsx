'use client';
  
import LoginForm from './../../components/auth/components/LoginForm';
import { AuthProvider } from './../../components/auth/components/AuthProvider';

export default function AuthPage() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <AuthProvider>
      <LoginForm />
    </AuthProvider>
    </section>
  );
}