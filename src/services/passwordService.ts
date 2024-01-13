export default function generatePass(characters:string='Aa@#123456789abcdefghijFGHIJKLMNOP!'){
    let password: string = ''
    
    let specialCharacters:string ='1234567890!@#%$&'
    let passwordLength = 8

  
    while(characters.length < passwordLength){
        characters += specialCharacters.charAt(
            Math.floor(Math.random() * specialCharacters.length)
        )
    }

    for(let i = 0; i < passwordLength; i++){
        let num = Math.floor(Math.random() * characters.length)
        password += characters.charAt(
            num
        )
        characters = characters.substring(0,num)+characters.substring(num+1)

    }
    return password
}