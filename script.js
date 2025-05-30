document.addEventListener('DOMContentLoaded', function () {
  const viewer = document.getElementById('pdfViewer');

  // Tải mặc định là home.html
  viewer.src = 'home.html';

  document.querySelectorAll('a[data-src]').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const src = this.getAttribute('data-src');
      viewer.src = src;
    });
  });
});
