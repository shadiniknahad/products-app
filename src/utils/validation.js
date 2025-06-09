export function isValidProductsData(data) {
    return Array.isArray(data) &&
      data.length > 0 &&
      data.every(p => p.id && p.title);
  }
  