"use client";

import ReactLenis from "lenis/react";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import ProductCatalog from "@/components/ecommerce/productCatalog/ProductCatalog";
import FooterMedia from '@/components/sections/footer/FooterMedia';
import { useProductCatalog } from "@/hooks/useProductCatalog";
import { useState } from 'react';

export default function ShopPage() {
    const {
        products,
        isLoading,
        search,
        setSearch,
        filters,
    } = useProductCatalog({ basePath: "/shop" });

    const [cartOpen, setCartOpen] = useState(false);

    if (isLoading) {
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
                    <div id="navbar" data-section="navbar">
                        <NavbarStyleCentered
                            brandName="Fiasko"
                            navItems={[
                                { name: "Home", id: "/" },
                                { name: "Shop", id: "/shop" }
                            ]}
                            button={{ text: "Cart", onClick: () => setCartOpen(true) }}
                        />
                    </div>
                    <main className="min-h-screen flex items-center justify-center pt-20">
                        <p className="text-foreground">Loading products...</p>
                    </main>
                    <div id="footer" data-section="footer">
                        <FooterMedia
                            imageSrc="https://img.b2bpic.net/free-photo/woman-posing-while-holding-bouquet-spring-flowers_23-2148826758.jpg"
                            imageAlt="Fiasko Flowers Studio workspace"
                            logoText="Fiasko Flowers Studio"
                            copyrightText="© 2025 Fiasko Flowers. All rights reserved."
                            columns={[
                                {
                                    title: "Services",                                    items: [
                                        { label: "Custom Arrangements", href: "#features" },
                                        { label: "Wedding Design", href: "#features" },
                                        { label: "Event Floristry", href: "#features" },
                                        { label: "Delivery", href: "#products" }
                                    ]
                                },
                                {
                                    title: "Company",                                    items: [
                                        { label: "About Us", href: "#about" },
                                        { label: "Our Team", href: "#about" },
                                        { label: "Sustainability", href: "#about" },
                                        { label: "Contact", href: "#contact" }
                                    ]
                                },
                                {
                                    title: "Connect",                                    items: [
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
                <div id="navbar" data-section="navbar">
                    <NavbarStyleCentered
                        brandName="Fiasko"
                        navItems={[
                            { name: "Home", id: "/" },
                            { name: "Shop", id: "/shop" }
                        ]}
                        button={{ text: "Cart", onClick: () => setCartOpen(true) }}
                    />
                </div>
                <div id="productCatalog" data-section="productCatalog">
                    <ProductCatalog
                        layout="page"
                        products={products}
                        searchValue={search}
                        onSearchChange={setSearch}
                        searchPlaceholder="Search products..."
                        filters={filters}
                        emptyMessage="No products found"
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