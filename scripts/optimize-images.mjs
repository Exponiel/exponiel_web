#!/usr/bin/env node

/**
 * Скрипт для оптимизации изображений в проекте
 *
 * Использует sharp для сжатия PNG без потери визуального качества
 * Поддерживает автоматическую конвертацию в WebP для дополнительной оптимизации
 */

import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PROJECT_ROOT = path.resolve(__dirname, '..');
const SCREENSHOTS_DIR = path.join(PROJECT_ROOT, 'public', 'screenshots');
const BACKUP_DIR = path.join(PROJECT_ROOT, 'public', 'screenshots-backup');

// Настройки оптимизации
const OPTIMIZATION_CONFIG = {
  png: {
    quality: 80,
    compressionLevel: 9,
    effort: 10,
  },
  webp: {
    quality: 75,
    effort: 6,
  },
};

/**
 * Получить размер файла в читаемом формате
 */
function getFileSizeInMB(filePath) {
  const stats = fs.statSync(filePath);
  return (stats.size / (1024 * 1024)).toFixed(2);
}

/**
 * Создать резервную копию оригинальных изображений
 */
function createBackup() {
  if (fs.existsSync(BACKUP_DIR)) {
    console.log('📁 Backup directory already exists, skipping backup...');
    return;
  }

  console.log('📦 Creating backup of original images...');
  fs.mkdirSync(BACKUP_DIR, { recursive: true });

  const files = fs.readdirSync(SCREENSHOTS_DIR);
  files.forEach((file) => {
    if (file.endsWith('.png')) {
      const srcPath = path.join(SCREENSHOTS_DIR, file);
      const destPath = path.join(BACKUP_DIR, file);
      fs.copyFileSync(srcPath, destPath);
    }
  });

  console.log('✅ Backup created successfully!\n');
}

/**
 * Оптимизировать PNG изображение
 */
async function optimizePNG(filePath) {
  const fileName = path.basename(filePath);
  const originalSize = getFileSizeInMB(filePath);

  console.log(`🖼️  Processing: ${fileName} (${originalSize} MB)`);

  try {
    // Оптимизируем PNG
    await sharp(filePath)
      .png({
        quality: OPTIMIZATION_CONFIG.png.quality,
        compressionLevel: OPTIMIZATION_CONFIG.png.compressionLevel,
        effort: OPTIMIZATION_CONFIG.png.effort,
      })
      .toFile(filePath + '.tmp');

    // Заменяем оригинал
    fs.renameSync(filePath + '.tmp', filePath);

    const newSize = getFileSizeInMB(filePath);
    const savings = ((originalSize - newSize) / originalSize * 100).toFixed(1);

    console.log(`   ✓ PNG optimized: ${originalSize} MB → ${newSize} MB (saved ${savings}%)`);

    // Создаем WebP версию для дополнительной оптимизации
    const webpPath = filePath.replace('.png', '.webp');
    await sharp(filePath)
      .webp({
        quality: OPTIMIZATION_CONFIG.webp.quality,
        effort: OPTIMIZATION_CONFIG.webp.effort,
      })
      .toFile(webpPath);

    const webpSize = getFileSizeInMB(webpPath);
    const webpSavings = ((originalSize - webpSize) / originalSize * 100).toFixed(1);

    console.log(`   ✓ WebP created: ${webpSize} MB (saved ${webpSavings}% vs original)\n`);

    return {
      fileName,
      originalSize: parseFloat(originalSize),
      pngSize: parseFloat(newSize),
      webpSize: parseFloat(webpSize),
    };
  } catch (error) {
    console.error(`   ✗ Error processing ${fileName}:`, error.message);
    return null;
  }
}

/**
 * Основная функция
 */
async function main() {
  console.log('🚀 Starting image optimization...\n');

  // Проверяем существование директории
  if (!fs.existsSync(SCREENSHOTS_DIR)) {
    console.error(`❌ Directory not found: ${SCREENSHOTS_DIR}`);
    process.exit(1);
  }

  // Создаем резервную копию
  createBackup();

  // Получаем список PNG файлов
  const pngFiles = fs
    .readdirSync(SCREENSHOTS_DIR)
    .filter((file) => file.endsWith('.png'))
    .map((file) => path.join(SCREENSHOTS_DIR, file));

  if (pngFiles.length === 0) {
    console.log('ℹ️  No PNG files found to optimize.');
    process.exit(0);
  }

  console.log(`Found ${pngFiles.length} PNG files to optimize\n`);

  // Оптимизируем каждый файл
  const results = [];
  for (const filePath of pngFiles) {
    const result = await optimizePNG(filePath);
    if (result) {
      results.push(result);
    }
  }

  // Выводим итоговую статистику
  console.log('=' .repeat(60));
  console.log('📊 Optimization Summary:');
  console.log('=' .repeat(60));

  const totalOriginal = results.reduce((sum, r) => sum + r.originalSize, 0);
  const totalPng = results.reduce((sum, r) => sum + r.pngSize, 0);
  const totalWebp = results.reduce((sum, r) => sum + r.webpSize, 0);

  console.log(`Total original size: ${totalOriginal.toFixed(2)} MB`);
  console.log(`Total PNG size:      ${totalPng.toFixed(2)} MB (saved ${((totalOriginal - totalPng) / totalOriginal * 100).toFixed(1)}%)`);
  console.log(`Total WebP size:     ${totalWebp.toFixed(2)} MB (saved ${((totalOriginal - totalWebp) / totalOriginal * 100).toFixed(1)}%)`);
  console.log('=' .repeat(60));
  console.log('\n✅ Image optimization completed successfully!');
  console.log(`\n💡 Tip: Update Image components to use .webp files for even better performance.`);
  console.log(`📁 Original images backed up to: ${BACKUP_DIR}`);
}

main().catch((error) => {
  console.error('❌ Fatal error:', error);
  process.exit(1);
});
