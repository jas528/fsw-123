import React from 'React'
import BoxCard from './Boxcard.js'
import '.BoxStyle.css'

function BoxApp (){
    return(
        <div className="flexBox">
        <BoxCard
        title= 'Title 1'
        subtitle='Subtitle 1'
        description='Hello world1!'
        bgcolor='red'
        width= "250px"
        />
        <BoxCard
        title='Title 2'
        subtitle='Subtitle 2'
        description='Hello world2!'
        bgcolor='orange'
        width="250px"
        />
        <BoxCard
        title='Title 3'
        subtitle='Subtitle 3'
        description='Hello world3!'
        bgcolor='yellow'
        width="250px"
        />
        <BoxCard
        title='Title 4'
        subtitle='Subtitle 4'
        description='Hello world4!'
        bgcolor='green'
        width="250px"
        />
    
</div>)
    }
    export default BoxApp