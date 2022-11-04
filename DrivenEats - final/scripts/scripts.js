// criando as variaveis globais
let tituloPrato;
let tituloBebida;
let tituloSobremesa;

let precoPrato;
let precoBebida;
let precoSobremesa;

let total;

function selecionarPrato(pratoClicado){
    
    // desmarcar o prato anteriormente selecionado
    // remover a classe selecionado do prato que foi marcado antes
    const pratoSelecionadoAnteriormente = document.querySelector('.pratos .selecionado');    

    // só ira remover a classe selecionado quando a variavel não for null
    if (pratoSelecionadoAnteriormente !== null){
        pratoSelecionadoAnteriormente.classList.remove('selecionado');
    }    
    

    // quero marcar o prato como selecionado
    // vou adicionar a classe selecionado no prato
    pratoClicado.classList.add('selecionado');

    tituloPrato = pratoClicado.querySelector('.titulo').innerHTML;    
    precoPrato = pratoClicado.querySelector('.preco').innerHTML;    

    ativarBotaoFecharPedido();
}

function selecionarBebida(bebidaClicada){

    // verificar se existe bebida já selecionada anteriormente
    const bebidaSelecionadaAnteriormente = document.querySelector('.bebidas .selecionado');

    // se tiver, desmarcar (remover a classe selecionado)
    if (bebidaSelecionadaAnteriormente !== null){
        bebidaSelecionadaAnteriormente.classList.remove('selecionado');
    }
    
    // marcar a bebida clicada como selecionada (colocando a classe selecionado)
    bebidaClicada.classList.add('selecionado');

    tituloBebida = bebidaClicada.querySelector('.titulo').innerHTML;  
    precoBebida = bebidaClicada.querySelector('.preco').innerHTML;  

    ativarBotaoFecharPedido();
}

function selecionarSobremesa(sobremesaClicada){

    const sobremesaSelecionadaAnteriormente = document.querySelector('.sobremesas .selecionado');

    if (sobremesaSelecionadaAnteriormente !== null){
        sobremesaSelecionadaAnteriormente.classList.remove('selecionado');
    }
    
    sobremesaClicada.classList.add('selecionado');

    tituloSobremesa = sobremesaClicada.querySelector('.titulo').innerHTML;  
    precoSobremesa = sobremesaClicada.querySelector('.preco').innerHTML;  

    ativarBotaoFecharPedido();
}

function ativarBotaoFecharPedido(){

    console.log(tituloPrato, tituloBebida, tituloSobremesa);

    // verificar se o prato foi selecionado
    if (tituloPrato !== undefined){
        // verificar se a bebida foi selecionada
        if (tituloBebida !== undefined){
             // verificar se a sobremesa foi selecionada
             if (tituloSobremesa !== undefined){
                // liberar o botao fechar pedido
                const botao = document.querySelector('.fazer-pedido');
                botao.classList.add('ativo');

                botao.innerHTML = 'Fazer o Pedido';
             }
        }
    }
    
}

function fecharPedido(){

        // verificar se o prato foi selecionado
        if ( tituloPrato !== undefined){
            // verificar se a bebida foi selecionada
            if (tituloBebida !== undefined){
                 // verificar se a sobremesa foi selecionada
                 if (tituloSobremesa !== undefined){

                    // pegar o elemento com a classe overlay
                    const divFecharPedido = document.querySelector('.overlay');
                    
                    console.log(divFecharPedido);

                    // remover a classe escondido
                    divFecharPedido.classList.remove('escondido');

                    // mostrar o titulo e o preço dos itens selecionados
                    divFecharPedido.querySelector('.prato .nome').innerHTML = tituloPrato;
                    

                    divFecharPedido.querySelector('.bebida .nome').innerHTML = tituloBebida;
                    

                    divFecharPedido.querySelector('.sobremesa .nome').innerHTML = tituloSobremesa;
                    divFecharPedido.querySelector('.sobremesa .preco').innerHTML = precoSobremesa;

                    precoPrato = precoPrato.replace('R$ ','');                    
                    divFecharPedido.querySelector('.prato .preco').innerHTML = precoPrato;
                    precoPrato = precoPrato.replace(',','.');
                    
                    precoBebida = precoBebida.replace('R$ ','');                    
                    divFecharPedido.querySelector('.bebida .preco').innerHTML = precoBebida;
                    precoBebida = precoBebida.replace(',','.');

                    precoSobremesa = precoSobremesa.replace('R$ ','');                    
                    divFecharPedido.querySelector('.sobremesa .preco').innerHTML = precoSobremesa;
                    precoSobremesa = precoSobremesa.replace(',','.');

                    total = Number(precoSobremesa) + Number(precoBebida) + Number(precoPrato);

                    const divPrecoTotal = divFecharPedido.querySelector('.total .preco-total');
                    divPrecoTotal.innerHTML = `R$ ${total.toFixed(2)}`;

                 }            
            }
        }

}

function cancelar(){
    // pegar o elemento com a classe overlay
    const divFecharPedido = document.querySelector('.overlay');
    divFecharPedido.classList.add('escondido');
}

function confirmar(){

    let msg = `Olá, gostaria de fazer o pedido:
    - Prato: ${tituloPrato}
    - Bebida: ${tituloBebida}
    - Sobremesa: ${tituloSobremesa}
    Total: R$ ${total.toFixed(2)}`;

    msg = encodeURIComponent(msg);

    const linkWP = `https://wa.me/359999999999?text=${msg}`;

    window.open(linkWP);
    
    console.log(msg);


}