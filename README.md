# To install
Clone this repo ( `git clone https://github.com/victorvikram/arc-site.git` )

# To run
Open `index.html`.

# To make changes to the editor
1. Follow installation instructions of [arc-app](https://github.com/victorvikram/arc-app).
2. Make desired changes to arc-app.
3. In the arc-app root directory, run `npm run build`.
4. In `build/index.html`, wherever you have `href=` or `src=`, delete the leading `/`. For example, you would change `href="/favicon.ico"` to `href="favicon.ico"`.
5. Push the contents of the `build` folder to the arc-site repo (not the build folder itself, though, `index.html` should be in the root directory of arc-site).
