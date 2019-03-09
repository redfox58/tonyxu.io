---
Date: 2019-03-09
IssueNumber: 3
Title: Medium的微服务架构
---

[Microservice Architecture at Medium](https://medium.engineering/microservice-architecture-at-medium-9c33805eb74f) (medium.engineering)

> At Medium, our technical stack started with a monolithic Node.js app back in 2012. We have built a couple of satellite services, but we haven’t created a strategy to adopt the microservice architecture systematically. As the system becomes more complex and the team grows, we moved to a microservice architecture in early 2018. In this post, we want to share our experiences of doing it effectively and avoiding microservice syndromes.

我们讨论从单体式巨型应用切换至微服务架构已经有些年了。阅读大公司是如何成功经历这个转型，以及他们对于转型微服务架构的原则和策略可以帮助我们更加充分的利用微服务架构的优势。

阅读更多转型**微服务**架构的故事:

- LinkedIn: [Q&A with Jim Brikman: Splitting Up a Codebase into Microservices and Artifacts](https://engineering.linkedin.com/blog/2016/02/q-a-with-jim-brikman--splitting-up-a-codebase-into-microservices)
- Uber [Service-Oriented Architecture: Scaling the Uber Engineering Codebase As We Grow](https://eng.uber.com/soa/)
- Shopify: [Deconstructing the Monolith: Designing Software that Maximizes Developer Productivity](https://engineering.shopify.com/blogs/engineering/deconstructing-monolith-designing-software-maximizes-developer-productivity)
- Squarespace: [The Pillars of Squarespace Services](https://engineering.squarespace.com/blog/2017/the-pillars-of-squarespace-services)
- Netflix: [Adopting Microservices at Netflix: Lessons for Architectural Design](https://www.nginx.com/blog/microservices-at-netflix-architectural-best-practices)
- Box: [Kubernetes at Box: Microservices at Maximum Velocity](https://blog.box.com/kubernetes-box-microservices-maximum-velocity)