const btn_imp = document.querySelector("#btn_imp")

btn_imp.addEventListener('click', ()=>{
    const conteudo = document.getElementById('tabela').innerHTML

    let estilo = "<style>"
    estilo += "table {width: 100%;font: 25px Calibri;}"
    estilo += "table, th, td {border: solid 2px #888; border-collapse: collapse;"
    estilo += "padding: 4px 8px; text-align: center;}"
    estilo += "</style>"

    const win = window.open('', '', 'height=700, width=700')

    win.document.write('<html><head>')
    win.document.write('<title>CFB Cursos</title>')
    win.document.write(estilo)
    win.document.write('</head><body>')
    win.document.write(conteudo)
    win.document.write('</body></html>')

    win.print()
})