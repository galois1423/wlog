var titles = []
var tags = []
var codes = []

var subject = {
    fundamental:{
        set_theory:[],
        number_system:[],
        etc:[]
    },
    algebra:{
        equality:[],
        inequality:[],
        polynomial:[],
        etc:[]
    },
    geometry:{
        Euclidian_geometry:[],
        coordinate_plane:[],
        etc:[]
    },
    combinatorics:[],
    etc:[]
}

const add = (title, tag, code) => {
    titles.push(title)
    tags.push(tag)
    codes.push(code)
    var s=''
    for(var i=0;i<tag.length;i++){
        s += '.'+tag[i]
    }
    subject.fundamental.number_system.push('001')
    //(new Function('return subject'+s+'.push('+code+')'))()
}

//contents data
add('자연수에 관한 고찰',['fundamental','number_system'],'001')
console.log(subject)

export{titles, tags, codes,subject}