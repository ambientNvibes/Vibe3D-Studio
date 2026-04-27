# Vibe3D Studio

Self-contained **HTML 3D modeling editor** built with Three.js — no install, no server, just open and create.

## ✨ Features

- **Vertex Workspace** — Multi-select, Insert, Weld, Relax, Clear
- **Face Mode** — Quad-aware selection, Inset (recessed), Extrude, Loop Cut, Delete, Bridge
- **Quad Topology** — Shared vertex & quad face data on cube/plane primitives
- **Object Mode** — Move, Rotate, Scale, Duplicate, Merge, Group/Ungroup
- **Surface Tools** — Color picker, Texture, Mirror X/Y/Z, Pivot, Freeze Transforms
- **Import/Export** — GLB, OBJ
- **Presets** — Base humanoid, limbs, props
- **Autosave** — LocalStorage persistence
- **No install** — Single `.html` file

## 🚀 Quick Start

1. Download `index.html`
2. Open in any modern browser
3. Start modeling!

**Live Demo**: https://ambientNvibes.github.io/Vibe3D-Studio

## 🎮 Controls

| Action | Control |
|---|---|
| Orbit | Click + Drag |
| Pan | Right-click + Drag |
| Zoom | Scroll |
| Select | Click object |
| Multi-select | Shift + Click |
| Focus | F or Focus button |

## 🛠️ Vertex Mode

- **Insert** — Creates inner quad from selected face
- **Weld** — Merges selected vertices to average position
- **Relax** — Smooths vertices toward mesh center
- **Clear** — Deselects all vertices
- **Multi** — Toggle multi-vertex selection

## 🧱 Face Mode

- **Inset** — Recessed inner face with surrounding walls
- **Extrude** — Push face outward along normal
- **Loop Cut** — Splits quad face at midpoint
- **Delete** — Removes face geometry
- **Bridge** — Connect two faces (coming soon)

## 📈 Roadmap

- [ ] Vertex Slide
- [ ] Soft Selection
- [ ] Edge Loop Select
- [ ] Subdivision Surface
- [ ] GLTF Animation Timeline
- [ ] Character Rig Presets

## 📄 License

MIT — fork, modify, build on it freely.
