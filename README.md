# hacknotts.com

This is the source code for [hacknotts.com](hacknotts.com). The site is simple enough that I decided to write it in ~~plain HTML/CSS~~ react, ~~though it may be an idea to move over to Hugo or something similar in the future.~~

It's deployed using GitHub pages.

```bash
npm install --include=dev
npm run dev
```

## Images

Images have been manually resized to be 50% size, with 90% quality. The command used was:

`find . -name "FINAL.png" | parallel convert -resize 50% -quality 90 {} {.}-50.<format>`