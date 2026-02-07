// Test script
const { add, subtract, multiply } = require('./index');

console.log('Running tests...');

// Check if we should fail tests (for testing CI failure)
if (process.env.FAIL_TESTS === 'true') {
  console.error('❌ Tests failed!');
  process.exit(1);
}

// Run tests
const tests = [
  { name: 'add(2, 3) = 5', result: add(2, 3) === 5 },
  { name: 'subtract(5, 3) = 2', result: subtract(5, 3) === 2 },
  { name: 'multiply(4, 5) = 20', result: multiply(4, 5) === 20 }
];

let passed = 0;
let failed = 0;

tests.forEach(test => {
  if (test.result) {
    console.log(`✓ ${test.name}`);
    passed++;
  } else {
    console.error(`✗ ${test.name}`);
    failed++;
  }
});

console.log(`\nTests: ${passed} passed, ${failed} failed`);

if (failed > 0) {
  process.exit(1);
}

console.log('✅ All tests passed!');
