(function() {
    var inputEl = document.getElementById('qrInput');
    var sizeEl = document.getElementById('qrSize');
    var errorEl = document.getElementById('qrError');
    var generateBtn = document.getElementById('qrGenerate');
    var canvasEl = document.getElementById('qrCanvas');
    var downloadBtn = document.getElementById('qrDownload');
    var currentQR = null;
    var placeholderEl = document.getElementById('qrPlaceholder');

    var errorMap = { L: QRCode.CorrectLevel.L, M: QRCode.CorrectLevel.M, Q: QRCode.CorrectLevel.Q, H: QRCode.CorrectLevel.H };

    function generate() {
        if (!inputEl || !canvasEl) return;
        var text = inputEl.value.trim();
        if (!text) return;

        var size = parseInt(sizeEl ? sizeEl.value : 300);
        var level = errorEl ? errorEl.value : 'M';

        canvasEl.innerHTML = '';
        currentQR = new QRCode(canvasEl, {
            text: text,
            width: size,
            height: size,
            correctLevel: errorMap[level] || QRCode.CorrectLevel.M
        });

        if (placeholderEl) placeholderEl.style.display = 'none';
        if (downloadBtn) downloadBtn.style.display = 'block';
    }

    if (generateBtn) generateBtn.addEventListener('click', generate);

    if (downloadBtn) {
        downloadBtn.addEventListener('click', function() {
            var img = canvasEl.querySelector('img');
            var canvas = canvasEl.querySelector('canvas');
            var dataUrl;
            if (canvas) {
                dataUrl = canvas.toDataURL('image/png');
            } else if (img) {
                dataUrl = img.src;
            } else return;
            var a = document.createElement('a');
            a.href = dataUrl;
            a.download = 'qrcode.png';
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
        });
    }
})();
