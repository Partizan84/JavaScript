let mover = {
        canPlayerMakeStep(nextPoint) {
        return nextPoint.x >= 0 &&
            nextPoint.x < config.colsCount &&
            nextPoint.y >= 0 &&
            nextPoint.y < config.rowsCount;
    },

    getDirection() {
        const availableDirection = [2, 4, 6, 8, 1, 3, 7, 9];
        while (true) {
            let direction = parseInt(promt('Введите число (2, 4, 6, 8, 1, 3, 7, 9), куда вы хотите переместиться, "Отмена" для выхода.'));
            if (isNaN(direction)) {
                return null;
            }
            if (!availableDirection.includes(direction)) {
                alert('Для перемещения необходимо ввести одно из числе 2, 4, 6, 8, 1, 3, 7, 9');
                continue;
            }
            return direction;
        }
    },
    getNextPOsition(direction) {
        const nextPosition = {
            x: player.x,
            y: player.y
        };
        switch (direction) {
            case 1:
                nextPosition.y++;
                nextPosition.x--;
                break;
            case 2:
                nextPosition.y++;
                break;
            case 3:
                nextPosition.y++;
                nextPosition.x++;
                break;
            case 4:
                nextPosition.x--;
                break;
            case 6:
                nextPosition.x++;
                break;
            case 7:
                nextPosition.y--;
                nextPosition.x--;
                break;
            case 8:
                nextPosition.y--;
                break;
            case 9:
                nextPosition.x++;
                nextPosition.y--;
                break;  
        }
        return nextPosition;
    },
};