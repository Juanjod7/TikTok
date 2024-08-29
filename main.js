const videoContainer = document.getElementById('video-container');

const videos = [
    {
        url: 'https://cdn.pixabay.com/video/2019/10/26/28320-369325356_large.mp4',
        title: 'programacion'
    },
    {
        url: 'https://cdn.pixabay.com/video/2019/10/09/27693-365890966_large.mp4',
        title: 'ssds'
    },
    {
        url: 'https://cdn.pixabay.com/video/2020/08/21/47802-451812879_large.mp4',
        title: 'programacion'
    },
    {
        url: 'https://media.istockphoto.com/id/1193269492/es/v%C3%ADdeo/el-programador-escribe-el-c%C3%B3digo-para-el-desarrollo-de-la-p%C3%A1gina-web-en-el-fondo-de-una.mp4?s=mp4-640x640-is&k=20&c=hMZe7sgZYjbyuNOPyLOH8yAGanBpPNzTlMSasBleRDQ=',
        title: 'programacion'
    },

   
    {
        url: ' https://cdn.pixabay.com/video/2016/08/22/4733-179738669_large.mp4',
        title: 'programacion'
    },
    {
        url: 'https://media.istockphoto.com/id/1338914269/es/v%C3%ADdeo/retrato-en-primer-plano-del-ingeniero-de-software-que-trabaja-en-la-computadora-l%C3%ADnea-de.mp4?s=mp4-640x640-is&k=20&c=Ji6p_MY1xawjB5qAEicfC_EAWKyuFiDGdWp5CRpSOcw=',
        title: 'programacion'
    },
    {
        url: 'https://media.istockphoto.com/id/1334309482/es/v%C3%ADdeo/ingeniero-masculino-adulto-joven-que-utiliza-una-interfaz-de-software-futurista-de-realidad.mp4?s=mp4-640x640-is&k=20&c=TF5gM-kSNnu893LSdk-rmsttxnUgF8J1KAL4VnpfQ34=',
        title: 'programacion'
    },
    
];
videos.forEach (video => { 
    const videoElement = document.createElement('video');
    videoElement.src = video.url;
    videoElement.controls = true;
    videoElement.width = 1000;

    const titleElement = document.createElement('h2');
    titleElement.innerText = video.title;
    titleElement.style.color = '#fff'; // color del texto  esquema de colores.

    videoContainer.appendChild(titleElement);
    videoContainer.appendChild(videoElement);
});