var u=new URL(location.href)
        
const left = () =>{
    location.href='./post.html?code='+(Number(u.searchParams.get('code'))-1).toString().padStart(3,'0')
}
        
const right = () =>{
    location.href='./post.html?code='+(Number(u.searchParams.get('code'))+1).toString().padStart(3,'0')
}