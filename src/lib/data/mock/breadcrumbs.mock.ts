import type { BreadcrumbsProps } from "$lib/components/breadcrumbs/model";

export const breadcrumbsMock: BreadcrumbsProps = {
  items: [
    {
      label: "Home",
      path: "/",
      parentId: "home",
      id: "home",
    },
    {
      label: "Categories",
      path: "/categories",
      parentId: "home",
      id: "categories",
    },
    {
      label: "Cars",
      path: "/categories/cars",
      parentId: "categories", 
      id: "cars", 
    }
  ]
};