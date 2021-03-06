from app import Product, db

##### Product 1 #######
maker = 'Aquamar'
type = 'Vestuário'
title = 'Calça Jeans Rasgos'
desc = 'Calça jeans boyfriend estonada com rasgos. Composição: 100% algodão.'
time = "00:10"
link = "http://www.eaquamar.com.br/calca-jeans-rasgos-03-02-0818/p"
images = ["https://filesquash.io/v1/a88010be/assets/e5fb6c30-25a4-4e2c-9047-e866dcd383be", "http://aquamar.vteximg.com.br/arquivos/ids/211427-337-501/03.02.0818_0000_3.jpg"]
size = ['36', '38', '40', '42', '44', '46']
price = 'R$ 79,99'
option = "3x de R$ 26,66 sem juros no cartão."

product = Product(maker, type, title, time, link, images, price)

product.get_desc(desc)
product.get_size(size)
product.get_option(option)

db.session.add(product)
db.session.commit()

#####################

##### Product 2 #######

maker = "Schutz"
type = "Vestuário"
title = "Scarpin Stiletto Tanino"
desc = "O clássico modelo scarpin ganha detalhes de recortes para trazer ainda mais glamour às suas produções. Combine com vestidos e saias, deixando o pé bem à mostra valorizando esse modelo incrível."
time = "00:13"
link = "https://www.schutz.com.br/store/sapatos/scarpins/scarpin-stiletto-tanino/p/0209100010387U?gclid=CjwKEAjw3drIBRCOwfC-_qqyjQ8SJADvoWQptdTgv-b1E73Wf3TuZaANEJSQ83CL8jbtTtNmNEX0MBoC1Ovw_wcB"
images = ["https://filesquash.io/v1/a88010be/assets/34d89707-988c-4634-9885-6d001ac0504f", "https://secure-static.schutz.com.br/medias/sys_master/schutz/h00/hf9/h00/h00/9022479368222/0209100010387U-02-BASEIMAGE-Thumbnail.jpg", "https://secure-static.schutz.com.br/medias/sys_master/schutz/hcf/ha8/h00/h00/9022479695902/0209100010387U-04-BASEIMAGE-Thumbnail.jpg"]
size = ["33", "34", "35", "36", "37", "38", "39", "40"]
price = "R$ 360,00"
option = "6x de R$ 60,00 sem juros."

product = Product(maker, type, title, time, link, images, price)

product.get_desc(desc)
product.get_size(size)
product.get_option(option)

db.session.add(product)
db.session.commit()

#####################

##### Product 3 #######

maker = "C&A"
type = "Vestuário"
title = "Blusa com renda off white"
desc = "Essa blusa foi confeccionada em tecido plano leve. O modelo tem detalhe de renda na parte superior. O decote é redondo e as mangas são curtas. Aposte nessa blusa para compor seus melhores looks! Composição: 100% Viscose Modelo Veste: 38 Altura: 1,74cm Busto: 89cm Cintura: 62cm Quadril: 90cm"
time = "00:16"
link = "http://www.cea.com.br/Blusa-com-Renda-Off-White-8460232-Off_White/p?gclid=CjwKEAjw3drIBRCOwfC-_qqyjQ8SJADvoWQpz-LoeSfuxHxXcWNXh6VW1XDZPD7CM-P3_SqYVz6nvRoCawvw_wcB"
images = ["https://filesquash.io/v1/a88010be/assets/d1c3e13c-42e8-4594-b753-f5e0b6591712", "http://cea.vteximg.com.br/arquivos/ids/1144922-1000-1200/Blusa-com-Renda-Off-White-8460232-Off_White_2.jpg", "http://cea.vteximg.com.br/arquivos/ids/1144923-1000-1200/Blusa-com-Renda-Off-White-8460232-Off_White_3.jpg"]
size = ["36", "38", "40", "42", "44"]
price = "R$ 69,99"
option = "3x de R$ 23,33 no cartão."

product = Product(maker, type, title, time, link, images, price)

product.get_desc(desc)
product.get_size(size)
product.get_option(option)

db.session.add(product)
db.session.commit()

#####################

##### Product 4 #######

maker = "Aviator"
type = "Vestuário"
title = "Camisa Casual Xadrez"
desc = "Camisa manga longa em tecido fio tinto xadrez 100% algodão, padrão exclusivo Aviator. Com botões na gola, 1 bolso com bordado 'Asa' e pala nas costas com prega. Modelagem Clássica Aviator."
time = "00:23"
link = "http://m.aviator.com.br/camisas/camisas-casuais/camisa-casual-cla-0013489238609.html?codbar=0013489238610"
images = ["https://filesquash.io/v1/a88010be/assets/ae4ddfd2-0fa4-436a-8f09-244ac2c03004"]
size = ["1", "2", "3", "4", "5", "6", "7"]
price = "R$ 219,00"
#option = "4x de R$ 87,47."

product = Product(maker, type, title, time, link, images, price)

product.get_desc(desc)
product.get_size(size)
#product.get_option(option)

db.session.add(product)
db.session.commit()

#####################


##### Product 5 #######

maker = "Mobly"
type = "mobília"
title = "Sofá Dijon Cinza"
desc = "Se você procura por conforto para a sua sala de estar, está olhando para a melhor definição dele. O conjunto de sofá Dijon possui um design incrível que permite a você aproveitar todo o espaço do cômodo, inclusive os cantos. Seu estilo contemporâneo privilegia a simplicidade na decoração do cômodo para que esse seja o móvel de destaque. Desfrute de uma sala confortável e pra lá de charmosa."
time = "00:48"
link = "https://www.mobly.com.br/sofa-3-lugares-dijon-com-chaise-suede-cinza-85433.html?cagpspn=pla&spall_source=especiais&catargetid=120159870001824022&cadevice=m&gclid=CjwKEAjw3drIBRCOwfC"
images = ["https://filesquash.io/v1/a88010be/assets/2a464785-2cde-45b7-98cc-ecf138b8d100"]
#size = ["Altura: 92cm", "Largura: 280cm", "Profundidade: 153cm", "Peso: 65kg"]
price = "R$ 1614,99"
option = "10x de R$ 161,50 sem juros."

product = Product(maker, type, title, time, link, images, price)

product.get_desc(desc)
#product.get_size(size)
product.get_option(option)

db.session.add(product)
db.session.commit()

#####################

##### Product 6 #######

maker = "Aviator"
type = "Vestuário"
title = "Calça Chino Boston"
desc = "Calça chino com bolso faca e cós alfaiataria, em tecido de sarja algodão com elastano. Bolso costas embutido com botão de massa na cor da peça. Modelagem slim Aviator."
time = "00:27"
link = "http://m.aviator.com.br/calcas/calcas-chino/calca-chino-boston-4001429000120.html?codbar=4001429043920"
images = ["https://filesquash.io/v1/a88010be/assets/be61d7cd-a324-468b-a244-66ada1d49bb4"]
size = ["38", "40", "42", "44", "46", "48", "50", "52"]
price = "R$ 239,00"
#option = ""

product = Product(maker, type, title, time, link, images, price)

product.get_desc(desc)
product.get_size(size)
#product.get_option(option)

db.session.add(product)
db.session.commit()

#####################

##### Product 7 #######

maker = "Coke"
type = "Vestuário"
title = "Tênis Coca-Cola Mika New"
desc = "Fuja do óbvio e acrescente atitude em suas produções urbanas com o Tênis Coca-Cola Mika New. Trazendo inspiração esportiva, o calçado é a pedida certa para ousar e inovar seu guarda-roupa."
time = "00:31"
link = "http://www.netshoes.com.br/produto/tenis-cocacola-mika-new-598-8720-026?campaign=gglepqpla&gclid=CjwKEAjw3drIBRCOwfC-_qqyjQ8SJADvoWQpjUFx6Xcl5O89XjvjE5uq9uO8YzHuAdq3fZJcej6x-RoC2PLw_wcB"
images = ["http://static5.netshoes.net/Produtos/tenis-cocacola-mika-new/26/598-8720-026/598-8720-026_zoom1.jpg?resize=544:*"]
size = ["34", "35", "36", "37", "38", "39", "40", "40", "41", "42", "43"]
price = "R$ 237,41"
option = "9x de R$ 26,38."

product = Product(maker, type, title, time, link, images, price)

product.get_desc(desc)
product.get_size(size)
product.get_option(option)

db.session.add(product)
db.session.commit()

#####################



##### Product 8 #######

maker = "Vivara"
type = "Acessório"
title = "Relógio Akium Feminino"
desc = "Com o mesmo compromisso que possui com a criação de suas jóias, a Vivara desenvolveu em 2001 a Akium, marca de relógios, com modelos e coleções exclusivas! Transformando sonhos em realidade também no mundo da alta relojoaria, a Akium lança coleções modernas sempre alinhadas as últimas tendências da moda."
time = "00:19"
link = "http://www.vivara.com.br/produto/relogio-akium-feminino-aco-rose-rose-3d02fb-02/AK00002759?gclid=CjwKEAjw3drIBRCOwfC-_qqyjQ8SJADvoWQpqznKVLbxmSWCvxwzXYKDcudug5yyBqhwgfYXH0K6FRoCziHw_wcB"
images = ["http://images.vivara.com.br/Stores/Produtos/AK00002759.jpg", "http://images.vivara.com.br/Stores/Produtos/Embalagem-Relogio-Akium.jpg"]
#size = [""]
price = "R$ 350,00"
option = "7x de R$ 50,00."

product = Product(maker, type, title, time, link, images, price)

product.get_desc(desc)
#product.get_size(size)
product.get_option(option)

db.session.add(product)
db.session.commit()

#####################


##### Product 9 #######

maker = "Keydesign"
type = "Acessório"
title = "Black Series-Preta-Pequeno"
desc = "Pulseira Masculina em Couro."
time = "00:35"
link = "http://www.keydesign.com.br/pulseira-masculina-em-couro-huerta-black-series-preta/p?idsku=885&utm_source=googleshopping&utm_campaign=merchant&gclid=CjwKEAjw3drIBRCOwfC-_qqyjQ8SJADvoWQpZc3mxqHJYK0h6wYSIOYUENZ-WK00mrqjSPiFHTwlhBoCW9vw_wcB&uam=true&mobile=4"
images = ["http://keydesign.vteximg.com.br/arquivos/ids/166063-600-600/huerta-black-series.jpg"]
#size = []
price = "R$ 59,90"
option = "3x de R$ 19,96."

product = Product(maker, type, title, time, link, images, price)

product.get_desc(desc)
#product.get_size(size)
product.get_option(option)

db.session.add(product)
db.session.commit()

#####################


##### Product 10 #######

maker = "keydesign"
type = "Acessório"
title = "Leafs"
desc = "Colar Masculino em Fio Encerado"
time = "01:05"
link = "http://www.keydesign.com.br/colar-masculino-em-fio-encerado-leafs/p?idsku=100336&utm_source=googleshopping&utm_campaign=merchant&gclid=CjwKEAjw3drIBRCOwfC-_qqyjQ8SJADvoWQp04bUhNXiVQga0bsTEkSFf04y95ckdwMNqQnLZq8QqRoCCJzw_wcB"
images = ["http://keydesign.vteximg.com.br/arquivos/ids/164297-1000-1000/colar-leafs-key-design.jpg", "http://keydesign.vteximg.com.br/arquivos/ids/164298-1000-1000/colar-leafs-key-design-.jpg"]
#size = []
price = "R$ 49,90"
option = "3x de R$ 16,63"

product = Product(maker, type, title, time, link, images, price)

product.get_desc(desc)
product.get_size(size)
product.get_option(option)

db.session.add(product)
db.session.commit()

#####################


##### Product 11 #######

maker = "Som Livre"
type = "Trilha Sonora"
title = "Rock Story Nacional"
desc = "Outro sim"
time = "00:41"
link = "http://www.loja.globo/rock-story-vol-1-cd.html"
images = ["http://www.audienciaetv.com.br/wp-content/uploads/2016/10/Logo-Rock-Story-658x370.jpg"]
#size = []
price = "R$ 19,90"
#option = ""

product = Product(maker, type, title, time, link, images, price)

product.get_desc(desc)
#product.get_size(size)
#product.get_option(option)

db.session.add(product)
db.session.commit()

#####################
