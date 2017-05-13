// Importing visa api
$.getScript("https://sandbox-assets.secure.checkout.visa.com/checkout-widget/resources/js/integration/v1/sdk.js", console.log);

function onVisaCheckoutReady() {
    V.init({
        apikey: "KF7DD9HRRQWCM468067C21ArqgCE2UNtEiITnX9cJeVyfXOMU",
        paymentRequest: {
            currencyCode: "USD",
            total: "10.00"
        }
    });
    V.on("payment.success", function (payment){ 
        alert(JSON.stringify(payment)); 
    });
    V.on("payment.cancel", function (payment){
        alert(JSON.stringify(payment));
    });
    V.on("payment.error", function (payment, error){
        alert(JSON.stringify(error)); 
    });
}


// Create styles
const style = document.createElement('style');
style.type = 'text/css';

const css = `
.video-playlist-item {
  position: relative;
  border: 1px solid transparent;
}
.video-playlist-item.active {
  border: 1px solid rgba(255,255,255,.2);
}
.playlist-video__duration.product-price {
  text-transform: uppercase;
}
`;

if (style.styleSheet) {
  style.styleSheet.cssText = css;
} else {
  style.appendChild(document.createTextNode(css));
}

document.getElementsByTagName('head')[0].appendChild(style);

$.get("https://pitangas-pitangas.cloudapps.hackaton.solutionarchitectsredhat.com.br/products").then(function(response){
    const products = response.products;

    const content = products.map(product => {
  const anchor = document.createElement('a');
  //anchor.setAttribute('href', product.link);
  anchor.setAttribute('title', product.title);
  anchor.setAttribute('data-product-time', product.time);
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
                <img src="https://assets.secure.checkout.visa.com/VCO/images/acc_49x31_blu02.png"/>
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
})



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