import { Link, NavLink, useLocation } from "react-router-dom";
import { ShieldCheck, ScanSearch, Menu } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Header() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  const nav = [
    { to: "/", label: "Home" },
    { to: "/verify", label: "Verify" },
  ];

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="relative h-9 w-9 rounded-lg bg-gradient-to-br from-primary to-emerald-500 flex items-center justify-center shadow-lg shadow-emerald-500/20">
              <ShieldCheck className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="text-lg font-semibold tracking-tight">Jharkhand Credential Trust</span>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            {nav.map((n) => (
              <NavLink
                key={n.to}
                to={n.to}
                className={({ isActive }) =>
                  cn(
                    "text-sm transition-colors hover:text-foreground/90",
                    isActive ? "text-foreground" : "text-foreground/60",
                  )
                }
              >
                {n.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-2">
            <Button asChild variant="secondary" size="sm">
              <a href="#how-it-works">How it works</a>
            </Button>
            <Button asChild size="sm" className="gap-2">
              <Link to="/verify">
                <ScanSearch className="h-4 w-4" />
                Verify now
              </Link>
            </Button>
          </div>

          <button
            aria-label="Toggle menu"
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-border"
            onClick={() => setOpen((v) => !v)}
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col gap-2">
              {nav.map((n) => (
                <Link
                  key={n.to}
                  to={n.to}
                  className={cn(
                    "rounded-md px-3 py-2",
                    pathname === n.to ? "bg-accent text-accent-foreground" : "hover:bg-accent/50",
                  )}
                  onClick={() => setOpen(false)}
                >
                  {n.label}
                </Link>
              ))}
              <Button asChild size="sm" className="gap-2">
                <Link to="/verify" onClick={() => setOpen(false)}>
                  <ScanSearch className="h-4 w-4" /> Verify now
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
