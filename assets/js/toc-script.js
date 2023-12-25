document.addEventListener('DOMContentLoaded', function() {
    console.log('==============================================');
    var tocContainer = document.getElementById('table-of-contents');
    var headers = document.querySelectorAll('h1, h2, h3, h4, h5, h6');

    if (tocContainer && headers.length > 0) {
        var toc = '<ul>';

        headers.forEach(function(header) {
            var level = parseInt(header.tagName.charAt(1));
            var anchor = header.textContent.replace(/\s+/g, '-').toLowerCase();
            header.setAttribute('id', anchor);

            toc += '<li><a href="#' + anchor + '">' + header.textContent + '</a></li>';
        });

        toc += '</ul>';
        tocContainer.innerHTML = toc;

        // Highlighting the current header in the TOC on scroll
        window.addEventListener('scroll', function() {
            var fromTop = window.scrollY;
            var headerList = Array.from(headers).map(function(header) {
                return {
                    header: header,
                    offsetTop: header.offsetTop,
                    id: header.getAttribute('id')
                };
            });

            for (var i = headerList.length - 1; i >= 0; i--) {
                if (fromTop > headerList[i].offsetTop - 10) {
                    tocContainer.querySelector('.current-header')?.classList.remove('current-header');
                    var currentId = headerList[i].id;
                    tocContainer.querySelector('a[href="#' + currentId + '"]').parentNode.classList.add('current-header');
                    break;
                }
            }
        });
    }
});
