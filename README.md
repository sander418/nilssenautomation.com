# nilssenautomation.com

Static site for Nilssen Automation: plain HTML/CSS with optional, self-hosted Lenis smooth scrolling. No build step or third-party requests. Content and links work without JavaScript.

Files:

- `index.html`: the main page
- `privacy/index.html`: the privacy notice, served at `/privacy/`
- `404.html`: shown by GitHub Pages for any missing path
- `style.css`: the site stylesheet
- `assets/smooth-scroll.js`: wheel and section-link scrolling; native touch and reduced-motion fallbacks
- `assets/vendor/lenis-1.3.27/`: pinned Lenis browser files and MIT license
- `assets/vendor/transitions-dev/LICENSE.txt`: license for the button-chevron transition
- `robots.txt`: allows all crawlers
- `CNAME`: the custom domain, `nilssenautomation.com`

Note: this README is published with the site. It will be readable at `nilssenautomation.com/README.md`. It contains nothing private.

## Update the existing website

The live website uses GitHub Pages, repository `sander418/nilssenautomation.com`, branch `main`, root folder. The custom domain is `nilssenautomation.com` and HTTPS is enforced. The files in this folder are a local working copy.

1. Review the local site and its privacy page before publishing.
2. Copy the reviewed contents of this folder to the existing repository root. Keep `CNAME` and `robots.txt`. Do not upload the parent project or its research files.
3. Review the repository diff, then commit and push the intended files yourself. Remove obsolete assets only if they are present in that checkout. Keep the current `assets/` directory with the HTML files; the scrolling enhancement loads from it.
4. Wait for GitHub Pages to finish deploying. Open `https://nilssenautomation.com/`, `https://nilssenautomation.com/privacy/` and a missing address to check the home page, privacy notice and 404.

Updating these static files requires no DNS, email or GitHub Pages settings changes.

## Initial GitHub Pages setup reference

The following setup is already complete for the live website. Keep it as a reference for a fresh installation.

Do these steps yourself, in this order. Replace `USERNAME` with your GitHub username.

### 1. Verify the domain in GitHub (do this first)

Verifying stops anyone else from using the domain on GitHub Pages.

1. On GitHub, open your profile picture menu, then **Settings**.
2. In the sidebar, under **Code, planning, and automation**, open **Pages**.
3. Click **Add a domain**, enter `nilssenautomation.com` and click **Add domain**.
4. GitHub shows a TXT record. Add it at your DNS host (see "DNS reference" below).
5. Wait for the record to appear, then click **Verify**. DNS changes can take up to 24 hours.

### 2. Create a public repository with only the contents of `site/`

1. On GitHub, click **New repository**. Name it, for example, `nilssenautomation.com`. Set it to **Public**. Do not add a README, .gitignore or license.
2. In a terminal, from this `site` folder, run:

```bash
git init -b main
git add .
git commit -m "Initial site"
git remote add origin REPO_URL
git push -u origin main
```

Replace `REPO_URL` with the URL GitHub shows on the new, empty repository page.

The repository root must contain `index.html`, `CNAME` and the other files directly, not inside a `site/` folder.

### 3. Turn on GitHub Pages

1. In the repository, open **Settings**, then **Pages**.
2. Under **Build and deployment**, set **Source** to **Deploy from a branch**.
3. Set **Branch** to `main` and the folder to `/ (root)`. Click **Save**.

### 4. Set the custom domain

1. On the same **Pages** settings page, under **Custom domain**, enter `nilssenautomation.com` and click **Save**. (The `CNAME` file already contains it.)
2. Wait for the DNS check to pass.

### 5. Enforce HTTPS

1. When GitHub has issued the certificate (this can take up to 24 hours after DNS is correct), tick **Enforce HTTPS** on the same page.
2. Open `https://nilssenautomation.com/` and `https://nilssenautomation.com/privacy/` and check that both load.

## DNS reference

**Since 30 Oct 2026 the domain's DNS is managed in Cloudflare** (dash.cloudflare.com, zone `nilssenautomation.com`, DNS > Records), not in Shopify. All four A and AAAA records below are in place, set to "DNS only" (grey cloud), and HTTPS is enforced. GitHub Pages needs only these records:

| Type | Name | Value |
|---|---|---|
| A | `@` | `185.199.108.153` |
| A | `@` | `185.199.109.153` |
| A | `@` | `185.199.110.153` |
| A | `@` | `185.199.111.153` |
| AAAA | `@` | `2606:50c0:8000::153` |
| AAAA | `@` | `2606:50c0:8001::153` |
| AAAA | `@` | `2606:50c0:8002::153` |
| AAAA | `@` | `2606:50c0:8003::153` |
| CNAME | `www` | `USERNAME.github.io` |
| TXT | the name GitHub shows, `_github-pages-challenge-USERNAME` | the value GitHub shows |

If an `@` A record or a `www` record already points somewhere else, replace it with the values above. Do not keep both. Shopify's DNS editor allowed only one A and one AAAA record at `@`, which is why GitHub's certificate stalled until DNS moved to Cloudflare.

**Do not change the Google Workspace records.** Leave the existing MX, SPF (TXT), DKIM (TXT), DMARC (TXT) and Google verification (TXT) records exactly as they are. Email depends on them.

GitHub's documentation for these records:

- https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site
- https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/verifying-your-custom-domain-for-github-pages

## Scrolling and maintenance

All pages load the self-hosted Lenis library and initializer for optional smooth scrolling. Touch and reduced-motion users retain native scrolling; every page also works without JavaScript. Skip links move directly to the main content.

The home and privacy pages load `style.css` using relative paths. The 404 uses `/style.css` so it also works at nested missing addresses. Keep those paths when editing.

Preserve the privacy wording, canonical and Open Graph tags, and the Org.nr. TODO comments. Add a registration number only after registration. Keep visible keyboard focus and check light and dark modes at 375px after changes.

## Motion and navigation

The local revision prepared on 30 October 2026 adds Pilot, Process and Contact
links, a back-to-top link, clearer pilot-term grouping, and restrained button
feedback. Lenis 1.3.27 smooths wheel and section-link scrolling; touch stays
native. Reduced-motion preferences disable smoothing, including when changed
while the page is open. Skip links stay instant and move keyboard focus.
All content stays visible without JavaScript or if Lenis fails to load.

The Lenis files are self-hosted and pinned. The tarball was checked against
npm SHA-512 integrity metadata. No CDN, API key, tracking, cookies, external
fonts or paid service is used. Retain the vendor licenses when publishing.

To remove smoothing, remove both script tags and the Lenis stylesheet link
from index.html, privacy/index.html and 404.html. The navigation links still
work through the browser's native fragment behavior. Updates should review
one specific version and replace its assets and references together.
