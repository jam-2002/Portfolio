export function hostName(href) {
  try {
    return new URL(href).hostname;
  } catch {
    return "external link";
  }
}

export function formatMultiline(text = "") {
  return text.replaceAll("\n", "<br />");
}
