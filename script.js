function logoLoja() {
  $("#rodape > div:nth-child(3)").addClass("logo-loja")
  $(".pagina-carrinho #rodape > div").addClass("logo-loja")
  $(".pagina-pedido-finalizado #rodape > div").addClass("logo-loja")
}

function removeDiv() {
  $(".pagina-inicial #corpo > div > div.secao-secundaria").remove()
}

function productId() {
  $(".pagina-produto #corpo > div > div.secao-principal.row-fluid.sem-coluna > div div.listagem").attr("id", "listagemProdutos")
}

function productDiscount() {
  $("#listagemProdutos div.bandeiras-produto span.bandeira-promocao").each(function () {
    $(this).text($(this).text().replace("Desconto", ""))
  })
}

function productTitle() {
  var title = $(".pagina-produto #corpo > div > div.secao-principal.row-fluid.sem-coluna > div > div:nth-child(1) > div:nth-child(2) div.info-principal-produto")
  $(".pagina-produto #corpo > div > div.secao-principal.row-fluid.sem-coluna > div > div:nth-child(1) > div:nth-child(1)").prepend(title.toggleClass("info-principal-produto info-principal-produto-alterado").clone())
  title.addClass("hidden-phone")
  $(".pagina-produto #corpo > div > div.secao-principal.row-fluid.sem-coluna > div > div:nth-child(1) > div:nth-child(1) > div.info-principal-produto-alterado").addClass("visible-phone")
}

function productDescription() {
  $(".pagina-produto #corpo div:nth-child(2) > div > div.abas-custom").prepend("<h4 class='titulo cor-secundaria'>Descrição</h4>")
}

function productWhatsApp() {
  $(".pagina-produto #corpo > div > div.secao-principal.row-fluid.sem-coluna > div div.produto-compartilhar ul > li.visible-phone").removeClass("visible-phone")
  $(".pagina-produto #corpo > div > div.secao-principal.row-fluid.sem-coluna > div i.fa-whatsapp").toggleClass("fa fab")
}

function logoutButton() {
  $(".pagina-conta #corpo > div > div.secao-principal.row-fluid.sem-coluna > div.conteudo.span9 > div > div").append("<div class='caixa-dados' style='border: none; padding: 10px;'><div class='row-fluid'><div class='span12 text-center'><a href='/conta/logout' class='botao principal medio'>Sair</a></div></div></div>")
}

function btnChat() {
  $("body").append('<a class="btn-chat visible-phone visible-tablet" href="#modalContato" data-toggle="modal" data-target="#modalContato">' + '<i class="fas fa-envelope" aria-hidden="true"></i>' + "</a>" + '<a class="btn-chat hidden-phone hidden-tablet" href="#modalContato" data-toggle="modal" data-target="#modalContato">' + '<i class="fas fa-envelope" aria-hidden="true"></i>' + "</a>")
}

function chatModal() {
  document.getElementById("modalContato").getElementsByClassName("modal-header")[0].innerHTML = '<button type="button" class="close" data-dismiss="modal" aria-hidden="true"><i class="icon-remove"></i></button><span class="titulo cor-secundaria">Fale conosco</span>'
}

function removeFavorites() {
  $("#corpo > div > div.secao-principal.row-fluid.sem-coluna > div.conteudo.span9 > div > ul > li.hidden-phone").remove()
  $("#corpo > div > div.secao-principal.row-fluid.sem-coluna > div.coluna.span3 > div > ul > li:nth-child(5)").remove()
  $("#corpo > div > div.secao-principal.row-fluid.sem-coluna > div.coluna.span3 > div > ul > li:nth-child(5)").remove()
  $(".pagina-produto #corpo > div > div.secao-principal.row-fluid.sem-coluna > div li.hidden-phone > a.adicionar-favorito").remove()
  $(".pagina-conta #corpo > div > div.secao-principal.row-fluid.sem-coluna > div.cadastro.span9 > ul > li.hidden-phone").remove()
  $(".pagina-pedido #corpo > div > div.secao-principal.row-fluid.sem-coluna > div.conteudo.span9 > ul > li.hidden-phone").remove()
}

function initialBar() {
  $("body > div.barra-inicial.fundo-secundario div.lista-redes").remove()
  $("body > div.barra-inicial.fundo-secundario div.canais-contato").remove()
  $("body > div.barra-inicial.fundo-secundario").remove()
  $("body").prepend("<div class='barra-inicial fundo-secundario'><div class='conteiner'><div style='display: flex; justify-content: space-between'><a href='https://www.aaapo.com.br/' style='display: flex; align-items: center; text-decoration: none'><i class='fas fa-angle-left' style='margin-top: 0.05em; margin-right: 0.25em; font-size: 0.85rem'></i>Voltar para a página inicial</a><a href='https://www.melhorrastreio.com.br' rel='noreferrer' target='_blank' style='display: flex; align-items: center; text-decoration: none'><i class='fas fa-box-open' style='margin-right: 0.25em; font-size: 0.85rem'></i>Rastreio</a></div></div></div>")
}

function upperMenu() {
  $(".atalhos-mobile .icon-shopping-cart").replaceWith("<i class='fas fa-shopping-cart .shopping-cart'></i>")
  $("#cabecalho .carrinho > a > i").replaceWith("<i class='fas fa-shopping-cart'></i>")
  var itenCartText = $("#cabecalho .qtd-carrinho").text()
  $(".atalhos-mobile .shopping-cart").prepend("<span class='itens'>" + itenCartText + "</span>")
  $(".botao-comprar-ajax").on("click", function () {
    setTimeout(function () {
      var itenCartText = $("#cabecalho .qtd-carrinho").text()
      $(".atalhos-mobile .shopping-cart .itens").text(itenCartText)
    }, 2000)
  })
  $("body:not([class*='modo-orcamento']) #cabecalho .carrinho").after("<div class='conta-topo'><a href='/conta/index'><i class='fas fa-user'></i></a></div>")
  $(".conteudo-topo > .superior").remove()
}

function fullMenu() {
  $("#cabecalho .conteiner").after($(".menu.superior").clone())
  $("#cabecalho .conteiner .menu.superior").attr("class", "menu superior visible-phone")
  $("#cabecalho > .menu.superior").attr("class", "full menu hidden-phone")
  $(".full.menu .nivel-um").wrap("<div class='conteiner'></div>")
}

function squareMenu() {
  var li_list = document.querySelectorAll("#cabecalho .menu ul.nivel-um > li")
  for (var i = 0; i < li_list.length; i++) {
    var a_inside = li_list[i].querySelector("a")
    a_inside.insertAdjacentHTML("afterbegin", '<span class="menu-square" style="font-size: 2em; color: #cc212a; vertical-align: inherit; margin-right: 0.25rem;">&#9632;</span>')
  }
}

function toggleNav() {
  $("#navigation-menu").toggleClass("active")
  $("#cabecalho > div.mobile-menu.visible-phone div.menu-phone i").toggleClass("fa-bars fa-times")
}

function mobileMenu() {
  $("#cabecalho > div.atalhos-mobile.visible-phone.fundo-secundario.borda-principal").remove()
  $("#cabecalho > div.conteiner").addClass("hidden-phone")

  var logoMobile = $("#cabecalho > div.conteiner.hidden-phone > div > div.span3").html()
  var menuSuperior = $("#cabecalho > div.conteiner.hidden-phone > div.menu.superior").html()
  var itenCartTextMobile = $("#cabecalho .qtd-carrinho").text()
  var buscaMobile = "<div class='busca borda-alpha' style='margin: 0'><form id='form-buscar' action='/buscar' method='get'><span role='status' aria-live='polite' class='ui-helper-hidden-accessible'></span><input id='auto-complete' type='text' name='q' placeholder='Digite o que você procura' value='' autocomplete='off' class='ui-autocomplete-input' /><button class='botao botao-busca'><i class='fas fa-search'></i></button></form></div>"

  $("#cabecalho > div.conteiner.hidden-phone").before("<div class='mobile-menu visible-phone'><div class='row-fluid' style='display: flex; align-items: center'><div class='span3' style='float: left; width: 23.404255319148934%'>" + logoMobile + "</div><div class='span9' style='float: right; width: 76.5957446809%'><div class='menu-phone'><span style='cursor: pointer' onclick='toggleNav()'><i class='fas fa-bars'></i></span><div id='navigation-menu' class='menu-nav visible-phone'>" + menuSuperior + "</div></div><div class='carrinho'><a href='/carrinho/index'><i class='fas fa-shopping-cart'></i><strong class='qtd-carrinho titulo cor-secundaria'>" + itenCartTextMobile + "</strong></a></div><div class='conta-topo'><a href='/conta/index'><i class='fas fa-user'></i></a></div></div></div><div class='row-fluid'><div class='span12 busca-mobile' style='margin-top: 10px'>" + buscaMobile + "</div></div></div>")
}

function secaoBanners() {
  $("body > div.conteiner-principal > div.secao-banners").remove()
}

function checkoutHeader() {
  $(".pagina-carrinho.carrinho-checkout #cabecalho > div.mobile-menu.visible-phone").remove()
  $(".pagina-carrinho.carrinho-checkout #cabecalho > div.conteiner.hidden-phone").removeClass("hidden-phone")
  $(".pagina-carrinho.carrinho-checkout #cabecalho > div > div > div.span3.offset6.hidden-phone.hidden-tablet").remove()
}

function productsDisplay() {
  $("#listagemProdutos .listagem-linha:not(.flexslider) li").unwrap().unwrap()
}

$(function () {
  logoLoja(), 
  removeDiv(), 
  productId(), 
  productDiscount(), 
  productTitle(), 
  productDescription(), 
  productWhatsApp(), 
  logoutButton(), 
  btnChat(), 
  chatModal(), 
  removeFavorites(), 
  initialBar(), 
  upperMenu(), 
  fullMenu(), 
  squareMenu(), 
  mobileMenu(), 
  secaoBanners(), 
  checkoutHeader(), 
  productsDisplay()
})
