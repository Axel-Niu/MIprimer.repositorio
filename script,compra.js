document.addEventListener('DOMContentLoaded', function() {
    //Busca todos los elementos del documento que tengan la clase .buy-button.
    //querySelectorAll devuelve una lista de nodos (como un array) con todos los botones.
    const buyButtons = document.querySelectorAll('.buy-button');
    //Recorre cada uno de los botones encontrados.
    //Por cada botón, se define una acción que ocurrirá cuando se le haga clic.
    buyButtons.forEach(button => {
        //Agrega un "escuchador" (listener) de evento de clic a cada botón.
        //Cuando se hace clic, se ejecuta la función definida.
        button.addEventListener('click', function(e) {
            //Previene el comportamiento por defecto del botón (por ejemplo, enviar un formulario o seguir un enlace).
            e.preventDefault();
            //uso de swithAlert2
            Swal.fire({
                title: 'Confirmar compra',
                text: '¿Está seguro de realizar esta compra?',
                icon: 'question',
                showCancelButton: true,
                confirmButtonText: 'Sí, comprar',
                cancelButtonText: 'Cancelar',
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33'
            }).then((result) => {
                //Después de que el usuario haga clic en uno de los botones, .then() se ejecuta con el resultado.
                if (result.isConfirmed) {
                    window.location.href = 'comprafomr.html';
                    //Si el usuario hizo clic en “Sí, comprar” (result.isConfirmed), entonces se redirige al usuario a la página comprafomr.html.
                }
            });
        });
    });
});