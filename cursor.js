document.addEventListener("DOMContentLoaded", () => {
    // Create custom cursor elements
    const customCursor = document.createElement("div");
    customCursor.id = "custom-cursor";
    document.body.appendChild(customCursor);
  
    const blade = document.createElement("div");
    blade.id = "blade";
    customCursor.appendChild(blade);

    const blade2 = document.createElement("div"); // Create second blade element
    blade2.id = "blade2";
    customCursor.appendChild(blade2);

    let rotationSpeed = 4; // Default rotation speed (degrees per frame)
    let isRotating = false;
    let rotationAngleX = 0;
    let rotationAngleY = 0;
    let rotationAngleZ = 0;
  
    const cursorOffsetX = -7;
    const cursorOffsetY = -20;
  
    // Update cursor position
    document.addEventListener("mousemove", (e) => {
      customCursor.style.left = `${e.clientX + cursorOffsetX}px`;
      customCursor.style.top = `${e.clientY + cursorOffsetY}px`;
    });
  
    // Handle mouse down event to extend the lightsaber blade
    document.addEventListener("mousedown", () => {
      blade.style.height = "100px"; // Extend first blade
      blade2.style.height = "100px"; // Extend second blade
    });
  
    // Handle mouse up event to retract the lightsaber blade
    document.addEventListener("mouseup", () => {
      blade.style.height = "0"; // Retract first blade
      blade2.style.height = "0"; // Retract second blade
    });
  
    // Handle key down event to start/stop rotation
    document.addEventListener("keydown", (e) => {
      if (e.key === "r") {
        isRotating = !isRotating;
        if (isRotating) {
          requestAnimationFrame(rotateCursor);
        }
      }
    });
  
    // Function to rotate the cursor
    const rotateCursor = () => {
      if (isRotating) {
        rotationAngleX = (rotationAngleX + rotationSpeed) % 360;
        rotationAngleY = (rotationAngleY + rotationSpeed) % 360;
        rotationAngleZ = (rotationAngleZ + rotationSpeed) % 360;
        customCursor.style.transform = `rotateX(${rotationAngleX}deg) rotateY(${rotationAngleY}deg) rotateZ(${rotationAngleZ}deg)`;
        requestAnimationFrame(rotateCursor);
      }
    };
});
