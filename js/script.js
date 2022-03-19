// get data json menggunakan jquery
$.getJSON("http://apicovid19indonesia-v2.vercel.app/api/indonesia", (data) => {
  let lastUpdate = data.lastUpdate;
  let positif = data.positif;
  let sembuh = data.sembuh;
  let meninggal = data.meninggal;

  // dom menggunakan queryselector jquery, untuk menampilkan data dari api
  $(".last-update").append(` ${lastUpdate}`);
  $(".data-positif").text(positif);
  $(".data-sembuh").text(sembuh);
  $(".data-meninggal").text(meninggal);
});

// get data json menggunakan jquery
$.getJSON("https://disease.sh/v3/covid-19/all", (data) => {
  let negara = data.affectedCountries;
  let terkonfirmasi = data.cases;
  let meninggalDunia = data.deaths;

  // dom menggunakan queryselector jquery, untuk menampilkan data dari api
  $(".data-negara").text(negara);
  $(".data-terkonfirmasi").text(terkonfirmasi);
  $(".data-meninggal-dunia").text(meninggalDunia);
});

// Setting owl carousel
$(".owl-carousel").owlCarousel({
  // setting one item center
  center: true,
  // auto play
  autoplay: true,
  // menjadi loop
  loop: true,
  // nav button false / tidak ditampilkan
  nav: false,
  // dots button false / tidak ditampilkan
  dots: true,
  // mengsetting responsive owl-carousel
  responsive: {
    // breakpoint dari 0 up
    0: {
      items: 1,
    },
    // breakpoint dari 600 up
    600: {
      items: 2,
    },
    // breakpoint dari 1000 up
    1000: {
      items: 2,
    },
  },
});
