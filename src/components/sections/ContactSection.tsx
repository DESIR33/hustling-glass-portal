import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "We'll get back to you soon.",
    });
  };

  return (
    <section className="container mx-auto px-4 py-24">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
          <p className="text-muted-foreground">
            Have questions? We'd love to hear from you.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="glass p-8 rounded-xl space-y-6">
          <div className="space-y-2">
            <Input
              placeholder="Your email"
              className="glass glass-hover"
              required
            />
          </div>
          <div className="space-y-2">
            <Textarea
              placeholder="Your message"
              className="glass glass-hover min-h-[150px]"
              required
            />
          </div>
          <Button type="submit" className="w-full glass glass-hover">
            Send Message
          </Button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;