---
title: Gunsmith
key: gunsmith
description: A theorycrafting tool for Destiny 2.
order: 3
url: https://d2gunsmith.com
tech: [React, Nuxt.js, Node.js]
---

Starting out as a React practice project, Gunsmith turned into a Vue playground. Its primary purpose was to consume data from the Bungie API and allow users to configure any weapon from Destiny with the traits they wanted. It required a specific set of calculations based on upper and lower bounds of stats that varied per weapon, but this made sure that stats seen on site matched what was in game. It expanded to include in-game calculators for stats like Range and Reload Speed, calculating real-time seconds and distance in meters for weapons.

After refining the functionality, it became an excercise in user experience and interface design. As the actual game, Destiny 2, changed, so did the website. Making the experience mirror the game as close as possible while also being a proper web and mobile experience was the number one priority. Many microinteractions were recreated as close as possible to keep the flow of using the site as simple as possible. 

As the game is a live service, updates were frequent and led to things like:
- Custom UI for specific weapon traits
- Search and filter function based around the game's evolving weapon system
- Curating weapon groups based on player expectations
- URL structure for sharing and support for other third-party applications like Gunsmith

![A weapon with customized traits.](works/gunsmith/weapon.png)
*A weapon with customized traits.*

![Filter options based on weapon properties, iconography mirroring the game.](works/gunsmith/filters.png)
*Filter options based on weapon properties, iconography mirroring the game.*

![Weapon traits selection area.](works/gunsmith/perks.png)
*Weapon traits selection area.*

![The mobile layout.](works/gunsmith/mobile.png)
*The mobile layout.*