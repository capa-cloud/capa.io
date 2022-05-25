---
title: "Envoy Gateway"
linkTitle: "Envoy Gateway"
date: 2022-05-21
description: >
    Envoy Gateway.
---

> 重要参考资料：https://mp.weixin.qq.com/s/t1ppAQfm0cPmqhxEARB03Q

## 一、Envoy Gateway

## 二、Envoy Gateway 运维

### 管理界面

#### /cluster

```
cds_egress_app-mesh_app-100035399-canary_prod_http_8080::observability_name::cds_egress_app-mesh_app-100035399-canary_prod_http_8080
cds_egress_app-mesh_app-100035399-canary_prod_http_8080::default_priority::max_connections::2147483647
cds_egress_app-mesh_app-100035399-canary_prod_http_8080::default_priority::max_pending_requests::2147483647
cds_egress_app-mesh_app-100035399-canary_prod_http_8080::default_priority::max_requests::2147483647
cds_egress_app-mesh_app-100035399-canary_prod_http_8080::default_priority::max_retries::2147483647
cds_egress_app-mesh_app-100035399-canary_prod_http_8080::high_priority::max_connections::1024
cds_egress_app-mesh_app-100035399-canary_prod_http_8080::high_priority::max_pending_requests::1024
cds_egress_app-mesh_app-100035399-canary_prod_http_8080::high_priority::max_requests::1024
cds_egress_app-mesh_app-100035399-canary_prod_http_8080::high_priority::max_retries::3
cds_egress_app-mesh_app-100035399-canary_prod_http_8080::added_via_api::true
cds_egress_app-mesh_app-100035399-canary_prod_http_8080::172.20.215.183:8080::cx_active::0
cds_egress_app-mesh_app-100035399-canary_prod_http_8080::172.20.215.183:8080::cx_connect_fail::0
cds_egress_app-mesh_app-100035399-canary_prod_http_8080::172.20.215.183:8080::cx_total::0
cds_egress_app-mesh_app-100035399-canary_prod_http_8080::172.20.215.183:8080::rq_active::0
cds_egress_app-mesh_app-100035399-canary_prod_http_8080::172.20.215.183:8080::rq_error::0
cds_egress_app-mesh_app-100035399-canary_prod_http_8080::172.20.215.183:8080::rq_success::0
cds_egress_app-mesh_app-100035399-canary_prod_http_8080::172.20.215.183:8080::rq_timeout::0
cds_egress_app-mesh_app-100035399-canary_prod_http_8080::172.20.215.183:8080::rq_total::0
cds_egress_app-mesh_app-100035399-canary_prod_http_8080::172.20.215.183:8080::hostname::app-100035399-canary.prod.svc.cluster.local.
cds_egress_app-mesh_app-100035399-canary_prod_http_8080::172.20.215.183:8080::health_flags::healthy
cds_egress_app-mesh_app-100035399-canary_prod_http_8080::172.20.215.183:8080::weight::1
cds_egress_app-mesh_app-100035399-canary_prod_http_8080::172.20.215.183:8080::region::
cds_egress_app-mesh_app-100035399-canary_prod_http_8080::172.20.215.183:8080::zone::
cds_egress_app-mesh_app-100035399-canary_prod_http_8080::172.20.215.183:8080::sub_zone::
cds_egress_app-mesh_app-100035399-canary_prod_http_8080::172.20.215.183:8080::canary::false
cds_egress_app-mesh_app-100035399-canary_prod_http_8080::172.20.215.183:8080::priority::0
cds_egress_app-mesh_app-100035399-canary_prod_http_8080::172.20.215.183:8080::success_rate::-1.0
cds_egress_app-mesh_app-100035399-canary_prod_http_8080::172.20.215.183:8080::local_origin_success_rate::-1.0
cds_egress_app-mesh_ibuplatformaffiliateapi-14524-primary_prod_http_8080::observability_name::cds_egress_app-mesh_ibuplatformaffiliateapi-14524-primary_prod_http_8080
cds_egress_app-mesh_ibuplatformaffiliateapi-14524-primary_prod_http_8080::default_priority::max_connections::2147483647
cds_egress_app-mesh_ibuplatformaffiliateapi-14524-primary_prod_http_8080::default_priority::max_pending_requests::2147483647
cds_egress_app-mesh_ibuplatformaffiliateapi-14524-primary_prod_http_8080::default_priority::max_requests::2147483647
cds_egress_app-mesh_ibuplatformaffiliateapi-14524-primary_prod_http_8080::default_priority::max_retries::2147483647
cds_egress_app-mesh_ibuplatformaffiliateapi-14524-primary_prod_http_8080::high_priority::max_connections::1024
cds_egress_app-mesh_ibuplatformaffiliateapi-14524-primary_prod_http_8080::high_priority::max_pending_requests::1024
cds_egress_app-mesh_ibuplatformaffiliateapi-14524-primary_prod_http_8080::high_priority::max_requests::1024
cds_egress_app-mesh_ibuplatformaffiliateapi-14524-primary_prod_http_8080::high_priority::max_retries::3
cds_egress_app-mesh_ibuplatformaffiliateapi-14524-primary_prod_http_8080::added_via_api::true
cds_egress_app-mesh_ibuplatformaffiliateapi-14524-primary_prod_http_8080::172.20.123.200:8080::cx_active::15
cds_egress_app-mesh_ibuplatformaffiliateapi-14524-primary_prod_http_8080::172.20.123.200:8080::cx_connect_fail::0
cds_egress_app-mesh_ibuplatformaffiliateapi-14524-primary_prod_http_8080::172.20.123.200:8080::cx_total::37
cds_egress_app-mesh_ibuplatformaffiliateapi-14524-primary_prod_http_8080::172.20.123.200:8080::rq_active::0
cds_egress_app-mesh_ibuplatformaffiliateapi-14524-primary_prod_http_8080::172.20.123.200:8080::rq_error::43
cds_egress_app-mesh_ibuplatformaffiliateapi-14524-primary_prod_http_8080::172.20.123.200:8080::rq_success::781048
cds_egress_app-mesh_ibuplatformaffiliateapi-14524-primary_prod_http_8080::172.20.123.200:8080::rq_timeout::0
cds_egress_app-mesh_ibuplatformaffiliateapi-14524-primary_prod_http_8080::172.20.123.200:8080::rq_total::781091
cds_egress_app-mesh_ibuplatformaffiliateapi-14524-primary_prod_http_8080::172.20.123.200:8080::hostname::ibuplatformaffiliateapi-14524-primary.prod.svc.cluster.local.
cds_egress_app-mesh_ibuplatformaffiliateapi-14524-primary_prod_http_8080::172.20.123.200:8080::health_flags::healthy
cds_egress_app-mesh_ibuplatformaffiliateapi-14524-primary_prod_http_8080::172.20.123.200:8080::weight::1
cds_egress_app-mesh_ibuplatformaffiliateapi-14524-primary_prod_http_8080::172.20.123.200:8080::region::
cds_egress_app-mesh_ibuplatformaffiliateapi-14524-primary_prod_http_8080::172.20.123.200:8080::zone::
cds_egress_app-mesh_ibuplatformaffiliateapi-14524-primary_prod_http_8080::172.20.123.200:8080::sub_zone::
cds_egress_app-mesh_ibuplatformaffiliateapi-14524-primary_prod_http_8080::172.20.123.200:8080::canary::false
cds_egress_app-mesh_ibuplatformaffiliateapi-14524-primary_prod_http_8080::172.20.123.200:8080::priority::0
cds_egress_app-mesh_ibuplatformaffiliateapi-14524-primary_prod_http_8080::172.20.123.200:8080::success_rate::-1.0
cds_egress_app-mesh_ibuplatformaffiliateapi-14524-primary_prod_http_8080::172.20.123.200:8080::local_origin_success_rate::-1.0
cds_ingress_app-mesh_appmesh-gateway_prod_self_redirect_http_15001::observability_name::cds_ingress_app-mesh_appmesh-gateway_prod_self_redirect_http_15001
cds_ingress_app-mesh_appmesh-gateway_prod_self_redirect_http_15001::default_priority::max_connections::2147483647
cds_ingress_app-mesh_appmesh-gateway_prod_self_redirect_http_15001::default_priority::max_pending_requests::2147483647
cds_ingress_app-mesh_appmesh-gateway_prod_self_redirect_http_15001::default_priority::max_requests::2147483647
cds_ingress_app-mesh_appmesh-gateway_prod_self_redirect_http_15001::default_priority::max_retries::2147483647
cds_ingress_app-mesh_appmesh-gateway_prod_self_redirect_http_15001::high_priority::max_connections::1024
cds_ingress_app-mesh_appmesh-gateway_prod_self_redirect_http_15001::high_priority::max_pending_requests::1024
cds_ingress_app-mesh_appmesh-gateway_prod_self_redirect_http_15001::high_priority::max_requests::1024
cds_ingress_app-mesh_appmesh-gateway_prod_self_redirect_http_15001::high_priority::max_retries::3
cds_ingress_app-mesh_appmesh-gateway_prod_self_redirect_http_15001::added_via_api::true
cds_ingress_app-mesh_appmesh-gateway_prod_self_redirect_http_15001::127.0.0.1:15001::cx_active::66
cds_ingress_app-mesh_appmesh-gateway_prod_self_redirect_http_15001::127.0.0.1:15001::cx_connect_fail::0
cds_ingress_app-mesh_appmesh-gateway_prod_self_redirect_http_15001::127.0.0.1:15001::cx_total::514
cds_ingress_app-mesh_appmesh-gateway_prod_self_redirect_http_15001::127.0.0.1:15001::rq_active::0
cds_ingress_app-mesh_appmesh-gateway_prod_self_redirect_http_15001::127.0.0.1:15001::rq_error::3301
cds_ingress_app-mesh_appmesh-gateway_prod_self_redirect_http_15001::127.0.0.1:15001::rq_success::4266126
cds_ingress_app-mesh_appmesh-gateway_prod_self_redirect_http_15001::127.0.0.1:15001::rq_timeout::0
cds_ingress_app-mesh_appmesh-gateway_prod_self_redirect_http_15001::127.0.0.1:15001::rq_total::4269427
cds_ingress_app-mesh_appmesh-gateway_prod_self_redirect_http_15001::127.0.0.1:15001::hostname::
cds_ingress_app-mesh_appmesh-gateway_prod_self_redirect_http_15001::127.0.0.1:15001::health_flags::healthy
cds_ingress_app-mesh_appmesh-gateway_prod_self_redirect_http_15001::127.0.0.1:15001::weight::1
cds_ingress_app-mesh_appmesh-gateway_prod_self_redirect_http_15001::127.0.0.1:15001::region::
cds_ingress_app-mesh_appmesh-gateway_prod_self_redirect_http_15001::127.0.0.1:15001::zone::
cds_ingress_app-mesh_appmesh-gateway_prod_self_redirect_http_15001::127.0.0.1:15001::sub_zone::
cds_ingress_app-mesh_appmesh-gateway_prod_self_redirect_http_15001::127.0.0.1:15001::canary::false
cds_ingress_app-mesh_appmesh-gateway_prod_self_redirect_http_15001::127.0.0.1:15001::priority::0
cds_ingress_app-mesh_appmesh-gateway_prod_self_redirect_http_15001::127.0.0.1:15001::success_rate::-1.0
cds_ingress_app-mesh_appmesh-gateway_prod_self_redirect_http_15001::127.0.0.1:15001::local_origin_success_rate::-1.0
cds_egress_app-mesh_app-100032265-primary_prod_http_8080::observability_name::cds_egress_app-mesh_app-100032265-primary_prod_http_8080
cds_egress_app-mesh_app-100032265-primary_prod_http_8080::default_priority::max_connections::2147483647
cds_egress_app-mesh_app-100032265-primary_prod_http_8080::default_priority::max_pending_requests::2147483647
cds_egress_app-mesh_app-100032265-primary_prod_http_8080::default_priority::max_requests::2147483647
cds_egress_app-mesh_app-100032265-primary_prod_http_8080::default_priority::max_retries::2147483647
cds_egress_app-mesh_app-100032265-primary_prod_http_8080::high_priority::max_connections::1024
cds_egress_app-mesh_app-100032265-primary_prod_http_8080::high_priority::max_pending_requests::1024
cds_egress_app-mesh_app-100032265-primary_prod_http_8080::high_priority::max_requests::1024
cds_egress_app-mesh_app-100032265-primary_prod_http_8080::high_priority::max_retries::3
cds_egress_app-mesh_app-100032265-primary_prod_http_8080::added_via_api::true
cds_egress_app-mesh_app-100032265-primary_prod_http_8080::172.20.135.124:8080::cx_active::4
cds_egress_app-mesh_app-100032265-primary_prod_http_8080::172.20.135.124:8080::cx_connect_fail::0
cds_egress_app-mesh_app-100032265-primary_prod_http_8080::172.20.135.124:8080::cx_total::428
cds_egress_app-mesh_app-100032265-primary_prod_http_8080::172.20.135.124:8080::rq_active::0
cds_egress_app-mesh_app-100032265-primary_prod_http_8080::172.20.135.124:8080::rq_error::419
cds_egress_app-mesh_app-100032265-primary_prod_http_8080::172.20.135.124:8080::rq_success::33582
cds_egress_app-mesh_app-100032265-primary_prod_http_8080::172.20.135.124:8080::rq_timeout::0
cds_egress_app-mesh_app-100032265-primary_prod_http_8080::172.20.135.124:8080::rq_total::34001
cds_egress_app-mesh_app-100032265-primary_prod_http_8080::172.20.135.124:8080::hostname::app-100032265-primary.prod.svc.cluster.local.
cds_egress_app-mesh_app-100032265-primary_prod_http_8080::172.20.135.124:8080::health_flags::healthy
cds_egress_app-mesh_app-100032265-primary_prod_http_8080::172.20.135.124:8080::weight::1
cds_egress_app-mesh_app-100032265-primary_prod_http_8080::172.20.135.124:8080::region::
cds_egress_app-mesh_app-100032265-primary_prod_http_8080::172.20.135.124:8080::zone::
cds_egress_app-mesh_app-100032265-primary_prod_http_8080::172.20.135.124:8080::sub_zone::
cds_egress_app-mesh_app-100032265-primary_prod_http_8080::172.20.135.124:8080::canary::false
cds_egress_app-mesh_app-100032265-primary_prod_http_8080::172.20.135.124:8080::priority::0
cds_egress_app-mesh_app-100032265-primary_prod_http_8080::172.20.135.124:8080::success_rate::-1.0
cds_egress_app-mesh_app-100032265-primary_prod_http_8080::172.20.135.124:8080::local_origin_success_rate::-1.0
cds_egress_app-mesh_app-100032265-canary_prod_http_8080::observability_name::cds_egress_app-mesh_app-100032265-canary_prod_http_8080
cds_egress_app-mesh_app-100032265-canary_prod_http_8080::default_priority::max_connections::2147483647
cds_egress_app-mesh_app-100032265-canary_prod_http_8080::default_priority::max_pending_requests::2147483647
cds_egress_app-mesh_app-100032265-canary_prod_http_8080::default_priority::max_requests::2147483647
cds_egress_app-mesh_app-100032265-canary_prod_http_8080::default_priority::max_retries::2147483647
cds_egress_app-mesh_app-100032265-canary_prod_http_8080::high_priority::max_connections::1024
cds_egress_app-mesh_app-100032265-canary_prod_http_8080::high_priority::max_pending_requests::1024
cds_egress_app-mesh_app-100032265-canary_prod_http_8080::high_priority::max_requests::1024
cds_egress_app-mesh_app-100032265-canary_prod_http_8080::high_priority::max_retries::3
cds_egress_app-mesh_app-100032265-canary_prod_http_8080::added_via_api::true
cds_egress_app-mesh_app-100032265-canary_prod_http_8080::172.20.46.186:8080::cx_active::0
cds_egress_app-mesh_app-100032265-canary_prod_http_8080::172.20.46.186:8080::cx_connect_fail::0
cds_egress_app-mesh_app-100032265-canary_prod_http_8080::172.20.46.186:8080::cx_total::0
cds_egress_app-mesh_app-100032265-canary_prod_http_8080::172.20.46.186:8080::rq_active::0
cds_egress_app-mesh_app-100032265-canary_prod_http_8080::172.20.46.186:8080::rq_error::0
cds_egress_app-mesh_app-100032265-canary_prod_http_8080::172.20.46.186:8080::rq_success::0
cds_egress_app-mesh_app-100032265-canary_prod_http_8080::172.20.46.186:8080::rq_timeout::0
cds_egress_app-mesh_app-100032265-canary_prod_http_8080::172.20.46.186:8080::rq_total::0
cds_egress_app-mesh_app-100032265-canary_prod_http_8080::172.20.46.186:8080::hostname::app-100032265-canary.prod.svc.cluster.local.
cds_egress_app-mesh_app-100032265-canary_prod_http_8080::172.20.46.186:8080::health_flags::healthy
cds_egress_app-mesh_app-100032265-canary_prod_http_8080::172.20.46.186:8080::weight::1
cds_egress_app-mesh_app-100032265-canary_prod_http_8080::172.20.46.186:8080::region::
cds_egress_app-mesh_app-100032265-canary_prod_http_8080::172.20.46.186:8080::zone::
cds_egress_app-mesh_app-100032265-canary_prod_http_8080::172.20.46.186:8080::sub_zone::
cds_egress_app-mesh_app-100032265-canary_prod_http_8080::172.20.46.186:8080::canary::false
cds_egress_app-mesh_app-100032265-canary_prod_http_8080::172.20.46.186:8080::priority::0
cds_egress_app-mesh_app-100032265-canary_prod_http_8080::172.20.46.186:8080::success_rate::-1.0
cds_egress_app-mesh_app-100032265-canary_prod_http_8080::172.20.46.186:8080::local_origin_success_rate::-1.0
cds_egress_app-mesh_app-100035399-primary_prod_http_8080::observability_name::cds_egress_app-mesh_app-100035399-primary_prod_http_8080
cds_egress_app-mesh_app-100035399-primary_prod_http_8080::default_priority::max_connections::2147483647
cds_egress_app-mesh_app-100035399-primary_prod_http_8080::default_priority::max_pending_requests::2147483647
cds_egress_app-mesh_app-100035399-primary_prod_http_8080::default_priority::max_requests::2147483647
cds_egress_app-mesh_app-100035399-primary_prod_http_8080::default_priority::max_retries::2147483647
cds_egress_app-mesh_app-100035399-primary_prod_http_8080::high_priority::max_connections::1024
cds_egress_app-mesh_app-100035399-primary_prod_http_8080::high_priority::max_pending_requests::1024
cds_egress_app-mesh_app-100035399-primary_prod_http_8080::high_priority::max_requests::1024
cds_egress_app-mesh_app-100035399-primary_prod_http_8080::high_priority::max_retries::3
cds_egress_app-mesh_app-100035399-primary_prod_http_8080::added_via_api::true
cds_egress_app-mesh_app-100035399-primary_prod_http_8080::172.20.121.13:8080::cx_active::0
cds_egress_app-mesh_app-100035399-primary_prod_http_8080::172.20.121.13:8080::cx_connect_fail::0
cds_egress_app-mesh_app-100035399-primary_prod_http_8080::172.20.121.13:8080::cx_total::0
cds_egress_app-mesh_app-100035399-primary_prod_http_8080::172.20.121.13:8080::rq_active::0
cds_egress_app-mesh_app-100035399-primary_prod_http_8080::172.20.121.13:8080::rq_error::0
cds_egress_app-mesh_app-100035399-primary_prod_http_8080::172.20.121.13:8080::rq_success::0
cds_egress_app-mesh_app-100035399-primary_prod_http_8080::172.20.121.13:8080::rq_timeout::0
cds_egress_app-mesh_app-100035399-primary_prod_http_8080::172.20.121.13:8080::rq_total::0
cds_egress_app-mesh_app-100035399-primary_prod_http_8080::172.20.121.13:8080::hostname::app-100035399-primary.prod.svc.cluster.local.
cds_egress_app-mesh_app-100035399-primary_prod_http_8080::172.20.121.13:8080::health_flags::healthy
cds_egress_app-mesh_app-100035399-primary_prod_http_8080::172.20.121.13:8080::weight::1
cds_egress_app-mesh_app-100035399-primary_prod_http_8080::172.20.121.13:8080::region::
cds_egress_app-mesh_app-100035399-primary_prod_http_8080::172.20.121.13:8080::zone::
cds_egress_app-mesh_app-100035399-primary_prod_http_8080::172.20.121.13:8080::sub_zone::
cds_egress_app-mesh_app-100035399-primary_prod_http_8080::172.20.121.13:8080::canary::false
cds_egress_app-mesh_app-100035399-primary_prod_http_8080::172.20.121.13:8080::priority::0
cds_egress_app-mesh_app-100035399-primary_prod_http_8080::172.20.121.13:8080::success_rate::-1.0
cds_egress_app-mesh_app-100035399-primary_prod_http_8080::172.20.121.13:8080::local_origin_success_rate::-1.0
cds_egress_app-mesh_app-100035323-canary_prod_http_8080::observability_name::cds_egress_app-mesh_app-100035323-canary_prod_http_8080
cds_egress_app-mesh_app-100035323-canary_prod_http_8080::default_priority::max_connections::2147483647
cds_egress_app-mesh_app-100035323-canary_prod_http_8080::default_priority::max_pending_requests::2147483647
cds_egress_app-mesh_app-100035323-canary_prod_http_8080::default_priority::max_requests::2147483647
cds_egress_app-mesh_app-100035323-canary_prod_http_8080::default_priority::max_retries::2147483647
cds_egress_app-mesh_app-100035323-canary_prod_http_8080::high_priority::max_connections::1024
cds_egress_app-mesh_app-100035323-canary_prod_http_8080::high_priority::max_pending_requests::1024
cds_egress_app-mesh_app-100035323-canary_prod_http_8080::high_priority::max_requests::1024
cds_egress_app-mesh_app-100035323-canary_prod_http_8080::high_priority::max_retries::3
cds_egress_app-mesh_app-100035323-canary_prod_http_8080::added_via_api::true
cds_egress_app-mesh_app-100035323-canary_prod_http_8080::172.20.20.112:8080::cx_active::0
cds_egress_app-mesh_app-100035323-canary_prod_http_8080::172.20.20.112:8080::cx_connect_fail::0
cds_egress_app-mesh_app-100035323-canary_prod_http_8080::172.20.20.112:8080::cx_total::0
cds_egress_app-mesh_app-100035323-canary_prod_http_8080::172.20.20.112:8080::rq_active::0
cds_egress_app-mesh_app-100035323-canary_prod_http_8080::172.20.20.112:8080::rq_error::0
cds_egress_app-mesh_app-100035323-canary_prod_http_8080::172.20.20.112:8080::rq_success::0
cds_egress_app-mesh_app-100035323-canary_prod_http_8080::172.20.20.112:8080::rq_timeout::0
cds_egress_app-mesh_app-100035323-canary_prod_http_8080::172.20.20.112:8080::rq_total::0
cds_egress_app-mesh_app-100035323-canary_prod_http_8080::172.20.20.112:8080::hostname::app-100035323-canary.prod.svc.cluster.local.
cds_egress_app-mesh_app-100035323-canary_prod_http_8080::172.20.20.112:8080::health_flags::healthy
cds_egress_app-mesh_app-100035323-canary_prod_http_8080::172.20.20.112:8080::weight::1
cds_egress_app-mesh_app-100035323-canary_prod_http_8080::172.20.20.112:8080::region::
cds_egress_app-mesh_app-100035323-canary_prod_http_8080::172.20.20.112:8080::zone::
cds_egress_app-mesh_app-100035323-canary_prod_http_8080::172.20.20.112:8080::sub_zone::
cds_egress_app-mesh_app-100035323-canary_prod_http_8080::172.20.20.112:8080::canary::false
cds_egress_app-mesh_app-100035323-canary_prod_http_8080::172.20.20.112:8080::priority::0
cds_egress_app-mesh_app-100035323-canary_prod_http_8080::172.20.20.112:8080::success_rate::-1.0
cds_egress_app-mesh_app-100035323-canary_prod_http_8080::172.20.20.112:8080::local_origin_success_rate::-1.0
cds_egress_app-mesh_app-100030741-canary_prod_http_8080::observability_name::cds_egress_app-mesh_app-100030741-canary_prod_http_8080
cds_egress_app-mesh_app-100030741-canary_prod_http_8080::default_priority::max_connections::2147483647
cds_egress_app-mesh_app-100030741-canary_prod_http_8080::default_priority::max_pending_requests::2147483647
cds_egress_app-mesh_app-100030741-canary_prod_http_8080::default_priority::max_requests::2147483647
cds_egress_app-mesh_app-100030741-canary_prod_http_8080::default_priority::max_retries::2147483647
cds_egress_app-mesh_app-100030741-canary_prod_http_8080::high_priority::max_connections::1024
cds_egress_app-mesh_app-100030741-canary_prod_http_8080::high_priority::max_pending_requests::1024
cds_egress_app-mesh_app-100030741-canary_prod_http_8080::high_priority::max_requests::1024
cds_egress_app-mesh_app-100030741-canary_prod_http_8080::high_priority::max_retries::3
cds_egress_app-mesh_app-100030741-canary_prod_http_8080::added_via_api::true
cds_egress_app-mesh_app-100030741-canary_prod_http_8080::172.20.115.83:8080::cx_active::0
cds_egress_app-mesh_app-100030741-canary_prod_http_8080::172.20.115.83:8080::cx_connect_fail::0
cds_egress_app-mesh_app-100030741-canary_prod_http_8080::172.20.115.83:8080::cx_total::0
cds_egress_app-mesh_app-100030741-canary_prod_http_8080::172.20.115.83:8080::rq_active::0
cds_egress_app-mesh_app-100030741-canary_prod_http_8080::172.20.115.83:8080::rq_error::0
cds_egress_app-mesh_app-100030741-canary_prod_http_8080::172.20.115.83:8080::rq_success::0
cds_egress_app-mesh_app-100030741-canary_prod_http_8080::172.20.115.83:8080::rq_timeout::0
cds_egress_app-mesh_app-100030741-canary_prod_http_8080::172.20.115.83:8080::rq_total::0
cds_egress_app-mesh_app-100030741-canary_prod_http_8080::172.20.115.83:8080::hostname::app-100030741-canary.prod.svc.cluster.local.
cds_egress_app-mesh_app-100030741-canary_prod_http_8080::172.20.115.83:8080::health_flags::healthy
cds_egress_app-mesh_app-100030741-canary_prod_http_8080::172.20.115.83:8080::weight::1
cds_egress_app-mesh_app-100030741-canary_prod_http_8080::172.20.115.83:8080::region::
cds_egress_app-mesh_app-100030741-canary_prod_http_8080::172.20.115.83:8080::zone::
cds_egress_app-mesh_app-100030741-canary_prod_http_8080::172.20.115.83:8080::sub_zone::
cds_egress_app-mesh_app-100030741-canary_prod_http_8080::172.20.115.83:8080::canary::false
cds_egress_app-mesh_app-100030741-canary_prod_http_8080::172.20.115.83:8080::priority::0
cds_egress_app-mesh_app-100030741-canary_prod_http_8080::172.20.115.83:8080::success_rate::-1.0
cds_egress_app-mesh_app-100030741-canary_prod_http_8080::172.20.115.83:8080::local_origin_success_rate::-1.0
cds_egress_app-mesh_app-100030741-primary_prod_http_8080::observability_name::cds_egress_app-mesh_app-100030741-primary_prod_http_8080
cds_egress_app-mesh_app-100030741-primary_prod_http_8080::default_priority::max_connections::2147483647
cds_egress_app-mesh_app-100030741-primary_prod_http_8080::default_priority::max_pending_requests::2147483647
cds_egress_app-mesh_app-100030741-primary_prod_http_8080::default_priority::max_requests::2147483647
cds_egress_app-mesh_app-100030741-primary_prod_http_8080::default_priority::max_retries::2147483647
cds_egress_app-mesh_app-100030741-primary_prod_http_8080::high_priority::max_connections::1024
cds_egress_app-mesh_app-100030741-primary_prod_http_8080::high_priority::max_pending_requests::1024
cds_egress_app-mesh_app-100030741-primary_prod_http_8080::high_priority::max_requests::1024
cds_egress_app-mesh_app-100030741-primary_prod_http_8080::high_priority::max_retries::3
cds_egress_app-mesh_app-100030741-primary_prod_http_8080::added_via_api::true
cds_egress_app-mesh_app-100030741-primary_prod_http_8080::172.20.60.241:8080::cx_active::0
cds_egress_app-mesh_app-100030741-primary_prod_http_8080::172.20.60.241:8080::cx_connect_fail::0
cds_egress_app-mesh_app-100030741-primary_prod_http_8080::172.20.60.241:8080::cx_total::0
cds_egress_app-mesh_app-100030741-primary_prod_http_8080::172.20.60.241:8080::rq_active::0
cds_egress_app-mesh_app-100030741-primary_prod_http_8080::172.20.60.241:8080::rq_error::0
cds_egress_app-mesh_app-100030741-primary_prod_http_8080::172.20.60.241:8080::rq_success::0
cds_egress_app-mesh_app-100030741-primary_prod_http_8080::172.20.60.241:8080::rq_timeout::0
cds_egress_app-mesh_app-100030741-primary_prod_http_8080::172.20.60.241:8080::rq_total::0
cds_egress_app-mesh_app-100030741-primary_prod_http_8080::172.20.60.241:8080::hostname::app-100030741-primary.prod.svc.cluster.local.
cds_egress_app-mesh_app-100030741-primary_prod_http_8080::172.20.60.241:8080::health_flags::healthy
cds_egress_app-mesh_app-100030741-primary_prod_http_8080::172.20.60.241:8080::weight::1
cds_egress_app-mesh_app-100030741-primary_prod_http_8080::172.20.60.241:8080::region::
cds_egress_app-mesh_app-100030741-primary_prod_http_8080::172.20.60.241:8080::zone::
cds_egress_app-mesh_app-100030741-primary_prod_http_8080::172.20.60.241:8080::sub_zone::
cds_egress_app-mesh_app-100030741-primary_prod_http_8080::172.20.60.241:8080::canary::false
cds_egress_app-mesh_app-100030741-primary_prod_http_8080::172.20.60.241:8080::priority::0
cds_egress_app-mesh_app-100030741-primary_prod_http_8080::172.20.60.241:8080::success_rate::-1.0
cds_egress_app-mesh_app-100030741-primary_prod_http_8080::172.20.60.241:8080::local_origin_success_rate::-1.0
cds_egress_app-mesh_ibumarketadsmatchservice-19816-canary_prod_http_8080::observability_name::cds_egress_app-mesh_ibumarketadsmatchservice-19816-canary_prod_http_8080
cds_egress_app-mesh_ibumarketadsmatchservice-19816-canary_prod_http_8080::default_priority::max_connections::2147483647
cds_egress_app-mesh_ibumarketadsmatchservice-19816-canary_prod_http_8080::default_priority::max_pending_requests::2147483647
cds_egress_app-mesh_ibumarketadsmatchservice-19816-canary_prod_http_8080::default_priority::max_requests::2147483647
cds_egress_app-mesh_ibumarketadsmatchservice-19816-canary_prod_http_8080::default_priority::max_retries::2147483647
cds_egress_app-mesh_ibumarketadsmatchservice-19816-canary_prod_http_8080::high_priority::max_connections::1024
cds_egress_app-mesh_ibumarketadsmatchservice-19816-canary_prod_http_8080::high_priority::max_pending_requests::1024
cds_egress_app-mesh_ibumarketadsmatchservice-19816-canary_prod_http_8080::high_priority::max_requests::1024
cds_egress_app-mesh_ibumarketadsmatchservice-19816-canary_prod_http_8080::high_priority::max_retries::3
cds_egress_app-mesh_ibumarketadsmatchservice-19816-canary_prod_http_8080::added_via_api::true
cds_egress_app-mesh_ibumarketadsmatchservice-19816-canary_prod_http_8080::172.20.49.28:8080::cx_active::0
cds_egress_app-mesh_ibumarketadsmatchservice-19816-canary_prod_http_8080::172.20.49.28:8080::cx_connect_fail::0
cds_egress_app-mesh_ibumarketadsmatchservice-19816-canary_prod_http_8080::172.20.49.28:8080::cx_total::23
cds_egress_app-mesh_ibumarketadsmatchservice-19816-canary_prod_http_8080::172.20.49.28:8080::rq_active::0
cds_egress_app-mesh_ibumarketadsmatchservice-19816-canary_prod_http_8080::172.20.49.28:8080::rq_error::0
cds_egress_app-mesh_ibumarketadsmatchservice-19816-canary_prod_http_8080::172.20.49.28:8080::rq_success::5364
cds_egress_app-mesh_ibumarketadsmatchservice-19816-canary_prod_http_8080::172.20.49.28:8080::rq_timeout::0
cds_egress_app-mesh_ibumarketadsmatchservice-19816-canary_prod_http_8080::172.20.49.28:8080::rq_total::5364
cds_egress_app-mesh_ibumarketadsmatchservice-19816-canary_prod_http_8080::172.20.49.28:8080::hostname::ibumarketadsmatchservice-19816-canary.prod.svc.cluster.local.
cds_egress_app-mesh_ibumarketadsmatchservice-19816-canary_prod_http_8080::172.20.49.28:8080::health_flags::healthy
cds_egress_app-mesh_ibumarketadsmatchservice-19816-canary_prod_http_8080::172.20.49.28:8080::weight::1
cds_egress_app-mesh_ibumarketadsmatchservice-19816-canary_prod_http_8080::172.20.49.28:8080::region::
cds_egress_app-mesh_ibumarketadsmatchservice-19816-canary_prod_http_8080::172.20.49.28:8080::zone::
cds_egress_app-mesh_ibumarketadsmatchservice-19816-canary_prod_http_8080::172.20.49.28:8080::sub_zone::
cds_egress_app-mesh_ibumarketadsmatchservice-19816-canary_prod_http_8080::172.20.49.28:8080::canary::false
cds_egress_app-mesh_ibumarketadsmatchservice-19816-canary_prod_http_8080::172.20.49.28:8080::priority::0
cds_egress_app-mesh_ibumarketadsmatchservice-19816-canary_prod_http_8080::172.20.49.28:8080::success_rate::-1.0
cds_egress_app-mesh_ibumarketadsmatchservice-19816-canary_prod_http_8080::172.20.49.28:8080::local_origin_success_rate::-1.0
cds_egress_app-mesh_ibumarketadsmatchservice-19816-primary_prod_http_8080::observability_name::cds_egress_app-mesh_ibumarketadsmatchservice-19816-primary_prod_http_8080
cds_egress_app-mesh_ibumarketadsmatchservice-19816-primary_prod_http_8080::default_priority::max_connections::2147483647
cds_egress_app-mesh_ibumarketadsmatchservice-19816-primary_prod_http_8080::default_priority::max_pending_requests::2147483647
cds_egress_app-mesh_ibumarketadsmatchservice-19816-primary_prod_http_8080::default_priority::max_requests::2147483647
cds_egress_app-mesh_ibumarketadsmatchservice-19816-primary_prod_http_8080::default_priority::max_retries::2147483647
cds_egress_app-mesh_ibumarketadsmatchservice-19816-primary_prod_http_8080::high_priority::max_connections::1024
cds_egress_app-mesh_ibumarketadsmatchservice-19816-primary_prod_http_8080::high_priority::max_pending_requests::1024
cds_egress_app-mesh_ibumarketadsmatchservice-19816-primary_prod_http_8080::high_priority::max_requests::1024
cds_egress_app-mesh_ibumarketadsmatchservice-19816-primary_prod_http_8080::high_priority::max_retries::3
cds_egress_app-mesh_ibumarketadsmatchservice-19816-primary_prod_http_8080::added_via_api::true
cds_egress_app-mesh_ibumarketadsmatchservice-19816-primary_prod_http_8080::172.20.95.84:8080::cx_active::44
cds_egress_app-mesh_ibumarketadsmatchservice-19816-primary_prod_http_8080::172.20.95.84:8080::cx_connect_fail::1482
cds_egress_app-mesh_ibumarketadsmatchservice-19816-primary_prod_http_8080::172.20.95.84:8080::cx_total::2312
cds_egress_app-mesh_ibumarketadsmatchservice-19816-primary_prod_http_8080::172.20.95.84:8080::rq_active::0
cds_egress_app-mesh_ibumarketadsmatchservice-19816-primary_prod_http_8080::172.20.95.84:8080::rq_error::6657
cds_egress_app-mesh_ibumarketadsmatchservice-19816-primary_prod_http_8080::172.20.95.84:8080::rq_success::3446132
cds_egress_app-mesh_ibumarketadsmatchservice-19816-primary_prod_http_8080::172.20.95.84:8080::rq_timeout::425
cds_egress_app-mesh_ibumarketadsmatchservice-19816-primary_prod_http_8080::172.20.95.84:8080::rq_total::3446714
cds_egress_app-mesh_ibumarketadsmatchservice-19816-primary_prod_http_8080::172.20.95.84:8080::hostname::ibumarketadsmatchservice-19816-primary.prod.svc.cluster.local.
cds_egress_app-mesh_ibumarketadsmatchservice-19816-primary_prod_http_8080::172.20.95.84:8080::health_flags::healthy
cds_egress_app-mesh_ibumarketadsmatchservice-19816-primary_prod_http_8080::172.20.95.84:8080::weight::1
cds_egress_app-mesh_ibumarketadsmatchservice-19816-primary_prod_http_8080::172.20.95.84:8080::region::
cds_egress_app-mesh_ibumarketadsmatchservice-19816-primary_prod_http_8080::172.20.95.84:8080::zone::
cds_egress_app-mesh_ibumarketadsmatchservice-19816-primary_prod_http_8080::172.20.95.84:8080::sub_zone::
cds_egress_app-mesh_ibumarketadsmatchservice-19816-primary_prod_http_8080::172.20.95.84:8080::canary::false
cds_egress_app-mesh_ibumarketadsmatchservice-19816-primary_prod_http_8080::172.20.95.84:8080::priority::0
cds_egress_app-mesh_ibumarketadsmatchservice-19816-primary_prod_http_8080::172.20.95.84:8080::success_rate::-1.0
cds_egress_app-mesh_ibumarketadsmatchservice-19816-primary_prod_http_8080::172.20.95.84:8080::local_origin_success_rate::-1.0
cds_egress_app-mesh_app-100035323-primary_prod_http_8080::observability_name::cds_egress_app-mesh_app-100035323-primary_prod_http_8080
cds_egress_app-mesh_app-100035323-primary_prod_http_8080::default_priority::max_connections::2147483647
cds_egress_app-mesh_app-100035323-primary_prod_http_8080::default_priority::max_pending_requests::2147483647
cds_egress_app-mesh_app-100035323-primary_prod_http_8080::default_priority::max_requests::2147483647
cds_egress_app-mesh_app-100035323-primary_prod_http_8080::default_priority::max_retries::2147483647
cds_egress_app-mesh_app-100035323-primary_prod_http_8080::high_priority::max_connections::1024
cds_egress_app-mesh_app-100035323-primary_prod_http_8080::high_priority::max_pending_requests::1024
cds_egress_app-mesh_app-100035323-primary_prod_http_8080::high_priority::max_requests::1024
cds_egress_app-mesh_app-100035323-primary_prod_http_8080::high_priority::max_retries::3
cds_egress_app-mesh_app-100035323-primary_prod_http_8080::added_via_api::true
cds_egress_app-mesh_app-100035323-primary_prod_http_8080::172.20.218.166:8080::cx_active::0
cds_egress_app-mesh_app-100035323-primary_prod_http_8080::172.20.218.166:8080::cx_connect_fail::0
cds_egress_app-mesh_app-100035323-primary_prod_http_8080::172.20.218.166:8080::cx_total::0
cds_egress_app-mesh_app-100035323-primary_prod_http_8080::172.20.218.166:8080::rq_active::0
cds_egress_app-mesh_app-100035323-primary_prod_http_8080::172.20.218.166:8080::rq_error::0
cds_egress_app-mesh_app-100035323-primary_prod_http_8080::172.20.218.166:8080::rq_success::0
cds_egress_app-mesh_app-100035323-primary_prod_http_8080::172.20.218.166:8080::rq_timeout::0
cds_egress_app-mesh_app-100035323-primary_prod_http_8080::172.20.218.166:8080::rq_total::0
cds_egress_app-mesh_app-100035323-primary_prod_http_8080::172.20.218.166:8080::hostname::app-100035323-primary.prod.svc.cluster.local.
cds_egress_app-mesh_app-100035323-primary_prod_http_8080::172.20.218.166:8080::health_flags::healthy
cds_egress_app-mesh_app-100035323-primary_prod_http_8080::172.20.218.166:8080::weight::1
cds_egress_app-mesh_app-100035323-primary_prod_http_8080::172.20.218.166:8080::region::
cds_egress_app-mesh_app-100035323-primary_prod_http_8080::172.20.218.166:8080::zone::
cds_egress_app-mesh_app-100035323-primary_prod_http_8080::172.20.218.166:8080::sub_zone::
cds_egress_app-mesh_app-100035323-primary_prod_http_8080::172.20.218.166:8080::canary::false
cds_egress_app-mesh_app-100035323-primary_prod_http_8080::172.20.218.166:8080::priority::0
cds_egress_app-mesh_app-100035323-primary_prod_http_8080::172.20.218.166:8080::success_rate::-1.0
cds_egress_app-mesh_app-100035323-primary_prod_http_8080::172.20.218.166:8080::local_origin_success_rate::-1.0
cds_egress_app-mesh_ibuplatformaffiliateapi-14524-canary_prod_http_8080::observability_name::cds_egress_app-mesh_ibuplatformaffiliateapi-14524-canary_prod_http_8080
cds_egress_app-mesh_ibuplatformaffiliateapi-14524-canary_prod_http_8080::default_priority::max_connections::2147483647
cds_egress_app-mesh_ibuplatformaffiliateapi-14524-canary_prod_http_8080::default_priority::max_pending_requests::2147483647
cds_egress_app-mesh_ibuplatformaffiliateapi-14524-canary_prod_http_8080::default_priority::max_requests::2147483647
cds_egress_app-mesh_ibuplatformaffiliateapi-14524-canary_prod_http_8080::default_priority::max_retries::2147483647
cds_egress_app-mesh_ibuplatformaffiliateapi-14524-canary_prod_http_8080::high_priority::max_connections::1024
cds_egress_app-mesh_ibuplatformaffiliateapi-14524-canary_prod_http_8080::high_priority::max_pending_requests::1024
cds_egress_app-mesh_ibuplatformaffiliateapi-14524-canary_prod_http_8080::high_priority::max_requests::1024
cds_egress_app-mesh_ibuplatformaffiliateapi-14524-canary_prod_http_8080::high_priority::max_retries::3
cds_egress_app-mesh_ibuplatformaffiliateapi-14524-canary_prod_http_8080::added_via_api::true
cds_egress_app-mesh_ibuplatformaffiliateapi-14524-canary_prod_http_8080::172.20.160.19:8080::cx_active::0
cds_egress_app-mesh_ibuplatformaffiliateapi-14524-canary_prod_http_8080::172.20.160.19:8080::cx_connect_fail::0
cds_egress_app-mesh_ibuplatformaffiliateapi-14524-canary_prod_http_8080::172.20.160.19:8080::cx_total::0
cds_egress_app-mesh_ibuplatformaffiliateapi-14524-canary_prod_http_8080::172.20.160.19:8080::rq_active::0
cds_egress_app-mesh_ibuplatformaffiliateapi-14524-canary_prod_http_8080::172.20.160.19:8080::rq_error::0
cds_egress_app-mesh_ibuplatformaffiliateapi-14524-canary_prod_http_8080::172.20.160.19:8080::rq_success::0
cds_egress_app-mesh_ibuplatformaffiliateapi-14524-canary_prod_http_8080::172.20.160.19:8080::rq_timeout::0
cds_egress_app-mesh_ibuplatformaffiliateapi-14524-canary_prod_http_8080::172.20.160.19:8080::rq_total::0
cds_egress_app-mesh_ibuplatformaffiliateapi-14524-canary_prod_http_8080::172.20.160.19:8080::hostname::ibuplatformaffiliateapi-14524-canary.prod.svc.cluster.local.
cds_egress_app-mesh_ibuplatformaffiliateapi-14524-canary_prod_http_8080::172.20.160.19:8080::health_flags::healthy
cds_egress_app-mesh_ibuplatformaffiliateapi-14524-canary_prod_http_8080::172.20.160.19:8080::weight::1
cds_egress_app-mesh_ibuplatformaffiliateapi-14524-canary_prod_http_8080::172.20.160.19:8080::region::
cds_egress_app-mesh_ibuplatformaffiliateapi-14524-canary_prod_http_8080::172.20.160.19:8080::zone::
cds_egress_app-mesh_ibuplatformaffiliateapi-14524-canary_prod_http_8080::172.20.160.19:8080::sub_zone::
cds_egress_app-mesh_ibuplatformaffiliateapi-14524-canary_prod_http_8080::172.20.160.19:8080::canary::false
cds_egress_app-mesh_ibuplatformaffiliateapi-14524-canary_prod_http_8080::172.20.160.19:8080::priority::0
cds_egress_app-mesh_ibuplatformaffiliateapi-14524-canary_prod_http_8080::172.20.160.19:8080::success_rate::-1.0
cds_egress_app-mesh_ibuplatformaffiliateapi-14524-canary_prod_http_8080::172.20.160.19:8080::local_origin_success_rate::-1.0
```

#### /config_dumps

```json
{
 "configs": [
  {
   "@type": "type.googleapis.com/envoy.admin.v3.BootstrapConfigDump",
   "bootstrap": {
    "node": {
     "id": "mesh/app-mesh/virtualGateway/appmesh-gateway_prod",
     "cluster": "mesh/app-mesh/virtualGateway/appmesh-gateway_prod",
     "metadata": {
      "aws.appmesh.task.interfaces": {
       "ipv4": {
        "eth0": [
         "10.11.71.67/32"
        ],
        "lo": [
         "127.0.0.1/8"
        ]
       }
      }
     },
     "user_agent_name": "envoy",
     "user_agent_build_version": {
      "version": {
       "major_number": 1,
       "minor_number": 20
      },
      "metadata": {
       "build.type": "RELEASE",
       "revision.status": "Modified",
       "ssl.version": "BoringSSL",
       "build.label": "appmesh.1",
       "revision.sha": "3093e5567822eedaa55a7b5da9c35ee6da6b2d1f"
      }
     },
     "extensions": [
      {
       "name": "envoy.http.original_ip_detection.custom_header",
       "category": "envoy.http.original_ip_detection"
      },
      {
       "name": "envoy.http.original_ip_detection.xff",
       "category": "envoy.http.original_ip_detection"
      },
      {
       "name": "envoy.watchdog.abort_action",
       "category": "envoy.guarddog_actions"
      },
      {
       "name": "envoy.watchdog.profile_action",
       "category": "envoy.guarddog_actions"
      },
      {
       "name": "envoy.formatter.metadata",
       "category": "envoy.formatter"
      },
      {
       "name": "envoy.formatter.req_without_query",
       "category": "envoy.formatter"
      },
      {
       "name": "envoy.dynamic.ot",
       "category": "envoy.tracers"
      },
      {
       "name": "envoy.lightstep",
       "category": "envoy.tracers"
      },
      {
       "name": "envoy.tracers.datadog",
       "category": "envoy.tracers"
      },
      {
       "name": "envoy.tracers.dynamic_ot",
       "category": "envoy.tracers"
      },
      {
       "name": "envoy.tracers.lightstep",
       "category": "envoy.tracers"
      },
      {
       "name": "envoy.tracers.opencensus",
       "category": "envoy.tracers"
      },
      {
       "name": "envoy.tracers.skywalking",
       "category": "envoy.tracers"
      },
      {
       "name": "envoy.tracers.xray",
       "category": "envoy.tracers"
      },
      {
       "name": "envoy.tracers.zipkin",
       "category": "envoy.tracers"
      },
      {
       "name": "envoy.zipkin",
       "category": "envoy.tracers"
      },
      {
       "name": "envoy.rbac.matchers.upstream.upstream_ip_port",
       "category": "envoy.rbac.matchers"
      },
      {
       "name": "envoy.transport_sockets.alts",
       "category": "envoy.transport_sockets.upstream"
      },
      {
       "name": "envoy.transport_sockets.quic",
       "category": "envoy.transport_sockets.upstream"
      },
      {
       "name": "envoy.transport_sockets.raw_buffer",
       "category": "envoy.transport_sockets.upstream"
      },
      {
       "name": "envoy.transport_sockets.starttls",
       "category": "envoy.transport_sockets.upstream"
      },
      {
       "name": "envoy.transport_sockets.tap",
       "category": "envoy.transport_sockets.upstream"
      },
      {
       "name": "envoy.transport_sockets.tls",
       "category": "envoy.transport_sockets.upstream"
      },
      {
       "name": "envoy.transport_sockets.upstream_proxy_protocol",
       "category": "envoy.transport_sockets.upstream"
      },
      {
       "name": "raw_buffer",
       "category": "envoy.transport_sockets.upstream"
      },
      {
       "name": "starttls",
       "category": "envoy.transport_sockets.upstream"
      },
      {
       "name": "tls",
       "category": "envoy.transport_sockets.upstream"
      },
      {
       "name": "envoy.matching.matchers.consistent_hashing",
       "category": "envoy.matching.input_matchers"
      },
      {
       "name": "envoy.matching.matchers.ip",
       "category": "envoy.matching.input_matchers"
      },
      {
       "name": "envoy.health_checkers.redis",
       "category": "envoy.health_checkers"
      },
      {
       "name": "envoy.bandwidth_limit",
       "category": "envoy.filters.http"
      },
      {
       "name": "envoy.buffer",
       "category": "envoy.filters.http"
      },
      {
       "name": "envoy.cors",
       "category": "envoy.filters.http"
      },
      {
       "name": "envoy.csrf",
       "category": "envoy.filters.http"
      },
      {
       "name": "envoy.ext_authz",
       "category": "envoy.filters.http"
      },
      {
       "name": "envoy.ext_proc",
       "category": "envoy.filters.http"
      },
      {
       "name": "envoy.fault",
       "category": "envoy.filters.http"
      },
      {
       "name": "envoy.filters.http.adaptive_concurrency",
       "category": "envoy.filters.http"
      },
      {
       "name": "envoy.filters.http.admission_control",
       "category": "envoy.filters.http"
      },
      {
       "name": "envoy.filters.http.alternate_protocols_cache",
       "category": "envoy.filters.http"
      },
      {
       "name": "envoy.filters.http.aws_lambda",
       "category": "envoy.filters.http"
      },
      {
       "name": "envoy.filters.http.aws_request_signing",
       "category": "envoy.filters.http"
      },
      {
       "name": "envoy.filters.http.bandwidth_limit",
       "category": "envoy.filters.http"
      },
      {
       "name": "envoy.filters.http.buffer",
       "category": "envoy.filters.http"
      },
      {
       "name": "envoy.filters.http.cache",
       "category": "envoy.filters.http"
      },
      {
       "name": "envoy.filters.http.cdn_loop",
       "category": "envoy.filters.http"
      },
      {
       "name": "envoy.filters.http.composite",
       "category": "envoy.filters.http"
      },
      {
       "name": "envoy.filters.http.compressor",
       "category": "envoy.filters.http"
      },
      {
       "name": "envoy.filters.http.cors",
       "category": "envoy.filters.http"
      },
      {
       "name": "envoy.filters.http.csrf",
       "category": "envoy.filters.http"
      },
      {
       "name": "envoy.filters.http.decompressor",
       "category": "envoy.filters.http"
      },
      {
       "name": "envoy.filters.http.dynamic_forward_proxy",
       "category": "envoy.filters.http"
      },
      {
       "name": "envoy.filters.http.dynamo",
       "category": "envoy.filters.http"
      },
      {
       "name": "envoy.filters.http.ext_authz",
       "category": "envoy.filters.http"
      },
      {
       "name": "envoy.filters.http.ext_proc",
       "category": "envoy.filters.http"
      },
      {
       "name": "envoy.filters.http.fault",
       "category": "envoy.filters.http"
      },
      {
       "name": "envoy.filters.http.grpc_http1_bridge",
       "category": "envoy.filters.http"
      },
      {
       "name": "envoy.filters.http.grpc_http1_reverse_bridge",
       "category": "envoy.filters.http"
      },
      {
       "name": "envoy.filters.http.grpc_json_transcoder",
       "category": "envoy.filters.http"
      },
      {
       "name": "envoy.filters.http.grpc_stats",
       "category": "envoy.filters.http"
      },
      {
       "name": "envoy.filters.http.grpc_web",
       "category": "envoy.filters.http"
      },
      {
       "name": "envoy.filters.http.header_to_metadata",
       "category": "envoy.filters.http"
      },
      {
       "name": "envoy.filters.http.health_check",
       "category": "envoy.filters.http"
      },
      {
       "name": "envoy.filters.http.ip_tagging",
       "category": "envoy.filters.http"
      },
      {
       "name": "envoy.filters.http.jwt_authn",
       "category": "envoy.filters.http"
      },
      {
       "name": "envoy.filters.http.local_ratelimit",
       "category": "envoy.filters.http"
      },
      {
       "name": "envoy.filters.http.lua",
       "category": "envoy.filters.http"
      },
      {
       "name": "envoy.filters.http.oauth2",
       "category": "envoy.filters.http"
      },
      {
       "name": "envoy.filters.http.on_demand",
       "category": "envoy.filters.http"
      },
      {
       "name": "envoy.filters.http.original_src",
       "category": "envoy.filters.http"
      },
      {
       "name": "envoy.filters.http.ratelimit",
       "category": "envoy.filters.http"
      },
      {
       "name": "envoy.filters.http.rbac",
       "category": "envoy.filters.http"
      },
      {
       "name": "envoy.filters.http.router",
       "category": "envoy.filters.http"
      },
      {
       "name": "envoy.filters.http.set_metadata",
       "category": "envoy.filters.http"
      },
      {
       "name": "envoy.filters.http.tap",
       "category": "envoy.filters.http"
      },
      {
       "name": "envoy.filters.http.wasm",
       "category": "envoy.filters.http"
      },
      {
       "name": "envoy.grpc_http1_bridge",
       "category": "envoy.filters.http"
      },
      {
       "name": "envoy.grpc_json_transcoder",
       "category": "envoy.filters.http"
      },
      {
       "name": "envoy.grpc_web",
       "category": "envoy.filters.http"
      },
      {
       "name": "envoy.health_check",
       "category": "envoy.filters.http"
      },
      {
       "name": "envoy.http_dynamo_filter",
       "category": "envoy.filters.http"
      },
      {
       "name": "envoy.ip_tagging",
       "category": "envoy.filters.http"
      },
      {
       "name": "envoy.local_rate_limit",
       "category": "envoy.filters.http"
      },
      {
       "name": "envoy.lua",
       "category": "envoy.filters.http"
      },
      {
       "name": "envoy.rate_limit",
       "category": "envoy.filters.http"
      },
      {
       "name": "envoy.router",
       "category": "envoy.filters.http"
      },
      {
       "name": "match-wrapper",
       "category": "envoy.filters.http"
      },
      {
       "name": "envoy.transport_sockets.alts",
       "category": "envoy.transport_sockets.downstream"
      },
      {
       "name": "envoy.transport_sockets.quic",
       "category": "envoy.transport_sockets.downstream"
      },
      {
       "name": "envoy.transport_sockets.raw_buffer",
       "category": "envoy.transport_sockets.downstream"
      },
      {
       "name": "envoy.transport_sockets.starttls",
       "category": "envoy.transport_sockets.downstream"
      },
      {
       "name": "envoy.transport_sockets.tap",
       "category": "envoy.transport_sockets.downstream"
      },
      {
       "name": "envoy.transport_sockets.tls",
       "category": "envoy.transport_sockets.downstream"
      },
      {
       "name": "raw_buffer",
       "category": "envoy.transport_sockets.downstream"
      },
      {
       "name": "starttls",
       "category": "envoy.transport_sockets.downstream"
      },
      {
       "name": "tls",
       "category": "envoy.transport_sockets.downstream"
      },
      {
       "name": "envoy.bootstrap.wasm",
       "category": "envoy.bootstrap"
      },
      {
       "name": "envoy.extensions.network.socket_interface.default_socket_interface",
       "category": "envoy.bootstrap"
      },
      {
       "name": "envoy.matching.common_inputs.environment_variable",
       "category": "envoy.matching.common_inputs"
      },
      {
       "name": "request-headers",
       "category": "envoy.matching.http.input"
      },
      {
       "name": "request-trailers",
       "category": "envoy.matching.http.input"
      },
      {
       "name": "response-headers",
       "category": "envoy.matching.http.input"
      },
      {
       "name": "response-trailers",
       "category": "envoy.matching.http.input"
      },
      {
       "name": "envoy.quic.proof_source.filter_chain",
       "category": "envoy.quic.proof_source"
      },
      {
       "name": "envoy.access_loggers.file",
       "category": "envoy.access_loggers"
      },
      {
       "name": "envoy.access_loggers.http_grpc",
       "category": "envoy.access_loggers"
      },
      {
       "name": "envoy.access_loggers.open_telemetry",
       "category": "envoy.access_loggers"
      },
      {
       "name": "envoy.access_loggers.stderr",
       "category": "envoy.access_loggers"
      },
      {
       "name": "envoy.access_loggers.stdout",
       "category": "envoy.access_loggers"
      },
      {
       "name": "envoy.access_loggers.tcp_grpc",
       "category": "envoy.access_loggers"
      },
      {
       "name": "envoy.access_loggers.wasm",
       "category": "envoy.access_loggers"
      },
      {
       "name": "envoy.file_access_log",
       "category": "envoy.access_loggers"
      },
      {
       "name": "envoy.http_grpc_access_log",
       "category": "envoy.access_loggers"
      },
      {
       "name": "envoy.open_telemetry_access_log",
       "category": "envoy.access_loggers"
      },
      {
       "name": "envoy.stderr_access_log",
       "category": "envoy.access_loggers"
      },
      {
       "name": "envoy.stdout_access_log",
       "category": "envoy.access_loggers"
      },
      {
       "name": "envoy.tcp_grpc_access_log",
       "category": "envoy.access_loggers"
      },
      {
       "name": "envoy.wasm_access_log",
       "category": "envoy.access_loggers"
      },
      {
       "name": "envoy.cluster.eds",
       "category": "envoy.clusters"
      },
      {
       "name": "envoy.cluster.logical_dns",
       "category": "envoy.clusters"
      },
      {
       "name": "envoy.cluster.original_dst",
       "category": "envoy.clusters"
      },
      {
       "name": "envoy.cluster.static",
       "category": "envoy.clusters"
      },
      {
       "name": "envoy.cluster.strict_dns",
       "category": "envoy.clusters"
      },
      {
       "name": "envoy.clusters.aggregate",
       "category": "envoy.clusters"
      },
      {
       "name": "envoy.clusters.dynamic_forward_proxy",
       "category": "envoy.clusters"
      },
      {
       "name": "envoy.clusters.redis",
       "category": "envoy.clusters"
      },
      {
       "name": "envoy.tls.cert_validator.default",
       "category": "envoy.tls.cert_validator"
      },
      {
       "name": "envoy.tls.cert_validator.spiffe",
       "category": "envoy.tls.cert_validator"
      },
      {
       "name": "envoy.filters.thrift.rate_limit",
       "category": "envoy.thrift_proxy.filters"
      },
      {
       "name": "envoy.filters.thrift.router",
       "category": "envoy.thrift_proxy.filters"
      },
      {
       "name": "envoy.filters.listener.http_inspector",
       "category": "envoy.filters.listener"
      },
      {
       "name": "envoy.filters.listener.original_dst",
       "category": "envoy.filters.listener"
      },
      {
       "name": "envoy.filters.listener.original_src",
       "category": "envoy.filters.listener"
      },
      {
       "name": "envoy.filters.listener.proxy_protocol",
       "category": "envoy.filters.listener"
      },
      {
       "name": "envoy.filters.listener.tls_inspector",
       "category": "envoy.filters.listener"
      },
      {
       "name": "envoy.listener.http_inspector",
       "category": "envoy.filters.listener"
      },
      {
       "name": "envoy.listener.original_dst",
       "category": "envoy.filters.listener"
      },
      {
       "name": "envoy.listener.original_src",
       "category": "envoy.filters.listener"
      },
      {
       "name": "envoy.listener.proxy_protocol",
       "category": "envoy.filters.listener"
      },
      {
       "name": "envoy.listener.tls_inspector",
       "category": "envoy.filters.listener"
      },
      {
       "name": "dubbo.hessian2",
       "category": "envoy.dubbo_proxy.serializers"
      },
      {
       "name": "envoy.retry_priorities.previous_priorities",
       "category": "envoy.retry_priorities"
      },
      {
       "name": "envoy.rate_limit_descriptors.expr",
       "category": "envoy.rate_limit_descriptors"
      },
      {
       "name": "envoy.key_value.file_based",
       "category": "envoy.common.key_value"
      },
      {
       "name": "envoy.retry_host_predicates.omit_canary_hosts",
       "category": "envoy.retry_host_predicates"
      },
      {
       "name": "envoy.retry_host_predicates.omit_host_metadata",
       "category": "envoy.retry_host_predicates"
      },
      {
       "name": "envoy.retry_host_predicates.previous_hosts",
       "category": "envoy.retry_host_predicates"
      },
      {
       "name": "envoy.filters.udp.dns_filter",
       "category": "envoy.filters.udp_listener"
      },
      {
       "name": "envoy.filters.udp_listener.udp_proxy",
       "category": "envoy.filters.udp_listener"
      },
      {
       "name": "preserve_case",
       "category": "envoy.http.stateful_header_formatters"
      },
      {
       "name": "envoy.wasm.runtime.null",
       "category": "envoy.wasm.runtime"
      },
      {
       "name": "envoy.wasm.runtime.v8",
       "category": "envoy.wasm.runtime"
      },
      {
       "name": "envoy.request_id.uuid",
       "category": "envoy.request_id"
      },
      {
       "name": "envoy.filters.dubbo.router",
       "category": "envoy.dubbo_proxy.filters"
      },
      {
       "name": "envoy.extensions.upstreams.http.v3.HttpProtocolOptions",
       "category": "envoy.upstream_options"
      },
      {
       "name": "envoy.upstreams.http.http_protocol_options",
       "category": "envoy.upstream_options"
      },
      {
       "name": "composite-action",
       "category": "envoy.matching.action"
      },
      {
       "name": "skip",
       "category": "envoy.matching.action"
      },
      {
       "name": "default",
       "category": "envoy.dubbo_proxy.route_matchers"
      },
      {
       "name": "dubbo",
       "category": "envoy.dubbo_proxy.protocols"
      },
      {
       "name": "envoy.compression.brotli.decompressor",
       "category": "envoy.compression.decompressor"
      },
      {
       "name": "envoy.compression.gzip.decompressor",
       "category": "envoy.compression.decompressor"
      },
      {
       "name": "auto",
       "category": "envoy.thrift_proxy.protocols"
      },
      {
       "name": "binary",
       "category": "envoy.thrift_proxy.protocols"
      },
      {
       "name": "binary/non-strict",
       "category": "envoy.thrift_proxy.protocols"
      },
      {
       "name": "compact",
       "category": "envoy.thrift_proxy.protocols"
      },
      {
       "name": "twitter",
       "category": "envoy.thrift_proxy.protocols"
      },
      {
       "name": "envoy.grpc_credentials.aws_iam",
       "category": "envoy.grpc_credentials"
      },
      {
       "name": "envoy.grpc_credentials.default",
       "category": "envoy.grpc_credentials"
      },
      {
       "name": "envoy.grpc_credentials.file_based_metadata",
       "category": "envoy.grpc_credentials"
      },
      {
       "name": "envoy.extensions.http.cache.simple",
       "category": "envoy.http.cache"
      },
      {
       "name": "envoy.internal_redirect_predicates.allow_listed_routes",
       "category": "envoy.internal_redirect_predicates"
      },
      {
       "name": "envoy.internal_redirect_predicates.previous_routes",
       "category": "envoy.internal_redirect_predicates"
      },
      {
       "name": "envoy.internal_redirect_predicates.safe_cross_scheme",
       "category": "envoy.internal_redirect_predicates"
      },
      {
       "name": "envoy.compression.brotli.compressor",
       "category": "envoy.compression.compressor"
      },
      {
       "name": "envoy.compression.gzip.compressor",
       "category": "envoy.compression.compressor"
      },
      {
       "name": "auto",
       "category": "envoy.thrift_proxy.transports"
      },
      {
       "name": "framed",
       "category": "envoy.thrift_proxy.transports"
      },
      {
       "name": "header",
       "category": "envoy.thrift_proxy.transports"
      },
      {
       "name": "unframed",
       "category": "envoy.thrift_proxy.transports"
      },
      {
       "name": "envoy.ip",
       "category": "envoy.resolvers"
      },
      {
       "name": "envoy.dog_statsd",
       "category": "envoy.stats_sinks"
      },
      {
       "name": "envoy.graphite_statsd",
       "category": "envoy.stats_sinks"
      },
      {
       "name": "envoy.metrics_service",
       "category": "envoy.stats_sinks"
      },
      {
       "name": "envoy.stat_sinks.dog_statsd",
       "category": "envoy.stats_sinks"
      },
      {
       "name": "envoy.stat_sinks.graphite_statsd",
       "category": "envoy.stats_sinks"
      },
      {
       "name": "envoy.stat_sinks.hystrix",
       "category": "envoy.stats_sinks"
      },
      {
       "name": "envoy.stat_sinks.metrics_service",
       "category": "envoy.stats_sinks"
      },
      {
       "name": "envoy.stat_sinks.statsd",
       "category": "envoy.stats_sinks"
      },
      {
       "name": "envoy.stat_sinks.wasm",
       "category": "envoy.stats_sinks"
      },
      {
       "name": "envoy.statsd",
       "category": "envoy.stats_sinks"
      },
      {
       "name": "envoy.resource_monitors.fixed_heap",
       "category": "envoy.resource_monitors"
      },
      {
       "name": "envoy.resource_monitors.injected_resource",
       "category": "envoy.resource_monitors"
      },
      {
       "name": "envoy.quic.crypto_stream.server.quiche",
       "category": "envoy.quic.server.crypto_stream"
      },
      {
       "name": "envoy.filters.connection_pools.tcp.generic",
       "category": "envoy.upstreams"
      },
      {
       "name": "envoy.client_ssl_auth",
       "category": "envoy.filters.network"
      },
      {
       "name": "envoy.echo",
       "category": "envoy.filters.network"
      },
      {
       "name": "envoy.ext_authz",
       "category": "envoy.filters.network"
      },
      {
       "name": "envoy.filters.network.client_ssl_auth",
       "category": "envoy.filters.network"
      },
      {
       "name": "envoy.filters.network.connection_limit",
       "category": "envoy.filters.network"
      },
      {
       "name": "envoy.filters.network.direct_response",
       "category": "envoy.filters.network"
      },
      {
       "name": "envoy.filters.network.dubbo_proxy",
       "category": "envoy.filters.network"
      },
      {
       "name": "envoy.filters.network.echo",
       "category": "envoy.filters.network"
      },
      {
       "name": "envoy.filters.network.ext_authz",
       "category": "envoy.filters.network"
      },
      {
       "name": "envoy.filters.network.http_connection_manager",
       "category": "envoy.filters.network"
      },
      {
       "name": "envoy.filters.network.local_ratelimit",
       "category": "envoy.filters.network"
      },
      {
       "name": "envoy.filters.network.mongo_proxy",
       "category": "envoy.filters.network"
      },
      {
       "name": "envoy.filters.network.ratelimit",
       "category": "envoy.filters.network"
      },
      {
       "name": "envoy.filters.network.rbac",
       "category": "envoy.filters.network"
      },
      {
       "name": "envoy.filters.network.redis_proxy",
       "category": "envoy.filters.network"
      },
      {
       "name": "envoy.filters.network.sni_cluster",
       "category": "envoy.filters.network"
      },
      {
       "name": "envoy.filters.network.sni_dynamic_forward_proxy",
       "category": "envoy.filters.network"
      },
      {
       "name": "envoy.filters.network.tcp_proxy",
       "category": "envoy.filters.network"
      },
      {
       "name": "envoy.filters.network.thrift_proxy",
       "category": "envoy.filters.network"
      },
      {
       "name": "envoy.filters.network.wasm",
       "category": "envoy.filters.network"
      },
      {
       "name": "envoy.filters.network.zookeeper_proxy",
       "category": "envoy.filters.network"
      },
      {
       "name": "envoy.http_connection_manager",
       "category": "envoy.filters.network"
      },
      {
       "name": "envoy.mongo_proxy",
       "category": "envoy.filters.network"
      },
      {
       "name": "envoy.ratelimit",
       "category": "envoy.filters.network"
      },
      {
       "name": "envoy.redis_proxy",
       "category": "envoy.filters.network"
      },
      {
       "name": "envoy.tcp_proxy",
       "category": "envoy.filters.network"
      }
     ]
    },
    "dynamic_resources": {
     "lds_config": {
      "ads": {},
      "initial_fetch_timeout": "0s",
      "resource_api_version": "V3"
     },
     "cds_config": {
      "ads": {},
      "initial_fetch_timeout": "0s",
      "resource_api_version": "V3"
     },
     "ads_config": {
      "api_type": "GRPC",
      "grpc_services": [
       {
        "google_grpc": {
         "target_uri": "appmesh-envoy-management.ap-southeast-1.amazonaws.com:443",
         "channel_credentials": {
          "ssl_credentials": {
           "root_certs": {
            "filename": "/etc/pki/tls/cert.pem"
           }
          }
         },
         "call_credentials": [
          {
           "from_plugin": {
            "name": "envoy.grpc_credentials.aws_iam",
            "typed_config": {
             "@type": "type.googleapis.com/envoy.config.grpc_credential.v3.AwsIamConfig",
             "service_name": "appmesh",
             "region": "ap-southeast-1"
            }
           }
          }
         ],
         "stat_prefix": "ads",
         "credentials_factory_name": "envoy.grpc_credentials.aws_iam",
         "channel_args": {
          "args": {
           "grpc.keepalive_time_ms": {
            "int_value": "10000"
           },
           "grpc.http2.max_pings_without_data": {
            "int_value": "0"
           },
           "grpc.keepalive_timeout_ms": {
            "int_value": "20000"
           }
          }
         }
        }
       }
      ],
      "transport_api_version": "V3"
     }
    },
    "cluster_manager": {
     "outlier_detection": {
      "event_log_path": "/s/stdout"
     }
    },
    "admin": {
     "access_log_path": "/tmp/envoy_admin_access.log",
     "address": {
      "socket_address": {
       "address": "0.0.0.0",
       "port_value": 9901
      }
     }
    },
    "layered_runtime": {
     "layers": [
      {
       "name": "static_layer_0",
       "static_layer": {
        "envoy.reloadable_features.enable_deprecated_v2_api": true,
        "envoy.features.enable_all_deprecated_features": true,
        "re2.max_program_size.error_level": 1000,
        "envoy.reloadable_features.http_set_tracing_decision_in_request_id": true
       }
      }
     ]
    }
   },
   "last_updated": "2022-05-21T12:08:39.717Z"
  },
  {
   "@type": "type.googleapis.com/envoy.admin.v3.ClustersConfigDump",
   "version_info": "822736081:-2086145894:cec42df27b90fab256794a8a8c943552bb7bd440",
   "dynamic_active_clusters": [
    {
     "version_info": "822736081:-2086145894:cec42df27b90fab256794a8a8c943552bb7bd440",
     "cluster": {
      "@type": "type.googleapis.com/envoy.config.cluster.v3.Cluster",
      "name": "cds_egress_app-mesh_app-100030741-canary_prod_http_8080",
      "type": "LOGICAL_DNS",
      "connect_timeout": "1s",
      "circuit_breakers": {
       "thresholds": [
        {
         "max_connections": 2147483647,
         "max_pending_requests": 2147483647,
         "max_requests": 2147483647,
         "max_retries": 2147483647
        }
       ]
      },
      "metadata": {
       "filter_metadata": {
        "aws.appmesh.aggregate_stats": {
         "config": "{\"tags\":[{\"key\":\"TargetVirtualNode\",\"value\":\"app-100030741-canary_prod\"}]}"
        }
       }
      },
      "load_assignment": {
       "cluster_name": "cds_egress_app-mesh_app-100030741-canary_prod_http_8080",
       "endpoints": [
        {
         "lb_endpoints": [
          {
           "endpoint": {
            "address": {
             "socket_address": {
              "address": "app-100030741-canary.prod.svc.cluster.local.",
              "port_value": 8080
             }
            }
           }
          }
         ]
        }
       ]
      }
     },
     "last_updated": "2022-05-21T12:08:39.918Z"
    },
    {
     "version_info": "822736081:-2086145894:cec42df27b90fab256794a8a8c943552bb7bd440",
     "cluster": {
      "@type": "type.googleapis.com/envoy.config.cluster.v3.Cluster",
      "name": "cds_egress_app-mesh_app-100030741-primary_prod_http_8080",
      "type": "LOGICAL_DNS",
      "connect_timeout": "1s",
      "circuit_breakers": {
       "thresholds": [
        {
         "max_connections": 2147483647,
         "max_pending_requests": 2147483647,
         "max_requests": 2147483647,
         "max_retries": 2147483647
        }
       ]
      },
      "metadata": {
       "filter_metadata": {
        "aws.appmesh.aggregate_stats": {
         "config": "{\"tags\":[{\"key\":\"TargetVirtualNode\",\"value\":\"app-100030741-primary_prod\"}]}"
        }
       }
      },
      "load_assignment": {
       "cluster_name": "cds_egress_app-mesh_app-100030741-primary_prod_http_8080",
       "endpoints": [
        {
         "lb_endpoints": [
          {
           "endpoint": {
            "address": {
             "socket_address": {
              "address": "app-100030741-primary.prod.svc.cluster.local.",
              "port_value": 8080
             }
            }
           }
          }
         ]
        }
       ]
      }
     },
     "last_updated": "2022-05-21T12:08:39.917Z"
    },
    {
     "version_info": "822736081:-2086145894:cec42df27b90fab256794a8a8c943552bb7bd440",
     "cluster": {
      "@type": "type.googleapis.com/envoy.config.cluster.v3.Cluster",
      "name": "cds_egress_app-mesh_app-100032265-canary_prod_http_8080",
      "type": "LOGICAL_DNS",
      "connect_timeout": "1s",
      "circuit_breakers": {
       "thresholds": [
        {
         "max_connections": 2147483647,
         "max_pending_requests": 2147483647,
         "max_requests": 2147483647,
         "max_retries": 2147483647
        }
       ]
      },
      "metadata": {
       "filter_metadata": {
        "aws.appmesh.aggregate_stats": {
         "config": "{\"tags\":[{\"key\":\"TargetVirtualNode\",\"value\":\"app-100032265-canary_prod\"}]}"
        }
       }
      },
      "load_assignment": {
       "cluster_name": "cds_egress_app-mesh_app-100032265-canary_prod_http_8080",
       "endpoints": [
        {
         "lb_endpoints": [
          {
           "endpoint": {
            "address": {
             "socket_address": {
              "address": "app-100032265-canary.prod.svc.cluster.local.",
              "port_value": 8080
             }
            }
           }
          }
         ]
        }
       ]
      }
     },
     "last_updated": "2022-05-21T12:08:39.913Z"
    },
    {
     "version_info": "822736081:-2086145894:cec42df27b90fab256794a8a8c943552bb7bd440",
     "cluster": {
      "@type": "type.googleapis.com/envoy.config.cluster.v3.Cluster",
      "name": "cds_egress_app-mesh_app-100032265-primary_prod_http_8080",
      "type": "LOGICAL_DNS",
      "connect_timeout": "1s",
      "circuit_breakers": {
       "thresholds": [
        {
         "max_connections": 2147483647,
         "max_pending_requests": 2147483647,
         "max_requests": 2147483647,
         "max_retries": 2147483647
        }
       ]
      },
      "metadata": {
       "filter_metadata": {
        "aws.appmesh.aggregate_stats": {
         "config": "{\"tags\":[{\"key\":\"TargetVirtualNode\",\"value\":\"app-100032265-primary_prod\"}]}"
        }
       }
      },
      "load_assignment": {
       "cluster_name": "cds_egress_app-mesh_app-100032265-primary_prod_http_8080",
       "endpoints": [
        {
         "lb_endpoints": [
          {
           "endpoint": {
            "address": {
             "socket_address": {
              "address": "app-100032265-primary.prod.svc.cluster.local.",
              "port_value": 8080
             }
            }
           }
          }
         ]
        }
       ]
      }
     },
     "last_updated": "2022-05-21T12:08:39.912Z"
    },
    {
     "version_info": "822736081:-2086145894:cec42df27b90fab256794a8a8c943552bb7bd440",
     "cluster": {
      "@type": "type.googleapis.com/envoy.config.cluster.v3.Cluster",
      "name": "cds_egress_app-mesh_app-100035323-canary_prod_http_8080",
      "type": "LOGICAL_DNS",
      "connect_timeout": "1s",
      "circuit_breakers": {
       "thresholds": [
        {
         "max_connections": 2147483647,
         "max_pending_requests": 2147483647,
         "max_requests": 2147483647,
         "max_retries": 2147483647
        }
       ]
      },
      "metadata": {
       "filter_metadata": {
        "aws.appmesh.aggregate_stats": {
         "config": "{\"tags\":[{\"key\":\"TargetVirtualNode\",\"value\":\"app-100035323-canary_prod\"}]}"
        }
       }
      },
      "load_assignment": {
       "cluster_name": "cds_egress_app-mesh_app-100035323-canary_prod_http_8080",
       "endpoints": [
        {
         "lb_endpoints": [
          {
           "endpoint": {
            "address": {
             "socket_address": {
              "address": "app-100035323-canary.prod.svc.cluster.local.",
              "port_value": 8080
             }
            }
           }
          }
         ]
        }
       ]
      }
     },
     "last_updated": "2022-05-21T12:08:39.915Z"
    },
    {
     "version_info": "822736081:-2086145894:cec42df27b90fab256794a8a8c943552bb7bd440",
     "cluster": {
      "@type": "type.googleapis.com/envoy.config.cluster.v3.Cluster",
      "name": "cds_egress_app-mesh_app-100035323-primary_prod_http_8080",
      "type": "LOGICAL_DNS",
      "connect_timeout": "1s",
      "circuit_breakers": {
       "thresholds": [
        {
         "max_connections": 2147483647,
         "max_pending_requests": 2147483647,
         "max_requests": 2147483647,
         "max_retries": 2147483647
        }
       ]
      },
      "metadata": {
       "filter_metadata": {
        "aws.appmesh.aggregate_stats": {
         "config": "{\"tags\":[{\"key\":\"TargetVirtualNode\",\"value\":\"app-100035323-primary_prod\"}]}"
        }
       }
      },
      "load_assignment": {
       "cluster_name": "cds_egress_app-mesh_app-100035323-primary_prod_http_8080",
       "endpoints": [
        {
         "lb_endpoints": [
          {
           "endpoint": {
            "address": {
             "socket_address": {
              "address": "app-100035323-primary.prod.svc.cluster.local.",
              "port_value": 8080
             }
            }
           }
          }
         ]
        }
       ]
      }
     },
     "last_updated": "2022-05-21T12:08:39.914Z"
    },
    {
     "version_info": "822736081:-2086145894:cec42df27b90fab256794a8a8c943552bb7bd440",
     "cluster": {
      "@type": "type.googleapis.com/envoy.config.cluster.v3.Cluster",
      "name": "cds_egress_app-mesh_app-100035399-canary_prod_http_8080",
      "type": "LOGICAL_DNS",
      "connect_timeout": "1s",
      "circuit_breakers": {
       "thresholds": [
        {
         "max_connections": 2147483647,
         "max_pending_requests": 2147483647,
         "max_requests": 2147483647,
         "max_retries": 2147483647
        }
       ]
      },
      "metadata": {
       "filter_metadata": {
        "aws.appmesh.aggregate_stats": {
         "config": "{\"tags\":[{\"key\":\"TargetVirtualNode\",\"value\":\"app-100035399-canary_prod\"}]}"
        }
       }
      },
      "load_assignment": {
       "cluster_name": "cds_egress_app-mesh_app-100035399-canary_prod_http_8080",
       "endpoints": [
        {
         "lb_endpoints": [
          {
           "endpoint": {
            "address": {
             "socket_address": {
              "address": "app-100035399-canary.prod.svc.cluster.local.",
              "port_value": 8080
             }
            }
           }
          }
         ]
        }
       ]
      }
     },
     "last_updated": "2022-05-21T12:08:39.910Z"
    },
    {
     "version_info": "822736081:-2086145894:cec42df27b90fab256794a8a8c943552bb7bd440",
     "cluster": {
      "@type": "type.googleapis.com/envoy.config.cluster.v3.Cluster",
      "name": "cds_egress_app-mesh_app-100035399-primary_prod_http_8080",
      "type": "LOGICAL_DNS",
      "connect_timeout": "1s",
      "circuit_breakers": {
       "thresholds": [
        {
         "max_connections": 2147483647,
         "max_pending_requests": 2147483647,
         "max_requests": 2147483647,
         "max_retries": 2147483647
        }
       ]
      },
      "metadata": {
       "filter_metadata": {
        "aws.appmesh.aggregate_stats": {
         "config": "{\"tags\":[{\"key\":\"TargetVirtualNode\",\"value\":\"app-100035399-primary_prod\"}]}"
        }
       }
      },
      "load_assignment": {
       "cluster_name": "cds_egress_app-mesh_app-100035399-primary_prod_http_8080",
       "endpoints": [
        {
         "lb_endpoints": [
          {
           "endpoint": {
            "address": {
             "socket_address": {
              "address": "app-100035399-primary.prod.svc.cluster.local.",
              "port_value": 8080
             }
            }
           }
          }
         ]
        }
       ]
      }
     },
     "last_updated": "2022-05-21T12:08:39.911Z"
    },
    {
     "version_info": "822736081:-2086145894:cec42df27b90fab256794a8a8c943552bb7bd440",
     "cluster": {
      "@type": "type.googleapis.com/envoy.config.cluster.v3.Cluster",
      "name": "cds_egress_app-mesh_ibumarketadsmatchservice-19816-canary_prod_http_8080",
      "type": "LOGICAL_DNS",
      "connect_timeout": "1s",
      "circuit_breakers": {
       "thresholds": [
        {
         "max_connections": 2147483647,
         "max_pending_requests": 2147483647,
         "max_requests": 2147483647,
         "max_retries": 2147483647
        }
       ]
      },
      "metadata": {
       "filter_metadata": {
        "aws.appmesh.aggregate_stats": {
         "config": "{\"tags\":[{\"key\":\"TargetVirtualNode\",\"value\":\"ibumarketadsmatchservice-19816-canary_prod\"}]}"
        }
       }
      },
      "load_assignment": {
       "cluster_name": "cds_egress_app-mesh_ibumarketadsmatchservice-19816-canary_prod_http_8080",
       "endpoints": [
        {
         "lb_endpoints": [
          {
           "endpoint": {
            "address": {
             "socket_address": {
              "address": "ibumarketadsmatchservice-19816-canary.prod.svc.cluster.local.",
              "port_value": 8080
             }
            }
           }
          }
         ]
        }
       ]
      }
     },
     "last_updated": "2022-05-21T12:08:39.909Z"
    },
    {
     "version_info": "822736081:-2086145894:cec42df27b90fab256794a8a8c943552bb7bd440",
     "cluster": {
      "@type": "type.googleapis.com/envoy.config.cluster.v3.Cluster",
      "name": "cds_egress_app-mesh_ibumarketadsmatchservice-19816-primary_prod_http_8080",
      "type": "LOGICAL_DNS",
      "connect_timeout": "1s",
      "circuit_breakers": {
       "thresholds": [
        {
         "max_connections": 2147483647,
         "max_pending_requests": 2147483647,
         "max_requests": 2147483647,
         "max_retries": 2147483647
        }
       ]
      },
      "metadata": {
       "filter_metadata": {
        "aws.appmesh.aggregate_stats": {
         "config": "{\"tags\":[{\"key\":\"TargetVirtualNode\",\"value\":\"ibumarketadsmatchservice-19816-primary_prod\"}]}"
        }
       }
      },
      "load_assignment": {
       "cluster_name": "cds_egress_app-mesh_ibumarketadsmatchservice-19816-primary_prod_http_8080",
       "endpoints": [
        {
         "lb_endpoints": [
          {
           "endpoint": {
            "address": {
             "socket_address": {
              "address": "ibumarketadsmatchservice-19816-primary.prod.svc.cluster.local.",
              "port_value": 8080
             }
            }
           }
          }
         ]
        }
       ]
      }
     },
     "last_updated": "2022-05-21T12:08:39.908Z"
    },
    {
     "version_info": "822736081:-2086145894:cec42df27b90fab256794a8a8c943552bb7bd440",
     "cluster": {
      "@type": "type.googleapis.com/envoy.config.cluster.v3.Cluster",
      "name": "cds_egress_app-mesh_ibuplatformaffiliateapi-14524-canary_prod_http_8080",
      "type": "LOGICAL_DNS",
      "connect_timeout": "1s",
      "circuit_breakers": {
       "thresholds": [
        {
         "max_connections": 2147483647,
         "max_pending_requests": 2147483647,
         "max_requests": 2147483647,
         "max_retries": 2147483647
        }
       ]
      },
      "metadata": {
       "filter_metadata": {
        "aws.appmesh.aggregate_stats": {
         "config": "{\"tags\":[{\"key\":\"TargetVirtualNode\",\"value\":\"ibuplatformaffiliateapi-14524-canary_prod\"}]}"
        }
       }
      },
      "load_assignment": {
       "cluster_name": "cds_egress_app-mesh_ibuplatformaffiliateapi-14524-canary_prod_http_8080",
       "endpoints": [
        {
         "lb_endpoints": [
          {
           "endpoint": {
            "address": {
             "socket_address": {
              "address": "ibuplatformaffiliateapi-14524-canary.prod.svc.cluster.local.",
              "port_value": 8080
             }
            }
           }
          }
         ]
        }
       ]
      }
     },
     "last_updated": "2022-05-21T12:08:39.917Z"
    },
    {
     "version_info": "822736081:-2086145894:cec42df27b90fab256794a8a8c943552bb7bd440",
     "cluster": {
      "@type": "type.googleapis.com/envoy.config.cluster.v3.Cluster",
      "name": "cds_egress_app-mesh_ibuplatformaffiliateapi-14524-primary_prod_http_8080",
      "type": "LOGICAL_DNS",
      "connect_timeout": "1s",
      "circuit_breakers": {
       "thresholds": [
        {
         "max_connections": 2147483647,
         "max_pending_requests": 2147483647,
         "max_requests": 2147483647,
         "max_retries": 2147483647
        }
       ]
      },
      "metadata": {
       "filter_metadata": {
        "aws.appmesh.aggregate_stats": {
         "config": "{\"tags\":[{\"key\":\"TargetVirtualNode\",\"value\":\"ibuplatformaffiliateapi-14524-primary_prod\"}]}"
        }
       }
      },
      "load_assignment": {
       "cluster_name": "cds_egress_app-mesh_ibuplatformaffiliateapi-14524-primary_prod_http_8080",
       "endpoints": [
        {
         "lb_endpoints": [
          {
           "endpoint": {
            "address": {
             "socket_address": {
              "address": "ibuplatformaffiliateapi-14524-primary.prod.svc.cluster.local.",
              "port_value": 8080
             }
            }
           }
          }
         ]
        }
       ]
      }
     },
     "last_updated": "2022-05-21T12:08:39.916Z"
    },
    {
     "version_info": "822736081:-2086145894:cec42df27b90fab256794a8a8c943552bb7bd440",
     "cluster": {
      "@type": "type.googleapis.com/envoy.config.cluster.v3.Cluster",
      "name": "cds_ingress_app-mesh_appmesh-gateway_prod_self_redirect_http_15001",
      "type": "STATIC",
      "connect_timeout": "0.250s",
      "circuit_breakers": {
       "thresholds": [
        {
         "max_connections": 2147483647,
         "max_pending_requests": 2147483647,
         "max_requests": 2147483647,
         "max_retries": 2147483647
        }
       ]
      },
      "load_assignment": {
       "cluster_name": "cds_ingress_app-mesh_appmesh-gateway_prod_self_redirect_http_15001",
       "endpoints": [
        {
         "lb_endpoints": [
          {
           "endpoint": {
            "address": {
             "socket_address": {
              "address": "127.0.0.1",
              "port_value": 15001
             }
            }
           }
          }
         ]
        }
       ]
      }
     },
     "last_updated": "2022-05-21T12:08:39.920Z"
    }
   ]
  },
  {
   "@type": "type.googleapis.com/envoy.admin.v3.ListenersConfigDump",
   "version_info": "822736081:-2086145894:cec42df27b90fab256794a8a8c943552bb7bd440",
   "dynamic_listeners": [
    {
     "name": "lds_ingress_0.0.0.0_8088",
     "active_state": {
      "version_info": "822736081:-2086145894:cec42df27b90fab256794a8a8c943552bb7bd440",
      "listener": {
       "@type": "type.googleapis.com/envoy.config.listener.v3.Listener",
       "name": "lds_ingress_0.0.0.0_8088",
       "address": {
        "socket_address": {
         "address": "0.0.0.0",
         "port_value": 8088
        }
       },
       "filter_chains": [
        {
         "filter_chain_match": {
          "destination_port": 8088
         },
         "filters": [
          {
           "name": "envoy.filters.network.http_connection_manager",
           "typed_config": {
            "@type": "type.googleapis.com/envoy.extensions.filters.network.http_connection_manager.v3.HttpConnectionManager",
            "stat_prefix": "ingress",
            "rds": {
             "config_source": {
              "ads": {},
              "resource_api_version": "V3"
             },
             "route_config_name": "rds_ingress_http_8088"
            },
            "http_filters": [
             {
              "name": "envoy.filters.http.router"
             }
            ],
            "tracing": {},
            "access_log": [
             {
              "name": "envoy.access_loggers.file",
              "typed_config": {
               "@type": "type.googleapis.com/envoy.extensions.access_loggers.file.v3.FileAccessLog",
               "path": "/dev/stdout"
              }
             }
            ],
            "upgrade_configs": [
             {
              "upgrade_type": "websocket",
              "enabled": true
             }
            ],
            "normalize_path": true,
            "merge_slashes": true,
            "path_with_escaped_slashes_action": "KEEP_UNCHANGED"
           }
          }
         ]
        }
       ],
       "metadata": {
        "filter_metadata": {
         "aws.appmesh.aggregate_stats": {
          "config": "{\"tags\":[]}"
         }
        }
       },
       "listener_filters": [
        {
         "name": "envoy.filters.listener.tls_inspector"
        }
       ],
       "traffic_direction": "INBOUND"
      },
      "last_updated": "2022-05-21T12:08:39.935Z"
     }
    },
    {
     "name": "lds_egress_0.0.0.0_15001",
     "active_state": {
      "version_info": "822736081:-2086145894:cec42df27b90fab256794a8a8c943552bb7bd440",
      "listener": {
       "@type": "type.googleapis.com/envoy.config.listener.v3.Listener",
       "name": "lds_egress_0.0.0.0_15001",
       "address": {
        "socket_address": {
         "address": "0.0.0.0",
         "port_value": 15001
        }
       },
       "filter_chains": [
        {
         "filter_chain_match": {
          "destination_port": 15001
         },
         "filters": [
          {
           "name": "envoy.filters.network.http_connection_manager",
           "typed_config": {
            "@type": "type.googleapis.com/envoy.extensions.filters.network.http_connection_manager.v3.HttpConnectionManager",
            "stat_prefix": "egress",
            "rds": {
             "config_source": {
              "ads": {},
              "resource_api_version": "V3"
             },
             "route_config_name": "rds_egress_http_15001"
            },
            "http_filters": [
             {
              "name": "envoy.filters.http.router"
             }
            ],
            "tracing": {},
            "access_log": [
             {
              "name": "envoy.access_loggers.file",
              "typed_config": {
               "@type": "type.googleapis.com/envoy.extensions.access_loggers.file.v3.FileAccessLog",
               "path": "/dev/stdout"
              }
             }
            ],
            "upgrade_configs": [
             {
              "upgrade_type": "websocket",
              "enabled": true
             }
            ],
            "normalize_path": true,
            "merge_slashes": true,
            "path_with_escaped_slashes_action": "KEEP_UNCHANGED"
           }
          }
         ]
        }
       ],
       "metadata": {
        "filter_metadata": {
         "aws.appmesh.aggregate_stats": {
          "config": "{\"tags\":[]}"
         }
        }
       },
       "listener_filters": [
        {
         "name": "envoy.filters.listener.tls_inspector"
        }
       ],
       "traffic_direction": "OUTBOUND"
      },
      "last_updated": "2022-05-21T12:08:39.937Z"
     }
    }
   ]
  },
  {
   "@type": "type.googleapis.com/envoy.admin.v3.ScopedRoutesConfigDump"
  },
  {
   "@type": "type.googleapis.com/envoy.admin.v3.RoutesConfigDump",
   "dynamic_route_configs": [
    {
     "version_info": "822736081:-2086145894:cec42df27b90fab256794a8a8c943552bb7bd440",
     "route_config": {
      "@type": "type.googleapis.com/envoy.config.route.v3.RouteConfiguration",
      "name": "rds_ingress_http_8088",
      "virtual_hosts": [
       {
        "name": "self_redirect",
        "domains": [
         "*"
        ],
        "routes": [
         {
          "match": {
           "prefix": "/flutter-server/"
          },
          "route": {
           "cluster": "cds_ingress_app-mesh_appmesh-gateway_prod_self_redirect_http_15001",
           "prefix_rewrite": "/",
           "host_rewrite_literal": "app-100035407.prod"
          }
         },
         {
          "match": {
           "prefix": "/foxpage-server/"
          },
          "route": {
           "cluster": "cds_ingress_app-mesh_appmesh-gateway_prod_self_redirect_http_15001",
           "prefix_rewrite": "/",
           "host_rewrite_literal": "app-100035323.prod",
           "timeout": "15s"
          }
         },
         {
          "match": {
           "prefix": "/flutter-server"
          },
          "route": {
           "cluster": "cds_ingress_app-mesh_appmesh-gateway_prod_self_redirect_http_15001",
           "prefix_rewrite": "/",
           "host_rewrite_literal": "app-100035407.prod"
          }
         },
         {
          "match": {
           "prefix": "/foxpage-admin/"
          },
          "route": {
           "cluster": "cds_ingress_app-mesh_appmesh-gateway_prod_self_redirect_http_15001",
           "prefix_rewrite": "/",
           "host_rewrite_literal": "app-100035399.prod",
           "timeout": "15s"
          }
         },
         {
          "match": {
           "prefix": "/foxpage-server"
          },
          "route": {
           "cluster": "cds_ingress_app-mesh_appmesh-gateway_prod_self_redirect_http_15001",
           "prefix_rewrite": "/",
           "host_rewrite_literal": "app-100035323.prod",
           "timeout": "15s"
          }
         },
         {
          "match": {
           "prefix": "/foxpage-admin"
          },
          "route": {
           "cluster": "cds_ingress_app-mesh_appmesh-gateway_prod_self_redirect_http_15001",
           "prefix_rewrite": "/",
           "host_rewrite_literal": "app-100035399.prod",
           "timeout": "15s"
          }
         },
         {
          "match": {
           "prefix": "/14524/"
          },
          "route": {
           "cluster": "cds_ingress_app-mesh_appmesh-gateway_prod_self_redirect_http_15001",
           "prefix_rewrite": "/",
           "host_rewrite_literal": "ibuplatformaffiliateapi-14524.prod",
           "timeout": "15s"
          }
         },
         {
          "match": {
           "prefix": "/19816/"
          },
          "route": {
           "cluster": "cds_ingress_app-mesh_appmesh-gateway_prod_self_redirect_http_15001",
           "prefix_rewrite": "/",
           "host_rewrite_literal": "ibumarketadsmatchservice-19816.prod",
           "timeout": "15s"
          }
         },
         {
          "match": {
           "prefix": "/14524"
          },
          "route": {
           "cluster": "cds_ingress_app-mesh_appmesh-gateway_prod_self_redirect_http_15001",
           "prefix_rewrite": "/",
           "host_rewrite_literal": "ibuplatformaffiliateapi-14524.prod",
           "timeout": "15s"
          }
         },
         {
          "match": {
           "prefix": "/19816"
          },
          "route": {
           "cluster": "cds_ingress_app-mesh_appmesh-gateway_prod_self_redirect_http_15001",
           "prefix_rewrite": "/",
           "host_rewrite_literal": "ibumarketadsmatchservice-19816.prod",
           "timeout": "15s"
          }
         },
         {
          "match": {
           "prefix": "/hot/"
          },
          "route": {
           "cluster": "cds_ingress_app-mesh_appmesh-gateway_prod_self_redirect_http_15001",
           "prefix_rewrite": "/hot/",
           "timeout": "15s"
          },
          "request_headers_to_add": [
           {
            "header": {
             "key": "x-app-mesh-virtual-service",
             "value": "app-100030741.prod"
            }
           }
          ]
         },
         {
          "match": {
           "prefix": "/healthcheck/"
          },
          "route": {
           "cluster": "cds_ingress_app-mesh_appmesh-gateway_prod_self_redirect_http_15001",
           "prefix_rewrite": "/",
           "host_rewrite_literal": "app-100032265.prod",
           "timeout": "15s"
          }
         },
         {
          "match": {
           "prefix": "/healthcheck"
          },
          "route": {
           "cluster": "cds_ingress_app-mesh_appmesh-gateway_prod_self_redirect_http_15001",
           "prefix_rewrite": "/",
           "host_rewrite_literal": "app-100032265.prod",
           "timeout": "15s"
          }
         },
         {
          "match": {
           "prefix": "/"
          },
          "route": {
           "cluster": "cds_ingress_app-mesh_appmesh-gateway_prod_self_redirect_http_15001",
           "prefix_rewrite": "/",
           "host_rewrite_literal": "app-100032265.prod",
           "timeout": "15s"
          }
         }
        ]
       }
      ]
     },
     "last_updated": "2022-05-21T12:08:39.943Z"
    },
    {
     "version_info": "-1338743948:-2086145894:cec42df27b90fab256794a8a8c943552bb7bd440",
     "route_config": {
      "@type": "type.googleapis.com/envoy.config.route.v3.RouteConfiguration",
      "name": "rds_egress_http_15001",
      "virtual_hosts": [
       {
        "name": "app-100032265.prod",
        "domains": [
         "app-100032265.prod",
         "app-100032265.prod:15001"
        ],
        "routes": [
         {
          "match": {
           "prefix": "/"
          },
          "route": {
           "weighted_clusters": {
            "clusters": [
             {
              "name": "cds_egress_app-mesh_app-100032265-canary_prod_http_8080",
              "weight": 0
             },
             {
              "name": "cds_egress_app-mesh_app-100032265-primary_prod_http_8080",
              "weight": 100
             }
            ],
            "total_weight": 100
           },
           "timeout": "15s",
           "retry_policy": {
            "retry_on": "reset,refused-stream,retriable-status-codes",
            "num_retries": 1,
            "per_try_timeout": "5s",
            "retry_host_predicate": [
             {
              "name": "envoy.retry_host_predicates.previous_hosts"
             }
            ],
            "host_selection_retry_max_attempts": "5",
            "retriable_status_codes": [
             502,
             503,
             504,
             409
            ]
           }
          },
          "metadata": {
           "filter_metadata": {
            "aws.appmesh.aggregate_stats": {
             "config": "{\"tags\":[{\"key\":\"TargetVirtualService\",\"value\":\"app-100032265.prod\"}]}"
            }
           }
          }
         }
        ]
       },
       {
        "name": "app-100035323.prod",
        "domains": [
         "app-100035323.prod",
         "app-100035323.prod:15001"
        ],
        "routes": [
         {
          "match": {
           "prefix": "/"
          },
          "route": {
           "weighted_clusters": {
            "clusters": [
             {
              "name": "cds_egress_app-mesh_app-100035323-canary_prod_http_8080",
              "weight": 0
             },
             {
              "name": "cds_egress_app-mesh_app-100035323-primary_prod_http_8080",
              "weight": 100
             }
            ],
            "total_weight": 100
           },
           "timeout": "15s",
           "retry_policy": {
            "retry_on": "reset,refused-stream,retriable-status-codes",
            "num_retries": 1,
            "per_try_timeout": "5s",
            "retry_host_predicate": [
             {
              "name": "envoy.retry_host_predicates.previous_hosts"
             }
            ],
            "host_selection_retry_max_attempts": "5",
            "retriable_status_codes": [
             502,
             503,
             504,
             409
            ]
           }
          },
          "metadata": {
           "filter_metadata": {
            "aws.appmesh.aggregate_stats": {
             "config": "{\"tags\":[{\"key\":\"TargetVirtualService\",\"value\":\"app-100035323.prod\"}]}"
            }
           }
          }
         }
        ]
       },
       {
        "name": "app-100035399.prod",
        "domains": [
         "app-100035399.prod",
         "app-100035399.prod:15001"
        ],
        "routes": [
         {
          "match": {
           "prefix": "/"
          },
          "route": {
           "weighted_clusters": {
            "clusters": [
             {
              "name": "cds_egress_app-mesh_app-100035399-canary_prod_http_8080",
              "weight": 0
             },
             {
              "name": "cds_egress_app-mesh_app-100035399-primary_prod_http_8080",
              "weight": 100
             }
            ],
            "total_weight": 100
           },
           "timeout": "15s",
           "retry_policy": {
            "retry_on": "reset,refused-stream,retriable-status-codes",
            "num_retries": 1,
            "per_try_timeout": "5s",
            "retry_host_predicate": [
             {
              "name": "envoy.retry_host_predicates.previous_hosts"
             }
            ],
            "host_selection_retry_max_attempts": "5",
            "retriable_status_codes": [
             502,
             503,
             504,
             409
            ]
           }
          },
          "metadata": {
           "filter_metadata": {
            "aws.appmesh.aggregate_stats": {
             "config": "{\"tags\":[{\"key\":\"TargetVirtualService\",\"value\":\"app-100035399.prod\"}]}"
            }
           }
          }
         }
        ]
       },
       {
        "name": "app-100035407.prod",
        "domains": [
         "app-100035407.prod",
         "app-100035407.prod:15001"
        ]
       },
       {
        "name": "default_backend",
        "domains": [
         "*"
        ],
        "routes": [
         {
          "match": {
           "prefix": "/",
           "headers": [
            {
             "name": "x-app-mesh-virtual-service",
             "exact_match": "app-100030741.prod"
            }
           ]
          },
          "route": {
           "weighted_clusters": {
            "clusters": [
             {
              "name": "cds_egress_app-mesh_app-100030741-canary_prod_http_8080",
              "weight": 0
             },
             {
              "name": "cds_egress_app-mesh_app-100030741-primary_prod_http_8080",
              "weight": 100
             }
            ],
            "total_weight": 100
           },
           "timeout": "15s",
           "retry_policy": {
            "retry_on": "reset,refused-stream,retriable-status-codes",
            "num_retries": 1,
            "per_try_timeout": "5s",
            "retry_host_predicate": [
             {
              "name": "envoy.retry_host_predicates.previous_hosts"
             }
            ],
            "host_selection_retry_max_attempts": "5",
            "retriable_status_codes": [
             502,
             503,
             504,
             409
            ]
           }
          },
          "metadata": {
           "filter_metadata": {
            "aws.appmesh.aggregate_stats": {
             "config": "{\"tags\":[{\"key\":\"TargetVirtualService\",\"value\":\"app-100030741.prod\"}]}"
            }
           }
          },
          "response_headers_to_remove": [
           "x-app-mesh-virtual-service"
          ]
         }
        ]
       },
       {
        "name": "ibumarketadsmatchservice-19816.prod",
        "domains": [
         "ibumarketadsmatchservice-19816.prod",
         "ibumarketadsmatchservice-19816.prod:15001"
        ],
        "routes": [
         {
          "match": {
           "prefix": "/"
          },
          "route": {
           "weighted_clusters": {
            "clusters": [
             {
              "name": "cds_egress_app-mesh_ibumarketadsmatchservice-19816-canary_prod_http_8080",
              "weight": 0
             },
             {
              "name": "cds_egress_app-mesh_ibumarketadsmatchservice-19816-primary_prod_http_8080",
              "weight": 100
             }
            ],
            "total_weight": 100
           },
           "timeout": "15s",
           "retry_policy": {
            "retry_on": "reset,refused-stream,retriable-status-codes",
            "num_retries": 1,
            "per_try_timeout": "5s",
            "retry_host_predicate": [
             {
              "name": "envoy.retry_host_predicates.previous_hosts"
             }
            ],
            "host_selection_retry_max_attempts": "5",
            "retriable_status_codes": [
             502,
             503,
             504,
             409
            ]
           }
          },
          "metadata": {
           "filter_metadata": {
            "aws.appmesh.aggregate_stats": {
             "config": "{\"tags\":[{\"key\":\"TargetVirtualService\",\"value\":\"ibumarketadsmatchservice-19816.prod\"}]}"
            }
           }
          }
         }
        ]
       },
       {
        "name": "ibuplatformaffiliateapi-14524.prod",
        "domains": [
         "ibuplatformaffiliateapi-14524.prod",
         "ibuplatformaffiliateapi-14524.prod:15001"
        ],
        "routes": [
         {
          "match": {
           "prefix": "/"
          },
          "route": {
           "weighted_clusters": {
            "clusters": [
             {
              "name": "cds_egress_app-mesh_ibuplatformaffiliateapi-14524-canary_prod_http_8080",
              "weight": 0
             },
             {
              "name": "cds_egress_app-mesh_ibuplatformaffiliateapi-14524-primary_prod_http_8080",
              "weight": 100
             }
            ],
            "total_weight": 100
           },
           "timeout": "15s",
           "retry_policy": {
            "retry_on": "reset,refused-stream,retriable-status-codes",
            "num_retries": 1,
            "per_try_timeout": "5s",
            "retry_host_predicate": [
             {
              "name": "envoy.retry_host_predicates.previous_hosts"
             }
            ],
            "host_selection_retry_max_attempts": "5",
            "retriable_status_codes": [
             502,
             503,
             504,
             409
            ]
           }
          },
          "metadata": {
           "filter_metadata": {
            "aws.appmesh.aggregate_stats": {
             "config": "{\"tags\":[{\"key\":\"TargetVirtualService\",\"value\":\"ibuplatformaffiliateapi-14524.prod\"}]}"
            }
           }
          }
         }
        ]
       }
      ]
     },
     "last_updated": "2022-05-23T10:13:07.240Z"
    }
   ]
  },
  {
   "@type": "type.googleapis.com/envoy.admin.v3.SecretsConfigDump"
  }
 ]
}
```

#### /stats

```

cluster_manager.cds.version_text: "-1338743948:-2086145894:cec42df27b90fab256794a8a8c943552bb7bd440"
control_plane.identifier: ""
http.egress.rds.rds_egress_http_15001.version_text: "-1338743948:-2086145894:cec42df27b90fab256794a8a8c943552bb7bd440"
http.ingress.rds.rds_ingress_http_8088.version_text: "-1338743948:-2086145894:cec42df27b90fab256794a8a8c943552bb7bd440"
listener_manager.lds.version_text: "-1338743948:-2086145894:cec42df27b90fab256794a8a8c943552bb7bd440"
cluster.cds_egress_app-mesh_app-100030741-canary_prod_http_8080.assignment_stale: 0
cluster.cds_egress_app-mesh_app-100030741-canary_prod_http_8080.assignment_timeout_received: 0
cluster.cds_egress_app-mesh_app-100030741-canary_prod_http_8080.bind_errors: 0
cluster.cds_egress_app-mesh_app-100030741-canary_prod_http_8080.circuit_breakers.default.cx_open: 0
cluster.cds_egress_app-mesh_app-100030741-canary_prod_http_8080.circuit_breakers.default.cx_pool_open: 0
cluster.cds_egress_app-mesh_app-100030741-canary_prod_http_8080.circuit_breakers.default.rq_open: 0
cluster.cds_egress_app-mesh_app-100030741-canary_prod_http_8080.circuit_breakers.default.rq_pending_open: 0
cluster.cds_egress_app-mesh_app-100030741-canary_prod_http_8080.circuit_breakers.default.rq_retry_open: 0
cluster.cds_egress_app-mesh_app-100030741-canary_prod_http_8080.circuit_breakers.high.cx_open: 0
cluster.cds_egress_app-mesh_app-100030741-canary_prod_http_8080.circuit_breakers.high.cx_pool_open: 0
cluster.cds_egress_app-mesh_app-100030741-canary_prod_http_8080.circuit_breakers.high.rq_open: 0
cluster.cds_egress_app-mesh_app-100030741-canary_prod_http_8080.circuit_breakers.high.rq_pending_open: 0
cluster.cds_egress_app-mesh_app-100030741-canary_prod_http_8080.circuit_breakers.high.rq_retry_open: 0
cluster.cds_egress_app-mesh_app-100030741-canary_prod_http_8080.default.total_match_count: 1
cluster.cds_egress_app-mesh_app-100030741-canary_prod_http_8080.lb_healthy_panic: 0
cluster.cds_egress_app-mesh_app-100030741-canary_prod_http_8080.lb_local_cluster_not_ok: 0
cluster.cds_egress_app-mesh_app-100030741-canary_prod_http_8080.lb_recalculate_zone_structures: 0
cluster.cds_egress_app-mesh_app-100030741-canary_prod_http_8080.lb_subsets_active: 0
cluster.cds_egress_app-mesh_app-100030741-canary_prod_http_8080.lb_subsets_created: 0
cluster.cds_egress_app-mesh_app-100030741-canary_prod_http_8080.lb_subsets_fallback: 0
cluster.cds_egress_app-mesh_app-100030741-canary_prod_http_8080.lb_subsets_fallback_panic: 0
cluster.cds_egress_app-mesh_app-100030741-canary_prod_http_8080.lb_subsets_removed: 0
cluster.cds_egress_app-mesh_app-100030741-canary_prod_http_8080.lb_subsets_selected: 0
cluster.cds_egress_app-mesh_app-100030741-canary_prod_http_8080.lb_zone_cluster_too_small: 0
cluster.cds_egress_app-mesh_app-100030741-canary_prod_http_8080.lb_zone_no_capacity_left: 0
cluster.cds_egress_app-mesh_app-100030741-canary_prod_http_8080.lb_zone_number_differs: 0
cluster.cds_egress_app-mesh_app-100030741-canary_prod_http_8080.lb_zone_routing_all_directly: 0
cluster.cds_egress_app-mesh_app-100030741-canary_prod_http_8080.lb_zone_routing_cross_zone: 0
cluster.cds_egress_app-mesh_app-100030741-canary_prod_http_8080.lb_zone_routing_sampled: 0
cluster.cds_egress_app-mesh_app-100030741-canary_prod_http_8080.max_host_weight: 0
cluster.cds_egress_app-mesh_app-100030741-canary_prod_http_8080.membership_change: 1
cluster.cds_egress_app-mesh_app-100030741-canary_prod_http_8080.membership_degraded: 0
cluster.cds_egress_app-mesh_app-100030741-canary_prod_http_8080.membership_excluded: 0
cluster.cds_egress_app-mesh_app-100030741-canary_prod_http_8080.membership_healthy: 1
cluster.cds_egress_app-mesh_app-100030741-canary_prod_http_8080.membership_total: 1
cluster.cds_egress_app-mesh_app-100030741-canary_prod_http_8080.original_dst_host_invalid: 0
cluster.cds_egress_app-mesh_app-100030741-canary_prod_http_8080.retry_or_shadow_abandoned: 0
cluster.cds_egress_app-mesh_app-100030741-canary_prod_http_8080.update_attempt: 33917
cluster.cds_egress_app-mesh_app-100030741-canary_prod_http_8080.update_empty: 0
cluster.cds_egress_app-mesh_app-100030741-canary_prod_http_8080.update_failure: 0
cluster.cds_egress_app-mesh_app-100030741-canary_prod_http_8080.update_no_rebuild: 0
cluster.cds_egress_app-mesh_app-100030741-canary_prod_http_8080.update_success: 33917
cluster.cds_egress_app-mesh_app-100030741-canary_prod_http_8080.upstream_cx_active: 0
cluster.cds_egress_app-mesh_app-100030741-canary_prod_http_8080.upstream_cx_close_notify: 0
cluster.cds_egress_app-mesh_app-100030741-canary_prod_http_8080.upstream_cx_connect_attempts_exceeded: 0
cluster.cds_egress_app-mesh_app-100030741-canary_prod_http_8080.upstream_cx_connect_fail: 0
cluster.cds_egress_app-mesh_app-100030741-canary_prod_http_8080.upstream_cx_connect_timeout: 0
cluster.cds_egress_app-mesh_app-100030741-canary_prod_http_8080.upstream_cx_destroy: 0
cluster.cds_egress_app-mesh_app-100030741-canary_prod_http_8080.upstream_cx_destroy_local: 0
cluster.cds_egress_app-mesh_app-100030741-canary_prod_http_8080.upstream_cx_destroy_local_with_active_rq: 0
cluster.cds_egress_app-mesh_app-100030741-canary_prod_http_8080.upstream_cx_destroy_remote: 0
cluster.cds_egress_app-mesh_app-100030741-canary_prod_http_8080.upstream_cx_destroy_remote_with_active_rq: 0
cluster.cds_egress_app-mesh_app-100030741-canary_prod_http_8080.upstream_cx_destroy_with_active_rq: 0
cluster.cds_egress_app-mesh_app-100030741-canary_prod_http_8080.upstream_cx_http1_total: 0
cluster.cds_egress_app-mesh_app-100030741-canary_prod_http_8080.upstream_cx_http2_total: 0
cluster.cds_egress_app-mesh_app-100030741-canary_prod_http_8080.upstream_cx_http3_total: 0
cluster.cds_egress_app-mesh_app-100030741-canary_prod_http_8080.upstream_cx_idle_timeout: 0
cluster.cds_egress_app-mesh_app-100030741-canary_prod_http_8080.upstream_cx_max_requests: 0
cluster.cds_egress_app-mesh_app-100030741-canary_prod_http_8080.upstream_cx_none_healthy: 0
cluster.cds_egress_app-mesh_app-100030741-canary_prod_http_8080.upstream_cx_overflow: 0
cluster.cds_egress_app-mesh_app-100030741-canary_prod_http_8080.upstream_cx_pool_overflow: 0
cluster.cds_egress_app-mesh_app-100030741-canary_prod_http_8080.upstream_cx_protocol_error: 0
cluster.cds_egress_app-mesh_app-100030741-canary_prod_http_8080.upstream_cx_rx_bytes_buffered: 0
cluster.cds_egress_app-mesh_app-100030741-canary_prod_http_8080.upstream_cx_rx_bytes_total: 0
cluster.cds_egress_app-mesh_app-100030741-canary_prod_http_8080.upstream_cx_total: 0
cluster.cds_egress_app-mesh_app-100030741-canary_prod_http_8080.upstream_cx_tx_bytes_buffered: 0
cluster.cds_egress_app-mesh_app-100030741-canary_prod_http_8080.upstream_cx_tx_bytes_total: 0
cluster.cds_egress_app-mesh_app-100030741-canary_prod_http_8080.upstream_flow_control_backed_up_total: 0
cluster.cds_egress_app-mesh_app-100030741-canary_prod_http_8080.upstream_flow_control_drained_total: 0
cluster.cds_egress_app-mesh_app-100030741-canary_prod_http_8080.upstream_flow_control_paused_reading_total: 0
cluster.cds_egress_app-mesh_app-100030741-canary_prod_http_8080.upstream_flow_control_resumed_reading_total: 0
cluster.cds_egress_app-mesh_app-100030741-canary_prod_http_8080.upstream_internal_redirect_failed_total: 0
cluster.cds_egress_app-mesh_app-100030741-canary_prod_http_8080.upstream_internal_redirect_succeeded_total: 0
cluster.cds_egress_app-mesh_app-100030741-canary_prod_http_8080.upstream_rq_active: 0
cluster.cds_egress_app-mesh_app-100030741-canary_prod_http_8080.upstream_rq_cancelled: 0
cluster.cds_egress_app-mesh_app-100030741-canary_prod_http_8080.upstream_rq_completed: 0
cluster.cds_egress_app-mesh_app-100030741-canary_prod_http_8080.upstream_rq_maintenance_mode: 0
cluster.cds_egress_app-mesh_app-100030741-canary_prod_http_8080.upstream_rq_max_duration_reached: 0
cluster.cds_egress_app-mesh_app-100030741-canary_prod_http_8080.upstream_rq_pending_active: 0
cluster.cds_egress_app-mesh_app-100030741-canary_prod_http_8080.upstream_rq_pending_failure_eject: 0
cluster.cds_egress_app-mesh_app-100030741-canary_prod_http_8080.upstream_rq_pending_overflow: 0
cluster.cds_egress_app-mesh_app-100030741-canary_prod_http_8080.upstream_rq_pending_total: 0
cluster.cds_egress_app-mesh_app-100030741-canary_prod_http_8080.upstream_rq_per_try_idle_timeout: 0
cluster.cds_egress_app-mesh_app-100030741-canary_prod_http_8080.upstream_rq_per_try_timeout: 0
cluster.cds_egress_app-mesh_app-100030741-canary_prod_http_8080.upstream_rq_retry: 0
cluster.cds_egress_app-mesh_app-100030741-canary_prod_http_8080.upstream_rq_retry_backoff_exponential: 0
cluster.cds_egress_app-mesh_app-100030741-canary_prod_http_8080.upstream_rq_retry_backoff_ratelimited: 0
cluster.cds_egress_app-mesh_app-100030741-canary_prod_http_8080.upstream_rq_retry_limit_exceeded: 0
cluster.cds_egress_app-mesh_app-100030741-canary_prod_http_8080.upstream_rq_retry_overflow: 0
cluster.cds_egress_app-mesh_app-100030741-canary_prod_http_8080.upstream_rq_retry_success: 0
cluster.cds_egress_app-mesh_app-100030741-canary_prod_http_8080.upstream_rq_rx_reset: 0
cluster.cds_egress_app-mesh_app-100030741-canary_prod_http_8080.upstream_rq_timeout: 0
cluster.cds_egress_app-mesh_app-100030741-canary_prod_http_8080.upstream_rq_total: 0
cluster.cds_egress_app-mesh_app-100030741-canary_prod_http_8080.upstream_rq_tx_reset: 0
cluster.cds_egress_app-mesh_app-100030741-canary_prod_http_8080.version: 0
cluster.cds_egress_app-mesh_app-100030741-primary_prod_http_8080.assignment_stale: 0
cluster.cds_egress_app-mesh_app-100030741-primary_prod_http_8080.assignment_timeout_received: 0
cluster.cds_egress_app-mesh_app-100030741-primary_prod_http_8080.bind_errors: 0
cluster.cds_egress_app-mesh_app-100030741-primary_prod_http_8080.circuit_breakers.default.cx_open: 0
cluster.cds_egress_app-mesh_app-100030741-primary_prod_http_8080.circuit_breakers.default.cx_pool_open: 0
cluster.cds_egress_app-mesh_app-100030741-primary_prod_http_8080.circuit_breakers.default.rq_open: 0
cluster.cds_egress_app-mesh_app-100030741-primary_prod_http_8080.circuit_breakers.default.rq_pending_open: 0
cluster.cds_egress_app-mesh_app-100030741-primary_prod_http_8080.circuit_breakers.default.rq_retry_open: 0
cluster.cds_egress_app-mesh_app-100030741-primary_prod_http_8080.circuit_breakers.high.cx_open: 0
cluster.cds_egress_app-mesh_app-100030741-primary_prod_http_8080.circuit_breakers.high.cx_pool_open: 0
cluster.cds_egress_app-mesh_app-100030741-primary_prod_http_8080.circuit_breakers.high.rq_open: 0
cluster.cds_egress_app-mesh_app-100030741-primary_prod_http_8080.circuit_breakers.high.rq_pending_open: 0
cluster.cds_egress_app-mesh_app-100030741-primary_prod_http_8080.circuit_breakers.high.rq_retry_open: 0
cluster.cds_egress_app-mesh_app-100030741-primary_prod_http_8080.default.total_match_count: 1
cluster.cds_egress_app-mesh_app-100030741-primary_prod_http_8080.lb_healthy_panic: 0
cluster.cds_egress_app-mesh_app-100030741-primary_prod_http_8080.lb_local_cluster_not_ok: 0
cluster.cds_egress_app-mesh_app-100030741-primary_prod_http_8080.lb_recalculate_zone_structures: 0
cluster.cds_egress_app-mesh_app-100030741-primary_prod_http_8080.lb_subsets_active: 0
cluster.cds_egress_app-mesh_app-100030741-primary_prod_http_8080.lb_subsets_created: 0
cluster.cds_egress_app-mesh_app-100030741-primary_prod_http_8080.lb_subsets_fallback: 0
cluster.cds_egress_app-mesh_app-100030741-primary_prod_http_8080.lb_subsets_fallback_panic: 0
cluster.cds_egress_app-mesh_app-100030741-primary_prod_http_8080.lb_subsets_removed: 0
cluster.cds_egress_app-mesh_app-100030741-primary_prod_http_8080.lb_subsets_selected: 0
cluster.cds_egress_app-mesh_app-100030741-primary_prod_http_8080.lb_zone_cluster_too_small: 0
cluster.cds_egress_app-mesh_app-100030741-primary_prod_http_8080.lb_zone_no_capacity_left: 0
cluster.cds_egress_app-mesh_app-100030741-primary_prod_http_8080.lb_zone_number_differs: 0
cluster.cds_egress_app-mesh_app-100030741-primary_prod_http_8080.lb_zone_routing_all_directly: 0
cluster.cds_egress_app-mesh_app-100030741-primary_prod_http_8080.lb_zone_routing_cross_zone: 0
cluster.cds_egress_app-mesh_app-100030741-primary_prod_http_8080.lb_zone_routing_sampled: 0
cluster.cds_egress_app-mesh_app-100030741-primary_prod_http_8080.max_host_weight: 0
cluster.cds_egress_app-mesh_app-100030741-primary_prod_http_8080.membership_change: 1
cluster.cds_egress_app-mesh_app-100030741-primary_prod_http_8080.membership_degraded: 0
cluster.cds_egress_app-mesh_app-100030741-primary_prod_http_8080.membership_excluded: 0
cluster.cds_egress_app-mesh_app-100030741-primary_prod_http_8080.membership_healthy: 1
cluster.cds_egress_app-mesh_app-100030741-primary_prod_http_8080.membership_total: 1
cluster.cds_egress_app-mesh_app-100030741-primary_prod_http_8080.original_dst_host_invalid: 0
cluster.cds_egress_app-mesh_app-100030741-primary_prod_http_8080.retry_or_shadow_abandoned: 0
cluster.cds_egress_app-mesh_app-100030741-primary_prod_http_8080.update_attempt: 33917
cluster.cds_egress_app-mesh_app-100030741-primary_prod_http_8080.update_empty: 0
cluster.cds_egress_app-mesh_app-100030741-primary_prod_http_8080.update_failure: 0
cluster.cds_egress_app-mesh_app-100030741-primary_prod_http_8080.update_no_rebuild: 0
cluster.cds_egress_app-mesh_app-100030741-primary_prod_http_8080.update_success: 33917
cluster.cds_egress_app-mesh_app-100030741-primary_prod_http_8080.upstream_cx_active: 0
cluster.cds_egress_app-mesh_app-100030741-primary_prod_http_8080.upstream_cx_close_notify: 0
cluster.cds_egress_app-mesh_app-100030741-primary_prod_http_8080.upstream_cx_connect_attempts_exceeded: 0
cluster.cds_egress_app-mesh_app-100030741-primary_prod_http_8080.upstream_cx_connect_fail: 0
cluster.cds_egress_app-mesh_app-100030741-primary_prod_http_8080.upstream_cx_connect_timeout: 0
cluster.cds_egress_app-mesh_app-100030741-primary_prod_http_8080.upstream_cx_destroy: 0
cluster.cds_egress_app-mesh_app-100030741-primary_prod_http_8080.upstream_cx_destroy_local: 0
cluster.cds_egress_app-mesh_app-100030741-primary_prod_http_8080.upstream_cx_destroy_local_with_active_rq: 0
cluster.cds_egress_app-mesh_app-100030741-primary_prod_http_8080.upstream_cx_destroy_remote: 0
cluster.cds_egress_app-mesh_app-100030741-primary_prod_http_8080.upstream_cx_destroy_remote_with_active_rq: 0
cluster.cds_egress_app-mesh_app-100030741-primary_prod_http_8080.upstream_cx_destroy_with_active_rq: 0
cluster.cds_egress_app-mesh_app-100030741-primary_prod_http_8080.upstream_cx_http1_total: 0
cluster.cds_egress_app-mesh_app-100030741-primary_prod_http_8080.upstream_cx_http2_total: 0
cluster.cds_egress_app-mesh_app-100030741-primary_prod_http_8080.upstream_cx_http3_total: 0
cluster.cds_egress_app-mesh_app-100030741-primary_prod_http_8080.upstream_cx_idle_timeout: 0
cluster.cds_egress_app-mesh_app-100030741-primary_prod_http_8080.upstream_cx_max_requests: 0
cluster.cds_egress_app-mesh_app-100030741-primary_prod_http_8080.upstream_cx_none_healthy: 0
cluster.cds_egress_app-mesh_app-100030741-primary_prod_http_8080.upstream_cx_overflow: 0
cluster.cds_egress_app-mesh_app-100030741-primary_prod_http_8080.upstream_cx_pool_overflow: 0
cluster.cds_egress_app-mesh_app-100030741-primary_prod_http_8080.upstream_cx_protocol_error: 0
cluster.cds_egress_app-mesh_app-100030741-primary_prod_http_8080.upstream_cx_rx_bytes_buffered: 0
cluster.cds_egress_app-mesh_app-100030741-primary_prod_http_8080.upstream_cx_rx_bytes_total: 0
cluster.cds_egress_app-mesh_app-100030741-primary_prod_http_8080.upstream_cx_total: 0
cluster.cds_egress_app-mesh_app-100030741-primary_prod_http_8080.upstream_cx_tx_bytes_buffered: 0
cluster.cds_egress_app-mesh_app-100030741-primary_prod_http_8080.upstream_cx_tx_bytes_total: 0
cluster.cds_egress_app-mesh_app-100030741-primary_prod_http_8080.upstream_flow_control_backed_up_total: 0
cluster.cds_egress_app-mesh_app-100030741-primary_prod_http_8080.upstream_flow_control_drained_total: 0
cluster.cds_egress_app-mesh_app-100030741-primary_prod_http_8080.upstream_flow_control_paused_reading_total: 0
cluster.cds_egress_app-mesh_app-100030741-primary_prod_http_8080.upstream_flow_control_resumed_reading_total: 0
cluster.cds_egress_app-mesh_app-100030741-primary_prod_http_8080.upstream_internal_redirect_failed_total: 0
cluster.cds_egress_app-mesh_app-100030741-primary_prod_http_8080.upstream_internal_redirect_succeeded_total: 0
cluster.cds_egress_app-mesh_app-100030741-primary_prod_http_8080.upstream_rq_active: 0
cluster.cds_egress_app-mesh_app-100030741-primary_prod_http_8080.upstream_rq_cancelled: 0
cluster.cds_egress_app-mesh_app-100030741-primary_prod_http_8080.upstream_rq_completed: 0
cluster.cds_egress_app-mesh_app-100030741-primary_prod_http_8080.upstream_rq_maintenance_mode: 0
cluster.cds_egress_app-mesh_app-100030741-primary_prod_http_8080.upstream_rq_max_duration_reached: 0
cluster.cds_egress_app-mesh_app-100030741-primary_prod_http_8080.upstream_rq_pending_active: 0
cluster.cds_egress_app-mesh_app-100030741-primary_prod_http_8080.upstream_rq_pending_failure_eject: 0
cluster.cds_egress_app-mesh_app-100030741-primary_prod_http_8080.upstream_rq_pending_overflow: 0
cluster.cds_egress_app-mesh_app-100030741-primary_prod_http_8080.upstream_rq_pending_total: 0
cluster.cds_egress_app-mesh_app-100030741-primary_prod_http_8080.upstream_rq_per_try_idle_timeout: 0
cluster.cds_egress_app-mesh_app-100030741-primary_prod_http_8080.upstream_rq_per_try_timeout: 0
cluster.cds_egress_app-mesh_app-100030741-primary_prod_http_8080.upstream_rq_retry: 0
cluster.cds_egress_app-mesh_app-100030741-primary_prod_http_8080.upstream_rq_retry_backoff_exponential: 0
cluster.cds_egress_app-mesh_app-100030741-primary_prod_http_8080.upstream_rq_retry_backoff_ratelimited: 0
cluster.cds_egress_app-mesh_app-100030741-primary_prod_http_8080.upstream_rq_retry_limit_exceeded: 0
cluster.cds_egress_app-mesh_app-100030741-primary_prod_http_8080.upstream_rq_retry_overflow: 0
cluster.cds_egress_app-mesh_app-100030741-primary_prod_http_8080.upstream_rq_retry_success: 0
cluster.cds_egress_app-mesh_app-100030741-primary_prod_http_8080.upstream_rq_rx_reset: 0
cluster.cds_egress_app-mesh_app-100030741-primary_prod_http_8080.upstream_rq_timeout: 0
cluster.cds_egress_app-mesh_app-100030741-primary_prod_http_8080.upstream_rq_total: 0
cluster.cds_egress_app-mesh_app-100030741-primary_prod_http_8080.upstream_rq_tx_reset: 0
cluster.cds_egress_app-mesh_app-100030741-primary_prod_http_8080.version: 0
cluster.cds_egress_app-mesh_app-100032265-canary_prod_http_8080.assignment_stale: 0
cluster.cds_egress_app-mesh_app-100032265-canary_prod_http_8080.assignment_timeout_received: 0
cluster.cds_egress_app-mesh_app-100032265-canary_prod_http_8080.bind_errors: 0
cluster.cds_egress_app-mesh_app-100032265-canary_prod_http_8080.circuit_breakers.default.cx_open: 0
cluster.cds_egress_app-mesh_app-100032265-canary_prod_http_8080.circuit_breakers.default.cx_pool_open: 0
cluster.cds_egress_app-mesh_app-100032265-canary_prod_http_8080.circuit_breakers.default.rq_open: 0
cluster.cds_egress_app-mesh_app-100032265-canary_prod_http_8080.circuit_breakers.default.rq_pending_open: 0
cluster.cds_egress_app-mesh_app-100032265-canary_prod_http_8080.circuit_breakers.default.rq_retry_open: 0
cluster.cds_egress_app-mesh_app-100032265-canary_prod_http_8080.circuit_breakers.high.cx_open: 0
cluster.cds_egress_app-mesh_app-100032265-canary_prod_http_8080.circuit_breakers.high.cx_pool_open: 0
cluster.cds_egress_app-mesh_app-100032265-canary_prod_http_8080.circuit_breakers.high.rq_open: 0
cluster.cds_egress_app-mesh_app-100032265-canary_prod_http_8080.circuit_breakers.high.rq_pending_open: 0
cluster.cds_egress_app-mesh_app-100032265-canary_prod_http_8080.circuit_breakers.high.rq_retry_open: 0
cluster.cds_egress_app-mesh_app-100032265-canary_prod_http_8080.default.total_match_count: 1
cluster.cds_egress_app-mesh_app-100032265-canary_prod_http_8080.lb_healthy_panic: 0
cluster.cds_egress_app-mesh_app-100032265-canary_prod_http_8080.lb_local_cluster_not_ok: 0
cluster.cds_egress_app-mesh_app-100032265-canary_prod_http_8080.lb_recalculate_zone_structures: 0
cluster.cds_egress_app-mesh_app-100032265-canary_prod_http_8080.lb_subsets_active: 0
cluster.cds_egress_app-mesh_app-100032265-canary_prod_http_8080.lb_subsets_created: 0
cluster.cds_egress_app-mesh_app-100032265-canary_prod_http_8080.lb_subsets_fallback: 0
cluster.cds_egress_app-mesh_app-100032265-canary_prod_http_8080.lb_subsets_fallback_panic: 0
cluster.cds_egress_app-mesh_app-100032265-canary_prod_http_8080.lb_subsets_removed: 0
cluster.cds_egress_app-mesh_app-100032265-canary_prod_http_8080.lb_subsets_selected: 0
cluster.cds_egress_app-mesh_app-100032265-canary_prod_http_8080.lb_zone_cluster_too_small: 0
cluster.cds_egress_app-mesh_app-100032265-canary_prod_http_8080.lb_zone_no_capacity_left: 0
cluster.cds_egress_app-mesh_app-100032265-canary_prod_http_8080.lb_zone_number_differs: 0
cluster.cds_egress_app-mesh_app-100032265-canary_prod_http_8080.lb_zone_routing_all_directly: 0
cluster.cds_egress_app-mesh_app-100032265-canary_prod_http_8080.lb_zone_routing_cross_zone: 0
cluster.cds_egress_app-mesh_app-100032265-canary_prod_http_8080.lb_zone_routing_sampled: 0
cluster.cds_egress_app-mesh_app-100032265-canary_prod_http_8080.max_host_weight: 0
cluster.cds_egress_app-mesh_app-100032265-canary_prod_http_8080.membership_change: 1
cluster.cds_egress_app-mesh_app-100032265-canary_prod_http_8080.membership_degraded: 0
cluster.cds_egress_app-mesh_app-100032265-canary_prod_http_8080.membership_excluded: 0
cluster.cds_egress_app-mesh_app-100032265-canary_prod_http_8080.membership_healthy: 1
cluster.cds_egress_app-mesh_app-100032265-canary_prod_http_8080.membership_total: 1
cluster.cds_egress_app-mesh_app-100032265-canary_prod_http_8080.original_dst_host_invalid: 0
cluster.cds_egress_app-mesh_app-100032265-canary_prod_http_8080.retry_or_shadow_abandoned: 0
cluster.cds_egress_app-mesh_app-100032265-canary_prod_http_8080.update_attempt: 33917
cluster.cds_egress_app-mesh_app-100032265-canary_prod_http_8080.update_empty: 0
cluster.cds_egress_app-mesh_app-100032265-canary_prod_http_8080.update_failure: 0
cluster.cds_egress_app-mesh_app-100032265-canary_prod_http_8080.update_no_rebuild: 0
cluster.cds_egress_app-mesh_app-100032265-canary_prod_http_8080.update_success: 33917
cluster.cds_egress_app-mesh_app-100032265-canary_prod_http_8080.upstream_cx_active: 0
cluster.cds_egress_app-mesh_app-100032265-canary_prod_http_8080.upstream_cx_close_notify: 0
cluster.cds_egress_app-mesh_app-100032265-canary_prod_http_8080.upstream_cx_connect_attempts_exceeded: 0
cluster.cds_egress_app-mesh_app-100032265-canary_prod_http_8080.upstream_cx_connect_fail: 0
cluster.cds_egress_app-mesh_app-100032265-canary_prod_http_8080.upstream_cx_connect_timeout: 0
cluster.cds_egress_app-mesh_app-100032265-canary_prod_http_8080.upstream_cx_destroy: 0
cluster.cds_egress_app-mesh_app-100032265-canary_prod_http_8080.upstream_cx_destroy_local: 0
cluster.cds_egress_app-mesh_app-100032265-canary_prod_http_8080.upstream_cx_destroy_local_with_active_rq: 0
cluster.cds_egress_app-mesh_app-100032265-canary_prod_http_8080.upstream_cx_destroy_remote: 0
cluster.cds_egress_app-mesh_app-100032265-canary_prod_http_8080.upstream_cx_destroy_remote_with_active_rq: 0
cluster.cds_egress_app-mesh_app-100032265-canary_prod_http_8080.upstream_cx_destroy_with_active_rq: 0
cluster.cds_egress_app-mesh_app-100032265-canary_prod_http_8080.upstream_cx_http1_total: 0
cluster.cds_egress_app-mesh_app-100032265-canary_prod_http_8080.upstream_cx_http2_total: 0
cluster.cds_egress_app-mesh_app-100032265-canary_prod_http_8080.upstream_cx_http3_total: 0
cluster.cds_egress_app-mesh_app-100032265-canary_prod_http_8080.upstream_cx_idle_timeout: 0
cluster.cds_egress_app-mesh_app-100032265-canary_prod_http_8080.upstream_cx_max_requests: 0
cluster.cds_egress_app-mesh_app-100032265-canary_prod_http_8080.upstream_cx_none_healthy: 0
cluster.cds_egress_app-mesh_app-100032265-canary_prod_http_8080.upstream_cx_overflow: 0
cluster.cds_egress_app-mesh_app-100032265-canary_prod_http_8080.upstream_cx_pool_overflow: 0
cluster.cds_egress_app-mesh_app-100032265-canary_prod_http_8080.upstream_cx_protocol_error: 0
cluster.cds_egress_app-mesh_app-100032265-canary_prod_http_8080.upstream_cx_rx_bytes_buffered: 0
cluster.cds_egress_app-mesh_app-100032265-canary_prod_http_8080.upstream_cx_rx_bytes_total: 0
cluster.cds_egress_app-mesh_app-100032265-canary_prod_http_8080.upstream_cx_total: 0
cluster.cds_egress_app-mesh_app-100032265-canary_prod_http_8080.upstream_cx_tx_bytes_buffered: 0
cluster.cds_egress_app-mesh_app-100032265-canary_prod_http_8080.upstream_cx_tx_bytes_total: 0
cluster.cds_egress_app-mesh_app-100032265-canary_prod_http_8080.upstream_flow_control_backed_up_total: 0
cluster.cds_egress_app-mesh_app-100032265-canary_prod_http_8080.upstream_flow_control_drained_total: 0
cluster.cds_egress_app-mesh_app-100032265-canary_prod_http_8080.upstream_flow_control_paused_reading_total: 0
cluster.cds_egress_app-mesh_app-100032265-canary_prod_http_8080.upstream_flow_control_resumed_reading_total: 0
cluster.cds_egress_app-mesh_app-100032265-canary_prod_http_8080.upstream_internal_redirect_failed_total: 0
cluster.cds_egress_app-mesh_app-100032265-canary_prod_http_8080.upstream_internal_redirect_succeeded_total: 0
cluster.cds_egress_app-mesh_app-100032265-canary_prod_http_8080.upstream_rq_active: 0
cluster.cds_egress_app-mesh_app-100032265-canary_prod_http_8080.upstream_rq_cancelled: 0
cluster.cds_egress_app-mesh_app-100032265-canary_prod_http_8080.upstream_rq_completed: 0
cluster.cds_egress_app-mesh_app-100032265-canary_prod_http_8080.upstream_rq_maintenance_mode: 0
cluster.cds_egress_app-mesh_app-100032265-canary_prod_http_8080.upstream_rq_max_duration_reached: 0
cluster.cds_egress_app-mesh_app-100032265-canary_prod_http_8080.upstream_rq_pending_active: 0
cluster.cds_egress_app-mesh_app-100032265-canary_prod_http_8080.upstream_rq_pending_failure_eject: 0
cluster.cds_egress_app-mesh_app-100032265-canary_prod_http_8080.upstream_rq_pending_overflow: 0
cluster.cds_egress_app-mesh_app-100032265-canary_prod_http_8080.upstream_rq_pending_total: 0
cluster.cds_egress_app-mesh_app-100032265-canary_prod_http_8080.upstream_rq_per_try_idle_timeout: 0
cluster.cds_egress_app-mesh_app-100032265-canary_prod_http_8080.upstream_rq_per_try_timeout: 0
cluster.cds_egress_app-mesh_app-100032265-canary_prod_http_8080.upstream_rq_retry: 0
cluster.cds_egress_app-mesh_app-100032265-canary_prod_http_8080.upstream_rq_retry_backoff_exponential: 0
cluster.cds_egress_app-mesh_app-100032265-canary_prod_http_8080.upstream_rq_retry_backoff_ratelimited: 0
cluster.cds_egress_app-mesh_app-100032265-canary_prod_http_8080.upstream_rq_retry_limit_exceeded: 0
cluster.cds_egress_app-mesh_app-100032265-canary_prod_http_8080.upstream_rq_retry_overflow: 0
cluster.cds_egress_app-mesh_app-100032265-canary_prod_http_8080.upstream_rq_retry_success: 0
cluster.cds_egress_app-mesh_app-100032265-canary_prod_http_8080.upstream_rq_rx_reset: 0
cluster.cds_egress_app-mesh_app-100032265-canary_prod_http_8080.upstream_rq_timeout: 0
cluster.cds_egress_app-mesh_app-100032265-canary_prod_http_8080.upstream_rq_total: 0
cluster.cds_egress_app-mesh_app-100032265-canary_prod_http_8080.upstream_rq_tx_reset: 0
cluster.cds_egress_app-mesh_app-100032265-canary_prod_http_8080.version: 0
cluster.cds_egress_app-mesh_app-100032265-primary_prod_http_8080.assignment_stale: 0
cluster.cds_egress_app-mesh_app-100032265-primary_prod_http_8080.assignment_timeout_received: 0
cluster.cds_egress_app-mesh_app-100032265-primary_prod_http_8080.bind_errors: 0
cluster.cds_egress_app-mesh_app-100032265-primary_prod_http_8080.circuit_breakers.default.cx_open: 0
cluster.cds_egress_app-mesh_app-100032265-primary_prod_http_8080.circuit_breakers.default.cx_pool_open: 0
cluster.cds_egress_app-mesh_app-100032265-primary_prod_http_8080.circuit_breakers.default.rq_open: 0
cluster.cds_egress_app-mesh_app-100032265-primary_prod_http_8080.circuit_breakers.default.rq_pending_open: 0
cluster.cds_egress_app-mesh_app-100032265-primary_prod_http_8080.circuit_breakers.default.rq_retry_open: 0
cluster.cds_egress_app-mesh_app-100032265-primary_prod_http_8080.circuit_breakers.high.cx_open: 0
cluster.cds_egress_app-mesh_app-100032265-primary_prod_http_8080.circuit_breakers.high.cx_pool_open: 0
cluster.cds_egress_app-mesh_app-100032265-primary_prod_http_8080.circuit_breakers.high.rq_open: 0
cluster.cds_egress_app-mesh_app-100032265-primary_prod_http_8080.circuit_breakers.high.rq_pending_open: 0
cluster.cds_egress_app-mesh_app-100032265-primary_prod_http_8080.circuit_breakers.high.rq_retry_open: 0
cluster.cds_egress_app-mesh_app-100032265-primary_prod_http_8080.default.total_match_count: 1
cluster.cds_egress_app-mesh_app-100032265-primary_prod_http_8080.external.upstream_rq_200: 19
cluster.cds_egress_app-mesh_app-100032265-primary_prod_http_8080.external.upstream_rq_2xx: 19
cluster.cds_egress_app-mesh_app-100032265-primary_prod_http_8080.external.upstream_rq_404: 33957
cluster.cds_egress_app-mesh_app-100032265-primary_prod_http_8080.external.upstream_rq_4xx: 33957
cluster.cds_egress_app-mesh_app-100032265-primary_prod_http_8080.external.upstream_rq_completed: 33976
cluster.cds_egress_app-mesh_app-100032265-primary_prod_http_8080.http1.dropped_headers_with_underscores: 0
cluster.cds_egress_app-mesh_app-100032265-primary_prod_http_8080.http1.metadata_not_supported_error: 0
cluster.cds_egress_app-mesh_app-100032265-primary_prod_http_8080.http1.requests_rejected_with_underscores_in_headers: 0
cluster.cds_egress_app-mesh_app-100032265-primary_prod_http_8080.http1.response_flood: 0
cluster.cds_egress_app-mesh_app-100032265-primary_prod_http_8080.lb_healthy_panic: 0
cluster.cds_egress_app-mesh_app-100032265-primary_prod_http_8080.lb_local_cluster_not_ok: 0
cluster.cds_egress_app-mesh_app-100032265-primary_prod_http_8080.lb_recalculate_zone_structures: 0
cluster.cds_egress_app-mesh_app-100032265-primary_prod_http_8080.lb_subsets_active: 0
cluster.cds_egress_app-mesh_app-100032265-primary_prod_http_8080.lb_subsets_created: 0
cluster.cds_egress_app-mesh_app-100032265-primary_prod_http_8080.lb_subsets_fallback: 0
cluster.cds_egress_app-mesh_app-100032265-primary_prod_http_8080.lb_subsets_fallback_panic: 0
cluster.cds_egress_app-mesh_app-100032265-primary_prod_http_8080.lb_subsets_removed: 0
cluster.cds_egress_app-mesh_app-100032265-primary_prod_http_8080.lb_subsets_selected: 0
cluster.cds_egress_app-mesh_app-100032265-primary_prod_http_8080.lb_zone_cluster_too_small: 0
cluster.cds_egress_app-mesh_app-100032265-primary_prod_http_8080.lb_zone_no_capacity_left: 0
cluster.cds_egress_app-mesh_app-100032265-primary_prod_http_8080.lb_zone_number_differs: 0
cluster.cds_egress_app-mesh_app-100032265-primary_prod_http_8080.lb_zone_routing_all_directly: 0
cluster.cds_egress_app-mesh_app-100032265-primary_prod_http_8080.lb_zone_routing_cross_zone: 0
cluster.cds_egress_app-mesh_app-100032265-primary_prod_http_8080.lb_zone_routing_sampled: 0
cluster.cds_egress_app-mesh_app-100032265-primary_prod_http_8080.max_host_weight: 0
cluster.cds_egress_app-mesh_app-100032265-primary_prod_http_8080.membership_change: 1
cluster.cds_egress_app-mesh_app-100032265-primary_prod_http_8080.membership_degraded: 0
cluster.cds_egress_app-mesh_app-100032265-primary_prod_http_8080.membership_excluded: 0
cluster.cds_egress_app-mesh_app-100032265-primary_prod_http_8080.membership_healthy: 1
cluster.cds_egress_app-mesh_app-100032265-primary_prod_http_8080.membership_total: 1
cluster.cds_egress_app-mesh_app-100032265-primary_prod_http_8080.original_dst_host_invalid: 0
cluster.cds_egress_app-mesh_app-100032265-primary_prod_http_8080.retry.upstream_rq_503: 427
cluster.cds_egress_app-mesh_app-100032265-primary_prod_http_8080.retry.upstream_rq_5xx: 427
cluster.cds_egress_app-mesh_app-100032265-primary_prod_http_8080.retry.upstream_rq_completed: 427
cluster.cds_egress_app-mesh_app-100032265-primary_prod_http_8080.retry_or_shadow_abandoned: 0
cluster.cds_egress_app-mesh_app-100032265-primary_prod_http_8080.update_attempt: 33917
cluster.cds_egress_app-mesh_app-100032265-primary_prod_http_8080.update_empty: 0
cluster.cds_egress_app-mesh_app-100032265-primary_prod_http_8080.update_failure: 0
cluster.cds_egress_app-mesh_app-100032265-primary_prod_http_8080.update_no_rebuild: 0
cluster.cds_egress_app-mesh_app-100032265-primary_prod_http_8080.update_success: 33917
cluster.cds_egress_app-mesh_app-100032265-primary_prod_http_8080.upstream_cx_active: 2
cluster.cds_egress_app-mesh_app-100032265-primary_prod_http_8080.upstream_cx_close_notify: 0
cluster.cds_egress_app-mesh_app-100032265-primary_prod_http_8080.upstream_cx_connect_attempts_exceeded: 0
cluster.cds_egress_app-mesh_app-100032265-primary_prod_http_8080.upstream_cx_connect_fail: 0
cluster.cds_egress_app-mesh_app-100032265-primary_prod_http_8080.upstream_cx_connect_timeout: 0
cluster.cds_egress_app-mesh_app-100032265-primary_prod_http_8080.upstream_cx_destroy: 434
cluster.cds_egress_app-mesh_app-100032265-primary_prod_http_8080.upstream_cx_destroy_local: 434
cluster.cds_egress_app-mesh_app-100032265-primary_prod_http_8080.upstream_cx_destroy_local_with_active_rq: 427
cluster.cds_egress_app-mesh_app-100032265-primary_prod_http_8080.upstream_cx_destroy_remote: 0
cluster.cds_egress_app-mesh_app-100032265-primary_prod_http_8080.upstream_cx_destroy_remote_with_active_rq: 0
cluster.cds_egress_app-mesh_app-100032265-primary_prod_http_8080.upstream_cx_destroy_with_active_rq: 427
cluster.cds_egress_app-mesh_app-100032265-primary_prod_http_8080.upstream_cx_http1_total: 436
cluster.cds_egress_app-mesh_app-100032265-primary_prod_http_8080.upstream_cx_http2_total: 0
cluster.cds_egress_app-mesh_app-100032265-primary_prod_http_8080.upstream_cx_http3_total: 0
cluster.cds_egress_app-mesh_app-100032265-primary_prod_http_8080.upstream_cx_idle_timeout: 7
cluster.cds_egress_app-mesh_app-100032265-primary_prod_http_8080.upstream_cx_max_requests: 0
cluster.cds_egress_app-mesh_app-100032265-primary_prod_http_8080.upstream_cx_none_healthy: 0
cluster.cds_egress_app-mesh_app-100032265-primary_prod_http_8080.upstream_cx_overflow: 0
cluster.cds_egress_app-mesh_app-100032265-primary_prod_http_8080.upstream_cx_pool_overflow: 0
cluster.cds_egress_app-mesh_app-100032265-primary_prod_http_8080.upstream_cx_protocol_error: 0
cluster.cds_egress_app-mesh_app-100032265-primary_prod_http_8080.upstream_cx_rx_bytes_buffered: 708
cluster.cds_egress_app-mesh_app-100032265-primary_prod_http_8080.upstream_cx_rx_bytes_total: 13036491
cluster.cds_egress_app-mesh_app-100032265-primary_prod_http_8080.upstream_cx_total: 436
cluster.cds_egress_app-mesh_app-100032265-primary_prod_http_8080.upstream_cx_tx_bytes_buffered: 0
cluster.cds_egress_app-mesh_app-100032265-primary_prod_http_8080.upstream_cx_tx_bytes_total: 14190765
cluster.cds_egress_app-mesh_app-100032265-primary_prod_http_8080.upstream_flow_control_backed_up_total: 0
cluster.cds_egress_app-mesh_app-100032265-primary_prod_http_8080.upstream_flow_control_drained_total: 0
cluster.cds_egress_app-mesh_app-100032265-primary_prod_http_8080.upstream_flow_control_paused_reading_total: 0
cluster.cds_egress_app-mesh_app-100032265-primary_prod_http_8080.upstream_flow_control_resumed_reading_total: 0
cluster.cds_egress_app-mesh_app-100032265-primary_prod_http_8080.upstream_internal_redirect_failed_total: 0
cluster.cds_egress_app-mesh_app-100032265-primary_prod_http_8080.upstream_internal_redirect_succeeded_total: 0
cluster.cds_egress_app-mesh_app-100032265-primary_prod_http_8080.upstream_rq_200: 19
cluster.cds_egress_app-mesh_app-100032265-primary_prod_http_8080.upstream_rq_2xx: 19
cluster.cds_egress_app-mesh_app-100032265-primary_prod_http_8080.upstream_rq_404: 33957
cluster.cds_egress_app-mesh_app-100032265-primary_prod_http_8080.upstream_rq_4xx: 33957
cluster.cds_egress_app-mesh_app-100032265-primary_prod_http_8080.upstream_rq_active: 0
cluster.cds_egress_app-mesh_app-100032265-primary_prod_http_8080.upstream_rq_cancelled: 0
cluster.cds_egress_app-mesh_app-100032265-primary_prod_http_8080.upstream_rq_completed: 33976
cluster.cds_egress_app-mesh_app-100032265-primary_prod_http_8080.upstream_rq_maintenance_mode: 0
cluster.cds_egress_app-mesh_app-100032265-primary_prod_http_8080.upstream_rq_max_duration_reached: 0
cluster.cds_egress_app-mesh_app-100032265-primary_prod_http_8080.upstream_rq_pending_active: 0
cluster.cds_egress_app-mesh_app-100032265-primary_prod_http_8080.upstream_rq_pending_failure_eject: 0
cluster.cds_egress_app-mesh_app-100032265-primary_prod_http_8080.upstream_rq_pending_overflow: 0
cluster.cds_egress_app-mesh_app-100032265-primary_prod_http_8080.upstream_rq_pending_total: 436
cluster.cds_egress_app-mesh_app-100032265-primary_prod_http_8080.upstream_rq_per_try_idle_timeout: 0
cluster.cds_egress_app-mesh_app-100032265-primary_prod_http_8080.upstream_rq_per_try_timeout: 0
cluster.cds_egress_app-mesh_app-100032265-primary_prod_http_8080.upstream_rq_retry: 427
cluster.cds_egress_app-mesh_app-100032265-primary_prod_http_8080.upstream_rq_retry_backoff_exponential: 427
cluster.cds_egress_app-mesh_app-100032265-primary_prod_http_8080.upstream_rq_retry_backoff_ratelimited: 0
cluster.cds_egress_app-mesh_app-100032265-primary_prod_http_8080.upstream_rq_retry_limit_exceeded: 0
cluster.cds_egress_app-mesh_app-100032265-primary_prod_http_8080.upstream_rq_retry_overflow: 0
cluster.cds_egress_app-mesh_app-100032265-primary_prod_http_8080.upstream_rq_retry_success: 427
cluster.cds_egress_app-mesh_app-100032265-primary_prod_http_8080.upstream_rq_rx_reset: 0
cluster.cds_egress_app-mesh_app-100032265-primary_prod_http_8080.upstream_rq_timeout: 0
cluster.cds_egress_app-mesh_app-100032265-primary_prod_http_8080.upstream_rq_total: 34403
cluster.cds_egress_app-mesh_app-100032265-primary_prod_http_8080.upstream_rq_tx_reset: 0
cluster.cds_egress_app-mesh_app-100032265-primary_prod_http_8080.version: 0
cluster.cds_egress_app-mesh_app-100035323-canary_prod_http_8080.assignment_stale: 0
cluster.cds_egress_app-mesh_app-100035323-canary_prod_http_8080.assignment_timeout_received: 0
cluster.cds_egress_app-mesh_app-100035323-canary_prod_http_8080.bind_errors: 0
cluster.cds_egress_app-mesh_app-100035323-canary_prod_http_8080.circuit_breakers.default.cx_open: 0
cluster.cds_egress_app-mesh_app-100035323-canary_prod_http_8080.circuit_breakers.default.cx_pool_open: 0
cluster.cds_egress_app-mesh_app-100035323-canary_prod_http_8080.circuit_breakers.default.rq_open: 0
cluster.cds_egress_app-mesh_app-100035323-canary_prod_http_8080.circuit_breakers.default.rq_pending_open: 0
cluster.cds_egress_app-mesh_app-100035323-canary_prod_http_8080.circuit_breakers.default.rq_retry_open: 0
cluster.cds_egress_app-mesh_app-100035323-canary_prod_http_8080.circuit_breakers.high.cx_open: 0
cluster.cds_egress_app-mesh_app-100035323-canary_prod_http_8080.circuit_breakers.high.cx_pool_open: 0
cluster.cds_egress_app-mesh_app-100035323-canary_prod_http_8080.circuit_breakers.high.rq_open: 0
cluster.cds_egress_app-mesh_app-100035323-canary_prod_http_8080.circuit_breakers.high.rq_pending_open: 0
cluster.cds_egress_app-mesh_app-100035323-canary_prod_http_8080.circuit_breakers.high.rq_retry_open: 0
cluster.cds_egress_app-mesh_app-100035323-canary_prod_http_8080.default.total_match_count: 1
cluster.cds_egress_app-mesh_app-100035323-canary_prod_http_8080.lb_healthy_panic: 0
cluster.cds_egress_app-mesh_app-100035323-canary_prod_http_8080.lb_local_cluster_not_ok: 0
cluster.cds_egress_app-mesh_app-100035323-canary_prod_http_8080.lb_recalculate_zone_structures: 0
cluster.cds_egress_app-mesh_app-100035323-canary_prod_http_8080.lb_subsets_active: 0
cluster.cds_egress_app-mesh_app-100035323-canary_prod_http_8080.lb_subsets_created: 0
cluster.cds_egress_app-mesh_app-100035323-canary_prod_http_8080.lb_subsets_fallback: 0
cluster.cds_egress_app-mesh_app-100035323-canary_prod_http_8080.lb_subsets_fallback_panic: 0
cluster.cds_egress_app-mesh_app-100035323-canary_prod_http_8080.lb_subsets_removed: 0
cluster.cds_egress_app-mesh_app-100035323-canary_prod_http_8080.lb_subsets_selected: 0
cluster.cds_egress_app-mesh_app-100035323-canary_prod_http_8080.lb_zone_cluster_too_small: 0
cluster.cds_egress_app-mesh_app-100035323-canary_prod_http_8080.lb_zone_no_capacity_left: 0
cluster.cds_egress_app-mesh_app-100035323-canary_prod_http_8080.lb_zone_number_differs: 0
cluster.cds_egress_app-mesh_app-100035323-canary_prod_http_8080.lb_zone_routing_all_directly: 0
cluster.cds_egress_app-mesh_app-100035323-canary_prod_http_8080.lb_zone_routing_cross_zone: 0
cluster.cds_egress_app-mesh_app-100035323-canary_prod_http_8080.lb_zone_routing_sampled: 0
cluster.cds_egress_app-mesh_app-100035323-canary_prod_http_8080.max_host_weight: 0
cluster.cds_egress_app-mesh_app-100035323-canary_prod_http_8080.membership_change: 1
cluster.cds_egress_app-mesh_app-100035323-canary_prod_http_8080.membership_degraded: 0
cluster.cds_egress_app-mesh_app-100035323-canary_prod_http_8080.membership_excluded: 0
cluster.cds_egress_app-mesh_app-100035323-canary_prod_http_8080.membership_healthy: 1
cluster.cds_egress_app-mesh_app-100035323-canary_prod_http_8080.membership_total: 1
cluster.cds_egress_app-mesh_app-100035323-canary_prod_http_8080.original_dst_host_invalid: 0
cluster.cds_egress_app-mesh_app-100035323-canary_prod_http_8080.retry_or_shadow_abandoned: 0
cluster.cds_egress_app-mesh_app-100035323-canary_prod_http_8080.update_attempt: 33917
cluster.cds_egress_app-mesh_app-100035323-canary_prod_http_8080.update_empty: 0
cluster.cds_egress_app-mesh_app-100035323-canary_prod_http_8080.update_failure: 0
cluster.cds_egress_app-mesh_app-100035323-canary_prod_http_8080.update_no_rebuild: 0
cluster.cds_egress_app-mesh_app-100035323-canary_prod_http_8080.update_success: 33917
cluster.cds_egress_app-mesh_app-100035323-canary_prod_http_8080.upstream_cx_active: 0
cluster.cds_egress_app-mesh_app-100035323-canary_prod_http_8080.upstream_cx_close_notify: 0
cluster.cds_egress_app-mesh_app-100035323-canary_prod_http_8080.upstream_cx_connect_attempts_exceeded: 0
cluster.cds_egress_app-mesh_app-100035323-canary_prod_http_8080.upstream_cx_connect_fail: 0
cluster.cds_egress_app-mesh_app-100035323-canary_prod_http_8080.upstream_cx_connect_timeout: 0
cluster.cds_egress_app-mesh_app-100035323-canary_prod_http_8080.upstream_cx_destroy: 0
cluster.cds_egress_app-mesh_app-100035323-canary_prod_http_8080.upstream_cx_destroy_local: 0
cluster.cds_egress_app-mesh_app-100035323-canary_prod_http_8080.upstream_cx_destroy_local_with_active_rq: 0
cluster.cds_egress_app-mesh_app-100035323-canary_prod_http_8080.upstream_cx_destroy_remote: 0
cluster.cds_egress_app-mesh_app-100035323-canary_prod_http_8080.upstream_cx_destroy_remote_with_active_rq: 0
cluster.cds_egress_app-mesh_app-100035323-canary_prod_http_8080.upstream_cx_destroy_with_active_rq: 0
cluster.cds_egress_app-mesh_app-100035323-canary_prod_http_8080.upstream_cx_http1_total: 0
cluster.cds_egress_app-mesh_app-100035323-canary_prod_http_8080.upstream_cx_http2_total: 0
cluster.cds_egress_app-mesh_app-100035323-canary_prod_http_8080.upstream_cx_http3_total: 0
cluster.cds_egress_app-mesh_app-100035323-canary_prod_http_8080.upstream_cx_idle_timeout: 0
cluster.cds_egress_app-mesh_app-100035323-canary_prod_http_8080.upstream_cx_max_requests: 0
cluster.cds_egress_app-mesh_app-100035323-canary_prod_http_8080.upstream_cx_none_healthy: 0
cluster.cds_egress_app-mesh_app-100035323-canary_prod_http_8080.upstream_cx_overflow: 0
cluster.cds_egress_app-mesh_app-100035323-canary_prod_http_8080.upstream_cx_pool_overflow: 0
cluster.cds_egress_app-mesh_app-100035323-canary_prod_http_8080.upstream_cx_protocol_error: 0
cluster.cds_egress_app-mesh_app-100035323-canary_prod_http_8080.upstream_cx_rx_bytes_buffered: 0
cluster.cds_egress_app-mesh_app-100035323-canary_prod_http_8080.upstream_cx_rx_bytes_total: 0
cluster.cds_egress_app-mesh_app-100035323-canary_prod_http_8080.upstream_cx_total: 0
cluster.cds_egress_app-mesh_app-100035323-canary_prod_http_8080.upstream_cx_tx_bytes_buffered: 0
cluster.cds_egress_app-mesh_app-100035323-canary_prod_http_8080.upstream_cx_tx_bytes_total: 0
cluster.cds_egress_app-mesh_app-100035323-canary_prod_http_8080.upstream_flow_control_backed_up_total: 0
cluster.cds_egress_app-mesh_app-100035323-canary_prod_http_8080.upstream_flow_control_drained_total: 0
cluster.cds_egress_app-mesh_app-100035323-canary_prod_http_8080.upstream_flow_control_paused_reading_total: 0
cluster.cds_egress_app-mesh_app-100035323-canary_prod_http_8080.upstream_flow_control_resumed_reading_total: 0
cluster.cds_egress_app-mesh_app-100035323-canary_prod_http_8080.upstream_internal_redirect_failed_total: 0
cluster.cds_egress_app-mesh_app-100035323-canary_prod_http_8080.upstream_internal_redirect_succeeded_total: 0
cluster.cds_egress_app-mesh_app-100035323-canary_prod_http_8080.upstream_rq_active: 0
cluster.cds_egress_app-mesh_app-100035323-canary_prod_http_8080.upstream_rq_cancelled: 0
cluster.cds_egress_app-mesh_app-100035323-canary_prod_http_8080.upstream_rq_completed: 0
cluster.cds_egress_app-mesh_app-100035323-canary_prod_http_8080.upstream_rq_maintenance_mode: 0
cluster.cds_egress_app-mesh_app-100035323-canary_prod_http_8080.upstream_rq_max_duration_reached: 0
cluster.cds_egress_app-mesh_app-100035323-canary_prod_http_8080.upstream_rq_pending_active: 0
cluster.cds_egress_app-mesh_app-100035323-canary_prod_http_8080.upstream_rq_pending_failure_eject: 0
cluster.cds_egress_app-mesh_app-100035323-canary_prod_http_8080.upstream_rq_pending_overflow: 0
cluster.cds_egress_app-mesh_app-100035323-canary_prod_http_8080.upstream_rq_pending_total: 0
cluster.cds_egress_app-mesh_app-100035323-canary_prod_http_8080.upstream_rq_per_try_idle_timeout: 0
cluster.cds_egress_app-mesh_app-100035323-canary_prod_http_8080.upstream_rq_per_try_timeout: 0
cluster.cds_egress_app-mesh_app-100035323-canary_prod_http_8080.upstream_rq_retry: 0
cluster.cds_egress_app-mesh_app-100035323-canary_prod_http_8080.upstream_rq_retry_backoff_exponential: 0
cluster.cds_egress_app-mesh_app-100035323-canary_prod_http_8080.upstream_rq_retry_backoff_ratelimited: 0
cluster.cds_egress_app-mesh_app-100035323-canary_prod_http_8080.upstream_rq_retry_limit_exceeded: 0
cluster.cds_egress_app-mesh_app-100035323-canary_prod_http_8080.upstream_rq_retry_overflow: 0
cluster.cds_egress_app-mesh_app-100035323-canary_prod_http_8080.upstream_rq_retry_success: 0
cluster.cds_egress_app-mesh_app-100035323-canary_prod_http_8080.upstream_rq_rx_reset: 0
cluster.cds_egress_app-mesh_app-100035323-canary_prod_http_8080.upstream_rq_timeout: 0
cluster.cds_egress_app-mesh_app-100035323-canary_prod_http_8080.upstream_rq_total: 0
cluster.cds_egress_app-mesh_app-100035323-canary_prod_http_8080.upstream_rq_tx_reset: 0
cluster.cds_egress_app-mesh_app-100035323-canary_prod_http_8080.version: 0
cluster.cds_egress_app-mesh_app-100035323-primary_prod_http_8080.assignment_stale: 0
cluster.cds_egress_app-mesh_app-100035323-primary_prod_http_8080.assignment_timeout_received: 0
cluster.cds_egress_app-mesh_app-100035323-primary_prod_http_8080.bind_errors: 0
cluster.cds_egress_app-mesh_app-100035323-primary_prod_http_8080.circuit_breakers.default.cx_open: 0
cluster.cds_egress_app-mesh_app-100035323-primary_prod_http_8080.circuit_breakers.default.cx_pool_open: 0
cluster.cds_egress_app-mesh_app-100035323-primary_prod_http_8080.circuit_breakers.default.rq_open: 0
cluster.cds_egress_app-mesh_app-100035323-primary_prod_http_8080.circuit_breakers.default.rq_pending_open: 0
cluster.cds_egress_app-mesh_app-100035323-primary_prod_http_8080.circuit_breakers.default.rq_retry_open: 0
cluster.cds_egress_app-mesh_app-100035323-primary_prod_http_8080.circuit_breakers.high.cx_open: 0
cluster.cds_egress_app-mesh_app-100035323-primary_prod_http_8080.circuit_breakers.high.cx_pool_open: 0
cluster.cds_egress_app-mesh_app-100035323-primary_prod_http_8080.circuit_breakers.high.rq_open: 0
cluster.cds_egress_app-mesh_app-100035323-primary_prod_http_8080.circuit_breakers.high.rq_pending_open: 0
cluster.cds_egress_app-mesh_app-100035323-primary_prod_http_8080.circuit_breakers.high.rq_retry_open: 0
cluster.cds_egress_app-mesh_app-100035323-primary_prod_http_8080.default.total_match_count: 1
cluster.cds_egress_app-mesh_app-100035323-primary_prod_http_8080.lb_healthy_panic: 0
cluster.cds_egress_app-mesh_app-100035323-primary_prod_http_8080.lb_local_cluster_not_ok: 0
cluster.cds_egress_app-mesh_app-100035323-primary_prod_http_8080.lb_recalculate_zone_structures: 0
cluster.cds_egress_app-mesh_app-100035323-primary_prod_http_8080.lb_subsets_active: 0
cluster.cds_egress_app-mesh_app-100035323-primary_prod_http_8080.lb_subsets_created: 0
cluster.cds_egress_app-mesh_app-100035323-primary_prod_http_8080.lb_subsets_fallback: 0
cluster.cds_egress_app-mesh_app-100035323-primary_prod_http_8080.lb_subsets_fallback_panic: 0
cluster.cds_egress_app-mesh_app-100035323-primary_prod_http_8080.lb_subsets_removed: 0
cluster.cds_egress_app-mesh_app-100035323-primary_prod_http_8080.lb_subsets_selected: 0
cluster.cds_egress_app-mesh_app-100035323-primary_prod_http_8080.lb_zone_cluster_too_small: 0
cluster.cds_egress_app-mesh_app-100035323-primary_prod_http_8080.lb_zone_no_capacity_left: 0
cluster.cds_egress_app-mesh_app-100035323-primary_prod_http_8080.lb_zone_number_differs: 0
cluster.cds_egress_app-mesh_app-100035323-primary_prod_http_8080.lb_zone_routing_all_directly: 0
cluster.cds_egress_app-mesh_app-100035323-primary_prod_http_8080.lb_zone_routing_cross_zone: 0
cluster.cds_egress_app-mesh_app-100035323-primary_prod_http_8080.lb_zone_routing_sampled: 0
cluster.cds_egress_app-mesh_app-100035323-primary_prod_http_8080.max_host_weight: 0
cluster.cds_egress_app-mesh_app-100035323-primary_prod_http_8080.membership_change: 1
cluster.cds_egress_app-mesh_app-100035323-primary_prod_http_8080.membership_degraded: 0
cluster.cds_egress_app-mesh_app-100035323-primary_prod_http_8080.membership_excluded: 0
cluster.cds_egress_app-mesh_app-100035323-primary_prod_http_8080.membership_healthy: 1
cluster.cds_egress_app-mesh_app-100035323-primary_prod_http_8080.membership_total: 1
cluster.cds_egress_app-mesh_app-100035323-primary_prod_http_8080.original_dst_host_invalid: 0
cluster.cds_egress_app-mesh_app-100035323-primary_prod_http_8080.retry_or_shadow_abandoned: 0
cluster.cds_egress_app-mesh_app-100035323-primary_prod_http_8080.update_attempt: 33917
cluster.cds_egress_app-mesh_app-100035323-primary_prod_http_8080.update_empty: 0
cluster.cds_egress_app-mesh_app-100035323-primary_prod_http_8080.update_failure: 0
cluster.cds_egress_app-mesh_app-100035323-primary_prod_http_8080.update_no_rebuild: 0
cluster.cds_egress_app-mesh_app-100035323-primary_prod_http_8080.update_success: 33917
cluster.cds_egress_app-mesh_app-100035323-primary_prod_http_8080.upstream_cx_active: 0
cluster.cds_egress_app-mesh_app-100035323-primary_prod_http_8080.upstream_cx_close_notify: 0
cluster.cds_egress_app-mesh_app-100035323-primary_prod_http_8080.upstream_cx_connect_attempts_exceeded: 0
cluster.cds_egress_app-mesh_app-100035323-primary_prod_http_8080.upstream_cx_connect_fail: 0
cluster.cds_egress_app-mesh_app-100035323-primary_prod_http_8080.upstream_cx_connect_timeout: 0
cluster.cds_egress_app-mesh_app-100035323-primary_prod_http_8080.upstream_cx_destroy: 0
cluster.cds_egress_app-mesh_app-100035323-primary_prod_http_8080.upstream_cx_destroy_local: 0
cluster.cds_egress_app-mesh_app-100035323-primary_prod_http_8080.upstream_cx_destroy_local_with_active_rq: 0
cluster.cds_egress_app-mesh_app-100035323-primary_prod_http_8080.upstream_cx_destroy_remote: 0
cluster.cds_egress_app-mesh_app-100035323-primary_prod_http_8080.upstream_cx_destroy_remote_with_active_rq: 0
cluster.cds_egress_app-mesh_app-100035323-primary_prod_http_8080.upstream_cx_destroy_with_active_rq: 0
cluster.cds_egress_app-mesh_app-100035323-primary_prod_http_8080.upstream_cx_http1_total: 0
cluster.cds_egress_app-mesh_app-100035323-primary_prod_http_8080.upstream_cx_http2_total: 0
cluster.cds_egress_app-mesh_app-100035323-primary_prod_http_8080.upstream_cx_http3_total: 0
cluster.cds_egress_app-mesh_app-100035323-primary_prod_http_8080.upstream_cx_idle_timeout: 0
cluster.cds_egress_app-mesh_app-100035323-primary_prod_http_8080.upstream_cx_max_requests: 0
cluster.cds_egress_app-mesh_app-100035323-primary_prod_http_8080.upstream_cx_none_healthy: 0
cluster.cds_egress_app-mesh_app-100035323-primary_prod_http_8080.upstream_cx_overflow: 0
cluster.cds_egress_app-mesh_app-100035323-primary_prod_http_8080.upstream_cx_pool_overflow: 0
cluster.cds_egress_app-mesh_app-100035323-primary_prod_http_8080.upstream_cx_protocol_error: 0
cluster.cds_egress_app-mesh_app-100035323-primary_prod_http_8080.upstream_cx_rx_bytes_buffered: 0
cluster.cds_egress_app-mesh_app-100035323-primary_prod_http_8080.upstream_cx_rx_bytes_total: 0
cluster.cds_egress_app-mesh_app-100035323-primary_prod_http_8080.upstream_cx_total: 0
cluster.cds_egress_app-mesh_app-100035323-primary_prod_http_8080.upstream_cx_tx_bytes_buffered: 0
cluster.cds_egress_app-mesh_app-100035323-primary_prod_http_8080.upstream_cx_tx_bytes_total: 0
cluster.cds_egress_app-mesh_app-100035323-primary_prod_http_8080.upstream_flow_control_backed_up_total: 0
cluster.cds_egress_app-mesh_app-100035323-primary_prod_http_8080.upstream_flow_control_drained_total: 0
cluster.cds_egress_app-mesh_app-100035323-primary_prod_http_8080.upstream_flow_control_paused_reading_total: 0
cluster.cds_egress_app-mesh_app-100035323-primary_prod_http_8080.upstream_flow_control_resumed_reading_total: 0
cluster.cds_egress_app-mesh_app-100035323-primary_prod_http_8080.upstream_internal_redirect_failed_total: 0
cluster.cds_egress_app-mesh_app-100035323-primary_prod_http_8080.upstream_internal_redirect_succeeded_total: 0
cluster.cds_egress_app-mesh_app-100035323-primary_prod_http_8080.upstream_rq_active: 0
cluster.cds_egress_app-mesh_app-100035323-primary_prod_http_8080.upstream_rq_cancelled: 0
cluster.cds_egress_app-mesh_app-100035323-primary_prod_http_8080.upstream_rq_completed: 0
cluster.cds_egress_app-mesh_app-100035323-primary_prod_http_8080.upstream_rq_maintenance_mode: 0
cluster.cds_egress_app-mesh_app-100035323-primary_prod_http_8080.upstream_rq_max_duration_reached: 0
cluster.cds_egress_app-mesh_app-100035323-primary_prod_http_8080.upstream_rq_pending_active: 0
cluster.cds_egress_app-mesh_app-100035323-primary_prod_http_8080.upstream_rq_pending_failure_eject: 0
cluster.cds_egress_app-mesh_app-100035323-primary_prod_http_8080.upstream_rq_pending_overflow: 0
cluster.cds_egress_app-mesh_app-100035323-primary_prod_http_8080.upstream_rq_pending_total: 0
cluster.cds_egress_app-mesh_app-100035323-primary_prod_http_8080.upstream_rq_per_try_idle_timeout: 0
cluster.cds_egress_app-mesh_app-100035323-primary_prod_http_8080.upstream_rq_per_try_timeout: 0
cluster.cds_egress_app-mesh_app-100035323-primary_prod_http_8080.upstream_rq_retry: 0
cluster.cds_egress_app-mesh_app-100035323-primary_prod_http_8080.upstream_rq_retry_backoff_exponential: 0
cluster.cds_egress_app-mesh_app-100035323-primary_prod_http_8080.upstream_rq_retry_backoff_ratelimited: 0
cluster.cds_egress_app-mesh_app-100035323-primary_prod_http_8080.upstream_rq_retry_limit_exceeded: 0
cluster.cds_egress_app-mesh_app-100035323-primary_prod_http_8080.upstream_rq_retry_overflow: 0
cluster.cds_egress_app-mesh_app-100035323-primary_prod_http_8080.upstream_rq_retry_success: 0
cluster.cds_egress_app-mesh_app-100035323-primary_prod_http_8080.upstream_rq_rx_reset: 0
cluster.cds_egress_app-mesh_app-100035323-primary_prod_http_8080.upstream_rq_timeout: 0
cluster.cds_egress_app-mesh_app-100035323-primary_prod_http_8080.upstream_rq_total: 0
cluster.cds_egress_app-mesh_app-100035323-primary_prod_http_8080.upstream_rq_tx_reset: 0
cluster.cds_egress_app-mesh_app-100035323-primary_prod_http_8080.version: 0
cluster.cds_egress_app-mesh_app-100035399-canary_prod_http_8080.assignment_stale: 0
cluster.cds_egress_app-mesh_app-100035399-canary_prod_http_8080.assignment_timeout_received: 0
cluster.cds_egress_app-mesh_app-100035399-canary_prod_http_8080.bind_errors: 0
cluster.cds_egress_app-mesh_app-100035399-canary_prod_http_8080.circuit_breakers.default.cx_open: 0
cluster.cds_egress_app-mesh_app-100035399-canary_prod_http_8080.circuit_breakers.default.cx_pool_open: 0
cluster.cds_egress_app-mesh_app-100035399-canary_prod_http_8080.circuit_breakers.default.rq_open: 0
cluster.cds_egress_app-mesh_app-100035399-canary_prod_http_8080.circuit_breakers.default.rq_pending_open: 0
cluster.cds_egress_app-mesh_app-100035399-canary_prod_http_8080.circuit_breakers.default.rq_retry_open: 0
cluster.cds_egress_app-mesh_app-100035399-canary_prod_http_8080.circuit_breakers.high.cx_open: 0
cluster.cds_egress_app-mesh_app-100035399-canary_prod_http_8080.circuit_breakers.high.cx_pool_open: 0
cluster.cds_egress_app-mesh_app-100035399-canary_prod_http_8080.circuit_breakers.high.rq_open: 0
cluster.cds_egress_app-mesh_app-100035399-canary_prod_http_8080.circuit_breakers.high.rq_pending_open: 0
cluster.cds_egress_app-mesh_app-100035399-canary_prod_http_8080.circuit_breakers.high.rq_retry_open: 0
cluster.cds_egress_app-mesh_app-100035399-canary_prod_http_8080.default.total_match_count: 1
cluster.cds_egress_app-mesh_app-100035399-canary_prod_http_8080.lb_healthy_panic: 0
cluster.cds_egress_app-mesh_app-100035399-canary_prod_http_8080.lb_local_cluster_not_ok: 0
cluster.cds_egress_app-mesh_app-100035399-canary_prod_http_8080.lb_recalculate_zone_structures: 0
cluster.cds_egress_app-mesh_app-100035399-canary_prod_http_8080.lb_subsets_active: 0
cluster.cds_egress_app-mesh_app-100035399-canary_prod_http_8080.lb_subsets_created: 0
cluster.cds_egress_app-mesh_app-100035399-canary_prod_http_8080.lb_subsets_fallback: 0
cluster.cds_egress_app-mesh_app-100035399-canary_prod_http_8080.lb_subsets_fallback_panic: 0
cluster.cds_egress_app-mesh_app-100035399-canary_prod_http_8080.lb_subsets_removed: 0
cluster.cds_egress_app-mesh_app-100035399-canary_prod_http_8080.lb_subsets_selected: 0
cluster.cds_egress_app-mesh_app-100035399-canary_prod_http_8080.lb_zone_cluster_too_small: 0
cluster.cds_egress_app-mesh_app-100035399-canary_prod_http_8080.lb_zone_no_capacity_left: 0
cluster.cds_egress_app-mesh_app-100035399-canary_prod_http_8080.lb_zone_number_differs: 0
cluster.cds_egress_app-mesh_app-100035399-canary_prod_http_8080.lb_zone_routing_all_directly: 0
cluster.cds_egress_app-mesh_app-100035399-canary_prod_http_8080.lb_zone_routing_cross_zone: 0
cluster.cds_egress_app-mesh_app-100035399-canary_prod_http_8080.lb_zone_routing_sampled: 0
cluster.cds_egress_app-mesh_app-100035399-canary_prod_http_8080.max_host_weight: 0
cluster.cds_egress_app-mesh_app-100035399-canary_prod_http_8080.membership_change: 1
cluster.cds_egress_app-mesh_app-100035399-canary_prod_http_8080.membership_degraded: 0
cluster.cds_egress_app-mesh_app-100035399-canary_prod_http_8080.membership_excluded: 0
cluster.cds_egress_app-mesh_app-100035399-canary_prod_http_8080.membership_healthy: 1
cluster.cds_egress_app-mesh_app-100035399-canary_prod_http_8080.membership_total: 1
cluster.cds_egress_app-mesh_app-100035399-canary_prod_http_8080.original_dst_host_invalid: 0
cluster.cds_egress_app-mesh_app-100035399-canary_prod_http_8080.retry_or_shadow_abandoned: 0
cluster.cds_egress_app-mesh_app-100035399-canary_prod_http_8080.update_attempt: 33917
cluster.cds_egress_app-mesh_app-100035399-canary_prod_http_8080.update_empty: 0
cluster.cds_egress_app-mesh_app-100035399-canary_prod_http_8080.update_failure: 0
cluster.cds_egress_app-mesh_app-100035399-canary_prod_http_8080.update_no_rebuild: 0
cluster.cds_egress_app-mesh_app-100035399-canary_prod_http_8080.update_success: 33917
cluster.cds_egress_app-mesh_app-100035399-canary_prod_http_8080.upstream_cx_active: 0
cluster.cds_egress_app-mesh_app-100035399-canary_prod_http_8080.upstream_cx_close_notify: 0
cluster.cds_egress_app-mesh_app-100035399-canary_prod_http_8080.upstream_cx_connect_attempts_exceeded: 0
cluster.cds_egress_app-mesh_app-100035399-canary_prod_http_8080.upstream_cx_connect_fail: 0
cluster.cds_egress_app-mesh_app-100035399-canary_prod_http_8080.upstream_cx_connect_timeout: 0
cluster.cds_egress_app-mesh_app-100035399-canary_prod_http_8080.upstream_cx_destroy: 0
cluster.cds_egress_app-mesh_app-100035399-canary_prod_http_8080.upstream_cx_destroy_local: 0
cluster.cds_egress_app-mesh_app-100035399-canary_prod_http_8080.upstream_cx_destroy_local_with_active_rq: 0
cluster.cds_egress_app-mesh_app-100035399-canary_prod_http_8080.upstream_cx_destroy_remote: 0
cluster.cds_egress_app-mesh_app-100035399-canary_prod_http_8080.upstream_cx_destroy_remote_with_active_rq: 0
cluster.cds_egress_app-mesh_app-100035399-canary_prod_http_8080.upstream_cx_destroy_with_active_rq: 0
cluster.cds_egress_app-mesh_app-100035399-canary_prod_http_8080.upstream_cx_http1_total: 0
cluster.cds_egress_app-mesh_app-100035399-canary_prod_http_8080.upstream_cx_http2_total: 0
cluster.cds_egress_app-mesh_app-100035399-canary_prod_http_8080.upstream_cx_http3_total: 0
cluster.cds_egress_app-mesh_app-100035399-canary_prod_http_8080.upstream_cx_idle_timeout: 0
cluster.cds_egress_app-mesh_app-100035399-canary_prod_http_8080.upstream_cx_max_requests: 0
cluster.cds_egress_app-mesh_app-100035399-canary_prod_http_8080.upstream_cx_none_healthy: 0
cluster.cds_egress_app-mesh_app-100035399-canary_prod_http_8080.upstream_cx_overflow: 0
cluster.cds_egress_app-mesh_app-100035399-canary_prod_http_8080.upstream_cx_pool_overflow: 0
cluster.cds_egress_app-mesh_app-100035399-canary_prod_http_8080.upstream_cx_protocol_error: 0
cluster.cds_egress_app-mesh_app-100035399-canary_prod_http_8080.upstream_cx_rx_bytes_buffered: 0
cluster.cds_egress_app-mesh_app-100035399-canary_prod_http_8080.upstream_cx_rx_bytes_total: 0
cluster.cds_egress_app-mesh_app-100035399-canary_prod_http_8080.upstream_cx_total: 0
cluster.cds_egress_app-mesh_app-100035399-canary_prod_http_8080.upstream_cx_tx_bytes_buffered: 0
cluster.cds_egress_app-mesh_app-100035399-canary_prod_http_8080.upstream_cx_tx_bytes_total: 0
cluster.cds_egress_app-mesh_app-100035399-canary_prod_http_8080.upstream_flow_control_backed_up_total: 0
cluster.cds_egress_app-mesh_app-100035399-canary_prod_http_8080.upstream_flow_control_drained_total: 0
cluster.cds_egress_app-mesh_app-100035399-canary_prod_http_8080.upstream_flow_control_paused_reading_total: 0
cluster.cds_egress_app-mesh_app-100035399-canary_prod_http_8080.upstream_flow_control_resumed_reading_total: 0
cluster.cds_egress_app-mesh_app-100035399-canary_prod_http_8080.upstream_internal_redirect_failed_total: 0
cluster.cds_egress_app-mesh_app-100035399-canary_prod_http_8080.upstream_internal_redirect_succeeded_total: 0
cluster.cds_egress_app-mesh_app-100035399-canary_prod_http_8080.upstream_rq_active: 0
cluster.cds_egress_app-mesh_app-100035399-canary_prod_http_8080.upstream_rq_cancelled: 0
cluster.cds_egress_app-mesh_app-100035399-canary_prod_http_8080.upstream_rq_completed: 0
cluster.cds_egress_app-mesh_app-100035399-canary_prod_http_8080.upstream_rq_maintenance_mode: 0
cluster.cds_egress_app-mesh_app-100035399-canary_prod_http_8080.upstream_rq_max_duration_reached: 0
cluster.cds_egress_app-mesh_app-100035399-canary_prod_http_8080.upstream_rq_pending_active: 0
cluster.cds_egress_app-mesh_app-100035399-canary_prod_http_8080.upstream_rq_pending_failure_eject: 0
cluster.cds_egress_app-mesh_app-100035399-canary_prod_http_8080.upstream_rq_pending_overflow: 0
cluster.cds_egress_app-mesh_app-100035399-canary_prod_http_8080.upstream_rq_pending_total: 0
cluster.cds_egress_app-mesh_app-100035399-canary_prod_http_8080.upstream_rq_per_try_idle_timeout: 0
cluster.cds_egress_app-mesh_app-100035399-canary_prod_http_8080.upstream_rq_per_try_timeout: 0
cluster.cds_egress_app-mesh_app-100035399-canary_prod_http_8080.upstream_rq_retry: 0
cluster.cds_egress_app-mesh_app-100035399-canary_prod_http_8080.upstream_rq_retry_backoff_exponential: 0
cluster.cds_egress_app-mesh_app-100035399-canary_prod_http_8080.upstream_rq_retry_backoff_ratelimited: 0
cluster.cds_egress_app-mesh_app-100035399-canary_prod_http_8080.upstream_rq_retry_limit_exceeded: 0
cluster.cds_egress_app-mesh_app-100035399-canary_prod_http_8080.upstream_rq_retry_overflow: 0
cluster.cds_egress_app-mesh_app-100035399-canary_prod_http_8080.upstream_rq_retry_success: 0
cluster.cds_egress_app-mesh_app-100035399-canary_prod_http_8080.upstream_rq_rx_reset: 0
cluster.cds_egress_app-mesh_app-100035399-canary_prod_http_8080.upstream_rq_timeout: 0
cluster.cds_egress_app-mesh_app-100035399-canary_prod_http_8080.upstream_rq_total: 0
cluster.cds_egress_app-mesh_app-100035399-canary_prod_http_8080.upstream_rq_tx_reset: 0
cluster.cds_egress_app-mesh_app-100035399-canary_prod_http_8080.version: 0
cluster.cds_egress_app-mesh_app-100035399-primary_prod_http_8080.assignment_stale: 0
cluster.cds_egress_app-mesh_app-100035399-primary_prod_http_8080.assignment_timeout_received: 0
cluster.cds_egress_app-mesh_app-100035399-primary_prod_http_8080.bind_errors: 0
cluster.cds_egress_app-mesh_app-100035399-primary_prod_http_8080.circuit_breakers.default.cx_open: 0
cluster.cds_egress_app-mesh_app-100035399-primary_prod_http_8080.circuit_breakers.default.cx_pool_open: 0
cluster.cds_egress_app-mesh_app-100035399-primary_prod_http_8080.circuit_breakers.default.rq_open: 0
cluster.cds_egress_app-mesh_app-100035399-primary_prod_http_8080.circuit_breakers.default.rq_pending_open: 0
cluster.cds_egress_app-mesh_app-100035399-primary_prod_http_8080.circuit_breakers.default.rq_retry_open: 0
cluster.cds_egress_app-mesh_app-100035399-primary_prod_http_8080.circuit_breakers.high.cx_open: 0
cluster.cds_egress_app-mesh_app-100035399-primary_prod_http_8080.circuit_breakers.high.cx_pool_open: 0
cluster.cds_egress_app-mesh_app-100035399-primary_prod_http_8080.circuit_breakers.high.rq_open: 0
cluster.cds_egress_app-mesh_app-100035399-primary_prod_http_8080.circuit_breakers.high.rq_pending_open: 0
cluster.cds_egress_app-mesh_app-100035399-primary_prod_http_8080.circuit_breakers.high.rq_retry_open: 0
cluster.cds_egress_app-mesh_app-100035399-primary_prod_http_8080.default.total_match_count: 1
cluster.cds_egress_app-mesh_app-100035399-primary_prod_http_8080.lb_healthy_panic: 0
cluster.cds_egress_app-mesh_app-100035399-primary_prod_http_8080.lb_local_cluster_not_ok: 0
cluster.cds_egress_app-mesh_app-100035399-primary_prod_http_8080.lb_recalculate_zone_structures: 0
cluster.cds_egress_app-mesh_app-100035399-primary_prod_http_8080.lb_subsets_active: 0
cluster.cds_egress_app-mesh_app-100035399-primary_prod_http_8080.lb_subsets_created: 0
cluster.cds_egress_app-mesh_app-100035399-primary_prod_http_8080.lb_subsets_fallback: 0
cluster.cds_egress_app-mesh_app-100035399-primary_prod_http_8080.lb_subsets_fallback_panic: 0
cluster.cds_egress_app-mesh_app-100035399-primary_prod_http_8080.lb_subsets_removed: 0
cluster.cds_egress_app-mesh_app-100035399-primary_prod_http_8080.lb_subsets_selected: 0
cluster.cds_egress_app-mesh_app-100035399-primary_prod_http_8080.lb_zone_cluster_too_small: 0
cluster.cds_egress_app-mesh_app-100035399-primary_prod_http_8080.lb_zone_no_capacity_left: 0
cluster.cds_egress_app-mesh_app-100035399-primary_prod_http_8080.lb_zone_number_differs: 0
cluster.cds_egress_app-mesh_app-100035399-primary_prod_http_8080.lb_zone_routing_all_directly: 0
cluster.cds_egress_app-mesh_app-100035399-primary_prod_http_8080.lb_zone_routing_cross_zone: 0
cluster.cds_egress_app-mesh_app-100035399-primary_prod_http_8080.lb_zone_routing_sampled: 0
cluster.cds_egress_app-mesh_app-100035399-primary_prod_http_8080.max_host_weight: 0
cluster.cds_egress_app-mesh_app-100035399-primary_prod_http_8080.membership_change: 1
cluster.cds_egress_app-mesh_app-100035399-primary_prod_http_8080.membership_degraded: 0
cluster.cds_egress_app-mesh_app-100035399-primary_prod_http_8080.membership_excluded: 0
cluster.cds_egress_app-mesh_app-100035399-primary_prod_http_8080.membership_healthy: 1
cluster.cds_egress_app-mesh_app-100035399-primary_prod_http_8080.membership_total: 1
cluster.cds_egress_app-mesh_app-100035399-primary_prod_http_8080.original_dst_host_invalid: 0
cluster.cds_egress_app-mesh_app-100035399-primary_prod_http_8080.retry_or_shadow_abandoned: 0
cluster.cds_egress_app-mesh_app-100035399-primary_prod_http_8080.update_attempt: 33917
cluster.cds_egress_app-mesh_app-100035399-primary_prod_http_8080.update_empty: 0
cluster.cds_egress_app-mesh_app-100035399-primary_prod_http_8080.update_failure: 0
cluster.cds_egress_app-mesh_app-100035399-primary_prod_http_8080.update_no_rebuild: 0
cluster.cds_egress_app-mesh_app-100035399-primary_prod_http_8080.update_success: 33917
cluster.cds_egress_app-mesh_app-100035399-primary_prod_http_8080.upstream_cx_active: 0
cluster.cds_egress_app-mesh_app-100035399-primary_prod_http_8080.upstream_cx_close_notify: 0
cluster.cds_egress_app-mesh_app-100035399-primary_prod_http_8080.upstream_cx_connect_attempts_exceeded: 0
cluster.cds_egress_app-mesh_app-100035399-primary_prod_http_8080.upstream_cx_connect_fail: 0
cluster.cds_egress_app-mesh_app-100035399-primary_prod_http_8080.upstream_cx_connect_timeout: 0
cluster.cds_egress_app-mesh_app-100035399-primary_prod_http_8080.upstream_cx_destroy: 0
cluster.cds_egress_app-mesh_app-100035399-primary_prod_http_8080.upstream_cx_destroy_local: 0
cluster.cds_egress_app-mesh_app-100035399-primary_prod_http_8080.upstream_cx_destroy_local_with_active_rq: 0
cluster.cds_egress_app-mesh_app-100035399-primary_prod_http_8080.upstream_cx_destroy_remote: 0
cluster.cds_egress_app-mesh_app-100035399-primary_prod_http_8080.upstream_cx_destroy_remote_with_active_rq: 0
cluster.cds_egress_app-mesh_app-100035399-primary_prod_http_8080.upstream_cx_destroy_with_active_rq: 0
cluster.cds_egress_app-mesh_app-100035399-primary_prod_http_8080.upstream_cx_http1_total: 0
cluster.cds_egress_app-mesh_app-100035399-primary_prod_http_8080.upstream_cx_http2_total: 0
cluster.cds_egress_app-mesh_app-100035399-primary_prod_http_8080.upstream_cx_http3_total: 0
cluster.cds_egress_app-mesh_app-100035399-primary_prod_http_8080.upstream_cx_idle_timeout: 0
cluster.cds_egress_app-mesh_app-100035399-primary_prod_http_8080.upstream_cx_max_requests: 0
cluster.cds_egress_app-mesh_app-100035399-primary_prod_http_8080.upstream_cx_none_healthy: 0
cluster.cds_egress_app-mesh_app-100035399-primary_prod_http_8080.upstream_cx_overflow: 0
cluster.cds_egress_app-mesh_app-100035399-primary_prod_http_8080.upstream_cx_pool_overflow: 0
cluster.cds_egress_app-mesh_app-100035399-primary_prod_http_8080.upstream_cx_protocol_error: 0
cluster.cds_egress_app-mesh_app-100035399-primary_prod_http_8080.upstream_cx_rx_bytes_buffered: 0
cluster.cds_egress_app-mesh_app-100035399-primary_prod_http_8080.upstream_cx_rx_bytes_total: 0
cluster.cds_egress_app-mesh_app-100035399-primary_prod_http_8080.upstream_cx_total: 0
cluster.cds_egress_app-mesh_app-100035399-primary_prod_http_8080.upstream_cx_tx_bytes_buffered: 0
cluster.cds_egress_app-mesh_app-100035399-primary_prod_http_8080.upstream_cx_tx_bytes_total: 0
cluster.cds_egress_app-mesh_app-100035399-primary_prod_http_8080.upstream_flow_control_backed_up_total: 0
cluster.cds_egress_app-mesh_app-100035399-primary_prod_http_8080.upstream_flow_control_drained_total: 0
cluster.cds_egress_app-mesh_app-100035399-primary_prod_http_8080.upstream_flow_control_paused_reading_total: 0
cluster.cds_egress_app-mesh_app-100035399-primary_prod_http_8080.upstream_flow_control_resumed_reading_total: 0
cluster.cds_egress_app-mesh_app-100035399-primary_prod_http_8080.upstream_internal_redirect_failed_total: 0
cluster.cds_egress_app-mesh_app-100035399-primary_prod_http_8080.upstream_internal_redirect_succeeded_total: 0
cluster.cds_egress_app-mesh_app-100035399-primary_prod_http_8080.upstream_rq_active: 0
cluster.cds_egress_app-mesh_app-100035399-primary_prod_http_8080.upstream_rq_cancelled: 0
cluster.cds_egress_app-mesh_app-100035399-primary_prod_http_8080.upstream_rq_completed: 0
cluster.cds_egress_app-mesh_app-100035399-primary_prod_http_8080.upstream_rq_maintenance_mode: 0
cluster.cds_egress_app-mesh_app-100035399-primary_prod_http_8080.upstream_rq_max_duration_reached: 0
cluster.cds_egress_app-mesh_app-100035399-primary_prod_http_8080.upstream_rq_pending_active: 0
cluster.cds_egress_app-mesh_app-100035399-primary_prod_http_8080.upstream_rq_pending_failure_eject: 0
cluster.cds_egress_app-mesh_app-100035399-primary_prod_http_8080.upstream_rq_pending_overflow: 0
cluster.cds_egress_app-mesh_app-100035399-primary_prod_http_8080.upstream_rq_pending_total: 0
cluster.cds_egress_app-mesh_app-100035399-primary_prod_http_8080.upstream_rq_per_try_idle_timeout: 0
cluster.cds_egress_app-mesh_app-100035399-primary_prod_http_8080.upstream_rq_per_try_timeout: 0
cluster.cds_egress_app-mesh_app-100035399-primary_prod_http_8080.upstream_rq_retry: 0
cluster.cds_egress_app-mesh_app-100035399-primary_prod_http_8080.upstream_rq_retry_backoff_exponential: 0
cluster.cds_egress_app-mesh_app-100035399-primary_prod_http_8080.upstream_rq_retry_backoff_ratelimited: 0
cluster.cds_egress_app-mesh_app-100035399-primary_prod_http_8080.upstream_rq_retry_limit_exceeded: 0
cluster.cds_egress_app-mesh_app-100035399-primary_prod_http_8080.upstream_rq_retry_overflow: 0
cluster.cds_egress_app-mesh_app-100035399-primary_prod_http_8080.upstream_rq_retry_success: 0
cluster.cds_egress_app-mesh_app-100035399-primary_prod_http_8080.upstream_rq_rx_reset: 0
cluster.cds_egress_app-mesh_app-100035399-primary_prod_http_8080.upstream_rq_timeout: 0
cluster.cds_egress_app-mesh_app-100035399-primary_prod_http_8080.upstream_rq_total: 0
cluster.cds_egress_app-mesh_app-100035399-primary_prod_http_8080.upstream_rq_tx_reset: 0
cluster.cds_egress_app-mesh_app-100035399-primary_prod_http_8080.version: 0
cluster.cds_egress_app-mesh_ibumarketadsmatchservice-19816-canary_prod_http_8080.assignment_stale: 0
cluster.cds_egress_app-mesh_ibumarketadsmatchservice-19816-canary_prod_http_8080.assignment_timeout_received: 0
cluster.cds_egress_app-mesh_ibumarketadsmatchservice-19816-canary_prod_http_8080.bind_errors: 0
cluster.cds_egress_app-mesh_ibumarketadsmatchservice-19816-canary_prod_http_8080.circuit_breakers.default.cx_open: 0
cluster.cds_egress_app-mesh_ibumarketadsmatchservice-19816-canary_prod_http_8080.circuit_breakers.default.cx_pool_open: 0
cluster.cds_egress_app-mesh_ibumarketadsmatchservice-19816-canary_prod_http_8080.circuit_breakers.default.rq_open: 0
cluster.cds_egress_app-mesh_ibumarketadsmatchservice-19816-canary_prod_http_8080.circuit_breakers.default.rq_pending_open: 0
cluster.cds_egress_app-mesh_ibumarketadsmatchservice-19816-canary_prod_http_8080.circuit_breakers.default.rq_retry_open: 0
cluster.cds_egress_app-mesh_ibumarketadsmatchservice-19816-canary_prod_http_8080.circuit_breakers.high.cx_open: 0
cluster.cds_egress_app-mesh_ibumarketadsmatchservice-19816-canary_prod_http_8080.circuit_breakers.high.cx_pool_open: 0
cluster.cds_egress_app-mesh_ibumarketadsmatchservice-19816-canary_prod_http_8080.circuit_breakers.high.rq_open: 0
cluster.cds_egress_app-mesh_ibumarketadsmatchservice-19816-canary_prod_http_8080.circuit_breakers.high.rq_pending_open: 0
cluster.cds_egress_app-mesh_ibumarketadsmatchservice-19816-canary_prod_http_8080.circuit_breakers.high.rq_retry_open: 0
cluster.cds_egress_app-mesh_ibumarketadsmatchservice-19816-canary_prod_http_8080.default.total_match_count: 1
cluster.cds_egress_app-mesh_ibumarketadsmatchservice-19816-canary_prod_http_8080.external.upstream_rq_200: 4938
cluster.cds_egress_app-mesh_ibumarketadsmatchservice-19816-canary_prod_http_8080.external.upstream_rq_2xx: 4938
cluster.cds_egress_app-mesh_ibumarketadsmatchservice-19816-canary_prod_http_8080.external.upstream_rq_completed: 4938
cluster.cds_egress_app-mesh_ibumarketadsmatchservice-19816-canary_prod_http_8080.http1.dropped_headers_with_underscores: 0
cluster.cds_egress_app-mesh_ibumarketadsmatchservice-19816-canary_prod_http_8080.http1.metadata_not_supported_error: 0
cluster.cds_egress_app-mesh_ibumarketadsmatchservice-19816-canary_prod_http_8080.http1.requests_rejected_with_underscores_in_headers: 0
cluster.cds_egress_app-mesh_ibumarketadsmatchservice-19816-canary_prod_http_8080.http1.response_flood: 0
cluster.cds_egress_app-mesh_ibumarketadsmatchservice-19816-canary_prod_http_8080.internal.upstream_rq_200: 426
cluster.cds_egress_app-mesh_ibumarketadsmatchservice-19816-canary_prod_http_8080.internal.upstream_rq_2xx: 426
cluster.cds_egress_app-mesh_ibumarketadsmatchservice-19816-canary_prod_http_8080.internal.upstream_rq_completed: 426
cluster.cds_egress_app-mesh_ibumarketadsmatchservice-19816-canary_prod_http_8080.lb_healthy_panic: 0
cluster.cds_egress_app-mesh_ibumarketadsmatchservice-19816-canary_prod_http_8080.lb_local_cluster_not_ok: 0
cluster.cds_egress_app-mesh_ibumarketadsmatchservice-19816-canary_prod_http_8080.lb_recalculate_zone_structures: 0
cluster.cds_egress_app-mesh_ibumarketadsmatchservice-19816-canary_prod_http_8080.lb_subsets_active: 0
cluster.cds_egress_app-mesh_ibumarketadsmatchservice-19816-canary_prod_http_8080.lb_subsets_created: 0
cluster.cds_egress_app-mesh_ibumarketadsmatchservice-19816-canary_prod_http_8080.lb_subsets_fallback: 0
cluster.cds_egress_app-mesh_ibumarketadsmatchservice-19816-canary_prod_http_8080.lb_subsets_fallback_panic: 0
cluster.cds_egress_app-mesh_ibumarketadsmatchservice-19816-canary_prod_http_8080.lb_subsets_removed: 0
cluster.cds_egress_app-mesh_ibumarketadsmatchservice-19816-canary_prod_http_8080.lb_subsets_selected: 0
cluster.cds_egress_app-mesh_ibumarketadsmatchservice-19816-canary_prod_http_8080.lb_zone_cluster_too_small: 0
cluster.cds_egress_app-mesh_ibumarketadsmatchservice-19816-canary_prod_http_8080.lb_zone_no_capacity_left: 0
cluster.cds_egress_app-mesh_ibumarketadsmatchservice-19816-canary_prod_http_8080.lb_zone_number_differs: 0
cluster.cds_egress_app-mesh_ibumarketadsmatchservice-19816-canary_prod_http_8080.lb_zone_routing_all_directly: 0
cluster.cds_egress_app-mesh_ibumarketadsmatchservice-19816-canary_prod_http_8080.lb_zone_routing_cross_zone: 0
cluster.cds_egress_app-mesh_ibumarketadsmatchservice-19816-canary_prod_http_8080.lb_zone_routing_sampled: 0
cluster.cds_egress_app-mesh_ibumarketadsmatchservice-19816-canary_prod_http_8080.max_host_weight: 0
cluster.cds_egress_app-mesh_ibumarketadsmatchservice-19816-canary_prod_http_8080.membership_change: 1
cluster.cds_egress_app-mesh_ibumarketadsmatchservice-19816-canary_prod_http_8080.membership_degraded: 0
cluster.cds_egress_app-mesh_ibumarketadsmatchservice-19816-canary_prod_http_8080.membership_excluded: 0
cluster.cds_egress_app-mesh_ibumarketadsmatchservice-19816-canary_prod_http_8080.membership_healthy: 1
cluster.cds_egress_app-mesh_ibumarketadsmatchservice-19816-canary_prod_http_8080.membership_total: 1
cluster.cds_egress_app-mesh_ibumarketadsmatchservice-19816-canary_prod_http_8080.original_dst_host_invalid: 0
cluster.cds_egress_app-mesh_ibumarketadsmatchservice-19816-canary_prod_http_8080.retry_or_shadow_abandoned: 0
cluster.cds_egress_app-mesh_ibumarketadsmatchservice-19816-canary_prod_http_8080.update_attempt: 33917
cluster.cds_egress_app-mesh_ibumarketadsmatchservice-19816-canary_prod_http_8080.update_empty: 0
cluster.cds_egress_app-mesh_ibumarketadsmatchservice-19816-canary_prod_http_8080.update_failure: 0
cluster.cds_egress_app-mesh_ibumarketadsmatchservice-19816-canary_prod_http_8080.update_no_rebuild: 0
cluster.cds_egress_app-mesh_ibumarketadsmatchservice-19816-canary_prod_http_8080.update_success: 33917
cluster.cds_egress_app-mesh_ibumarketadsmatchservice-19816-canary_prod_http_8080.upstream_cx_active: 0
cluster.cds_egress_app-mesh_ibumarketadsmatchservice-19816-canary_prod_http_8080.upstream_cx_close_notify: 0
cluster.cds_egress_app-mesh_ibumarketadsmatchservice-19816-canary_prod_http_8080.upstream_cx_connect_attempts_exceeded: 0
cluster.cds_egress_app-mesh_ibumarketadsmatchservice-19816-canary_prod_http_8080.upstream_cx_connect_fail: 0
cluster.cds_egress_app-mesh_ibumarketadsmatchservice-19816-canary_prod_http_8080.upstream_cx_connect_timeout: 0
cluster.cds_egress_app-mesh_ibumarketadsmatchservice-19816-canary_prod_http_8080.upstream_cx_destroy: 23
cluster.cds_egress_app-mesh_ibumarketadsmatchservice-19816-canary_prod_http_8080.upstream_cx_destroy_local: 0
cluster.cds_egress_app-mesh_ibumarketadsmatchservice-19816-canary_prod_http_8080.upstream_cx_destroy_local_with_active_rq: 0
cluster.cds_egress_app-mesh_ibumarketadsmatchservice-19816-canary_prod_http_8080.upstream_cx_destroy_remote: 23
cluster.cds_egress_app-mesh_ibumarketadsmatchservice-19816-canary_prod_http_8080.upstream_cx_destroy_remote_with_active_rq: 0
cluster.cds_egress_app-mesh_ibumarketadsmatchservice-19816-canary_prod_http_8080.upstream_cx_destroy_with_active_rq: 0
cluster.cds_egress_app-mesh_ibumarketadsmatchservice-19816-canary_prod_http_8080.upstream_cx_http1_total: 23
cluster.cds_egress_app-mesh_ibumarketadsmatchservice-19816-canary_prod_http_8080.upstream_cx_http2_total: 0
cluster.cds_egress_app-mesh_ibumarketadsmatchservice-19816-canary_prod_http_8080.upstream_cx_http3_total: 0
cluster.cds_egress_app-mesh_ibumarketadsmatchservice-19816-canary_prod_http_8080.upstream_cx_idle_timeout: 0
cluster.cds_egress_app-mesh_ibumarketadsmatchservice-19816-canary_prod_http_8080.upstream_cx_max_requests: 0
cluster.cds_egress_app-mesh_ibumarketadsmatchservice-19816-canary_prod_http_8080.upstream_cx_none_healthy: 0
cluster.cds_egress_app-mesh_ibumarketadsmatchservice-19816-canary_prod_http_8080.upstream_cx_overflow: 0
cluster.cds_egress_app-mesh_ibumarketadsmatchservice-19816-canary_prod_http_8080.upstream_cx_pool_overflow: 0
cluster.cds_egress_app-mesh_ibumarketadsmatchservice-19816-canary_prod_http_8080.upstream_cx_protocol_error: 0
cluster.cds_egress_app-mesh_ibumarketadsmatchservice-19816-canary_prod_http_8080.upstream_cx_rx_bytes_buffered: 0
cluster.cds_egress_app-mesh_ibumarketadsmatchservice-19816-canary_prod_http_8080.upstream_cx_rx_bytes_total: 2817757
cluster.cds_egress_app-mesh_ibumarketadsmatchservice-19816-canary_prod_http_8080.upstream_cx_total: 23
cluster.cds_egress_app-mesh_ibumarketadsmatchservice-19816-canary_prod_http_8080.upstream_cx_tx_bytes_buffered: 0
cluster.cds_egress_app-mesh_ibumarketadsmatchservice-19816-canary_prod_http_8080.upstream_cx_tx_bytes_total: 13417197
cluster.cds_egress_app-mesh_ibumarketadsmatchservice-19816-canary_prod_http_8080.upstream_flow_control_backed_up_total: 0
cluster.cds_egress_app-mesh_ibumarketadsmatchservice-19816-canary_prod_http_8080.upstream_flow_control_drained_total: 0
cluster.cds_egress_app-mesh_ibumarketadsmatchservice-19816-canary_prod_http_8080.upstream_flow_control_paused_reading_total: 0
cluster.cds_egress_app-mesh_ibumarketadsmatchservice-19816-canary_prod_http_8080.upstream_flow_control_resumed_reading_total: 0
cluster.cds_egress_app-mesh_ibumarketadsmatchservice-19816-canary_prod_http_8080.upstream_internal_redirect_failed_total: 0
cluster.cds_egress_app-mesh_ibumarketadsmatchservice-19816-canary_prod_http_8080.upstream_internal_redirect_succeeded_total: 0
cluster.cds_egress_app-mesh_ibumarketadsmatchservice-19816-canary_prod_http_8080.upstream_rq_200: 5364
cluster.cds_egress_app-mesh_ibumarketadsmatchservice-19816-canary_prod_http_8080.upstream_rq_2xx: 5364
cluster.cds_egress_app-mesh_ibumarketadsmatchservice-19816-canary_prod_http_8080.upstream_rq_active: 0
cluster.cds_egress_app-mesh_ibumarketadsmatchservice-19816-canary_prod_http_8080.upstream_rq_cancelled: 0
cluster.cds_egress_app-mesh_ibumarketadsmatchservice-19816-canary_prod_http_8080.upstream_rq_completed: 5364
cluster.cds_egress_app-mesh_ibumarketadsmatchservice-19816-canary_prod_http_8080.upstream_rq_maintenance_mode: 0
cluster.cds_egress_app-mesh_ibumarketadsmatchservice-19816-canary_prod_http_8080.upstream_rq_max_duration_reached: 0
cluster.cds_egress_app-mesh_ibumarketadsmatchservice-19816-canary_prod_http_8080.upstream_rq_pending_active: 0
cluster.cds_egress_app-mesh_ibumarketadsmatchservice-19816-canary_prod_http_8080.upstream_rq_pending_failure_eject: 0
cluster.cds_egress_app-mesh_ibumarketadsmatchservice-19816-canary_prod_http_8080.upstream_rq_pending_overflow: 0
cluster.cds_egress_app-mesh_ibumarketadsmatchservice-19816-canary_prod_http_8080.upstream_rq_pending_total: 23
cluster.cds_egress_app-mesh_ibumarketadsmatchservice-19816-canary_prod_http_8080.upstream_rq_per_try_idle_timeout: 0
cluster.cds_egress_app-mesh_ibumarketadsmatchservice-19816-canary_prod_http_8080.upstream_rq_per_try_timeout: 0
cluster.cds_egress_app-mesh_ibumarketadsmatchservice-19816-canary_prod_http_8080.upstream_rq_retry: 0
cluster.cds_egress_app-mesh_ibumarketadsmatchservice-19816-canary_prod_http_8080.upstream_rq_retry_backoff_exponential: 0
cluster.cds_egress_app-mesh_ibumarketadsmatchservice-19816-canary_prod_http_8080.upstream_rq_retry_backoff_ratelimited: 0
cluster.cds_egress_app-mesh_ibumarketadsmatchservice-19816-canary_prod_http_8080.upstream_rq_retry_limit_exceeded: 0
cluster.cds_egress_app-mesh_ibumarketadsmatchservice-19816-canary_prod_http_8080.upstream_rq_retry_overflow: 0
cluster.cds_egress_app-mesh_ibumarketadsmatchservice-19816-canary_prod_http_8080.upstream_rq_retry_success: 0
cluster.cds_egress_app-mesh_ibumarketadsmatchservice-19816-canary_prod_http_8080.upstream_rq_rx_reset: 0
cluster.cds_egress_app-mesh_ibumarketadsmatchservice-19816-canary_prod_http_8080.upstream_rq_timeout: 0
cluster.cds_egress_app-mesh_ibumarketadsmatchservice-19816-canary_prod_http_8080.upstream_rq_total: 5364
cluster.cds_egress_app-mesh_ibumarketadsmatchservice-19816-canary_prod_http_8080.upstream_rq_tx_reset: 0
cluster.cds_egress_app-mesh_ibumarketadsmatchservice-19816-canary_prod_http_8080.version: 0
cluster.cds_egress_app-mesh_ibumarketadsmatchservice-19816-primary_prod_http_8080.assignment_stale: 0
cluster.cds_egress_app-mesh_ibumarketadsmatchservice-19816-primary_prod_http_8080.assignment_timeout_received: 0
cluster.cds_egress_app-mesh_ibumarketadsmatchservice-19816-primary_prod_http_8080.bind_errors: 0
cluster.cds_egress_app-mesh_ibumarketadsmatchservice-19816-primary_prod_http_8080.circuit_breakers.default.cx_open: 0
cluster.cds_egress_app-mesh_ibumarketadsmatchservice-19816-primary_prod_http_8080.circuit_breakers.default.cx_pool_open: 0
cluster.cds_egress_app-mesh_ibumarketadsmatchservice-19816-primary_prod_http_8080.circuit_breakers.default.rq_open: 0
cluster.cds_egress_app-mesh_ibumarketadsmatchservice-19816-primary_prod_http_8080.circuit_breakers.default.rq_pending_open: 0
cluster.cds_egress_app-mesh_ibumarketadsmatchservice-19816-primary_prod_http_8080.circuit_breakers.default.rq_retry_open: 0
cluster.cds_egress_app-mesh_ibumarketadsmatchservice-19816-primary_prod_http_8080.circuit_breakers.high.cx_open: 0
cluster.cds_egress_app-mesh_ibumarketadsmatchservice-19816-primary_prod_http_8080.circuit_breakers.high.cx_pool_open: 0
cluster.cds_egress_app-mesh_ibumarketadsmatchservice-19816-primary_prod_http_8080.circuit_breakers.high.rq_open: 0
cluster.cds_egress_app-mesh_ibumarketadsmatchservice-19816-primary_prod_http_8080.circuit_breakers.high.rq_pending_open: 0
cluster.cds_egress_app-mesh_ibumarketadsmatchservice-19816-primary_prod_http_8080.circuit_breakers.high.rq_retry_open: 0
cluster.cds_egress_app-mesh_ibumarketadsmatchservice-19816-primary_prod_http_8080.default.total_match_count: 1
cluster.cds_egress_app-mesh_ibumarketadsmatchservice-19816-primary_prod_http_8080.external.upstream_rq_200: 3229960
cluster.cds_egress_app-mesh_ibumarketadsmatchservice-19816-primary_prod_http_8080.external.upstream_rq_2xx: 3229960
cluster.cds_egress_app-mesh_ibumarketadsmatchservice-19816-primary_prod_http_8080.external.upstream_rq_500: 6
cluster.cds_egress_app-mesh_ibumarketadsmatchservice-19816-primary_prod_http_8080.external.upstream_rq_503: 2922
cluster.cds_egress_app-mesh_ibumarketadsmatchservice-19816-primary_prod_http_8080.external.upstream_rq_504: 118
cluster.cds_egress_app-mesh_ibumarketadsmatchservice-19816-primary_prod_http_8080.external.upstream_rq_5xx: 3046
cluster.cds_egress_app-mesh_ibumarketadsmatchservice-19816-primary_prod_http_8080.external.upstream_rq_completed: 3233006
cluster.cds_egress_app-mesh_ibumarketadsmatchservice-19816-primary_prod_http_8080.http1.dropped_headers_with_underscores: 0
cluster.cds_egress_app-mesh_ibumarketadsmatchservice-19816-primary_prod_http_8080.http1.metadata_not_supported_error: 0
cluster.cds_egress_app-mesh_ibumarketadsmatchservice-19816-primary_prod_http_8080.http1.requests_rejected_with_underscores_in_headers: 0
cluster.cds_egress_app-mesh_ibumarketadsmatchservice-19816-primary_prod_http_8080.http1.response_flood: 0
cluster.cds_egress_app-mesh_ibumarketadsmatchservice-19816-primary_prod_http_8080.internal.upstream_rq_200: 276952
cluster.cds_egress_app-mesh_ibumarketadsmatchservice-19816-primary_prod_http_8080.internal.upstream_rq_2xx: 276952
cluster.cds_egress_app-mesh_ibumarketadsmatchservice-19816-primary_prod_http_8080.internal.upstream_rq_500: 44
cluster.cds_egress_app-mesh_ibumarketadsmatchservice-19816-primary_prod_http_8080.internal.upstream_rq_503: 157
cluster.cds_egress_app-mesh_ibumarketadsmatchservice-19816-primary_prod_http_8080.internal.upstream_rq_504: 11
cluster.cds_egress_app-mesh_ibumarketadsmatchservice-19816-primary_prod_http_8080.internal.upstream_rq_5xx: 212
cluster.cds_egress_app-mesh_ibumarketadsmatchservice-19816-primary_prod_http_8080.internal.upstream_rq_completed: 277164
cluster.cds_egress_app-mesh_ibumarketadsmatchservice-19816-primary_prod_http_8080.lb_healthy_panic: 0
cluster.cds_egress_app-mesh_ibumarketadsmatchservice-19816-primary_prod_http_8080.lb_local_cluster_not_ok: 0
cluster.cds_egress_app-mesh_ibumarketadsmatchservice-19816-primary_prod_http_8080.lb_recalculate_zone_structures: 0
cluster.cds_egress_app-mesh_ibumarketadsmatchservice-19816-primary_prod_http_8080.lb_subsets_active: 0
cluster.cds_egress_app-mesh_ibumarketadsmatchservice-19816-primary_prod_http_8080.lb_subsets_created: 0
cluster.cds_egress_app-mesh_ibumarketadsmatchservice-19816-primary_prod_http_8080.lb_subsets_fallback: 0
cluster.cds_egress_app-mesh_ibumarketadsmatchservice-19816-primary_prod_http_8080.lb_subsets_fallback_panic: 0
cluster.cds_egress_app-mesh_ibumarketadsmatchservice-19816-primary_prod_http_8080.lb_subsets_removed: 0
cluster.cds_egress_app-mesh_ibumarketadsmatchservice-19816-primary_prod_http_8080.lb_subsets_selected: 0
cluster.cds_egress_app-mesh_ibumarketadsmatchservice-19816-primary_prod_http_8080.lb_zone_cluster_too_small: 0
cluster.cds_egress_app-mesh_ibumarketadsmatchservice-19816-primary_prod_http_8080.lb_zone_no_capacity_left: 0
cluster.cds_egress_app-mesh_ibumarketadsmatchservice-19816-primary_prod_http_8080.lb_zone_number_differs: 0
cluster.cds_egress_app-mesh_ibumarketadsmatchservice-19816-primary_prod_http_8080.lb_zone_routing_all_directly: 0
cluster.cds_egress_app-mesh_ibumarketadsmatchservice-19816-primary_prod_http_8080.lb_zone_routing_cross_zone: 0
cluster.cds_egress_app-mesh_ibumarketadsmatchservice-19816-primary_prod_http_8080.lb_zone_routing_sampled: 0
cluster.cds_egress_app-mesh_ibumarketadsmatchservice-19816-primary_prod_http_8080.max_host_weight: 0
cluster.cds_egress_app-mesh_ibumarketadsmatchservice-19816-primary_prod_http_8080.membership_change: 1
cluster.cds_egress_app-mesh_ibumarketadsmatchservice-19816-primary_prod_http_8080.membership_degraded: 0
cluster.cds_egress_app-mesh_ibumarketadsmatchservice-19816-primary_prod_http_8080.membership_excluded: 0
cluster.cds_egress_app-mesh_ibumarketadsmatchservice-19816-primary_prod_http_8080.membership_healthy: 1
cluster.cds_egress_app-mesh_ibumarketadsmatchservice-19816-primary_prod_http_8080.membership_total: 1
cluster.cds_egress_app-mesh_ibumarketadsmatchservice-19816-primary_prod_http_8080.original_dst_host_invalid: 0
cluster.cds_egress_app-mesh_ibumarketadsmatchservice-19816-primary_prod_http_8080.retry.upstream_rq_503: 62
cluster.cds_egress_app-mesh_ibumarketadsmatchservice-19816-primary_prod_http_8080.retry.upstream_rq_5xx: 62
cluster.cds_egress_app-mesh_ibumarketadsmatchservice-19816-primary_prod_http_8080.retry.upstream_rq_completed: 62
cluster.cds_egress_app-mesh_ibumarketadsmatchservice-19816-primary_prod_http_8080.retry_or_shadow_abandoned: 0
cluster.cds_egress_app-mesh_ibumarketadsmatchservice-19816-primary_prod_http_8080.update_attempt: 33917
cluster.cds_egress_app-mesh_ibumarketadsmatchservice-19816-primary_prod_http_8080.update_empty: 0
cluster.cds_egress_app-mesh_ibumarketadsmatchservice-19816-primary_prod_http_8080.update_failure: 0
cluster.cds_egress_app-mesh_ibumarketadsmatchservice-19816-primary_prod_http_8080.update_no_rebuild: 0
cluster.cds_egress_app-mesh_ibumarketadsmatchservice-19816-primary_prod_http_8080.update_success: 33917
cluster.cds_egress_app-mesh_ibumarketadsmatchservice-19816-primary_prod_http_8080.upstream_cx_active: 13
cluster.cds_egress_app-mesh_ibumarketadsmatchservice-19816-primary_prod_http_8080.upstream_cx_close_notify: 0
cluster.cds_egress_app-mesh_ibumarketadsmatchservice-19816-primary_prod_http_8080.upstream_cx_connect_attempts_exceeded: 0
cluster.cds_egress_app-mesh_ibumarketadsmatchservice-19816-primary_prod_http_8080.upstream_cx_connect_fail: 1482
cluster.cds_egress_app-mesh_ibumarketadsmatchservice-19816-primary_prod_http_8080.upstream_cx_connect_timeout: 1482
cluster.cds_egress_app-mesh_ibumarketadsmatchservice-19816-primary_prod_http_8080.upstream_cx_destroy: 2299
cluster.cds_egress_app-mesh_ibumarketadsmatchservice-19816-primary_prod_http_8080.upstream_cx_destroy_local: 2291
cluster.cds_egress_app-mesh_ibumarketadsmatchservice-19816-primary_prod_http_8080.upstream_cx_destroy_local_with_active_rq: 487
cluster.cds_egress_app-mesh_ibumarketadsmatchservice-19816-primary_prod_http_8080.upstream_cx_destroy_remote: 8
cluster.cds_egress_app-mesh_ibumarketadsmatchservice-19816-primary_prod_http_8080.upstream_cx_destroy_remote_with_active_rq: 0
cluster.cds_egress_app-mesh_ibumarketadsmatchservice-19816-primary_prod_http_8080.upstream_cx_destroy_with_active_rq: 487
cluster.cds_egress_app-mesh_ibumarketadsmatchservice-19816-primary_prod_http_8080.upstream_cx_http1_total: 2312
cluster.cds_egress_app-mesh_ibumarketadsmatchservice-19816-primary_prod_http_8080.upstream_cx_http2_total: 0
cluster.cds_egress_app-mesh_ibumarketadsmatchservice-19816-primary_prod_http_8080.upstream_cx_http3_total: 0
cluster.cds_egress_app-mesh_ibumarketadsmatchservice-19816-primary_prod_http_8080.upstream_cx_idle_timeout: 322
cluster.cds_egress_app-mesh_ibumarketadsmatchservice-19816-primary_prod_http_8080.upstream_cx_max_requests: 0
cluster.cds_egress_app-mesh_ibumarketadsmatchservice-19816-primary_prod_http_8080.upstream_cx_none_healthy: 0
cluster.cds_egress_app-mesh_ibumarketadsmatchservice-19816-primary_prod_http_8080.upstream_cx_overflow: 0
cluster.cds_egress_app-mesh_ibumarketadsmatchservice-19816-primary_prod_http_8080.upstream_cx_pool_overflow: 0
cluster.cds_egress_app-mesh_ibumarketadsmatchservice-19816-primary_prod_http_8080.upstream_cx_protocol_error: 0
cluster.cds_egress_app-mesh_ibumarketadsmatchservice-19816-primary_prod_http_8080.upstream_cx_rx_bytes_buffered: 5052
cluster.cds_egress_app-mesh_ibumarketadsmatchservice-19816-primary_prod_http_8080.upstream_cx_rx_bytes_total: 1517682417
cluster.cds_egress_app-mesh_ibumarketadsmatchservice-19816-primary_prod_http_8080.upstream_cx_total: 2312
cluster.cds_egress_app-mesh_ibumarketadsmatchservice-19816-primary_prod_http_8080.upstream_cx_tx_bytes_buffered: 0
cluster.cds_egress_app-mesh_ibumarketadsmatchservice-19816-primary_prod_http_8080.upstream_cx_tx_bytes_total: 8816062321
cluster.cds_egress_app-mesh_ibumarketadsmatchservice-19816-primary_prod_http_8080.upstream_flow_control_backed_up_total: 0
cluster.cds_egress_app-mesh_ibumarketadsmatchservice-19816-primary_prod_http_8080.upstream_flow_control_drained_total: 0
cluster.cds_egress_app-mesh_ibumarketadsmatchservice-19816-primary_prod_http_8080.upstream_flow_control_paused_reading_total: 0
cluster.cds_egress_app-mesh_ibumarketadsmatchservice-19816-primary_prod_http_8080.upstream_flow_control_resumed_reading_total: 0
cluster.cds_egress_app-mesh_ibumarketadsmatchservice-19816-primary_prod_http_8080.upstream_internal_redirect_failed_total: 0
cluster.cds_egress_app-mesh_ibumarketadsmatchservice-19816-primary_prod_http_8080.upstream_internal_redirect_succeeded_total: 0
cluster.cds_egress_app-mesh_ibumarketadsmatchservice-19816-primary_prod_http_8080.upstream_rq_200: 3506912
cluster.cds_egress_app-mesh_ibumarketadsmatchservice-19816-primary_prod_http_8080.upstream_rq_2xx: 3506912
cluster.cds_egress_app-mesh_ibumarketadsmatchservice-19816-primary_prod_http_8080.upstream_rq_500: 50
cluster.cds_egress_app-mesh_ibumarketadsmatchservice-19816-primary_prod_http_8080.upstream_rq_503: 3079
cluster.cds_egress_app-mesh_ibumarketadsmatchservice-19816-primary_prod_http_8080.upstream_rq_504: 129
cluster.cds_egress_app-mesh_ibumarketadsmatchservice-19816-primary_prod_http_8080.upstream_rq_5xx: 3258
cluster.cds_egress_app-mesh_ibumarketadsmatchservice-19816-primary_prod_http_8080.upstream_rq_active: 0
cluster.cds_egress_app-mesh_ibumarketadsmatchservice-19816-primary_prod_http_8080.upstream_rq_cancelled: 0
cluster.cds_egress_app-mesh_ibumarketadsmatchservice-19816-primary_prod_http_8080.upstream_rq_completed: 3510170
cluster.cds_egress_app-mesh_ibumarketadsmatchservice-19816-primary_prod_http_8080.upstream_rq_maintenance_mode: 0
cluster.cds_egress_app-mesh_ibumarketadsmatchservice-19816-primary_prod_http_8080.upstream_rq_max_duration_reached: 0
cluster.cds_egress_app-mesh_ibumarketadsmatchservice-19816-primary_prod_http_8080.upstream_rq_pending_active: 0
cluster.cds_egress_app-mesh_ibumarketadsmatchservice-19816-primary_prod_http_8080.upstream_rq_pending_failure_eject: 6075
cluster.cds_egress_app-mesh_ibumarketadsmatchservice-19816-primary_prod_http_8080.upstream_rq_pending_overflow: 0
cluster.cds_egress_app-mesh_ibumarketadsmatchservice-19816-primary_prod_http_8080.upstream_rq_pending_total: 6908
cluster.cds_egress_app-mesh_ibumarketadsmatchservice-19816-primary_prod_http_8080.upstream_rq_per_try_idle_timeout: 0
cluster.cds_egress_app-mesh_ibumarketadsmatchservice-19816-primary_prod_http_8080.upstream_rq_per_try_timeout: 425
cluster.cds_egress_app-mesh_ibumarketadsmatchservice-19816-primary_prod_http_8080.upstream_rq_retry: 3399
cluster.cds_egress_app-mesh_ibumarketadsmatchservice-19816-primary_prod_http_8080.upstream_rq_retry_backoff_exponential: 3399
cluster.cds_egress_app-mesh_ibumarketadsmatchservice-19816-primary_prod_http_8080.upstream_rq_retry_backoff_ratelimited: 0
cluster.cds_egress_app-mesh_ibumarketadsmatchservice-19816-primary_prod_http_8080.upstream_rq_retry_limit_exceeded: 3208
cluster.cds_egress_app-mesh_ibumarketadsmatchservice-19816-primary_prod_http_8080.upstream_rq_retry_overflow: 0
cluster.cds_egress_app-mesh_ibumarketadsmatchservice-19816-primary_prod_http_8080.upstream_rq_retry_success: 191
cluster.cds_egress_app-mesh_ibumarketadsmatchservice-19816-primary_prod_http_8080.upstream_rq_rx_reset: 0
cluster.cds_egress_app-mesh_ibumarketadsmatchservice-19816-primary_prod_http_8080.upstream_rq_timeout: 0
cluster.cds_egress_app-mesh_ibumarketadsmatchservice-19816-primary_prod_http_8080.upstream_rq_total: 3507494
cluster.cds_egress_app-mesh_ibumarketadsmatchservice-19816-primary_prod_http_8080.upstream_rq_tx_reset: 0
cluster.cds_egress_app-mesh_ibumarketadsmatchservice-19816-primary_prod_http_8080.version: 0
cluster.cds_egress_app-mesh_ibuplatformaffiliateapi-14524-canary_prod_http_8080.assignment_stale: 0
cluster.cds_egress_app-mesh_ibuplatformaffiliateapi-14524-canary_prod_http_8080.assignment_timeout_received: 0
cluster.cds_egress_app-mesh_ibuplatformaffiliateapi-14524-canary_prod_http_8080.bind_errors: 0
cluster.cds_egress_app-mesh_ibuplatformaffiliateapi-14524-canary_prod_http_8080.circuit_breakers.default.cx_open: 0
cluster.cds_egress_app-mesh_ibuplatformaffiliateapi-14524-canary_prod_http_8080.circuit_breakers.default.cx_pool_open: 0
cluster.cds_egress_app-mesh_ibuplatformaffiliateapi-14524-canary_prod_http_8080.circuit_breakers.default.rq_open: 0
cluster.cds_egress_app-mesh_ibuplatformaffiliateapi-14524-canary_prod_http_8080.circuit_breakers.default.rq_pending_open: 0
cluster.cds_egress_app-mesh_ibuplatformaffiliateapi-14524-canary_prod_http_8080.circuit_breakers.default.rq_retry_open: 0
cluster.cds_egress_app-mesh_ibuplatformaffiliateapi-14524-canary_prod_http_8080.circuit_breakers.high.cx_open: 0
cluster.cds_egress_app-mesh_ibuplatformaffiliateapi-14524-canary_prod_http_8080.circuit_breakers.high.cx_pool_open: 0
cluster.cds_egress_app-mesh_ibuplatformaffiliateapi-14524-canary_prod_http_8080.circuit_breakers.high.rq_open: 0
cluster.cds_egress_app-mesh_ibuplatformaffiliateapi-14524-canary_prod_http_8080.circuit_breakers.high.rq_pending_open: 0
cluster.cds_egress_app-mesh_ibuplatformaffiliateapi-14524-canary_prod_http_8080.circuit_breakers.high.rq_retry_open: 0
cluster.cds_egress_app-mesh_ibuplatformaffiliateapi-14524-canary_prod_http_8080.default.total_match_count: 1
cluster.cds_egress_app-mesh_ibuplatformaffiliateapi-14524-canary_prod_http_8080.lb_healthy_panic: 0
cluster.cds_egress_app-mesh_ibuplatformaffiliateapi-14524-canary_prod_http_8080.lb_local_cluster_not_ok: 0
cluster.cds_egress_app-mesh_ibuplatformaffiliateapi-14524-canary_prod_http_8080.lb_recalculate_zone_structures: 0
cluster.cds_egress_app-mesh_ibuplatformaffiliateapi-14524-canary_prod_http_8080.lb_subsets_active: 0
cluster.cds_egress_app-mesh_ibuplatformaffiliateapi-14524-canary_prod_http_8080.lb_subsets_created: 0
cluster.cds_egress_app-mesh_ibuplatformaffiliateapi-14524-canary_prod_http_8080.lb_subsets_fallback: 0
cluster.cds_egress_app-mesh_ibuplatformaffiliateapi-14524-canary_prod_http_8080.lb_subsets_fallback_panic: 0
cluster.cds_egress_app-mesh_ibuplatformaffiliateapi-14524-canary_prod_http_8080.lb_subsets_removed: 0
cluster.cds_egress_app-mesh_ibuplatformaffiliateapi-14524-canary_prod_http_8080.lb_subsets_selected: 0
cluster.cds_egress_app-mesh_ibuplatformaffiliateapi-14524-canary_prod_http_8080.lb_zone_cluster_too_small: 0
cluster.cds_egress_app-mesh_ibuplatformaffiliateapi-14524-canary_prod_http_8080.lb_zone_no_capacity_left: 0
cluster.cds_egress_app-mesh_ibuplatformaffiliateapi-14524-canary_prod_http_8080.lb_zone_number_differs: 0
cluster.cds_egress_app-mesh_ibuplatformaffiliateapi-14524-canary_prod_http_8080.lb_zone_routing_all_directly: 0
cluster.cds_egress_app-mesh_ibuplatformaffiliateapi-14524-canary_prod_http_8080.lb_zone_routing_cross_zone: 0
cluster.cds_egress_app-mesh_ibuplatformaffiliateapi-14524-canary_prod_http_8080.lb_zone_routing_sampled: 0
cluster.cds_egress_app-mesh_ibuplatformaffiliateapi-14524-canary_prod_http_8080.max_host_weight: 0
cluster.cds_egress_app-mesh_ibuplatformaffiliateapi-14524-canary_prod_http_8080.membership_change: 1
cluster.cds_egress_app-mesh_ibuplatformaffiliateapi-14524-canary_prod_http_8080.membership_degraded: 0
cluster.cds_egress_app-mesh_ibuplatformaffiliateapi-14524-canary_prod_http_8080.membership_excluded: 0
cluster.cds_egress_app-mesh_ibuplatformaffiliateapi-14524-canary_prod_http_8080.membership_healthy: 1
cluster.cds_egress_app-mesh_ibuplatformaffiliateapi-14524-canary_prod_http_8080.membership_total: 1
cluster.cds_egress_app-mesh_ibuplatformaffiliateapi-14524-canary_prod_http_8080.original_dst_host_invalid: 0
cluster.cds_egress_app-mesh_ibuplatformaffiliateapi-14524-canary_prod_http_8080.retry_or_shadow_abandoned: 0
cluster.cds_egress_app-mesh_ibuplatformaffiliateapi-14524-canary_prod_http_8080.update_attempt: 33917
cluster.cds_egress_app-mesh_ibuplatformaffiliateapi-14524-canary_prod_http_8080.update_empty: 0
cluster.cds_egress_app-mesh_ibuplatformaffiliateapi-14524-canary_prod_http_8080.update_failure: 0
cluster.cds_egress_app-mesh_ibuplatformaffiliateapi-14524-canary_prod_http_8080.update_no_rebuild: 0
cluster.cds_egress_app-mesh_ibuplatformaffiliateapi-14524-canary_prod_http_8080.update_success: 33917
cluster.cds_egress_app-mesh_ibuplatformaffiliateapi-14524-canary_prod_http_8080.upstream_cx_active: 0
cluster.cds_egress_app-mesh_ibuplatformaffiliateapi-14524-canary_prod_http_8080.upstream_cx_close_notify: 0
cluster.cds_egress_app-mesh_ibuplatformaffiliateapi-14524-canary_prod_http_8080.upstream_cx_connect_attempts_exceeded: 0
cluster.cds_egress_app-mesh_ibuplatformaffiliateapi-14524-canary_prod_http_8080.upstream_cx_connect_fail: 0
cluster.cds_egress_app-mesh_ibuplatformaffiliateapi-14524-canary_prod_http_8080.upstream_cx_connect_timeout: 0
cluster.cds_egress_app-mesh_ibuplatformaffiliateapi-14524-canary_prod_http_8080.upstream_cx_destroy: 0
cluster.cds_egress_app-mesh_ibuplatformaffiliateapi-14524-canary_prod_http_8080.upstream_cx_destroy_local: 0
cluster.cds_egress_app-mesh_ibuplatformaffiliateapi-14524-canary_prod_http_8080.upstream_cx_destroy_local_with_active_rq: 0
cluster.cds_egress_app-mesh_ibuplatformaffiliateapi-14524-canary_prod_http_8080.upstream_cx_destroy_remote: 0
cluster.cds_egress_app-mesh_ibuplatformaffiliateapi-14524-canary_prod_http_8080.upstream_cx_destroy_remote_with_active_rq: 0
cluster.cds_egress_app-mesh_ibuplatformaffiliateapi-14524-canary_prod_http_8080.upstream_cx_destroy_with_active_rq: 0
cluster.cds_egress_app-mesh_ibuplatformaffiliateapi-14524-canary_prod_http_8080.upstream_cx_http1_total: 0
cluster.cds_egress_app-mesh_ibuplatformaffiliateapi-14524-canary_prod_http_8080.upstream_cx_http2_total: 0
cluster.cds_egress_app-mesh_ibuplatformaffiliateapi-14524-canary_prod_http_8080.upstream_cx_http3_total: 0
cluster.cds_egress_app-mesh_ibuplatformaffiliateapi-14524-canary_prod_http_8080.upstream_cx_idle_timeout: 0
cluster.cds_egress_app-mesh_ibuplatformaffiliateapi-14524-canary_prod_http_8080.upstream_cx_max_requests: 0
cluster.cds_egress_app-mesh_ibuplatformaffiliateapi-14524-canary_prod_http_8080.upstream_cx_none_healthy: 0
cluster.cds_egress_app-mesh_ibuplatformaffiliateapi-14524-canary_prod_http_8080.upstream_cx_overflow: 0
cluster.cds_egress_app-mesh_ibuplatformaffiliateapi-14524-canary_prod_http_8080.upstream_cx_pool_overflow: 0
cluster.cds_egress_app-mesh_ibuplatformaffiliateapi-14524-canary_prod_http_8080.upstream_cx_protocol_error: 0
cluster.cds_egress_app-mesh_ibuplatformaffiliateapi-14524-canary_prod_http_8080.upstream_cx_rx_bytes_buffered: 0
cluster.cds_egress_app-mesh_ibuplatformaffiliateapi-14524-canary_prod_http_8080.upstream_cx_rx_bytes_total: 0
cluster.cds_egress_app-mesh_ibuplatformaffiliateapi-14524-canary_prod_http_8080.upstream_cx_total: 0
cluster.cds_egress_app-mesh_ibuplatformaffiliateapi-14524-canary_prod_http_8080.upstream_cx_tx_bytes_buffered: 0
cluster.cds_egress_app-mesh_ibuplatformaffiliateapi-14524-canary_prod_http_8080.upstream_cx_tx_bytes_total: 0
cluster.cds_egress_app-mesh_ibuplatformaffiliateapi-14524-canary_prod_http_8080.upstream_flow_control_backed_up_total: 0
cluster.cds_egress_app-mesh_ibuplatformaffiliateapi-14524-canary_prod_http_8080.upstream_flow_control_drained_total: 0
cluster.cds_egress_app-mesh_ibuplatformaffiliateapi-14524-canary_prod_http_8080.upstream_flow_control_paused_reading_total: 0
cluster.cds_egress_app-mesh_ibuplatformaffiliateapi-14524-canary_prod_http_8080.upstream_flow_control_resumed_reading_total: 0
cluster.cds_egress_app-mesh_ibuplatformaffiliateapi-14524-canary_prod_http_8080.upstream_internal_redirect_failed_total: 0
cluster.cds_egress_app-mesh_ibuplatformaffiliateapi-14524-canary_prod_http_8080.upstream_internal_redirect_succeeded_total: 0
cluster.cds_egress_app-mesh_ibuplatformaffiliateapi-14524-canary_prod_http_8080.upstream_rq_active: 0
cluster.cds_egress_app-mesh_ibuplatformaffiliateapi-14524-canary_prod_http_8080.upstream_rq_cancelled: 0
cluster.cds_egress_app-mesh_ibuplatformaffiliateapi-14524-canary_prod_http_8080.upstream_rq_completed: 0
cluster.cds_egress_app-mesh_ibuplatformaffiliateapi-14524-canary_prod_http_8080.upstream_rq_maintenance_mode: 0
cluster.cds_egress_app-mesh_ibuplatformaffiliateapi-14524-canary_prod_http_8080.upstream_rq_max_duration_reached: 0
cluster.cds_egress_app-mesh_ibuplatformaffiliateapi-14524-canary_prod_http_8080.upstream_rq_pending_active: 0
cluster.cds_egress_app-mesh_ibuplatformaffiliateapi-14524-canary_prod_http_8080.upstream_rq_pending_failure_eject: 0
cluster.cds_egress_app-mesh_ibuplatformaffiliateapi-14524-canary_prod_http_8080.upstream_rq_pending_overflow: 0
cluster.cds_egress_app-mesh_ibuplatformaffiliateapi-14524-canary_prod_http_8080.upstream_rq_pending_total: 0
cluster.cds_egress_app-mesh_ibuplatformaffiliateapi-14524-canary_prod_http_8080.upstream_rq_per_try_idle_timeout: 0
cluster.cds_egress_app-mesh_ibuplatformaffiliateapi-14524-canary_prod_http_8080.upstream_rq_per_try_timeout: 0
cluster.cds_egress_app-mesh_ibuplatformaffiliateapi-14524-canary_prod_http_8080.upstream_rq_retry: 0
cluster.cds_egress_app-mesh_ibuplatformaffiliateapi-14524-canary_prod_http_8080.upstream_rq_retry_backoff_exponential: 0
cluster.cds_egress_app-mesh_ibuplatformaffiliateapi-14524-canary_prod_http_8080.upstream_rq_retry_backoff_ratelimited: 0
cluster.cds_egress_app-mesh_ibuplatformaffiliateapi-14524-canary_prod_http_8080.upstream_rq_retry_limit_exceeded: 0
cluster.cds_egress_app-mesh_ibuplatformaffiliateapi-14524-canary_prod_http_8080.upstream_rq_retry_overflow: 0
cluster.cds_egress_app-mesh_ibuplatformaffiliateapi-14524-canary_prod_http_8080.upstream_rq_retry_success: 0
cluster.cds_egress_app-mesh_ibuplatformaffiliateapi-14524-canary_prod_http_8080.upstream_rq_rx_reset: 0
cluster.cds_egress_app-mesh_ibuplatformaffiliateapi-14524-canary_prod_http_8080.upstream_rq_timeout: 0
cluster.cds_egress_app-mesh_ibuplatformaffiliateapi-14524-canary_prod_http_8080.upstream_rq_total: 0
cluster.cds_egress_app-mesh_ibuplatformaffiliateapi-14524-canary_prod_http_8080.upstream_rq_tx_reset: 0
cluster.cds_egress_app-mesh_ibuplatformaffiliateapi-14524-canary_prod_http_8080.version: 0
cluster.cds_egress_app-mesh_ibuplatformaffiliateapi-14524-primary_prod_http_8080.assignment_stale: 0
cluster.cds_egress_app-mesh_ibuplatformaffiliateapi-14524-primary_prod_http_8080.assignment_timeout_received: 0
cluster.cds_egress_app-mesh_ibuplatformaffiliateapi-14524-primary_prod_http_8080.bind_errors: 0
cluster.cds_egress_app-mesh_ibuplatformaffiliateapi-14524-primary_prod_http_8080.circuit_breakers.default.cx_open: 0
cluster.cds_egress_app-mesh_ibuplatformaffiliateapi-14524-primary_prod_http_8080.circuit_breakers.default.cx_pool_open: 0
cluster.cds_egress_app-mesh_ibuplatformaffiliateapi-14524-primary_prod_http_8080.circuit_breakers.default.rq_open: 0
cluster.cds_egress_app-mesh_ibuplatformaffiliateapi-14524-primary_prod_http_8080.circuit_breakers.default.rq_pending_open: 0
cluster.cds_egress_app-mesh_ibuplatformaffiliateapi-14524-primary_prod_http_8080.circuit_breakers.default.rq_retry_open: 0
cluster.cds_egress_app-mesh_ibuplatformaffiliateapi-14524-primary_prod_http_8080.circuit_breakers.high.cx_open: 0
cluster.cds_egress_app-mesh_ibuplatformaffiliateapi-14524-primary_prod_http_8080.circuit_breakers.high.cx_pool_open: 0
cluster.cds_egress_app-mesh_ibuplatformaffiliateapi-14524-primary_prod_http_8080.circuit_breakers.high.rq_open: 0
cluster.cds_egress_app-mesh_ibuplatformaffiliateapi-14524-primary_prod_http_8080.circuit_breakers.high.rq_pending_open: 0
cluster.cds_egress_app-mesh_ibuplatformaffiliateapi-14524-primary_prod_http_8080.circuit_breakers.high.rq_retry_open: 0
cluster.cds_egress_app-mesh_ibuplatformaffiliateapi-14524-primary_prod_http_8080.default.total_match_count: 1
cluster.cds_egress_app-mesh_ibuplatformaffiliateapi-14524-primary_prod_http_8080.external.upstream_rq_200: 836771
cluster.cds_egress_app-mesh_ibuplatformaffiliateapi-14524-primary_prod_http_8080.external.upstream_rq_2xx: 836771
cluster.cds_egress_app-mesh_ibuplatformaffiliateapi-14524-primary_prod_http_8080.external.upstream_rq_500: 43
cluster.cds_egress_app-mesh_ibuplatformaffiliateapi-14524-primary_prod_http_8080.external.upstream_rq_5xx: 43
cluster.cds_egress_app-mesh_ibuplatformaffiliateapi-14524-primary_prod_http_8080.external.upstream_rq_completed: 836814
cluster.cds_egress_app-mesh_ibuplatformaffiliateapi-14524-primary_prod_http_8080.http1.dropped_headers_with_underscores: 0
cluster.cds_egress_app-mesh_ibuplatformaffiliateapi-14524-primary_prod_http_8080.http1.metadata_not_supported_error: 0
cluster.cds_egress_app-mesh_ibuplatformaffiliateapi-14524-primary_prod_http_8080.http1.requests_rejected_with_underscores_in_headers: 0
cluster.cds_egress_app-mesh_ibuplatformaffiliateapi-14524-primary_prod_http_8080.http1.response_flood: 0
cluster.cds_egress_app-mesh_ibuplatformaffiliateapi-14524-primary_prod_http_8080.internal.upstream_rq_200: 24
cluster.cds_egress_app-mesh_ibuplatformaffiliateapi-14524-primary_prod_http_8080.internal.upstream_rq_2xx: 24
cluster.cds_egress_app-mesh_ibuplatformaffiliateapi-14524-primary_prod_http_8080.internal.upstream_rq_completed: 24
cluster.cds_egress_app-mesh_ibuplatformaffiliateapi-14524-primary_prod_http_8080.lb_healthy_panic: 0
cluster.cds_egress_app-mesh_ibuplatformaffiliateapi-14524-primary_prod_http_8080.lb_local_cluster_not_ok: 0
cluster.cds_egress_app-mesh_ibuplatformaffiliateapi-14524-primary_prod_http_8080.lb_recalculate_zone_structures: 0
cluster.cds_egress_app-mesh_ibuplatformaffiliateapi-14524-primary_prod_http_8080.lb_subsets_active: 0
cluster.cds_egress_app-mesh_ibuplatformaffiliateapi-14524-primary_prod_http_8080.lb_subsets_created: 0
cluster.cds_egress_app-mesh_ibuplatformaffiliateapi-14524-primary_prod_http_8080.lb_subsets_fallback: 0
cluster.cds_egress_app-mesh_ibuplatformaffiliateapi-14524-primary_prod_http_8080.lb_subsets_fallback_panic: 0
cluster.cds_egress_app-mesh_ibuplatformaffiliateapi-14524-primary_prod_http_8080.lb_subsets_removed: 0
cluster.cds_egress_app-mesh_ibuplatformaffiliateapi-14524-primary_prod_http_8080.lb_subsets_selected: 0
cluster.cds_egress_app-mesh_ibuplatformaffiliateapi-14524-primary_prod_http_8080.lb_zone_cluster_too_small: 0
cluster.cds_egress_app-mesh_ibuplatformaffiliateapi-14524-primary_prod_http_8080.lb_zone_no_capacity_left: 0
cluster.cds_egress_app-mesh_ibuplatformaffiliateapi-14524-primary_prod_http_8080.lb_zone_number_differs: 0
cluster.cds_egress_app-mesh_ibuplatformaffiliateapi-14524-primary_prod_http_8080.lb_zone_routing_all_directly: 0
cluster.cds_egress_app-mesh_ibuplatformaffiliateapi-14524-primary_prod_http_8080.lb_zone_routing_cross_zone: 0
cluster.cds_egress_app-mesh_ibuplatformaffiliateapi-14524-primary_prod_http_8080.lb_zone_routing_sampled: 0
cluster.cds_egress_app-mesh_ibuplatformaffiliateapi-14524-primary_prod_http_8080.max_host_weight: 0
cluster.cds_egress_app-mesh_ibuplatformaffiliateapi-14524-primary_prod_http_8080.membership_change: 1
cluster.cds_egress_app-mesh_ibuplatformaffiliateapi-14524-primary_prod_http_8080.membership_degraded: 0
cluster.cds_egress_app-mesh_ibuplatformaffiliateapi-14524-primary_prod_http_8080.membership_excluded: 0
cluster.cds_egress_app-mesh_ibuplatformaffiliateapi-14524-primary_prod_http_8080.membership_healthy: 1
cluster.cds_egress_app-mesh_ibuplatformaffiliateapi-14524-primary_prod_http_8080.membership_total: 1
cluster.cds_egress_app-mesh_ibuplatformaffiliateapi-14524-primary_prod_http_8080.original_dst_host_invalid: 0
cluster.cds_egress_app-mesh_ibuplatformaffiliateapi-14524-primary_prod_http_8080.retry_or_shadow_abandoned: 0
cluster.cds_egress_app-mesh_ibuplatformaffiliateapi-14524-primary_prod_http_8080.update_attempt: 33917
cluster.cds_egress_app-mesh_ibuplatformaffiliateapi-14524-primary_prod_http_8080.update_empty: 0
cluster.cds_egress_app-mesh_ibuplatformaffiliateapi-14524-primary_prod_http_8080.update_failure: 0
cluster.cds_egress_app-mesh_ibuplatformaffiliateapi-14524-primary_prod_http_8080.update_no_rebuild: 0
cluster.cds_egress_app-mesh_ibuplatformaffiliateapi-14524-primary_prod_http_8080.update_success: 33917
cluster.cds_egress_app-mesh_ibuplatformaffiliateapi-14524-primary_prod_http_8080.upstream_cx_active: 11
cluster.cds_egress_app-mesh_ibuplatformaffiliateapi-14524-primary_prod_http_8080.upstream_cx_close_notify: 0
cluster.cds_egress_app-mesh_ibuplatformaffiliateapi-14524-primary_prod_http_8080.upstream_cx_connect_attempts_exceeded: 0
cluster.cds_egress_app-mesh_ibuplatformaffiliateapi-14524-primary_prod_http_8080.upstream_cx_connect_fail: 0
cluster.cds_egress_app-mesh_ibuplatformaffiliateapi-14524-primary_prod_http_8080.upstream_cx_connect_timeout: 0
cluster.cds_egress_app-mesh_ibuplatformaffiliateapi-14524-primary_prod_http_8080.upstream_cx_destroy: 26
cluster.cds_egress_app-mesh_ibuplatformaffiliateapi-14524-primary_prod_http_8080.upstream_cx_destroy_local: 23
cluster.cds_egress_app-mesh_ibuplatformaffiliateapi-14524-primary_prod_http_8080.upstream_cx_destroy_local_with_active_rq: 0
cluster.cds_egress_app-mesh_ibuplatformaffiliateapi-14524-primary_prod_http_8080.upstream_cx_destroy_remote: 3
cluster.cds_egress_app-mesh_ibuplatformaffiliateapi-14524-primary_prod_http_8080.upstream_cx_destroy_remote_with_active_rq: 0
cluster.cds_egress_app-mesh_ibuplatformaffiliateapi-14524-primary_prod_http_8080.upstream_cx_destroy_with_active_rq: 0
cluster.cds_egress_app-mesh_ibuplatformaffiliateapi-14524-primary_prod_http_8080.upstream_cx_http1_total: 37
cluster.cds_egress_app-mesh_ibuplatformaffiliateapi-14524-primary_prod_http_8080.upstream_cx_http2_total: 0
cluster.cds_egress_app-mesh_ibuplatformaffiliateapi-14524-primary_prod_http_8080.upstream_cx_http3_total: 0
cluster.cds_egress_app-mesh_ibuplatformaffiliateapi-14524-primary_prod_http_8080.upstream_cx_idle_timeout: 23
cluster.cds_egress_app-mesh_ibuplatformaffiliateapi-14524-primary_prod_http_8080.upstream_cx_max_requests: 0
cluster.cds_egress_app-mesh_ibuplatformaffiliateapi-14524-primary_prod_http_8080.upstream_cx_none_healthy: 0
cluster.cds_egress_app-mesh_ibuplatformaffiliateapi-14524-primary_prod_http_8080.upstream_cx_overflow: 0
cluster.cds_egress_app-mesh_ibuplatformaffiliateapi-14524-primary_prod_http_8080.upstream_cx_pool_overflow: 0
cluster.cds_egress_app-mesh_ibuplatformaffiliateapi-14524-primary_prod_http_8080.upstream_cx_protocol_error: 0
cluster.cds_egress_app-mesh_ibuplatformaffiliateapi-14524-primary_prod_http_8080.upstream_cx_rx_bytes_buffered: 1965
cluster.cds_egress_app-mesh_ibuplatformaffiliateapi-14524-primary_prod_http_8080.upstream_cx_rx_bytes_total: 388923067
cluster.cds_egress_app-mesh_ibuplatformaffiliateapi-14524-primary_prod_http_8080.upstream_cx_total: 37
cluster.cds_egress_app-mesh_ibuplatformaffiliateapi-14524-primary_prod_http_8080.upstream_cx_tx_bytes_buffered: 0
cluster.cds_egress_app-mesh_ibuplatformaffiliateapi-14524-primary_prod_http_8080.upstream_cx_tx_bytes_total: 2692902155
cluster.cds_egress_app-mesh_ibuplatformaffiliateapi-14524-primary_prod_http_8080.upstream_flow_control_backed_up_total: 0
cluster.cds_egress_app-mesh_ibuplatformaffiliateapi-14524-primary_prod_http_8080.upstream_flow_control_drained_total: 0
cluster.cds_egress_app-mesh_ibuplatformaffiliateapi-14524-primary_prod_http_8080.upstream_flow_control_paused_reading_total: 0
cluster.cds_egress_app-mesh_ibuplatformaffiliateapi-14524-primary_prod_http_8080.upstream_flow_control_resumed_reading_total: 0
cluster.cds_egress_app-mesh_ibuplatformaffiliateapi-14524-primary_prod_http_8080.upstream_internal_redirect_failed_total: 0
cluster.cds_egress_app-mesh_ibuplatformaffiliateapi-14524-primary_prod_http_8080.upstream_internal_redirect_succeeded_total: 0
cluster.cds_egress_app-mesh_ibuplatformaffiliateapi-14524-primary_prod_http_8080.upstream_rq_200: 836795
cluster.cds_egress_app-mesh_ibuplatformaffiliateapi-14524-primary_prod_http_8080.upstream_rq_2xx: 836795
cluster.cds_egress_app-mesh_ibuplatformaffiliateapi-14524-primary_prod_http_8080.upstream_rq_500: 43
cluster.cds_egress_app-mesh_ibuplatformaffiliateapi-14524-primary_prod_http_8080.upstream_rq_5xx: 43
cluster.cds_egress_app-mesh_ibuplatformaffiliateapi-14524-primary_prod_http_8080.upstream_rq_active: 0
cluster.cds_egress_app-mesh_ibuplatformaffiliateapi-14524-primary_prod_http_8080.upstream_rq_cancelled: 0
cluster.cds_egress_app-mesh_ibuplatformaffiliateapi-14524-primary_prod_http_8080.upstream_rq_completed: 836838
cluster.cds_egress_app-mesh_ibuplatformaffiliateapi-14524-primary_prod_http_8080.upstream_rq_maintenance_mode: 0
cluster.cds_egress_app-mesh_ibuplatformaffiliateapi-14524-primary_prod_http_8080.upstream_rq_max_duration_reached: 0
cluster.cds_egress_app-mesh_ibuplatformaffiliateapi-14524-primary_prod_http_8080.upstream_rq_pending_active: 0
cluster.cds_egress_app-mesh_ibuplatformaffiliateapi-14524-primary_prod_http_8080.upstream_rq_pending_failure_eject: 0
cluster.cds_egress_app-mesh_ibuplatformaffiliateapi-14524-primary_prod_http_8080.upstream_rq_pending_overflow: 0
cluster.cds_egress_app-mesh_ibuplatformaffiliateapi-14524-primary_prod_http_8080.upstream_rq_pending_total: 37
cluster.cds_egress_app-mesh_ibuplatformaffiliateapi-14524-primary_prod_http_8080.upstream_rq_per_try_idle_timeout: 0
cluster.cds_egress_app-mesh_ibuplatformaffiliateapi-14524-primary_prod_http_8080.upstream_rq_per_try_timeout: 0
cluster.cds_egress_app-mesh_ibuplatformaffiliateapi-14524-primary_prod_http_8080.upstream_rq_retry: 0
cluster.cds_egress_app-mesh_ibuplatformaffiliateapi-14524-primary_prod_http_8080.upstream_rq_retry_backoff_exponential: 0
cluster.cds_egress_app-mesh_ibuplatformaffiliateapi-14524-primary_prod_http_8080.upstream_rq_retry_backoff_ratelimited: 0
cluster.cds_egress_app-mesh_ibuplatformaffiliateapi-14524-primary_prod_http_8080.upstream_rq_retry_limit_exceeded: 0
cluster.cds_egress_app-mesh_ibuplatformaffiliateapi-14524-primary_prod_http_8080.upstream_rq_retry_overflow: 0
cluster.cds_egress_app-mesh_ibuplatformaffiliateapi-14524-primary_prod_http_8080.upstream_rq_retry_success: 0
cluster.cds_egress_app-mesh_ibuplatformaffiliateapi-14524-primary_prod_http_8080.upstream_rq_rx_reset: 0
cluster.cds_egress_app-mesh_ibuplatformaffiliateapi-14524-primary_prod_http_8080.upstream_rq_timeout: 0
cluster.cds_egress_app-mesh_ibuplatformaffiliateapi-14524-primary_prod_http_8080.upstream_rq_total: 836838
cluster.cds_egress_app-mesh_ibuplatformaffiliateapi-14524-primary_prod_http_8080.upstream_rq_tx_reset: 0
cluster.cds_egress_app-mesh_ibuplatformaffiliateapi-14524-primary_prod_http_8080.version: 0
cluster.cds_ingress_app-mesh_appmesh-gateway_prod_self_redirect_http_15001.assignment_stale: 0
cluster.cds_ingress_app-mesh_appmesh-gateway_prod_self_redirect_http_15001.assignment_timeout_received: 0
cluster.cds_ingress_app-mesh_appmesh-gateway_prod_self_redirect_http_15001.bind_errors: 0
cluster.cds_ingress_app-mesh_appmesh-gateway_prod_self_redirect_http_15001.circuit_breakers.default.cx_open: 0
cluster.cds_ingress_app-mesh_appmesh-gateway_prod_self_redirect_http_15001.circuit_breakers.default.cx_pool_open: 0
cluster.cds_ingress_app-mesh_appmesh-gateway_prod_self_redirect_http_15001.circuit_breakers.default.rq_open: 0
cluster.cds_ingress_app-mesh_appmesh-gateway_prod_self_redirect_http_15001.circuit_breakers.default.rq_pending_open: 0
cluster.cds_ingress_app-mesh_appmesh-gateway_prod_self_redirect_http_15001.circuit_breakers.default.rq_retry_open: 0
cluster.cds_ingress_app-mesh_appmesh-gateway_prod_self_redirect_http_15001.circuit_breakers.high.cx_open: 0
cluster.cds_ingress_app-mesh_appmesh-gateway_prod_self_redirect_http_15001.circuit_breakers.high.cx_pool_open: 0
cluster.cds_ingress_app-mesh_appmesh-gateway_prod_self_redirect_http_15001.circuit_breakers.high.rq_open: 0
cluster.cds_ingress_app-mesh_appmesh-gateway_prod_self_redirect_http_15001.circuit_breakers.high.rq_pending_open: 0
cluster.cds_ingress_app-mesh_appmesh-gateway_prod_self_redirect_http_15001.circuit_breakers.high.rq_retry_open: 0
cluster.cds_ingress_app-mesh_appmesh-gateway_prod_self_redirect_http_15001.default.total_match_count: 1
cluster.cds_ingress_app-mesh_appmesh-gateway_prod_self_redirect_http_15001.external.upstream_rq_200: 4071688
cluster.cds_ingress_app-mesh_appmesh-gateway_prod_self_redirect_http_15001.external.upstream_rq_2xx: 4071688
cluster.cds_ingress_app-mesh_appmesh-gateway_prod_self_redirect_http_15001.external.upstream_rq_404: 33957
cluster.cds_ingress_app-mesh_appmesh-gateway_prod_self_redirect_http_15001.external.upstream_rq_4xx: 33957
cluster.cds_ingress_app-mesh_appmesh-gateway_prod_self_redirect_http_15001.external.upstream_rq_500: 49
cluster.cds_ingress_app-mesh_appmesh-gateway_prod_self_redirect_http_15001.external.upstream_rq_503: 2922
cluster.cds_ingress_app-mesh_appmesh-gateway_prod_self_redirect_http_15001.external.upstream_rq_504: 118
cluster.cds_ingress_app-mesh_appmesh-gateway_prod_self_redirect_http_15001.external.upstream_rq_5xx: 3089
cluster.cds_ingress_app-mesh_appmesh-gateway_prod_self_redirect_http_15001.external.upstream_rq_completed: 4108734
cluster.cds_ingress_app-mesh_appmesh-gateway_prod_self_redirect_http_15001.http1.dropped_headers_with_underscores: 0
cluster.cds_ingress_app-mesh_appmesh-gateway_prod_self_redirect_http_15001.http1.metadata_not_supported_error: 0
cluster.cds_ingress_app-mesh_appmesh-gateway_prod_self_redirect_http_15001.http1.requests_rejected_with_underscores_in_headers: 0
cluster.cds_ingress_app-mesh_appmesh-gateway_prod_self_redirect_http_15001.http1.response_flood: 0
cluster.cds_ingress_app-mesh_appmesh-gateway_prod_self_redirect_http_15001.internal.upstream_rq_200: 277402
cluster.cds_ingress_app-mesh_appmesh-gateway_prod_self_redirect_http_15001.internal.upstream_rq_2xx: 277402
cluster.cds_ingress_app-mesh_appmesh-gateway_prod_self_redirect_http_15001.internal.upstream_rq_500: 44
cluster.cds_ingress_app-mesh_appmesh-gateway_prod_self_redirect_http_15001.internal.upstream_rq_503: 157
cluster.cds_ingress_app-mesh_appmesh-gateway_prod_self_redirect_http_15001.internal.upstream_rq_504: 11
cluster.cds_ingress_app-mesh_appmesh-gateway_prod_self_redirect_http_15001.internal.upstream_rq_5xx: 212
cluster.cds_ingress_app-mesh_appmesh-gateway_prod_self_redirect_http_15001.internal.upstream_rq_completed: 277614
cluster.cds_ingress_app-mesh_appmesh-gateway_prod_self_redirect_http_15001.lb_healthy_panic: 0
cluster.cds_ingress_app-mesh_appmesh-gateway_prod_self_redirect_http_15001.lb_local_cluster_not_ok: 0
cluster.cds_ingress_app-mesh_appmesh-gateway_prod_self_redirect_http_15001.lb_recalculate_zone_structures: 0
cluster.cds_ingress_app-mesh_appmesh-gateway_prod_self_redirect_http_15001.lb_subsets_active: 0
cluster.cds_ingress_app-mesh_appmesh-gateway_prod_self_redirect_http_15001.lb_subsets_created: 0
cluster.cds_ingress_app-mesh_appmesh-gateway_prod_self_redirect_http_15001.lb_subsets_fallback: 0
cluster.cds_ingress_app-mesh_appmesh-gateway_prod_self_redirect_http_15001.lb_subsets_fallback_panic: 0
cluster.cds_ingress_app-mesh_appmesh-gateway_prod_self_redirect_http_15001.lb_subsets_removed: 0
cluster.cds_ingress_app-mesh_appmesh-gateway_prod_self_redirect_http_15001.lb_subsets_selected: 0
cluster.cds_ingress_app-mesh_appmesh-gateway_prod_self_redirect_http_15001.lb_zone_cluster_too_small: 0
cluster.cds_ingress_app-mesh_appmesh-gateway_prod_self_redirect_http_15001.lb_zone_no_capacity_left: 0
cluster.cds_ingress_app-mesh_appmesh-gateway_prod_self_redirect_http_15001.lb_zone_number_differs: 0
cluster.cds_ingress_app-mesh_appmesh-gateway_prod_self_redirect_http_15001.lb_zone_routing_all_directly: 0
cluster.cds_ingress_app-mesh_appmesh-gateway_prod_self_redirect_http_15001.lb_zone_routing_cross_zone: 0
cluster.cds_ingress_app-mesh_appmesh-gateway_prod_self_redirect_http_15001.lb_zone_routing_sampled: 0
cluster.cds_ingress_app-mesh_appmesh-gateway_prod_self_redirect_http_15001.max_host_weight: 0
cluster.cds_ingress_app-mesh_appmesh-gateway_prod_self_redirect_http_15001.membership_change: 1
cluster.cds_ingress_app-mesh_appmesh-gateway_prod_self_redirect_http_15001.membership_degraded: 0
cluster.cds_ingress_app-mesh_appmesh-gateway_prod_self_redirect_http_15001.membership_excluded: 0
cluster.cds_ingress_app-mesh_appmesh-gateway_prod_self_redirect_http_15001.membership_healthy: 1
cluster.cds_ingress_app-mesh_appmesh-gateway_prod_self_redirect_http_15001.membership_total: 1
cluster.cds_ingress_app-mesh_appmesh-gateway_prod_self_redirect_http_15001.original_dst_host_invalid: 0
cluster.cds_ingress_app-mesh_appmesh-gateway_prod_self_redirect_http_15001.retry_or_shadow_abandoned: 0
cluster.cds_ingress_app-mesh_appmesh-gateway_prod_self_redirect_http_15001.update_attempt: 0
cluster.cds_ingress_app-mesh_appmesh-gateway_prod_self_redirect_http_15001.update_empty: 0
cluster.cds_ingress_app-mesh_appmesh-gateway_prod_self_redirect_http_15001.update_failure: 0
cluster.cds_ingress_app-mesh_appmesh-gateway_prod_self_redirect_http_15001.update_no_rebuild: 0
cluster.cds_ingress_app-mesh_appmesh-gateway_prod_self_redirect_http_15001.update_success: 0
cluster.cds_ingress_app-mesh_appmesh-gateway_prod_self_redirect_http_15001.upstream_cx_active: 16
cluster.cds_ingress_app-mesh_appmesh-gateway_prod_self_redirect_http_15001.upstream_cx_close_notify: 0
cluster.cds_ingress_app-mesh_appmesh-gateway_prod_self_redirect_http_15001.upstream_cx_connect_attempts_exceeded: 0
cluster.cds_ingress_app-mesh_appmesh-gateway_prod_self_redirect_http_15001.upstream_cx_connect_fail: 0
cluster.cds_ingress_app-mesh_appmesh-gateway_prod_self_redirect_http_15001.upstream_cx_connect_timeout: 0
cluster.cds_ingress_app-mesh_appmesh-gateway_prod_self_redirect_http_15001.upstream_cx_destroy: 498
cluster.cds_ingress_app-mesh_appmesh-gateway_prod_self_redirect_http_15001.upstream_cx_destroy_local: 492
cluster.cds_ingress_app-mesh_appmesh-gateway_prod_self_redirect_http_15001.upstream_cx_destroy_local_with_active_rq: 0
cluster.cds_ingress_app-mesh_appmesh-gateway_prod_self_redirect_http_15001.upstream_cx_destroy_remote: 6
cluster.cds_ingress_app-mesh_appmesh-gateway_prod_self_redirect_http_15001.upstream_cx_destroy_remote_with_active_rq: 0
cluster.cds_ingress_app-mesh_appmesh-gateway_prod_self_redirect_http_15001.upstream_cx_destroy_with_active_rq: 0
cluster.cds_ingress_app-mesh_appmesh-gateway_prod_self_redirect_http_15001.upstream_cx_http1_total: 514
cluster.cds_ingress_app-mesh_appmesh-gateway_prod_self_redirect_http_15001.upstream_cx_http2_total: 0
cluster.cds_ingress_app-mesh_appmesh-gateway_prod_self_redirect_http_15001.upstream_cx_http3_total: 0
cluster.cds_ingress_app-mesh_appmesh-gateway_prod_self_redirect_http_15001.upstream_cx_idle_timeout: 492
cluster.cds_ingress_app-mesh_appmesh-gateway_prod_self_redirect_http_15001.upstream_cx_max_requests: 0
cluster.cds_ingress_app-mesh_appmesh-gateway_prod_self_redirect_http_15001.upstream_cx_none_healthy: 0
cluster.cds_ingress_app-mesh_appmesh-gateway_prod_self_redirect_http_15001.upstream_cx_overflow: 0
cluster.cds_ingress_app-mesh_appmesh-gateway_prod_self_redirect_http_15001.upstream_cx_pool_overflow: 0
cluster.cds_ingress_app-mesh_appmesh-gateway_prod_self_redirect_http_15001.upstream_cx_protocol_error: 0
cluster.cds_ingress_app-mesh_appmesh-gateway_prod_self_redirect_http_15001.upstream_cx_rx_bytes_buffered: 5664
cluster.cds_ingress_app-mesh_appmesh-gateway_prod_self_redirect_http_15001.upstream_cx_rx_bytes_total: 1923092694
cluster.cds_ingress_app-mesh_appmesh-gateway_prod_self_redirect_http_15001.upstream_cx_total: 514
cluster.cds_ingress_app-mesh_appmesh-gateway_prod_self_redirect_http_15001.upstream_cx_tx_bytes_buffered: 0
cluster.cds_ingress_app-mesh_appmesh-gateway_prod_self_redirect_http_15001.upstream_cx_tx_bytes_total: 11547428789
cluster.cds_ingress_app-mesh_appmesh-gateway_prod_self_redirect_http_15001.upstream_flow_control_backed_up_total: 0
cluster.cds_ingress_app-mesh_appmesh-gateway_prod_self_redirect_http_15001.upstream_flow_control_drained_total: 0
cluster.cds_ingress_app-mesh_appmesh-gateway_prod_self_redirect_http_15001.upstream_flow_control_paused_reading_total: 0
cluster.cds_ingress_app-mesh_appmesh-gateway_prod_self_redirect_http_15001.upstream_flow_control_resumed_reading_total: 0
cluster.cds_ingress_app-mesh_appmesh-gateway_prod_self_redirect_http_15001.upstream_internal_redirect_failed_total: 0
cluster.cds_ingress_app-mesh_appmesh-gateway_prod_self_redirect_http_15001.upstream_internal_redirect_succeeded_total: 0
cluster.cds_ingress_app-mesh_appmesh-gateway_prod_self_redirect_http_15001.upstream_rq_200: 4349090
cluster.cds_ingress_app-mesh_appmesh-gateway_prod_self_redirect_http_15001.upstream_rq_2xx: 4349090
cluster.cds_ingress_app-mesh_appmesh-gateway_prod_self_redirect_http_15001.upstream_rq_404: 33957
cluster.cds_ingress_app-mesh_appmesh-gateway_prod_self_redirect_http_15001.upstream_rq_4xx: 33957
cluster.cds_ingress_app-mesh_appmesh-gateway_prod_self_redirect_http_15001.upstream_rq_500: 93
cluster.cds_ingress_app-mesh_appmesh-gateway_prod_self_redirect_http_15001.upstream_rq_503: 3079
cluster.cds_ingress_app-mesh_appmesh-gateway_prod_self_redirect_http_15001.upstream_rq_504: 129
cluster.cds_ingress_app-mesh_appmesh-gateway_prod_self_redirect_http_15001.upstream_rq_5xx: 3301
cluster.cds_ingress_app-mesh_appmesh-gateway_prod_self_redirect_http_15001.upstream_rq_active: 0
cluster.cds_ingress_app-mesh_appmesh-gateway_prod_self_redirect_http_15001.upstream_rq_cancelled: 0
cluster.cds_ingress_app-mesh_appmesh-gateway_prod_self_redirect_http_15001.upstream_rq_completed: 4386348
cluster.cds_ingress_app-mesh_appmesh-gateway_prod_self_redirect_http_15001.upstream_rq_maintenance_mode: 0
cluster.cds_ingress_app-mesh_appmesh-gateway_prod_self_redirect_http_15001.upstream_rq_max_duration_reached: 0
cluster.cds_ingress_app-mesh_appmesh-gateway_prod_self_redirect_http_15001.upstream_rq_pending_active: 0
cluster.cds_ingress_app-mesh_appmesh-gateway_prod_self_redirect_http_15001.upstream_rq_pending_failure_eject: 0
cluster.cds_ingress_app-mesh_appmesh-gateway_prod_self_redirect_http_15001.upstream_rq_pending_overflow: 0
cluster.cds_ingress_app-mesh_appmesh-gateway_prod_self_redirect_http_15001.upstream_rq_pending_total: 514
cluster.cds_ingress_app-mesh_appmesh-gateway_prod_self_redirect_http_15001.upstream_rq_per_try_idle_timeout: 0
cluster.cds_ingress_app-mesh_appmesh-gateway_prod_self_redirect_http_15001.upstream_rq_per_try_timeout: 0
cluster.cds_ingress_app-mesh_appmesh-gateway_prod_self_redirect_http_15001.upstream_rq_retry: 0
cluster.cds_ingress_app-mesh_appmesh-gateway_prod_self_redirect_http_15001.upstream_rq_retry_backoff_exponential: 0
cluster.cds_ingress_app-mesh_appmesh-gateway_prod_self_redirect_http_15001.upstream_rq_retry_backoff_ratelimited: 0
cluster.cds_ingress_app-mesh_appmesh-gateway_prod_self_redirect_http_15001.upstream_rq_retry_limit_exceeded: 0
cluster.cds_ingress_app-mesh_appmesh-gateway_prod_self_redirect_http_15001.upstream_rq_retry_overflow: 0
cluster.cds_ingress_app-mesh_appmesh-gateway_prod_self_redirect_http_15001.upstream_rq_retry_success: 0
cluster.cds_ingress_app-mesh_appmesh-gateway_prod_self_redirect_http_15001.upstream_rq_rx_reset: 0
cluster.cds_ingress_app-mesh_appmesh-gateway_prod_self_redirect_http_15001.upstream_rq_timeout: 0
cluster.cds_ingress_app-mesh_appmesh-gateway_prod_self_redirect_http_15001.upstream_rq_total: 4386348
cluster.cds_ingress_app-mesh_appmesh-gateway_prod_self_redirect_http_15001.upstream_rq_tx_reset: 0
cluster.cds_ingress_app-mesh_appmesh-gateway_prod_self_redirect_http_15001.version: 0
cluster_manager.active_clusters: 13
cluster_manager.cds.init_fetch_timeout: 0
cluster_manager.cds.update_attempt: 96
cluster_manager.cds.update_failure: 86
cluster_manager.cds.update_rejected: 0
cluster_manager.cds.update_success: 9
cluster_manager.cds.update_time: 1653300787235
cluster_manager.cds.version: 17800499387772728049
cluster_manager.cluster_added: 13
cluster_manager.cluster_modified: 0
cluster_manager.cluster_removed: 0
cluster_manager.cluster_updated: 0
cluster_manager.cluster_updated_via_merge: 0
cluster_manager.update_merge_cancelled: 0
cluster_manager.update_out_of_merge_window: 0
cluster_manager.warming_clusters: 0
control_plane.connected_state: 1
control_plane.pending_requests: 0
control_plane.rate_limit_enforced: 0
envoy.overload_actions.reset_high_memory_stream.count: 0
filesystem.flushed_by_timer: 33956
filesystem.reopen_failed: 0
filesystem.write_buffered: 8823631
filesystem.write_completed: 1085260
filesystem.write_failed: 0
filesystem.write_total_buffered: 53866
grpc.ads.google_grpc_client_creation: 1
grpc.ads.streams_closed_0: 86
grpc.ads.streams_closed_1: 0
grpc.ads.streams_closed_10: 0
grpc.ads.streams_closed_11: 0
grpc.ads.streams_closed_12: 0
grpc.ads.streams_closed_13: 0
grpc.ads.streams_closed_14: 0
grpc.ads.streams_closed_15: 0
grpc.ads.streams_closed_16: 0
grpc.ads.streams_closed_2: 0
grpc.ads.streams_closed_3: 0
grpc.ads.streams_closed_4: 0
grpc.ads.streams_closed_5: 0
grpc.ads.streams_closed_6: 0
grpc.ads.streams_closed_7: 0
grpc.ads.streams_closed_8: 0
grpc.ads.streams_closed_9: 0
grpc.ads.streams_total: 87
http.admin.downstream_cx_active: 2
http.admin.downstream_cx_delayed_close_timeout: 0
http.admin.downstream_cx_destroy: 33962
http.admin.downstream_cx_destroy_active_rq: 0
http.admin.downstream_cx_destroy_local: 0
http.admin.downstream_cx_destroy_local_active_rq: 0
http.admin.downstream_cx_destroy_remote: 33962
http.admin.downstream_cx_destroy_remote_active_rq: 0
http.admin.downstream_cx_drain_close: 0
http.admin.downstream_cx_http1_active: 2
http.admin.downstream_cx_http1_total: 16985
http.admin.downstream_cx_http2_active: 0
http.admin.downstream_cx_http2_total: 0
http.admin.downstream_cx_http3_active: 0
http.admin.downstream_cx_http3_total: 0
http.admin.downstream_cx_idle_timeout: 0
http.admin.downstream_cx_max_duration_reached: 0
http.admin.downstream_cx_max_requests_reached: 0
http.admin.downstream_cx_overload_disable_keepalive: 0
http.admin.downstream_cx_protocol_error: 0
http.admin.downstream_cx_rx_bytes_buffered: 83
http.admin.downstream_cx_rx_bytes_total: 10101576
http.admin.downstream_cx_ssl_active: 0
http.admin.downstream_cx_ssl_total: 0
http.admin.downstream_cx_total: 33964
http.admin.downstream_cx_tx_bytes_buffered: 0
http.admin.downstream_cx_tx_bytes_total: 13155824700
http.admin.downstream_cx_upgrades_active: 0
http.admin.downstream_cx_upgrades_total: 0
http.admin.downstream_flow_control_paused_reading_total: 0
http.admin.downstream_flow_control_resumed_reading_total: 0
http.admin.downstream_rq_1xx: 0
http.admin.downstream_rq_2xx: 50935
http.admin.downstream_rq_3xx: 0
http.admin.downstream_rq_4xx: 0
http.admin.downstream_rq_5xx: 0
http.admin.downstream_rq_active: 1
http.admin.downstream_rq_completed: 50935
http.admin.downstream_rq_failed_path_normalization: 0
http.admin.downstream_rq_header_timeout: 0
http.admin.downstream_rq_http1_total: 50936
http.admin.downstream_rq_http2_total: 0
http.admin.downstream_rq_http3_total: 0
http.admin.downstream_rq_idle_timeout: 0
http.admin.downstream_rq_max_duration_reached: 0
http.admin.downstream_rq_non_relative_path: 0
http.admin.downstream_rq_overload_close: 0
http.admin.downstream_rq_redirected_with_normalized_path: 0
http.admin.downstream_rq_rejected_via_ip_detection: 0
http.admin.downstream_rq_response_before_rq_complete: 0
http.admin.downstream_rq_rx_reset: 0
http.admin.downstream_rq_timeout: 0
http.admin.downstream_rq_too_large: 0
http.admin.downstream_rq_total: 50936
http.admin.downstream_rq_tx_reset: 0
http.admin.downstream_rq_ws_on_non_ws_route: 0
http.admin.rs_too_large: 0
http.async-client.no_cluster: 0
http.async-client.no_route: 0
http.async-client.passthrough_internal_redirect_bad_location: 0
http.async-client.passthrough_internal_redirect_no_route: 0
http.async-client.passthrough_internal_redirect_predicate: 0
http.async-client.passthrough_internal_redirect_too_many_redirects: 0
http.async-client.passthrough_internal_redirect_unsafe_scheme: 0
http.async-client.rq_direct_response: 0
http.async-client.rq_redirect: 0
http.async-client.rq_reset_after_downstream_response_started: 0
http.async-client.rq_total: 0
http.egress.downstream_cx_active: 16
http.egress.downstream_cx_delayed_close_timeout: 0
http.egress.downstream_cx_destroy: 492
http.egress.downstream_cx_destroy_active_rq: 0
http.egress.downstream_cx_destroy_local: 0
http.egress.downstream_cx_destroy_local_active_rq: 0
http.egress.downstream_cx_destroy_remote: 492
http.egress.downstream_cx_destroy_remote_active_rq: 0
http.egress.downstream_cx_drain_close: 0
http.egress.downstream_cx_http1_active: 16
http.egress.downstream_cx_http1_total: 508
http.egress.downstream_cx_http2_active: 0
http.egress.downstream_cx_http2_total: 0
http.egress.downstream_cx_http3_active: 0
http.egress.downstream_cx_http3_total: 0
http.egress.downstream_cx_idle_timeout: 214
http.egress.downstream_cx_max_duration_reached: 0
http.egress.downstream_cx_max_requests_reached: 0
http.egress.downstream_cx_overload_disable_keepalive: 0
http.egress.downstream_cx_protocol_error: 0
http.egress.downstream_cx_rx_bytes_buffered: 50513
http.egress.downstream_cx_rx_bytes_total: 11547428789
http.egress.downstream_cx_ssl_active: 0
http.egress.downstream_cx_ssl_total: 0
http.egress.downstream_cx_total: 508
http.egress.downstream_cx_tx_bytes_buffered: 0
http.egress.downstream_cx_tx_bytes_total: 1923092694
http.egress.downstream_cx_upgrades_active: 0
http.egress.downstream_cx_upgrades_total: 0
http.egress.downstream_flow_control_paused_reading_total: 0
http.egress.downstream_flow_control_resumed_reading_total: 0
http.egress.downstream_rq_1xx: 0
http.egress.downstream_rq_2xx: 4349090
http.egress.downstream_rq_3xx: 0
http.egress.downstream_rq_4xx: 33957
http.egress.downstream_rq_5xx: 3301
http.egress.downstream_rq_active: 0
http.egress.downstream_rq_completed: 4386348
http.egress.downstream_rq_failed_path_normalization: 0
http.egress.downstream_rq_header_timeout: 0
http.egress.downstream_rq_http1_total: 4386348
http.egress.downstream_rq_http2_total: 0
http.egress.downstream_rq_http3_total: 0
http.egress.downstream_rq_idle_timeout: 0
http.egress.downstream_rq_max_duration_reached: 0
http.egress.downstream_rq_non_relative_path: 0
http.egress.downstream_rq_overload_close: 0
http.egress.downstream_rq_redirected_with_normalized_path: 0
http.egress.downstream_rq_rejected_via_ip_detection: 0
http.egress.downstream_rq_response_before_rq_complete: 0
http.egress.downstream_rq_rx_reset: 0
http.egress.downstream_rq_timeout: 0
http.egress.downstream_rq_too_large: 0
http.egress.downstream_rq_total: 4386348
http.egress.downstream_rq_tx_reset: 0
http.egress.downstream_rq_ws_on_non_ws_route: 0
http.egress.no_cluster: 0
http.egress.no_route: 0
http.egress.passthrough_internal_redirect_bad_location: 0
http.egress.passthrough_internal_redirect_no_route: 0
http.egress.passthrough_internal_redirect_predicate: 0
http.egress.passthrough_internal_redirect_too_many_redirects: 0
http.egress.passthrough_internal_redirect_unsafe_scheme: 0
http.egress.rds.rds_egress_http_15001.config_reload: 9
http.egress.rds.rds_egress_http_15001.config_reload_time_ms: 1653300787240
http.egress.rds.rds_egress_http_15001.init_fetch_timeout: 0
http.egress.rds.rds_egress_http_15001.update_attempt: 96
http.egress.rds.rds_egress_http_15001.update_empty: 0
http.egress.rds.rds_egress_http_15001.update_failure: 86
http.egress.rds.rds_egress_http_15001.update_rejected: 0
http.egress.rds.rds_egress_http_15001.update_success: 9
http.egress.rds.rds_egress_http_15001.update_time: 1653300787240
http.egress.rds.rds_egress_http_15001.version: 17800499387772728049
http.egress.rq_direct_response: 0
http.egress.rq_redirect: 0
http.egress.rq_reset_after_downstream_response_started: 0
http.egress.rq_total: 4386348
http.egress.rs_too_large: 0
http.egress.tracing.client_enabled: 0
http.egress.tracing.health_check: 0
http.egress.tracing.not_traceable: 0
http.egress.tracing.random_sampling: 4386348
http.egress.tracing.service_forced: 0
http.egress.user_agent.ios.downstream_cx_destroy_remote_active_rq: 0
http.egress.user_agent.ios.downstream_cx_total: 136
http.egress.user_agent.ios.downstream_rq_total: 136
http.ingress.downstream_cx_active: 1
http.ingress.downstream_cx_delayed_close_timeout: 7
http.ingress.downstream_cx_destroy: 4352384
http.ingress.downstream_cx_destroy_active_rq: 0
http.ingress.downstream_cx_destroy_local: 7
http.ingress.downstream_cx_destroy_local_active_rq: 0
http.ingress.downstream_cx_destroy_remote: 4352377
http.ingress.downstream_cx_destroy_remote_active_rq: 0
http.ingress.downstream_cx_drain_close: 0
http.ingress.downstream_cx_http1_active: 1
http.ingress.downstream_cx_http1_total: 4352385
http.ingress.downstream_cx_http2_active: 0
http.ingress.downstream_cx_http2_total: 0
http.ingress.downstream_cx_http3_active: 0
http.ingress.downstream_cx_http3_total: 0
http.ingress.downstream_cx_idle_timeout: 0
http.ingress.downstream_cx_max_duration_reached: 0
http.ingress.downstream_cx_max_requests_reached: 0
http.ingress.downstream_cx_overload_disable_keepalive: 0
http.ingress.downstream_cx_protocol_error: 0
http.ingress.downstream_cx_rx_bytes_buffered: 253
http.ingress.downstream_cx_rx_bytes_total: 11011819872
http.ingress.downstream_cx_ssl_active: 0
http.ingress.downstream_cx_ssl_total: 0
http.ingress.downstream_cx_total: 4352385
http.ingress.downstream_cx_tx_bytes_buffered: 0
http.ingress.downstream_cx_tx_bytes_total: 2005905035
http.ingress.downstream_cx_upgrades_active: 0
http.ingress.downstream_cx_upgrades_total: 0
http.ingress.downstream_flow_control_paused_reading_total: 0
http.ingress.downstream_flow_control_resumed_reading_total: 0
http.ingress.downstream_rq_1xx: 0
http.ingress.downstream_rq_2xx: 4349090
http.ingress.downstream_rq_3xx: 0
http.ingress.downstream_rq_4xx: 33957
http.ingress.downstream_rq_5xx: 3301
http.ingress.downstream_rq_active: 0
http.ingress.downstream_rq_completed: 4386348
http.ingress.downstream_rq_failed_path_normalization: 0
http.ingress.downstream_rq_header_timeout: 0
http.ingress.downstream_rq_http1_total: 4386348
http.ingress.downstream_rq_http2_total: 0
http.ingress.downstream_rq_http3_total: 0
http.ingress.downstream_rq_idle_timeout: 0
http.ingress.downstream_rq_max_duration_reached: 0
http.ingress.downstream_rq_non_relative_path: 0
http.ingress.downstream_rq_overload_close: 0
http.ingress.downstream_rq_redirected_with_normalized_path: 0
http.ingress.downstream_rq_rejected_via_ip_detection: 0
http.ingress.downstream_rq_response_before_rq_complete: 0
http.ingress.downstream_rq_rx_reset: 0
http.ingress.downstream_rq_timeout: 0
http.ingress.downstream_rq_too_large: 0
http.ingress.downstream_rq_total: 4386348
http.ingress.downstream_rq_tx_reset: 0
http.ingress.downstream_rq_ws_on_non_ws_route: 0
http.ingress.no_cluster: 0
http.ingress.no_route: 0
http.ingress.passthrough_internal_redirect_bad_location: 0
http.ingress.passthrough_internal_redirect_no_route: 0
http.ingress.passthrough_internal_redirect_predicate: 0
http.ingress.passthrough_internal_redirect_too_many_redirects: 0
http.ingress.passthrough_internal_redirect_unsafe_scheme: 0
http.ingress.rds.rds_ingress_http_8088.config_reload: 1
http.ingress.rds.rds_ingress_http_8088.config_reload_time_ms: 1653134919943
http.ingress.rds.rds_ingress_http_8088.init_fetch_timeout: 0
http.ingress.rds.rds_ingress_http_8088.update_attempt: 96
http.ingress.rds.rds_ingress_http_8088.update_empty: 0
http.ingress.rds.rds_ingress_http_8088.update_failure: 86
http.ingress.rds.rds_ingress_http_8088.update_rejected: 0
http.ingress.rds.rds_ingress_http_8088.update_success: 9
http.ingress.rds.rds_ingress_http_8088.update_time: 1653300787240
http.ingress.rds.rds_ingress_http_8088.version: 17800499387772728049
http.ingress.rq_direct_response: 0
http.ingress.rq_redirect: 0
http.ingress.rq_reset_after_downstream_response_started: 0
http.ingress.rq_total: 4386348
http.ingress.rs_too_large: 0
http.ingress.tracing.client_enabled: 0
http.ingress.tracing.health_check: 0
http.ingress.tracing.not_traceable: 0
http.ingress.tracing.random_sampling: 4386348
http.ingress.tracing.service_forced: 0
http.ingress.user_agent.android.downstream_cx_destroy_remote_active_rq: 0
http.ingress.user_agent.android.downstream_cx_total: 976
http.ingress.user_agent.android.downstream_rq_total: 976
http.ingress.user_agent.ios.downstream_cx_destroy_remote_active_rq: 0
http.ingress.user_agent.ios.downstream_cx_total: 1325725
http.ingress.user_agent.ios.downstream_rq_total: 1325725
http1.dropped_headers_with_underscores: 0
http1.metadata_not_supported_error: 0
http1.requests_rejected_with_underscores_in_headers: 0
http1.response_flood: 0
listener.0.0.0.0_15001.downstream_cx_active: 16
listener.0.0.0.0_15001.downstream_cx_destroy: 492
listener.0.0.0.0_15001.downstream_cx_overflow: 0
listener.0.0.0.0_15001.downstream_cx_overload_reject: 0
listener.0.0.0.0_15001.downstream_cx_total: 508
listener.0.0.0.0_15001.downstream_cx_transport_socket_connect_timeout: 0
listener.0.0.0.0_15001.downstream_global_cx_overflow: 0
listener.0.0.0.0_15001.downstream_pre_cx_active: 0
listener.0.0.0.0_15001.downstream_pre_cx_timeout: 6
listener.0.0.0.0_15001.http.egress.downstream_rq_1xx: 0
listener.0.0.0.0_15001.http.egress.downstream_rq_2xx: 4349090
listener.0.0.0.0_15001.http.egress.downstream_rq_3xx: 0
listener.0.0.0.0_15001.http.egress.downstream_rq_4xx: 33957
listener.0.0.0.0_15001.http.egress.downstream_rq_5xx: 3301
listener.0.0.0.0_15001.http.egress.downstream_rq_completed: 4386348
listener.0.0.0.0_15001.no_filter_chain_match: 0
listener.0.0.0.0_15001.worker_0.downstream_cx_active: 4
listener.0.0.0.0_15001.worker_0.downstream_cx_total: 122
listener.0.0.0.0_15001.worker_1.downstream_cx_active: 3
listener.0.0.0.0_15001.worker_1.downstream_cx_total: 131
listener.0.0.0.0_15001.worker_2.downstream_cx_active: 5
listener.0.0.0.0_15001.worker_2.downstream_cx_total: 131
listener.0.0.0.0_15001.worker_3.downstream_cx_active: 4
listener.0.0.0.0_15001.worker_3.downstream_cx_total: 124
listener.0.0.0.0_8088.downstream_cx_active: 1
listener.0.0.0.0_8088.downstream_cx_destroy: 4352384
listener.0.0.0.0_8088.downstream_cx_overflow: 0
listener.0.0.0.0_8088.downstream_cx_overload_reject: 0
listener.0.0.0.0_8088.downstream_cx_total: 4352385
listener.0.0.0.0_8088.downstream_cx_transport_socket_connect_timeout: 0
listener.0.0.0.0_8088.downstream_global_cx_overflow: 0
listener.0.0.0.0_8088.downstream_pre_cx_active: 0
listener.0.0.0.0_8088.downstream_pre_cx_timeout: 0
listener.0.0.0.0_8088.http.ingress.downstream_rq_1xx: 0
listener.0.0.0.0_8088.http.ingress.downstream_rq_2xx: 4349090
listener.0.0.0.0_8088.http.ingress.downstream_rq_3xx: 0
listener.0.0.0.0_8088.http.ingress.downstream_rq_4xx: 33957
listener.0.0.0.0_8088.http.ingress.downstream_rq_5xx: 3301
listener.0.0.0.0_8088.http.ingress.downstream_rq_completed: 4386348
listener.0.0.0.0_8088.no_filter_chain_match: 0
listener.0.0.0.0_8088.worker_0.downstream_cx_active: 0
listener.0.0.0.0_8088.worker_0.downstream_cx_total: 1089759
listener.0.0.0.0_8088.worker_1.downstream_cx_active: 0
listener.0.0.0.0_8088.worker_1.downstream_cx_total: 1085223
listener.0.0.0.0_8088.worker_2.downstream_cx_active: 0
listener.0.0.0.0_8088.worker_2.downstream_cx_total: 1089488
listener.0.0.0.0_8088.worker_3.downstream_cx_active: 1
listener.0.0.0.0_8088.worker_3.downstream_cx_total: 1087915
listener.admin.downstream_cx_active: 2
listener.admin.downstream_cx_destroy: 33962
listener.admin.downstream_cx_overflow: 0
listener.admin.downstream_cx_overload_reject: 0
listener.admin.downstream_cx_total: 33964
listener.admin.downstream_cx_transport_socket_connect_timeout: 0
listener.admin.downstream_global_cx_overflow: 0
listener.admin.downstream_pre_cx_active: 0
listener.admin.downstream_pre_cx_timeout: 0
listener.admin.http.admin.downstream_rq_1xx: 0
listener.admin.http.admin.downstream_rq_2xx: 50935
listener.admin.http.admin.downstream_rq_3xx: 0
listener.admin.http.admin.downstream_rq_4xx: 0
listener.admin.http.admin.downstream_rq_5xx: 0
listener.admin.http.admin.downstream_rq_completed: 50935
listener.admin.main_thread.downstream_cx_active: 2
listener.admin.main_thread.downstream_cx_total: 33964
listener.admin.no_filter_chain_match: 0
listener_manager.lds.init_fetch_timeout: 0
listener_manager.lds.update_attempt: 96
listener_manager.lds.update_failure: 86
listener_manager.lds.update_rejected: 0
listener_manager.lds.update_success: 9
listener_manager.lds.update_time: 1653300787238
listener_manager.lds.version: 17800499387772728049
listener_manager.listener_added: 2
listener_manager.listener_create_failure: 0
listener_manager.listener_create_success: 8
listener_manager.listener_in_place_updated: 0
listener_manager.listener_modified: 0
listener_manager.listener_removed: 0
listener_manager.listener_stopped: 0
listener_manager.total_filter_chains_draining: 0
listener_manager.total_listeners_active: 2
listener_manager.total_listeners_draining: 0
listener_manager.total_listeners_warming: 0
listener_manager.workers_started: 1
main_thread.watchdog_mega_miss: 0
main_thread.watchdog_miss: 0
runtime.admin_overrides_active: 0
runtime.deprecated_feature_seen_since_process_start: 9
runtime.deprecated_feature_use: 9
runtime.load_error: 0
runtime.load_success: 1
runtime.num_keys: 4
runtime.num_layers: 1
runtime.override_dir_exists: 0
runtime.override_dir_not_exists: 1
server.compilation_settings.fips_mode: 0
server.concurrency: 4
server.days_until_first_cert_expiring: 2147483647
server.debug_assertion_failures: 0
server.dropped_stat_flushes: 0
server.dynamic_unknown_fields: 0
server.envoy_bug_failures: 0
server.hot_restart_epoch: 0
server.hot_restart_generation: 1
server.live: 1
server.main_thread.watchdog_mega_miss: 0
server.main_thread.watchdog_miss: 0
server.memory_allocated: 10664800
server.memory_heap_size: 46137344
server.memory_physical_size: 48080486
server.parent_connections: 0
server.seconds_until_first_ocsp_response_expiring: 0
server.state: 0
server.static_unknown_fields: 0
server.stats_recent_lookups: 9129
server.total_connections: 17
server.uptime: 169791
server.version: 3183589
server.wip_protos: 0
server.worker_0.watchdog_mega_miss: 0
server.worker_0.watchdog_miss: 0
server.worker_1.watchdog_mega_miss: 0
server.worker_1.watchdog_miss: 0
server.worker_2.watchdog_mega_miss: 0
server.worker_2.watchdog_miss: 0
server.worker_3.watchdog_mega_miss: 0
server.worker_3.watchdog_miss: 0
tls_inspector.alpn_found: 0
tls_inspector.alpn_not_found: 0
tls_inspector.client_hello_too_large: 0
tls_inspector.connection_closed: 102101
tls_inspector.read_error: 0
tls_inspector.sni_found: 0
tls_inspector.sni_not_found: 0
tls_inspector.tls_found: 0
tls_inspector.tls_not_found: 4352893
vhost.app-100032265.prod.vcluster.other.upstream_rq_retry: 0
vhost.app-100032265.prod.vcluster.other.upstream_rq_retry_limit_exceeded: 0
vhost.app-100032265.prod.vcluster.other.upstream_rq_retry_overflow: 0
vhost.app-100032265.prod.vcluster.other.upstream_rq_retry_success: 0
vhost.app-100032265.prod.vcluster.other.upstream_rq_timeout: 0
vhost.app-100032265.prod.vcluster.other.upstream_rq_total: 0
vhost.app-100035323.prod.vcluster.other.upstream_rq_retry: 0
vhost.app-100035323.prod.vcluster.other.upstream_rq_retry_limit_exceeded: 0
vhost.app-100035323.prod.vcluster.other.upstream_rq_retry_overflow: 0
vhost.app-100035323.prod.vcluster.other.upstream_rq_retry_success: 0
vhost.app-100035323.prod.vcluster.other.upstream_rq_timeout: 0
vhost.app-100035323.prod.vcluster.other.upstream_rq_total: 0
vhost.app-100035399.prod.vcluster.other.upstream_rq_retry: 0
vhost.app-100035399.prod.vcluster.other.upstream_rq_retry_limit_exceeded: 0
vhost.app-100035399.prod.vcluster.other.upstream_rq_retry_overflow: 0
vhost.app-100035399.prod.vcluster.other.upstream_rq_retry_success: 0
vhost.app-100035399.prod.vcluster.other.upstream_rq_timeout: 0
vhost.app-100035399.prod.vcluster.other.upstream_rq_total: 0
vhost.app-100035407.prod.vcluster.other.upstream_rq_retry: 0
vhost.app-100035407.prod.vcluster.other.upstream_rq_retry_limit_exceeded: 0
vhost.app-100035407.prod.vcluster.other.upstream_rq_retry_overflow: 0
vhost.app-100035407.prod.vcluster.other.upstream_rq_retry_success: 0
vhost.app-100035407.prod.vcluster.other.upstream_rq_timeout: 0
vhost.app-100035407.prod.vcluster.other.upstream_rq_total: 0
vhost.default_backend.vcluster.other.upstream_rq_retry: 0
vhost.default_backend.vcluster.other.upstream_rq_retry_limit_exceeded: 0
vhost.default_backend.vcluster.other.upstream_rq_retry_overflow: 0
vhost.default_backend.vcluster.other.upstream_rq_retry_success: 0
vhost.default_backend.vcluster.other.upstream_rq_timeout: 0
vhost.default_backend.vcluster.other.upstream_rq_total: 0
vhost.ibumarketadsmatchservice-19816.prod.vcluster.other.upstream_rq_retry: 0
vhost.ibumarketadsmatchservice-19816.prod.vcluster.other.upstream_rq_retry_limit_exceeded: 0
vhost.ibumarketadsmatchservice-19816.prod.vcluster.other.upstream_rq_retry_overflow: 0
vhost.ibumarketadsmatchservice-19816.prod.vcluster.other.upstream_rq_retry_success: 0
vhost.ibumarketadsmatchservice-19816.prod.vcluster.other.upstream_rq_timeout: 0
vhost.ibumarketadsmatchservice-19816.prod.vcluster.other.upstream_rq_total: 0
vhost.ibuplatformaffiliateapi-14524.prod.vcluster.other.upstream_rq_retry: 0
vhost.ibuplatformaffiliateapi-14524.prod.vcluster.other.upstream_rq_retry_limit_exceeded: 0
vhost.ibuplatformaffiliateapi-14524.prod.vcluster.other.upstream_rq_retry_overflow: 0
vhost.ibuplatformaffiliateapi-14524.prod.vcluster.other.upstream_rq_retry_success: 0
vhost.ibuplatformaffiliateapi-14524.prod.vcluster.other.upstream_rq_timeout: 0
vhost.ibuplatformaffiliateapi-14524.prod.vcluster.other.upstream_rq_total: 0
vhost.self_redirect.vcluster.other.upstream_rq_retry: 0
vhost.self_redirect.vcluster.other.upstream_rq_retry_limit_exceeded: 0
vhost.self_redirect.vcluster.other.upstream_rq_retry_overflow: 0
vhost.self_redirect.vcluster.other.upstream_rq_retry_success: 0
vhost.self_redirect.vcluster.other.upstream_rq_timeout: 0
vhost.self_redirect.vcluster.other.upstream_rq_total: 0
workers.watchdog_mega_miss: 0
workers.watchdog_miss: 0
cluster.cds_egress_app-mesh_app-100030741-canary_prod_http_8080.upstream_cx_connect_ms: No recorded values
cluster.cds_egress_app-mesh_app-100030741-canary_prod_http_8080.upstream_cx_length_ms: No recorded values
cluster.cds_egress_app-mesh_app-100030741-primary_prod_http_8080.upstream_cx_connect_ms: No recorded values
cluster.cds_egress_app-mesh_app-100030741-primary_prod_http_8080.upstream_cx_length_ms: No recorded values
cluster.cds_egress_app-mesh_app-100032265-canary_prod_http_8080.upstream_cx_connect_ms: No recorded values
cluster.cds_egress_app-mesh_app-100032265-canary_prod_http_8080.upstream_cx_length_ms: No recorded values
cluster.cds_egress_app-mesh_app-100032265-primary_prod_http_8080.external.upstream_rq_time: P0(1.0,0.0) P25(1.025,1.0220436352221) P50(1.05,1.0487082090723592) P75(1.075,1.075372782922618) P90(1.09,1.0913715272327735) P95(1.095,1.0967044420028254) P99(1.099,9.018068965517234) P99.5(1.0995,18.77846153846174) P99.9(1.0999,26.27911111111098) P100(1.1,3400.0)
cluster.cds_egress_app-mesh_app-100032265-primary_prod_http_8080.upstream_cx_connect_ms: P0(nan,0.0) P25(nan,0.0) P50(nan,0.0) P75(nan,0.0) P90(nan,0.0) P95(nan,0.0) P99(nan,0.0) P99.5(nan,0.0) P99.9(nan,0.0) P100(nan,0.0)
cluster.cds_egress_app-mesh_app-100032265-primary_prod_http_8080.upstream_cx_length_ms: P0(nan,9900.0) P25(nan,94250.0) P50(nan,310000.0) P75(nan,865000.0) P90(nan,2930000.000000001) P95(nan,4629999.999999995) P99(nan,11829999.999999983) P99.5(nan,14829999.999999983) P99.9(nan,25565999.999999974) P100(nan,26000000.0)
cluster.cds_egress_app-mesh_app-100032265-primary_prod_http_8080.upstream_rq_time: P0(1.0,0.0) P25(1.025,1.0220436352221) P50(1.05,1.0487082090723592) P75(1.075,1.075372782922618) P90(1.09,1.0913715272327735) P95(1.095,1.0967044420028254) P99(1.099,9.018068965517234) P99.5(1.0995,18.77846153846174) P99.9(1.0999,26.27911111111098) P100(1.1,3400.0)
cluster.cds_egress_app-mesh_app-100035323-canary_prod_http_8080.upstream_cx_connect_ms: No recorded values
cluster.cds_egress_app-mesh_app-100035323-canary_prod_http_8080.upstream_cx_length_ms: No recorded values
cluster.cds_egress_app-mesh_app-100035323-primary_prod_http_8080.upstream_cx_connect_ms: No recorded values
cluster.cds_egress_app-mesh_app-100035323-primary_prod_http_8080.upstream_cx_length_ms: No recorded values
cluster.cds_egress_app-mesh_app-100035399-canary_prod_http_8080.upstream_cx_connect_ms: No recorded values
cluster.cds_egress_app-mesh_app-100035399-canary_prod_http_8080.upstream_cx_length_ms: No recorded values
cluster.cds_egress_app-mesh_app-100035399-primary_prod_http_8080.upstream_cx_connect_ms: No recorded values
cluster.cds_egress_app-mesh_app-100035399-primary_prod_http_8080.upstream_cx_length_ms: No recorded values
cluster.cds_egress_app-mesh_ibumarketadsmatchservice-19816-canary_prod_http_8080.external.upstream_rq_time: P0(nan,2.0) P25(nan,4.062862796833773) P50(nan,6.031196054254007) P75(nan,8.033276450511945) P90(nan,13.557142857142853) P95(nan,22.719047619047593) P99(nan,98.80999999999995) P99.5(nan,283.100000000004) P99.9(nan,1835.3999999999967) P100(nan,2900.0)
cluster.cds_egress_app-mesh_ibumarketadsmatchservice-19816-canary_prod_http_8080.internal.upstream_rq_time: P0(nan,3.0) P25(nan,4.018992248062015) P50(nan,5.002222222222223) P75(nan,6.040217391304348) P90(nan,11.200000000000017) P95(nan,21.69999999999999) P99(nan,157.4000000000001) P99.5(nan,228.70000000000007) P99.9(nan,1357.4000000000012) P100(nan,1400.0)
cluster.cds_egress_app-mesh_ibumarketadsmatchservice-19816-canary_prod_http_8080.upstream_cx_connect_ms: P0(nan,0.0) P25(nan,0.0) P50(nan,0.0) P75(nan,0.0) P90(nan,0.0) P95(nan,0.0) P99(nan,1.077) P99.5(nan,1.0885000000000002) P99.9(nan,1.0977000000000001) P100(nan,1.1)
cluster.cds_egress_app-mesh_ibumarketadsmatchservice-19816-canary_prod_http_8080.upstream_cx_length_ms: P0(nan,15000.0) P25(nan,352750.0) P50(nan,358500.0) P75(nan,412499.99999999994) P90(nan,495400.00000000006) P95(nan,497700.00000000006) P99(nan,499540.00000000006) P99.5(nan,499770.00000000006) P99.9(nan,499954.00000000006) P100(nan,500000.00000000006)
cluster.cds_egress_app-mesh_ibumarketadsmatchservice-19816-canary_prod_http_8080.upstream_rq_time: P0(nan,2.0) P25(nan,4.056482525366404) P50(nan,6.019253208868145) P75(nan,8.016611295681063) P90(nan,13.436065573770497) P95(nan,22.704761904761913) P99(nan,99.17999999999984) P99.5(nan,281.8000000000029) P99.9(nan,1821.2000000000141) P100(nan,2900.0)
cluster.cds_egress_app-mesh_ibumarketadsmatchservice-19816-primary_prod_http_8080.external.upstream_rq_time: P0(1.0,1.0) P25(3.043661971830986,3.0173005675888924) P50(3.1,3.0584060169513094) P75(4.093023255813954,3.0995114663137264) P90(7.016666666666667,7.009256257237018) P95(9.1,12.174262542955322) P99(31.200000000000003,24.85297527706738) P99.5(31.599999999999994,29.584275862069003) P99.9(31.92,128.9431828978602) P100(32.0,10000.0)
cluster.cds_egress_app-mesh_ibumarketadsmatchservice-19816-primary_prod_http_8080.internal.upstream_rq_time: P0(2.0,1.0) P25(3.01875,3.017443884401325) P50(3.0625,3.054934545336423) P75(5.0125,3.0924252062715203) P90(5.065,7.068905908096281) P95(5.0825,12.365060093205782) P99(5.0965,22.19343347639488) P99.5(5.09825,26.729669811320676) P99.9(5.0996500000000005,40.47405263157807) P100(5.1,9800.0)
cluster.cds_egress_app-mesh_ibumarketadsmatchservice-19816-primary_prod_http_8080.upstream_cx_connect_ms: P0(nan,0.0) P25(nan,0.0) P50(nan,0.0) P75(nan,0.0)P90(nan,0.0) P95(nan,1.0549180327868852) P99(nan,2.0712500000000005) P99.5(nan,3.0616666666666674) P99.9(nan,10.169999999999959) P100(nan,11.0)
cluster.cds_egress_app-mesh_ibumarketadsmatchservice-19816-primary_prod_http_8080.upstream_cx_length_ms: P0(nan,990.0) P25(nan,998.7215477996965) P50(nan,1059.599027946537) P75(nan,5044.948630136986) P90(nan,3644745.0980392154) P95(nan,3689823.529411765) P99(nan,25504999.99999988) P99.5(nan,46752500.00000005) P99.9(nan,80701000.00000001) P100(nan,90000000.0)
cluster.cds_egress_app-mesh_ibumarketadsmatchservice-19816-primary_prod_http_8080.upstream_rq_time: P0(1.0,1.0) P25(3.0423333333333336,3.0173128848600244) P50(3.098,3.058107663559403) P75(4.09360465116279,3.0989024422587823) P90(7.005,7.011589352961315) P95(9.065000000000001,12.193492287155145) P99(31.165000000000006,24.71263688475983) P99.5(31.582499999999996,29.339922969187562) P99.9(31.9165,126.35210153482933) P100(32.0,10000.0)
cluster.cds_egress_app-mesh_ibuplatformaffiliateapi-14524-canary_prod_http_8080.upstream_cx_connect_ms: No recorded values
cluster.cds_egress_app-mesh_ibuplatformaffiliateapi-14524-canary_prod_http_8080.upstream_cx_length_ms: No recorded values
cluster.cds_egress_app-mesh_ibuplatformaffiliateapi-14524-primary_prod_http_8080.external.upstream_rq_time: P0(1.0,1.0) P25(1.0351485148514852,1.032650008193971) P50(1.0702970297029704,1.0653000163879416) P75(2.014102564102564,1.0979500245819125) P90(2.0687179487179486,2.0642441219008854) P95(2.086923076923077,2.0881616541568295) P99(3.058000000000001,6.024024797487188) P99.5(5.028999999999999,6.093191105967929) P99.9(5.085800000000001,19.01027272727383) P100(5.1,750.0)
cluster.cds_egress_app-mesh_ibuplatformaffiliateapi-14524-primary_prod_http_8080.internal.upstream_rq_time: P0(nan,1.0) P25(nan,1.03) P50(nan,1.06) P75(nan,1.09) P90(nan,2.0533333333333332) P95(nan,2.0933333333333333) P99(nan,4.076) P99.5(nan,4.088) P99.9(nan,4.0976) P100(nan,4.1)
cluster.cds_egress_app-mesh_ibuplatformaffiliateapi-14524-primary_prod_http_8080.upstream_cx_connect_ms: P0(nan,0.0) P25(nan,0.0) P50(nan,0.0) P75(nan,0.0) P90(nan,1.046) P95(nan,1.083) P99(nan,3.063) P99.5(nan,3.0814999999999997) P99.9(nan,3.0963000000000003) P100(nan,3.1)
cluster.cds_egress_app-mesh_ibuplatformaffiliateapi-14524-primary_prod_http_8080.upstream_cx_length_ms: P0(nan,15000.0) P25(nan,3650000.0) P50(nan,4300000.0) P75(nan,9450000.0) P90(nan,17400000.000000004) P95(nan,21700000.0) P99(nan,29740000.0) P99.5(nan,29870000.0) P99.9(nan,29974000.0) P100(nan,30000000.0)
cluster.cds_egress_app-mesh_ibuplatformaffiliateapi-14524-primary_prod_http_8080.upstream_rq_time: P0(1.0,1.0) P25(1.0351485148514852,1.032649925476211) P50(1.0702970297029704,1.0652998509524219) P75(2.014102564102564,1.0979497764286328) P90(2.0687179487179486,2.0642439347860884) P95(2.086923076923077,2.0881617428486496) P99(3.058000000000001,6.024020829889238) P99.5(5.028999999999999,6.093189122168954) P99.9(5.085800000000001,19.009181818184018) P100(5.1,750.0)
cluster.cds_ingress_app-mesh_appmesh-gateway_prod_self_redirect_http_15001.external.upstream_rq_time: P0(1.0,1.0) P25(2.0383177570093456,3.006821652908589) P50(3.0140845070422535,3.058425962349539) P75(4.075,4.038239950124115) P90(6.005454545454546,6.080137074867902) P95(7.08,11.887640259415578) P99(15.95999999999998,24.073976911976935) P99.5(31.24000000000001,29.683882378472237) P99.9(31.848000000000013,149.38917539267146) P100(32.0,11000.0)
cluster.cds_ingress_app-mesh_appmesh-gateway_prod_self_redirect_http_15001.internal.upstream_rq_time: P0(3.0,1.0) P25(3.058333333333333,3.038612681206665) P50(4.025,3.077959543503773) P75(5.025,4.053480702184691) P90(6.03,8.020957661290321) P95(6.0649999999999995,12.801542989653944) P99(6.093,23.354771573604133)P99.5(6.0965,27.948482905982935) P99.9(6.0993,67.46300000000822) P100(6.1,11000.0)
cluster.cds_ingress_app-mesh_appmesh-gateway_prod_self_redirect_http_15001.upstream_cx_connect_ms: P0(nan,0.0) P25(nan,0.0) P50(nan,0.0) P75(nan,0.0) P90(nan,0.0) P95(nan,1.0795652173913042) P99(nan,2.088111111111111) P99.5(nan,3.0143333333333335) P99.9(nan,3.0828666666666664) P100(nan,3.1)
cluster.cds_ingress_app-mesh_appmesh-gateway_prod_self_redirect_http_15001.upstream_cx_length_ms: P0(nan,14000.0) P25(nan,3633380.2816901407) P50(nan,3668450.704225352) P75(nan,4422000.0) P90(nan,16099999.999999994) P95(nan,29699999.99999999) P99(nan,72019999.99999999) P99.5(nan,91509999.99999999) P99.9(nan,105020000.00000009) P100(nan,110000000.0)
cluster.cds_ingress_app-mesh_appmesh-gateway_prod_self_redirect_http_15001.upstream_rq_time: P0(1.0,1.0) P25(2.0399532710280375,3.0094095172078967) P50(3.0182432432432433,3.060016041689934) P75(4.078409090909091,4.03974196054733) P90(6.0075,6.081804386549366) P95(7.074166666666667,11.95779825126059) P99(15.889999999999986,24.03443112176918) P99.5(31.222499999999997,29.558283279220916) P99.9(31.84450000000001,148.29730220492954) P100(32.0,11000.0)
cluster_manager.cds.update_duration: P0(nan,0.0) P25(nan,0.0) P50(nan,0.0) P75(nan,0.0) P90(nan,13.1) P95(nan,13.549999999999999) P99(nan,13.91) P99.5(nan,13.955) P99.9(nan,13.991) P100(nan,14.0)
http.admin.downstream_cx_length_ms: P0(0.0,0.0) P25(0.0,0.0) P50(0.0,2.000059998800024) P75(2.05,2.0510019799604007) P90(2.08,2.081567168656627) P95(2.09,2.091755564888702) P99(2.098,2.0999062818743623) P99.5(2.099,3.05448409893993) P99.9(2.0998,4.041400000000003) P100(2.1,879999.9999999999)
http.admin.downstream_rq_time: P0(2.0,0.0) P25(2.05,2.0552172760996292) P50(2.1,15.472178507194245) P75(19.5,17.949607548430194) P90(19.8,19.321118755608733) P95(19.9,20.23757497857755) P99(19.98,22.659392014519057) P99.5(19.99,22.8904945553539) P99.9(19.998,23.92294444444447) P100(20.0,38.0)
http.egress.downstream_cx_length_ms: P0(nan,3600000.0) P25(nan,3634647.8873239434) P50(nan,3669295.7746478873) P75(nan,4428000.0) P90(nan,16400000.000000006) P95(nan,29799999.999999993) P99(nan,72079999.99999999) P99.5(nan,91540000.00000001) P99.9(nan,105079999.99999982) P100(nan,110000000.0)
http.egress.downstream_rq_time: P0(1.0,0.0) P25(2.000704225352113,3.000075741829494) P50(3.009333333333333,3.047658772535418) P75(4.025675675675676,3.0952418032413425) P90(5.095,6.063754737214434) P95(7.041666666666667,11.74336073367112) P99(15.899999999999977,23.774528795811406) P99.5(31.224999999999994,29.316057017544008) P99.9(31.845,148.0518783068792) P100(32.0,11000.0)
http.egress.rds.rds_egress_http_15001.update_duration: P0(nan,1.0) P25(nan,1.025) P50(nan,1.05) P75(nan,1.075) P90(nan,1.09) P95(nan,1.095) P99(nan,1.099) P99.5(nan,1.0995) P99.9(nan,1.0999) P100(nan,1.1)
http.egress.user_agent.ios.downstream_cx_length_ms: P0(nan,3600000.0) P25(nan,3635106.3829787234) P50(nan,3670212.765957447) P75(nan,6950000.0) P90(nan,21799999.999999996) P95(nan,47399999.99999999) P99(nan,69840000.0) P99.5(nan,91340000.0) P99.9(nan,91868000.0) P100(nan,92000000.0)
http.ingress.downstream_cx_length_ms: P0(2.0,1.0) P25(3.04453125,4.016042704988579) P50(4.060869565217391,4.098696623511976) P75(5.087068965517242,5.0869566329451255) P90(7.0875,8.036492270395316) P95(9.03,13.393543493188965) P99(16.899999999999977,25.32678497485961) P99.5(32.224999999999994,31.00438400743826) P99.9(32.845,150.64532567049338) P100(33.0,879999.9999999999)
http.ingress.downstream_rq_time: P0(1.0,1.0) P25(2.0518,3.014656273915426) P50(3.0296610169491527,3.076407388490412) P75(4.097972972972973,4.0675015017168885) P90(6.022307692307693,6.092430411515358) P95(7.090833333333333,12.200154059227208) P99(15.889999999999986,24.158241143567352) P99.5(31.222499999999997,29.72537008481123) P99.9(31.84450000000001,148.4579743589752) P100(32.0,11000.0)
http.ingress.rds.rds_ingress_http_8088.update_duration: P0(nan,0.0) P25(nan,0.0) P50(nan,0.0) P75(nan,0.0) P90(nan,4.01) P95(nan,4.055) P99(nan,4.091) P99.5(nan,4.0955) P99.9(nan,4.0991) P100(nan,4.1)
http.ingress.user_agent.android.downstream_cx_length_ms: P0(3.0,2.0) P25(3.025,2.0838487972508593) P50(3.05,3.0480487804878047) P75(3.075,4.013362068965518)P90(3.09,4.076465517241379) P95(3.095,4.0975) P99(3.099,8.0248) P99.5(3.0995,9.056000000000001) P99.9(3.0999,140.24) P100(3.1,150.0)
http.ingress.user_agent.ios.downstream_cx_length_ms: P0(3.0,2.0) P25(4.072727272727272,4.058431164943404) P50(5.06,5.030753251260693) P75(7.011111111111111,5.098417906943508) P90(8.07,10.617400793650784) P95(11.699999999999996,14.453390714658312) P99(32.28,26.731525204653114) P99.5(32.64,30.27848526703504) P99.9(32.928,56.70566666666701) P100(33.0,11000.0)
listener.0.0.0.0_15001.downstream_cx_length_ms: P0(nan,3600000.0) P25(nan,3634647.8873239434) P50(nan,3669295.7746478873) P75(nan,4428000.0) P90(nan,16400000.000000006) P95(nan,29799999.999999993) P99(nan,72079999.99999999) P99.5(nan,91540000.00000001) P99.9(nan,105079999.99999982) P100(nan,110000000.0)
listener.0.0.0.0_8088.downstream_cx_length_ms: P0(2.0,1.0) P25(3.042063492063492,4.0145679120410716) P50(4.060294117647059,4.0973874158449375) P75(5.085593220338983,5.086013613560341) P90(7.08235294117647,8.034672148209825) P95(9.03,13.380818700369083) P99(16.899999999999977,25.314193738925084) P99.5(32.224999999999994,30.990860798759094) P99.9(32.845,150.62616858237078) P100(33.0,879999.9999999999)
listener.admin.downstream_cx_length_ms: P0(0.0,0.0) P25(0.0,0.0) P50(0.0,2.0000539665407446) P75(2.05,2.0509654014511005) P90(2.08,2.0815122623973137) P95(2.09,2.0916945493793846) P99(2.098,2.0998403789650415) P99.5(2.099,3.0524505494505503) P99.9(2.0998,4.037737500000003) P100(2.1,879999.9999999999)
listener_manager.lds.update_duration: P0(nan,0.0) P25(nan,0.0) P50(nan,0.0) P75(nan,0.0) P90(nan,11.1) P95(nan,11.549999999999999) P99(nan,11.91) P99.5(nan,11.955) P99.9(nan,11.991) P100(nan,12.0)
server.initialization_time_ms: P0(nan,220.00000000000003) P25(nan,222.50000000000003) P50(nan,225.00000000000003) P75(nan,227.50000000000003) P90(nan,229.00000000000003) P95(nan,229.50000000000003) P99(nan,229.90000000000003) P99.5(nan,229.95000000000002) P99.9(nan,229.99000000000004) P100(nan,230.00000000000003)
```