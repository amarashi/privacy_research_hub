import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Lock, Eye, ShieldAlert, Terminal } from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  return (
    <div className="space-y-16 animate-in fade-in duration-700">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center border-b border-border/50 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 border border-primary/30 bg-primary/5 text-primary text-xs font-mono tracking-wider">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              LATEST_INTEL: CANARY AUDITING PROTOCOLS
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-none">
              EMPIRICAL <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/50">
                PRIVACY
              </span> <br />
              METRICS
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-lg leading-relaxed">
              Moving beyond theoretical guarantees. A comprehensive hub for attack-based privacy auditing, synthetic data evaluation, and the search for robust metrics.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link href="/findings">
                <Button size="lg" className="font-mono rounded-none border-primary bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all">
                  <Terminal className="mr-2 h-4 w-4" />
                  ACCESS_FINDINGS
                </Button>
              </Link>
              <Link href="/tools">
                <Button size="lg" variant="outline" className="font-mono rounded-none hover:bg-white/5">
                  DEPLOY_TOOLS
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-primary/20 opacity-20 blur group-hover:opacity-40 transition duration-1000"></div>
            <div className="relative border border-border bg-black/50 backdrop-blur-sm p-2">
              <img 
                src={`${import.meta.env.BASE_URL}images/hero-canary.png`} 
                alt="Digital Canary Visualization" 
                className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute bottom-4 right-4 font-mono text-xs bg-black/80 px-2 py-1 border border-primary/30 text-primary">
                FIG_01: DIGITAL_CANARY
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Insights Grid */}
      <section className="space-y-8">
        <div className="flex items-end justify-between border-b border-border pb-4">
          <h2 className="text-3xl font-bold tracking-tight">CORE_INTELLIGENCE</h2>
          <span className="font-mono text-xs text-muted-foreground">STATUS: VERIFIED</span>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: ShieldAlert,
              title: "Attack-Based Auditing",
              desc: "Why similarity metrics fail and how adversarial attacks provide the only true measure of privacy leakage."
            },
            {
              icon: Eye,
              title: "Canary Protocols",
              desc: "Injecting 'canary' records to empirically test membership inference risks in synthetic datasets."
            },
            {
              icon: Lock,
              title: "LLM Vulnerabilities",
              desc: "New research on how Large Language Models leak training data and specific auditing techniques for text."
            }
          ].map((item, i) => (
            <Card key={i} className="bg-card border-border hover:border-primary/50 transition-colors group rounded-none">
              <CardHeader>
                <item.icon className="w-8 h-8 text-muted-foreground group-hover:text-primary transition-colors mb-4" />
                <CardTitle className="font-mono text-lg">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Featured Research Preview */}
      <section className="grid lg:grid-cols-2 gap-12 items-center bg-secondary/20 p-8 border border-border">
        <div className="order-2 lg:order-1">
          <img 
            src={`${import.meta.env.BASE_URL}images/audit-grid.png`} 
            alt="Audit Grid Visualization" 
            className="w-full h-auto border border-border opacity-80 hover:opacity-100 transition-opacity"
          />
        </div>
        <div className="space-y-6 order-1 lg:order-2">
          <h2 className="text-3xl font-bold">THE SHIFT TO EMPIRICAL AUDITING</h2>
          <p className="text-muted-foreground">
            Recent research from 2024-2025 has exposed significant flaws in traditional privacy metrics. 
            The field is rapidly adopting "Game-Based" auditing where privacy is measured by the success rate of simulated attacks.
          </p>
          <ul className="space-y-3 font-mono text-sm">
            <li className="flex items-center gap-3">
              <span className="text-primary">&gt;&gt;</span> TAPAS Framework Integration
            </li>
            <li className="flex items-center gap-3">
              <span className="text-primary">&gt;&gt;</span> Synth-MIA Testbed Results
            </li>
            <li className="flex items-center gap-3">
              <span className="text-primary">&gt;&gt;</span> Gen-LRA Attack Vectors
            </li>
          </ul>
          <Link href="/papers">
            <Button variant="link" className="pl-0 text-primary hover:text-primary/80 group">
              EXPLORE_FULL_ARCHIVE <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
