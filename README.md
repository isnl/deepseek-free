# DeepSeek（白嫖） 免费使用/API接入指南【持续更新】

## 前言

这事儿说来也怪，`DeepSeek` 爆火的时候，村里村外都说它好，说它会思考，能听懂人话，办事儿也机灵。用的人跟滚雪球似的，今儿张三装上了，明儿李四也来凑热闹，没成想人一多，官方的服务器就转不动了，经常报 `服务器繁忙`。

![DeepSeek服务器繁忙](https://static.iiter.cn/article/9b4e62bff40c7e9e89f515e45b49792d.png)

这不，我寻思着得整理个法子出来。你要问这法子是啥，那就是找些别的地方用 `DeepSeek`。有在线用的，有接口用的，还有些开源的客户端，反正是应有尽有。

你要是想跟它聊天解闷儿，成。你要是想把它弄到自个儿项目里头去，也成。

注：本文中的 `文案部分` 由 `DeepSeek-R1` 协助生成，数据为人工整理。

![文案部分由AI协助生成](https://static.iiter.cn/article/2578dd49054ed3f7ca601df30c6f6a12.png)

> 实时内容更新，请关注:
>
> *   🚀 用AI生成的部署在vercel的 `deepseek导航` : <http://ds-free.vercel.app/>
> *   📦 GitHub仓库: <https://github.com/isnl/deepseek-free>
> *   公众号: `极客密码`

## 一、在线使用平台

### 腾讯元宝【推荐】
说起腾讯元宝啊，那可真是个好东西。怎么个好法呢？它这模型是完整版的，不是那种阉割版，还能上网搜东西。最主要的是稳当，一扫码就能用，也不用你东填西填的。

腾讯元宝是目前体验最好的平台之一:
- 完整版 DeepSeek 模型
- 支持联网搜索功能
- 稳定性强,响应快
- 微信/QQ扫码即可使用
- 访问地址: [https://yuanbao.tencent.com/](https://yuanbao.tencent.com/)

![腾讯元宝界面](https://static.iiter.cn/article/8f68cc9c670d10c16df7431a78335dae.png)

### 腾讯云【推荐】
腾讯云的优势:
- 注册后可免费使用
- 响应速度快,服务稳定
- 集成了腾讯自家的联网搜索服务
- 访问地址: [https://lke.cloud.tencent.com/webim_exp/?from=25533#/chat/wQrAwR](https://lke.cloud.tencent.com/webim_exp/?from=25533#/chat/wQrAwR)

![腾讯云界面](https://static.iiter.cn/article/a3d1f864c49fb9592a7ed0b9683d44a1.png)

### 火山引擎
- 新用户专享：注册即送30元体验金
- 支持在线对话及API调用（需实名认证）
- 响应速度快，服务稳定
- 访问地址：[[火山引擎智能创作平台](https://www.volcengine.com/experience/ark?utm_term=202502dsinvite&ac=DSASUQY5&rc=J3D8J5O7)](https://www.volcengine.com/experience/ark?utm_term=202502dsinvite&ac=DSASUQY5&rc=J3D8J5O7)

![火山引擎在线体验](https://static.iiter.cn/article/5707e39e8f115375411a3306867b888b.png)

### 知乎直达
- 深度整合知乎海量知识库
- 自带联网搜索功能
- 擅长学术、科技等专业领域问答
- 访问地址：[https://zhida.zhihu.com/](https://zhida.zhihu.com/)

![知乎直达界面](https://static.iiter.cn/article/e46cd51e06d898df5a6a6d2f6928c9ef.png)

### 百度搜索
- 与百度搜索深度融合，可以直接在搜索框使用
- 自带联网搜索
- 访问地址：[https://www.baidu.com/](https://www.baidu.com/)

![百度搜索AI助手](https://static.iiter.cn/article/230c22e27a2c63f92e9985dd8d627e42.png)

### 商汤大装置 【推荐】
- 注册送80元代金券
- 需开通大模型服务
- 访问地址：[https://console.sensecore.cn/](https://console.sensecore.cn/)

![商汤界面1](https://static.iiter.cn/article/ad1e2438fec7064471196a53db70dc8b.png)
![商汤界面2](https://static.iiter.cn/article/28258b15c099849231d3894e659da8ff.png)

### 支付宝百宝箱
- 登录后新建应用
- 选择 `DeepSeek-R1.满血版`
- 访问地址：[https://tbox.alipay.com/](https://tbox.alipay.com/)

![支付宝百宝箱1](https://static.iiter.cn/article/8a6510f8aaeca5e7ad48598ec50262f0.png)
![支付宝百宝箱2](https://static.iiter.cn/article/301407ea12607c56e321397f907fd8d8.png)

### 潞晨云【新用户福利】
- 注册送10元体验余额
- 满血 DeepSeek-R1 模型
- 支持联网搜索
- 提供免费版和付费版 API
- 访问地址：[https://cloud.luchentech.com/account/signup?invitation_code=invite_SrjPAnLFD1KzKKn25HQF8T](https://cloud.luchentech.com/account/signup?invitation_code=invite_SrjPAnLFD1KzKKn25HQF8T)

![潞晨云界面](https://static.iiter.cn/article/c04f1fbdcd234517821a2694fa1b2ddc.png)

### 硅基流动
- 注册后免费使用
- 速度一般，稳定性一般
- 不支持联网搜索
- 访问地址：[https://cloud.siliconflow.cn/i/gSzg42jx](https://cloud.siliconflow.cn/i/gSzg42jx)

![硅基流动界面](https://static.iiter.cn/article/758c1ae8fbce352cae047a280bd13d48.png)

### 无问芯穹
- 注册即可在线免费体验
- 满血版本支持
- 访问地址：[https://cloud.infini-ai.com/](https://cloud.infini-ai.com/)

![无问芯穹界面](https://static.iiter.cn/article/9a6b53f768901c9f3227930efbd1cf65.png)


### 秘塔搜索

- 注册后免费使用，微信扫码登录，需绑定手机号，支持联网搜索
- 访问地址：[https://metaso.cn/](https://metaso.cn/)

![秘塔界面](https://static.iiter.cn/article/4781ecb1ecf2f03a80d9e7e093312e6f.png)

### 国家超算中心
- 非满血版本
- 支持7B和32B蒸馏版本
- 访问地址：[https://chat.scnet.cn/](https://chat.scnet.cn/)

![超算中心界面](https://static.iiter.cn/article/a9783575f02969b5070a27871954c2b7.png)

### 钉钉(32B蒸馏版本)
- 打开钉钉个人助理
- 选择 DeepSeek 即可使用
- 适合企业用户
- 访问地址：[https://www.dingtalk.com/](https://www.dingtalk.com/)

![钉钉界面](https://static.iiter.cn/article/1dc429e563f386fb6bd874561e2051c5.png)

### 基石
- 注册送50元配额
- 需要实名认证
- 不支持联网搜索
- 访问地址：[https://www.coreshub.cn/](https://www.coreshub.cn/)

![基石界面](https://static.iiter.cn/article/6fb25c3595fea96790a8fe40b9088ac5.png)



## 二、API接入方式

要说这接入API的事儿，就跟村里通自来水似的。您要自个儿打井吧，费时费力；要是能接上现成的水管，拧开龙头就能用，那才叫舒坦。这不，我这儿倒有几个现成的门路，好比说：

### 腾讯云API【限时免费】
- OpenAI 接口完全兼容
- 免费期限:2025年2月25日23:59:59前
- 支持 DeepSeek-V3 和 DeepSeek-R1 双模型
- 单账号接口并发上限为5
- [https://cloud.tencent.com/document/product/1772/115963](https://cloud.tencent.com/document/product/1772/115963)

![腾讯云API](https://static.iiter.cn/article/23b47e9799ec8452a48c13d3e2fb195f.png)

### 阿里云百炼
- 新用户福利: 赠送100万tokens(180天有效)
- 依托阿里云基础设施
- 访问地址：[https://bailian.console.aliyun.com/](https://bailian.console.aliyun.com/)

![阿里云百炼](https://static.iiter.cn/article/6fb25c3595fea96790a8fe40b9088ac5.png)


### 无问芯穹
- 满血版本
- API限时免费调用
- 响应速度快
- 访问地址：[https://cloud.infini-ai.com/](https://cloud.infini-ai.com/)

### 商汤大装置
- 注册送80元代金券
- 需要开通服务后使用
- 提供详细的API文档
- 访问地址：[https://console.sensecore.cn/](https://console.sensecore.cn/)

![商汤API界面](https://static.iiter.cn/article/ad1e2438fec7064471196a53db70dc8b.png)
![商汤API限制](https://static.iiter.cn/article/1ff479f274360b953e00b4d4f169c7e9.png)

### 潞晨云API
提供两个版本:
- 免费版:
  - 使用 deepseek-ai/DeepSeek-R1 模型
  - 每用户每小时限30次调用
  - token消耗上限300000个
- 付费版:
  - VIP/deepseek-ai/DeepSeek-R1 模型
  - 无任何限制
- 访问地址：[https://cloud.luchentech.com/account/signup?invitation_code=invite_SrjPAnLFD1KzKKn25HQF8T](https://cloud.luchentech.com/account/signup?invitation_code=invite_SrjPAnLFD1KzKKn25HQF8T)

### 硅基流动
- 注册送14元平台配额
- OpenAI 接口兼容
- 支持多种模型
- 访问地址：[https://cloud.siliconflow.cn/i/gSzg42jx](https://cloud.siliconflow.cn/i/gSzg42jx)

### 基石
- 注册送50元配额
- 需要实名认证
- OpenAI 接口兼容
- 访问地址：[https://www.coreshub.cn/](https://www.coreshub.cn/)




## 三、开源客户端推荐

要说这客户端的事儿，就跟赶集挑扁担似的。您要是单挑一个筐，装不下多少东西；要是能找个好扁担，两头都能挂上筐，那才叫方便。这不，我这儿倒有两把趁手的扁担，您且听我说：

### ChatBox - 全平台AI对话客户端

ChatBox 是一个功能强大的多模型客户端：
- 支持主流AI模型:
  - ChatGPT
  - Claude
  - Google Gemini
  - Ollama 等
- 全平台支持:
  - 桌面端: Windows、Mac、Linux
  - 移动端: Android、iOS
  - Web端在线使用
- 界面简洁美观,使用体验好
- 完全开源免费
- Github 开源地址：[https://github.com/Bin-Huang/chatbox](https://github.com/Bin-Huang/chatbox)

![ChatBox界面](https://static.iiter.cn/article/1ac8b0a307a0a933307db014dcfbc72d.png)

### Cherry Studio - 跨平台AI助手

Cherry Studio 专注于提供流畅的大模型使用体验：
- 支持多个LLM服务商接入
- 跨平台兼容: Windows、Mac、Linux
- 界面现代简约
- 操作逻辑清晰
- 完全开源免费
- Github 开源地址：[https://github.com/CherryHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio)

![Cherry Studio界面](https://static.iiter.cn/article/78113118e190ca51374ac827d4221ec5.png)

## 总结

这事儿说到底啊，就是得看你想咋用。要是就图个问问答答，那腾讯元宝准没错；要是想开发点啥，腾讯云那个免费API挺好，阿里云那个也行；要是想整得精细点，那就试试 `ChatBox` 或者 `Cherry Studio`。

这话说一句顶一万句：找个好用的工具不容易，找到了就得珍惜。

> 温馨提示：这些地方随时都可能有变化，要是想知道最新消息，时不时去看看开头那个导航站准没错。

要是觉得有用，就给个赞呗，关注公众号 `@极客密码` 也成，以后有啥新鲜事儿都在这儿说。 