function vtostr(v: any) {
  switch (typeof v) {
    case 'boolean':
      return v ? '1' : '0'
    case 'string':
      return v
    case 'number':
      return v.toString()
    default:
      throw new Error(`Can't convert ${v} to query string`)
  }
}

export function queryStr(obj: object) {
  return Object.entries(obj)
    .map(([k, v]) => `${k}=${vtostr(v)}`)
    .join('&')
}
