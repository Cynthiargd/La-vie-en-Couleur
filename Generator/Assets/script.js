const generateColor = () => {
  
    const random = (Math.random() * 0xFFFFFF << 0).toString(16);
    document.body.style.backgroundColor = "#" + random;
    
   document.querySelector('.code').innerText = "#" + random;
    
  }
  
  