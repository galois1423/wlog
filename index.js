import {titles, tags, codes} from './index_data.js'

const show = c => {
    var l = document.getElementById('list')
    for(var i=0; i<c.length;i++){
        var p = document.createElement("div")
        p.setAttribute("class", "post")

        var a = document.createElement("a")
        a.innerHTML = titles[codes.indexOf(c[i])]
        a.setAttribute("href", './post.html?code='+c[i])
        a.setAttribute('class','postlink')
        p.appendChild(a)

        var ts = document.createElement("div")
        ts.setAttribute("class","ts")

        var t = document.createElement('a')
        t.setAttribute('class', 'taglink')
        t.setAttribute('href','/wlog/search?tag='+tags[codes.indexOf(c[i])][0])
        t.innerHTML = tags[codes.indexOf(c[i])][0]
        ts.appendChild(t)

        for(var j=1; j<tags[codes.indexOf(c[i])].length; j++){
            var t = document.createElement('a')
            t.setAttribute('class', 'taglink')
            t.setAttribute('href','/wlog/search?tag='+tags[codes.indexOf(c[i])][j])
            t.innerHTML = '> '+tags[codes.indexOf(c[i])][j]
            ts.appendChild(t)
        }

        p.appendChild(ts)



        l.appendChild(p)
    }
}

const search = () => {
    if(document.getElementById('searchtext1').value.length!=0){
        location.href = '/wlog/search?q='+document.getElementById('searchtext1').value
    }
}

show(codes)