document.addEventListener('DOMContentLoaded', () => {
  // ==========================================================================
  // THEME SWITCHER (Lounge/Night vs Kitchen/Day)
  // ==========================================================================
  const themeToggle = document.getElementById('theme-toggle');
  const labelLounge = document.getElementById('label-lounge');
  const labelKitchen = document.getElementById('label-kitchen');
  const navLogo = document.getElementById('nav-logo');
  const footerLogo = document.getElementById('footer-logo');

  // Phone numbers:
  // Lounge bookings: +27 62 067 4612 or 068 119 7372
  // Kitchen bookings: +27 62 067 4612 or 068 119 7372
  const LOUNGE_WHATSAPP = '27620674612';
  const KITCHEN_WHATSAPP = '27681197372';

  // Config Mapping for General Page Images
  // Config Mapping for General Page Images (strictly unique pairs)
  const GENERAL_IMAGE_MAP = {
    'images/hero.jpg': 'images/kitchen/hero.jpg',
    'images/dj.jpg': 'images/kitchen/pizza.jpg',
    'images/drinks.jpg': 'images/kitchen/drinks.jpg',
    'images/people.jpg': 'images/kitchen/people.jpg',
    'images/hero1.jpg': 'images/kitchen/hero1.jpg',
    'images/people10.jpg': 'images/kitchen/kids1.jpg',
    'images/drinks6.jpg': 'images/kitchen/food12.jpg',
    'images/dj1.jpg': 'images/kitchen/staff.jpg',
    'images/friday-vibe.jpg': 'images/kitchen/hero2.jpg',
    
    // Shisa Nyama Menu
    'images/food.jpg': 'images/kitchen/food.jpg',
    'images/food1.jpg': 'images/kitchen/food1.jpg',
    'images/food2.jpg': 'images/kitchen/food2.jpg',
    'images/food3.jpg': 'images/kitchen/food3.jpg',
    'images/food4.jpg': 'images/kitchen/food4.jpg',
    'images/food5.jpg': 'images/kitchen/food5.jpg',
    
    // Pizzas Menu
    'images/food6.jpg': 'images/kitchen/pizza1.jpg',
    'images/food7.jpg': 'images/kitchen/food6.jpg',
    'images/food8.jpg': 'images/kitchen/food8.jpg',
    'images/food9.jpg': 'images/kitchen/food9.jpg',
    'images/food10.jpg': 'images/kitchen/food10.jpg',
    'images/food11.jpg': 'images/kitchen/food11.jpg',

    // Drinks Menu
    'images/drinks1.jpg': 'images/kitchen/food13.jpg',
    'images/drinks2.jpg': 'images/kitchen/food14.jpg',
    'images/drinks3.jpg': 'images/kitchen/kids3.jpg',
    'images/drinks4.jpg': 'images/kitchen/kids4.jpg',
    'images/drinks5.jpg': 'images/kitchen/kids5.jpg',
  };

  // Gallery Card Theme Data (12 cards, unique images)
  const GALLERY_CONFIG = {
    lounge: [
      { tag: 'Upper Lounge', title: 'Weekend Energy', img: 'images/dj2.jpg' },
      { tag: 'Cocktails', title: 'Mixology Excellence', img: 'images/drinks1.jpg' },
      { tag: 'Ekitcheni', title: 'Woodfired Special', img: 'images/food6.jpg' },
      { tag: 'Pool Side', title: 'VVIP Lounge Deck', img: 'images/hero1.jpg' },
      { tag: 'Nightlife', title: 'Dance Floor Vibes', img: 'images/people1.jpg' },
      { tag: 'Dining', title: 'Sharing Plates', img: 'images/food3.jpg' },
      { tag: 'Sound System', title: 'DJ Booth Live', img: 'images/dj3.jpg' },
      { tag: 'Good Times', title: 'Friends Night Out', img: 'images/people4.jpg' },
      { tag: 'Vibe', title: 'Smiles & Music', img: 'images/people7.jpg' },
      { tag: 'Signature Serves', title: 'Artisanal Cocktails', img: 'images/drinks2.jpg' },
      { tag: 'VIP Deck', title: 'Luxury Crowds', img: 'images/people8.jpg' },
      { tag: 'Late Night Beats', title: 'Main Stage Live', img: 'images/dj4.jpg' }
    ],
    kitchen: [
      { tag: 'Family Dining', title: 'Sunday Buffets', img: 'images/kitchen/people1.jpg' },
      { tag: 'Kids Zone', title: 'Play Area Fun', img: 'images/kitchen/kids.jpg' },
      { tag: 'Ekitcheni', title: 'Woodfired Special', img: 'images/kitchen/people2.jpg' },
      { tag: 'Friendly Staff', title: 'Smiles & Service', img: 'images/kitchen/people3.jpg' },
      { tag: 'Comfort Food', title: 'Warm Meals', img: 'images/kitchen/kids11.jpg' },
      { tag: 'Kids Friendly', title: 'Family Table', img: 'images/kitchen/people5.jpg' },
      { tag: 'Local Cook', title: 'Kitchen Magic', img: 'images/kitchen/people6.jpg' },
      { tag: 'Family Joy', title: 'Sunday Lunch', img: 'images/kitchen/kids12.jpg' },
      { tag: 'Cozy Corner', title: 'Warm Moments', img: 'images/kitchen/people7.jpg' },
      { tag: 'Kids Creative', title: 'Face Painting', img: 'images/kitchen/kids13.jpg' },
      { tag: 'Cozy Dining', title: 'Local Flavors', img: 'images/kitchen/people8.jpg' },
      { tag: 'Sunday Roast', title: 'Perfect Gatherings', img: 'images/kitchen/people9.jpg' }
    ]
  };

  // Daily Event Tab Theme Data (unique images)
  const EVENTS_CONFIG = {
    lounge: [
      {
        tag: 'Every Friday',
        title: 'Friday Warm-Up Session',
        price: 'Free Entry',
        desc: 'Start your weekend right. Deep house DJs setting the vibe on the deck. Happy hour from 4PM to 7PM.',
        img: 'images/friday-vibe.jpg'
      },
      {
        tag: 'Every Saturday',
        title: 'Saturday Night Club Beats',
        price: 'VIP Tables Available',
        desc: "High-tempo nightlife energy. Cape Town's top DJs spinning Amapiano, Afro House and Hip Hop. Swimming pool access open.",
        img: 'images/saturday-vibe.jpg'
      },
      {
        tag: 'Every Sunday',
        title: 'Sunday Soul & Braai Session',
        price: 'R160 Average Bill',
        desc: 'Relaxed atmosphere. Live acoustic sets, soulful sounds, premium Shisa Nyama platters and families welcome all day.',
        img: 'images/sunday-vibe.jpg'
      }
    ],
    kitchen: [
      {
        tag: 'Every Friday',
        title: 'Friday Family Pizza Night',
        price: 'Special Offers',
        desc: 'Buy 2 get 1 free on all woodfired pizzas! Bring the kids and enjoy fresh, hot pizzas straight from our traditional clay oven.',
        img: 'images/kitchen/kids10.jpg'
      },
      {
        tag: 'Every Saturday',
        title: 'Saturday Shisa Nyama Feast',
        price: 'Platters from R190',
        desc: 'Taste the finest local charcoal-cooked meats. Large sharing platters for families and friend groups, with local live background acoustic music.',
        img: 'images/kitchen/people4.jpg'
      },
      {
        tag: 'Every Sunday',
        title: 'Sunday Traditional Buffet',
        price: 'R180 Per Person',
        desc: 'Authentic local culinary favorites. Sunday roast, beef brisket, chakalaka, steamed bread, and traditional desserts. Live acoustic jazz background.',
        img: 'images/kitchen/kids2.jpg'
      }
    ]
  };

  // Toggle Function
  const setTheme = (theme) => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('kwa-ace-theme', theme);

    // Swap clip-mask media components (video in Lounge, image in Kitchen)
    const loungeVideo = document.querySelector('.dynamic-media-lounge');
    const kitchenImg = document.querySelector('.dynamic-media-kitchen');

    if (theme === 'kitchen') {
      // Switch to Kitchen logos and active styles
      navLogo.src = 'images/logo-kitchen.jpg';
      footerLogo.src = 'images/logo-kitchen.jpg';
      labelKitchen.classList.add('active');
      labelLounge.classList.remove('active');
      if (themeToggle) themeToggle.checked = true;

      // Show Kitchen clip-mask image, hide Lounge video
      if (loungeVideo) loungeVideo.style.display = 'none';
      if (kitchenImg) kitchenImg.style.display = 'block';

      // Update Booking Choice Details
      document.querySelectorAll('.dynamic-booking-txt').forEach(el => {
        el.textContent = 'Reserve a table at Ekitcheni for your family & friends.';
      });
      document.querySelectorAll('.dynamic-accent-txt').forEach(el => {
        el.textContent = 'Kitchen Mode';
      });

      // Update Hero Headline & Subtext
      const heroHeadline = document.querySelector('.hero-headline');
      if (heroHeadline) {
        heroHeadline.innerHTML = `Where Flavor<br><span class="text-highlight">Meets Family.</span>`;
      }
      const heroSubtext = document.querySelector('.hero-subtext');
      if (heroSubtext) {
        heroSubtext.textContent = 'Indulge in authentic woodfired pizzas, flame-grilled Shisa Nyama, and comforting meals prepared by master cooks. A warm, family-friendly setting on the ground floor.';
      }

      // Update Menu Headers
      const menuTag = document.querySelector('.menu-section .section-header .section-tag');
      const menuTitle = document.querySelector('.menu-section .section-header h2');
      const menuDesc = document.querySelector('.menu-section .section-header p');
      if (menuTag) menuTag.textContent = 'Ekitcheni Family Kitchen';
      if (menuTitle) menuTitle.textContent = 'Comfort Food & Platters';
      if (menuDesc) menuDesc.textContent = 'Hearty family-sized portions, freshly baked woodfired pizzas, and refreshing juices and shakes.';

    } else {
      // Switch to Lounge logos and active styles
      navLogo.src = 'images/logo.jpg';
      footerLogo.src = 'images/logo.jpg';
      labelLounge.classList.add('active');
      labelKitchen.classList.remove('active');
      if (themeToggle) themeToggle.checked = false;

      // Show Lounge video, hide Kitchen image
      if (loungeVideo) loungeVideo.style.display = 'block';
      if (kitchenImg) kitchenImg.style.display = 'none';

      // Update Booking Choice Details
      document.querySelectorAll('.dynamic-booking-txt').forEach(el => {
        el.textContent = 'Book a VIP table, Lounge section or pool table for the ultimate vibe.';
      });
      document.querySelectorAll('.dynamic-accent-txt').forEach(el => {
        el.textContent = 'Lounge Mode';
      });

      // Update Hero Headline & Subtext
      const heroHeadline = document.querySelector('.hero-headline');
      if (heroHeadline) {
        heroHeadline.innerHTML = `Where Vibe<br><span class="text-highlight">Meets Flavor.</span>`;
      }
      const heroSubtext = document.querySelector('.hero-subtext');
      if (heroSubtext) {
        heroSubtext.textContent = "Experience South Africa's premier entertainment destination. A two-story lifestyle sanctuary featuring a VVIP pool club on the upper floor, and the warm, welcoming Ekitcheni family restaurant on the ground floor.";
      }

      // Update Menu Headers
      const menuTag = document.querySelector('.menu-section .section-header .section-tag');
      const menuTitle = document.querySelector('.menu-section .section-header h2');
      const menuDesc = document.querySelector('.menu-section .section-header p');
      if (menuTag) menuTag.textContent = 'Taste of Excellence';
      if (menuTitle) menuTitle.textContent = 'The Culinary Menu';
      if (menuDesc) menuDesc.textContent = 'Curated charcoal-barbecued meats, handcrafted pizzas, and artisanal cocktails prepared fresh daily.';
    }

    // --- Dynamic Gallery Content Updates ---
    const galleryCards = document.querySelectorAll('.gallery-card');
    const galConfig = GALLERY_CONFIG[theme];
    galleryCards.forEach((card, idx) => {
      if (galConfig[idx]) {
        const tagEl = card.querySelector('.gallery-card-tag');
        const titleEl = card.querySelector('h4');
        const imgEl = card.querySelector('img');
        if (tagEl) tagEl.textContent = galConfig[idx].tag;
        if (titleEl) titleEl.textContent = galConfig[idx].title;
        if (imgEl) {
          imgEl.src = galConfig[idx].img;
          imgEl.setAttribute('data-gallery-controlled', 'true');
        }
      }
    });

    // --- Dynamic Events Tab Content Updates ---
    const eventCards = document.querySelectorAll('#menu-events .menu-card');
    const evConfig = EVENTS_CONFIG[theme];
    eventCards.forEach((card, idx) => {
      if (evConfig[idx]) {
        const tagEl = card.querySelector('.menu-tag');
        const titleEl = card.querySelector('.menu-title');
        const priceEl = card.querySelector('.menu-price');
        const descEl = card.querySelector('.menu-desc');
        const imgEl = card.querySelector('img');
        if (tagEl) tagEl.textContent = evConfig[idx].tag;
        if (titleEl) titleEl.textContent = evConfig[idx].title;
        if (priceEl) priceEl.textContent = evConfig[idx].price;
        if (descEl) descEl.textContent = evConfig[idx].desc;
        if (imgEl) {
          imgEl.src = evConfig[idx].img;
          imgEl.setAttribute('data-event-controlled', 'true');
        }
      }
    });

    // --- Dynamic General Layout & Menu Image Swaps ---
    document.querySelectorAll('img').forEach(img => {
      // Skip logo, gallery, event, and the kitchen-hero-single images which are managed specifically
      if (img.id === 'nav-logo' || img.id === 'footer-logo' || 
          img.hasAttribute('data-gallery-controlled') || 
          img.hasAttribute('data-event-controlled') ||
          img.classList.contains('kitchen-hero-single-img')) {
        return;
      }

      const currentSrc = img.getAttribute('src');
      if (!currentSrc) return;

      if (theme === 'kitchen') {
        if (GENERAL_IMAGE_MAP[currentSrc]) {
          img.src = GENERAL_IMAGE_MAP[currentSrc];
        }
      } else {
        for (const [loungeSrc, kitchenSrc] of Object.entries(GENERAL_IMAGE_MAP)) {
          if (currentSrc === kitchenSrc) {
            img.src = loungeSrc;
            break;
          }
        }
      }
    });

    // --- Update default selected floor in reservation form ---
    const bookingFloorSelect = document.getElementById('booking-floor');
    if (bookingFloorSelect) {
      bookingFloorSelect.value = theme;
    }

    // --- Dynamic Scrolling Marquee text swap ---
    const marqueeSpans = document.querySelectorAll('.hero-marquee .marquee-content span');
    const marqueeTexts = {
      lounge: 'KWA ACE LOUNGE ✦ THE ULTIMATE SHISANYAMA, VVIP POOL & CLUB EXPERIENCE ✦ KHAYELITSHA, CAPE TOWN ✦ AMAPIANO, AFRO HOUSE & HIP HOP ✦ BOTTLE SERVICE & LUXURY VIBES ✦ EST. 2007 ✦ ',
      kitchen: 'KWA ACE EKITCHENI ✦ FRESH WOODFIRED PIZZAS, FLAME GRILLED SHISANYAMA & FAMILY PLATTERS ✦ KIDS PLAY ZONE & COZY DINING ✦ SUNDAY FAMILY BUFFETS ✦ KHAYELITSHA ✦ EST. 2007 ✦ '
    };
    marqueeSpans.forEach(span => {
      span.textContent = marqueeTexts[theme].repeat(2);
    });
  };

  // Toggle Slider Listener
  if (themeToggle) {
    themeToggle.addEventListener('change', () => {
      const theme = themeToggle.checked ? 'kitchen' : 'lounge';
      setTheme(theme);
    });
  }

  // Label Click Listeners
  if (labelLounge) {
    labelLounge.addEventListener('click', () => setTheme('lounge'));
  }
  if (labelKitchen) {
    labelKitchen.addEventListener('click', () => setTheme('kitchen'));
  }

  // Init Theme from Local Storage or default to Lounge
  const savedTheme = localStorage.getItem('kwa-ace-theme') || 'lounge';
  setTheme(savedTheme);


  // ==========================================================================
  // MOBILE MENU NAVIGATION
  // ==========================================================================
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const navLinksContainer = document.querySelector('.nav-links');

  if (mobileMenuBtn && navLinksContainer) {
    mobileMenuBtn.addEventListener('click', () => {
      navLinksContainer.classList.toggle('active-mobile');
      mobileMenuBtn.innerHTML = navLinksContainer.classList.contains('active-mobile') 
        ? '&#x2715;' // Close Symbol
        : '&#x2630;'; // Hamburger Symbol
    });

    // Close mobile menu on nav link click
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navLinksContainer.classList.remove('active-mobile');
        mobileMenuBtn.innerHTML = '&#x2630;';
      });
    });
  }


  // ==========================================================================
  // SCROLL REVEAL EFFECT
  // ==========================================================================
  const revealElements = document.querySelectorAll('.reveal');
  
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // Reveal only once
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -50px 0px'
  });

  revealElements.forEach(el => revealObserver.observe(el));


  // ==========================================================================
  // TABBED MENU SELECTOR
  // ==========================================================================
  const menuButtons = document.querySelectorAll('.menu-tab-btn');
  const menuGrids = document.querySelectorAll('.menu-grid');

  menuButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetTab = btn.getAttribute('data-tab');

      // Update Button State
      menuButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      // Update Grid Visibility
      menuGrids.forEach(grid => {
        if (grid.id === `menu-${targetTab}`) {
          grid.classList.add('active');
        } else {
          grid.classList.remove('active');
        }
      });
    });
  });


  // ==========================================================================
  // HORIZONTAL GALLERY SCROLL
  // ==========================================================================
  const galleryScroll = document.getElementById('gallery-scroll');
  const galleryPrev = document.getElementById('gallery-prev');
  const galleryNext = document.getElementById('gallery-next');

  if (galleryScroll && galleryPrev && galleryNext) {
    const cardWidth = 320 + 24; // Width of card + gap

    galleryNext.addEventListener('click', () => {
      galleryScroll.scrollBy({
        left: cardWidth,
        behavior: 'smooth'
      });
    });

    galleryPrev.addEventListener('click', () => {
      galleryScroll.scrollBy({
        left: -cardWidth,
        behavior: 'smooth'
      });
    });
  }


  // ==========================================================================
  // WHATSAPP BOOKING INTEGRATION
  // ==========================================================================
  const bookingForm = document.getElementById('booking-form');

  if (bookingForm) {
    bookingForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('booking-name').value;
      const guests = document.getElementById('booking-guests').value;
      const date = document.getElementById('booking-date').value;
      const floor = document.getElementById('booking-floor').value;
      const message = document.getElementById('booking-message').value;

      // Select whatsapp number based on experience choice
      const whatsappNumber = floor === 'kitchen' ? KITCHEN_WHATSAPP : LOUNGE_WHATSAPP;
      const floorLabel = floor === 'kitchen' ? 'Ground Floor (Ekitcheni Restaurant)' : 'Upper Floor (VIP Lounge & Club)';

      // Compile message
      const textMessage = `Hi Kwa Ace Lounge & Kitchen! I would like to request a booking:
- *Name*: ${name}
- *Guests*: ${guests}
- *Date*: ${date}
- *Section/Experience*: ${floorLabel}
${message ? `- *Notes*: ${message}` : ''}`;

      // URL encode text
      const encodedText = encodeURIComponent(textMessage);
      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedText}`;

      // Open WhatsApp in new tab
      window.open(whatsappUrl, '_blank');
    });
  }
});
