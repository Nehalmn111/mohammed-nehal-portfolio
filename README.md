# Mohammed Nehal MN — Portfolio

A single-page portfolio site for Mohammed Nehal MN, Data Analyst.

## File structure

```
.
├── index.html            # main page
├── assets/
│   ├── css/
│   │   └── style.css     # all styling
│   ├── js/
│   │   └── script.js     # scroll animations + copy-email fallback
│   └── img/
│       └── profile.jpg   # profile photo
└── README.md
```

## Hosting on GitHub Pages

1. Create a new GitHub repository (e.g. `mohammed-nehal-portfolio`).
2. Push this folder's contents to the repository root:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio site"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git push -u origin main
   ```
3. In the repo on GitHub, go to **Settings → Pages**.
4. Under **Build and deployment → Source**, choose **Deploy from a branch**.
5. Set **Branch** to `main` and folder to `/ (root)`, then **Save**.
6. GitHub will publish the site at:
   `https://<your-username>.github.io/<repo-name>/`
   (it can take a minute or two to go live after the first push).

If you'd rather use a custom domain, add a `CNAME` file at the root with your domain name and configure the DNS records GitHub Pages asks for under **Settings → Pages → Custom domain**.

## Updating content

- Text/content: edit `index.html` directly.
- Colors/spacing/fonts: edit `assets/css/style.css` (CSS variables are defined at the top of the file for quick theme tweaks).
- Profile photo: replace `assets/img/profile.jpg` with a new image of the same filename, or update the `src` in `index.html`'s `<div class="avatar">` if you rename it.

## Notes on email links

Every email mention (`Nehalmn25@gmail.com`) is a working `mailto:` link, so clicking it should open the visitor's default mail app with the address pre-filled. Since not every browser/device has a default mail client configured, a small copy icon sits next to each email mention — clicking it copies the address to the clipboard as a reliable fallback, with a small on-screen confirmation.
