import appsIcon from './images/services/service-apps.svg';
import modernizationIcon from './images/services/service-modernization.svg';
import cloudIcon from './images/services/service-cloud.svg';
import agileIcon from './images/services/service-agile.svg';
import integrationIcon from './images/services/service-integration.svg';
import businessIcon from './images/services/service-business.svg';
import mentoringIcon from './images/services/service-mentoring.svg';
import blockchainIcon from './images/services/service-blockchain.svg';

export const coreServices = t => {
  return [
    {
      icon: appsIcon,
      name: t('services.service1')
    },
    {
      icon: modernizationIcon,
      name: t('services.service2')
    },
    {
      icon: cloudIcon,
      name: t('services.service3')
    },
    {
      icon: agileIcon,
      name: t('services.service4')
    },
    {
      icon: integrationIcon,
      name: t('services.service5')
    },
    {
      icon: businessIcon,
      name: t('services.service6')
    },
    {
      icon: mentoringIcon,
      name: t('services.service7')
    },
    {
      icon: blockchainIcon,
      name: t('services.service8')
    }
  ];
};
