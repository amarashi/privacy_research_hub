import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Box, Layers, Cpu } from "lucide-react";

export default function Tools() {
  const tools = [
    {
      name: "TAPAS",
      fullName: "Toolbox for Adversarial Privacy Auditing",
      desc: "The gold standard for adversarial privacy auditing. Modular framework allowing custom attacks and datasets.",
      lang: "Python",
      status: "Active",
      icon: Box,
      link: "https://github.com/alan-turing-institute/tapas",
      tags: ["NeurIPS 2022", "General Purpose", "Adversarial"]
    },
    {
      name: "Synth-MIA",
      fullName: "Synthetic Data Membership Inference Attacks",
      desc: "A comprehensive testbed implementing 13 different membership inference attacks. Scikit-learn compatible API.",
      lang: "Python",
      status: "New (2025)",
      icon: Layers,
      link: "https://arxiv.org/abs/2509.18014",
      tags: ["Tabular Data", "13 Attack Methods", "Benchmarking"]
    },
    {
      name: "pyMDMA",
      fullName: "Multimodal Data Metrics for Auditing",
      desc: "Evaluates privacy and utility across images, tabular, and time-series data. Includes fidelity and diversity metrics.",
      lang: "Python",
      status: "Active",
      icon: Cpu,
      link: "https://github.com/fraunhoferportugal/pymdma",
      tags: ["Multimodal", "Images", "Time-Series"]
    },
    {
      name: "DP-Auditorium",
      fullName: "Differential Privacy Auditing Library",
      desc: "Google Research's library for auditing DP guarantees with black-box access. Tests Pure, Approximate, and Rényi DP.",
      lang: "Python",
      status: "Active",
      icon: Box,
      link: "https://github.com/google/differential-privacy",
      tags: ["Google Research", "DP Verification", "Black-box"]
    }
  ];

  return (
    <div className="space-y-12 animate-in fade-in duration-500">
      <div className="grid lg:grid-cols-2 gap-12 items-center border-b border-border pb-12">
        <div className="space-y-6">
          <h1 className="text-4xl font-bold tracking-tight font-mono">TOOL_ARSENAL</h1>
          <p className="text-xl text-muted-foreground">
            Deployable libraries and frameworks for implementing empirical privacy auditing in your pipeline.
          </p>
          <div className="flex gap-4">
            <Button className="font-mono rounded-none bg-primary text-primary-foreground hover:bg-primary/90">
              <Github className="mr-2 h-4 w-4" />
              VIEW_ALL_REPOS
            </Button>
          </div>
        </div>
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent blur-2xl opacity-50"></div>
          <img 
            src="/images/tools-network.png" 
            alt="Tools Network Visualization" 
            className="relative z-10 w-full h-auto border border-border bg-black/50"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {tools.map((tool, i) => (
          <Card key={i} className="bg-card border-border hover:border-primary transition-all duration-300 group rounded-none flex flex-col">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-secondary rounded-none group-hover:bg-primary/20 transition-colors">
                    <tool.icon className="w-6 h-6 text-foreground group-hover:text-primary" />
                  </div>
                  <div>
                    <CardTitle className="font-mono text-xl">{tool.name}</CardTitle>
                    <CardDescription className="font-mono text-xs mt-1">{tool.fullName}</CardDescription>
                  </div>
                </div>
                <Badge variant="outline" className="font-mono rounded-none border-primary/30 text-primary bg-primary/5">
                  {tool.status}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="flex-grow space-y-4">
              <p className="text-muted-foreground text-sm leading-relaxed">
                {tool.desc}
              </p>
              <div className="flex flex-wrap gap-2">
                {tool.tags.map((tag) => (
                  <span key={tag} className="text-xs font-mono px-2 py-1 bg-secondary text-secondary-foreground border border-border">
                    {tag}
                  </span>
                ))}
              </div>
            </CardContent>
            <CardFooter className="border-t border-border pt-4 bg-secondary/5">
              <a href={tool.link} target="_blank" rel="noopener noreferrer" className="w-full">
                <Button variant="ghost" className="w-full justify-between font-mono hover:text-primary hover:bg-primary/5 group-hover:translate-x-1 transition-all">
                  ACCESS_REPOSITORY <ExternalLink className="w-4 h-4" />
                </Button>
              </a>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="bg-secondary/10 border border-border p-8 mt-12">
        <h3 className="text-xl font-bold font-mono mb-4">IMPLEMENTATION_GUIDE</h3>
        <div className="grid md:grid-cols-3 gap-8 text-sm text-muted-foreground">
          <div>
            <strong className="text-foreground block mb-2">01. SELECT_ATTACK_SURFACE</strong>
            Choose the appropriate tool based on your data modality (Tabular vs. Image) and threat model (Black-box vs. White-box).
          </div>
          <div>
            <strong className="text-foreground block mb-2">02. CONFIGURE_CANARIES</strong>
            Generate "canary" records that are distinct yet plausible within your data distribution. Use in-distribution canaries for LLMs.
          </div>
          <div>
            <strong className="text-foreground block mb-2">03. EXECUTE_AUDIT</strong>
            Run the audit pipeline to generate synthetic data and measure the success rate of membership inference attacks against the canaries.
          </div>
        </div>
      </div>
    </div>
  );
}
