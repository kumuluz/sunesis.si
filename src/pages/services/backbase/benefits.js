import carouselDevelop from "../../../assets/images/carousel_develope.svg";
import carouselProduce from "../../../assets/images/carousel_produce.svg";
import carouselSeize from "../../../assets/images/carousel_seize.svg";
import carouselDeliver from "../../../assets/images/carousel_deliver.svg";

export const benefits = (t) => [
  {
    icon: carouselDevelop,
    title: t("backbase.benefits.items.item-1.title"),
    description: t("backbase.benefits.items.item-1.description"),
  },
  {
    icon: carouselProduce,
    title: t("backbase.benefits.items.item-2.title"),
    description: t("backbase.benefits.items.item-2.description"),
  },
  {
    icon: carouselSeize,
    title: t("backbase.benefits.items.item-3.title"),
    description: t("backbase.benefits.items.item-3.description"),
  },
  {
    icon: carouselDeliver,
    title: t("backbase.benefits.items.item-4.title"),
    description: t("backbase.benefits.items.item-4.description"),
  },
];
