// src/utils/storage.js

export function loadFromCache(key) {
    try {
      const cached = localStorage.getItem(key);
      if (!cached) return null;
  
      const parsed = JSON.parse(cached);
      return Array.isArray(parsed) && parsed.length > 0 ? parsed : null;
    } catch (err) {
      console.warn("خطا در خواندن localStorage:", err);
      return null;
    }
  }
  
  export function saveToCache(key, data) {
    try {
      localStorage.setItem(key, JSON.stringify(data));
    } catch (err) {
      console.warn("خطا در ذخیره‌سازی localStorage:", err);
    }
  }
  