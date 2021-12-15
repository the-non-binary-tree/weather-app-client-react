import ClothingIcon from './ClothingIcon'

function ClothingForm({ clothingItems }) {
    return (
        <div>
            <h6>Clothing Form</h6>
            <ul>
            {clothingItems.map(clothingItem => {
                return (<li><ClothingIcon clothingItem={clothingItem} /></li>)
            })}
            </ul>
        </div>
        
    )
}

export default ClothingForm