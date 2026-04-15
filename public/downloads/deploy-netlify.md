# Deploy to Netlify

Commits and pushes all changes to GitHub, then walks the user through connecting to Netlify for deployment.

---

## Prerequisites

- Git initialized with a GitHub remote (run the Setup Git skill first if needed)
- All changes ready to deploy

## Steps

1. Check for uncommitted changes with `git status`. If there are changes, stage and commit:

```
git add .
git commit -m "prepare for deployment"
```

2. Push to GitHub:

```
git push
```

If the push fails because the remote isn't set up, run `git push -u origin main`.

3. Instruct the user to:
   - Go to [app.netlify.com](https://app.netlify.com) and sign up or log in (free)
   - Click **Add new site** → **Import an existing project**
   - Connect their GitHub account and select their repository
   - Set the build command to `npm run build`
   - Set the publish directory to `build/client`
   - Click **Deploy**

4. Wait for the user to confirm deployment finished. Their site will be live at `<site-name>.netlify.app`.

5. Remind the user that from now on, every `git push` triggers an automatic redeploy on Netlify. The workflow is: make changes → test → commit → push → site updates in about a minute.
