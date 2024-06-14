// script.js
document.addEventListener('DOMContentLoaded', () => {
    const cube = document.querySelector('.rubiks-cube');
    const colors = ['#ffcc00', '#ff6600', '#ff0000', '#00ff00', '#0000ff', '#9900ff'];
    
    // Create 3x3 grid for each face
    document.querySelectorAll('.face').forEach(face => {
      for (let i = 0; i < 9; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        face.appendChild(square);
      }
    });
  
    // Add hover effect
    document.querySelectorAll('.square').forEach(square => {
      square.addEventListener('mouseover', () => {
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        square.style.backgroundColor = randomColor;
      });
      square.addEventListener('mouseout', () => {
        square.style.backgroundColor = '#ffcc00'; // Default color
      });
    });
  
    // Rotating cube interaction
    let isDragging = false;
    let startX, startY;
    let currentX = -45, currentY = -30;
  
    const onMouseDown = (event) => {
      isDragging = true;
      startX = event.pageX;
      startY = event.pageY;
    };
  
    const onMouseMove = (event) => {
      if (!isDragging) return;
      const deltaX = event.pageX - startX;
      const deltaY = event.pageY - startY;
      currentX += deltaX * 0.5;
      currentY -= deltaY * 0.5;
      cube.style.transform = `rotateX(${currentY}deg) rotateY(${currentX}deg)`;
      startX = event.pageX;
      startY = event.pageY;
    };
  
    const onMouseUp = () => {
      isDragging = false;
    };
  
    cube.addEventListener('mousedown', onMouseDown);
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  });
  