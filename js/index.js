$(function () {
    $('[data-toggle="tooltip"]').tooltip();
    $('[data-toggle="popover"]').popover();

    $('#contacto').on('show.bs.modal', function(e){
        console.log('el modal se esta mostrando');
    });

    $('#contacto').on('shown.bs.modal', function(e){
        console.log('el modal se mostro');
    });

    $('#contacto').on('hide.bs.modal', function(e){
        console.log('el modal se esta ocultando');
      
    });
    $('#contacto').on('hidden.bs.modal', function(e){
        console.log('el modal se oculto');
    });

    $('#contactoBtn').on('click', function(){
            $('#contactoBtn').removeClass('btn-outline-success');
            $('#contactoBtn').addClass('btn-success');
        });
    $('#contactoBtn1').on('click', function () {
        $('#contactoBtn1').removeClass('btn-outline-success');
        $('#contactoBtn1').addClass('btn-success');
    });
    $('#contactoBtn2').on('click', function () {
        $('#contactoBtn2').removeClass('btn-outline-success');
        $('#contactoBtn2').addClass('btn-success');
    });
    $('#contactoBtn3').on('click', function () {
        $('#contactoBtn3').removeClass('btn-outline-success');
        $('#contactoBtn3').addClass('btn-success');
    });
    $('#contactoBtn4').on('click', function () {
        $('#contactoBtn4').removeClass('btn-outline-success');
        $('#contactoBtn4').addClass('btn-success');
    });
    $('#contactoBtn5').on('click', function () {
        $('#contactoBtn5').removeClass('btn-outline-success');
        $('#contactoBtn5').addClass('btn-success');
    });
    $('#contactoBtn6').on('click', function () {
        $('#contactoBtn6').removeClass('btn-outline-success');
        $('#contactoBtn6').addClass('btn-success');
    });
});