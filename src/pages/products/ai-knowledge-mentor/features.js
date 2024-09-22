import platform from "../../../assets/images/platform.svg";
import apis from "../../../assets/images/apis.svg";
import community from "../../../assets/images/community.svg";
import dapis from "../../../assets/images/dapis.svg";
import operational from "../../../assets/images/operational.svg";
import strategicTactical from "../../../assets/images/strategic-tactical.svg";

const features = (t) => [
  {
    title: t("knowledge-mentor.features.knowledge.title"),
    desc: t("knowledge-mentor.features.knowledge.description"),
    image: apis,
  },
  {
    title: t("knowledge-mentor.features.nlp.title"),
    desc: t("knowledge-mentor.features.nlp.description"),
    image: platform,
  },
  {
    title: t("knowledge-mentor.features.gamification.title"),
    desc: t("knowledge-mentor.features.gamification.description"),
    image: community,
  },
  {
    title: t("knowledge-mentor.features.integration.title"),
    desc: t("knowledge-mentor.features.integration.description"),
    image: dapis,
  },
  {
    title: t("knowledge-mentor.features.scalable.title"),
    desc: t("knowledge-mentor.features.scalable.description"),
    image: operational,
  },
  {
    title: t("knowledge-mentor.features.adaptable.title"),
    desc: t("knowledge-mentor.features.adaptable.description"),
    image: strategicTactical,
  },
];

export default features;
