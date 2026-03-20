---
title: "System Architecture & Initialization"
date: 2026-03-20
description: "Devlog launch for the Crescendo Engine."
heroImage: "../../assets/enginedocslogo.png"
---
example : 
### The Build System
We are utilizing CMake to handle our compilation across the Linux environment, ensuring all Vulkan dependencies are correctly linked.

### Initializing Vulkan
Setting up the application info structure for the Vulkan instance:

```cpp
VkApplicationInfo appInfo{};
appInfo.sType = VK_STRUCTURE_TYPE_APPLICATION_INFO;
appInfo.pApplicationName = "Crescendo Engine";
appInfo.applicationVersion = VK_MAKE_VERSION(1, 0, 0);
appInfo.pEngineName = "Crescendo";
appInfo.engineVersion = VK_MAKE_VERSION(1, 0, 0);
appInfo.apiVersion = VK_API_VERSION_1_3;

if (vkCreateInstance(&createInfo, nullptr, &instance) != VK_SUCCESS) {
    throw std::runtime_error("failed to create instance!");
}

```
end example 

## The Mission
Our engine works through a series of server networks that are spun up locally. The vulkan pipeline lives inside the rendering server, physics lives in the physics server, and so on! With this method, our ECS (Entity Component Systems) can have their data processed and presented at efficient rates. The end result gives sharp and dynamic graphics fidelity. Using 64bit Color and industry standard technices for principled BSDF systems for high quality materials like PBR and Path tracing.

The codebase is being created on Arch Linux and is fully compatible with Wayland and X11! We will add support for Windows and MacOS. The end goal for this project is a light weight vulkan renderer that uses other libraries to bring industry standard game engine creation pipelines. A huge inspiration for this project and foundation are thanks to the good folks at Valve software and their creation of the Source Engine. Without Valve, we wouldn't have the tool or resources like Proton to achieve modern day gaming capabilities on Linux.