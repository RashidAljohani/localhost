---
layout: post
title:  What is Operator
categories: [Operator,OpenShift]
excerpt: Automate operational process such as build binaries, handle upgrades, and react to failures automatically
image: /images/blogs/what-is-operator/banner.png
author: ["RashidAljohani"]
---


![](/images/blogs/what-is-operator/banner.png)


Operator is a method of packaging and deploying Kubernetes native applications. It aims to automate the deployment and operational processes such as: build binaries, handle upgrades, and react to failures automatically. Operators are usually shipped by vendors who are the experts of their products. 

**But wait for a second, what Operator is important ?** we agree that containers promised us with the capability of building apps once and deploy them anywhere else. That is true from the development perspective, but in terms of operations .. it gets a bit complicated. Here's where Operator comes to play, let's take an example of a database application such as PostgreSQL or Cassandra. To maintain such an application in a production environment, will require industry knowledge to deal (probably manually) with objects like _ingress_, _statefulset_, _deployment_, and many others; in cases such as scale, upgrade, or backup. Operator systematizes the operational knowledge as code to simplify and enable automated lifecycle of Kubernetes applications (stateful or stateless)


Here's an example of an Operator that:

```yaml
kind: database
metadata:
    name: my-database-example
spec:
    replicationFactor: 3
    autoscale: true
    backup: hourly
    geography:
        restriction: EU
        preference: Italy
```


* enable auto scaling
* automate data backup
* apply data locality regulations (e.g. GDPR)
* apply locations preference


**Demo - Deploy Operator on OpenShift**

<div class="iframe-container">
  <iframe width="1425" height="559" src="https://www.youtube-nocookie.com/embed/HzkE7CZU7Bg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

