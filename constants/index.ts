export const events = [
  {
    id: 1,
    title: 'UNIVERSITY OF MARRIAGE',
    text: "The University of Marriage is a non-profit marriage school part of Quincy Davies Ministries. It offers programs such as The Third Option to strengthen marriages and families, focusing on practical skills and inner growth. The volunteers follow a ministry philosophy based on Ephesians 4:12, being spiritually gifted, humble, and dedicated to personal development.It's in 4 seasons /semester; Spring ,Summer ,Autuum,Winter Class",
    start: '6 September, 2024',
    end: null,
    frequency: 'Friday',
    time: '19:00 - 20:30',
  },
  {
    id: 2,
    images: ['/assets/images/love-letters.jpg'],
    title: 'LOVE LETTERS',
    text: 'Love letters is a part of the University of Marriage, providing prompt solutions for marital challenges. This program runs from August to December.',
    start: 'August',
    end: 'September',
    frequency: 'Weekly - Thursday',
    time: '8pm to 10pm',
  },
  {
    id: 3,
    images: ['/assets/images/assiduous woman/AWD.jpg'],
    title: 'THE ASSIDUOUS WOMAN DAIRY',
    text: 'Our live broadcasts feature dedicated sessions on empowering women to embrace their roles as vital contributors to society, in line with their divine purpose. We aim to inspire and equip women to make history together',
    start: 'February',
    end: 'June',
    frequency: 'Weekly - Thursday',
    time: '8pm to 10pm',
  },
  {
    id: 3,
    images: ['/assets/images/post.jpg'],
    galleryImages: [
      '/assets/images/assiduous woman/IMG_20240426_193045.jpg',
      '/assets/images/assiduous woman/IMG_20240426_192508.jpg',
      '/assets/images/assiduous woman/IMG_20240426_193254.jpg',
    ],
    title: 'THE ASSIDUOUS WOMAN INTERNATIONAL CONFERENCE',
    text: "The Assiduous Woman (TAW) Int is a divine vision that highlights women's role as helpers and contributors in society as intended by God. We aim to empower women and make history together.",
    start: 'February',
    end: 'June',
    frequency: 'Weekly - Thursday',
    time: '8pm to 10pm',
  },
  {
    id: 4,
    images: ['/assets/images/street-worship.jpg'],
    title: 'STREET WORSHIP, EVANGELISM, AND WORSHIP NIGHT',
    text: "Jesus didn't confine his presence to the synagogue; his kindness extended everywhere. Street worship serves as a platform where we can honor him openly and spread his message far and wide.",
    start: null,
    end: null,
    frequency: 'Last Saturday of the month',
    time: '3pm',
  },
  {
    id: 5,
    images: ['/assets/images/worshippers-blueprint.jpg'],
    title: "THE WORSHIPPER'S BLUEPRINT",
    text: 'Leading worship and musicianship in the gospel music world and church settings can be challenging, but it’s a skill that can be taught and learned at QDM. The Worshipper Blueprint program is designed not only to develop excellence in voice and musicianship but also to instill ministerial ethics, character, and integrity',
    start: null,
    end: null,
    frequency: 'Done Annually',
    time: null,
  },
];

export const services = [
  {
    image: '/assets/images/him teaching/IMG_20230421_193411.jpg',
    title: 'Coaching and Training Sessions',
    text: "Benefit from Quincy's wealth of experience in voice, having worked alongside Cheryl Porter. Davies also holds a music degree and offers extensive expertise. Your talent is well-cared for in our hands.",
  },
  {
    image: '/assets/images/him teaching/IMG-20240420-WA0032.jpg',
    title: 'Exclusive Collaboration and Outsourcing Opportunities',
    text: "Enhance your music with our established music training programs, complemented by our studio's expert recording and production services.",
  },
  {
    image: '/assets/images/him teaching/IMG_20230220_175945.jpg',
    title: 'Sound System and Instruments',
    text: 'We have instruments for crusades, large-scale and small-scale events. Reinforce your events as we support you with musicians/band/sound & musical instruments.',
  },
  {
    image: '/assets/images/him teaching/IMG-20240420-WA0033.jpg',
    title: 'Christmas Moments with Quincy Davies and The Gospellier',
    text: 'Celebrate the holiday season with our special Christmas Moments event. Reserve Quincy Bell & Davies Gospellier for your end-of-year festivities, including company parties, church celebrations, and Easter events.',
  },
  {
    image: '/assets/images/him teaching/IMG-20240420-WA0033.jpg',
    title: "Quincy's Coner",
    text: 'Seek professional guidance and support through Quincy’s Coner, our counseling services. Quincy Bell is a certified psychotherapist and is available for sessions if you are dealing with grief or mental health concerns.',
  },
];

export const ministers = [
  {
    image:
      'https://res.cloudinary.com/dxu0xbfen/image/upload/v1732137640/founder_pq4hyo.jpg',
    title: 'Pastor Dan Davies',
    text: 'Founder',
  },
  {
    image:
      'https://res.cloudinary.com/dxu0xbfen/image/upload/v1732137642/woman_vdltvy.jpg',
    title: 'Prophetes Quincy Bell',
    text: 'Co-Founder',
  },
  {
    image:
      'https://res.cloudinary.com/dxu0xbfen/image/upload/v1732137641/darko_egffqm.jpg',
    title: 'Darko Milo',
    text: 'Treasurer',
  },
  {
    image:
      'https://res.cloudinary.com/dxu0xbfen/image/upload/v1732137640/alex_buph2h.jpg',
    title: 'Alex Boateng',
    text: 'Administrator',
  },
  {
    image:
      'https://res.cloudinary.com/dxu0xbfen/image/upload/v1732137642/jolly_lkq5z2.jpg',
    title: 'Jolly Igbinosa',
    text: 'Media/Organizer',
  },
];

export const heroImages = [
  'https://res.cloudinary.com/dxu0xbfen/image/upload/v1732137644/main-bg_diqvdm.jpg',
  'https://res.cloudinary.com/dxu0xbfen/image/upload/v1732137711/IMG_20230902_160831_kznlig.jpg',
  'https://res.cloudinary.com/dxu0xbfen/image/upload/v1732137668/IMG_20231007_164207_shxag5.jpg',
];

export const christmasMomentsImages = [
  'https://res.cloudinary.com/dxu0xbfen/image/upload/v1732137679/christmas-moments_lztzxd.jpg',
  'https://res.cloudinary.com/dxu0xbfen/image/upload/v1732137650/christmas-moments1_kf4f7y.jpg',
  'https://res.cloudinary.com/dxu0xbfen/image/upload/v1732137650/christmas-moments2_fvc2er.jpg',
];

export interface Event {
  id: number;
  images: string[];
  galleryImages?: string[]; // Optional field, only present in some events
  title: string;
  text: string;
  start: string | null;
  end: string | null;
  frequency: string;
  time: string | null;
}

export interface Service {
  image?: string;
  title: string;
  text: string;
}

export interface Testimonial {
  title: string;
  text: string;
  ministry: string;
  image: string;
}

export const emailUrl: string =
  'https://qdm-mail.up.railway.app/api/email/send';
