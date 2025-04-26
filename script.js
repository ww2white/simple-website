document.getElementById('connectWallet').addEventListener('click', async () => {
  if (window.ethereum) {
    try {
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      document.getElementById('walletAddress').innerText = `Connected: ${accounts[0]}`;
    } catch (error) {
      console.error(error);
      alert('Connection failed.');
    }
  } else {
    alert('MetaMask not found. Please install it.');
  }
});
