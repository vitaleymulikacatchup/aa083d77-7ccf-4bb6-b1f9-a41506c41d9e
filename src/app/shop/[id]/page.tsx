"use client";

import { use, useCallback } from "react";
import { useRouter } from "next/navigation";
import ReactLenis from "lenis/react";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import ProductDetailCard from "@/components/ecommerce/productDetail/ProductDetailCard";
import ProductCart from "@/components/ecommerce/cart/ProductCart";
import FooterMedia from '@/components/sections/footer/FooterMedia';
import { useProductDetail } from "@/hooks/useProductDetail";
import { useCart } from "@/hooks/useCart";
import { useCheckout } from "@/hooks/useCheckout";

interface ProductPageProps {
    params: Promise<{ id: string }>;
}

export default function ProductPage({ params }: ProductPageProps) {
    const { id } = use(params);
    const router = useRouter();

    const {
        product,
        isLoading,
        images,
        meta,
        variants,
        quantityVariant,
        selectedQuantity,
        createCartItem,
    } = useProductDetail(id);

    const {
        items: cartItems,
        isOpen: cartOpen,
        setIsOpen: setCartOpen,
        addItem,
        updateQuantity,
        removeItem,
        total: cartTotal,
        getCheckoutItems,
    } = useCart();

    const { buyNow, checkout, isLoading: isCheckoutLoading } = useCheckout();

    const handleAddToCart = useCallback(() => {
        const item = createCartItem();
        if (item) {
            addItem(item);
        }
    }, [createCartItem, addItem]);

    const handleBuyNow = useCallback(() => {
        if (product) {
            buyNow(product, selectedQuantity);
        }
    }, [product, selectedQuantity, buyNow]);

    const handleCheckout = useCallback(async () => {
        if (cartItems.length === 0) return;

        const currentUrl = new URL(window.location.href);
        currentUrl.searchParams.set("success", "true");

        await checkout(getCheckoutItems(), { successUrl: currentUrl.toString() });
    }, [cartItems, checkout, getCheckoutItems]);

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
                        <p className="text-foreground">Loading product...</p>
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

    if (!product) {
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
                        <div className="text-center">
                            <p className="text-foreground mb-4">Product not found</p>
                            <button
                                onClick={() => router.push("/shop")}
                                className="primary-button px-6 py-2 rounded-theme"
                            >
                                Back to Shop
                            </button>
                        </div>
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
                <div id="productDetailCard" data-section="productDetailCard">
                    <ProductDetailCard
                        layout="page"
                        name={product.name}
                        price={product.price}
                        salePrice={meta.salePrice}
                        rating={product.rating || 0}
                        description={product.description}
                        images={images}
                        variants={variants.length > 0 ? variants : undefined}
                        quantity={quantityVariant}
                        ribbon={meta.ribbon}
                        inventoryStatus={meta.inventoryStatus}
                        inventoryQuantity={meta.inventoryQuantity}
                        sku={meta.sku}
                        buttons={[
                            { text: "Add To Cart", onClick: handleAddToCart },
                            { text: "Buy Now", onClick: handleBuyNow },
                        ]}
                    />
                </div>
                <div id="productCart" data-section="productCart">
                    <ProductCart
                        isOpen={cartOpen}
                        onClose={() => setCartOpen(false)}
                        items={cartItems}
                        onQuantityChange={updateQuantity}
                        onRemove={removeItem}
                        total={`$${cartTotal}`}
                        buttons={[
                            {
                                text: isCheckoutLoading ? "Processing..." : "Check Out",                                onClick: handleCheckout,
                            },
                        ]}
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