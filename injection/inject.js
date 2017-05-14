$(() => {
  let selectedProduct;

  setTimeout(() => {
    // Inject manual
    // end

    const products = [
      {
        "desc": "blusa decotada. Cor azul piscina", 
        "id": "1", 
        "image": "http://ph-cdn1.ecosweb.com.br/Web/posthaus/foto/moda-feminina/blusas/blusa-azul-royal-com-decote-diferenciado_121966_301_1.jpg", 
        "link": "http://www.cea.com.br/moda-feminina/blusas/azul%20marinho", 
        "price": "50.00", 
        "time": "00:05", 
        "title": "blusa amor de ver\u00e3o", 
        "type": "vestimenta"
      }, 
      {
        "desc": "Sof\u00e1 3 lugares", 
        "id": "2", 
        "image": "https://static.mobly.com.br/r/540x540/p/Mobly-SofC3A1-3-Lugares-RetrC3A1til-Bourbon-Suede-Bege-9700-657413-1-zoom.jpg", 
        "link": "https://www.mobly.com.br/moveis/sofas-3-lugares?cagpspn=pla&spall_source=especiais&catargetid=120159870002149561&cadevice=c&gclid=CjwKEAjw3drIBRCOwfC-_qqyjQ8SJADvoWQpdU6U5bUJ4U30r4FXr72t4GDFvWYRYsLQCbrK4wNjEhoCHGTw_wcB&quickview=LI582UP43XQAMOB", 
        "price": "17000.00", 
        "time": "00:10", 
        "title": "Sof\u00e1 astral", 
        "type": "mobilia"
      }, 
      {
        "desc": "Sof\u00e1 3 lugares", 
        "id": "3", 
        "image": "https://static.mobly.com.br/r/540x540/p/Mobly-SofC3A1-3-Lugares-RetrC3A1til-Bourbon-Suede-Bege-9700-657413-1-zoom.jpg", 
        "link": "https://www.mobly.com.br/moveis/sofas-3-lugares?cagpspn=pla&spall_source=especiais&catargetid=120159870002149561&cadevice=c&gclid=CjwKEAjw3drIBRCOwfC-_qqyjQ8SJADvoWQpdU6U5bUJ4U30r4FXr72t4GDFvWYRYsLQCbrK4wNjEhoCHGTw_wcB&quickview=LI582UP43XQAMOB", 
        "price": "17000.00", 
        "time": "00:13", 
        "title": "Sof\u00e1 astral", 
        "type": "mobilia"
      }, 
      {
        "desc": "Sof\u00e1 3 lugares", 
        "id": "4", 
        "image": "https://static.mobly.com.br/r/540x540/p/Mobly-SofC3A1-3-Lugares-RetrC3A1til-Bourbon-Suede-Bege-9700-657413-1-zoom.jpg", 
        "link": "https://www.mobly.com.br/moveis/sofas-3-lugares?cagpspn=pla&spall_source=especiais&catargetid=120159870002149561&cadevice=c&gclid=CjwKEAjw3drIBRCOwfC-_qqyjQ8SJADvoWQpdU6U5bUJ4U30r4FXr72t4GDFvWYRYsLQCbrK4wNjEhoCHGTw_wcB&quickview=LI582UP43XQAMOB", 
        "price": "17000.00", 
        "time": "00:17", 
        "title": "Sof\u00e1 astral", 
        "type": "mobilia"
      }
    ];

    const content = products.map(product => {
      const anchor = document.createElement('a');
      //anchor.setAttribute('href', product.link);
      anchor.setAttribute('title', product.title);
      anchor.setAttribute('data-product-time', product.time);
      anchor.setAttribute('data-product-id', product.id);
      anchor.className = 'video-playlist-item product-item';
      anchor.innerHTML = `
        <div class="video-playlist-item__video">
          <div class="placeholder-widget playlist-video__image">
            <div class="temp-image" style="padding-bottom: 56.25%;"></div>
            <div class="final-content">
              <div class="thumbnail-widget">
                <div class="thumb-alt-content"></div>
                <img class="thumb" src="${product.image}" sizes="(min-width: 1024px) 10vw, 40vw">
              </div>
              <span class="playlist-video__duration product-price">R$ ${product.price}</span>
            </div>
          </div>
        </div>
        <div class="video-playlist-item__card-wrapper">
          <span>
            <div class="video-playlist-item__card">
              <div class="video-playlist-item__head video-playlist-item__head--upper">${product.title}</div>
              <div class="video-playlist-item__title">${product.desc}</div>
              <div class="video-playlist-item__footer">
                <div class="video-exhibited-at video-playlist-item__exhibited-at">
                  <img alt="Visa Checkout" class="v-button" role="button" src="https://assets.secure.checkout.visa.com/VCO/images/acc_49x31_blu02.png"/>

                  <div class="checkout-success">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="24" viewBox="0 0 15 12">
                      <path fill="#61CE61" d="M.15 5.768l2.12-2.122 5.66 5.656-2.12 2.122z"/>
                      <path fill="#61CE61" d="M3.686 9.303L12.878.11 15 2.233l-9.193 9.193z"/>
                    </svg>
                    <span>Comprado</span>
                  </div>
                </div>
              </div>
            </div>
          </span>
        </div>
      `;
      return anchor.outerHTML;
    });

    // Print Content
    $('.video-playlist').prepend(`
      <div class="video-playlist__header">
        <span class="video-playlist__header-label">Loja</span>
        <div class="video-playlist__header-autoplay"></div>
      </div>
      <div class="videos-container">
        <div class="scroller-widget items-scroller">
          <div class="scroll-box">
            <div class="scroll-content">
              ${content.join('')}
            </div>
          </div>
        </div>
      </div>
    `);

    $('.product-item').on('click', (e) => {
      selectedProduct = $(e.currentTarget);
    });

    // Update active
    const interval = setInterval(() => {
      $('.product-item').each((i, node) => {
        const elm = $(node);
        if(elm.data('product-time') === $('.media-control-indicator').first().text()) {
          $('.product-item').each((i, node) => { $(node).removeClass('active'); });
          elm.addClass('active');
        }
      });
    }, 1000);

    // Visa
    V.init({
      apikey: "KF7DD9HRRQWCM468067C21ArqgCE2UNtEiITnX9cJeVyfXOMU",
      paymentRequest: {
        currencyCode: "USD",
        total: "10.00"
      }
    });
    V.on("payment.success", function (payment){ 
      selectedProduct.find('.v-button').hide();
      selectedProduct.find('.checkout-success').show();
      if(typeof swal !== 'undefined') swal("Compra efetuada com sucesso!", "🤘", "success")
    });
    V.on("payment.error", function (payment, error){
      if(typeof swal !== 'undefined') swal("Ocorreu um erro.", "Por favor, tente novamente mais tarde.", "error");
    });

  }, 3000)
  
});
