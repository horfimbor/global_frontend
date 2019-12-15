
import('http://localhost/js/button.js').then(module => {
    console.log('button loaded')
});
import('http://localhost/js/form.js').then(module => {
    console.log('form loaded')
});

document.addEventListener('auth-jwt', function (e) {
    console.log(e.detail)
}, false);