import { createHmac } from 'crypto'

/**
 * Encrypt a string
 * @param toEncrypt - the value to encrypt
 * @param secretKey - the secret key to use
 * @returns the string encrypted
 */
export function encrypt(toEncrypt: string, secretKey: string): string {
  const hmac = createHmac('sha256', secretKey)
  hmac.update(toEncrypt)
  return hmac.digest('hex')
}

/**
 * Compare a value to a crypted value
 * @param toEncrypt - the value to encrypt
 * @param crypted - the value crypted
 * @param secretKey - the secret key
 * @returns true if the values are equal
 */
export function compare(
  toCompare: string,
  crypted: string,
  secretKey: string,
): boolean {
  const valueEncrypted = encrypt(toCompare, secretKey)
  return valueEncrypted === crypted
}
