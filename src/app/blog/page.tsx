"use client";

import ReactLenis from "lenis/react";
import BlogCardTwo from '@/components/sections/blog/BlogCardTwo';
import FooterMedia from '@/components/sections/footer/FooterMedia';
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import { useBlogPosts } from "@/hooks/useBlogPosts";

export default function BlogPage() {
    const { posts, isLoading } = useBlogPosts();

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
            <ReactLenis root>
                <div id="nav" data-section="nav">
                    <NavbarStyleCentered
                        brandName="Fiasko"
                        navItems={[
                            { name: "Home", id: "/" },
                            { name: "Gallery", id: "gallery" },
                            { name: "About", id: "about" },
                            { name: "Services", id: "services" },
                            { name: "Testimonials", id: "testimonials" },
                            { name: "Contact", id: "contact" }
                        ]}
                        button={{ text: "Book Now", href: "contact" }}
                    />
                </div>

                {isLoading ? (
                    <div className="w-content-width mx-auto py-20 text-center">
                        <p className="text-foreground">Loading posts...</p>
                    </div>
                ) : (
                    <div id="blog" data-section="blog">
                        <BlogCardTwo
                            blogs={posts}
                            title="Floral Inspiration & Insights"
                            description="Discover the latest trends in floral design, seasonal arrangements, and creative inspiration from our studio"
                            textboxLayout="default"
                            useInvertedBackground="noInvert"
                            animationType="slide-up"
                            carouselMode="buttons"
                            tag="Blog"
                        />
                    </div>
                )}

                <div id="footer" data-section="footer">
                    <FooterMedia
                        imageSrc="https://img.b2bpic.net/free-photo/woman-posing-while-holding-bouquet-spring-flowers_23-2148826758.jpg"
                        imageAlt="Fiasko Flowers Studio workspace"
                        logoText="Fiasko Flowers Studio"
                        copyrightText="© 2025 Fiasko Flowers. All rights reserved."
                        columns={[
                            {
                                title: "Services",                                items: [
                                    { label: "Custom Arrangements", href: "#features" },
                                    { label: "Wedding Design", href: "#features" },
                                    { label: "Event Floristry", href: "#features" },
                                    { label: "Delivery", href: "#products" }
                                ]
                            },
                            {
                                title: "Company",                                items: [
                                    { label: "About Us", href: "#about" },
                                    { label: "Our Team", href: "#about" },
                                    { label: "Sustainability", href: "#about" },
                                    { label: "Contact", href: "#contact" }
                                ]
                            },
                            {
                                title: "Connect",                                items: [
                                    { label: "Instagram", href: "https://instagram.com" },
                                    { label: "Facebook", href: "https://facebook.com" },
                                    { label: "Pinterest", href: "https://pinterest.com" },
                                    { label: "Newsletter", href: "#contact" }
                                ]
                            }
                        ]}
                    />
                </div>
            </ReactLenis>
        </ThemeProvider>
    );
}