---
title: "Voxel Module"
date: 2026-03-20
description: "Progression tracking regarding voxel and procedural generation."
---

## Procedural Generation of Voxel Math>

The current voxel generator evalutates a 3D grid using a resolution variable (currently set to 32). At resolution = 32, the CPU evaluates 32^3(32,768) density points to build the mesh. If we drag the planet radius up to 6000.0f (aprx size of a moon),  a resolutoin of 32 means every single triangle will be hundreds of meters wide. It will look like a jagged PS1 game, to get high definition mountains on a planet that size, we would need a resolution of at least 1024. But 1024^3 is 1,073,741,824 density points. Evaluating a billion noise pointers and generating hundreds of millions of triangles in a single pass will instantly nuke the CPU and crash Vulkan out of memory.

## The thread pool>
To mitigate this I started using a simple Octree system with dynamic LOD looping. It's not perfect but it's a great starting point for what I'm trying to achieve with this module. Chunk Manager and Voxel Managers have been included with this system. The entire entity data structure is efficient enough to work on multiple side threads ( 4 threads being the max ) primary thread for processing engine editor data ( present ) while secondary threads handle physics processeing and so on. 

