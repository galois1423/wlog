window.search = () => {
    if(document.getElementById('searchtext1').value.length!=0){
        location.href = '/wlog/search?q='+document.getElementById('searchtext1').value
    }
}