---
title: "System Architecture & Initialization"
date: 2026-03-20
description: "Initial setup of the build system and establishing the core event loop for Crescendo."
---

The core architecture for the Crescendo Engine is officially underway. 

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