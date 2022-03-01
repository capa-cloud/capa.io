#### envoy http重定向

配置http过滤器类型为envoy.filters.http.router，我们的用例中需要这个过滤器将地址127.0.0.1:10000上收到的请求路由到www.envoyproxy.io，除此之外，envoy还有其他过滤器，比如带宽限制过滤器envoy.filters.http.bandwidth_limit,速率限制过滤器envoy.filters.http.ratelimit等。具体可参考：http 过滤器。

指定了cluster的名称为service_envoyproxy_io， 上文中的listener监听到的请求在37行就会被路由到该cluster，listener_0监听来自下游主机的请求后，路由到service_envoyproxy_io，service_envoyproxy_io会将该请求发送给相应的上游端点进行处理。

https://www.ciocso.com/article/730.html