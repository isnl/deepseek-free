# DeepSeek 模型使用指南

更新时间：2025-02-14

本文档介绍如何通过第三方平台的在线服务或API方式接入 DeepSeek 模型。支持通过 ChatBox 或 Cherry Studio 等开源软件使用。

## 目录
- [在线体验平台](#在线体验)
- [API 接入方式](#api接入)
- [开源客户端](#大模型客户端)

## 在线体验

### 1. 腾讯元宝 【推荐】
- 满血版本，支持联网搜索
- 稳定性强
- 微信/QQ扫码登录即可
- 链接：[https://yuanbao.tencent.com/](https://yuanbao.tencent.com/)

![腾讯元宝界面](https://static.iiter.cn/article/8f68cc9c670d10c16df7431a78335dae.png)

### 2. 腾讯云 【推荐】
- 注册后免费使用
- 速度快，稳定性好
- 支持自家联网搜索服务
- 链接：[体验地址](https://lke.cloud.tencent.com/webim_exp/?from=25533#/chat/wQrAwR)

![腾讯云界面](https://static.iiter.cn/article/a3d1f864c49fb9592a7ed0b9683d44a1.png)

### 3. 硅基流动
- 注册后免费使用
- 速度一般，稳定性一般
- 不支持联网搜索
- 链接：[https://cloud.siliconflow.cn/i/gSzg42jx](https://cloud.siliconflow.cn/i/gSzg42jx)

![硅基流动界面](https://static.iiter.cn/article/758c1ae8fbce352cae047a280bd13d48.png)

### 4. 潞晨云
- 注册送10元体验余额
- 满血 DeepSeek-R1 模型
- 支持联网搜索
- 提供免费版和付费版 API
- 链接：[注册地址](https://cloud.luchentech.com/account/signup?invitation_code=invite_SrjPAnLFD1KzKKn25HQF8T)

**API版本说明：**
- 免费版：
  - 模型：deepseek-ai/DeepSeek-R1
  - 限流：每用户每小时最多30次调用，token消耗上限300000个
- 付费版：
  - 模型：VIP/deepseek-ai/DeepSeek-R1
  - 无限流限制

![潞晨云界面](https://static.iiter.cn/article/c04f1fbdcd234517821a2694fa1b2ddc.png)

### 5. 钉钉(32B蒸馏版本)
- 打开钉钉个人助理
- 选择 DeepSeek 即可使用

![钉钉界面](https://static.iiter.cn/article/1dc429e563f386fb6bd874561e2051c5.png)

### 6. 支付宝百宝箱
- 登录后新建应用
- 选择 `DeepSeek-R1.满血版`
- 链接：[https://tbox.alipay.com/](https://tbox.alipay.com/)

![支付宝百宝箱1](https://static.iiter.cn/article/8a6510f8aaeca5e7ad48598ec50262f0.png)
![支付宝百宝箱2](https://static.iiter.cn/article/301407ea12607c56e321397f907fd8d8.png)

### 7. 国家超算中心
- 非满血版本
- 支持7B和32B蒸馏版本
- 链接：[https://chat.scnet.cn/](https://chat.scnet.cn/)

![超算中心界面](https://static.iiter.cn/article/a9783575f02969b5070a27871954c2b7.png)

### 8. 基石
- 注册送50元配额
- 需要实名认证
- 不支持联网搜索
- 链接：[https://www.coreshub.cn/](https://www.coreshub.cn/)

![基石界面](https://static.iiter.cn/article/6fb25c3595fea96790a8fe40b9088ac5.png)

### 9. 无问芯穹
- 注册即可在线免费体验
- 链接：[https://cloud.infini-ai.com/](https://cloud.infini-ai.com/)

![无问芯穹界面](https://static.iiter.cn/article/9a6b53f768901c9f3227930efbd1cf65.png)

### 10. 商汤大装置
- 注册送80元代金券
- 需开通大模型服务
- 链接：[https://console.sensecore.cn/](https://console.sensecore.cn/)

![商汤界面1](https://static.iiter.cn/article/ad1e2438fec7064471196a53db70dc8b.png)
![商汤界面2](https://static.iiter.cn/article/28258b15c099849231d3894e659da8ff.png)

## API接入

### 1. 腾讯云
- OpenAI 接口兼容
- 限时免费（至2025年2月25日23:59:59）
- 支持 DeepSeek-V3 和 DeepSeek-R1 双模型
- 单账号接口并发上限为5
- 文档：[API文档](https://cloud.tencent.com/document/product/1772/115963)

![腾讯云API](https://static.iiter.cn/article/23b47e9799ec8452a48c13d3e2fb195f.png)

### 2. 阿里云百炼
- 注册送100万tokens（180天有效期）
- 链接：[https://bailian.console.aliyun.com/](https://bailian.console.aliyun.com/)

![阿里云百炼](https://static.iiter.cn/article/6fb25c3595fea96790a8fe40b9088ac5.png)

### 3. 硅基流动
- 注册送14元平台配额
- OpenAI 接口兼容
- 支持多种模型
- 链接：[https://cloud.siliconflow.cn/i/gSzg42jx](https://cloud.siliconflow.cn/i/gSzg42jx)

### 4. 基石
- 注册送50元配额
- 需要实名认证
- OpenAI 接口兼容
- 链接：[https://www.coreshub.cn/](https://www.coreshub.cn/)

### 5. 潞晨云
- 注册送10元体验余额
- 满血 DeepSeek-R1 模型
- 提供免费版和付费版API
- 链接：[注册地址](https://cloud.luchentech.com/account/signup?invitation_code=invite_SrjPAnLFD1KzKKn25HQF8T)

### 6. 无问芯穹
- 满血版本
- API限时免费调用
- 链接：[https://cloud.infini-ai.com/](https://cloud.infini-ai.com/)

### 7. 商汤大装置
- 注册送80元代金券
- 需要开通服务后使用
- 链接：[https://console.sensecore.cn/](https://console.sensecore.cn/)

![商汤API界面](https://static.iiter.cn/article/ad1e2438fec7064471196a53db70dc8b.png)
![商汤API限制](https://static.iiter.cn/article/1ff479f274360b953e00b4d4f169c7e9.png)

## 大模型客户端

### 1. ChatBox
多平台AI模型客户端，支持：
- ChatGPT
- Claude
- Google Gemini
- Ollama 等主流模型
- 全平台支持（Windows、Mac、Linux、Web、Android、iOS）

![ChatBox界面](https://static.iiter.cn/article/1ac8b0a307a0a933307db014dcfbc72d.png)

仓库地址：[ChatBox GitHub](https://github.com/Bin-Huang/chatbox)

### 2. Cherry Studio
跨平台大语言模型客户端：
- 支持多个LLM服务商
- 兼容 Windows、Mac 和 Linux
- 开源免费

![Cherry Studio界面](https://static.iiter.cn/article/78113118e190ca51374ac827d4221ec5.png)

仓库地址：[Cherry Studio GitHub](https://github.com/CherryHQ/cherry-studio)