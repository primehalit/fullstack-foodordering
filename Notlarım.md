
<div>: HTML içinde blok düzeyinde bir bölümü tanımlar. Genellikle içerisine diğer HTML öğeleri yerleştirilir ve CSS ile stil uygulamak için kullanılır.

<table>: Bir HTML tablosunu başlatır. Tablo, satırlar ve sütunlar içeren verileri düzenlemek için kullanılır.

<thead>: Bir HTML tablosunun başlık bölümünü belirtir. Genellikle tablonun ilk satırını (sütun başlıklarını) içerir.

<tbody>: Bir HTML tablosunun ana veri bölümünü belirtir. Genellikle tablonun geri kalanını (veri satırlarını) içerir.

<tr>: Bir tablo satırını temsil eder. Tablodaki her bir veri satırını oluşturmak için kullanılır.

<th>: Bir HTML tablosunda başlık hücresini (table header cell) belirtir. Genellikle tablo başlıklarını içerir.

<td>: Bir HTML tablosunda veri hücresini (table data cell) belirtir. Genellikle tablo verilerini içerir.

<button>: Bir düğme oluşturur. Kullanıcıların tıklamasına izin vererek belirli bir eylemi gerçekleştirmelerini sağlar.

Bu etiketler, HTML kullanarak sayfada yapılandırma ve içerik oluşturmak için kullanılır. Yukarıdaki kod parçacığı, bir alışveriş sepeti bileşeni oluşturmak için bu temel HTML etiketlerini kullanır.




flex: Öğelerin birlikte hizalanmasını sağlar, genellikle bir dizi öğeyi yatay olarak hizalar.
items-center: Öğeleri dikey eksende ortalar.
h-screen: Yüksekliği ekranın yüksekliğine eşit olacak şekilde ayarlar.
gap-20: Öğeler arasında 20 piksel boşluk bırakır.
py-20: Dikey dolguyu (padding) belirtir ve üst ve alt dolguları 20 piksel olarak ayarlar.
mx-20: Yatay marjı (margin) belirtir ve sağ ve sol marjları 20 piksel olarak ayarlar.
md:flex-1: Orta boy ekranda genişliği esnek hale getirir.
w-[80%]: Genişliği yüzde 80 olarak ayarlar.
h-[80%]: Yüksekliği yüzde 80 olarak ayarlar.
md:text-start: Metni sola hizalar.
text-primary: Metin rengini belirler, "primary" genellikle birincil metin rengini temsil eder.
font-bold: Kalın yazı tipini belirtir.
underline: Metnin altını çizer.
underline-offset-1: Alt çizginin konumunu belirtir, genellikle alt çizgiyi biraz yukarı kaydırır.
my-4: Dikey boşluk (margin) belirtir ve üst ve alt boşlukları 4 piksel olarak ayarlar.
text-xl: Metin boyutunu belirtir, genellikle büyük başlıklar için kullanılır.
text-sm: Metin boyutunu belirtir, genellikle küçük yazılar için kullanılır.
font-medium: Metnin orta kalınlıkta yazı tipini belirtir.
w-8, w-12, w-16: Genişliği belirli piksel değerlerine ayarlar.
h-8, h-12, h-16: Yüksekliği belirli piksel değerlerine ayarlar.
accent-primary: Betiğinizi benimseyen bir çerçevenin rengini belirtir.
btn-primary: Butonun biçimini ve rengini belirtir, "primary" genellikle birincil buton rengini temsil eder.
Bu sınıfların dışında kalan bazı CSS sınıfları şunlardır:

relative: Göreceli konumlandırmayı belirtir, öğeyi normal akış içinde tutar ve mutlaka bir pozisyonlandırma değeri belirlenmiş olan bir üst öğeye göre konumlandırır.
absolute: Mutlak konumlandırmayı belirtir, öğeyi normal akıştan kaldırır ve en yakın konumlandırılmış üst öğeye göre konumlandırır.
top-0, left-0, -right-6: Konumlandırma için pozisyon değerlerini belirtir, öğeyi üstte, solda veya sağdan belirli bir mesafede konumlandırır.
inline-block: Öğeyi içerik akışı içinde bir blok olarak görüntüler, ancak blok elemanlar gibi yan yana hizalanır.
absolute top-0 -right-6: Öğenin konumunu belirlerken üst ve sağ kenarlardan belirli bir mesafe bırakır.
mt-48: Üst marjı (margin) belirler ve yukarı doğru 48 piksel hareket ettirir.
checkbox: Bir onay kutusunu (checkbox) stilini belirtir.
font-semibold: Metnin yarı-kalın yazı tipini belirtir.
gap-x-1: Öğeler arasında yatay eksende 1 piksel boşluk bırakır.
rounded-full: Öğenin kenarlarını yuvarlatır ve bir daire oluşturur.

container: İçeriği merkezi bir şekilde hizalar ve genellikle bir sayfanın içeriğini sınırlar.
md:inline-block: Orta boy ekranlarda öğeyi blok olarak görüntüler, küçük ekranlarda ise içerik akışına uygun olarak yan yana hizalar.
rounded-md: Kenarları hafifçe yuvarlatır ve bir miktar köşe yumuşatması uygular.
after:content-['']: Eklenti olarak kullanılan bir öğenin içeriğini belirtir.
border: Bir öğenin kenarlarını belirtir ve çerçeveyi oluşturur.
overflow-hidden: Öğenin içeriğinin taşmasını engeller ve içeriği sınırlı bir alanda tutar.
after: Bir öğenin içeriğinden sonraki içeriği hedefler ve onu bir öğenin içine ekler.
hover:scale-105: Fare üzerine geldiğinde öğeyi belirli bir oranda büyütür.
transition-all: Belirli bir özellikte (örneğin boyut, konum) geçiş efektini etkinleştirir.
absolute top-0 left-0: Öğeyi en üstte ve en solda konumlandırır.
md:flex: Orta boy ekranlarda öğeleri esnek bir yapıda görüntüler.
md:flex-row: Orta boy ekranlarda öğeleri yatay olarak hizalar.
flex-col: Öğeleri dikey olarak hizalar.
gap-x-2: Öğeler arasında yatay eksende 2 piksel boşluk bırakır.
hover:text-primary: Fare üzerine geldiğinde metin rengini birincil renge dönüştürür.
peer: İki öğe arasında ilişkiyi belirtir.
pt-2: Üst dolgu miktarını belirtir ve üst dolguyu 2 piksel olarak ayarlar.
peer-focus:h-7: Bir öğe odaklandığında ilişkili diğer öğenin yüksekliğini 7 piksel olarak ayarlar.
peer-focus:text-xs: Bir öğe odaklandığında ilişkili diğer öğenin metin boyutunu küçültür.
peer-valid:h-7: Bir öğe geçerli olduğunda ilişkili diğer öğenin yüksekliğini 7 piksel olarak ayarlar.
peer-valid:text-xs: Bir öğe geçerli olduğunda ilişkili diğer öğenin metin boyutunu küçültür.
Bu sınıflar, HTML ve CSS'in birleşiminden oluşan bileşenlerin düzenlenmesi ve stilleştirilmesi için kullanılır. Özellikle hover, focus ve valid gibi dinamik durumlarda stil değişiklikleri yapmak için kullanılır.

border: Bir öğenin kenarlık (border) özelliklerini belirtir.
rounded-md: Kenarları hafifçe yuvarlatılmış bir köşeli alan oluşturur.
px-[15px]: Yatay dolguyu (padding) belirtir ve sol ve sağ dolguları 15 piksel olarak ayarlar.
py-5: Dikey dolguyu belirtir ve üst ve alt dolguları 5 piksel olarak ayarlar.
relative: Göreceli konumlandırmayı belirtir, öğeyi normal akış içinde tutar ve mutlaka bir pozisyonlandırma değeri belirlenmiş olan bir üst öğeye göre konumlandırır.
w-36, w-44: Genişliği belirli piksel değerlerine ayarlar.
h-36, h-44: Yüksekliği belirli piksel değerlerine ayarlar.
hover:scale-110: Fare üzerine geldiğinde öğenin boyutunu artırır, genellikle interaktif bir etki için kullanılır.
transition-all: Tüm özelliklerde geçiş efektini etkinleştirir, genellikle öğenin durumlar arası yumuşak geçişlerini sağlamak için kullanılır.
rounded-bl-[46px], rounded-tl-2xl, rounded-tr-2xl: Kenarları yuvarlatılmış bir köşeli alan oluşturur, fakat belirli köşeleri yuvarlatmak için belirli köşe sınıflarını belirtir.
overflow-hidden: Öğenin taşan içeriğini gizler, genellikle öğenin sınırlarının dışında olan içeriği göstermek istemediğinizde kullanılır.
text-white: Metin rengini beyaz olarak belirtir.
p-[25px]: Dört kenarın dolgu (padding) değerlerini belirtir ve her kenarda 25 piksel dolgu uygular.
text-xl: Metin boyutunu belirtir, genellikle büyük başlıklar için kullanılır.
font-semibold: Metnin yarı-kalın yazı tipini belirtir.
mt-4: Üst marjı belirtir ve yukarı doğru 4 piksel hareket ettirir.
gap-x-20: Öğeler arasında yatay eksende 20 piksel boşluk bırakır.
md:pr-24: Orta boy ekranda sağ dolgu (padding-right) değerini belirtir ve sağ dolguyu 24 piksel olarak ayarlar.
md:flex-nowrap: Orta boy ekranda esnek yapıyı sarmaz, öğeler yan yana sıralanır.
justify-center: Öğeleri yatay eksende ortalar.
inline-block: Öğeyi içerik akışı içinde bir blok olarak görüntüler, ancak blok elemanlar gibi yan yana hizalanır.
gap-x-4: Öğeler arasında yatay eksende 4 piksel boşluk bırakır.
accent-primary: Betiğinizi benimseyen bir çerçevenin rengini belirtir.
btn-primary: Butonun biçimini ve rengini belirtir, "primary" genellikle birincil buton rengini temsil eder.
Bu sınıflar, HTML ve CSS'in birleşiminden oluşan bileşenlerin düzenlenmesi ve stilleştirilmesi için kullanılır.

gap-20: Öğeler arasında 20 piksel boşluk bırakır.
py-20: Dikey dolguyu (padding) belirtir ve üst ve alt dolguları 20 piksel olarak ayarlar.
mx-20: Yatay marjı (margin) belirtir ve sağ ve sol marjları 20 piksel olarak ayarlar.
md:flex-1: Orta boy ekranda genişliği esnek hale getirir.
w-[80%]: Genişliği yüzde 80 olarak ayarlar.
h-[80%]: Yüksekliği yüzde 80 olarak ayarlar.
md:text-start: Metni sola hizalar.
text-primary: Metin rengini belirler, "primary" genellikle birincil metin rengini temsil eder.
font-bold: Kalın yazı tipini belirtir.
underline: Metnin altını çizer.
underline-offset-1: Alt çizginin konumunu belirtir, genellikle alt çizgiyi biraz yukarı kaydırır.
my-4: Dikey boşluk (margin) belirtir ve üst ve alt boşlukları 4 piksel olarak ayarlar.
text-xl: Metin boyutunu belirtir, genellikle büyük başlıklar için kullanılır.
text-sm: Metin boyutunu belirtir, genellikle küçük yazılar için kullanılır.
font-medium: Metnin orta kalınlıkta yazı tipini belirtir.
w-8, w-12, w-16: Genişliği belirli piksel değerlerine ayarlar.
h-8, h-12, h-16: Yüksekliği belirli piksel değerlerine ayarlar.
accent-primary: Betiğinizi benimseyen bir çerçevenin rengini belirtir.
btn-primary: Butonun biçimini ve rengini belirtir, "primary" genellikle birincil buton rengini temsil eder.
relative: Göreceli konumlandırmayı belirtir, öğeyi normal akış içinde tutar ve mutlaka bir pozisyonlandırma değeri belirlenmiş olan bir üst öğeye göre konumlandırır.
absolute: Mutlak konumlandırmayı belirtir, öğeyi normal akıştan kaldırır ve en yakın konumlandırılmış üst öğeye göre konumlandırır.
top-0, left-0, -right-6: Konumlandırma için pozisyon değerlerini belirtir, öğeyi üstte, solda veya sağdan belirli bir mesafede konumlandırır.
inline-block: Öğeyi içerik akışı içinde bir blok olarak görüntüler, ancak blok elemanlar gibi yan yana hizalanır.
absolute top-0 -right-6: Öğenin konumunu belirlerken üst ve sağ kenarlardan belirli bir mesafe bırakır.
mt-48: Üst marjı (margin) belirler ve yukarı doğru 48 piksel hareket ettirir.
checkbox: Bir onay kutusunu (checkbox) stilini belirtir.
font-semibold: Metnin yarı-kalın yazı tipini belirtir.
gap-x-1: Öğeler arasında yatay eksende 1 piksel boşluk bırakır.
rounded-full: Öğenin kenarlarını yuvarlatır ve bir daire oluşturur.


className: React bileşenlerine stil uygulamak için kullanılan özelliktir. HTML'deki "class" özelliğine karşılık gelir.

w-full: Öğenin genişliğini tam ekran genişliğine ayarlar. Bu, genellikle Bootstrap gibi çerçevelerde sıklıkla kullanılan bir sınıftır. "w" kelimesi "width" (genişlik) anlamına gelir, "full" ise "tam" anlamına gelir.

label: HTML'de bir form öğesinin açıklamasını temsil eder. Kullanıcıya giriş alanının ne için olduğunu belirtir.

input: Kullanıcıdan veri almak için kullanılan HTML form öğesidir. Bu durumda, "text" türünde bir giriş alanı oluşturuluyor.

border: Bir öğenin kenarlık rengini ve kalınlığını ayarlar.

border-primary: "border" sınıfına eklenen bir sınıf. Muhtemelen "primary" tema rengini temsil ediyor olabilir. "Primary" genellikle ana renk temasını ifade eder.

outline-none: Bir öğenin odaklandığında etrafındaki varsayılan dış çizgiyi kaldırır.

px-4: Yatay (x ekseni) dolguyu ayarlar. 4 piksel değerinde bir dolgu ekler.

peer: Kardeş bileşenler arasında bir ilişki belirtir. Bu, CSS ile ilgili değil, muhtemelen Tailwind CSS'in özel bir özelliğidir.

pt-2: Dikey (y ekseni) boşluğu belirler. 2 piksel yüksekliğinde bir boşluk ekler.

absolute: Öğenin konumunu ayarlar. Mutlak konumlandırma, öğeyi içeren ilk "pozisyon: relative" olan üst öğeye göre konumlandırır.

top-0, left-0: Mutlak konumlandırılmış öğenin üst ve sol kenarlarını, içeriği içeren öğenin üst sol köşesine hizalar.

text-sm: Metin boyutunu küçültür. "sm" muhtemelen "small" (küçük) anlamına gelir.

flex: Öğeyi esnek bir kutuya dönüştürür. Flexbox düzeni için kullanılır.

items-center: Esnek kutunun içeriğini dikey olarak ortalar.

peer-focus:h-7: Kardeş bileşen odaklandığında, bu sınıfın yüksekliğini 7 piksel olarak ayarlar.

peer-focus:text-xs: Kardeş bileşen odaklandığında, bu sınıfın metin boyutunu küçültür. "xs" muhtemelen "extra small" (çok küçük) anlamına gelir.

peer-valid:h-7: Kardeş bileşen geçerli olduğunda, bu sınıfın yüksekliğini 7 piksel olarak ayarlar.

peer-valid:text-xs: Kardeş bileşen geçerli olduğunda, bu sınıfın metin boyutunu küçültür.

transition-all: Bir öğenin tüm özelliklerinde animasyon geçişini etkinleştirir. Özellikle, boyut ve konum gibi özelliklerdeki değişikliklerin animasyonlu olarak olmasını sağlar.


w-full: Bu CSS sınıfı, bir öğenin (div, input gibi) genişliğini, içinde bulunduğu kapsayıcının genişliği kadar genişletir. "w" öneki, "width" yani genişlik anlamına gelir, "full" ise tam genişlik anlamına gelir.

relative: Bu sınıf, bir öğenin konumunu, içinde bulunduğu kapsayıcıya göre ayarlar. Yani, bu öğenin pozisyonu, içinde bulunduğu diğer öğelere göre belirlenir.

block: Bu sınıf, bir öğeyi blok seviyesi olarak biçimlendirir. Blok seviyesi öğeler, kendilerinden önce ve sonra bir satır boşluk bırakır ve genellikle bir kapsayıcı içinde tam genişlik kaplar.

cursor-text: Bu sınıf, fare imlecinin üzerine gelindiğinde imlecin şeklini metin düzenleme imleci olarak değiştirir. Kullanıcılar bu imleci gördüklerinde, ilgili öğenin metin girişi yapılabilir olduğunu anlarlar.

peer: Bu sınıf, genellikle "focus" ve "valid" durumlarında kullanılan bir kapsayıcıdır. Bir elementin durumuna bağlı olarak (örneğin, odaklandığında veya geçerli olduğunda) diğer elementlerin görünümünü veya davranışını değiştirmek için kullanılır.

peer-focus: Bu sınıf, bir öğe odaklandığında (örneğin, bir input alanı) diğer öğelerin (peer öğelerinin) görünümünü veya davranışını değiştirmek için kullanılır.

peer-valid: Bu sınıf, bir öğenin geçerli olduğunda (genellikle bir form alanının geçerli bir değere sahip olduğunda) diğer öğelerin (peer öğelerinin) görünümünü veya davranışını değiştirmek için kullanılır.

transition-all: Bu sınıf, bir öğenin belirli bir özelliğindeki (örneğin, genişlik, yükseklik, arka plan rengi vb.) değişikliklerde yumuşak bir geçiş sağlar. "transition-all", tüm özelliklerdeki değişiklikleri kapsar ve her biri için geçiş efekti uygular.

Bu sınıfların her biri, görünümünü ve davranışını şekillendirmek için kullanılan CSS özelliklerini tanımlar. Bu kod örneği, bir giriş alanını içeren bir React bileşeni oluşturur ve bu bileşenin görünümünü belirlemek için CSS sınıflarını kullanır.

h-[5.5rem], bg-transparent, bg-secondary: Bu sınıflar, yükseklik (height) ve arka plan (background) renklerini belirtir. [5.5rem] 'rem' (kök em) bir uzunluk birimidir ve kök font boyutuna göre belirlenir. bg-transparent ve bg-secondary, arka plan rengini belirler.

container, mx-auto: container sınıfı, içeriğin maksimum genişliğini belirlerken, mx-auto içeriği yatay olarak ortalar.

text-white, text-black: Yazı rengini belirler.

flex, justify-between, items-center: Bu sınıflar, içerik elemanlarını esnek bir yapıda hizalamak ve aralarındaki boşlukları ayarlamak için kullanılır. justify-between, içerik elemanlarını genişliğe göre eşit aralıklarla sağa ve sola doğru hizalar. items-center, içerik elemanlarını dikey olarak hizalar.

uppercase: Yazıları büyük harfe dönüştürür.

hover:text-primary: Fare üzerine geldiğinde metin rengini değiştirir.

sm:hidden, md:inline-block: Ekran boyutlarına duyarlılık ekler. sm küçük ekranlar için, md orta boy ekranlar için kullanılır.

btn-primary: Butonun biçimini ve rengini belirler.

bg-secondary: Arka plan rengini belirler. "secondary" genellikle ikincil bir arka plan rengini temsil eder. Ancak, tam rengini belirlemek için daha fazla bilgiye ihtiyacımız var.

rounded-3xl, rounded-bl-[46px], rounded-tl-2xl, rounded-tr-2xl: Bu sınıflar, elemanın kenarlarını yuvarlar. rounded-3xl, genel köşeleri büyük ölçüde yuvarlar; diğer sınıflar ise belirli köşeleri belirli ölçülerde yuvarlar.

bg-[#f1f2f3]: Arka plan rengini belirtir. Burada, #f1f2f3 kodu bir renk kodunu ifade eder. Ancak, tam rengini belirlemek için daha fazla bilgiye ihtiyacımız var.

h-[210px]: Yüksekliği belirtir. Burada elemanın yüksekliği 210 piksel olarak ayarlanmıştır.

grid, place-content-center: Bu sınıflar, içeriği ortalayarak bir ızgara düzeni oluşturur.

relative: Konumlandırmayı belirtir. "relative" konumu, elemanın normal akış içinde konumlanacağını belirtir, ancak mutlaka kendi içinde veya dışında bir elemanın konumuna göre konumlanabilir.

hover:scale-110, transition-all: Fare elemanın üzerine geldiğinde ve eleman üzerine tıklandığında bir animasyon efekti uygular.

p-[25px]: Dolguyu (padding) belirtir. Burada, içeriğin etrafındaki dolgu 25 piksel olarak ayarlanmıştır.

text-xl, text-[15px]: Metin boyutunu belirtir. text-xl, metni "xl" boyutunda (ekstra büyük) yapar; text-[15px], metni 15 piksel boyutunda yapar.

font-semibold: Metnin kalınlığını belirtir. "font-semibold", metni kalınlaştırır.

justify-between, items-center: Bu sınıflar, içeriği yatay olarak hizalamak ve içeriği dikey olarak hizalamak için kullanılır. justify-between, içeriği yatay olarak eşit aralıklarla hizalar; items-center, içeriği dikey olarak ortalar.

btn-primary, !w-10, !h-10, !rounded-full, !p-0: Butonun stiline ve boyutuna ilişkin sınıfları belirtir.

container, mx-auto, mb-16: Bu sınıflar, içeriği sınırlayan bir konteyner oluşturur ve içeriği yatay olarak ortalar. mb-16, bileşenin alt kenarından 16 piksel boşluk bırakır.

flex, flex-col, items-center: Bu sınıflar, içeriği düzenlemek için esnek bir yapı oluşturur. flex-col, içeriği dikey olarak hizalar; items-center, içeriği dikey olarak ortalar.

text-[40px]: Metin boyutunu belirtir. Metin boyutu burada 40 piksel olarak ayarlanmıştır.

mt-10, mt-8: Üst boşluk (margin-top) belirler. mt-10, 10 piksel; mt-8, 8 piksel üst boşluk bırakır.

px-6, py-2, bg-secondary, text-white, rounded-3xl: Bu sınıflar, butonun biçimini ve rengini belirtir. px-6, yatay dolguyu 6 piksel olarak ayarlar; py-2, dikey dolguyu 2 piksel olarak ayarlar. bg-secondary, arka plan rengini belirtir; text-white, metin rengini beyaz olarak belirtir. rounded-3xl, butonun kenarlarını yuvarlar.

grid, md:grid-cols-3, sm:grid-cols-2, grid-cols-1, gap-4: Bu sınıflar, içeriği bir ızgara düzeninde düzenler. md:grid-cols-3, orta boy ekranlarda 3 sütun oluşturur; sm:grid-cols-2, küçük ekranlarda 2 sütun oluşturur; grid-cols-1, küçük ekranlarda 1 sütun oluşturur. gap-4, hücreler arasında 4 piksellik boşluk bırakır.

bg-secondary: Arka plan rengini belirler. "secondary" genellikle ikincil bir arka plan rengini temsil eder. Ancak, tam rengini belirlemek için daha fazla bilgiye ihtiyacımız var.

py-14: Dikey dolguyu (padding) belirtir. Burada, üst ve alt dolgular 14 piksel olarak ayarlanmıştır.

container, mx-auto, flex, items-center, gap-20, flex-wrap, md:flex-nowrap: Bu sınıflar, içeriği düzenlemek ve hizalamak için kullanılır. container, içeriği bir konteyner içine alır ve içeriği yatay olarak ortalar. mx-auto, içeriği yatay olarak ortalar. flex, içeriği bir esnek kutu içine yerleştirir ve içeriği yatay olarak hizalar. items-center, içeriği dikey olarak ortalar. gap-20, içerik elemanları arasında 20 piksellik boşluk bırakır. flex-wrap, içeriği sarma noktasına kadar sardırır; bu, içerik elemanları ekranın daraltılmasıyla birlikte sıralanırken bir sonraki satıra geçmesini sağlar. md:flex-nowrap, orta boy ekranlarda (md ve üzeri) blokların yan yana gelmesini sağlar, ancak küçük ekranlarda (md altı) alt alta gelmesini sağlar.

md:w-1/2: Orta boy ekranlarda (md ve üzeri) genişlik belirler. Burada, elemanın yarısı kadar genişlikte olduğu belirtilir.

relative: Konumlandırmayı belirtir. "relative" konumu, elemanın normal akış içinde konumlanacağını belirtir, ancak mutlaka kendi içinde veya dışında bir elemanın konumuna göre konumlanabilir.

sm-w-[445px], sm-h-[600px], w-[300px], h-[450px]: Genişlik ve yükseklik değerlerini belirtir. Bu sınıflar, görüntünün boyutunu ayarlar.

my-5: Dikey boşluk (margin-top ve margin-bottom) belirtir. Burada, üst ve alt boşluklar 5 piksel olarak ayarlanmıştır.

text-[40px]: Metin boyutunu belirtir. Metin boyutu burada 40 piksel olarak ayarlanmıştır.

btn-primary: Butonun biçimini ve rengini belirtir. "primary" genellikle birincil buton rengini temsil eder.


bg-secondary: Arka plan rengini belirler. "secondary" genellikle ikincil bir arka plan rengini temsil eder. Ancak, tam rengini belirlemek için daha fazla bilgiye ihtiyacımız var.

flex-1: Esnek bir yapı oluşturur ve bileşeni diğer bileşenlerle aynı düzeyde genişletir.

rounded-md: Kenarları yuvarlar. "md" boyutunda yuvarlama yapar.

py-5, px-[15px]: Dikey ve yatay dolguyu (padding) belirtir. py-5, dikey dolguyu 5 birim olarak ayarlar; px-[15px], yatay dolguyu 15 piksel olarak ayarlar.

flex, items-center, gap-x-4: Bu sınıflar, içeriği düzenlemek ve hizalamak için kullanılır. flex, içeriği bir esnek kutu içine yerleştirir; items-center, içeriği dikey olarak ortalar; gap-x-4, içerik elemanları arasında yatay yönde 4 piksellik boşluk bırakır.

relative: Konumlandırmayı belirtir. "relative" konumu, elemanın normal akış içinde konumlanacağını belirtir, ancak mutlaka kendi içinde veya dışında bir elemanın konumuna göre konumlanabilir.

md:w-44, md:h-44, w-36, h-36: Genişlik ve yükseklik değerlerini belirtir. Bu sınıflar, elemanın genişlik ve yüksekliğini belirler.

border-[5px], border-primary, rounded-full, overflow-hidden: Bu sınıflar, kenarlık ve taşma davranışını belirtir. border-[5px], kenarlık kalınlığını 5 piksel olarak ayarlar; border-primary, kenarlık rengini belirtir; rounded-full, elemanın kenarlarını yuvarlar; overflow-hidden, taşma durumunda içeriği gizler.

after:content-['']: Boş bir içerik ekler. Bu sınıf, yalnızca belirli bir pseudoelemanın içeriğini belirlemek için kullanılır.

hover:scale-105, transition-all: Fare elemanın üzerine geldiğinde ve eleman üzerine tıklandığında bir animasyon efekti uygular.

font-dancing, text-2xl, text-[40px], text-sm, ml-1: Metnin biçimini ve boyutunu belirtir. font-dancing, belirli bir yazı tipini belirtir; text-2xl, metni "2xl" boyutunda (çok büyük) yapar; text-[40px], metni 40 piksel boyutunda yapar; text-sm, metni küçük boyutta yapar; ml-1, sol kenardan 1 birimlik boşluk bırakır.

btn-primary: Butonun biçimini ve rengini belirtir. "primary" genellikle birincil buton rengini temsil eder.


h-screen: Yükseklik (height) belirtir ve ekranın tamamını kaplayacak şekilde ayarlanır.

w-full, container, mx-auto: Bu sınıflar, içeriği yatay olarak genişleterek sayfanın tamamını kaplayacak şekilde ayarlar.

-mt-[88px]: Üst boşluk (margin-top) belirtir ve içeriği 88 piksel yukarı taşır.

absolute, top-0, left-0: Mutlak pozisyonu belirtir ve içeriği en üstte ve en solda konumlandırır.

relative: Konumlandırmayı belirtir. "relative" konumu, elemanın normal akış içinde konumlanacağını belirtir, ancak mutlaka kendi içinde veya dışında bir elemanın konumuna göre konumlanabilir.

objectFit="cover": İçeriği nesne boyutuna sığacak şekilde boyutlandırırken, orijinal oranları koruyarak keser.

text-white: Metin rengini beyaz olarak belirtir.

flex, flex-col, items-start, gap-y-10: Bu sınıflar, içeriği düzenlemek için bir esnek yapı oluşturur ve içeriği dikey olarak hizalar. items-start, içeriği dikey olarak en üstte hizalar. gap-y-10, dikey eksende 10 piksellik boşluk bırakır.

btn-primary: Butonun biçimini ve rengini belirtir. "primary" genellikle birincil buton rengini temsil eder.

Image: Pizza görselini içerir. Pizza'nın görseli, sayfanın sol tarafında büyük bir kutunun içinde görüntülenir.

Title: Başlık bileşeni, pizza türünü belirtir. Genellikle büyük ve dikkat çekici bir başlık olarak kullanılır.

span: Pizza fiyatını belirtir. Genellikle ürünün fiyatıyla ilişkilendirilir ve kullanıcıların fiyatı görmesini sağlar.

p: Pizza'nın açıklamasını içerir. Genellikle ürünün içeriği, özellikleri veya yapılışı hakkında bilgi içerir.

Boyut seçimi: Pizza'nın boyutunu belirlemek için kullanılan bir seçenek. Küçük, orta ve büyük boyutlar arasında seçim yapılabilir. Her bir boyutun yanında bir görsel ve boyutun adını belirten bir metin bulunur.

İlave seçenekler: Pizza'ya ilave edilebilecek ekstra malzemelerin seçimini içerir. Kullanıcılar, istedikleri ek malzemeleri işaretleyebilirler.

button: "Sepete Ekle" butonu, kullanıcının seçtiği pizzayı sepete eklemesini sağlar. Genellikle vurgulu bir renge ve dikkat çekici bir şekle sahiptir.

