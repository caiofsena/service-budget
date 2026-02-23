export const generateNewId = () => {
  return Math.random().toString().substr(2, 5);
}

export const totalDiscountValue = (total: string, discountPct?: string) => {
  if (discountPct && Number(discountPct) > 0) {
    return ((Number(total) * Number(discountPct)) / 100).toString();
  }
  return '0';
}

export const totalValue = (total: string, discountPct?: string) => {
  return String(Number(total) - Number(totalDiscountValue(total, discountPct)))
}