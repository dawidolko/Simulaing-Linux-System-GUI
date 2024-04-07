# linux.dawidolko.pl

```
.
├── .github
│ └── ...
├── docs
│ └── ...
├── misc
│ └── ...
├── public
│ └── ...
├── src
│ ├── .env
│ ├── .env.production
│ └── ...
├── .gitignore
├── babel.config.js
├── CNAME
├── generate.py
├── LICENSE
├── package-lock.json
├── package.json
├── postcss.config.js
├── README.md
├── tailwind.config.js
├── update.cmd
└── vue.config.js
```

```
This is a web-driven blog tool that emulates the Deepin desktop UI, entirely reliant on Github Pages for open-source deployment. You can use it for a personal blog or as a personal resume.

This project was born by chance, as there was a need to organize a blog for project display recently. The author saw a similar version for Ubuntu on a forum, but since it was written in react, which I am not familiar with, I wanted to migrate a similar version to vue, hence this project.

When planning to start a project, the first challenge is deciding which system to emulate. Since the most popular Ubuntu has been done by others, reinventing the wheel seemed pointless. The author had also seen a MacOS version before, and Windows seemed too costly to mimic in detail due to many years of development. Despite the richness of Linux distributions, our choices seemed limited, with daily-use Red Hat-based distributions not focusing on desktop experience, making implementation less meaningful. The remaining widely accepted distributions were Manjaro, Fedora, and some so-called Gaming ready distros. I finally chose Deepin, which I haven't used but have heard a lot about, and the project is available on Github for vue developers worldwide, also serving as promotion for a domestic product.
```

## Quick Start

This project is designed to be served by Github Pages, with all APIs being converted into static files for distribution. If you want to run and debug locally, try the following steps:

```
git clone https://github.com/dawidolko/Simulaing-Linux-System-GUI
cd Simulaing-Linux-System-GUI
npm install
npm run serve
```

If your npm and vue-cli versions are appropriate, this should be enough to get the program running. You can find the used versions in the following section and `package.json` for reference.

If you wish to modify blog content, you should directly modify the content in the `/blog` directory, with all .md content being directly mapped to the website.

After modifications, execute the following commands to generate static files.

```
python3 generate.py
npm run build
```

Since vue-cli's default settings were modified, static files are generated in the /docs directory.

### How is this project different from similar desktop emulations?

The main focus is on a more complete window system implemented in this project. You can freely create multiple windows, move, resize them, and manage their display order just like in a normal operating system. It implements a simple recursive directory system, so you can map an entire folder as your blog. Additionally, a toy terminal is included.

### How can I update my blog?

If your blog is forked from this project and fully served by Github Pages, you only need to modify the content in the /blog directory and submit a commit. The compilation and distribution of static files will be automatically done by Actions in the background.

If you directly forked this project, you need to check if your Actions are executed correctly. To my knowledge, some actions are automatically turned off upon forking until manually reactivated.

### How can I modify the music player?

This project implements a simple music player based on `vue-aplayer`. To modify the playlist, please change the `musics.json` file in the `public` directory, following the specified format. Due to copyright policies, I have not provided music source addresses in the default version. You can configure your distribution strategy and paste the music access links accordingly.

By default, if your music covers are self-distributed (not through a third party), the covers' directory is `/public/musiccovers`

### Further Explanation of Blog Functionality

To implement basic blog functionality, a typical requirement is to publish article links on third-party platforms, allowing users to directly locate your articles through the links. To achieve this effect, follow the routing rules below to construct links.

```
   https://{{domain}}/#/desktop/post/{{filename}}.md

   For example:
   https://linux.dawidolko.pl/#/desktop/post/README.md
```

On the logic level, the program recursively searches and returns the **first** item in the file tree that matches the required value. This means if you have multiple files with the same name but placed in different directories, the program can only return one and ignore the others. You do not need to worry about spaces in filenames, as they will be automatically escaped.

If no match is found, a 404 article will be displayed.

Articles are recognized by the program as follows: the program identifies the first line starting with `#` as the title, and the first line starting with a non-punctuation character as the summary.

### Acknowledgments

This project is based on the following open-source projects:

```
@vue/cli 4.5.11, Blank template with ESLint
vuetify default settings
node-sass & sass-loader
tailwindcss + postcss
animate.css
vuex


vue-router
axios & vue-axios
vue-wechat-title
```

Markdown rendering is based on:

```
markdown-it-vue
```

The music player is based on:

```
vue-aplayer
```

Inspired by the following projects:

- [https://github.com/dawidolko/Simulaing-Ubuntu-System-GUI](https://linux.dawidolko.pl)
- [https://codepen.io/Krishna1947/pen/KKgZgLd](https://codepen.io/Krishna1947/pen/KKgZgLd)

### Contribution Methods

Any form of contribution to improve this system is welcome. However, since the author is a non-professional frontend programmer and is not familiar with how GUI should deploy automatic tests, this poses some difficulties for code merging in the open-source community. Without automatic tests, if you wish to submit a PR, you should indicate in the PR the reason for your changes, all the places modified, and the expected effects.

##### [Guidelines for further development](https://github.com/dawidolko/Simulaing-Linux-System-GUI/blob/main/misc/Guidelines%20for%20further%20development.md)

### Existing Issues

As the author is from a big data background, this is a severe case of a non-professional frontend developer running off-topic. Due to limited time, the actual coding time was about three days, and many places were implemented with the principle of simplicity for small-scale data, inevitably bringing many problems.

Currently known UI differences from the native interface:

- I didn't have time to adjust fonts, and the interface uses a set of universal fonts, which have a significant difference from the original.
- Icons are all from screenshots to minimize acquisition difficulties.
- Most animations in this framework come from animate.css, showing some differences from native performance.

Similarly, although this module adheres to responsive design, it performs poorly on mobile platforms. Partly due to animate.css compatibility issues on mobile platforms and partly because many UI components were designed specifically for desktop platforms, I do not know how they should be laid out on mobile platforms.

## About Deepin

I have no affiliation with Deepin officials; this was purely written out of interest and to promote a domestic system, not for any form of profit from the project. If you are interested in Deepin, please visit the official website [https://www.deepin.org/](https://www.deepin.org/)

### Thanks

This project is open-source under the AGPLv3 license. Thank you for browsing this project, and I hope you find joy in exploring it.
