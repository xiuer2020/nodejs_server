exports.databaseOptions = {
  database: 'demo',
  //数据库名称

  user: 'root',
  //数据库用户名

  password: 'password',
  //数据库密码

  host: 'localhost',
  //数据地址

  dialect: 'mysql',
  //连接数据库类型

  timezone: '+08:00',
  //时区

  pool: {
    //设置连接池

    max: 10,
    //最大连接数

    min: 0,
    //最小连接数

    acquire: 30000,
    //连接超时30s,自动释放

    idle: 10000
    //闲置时间10s,自动释放
  }

}
//数据库配置

exports.requestBodyOptions = {
  limit: '3072kb'
}
//请求体配置

exports.serverOptions = {
  host: 'http://127.0.0.1',
  port: 8003
}
//服务器配置

exports.saltOptions = {
  psswordSalt: '_pw'
  //密码加盐
}
//加盐配置


exports.emailOptions = {
  host: 'smtp.163.com',
  //主机

  port: 465,
  //端口, 25端口在阿里云服务器禁用，建议统一使用465端口

  secure: true, 
  //当端口为465，需要设置为true

  auth: {
    user: 'xiuer@163.com',
    //发邮件地址，即开通授权码的邮箱地址
    pass: 'action2019'
    // 邮件的授权码 
  }
  //身份验证

}
//发邮件配置


exports.tokenOptions = {
  expires: '5d',
  // 过期时间
  tokenSalt: '_tk'
  //token加盐
}
// token 配置