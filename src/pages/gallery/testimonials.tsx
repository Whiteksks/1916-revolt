import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import img1 from "@/images/a54f4ea5-70a0-4a8e-a398-fb75cec896c7.jpg";
import img2 from "@/images/photo_5210781369099816105_w.jpg";
import img3 from "@/images/photo_5210781369099816106_w.jpg";
import img4 from "@/images/photo_5210781369099816107_w.jpg";
import img5 from "@/images/photo_5210781369099816108_w.jpg";
import img6 from "@/images/photo_5210781369099816109_w.jpg";
import img7 from "@/images/photo_5210781369099816110_w.jpg";
import img8 from "@/images/photo_5210781369099816111_w.jpg";

export function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote:
        "Adil Mamadiyarov and Atymtay Berdikhan. ",
      name: "MT-2503 group 5",
      designation: "State Military History Museum of the Armed Forces of the Republic of Kazakhstan",
      src: img1,
      hint: true,
    },
    {
      quote:
        "Portrait of Aliibi Dzhangildin (1884-1953), leader of the uprising in the Turgay region.",
      name: "Aliibi Dzhangildin",
      designation: "State Military History Museum of the Armed Forces of the Republic of Kazakhstan",
      src: img2,
      hint: false,
    },
    {
      quote:
        "A photograph showing A. Imanov (right) and Squadron Commander R. Zhalasbayev (left).",
      name: "A. Imanov and R. Zhalasbayev",
      designation: "State Military History Museum of the Armed Forces of the Republic of Kazakhstan",
      src: img3,
      hint: false,
    },
    {
      quote:
        "A photograph captioned as 'Amangeldy's Associates', with the name: Sotnik Amangeldy.",
      name: "Amangeldy Imanov with Associates",
      designation: "State Military History Museum of the Armed Forces of the Republic of Kazakhstan",
      src: img4,
      hint: false,
    },
    {
      quote:
        "Portrait of Tokash Bokin (1890-1918), leader of the uprising in Semirechye (Zhetysu).",
      name: "Tokash Bokin",
      designation: "State Military History Museum of the Armed Forces of the Republic of Kazakhstan",
      src: img5,
      hint: false,
    },
    {
      quote:
        "Portrait of Bekbolat Ashekeev (1843-1916), another leader of the uprising in Semirechye (Zhetysu).",
      name: "Bekbolat Ashekeev",
      designation: "State Military History Museum of the Armed Forces of the Republic of Kazakhstan",
      src: img6,
      hint: false,
    },
    {
      quote:
        "A reproduction of a painting (artist A. Kasteev) depicting the sarbazes (warriors) of Amangeldy Imanov during a campaign.",
      name: "Sarbazes of A. Imanov (Reproduction by A. Kasteev)",
      designation: "State Military History Museum of the Armed Forces of the Republic of Kazakhstan",
      src: img7,
      hint: false,
    },
    {
      quote:
        "Historical photo of the figures of the Alash movement from 1918.",
      name: "Figures of the Alash Movement",
      designation: "State Military History Museum of the Armed Forces of the Republic of Kazakhstan",
      src: img8,
      hint: false,
    },
  ];
  return <AnimatedTestimonials testimonials={testimonials} />;
}
