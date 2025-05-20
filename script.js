document.querySelectorAll('a[data-src]').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const pdfPath = this.getAttribute('data-src');
      const viewer = document.getElementById('pdfViewer');
      viewer.src = pdfPath;
    });
  });