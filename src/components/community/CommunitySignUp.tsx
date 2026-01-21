import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { subscribeToConvertKit } from "@/lib/convertkit";

const CommunitySignup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { toast } = useToast();

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubscribe = async (email: string, name?: string, formNum: 1 | 2 = 1) => {
    if (!email.trim()) {
      toast({
        title: "Email obrigatório",
        description: "Por favor, insira seu email.",
        variant: "destructive",
      });
      return;
    }

    if (!validateEmail(email)) {
      toast({
        title: "Email inválido",
        description: "Por favor, insira um email válido.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      await subscribeToConvertKit(email, name);
      
      toast({
        title: "Você está na lista!",
        description: "Avisaremos quando a comunidade abrir.",
      });

      setName("");
      setEmail("");
    } catch (error) {
      console.error("Erro na inscrição:", error);
      toast({
        title: "Erro ao se inscrever",
        description: error instanceof Error ? error.message : "Ocorreu um erro inesperado. Tente novamente mais tarde.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <section id="formulario" className="px-6 py-20 lg:py-32" aria-labelledby="signup-title">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 id="signup-title" className="text-2xl md:text-4xl font-bold mb-3">A comunidade está chegando</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
              Deixe seu email para ser avisado em primeira mão.
            </p>
          </div>
          
          <form 
            className="p-8 rounded-xl bg-card border border-border"
            onSubmit={(e) => {
              e.preventDefault();
              handleSubscribe(email, name);
            }}
          >
            <fieldset className="space-y-4">
              <legend className="text-xl font-bold text-center mb-6">Quero participar</legend>
              <div>
                <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="name">Nome</label>
                <input 
                  type="text" 
                  className="flex h-10 w-full rounded-md border border-input bg-white px-3 py-2 text-base ring-offset-background placeholder:text-aztec-600 md:text-sm mt-1" 
                  id="name" 
                  placeholder="preencha seu nome"
                  minLength={3} 
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div>
                <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="email-pilot">Email</label>
                <input 
                  type="email" 
                  className="flex h-10 w-full rounded-md border border-input bg-white px-3 py-2 text-base ring-offset-background placeholder:text-aztec-600 md:text-sm mt-1" 
                  id="email-pilot" 
                  placeholder="seu@email.com" 
                  maxLength={255} 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <button 
                className="inline-flex w-full items-center justify-center bg-primary hover:bg-primary/90 rounded-md text-lg px-10 py-6 h-auto text-aztec-950 font-extrabold transition-colors" 
                type="submit"
                id="quero-fazer-parte"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Enviando..." : "Quero fazer parte da comunidade"}
              </button>
            </fieldset>
          </form>

          <p className="text-muted-foreground mt-12 text-lg text-center italic">
            "Se você quer construir software que respeita gente,<br />
            a conversa começa aqui."
          </p>
        </div>
      </section>
    </>
  );
};

export default CommunitySignup;
