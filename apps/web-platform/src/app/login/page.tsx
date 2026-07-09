import { LoginForm } from '@/components/login-form';
import { CONTROL_CENTER_NAME, CONTROL_CENTER_TAGLINE } from '@/lib/branding';

export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center p-4">
      <div className="w-full max-w-md rounded-2xl border border-border bg-card p-8">
        <p className="text-sm font-medium text-primary">{CONTROL_CENTER_NAME}</p>
        <h1 className="mt-1 text-2xl font-bold">تسجيل الدخول</h1>
        <p className="mt-2 text-sm text-muted">{CONTROL_CENTER_TAGLINE}</p>
        <div className="mt-8">
          <LoginForm />
        </div>
      </div>
    </div>
  );
}
