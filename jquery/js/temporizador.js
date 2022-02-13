(function ($) {
    $.fn.temporizador = function (options) {
        const finalOptions = $.extend({
            message: 'Em breve!',
            horario: '23:59:59'
        }, options);

        const createSpan = cssClass => $(`<span class="${cssClass}">`);
        const createDiv = cssClass => $(`<div class="${cssClass}">`);

        const horaDezena = createSpan('digito').html('0');
        const horaUnidade = createSpan('digito').html('0');
        const minutoDezena = createSpan('digito').html('0');
        const minutoUnidade = createSpan('digito').html('0');
        const segundoDezena = createSpan('digito').html('0');
        const segundoUnidade = createSpan('digito').html('0');
        
        const separadorHora = createSpan('separador').html(':');
        const separadorMinuto = createSpan('separador').html(':');
        const mensagem = createDiv('mensagem').html(finalOptions.message);

        $(this).addClass('temporizador');
        $(this).append(horaDezena, horaUnidade, separadorHora, minutoDezena, 
            minutoUnidade, separadorMinuto, segundoDezena, segundoUnidade,
            mensagem);

        const regex = new RegExp(/(\d\d):(\d\d):(\d\d)/);
        const horarioAlvo = regex.exec(finalOptions.horario);

        let temporizador = setInterval(() => {
            const agora = new Date();
            const alvo = new Date();
            alvo.setHours(horarioAlvo[1]);
            alvo.setMinutes(horarioAlvo[2]);
            alvo.setSeconds(horarioAlvo[3]);

            const diferencaEmMili = alvo.getTime() - agora.getTime();
            if (diferencaEmMili >= 0) {
                const diferenca = regex.exec(new Date(diferencaEmMili).toISOString());

                horaDezena.html(diferenca[1][0]);
                horaUnidade.html(diferenca[1][1]);
                minutoDezena.html(diferenca[2][0]);
                minutoUnidade.html(diferenca[2][1]);
                segundoDezena.html(diferenca[3][0]);
                segundoUnidade.html(diferenca[3][1]);
            } else {
                clearInterval(temporizador);
            }
        }, 1000);

        return this;
    }
})(jQuery);