document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const delay = entry.target.getAttribute('data-delay');
          entry.target.style.animationDelay = delay;
          if(entry.target.classList.contains('slide-in-right')){
              entry.target.classList.add('animate-slideInRight');
          }
          if(entry.target.classList.contains('slide-in-left')){
              entry.target.classList.add('animate-slideInLeft');
          }
          if(entry.target.classList.contains('slide-in-top')){
              entry.target.classList.add('animate-slideInTop');
          }
          if(entry.target.classList.contains('slide-in-bottom')){
              entry.target.classList.add('animate-slideInBottom');
          }
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
    });

    document.querySelectorAll('.slide-in-right').forEach(el => {
      observer.observe(el);
    });
    document.querySelectorAll('.slide-in-left').forEach(el => {
      observer.observe(el);
    });
    document.querySelectorAll('.slide-in-top').forEach(el => {
      observer.observe(el);
    });
    document.querySelectorAll('.slide-in-bottom').forEach(el => {
      observer.observe(el);
    });
  });