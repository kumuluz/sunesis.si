import carouselDevelop from "../../assets/images/carousel_develope.svg";
import carouselProduce from "../../assets/images/carousel_produce.svg";
import carouselSeize from "../../assets/images/carousel_seize.svg";
import carouselDeliver from "../../assets/images/carousel_deliver.svg";


export const benefits = t => {
  return [
    {
      icon:  carouselDevelop,
      title: t('benefits.benefit1.title'),
      description: t('benefits.benefit1.description')
    },
    {
      icon: carouselProduce,
      title: t('benefits.benefit2.title'),
      description: t('benefits.benefit2.description')
    },
    {
      icon: carouselSeize,
      title: t('benefits.benefit3.title'),
      description: t('benefits.benefit3.description')
    },{
      icon: carouselDeliver,
      title: t('benefits.benefit4.title'),
      description: t('benefits.benefit4.description')
    }
  ];
};
