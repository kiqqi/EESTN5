document.getElementById('cifrarForm').addEventListener('submit', async (event) => {
    event.preventDefault();
    
    const mensaje = document.getElementById('mensaje').value;

    const response = await fetch('/cifrar', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ mensaje })
    });

    const data = await response.json();

  
    document.getElementById('mensajeCifrado').textContent = `Mensaje cifrado: ${data.mensajeCifrado}`;
});