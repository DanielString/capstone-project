async function wood() {
  let quoteDiv = document.getElementById('quote');
  try {
      const response = await fetch('../json/wood.json');

      if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const jsonData = await response.json();
      console.log('JSON data:', jsonData);

      //Pick random quote
      const randomIndex = Math.floor(Math.random() * jsonData.length);
      const randomQuote = jsonData[randomIndex];

      //Dipslay Quote
      quoteDiv.textContent = `"${randomQuote.quote}" - ${randomQuote.source}`;

  } catch (error) {
      console.error('An error occurred:', error.message);
  }
};

wood();

// Refresh quote every hour
setInterval(wood, 360000);