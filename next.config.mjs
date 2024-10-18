// next.config.mjs
import { i18n } from "./next-i18next.config.js"; // Импортируй конфигурацию i18n

/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n, // Добавь i18n в конфигурацию
};

export default nextConfig;
