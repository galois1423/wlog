import {titles,tags,codes,subject} from './data.js'

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

var u = new URL(location.href)

const suggest1 = () =>{
    var code = u.searchParams.get('code')
    var tag = tags[codes.indexOf(code)]
    if(tag.length==1){return subject[tag[0]]}
    if(tag.length==2){return subject[tag[0]][tag[1]]}
}
    
const suggest = () =>{
    if(u.search.length==0){
        return codes
    } else{
        if(u.searchParams.get('code')!=null){
            var s=suggest1()
            s.splice(s.indexOf(u.searchParams.get('code')),1)
            if(s.length==0){
                document.getElementById('suggest').innerHTML += ': 없음'
                return s
            }
            document.getElementById('suggest').innerHTML += ': '+s.length.toString()+'개'
            return s
        }
    }
}

show(suggest())