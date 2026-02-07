// Security checks
console.log('Running security checks...');

if (process.env.FAIL_SECURITY === 'true') {
  console.error('❌ Security vulnerabilities found!');
  process.exit(1);
}

console.log('✅ No security issues detected!');
