---
description: How to deploy the frontend to Vercel (Free)
---

This guide will help you deploy your portfolio to Vercel for free.

## Prerequisites
- A GitHub account
- Your code pushed to a GitHub repository

## Step 1: Push Code to GitHub
Ensure all your latest changes are committed and pushed.
```bash
git add .
git commit -m "Prepare for Vercel deployment"
git push origin master
```

## Step 2: Create Vercel Account
1. Go to [vercel.com](https://vercel.com/signup)
2. Sign up with **GitHub**.

## Step 3: Import Project
1. On your Vercel Dashboard, click **"Add New..."** -> **"Project"**.
2. Finds your repository `website-porto` (or whatever you named it).
3. Click **Import**.

## Step 4: Configure Project
Vercel usually auto-detects everything correctly for Vue/Vite projects.
- **Framework Preset**: Vite
- **Root Directory**: `frontend` (IMPORTANT! Click Edit and select the `frontend` folder)
- **Build Command**: `npm run build` (Default is correct)
- **Output Directory**: `dist` (Default is correct)
- **Environment Variables**: Not needed for this static version (EmailJS keys are already in the code).

## Step 5: Deploy
1. Click **Deploy**.
2. Wait ~1 minute.
3. 🎉 **Done!** You will get a link like `website-porto.vercel.app`.

## Bonus: Custom Domain
If you have a domain (e.g., `dimasrafi.com`), you can go to Settings -> Domains in Vercel to add it for free (just verified via DNS).
