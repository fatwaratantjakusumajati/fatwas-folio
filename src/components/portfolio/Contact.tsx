import { useState } from "react";
import { Mail, Phone, Linkedin, Award, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import { z } from "zod";
import { useReveal } from "@/hooks/useReveal";

const schema = z.object({
  name: z.string().trim().min(1, "Name required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  message: z.string().trim().min(1, "Message required").max(1000),
});

const contactItems = [
  { icon: Mail, label: "Email", value: "fatwa.ratantja@gmail.com", href: "mailto:fatwa.ratantja@gmail.com" },
  { icon: Phone, label: "Phone", value: "+62 8XX XXXX XXXX", href: "tel:+62" },
  { icon: Linkedin, label: "LinkedIn", value: "fatwa-ratantja", href: "https://linkedin.com/in/fatwa-ratantja" },
  { icon: Award, label: "Credly", value: "View Badges", href: "https://credly.com" },
];

export const Contact = () => {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = schema.safeParse(form);
    if (!result.success) {
      toast({ title: "Validation error", description: result.error.issues[0].message, variant: "destructive" });
      return;
    }
    setLoading(true);
    const subject = encodeURIComponent(`Portfolio contact from ${result.data.name}`);
    const body = encodeURIComponent(`${result.data.message}\n\n— ${result.data.name} (${result.data.email})`);
    window.location.href = `mailto:fatwa.ratantja@gmail.com?subject=${subject}&body=${body}`;
    setTimeout(() => {
      toast({ title: "Opening your email client...", description: "Thanks for reaching out!" });
      setForm({ name: "", email: "", message: "" });
      setLoading(false);
    }, 500);
  };

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-glow opacity-40 pointer-events-none animate-glow" />
      <div className="container relative">
        <div className="text-center mb-20">
          <p className="text-accent font-semibold text-xs uppercase tracking-[0.3em] mb-4">— Contact —</p>
          <h2 className="font-heading text-4xl md:text-6xl font-bold">Let's <span className="text-gradient-animated">Connect</span></h2>
          <p className="text-muted-foreground mt-5 max-w-xl mx-auto leading-relaxed">Open to opportunities in AI, IT Infrastructure, and Software Engineering.</p>
        </div>

        <div ref={ref} className="grid lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
          <div className={`space-y-4 ${visible ? "animate-fade-in-left" : "opacity-0"}`}>
            {contactItems.map((c) => (
              <a key={c.label} href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="card-futuristic flex items-center gap-4 p-5 group">
                <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500 shadow-glow">
                  <c.icon className="h-5 w-5 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">{c.label}</p>
                  <p className="font-medium">{c.value}</p>
                </div>
              </a>
            ))}
          </div>

          <form onSubmit={handleSubmit} className={`card-futuristic p-8 space-y-5 ${visible ? "animate-fade-in-right" : "opacity-0"}`}>
            <div>
              <Label htmlFor="name">Name</Label>
              <Input id="name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} maxLength={100} className="mt-1.5" />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} maxLength={255} className="mt-1.5" />
            </div>
            <div>
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" rows={5} value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} maxLength={1000} className="mt-1.5 resize-none" />
            </div>
            <Button type="submit" disabled={loading} className="w-full bg-gradient-primary hover:opacity-90 shadow-elegant">
              {loading ? "Sending..." : <>Send Message <Send className="ml-2 h-4 w-4" /></>}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};
