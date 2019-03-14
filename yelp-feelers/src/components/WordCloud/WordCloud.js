import React from 'react'

const WordCloud = props => <img src={`http://api.mota-analytica.io/wordcloud/${props.id}`} alt={props.id} />

export default WordCloud;