const CLARITY_SCRIPT_ELEMENT_ID = "clarity-bootstrap-script"

function normalizeProjectId(raw: unknown): string | undefined {
  if (typeof raw !== "string") return undefined
  const trimmed = raw.trim()
  if (!trimmed) return undefined

  // Clarity project ids are short tokens; keep this strict to avoid
  // accidental injection via misconfiguration.
  if (!/^[a-zA-Z0-9_-]+$/.test(trimmed)) return undefined

  return trimmed
}

function buildClarityBootstrapCode(projectId: string): string {
  // Official bootstrap snippet (queue-safe) that loads
  // https://www.clarity.ms/tag/<projectId>
  return `(function(c,l,a,r,i,t,y){
  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
  t=l.createElement(r);t.async=true;t.src="https://www.clarity.ms/tag/"+i;
  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
})(window, document, "clarity", "script", "${projectId}");`
}

export function initClarity(): void {
  if (!import.meta.env.PROD) return

  const projectId = normalizeProjectId(import.meta.env.VITE_CLARITY_PROJECT_ID)
  if (!projectId) return

  if (document.getElementById(CLARITY_SCRIPT_ELEMENT_ID)) return

  const head = document.head
  if (!head) return

  const script = document.createElement("script")
  script.id = CLARITY_SCRIPT_ELEMENT_ID
  script.type = "text/javascript"
  script.innerHTML = buildClarityBootstrapCode(projectId)

  head.appendChild(script)
}

