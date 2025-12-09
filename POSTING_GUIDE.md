# Portfolio Posting & Management Guide

This guide explains how to manage your portfolio content and publish changes.

## 1. Overview
Your portfolio is a **static website** built with React. The content is separated from the code in `constants.ts`, making it easy to update without touching complex layout code.

**Your Website URL**: `https://sandeepkumaramgothu.github.io/Portfolio/` (after first deployment)

## 2. How to "Post" (Update Content)
To add new projects, update experience, or change skills, you simply edit the `constants.ts` file.

### Adding a New Project
1. Open `constants.ts`.
2. Find the `PROJECTS` array.
3. Add a new object to the top of the list:
   ```typescript
   {
     title: "New Project Title",
     period: "Jan 2026 - Present",
     description: [
       "Description point 1",
       "Description point 2"
     ],
     tags: ["React", "AI", "Python"],
     link: "https://link-to-project.com"
   },
   ```

### Updating Experience
1. Find the `EXPERIENCE` array in `constants.ts`.
2. Add or modify entries similarly to projects.

### Updating Resume/CV Link
In `personal_info` section of `constants.ts`, update the `portfolio` or `resume` link field if you have one.

## 3. How to Publish
This project is configured with **Automated Deployment**.

1. **Save** your changes to `constants.ts` (or any other file).
2. **Commit** your changes:
   ```bash
   git add .
   git commit -m "Added new project: Project Name"
   ```
3. **Push** to GitHub:
   ```bash
   git push origin main
   ```

Once pushed, GitHub Actions will automatically:
1. Detect the change.
2. Build the website.
3. Deploy it to the public URL.
   * *Note: It may take 1-3 minutes to update.*

## 5. First Time Setup (Important)
Since your portfolio uses a Chatbot powered by Gemini, you need to provide the API key to GitHub so it can build the app correctly.

1. Go to your GitHub Repository page.
2. Click **Settings** > **Secrets and variables** > **Actions**.
3. Click **New repository secret**.
4. **Name**: `GEMINI_API_KEY`
5. **Secret**: Paste your Gemini API Key here.
6. Click **Add secret**.

After adding the secret, you may need to re-run the failed workflow or push a new commit to trigger the build again.

## 6. Running Locally (Optional)
If you want to preview changes before pushing:

1. **Install Node.js**: Download from [nodejs.org](https://nodejs.org/).
2. **Install Dependencies** (run once):
   ```bash
   npm install
   ```
3. **Start Preview**:
   ```bash
   npm run dev
   ```
4. Open the link shown in the terminal (usually `http://localhost:3000`).
