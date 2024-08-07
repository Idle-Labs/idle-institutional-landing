import { compare } from './crypto'

// Models

interface Vault {
  app: string
  type: 'credit' | 'earn'
  codes: string[]
}

// Constants

export const VAULT_CODE_LENGTH = 6
export const VAULTS: Vault[] = [
  {
    app: '//credit.idle.finance',
    type: 'credit',
    codes: [
      'U2FsdGVkX1/fSIC5nT6irnvye3vyCOO2X5/iI7Bng94=', // '6G8R7Q'
      'U2FsdGVkX1/hwaqMR06cyZju7mRNETn2peIW93/SMFE=', // 'GSER6L'
      'U2FsdGVkX19ZA87RC+0Y1YXiVniTATR2GQJPbgJtDeI=', // 'CDDA2X',
      'U2FsdGVkX1+TrdE+Sn/ETXYGzuitzLD+Ii5ty+Z0JRk=', // 'S58PHT',
      'U2FsdGVkX18CAVd7PGmHsaBBBJtKbI3MVzzaMH6WdNs=', // 'J2998A',
      'U2FsdGVkX19HbdZkTSTTAoAFMcVi+smCTeJ4Tqd9tww=', // 'YM9Y7P',
      'U2FsdGVkX181GFnCuP+BLERKr8AZQGg8XCe8P4ZIvjo=', // '66M55D',
      'U2FsdGVkX1+94L1sS/RmGEDX/gIOB1YGr2BSPkYEqCg=', // 'ZG8S4A',
      'U2FsdGVkX19G+XJ8Fbl1rapikR4ozCLFAT0idjaLaco=', // '3WSBSD',
      'U2FsdGVkX18UO1jJwvO2hFFlv2lLF8xkmqE9efVklSA=', // 'P26JQ3',
    ],
  },
]

/**
 * Get vault url by code
 * @param code - the early access code
 * @param key - the secret key
 * @returns the url to redirect the user
 */
export function getVaultUrl(code: string, key: string): string | undefined {
  let hash
  const vault = VAULTS.find((v) => {
    hash = v.codes.find((c) => compare(code, c, key))
    return !!hash
  })

  return vault && hash ? parseVaultUrl(vault, hash) : undefined
}

/**
 * Parse vault URL
 * @param vault - the vault data
 * @param hash - the hash
 * @returns the url of the vault
 */
export function parseVaultUrl(vault: Vault, hash: string): string {
  return `${vault.app}/#${vault.type}?_hash=${btoa(hash)}`
}
