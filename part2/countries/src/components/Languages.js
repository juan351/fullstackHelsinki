import React from 'react'
import { nanoid } from 'nanoid'

const Languages = (languages) => {
    let languagesToShow = []
    for (let l in languages.lang){
        languagesToShow.push(languages.lang[l])
    }
    return languagesToShow.map(lang => {
        return (<li key={nanoid()}>{lang}</li>)
    })
        
};

export default Languages