const url = 'https://restcountries.com/v3.1/all'

const xhr = new XMLHttpRequest();

xhr.open('GET',url)

xhr.send();

xhr.onload = () => {

    let data=JSON.parse(xhr.response)

    console.log(data[0].flags.png)

    

    for(i=0;i<data.length;i++){
      
      console.log(data[i].flags.png)
      
    }
}