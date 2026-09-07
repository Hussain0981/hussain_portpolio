export function goToPage(id: string) {
  const offsetTop = 50
  if (import.meta.server)
    return

  const el = document.getElementById(id)
  if (!el) {
    console.warn(`Element with id "${id}" not found`)
    return
  }
  const top = el.getBoundingClientRect().top + window.scrollY - offsetTop
  window.scrollTo({ top, behavior: 'smooth' })
}
