import { useState } from "react";

import { useToast } from "@/hooks/use-toast";

const CommunitySignup = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email.trim()) {
      toast({
        title: "Email obrigatório",
        description: "Por favor, insira seu email.",
        variant: "destructive",
      });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast({
        title: "Email inválido",
        description: "Por favor, insira um email válido.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simula envio - substituir por integração real com backend
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    toast({
      title: "Você está na lista!",
      description: "Avisaremos quando a comunidade abrir.",
    });
    
    setEmail("");
    setIsSubmitting(false);
  };

  return (
    <section id="signup" className="px-6 py-20 lg:py-32 bg-card">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-2xl md:text-4xl font-bold mb-6">
          A comunidade está chegando.
        </h2>
        
        <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
          Deixe seu email para ser avisado em primeira mão quando abrirmos as portas.
        </p>
        
        <form 
          onSubmit={handleSubmit}
          className="p-8 rounded-xl bg-background border border-border max-w-md mx-auto"
        >
          <div className="mb-6">
            <label htmlFor="email" className="sr-only">Email</label>
            <input
              id="email"
              type="email"
              placeholder="seu@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="text-center text-lg py-6"
              maxLength={255}
              aria-describedby="email-hint"
            />
            <p id="email-hint" className="text-sm text-muted-foreground mt-2">
              Sem spam. Só o que importa.
            </p>
          </div>
          
          <button 
            type="submit" 
            className="w-full text-lg py-6 h-auto"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Enviando..." : "Quero ser avisado"}
          </button>
        </form>
        
        <p className="text-muted-foreground mt-12 text-lg italic">
          "Se você quer construir software que respeita gente,<br />
          a conversa começa aqui."
        </p>
      </div>
    </section>
  );
};

export default CommunitySignup;
