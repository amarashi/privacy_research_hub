import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FileText, Download, Calendar, Users } from "lucide-react";

export default function Papers() {
  const papers = [
    {
      title: "The Canary's Echo: Auditing Privacy Risks of LLM-Generated Synthetic Text",
      authors: "Meeus, Wutschitz, Zanella-Béguelin, Tople, Shokri",
      venue: "ICML 2025",
      date: "Feb 2025",
      id: "arXiv:2502.14921",
      abstract: "Identifies that standard canaries are sub-optimal for LLMs. Proposes in-distribution canaries with high-perplexity suffixes for better detection of privacy leakage in synthetic text.",
      tags: ["LLM", "NLP", "Canaries"]
    },
    {
      title: "Privacy Auditing Synthetic Data Release through Local Likelihood Attacks",
      authors: "Ward, Wang, Cheng",
      venue: "arXiv Preprint",
      date: "Aug 2025",
      id: "arXiv:2508.21146",
      abstract: "Proposes Gen-LRA, a novel no-box membership inference attack that exploits generative model overfitting. Consistently outperforms existing attacks without requiring model access.",
      tags: ["Gen-LRA", "No-Box Attack", "Overfitting"]
    },
    {
      title: "Synth-MIA: A Testbed for Auditing Privacy Leakage in Tabular Data Synthesis",
      authors: "Ward, Lin, Wang, Cheng",
      venue: "arXiv Preprint",
      date: "Sep 2025",
      id: "arXiv:2509.18014",
      abstract: "Presents a unified framework for privacy auditing in tabular data. Finds that higher synthetic data utility often correlates with greater privacy leakage.",
      tags: ["Tabular", "Benchmark", "Utility-Privacy Tradeoff"]
    },
    {
      title: "Empirical privacy metrics: the bad, the ugly… and the good, maybe?",
      authors: "Damien Desfontaines",
      venue: "PEPR 2024",
      date: "Jun 2024",
      id: "Conference Talk",
      abstract: "Critical analysis of existing metrics. Identifies four major problems: gameability, high randomness, unrealistic threat models, and averaging effects.",
      tags: ["Critique", "Foundational", "Metrics"]
    }
  ];

  return (
    <div className="space-y-12 animate-in fade-in duration-500">
      <div className="border-b border-border pb-8">
        <h1 className="text-4xl font-bold tracking-tight font-mono">DATA_ARCHIVE // PAPERS</h1>
        <p className="text-xl text-muted-foreground mt-4 max-w-3xl">
          Primary source documents driving the shift in empirical privacy evaluation.
        </p>
      </div>

      <div className="space-y-6">
        {papers.map((paper, i) => (
          <Card key={i} className="rounded-none border-border hover:border-primary transition-all group">
            <div className="flex flex-col md:flex-row">
              <div className="p-6 flex-grow space-y-4">
                <div className="flex flex-wrap gap-2 mb-2">
                  {paper.tags.map(tag => (
                    <Badge key={tag} variant="secondary" className="rounded-none font-mono text-xs border-border">
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                <CardTitle className="text-xl md:text-2xl font-bold group-hover:text-primary transition-colors">
                  {paper.title}
                </CardTitle>
                
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground font-mono">
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" /> {paper.authors}
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" /> {paper.venue} ({paper.date})
                  </div>
                  <div className="flex items-center gap-1 text-primary">
                    <FileText className="w-4 h-4" /> {paper.id}
                  </div>
                </div>
                
                <p className="text-muted-foreground leading-relaxed border-l-2 border-primary/20 pl-4">
                  {paper.abstract}
                </p>
              </div>
              
              <div className="bg-secondary/10 border-t md:border-t-0 md:border-l border-border p-6 flex flex-col justify-center gap-3 min-w-[200px]">
                <Button className="w-full font-mono rounded-none bg-primary text-primary-foreground hover:bg-primary/90">
                  <Download className="mr-2 h-4 w-4" /> PDF_ACCESS
                </Button>
                <Button variant="outline" className="w-full font-mono rounded-none hover:bg-secondary">
                  CITATION
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
