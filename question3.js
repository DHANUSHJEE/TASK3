const url = 'https://restcountries.com/v3.1/all'

const xhr = new XMLHttpRequest();

xhr.open('GET',url)

xhr.send();

xhr.onload = () => {

    let data=JSON.parse(xhr.response)


    for(let i = 0 ; i< data.length ; i++){
    
        console.log(data[i].name)
    }

    for(let i = 0 ; i< data.length ; i++){
    
        console.log(data[i].region)
    }

    for(let i = 0 ; i< data.length ; i++){
    
        console.log(data[i].subregion)
    }
    for(let i = 0 ; i< data.length ; i++){
    
        console.log(data[i].population)
    }



    


}