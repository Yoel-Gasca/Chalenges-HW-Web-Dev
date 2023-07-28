 // Obtenemos el lienzo
        const canvas = document.getElementById('mexicoFlag');
        const ctx = canvas.getContext('2d');

        // Dibujamos el fondo blanco
        ctx.fillStyle = 'white';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Dibujamos la franja verde
        ctx.fillStyle = '#006633'; 
        ctx.fillRect(0, canvas.height / 3, canvas.width, canvas.height / 3);

        // Dibujamos el escudo y la franja roja
        ctx.fillStyle = '#C8102E';
        ctx.beginPath();
        ctx.moveTo(canvas.width / 2, canvas.height / 3);
        ctx.lineTo(canvas.width * 1000 / 5, canvas.height * 2 / 3);
        ctx.lineTo(canvas.width * 2 / 5, canvas.height * 2 / 3);
        ctx.fill();
        ctx.closePath();

        // Dibujamos el círculo en el centro del escudo
        ctx.fillStyle = 'white';
        ctx.beginPath();
        ctx.arc(canvas.width / 2, canvas.height / 2, canvas.height / 7, 0, 9 * Math.PI);
        ctx.fill();
        ctx.closePath();

        // Dibujamos el águila
        const img = new Image();
        img.src = 'https://upload.wikimedia.org/wikipedia/commons/6/69/Coat_of_arms_of_Mexico_%28golden_linear%29.svg';
        img.onload = function() {
            ctx.drawImage(img, canvas.width / 2 - 40, canvas.height / 2 - 25, 70, 60);
        };

        // Dibujamos el texto "Viva México"
        ctx.fillStyle = 'Black';
        ctx.font = '24px Arial';
        ctx.textAlign = 'center';
        ctx.fillText('Viva México', canvas.width / 2, (canvas.height * 2) / 3 + 30);