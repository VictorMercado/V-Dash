module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{html,js,jsx}"],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
      "primary"     : "var(--primary)",
      "secondary"   : "var(--secondary)",
      "third"       : "var(--third)",
      "accent"      : "var(--accent)",
      "background"  : "var(--background)",
      "icon"        : "var(--icon)",
      "mainborder"  : "var(--mainborder)",
      "border"      : "var(--border)",
      "border2"     : "var(--border2)",
      "main"        : "var(--main)",
      "fontcolor"   : "var(--fontcolor)",
      "font2color"  : "var(--font2color)",
      "loading"     : "var(--loading)",
      'transparent' : 'rgb(255, 255, 255, 0.1)',
      'clearBlack'  : 'rgb(0, 0, 0, 0.3)',
      'white'       : '#fff',
      'black'       : '#000',
      'midnight'    : '#2c1750',
      'neongreen'   : '#7ee787',
      'success'     : '#28a745',
      'info'        : '#17a2b8',
      'warning'     : '#ffc107',
      'danger'      : '#dc3545',
      },
      animation: {
        cycle: 'cycle 3s infinite alternate',
        shrinkNav: 'shrinkNav 300ms ease-in forwards',
        growNav: 'growNav 300ms ease-in forwards',
      },
      keyframes: {
        cycle: {
          '0%'    : {'background-position' : 'left' },
          '100%'  : {'background-position' : 'right'},
        },
        shrinkNav: {
          '0%'    : { height: '3rem', opacity: '1' },
          '100%'  : { height: '0', opacity: '0' },
        },
        growNav: {
          '0%'    : { height: '0',  opacity: '0' },
          '100%'  : { height: '3rem', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
