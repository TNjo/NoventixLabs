import { ArrowLeft } from "lucide-react";
import { LogoMark } from "@/components/brand/logo";
import { ButtonLink } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="relative grid min-h-[80vh] place-items-center overflow-hidden px-6 pt-32 pb-20 text-center">
      <div aria-hidden className="absolute inset-0 -z-10 bg-grid mask-radial opacity-60" />
      <div aria-hidden className="absolute top-1/3 left-1/2 -z-10 h-96 w-96 -translate-x-1/2 rounded-full bg-brand/25 blur-[120px]" />
      <div>
        <LogoMark className="mx-auto h-16 w-16 animate-float" />
        <p className="mt-8 font-display text-8xl font-bold tracking-tighter text-gradient sm:text-9xl">404</p>
        <h1 className="mt-4 font-display text-2xl font-semibold">This page wandered off.</h1>
        <p className="mx-auto mt-3 max-w-md text-muted">The page you&apos;re looking for doesn&apos;t exist or has moved. Let&apos;s get you back on track.</p>
        <ButtonLink href="/" className="mt-8">
          <ArrowLeft className="h-4 w-4" /> Back to home
        </ButtonLink>
      </div>
    </section>
  );
}
