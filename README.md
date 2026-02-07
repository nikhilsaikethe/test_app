# PR Watcher Test Repository

A test repository to verify all PR Watcher bot scenarios.

## Features

- 6 CI jobs (Test, Lint, Build, Security, Coverage, Integration)
- Environment variables to trigger failures
- Simple Node.js application

## Setup

1. Create a new GitHub repository
2. Push this code to GitHub
3. Enable GitHub Actions in repository settings

```bash
cd test-repo
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/pr-watcher-test.git
git push -u origin main
```

## Testing Scenarios

### Scenario 1: All CI Passing (Ready to Merge)

1. Create a new branch and make a simple change
2. Push and create a PR
3. All checks should pass
4. PR state will be "clean" → Bot will notify "✅ PR is ready to merge"

```bash
git checkout -b feature/test-success
echo "// Test change" >> index.js
git add .
git commit -m "Test: All checks passing"
git push origin feature/test-success
```

### Scenario 2: CI Failure

1. Create a branch with failing tests
2. Set environment variable to fail a job
3. Create PR
4. Bot will notify "⚠️ CI checks failed"

**Option A: Fail tests in workflow**
```bash
git checkout -b feature/test-failure
# Edit .github/workflows/ci.yml and add this to the test job:
#   env:
#     FAIL_TESTS: 'true'
git add .
git commit -m "Test: CI failure"
git push origin feature/test-failure
```

**Option B: Make test.js fail**
```bash
git checkout -b feature/test-failure
# Edit test.js and change a test to fail, or add this line at the top:
# process.exit(1);
git add .
git commit -m "Test: CI failure"
git push origin feature/test-failure
```

### Scenario 3: Rebase Needed

1. Create a PR
2. While PR is open, push new commits to main branch
3. PR will be behind → mergeable_state becomes "behind"
4. Bot will notify "🔄 PR needs rebase"

```bash
# Create PR from feature branch
git checkout -b feature/rebase-test
echo "// Feature change" >> index.js
git add .
git commit -m "Feature change"
git push origin feature/rebase-test

# Then update main branch (creates a conflict or just moves main ahead)
git checkout main
echo "// Main branch change" >> index.js
git add .
git commit -m "Update main"
git push origin main

# Now the PR will need rebase
```

### Scenario 4: Multiple State Changes

1. Create PR with failing CI → Get "CI failed" notification
2. Fix the CI → Get "Ready to merge" notification
3. Update main branch → Get "Needs rebase" notification
4. Rebase the PR → Get "Ready to merge" notification again

## CI Jobs

All 6 jobs run on every PR:

1. **Test** - Runs unit tests
2. **Lint** - Code style checks
3. **Build** - Application build
4. **Security** - Security vulnerability scan
5. **Coverage** - Code coverage check
6. **Integration** - Integration tests (depends on test, lint, build)

## Environment Variables for Testing

You can trigger failures by setting these in the workflow file:

- `FAIL_TESTS=true` - Fail unit tests
- `FAIL_LINT=true` - Fail linting
- `FAIL_BUILD=true` - Fail build
- `FAIL_SECURITY=true` - Fail security check
- `FAIL_COVERAGE=true` - Fail coverage check

## Quick Test Commands

```bash
# Test locally
npm test        # Run tests
npm run lint    # Run linting
npm run build   # Build application
npm run security # Security check
npm run coverage # Coverage check
```
