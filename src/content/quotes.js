import imageEdvardSimec from './images/quotes/edvard_simec.jpg';
import imagePavelSkerlj from './images/quotes/pavel_skerlj.jpg';
import imageToneCerne from './images/quotes/tone_cerne.png';

import imageArunGupta from './images/quotes/arun_gupta.jpg';
import imageMartijnVerburg from './images/quotes/martijn_verburg.png';
import imageHarshadOak from './images/quotes/harshad_oak.jpg';
import imageRezaRahman from './images/quotes/reza_rahman.jpg';

const unusedQuote = {
  quote: 'KumuluzEE is a great community effort to power Java EE API based microservices, especially on the cloud.',
  photo: imageRezaRahman,
  name: 'Reza Rahman',
  company: 'Senior Java Technologist, Author, Speaker'
};

export const quotes = [
  {
    quote:
      'Adriatic Slovenica is using Kumuluz API and microservices for internal systems and partner integration. Kumuluz API is powering the API economy marketplace for insurance products, currently used by over 3000 partner companies in South-east Europe. Furthermore, Adriatic Slovenica is using Kumuluz Payment for online payments in its digital channels, such as <a href="https://www.wiz.si/" target="_blank">Wiz</a>. Kumuluz has enabled us easier integration and better productivity and is very important for our digital channels.',
    photo: imageEdvardSimec,
    name: 'Edvard Šimec',
    company: 'CIO at Adriatic Slovenica'
  },
  {
    quote:
      'Petrol is using Kumuluz as the backbone for its digital products. Kumuluz microservices are powering innovative mobile applications for digital, such as <a href="http://www.petrol.si/app-na-poti" targer="_blank">Na poti</a> and several mission critical backend systems, including Paymnet, Invocing, Cart, Order, Fulfilment and Product catalog. With Kumuluz we have been able to fast-track the development and shorten time-to-market. Kumuluz platform has become a valuable part of our digital transformation strategy.',
    photo: imagePavelSkerlj,
    name: 'Pavel Škerlj',
    company: 'CIO at Petrol'
  },
  {
    quote:
      'Agency for accelerating liquidity (APL) is empowering Kumuluz for development of our next generation factoring platform. Using Kumuluz has already considerably improved flexibility, scalability and mobility of our software. Going from monolithic to microservice architecture, we can now add new functionalities much faster. With Kumuluz we will be able to develop the new factoring platform 3x faster than with traditional development practices.',
    photo: imageToneCerne,
    name: 'Tone Černe',
    company: 'CEO at APL'
  },

  {
    quote:
      'KumuluzEE truly brings microservice architecture to Java EE. Maven-ready, Fat JAR, modularized dependencies, Docker-ready, and pluggable web container makes it ready to be deployable in any cloud environment. If you are building apps using Java EE, start your microservice journey with KumuluzEE!',
    photo: imageArunGupta,
    name: 'Arun Gupta',
    company: 'Vice President, Developer Relations at Couchbase'
  },
  {
    quote:
      "Although Java EE specifications and application servers have come down in size, it still wasn't a first technology choice for today's micro services developer when compared to say NodeJS or Spring Boot. That's now changed as KumuluzEE brings a light-weight, application server free way of creating micro services with the full power of Java, the JVM and JavaEE behind it! This innovative stack is truly a worthy Duke Awards winner in 2015.",
    photo: imageMartijnVerburg,
    name: 'Martijn Verburg',
    company: 'Java Champion and CEO of jClarity'
  },
  {
    quote:
      "If you are exploring Microservices for Java EE, you need to take a look at KumuluzEE's novel yet simple approach to automating microservices for you.",
    photo: imageHarshadOak,
    name: 'Harshad Oak',
    company: 'Java Champion and Founder of Rightrix Solutions and IndicThreads'
  }
];
