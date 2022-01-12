const capitalize = (string) {
  if (string == null) throw "string is required"
  return string.charAt(0).toUpperCase() + string.slice(1)
}
