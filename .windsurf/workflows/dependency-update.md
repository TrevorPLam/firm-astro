---
description: Dependency update workflow with security checks, version compatibility, and testing
---

# Dependency Update Workflow

This workflow guides you through updating project dependencies safely.

## Prerequisites

- Git repository in clean state
- No uncommitted changes
- Tests passing on current version

---

## Step 1: Check Current Dependencies

### List Current Dependencies

```bash
npm list
npm outdated
```

### Check for Vulnerabilities

```bash
npm audit
```

Note any vulnerabilities found and their severity.

---

## Step 2: Create Feature Branch

```bash
git checkout -b feature/dependency-update
```

Use descriptive branch name:
- `feature/dependency-update-security`
- `feature/dependency-update-react`
- `feature/dependency-update-astro`

---

## Step 3: Update Dependencies

### Update All Dependencies

```bash
npm update
```

### Update Specific Package

```bash
npm update package-name
```

### Update to Latest Major Version

```bash
npm install package-name@latest
```

### Update to Specific Version

```bash
npm install package-name@version
```

---

## Step 4: Review Changes

### Check package.json

```bash
git diff package.json
```

Review:
- Version changes
- New dependencies added
- Dependencies removed

### Check package-lock.json

```bash
git diff package-lock.json
```

Review:
- Dependency tree changes
- Sub-dependency updates

---

## Step 5: Install Dependencies

```bash
rm -rf node_modules
npm install
```

This ensures clean installation of updated dependencies.

---

## Step 6: Security Audit

### Run Security Audit

```bash
npm audit
```

### Fix Vulnerabilities

```bash
npm audit fix
```

If audit fix doesn't work:
```bash
npm audit fix --force
```

**Warning**: Use `--force` only if you understand the implications.

---

## Step 7: Type Check

```bash
npm run astro check
```

Or if using TypeScript directly:
```bash
npx tsc --noEmit
```

Fix any TypeScript errors before proceeding.

---

## Step 8: Run Linter

```bash
npm run lint
```

Fix any linting errors before proceeding.

---

## Step 9: Run Tests

### Unit Tests

```bash
npm run test
```

### E2E Tests

```bash
npm run test:e2e
```

All tests must pass before proceeding.

---

## Step 10: Build Project

```bash
npm run build
```

Build must succeed before proceeding.

---

## Step 11: Development Testing

### Start Dev Server

```bash
npm run dev
```

### Manual Testing

Test in development:
- Navigate to homepage
- Navigate to blog pages
- Navigate to case studies
- Test interactive components
- Test forms
- Check console for errors
- Test responsive design

---

## Step 12: Preview Testing

### Build Preview

```bash
npm run build
npm run preview
```

### Test Production Build

Test the production build:
- All pages load correctly
- No console errors
- Images load
- Links work
- Forms submit
- Search works

---

## Step 13: Compatibility Check

### Astro Version Compatibility

Check if dependencies are compatible with Astro 5.18.1:
- React 18.3.1 compatibility
- Tailwind 3.4.17 compatibility
- Integration compatibility

### Breaking Changes

Review changelogs for:
- Major version updates
- Breaking changes
- Deprecated features
- Migration guides

---

## Step 14: Documentation Review

### Update Documentation

If dependencies changed significantly:
- Update README.md
- Update AGENTS.md
- Update package.json comments
- Update migration guides

### Check for Deprecations

Review deprecation warnings:
- Update deprecated API usage
- Replace deprecated dependencies
- Update configuration if needed

---

## Step 15: Commit Changes

### Stage Changes

```bash
git add package.json package-lock.json
```

### Commit

```bash
git commit -m "chore(deps): update dependencies"
```

Use conventional commit format:
- `chore(deps)`: dependency updates
- `fix(deps)`: dependency security fixes
- `feat(deps)`: new dependencies

Include details in commit body:
- Packages updated
- Version changes
- Security fixes applied

---

## Step 16: Push to GitHub

```bash
git push origin feature/dependency-update
```

---

## Step 17: Create Pull Request

### PR Description

Include in PR description:
- Dependencies updated
- Version changes
- Security fixes applied
- Breaking changes (if any)
- Testing performed
- Migration notes (if any)

### Request Review

Request review from team members familiar with the codebase.

---

## Step 18: CI/CD Verification

### Monitor GitHub Actions

Check that:
- Build passes
- Tests pass
- No security warnings
- No type errors

### Address CI Failures

If CI fails:
- Review logs
- Fix issues
- Push fixes
- Re-run CI

---

## Step 19: Merge to Main

### Merge After Approval

After PR approved and CI passes:
- Merge PR to main
- Delete feature branch

### Or Squash and Merge

Use squash and merge for cleaner history:
- Squash commits
- Merge to main
- Delete feature branch

---

## Step 20: Deploy to Production

### Trigger Deployment

Merge to main triggers GitHub Actions:
- Build runs automatically
- Tests run automatically
- Deployment requires manual approval

### Approve Deployment

1. Go to GitHub Actions tab
2. Find the workflow run
3. Review build and test results
4. Approve deployment to production
5. Monitor deployment status

---

## Step 21: Post-Deployment Verification

### Verify Live Site

1. Navigate to production site
2. Test all functionality
3. Check console for errors
4. Monitor performance
5. Check analytics for errors

### Monitor for Issues

- Watch for error reports
- Monitor performance metrics
- Check user feedback
- Monitor uptime

---

## Step 22: Rollback Plan

### If Issues Detected

If deployment causes issues:

```bash
# Revert commit
git revert <commit-hash>
git push origin main

# Or rollback to previous deployment
# Use platform-specific rollback
```

### Document Issues

Document:
- What went wrong
- Root cause
- Fix applied
- Prevention measures

---

## Troubleshooting

### Installation Fails

```bash
# Clear cache
rm -rf node_modules package-lock.json
npm install

# Try npm ci
npm ci
```

### Tests Fail After Update

```bash
# Check test logs
npm run test

# Update test dependencies
npm update --save-dev vitest @vitest/ui

# Fix test code
# Re-run tests
```

### Build Fails After Update

```bash
# Check build logs
npm run build

# Check for breaking changes
# Review changelogs
# Fix code to match new API
# Rebuild
```

### Type Errors After Update

```bash
# Check TypeScript errors
npm run astro check

# Update type definitions
npm update --save-dev @types/react @types/react-dom

# Fix type errors
# Re-check
```

---

## Best Practices

### Update Frequency

- Update dependencies monthly
- Apply security fixes immediately
- Review outdated packages quarterly
- Test thoroughly before major updates

### Major Version Updates

- Read migration guides carefully
- Test in separate branch
- Plan for breaking changes
- Have rollback plan ready
- Update documentation

### Security Updates

- Apply security fixes immediately
- Review security advisories
- Test security fixes
- Monitor for new vulnerabilities
- Update regularly

---

## Quick Reference

### Common Commands

```bash
# Check outdated
npm outdated

# Update all
npm update

# Update specific
npm update package-name

# Security audit
npm audit
npm audit fix

# Clean install
rm -rf node_modules package-lock.json
npm install

# Type check
npm run astro check

# Lint
npm run lint

# Test
npm run test
npm run test:e2e

# Build
npm run build

# Dev
npm run dev

# Preview
npm run preview
```

---

## After Update

1. Verify all tests pass
2. Verify build succeeds
3. Test in development
4. Test in preview
5. Deploy to production
6. Monitor for issues
7. Document changes
8. Update documentation
