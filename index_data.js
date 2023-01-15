var titles = []
var tags = []
var codes = []

var subject = {
    Fundamental:{
        Set_Theory:[],
        Number_System:[],
        etc:[]
    },
    Algebra:{
        Equality:[],
        Inequality:[],
        Polynomial:[],
        etc:[]
    },
    Geometry:{
        Euclidian_Geometry:[],
        Coordinate_Plane:[],
        etc:[]
    },
    Analysis:[],
    Number_Theory:[],
    Combinatorics:[],
    etc:[]
}

const add = (title, tag, code) => {
    titles.push(title)
    tags.push(tag)
    codes.push(code)
    if(tag.length==1){subject[tag[0]].push(code)}
    if(tag.length==2){subject[tag[0]][tag[1]].push(code)}
}


add('자연수에 관한 고찰',['Fundamental','Number_System'],'001')
add('등호의 성질',['Fundamental','etc'],'002')

export{titles, tags, codes,subject}