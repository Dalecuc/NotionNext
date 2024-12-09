- NotionNext 博客

- 此为试验仓库, 版本 v4.7.11 ( 截止 2024 年 12 月最新 ), 对应 Vercel 镜像站 : https://www.epicurus.fun

- [云服务器对应仓库](https://github.com/Daleveral/NotionNext), 主站 : https://www.dalechu.cn

---

<br/>

<p align="center">
    <b>在 Docker 上部署</b>
</p>

Debian 安装 docker :
```shell
apt update && apt install -y docker.io docker-compose jq
```

docker 换源, 自行写入最新可用镜像 :
```shell
vim /etc/docker/daemon.json
```


<br/>

拉取 [我的 NotionNext 镜像](https://github.com/dalecuc/NotionNext/pkgs/container/notionnext) :

常规源 : 

```shell
docker pull ghcr.io/dalecuc/notionnext:main  
```

加速镜像源 : 

```shell
docker pull ghcr.linkos.org/dalecuc/notionnext:main
```

<br/>

docker 镜像重命名 :
```shell
docker tag ghcr.linkos.org/dalecuc/notionnext:main notionnext:latest 
```

```shell
docker images

docker rmi ghcr.linkos.org/dalecuc/notionnext:main

docker images
```

<br/>


创建和运行容器 :
```shell
docker run --name NotionNext -d -p=3000:3000 notionnext:latest 
```


