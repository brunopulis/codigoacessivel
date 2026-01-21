export async function subscribeToConvertKit(email: string, name?: string) {
  const FORM_ID = import.meta.env.PUBLIC_CONVERTKIT_FORM_ID;

  if (!FORM_ID || FORM_ID === "your_form_id_here") {
    throw new Error("ConvertKit Form ID não configurado");
  }

  const url = `https://app.convertkit.com/forms/${FORM_ID}/subscriptions`;

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email_address: email,
      first_name: name,
    }),
  });

  if (!response.ok) {
    const contentType = response.headers.get("content-type");
    if (contentType && contentType.includes("application/json")) {
      const errorData = await response.json();
      throw new Error(
        errorData.message || "Erro ao se inscrever no ConvertKit",
      );
    } else {
      const errorText = await response.text();
      console.error("Erro ConvertKit (não-JSON):", errorText);
      throw new Error("Erro na integração com ConvertKit");
    }
  }

  // A API de formulários do ConvertKit pode retornar um JSON vazio ou redirect
  // Se chegamos aqui, a resposta foi 2xx (sucesso)
  return { success: true };
}
