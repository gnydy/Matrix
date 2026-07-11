import { randomBytes, scrypt as scryptCallback, timingSafeEqual } from 'node:crypto';
import { promisify } from 'node:util';

const scrypt = promisify(scryptCallback);
const N = 16_384;
const r = 8;
const p = 1;
const keyLength = 64;

export async function hashPassword(password: string): Promise<string> {
  if (password.length < 12) throw new Error('Password must contain at least 12 characters.');
  const salt = randomBytes(16).toString('hex');
  const key = (await scrypt(password, salt, keyLength, { N, r, p, maxmem: 64 * 1024 * 1024 })) as Buffer;
  return `scrypt$${N}$${r}$${p}$${salt}$${key.toString('hex')}`;
}

export async function verifyPassword(password: string, encoded: string): Promise<boolean> {
  try {
    const [algorithm, nValue, rValue, pValue, salt, expectedHex] = encoded.split('$');
    if (algorithm !== 'scrypt' || !salt || !expectedHex) return false;
    const expected = Buffer.from(expectedHex, 'hex');
    const actual = (await scrypt(password, salt, expected.length, {
      N: Number(nValue), r: Number(rValue), p: Number(pValue), maxmem: 64 * 1024 * 1024,
    })) as Buffer;
    return expected.length === actual.length && timingSafeEqual(expected, actual);
  } catch {
    return false;
  }
}
