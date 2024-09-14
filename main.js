document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('game-canvas');
    const ctx = canvas.getContext('2d');

    function drawMap() {
        ctx.fillStyle = '#228B22'; // Forest green background
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    }

    function moveCharacter(character, dx, dy) {
        character.x += dx;
        character.y += dy;
        drawGame();
    }

    function drawGame() {
        drawMap();
        drawCharacters(ctx);
    }

    function handleKeyPress(event) {
        const speed = 10;
        switch (event.key) {
            case 'ArrowUp':
                moveCharacter(protagonist, 0, -speed);
                break;
            case 'ArrowDown':
                moveCharacter(protagonist, 0, speed);
                break;
            case 'ArrowLeft':
                moveCharacter(protagonist, -speed, 0);
                break;
            case 'ArrowRight':
                moveCharacter(protagonist, speed, 0);
                break;
            case 'Enter':
                characters.forEach(character => {
                    if (character !== protagonist && Math.abs(character.x - protagonist.x) < 32 && Math.abs(character.y - protagonist.y) < 32) {
                        checkForTask(character);
                    }
                });
                break;
        }
    }

    document.addEventListener('keydown', handleKeyPress);
    drawGame();
});
