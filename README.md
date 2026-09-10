# Yuting Wang — Personal Homepage

A single-page academic homepage built with plain HTML/CSS/JS (no build step,
no Jekyll required). Ready to deploy on GitHub Pages.

```
.
├── index.html              # all content lives here
├── assets/
│   ├── css/style.css       # all styling
│   ├── js/main.js          # mobile nav + decorative hero motif
│   └── img/avatar.jpg      # your photo
└── README.md
```

## Deploy to GitHub Pages (user/organization site)

A repo named exactly `<your-github-username>.github.io` is published at
`https://<your-github-username>.github.io/` with no extra configuration.

1. **Create the repository**
   - Go to https://github.com/new
   - Repository name: `Bioinfo_Wang.github.io` (must match your GitHub username exactly)
   - Keep it **Public**, don't add a README/License (you already have files)
   - Click **Create repository**

2. **Upload these files**
   - On the new repo's page, click **"uploading an existing file"**
   - Drag in `index.html`, the `README.md`, and the whole `assets` folder
     (keep the folder structure — GitHub will preserve it)
   - Commit directly to the `main` branch

   Or, from the command line, from inside this unzipped folder:
   ```bash
   git init
   git add .
   git commit -m "Initial homepage"
   git branch -M main
   git remote add origin https://github.com/ytwang21/ytwang21.github.io.git
   git push -u origin main
   ```

3. **Turn on Pages** (usually automatic for this repo name, but check)
   - Repo → **Settings** → **Pages**
   - Under "Build and deployment", Source should be **Deploy from a branch**
   - Branch: `main`, folder: `/ (root)` → **Save**

4. **Visit your site**
   - It goes live at `https://github.com/ytwang21/Bioinfo_Wang.github.io`
   - First deploy can take 1–2 minutes; subsequent pushes update it automatically

### Alternative: as a project page instead

If you'd rather keep it inside an existing repo (e.g. `Bioinfo_Wang/homepage`) instead
of the special `username.github.io` repo, upload the same files there, then in
**Settings → Pages** set the source branch to `main` (or a `gh-pages` branch).
Your site will then live at `https://github.com/ytwang21/Bioinfo_Wang.github.io/homepage/`.

## Editing content later

Everything text-based is in `index.html` — publications, projects, education,
and honors are each a plain HTML list, so you can add a new `<li>`/`<article>`
block following the existing pattern for each new paper or role. Colors and
fonts are defined once at the top of `assets/css/style.css` under `:root`,
so changing `--teal` or `--gold` there updates the whole site.

To swap your photo, just replace `assets/img/avatar.jpg` with a new file of
the same name (portrait orientation works best).
