This theme for astro is inspired by https://brittanychiang.com/ for it minimalism. 

## How to install
First of all clone this repo 
```bash
git clone https://github.com/minamme/astro-portfolio-chiang-inspired && cd astro-portfolio-chiang-inspired
```
then and install Javascript dependencies
```bash
pnpm i
```
or for npm
```bash
npm i
```

## How to customize
### Changes colors

Change `tailwind.config.cjs` file where you can change following values to set theme of your choice using colors [pallete](https://tailwindcss.com/docs/customizing-colors)
```javascript
const shade = 'slate',
	vivid = 'lime'
```

### Add data and other parts
To update data and other parts go to `src/content` folder add details for yourself.
```
├───about         (In about folder you can add about yourself in markdown file `index.md`. )
├───data          (Here you'll add  name, social links, resume and other
├───experiences   (Add experience same as sample files)
├───footer        (Add footer text)
└───projects      (Add projects and associated images in this folder. Don't forget to add image name in frontmatter of markdown cover: '')
```

