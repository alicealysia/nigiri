# nigiri

The niri graphical interface

## Description
nigiri is a KDL file editor that is primarily focused on editing Niri Config files. 
It is currently in the early stages of development, so it's not doing any kdl editing *just* yet.
Typescript was chosen because of the fantastic parser https://github.com/bgotink/kdl which includes a deserialization
function.
gnome-vue was chosen because apparently I can't do anything the "normal" way. But also because when I used to use
Nvidia, it ran into no shortage of issues with electron apps, I also wanted to reduce conflicts with ags, and personally
just really like vue.


## Dependencies
1. npm
2. pnpm
3. gtk4-devel
4. libgtk-4-dev
5. ts-for-gir (lest you wish to experience outdated, untested types.)

## Setup

1. `git clone https://github.com/alicealysia/nigiri --recursive`
2. `cd nigiri/gnome-vue`
3. follow the gnome-vue install process: https://github.com/alicealysia/gnome-vue
4. return to the nigiri root path
5. `npm install --legacy-peer-deps`

note that Legacy Peer Deps is to resolve issues with rollup styles.

Likewise, there's no doubt a lot of ways to reduce the number of node modules.
