---
title: 'AWS: connect EC2'
layout: single
author_profile: true
read_time: true
comments: true
share: true
related: true
---

1. Run Git Bash as administrator
2. Connect EC2 ` $ ssh ec2-user@public-ip-address -i ec2keypair.pem`
3. Remove old directory `$ rm  -rf  xx`
4. Clone new repository: `git clone https://github.com/LiMarcus/myWeb.git`
5. `npm install -g pm2`
6. check current status:  `pm2 list`
7. kill all process `pm2 kill`
8. remove `npm remove pm2 -g`
9. `pm2 start app.js`
10. `pm2 save`
11. `pm2 startup`
12. [Nginx](https://www.nginx.com/blog/setting-up-nginx/)

My front end send https request to EC2 balancer, the balancer has a function to convert https to http then send to instance, after that, I use Nginx to redirect http request to port 8888;

Actually, Nginx can handle https request, we can set SSL in Nginx;
But I choose using AWS certificate, the disadvatange is this certificate can only deploy on EC2 balancer, then use balancer send requset to each instance;

```
sudo nano /etc/nginx/nginx.conf
```
![nginx.conf]({{ site.url }}{{ site.baseurl }}/assets/images/2019-10-22_nginx_config.PNG)

**load balancer**

![load balancer]({{ site.url }}{{ site.baseurl }}/assets/images/2019-10-22_load_balancer.PNG)