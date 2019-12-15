
import('http://localhost/js/button.js').then(module => {
    console.log('button loaded')
});

document.addEventListener('auth-jwt', function (e) {
    console.log(e.detail)
}, false);