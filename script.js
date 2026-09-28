  const spans = document.querySelectorAll('.back-text span');
  let delay = 0;

  spans.forEach((span) => {
    span.style.transitionDelay = `${delay}s`;
    delay += 0.5;
  });

  setTimeout(() => {
    spans.forEach((span) => {
      span.classList.add('active');
    });
  }, 1000);



