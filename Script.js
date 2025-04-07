function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  
  document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Terima kasih sudah menghubungi Nisya 💌");
    this.reset();
  });
  