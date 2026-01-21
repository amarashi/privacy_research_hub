import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Shield, FileText, Code, Database, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { href: "/", label: "HUB_INDEX", icon: Shield },
    { href: "/findings", label: "FINDINGS_LOG", icon: FileText },
    { href: "/tools", label: "TOOL_ARSENAL", icon: Code },
    { href: "/papers", label: "DATA_ARCHIVE", icon: Database },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary selection:text-primary-foreground">
      {/* Top Navigation Bar - Brutalist Style */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/95 backdrop-blur-sm">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/">
            <div className="flex items-center gap-2 cursor-pointer group">
              <div className="w-8 h-8 bg-primary flex items-center justify-center">
                <Shield className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-mono font-bold text-lg tracking-tighter group-hover:text-primary transition-colors">
                PRIVACY_RESEARCH_HUB
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = location === item.href;
              return (
                <Link key={item.href} href={item.href}>
                  <div
                    className={cn(
                      "px-4 py-2 font-mono text-sm cursor-pointer transition-all border border-transparent hover:border-primary/50 hover:text-primary flex items-center gap-2",
                      isActive && "bg-primary/10 border-primary text-primary"
                    )}
                  >
                    <item.icon className="w-4 h-4" />
                    {item.label}
                  </div>
                </Link>
              );
            })}
          </nav>

          {/* Mobile Menu Toggle */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-background pt-20 px-4 md:hidden">
          <nav className="flex flex-col gap-2">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <div
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    "p-4 font-mono text-lg border border-border hover:border-primary hover:text-primary flex items-center gap-3",
                    location === item.href && "bg-primary/10 border-primary text-primary"
                  )}
                >
                  <item.icon className="w-5 h-5" />
                  {item.label}
                </div>
              </Link>
            ))}
          </nav>
        </div>
      )}

      {/* Main Content */}
      <main className="pt-20 pb-12 min-h-screen relative overflow-hidden">
        {/* Background Grid Effect */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]" 
             style={{ 
               backgroundImage: `linear-gradient(to right, #333 1px, transparent 1px), linear-gradient(to bottom, #333 1px, transparent 1px)`,
               backgroundSize: '40px 40px'
             }} 
        />
        
        <div className="container mx-auto px-4 relative z-10">
          {children}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-8 bg-card/50">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="font-mono text-xs text-muted-foreground">
            SYSTEM_STATUS: ONLINE <span className="text-primary">●</span>
          </div>
          <div className="font-mono text-xs text-muted-foreground">
            © 2026 PRIVACY_RESEARCH_HUB // SECURE_CONNECTION
          </div>
        </div>
      </footer>
    </div>
  );
}
