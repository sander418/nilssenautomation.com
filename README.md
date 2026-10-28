# nilssenautomation.com

Static site for Nilssen Automation: plain HTML and one stylesheet. No build step, no JavaScript, no third-party requests.

Files:

- `index.html`: the main page
- `privacy/index.html`: the privacy notice, served at `/privacy/`
- `404.html`: shown by GitHub Pages for any missing path
- `style.css`: the only stylesheet
- `robots.txt`: allows all crawlers
- `CNAME`: the custom domain, `nilssenautomation.com`

Note: this README is published with the site. It will be readable at `nilssenautomation.com/README.md`. It contains nothing private.

## Publish on GitHub Pages

Do these steps yourself, in this order. Replace `USERNAME` with your GitHub username.

### 1. Verify the domain in GitHub (do this first)

Verifying stops anyone else from using the domain on GitHub Pages.

1. On GitHub, open your profile picture menu, then **Settings**.
2. In the sidebar, under **Code, planning, and automation**, open **Pages**.
3. Click **Add a domain**, enter `nilssenautomation.com` and click **Add domain**.
4. GitHub shows a TXT record. Add it at your DNS host (see "DNS records" below).
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

## DNS records

The domain's DNS is managed in Shopify (Settings, Domains, `nilssenautomation.com`, DNS settings). GitHub Pages needs only these records:

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

If an `@` A record or a `www` record already points somewhere else, such as Shopify, replace it with the values above. Do not keep both. The AAAA records are optional for GitHub Pages. If Shopify's DNS editor does not accept AAAA records, the four A records are enough.

**Do not change the Google Workspace records.** Leave the existing MX, SPF (TXT), DKIM (TXT), DMARC (TXT) and Google verification (TXT) records exactly as they are. Email depends on them.

GitHub's documentation for these records:

- https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site
- https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/verifying-your-custom-domain-for-github-pages
