let repGit = new XMLHttpRequest() 

repGit.open("GET", "https://api.github.com/users/GabrielOAzevedo/repos", false)

repGit.onreadystatechange = function () {
    if(this.readyState == 4 && this.status == 200) {
        const repositorio = JSON.parse(this.responseText)
    for (let i = 0; i < repositorio.length; i++) {
        document.getElementById("tabela").innerHTML += "<tr><td> Nome:" + repositorio[i].full_name + "</td><td> Linguagem:" + repositorio[i].language + "</td><td>" + repositorio[i].html_url + "</td></tr>"
   

    }
}
}

repGit.send()


console.log(repGit)