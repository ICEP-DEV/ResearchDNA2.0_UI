exports.saveDocument = function saveDocument() {

    // save the document as PDF
    TXTextControl.saveDocument(TXTextControl.StreamType.AdobePDF, function(e) {
        bDocument = e.data;
        // create temporary link to download document
        var element = document.createElement('a');
        element.setAttribute('href', 'data:application/octet-stream;base64,' + bDocument);
        element.setAttribute('download', "results.pdf");

        element.style.display = 'none';
        document.body.appendChild(element);

        // simulate click
        element.click();

        // remove the link
        document.body.removeChild(element);
    });

}