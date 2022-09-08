/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './**.{html,js}'],
  theme: {
    extend: {
      colors: {
        'primary_red': 'hsl(7, 99%, 70%)',
        'primary_yellow': 'hsl(51, 100%, 49%)',
        'text_cyan': 'hsl(167, 40%, 24%)',
        'photo_text': 'hsl(198, 62%, 26%)',
        'footer': 'hsl(168, 34%, 41%)',

        'neutral_blue': 'hsl(212, 27%, 19%)',
        'neutral_grey_blue': 'hsl(213, 9%, 39%)',
        'dark_grey_blue': 'hsl(232, 10%, 55%)',
        'gray_blue': 'hsl(210, 4%, 67%)',

       },
        fontFamily: {
        'barlow': 'Barlow, sans-serif',
        'fraunces': 'Fraunces, serif',
       },

       backgroundImage:{
        'hero_img': 'url(./assets/desktop/image-header.jpg)'
       },
  
       fontSize: {
        'xs': '.875rem', // 14px
        'sm': '.93rem', // 15px
        'base': '1.125rem', // 18px
        'tiny': '1.75rem', // 28px
        'xlg': '2rem', //32px
        'lg': '1.25rem', //20px
        '2xl': '2.5rem', //40px
        '3xl': '2.75rem', //44
        '4xl': '3.5rem', //56px
  
  
       },
  
    
      },
  
      screens: {
        'xs': "200px",
        'lg': "1200px",
        'xl': "1700px",
       },
    },
    plugins: [],
  };
