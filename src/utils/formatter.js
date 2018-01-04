export function formatPrice(price) {
  return `S/.${(price).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`;
}
