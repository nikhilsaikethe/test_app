// Build script
console.log('Building application...');

if (process.env.FAIL_BUILD === 'true') {
  console.error('❌ Build failed!');
  process.exit(1);
}

console.log('✅ Build successful 12!');
