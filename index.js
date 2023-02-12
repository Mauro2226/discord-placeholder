/**
 * 
 * @param {string} string - The string to resolve
 * @param {object} placeHolder - The object containing the placeholders
 * @returns {stringResolved} - The string with placeholders applied
 */
exports.placeHolder = function(string,placeHolder){
    let stringResolved = string
    Object.entries(placeHolder).forEach(element => {
        const [key, value] = element;
        let result
        if(string.includes(key)){
            if(key.startsWith("@")){
                result = stringResolved.replace(key,"<@"+value+">")
                stringResolved = result
            }else if(key.startsWith("#")){
                result = stringResolved.replace(key,"<#"+value+">")
                stringResolved = result
            }else if(key.startsWith("&")){
                result = stringResolved.replace(key,"<@&"+value+">")
                stringResolved = result
            }else{
                result = stringResolved.replace(key,value)
                stringResolved = result
            }
        }
    })
    return stringResolved
}