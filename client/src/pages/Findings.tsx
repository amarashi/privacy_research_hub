import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Terminal, AlertTriangle, CheckCircle2, Search } from "lucide-react";

export default function Findings() {
  return (
    <div className="space-y-12 animate-in fade-in duration-500">
      <div className="space-y-4 border-b border-border pb-8">
        <h1 className="text-4xl font-bold tracking-tight font-mono">RESEARCH_LOG // FINDINGS</h1>
        <p className="text-xl text-muted-foreground max-w-3xl">
          Comprehensive analysis of the shift from similarity-based metrics to adversarial privacy auditing.
        </p>
      </div>

      <Tabs defaultValue="core-argument" className="space-y-8">
        <TabsList className="w-full justify-start border-b border-border rounded-none bg-transparent p-0 h-auto">
          {["CORE_ARGUMENT", "KEY_FINDINGS", "TIMELINE"].map((tab) => (
            <TabsTrigger
              key={tab}
              value={tab.toLowerCase().replace("_", "-")}
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:text-primary px-6 py-3 font-mono text-sm"
            >
              {tab}
            </TabsTrigger>
          ))}
        </TabsList>

        <TabsContent value="core-argument" className="space-y-8">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <section>
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <Search className="text-primary" /> The Problem with Similarity Metrics
                </h2>
                <div className="prose prose-invert max-w-none text-muted-foreground">
                  <p>
                    Traditional empirical privacy metrics often rely on measuring the statistical distance between synthetic and real data distributions. 
                    Research by Desfontaines et al. (2024-2025) argues that these metrics are fundamentally flawed because:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mt-4">
                    <li><strong className="text-foreground">They are gameable:</strong> Algorithms can optimize to minimize these distances without providing real privacy.</li>
                    <li><strong className="text-foreground">High variance:</strong> Results fluctuate wildly based on random seeds and data splits.</li>
                    <li><strong className="text-foreground">Unrealistic threat models:</strong> They assume attackers simply try to link records, ignoring reconstruction attacks.</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <Terminal className="text-primary" /> The Canary Solution
                </h2>
                <Card className="bg-secondary/10 border-primary/20">
                  <CardContent className="pt-6">
                    <p className="font-mono text-sm leading-relaxed">
                      "The most promising direction for empirical privacy evaluation is <span className="text-primary">auditing via membership inference attacks</span> using injected 'canaries'—fake, distinct records added to the training set."
                    </p>
                  </CardContent>
                </Card>
                <p className="mt-4 text-muted-foreground">
                  By measuring how easily an attacker can detect the presence of these canaries in the synthetic output, we get a concrete, lower-bound estimate of privacy leakage (often expressed as an empirical epsilon value).
                </p>
              </section>
            </div>

            <div className="space-y-6">
              <Alert className="border-primary/50 bg-primary/5 rounded-none">
                <AlertTriangle className="h-4 w-4 text-primary" />
                <AlertTitle className="font-mono text-primary">CRITICAL_INSIGHT</AlertTitle>
                <AlertDescription className="text-xs font-mono mt-2">
                  Higher utility in synthetic data often correlates directly with higher privacy leakage. The "free lunch" of high-utility, high-privacy synthetic data is largely a myth.
                </AlertDescription>
              </Alert>

              <Card className="rounded-none border-border bg-card">
                <CardHeader>
                  <CardTitle className="font-mono text-sm">METRIC_COMPARISON</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs font-mono">
                      <span>SIMILARITY_METRICS</span>
                      <span className="text-destructive">UNRELIABLE</span>
                    </div>
                    <div className="h-1 bg-secondary w-full overflow-hidden">
                      <div className="h-full bg-destructive w-[30%]"></div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs font-mono">
                      <span>ATTACK_AUDITING</span>
                      <span className="text-primary">ROBUST</span>
                    </div>
                    <div className="h-1 bg-secondary w-full overflow-hidden">
                      <div className="h-full bg-primary w-[85%]"></div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="key-findings" className="space-y-8">
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "LLM-Generated Text Risks",
                source: "Meeus et al. (ICML 2025)",
                content: "Standard canaries fail for LLMs. 'In-distribution' canaries with high-perplexity suffixes are required to effectively detect leakage in synthetic text."
              },
              {
                title: "Generative Overfitting",
                source: "Ward et al. (arXiv 2025)",
                content: "Generative models tend to significantly overfit to specific regions of training data. New attacks like Gen-LRA exploit this to detect membership without model access."
              },
              {
                title: "Unified Auditing Frameworks",
                source: "Synth-MIA (2025)",
                content: "No single attack is sufficient. Robust auditing requires a suite of 10+ different attack methods (shadow models, likelihood ratios, etc.) to find the worst-case leakage."
              },
              {
                title: "DP Generator Failures",
                source: "Multiple Studies",
                content: "Even generators with formal Differential Privacy guarantees (like PATEGAN) can leak information if implemented poorly or with insufficient noise."
              }
            ].map((item, i) => (
              <Card key={i} className="rounded-none border-border hover:border-primary transition-colors">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-lg font-bold">{item.title}</CardTitle>
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                  </div>
                  <div className="font-mono text-xs text-muted-foreground bg-secondary/50 px-2 py-1 w-fit">
                    SOURCE: {item.source}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{item.content}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="timeline" className="space-y-8">
          <div className="relative border-l border-border ml-4 space-y-12 py-4">
            {[
              { year: "2022", event: "TAPAS Toolbox Published", desc: "First major adversarial privacy auditing framework (NeurIPS)." },
              { year: "2023", event: "Privacy Auditing with One Run", desc: "Steinke et al. introduce efficient canary auditing (NeurIPS Outstanding Paper)." },
              { year: "JUN 2024", event: "PEPR Conference", desc: "Desfontaines critiques existing empirical metrics as 'bad and ugly'." },
              { year: "FEB 2025", event: "LLM Auditing", desc: "Canary approaches adapted for Large Language Models." },
              { year: "APR 2025", event: "Better Metrics Blog", desc: "The seminal article calling for a shift to attack-based metrics." },
              { year: "SEP 2025", event: "Synth-MIA Released", desc: "Comprehensive open-source testbed for tabular data attacks." }
            ].map((item, i) => (
              <div key={i} className="relative pl-8">
                <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 bg-background border border-primary rounded-full"></div>
                <div className="font-mono text-primary text-sm mb-1">{item.year}</div>
                <h3 className="text-lg font-bold">{item.event}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
