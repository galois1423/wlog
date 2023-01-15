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
    if(tag.length==1){subject[tag[0]].push(code)}
    if(tag.length==2){subject[tag[0]][tag[1]].push(code)}
}

//contents data
add('자연수에 관한 고찰',['fundamental','number_system'],'001')
console.log(subject)

export{titles, tags, codes,subject}