"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import HeroBillboardCarousel from '@/components/sections/hero/HeroBillboardCarousel';
import MediaSplitTabsAbout from '@/components/sections/about/MediaSplitTabsAbout';
import FeatureBento from '@/components/sections/feature/FeatureBento';
import TestimonialCardSixteen from '@/components/sections/testimonial/TestimonialCardSixteen';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterMedia from '@/components/sections/footer/FooterMedia';
import { Sparkles, Flower2, Heart, Truck, Lightbulb, Star } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="icon-arrow"
      defaultTextAnimation="entrance-slide"
      borderRadius="rounded"
      contentWidth="smallMedium"
      sizing="largeSmall"
      background="floatingGradient"
      cardStyle="gradient-bordered"
      primaryButtonStyle="gradient"
      secondaryButtonStyle="glass"
      headingFontWeight="light"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleCentered 
          brandName="Fiasko"
          navItems={[
            { name: "Gallery", id: "gallery" },
            { name: "About", id: "about" },
            { name: "Services", id: "services" },
            { name: "Testimonials", id: "testimonials" },
            { name: "Contact", id: "contact" }
          ]}
          button={{ text: "Book Now", href: "contact" }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardCarousel
          title="Exquisite Floral Arrangements"
          description="Discover the artistry of Fiasko Flowers Studio. Every arrangement is a masterpiece of color, texture, and emotion."
          tag="Premium Floristry"
          tagIcon={Sparkles}
          background={{ variant: "sparkles-gradient" }}
          mediaItems={[
            {
              imageSrc: "https://img.b2bpic.net/free-photo/close-up-pretty-floral-decoration_23-2147609389.jpg",              imageAlt: "Premium rose bouquet arrangement"
            },
            {
              imageSrc: "https://img.b2bpic.net/free-photo/bouquet-red-roses-peonies-green-decorative-flowers-with-leaves_114579-1427.jpg",              imageAlt: "Elegant spring flower arrangement"
            },
            {
              imageSrc: "https://img.b2bpic.net/free-photo/beautiful-flowers-blue-surface_23-2147609383.jpg",              imageAlt: "Wedding flowers collection"
            },
            {
              imageSrc: "https://img.b2bpic.net/free-photo/flower-composition-bucket-roses-orchid-lithianthus-side-view_141793-4427.jpg",              imageAlt: "Luxury luxury arrangement"
            },
            {
              imageSrc: "https://img.b2bpic.net/free-photo/beautiful-bouquet-pastel-color-flowers-cage-container_114579-1883.jpg",              imageAlt: "Fresh natural flower bouquet"
            },
            {
              imageSrc: "https://img.b2bpic.net/free-photo/woman-holding-bouquet-pink-white-flower-set-hand_114579-1999.jpg",              imageAlt: "Exotic orchid arrangement"
            }
          ]}
          buttons={[
            { text: "View Gallery", href: "gallery" },
            { text: "Book Consultation", href: "contact" }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <MediaSplitTabsAbout
          title="The Art of Fiasko"
          description="We craft more than arrangements—we create experiences."
          tabs={[
            {
              id: "craft",              label: "Our Craft",              description: "For over 15 years, Fiasko has been crafting bespoke floral arrangements that tell stories. Each stem is carefully selected and hand-arranged to create designs that resonate with emotion and beauty."
            },
            {
              id: "sustainability",              label: "Sustainability",              description: "We partner with local growers and sustainable farms to source the freshest, most ethically-grown flowers. Our commitment to the environment is reflected in every arrangement we create."
            },
            {
              id: "vision",              label: "Our Vision",              description: "To be the premier floral studio known for innovative designs, exceptional quality, and transformative floral experiences that bring joy and beauty into every moment."
            }
          ]}
          imageSrc="https://img.b2bpic.net/free-photo/florist-makes-beautiful-bouquet-studio_1157-28388.jpg"
          imageAlt="Florist working in Fiasko studio"
          imagePosition="right"
          useInvertedBackground="invertDefault"
        />
      </div>

      <div id="features" data-section="features">
        <FeatureBento
          title="Our Services"
          description="Explore what makes Fiasko your destination for extraordinary floral design."
          tag="Premium Services"
          tagIcon={Flower2}
          textboxLayout="default"
          animationType="slide-up"
          useInvertedBackground="noInvert"
          features={[
            {
              title: "Custom Arrangements",              description: "Bespoke designs tailored to your vision, occasion, and aesthetic preferences.",              bentoComponent: "media-stack",              items: [
                {
                  imageSrc: "https://img.b2bpic.net/free-photo/vase-with-decorative-flowers_1203-1640.jpg",                  imageAlt: "Custom floral arrangement"
                },
                {
                  imageSrc: "https://img.b2bpic.net/free-photo/vase-with-decorative-flowers_1203-1640.jpg",                  imageAlt: "Designer creating arrangement"
                },
                {
                  imageSrc: "https://img.b2bpic.net/free-photo/vase-with-decorative-flowers_1203-1640.jpg",                  imageAlt: "Finished premium design"
                }
              ]
            },
            {
              title: "Fresh Flower Delivery",              description: "Same-day delivery available for local orders. Each arrangement arrives fresh and beautifully presented.",              bentoComponent: "reveal-icon",              icon: Truck
            },
            {
              title: "Wedding & Event Design",              description: "Create the floral vision for your most important moments with our specialized event design team.",              bentoComponent: "reveal-icon",              icon: Heart
            },
            {
              title: "Floral Consultation",              description: "Work with our expert designers to plan color palettes, styles, and arrangements perfect for your needs.",              bentoComponent: "reveal-icon",              icon: Lightbulb
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardSixteen
          title="Loved by Our Clients"
          description="See what our clients say about their Fiasko floral experiences."
          tag="Client Stories"
          tagIcon={Star}
          textboxLayout="default"
          animationType="slide-up"
          useInvertedBackground="invertDefault"
          testimonials={[
            {
              id: "1",              name: "Sarah Mitchell",              role: "Bride",              company: "2024 Wedding",              rating: 5,
              imageSrc: "https://img.b2bpic.net/free-photo/smiling-young-professional-businesswoman-looking-upper-left-corner-with-hopeful-face-expression-standing-white_176420-41313.jpg",              imageAlt: "Sarah Mitchell"
            },
            {
              id: "2",              name: "Jessica Chen",              role: "Event Planner",              company: "Elite Events Co.",              rating: 5,
              imageSrc: "https://img.b2bpic.net/free-photo/smiling-beautiful-middle-aged-business-woman_1262-3085.jpg",              imageAlt: "Jessica Chen"
            },
            {
              id: "3",              name: "Emma Rodriguez",              role: "Corporate Client",              company: "Modern Innovations",              rating: 5,
              imageSrc: "https://img.b2bpic.net/free-photo/studio-portrait-successful-young-businesswoman_1262-5844.jpg",              imageAlt: "Emma Rodriguez"
            },
            {
              id: "4",              name: "Angela Thompson",              role: "Birthday Celebrant",              company: "Private Client",              rating: 5,
              imageSrc: "https://img.b2bpic.net/free-photo/hopeful-young-manager-businesswoman-cross-arms-chest-smiling-looking-confident-like-real-professional-white-background_176420-47052.jpg",              imageAlt: "Angela Thompson"
            }
          ]}
          kpiItems={[
            {
              value: "500+",              label: "Arrangements Created"
            },
            {
              value: "98%",              label: "Client Satisfaction"
            },
            {
              value: "15+",              label: "Years Excellence"
            }
          ]}
        />
      </div>

      <div id="products" data-section="products">
        <ProductCardTwo
          title="Featured Collections"
          description="Handpicked arrangements available for immediate delivery and special occasions."
          tag="Shop Now"
          tagIcon={Flower2}
          textboxLayout="default"
          animationType="slide-up"
          useInvertedBackground="noInvert"
          gridVariant="three-columns-all-equal-width"
          products={[
            {
              id: "1",              brand: "Fiasko",              name: "Crimson Romance",              price: "$125.00",              rating: 5,
              reviewCount: "284",              imageSrc: "https://img.b2bpic.net/free-photo/side-view-pink-ranunculus-flowers-bouquet-glass-vase-flower-shop_140725-12178.jpg",              imageAlt: "Red rose premium bouquet"
            },
            {
              id: "2",              brand: "Fiasko",              name: "Elegant Ivory",              price: "$145.00",              rating: 5,
              reviewCount: "156",              imageSrc: "https://img.b2bpic.net/free-photo/decoration-artificial-flower-table-filtered-image-processed_1232-3695.jpg",              imageAlt: "White elegant floral arrangement"
            },
            {
              id: "3",              brand: "Fiasko",              name: "Rainbow Bliss",              price: "$135.00",              rating: 5,
              reviewCount: "321",              imageSrc: "https://img.b2bpic.net/free-photo/portrait-woman-holding-collection-red-roses_23-2148488575.jpg",              imageAlt: "Colorful mixed flower bouquet"
            },
            {
              id: "4",              brand: "Fiasko",              name: "Exotic Orchid",              price: "$165.00",              rating: 5,
              reviewCount: "198",              imageSrc: "https://img.b2bpic.net/free-photo/closeup-shot-bouquet-with-roses-vase-near-window-sunlight_181624-30882.jpg",              imageAlt: "Luxury orchid arrangement"
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenter
          tag="Get In Touch"
          title="Ready to Create Something Beautiful?"
          description="Let's discuss your floral vision. Contact Fiasko today for custom arrangements, consultations, or special event design."
          tagIcon={Sparkles}
          background={{ variant: "gradient-bars" }}
          useInvertedBackground="noInvert"
          inputPlaceholder="Your email address"
          buttonText="Schedule Consultation"
          termsText="We respect your privacy. We'll only use your email to confirm your consultation."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterMedia
          imageSrc="https://img.b2bpic.net/free-photo/woman-posing-while-holding-bouquet-spring-flowers_23-2148826758.jpg"
          imageAlt="Fiasko Flowers Studio workspace"
          logoText="Fiasko Flowers Studio"
          copyrightText="© 2025 Fiasko Flowers. All rights reserved."
          columns={[
            {
              title: "Services",              items: [
                { label: "Custom Arrangements", href: "#features" },
                { label: "Wedding Design", href: "#features" },
                { label: "Event Floristry", href: "#features" },
                { label: "Delivery", href: "#products" }
              ]
            },
            {
              title: "Company",              items: [
                { label: "About Us", href: "#about" },
                { label: "Our Team", href: "#about" },
                { label: "Sustainability", href: "#about" },
                { label: "Contact", href: "#contact" }
              ]
            },
            {
              title: "Connect",              items: [
                { label: "Instagram", href: "https://instagram.com" },
                { label: "Facebook", href: "https://facebook.com" },
                { label: "Pinterest", href: "https://pinterest.com" },
                { label: "Newsletter", href: "#contact" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}