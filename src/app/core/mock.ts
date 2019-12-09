import {environment} from '../../environments/environment';

export const getServices = (webServices, mockServices) => {
  return environment.isMockEnabled ? mockServices : webServices;
};
