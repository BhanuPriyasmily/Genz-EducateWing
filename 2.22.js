document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('listing-form');
    form.addEventListener('submit', async (event) => {
        event.preventDefault();

        const title = document.getElementById('title').value;
        const description = document.getElementById('description').value;
        const price = document.getElementById('price').value;
        const image = document.getElementById('image').value;

        const listing = { title, description, price, image };
        
        const response = await fetch('/api/listings', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(listing)
        });
        
        const result = await response.json();
        if (result.success) {
            loadListings();
            form.reset();
        }
    });

    const loadListings = async () => {
        const response = await fetch('/api/listings');
        const listings = await response.json();
        const propertyList = document.getElementById('property-list');
        propertyList.innerHTML = '';

        listings.forEach(listing => {
            const div = document.createElement('div');
            div.className = 'property';
            div.innerHTML = `
                <h3>${listing.title}</h3>
                <img src="${listing.image}" alt="${listing.title}" style="width:100%">
                <p>${listing.description}</p>
                <p><strong>Price:</strong> $${listing.price}</p>
            `;
            propertyList.appendChild(div);
        });
    };

    loadListings();
});