---
description: Standardized feature development workflow from branch to merge with testing and review
---

# Feature Development Workflow

This workflow guides you through developing features from branch to merge.

## Prerequisites

- Git repository in clean state
- Feature clearly defined and scoped
- TODO task created (if applicable)
- Understanding of existing codebase patterns

---

## Step 1: Define Feature

### Feature Description

Clearly define the feature:
- What problem does it solve?
- What is the scope?
- What are the acceptance criteria?
- What are the dependencies?

### Create TODO Task (if applicable)

If feature is tracked in TODO.md:
- Create task with clear description
- Add acceptance criteria
- Add validation steps
- Set priority and urgency

---

## Step 2: Create Feature Branch

```bash
git checkout -b feature/feature-name
```

Branch naming conventions:
- `feature/add-blog-post` - Adding new content
- `feature/contact-form-validation` - Adding functionality
- `feature/seo-improvements` - SEO enhancements
- `fix/broken-link` - Bug fixes
- `refactor/component-structure` - Refactoring

---

## Step 3: Research and Planning

### Research Existing Code

Read relevant files:
- Existing components in `src/components/`
- Similar pages in `src/pages/`
- Existing patterns in codebase
- AGENTS.md for project guidelines

### Plan Implementation

Document the plan:
- Files to create/modify
- Components needed
- Changes to existing code
- Testing strategy
- Potential risks

---

## Step 4: Implementation

### Create New Files

Create files following project conventions:
- Astro components: `src/components/ComponentName.astro`
- React components: `src/components/ComponentName.tsx`
- Pages: `src/pages/page-name.astro`
- Content: `src/content/blog/post-name.mdx`

### Modify Existing Files

Follow existing patterns:
- Use path aliases (`@components/*`, `@layouts/*`)
- Follow styling guidelines (dark mode, electric blue)
- Maintain accessibility standards
- Follow TypeScript strict mode

### Add Tests

Create tests for new functionality:
- Unit tests in `src/__tests__/`
- E2E tests in `src/test/`
- Follow testing guidelines

---

## Step 5: Code Review Checklist

### Self-Review

Before committing, review:
- [ ] Code follows project patterns
- [ ] TypeScript strict mode compliance
- [ ] Accessibility standards met
- [ ] SEO requirements met
- [ ] Styling guidelines followed
- [ ] No hardcoded secrets
- [ ] Path aliases used correctly
- [ ] Tests added for new code
- [ ] Documentation updated if needed

### Run Linter

```bash
npm run lint
```

Fix any linting errors.

### Run Type Check

```bash
npm run astro check
```

Fix any TypeScript errors.

---

## Step 6: Local Testing

### Run Tests

```bash
npm run test
npm run test:e2e
```

All tests must pass.

### Build Project

```bash
npm run build
```

Build must succeed.

### Development Testing

```bash
npm run dev
```

Test in development:
- Navigate to relevant pages
- Test new functionality
- Test responsive design
- Check console for errors
- Test accessibility

---

## Step 7: Commit Changes

### Stage Changes

```bash
git add .
```

### Commit

```bash
git commit -m "feat(feature-name): add feature description"
```

Use conventional commit format:
- `feat:` new features
- `fix:` bug fixes
- `refactor:` code refactoring
- `docs:` documentation changes
- `style:` formatting changes
- `test:` test changes
- `chore:` maintenance tasks

Include detailed commit message:
- What was changed
- Why it was changed
- How it was tested
- Any breaking changes

---

## Step 8: Push to GitHub

```bash
git push origin feature/feature-name
```

---

## Step 9: Create Pull Request

### PR Title

Use conventional commit format:
```
feat(feature-name): add feature description
```

### PR Description

Include:
- **Description**: What this PR does
- **Motivation**: Why this change is needed
- **Changes**: List of files changed
- **Testing**: How this was tested
- **Screenshots**: For UI changes (if applicable)
- **Breaking Changes**: Any breaking changes (if applicable)
- **Related Issues**: Link to TODO task or issue

### Request Review

Request review from team members familiar with the codebase.

---

## Step 10: CI/CD Verification

### Monitor GitHub Actions

Check that:
- Build passes
- Unit tests pass
- E2E tests pass
- No linting errors
- No type errors

### Address CI Failures

If CI fails:
- Review logs
- Fix issues
- Push fixes
- Re-run CI

---

## Step 11: Code Review

### Review Feedback

Address reviewer feedback:
- Make requested changes
- Respond to comments
- Clarify decisions
- Update documentation if needed

### Re-Test After Changes

After making changes:
- Run tests again
- Build again
- Test in development
- Push fixes

---

## Step 12: Final Approval

### Approval Requirements

Before merge:
- All tests pass
- Build succeeds
- Code review approved
- No outstanding issues
- Documentation updated

### Update TODO Task (if applicable)

If feature tracked in TODO.md:
- Update task status to completed
- Add completion note
- Document changes made
- Add any limitations

---

## Step 13: Merge to Main

### Merge Options

Choose merge strategy:
- **Squash and merge**: Clean history, recommended for features
- **Merge commit**: Preserves history, good for large features
- **Rebase and merge**: Linear history, use with caution

### Delete Branch

After merge, delete feature branch:
- Delete from GitHub
- Delete locally: `git branch -d feature/feature-name`

---

## Step 14: Deploy to Production

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

## Step 15: Post-Deployment Verification

### Verify Live Site

1. Navigate to production site
2. Test new functionality
3. Check console for errors
4. Test on mobile devices
5. Monitor performance
6. Check analytics

### Monitor for Issues

- Watch for error reports
- Monitor performance metrics
- Check user feedback
- Monitor uptime

---

## Step 16: Documentation

### Update Documentation

Update relevant documentation:
- README.md if project structure changed
- AGENTS.md if patterns changed
- Component documentation if new components added
- API documentation if APIs changed

### Update Internal Docs

- Document new patterns
- Update architecture diagrams
- Update decision records
- Share with team

---

## Step 17: Rollback Plan

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

### Build Fails

```bash
# Check build logs
npm run build

# Check for syntax errors
npm run astro check

# Fix errors
# Rebuild
```

### Tests Fail

```bash
# Check test logs
npm run test

# Run specific test
npm run test -- specific-test

# Fix test or code
# Re-run tests
```

### Merge Conflicts

```bash
# Resolve conflicts
git checkout main
git pull origin main
git checkout feature/feature-name
git rebase main

# Resolve conflicts in files
git add .
git rebase --continue
```

---

## Best Practices

### Branch Management

- Keep branches focused on single feature
- Delete branches after merge
- Use descriptive branch names
- Keep branches up to date with main

### Commit Practices

- Commit often, commit small
- Write descriptive commit messages
- Follow conventional commit format
- Include context in commit body

### Code Review

- Request review before merge
- Address feedback promptly
- Be open to suggestions
- Learn from feedback

### Testing

- Write tests for new code
- Test thoroughly before PR
- Test edge cases
- Test accessibility

---

## Quick Reference

### Common Commands

```bash
# Create branch
git checkout -b feature/feature-name

# Stage changes
git add .

# Commit
git commit -m "feat: description"

# Push
git push origin feature/feature-name

# Pull latest main
git pull origin main

# Rebase feature branch
git rebase main

# Merge to main
git checkout main
git merge feature/feature-name

# Delete branch
git branch -d feature/feature-name
```

### File Locations

- Components: `src/components/`
- Pages: `src/pages/`
- Content: `src/content/`
- Layouts: `src/layouts/`
- Tests: `src/__tests__/`, `src/test/`

---

## After Feature Complete

1. Verify all tests pass
2. Verify build succeeds
3. Verify deployment successful
4. Monitor for issues
5. Update documentation
6. Share with team
7. Close TODO task (if applicable)
8. Plan next steps
