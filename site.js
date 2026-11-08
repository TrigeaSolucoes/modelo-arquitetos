// Filtro do portfólio e briefing que vira mensagem de WhatsApp.
const botoes = document.querySelectorAll(".filtros button");
botoes.forEach((b) => b.addEventListener("click", () => {
  botoes.forEach((x) => x.setAttribute("aria-pressed", String(x === b)));
  const f = b.dataset.filtro;
  document.querySelectorAll(".obra").forEach((o) => {
    o.hidden = f !== "Todos" && o.dataset.categoria !== f;
  });
}));

const form = document.querySelector(".briefing");
form?.addEventListener("submit", (ev) => {
  ev.preventDefault();
  const d = new FormData(form);
  const url = new URL(form.dataset.whatsapp);
  url.searchParams.set("text", `Olá! Quero conversar sobre um projeto com o Atelier Lume. ` +
    `${d.get("tipo")}${d.get("bairro") ? ", no " + d.get("bairro") : ""}${d.get("area") ? ", cerca de " + d.get("area") : ""}. ` +
    `Prazo: ${String(d.get("prazo")).toLowerCase()}.`);
  window.open(url.toString(), "_blank", "noopener");
});
