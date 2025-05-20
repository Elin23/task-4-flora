import type { PagesLinks } from "../types/links";

export const pagesLinks : PagesLinks[] = [
    {
        path: "/",
        label: "Home",
    },
    {
        path: "/about",
        label: "About",
        subLinks: [
            {
                sectionName: "About us",
                id:"#about"
            },
            {
                sectionName: "News",
                id:"#news"
            },
            {
                sectionName: "Pricing",
                id:"#pricing"
            },
            {
                sectionName: "New Property",
                id:"#property"
            }
        ]
    },
    {
        path: "/services",
        label: "Services",
        subLinks: [
            {
                sectionName: "Payment & Tax",
                id:"#payment"
            },
            {
                sectionName: "Features",
                id:"#features"
            },
            {
                sectionName: "View Booking",
                id:"#booking"
            },
            {
                sectionName: "Support",
                id:"#support"
            }
        ]
    },
    {
        path: "/properties",
        label: "New Property",
    },
    {
        path: "/contact",
        label: "Contact",
    },
    {
        path: "/login",
        label: "Login",
    },
    {
        path: "/signup",
        label: "Sign up",
    },
    {
        path: "/terms",
        label: "Terms & Conditions",
    },
    {
        path: "/privacy",
        label: "Privacy Policy",
    }
]