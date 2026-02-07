// Linting script
console.log('Running linter...');

if (process.env.FAIL_LINT === 'true') {
  console.error('❌ Linting failed - code style issues found!');
  process.exit(1);
}

console.log('✅ Linting passed!');
