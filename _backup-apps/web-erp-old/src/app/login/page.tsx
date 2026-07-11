import { LoginForm } from '@/components/login-form';

export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center p-6">
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <h1 className="text-2xl font-bold text-primary">Matrix ERP</h1>
          <p className="mt-2 text-sm text-muted">سجّل الدخول لإدارة عملياتك</p>
        </div>
        <LoginForm />
      </div>
    </div>
  );
}
