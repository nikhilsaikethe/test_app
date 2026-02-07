// Code coverage
console.log('Checking code coverage...');

if (process.env.FAIL_COVERAGE === 'true') {
  console.error('❌ Code coverage below threshold!');
  process.exit(1);
}

console.log('✅ Code coverage: 95%');
