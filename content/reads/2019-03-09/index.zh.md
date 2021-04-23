---
Date: 2019-03-09
IssueNumber: 3
Title: Medium的微服务架构
Source: https://medium.engineering/microservice-architecture-at-medium-9c33805eb74f
---

[Medium的微服务架构](https://medium.engineering/microservice-architecture-at-medium-9c33805eb74f) (medium.engineering)

> 在Medium，我们的技术栈从2012年的单体Node.js应用开始。我们搭建了一系列的周边服务，但是我们都没有提出一个采用微服务架构的系统性战略。随着系统变得越来越复杂，团队规模的扩大，我们在2018年初期搬迁到了微服务架构。这篇文章，我们希望分享我们是如何有效的避免了微服务缺陷。

我们讨论从单体式巨型应用切换至微服务架构已经有些年了。阅读大公司是如何成功经历这个转型，以及他们对于转型微服务架构的原则和策略可以帮助我们更加充分的利用微服务架构的优势。

阅读更多转型**微服务**架构的故事:

- LinkedIn: [Q&A with Jim Brikman: Splitting Up a Codebase into Microservices and Artifacts](https://engineering.linkedin.com/blog/2016/02/q-a-with-jim-brikman--splitting-up-a-codebase-into-microservices)
- Uber [Service-Oriented Architecture: Scaling the Uber Engineering Codebase As We Grow](https://eng.uber.com/soa/)
- Shopify: [Deconstructing the Monolith: Designing Software that Maximizes Developer Productivity](https://engineering.shopify.com/blogs/engineering/deconstructing-monolith-designing-software-maximizes-developer-productivity)
- Squarespace: [The Pillars of Squarespace Services](https://engineering.squarespace.com/blog/2017/the-pillars-of-squarespace-services)
- Netflix: [Adopting Microservices at Netflix: Lessons for Architectural Design](https://www.nginx.com/blog/microservices-at-netflix-architectural-best-practices)
- Box: [Kubernetes at Box: Microservices at Maximum Velocity](https://blog.box.com/kubernetes-box-microservices-maximum-velocity)