function ClothingIcon({ clothingItem }) {
    return (
        <div>
            {/* <img src='/assets/001-shirt.svg' alt='Raincoat'/> */}

            <img src={clothingItem.imageUrl} alt='Raincoat'/>
        </div>
    )
}

export default ClothingIcon