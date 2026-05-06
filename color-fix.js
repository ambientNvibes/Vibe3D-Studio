// Surface mode Color tool fix
// Replaces the colorPicker input handler with one that handles
// single materials, material arrays (imported GLB/GLTF meshes), and
// also wires the Surface dock "Color" action to the same function.

(function () {
    function applyColor(hex) {
        if (!selectedObject || !isRenderable(selectedObject)) {
            setStatus("Select a mesh");
            return;
        }
        const color = new THREE.Color(hex);
        const applyToMat = (mat) => {
            if (!mat) return;
            if (mat.color) mat.color.set(color);
            mat.needsUpdate = true;
        };
        if (Array.isArray(selectedObject.material)) {
            selectedObject.material.forEach(applyToMat);
        } else {
            applyToMat(selectedObject.material);
        }
        recordHistory();
        setStatus("Color updated");
    }

    // Re-wire the inspector color picker
    const picker = document.getElementById("colorPicker");
    if (picker) {
        // Remove old inline handler by cloning
        const newPicker = picker.cloneNode(true);
        picker.parentNode.replaceChild(newPicker, picker);
        newPicker.addEventListener("input", (e) => applyColor(e.target.value));
    }

    // Re-wire the "Pick Color" button
    const btnColor = document.getElementById("btnColor");
    if (btnColor) {
        const newBtn = btnColor.cloneNode(true);
        btnColor.parentNode.replaceChild(newBtn, btnColor);
        newBtn.addEventListener("click", () => {
            const p = document.getElementById("colorPicker");
            if (p) p.click();
        });
    }

    // Expose applyColor globally so the Surface dock action can call it
    window._applyColor = applyColor;

    // Patch the Surface dock "pickColor" action: the dock is rebuilt each
    // time the mode changes, so we intercept via a MutationObserver on the
    // contextDock element and re-bind any Color button that appears.
    const dock = document.getElementById("contextDock");
    if (dock) {
        const observer = new MutationObserver(() => {
            dock.querySelectorAll("[data-action='pickColor']").forEach((btn) => {
                if (btn._colorFixed) return;
                btn._colorFixed = true;
                btn.addEventListener("click", () => {
                    const p = document.getElementById("colorPicker");
                    if (p) p.click();
                });
            });
        });
        observer.observe(dock, { childList: true, subtree: true });
    }
})();
