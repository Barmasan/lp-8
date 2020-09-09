var c = new ClipboardJS('.copy-text');
c.on('success', function () { $('.copy-text').text('СКОПИРОВАНО!'); })