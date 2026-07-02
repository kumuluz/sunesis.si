function capitalizeFirst(value: string) {
  return value.charAt(0).toUpperCase() + value.slice(1)
}

export function splitTags(meta: string | undefined) {
  return meta
    ? meta
        .split(',')
        .map((tag) => tag.trim())
        .filter(Boolean)
        .map(capitalizeFirst)
    : []
}
