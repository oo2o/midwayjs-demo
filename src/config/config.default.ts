import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';

export type DefaultConfig = PowerPartial<EggAppConfig>;

export default (appInfo: EggAppInfo) => {
  const config = {} as DefaultConfig;

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1611380667116_4975';

  // add your config here
  config.middleware = [];
  config.orm = {
    type: 'mysql',
    host: '',
    port: 3306,
    username: '',
    password: '',
    database: undefined,
    synchronize: false,
    logging: false,
  }
  return config;
};
