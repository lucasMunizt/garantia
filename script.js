document.getElementById('enviar').addEventListener("click", function() {
    const os = document.getElementById("os").value; 
    const nome = document.getElementById("nome").value; 
    const aparelho = document.getElementById("aparelho").value; 
    const pecas = document.getElementById("pecas").value; 
    const valor = document.getElementById("valor").value;
    const data = document.getElementById("data").value;

    // Verifica se jsPDF está carregado corretamente
    if (window.jspdf) {
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();

        doc.setFont("helvetica");
        doc.setFontSize(12);
       /* const imgUrl = './logo1.jpeg'
        const imgX = 10;
        const imgY = 10;
        const imgWidth = 50;
        const imgHeight = 50;
        doc.addImage(imgUrl, 'JPEG', imgX, imgY, imgWidth, imgHeight);*/
        // Define o texto em negrito
        doc.setFont("helvetica","bold");
        doc.text("CLV - ASSISTÊNCIA TÉCNICA EM ELETRODOMÉSTICOS", 10, 10);
        doc.text("TADEU BRITO TELES CNPJ:40.034.250/0001-67", 10, 20);
        doc.text("GARANTIA DO SERVIÇO - 90 DIAS A CONTAR A PARTIR DA ENTREGA", 10, 30);

        doc.text(`OS: ${os}`, 10, 50);
        doc.text(`CLIENTE - ${nome}`, 10, 60);
        doc.text(`APARELHO: ${aparelho}`, 10, 70);

        // Formata o texto das peças como lista
        doc.text("PEÇAS:", 10, 80);
        const pecasList = pecas.split('\n');
        let yOffset = 90;
        pecasList.forEach((peca, index) => {
            doc.text(`- ${peca}`, 10, yOffset + (index * 10));
        });

        doc.text(`VALOR R$: ${valor}`, 10, yOffset + pecasList.length * 10 + 10);
        doc.text(`DATA: ${data}`, 10, yOffset + pecasList.length * 10 + 20);

        // Salva o PDF com um nome específico
        doc.save(`${nome}`);
    } else {
        console.error('jsPDF não foi carregado corretamente.');
    }
});