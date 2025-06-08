export function getRatingColor(rating) {
    if (rating < 3) return "text-red-500";
    if (rating <= 4) return "text-yellow-500";
    return "text-green-500";
  }
  