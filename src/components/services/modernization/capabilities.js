import platform from "../../../assets/images/platform.svg";
import apis from "../../../assets/images/apis.svg";
import community from "../../../assets/images/community.svg";
import dapis from "../../../assets/images/dapis.svg";
import operational from "../../../assets/images/operational.svg";
import strategicTactical from "../../../assets/images/strategic-tactical.svg";

const capabilities = (t) => [
  {
    title: t("modernization.capabilities.replatforming.title"),
    desc: t("modernization.capabilities.replatforming.description"),
    image: apis,
  },
  {
    title: t("modernization.capabilities.modernization.title"),
    desc: t("modernization.capabilities.modernization.description"),
    image: platform,
  },
  {
    title: t("modernization.capabilities.optimization.title"),
    desc: t("modernization.capabilities.optimization.description"),
    image: community,
  },
  {
    title: t("modernization.capabilities.microservices.title"),
    desc: t("modernization.capabilities.microservices.description"),
    image: dapis,
  },
  {
    title: t("modernization.capabilities.integration.title"),
    desc: t("modernization.capabilities.integration.description"),
    image: operational,
  },
  {
    title: t("modernization.capabilities.dev-ops.title"),
    desc: t("modernization.capabilities.dev-ops.description"),
    image: strategicTactical,
  },
];

export default capabilities;
