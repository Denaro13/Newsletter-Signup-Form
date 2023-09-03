# Frontend Mentor - Newsletter sign-up form with success message solution

This is a solution to the [Newsletter sign-up form with success message challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/newsletter-signup-form-with-success-message-3FC1AZbNrv). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned))
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- Add their email and submit the form
- See a success message with their email after successfully submitting the form
- See form validation messages if:
  - The field is left empty
  - The email address is not formatted correctly
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![Newsletter Screenshot](./src/assets/images/Newsletter-Screenshot.png)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library

**Note: These are just examples. Delete this note and replace the list above with your own choices**

### What I learned

This was an interesting project. It helped me gain some new insight on how to change layout depending on screen sizes.

Here are some JS code I'm proud of

```js
const [width, setWidth] = useState(window.innerWidth);
const breakpoint = 808;

useEffect(() => {
  const handleWindowResize = () => setWidth(window.innerWidth);
  window.addEventListener("resize", handleWindowResize);

  // Return a function from the effect that removes the event listener
  return () => window.removeEventListener("resize", handleWindowResize);
}, []);

return (
  <section className="page">
    {width < breakpoint ? <MobileView /> : <DesktopView />}
  </section>
);
```

## Author

- Frontend Mentor - [@denaro13](https://www.frontendmentor.io/profile/denaro13)
- Twitter - [@thecapguy\_](https://www.twitter.com/thecapguy_)
