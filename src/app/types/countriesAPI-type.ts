export interface Country {
  flags: Flags
  name: Name
  cca3: string
  capital: string[]
  region: string
  population: number
}

export interface Flags {
  png: string
  svg: string
  alt: string
}

export interface Name {
  common: string
  official: string
  nativeName: string
}

