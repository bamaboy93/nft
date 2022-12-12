const splide = new Splide(".splide", {
  type: "loop",
  drag: "free",
  focus: "center",
  autoWidth: true,
  gap: 30,
  arrows: false,
  paginations: false,
  perPage: 3,
  autoScroll: {
    speed: 1,
  },
});
splide.mount(window.splide.Extensions);
