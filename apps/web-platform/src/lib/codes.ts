export function generateCustomerCode() {
  const year = new Date().getFullYear();
  const seq = Math.floor(100000 + Math.random() * 900000);
  return `CUS-${year}-${seq}`;
}

export function generateQuoteNumber() {
  const year = new Date().getFullYear();
  const seq = Math.floor(100000 + Math.random() * 900000);
  return `QTE-${year}-${seq}`;
}

export function generatePaymentRef() {
  const year = new Date().getFullYear();
  const seq = Math.floor(100000 + Math.random() * 900000);
  return `PAY-${year}-${seq}`;
}

export function generateProjectCode() {
  const year = new Date().getFullYear();
  const seq = Math.floor(100000 + Math.random() * 900000);
  return `PRJ-${year}-${seq}`;
}
