export async function submitWizard(payload: unknown) {
  const response = await fetch("/api/wizard/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data?.message || "Erro ao enviar cadastro.");
  }

  return data;
}
