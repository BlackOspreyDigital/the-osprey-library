---
title: "Principle Shader Implementation"
description: "Core physical material properties and BRDF implementation for the Vulcan pipeline."
pubDate: 2026-05-18
module: "renderer"
---

The Principle shader provides a unified physically-based rendering (PBR) model for the Crescendo graphics pipeline. By consolidating material properties into a single robust BSDF, the engine minimizes branching overhead during the fragment stage and ensures consistent lighting calculations across all scene geometry.

### Material Parameter Structure

The parameters are packed securely to ensure optimal memory alignment when passed via SSBO to the shader stages.

```cpp
// GLSL Struct Definition for the Principle Material
struct PrincipleMaterial {
    vec4 baseColor;
    float subsurface;
    float metallic;
    float specular;
    float roughness;
    float specularTint;
    float anisotropic;
    float sheen;
    float sheenTint;
    float clearcoat;
    float clearcoatGloss;
    vec2 padding; // 16-byte alignment preservation
};