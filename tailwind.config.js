 /** @type {import('tailwindcss').Config} */
 export default  {
  content: [
    "./index.html", // ملف HTML الأساسي
    "./src/**/*.{js,ts,jsx,tsx}", // أي ملفات JavaScript/React
  ],
  theme: {
    extend: {}, // يمكنك تخصيص الإعدادات هنا
  },
  plugins: [], // أضف أي إضافات إذا كنت بحاجة إليها
};
