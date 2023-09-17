let btn1 = document.getElementById('egito')
let btn2 = document.getElementById('grego')
let btn3 = document.getElementById('mongol')
let btn4 = document.getElementById('roma')
let btn5 = document.getElementById('nordico')
let img = document.querySelector('#fundo')
let info = document.querySelector('#info')

btn1.addEventListener('click', function(){
    img.innerHTML = '<img id="perso" src="img/anubis.jpg">'
    let i = document.getElementById('perso')
    i.classList.add('personalizacao')
    info.innerHTML = '<img src="img/isis.png"> <br>'
    info.innerHTML += 'O Antigo Império tinha como limites o Mar Mediterrâneo ao norte, o deserto da Líbia a oeste, o deserto da Arábia a leste e a primeira catarata do rio Nilo ao sul. Sua história é marcada por faraós que conquistaram grandes poderes religiosos, militares e administrativos. A Mitologia egípcia é a coleção dos mitos do antigo Egito, que descreve as ações e relações dos deuses egípcios como uma forma de compreender o cosmos.'
    info.classList.add('legenda')
    
})

btn2.addEventListener('click', function(){
    img.innerHTML = '<img id="perso" src="img/spart.jpg">'
    let i = document.getElementById('perso')
    i.classList.add('personalizacao')
    info.innerHTML = '<img src="img/grecia.png"> <br>'
    info.innerHTML += 'A Grécia Antiga foi uma civilização pertencente ao período da Antiguidade Clássica que compreendeu desde o Período Pré-Homérico terminando com o início da Idade Média. A Grécia Antiga era composta por um conjunto de cidades que partilhavam a língua, os costumes e algumas leis. Esparta era uma cidade militarizada, com rígida disciplina social e que usava da força para controlar o grupo dos hilotas, os escravos que trabalhavam nas terras dos esparciatas.'
    info.classList.add('legenda')
    
})

btn3.addEventListener('click', function(){
    img.innerHTML = '<img id="perso" src="img/gengiskhan.jpg">'
    let i = document.getElementById('perso')
    i.classList.add('personalizacao')
    info.innerHTML = '<img src="img/mongoz.png"> <br>'
    info.innerHTML += 'O Império Mongol é considerado um dos maiores da história em extensão contínua de terras: chegou a abranger desde a fronteira oeste da Alemanha até a Península Coreana, e desde o Oceano Ártico até a Turquia e o Golfo Pérsico, dominando cerca de um terço da população total do planeta na época. Gengis Khan (1162-1227) foi um imperador mongol que unificou um povo nômade que estava dividido em dezenas de tribos e clãs. Conquistou um vasto e poderoso império mongol.'
    info.classList.add('legenda')
    
})

btn4.addEventListener('click', function(){
    img.innerHTML = '<img id="perso" src="img/gladiador.avif">'
    let i = document.getElementById('perso')
    i.classList.add('personalizacao')
    info.innerHTML = '<img src="img/romano.png"> <br>'
    info.innerHTML += 'O Império Romano foi o período pós-republicano da antiga civilização romana, caracterizado por uma forma de governo autocrática liderada por um imperador e por extensas possessões territoriais em volta do mar Mediterrâneo na Europa, África e Ásia. Caio Júlio César foi um patrício, líder militar e político romano. Desempenhou um papel crítico na transformação da República Romana no Império Romano.'
    info.classList.add('legenda')
    
})

btn5.addEventListener('click', function(){
    img.innerHTML = '<img id="perso" src="img/bjorn.jpg">'
    let i = document.getElementById('perso')
    i.classList.add('personalizacao')
    info.innerHTML = '<img src="img/bussola.png"> <br>'
    info.innerHTML += 'O povo viking vivia em amplas áreas do norte da Europa e em ilhas do Atlântico Norte, lugares que hoje correspondem aos países escandinavos: Suécia, Dinamarca e Noruega, mas se espalharam por toda a Europa. <br> O viking mais famoso de todos os tempos é provavelmente Ragnar Lodbrok, uma figura semi-lendária que viveu no século IX. Ragnar foi dito ser um descendente do deus Odin, e era famoso por sua coragem, astúcia e ferocidade na batalha.'
    info.classList.add('legenda')
    
})
