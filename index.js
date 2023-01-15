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

        for(var j=0; j<tags[codes.indexOf(c[i])].length; j++){
            var t = document.createElement('a')
            t.setAttribute('class', 'taglink')
            t.innerHTML = '#'+tags[codes.indexOf(c[i])][j]
            ts.appendChild(t)
        }

        p.appendChild(ts)



        l.appendChild(p)
    }
}


show(codes)