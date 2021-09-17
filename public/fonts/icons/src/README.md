# Icons

If you want to add or modify an icon to the `icons` font file, you will need to follow some steps:

## 1. Creating or modifying an icon

All icons used in the `icons` font are available in the `icons.eps` file. If you want to change or add a new icon it's recommended that you use this file as a base, and add new icons as new **artboarts**.

> You will need a vector editor software (like **Adobe Illustrator** or **Corel Draw**) to edit this file.

## 2. Exporting the icon as SVG

Once you have the icon you want in a separated Artboart in the EPS file:

1. Create a new folder named `new` at the `assets/fonts/icons/src` folder.
2. Export the artboard that contains the icon into a new `.svg` file and place it in the new (`new`)folder.

> The svg file name will be used as the class name for the icon, so choose names like `menu.svg`, `user.svg`, `profile.svg`, etc. There is no need to add the char code in the name (like `uEA0A`) as this is added automatically by the gulp task.

## 3. Updating the font files

When you have the SVGs for the new icons in the `new` folder, follow the steps below:

1. Open a terminal at the theme root folder.
2. Run the `gulp iconfont` task - This task will:
    - Update the icons font files;
    - Move the icons from the `new` folder to the `svg` folder, after processed them with the correct naming;
    - Update the `$icons` array and `$version` number in the `_icons.scss` file.
    - Update other occurrencies of the version, like in pre-load links.

> The `gulp iconfont` task looks for all icons in the svg folders, defined in the `theme.json` file at the `tasks.iconfont.entry` array. Whenever a new icon needs to be added in the font, we need to place it in a separated folder (the `new` folder) so that the script adds them after the existing ones, to prevent char code conflicts.
