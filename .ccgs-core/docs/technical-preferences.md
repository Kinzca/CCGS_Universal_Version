# Technical Preferences

## Engine & Language
- **Engine**: Unity 6000.2.10.f1
- **Language**: C#

## Naming Conventions
- **Classes**: PascalCase (e.g., `PlayerController`)
- **Public fields/properties**: PascalCase (e.g., `MoveSpeed`)
- **Private fields**: _camelCase (e.g., `_moveSpeed`)
- **Methods**: PascalCase (e.g., `TakeDamage()`)
- **Files**: PascalCase matching class (e.g., `PlayerController.cs`)
- **Constants**: PascalCase or UPPER_SNAKE_CASE

## Input & Platform
- **Target Platforms**: PC, Mobile
- **Input Methods**: Keyboard/Mouse, Touch
- **Primary Input**: Touch
- **Gamepad Support**: Partial
- **Touch Support**: Full
- **Platform Notes**: UI requires multi-touch support for drag-to-rotate mechanics.

## Performance Budgets
- **Target Framerate**: 60 FPS
- **Frame Budget**: 16.6 ms
- **Draw Calls**: < 150-200 per frame (Mobile optimization)
- **Poly Count**: < 100k per scene
- **Texture Memory**: < 200 MB

## Testing
- **Framework**: NUnit (Unity Test Framework)

## Forbidden Patterns
[TO BE CONFIGURED]

## Allowed Libraries
[TO BE CONFIGURED]

## Engine Specialists
- **Primary**: unity-specialist
- **Language/Code Specialist**: unity-specialist (C# review — primary covers it)
- **Shader Specialist**: unity-shader-specialist (Shader Graph, HLSL, URP/HDRP materials)
- **UI Specialist**: unity-ui-specialist (UI Toolkit UXML/USS, UGUI Canvas, runtime UI)
- **Additional Specialists**: unity-dots-specialist (ECS, Jobs system, Burst compiler), unity-addressables-specialist (asset loading, memory management, content catalogs)
- **Routing Notes**: Invoke primary for architecture and general C# code review. Invoke DOTS specialist for any ECS/Jobs/Burst code. Invoke shader specialist for rendering and visual effects. Invoke UI specialist for all interface implementation. Invoke Addressables specialist for asset management systems.

### File Extension Routing

| File Extension / Type | Specialist to Spawn |
|-----------------------|---------------------|
| Game code (.cs files) | unity-specialist |
| Shader / material files (.shader, .shadergraph, .mat) | unity-shader-specialist |
| UI / screen files (.uxml, .uss, Canvas prefabs) | unity-ui-specialist |
| Scene / prefab / level files (.unity, .prefab) | unity-specialist |
| Native extension / plugin files (.dll, native plugins) | unity-specialist |
| General architecture review | unity-specialist |
