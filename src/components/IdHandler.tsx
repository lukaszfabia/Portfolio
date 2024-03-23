export default function scrollToElement(id: string | undefined) {
  const element = document.getElementById(id || "");
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
}
