// document.querySelectorAll('.dropdown-content a').forEach(link => {
//     link.addEventListener('click', function(event) {
//         event.preventDefault();

//         const videoUrl = this.getAttribute('data-video');
//         const descricaoTexto = this.getAttribute('data-descricao');

//         const videoContainer = document.getElementById('video-container');
//         const episodioFrame = document.getElementById('episodio-frame');

//         // Remove qualquer imagem de "em breve" existente
//         const existingImage = document.getElementById('em-breve-image');
//         if (existingImage) {
//             existingImage.remove();
//         }

//         if (videoUrl === "em breve") {
//             // Esconde o iframe
//             episodioFrame.style.display = 'none';

//             // Adiciona uma imagem de "em breve"
//             const emBreveImage = document.createElement('img');
//             emBreveImage.src = './assets/breve.png'; // Substitua pelo caminho da imagem de "em breve"
//             emBreveImage.id = 'em-breve-image';
//             emBreveImage.alt = 'Em breve';
//             emBreveImage.style.width = '100%';

//             videoContainer.appendChild(emBreveImage);
//         } else {
//             // Exibe o iframe e define o novo link de vídeo
//             episodioFrame.style.display = 'block';
//             episodioFrame.src = videoUrl;
//         }

//         // Atualiza o texto da descrição
//         document.getElementById('descricao-texto').innerText = descricaoTexto;
//     });
// });


document.querySelectorAll('.dropdown-content a').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();

        // Obtém o nome do episódio do link clicado
        const episodioNome = this.textContent;

        // Atualiza o texto do botão com o nome do episódio
        const dropdownButton = document.getElementById('dropdown-btn');
        dropdownButton.textContent = episodioNome;  // Atualiza o botão para o nome do episódio

        const videoUrl = this.getAttribute('data-video');
        const descricaoTexto = this.getAttribute('data-descricao');
        const estreiaTexto = this.getAttribute('data-estreia');

        const videoContainer = document.querySelector('.video-container');
        const episodioFrame = document.getElementById('episodio-frame');
        const emBreveImage = document.getElementById('em-breve-image');

        // Se já existe o iframe, remova-o
        if (episodioFrame) {
            episodioFrame.remove();
        }

        // Se for "em breve", mantém a imagem e altera a descrição
        if (videoUrl === "em breve") {
            // Verifica se a imagem "em breve" já existe
            if (!emBreveImage) {
                // Caso a imagem não exista, adicione-a novamente
                const newImage = document.createElement('img');
                newImage.src = './assets/breve.png';  // Caminho da imagem "Em breve"
                newImage.id = 'em-breve-image';
                newImage.alt = 'Em breve';
                newImage.style.display = 'block';  // Exibe a imagem
                videoContainer.appendChild(newImage);
            }

            // Atualiza a descrição
            document.getElementById('descricao-texto').innerText = descricaoTexto;
            document.getElementById('estreia-texto').innerText = estreiaTexto;
        } else {
            // Remove a imagem de "Em breve" se o vídeo for válido
            if (emBreveImage) {
                emBreveImage.remove();
            }

            // Cria o iframe e define o vídeo
            const iframe = document.createElement('iframe');
            iframe.id = 'episodio-frame';
            iframe.src = videoUrl;
            iframe.width = '100%';
            iframe.height = '220px';
            iframe.allow = 'autoplay';
            iframe.allowfullscreen = true;

            videoContainer.appendChild(iframe);

            // Atualiza a descrição
            document.getElementById('descricao-texto').innerText = descricaoTexto;
            document.getElementById('estreia-texto').innerText = estreiaTexto;
        }
    });
});

