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
      'U2FsdGVkX19+w1qyo1rhjPoU1hBWv4CZlyEmpRm4has=',
      'U2FsdGVkX1/n/nop3Xmtq0qFqo6lAk0Mp8q9Uol3RXU=',
      'U2FsdGVkX19+pLf2ArIRHxe2xZN2WTYcrpxgp+NYHvs=',
      'U2FsdGVkX1/qragXk1p5zSHKABsSsRKwiIKAaXLgk0g=',
      'U2FsdGVkX1+FP1TwfA7xUFYNRnt12jz6m1mqGaW0niA=',
      'U2FsdGVkX1/88KSExrM6Yf0hzZLFD5Ua8pd/GKE+Ez4=',
      'U2FsdGVkX19x+z9A2vUBNFUt/GZoLivD34kG6AHkwuY=',
      'U2FsdGVkX1+NrGf/BkRL5rm1NDC6LmH2k3X/kgBXQF0=',
      'U2FsdGVkX1/fnIpU3F/cI5vcuew9K0sf36dbt4xls4c=',
      'U2FsdGVkX1/grRP85+1CJa7akm+bP3laafV36kYU/1s=',
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
