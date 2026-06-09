console.log("Dentorijum učitan.");
.products {
    padding: 60px 10%;
    background: #f5f8fb;
}

.products h2 {
    text-align: center;
    font-size: 40px;
    margin-bottom: 40px;
    color: #0A2540;
}

.product-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 25px;
}

.product-card {
    background: white;
    padding: 20px;
    border-radius: 15px;
    box-shadow: 0 5px 20px rgba(0,0,0,0.1);
    text-align: center;
    transition: 0.3s;
}

.product-card:hover {
    transform: translateY(-5px);
}

.product-card img {
    width: 100%;
    height: 180px;
    object-fit: cover;
    border-radius: 10px;
}

.price {
    color: #00C2CB;
    font-weight: bold;
    margin: 10px 0;
}
