# CI/CD Pipeline Setup

This document explains how to set up the GitHub Environment for manual deployment approval.

## GitHub Environment Setup

The CI workflow uses a GitHub Environment called `production` to require manual approval before deployment.

### Steps to Create the Environment

1. Go to your repository on GitHub
2. Click on **Settings** tab
3. In the left sidebar, click on **Environments** (under "Code and automation")
4. Click **New environment**
5. Name the environment: `production`
6. (Optional) Add required reviewers:
   - Click **Required reviewers**
   - Add team members who must approve deployments
   - This ensures no automatic deployments occur
7. Click **Create environment**

### Environment Protection Rules

You can configure additional protection rules:

- **Required reviewers**: Require specific people to approve deployments
- **Wait timer**: Add a delay before deployment can proceed
- **Deployment branches**: Restrict which branches can deploy to this environment

### Deployment Process

1. When code is pushed to `main`, the CI workflow runs automatically
2. Build, unit tests, and E2E tests execute
3. If all tests pass, the workflow reaches the `deploy` job
4. The job pauses and waits for manual approval
5. Go to the **Actions** tab in GitHub
6. Click on the workflow run
7. Review the deployment and click **Approve and deploy**
8. The deployment proceeds to GitHub Pages

### Workflow Triggers

The CI workflow runs on:

- Push to `main` branch
- Pull requests to `main` branch
- Manual trigger via **workflow_dispatch** (Actions tab → Run workflow)

### Permissions

The workflow requires the following permissions (configured in the workflow file):

- `contents: read` - to checkout the repository
- `pages: write` - to deploy to GitHub Pages
- `id-token: write` - for GitHub Pages deployment

These permissions are automatically granted when using the official GitHub Actions deployment action.

### Troubleshooting

**Workflow fails at deploy step:**

- Ensure GitHub Pages is enabled in repository Settings → Pages
- Set Source to "GitHub Actions" in Pages settings

**Manual approval not required:**

- Verify the `production` environment exists
- Check that required reviewers are configured
- Ensure the workflow references the correct environment name

**Tests fail in CI:**

- Check the workflow logs in the Actions tab
- Download Playwright report artifact for detailed test results
- Ensure all dependencies are installed correctly
