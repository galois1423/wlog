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
var code = u.searchParams.get('code')
var tag = tags[codes.indexOf(code)]

const suggest1 = () =>{
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
            var ts = document.getElementsByClassName('ts')[0]
            for(var i=0;i<tag.length;i++){
                var t = document.createElement('a')
                t.setAttribute('class', 'taglink')
                t.setAttribute('href','/wlog/search?tag='+tags[codes.indexOf(code)][i])
                t.innerHTML = tags[codes.indexOf(code)][i]
            }
            ts.appendChild(t)
            if(s.length==0){
                document.getElementById('suggest').innerHTML += '이 없습니다.'
                return s
            }
            document.getElementById('suggest').innerHTML += ': '+s.length.toString()+'개'
            return s
        } else{
            var r=[]
            if(u.searchParams.get('tag')!=null){
                var t=u.searchParams.get('tag')
                for(var i=0;i<codes.length;i++){
                    if(tags[i].includes(t)){
                        r.push(codes[i])
                    }
                }
            } else{
                var t=u.searchParams.get('q')
                for(var i=0;i<codes.length;i++){
                    if(titles[i].includes(t)){
                        r.push(codes[i])
                    }
                }
            }
            if(r.length==0){
                document.getElementById('result').innerHTML='<span class="t">'+t+'</span>에 대한 검색결과가 없습니다.'
            } else{
                document.getElementById('result').innerHTML='<span class="t">'+t+'</span>에 대한 검색결과 : <span class="t">'+r.length.toString()+'</span>건'
            }
            return r
        }
    }
}

show(suggest())