
import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "../utils";
import { Button } from "../components/ui/button";
import { ArrowRight, Award, Users, Globe, Heart } from "lucide-react";
import { motion } from "framer-motion";

// Import locally stored team member images.
// EDUCATIONAL NOTE FOR STUDENTS (TypeScript & React):
// In a TypeScript React environment, importing non-code assets like images (.png, .jpg)
// requires appropriate module declarations (usually in a `react-app-env.d.ts` or `vite-env.d.ts` file)
// so the compiler does not flag them as compilation errors.
import nitinImg from "../assets/team/nitin.jpg";
import ajinkyaImg from "../assets/team/ajinkya.png";
import nirajanImg from "../assets/team/nirajan.jpg";
import raviImg from "../assets/team/ravi.jpg";
import lathikaImg from "../assets/team/lathika.png";
import boomikaImg from "../assets/team/boomika.jpg";

// EDUCATIONAL NOTE FOR STUDENTS (State vs Static Data):
// Although this array is currently declared as a static variable, in high-scale production apps 
// this data would typically be fetched from a database or API endpoint via hook libraries like
// React Query or simple `useEffect`. In Material UI (MUI), you would map this data array to a 
// responsive layout where each object corresponds to a `<Grid item>` containing a `<Card>`.
const team = [
  {
    name: "Nitin",
    role: "Chief Executive Officer",
    bio: "Leading the vision, driving business strategy, and guiding the entire team toward excellence.",
    image: nitinImg
  },
  {
    name: "Rahane",
    role: "Chief Technology Officer",
    bio: "Spearheading tech architecture, system engineering plans, and product development.",
    image: ajinkyaImg
  },
  {
    name: "Niranjan",
    role: "Chief Chennai Manager",
    bio: "Overseeing Chennai branch operations, business ecosystem partnerships, and student outreach.",
    image: nirajanImg
  },
  {
    name: "Ravi",
    role: "Chief Administrative Officer",
    bio: "Directing administrative operations, operational compliance, and organizational setup.",
    image: raviImg
  },
  {
    name: "Lathika",
    role: "Women Empowerment Lead",
    bio: "Fostering inclusive workplace initiatives and advancing women career development pathways.",
    image: lathikaImg
  },
  {
    name: "Boomika Manivanna",
    role: "HR Manager",
    bio: "Developing talent acquisition strategies, onboarding pathways, and positive workplace culture.",
    image: boomikaImg
  }
];

const values = [
  {
    icon: Heart,
    title: "Client First",
    description: "Every decision we make prioritizes our clients' success and satisfaction"
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We strive for perfection in every project, no matter the size or complexity"
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Great results come from great teamwork, both internally and with our clients"
  },
  {
    icon: Globe,
    title: "Innovation",
    description: "We stay ahead of the curve, embracing new technologies and methodologies"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="pt-2 pb-16 lg:pt-4 lg:pb-24 gradient-bg"
      >
        {/* EDUCATIONAL NOTE: Custom top padding (pt-2 / lg:pt-4) removes the extra white space directly below the header. */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-white"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                About Namodot IT Solutions
              </h1>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                We are a forward-thinking company dedicated to transforming businesses
                through innovative technology solutions and exceptional service.
              </p>
              <Link to={createPageUrl("Contact")}>
                <Button className="bg-white text-blue-900 hover:bg-gray-50 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-200 hover:shadow-xl transform hover:scale-105">
                  Work With Us

                </Button>
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600"
                  alt="Our team"
                  className="rounded-2xl shadow-2xl"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Story
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Namodot is built by a group of young, passionate, and talented creators who believed in one powerful idea :
                “ We don’t need to wait for the future — we can build it ourselves ”

              </p>
              <p>
                Before Namodot, each of us worked independently as freelancers. We were developing websites, building AI tools, designing applications, and solving digital problems on our own. Even though we were young, our skills were strong — and our ambition was even stronger.
              </p>
              <p>
                But we knew something important :
              </p>
              <p>
                Together, we could create much more than we ever could individually.
                That belief brought us together and transformed our shared vision into a real organisation.
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                who we are
              </h2>
              <p>
                Namodot is a new-age AI and technology organisation created by young innovators who think differently, move fast, and believe in smart solutions. Our team blends creativity, technical expertise, and fresh ideas to build powerful digital experiences.
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                what we do
              </h2>
              <p>
                We specialise in:
              </p>
              <p>
                •	AI Solutions — AI assistants, automation, chatbots, and intelligent voice systems
              </p>
              <p>
                •	Web & App Development — Fast, modern, full-stack websites and mobile apps
              </p>
              <p>
                •	Digital Innovation — Smart tools that help people and businesses work faster and better
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                our journey
              </h2>
              <p>
                • We started as talented individuals.
              </p>
              <p>
                • We grew into a passionate team.
              </p>
              <p>
                • And today, we stand as a young organisation with a bold mission :
              </p>
              <p>
                “To make intelligent technology simple, accessible, and impactful for everyone.”
              </p>
              <p>
                Namodot is just getting started — and our story is only in its first chapter.
                With creativity, teamwork, and youthful energy, we are building the future, one smart solution at a time.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
        className="py-20 bg-gray-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These principles guide everything we do and define who we are as a company
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="text-center group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 gradient-bg rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-200">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Team Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
        className="py-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Leadership Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experienced professionals dedicated to your success
            </p>
          </motion.div>

          {/* 
            EDUCATIONAL NOTE FOR STUDENTS (Responsive Grids):
            In Tailwind, responsiveness is achieved via breakpoints like `md:` and `lg:`.
            In Material UI (MUI), the equivalent structure is achieved using layout components:
            `<Grid container spacing={4}>` and inside the map:
            `<Grid item xs={12} sm={6} md={4}>`
            This ensures 1 column on mobile/extra-small screens, 2 columns on small/medium screens, and 3 columns on large screens.
          */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="text-center group"
              >
                {/* 
                  EDUCATIONAL NOTE FOR STUDENTS (CSS Positioning & Wrappers):
                  We set fixed dimensions `w-48 h-48` and centering `mx-auto` on the parent container
                  rather than on the child `<img>` tag. This ensures that the overlay container 
                  (`absolute inset-0`) matches the exact same bounds as the image, preventing it
                  from stretching to fill the entire responsive grid width.
                  In MUI, we achieve this similarly by wrapping an `<Avatar>` component in a `<Box>`
                  defined with the desired dimensions and `position: 'relative'`.
                */}
                <div className="relative w-48 h-48 mx-auto mb-4 overflow-hidden rounded-2xl shadow-lg">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 gradient-bg opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                <div className="text-sm font-medium gradient-text mb-2">{member.role}</div>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Mission Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8 }}
        className="py-20 bg-gray-50"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Our Mission
          </h2>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            To empower businesses of all sizes with innovative technology solutions that drive growth,
            enhance efficiency, and create lasting competitive advantages in the digital age.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to={createPageUrl("Contact")}>
              <Button className="gradient-bg hover:opacity-90 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-200 hover:shadow-xl transform hover:scale-105">
                Join Our Mission

              </Button>
            </Link>
            <Link to={createPageUrl("Services")}>
              <Button variant="outline" className="px-8 py-4 rounded-full text-lg font-semibold border-2 hover:bg-gray-50 transition-all duration-200 transform hover:scale-105">
                Our Services
              </Button>
            </Link>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
