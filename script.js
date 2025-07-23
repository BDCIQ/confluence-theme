document.body.style.backgroundAttachment = 'scroll';

// Scroll Progress Bar
const progressBar = document.createElement('div');
progressBar.style.position = 'fixed';
progressBar.style.top = '0';
progressBar.style.left = '0';
progressBar.style.height = '5px';
progressBar.style.backgroundColor = '#FDBA12'; 
progressBar.style.width = '0';
progressBar.style.zIndex = '1000';
document.body.appendChild(progressBar);
document.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;
  const scrollHeight = document.body.scrollHeight - window.innerHeight;
  const scrollPercentage = (scrollTop / scrollHeight) * 100;
  progressBar.style.width = `${scrollPercentage}%`;
});

// Back-to-Top Button
const backToTopButton = document.createElement('button');
backToTopButton.textContent = '↑';
backToTopButton.style.position = 'fixed';
backToTopButton.style.bottom = '20px';
backToTopButton.style.right = '20px';
backToTopButton.style.padding = '10px';
backToTopButton.style.border = 'none';
backToTopButton.style.borderRadius = '50px'; 
backToTopButton.style.backgroundColor = '#395F97';
backToTopButton.style.color = '#FFFFFF';
backToTopButton.style.cursor = 'pointer';
backToTopButton.style.display = 'none';
backToTopButton.style.backgroundImage = 'url("MedBottleIcon.png")';
backToTopButton.style.backgroundSize = 'cover';
backToTopButton.style.backgroundPosition = 'center';
backToTopButton.style.fontWeight = 'bold';
backToTopButton.style.textAlign = 'center';
backToTopButton.style.lineHeight = '40px'; 
backToTopButton.style.boxShadow = '0 0 10px #FDBA12'; 
document.body.appendChild(backToTopButton);
backToTopButton.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

document.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTopButton.style.display = 'block';
  } else {
    backToTopButton.style.display = 'none';
  }
});

// Added Table of Contents functionality
const toc = document.createElement('nav');
toc.style.position = 'fixed';
toc.style.top = '11.75rem';
toc.style.left = '75px';
toc.style.width = '200px';
toc.style.padding = '10px';
toc.style.backgroundColor = '#FFFFFF';
toc.style.borderRadius = '8px';
toc.style.boxShadow = '0 40px 70px rgba(0, 0, 0, 0.7)';
toc.style.zIndex = '1000';
toc.style.filter = 'drop-shadow(0 0 10px rgba(0, 0, 0, 0.5))'; 

toc.innerHTML = '<h3>Table of Contents</h3>';
const headings = document.querySelectorAll('h2');
headings.forEach((heading, index) => {
  const link = document.createElement('a');
  link.href = `#section-${index}`;
  link.textContent = heading.textContent;
  link.style.display = 'block';
  link.style.color = '#395F97';
  link.style.textDecoration = 'none';
  link.style.marginBottom = '10px';
  link.addEventListener('mouseover', () => link.style.textDecoration = 'underline');
  link.addEventListener('mouseout', () => link.style.textDecoration = 'none');
  toc.appendChild(link);

  heading.id = `section-${index}`; 
});

document.body.appendChild(toc);