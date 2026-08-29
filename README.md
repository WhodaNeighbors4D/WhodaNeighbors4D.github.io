# Nightshift Operator

Live storefront: **https://whodaneighbors4d.github.io/**

Repo: https://github.com/WhodaNeighbors4D/WhodaNeighbors4D.github.io

## Connect checkout (required to take $19)

1. Create a Gumroad product or Stripe Payment Link for $19. Upload `Nightshift_Operator_Pack.pdf`.
2. Open `config.js` and set `checkoutUrl` to that URL.
3. Commit. Buy buttons switch automatically.

Until that URL exists, the product page shows an email request form.

## If the site 404s

Wait 2–10 minutes after the first push. Then:

1. Open https://github.com/WhodaNeighbors4D/WhodaNeighbors4D.github.io/settings/pages
2. Source: Deploy from a branch → `main` / `/ (root)`  
   **or** GitHub Actions (the workflow in `.github/workflows/pages.yml`).
3. Save. Refresh https://whodaneighbors4d.github.io/
