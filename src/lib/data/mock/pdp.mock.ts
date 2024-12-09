import type { PDP } from "$lib/models/pages/pdp";

export const PDPmock: PDP = {
    header: {
        breadcrumbs: [
            { label: "Home", path: "/home", parentId: "0", id: "1" },
            { label: "Veicoli", path: "/vehicles", parentId: "1", id: "2" },
            {
                label: "Veicolo 123",
                path: "/vehicles/123",
                parentId: "2",
                id: "3",
            },
        ],
    },
    contactSection: {
        title: "Shipping",
        description: "Contact us for more information",
        phoneSection: {
            title: "Any questions about this vehicle?",
            ctas: [
                {
                    label: "Call Me Back",
                    blank: false,
                    tagAdobe: null,
                    action: {
                        type: "view",
                        path: "/categories/city-car",
                    },
                },
            ],
        },
    },
    excluWeb: {
        title: "Exclusive Web Offers",
        description: "Get special deals online",
        subItems: [
            { title: "Discount", description: "Save up to 10%" },
            { title: "Free Shipping", description: "On all online orders" },
        ],
    },
    traidInSection: {
        title: "Trade-in",
        description: "Estimate your vehicle's value",
        cta: [
            {
                label: "Estimate Now",
                blank: false,
                tagAdobe: null,
                action: {
                    type: "view",
                    path: "/categories/city-car",
                },
            },
        ],
    },
    relatedCars: {
        title: "Related Vehicles",
    },
};
