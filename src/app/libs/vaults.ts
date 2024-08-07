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
      'U2FsdGVkX1/fSIC5nT6irnvye3vyCOO2X5/iI7Bng94=',
      'U2FsdGVkX1/hwaqMR06cyZju7mRNETn2peIW93/SMFE=',
      'U2FsdGVkX19ZA87RC+0Y1YXiVniTATR2GQJPbgJtDeI=',
      'U2FsdGVkX1+TrdE+Sn/ETXYGzuitzLD+Ii5ty+Z0JRk=',
      'U2FsdGVkX18CAVd7PGmHsaBBBJtKbI3MVzzaMH6WdNs=',
      'U2FsdGVkX19HbdZkTSTTAoAFMcVi+smCTeJ4Tqd9tww=',
      'U2FsdGVkX181GFnCuP+BLERKr8AZQGg8XCe8P4ZIvjo=',
      'U2FsdGVkX1+94L1sS/RmGEDX/gIOB1YGr2BSPkYEqCg=',
      'U2FsdGVkX19G+XJ8Fbl1rapikR4ozCLFAT0idjaLaco=',
      'U2FsdGVkX18UO1jJwvO2hFFlv2lLF8xkmqE9efVklSA=',
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
  const vault = VAULTS.find((v) => v.codes.find((c) => compare(code, c, key)))
  return vault ? parseVaultUrl(vault, code) : undefined
}

/**
 * Parse vault URL
 * @param vault - the vault data
 * @param hash - the hash
 * @returns the url of the vault
 */
export function parseVaultUrl(vault: Vault, code: string): string {
  return `${vault.app}/#/${vault.type}?_authCode=${btoa(code)}`
}
