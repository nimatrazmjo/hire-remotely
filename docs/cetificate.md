# Add TLS certificate
Add [lets encrypt](https://letsencrypt.org/) certificate with auto renewal.
## Deploy Cert manager
---
- Create namespace as `cert-manager` using `kubectl create ns cert-manager`.
- Run `kubectl apply --validate=false -f cert-manager.yaml`.
- To see all the resource of `cert-manager` run `kubectl -n cert-manager get all`.

## Add lets encrypt certificate
---
### issuer
issuer is YAML file will deploy to define certificate authority.

- Run `kubectl apply -f cert-issuer-nginx-ingress.yaml` to create [lets encrypt](https://letsencrypt.org/) issuer for our cluster.
- Run `kubectl describe clusterissuer letsencrypt-cluster-issuer` to describe the clusterissuer to see the ACM message and status.

### certificate
- Run `kubectl apply -f certificate.yaml`
- Run `kubectl describe certificate test-app` to check the details of certificate.
- Run `kubectl get secrets` to check if the new secret has been created for certificate.
