# Elimuhub Weekly Payslip Generator

A simple static site that generates weekly payslips for tutors. This repository is ready to publish on GitHub Pages.

Live demo (after deploy)
- Your site will be available at: `https://kibiti.github.io/payslips-generator-elimuhub/` once published (project page).
- If you create a repo named `kibiti.github.io`, it will be published as the user site at `https://kibiti.github.io/`.

Repository structure
- index.html
- assets/css/styles.css
- assets/js/app.js
- .github/workflows/deploy.yml
- README.md
- LICENSE

How to publish (quick)
1. Create a repo on GitHub (recommended name: payslips-generator-elimuhub) under your user `kibiti`.
2. Push the files above to the `main` branch.
   - Example:
     - git init
     - git add
     - git commit -m "Initial site"
     - git branch -M main
     - git remote add origin git@github.com:kibiti/payslips-generator-elimuhub.git
     - git push -u origin main
3. On push to `main`, the included GitHub Actions workflow will deploy the site to the `gh-pages` branch automatically and GitHub Pages will serve it.
4. In the repository settings > Pages, ensure the source is `gh-pages` branch (the actions workflow will create it on first run).

Alternatively, if you prefer not to use the workflow, you can enable GitHub Pages directly from the `main` branch (root), and it will serve the `index.html` from the root.

Custom domain / CNAME
- If you have a custom domain, add a CNAME file into the repo root with your domain and set it in Pages settings.

License
- MIT (see LICENSE file)

Notes
- The site is pure client-side JS and does not store or transmit data anywhere.
- The included workflow uses the repository's `GITHUB_TOKEN` to push the built files into `gh-pages` branch (no additional secrets required).
