---
title: "Engine Mission Statement"
date: 2026-03-20
description: "HelloWorld for the Crescendo Engine."
---

["../../assets/voxel1.png"]
## The Mission
Our engine works through a series of server networks that are spun up locally. The vulkan pipeline lives inside the rendering server, physics lives in the physics server, and so on! With this method, our ECS (Entity Component Systems) can have their data processed and presented at efficient rates. The end result gives sharp and dynamic graphics fidelity. Using 64bit Color and industry standard technices for principled BSDF systems for high quality materials like PBR and Path tracing.

The codebase is being created on Arch Linux and is fully compatible with Wayland and X11! We will add support for Windows and MacOS. The end goal for this project is a light weight vulkan renderer that uses other libraries to bring industry standard game engine creation pipelines. A huge inspiration for this project and foundation are thanks to the good folks at Valve software and their creation of the Source Engine. Without Valve, we wouldn't have the tool or resources like Proton to achieve modern day gaming capabilities on Linux.