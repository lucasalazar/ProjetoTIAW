var saveLinkVerified = function () {
    let link = document.getElementById('link').value
    let status = document.getElementById('status').value

    let sites = localStorage.getItem('sites')
    if (sites) {

        sitesMap = []
        let a = JSON.parse(sites)
        for (const i of a) {
            sitesMap.push({
                site: i.site,
                avaliacao: i.avaliacao
            })
        }

        let sites_arr = []

        for (const i of sitesMap) {
            const {
                site
            } = i

            sites_arr.push(site)
        }

        if (sites_arr.indexOf(link) != -1) {
            window.location.href = "./encontrada.html?link=" + link;
            alert('O site já está cadastrado.')
        } else {

            sitesMap.push({
                site: link,
                avaliacao: status
            })
            localStorage.setItem('sites', JSON.stringify(sitesMap))

            alert('O site foi cadastrado com sucesso.')
            window.location.href = "./encontrada.html?link=" + link;
        }

    } else {
        sitesMap = []

        sitesMap.push({
            site: link,
            avaliacao: status
        })
        localStorage.setItem('sites', JSON.stringify(sitesMap))

        alert('O site foi cadastrado com sucesso.')
        window.location.href = "./encontrada.html?link=" + link;
    }
}
let sitesMap = []

function verificar() {
    let link = document.getElementById("inputLink1").value || null
    if (link) {
        let sites = localStorage.getItem('sites')
        if (sites) {

            sitesMap = []
            let a = JSON.parse(sites)
            for (const i of a) {
                sitesMap.push({
                    site: i.site,
                    avaliacao: i.avaliacao
                })
            }

            let sites_arr = []

            for (const i of sitesMap) {
                const {
                    site
                } = i

                sites_arr.push(site)
            }

            if (sites_arr.indexOf(link) != -1) {
                window.location.href = "./encontrada.html?link=" + link;
                alert('O site foi encontrado.')
            } else {
                window.location.href = "./registrar.html";
                alert('O site não foi encontrado.')
            }

            // console.log(sites);
            // sitesMap = []
            // let a = JSON.parse(sites)
            // for (const i of a) {
            //     sitesMap.push({site: i.site})
        }
        // sitesMap.push({site: link})
        // localStorage.setItem('sites', JSON.stringify(sitesMap))
        else {
            window.location.href = "./registrar.html";
            // sitesMap.push({
            //     site: link
            // })
            // localStorage.setItem('sites', JSON.stringify(sitesMap))
        }
        // console.log(sites);
    } else {
        alert('Você deve preencher o campo de verificação.')
    }
}

function confiavel() {
    const params = new URLSearchParams(window.location.search)
    let link = params.get('link')

    let sites = localStorage.getItem('sites')
    if (sites) {

        sitesMap = []
        let a = JSON.parse(sites) // [{site: link, avaliacao: 1}, {site: link, avaliacao: 1}]
        for (const i of a) {
            sitesMap.push({
                site: i.site,
                avaliacao: i.avaliacao
            })
        }

        let sites_arr = []
        let avaliacao_arr = []

        for (const i of sitesMap) {
            const {
                site,
                avaliacao
            } = i

            sites_arr.push(site)
            avaliacao_arr.push(avaliacao)
        }

        if (sites_arr.indexOf(link) != -1) {

            let avaliacao1 = parseInt(avaliacao_arr[sites_arr.indexOf(link)])
            let new_avaliacao = avaliacao1 + 1
            let sitesMap1 = []
            for (const i of sitesMap) {
                let {
                    site,
                    avaliacao
                } = i

                if (site == link) {
                    avaliacao = new_avaliacao
                }

                sitesMap1.push({
                    site: link,
                    avaliacao: avaliacao
                })
            }
            localStorage.setItem('sites', JSON.stringify(sitesMap1))

            window.location.href = "./encontrada.html?link=" + link;
            alert('Votação computada.')
        } else {
            alert('O site não foi encontrado.')
            // window.location.href = "./registrar.html";
        }

        // console.log(sites);
        // sitesMap = []
        // let a = JSON.parse(sites)
        // for (const i of a) {
        //     sitesMap.push({site: i.site})
    }
}

function inconfiavel() {
    const params = new URLSearchParams(window.location.search)
    let link = params.get('link')

    let sites = localStorage.getItem('sites')
    if (sites) {

        sitesMap = []
        let a = JSON.parse(sites) // [{site: link, avaliacao: 1}, {site: link, avaliacao: 1}]
        for (const i of a) {
            sitesMap.push({
                site: i.site,
                avaliacao: i.avaliacao
            })
        }

        let sites_arr = []
        let avaliacao_arr = []

        for (const i of sitesMap) {
            const {
                site,
                avaliacao
            } = i

            sites_arr.push(site)
            avaliacao_arr.push(avaliacao)
        }

        if (sites_arr.indexOf(link) != -1) {

            let avaliacao1 = parseInt(avaliacao_arr[sites_arr.indexOf(link)])
            let new_avaliacao = avaliacao1 - 1
            let sitesMap1 = []
            for (const i of sitesMap) {
                let {
                    site,
                    avaliacao
                } = i

                if (site == link) {
                    avaliacao = new_avaliacao
                }

                sitesMap1.push({
                    site: link,
                    avaliacao: avaliacao
                })
            }
            localStorage.setItem('sites', JSON.stringify(sitesMap1))

            window.location.href = "./encontrada.html?link=" + link;
            alert('Votação computada.')
        } else {
            alert('O site não foi encontrado.')
            // window.location.href = "./registrar.html";
        }

        // console.log(sites);
        // sitesMap = []
        // let a = JSON.parse(sites)
        // for (const i of a) {
        //     sitesMap.push({site: i.site})
    }
}